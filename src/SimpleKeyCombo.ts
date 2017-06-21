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
	export namespace config {
		export var verifySimpleComboCodes = true;
	}

	export interface SimpleKeyModifiers {
		// All modifier keys are tristate:
		//     true:      e.g. Alt is required
		//     false:     e.g. Alt is forbidden
		//     undefined: e.g. Alt is ignored
		alt?:    boolean;
		shift?:  boolean;
		ctrl?:   boolean;
		meta?:   boolean;
	}

	// Describes a simple key combination that requires no external state tracking (other held keys, keys within N milliseconds, etc.) to fire.
	export interface SimpleKeyCombo extends SimpleKeyModifiers {
		mmkCode?: string;
		mmkKey?:  string;
	}

	export function parseSimpleKeyCombo(desc: string, modifierDefaults?: SimpleKeyModifiers): SimpleKeyCombo {
		let r = tryParseSimpleKeyCombo(desc, modifierDefaults);
		console.assert(!!r, "parseSimpleKeyCombo failed to parse key combination:", desc);
		return r;
	}

	export function tryParseSimpleKeyCombo(desc: string, modifierDefaults?: SimpleKeyModifiers): SimpleKeyCombo {
		if (desc === undefined || desc === null || desc === "") return undefined;
		if (!modifierDefaults) modifierDefaults = { alt: false, shift: false, ctrl: false, meta: false };

		var skc = {
			mmkCode: undefined,
			mmkKey:  undefined,
			alt:     modifierDefaults.alt,
			shift:   modifierDefaults.shift,
			ctrl:    modifierDefaults.ctrl,
			meta:    modifierDefaults.meta
		};

		let remaining = desc;
		while (remaining.length > 0) {
			let nextSplit = remaining.indexOf('+', 1);
			let fragment = nextSplit === -1 ? remaining : remaining.substr(0, nextSplit); // Everything before "+"
			remaining    = nextSplit === -1 ? ""        : remaining.substr(nextSplit+1);  // Everything after (skipping) "+"

			if ((nextSplit !== -1) && (remaining.length === 0)) { console.warn("Malformed simple key combo ends with combining '+':", desc); return undefined; }
			console.assert(fragment.length > 0, "BUG: Should be impossible to reach with fragment.length === 0");

			let firstChar = fragment[0];
			let modVal = firstChar === '!' ? false : firstChar === '?' ? undefined : true;

			switch (fragment.replace(/^[!?]/,"").toLowerCase()) {
			case "control": case "ctrl": case "ctl": skc.ctrl  = modVal; break;
			case "shift":   case "shft":             skc.shift = modVal; break;
			case "alt":                              skc.alt   = modVal; break;
			case "meta": case "win": case "os":      skc.meta  = modVal; break;
			default:
				if (remaining.length>0) { console.warn("Unrecognized modifier key, or unexpected non-modifier mid-combination in:", desc); return undefined; }

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

	export function isSimpleKeyCombo(event: KeyboardEvent, skc: SimpleKeyCombo): boolean {
		if (skc.mmkCode !== undefined && event.mmkCode !== skc.mmkCode) return false;
		if (skc.mmkKey  !== undefined && event.mmkKey  !== skc.mmkKey ) return false;

		if (skc.ctrl    !== undefined && event.ctrlKey  !== skc.ctrl  ) return false;
		if (skc.shift   !== undefined && event.shiftKey !== skc.shift ) return false;
		if (skc.alt     !== undefined && event.altKey   !== skc.alt   ) return false;
		if (skc.meta    !== undefined && event.metaKey  !== skc.meta  ) return false;

		return true;
	}

	function equalSimpleKeyCombo(l: SimpleKeyCombo, r: SimpleKeyCombo): boolean {
		return (l.mmkCode === r.mmkCode) &&
			(l.mmkKey  === r.mmkKey ) &&
			(l.ctrl    === r.ctrl   ) &&
			(l.shift   === r.shift  ) &&
			(l.alt     === r.alt    ) &&
			(l.meta    === r.meta   );
	}

	// ~ Unit testing
	function testEqual   (L: string, R: string) { let Lskc = parseSimpleKeyCombo(L); let Rskc = parseSimpleKeyCombo(R); let eq = equalSimpleKeyCombo(Lskc, Rskc); console.assert( eq, "Expected:",L,"(",Lskc,") ===",R,"(",Rskc,")" ); }
	function testNotEqual(L: string, R: string) { let Lskc = parseSimpleKeyCombo(L); let Rskc = parseSimpleKeyCombo(R); let eq = equalSimpleKeyCombo(Lskc, Rskc); console.assert(!eq, "Expected:",L,"(",Lskc,") !==",R,"(",Rskc,")" ); }

	testEqual   ("Ctrl+Alt+Del", "Control+Alt+Delete");
	testNotEqual("Ctrl+Alt+Del", "Control+Alt+Ins");

	testEqual   ("!Ctrl+!Alt+!Shift+Delete", "Delete");
	testNotEqual("Delete",  "Ctrl+Delete");
	testNotEqual("Delete",   "Alt+Delete");
	testNotEqual("Delete", "Shift+Delete");
	testNotEqual("Delete",  "Meta+Delete");
} // namespace mmk.keyboard
