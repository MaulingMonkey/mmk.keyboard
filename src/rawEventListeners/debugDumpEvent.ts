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
		export var debugEvents           = true;
		export var debugIgnoreRepeat     = true;
		export var debugLog              = true;
		export var debugLogOnlyDown      = true;
		export var debugLogOriginalEvent = true;
		export var debugAssertKeyDefined = true;
	} // namespace config

	function padR(v: string, pad: string) { v = v !== undefined ? v : ""; return v + pad.substr(Math.min(v.length,pad.length)); }
	function padL(v: string, pad: string) { v = v !== undefined ? v : ""; return pad.substr(Math.min(v.length,pad.length)) + v; }

	export function debugDumpKeyboardEvent(ev: KeyboardEvent) {
		if (!config.debugEvents) return;

		if (config.debugLog && (!config.debugLogOnlyDown || ev.type === "keydown") && (!config.debugIgnoreRepeat || !ev.mmkRepeat)) {
			console.log(
				"semi-raw " +padR(ev.type+":", "         "),
				"code",      padR(ev.code,     "                 "),
				"->",        padR(ev.mmkCode,  "                 "),
				"key",       padR(ev.key,      "        "),
				"keyCode",   padL(ev.keyCode.toString(), "   "), "(0x"+padL(ev.keyCode.toString(16),"00")+")",
				"which",     padL(ev.which.toString(),   "   "), "(0x"+padL(ev.which  .toString(16),"00")+")",
				"timestamp", Date.now(),
				"repeat",    ev.repeat,
				"->",        ev.mmkRepeat,
				"altKey",    ev.altKey,
				"ctrlKey",   ev.ctrlKey,
				"metaKey",   ev.metaKey,
				"shiftKey",  ev.shiftKey,
				config.debugLogOriginalEvent ? ev : "",
				"");
		}

		if (config.debugAssertKeyDefined && (ev.type !== "keypress" || ev.mmkCode !== "")) {
			let KeyValues = Object.keys(Key);
			let index = KeyValues.indexOf(ev.mmkCode);
			console.assert(index !== -1,                    "Key."+ev.mmkCode+" === undefined");
			console.assert(KeyValues[index] === ev.mmkCode, "Key."+ev.mmkCode+" === \""+KeyValues[index]+"\" !== \""+ev.mmkCode+"\"");
		}
	}

	export function debugDumpFocusEvent(ev: FocusEvent) {
		console.log("semi-raw "+ev.type);
	}
} // namespace mmk.keyboard
