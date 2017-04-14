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



	interface ReservationEntry {
		keys:   string;
		origin: string; // e.g. "Media", "System", "Browser", "f.lux", etc.
		// Consider adding more detailed origin info - e.g. browser(s), os(es), shell(s), app(s), etc.
		action: string;
		// TODO: Add information about which combinations are overrideable or not
	}
	const ReservedCombinations : ReservationEntry[] = [
		// 6-key region
		{ keys: "Ctrl+Alt+Ins",      origin: "Media",   action: "Play / Restart"    },
		{ keys: "Ctrl+Alt+Del",      origin: "System",  action: "Close program, secure attention, login, etc." },
		{ keys: "Ctrl+Alt+Home",     origin: "Media",   action: "Pause"             },
		{ keys: "Ctrl+Alt+End",      origin: "Media",   action: "Stop"              },
		{ keys: "Ctrl+Alt+PageUp",   origin: "Media",   action: "Prev track"        },
		{ keys: "Ctrl+Alt+PageDown", origin: "Media",   action: "Next track"        },

		{ keys: "Alt+Home",          origin: "Browser", action: "Home page"         },
		{ keys: "Alt+End",           origin: "f.lux",   action: "Toggle (1 hour)"   },
		{ keys: "Alt+PageUp",        origin: "f.lux",   action: "Brighten"          },
		{ keys: "Alt+PageDown",      origin: "f.lux",   action: "Dim"               },

		{ keys: "Ctrl+PageDown",     origin: "Browser", action: "Next tab"          },
		{ keys: "Ctrl+PageUp",       origin: "Browser", action: "Previous tab"      },

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
		{ keys: "Alt+Shif+Tab",      origin: "System",  action: "Previous window"   },

		// F-keys row
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
		{ keys: "Ctrl+Shift+B",      origin: "Browser", action: "Toggle bookmarks bar" }
		// Not anywhere even remotely close to complete!
	];
} // namespace mmk.keyboard
