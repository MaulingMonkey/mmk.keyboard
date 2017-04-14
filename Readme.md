# mmk.keyboard

MaulingMonKey's typescript keyboard API for consistent cross-browser keybinding, polling input for games, etc.

License: [Apache 2.0](LICENSE.txt)



# Browser Support

| OS        | Browser   | U.S.  | Dvorak | Alternate Layouts                          |
| --------- | --------- | ----- | ------ | ------------------------------------------ |
| Windows 7 | Chrome 57 | ✓ [1] | ✓     | Inferable from code <-> keyCode mismatches |
| Windows 7 | IE 11     | ✓ [1] | ✗ [2] | No means of determining layout             |

* [1] mmkKey not yet implemented
* [2] mmkCode uses logical layout instead of physical



# Example

TODO



# Project Scope

Subject to change.

* Immediate Term
  * Consistent keyboard API across multiple browsers
  * "Sane" numpad detection/handling

* Near Term
  * Polling style API for game stuff
  * Debounce events to "fix" Shift+Numpad#
  * Support for parsing keyboard shortcut strings ala "Ctrl+Alt" to actionable key event filters

* Mid Term
  * Detect and warn about potential conflicts with OS/Browser/Global App keybindings

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
