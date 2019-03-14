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

// We need some event handlers immediately - waiting for "load" will cause our
// fixup event handlers to execute too late (after any immediately registered
// user defined event handlers!).  To ensure the final .js outputs things in a
// sane order, we'll explicitly reference our *.ts dependencies for once.

/// <reference path="../rawEventListeners/debugDumpEvent.ts" />
/// <reference path="../rawEventListeners/fixEventMmkRepeat.ts" />
/// <reference path="../rawEventListeners/fixEventMmkCode_FromCode.ts" />
/// <reference path="../rawEventListeners/fixEventMmkKey_FromUpDownKeyCode.ts" />

namespace mmk.keyboard {
	/** @hidden */
	interface LegacyEventTarget {
		[type: string]: (ev: Event) => any;
	}

	/** @hidden */
	const hasEventListener = "addEventListener" in window;

	/** @hidden */
	function addRawEventListener<T extends string>(target: EventTarget | { [type: string]: (ev: Event) => any }, type: T, listener: EventListenerOrEventListenerObject): void {
		if (hasEventListener) {
			let t = <EventTarget>target;
			t.addEventListener(type, listener, true);
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

	// Primary event order - this is what requires those reference tags earlier.

	// add mmkRepeat field
	addRawEventListener(window, "keyup",    fixEventMmkRepeat);
	addRawEventListener(window, "keydown",  fixEventMmkRepeat);
	addRawEventListener(window, "keypress", fixEventMmkRepeat);

	// add mmkCode field
	addRawEventListener(window, "keyup",    fixEventMmkCode_FromCode);
	addRawEventListener(window, "keydown",  fixEventMmkCode_FromCode);
	addRawEventListener(window, "keypress", fixEventMmkCode_FromCode);

	// add mmkKey field
	addRawEventListener(window, "keyup",    fixEventMmkKey_FromUpDownKeyCode);
	addRawEventListener(window, "keydown",  fixEventMmkKey_FromUpDownKeyCode);
	addRawEventListener(window, "keypress", fixEventMmkKey_FromUpDownKeyCode);

	// log to console based on mmk.keyboard.config settings
	addRawEventListener(window, "keyup",    debugDumpKeyboardEvent);
	addRawEventListener(window, "keydown",  debugDumpKeyboardEvent);
	addRawEventListener(window, "keypress", debugDumpKeyboardEvent);
	addRawEventListener(window, "blur",     debugDumpFocusEvent);
} // namespace mmk.keyboard
