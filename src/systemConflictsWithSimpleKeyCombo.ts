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

namespace mmk.keyboard {
	// Note that this is currently very incomplete.
	// I also don't expose it in any useable fashion yet.



	// In scope:
	//    * Global OS/window manager bindings
	//    * Global browser bindings
	//    * Sufficiently common global application bindings or standards (e.g. WinAmp's media keys, as shared by other apps)
	//
	//    * Accessability keybindings
	//    * Non-english locale bindings
	//
	// Scope undecided[1]:
	//    * Keybindings for applications embedding browsers (Outlook? Excel? Visual Studio? Game clients?)
	//
	// Out of scope[1]:
	//    * Your personally customized keybindings.
	//    * Sufficiently rare applications (although I'm adding f.lux so...)
	//    * Non-global keybindings for non-browser applications (e.g. notepad's keybindings don't conflict with a webpage's)
	//    * Sufficiently niche systems (I might reject pull requests for your Commodore 64 browser)
	//
	// [1] I'm open to API changes to make it easier to customize your own reservation lists without risking merge conflicts!

	/**
	 * A description of a keyboard combination reserved by the browser, system, or program with global keybindings.
	 * 
	 * Use [[systemConflictsWithSimpleKeyCombo]] to get a list of these that might conflict with your [[SimpleKeyCombo]]
	 */
	export interface ReservationEntry {
		// Add severity?
		// Consider adding more detailed origin info - e.g. browser(s), os(es), shell(s), app(s), etc.
		// TODO: Add information about which combinations are overrideable or not

		/** The key combination.  Example: `"Ctrl+Shift+Escape"` */
		keys:          string;

		/** The source of the key combination.  Examples:  `"Media"`, `"System"`, `"Browser"`, `"f.lux"`, etc. */
		origin:        string;

		/** What the key combination does.  Examples:  `"Start menu"`, `"Task Manager"`, etc. */
		action:        string;

		/**
		 * Can this keyboard combination be overridden?
		 * 
		 * `true` for reservations like the browser's built in `F1` help action.
		 * 
		 * `false` for reservations like Window's `Ctrl+Alt+Delete` lock screen action.
		 */
		overrideable?: boolean;
	}
	/** @hidden - https://en.wikipedia.org/wiki/Table_of_keyboard_shortcuts */
	const ReservedCombinations : ReservationEntry[] = [
		// 6-key region
		{ keys: "Ctrl+Alt+Ins",      origin: "Media",   action: "Play / Restart"    },
		{ keys: "Ctrl+Alt+Del",      origin: "System",  action: "Close program, secure attention, login, etc." },
		{ keys: "Ctrl+Alt+Home",     origin: "Media",   action: "Pause"             },
		{ keys: "Ctrl+Alt+End",      origin: "Media",   action: "Stop"              },
		{ keys: "Ctrl+Alt+PageUp",   origin: "Media",   action: "Prev track"        },
		{ keys: "Ctrl+Alt+PageDown", origin: "Media",   action: "Next track"        },

		{ keys: "Ctrl+Shift+Del",    origin: "Browser", action: "Clear browsing data"},

		{ keys: "Alt+Home",          origin: "Browser", action: "Home page"         },
		{ keys: "Alt+End",           origin: "f.lux",   action: "Toggle (1 hour)"   },
		{ keys: "Alt+PageUp",        origin: "f.lux",   action: "Brighten"          },
		{ keys: "Alt+PageDown",      origin: "f.lux",   action: "Dim"               },

		{ keys: "Ctrl+Ins",          origin: "Browser", action: "Copy"              },
		{ keys: "Ctrl+PageDown",     origin: "Browser", action: "Next tab"          },
		{ keys: "Ctrl+PageUp",       origin: "Browser", action: "Previous tab"      },

		{ keys: "Shift+Ins",         origin: "Browser", action: "Paste"             },
		{ keys: "Shift+Del",         origin: "Browser", action: "Cut"               },

		{ keys: "Home",              origin: "Browser", action: "Scroll to top"     },
		{ keys: "End",               origin: "Browser", action: "Scroll to bottom"  },
		{ keys: "PageUp",            origin: "Browser", action: "Scroll up a page"  },
		{ keys: "PageDown",          origin: "Browser", action: "Scroll down a page"},

		// Tab
		{ keys: "Tab",               origin: "Browser", action: "Focus next"        },
		{ keys: "Shift+Tab",         origin: "Browser", action: "Focus previous"    },
		{ keys: "Ctrl+Tab",          origin: "Browser", action: "Next tab"          },
		{ keys: "Ctrl+Shift+Tab",    origin: "Browser", action: "Previous tab"      },
		{ keys: "Alt+Tab",           origin: "System",  action: "Next window"       },
		{ keys: "Alt+Shift+Tab",     origin: "System",  action: "Previous window"   },

		// F-keys row
		{ keys: "Shift+Esc",         origin: "Browser", action: "Task Manager"      },
		{ keys: "Ctrl+Esc",          origin: "System",  action: "Start menu"        },
		{ keys: "Ctrl+Shift+Esc",    origin: "System",  action: "Task manager"      },
		{ keys: "Alt+Esc",           origin: "System",  action: "Focus next window" },

		{ keys: "F1",                origin: "Browser", action: "Help"              },
		{ keys: "F3",                origin: "Browser", action: "Find"              },
		{ keys: "Ctrl+F4",           origin: "Browser", action: "Close Tab/Window"  },
		{ keys: "Alt+F4",            origin: "System",  action: "Close Window"      },
		{ keys: "F5",                origin: "Browser", action: "Refresh Page"      },
		{ keys: "F11",               origin: "Browser", action: "Full Screen"       },
		{ keys: "F12",               origin: "Browser", action: "Developer Tools"   },

		// Top row
		{ keys: "Ctrl+1",            origin: "Browser", action: "Select tab 1"      },
		{ keys: "Ctrl+2",            origin: "Browser", action: "Select tab 2"      },
		{ keys: "Ctrl+3",            origin: "Browser", action: "Select tab 3"      },
		{ keys: "Ctrl+4",            origin: "Browser", action: "Select tab 4"      },
		{ keys: "Ctrl+5",            origin: "Browser", action: "Select tab 5"      },
		{ keys: "Ctrl+6",            origin: "Browser", action: "Select tab 6"      },
		{ keys: "Ctrl+7",            origin: "Browser", action: "Select tab 7"      },
		{ keys: "Ctrl+8",            origin: "Browser", action: "Select tab 8"      },
		{ keys: "Ctrl+9",            origin: "Browser", action: "Select tab 9"      },
		{ keys: "Ctrl+0",            origin: "Browser", action: "Select last tab"   },
		{ keys: "Ctrl+-",            origin: "Browser", action: "Zoom out"          },
		{ keys: "Ctrl+=",            origin: "Browser", action: "Zoom in"           },
		{ keys: "Backspace",         origin: "Browser", action: "Previous History"  },

		// Arrow keys
		{ keys: "Ctrl+Alt+Up",       origin: "Media",   action: "Player volume up"   },
		{ keys: "Ctrl+Alt+Down",     origin: "Media",   action: "Player volume down" },
		{ keys: "Ctrl+Alt+Left",     origin: "Media",   action: "Seek backward"      },
		{ keys: "Ctrl+Alt+Right",    origin: "Media",   action: "Seek forward"       },

		{ keys: "Alt+Left",          origin: "Browser", action: "Previous History"   },
		{ keys: "Alt+Right",         origin: "Browser", action: "Next History"       },

		{ keys: "Up",                origin: "Browser", action: "Scroll up"         },
		{ keys: "Down",              origin: "Browser", action: "Scroll down"       },
		{ keys: "Left",              origin: "Browser", action: "Scroll left"       },
		{ keys: "Right",             origin: "Browser", action: "Scroll right"      },

		// Alpha
		{ keys: "Ctrl+Shift+B",      origin: "Browser", action: "Toggle bookmarks bar" },
		{ keys: "Ctrl+Shift+D",      origin: "Browser", action: "Bookmark Open Pages"  },
		{ keys: "Ctrl+Shift+I",      origin: "Browser", action: "Developer Tools"      },
		{ keys: "Ctrl+Shift+N",      origin: "Browser", action: "New Incognito Window" },
		{ keys: "Ctrl+Shift+O",      origin: "Browser", action: "Bookmarks Manager"    },
		{ keys: "Ctrl+Shift+Q",      origin: "Browser", action: "Quit"                 },
		{ keys: "Ctrl+Shift+R",      origin: "Browser", action: "Force Refresh"        }, // e.g. ignore cache
		{ keys: "Ctrl+Shift+T",      origin: "Browser", action: "Recently Closed"      },
		{ keys: "Ctrl+Shift+W",      origin: "Browser", action: "Close Window"         }, // All tabs

		{ keys: "Alt+Shift+I",       origin: "Browser", action: "Report an Issue"      },

		{ keys: "Ctrl+A",            origin: "Browser", action: "Select All"           },
		{ keys: "Ctrl+C",            origin: "Browser", action: "Copy"                 },
		{ keys: "Ctrl+D",            origin: "Browser", action: "Bookmark"             },
		{ keys: "Ctrl+E",            origin: "Browser", action: "Search Engine"        },
		{ keys: "Ctrl+F",            origin: "Browser", action: "Find"                 },
		{ keys: "Ctrl+G",            origin: "Browser", action: "Find"                 },
		{ keys: "Ctrl+H",            origin: "Browser", action: "History"              },
		{ keys: "Ctrl+J",            origin: "Browser", action: "Downloads"            },
		{ keys: "Ctrl+K",            origin: "Browser", action: "Search Engine"        },
		{ keys: "Ctrl+N",            origin: "Browser", action: "New Window"           }, // Cannot be overridden in Chrome
		{ keys: "Ctrl+O",            origin: "Browser", action: "Open"                 },
		{ keys: "Ctrl+P",            origin: "Browser", action: "Print"                },
		{ keys: "Ctrl+R",            origin: "Browser", action: "Refresh"              },
		{ keys: "Ctrl+S",            origin: "Browser", action: "Save Page"            },
		{ keys: "Ctrl+T",            origin: "Browser", action: "New Tab"              },
		{ keys: "Ctrl+U",            origin: "Browser", action: "View Source"          },
		{ keys: "Ctrl+V",            origin: "Browser", action: "Paste"                },
		{ keys: "Ctrl+W",            origin: "Browser", action: "Close Tab"            },
		{ keys: "Ctrl+X",            origin: "Browser", action: "Cut"                  },
		{ keys: "Ctrl+Z",            origin: "Browser", action: "Undo"                 },

		{ keys: "Alt+D",             origin: "Browser", action: "Select Address Bar"   },
		{ keys: "Alt+E",             origin: "Browser", action: "File Menu"            }, // Chrome
		{ keys: "Alt+F",             origin: "Browser", action: "File Menu"            },
		// Not anywhere even remotely close to complete!
	];
	ReservedCombinations.forEach(rc=>{
		if (rc.overrideable === undefined) {
			if      (rc.origin === "System" ) rc.overrideable = false;
			else if (rc.origin === "Media"  ) rc.overrideable = false;
			else if (rc.origin === "f.lux"  ) rc.overrideable = false;
			else if (rc.origin === "Browser") rc.overrideable = true;
			else {
				console.warn("No default overrideable setting for",rc.origin);
				rc.overrideable = false; // Be pessemistic
			}
		}
	});

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
	export function systemConflictsWithSimpleKeyCombo(skc: SimpleKeyCombo): ReservationEntry[] {
		return ReservedCombinations.filter(re => {
			let reSkc = parseSimpleKeyCombo(re.keys);
			let reKeyOrCode = reSkc.mmkKey || reSkc.mmkCode;
			if (!reKeyOrCode) { console.warn("Cannot detect conflicts with",re.keys,"yet"); return false; }

			if (skc.ctrl  !== undefined && reSkc.ctrl  !== undefined && skc.ctrl  !== reSkc.ctrl ) return false;
			if (skc.alt   !== undefined && reSkc.alt   !== undefined && skc.alt   !== reSkc.alt  ) return false;
			if (skc.shift !== undefined && reSkc.shift !== undefined && skc.shift !== reSkc.shift) return false;
			if (skc.meta  !== undefined && reSkc.meta  !== undefined && skc.meta  !== reSkc.meta ) return false;

			if (skc.mmkKey  === reKeyOrCode) return true;
			if (skc.mmkCode === reKeyOrCode) return true;

			return false;
		});
	}

	addEventListener("load", function(){
		console.assert(systemConflictsWithSimpleKeyCombo(parseSimpleKeyCombo(     "Left")).filter(r => !r.overrideable || r.action.indexOf("Scroll") === -1).length == 0);
		console.assert(systemConflictsWithSimpleKeyCombo(parseSimpleKeyCombo("!Alt+Left")).filter(r => !r.overrideable || r.action.indexOf("Scroll") === -1).length == 0);
		console.assert(systemConflictsWithSimpleKeyCombo(parseSimpleKeyCombo("?Alt+Left")).filter(r => !r.overrideable || r.action.indexOf("Scroll") === -1).length  > 0);
		console.assert(systemConflictsWithSimpleKeyCombo(parseSimpleKeyCombo( "Alt+Left")).filter(r => !r.overrideable || r.action.indexOf("Scroll") === -1).length  > 0);
	});
} // namespace mmk.keyboard
