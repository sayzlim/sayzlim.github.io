---
layout: post
title: "How I Organize Keyboard Maestro Macro Groups"
date: 2014-07-26 16:30
description: Dealing with a messy Keyboard Maestro library? Here’s a few tips to clean up your library and ensure they’re well-organized all the time.
tags:
- keyboardmaestro
---

Once you’re accustomed to [building macros](http://sayzlim.net/building-keyboard-maestro-macros-tips "Building Keyboard Maestro Macros Tips - Sayz Lim"), the library is bound to be full of your automation tools and kits. Don’t let them scattered all over the place. You have to make sure that, even with the large amount of macros in library, they’re well-organized.

<!-- more -->

[ ![Keyboard Maestro Macro Groups][154912] ](http://images.sayzlim.net/2014/07/keyboard_maestro_organize.jpg "Keyboard Maestro Macro Groups")

[154912]: http://images.sayzlim.net/2014/07/keyboard_maestro_organize.jpg "Keyboard Maestro Macro Groups"

Put the macro where it should be, however,  organizing macros is like organizing notes — the items are often related, and most of time, you can put them under the same category. When should you create a macro group called “Safari”? When should you, for instance, create a new whole category like “Generate Report”?

I don’t have the *right* answer for the asked questions, but I do have some tips to keep those macros in the place where they should be.

## Macros Group Categories

The original purpose of grouping macros is to control the macros execution scope. For instance: you probably only want to run the `Send URL to Evernote` macro in Safari and Google Chrome.

Your first thought is probably creating a macro group called `Web Browsers` that is available only in Safari and Google Chrome. If you think like this, you might end up with a lot of ambiguous macro group. What should you name the macro group that contains Evernote and nVALT, and how about the other apps?

I think the group feature goes way beyond its original purpose. It’s a tool that lets you organize and build macros that are highly extensible.

A better approach for the example above would be to create a macro called `Send URL to Evernote` and put it in `Global Macro Group`. Then you create two more macro groups called `Safari` and `Google Chrome`, with each group has a macro that executes the `Send URL to Evernote` macro from `Global Macro Group`. 

There are two benefits with this approach:

1. You only need to maintain one macro.
2. Safari and Chrome can have different triggers.
3. You can extend the new macro with more actions, leaving the original macro untouched.

Now you have an idea of  creating a highly extensible macro group. If you put them in practice, most of the macro groups fall into one of these three categories: Application Based, Trigger Based, or Feature Based. 

### 1. Application Based Macro Group

I have lots of application based macro groups. I have Wren for Mac that lets me switch between account with `Tab`, Finder that resizes sidebar automatically, and Google Chrome that lets me comment or leave notes on Google Sheet with `/`.

When a macro is built specifically for one application, create a new macro group named after it — a macro group that only runs in Evernote is named  `Evernote`. It’s easy to identify this type of macros because they need the application to execute a particular task.

I’ll use one of the macros in my library as example. MoneyWell doesn’t have a shortcut to split transaction. Therefore, I build a macro that selects `Split Transaction` menu item. Now whenever I’m searching or building the macros for MoneyWell, I just have to check `MoneyWell` macro group.

### 2. Trigger Based Global Macro Group

Following the previous grouping method, doesn’t it mean everything else belongs to the default Global Macro Group? The answer is yes, but you can further split the macros based on their triggers.

[ ![List of Keyboard Maestro Triggers][161400] ](http://images.sayzlim.net/2014/07/keyboard_maestro_trigger.jpg "List of Keyboard Maestro Triggers")

[161400]: http://images.sayzlim.net/2014/07/keyboard_maestro_trigger.jpg "List of Keyboard Maestro Triggers"

Looking at the list of available triggers in Keyboard Maestro can give you some ideas for creating a macro group. Here’s the list of the macro groups I have in library.

#### Global Macro Group (Default)

Put all the macros without triggers in this group. It doesn’t mean you won’t be able to run these triggerless macros. It simply means you choose to execute these macros with other triggered macros, or by the macros name

[ ![Keyboard Maestro: Trigger Macro by Name][235057] ](http://images.sayzlim.net/2014/07/keyboard_maestro_by_name.jpg "Keyboard Maestro: Trigger Macro by Name")

[235057]: http://images.sayzlim.net/2014/07/keyboard_maestro_by_name.jpg "Keyboard Maestro: Trigger Macro by Name"

Run these macros with an `Trigger Macro by Name` action. Create a new global macro and assign a hot key for it. You can then call up the list of available macros anytime, and run one of them by pressing `Command` + `[Number]` or by typing the macro name as query.

#### Global Hot Keys

[ ![Keyboard Maestro: Edit Select Macro][235017] ](http://images.sayzlim.net/2014/07/keyboard_maestro_edit_macro.jpg "Keyboard Maestro: Edit Select Macro")

[235017]: http://images.sayzlim.net/2014/07/keyboard_maestro_edit_macro.jpg "Keyboard Maestro: Edit Select Macro"

I recommend you to group all the macros triggered by hot key globally together. Because the global hot key works in all application, you should make sure that there is no hot key conflicts — although Keyboard Maestro handles the conflicts well by letting you to choose which conflicting macros to run. By putting them under the same group, you can sort them by triggers — toggle the right arrow in macro library — so you can spot the conflicting hot keys quickly.

Some of the global hot key triggered macros I use are `Rename Filename` macro that renames the active file, `Paste Plain Text` macro that pastes the plain text to selected text field, and the `Cancel All Macros` that cancels all the running macros.

#### Global UI Control

Keyboard Maestro has tons of actions when it comes to manage windows. If you’ve used some apps to automatically resize windows you can also do it with Keyboard Maestro. Some of the UI elements you can control with Keyboard Maestro are:

- **Manipulate a window**, either by resize, scale, or move them to the position you’ve assigned.
- **Select a menu item** in your selected application.
- **Simulate mouse click or scroll wheel** which you can use to click the element on screen either by position, or detected image position.

I mainly [organize my windows with BetterTouchTool](http://sayzlim.net/bettertouchtool-windows-management "BetterTouchTool for Windows Management - Sayz Lim") because all the default windows position I need are available in there. But if you’re looking for something more complete, like creating a windows placement for each different application automatically, then this is the group you put the macro.[^1]

#### Global System

This is the group where the macros are triggered by the system.  They’re the type of triggers that execute a macro when the system is connected to network, a device is mounted, or while the user is logged in. This is also where you put the macro you want to run at specific time or day.

[ ![Global System Macro Group][154936] ](http://images.sayzlim.net/2014/07/keyboard_maestro_system.jpg "Global System Macro Group")

[154936]: http://images.sayzlim.net/2014/07/keyboard_maestro_system.jpg "Global System Macro Group"

In the example above, I have a macro that runs [Dropbox Encore](http://www.joyofmacs.com/software/dropboxencore/ "Dropbox Encore 1.0 - the Joy of Macs") — the second instance of my workplace Dropbox account —  at 11 AM, and quit it at 6 PM every weekdays. There is also a macro that checks the remaining battery every 40 minutes, and will run [Battery Time Remaining 2](https://github.com/codler/Battery-Time-Remaining "codler/Battery-Time-Remaining · GitHub") when the charge is lower than 70%.

#### Global Clipboards

When you find yourself editing system clipboard, chance is you can build  a macro for it. 

This macro group contains the macros that modify clipboards.  I don’t assign any triggers for the macros in this group because they’re meant to be used by other macros.

[ ![Append iTunes Affiliate ID][162258] ](http://images.sayzlim.net/2014/07/keyboard_maestro_plain_text.jpg "Append iTunes Affiliate ID")

[162258]: http://images.sayzlim.net/2014/07/keyboard_maestro_plain_text.jpg "Append iTunes Affiliate ID"

One of the example of my macro is the one that appends my iTunes affiliate ID to the URL I’ve copied. The macro will first check whether the URL contains my affiliate ID, and if it doesn’t, it’ll append the affiliate ID into it. Later I just have to run it in the `Paste as Plain Text` macro to get the value I want without manually editing them.

I can build more macros that detects certain pattern in the system clipboard and apply them in one shot under `Paste as Plain Text` macro.

#### Global Typed String

So far, I only have one macro which is to call up the emoji by entering `::` in any application.

[ ![Keyboard Maestro Macro: Show Emoji][234906] ](http://images.sayzlim.net/2014/07/keyboard_maestro_emoji.jpg "Keyboard Maestro Macro: Show Emoji")

[234906]: http://images.sayzlim.net/2014/07/keyboard_maestro_emoji.jpg "Keyboard Maestro Macro: Show Emoji"

You probably won’t use typed string triggered macro if you use [TextExpander](https://itunes.apple.com/us/app/textexpander-for-mac/id405274824?mt=12&at=11ld6n&ct=textexpander-for-mac "TextExpander for Mac"). While TextExpander is tend to geared for text replacement, the typed string in Keyboard Maestro is for controlling your Mac. If the task you want to perform is unavailable in TextExpander (like selecting the `Rename`… menu item when you type `.rename`), you can put them in this macro group.

### 3. Feature Based Macro Group
Feature based group consists of the macros you use to build a complex macro. The grouping methods in the [“Keep Writing ” macro group](http://sayzlim.net/keyboard-maestro-macro-writers/ "Keyboard Maestro Macros for Writers - Sayz Lim ") I’ve shared before  is an example of feature based macro group — it does one thing: disable the `delete` button. By putting them in a new macro group called Keep Writing, I can choose where those macros can run without over-cluttering the application based macro group.

Another benefit of building a feature based macro group is you can easily export them for other people to use. Have an idea that be useful for everyone? Build them slowly in a macro group, and when it’s ready, export it as a macro library.

[^1]: If you build a UI control macro for only one application, then you should place it inside the application macro group, not the global macro group.