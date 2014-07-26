---
layout: post
title: "Building  Keyboard Maestro Macros Tips"
date: 2014-07-22 23:30
description: You don’t have to know AppleScript to create a Keyboard Maestro macro. What you need is learning how to build useful macros that automate mundane tasks for you.
tags:
- keyboardmaestro
---

You don’t have to know AppleScript or shell script to use Keyboard Maestro. The built-in actions have all the basic interactions covered. What you need is learning how to build useful macros that automate mundane tasks for you.

<!-- more -->

The number of macros you have in library is worthless if you’re still doing the tasks that can be executed by computer. Find yourself generating report by copy-paste the value manually? Build a macro. Find yourself follow the same procedure to deploy latest update to your server? Build a macro.

Just build a macro.

If you haven’t built a macro, or you simply don’t know what to build, I’ll share some tips that can help you getting started with this set of tools.

> %sidenote%
> **New to Keyboard Maestro?** Check out this [introduction guide](https://brooksreview.net/2012/11/km-basics/ "The Keyboard Maestro Basics — The Brooks Review") by Ben Brooks. You’ll be able to follow the rest of this article once you’ve read the guide.

## Assign Hot Key to Cancel All Macros

[ ![Keyboard Maestro: Assign hot key to cancel global macros][img] ](http://images.sayzlim.net/2014/07/keyboard_maestro_cancel_macros.jpg "Keyboard Maestro: Assign hot key to cancel global macros")

[img]: http://images.sayzlim.net/2014/07/keyboard_maestro_cancel_macros.jpg "Keyboard Maestro: Assign hot key to cancel global macros"

When building a macro, the expectation and result may differ. This global hot key ensures that you can cancel all the running macros to prevent damage to your works, escape [infinite loop](http://en.wikipedia.org/wiki/Infinite_loop "Infinite loop - Wikipedia, the free encyclopedia") — thus avoid the urgency to restart your Mac.

## Build the Simplest Macro
The point is to be familiar with the available actions in Keyboard Maestro. My first macro resizes an image in Photoshop into multiple sizes and exports it to Desktop. As I grow accustomed with the actions library, I expand the macro to batch processing all the images from the source folder, rename them orderly, and save them into result folder.

Start with something you do every day. It can be replying emails. It can be renaming documents. See if you can turn the process from few steps into single macro. 

## A Macro Better Produces One Result
Be cautious when you have more than one result in a macro. It might be the indication of bad macro design. Macro that produces more than one result is unpredictable, and highly difficult to debug. In other hand, macro that produces one result, like assigning clipboards to variables, can be easily reused in other complex macro.

In my previous post, I shared an example of a complex macro built from some smaller macros. These smaller macros produce only one result as listed:

- `Preferences` stores macro configurations.
- `Keep Writing` speaks the quote when user press `delete` key.
- `Toggle Keep Writing Mode` toggles the macro group.

When you find it difficult to produce an expected result, break the macro into smaller macros.

## Store Values into Variables
Variable is where you store the permanent value where you use in almost any fields in Keyboard Maestro. It’s handy when you want to reuse the value in other macros, shell scripts, or AppleScripts.

[ ![Keyboard Maestro: Variable in AppleScript][img5] ](http://images.sayzlim.net/2014/07/keyboard_maestro_variable.jpg "Keyboard Maestro: Variable in AppleScript")

[img5]: http://images.sayzlim.net/2014/07/keyboard_maestro_variable.jpg "Keyboard Maestro: Variable in AppleScript"

In the example above, I save the file path in a variable known as `Quotes Path`.  I later read the file path from the variable, randomly pick one line from the list of quotes, and save it to a new variable called `Quote` which is used by the Keep Writing macro to read out the text and displayed in notification.

Another common use case, without involving scripting,  is when you want to control macro flow which I’ll elaborate more later.

## Access Clipboard History

[ ![Keyboard Maestro: Enable Save Clipboard History to Disk][img2] ](http://images.sayzlim.net/2014/07/keyboard_maestro_save_clipboard.jpg "Keyboard Maestro: Enable Save Clipboard History to Disk")

[img2]: http://images.sayzlim.net/2014/07/keyboard_maestro_save_clipboard.jpg "Keyboard Maestro: Enable Save Clipboard History to Disk"

Clipboard is the common gateway to move values from one application to another. Before you can access it, you need to enable `Save Clipboard History to Disk` under  preferences.

Access the clipboard history by entering `%PastClipboard%1%`  in the macro actions text field. The number indicates the record of past clipboard. If you want the sixth record of clipboard from the past,  enter `%PastClipboard%6%` as the value.

## Use Control Flow Actions

Sometimes you want a macro to run only when certain conditions are met. Let’s use the macro that toggle Google Chrome below as example.

[ ![Keyboard Maestro: Toggle Google Chrome][img3] ](http://images.sayzlim.net/2014/07/keyboard_maestro_toggle_chrome.jpg "Keyboard Maestro: Toggle Google Chrome")

[img3]: http://images.sayzlim.net/2014/07/keyboard_maestro_toggle_chrome.jpg "Keyboard Maestro: Toggle Google Chrome"

This macro lets me switch Google Chrome with hot key combination, but  only when Google Chrome is running — in other words, Google Chrome stays inactive even when I’ve accidentally triggered the macro.  

You can minimize the amount of mistakes with action flows when building a complex macro. The library can check most situations — from application, menu item, and network name — but when the condition you want is not available, you can use this two methods to control the flow:

- **By variables/clipboards value.** Assign value to variable. In Keep Writing macro, a user may cause the macro to read out the quotes simultaneously by pressing `delete` key multiple times. To prevent that from happening, I have the macro to check the value of `isSpeaking` variable — `True` or `False` — and skip the macro if value is `True`.
- **By screen image condition**. Less ideal for flow control because you must test the accuracy intensively. It tells the engine to pause running macro until the screen contains your selected image. Take the screenshot of the successful dialog, or the green alert, and use them in this condition.

## It’s Your Turn

This post briefly touches the surface of creating useful and reusable macros. Become familiar with the Keyboard Maestro actions so you know whether a task can be carried out by macros.

I’m going to share a few tips in organizing macros in upcoming post. You can stay updated by [signing up for the newsletter](http://sayzlim.net/subscribe "Subscribe - Sayz Lim"), or follow [@sayzlim](https://twitter.com/sayzlim "Sayz Lim (sayzlim) on Twitter") on Twitter.