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
		export var debugIgnoreRepeat     = false;

		export var debugLog              = true;
		export var debugLogOnlyDown      = true;
		export var debugLogBaked         = true;
		export var debugLogRaw           = true;
		export var debugLogMods          = true;
		export var debugLogOriginalEvent = false;

		export var debugAssertKeyDefined = true;
	} // namespace config

	function padR(v: string, pad: string) { v = v !== undefined ? v : ""; return v + pad.substr(Math.min(v.length,pad.length)); }
	function padL(v: string, pad: string) { v = v !== undefined ? v : ""; return pad.substr(Math.min(v.length,pad.length)) + v; }

	export function debugDumpKeyboardEvent(ev: KeyboardEvent) {
		if (!config.debugEvents) return;

		if (config.debugLog && (!config.debugLogOnlyDown || ev.type === "keydown") && (!config.debugIgnoreRepeat || !ev.mmkRepeat)) {
			let log = [];

			log.push("semi-raw " +padR(ev.type+":", "         "));

			if (config.debugLogBaked) log.push(
				"| mmk",
				ev.mmkRepeat ? "\u21BB" : " ",
				"code",   padR(ev.mmkCode,  "            "),
				"key",    padR(ev.mmkKey,   "            ")
			);

			if (config.debugLogRaw) log.push(
				"| raw",
				ev.repeat ? "\u21BB" : " ",
				"code",      padR(ev.code, "            "),
				"key",       padR(ev.key,  "            "),
				"keyCode",   padL(ev.keyCode.toString(), "   "), "(0x"+padL(ev.keyCode.toString(16),"00")+")",
				"which",     padL(ev.which.toString(),   "   "), "(0x"+padL(ev.which  .toString(16),"00")+")",
				"timestamp", Date.now()
			);

			if (config.debugLogMods) log.push(
				"| mod",
				ev.ctrlKey  ? "ctrl"  : "    ",
				ev.altKey   ? "alt"   : "   ",
				ev.shiftKey ? "shift" : "     ",
				ev.metaKey  ? "meta"  : "    "
			);

			if (config.debugLogOriginalEvent) log.push("| ev", ev);

			log.push("|");

			(<any>console.log)(...log);
		}

		if (config.debugAssertKeyDefined) {
			let KeyValues = Object.keys(Key);
			if (ev.mmkCode !== undefined) {
				let index = KeyValues.indexOf(ev.mmkCode);
				console.assert(index !== -1,                    "mmkCode: Key."+ev.mmkCode+" === undefined");
				console.assert(KeyValues[index] === ev.mmkCode, "mmkCode: Key."+ev.mmkCode+" === \""+KeyValues[index]+"\" !== \""+ev.mmkCode+"\"");
			}
			if (ev.type !== "keypress" || ev.mmkKey !== undefined) {
				let index = KeyValues.indexOf(ev.mmkCode);
				console.assert(index !== -1,                   "mmkKey: Key."+ev.mmkKey+" === undefined");
				console.assert(KeyValues[index] === ev.mmkKey, "mmkKey: Key."+ev.mmkKey+" === \""+KeyValues[index]+"\" !== \""+ev.mmkKey+"\"");
			}
		}
	}

	export function debugDumpFocusEvent(ev: FocusEvent) {
		console.log("semi-raw "+ev.type);
	}
} // namespace mmk.keyboard
