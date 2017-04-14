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
	const keyCode_key_to_mmkCode = {
		//"40 Down":  "NumpadDown",
		//"37 Left":  "NumpadLeft",
		//"12 Clear": "NumpadClear",
		//"39 Right": "NumpadRight",
	};

	// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
	const keyupdown_keyCode_to_mmkCode = {
		0x03: "Cancel", // Ctrl+Pause = Break?
		0x06: "Help",
		0x08: "Backspace",
		0x09: "Tab",
		// 0x0C: // NumpadEqual (Win) or Numlock (Mac) or NumpadClear (Numpad5 without numlock)
		0x0D: "Enter", // Numpad also emits this
		// 0x0E: "Enter", // Weird reserved but unused gecko constant?

		// XXX: We can't differentiate between Left/Right with only keyCode
		0x10: "Shift",   // although there's a reference to a "dead key" w/ keyup 0x10?
		0x11: "Control",
		0x12: "Alt",
		0x13: "Pause", // 0x7e on Mac for Chrome/Safari, where 0x13 is instead F15
		0x14: "CapsLock",
		0x1B: "Escape",

		0x20: "Space",
		0x21: "PageUp",
		0x22: "PageDown",
		0x23: "End",
		0x24: "Home",
		0x25: "ArrowLeft",
		0x26: "ArrowUp",
		0x27: "ArrowRight",
		0x28: "ArrowDown",
		0x2a: "PrintScreen", // Only on Linux, but I haven't found any conflicting bindings yet....
		0x2c: "PrintScreen", // Actually F13 on Mac

		0x2d: "Insert",
		0x2e: "Delete",
		0x2f: "Help", // Only on Linux, but I haven't found any conflicting bindings yet...
		0x30: "Digit0",
		0x31: "Digit1",
		0x32: "Digit2",
		0x33: "Digit3",
		0x34: "Digit4",
		0x35: "Digit5",
		0x36: "Digit6",
		0x37: "Digit7",
		0x38: "Digit8",
		0x39: "Digit9",
		// 0x3A: Colon or Comma, rare?
		0x3b: "Semicolon", // Gecko only?
		0x3c: "LessThan", // Gecko only?
		0x3d: "NumpadEqual", // Gecko only?
		0x3e: "GreaterThan", // Gecko only?
		0x3f: "QuestionMark", // Gecko only?
		// 0x40: "At", // @ or LeftBracket, depending (tm)?

		0x41: "KeyA",
		0x42: "KeyB",
		0x43: "KeyC",
		0x44: "KeyD",
		0x45: "KeyE",
		0x46: "KeyF",
		0x47: "KeyG",
		0x48: "KeyH",
		0x49: "KeyI",
		0x4a: "KeyJ",
		0x4b: "KeyK",
		0x4c: "KeyL",
		0x4d: "KeyM",
		0x4e: "KeyN",
		0x4f: "KeyO",
		0x50: "KeyP",
		0x51: "KeyQ", // XXX: Won't emit on greek keyboards?
		// 0xBA: "KeyQ", // Greek on Mac/Linux?  Al
		0x52: "KeyR",
		0x53: "KeyS",
		0x54: "KeyT",
		0x55: "KeyU",
		0x56: "KeyV",
		0x57: "KeyW",
		0x58: "KeyX",
		0x59: "KeyY",
		0x5a: "KeyZ",
		0x5b: "MetaLeft",
		0x5c: "MetaRight", // XXX: Some browsers are bad and will report MetaLeft instead
		0x5d: "ContextMenu", // XXX: Unless it's actually MetaRight (e.g. on Mac)

		0x60: "Numpad0",
		0x61: "Numpad1",
		0x62: "Numpad2",
		0x63: "Numpad3",
		0x64: "Numpad4",
		0x65: "Numpad5",
		0x66: "Numpad6",
		0x67: "Numpad7",
		0x68: "Numpad8",
		0x69: "Numpad9",
		0x6a: "NumpadMultiply",
		0x6b: "NumpadAdd",
		0x6c: "NumpadSeperator", // XXX: Kind of a clusterfuck - may or may not depend on locale depending on OS?
		0x6d: "NumpadSubtract",
		0x6e: "NumpadDecimal",
		0x6f: "NumpadDivide",

		0x70: "F1",
		0x71: "F2",
		0x72: "F3",
		0x73: "F4",
		0x74: "F5",
		0x75: "F6",
		0x76: "F7",
		0x77: "F8",
		0x78: "F9",
		0x79: "F10",
		0x7a: "F11",
		0x7b: "F12",

		// Very platform specific
		// 0x7c: "F13",
		// 0x7d: "F14",
		// 0x7e: "F15",
		// 0x7f: "F16",
		// 0x80: "F17",
		// 0x81: "F18",
		// 0x82: "F19",
		// 0x83: "F20",
		// 0x84: "F21",
		// 0x85: "F22",
		// 0x86: "F23",
		// 0x87: "F24",

		0x90: "NumLock",
		0x91: "ScrollLock",

		0xba: "Semicolon",
		0xbb: "Equal",
		0xbc: "Comma",
		0xbd: "Minus",
		0xbe: "Period",
		0xbf: "Slash",
		0xc0: "Backquote",
		0xc1: "IntlRo",
		0xc2: "NumpadComma", // NOTE: might input "." based on locale?

		0xdb: "BracketLeft",
		0xdc: "Backslash",
		0xdd: "BracketRight",
		0xde: "Quote",
	};

	const mac_keyCode_to_mmkCode = {
		0x0C: "NumLock", 0xBB: "NumpadEqual",
		0x2C: "F13",     0x7C: "PrintScreen",
		0x91: "F14",     0x7D: "ScrollLock",
		0x13: "F15",     0x7E: "Pause",
	};

	// This is just easier to fix up after the fact
	const mmkCode_to_mmkCode = {
		"NumpadNumlock": "Numlock",
		"NumpadDel":     "NumpadDelete",
	};

	function startsWith(v: string, prefix: string): boolean {
		if (v.length < prefix.length) return false;
		for (let i=0; i<prefix.length; ++i) if (v[i] !== prefix[i]) return false;
		return true;
	}

	function endsWith(v: string, postfix: string): boolean {
		if (v.length < postfix.length) return false;
		var diff = v.length - postfix.length;
		for (let i=0; i<postfix.length; ++i) if (v[i+diff] !== postfix[i]) return false;
		return true;
	}

	function ensurePostfix(v: string, postfix: string): string { return endsWith  (v, postfix) ? v : (v+postfix); }
	function ensurePrefix (v: string, prefix:  string): string { return startsWith(v, prefix ) ? v : (prefix +v); }

	export function fixEventMmkCode_FromUpDownKeyCode(event: KeyboardEvent) {
		var tmpMmkCode;
		var m : RegExpMatchArray;

		// TODO: Consult keyboard layout mapping table

		if      ((tmpMmkCode = keyCode_key_to_mmkCode[event.keyCode+" "+event.key])) event.mmkCode = tmpMmkCode;
		else if ((tmpMmkCode = keyupdown_keyCode_to_mmkCode[event.keyCode]        )) event.mmkCode = tmpMmkCode;
		else                                                                         event.mmkCode = "0x" + event.keyCode.toString(16).toUpperCase();

		if (event.location !== undefined) {
			switch (event.location) {
			case KeyboardEvent.DOM_KEY_LOCATION_LEFT:                                event.mmkCode = ensurePostfix(event.mmkCode, "Left");  break;
			case KeyboardEvent.DOM_KEY_LOCATION_RIGHT:                               event.mmkCode = ensurePostfix(event.mmkCode, "Right"); break;
			case KeyboardEvent.DOM_KEY_LOCATION_NUMPAD:                              event.mmkCode = ensurePrefix (event.key,    "Numpad"); break;
			}
		}

		if ((tmpMmkCode = mmkCode_to_mmkCode[event.mmkCode]))                        event.mmkCode = tmpMmkCode;
	}
} // namespace mmk.keyboard
