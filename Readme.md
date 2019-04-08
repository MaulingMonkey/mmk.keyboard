
# mmk.keyboard

<strong>M</strong>auling<strong>M</strong>on<strong>k</strong>ey's typescript keyboard API for consistent cross-browser keybinding, polling input for games, etc.

* GitHub:  [github.com/MaulingMonkey/mmk.keyboard](https://github.com/MaulingMonkey/mmk.keyboard)
* Demo:    [maulingmonkey.com/mmk.keyboard/demo/](https://maulingmonkey.com/mmk.keyboard/demo/)
* Docs:    [maulingmonkey.com/mmk.keyboard/docs/](https://maulingmonkey.com/mmk.keyboard/docs/)
* NPM:     [@maulingmonkey/keyboard](https://www.npmjs.com/package/@maulingmonkey/keyboard)
* License: [Apache 2.0](LICENSE.txt)

# What?  Why?

The vanilla browser keyboard APIs are pretty inconsistent about a lot of things.  IE11's keyboardEvent.repeat lies,
`.code` may or may not be available - and if present, has different names for the same keys across different browsers,
vanilla numpad events are annoying to differentiate from other hotkeys (e.g. `Shift`+`Numpad1` maps to `key: "End"`),
etc.) which is annoying for roguelikes...

Additionally, doing "the right thing" with the vanilla API isn't straightforward.  A lot of webcomics I read implement
page handlers for `ArrowLeft` / `ArrowRight`, which is nice.  Less nice is that most of them don't think to check
`event.alt` or other modifier keys, so their page handlers interfere with browser history navigation (`Alt`+`ArrowLeft`,
`Alt`+`ArrowRight` in Chrome).

# Browser Support

| OS        | Browser   | U.S.  | Dvorak[1] | mmkCode | keypress[2] |
| --------- | --------- | ----- | --------- | ------- | ----------- |
| Windows 7 | Chrome 57 | ✓    | ✓        | ✓       | ✗          |
| Windows 7 | IE 11     | ✓    | ✓        | ✗ [3]   | ✗          |

* [1] Dvorak "support" means mmkKey reports correctly the logical key pressed.
* [2] Key press events are only partially implemented:  mmkCode should be set, if available.  mmkKey is not, period.
* [3] This browser provides no API to get physical key codes - and thus cannot support mmkCode at all.



# Basic API
```typescript
// APIs for consistent results across multiple browsers
keyboardEvent.mmkRepeat // Workaround IE11 keyboardEvent.repeat lying (always being false)
keyboardEvent.mmkKey    // Logical key pressed               (e.g. by keyboard layout labels)
keyboardEvent.mmkCode   // Physical key pressed if available (e.g. ignoring keyboard layout)

// Combination parsing and testing
combo = mmk.keyboard.parseSimpleKeyCombo("Alt+["); // Won't match "[" or "Ctrl+Alt+["
combo = mmk.keyboard.parseSimpleKeyCombo("?Shift+?Ctrl+Alt+["); // Match "Alt+[" or "Ctrl+Alt+[" but not "Meta+["
if (mmk.keyboard.isSimpleKeyCombo(keyboardEvent, combo)) { ... }
conflicts = mmk.keyboard.systemConflictsWithSimpleKeyCombo(combo).filter(conflict => !conflict.overrideable);
```



# Unstablized API Bits

| What           | Why                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------- |
| mmkRepeat      | Still mulling over how to handle LCtrl + RCtrl "repeats" in Chrome                                |
| mmkKey Digits  | Still mulling over how to handle Digit0 vs Numpad0                                                |
| mmkCode Numpad | Still mulling over how to handle Shift+Numpad 1                                                   |
| mmkCode IE11   | Could add fallback for some keys that doesn't rely on keyboard layout (e.g. arrows, basic numpad) |
| Conflicts API  | Some conflict detection depends on mmkKey/mmkCode bits above                                      |
| Key.CtrlLeft   | Might drop sided keys if we split off a separate 'Code' field.                                    |
| Key["0"]       | Ambiguous - Digit0?  Include Numpad0?  Key based?  Code based?  ...                               |
| Key["."]       | Punctuation is very likely to be dropped from the Key namespace at some point - too ambiguous     |
| parseSimpleKeyCombo               | Naming? |
| isSimpleKeyCombo                  | Naming? |
| systemConflictsWithSimpleKeyCombo | Naming?  Bloody wordy. |

(Unstable here means the API is subject to change - it shouldn't crash or anything.)



# Project Scope

Perhaps easier to say what's *not* in scope:
* No "on screen keyboard" support (I should make one, but it can be a separate module)
* No/limited automatic keyboard layout detection.  Even flash doesn't have an API - I'd need to write my own native plugins?  Might be able to partially bodge around it.



# Installation

## Via npm
* Grab [NPM](https://nodejs.org/en/) via node.js
* Install per project
  ```cmd
  npm i @maulingmonkey/keyboard
  ```
