var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        addEventListener("load", function () {
            addRawEventListener(this, "keyup", keyboard.fixEventMmkRepeat);
            addRawEventListener(this, "keydown", keyboard.fixEventMmkRepeat);
            addRawEventListener(this, "keypress", keyboard.fixEventMmkRepeat);
            addRawEventListener(this, "keyup", keyboard.fixEventMmkCode_FromCode);
            addRawEventListener(this, "keydown", keyboard.fixEventMmkCode_FromCode);
            addRawEventListener(this, "keypress", keyboard.fixEventMmkCode_FromCode);
            addRawEventListener(this, "keyup", keyboard.fixEventMmkKey_FromUpDownKeyCode);
            addRawEventListener(this, "keydown", keyboard.fixEventMmkKey_FromUpDownKeyCode);
            addRawEventListener(this, "keypress", keyboard.fixEventMmkKey_FromUpDownKeyCode);
            addRawEventListener(this, "keyup", keyboard.debugDumpKeyboardEvent);
            addRawEventListener(this, "keydown", keyboard.debugDumpKeyboardEvent);
            addRawEventListener(this, "keypress", keyboard.debugDumpKeyboardEvent);
            addRawEventListener(this, "blur", keyboard.debugDumpFocusEvent);
        });
        var hasEventListener = "addEventListener" in window;
        function addRawEventListener(target, type, listener) {
            if (hasEventListener) {
                var t = target;
                t.addEventListener(type, listener);
            }
            else {
                var ontype = "on" + type;
                var t = target;
                var oldCallback = t[ontype];
                var dedupeListId = "__" + ontype + "_dedupe";
                var dedupeList = (t[dedupeListId] = t[dedupeListId] || []);
                if (dedupeList.indexOf(listener) !== -1)
                    return;
                dedupeList.push(listener);
                if ("handleEvent" in listener) {
                    if (oldCallback)
                        t[ontype] = function (e) { oldCallback.call(this, e); listener.handleEvent(e); };
                    else
                        t[ontype] = function (e) { listener.handleEvent(e); };
                }
                else {
                    if (oldCallback)
                        t[ontype] = function (e) { oldCallback.call(this, e); listener.call(this, e); };
                    else
                        t[ontype] = function (e) { listener.call(this, e); };
                }
            }
        }
        addEventListener("load", function () {
            var target = document.getElementById("mmk-input-keyboard-debug-addRawEventListener-target");
            if (!target)
                return;
            var o = { handleEvent: function (e) { console.log("Event O", this); } };
            var ef = function (e) { console.log("Event F", this); };
            addRawEventListener(target, "click", function (e) { console.log("Event 1", this); });
            addRawEventListener(target, "click", function (e) { console.log("Event 2", this); });
            addRawEventListener(target, "click", ef);
            addRawEventListener(target, "click", o);
            addRawEventListener(target, "click", function (e) { console.log("Event 1", this); });
            addRawEventListener(target, "click", function (e) { console.log("Event 2", this); });
            addRawEventListener(target, "click", ef);
            addRawEventListener(target, "click", o);
        });
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        var Key;
        (function (Key) {
            Key.Escape = "Escape";
            Key.Esc = "Escape";
            Key.F1 = "F1";
            Key.F2 = "F2";
            Key.F3 = "F3";
            Key.F4 = "F4";
            Key.F5 = "F5";
            Key.F6 = "F6";
            Key.F7 = "F7";
            Key.F8 = "F8";
            Key.F9 = "F9";
            Key.F10 = "F10";
            Key.F11 = "F11";
            Key.F12 = "F12";
            Key.Pause = "Pause";
            Key.PrintScreen = "PrintScreen";
            Key.ScrollLock = "ScrollLock";
            Key.Backquote = "Backquote";
            Key["`"] = "Backquote";
            Key.Digit0 = "Digit0";
            Key.D0 = "Digit0";
            Key["0"] = "Digit0";
            Key.Digit1 = "Digit1";
            Key.D1 = "Digit1";
            Key["1"] = "Digit1";
            Key.Digit2 = "Digit2";
            Key.D2 = "Digit2";
            Key["2"] = "Digit2";
            Key.Digit3 = "Digit3";
            Key.D3 = "Digit3";
            Key["3"] = "Digit3";
            Key.Digit4 = "Digit4";
            Key.D4 = "Digit4";
            Key["4"] = "Digit4";
            Key.Digit5 = "Digit5";
            Key.D5 = "Digit5";
            Key["5"] = "Digit5";
            Key.Digit6 = "Digit6";
            Key.D6 = "Digit6";
            Key["6"] = "Digit6";
            Key.Digit7 = "Digit7";
            Key.D7 = "Digit7";
            Key["7"] = "Digit7";
            Key.Digit8 = "Digit8";
            Key.D8 = "Digit8";
            Key["8"] = "Digit8";
            Key.Digit9 = "Digit9";
            Key.D9 = "Digit9";
            Key["9"] = "Digit9";
            Key.Minus = "Minus";
            Key["-"] = "Minus";
            Key.Equal = "Equal";
            Key["="] = "Equal";
            Key.Backspace = "Backspace";
            Key.Tab = "Tab";
            Key.CapsLock = "CapsLock";
            Key.Caps = "CapsLock";
            Key.A = "KeyA";
            Key.B = "KeyB";
            Key.C = "KeyC";
            Key.D = "KeyD";
            Key.E = "KeyE";
            Key.F = "KeyF";
            Key.G = "KeyG";
            Key.H = "KeyH";
            Key.I = "KeyI";
            Key.J = "KeyJ";
            Key.K = "KeyK";
            Key.L = "KeyL";
            Key.M = "KeyM";
            Key.N = "KeyN";
            Key.O = "KeyO";
            Key.P = "KeyP";
            Key.Q = "KeyQ";
            Key.R = "KeyR";
            Key.S = "KeyS";
            Key.T = "KeyT";
            Key.U = "KeyU";
            Key.V = "KeyV";
            Key.W = "KeyW";
            Key.X = "KeyX";
            Key.Y = "KeyY";
            Key.Z = "KeyZ";
            Key.KeyA = "KeyA";
            Key.KeyB = "KeyB";
            Key.KeyC = "KeyC";
            Key.KeyD = "KeyD";
            Key.KeyE = "KeyE";
            Key.KeyF = "KeyF";
            Key.KeyG = "KeyG";
            Key.KeyH = "KeyH";
            Key.KeyI = "KeyI";
            Key.KeyJ = "KeyJ";
            Key.KeyK = "KeyK";
            Key.KeyL = "KeyL";
            Key.KeyM = "KeyM";
            Key.KeyN = "KeyN";
            Key.KeyO = "KeyO";
            Key.KeyP = "KeyP";
            Key.KeyQ = "KeyQ";
            Key.KeyR = "KeyR";
            Key.KeyS = "KeyS";
            Key.KeyT = "KeyT";
            Key.KeyU = "KeyU";
            Key.KeyV = "KeyV";
            Key.KeyW = "KeyW";
            Key.KeyX = "KeyX";
            Key.KeyY = "KeyY";
            Key.KeyZ = "KeyZ";
            Key.BracketLeft = "BracketLeft";
            Key["["] = "BracketLeft";
            Key.BracketRight = "BracketRight";
            Key["]"] = "BracketRight";
            Key.Backslash = "Backslash";
            Key["\\"] = "Backslash";
            Key.Semicolon = "Semicolon";
            Key[";"] = "Semicolon";
            Key.Quote = "Quote";
            Key["'"] = "Quote";
            Key.Comma = "Comma";
            Key[","] = "Comma";
            Key.Period = "Period";
            Key["."] = "Period";
            Key.Slash = "Slash";
            Key["/"] = "Slash";
            Key.Enter = "Enter";
            Key.ControlLeft = "ControlLeft";
            Key.CtrlLeft = "ControlLeft";
            Key.LCtrl = "ControlLeft";
            Key.ControlRight = "ControlRight";
            Key.CtrlRight = "ControlRight";
            Key.RCtrl = "ControlRight";
            Key.AltLeft = "AltLeft";
            Key.LAlt = "AltLeft";
            Key.MenuLeft = "AltLeft";
            Key.LMenu = "AltLeft";
            Key.AltRight = "AltRight";
            Key.RAlt = "AltRight";
            Key.MenuRight = "AltRight";
            Key.RMenu = "AltRight";
            Key.ShiftLeft = "ShiftLeft";
            Key.LShift = "ShiftLeft";
            Key.ShiftRight = "ShiftRight";
            Key.RShift = "ShiftRight";
            Key.MetaLeft = "MetaLeft";
            Key.LMeta = "MetaLeft";
            Key.WinLeft = "MetaLeft";
            Key.LWin = "MetaLeft";
            Key.OSLeft = "MetaLeft";
            Key.MetaRight = "MetaRight";
            Key.RMeta = "MetaRight";
            Key.WinRight = "MetaRight";
            Key.RWin = "MetaRight";
            Key.OSRight = "MetaRight";
            Key.ContextMenu = "ContextMenu";
            Key.Space = "Space";
            Key.Insert = "Insert";
            Key.Ins = "Insert";
            Key.Delete = "Delete";
            Key.Del = "Delete";
            Key.Home = "Home";
            Key.End = "End";
            Key.PageUp = "PageUp";
            Key.PgUp = "PageUp";
            Key.PageDown = "PageDown";
            Key.PgDown = "PageDown";
            Key.ArrowLeft = "ArrowLeft";
            Key.Left = "ArrowLeft";
            Key.ArrowRight = "ArrowRight";
            Key.Right = "ArrowRight";
            Key.ArrowUp = "ArrowUp";
            Key.Up = "ArrowUp";
            Key.ArrowDown = "ArrowDown";
            Key.Down = "ArrowDown";
            Key.NumLock = "NumLock";
            Key.NumpadAdd = "NumpadAdd";
            Key.NumpadSubtract = "NumpadSubtract";
            Key.NumpadDivide = "NumpadDivide";
            Key.NumpadMultiply = "NumpadMultiply";
            Key.NumpadEnter = "NumpadEnter";
            Key.Numpad0 = "Numpad0";
            Key.Num0 = "Numpad0";
            Key.Numpad1 = "Numpad1";
            Key.Num1 = "Numpad1";
            Key.Numpad2 = "Numpad2";
            Key.Num2 = "Numpad2";
            Key.Numpad3 = "Numpad3";
            Key.Num3 = "Numpad3";
            Key.Numpad4 = "Numpad4";
            Key.Num4 = "Numpad4";
            Key.Numpad5 = "Numpad5";
            Key.Num5 = "Numpad5";
            Key.Numpad6 = "Numpad6";
            Key.Num6 = "Numpad6";
            Key.Numpad7 = "Numpad7";
            Key.Num7 = "Numpad7";
            Key.Numpad8 = "Numpad8";
            Key.Num8 = "Numpad8";
            Key.Numpad9 = "Numpad9";
            Key.Num9 = "Numpad9";
            Key.NumpadDecimal = "NumpadDecimal";
            Key.NumpadFunc0 = "NumpadInsert";
            Key.NumpadFunc1 = "NumpadEnd";
            Key.NumpadFunc2 = "NumpadDown";
            Key.NumpadFunc3 = "NumpadPageDown";
            Key.NumpadFunc4 = "NumpadLeft";
            Key.NumpadFunc5 = "NumpadClear";
            Key.NumpadFunc6 = "NumpadRight";
            Key.NumpadFunc7 = "NumpadHome";
            Key.NumpadFunc8 = "NumpadUp";
            Key.NumpadFunc9 = "NumpadPageUp";
            Key.NumpadFuncDecimal = "NumpadDelete";
            Key.NumpadInsert = "NumpadInsert";
            Key.NumpadEnd = "NumpadEnd";
            Key.NumpadDown = "NumpadDown";
            Key.NumpadPageDown = "NumpadPageDown";
            Key.NumpadLeft = "NumpadLeft";
            Key.NumpadClear = "NumpadClear";
            Key.NumpadRight = "NumpadRight";
            Key.NumpadHome = "NumpadHome";
            Key.NumpadUp = "NumpadUp";
            Key.NumpadPageUp = "NumpadPageUp";
            Key.NumpadDelete = "NumpadDelete";
        })(Key = keyboard.Key || (keyboard.Key = {}));
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        var config;
        (function (config) {
            config.debugEvents = true;
            config.debugIgnoreRepeat = false;
            config.debugLog = true;
            config.debugLogOnlyDown = true;
            config.debugLogBaked = true;
            config.debugLogRaw = true;
            config.debugLogMods = true;
            config.debugLogOriginalEvent = false;
            config.debugAssertKeyDefined = true;
        })(config = keyboard.config || (keyboard.config = {}));
        function padR(v, pad) { v = v !== undefined ? v : ""; return v + pad.substr(Math.min(v.length, pad.length)); }
        function padL(v, pad) { v = v !== undefined ? v : ""; return pad.substr(Math.min(v.length, pad.length)) + v; }
        function debugDumpKeyboardEvent(ev) {
            if (!config.debugEvents)
                return;
            if (config.debugLog && (!config.debugLogOnlyDown || ev.type === "keydown") && (!config.debugIgnoreRepeat || !ev.mmkRepeat)) {
                var log = [];
                log.push("semi-raw " + padR(ev.type + ":", "         "));
                if (config.debugLogBaked)
                    log.push("| mmk", ev.mmkRepeat ? "\u21BB" : " ", "code", padR(ev.mmkCode, "            "), "key", padR(ev.mmkKey, "            "));
                if (config.debugLogRaw)
                    log.push("| raw", ev.repeat ? "\u21BB" : " ", "code", padR(ev.code, "            "), "key", padR(ev.key, "            "), "keyCode", padL(ev.keyCode.toString(), "   "), "(0x" + padL(ev.keyCode.toString(16), "00") + ")", "which", padL(ev.which.toString(), "   "), "(0x" + padL(ev.which.toString(16), "00") + ")", "timestamp", Date.now());
                if (config.debugLogMods)
                    log.push("| mod", ev.ctrlKey ? "ctrl" : "    ", ev.altKey ? "alt" : "   ", ev.shiftKey ? "shift" : "     ", ev.metaKey ? "meta" : "    ");
                if (config.debugLogOriginalEvent)
                    log.push("| ev", ev);
                log.push("|");
                console.log.apply(console, log);
            }
            if (config.debugAssertKeyDefined) {
                var KeyValues = Object.keys(keyboard.Key);
                if (ev.mmkCode !== undefined) {
                    var index = KeyValues.indexOf(ev.mmkCode);
                    console.assert(index !== -1, "mmkCode: Key." + ev.mmkCode + " === undefined");
                    console.assert(KeyValues[index] === ev.mmkCode, "mmkCode: Key." + ev.mmkCode + " === \"" + KeyValues[index] + "\" !== \"" + ev.mmkCode + "\"");
                }
                if (ev.type !== "keypress" || ev.mmkKey !== undefined) {
                    var index = KeyValues.indexOf(ev.mmkCode);
                    console.assert(index !== -1, "mmkKey: Key." + ev.mmkKey + " === undefined");
                    console.assert(KeyValues[index] === ev.mmkKey, "mmkKey: Key." + ev.mmkKey + " === \"" + KeyValues[index] + "\" !== \"" + ev.mmkKey + "\"");
                }
            }
        }
        keyboard.debugDumpKeyboardEvent = debugDumpKeyboardEvent;
        function debugDumpFocusEvent(ev) {
            console.log("semi-raw " + ev.type);
        }
        keyboard.debugDumpFocusEvent = debugDumpFocusEvent;
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        var code_key_to_mmkCode = {
            "Numpad1 End": "NumpadEnd",
            "Numpad2 ArrowDown": "NumpadDown",
            "Numpad3 PageDown": "NumpadPageDown",
            "Numpad4 ArrowLeft": "NumpadLeft",
            "Numpad5 Clear": "NumpadClear",
            "Numpad6 ArrowRight": "NumpadRight",
            "Numpad7 Home": "NumpadHome",
            "Numpad8 ArrowUp": "NumpadUp",
            "Numpad9 PageUp": "NumpadPageUp",
            "Numpad0 Insert": "NumpadInsert",
            "NumpadDecimal Delete": "NumpadDelete",
        };
        var code_to_mmkCode = {
            "Left": "ArrowLeft",
            "Right": "ArrowRight",
            "Up": "ArrowUp",
            "Down": "ArrowDown",
            "0": "Digit0",
            "1": "Digit1",
            "2": "Digit2",
            "3": "Digit3",
            "4": "Digit4",
            "5": "Digit5",
            "6": "Digit6",
            "7": "Digit7",
            "8": "Digit8",
            "9": "Digit9",
            "VolumeMute": "AudioVolumeMute",
            "VolumeDown": "AudioVolumeDown",
            "VolumeUp": "AudioVolumeUp",
            "OSLeft": "MetaLeft",
            "OSRight": "MetaRight",
        };
        function fixEventMmkCode_FromCode(event) {
            if (event.code === undefined)
                return;
            var tmpMmkCode;
            var m;
            if ((event.code === "") || (event.code === "Unidentified"))
                event.mmkCode = "0x" + event.keyCode.toString(16).toUpperCase();
            else if ((tmpMmkCode = code_key_to_mmkCode[event.code + " " + event.key]))
                event.mmkCode = tmpMmkCode;
            else if ((tmpMmkCode = code_to_mmkCode[event.code]))
                event.mmkCode = tmpMmkCode;
            else
                event.mmkCode = event.code;
        }
        keyboard.fixEventMmkCode_FromCode = fixEventMmkCode_FromCode;
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        var keyCode_key_to_mmkCode = {};
        var keyupdown_keyCode_to_mmkKey = {
            0x03: "Cancel",
            0x06: "Help",
            0x08: "Backspace",
            0x09: "Tab",
            0x0D: "Enter",
            0x10: "Shift",
            0x11: "Control",
            0x12: "Alt",
            0x13: "Pause",
            0x14: "CapsLock",
            0x1B: "Escape",
            0x20: "Space",
            0x21: "PageUp",
            0x22: "PageDown",
            0x23: "End",
            0x24: "Home",
            0x25: "ArrowLeft",
            0x26: "ArrowUp",
            0x27: "ArrowRight",
            0x28: "ArrowDown",
            0x2a: "PrintScreen",
            0x2c: "PrintScreen",
            0x2d: "Insert",
            0x2e: "Delete",
            0x2f: "Help",
            0x30: "Digit0",
            0x31: "Digit1",
            0x32: "Digit2",
            0x33: "Digit3",
            0x34: "Digit4",
            0x35: "Digit5",
            0x36: "Digit6",
            0x37: "Digit7",
            0x38: "Digit8",
            0x39: "Digit9",
            0x3b: "Semicolon",
            0x3c: "LessThan",
            0x3d: "NumpadEqual",
            0x3e: "GreaterThan",
            0x3f: "QuestionMark",
            0x41: "KeyA",
            0x42: "KeyB",
            0x43: "KeyC",
            0x44: "KeyD",
            0x45: "KeyE",
            0x46: "KeyF",
            0x47: "KeyG",
            0x48: "KeyH",
            0x49: "KeyI",
            0x4a: "KeyJ",
            0x4b: "KeyK",
            0x4c: "KeyL",
            0x4d: "KeyM",
            0x4e: "KeyN",
            0x4f: "KeyO",
            0x50: "KeyP",
            0x51: "KeyQ",
            0x52: "KeyR",
            0x53: "KeyS",
            0x54: "KeyT",
            0x55: "KeyU",
            0x56: "KeyV",
            0x57: "KeyW",
            0x58: "KeyX",
            0x59: "KeyY",
            0x5a: "KeyZ",
            0x5b: "MetaLeft",
            0x5c: "MetaRight",
            0x5d: "ContextMenu",
            0x60: "Numpad0",
            0x61: "Numpad1",
            0x62: "Numpad2",
            0x63: "Numpad3",
            0x64: "Numpad4",
            0x65: "Numpad5",
            0x66: "Numpad6",
            0x67: "Numpad7",
            0x68: "Numpad8",
            0x69: "Numpad9",
            0x6a: "NumpadMultiply",
            0x6b: "NumpadAdd",
            0x6c: "NumpadSeperator",
            0x6d: "NumpadSubtract",
            0x6e: "NumpadDecimal",
            0x6f: "NumpadDivide",
            0x70: "F1",
            0x71: "F2",
            0x72: "F3",
            0x73: "F4",
            0x74: "F5",
            0x75: "F6",
            0x76: "F7",
            0x77: "F8",
            0x78: "F9",
            0x79: "F10",
            0x7a: "F11",
            0x7b: "F12",
            0x90: "NumLock",
            0x91: "ScrollLock",
            0xba: "Semicolon",
            0xbb: "Equal",
            0xbc: "Comma",
            0xbd: "Minus",
            0xbe: "Period",
            0xbf: "Slash",
            0xc0: "Backquote",
            0xc1: "IntlRo",
            0xc2: "NumpadComma",
            0xdb: "BracketLeft",
            0xdc: "Backslash",
            0xdd: "BracketRight",
            0xde: "Quote",
        };
        var mac_keyCode_to_mmkKey = {
            0x0C: "NumLock", 0xBB: "NumpadEqual",
            0x2C: "F13", 0x7C: "PrintScreen",
            0x91: "F14", 0x7D: "ScrollLock",
            0x13: "F15", 0x7E: "Pause",
        };
        var mmkKey_to_mmkKey = {
            "NumpadNumlock": "Numlock",
            "NumpadDel": "NumpadDelete",
        };
        function startsWith(v, prefix) {
            if (v.length < prefix.length)
                return false;
            for (var i = 0; i < prefix.length; ++i)
                if (v[i] !== prefix[i])
                    return false;
            return true;
        }
        function endsWith(v, postfix) {
            if (v.length < postfix.length)
                return false;
            var diff = v.length - postfix.length;
            for (var i = 0; i < postfix.length; ++i)
                if (v[i + diff] !== postfix[i])
                    return false;
            return true;
        }
        function ensurePostfix(v, postfix) { return endsWith(v, postfix) ? v : (v + postfix); }
        function ensurePrefix(v, prefix) { return startsWith(v, prefix) ? v : (prefix + v); }
        function fixEventMmkKey_FromUpDownKeyCode(event) {
            if (event.type === "keypress")
                return;
            var s;
            var m;
            if ((s = keyupdown_keyCode_to_mmkKey[event.keyCode]))
                event.mmkKey = s;
            else
                event.mmkKey = "0x" + event.keyCode.toString(16).toUpperCase();
            if (event.location !== undefined) {
                switch (event.location) {
                    case KeyboardEvent.DOM_KEY_LOCATION_LEFT:
                        event.mmkKey = ensurePostfix(event.mmkKey, "Left");
                        break;
                    case KeyboardEvent.DOM_KEY_LOCATION_RIGHT:
                        event.mmkKey = ensurePostfix(event.mmkKey, "Right");
                        break;
                    case KeyboardEvent.DOM_KEY_LOCATION_NUMPAD:
                        event.mmkKey = ensurePrefix(event.key, "Numpad");
                        break;
                }
            }
            if ((s = mmkKey_to_mmkKey[event.mmkKey]))
                event.mmkKey = s;
        }
        keyboard.fixEventMmkKey_FromUpDownKeyCode = fixEventMmkKey_FromUpDownKeyCode;
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        var config;
        (function (config) {
            config.fixRepeat = true;
        })(config = keyboard.config || (keyboard.config = {}));
        var lastEvents = {
            "keydown": null,
            "keypress": null
        };
        function fixEventMmkRepeat(event) {
            event.mmkRepeat = event.repeat || false;
            if (!config.fixRepeat)
                return;
            if (event.repeat)
                config.fixRepeat = false;
            if (event.type == "keyup") {
                Object.keys(lastEvents).forEach(function (key) { return lastEvents[key] = null; });
            }
            var prevEvent = lastEvents[event.type];
            if (prevEvent === undefined)
                return;
            if (prevEvent === null) {
                lastEvents[event.type] = event;
                return;
            }
            console.assert(prevEvent.type == event.type);
            lastEvents[event.type] = event;
            if (prevEvent.keyCode !== event.keyCode)
                return;
            if (prevEvent.charCode !== event.charCode)
                return;
            if (prevEvent.code !== event.code)
                return;
            if (prevEvent.which !== event.which)
                return;
            if (prevEvent.altKey !== event.altKey)
                return;
            if (prevEvent.ctrlKey !== event.ctrlKey)
                return;
            if (prevEvent.shiftKey !== event.shiftKey)
                return;
            if (prevEvent.metaKey !== event.metaKey)
                return;
            if (prevEvent.location !== event.location)
                return;
            event.mmkRepeat = true;
        }
        keyboard.fixEventMmkRepeat = fixEventMmkRepeat;
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        var config;
        (function (config) {
            config.verifySimpleComboCodes = true;
        })(config = keyboard.config || (keyboard.config = {}));
        function parseSimpleKeyCombo(desc, modifierDefaults) {
            var r = tryParseSimpleKeyCombo(desc, modifierDefaults);
            console.assert(!!r, "parseSimpleKeyCombo failed to parse key combination:", desc);
            return r;
        }
        keyboard.parseSimpleKeyCombo = parseSimpleKeyCombo;
        function tryParseSimpleKeyCombo(desc, modifierDefaults) {
            if (desc === undefined || desc === null || desc === "")
                return undefined;
            if (!modifierDefaults)
                modifierDefaults = { alt: false, shift: false, ctrl: false, meta: false };
            var skc = {
                mmkCode: undefined,
                mmkKey: undefined,
                alt: modifierDefaults.alt,
                shift: modifierDefaults.shift,
                ctrl: modifierDefaults.ctrl,
                meta: modifierDefaults.meta
            };
            var remaining = desc;
            while (remaining.length > 0) {
                var nextSplit = remaining.indexOf('+', 1);
                var fragment = nextSplit === -1 ? remaining : remaining.substr(0, nextSplit);
                remaining = nextSplit === -1 ? "" : remaining.substr(nextSplit + 1);
                if ((nextSplit !== -1) && (remaining.length === 0)) {
                    console.warn("Malformed simple key combo ends with combining '+':", desc);
                    return undefined;
                }
                console.assert(fragment.length > 0, "BUG: Should be impossible to reach with fragment.length === 0");
                var firstChar = fragment[0];
                var modVal = firstChar === '!' ? false : firstChar === '?' ? undefined : true;
                switch (fragment.replace(/^[!?]/, "").toLowerCase()) {
                    case "control":
                    case "ctrl":
                    case "ctl":
                        skc.ctrl = modVal;
                        break;
                    case "shift":
                    case "shft":
                        skc.shift = modVal;
                        break;
                    case "alt":
                        skc.alt = modVal;
                        break;
                    case "meta":
                    case "win":
                    case "os":
                        skc.meta = modVal;
                        break;
                    default:
                        if (remaining.length > 0) {
                            console.warn("Unrecognized modifier key, or unexpected non-modifier mid-combination in:", desc);
                            return undefined;
                        }
                        var scanMatch = /^\[(.+)\]$/.exec(fragment);
                        if (scanMatch)
                            fragment = scanMatch[1];
                        var keys = Object.keys(keyboard.Key);
                        var i = keys.indexOf(fragment);
                        if (i === -1) {
                            console.warn("Unrecognized key:", fragment);
                            return undefined;
                        }
                        var key = keyboard.Key[fragment];
                        if (scanMatch)
                            skc.mmkCode = key;
                        else
                            skc.mmkKey = key;
                        break;
                }
            }
            return skc;
        }
        keyboard.tryParseSimpleKeyCombo = tryParseSimpleKeyCombo;
        function isSimpleKeyCombo(event, skc) {
            if (skc.mmkCode !== undefined && event.mmkCode !== skc.mmkCode)
                return false;
            if (skc.mmkKey !== undefined && event.mmkKey !== skc.mmkKey)
                return false;
            if (skc.ctrl !== undefined && event.ctrlKey !== skc.ctrl)
                return false;
            if (skc.shift !== undefined && event.shiftKey !== skc.shift)
                return false;
            if (skc.alt !== undefined && event.altKey !== skc.alt)
                return false;
            if (skc.meta !== undefined && event.metaKey !== skc.meta)
                return false;
            return true;
        }
        keyboard.isSimpleKeyCombo = isSimpleKeyCombo;
        function equalSimpleKeyCombo(l, r) {
            return (l.mmkCode === r.mmkCode) &&
                (l.mmkKey === r.mmkKey) &&
                (l.ctrl === r.ctrl) &&
                (l.shift === r.shift) &&
                (l.alt === r.alt) &&
                (l.meta === r.meta);
        }
        function testEqual(L, R) { var Lskc = parseSimpleKeyCombo(L); var Rskc = parseSimpleKeyCombo(R); var eq = equalSimpleKeyCombo(Lskc, Rskc); console.assert(eq, "Expected:", L, "(", Lskc, ") ===", R, "(", Rskc, ")"); }
        function testNotEqual(L, R) { var Lskc = parseSimpleKeyCombo(L); var Rskc = parseSimpleKeyCombo(R); var eq = equalSimpleKeyCombo(Lskc, Rskc); console.assert(!eq, "Expected:", L, "(", Lskc, ") !==", R, "(", Rskc, ")"); }
        testEqual("Ctrl+Alt+Del", "Control+Alt+Delete");
        testNotEqual("Ctrl+Alt+Del", "Control+Alt+Ins");
        testEqual("!Ctrl+!Alt+!Shift+Delete", "Delete");
        testNotEqual("Delete", "Ctrl+Delete");
        testNotEqual("Delete", "Alt+Delete");
        testNotEqual("Delete", "Shift+Delete");
        testNotEqual("Delete", "Meta+Delete");
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
var mmk;
(function (mmk) {
    var keyboard;
    (function (keyboard) {
        var ReservedCombinations = [
            { keys: "Ctrl+Alt+Ins", origin: "Media", action: "Play / Restart" },
            { keys: "Ctrl+Alt+Del", origin: "System", action: "Close program, secure attention, login, etc." },
            { keys: "Ctrl+Alt+Home", origin: "Media", action: "Pause" },
            { keys: "Ctrl+Alt+End", origin: "Media", action: "Stop" },
            { keys: "Ctrl+Alt+PageUp", origin: "Media", action: "Prev track" },
            { keys: "Ctrl+Alt+PageDown", origin: "Media", action: "Next track" },
            { keys: "Alt+Home", origin: "Browser", action: "Home page" },
            { keys: "Alt+End", origin: "f.lux", action: "Toggle (1 hour)" },
            { keys: "Alt+PageUp", origin: "f.lux", action: "Brighten" },
            { keys: "Alt+PageDown", origin: "f.lux", action: "Dim" },
            { keys: "Ctrl+PageDown", origin: "Browser", action: "Next tab" },
            { keys: "Ctrl+PageUp", origin: "Browser", action: "Previous tab" },
            { keys: "Home", origin: "Browser", action: "Scroll to top" },
            { keys: "End", origin: "Browser", action: "Scroll to bottom" },
            { keys: "PageUp", origin: "Browser", action: "Scroll up a page" },
            { keys: "PageDown", origin: "Browser", action: "Scroll down a page" },
            { keys: "Tab", origin: "Browser", action: "Focus next" },
            { keys: "Shift+Tab", origin: "Browser", action: "Focus previous" },
            { keys: "Ctrl+Tab", origin: "Browser", action: "Next tab" },
            { keys: "Ctrl+Shift+Tab", origin: "Browser", action: "Previous tab" },
            { keys: "Alt+Tab", origin: "System", action: "Next window" },
            { keys: "Alt+Shift+Tab", origin: "System", action: "Previous window" },
            { keys: "Ctrl+Esc", origin: "System", action: "Start menu" },
            { keys: "Ctrl+Shift+Esc", origin: "System", action: "Task manager" },
            { keys: "Alt+Esc", origin: "System", action: "Focus next window" },
            { keys: "F1", origin: "Browser", action: "Help" },
            { keys: "F3", origin: "Browser", action: "Find" },
            { keys: "Ctrl+F4", origin: "Browser", action: "Close Tab/Window" },
            { keys: "Alt+F4", origin: "System", action: "Close Window" },
            { keys: "F5", origin: "Browser", action: "Refresh Page" },
            { keys: "F11", origin: "Browser", action: "Full Screen" },
            { keys: "F12", origin: "Browser", action: "Developer Tools" },
            { keys: "Ctrl+1", origin: "Browser", action: "Select tab 1" },
            { keys: "Ctrl+2", origin: "Browser", action: "Select tab 2" },
            { keys: "Ctrl+3", origin: "Browser", action: "Select tab 3" },
            { keys: "Ctrl+4", origin: "Browser", action: "Select tab 4" },
            { keys: "Ctrl+5", origin: "Browser", action: "Select tab 5" },
            { keys: "Ctrl+6", origin: "Browser", action: "Select tab 6" },
            { keys: "Ctrl+7", origin: "Browser", action: "Select tab 7" },
            { keys: "Ctrl+8", origin: "Browser", action: "Select tab 8" },
            { keys: "Ctrl+9", origin: "Browser", action: "Select tab 9" },
            { keys: "Ctrl+0", origin: "Browser", action: "Select last tab" },
            { keys: "Ctrl+-", origin: "Browser", action: "Zoom out" },
            { keys: "Ctrl+=", origin: "Browser", action: "Zoom in" },
            { keys: "Backspace", origin: "Browser", action: "Previous History" },
            { keys: "Ctrl+Alt+Up", origin: "Media", action: "Player volume up" },
            { keys: "Ctrl+Alt+Down", origin: "Media", action: "Player volume down" },
            { keys: "Ctrl+Alt+Left", origin: "Media", action: "Seek backward" },
            { keys: "Ctrl+Alt+Right", origin: "Media", action: "Seek forward" },
            { keys: "Alt+Left", origin: "Browser", action: "Previous History" },
            { keys: "Alt+Right", origin: "Browser", action: "Next History" },
            { keys: "Up", origin: "Browser", action: "Scroll up" },
            { keys: "Down", origin: "Browser", action: "Scroll down" },
            { keys: "Left", origin: "Browser", action: "Scroll left" },
            { keys: "Right", origin: "Browser", action: "Scroll right" },
            { keys: "Ctrl+Shift+B", origin: "Browser", action: "Toggle bookmarks bar" }
        ];
        ReservedCombinations.forEach(function (rc) {
            if (rc.overrideable === undefined) {
                if (rc.origin === "System")
                    rc.overrideable = false;
                else if (rc.origin === "Media")
                    rc.overrideable = false;
                else if (rc.origin === "f.lux")
                    rc.overrideable = false;
                else if (rc.origin === "Browser")
                    rc.overrideable = true;
                else {
                    console.warn("No default overrideable setting for", rc.origin);
                    rc.overrideable = false;
                }
            }
        });
        function systemConflictsWithSimpleKeyCombo(skc) {
            return ReservedCombinations.filter(function (re) {
                var reSkc = keyboard.parseSimpleKeyCombo(re.keys);
                var reKeyOrCode = reSkc.mmkKey || reSkc.mmkCode;
                if (!reKeyOrCode) {
                    console.warn("Cannot detect conflicts with", re.keys, "yet");
                    return false;
                }
                if (skc.ctrl !== undefined && reSkc.ctrl !== undefined && skc.ctrl !== reSkc.ctrl)
                    return false;
                if (skc.alt !== undefined && reSkc.alt !== undefined && skc.alt !== reSkc.alt)
                    return false;
                if (skc.shift !== undefined && reSkc.shift !== undefined && skc.shift !== reSkc.shift)
                    return false;
                if (skc.meta !== undefined && reSkc.meta !== undefined && skc.meta !== reSkc.meta)
                    return false;
                if (skc.mmkKey === reKeyOrCode)
                    return true;
                if (skc.mmkCode === reKeyOrCode)
                    return true;
                return false;
            });
        }
        keyboard.systemConflictsWithSimpleKeyCombo = systemConflictsWithSimpleKeyCombo;
        addEventListener("load", function () {
            console.assert(systemConflictsWithSimpleKeyCombo(keyboard.parseSimpleKeyCombo("Left")).filter(function (r) { return !r.overrideable || r.action.indexOf("Scroll") === -1; }).length == 0);
            console.assert(systemConflictsWithSimpleKeyCombo(keyboard.parseSimpleKeyCombo("!Alt+Left")).filter(function (r) { return !r.overrideable || r.action.indexOf("Scroll") === -1; }).length == 0);
            console.assert(systemConflictsWithSimpleKeyCombo(keyboard.parseSimpleKeyCombo("?Alt+Left")).filter(function (r) { return !r.overrideable || r.action.indexOf("Scroll") === -1; }).length > 0);
            console.assert(systemConflictsWithSimpleKeyCombo(keyboard.parseSimpleKeyCombo("Alt+Left")).filter(function (r) { return !r.overrideable || r.action.indexOf("Scroll") === -1; }).length > 0);
        });
    })(keyboard = mmk.keyboard || (mmk.keyboard = {}));
})(mmk || (mmk = {}));
//# sourceMappingURL=mmk.keyboard.js.map