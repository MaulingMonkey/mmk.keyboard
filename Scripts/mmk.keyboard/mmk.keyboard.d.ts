/**
 * Constants for all legal `mmkKey` / `mmkCode` values.  By using these values instead of string literals, you can avoid
 * some typos causing match failures.  This is also used for normalization - e.g. `Key.Left === "ArrowLeft"`, not
 * `"Left"`, since `mmk.keyboard` remaps `"Left"` to `"ArrowLeft"` for consistency across multiple browsers (some of
 * which use the former, some of which use the latter.)
 */
declare namespace mmk.keyboard.Key {
    const Escape = "Escape";
    const Esc = "Escape";
    const F1 = "F1";
    const F2 = "F2";
    const F3 = "F3";
    const F4 = "F4";
    const F5 = "F5";
    const F6 = "F6";
    const F7 = "F7";
    const F8 = "F8";
    const F9 = "F9";
    const F10 = "F10";
    const F11 = "F11";
    const F12 = "F12";
    const Pause = "Pause";
    const PrintScreen = "PrintScreen";
    const ScrollLock = "ScrollLock";
    const Backquote = "Backquote";
    const Digit0 = "Digit0";
    const D0 = "Digit0";
    const Digit1 = "Digit1";
    const D1 = "Digit1";
    const Digit2 = "Digit2";
    const D2 = "Digit2";
    const Digit3 = "Digit3";
    const D3 = "Digit3";
    const Digit4 = "Digit4";
    const D4 = "Digit4";
    const Digit5 = "Digit5";
    const D5 = "Digit5";
    const Digit6 = "Digit6";
    const D6 = "Digit6";
    const Digit7 = "Digit7";
    const D7 = "Digit7";
    const Digit8 = "Digit8";
    const D8 = "Digit8";
    const Digit9 = "Digit9";
    const D9 = "Digit9";
    const Minus = "Minus";
    const Equal = "Equal";
    const Backspace = "Backspace";
    const Tab = "Tab";
    const CapsLock = "CapsLock";
    const Caps = "CapsLock";
    const A = "KeyA";
    const B = "KeyB";
    const C = "KeyC";
    const D = "KeyD";
    const E = "KeyE";
    const F = "KeyF";
    const G = "KeyG";
    const H = "KeyH";
    const I = "KeyI";
    const J = "KeyJ";
    const K = "KeyK";
    const L = "KeyL";
    const M = "KeyM";
    const N = "KeyN";
    const O = "KeyO";
    const P = "KeyP";
    const Q = "KeyQ";
    const R = "KeyR";
    const S = "KeyS";
    const T = "KeyT";
    const U = "KeyU";
    const V = "KeyV";
    const W = "KeyW";
    const X = "KeyX";
    const Y = "KeyY";
    const Z = "KeyZ";
    const KeyA = "KeyA";
    const KeyB = "KeyB";
    const KeyC = "KeyC";
    const KeyD = "KeyD";
    const KeyE = "KeyE";
    const KeyF = "KeyF";
    const KeyG = "KeyG";
    const KeyH = "KeyH";
    const KeyI = "KeyI";
    const KeyJ = "KeyJ";
    const KeyK = "KeyK";
    const KeyL = "KeyL";
    const KeyM = "KeyM";
    const KeyN = "KeyN";
    const KeyO = "KeyO";
    const KeyP = "KeyP";
    const KeyQ = "KeyQ";
    const KeyR = "KeyR";
    const KeyS = "KeyS";
    const KeyT = "KeyT";
    const KeyU = "KeyU";
    const KeyV = "KeyV";
    const KeyW = "KeyW";
    const KeyX = "KeyX";
    const KeyY = "KeyY";
    const KeyZ = "KeyZ";
    const BracketLeft = "BracketLeft";
    const BracketRight = "BracketRight";
    const Backslash = "Backslash";
    const Semicolon = "Semicolon";
    const Quote = "Quote";
    const Comma = "Comma";
    const Period = "Period";
    const Slash = "Slash";
    const Enter = "Enter";
    const ControlLeft = "ControlLeft";
    const CtrlLeft = "ControlLeft";
    const LCtrl = "ControlLeft";
    const ControlRight = "ControlRight";
    const CtrlRight = "ControlRight";
    const RCtrl = "ControlRight";
    const AltLeft = "AltLeft";
    const LAlt = "AltLeft";
    const MenuLeft = "AltLeft";
    const LMenu = "AltLeft";
    const AltRight = "AltRight";
    const RAlt = "AltRight";
    const MenuRight = "AltRight";
    const RMenu = "AltRight";
    const ShiftLeft = "ShiftLeft";
    const LShift = "ShiftLeft";
    const ShiftRight = "ShiftRight";
    const RShift = "ShiftRight";
    const MetaLeft = "MetaLeft";
    const LMeta = "MetaLeft";
    const WinLeft = "MetaLeft";
    const LWin = "MetaLeft";
    const OSLeft = "MetaLeft";
    const MetaRight = "MetaRight";
    const RMeta = "MetaRight";
    const WinRight = "MetaRight";
    const RWin = "MetaRight";
    const OSRight = "MetaRight";
    const ContextMenu = "ContextMenu";
    const Space = "Space";
    const Insert = "Insert";
    const Ins = "Insert";
    const Delete = "Delete";
    const Del = "Delete";
    const Home = "Home";
    const End = "End";
    const PageUp = "PageUp";
    const PgUp = "PageUp";
    const PageDown = "PageDown";
    const PgDown = "PageDown";
    const ArrowLeft = "ArrowLeft";
    const Left = "ArrowLeft";
    const ArrowRight = "ArrowRight";
    const Right = "ArrowRight";
    const ArrowUp = "ArrowUp";
    const Up = "ArrowUp";
    const ArrowDown = "ArrowDown";
    const Down = "ArrowDown";
    const NumLock = "NumLock";
    const NumpadAdd = "NumpadAdd";
    const NumpadSubtract = "NumpadSubtract";
    const NumpadDivide = "NumpadDivide";
    const NumpadMultiply = "NumpadMultiply";
    const NumpadEnter = "NumpadEnter";
    const Numpad0 = "Numpad0";
    const Num0 = "Numpad0";
    const Numpad1 = "Numpad1";
    const Num1 = "Numpad1";
    const Numpad2 = "Numpad2";
    const Num2 = "Numpad2";
    const Numpad3 = "Numpad3";
    const Num3 = "Numpad3";
    const Numpad4 = "Numpad4";
    const Num4 = "Numpad4";
    const Numpad5 = "Numpad5";
    const Num5 = "Numpad5";
    const Numpad6 = "Numpad6";
    const Num6 = "Numpad6";
    const Numpad7 = "Numpad7";
    const Num7 = "Numpad7";
    const Numpad8 = "Numpad8";
    const Num8 = "Numpad8";
    const Numpad9 = "Numpad9";
    const Num9 = "Numpad9";
    const NumpadDecimal = "NumpadDecimal";
    const NumpadFunc0 = "NumpadInsert";
    const NumpadFunc1 = "NumpadEnd";
    const NumpadFunc2 = "NumpadDown";
    const NumpadFunc3 = "NumpadPageDown";
    const NumpadFunc4 = "NumpadLeft";
    const NumpadFunc5 = "NumpadClear";
    const NumpadFunc6 = "NumpadRight";
    const NumpadFunc7 = "NumpadHome";
    const NumpadFunc8 = "NumpadUp";
    const NumpadFunc9 = "NumpadPageUp";
    const NumpadFuncDecimal = "NumpadDelete";
    const NumpadInsert = "NumpadInsert";
    const NumpadEnd = "NumpadEnd";
    const NumpadDown = "NumpadDown";
    const NumpadPageDown = "NumpadPageDown";
    const NumpadLeft = "NumpadLeft";
    const NumpadClear = "NumpadClear";
    const NumpadRight = "NumpadRight";
    const NumpadHome = "NumpadHome";
    const NumpadUp = "NumpadUp";
    const NumpadPageUp = "NumpadPageUp";
    const NumpadDelete = "NumpadDelete";
}
declare namespace mmk.keyboard {
    /**
     * Represents a set of keyboard modifier key states.  All values are tristate - e.g.:
     * ```ts
     * modifiers.alt === true      // Means Alt is required
     * modifiers.alt === false     // Means Alt is forbidden
     * modifiers.alt === undefined // Means Alt is ignored and may be held or not
     * ```
     */
    interface SimpleKeyModifiers {
        /** The `Alt` key, or `Option` key on Mac style keyboards. */
        alt?: boolean;
        /** The `Shift` key. */
        shift?: boolean;
        /** The `Control` key. */
        ctrl?: boolean;
        /** The `Windows` key, or `Command` key on Mac style keyboards. */
        meta?: boolean;
    }
    /**
     * Describes a simple key combination that requires no external state tracking (other held keys, keys within N
     * milliseconds, etc.) to fire.  For example, `Alt+F4` would possibly be represented by:
     *
     * ```js
     * { mmkKey: "F4", alt: true }
     * ```
     *
     * Or if you wanted *only* `Alt+F4` and to exclude `Alt+Ctrl+F4` and other modifier combinations:
     *
     * ```js
     * { mmkKey: "F4", alt: true, shift: false, ctrl: false, meta: false }
     * ```
     */
    interface SimpleKeyCombo extends SimpleKeyModifiers {
        /** What [[KeyboardEvent.mmkCode]] is required for this simple key combination to match. */
        mmkCode?: string;
        /** What [[KeyboardEvent.mmkKey]] is required for this simple key combination to match. */
        mmkKey?: string;
    }
    /**
     * Parse a human-readable string like `"Ctrl+Shift+B"` and turn it into a [[SimpleKeyCombo]], asserting if it fails.
     * Use [[tryParseSimpleKeyCombo]] instead if you're parsing user input, which will return `undefined` if it fails.
     * The behavior of any unspecified keys on matching the combination is controlled by `modifierDefaults`.
     * `modifierDefaults` defaults to all false, which means e.g. `"Ctrl+Shift+B"` won't match `Ctrl+Alt+Shift+B`.
     *
     * Additionally, you can use `?` to ignore a modifier (e.g. `"?Ctrl+Shift+B"` will ignore if `Ctrl` is held or not),
     * or use `!` to specify a modifier *cannot* be held (e.g. `"!Ctrl+Shift+B"` demands `Ctrl` is not held, ignoring
     * `modifierDefaults.ctrl`)
     */
    function parseSimpleKeyCombo(desc: string, modifierDefaults?: SimpleKeyModifiers): SimpleKeyCombo;
    /**
     * Parse a human-readable string like `"Ctrl+Shift+B"` and turn it into a [[SimpleKeyCombo]], or returns `undefined`.
     * Use [[parseSimpleKeyCombo]] instead if you're parsing hardcoded strings, which will assert if it fails.
     * The behavior of any unspecified keys on matching the combination is controlled by `modifierDefaults`.
     * `modifierDefaults` defaults to all false, which means e.g. `"Ctrl+Shift+B"` won't match `Ctrl+Alt+Shift+B`.
     *
     * Additionally, you can use `?` to ignore a modifier (e.g. `"?Ctrl+Shift+B"` will ignore if `Ctrl` is held or not),
     * or use `!` to specify a modifier *cannot* be held (e.g. `"!Ctrl+Shift+B"` demands `Ctrl` is not held, ignoring
     * `modifierDefaults.ctrl`)
     */
    function tryParseSimpleKeyCombo(description: string, modifierDefaults?: SimpleKeyModifiers): SimpleKeyCombo;
    /**
     * Returns true if a given [[KeyboardEvent]] matches a given [[SimpleKeyCombo]]
     */
    function isSimpleKeyCombo(event: KeyboardEvent, skc: SimpleKeyCombo): boolean;
}
/** Configuration flags and settings for how mmk.keyboard as a whole behaves. */
declare namespace mmk.keyboard.config {
    /** Master control for all per-event debugging options. */
    var debugEvents: boolean;
    /** Should events where `event.mmkRepeat === true` be ignored for debugging purpouses? */
    var debugIgnoreRepeat: boolean;
    /** Should events be logged to the console? */
    var debugLog: boolean;
    /** When logging, should only `keydown` events be logged?  Or should `keypress` / `keyup` events be logged as well? */
    var debugLogOnlyDown: boolean;
    /** When logging, should `event.mmk___` fields be logged? */
    var debugLogBaked: boolean;
    /** When logging, should `event.___` fields of the original event be logged? */
    var debugLogRaw: boolean;
    /** When logging, should `event.___Key` fields be logged? */
    var debugLogMods: boolean;
    /** When logging, should the event object as a whole be logged? */
    var debugLogOriginalEvent: boolean;
    var debugAssertKeyDefined: boolean;
}
declare namespace mmk.keyboard {
    /**
     * A description of a keyboard combination reserved by the browser, system, or program with global keybindings.
     *
     * Use [[systemConflictsWithSimpleKeyCombo]] to get a list of these that might conflict with your [[SimpleKeyCombo]]
     */
    interface ReservationEntry {
        /** The key combination.  Example: `"Ctrl+Shift+Escape"` */
        keys: string;
        /** The source of the key combination.  Examples:  `"Media"`, `"System"`, `"Browser"`, `"f.lux"`, etc. */
        origin: string;
        /** What the key combination does.  Examples:  `"Start menu"`, `"Task Manager"`, etc. */
        action: string;
        /**
         * Can this keyboard combination be overridden?
         *
         * `true` for reservations like the browser's built in `F1` help action.
         *
         * `false` for reservations like Window's `Ctrl+Alt+Delete` lock screen action.
         */
        overrideable?: boolean;
    }
    /**
     * Return a list of any browser/system/global keybindings which might conflict with your simple key combination,
     * along with information about the `keys`, `origin`, and `action` that your combo conflicts with.  Some examples:
     *
     * ```js
     * { keys: "Ctrl+Shift+B",      origin: "Browser", action: "Toggle bookmarks bar" }
     * { keys: "F1",                origin: "Browser", action: "Help"                 }
     * { keys: "Ctrl+Shift+Esc",    origin: "System",  action: "Task manager"         }
     * { keys: "Ctrl+Alt+Up",       origin: "Media",   action: "Player volume up"     }
     * { keys: "Alt+PageDown",      origin: "f.lux",   action: "Dim"                  }
     * ```
     *
     * Some bindings will be fine to override (you may not have f.lux installed at all), others can't possibly be
     * overridden at all (`Ctrl+Alt+Del`).
     *
     * @param skc Your simple key combination that might conflict with system keybindings.
     */
    function systemConflictsWithSimpleKeyCombo(skc: SimpleKeyCombo): ReservationEntry[];
}
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
    mmkCode: string | undefined;
    /**
     * The logical key pressed, respecting the user's locale.
     */
    mmkKey: string | undefined;
}
/**
 * General namespace for <strong>M</strong>auling<strong>M</strong>on<strong>k</strong>ey's typescript projects.
 *
 * You can find more typescript projects by him
 * [on github](https://github.com/MaulingMonkey?utf8=%E2%9C%93&tab=repositories&q=&type=&language=typescript)
 * or maybe [on his homepage](https://maulingmonkey.com/)
 */
declare namespace mmk { }
declare namespace mmk.keyboard {
    function debugDumpKeyboardEvent(ev: KeyboardEvent): void;
    function debugDumpFocusEvent(ev: FocusEvent): void;
}
declare namespace mmk.keyboard {
    namespace config {
        var fixRepeat: boolean;
    }
    function fixEventMmkRepeat(event: KeyboardEvent): void;
}
declare namespace mmk.keyboard {
    function fixEventMmkCode_FromCode(event: KeyboardEvent): void;
}
declare namespace mmk.keyboard {
    function fixEventMmkKey_FromUpDownKeyCode(event: KeyboardEvent): void;
}
declare namespace mmk.keyboard {
}
