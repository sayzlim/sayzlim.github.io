---
layout: post
title: "Non-Conflicting Shortcuts"
date: 2014-11-19 23:00
description: "How often you have to reassign a global shortcut because it interferes with the built-in shortcuts? How to install more macros and workflows without adding complexity to your setup?"
tags:
- "Keyboard Maestro"
- "Alfred"
- "BetterTouchTool"
---

Shortcuts don’t scale well. Global shortcuts are top offenders. How often you have to reassign a global shortcut because it interferes with the built-in shortcuts? How to install more macros and workflows without adding complexity to your setup?

<!-- more -->

Few weeks ago I shared a [guide to choose suitable utility](http://sayzlim.net/choosing-mac-utility "Which Mac Utility Should You Use? - Sayz Lim") for workflows or macros based on triggers, but one of the triggers I deliberately skipped is shortcuts. Honestly, shortcuts are great. You can run a macro by simply pressing a combination of keys. The problem, like I mentioned in the beginning, is building a library of shortcuts that doesn’t conflict with each other. We are left with one choice: reassign the conflicting shortcut with a new shortcut.

How to prevent shortcuts from conflicting with each other? Here is three tips you can follow to create a non-conflicting shortcuts setup.

## Global Hyper Key

The first tip to avoid conflicting shortcuts is designate a `Hyper` key for global shortcuts. What is `Hyper` key? It’s a key that simulates the `Command-Option-Shift-Control` key combination. You can map the any key into `Hyper` key, but I recommend you to map the useless `Caps Lock` key into `Hyper` key.

> %sidenote%
> Check out this [guide to map Caps Lock key into Hyper key](http://brettterpstra.com/2012/12/08/a-useful-caps-lock-key/ "A useful Caps Lock key - BrettTerpstra.com") by Brett Terpstra. Make sure to follow up with this [guide to disable sysdiagnose key combination](http://sayzlim.net/disable-sysdiagnose-key-combination "Disable Sysdiagnose Key Combination - Sayz Lim").

[ ![Contexts for Mac Preview][221507] ](http://images.sayzlim.net/2014/11/contexts_preview.gif "Contexts for Mac Preview")

[221507]: http://images.sayzlim.net/2014/11/contexts_preview.gif "Contexts for Mac Preview"

Remember that `Hyper` key is dedicated to global shortcuts. They belong to apps that you trigger from everywhere. You should avoid assign `Hyper` key as the modifier for built-in shortcuts. Here is the list of my favorite global shortcuts:

- `Hyper-Space` to activate [Contexts for Mac](http://sayzlim.net/contexts-manage-mac-windows "Manage Mac Application Windows with Contexts - Sayz Lim") to search for all active windows.
- `Hyper-E` to toggle nvALT to create any post ideas.
- `Hyper-O` to append selected text into collection of writing quotes which is the source of [Keep Writing macro](http://sayzlim.net/keyboard-maestro-macro-writers "Keyboard Maestro Macro for Writers - Sayz Lim")
- `Hyper-L` to toggle [Wren for Mac](http://sayzlim.net/clear-twitter-distraction-with-wren-for-mac "Clear Twitter Distraction with Wren for Mac - Sayz Lim") — a wonderful Twitter client for tweeting.
- `Hyper-K` to run [Edit with… Alfred Workflow](http://www.alfredforum.com/topic/1857-edit-with%E2%80%A6-a-quickcursor-alternative-31-yosemite-support/ "Edit with… A QuickCursor alternative (3.1 - Yosemite support ..."). It copies and opens the selected text into your favorite text editor.
- `Hyper-U` to read out loud the selected text. You can change the shortcut in **System Preferences » Dictation and Speech » Text to Speech**.
- `Hyper-B` to toggle Bartender. I keep less used menu bar items such as [Snappy](http://sayzlim.net/snappy-pin-your-screenshots "Snappy: Effortlessly Pin Your Screenshots - Sayz Lim") or TunnelBear in Bartender Menu to declutter the menu bar.
- `Hyper-\` to search for 1Password Mini. Sometimes I need to copy password to authenticate permission from third-party apps, and having 1Password Mini accessible keeps thing simple.
- `Hyper-;` to activate [Dash](https://itunes.apple.com/us/app/dash-docs-snippets/id458034879?mt=12&uo=4&at=11ld6n&ct=dash+docs+snippets "Dash (Docs & Snippets)") for searching documentation of CSS and HTML on the fly.

## Leverage Searches

Eventually you’ll run out of keys to assign for global shortcuts — I don’t recommend assigning shortcuts to every single Alfred workflows. When you’re out of keys, opt for searches.

There is no limitation, conflict, nor problem with searches. You can type a few characters and the results will show up just fine. You can even train the Alfred to remember the most selected result item. [Search for menu bar item with Alfred workflow](http://sayzlim.net/effective-menu-bar-search-workflow "Effective Menu Bar Search Workflow - Sayz Lim") if you’re not bothered to remember the complex shortcuts listed in menu items.[^1]

## Better Touch with Gestures

One of my favorite way to run an action is through gestures. When I browse around the web, I use one hand to navigate inside Safari. With [BetterTouchTool](http://www.boastr.net/ "BetterTouchTool") you can assign shortcuts to gestures. I can select the next tab with **TipTap Right** that simulates `Command-Shift-]` or **TipTap Left** to select previous tab. 

There is more than fifty gestures, with combination of tap, swipe, and pinch ranging from one finger up to five fingers which you can assign with custom shortcuts. Here is some of my favorites.

- **TipTap Left** to select previous tab.
- **TipTap Right** to select next tab.
- **Bottom Left Press** to close front window.
- **Bottom Right Press** to quit front application.
- **Rotate Right** to refresh front window.
- **Single Finger Top Tap Right** to open link in new tab.
- **Five Finger Tap** to enter/exit fullscreen.
- **Four Finger Tap** to show clipboard history.

Switch from tap to press if you often trigger an action accidentally. It’ll take a while to get used to the new gestures, but once you’re comfortable with it, you’ll be pleased with how easy it is to control your Mac with just one hand.

## Keyboard Maestro Action Palette

Action palette in Keyboard Maestro is a great tool to avoid shortcuts, especially if you’re a mouse person. It shows the list of macros that have `The macro palette entry is clicked` as trigger in an action palette that stays visible until you hide it.

[ ![Octopress Macro in Action Palette ][221025] ](http://images.sayzlim.net/2014/11/action_palette.gif "Octopress Macro in Action Palette ")

[221025]: http://images.sayzlim.net/2014/11/action_palette.gif "Octopress Macro in Action Palette "

It can be a nuisance if action palette is always visible. Fortunately, you can do anything with Keyboard Maestro. Instead of displaying the action palette whole time, you can create a macro that toggles the palette according to the environment condition.

[ ![Octopress Action Palette Macro][221100] ](http://images.sayzlim.net/2014/11/action_palette_macro.jpg "Octopress Action Palette Macro")

[221100]: http://images.sayzlim.net/2014/11/action_palette_macro.jpg "Octopress Action Palette Macro"

The macro above checks whether the front window title contains `sayzlim` which reflects the path of my Octopress folder. It makes sure the palette shows up only when I’m inside Octopress folder and disappear when I switch to another folder.

I hope these tips above can help you remove these shortcuts conflicts in your setup. If you find this post useful, please share it with your friends — there is a built-in sharing button in OS X for a reason.

[^1]: You can also assign `Command-Shift-/` as a shortcut to search for menu items. Here is a [tutorial that shows you how it works](http://www.macdrifter.com/2014/08/the-shortcut-of-shortcuts.html "The Shortcut of Shortcuts - Macdrifter").