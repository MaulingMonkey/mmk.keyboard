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

/** Configuration flags and settings for how mmk.keyboard as a whole behaves. */
namespace mmk.keyboard.config {
	/** Master control for all per-event debugging options. */
	export var debugEvents           = false;
	/** Should events where `event.mmkRepeat === true` be ignored for debugging purpouses? */
	export var debugIgnoreRepeat     = false;

	/** Should events be logged to the console? */
	export var debugLog              = true;

	/** When logging, should only `keydown` events be logged?  Or should `keypress` / `keyup` events be logged as well? */
	export var debugLogOnlyDown      = true;
	/** When logging, should `event.mmk___` fields be logged? */
	export var debugLogBaked         = true;
	/** When logging, should `event.___` fields of the original event be logged? */
	export var debugLogRaw           = true;
	/** When logging, should `event.___Key` fields be logged? */
	export var debugLogMods          = true;
	/** When logging, should the event object as a whole be logged? */
	export var debugLogOriginalEvent = false;

	export var debugAssertKeyDefined = true;
} // namespace mmk.keyboard.config
