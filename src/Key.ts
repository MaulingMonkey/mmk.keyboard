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

namespace mmk.keyboard.Key {
	// All legal mmkKey / mmkCode values.

	// Function row
	export const Escape      = "Escape"; export const Esc = "Escape";
	export const F1          = "F1";
	export const F2          = "F2";
	export const F3          = "F3";
	export const F4          = "F4";
	export const F5          = "F5";
	export const F6          = "F6";
	export const F7          = "F7";
	export const F8          = "F8";
	export const F9          = "F9";
	export const F10         = "F10";
	export const F11         = "F11";
	export const F12         = "F12";
	export const Pause       = "Pause";
	export const PrintScreen = "PrintScreen";
	export const ScrollLock  = "ScrollLock";

	// Digits Row
	export const Backquote = "Backquote"; Key["`"] = "Backquote";
	export const Digit0 = "Digit0"; export const D0 = "Digit0"; Key["0"] = "Digit0";
	export const Digit1 = "Digit1"; export const D1 = "Digit1"; Key["1"] = "Digit1";
	export const Digit2 = "Digit2"; export const D2 = "Digit2"; Key["2"] = "Digit2";
	export const Digit3 = "Digit3"; export const D3 = "Digit3"; Key["3"] = "Digit3";
	export const Digit4 = "Digit4"; export const D4 = "Digit4"; Key["4"] = "Digit4";
	export const Digit5 = "Digit5"; export const D5 = "Digit5"; Key["5"] = "Digit5";
	export const Digit6 = "Digit6"; export const D6 = "Digit6"; Key["6"] = "Digit6";
	export const Digit7 = "Digit7"; export const D7 = "Digit7"; Key["7"] = "Digit7";
	export const Digit8 = "Digit8"; export const D8 = "Digit8"; Key["8"] = "Digit8";
	export const Digit9 = "Digit9"; export const D9 = "Digit9"; Key["9"] = "Digit9";
	export const Minus     = "Minus"; Key["-"] = "Minus";
	export const Equal     = "Equal"; Key["="] = "Equal";
	export const Backspace = "Backspace";

	// (Semi-)central alpha region
	export const Tab         = "Tab";
	export const CapsLock    = "CapsLock"; export const Caps = "CapsLock";
	export const A = "KeyA"; export const B = "KeyB"; export const C = "KeyC"; export const D = "KeyD"; export const E = "KeyE";
	export const F = "KeyF"; export const G = "KeyG"; export const H = "KeyH"; export const I = "KeyI"; export const J = "KeyJ";
	export const K = "KeyK"; export const L = "KeyL"; export const M = "KeyM"; export const N = "KeyN"; export const O = "KeyO";
	export const P = "KeyP"; export const Q = "KeyQ"; export const R = "KeyR"; export const S = "KeyS"; export const T = "KeyT";
	export const U = "KeyU"; export const V = "KeyV"; export const W = "KeyW"; export const X = "KeyX"; export const Y = "KeyY";
	export const Z = "KeyZ";
	export const KeyA = "KeyA"; export const KeyB = "KeyB"; export const KeyC = "KeyC"; export const KeyD = "KeyD"; export const KeyE = "KeyE";
	export const KeyF = "KeyF"; export const KeyG = "KeyG"; export const KeyH = "KeyH"; export const KeyI = "KeyI"; export const KeyJ = "KeyJ";
	export const KeyK = "KeyK"; export const KeyL = "KeyL"; export const KeyM = "KeyM"; export const KeyN = "KeyN"; export const KeyO = "KeyO";
	export const KeyP = "KeyP"; export const KeyQ = "KeyQ"; export const KeyR = "KeyR"; export const KeyS = "KeyS"; export const KeyT = "KeyT";
	export const KeyU = "KeyU"; export const KeyV = "KeyV"; export const KeyW = "KeyW"; export const KeyX = "KeyX"; export const KeyY = "KeyY";
	export const KeyZ = "KeyZ";
	export const BracketLeft  = "BracketLeft";   Key["["] = "BracketLeft";
	export const BracketRight = "BracketRight";  Key["]"] = "BracketRight";
	export const Backslash    = "Backslash";     Key["\\"] = "Backslash";
	export const Semicolon    = "Semicolon";     Key[";"] = "Semicolon";
	export const Quote        = "Quote";         Key["'"] = "Quote";
	export const Comma        = "Comma";         Key[","] = "Comma";
	export const Period       = "Period";        Key["."] = "Period";
	export const Slash        = "Slash";         Key["/"] = "Slash";
	export const Enter        = "Enter";

	// Alpha edges and other control keys
	export const ControlLeft  = "ControlLeft";  export const CtrlLeft  = "ControlLeft";  export const LCtrl = "ControlLeft";
	export const ControlRight = "ControlRight"; export const CtrlRight = "ControlRight"; export const RCtrl = "ControlRight";
	export const AltLeft      = "AltLeft";      export const LAlt = "AltLeft";  export const MenuLeft  = "AltLeft";  export const LMenu = "AltLeft";
	export const AltRight     = "AltRight";     export const RAlt = "AltRight"; export const MenuRight = "AltRight"; export const RMenu = "AltRight";
	export const ShiftLeft    = "ShiftLeft";    export const LShift = "ShiftLeft";
	export const ShiftRight   = "ShiftRight";   export const RShift = "ShiftRight";
	export const MetaLeft     = "MetaLeft";     export const LMeta = "MetaLeft";  export const WinLeft  = "MetaLeft";  export const LWin = "MetaLeft";  export const OSLeft  = "MetaLeft";
	export const MetaRight    = "MetaRight";    export const RMeta = "MetaRight"; export const WinRight = "MetaRight"; export const RWin = "MetaRight"; export const OSRight = "MetaRight";
	export const ContextMenu  = "ContextMenu";
	export const Space        = "Space";

	// 6-key Area
	export const Insert     = "Insert"; export const Ins = "Insert";
	export const Delete     = "Delete"; export const Del = "Delete";
	export const Home       = "Home";
	export const End        = "End";
	export const PageUp     = "PageUp";   export const PgUp   = "PageUp";
	export const PageDown   = "PageDown"; export const PgDown = "PageDown";

	export const ArrowLeft  = "ArrowLeft";  export const Left  = "ArrowLeft";
	export const ArrowRight = "ArrowRight"; export const Right = "ArrowRight";
	export const ArrowUp    = "ArrowUp";    export const Up    = "ArrowUp";
	export const ArrowDown  = "ArrowDown";  export const Down  = "ArrowDown";

	// Numpad Common
	export const NumLock           = "NumLock";
	export const NumpadAdd         = "NumpadAdd";
	export const NumpadSubtract    = "NumpadSubtract";
	export const NumpadDivide      = "NumpadDivide";
	export const NumpadMultiply    = "NumpadMultiply";
	export const NumpadEnter       = "NumpadEnter";

	// Numpad w/ NumLock ON
	export const Numpad0           = "Numpad0"; export const Num0 = "Numpad0";
	export const Numpad1           = "Numpad1"; export const Num1 = "Numpad1";
	export const Numpad2           = "Numpad2"; export const Num2 = "Numpad2";
	export const Numpad3           = "Numpad3"; export const Num3 = "Numpad3";
	export const Numpad4           = "Numpad4"; export const Num4 = "Numpad4";
	export const Numpad5           = "Numpad5"; export const Num5 = "Numpad5";
	export const Numpad6           = "Numpad6"; export const Num6 = "Numpad6";
	export const Numpad7           = "Numpad7"; export const Num7 = "Numpad7";
	export const Numpad8           = "Numpad8"; export const Num8 = "Numpad8";
	export const Numpad9           = "Numpad9"; export const Num9 = "Numpad9";
	export const NumpadDecimal     = "NumpadDecimal";

	// Numpad w/ NumLock OFF (or with Shift held without 'fixing' that behavior)
	export const NumpadFunc0       = "NumpadInsert";
	export const NumpadFunc1       = "NumpadEnd";
	export const NumpadFunc2       = "NumpadDown";
	export const NumpadFunc3       = "NumpadPageDown";
	export const NumpadFunc4       = "NumpadLeft";
	export const NumpadFunc5       = "NumpadClear";
	export const NumpadFunc6       = "NumpadRight";
	export const NumpadFunc7       = "NumpadHome";
	export const NumpadFunc8       = "NumpadUp";
	export const NumpadFunc9       = "NumpadPageUp";
	export const NumpadFuncDecimal = "NumpadDelete";

	export const NumpadInsert      = "NumpadInsert";
	export const NumpadEnd         = "NumpadEnd";
	export const NumpadDown        = "NumpadDown";
	export const NumpadPageDown    = "NumpadPageDown";
	export const NumpadLeft        = "NumpadLeft";
	export const NumpadClear       = "NumpadClear";
	export const NumpadRight       = "NumpadRight";
	export const NumpadHome        = "NumpadHome";
	export const NumpadUp          = "NumpadUp";
	export const NumpadPageUp      = "NumpadPageUp";
	export const NumpadDelete      = "NumpadDelete";

} // namespace mmk.keyboard.Key
