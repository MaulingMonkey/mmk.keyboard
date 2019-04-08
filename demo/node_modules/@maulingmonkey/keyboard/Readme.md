
# mmk.keyboard

<strong>M</strong>auling<strong>M</strong>on<strong>k</strong>ey's typescript keyboard API for consistent cross-browser keybinding, polling input for games, etc.

* Source:  https://github.com/MaulingMonkey/mmk.keyboard/
* Docs:    https://maulingmonkey.com/mmk.keyboard/docs/
* Demo:    https://maulingmonkey.com/mmk.keyboard/demo/
* License: [Apache 2.0](LICENSE.txt)



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

Subject to change.

* Immediate Term
  * ~~Consistent keyboard API across multiple browsers~~
  * "Sane" numpad detection/handling
  * Internal nuget

* Near Term
  * Polling style API for game stuff
  * Debounce events to "fix" Shift+Numpad#
  * ~~Support for parsing keyboard shortcut strings ala "Ctrl+Alt" to actionable key event filters~~
  * Public nuget

* Mid Term
  * ~~Detect and warn about potential conflicts with OS/Browser/Global App keybindings~~ **Partial (API)**
  * Detect and warn about intra-binding conflicts**

* Long Term
  * Test more browsers
  * Manually selected alternate keyboard layout support (QWERTY vs Dvorak ...)
  * Smart guess keyboard layout based on locale (QWERTY vs AZERTY ...)
  * Virtual keyboard?

* Out of scope (for now)
  * Semi-automatic keyboard layout detection?  (E.g. "press A" and see which scancode actually lights up)
  * Automatic keyboard layout detection.  Even flash doesn't have an API - I'd need to write my own native plugins?



# Installation

## Via NuGet
<strike>Add [mmk.keyboard](https://www.nuget.org/packages/mmk.keyboard/) to your project via nuget.  Done!</strike>  **TODO:  Soon (tm)**
