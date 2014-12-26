---
layout: post
title: "Trigger Keyboard Maestro Macros with Alfred"
date: 2014-09-24 03:00
description: "Key Clue is an workflow that lets you run menu bar item and Keyboard Maestro macros from Alfred for Mac. "
tags:
- "Alfred"
- "Keyboard Maestro"
---

Assigning shortcuts to macros can be a problem when there is too many conflicting keys between macros and other apps. You can use Keyboard Maestro `Trigger macro by name` action to avoid this problem, but I prefer integrating macros into Alfred.

<!-- more -->

The main challenge with assigning shortcuts as macro triggers is looking for key combination that doesn’t conflict with shortcuts in other apps.[^1] You probably think a shortcut such as `Command-Option-Semicolon(;)` is unlikely found in other apps, however, that shortcut is used for `Show Guides` menu item in Pixelmator. You can rewire mentioned key combination into different shortcut, but it’ll be much better to avoid the problem in the first place and use better method to run rarely used macros, which is by using search.

Search is powerful because there is no way for a combination of string to conflict with each other. Macros with similar name will show up in your search result just fine, and you just need choose the one you want to run from the list.


## Key Clue Workflow
[ ![Keylue Alfred Workflow Preview][220432] ](http://images.sayzlim.net/2014/09/alfred_workflow_keylue.jpg "Keylue Alfred Workflow Preview")

[220432]: http://images.sayzlim.net/2014/09/alfred_workflow_keylue.jpg "Keylue Alfred Workflow Preview"

[Key Clue](http://www.alfredforum.com/topic/3156-keylue-key-clue-alfred-2-workflow-for-menu-bar-and-keyboard-maestro-hot-key-search/ "Keylue (Key Clue): Alfred 2 Workflow for Menu Bar and Keyboard ...") or Keylue is an Alfred workflow that lets you search and run Keyboard Maestro macros within Alfred.

Enter `kc` in Alfred to list all the available macros. The red circle shows that the macro is only available in active apps, while the white circle shows that the macro is available everywhere. But what makes integrating Keyboard Maestro into Alfred is its smart algorithm to sort most selected search result on top of the list. For example, if you often select `Rename` macro, the next time you type `kc`, `Rename` macro will show up on top of the search result. In other words, your most used macros will be available in the search result by just typing `kc` — you can then select them with `Command-[Number]` hotkey combination.

In addition of the Keyboard Maestro support, Key Clue also shares the same feature as the [Menu Bar Search workflow](http://sayzlim.net/effective-menu-bar-search-workflow "Effective Menu Bar Search Workflow - Sayz Lim") where you can trigger menu bar item from Alfred. I recommend replacing Menu Bar Search workflow with Key Clue because, not only it’s faster, the search result is much more readable.

[^1]: It’s insufficient to combine just `Command` and `Option` to create a unique shortcut that doesn’t conflict with other apps. The only way to achieve this is by [mapping `Caps Lock` into a `Hyper` key](http://sayzlim.net/disable-sysdiagnose-key-combination "Disable Sysdiagnose Key Combination - Sayz Lim") which is a combination of `Command-Shift-Option-Control`.