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
	// Primary event order.
	addEventListener("load", function() {
		// add mmkRepeat field
		addRawEventListener(this, "keyup",    fixEventMmkRepeat);
		addRawEventListener(this, "keydown",  fixEventMmkRepeat);
		addRawEventListener(this, "keypress", fixEventMmkRepeat);

		// add mmkCode field
		addRawEventListener(this, "keyup",    fixEventMmkCode);
		addRawEventListener(this, "keydown",  fixEventMmkCode);
		addRawEventListener(this, "keypress", fixEventMmkCode);

		// log to console based on mmk.keyboard.config settings
		addRawEventListener(this, "keyup",    debugDumpKeyboardEvent);
		addRawEventListener(this, "keydown",  debugDumpKeyboardEvent);
		addRawEventListener(this, "keypress", debugDumpKeyboardEvent);
		addRawEventListener(this, "blur",     debugDumpFocusEvent);

		// ...?
	});

	interface LegacyEventTarget {
		[type: string]: (ev: Event) => any;
	}

	const hasEventListener = "addEventListener" in window;

	function addRawEventListener(target: EventTarget | LegacyEventTarget, type: "load",     listener: (ev: Event        ) => any): void;
	function addRawEventListener(target: EventTarget | LegacyEventTarget, type: "keydown",  listener: (ev: KeyboardEvent) => any): void;
	function addRawEventListener(target: EventTarget | LegacyEventTarget, type: "keypress", listener: (ev: KeyboardEvent) => any): void;
	function addRawEventListener(target: EventTarget | LegacyEventTarget, type: "keyup",    listener: (ev: KeyboardEvent) => any): void;
	function addRawEventListener(target: EventTarget | LegacyEventTarget, type: "blur",     listener: (ev: FocusEvent   ) => any): void;
	function addRawEventListener(target: EventTarget | LegacyEventTarget, type: string,     listener: EventListenerOrEventListenerObject): void;

	function addRawEventListener(target: EventTarget | LegacyEventTarget, type: string,     listener: EventListenerOrEventListenerObject): void {
		if (hasEventListener) {
			let t = <EventTarget>target;
			t.addEventListener(type, listener);
		} else {
			let ontype = "on"+type;
			let t = <LegacyEventTarget>target;
			let oldCallback : (e: Event)=>void = t[ontype];

			// Don't add duplicate event listeners, or event listener objects.
			let dedupeListId = "__"+ontype+"_dedupe";
			let dedupeList : EventListenerOrEventListenerObject[] = ((<any>t)[dedupeListId] = (<any>t)[dedupeListId] || []);
			if (dedupeList.indexOf(listener) !== -1) return; // Duplicate
			dedupeList.push(listener); // New/unique

			if ("handleEvent" in listener) {
				if (oldCallback) t[ontype] = function(e: Event) { oldCallback.call(this, e); (<EventListenerObject>listener).handleEvent(e); }
				else             t[ontype] = function(e: Event) {                            (<EventListenerObject>listener).handleEvent(e); }
			} else {
				if (oldCallback) t[ontype] = function(e: Event) { oldCallback.call(this, e); (<EventListener>listener).call(this, e); }
				else             t[ontype] = function(e: Event) {                            (<EventListener>listener).call(this, e); }
			}
		}
	}

	// Debug junk
	addEventListener("load", function() {
		let target = document.getElementById("mmk-input-keyboard-debug-addRawEventListener-target");
		if (!target) return; // No debug

		// Dedupe should kill both of these:
		let o = { handleEvent: function (e) { console.log("Event O", this); } };
		let ef = function(e) { console.log("Event F", this); };

		addRawEventListener(target, "click", function(e) { console.log("Event 1", this); });
		addRawEventListener(target, "click", function(e) { console.log("Event 2", this); });
		addRawEventListener(target, "click", ef);
		addRawEventListener(target, "click", o);

		addRawEventListener(target, "click", function(e) { console.log("Event 1", this); }); // Should NOT be deduped
		addRawEventListener(target, "click", function(e) { console.log("Event 2", this); }); // Should NOT be deduped
		addRawEventListener(target, "click", ef); // Should be deduped
		addRawEventListener(target, "click", o);  // Should be deduped
	});
} // namespace mmk.keyboard
