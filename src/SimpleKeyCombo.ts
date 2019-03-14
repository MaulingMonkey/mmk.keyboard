/* Copyright 2017 MaulingMonkey

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

namespace mmk.keyboard {
	/**
	 * Represents a set of keyboard modifier key states.  All values are tristate - e.g.:
	 * ```ts
	 * modifiers.alt === true      // Means Alt is required
	 * modifiers.alt === false     // Means Alt is forbidden
	 * modifiers.alt === undefined // Means Alt is ignored and may be held or not
	 * ```
	 */
	export interface SimpleKeyModifiers {
		/** The `Alt` key, or `Option` key on Mac style keyboards. */
		alt?:    boolean;

		/** The `Shift` key. */
		shift?:  boolean;

		/** The `Control` key. */
		ctrl?:   boolean;

		/** The `Windows` key, or `Command` key on Mac style keyboards. */
		meta?:   boolean;
	}

	/**
	 * Describes a simple key combination that requires no external state tracking (other held keys, keys within N
	 * milliseconds, etc.) to fire.  For example, `Alt+F4` would possibly be represented by:
	 * 
	 * ```js
	 * { mmkKey: "F4", alt: true }
	 * ```
	 * 
	 * Or if you wanted *only* `Alt+F4` and to exclude `Alt+Ctrl+F4` and other modifier combinations:
	 * 
	 * ```js
	 * { mmkKey: "F4", alt: true, shift: false, ctrl: false, meta: false }
	 * ```
	 */
	export interface SimpleKeyCombo extends SimpleKeyModifiers {
		/** What [[KeyboardEvent.mmkCode]] is required for this simple key combination to match. */
		mmkCode?: string;

		/** What [[KeyboardEvent.mmkKey]] is required for this simple key combination to match. */
		mmkKey?:  string;
	}

	/**
	 * Parse a human-readable string like `"Ctrl+Shift+B"` and turn it into a [[SimpleKeyCombo]], asserting if it fails.
	 * Use [[tryParseSimpleKeyCombo]] instead if you're parsing user input, which will return `undefined` if it fails.
	 * The behavior of any unspecified keys on matching the combination is controlled by `modifierDefaults`.
	 * `modifierDefaults` defaults to all false, which means e.g. `"Ctrl+Shift+B"` won't match `Ctrl+Alt+Shift+B`.
	 * 
	 * Additionally, you can use `?` to ignore a modifier (e.g. `"?Ctrl+Shift+B"` will ignore if `Ctrl` is held or not),
	 * or use `!` to specify a modifier *cannot* be held (e.g. `"!Ctrl+Shift+B"` demands `Ctrl` is not held, ignoring
	 * `modifierDefaults.ctrl`)
	 */
	export function parseSimpleKeyCombo(desc: string, modifierDefaults: SimpleKeyModifiers = { alt: false, shift: false, ctrl: false, meta: false }): SimpleKeyCombo {
		let r = tryParseSimpleKeyCombo(desc, modifierDefaults);
		console.assert(!!r, "parseSimpleKeyCombo failed to parse key combination:", desc);
		return r;
	}

	/**
	 * Parse a human-readable string like `"Ctrl+Shift+B"` and turn it into a [[SimpleKeyCombo]], or returns `undefined`.
	 * Use [[parseSimpleKeyCombo]] instead if you're parsing hardcoded strings, which will assert if it fails.
	 * The behavior of any unspecified keys on matching the combination is controlled by `modifierDefaults`.
	 * `modifierDefaults` defaults to all false, which means e.g. `"Ctrl+Shift+B"` won't match `Ctrl+Alt+Shift+B`.
	 * 
	 * Additionally, you can use `?` to ignore a modifier (e.g. `"?Ctrl+Shift+B"` will ignore if `Ctrl` is held or not),
	 * or use `!` to specify a modifier *cannot* be held (e.g. `"!Ctrl+Shift+B"` demands `Ctrl` is not held, ignoring
	 * `modifierDefaults.ctrl`)
	 */
	export function tryParseSimpleKeyCombo(description: string, modifierDefaults: SimpleKeyModifiers = { alt: false, shift: false, ctrl: false, meta: false }): SimpleKeyCombo {
		if (description === undefined || description === null || description === "") return undefined;

		var skc = {
			mmkCode: undefined,
			mmkKey:  undefined,
			alt:     modifierDefaults.alt,
			shift:   modifierDefaults.shift,
			ctrl:    modifierDefaults.ctrl,
			meta:    modifierDefaults.meta
		};

		let remaining = description;
		while (remaining.length > 0) {
			let nextSplit = remaining.indexOf('+', 1);
			let fragment = nextSplit === -1 ? remaining : remaining.substr(0, nextSplit); // Everything before "+"
			remaining    = nextSplit === -1 ? ""        : remaining.substr(nextSplit+1);  // Everything after (skipping) "+"

			if ((nextSplit !== -1) && (remaining.length === 0)) { console.warn("Malformed simple key combo ends with combining '+':", description); return undefined; }
			console.assert(fragment.length > 0, "BUG: Should be impossible to reach with fragment.length === 0");

			let firstChar = fragment[0];
			let modVal = firstChar === '!' ? false : firstChar === '?' ? undefined : true;

			switch (fragment.replace(/^[!?]/,"").toLowerCase()) {
			case "control": case "ctrl": case "ctl": skc.ctrl  = modVal; break;
			case "shift":   case "shft":             skc.shift = modVal; break;
			case "alt":                              skc.alt   = modVal; break;
			case "meta": case "win": case "os":      skc.meta  = modVal; break;
			default:
				if (remaining.length>0) { console.warn("Unrecognized modifier key, or unexpected non-modifier mid-combination in:", description); return undefined; }

				let scanMatch = /^\[(.+)\]$/.exec(fragment);
				if (scanMatch) fragment = scanMatch[1];

				let keys = Object.keys(Key);
				let i = keys.indexOf(fragment);
				if (i === -1) { console.warn("Unrecognized key:", fragment); return undefined; }
				let key = Key[fragment]; // Normalize

				if (scanMatch) skc.mmkCode = key;
				else           skc.mmkKey  = key;

				break;
			}
		}

		return skc;
	}

	/**
	 * Returns true if a given [[KeyboardEvent]] matches a given [[SimpleKeyCombo]]
	 */
	export function isSimpleKeyCombo(event: KeyboardEvent, skc: SimpleKeyCombo): boolean {
		if (skc.mmkCode !== undefined && event.mmkCode !== skc.mmkCode) return false;
		if (skc.mmkKey  !== undefined && event.mmkKey  !== skc.mmkKey ) return false;

		if (skc.ctrl    !== undefined && event.ctrlKey  !== skc.ctrl  ) return false;
		if (skc.shift   !== undefined && event.shiftKey !== skc.shift ) return false;
		if (skc.alt     !== undefined && event.altKey   !== skc.alt   ) return false;
		if (skc.meta    !== undefined && event.metaKey  !== skc.meta  ) return false;

		return true;
	}

	/** @hidden */
	function equalSimpleKeyCombo(l: SimpleKeyCombo, r: SimpleKeyCombo): boolean {
		return (l.mmkCode === r.mmkCode) &&
			(l.mmkKey  === r.mmkKey ) &&
			(l.ctrl    === r.ctrl   ) &&
			(l.shift   === r.shift  ) &&
			(l.alt     === r.alt    ) &&
			(l.meta    === r.meta   );
	}

	// ~ Unit testing
	/** @hidden */
	function testEqual   (L: string, R: string) { let Lskc = parseSimpleKeyCombo(L); let Rskc = parseSimpleKeyCombo(R); let eq = equalSimpleKeyCombo(Lskc, Rskc); console.assert( eq, "Expected:",L,"(",Lskc,") ===",R,"(",Rskc,")" ); }
	/** @hidden */
	function testNotEqual(L: string, R: string) { let Lskc = parseSimpleKeyCombo(L); let Rskc = parseSimpleKeyCombo(R); let eq = equalSimpleKeyCombo(Lskc, Rskc); console.assert(!eq, "Expected:",L,"(",Lskc,") !==",R,"(",Rskc,")" ); }

	testEqual   ("Ctrl+Alt+Del", "Control+Alt+Delete");
	testNotEqual("Ctrl+Alt+Del", "Control+Alt+Ins");

	testEqual   ("!Ctrl+!Alt+!Shift+Delete", "Delete");
	testNotEqual("Delete",  "Ctrl+Delete");
	testNotEqual("Delete",   "Alt+Delete");
	testNotEqual("Delete", "Shift+Delete");
	testNotEqual("Delete",  "Meta+Delete");
} // namespace mmk.keyboard
