declare namespace mmk.keyboard {
}
declare namespace mmk.keyboard.Key {
    const Escape: string;
    const Esc: string;
    const F1: string;
    const F2: string;
    const F3: string;
    const F4: string;
    const F5: string;
    const F6: string;
    const F7: string;
    const F8: string;
    const F9: string;
    const F10: string;
    const F11: string;
    const F12: string;
    const Pause: string;
    const PrintScreen: string;
    const ScrollLock: string;
    const Backquote: string;
    const Digit0: string;
    const D0: string;
    const Digit1: string;
    const D1: string;
    const Digit2: string;
    const D2: string;
    const Digit3: string;
    const D3: string;
    const Digit4: string;
    const D4: string;
    const Digit5: string;
    const D5: string;
    const Digit6: string;
    const D6: string;
    const Digit7: string;
    const D7: string;
    const Digit8: string;
    const D8: string;
    const Digit9: string;
    const D9: string;
    const Minus: string;
    const Equal: string;
    const Backspace: string;
    const Tab: string;
    const CapsLock: string;
    const Caps: string;
    const A: string;
    const B: string;
    const C: string;
    const D: string;
    const E: string;
    const F: string;
    const G: string;
    const H: string;
    const I: string;
    const J: string;
    const K: string;
    const L: string;
    const M: string;
    const N: string;
    const O: string;
    const P: string;
    const Q: string;
    const R: string;
    const S: string;
    const T: string;
    const U: string;
    const V: string;
    const W: string;
    const X: string;
    const Y: string;
    const Z: string;
    const KeyA: string;
    const KeyB: string;
    const KeyC: string;
    const KeyD: string;
    const KeyE: string;
    const KeyF: string;
    const KeyG: string;
    const KeyH: string;
    const KeyI: string;
    const KeyJ: string;
    const KeyK: string;
    const KeyL: string;
    const KeyM: string;
    const KeyN: string;
    const KeyO: string;
    const KeyP: string;
    const KeyQ: string;
    const KeyR: string;
    const KeyS: string;
    const KeyT: string;
    const KeyU: string;
    const KeyV: string;
    const KeyW: string;
    const KeyX: string;
    const KeyY: string;
    const KeyZ: string;
    const BracketLeft: string;
    const BracketRight: string;
    const Backslash: string;
    const Semicolon: string;
    const Quote: string;
    const Comma: string;
    const Period: string;
    const Slash: string;
    const Enter: string;
    const ControlLeft: string;
    const CtrlLeft: string;
    const LCtrl: string;
    const ControlRight: string;
    const CtrlRight: string;
    const RCtrl: string;
    const AltLeft: string;
    const LAlt: string;
    const MenuLeft: string;
    const LMenu: string;
    const AltRight: string;
    const RAlt: string;
    const MenuRight: string;
    const RMenu: string;
    const ShiftLeft: string;
    const LShift: string;
    const ShiftRight: string;
    const RShift: string;
    const MetaLeft: string;
    const LMeta: string;
    const WinLeft: string;
    const LWin: string;
    const OSLeft: string;
    const MetaRight: string;
    const RMeta: string;
    const WinRight: string;
    const RWin: string;
    const OSRight: string;
    const ContextMenu: string;
    const Space: string;
    const Insert: string;
    const Ins: string;
    const Delete: string;
    const Del: string;
    const Home: string;
    const End: string;
    const PageUp: string;
    const PgUp: string;
    const PageDown: string;
    const PgDown: string;
    const ArrowLeft: string;
    const Left: string;
    const ArrowRight: string;
    const Right: string;
    const ArrowUp: string;
    const Up: string;
    const ArrowDown: string;
    const Down: string;
    const NumLock: string;
    const NumpadAdd: string;
    const NumpadSubtract: string;
    const NumpadDivide: string;
    const NumpadMultiply: string;
    const NumpadEnter: string;
    const Numpad0: string;
    const Num0: string;
    const Numpad1: string;
    const Num1: string;
    const Numpad2: string;
    const Num2: string;
    const Numpad3: string;
    const Num3: string;
    const Numpad4: string;
    const Num4: string;
    const Numpad5: string;
    const Num5: string;
    const Numpad6: string;
    const Num6: string;
    const Numpad7: string;
    const Num7: string;
    const Numpad8: string;
    const Num8: string;
    const Numpad9: string;
    const Num9: string;
    const NumpadDecimal: string;
    const NumpadFunc0: string;
    const NumpadFunc1: string;
    const NumpadFunc2: string;
    const NumpadFunc3: string;
    const NumpadFunc4: string;
    const NumpadFunc5: string;
    const NumpadFunc6: string;
    const NumpadFunc7: string;
    const NumpadFunc8: string;
    const NumpadFunc9: string;
    const NumpadFuncDecimal: string;
    const NumpadInsert: string;
    const NumpadEnd: string;
    const NumpadDown: string;
    const NumpadPageDown: string;
    const NumpadLeft: string;
    const NumpadClear: string;
    const NumpadRight: string;
    const NumpadHome: string;
    const NumpadUp: string;
    const NumpadPageUp: string;
    const NumpadDelete: string;
}
declare namespace mmk.keyboard {
    namespace config {
        var verifySimpleComboCodes: boolean;
    }
    interface SimpleKeyModifiers {
        alt?: boolean;
        shift?: boolean;
        ctrl?: boolean;
        meta?: boolean;
    }
    interface SimpleKeyCombo extends SimpleKeyModifiers {
        mmkCode?: string;
        mmkKey?: string;
    }
    function parseSimpleKeyCombo(desc: string, modifierDefaults?: SimpleKeyModifiers): SimpleKeyCombo;
    function tryParseSimpleKeyCombo(desc: string, modifierDefaults?: SimpleKeyModifiers): SimpleKeyCombo;
    function isSimpleKeyCombo(event: KeyboardEvent, skc: SimpleKeyCombo): boolean;
}
declare namespace mmk.keyboard {
    namespace config {
        var debugEvents: boolean;
        var debugIgnoreRepeat: boolean;
        var debugLog: boolean;
        var debugLogOnlyDown: boolean;
        var debugLogBaked: boolean;
        var debugLogRaw: boolean;
        var debugLogMods: boolean;
        var debugLogOriginalEvent: boolean;
        var debugAssertKeyDefined: boolean;
    }
    function debugDumpKeyboardEvent(ev: KeyboardEvent): void;
    function debugDumpFocusEvent(ev: FocusEvent): void;
}
declare namespace mmk.keyboard {
    function fixEventMmkCode_FromCode(event: KeyboardEvent): void;
}
declare namespace mmk.keyboard {
    function fixEventMmkKey_FromUpDownKeyCode(event: KeyboardEvent): void;
}
declare namespace mmk.keyboard {
    namespace config {
        var fixRepeat: boolean;
    }
    function fixEventMmkRepeat(event: KeyboardEvent): void;
}
declare namespace mmk.keyboard {
    interface ReservationEntry {
        keys: string;
        origin: string;
        action: string;
        overrideable?: boolean;
    }
    function systemConflictsWithSimpleKeyCombo(skc: SimpleKeyCombo): ReservationEntry[];
}
