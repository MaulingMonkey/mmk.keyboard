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

/**
 * `mmk.keyboard` automatically extends `KeyboardEvent` with new fields.  Most of them correspond to existing fields.
 * Since some of these fields are immutable (at least on some browsers), we're unable to fix them in-place, and instead
 * create alternatives prefixed with `mmk...` - it's also possible you don't want to break third party libraries that
 * do their own code/key/repeat corrections internally.
 * 
 * If you register your own events with `addEventListener("keydown", function(e) { ... }, true);` before
 * `mmk.keyboard.js` is loaded, it's possible these fields won't be populated.  An easy workaround is to simply load
 * `mmk.keyboard.js` first.
 * 
 * See also:  [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) (MDN web docs)
 */
interface KeyboardEvent {
	/** @hidden - Present in Chrome, but not in IE11.  (Now in lib.d.ts, but not in all legacy versions) */
	readonly code: string;

	/**
	 * `true` if this is a repeat keydown event caused by holding the key down for an extended duration, `false` if this
	 * is a newly pressed key.
	 * 
	 * KeyboardEvent already provides `repeat`, but this lies on IE11 (it's `false` for some repeat keydown events).
	 */
	mmkRepeat: boolean;

	/**
	 * The physical key pressed, ignoring the user's locale - may be unavailable (e.g. IE11 gives us no way to get at
	 * real physical codes.)
	 * 
	 * You'd only want to potentially use this for e.g. binding "WASD" game controls in a way that maintains the
	 * physical keyboard layout, even if the end user toggles between Qwerty and Dvorak layouts.  Use with caution.
	 */
	mmkCode:   string | undefined;

	/**
	 * The logical key pressed, respecting the user's locale.
	 */
	mmkKey:    string | undefined;
}
