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

// lib.d.ts provides an incompleteish definition of KeyboardEvent
interface KeyboardEvent {
	code:    string; // Present in Chrome, but not in IE11

	mmkRepeat: boolean; // IE11 lies and also makes 'repeat' immutable.
	mmkCode?:  string;  // "Physical" code - may be unavailable (e.g. IE11 gives us no way to get at real physical codes)
	mmkKey?:   string;  // "Logical"  code
}
