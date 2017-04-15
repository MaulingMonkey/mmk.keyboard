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
	// The numpad is particularly finicky
	const code_key_to_mmkCode = {
		"Numpad1 End":          "NumpadEnd",
		"Numpad2 ArrowDown":    "NumpadDown",
		"Numpad3 PageDown":     "NumpadPageDown",
		"Numpad4 ArrowLeft":    "NumpadLeft",
		"Numpad5 Clear":        "NumpadClear",
		"Numpad6 ArrowRight":   "NumpadRight",
		"Numpad7 Home":         "NumpadHome",
		"Numpad8 ArrowUp":      "NumpadUp",
		"Numpad9 PageUp":       "NumpadPageUp",
		"Numpad0 Insert":       "NumpadInsert",
		"NumpadDecimal Delete": "NumpadDelete",
	};

	// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
	const code_to_mmkCode = {
		"Left":       "ArrowLeft",
		"Right":      "ArrowRight",
		"Up":         "ArrowUp",
		"Down":       "ArrowDown",

		// Pure paranoia
		"0":          "Digit0",
		"1":          "Digit1",
		"2":          "Digit2",
		"3":          "Digit3",
		"4":          "Digit4",
		"5":          "Digit5",
		"6":          "Digit6",
		"7":          "Digit7",
		"8":          "Digit8",
		"9":          "Digit9",

		// < FF 49, < Chrome 50
		"VolumeMute": "AudioVolumeMute",
		"VolumeDown": "AudioVolumeDown",
		"VolumeUp":   "AudioVolumeUp",

		// < FF 48, Current Chrome?
		"OSLeft":     "MetaLeft",
		"OSRight":    "MetaRight",
	};

	export function fixEventMmkCode_FromCode(event: KeyboardEvent) {
		if (event.code === undefined) return;

		var tmpMmkCode;
		var m : RegExpMatchArray;

		if      ((event.code === "") || (event.code === "Unidentified"))       event.mmkCode = "0x"+event.keyCode.toString(16).toUpperCase(); // TODO: Add hex value?
		else if ((tmpMmkCode = code_key_to_mmkCode[event.code+" "+event.key])) event.mmkCode = tmpMmkCode;
		else if ((tmpMmkCode = code_to_mmkCode[event.code]                  )) event.mmkCode = tmpMmkCode;
		else                                                                   event.mmkCode = event.code; // Assume the original code was OK.  Sketchy - run with config.debugAssertKeyDefined during development to detect problems.
	}
} // namespace mmk.keyboard
