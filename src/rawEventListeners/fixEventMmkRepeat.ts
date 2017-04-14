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
		// IE11 reports keyboardEvent.repeat === false, even on repeat events.
		// This workaround detects duplicate keydown events to determine if the key is really down or not instead.
		export var fixRepeat : boolean = true;
		// TODO: Detect browsers this fix isn't required on
	} // namespace config

	let lastEvents : {[id: string]: KeyboardEvent} = {
		// NOTE WELL: fixEventRepeat cares about the difference between null / undefined!  I'm sorry.
		"keydown":  null,
		"keypress": null
		// keyup ignored
	};

	export function fixEventMmkRepeat(event: KeyboardEvent) {
		event.mmkRepeat = event.repeat || false;
		if (!config.fixRepeat) return;
		if (event.repeat) config.fixRepeat = false; // Oh, the system already takes care of it.  Neat!

		// Track previous event
		if (event.type == "keyup") { Object.keys(lastEvents).forEach(key => lastEvents[key] = null); }
		let prevEvent = lastEvents[event.type];
		if (prevEvent === undefined) return; // not an event type we need to fix up
		if (prevEvent === null) { lastEvents[event.type] = event; return; } // no previous event, no need to fix up
		console.assert(prevEvent.type == event.type);
		lastEvents[event.type] = event;

		// Okay, is this a duplicate event?
		if (prevEvent.keyCode  !== event.keyCode ) return;
		if (prevEvent.charCode !== event.charCode) return;
		if (prevEvent.code     !== event.code    ) return;
		if (prevEvent.which    !== event.which   ) return;

		if (prevEvent.keyCode  !== event.keyCode ) return;
		if (prevEvent.altKey   !== event.altKey  ) return;
		if (prevEvent.ctrlKey  !== event.ctrlKey ) return;
		if (prevEvent.shiftKey !== event.shiftKey) return;
		if (prevEvent.metaKey  !== event.metaKey ) return;
		if (prevEvent.location !== event.location) return;

		// Identical-enough events for me.

		event.mmkRepeat = true;
	}
} // namespace mmk.keyboard
