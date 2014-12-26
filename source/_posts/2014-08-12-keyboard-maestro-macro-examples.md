---
layout: post
title: "Keyboard Maestro Macro Examples"
date: 2014-08-12 17:00
description:  Here’s a few ideas and suggestions from my Keyboard Maestro macros library to help you get the most out of this amazing utilities.
tags:
- "Keyboard Maestro"
---

A reader asked me to share my macro library with him recently. I declined. Sharing the macros I use to copy the data from analytics to spreadsheet won’t give you a single clue on how to build a useful macro. Instead, I’m going to show you the type of macros you can build in this article.

<!-- more -->

Most of the macros you see in this list are from my macro library. But I need you to remember that there is no right or wrong way to build macros. Trust your method and build macros that work. Embrace the flaws in your macros because you need to start with something rough before it can be polished.

## Assign Shortcuts

You can [configure shortcuts without Keyboard Maestro in Keyboard Preferences](http://support.apple.com/kb/ph3957 "OS X Lion: Create keyboard shortcuts for applications - Apple Support"). But you can do much more with Keyboard Maestro: you can assign single key as shortcut.

For example, I often switch between Twitter accounts in [Wren for Mac](http://sayzlim.net/clear-twitter-distraction-with-wren-for-mac "Clear Twitter Distraction with Wren for Mac - Sayz Lim"). The default flow to switch between accounts requires me to press the `Command-/`  before displaying the list of available accounts. To simplify the flow, I assign `tab` key to alternate between two accounts with the following macro.

[ ![Switch Twitter Accounts Macro][170707] ](http://images.sayzlim.net/2014/08/keyboard_maestro_wren.jpg "Switch Twitter Accounts Macro")

[170707]: http://images.sayzlim.net/2014/08/keyboard_maestro_wren.jpg "Switch Twitter Accounts Macro"

I also use this type of macro to run features that can’t be found in menu bar like Safari Developer Tools `Inspect Element`. This macro simulates secondary click and choose the `Inspect Element` from the available list items.

[ ![Inspect Element Macro][170725] ](http://images.sayzlim.net/2014/08/keyboard_maestro_inspect_element.jpg "Inspect Element Macro")

[170725]: http://images.sayzlim.net/2014/08/keyboard_maestro_inspect_element.jpg "Inspect Element Macro"

By using the actions under control flow group, you can use one shortcut for two type of tasks.  The following macro will check the status of  `Open in New Tab` menu item and choose to either open selected file, or open the folder in new tab.

[ ![Open in New Tab Macro][170735] ](http://images.sayzlim.net/2014/08/keyboard_maestro_new_tab.jpg "Open in New Tab Macro")

[170735]: http://images.sayzlim.net/2014/08/keyboard_maestro_new_tab.jpg "Open in New Tab Macro"

##  Control Apps Interfaces

Working in large screen demands accurate windows positioning to harness the available screen space. Even small screen devices such as MacBook Air benefits from setting up workspace properly.

I have two approaches when it comes to organizing windows. The first one is to create default position and size for apps — they’re the type of apps I seldom move around such as Adium, Messages, and Slack.  Take this macro for Adium as example where it’ll resize and move the contact list to the top right of the screen and center the chat window.

[ ![Default Adium Position Macro][170801] ](http://images.sayzlim.net/2014/08/keyboard_maestro_adium.jpg "Default Adium Position Macro")

[170801]: http://images.sayzlim.net/2014/08/keyboard_maestro_adium.jpg "Default Adium Position Macro"

The second approach is to prepare workspaces. Let’s say you’re trying to enter “recording podcast flow” and wish to run the necessary apps and have them positioned. You can build a macro that `Quit All Applications` followed with the apps you want to run. Have them positioned the way you want and start working. Name it `Setup Recording Podcast Workspace` and run it whenever you’re ready to record a podcast.

## Build Personalized Features

Developers can’t always fulfill our features requests. It takes a decent amount of time and vigorous testing to make the feature works as intended . Instead of waiting, why don’t we add the feature by ourselves?

Let me show you a few macros in [Spillo](https://itunes.apple.com/us/app/spillo/id873245660?mt=12&uo=4&at=11ld6n&ct=spillo "Spillo"), a Pinboard manager for Mac, I bought recently. It’s understandable that the early version doesn’t support shortcuts so I create a macros to copy link, share to Twitter, and save to Instapaper. I also have these macros to display Growl notification whenever an action is completed.

[ ![Save to Instapaper Macro][170818] ](http://images.sayzlim.net/2014/08/keyboard_maestro_spillo_instapaper.jpg "Save to Instapaper Macro")

[170818]: http://images.sayzlim.net/2014/08/keyboard_maestro_spillo_instapaper.jpg "Save to Instapaper Macro"

I also want Spillo to use the selected text as the description when I save a new bookmark. So I simulate the copy paste routine, followed by multiple tabs and paste them into the description field, and have the cursor available in the tags field. So whenever I save a new bookmark with my assigned key, I only have to fill the tags field. It also has a sweet Growl notification to let me know that the bookmark has been created. See how easy to add new feature without having to code?

[ ![Bookmark with Description Macro][170827] ](http://images.sayzlim.net/2014/08/keyboard_maestro_spillo_bookmark.jpg "Bookmark with Description Macro")

[170827]: http://images.sayzlim.net/2014/08/keyboard_maestro_spillo_bookmark.jpg "Bookmark with Description Macro"

If you know what you need, and what you want, you can build it with Keyboard Maestro.

## Manipulate Clipboards

Let’s start with the popular `Paste as Plain Text` macro.

[ ![Paste as Plain Text Macro][170840] ](http://images.sayzlim.net/2014/08/keyboard_maestro_plaintext.jpg "Paste as Plain Text Macro")

[170840]: http://images.sayzlim.net/2014/08/keyboard_maestro_plaintext.jpg "Paste as Plain Text Macro"

The `Filter Clipboard` action offers various ways to manipulate clipboards from trim whitespace, uppercase first letter, and decode HTML entities. You can also get the character count, word count, and line count from the clipboards.

I use this type of macro when I want to quickly replace the value in clipboard without having to open another text editor. You just have to run the macro and a prompt window will show you the field to enter the words you want to find and replace.

[ ![Quick Find and Replace Macro][170853] ](http://images.sayzlim.net/2014/08/keyboard_maestro_find_replace.jpg "Quick Find and Replace Macro")

[170853]: http://images.sayzlim.net/2014/08/keyboard_maestro_find_replace.jpg "Quick Find and Replace Macro"

To get the full benefit from clipboards, I recommend [learning few basic regular expression syntax](http://regexone.com/ "RegexOne - Learn regular expressions with interactive examples"). It’ll greatly increase the type of filters you can apply to the clipboard. I’ll write a more comprehensive in manipulating clipboards in a separate article. [Subscribe now](http://sayzlim.net/subscribe "Subscribe - Sayz Lim") if you don’t want to miss it.

## Manipulate Images

I admit this is the group of actions I rarely use. I prefer to get my hand dirty when it comes to editing photos. Just like how you can replace the value of clipboards, you can also manipulate the image as clipboard. Patricks Welker covered a lot of [apps and macros used for images manipulation](http://rocketink.net/2013/02/screenshots-and-image-manipulation.html "Taking Screen Shots And Automating Image Manipulation - RocketINK"). Check out his works and see if you can come up with a useful macros in this group.

## Automate Mundane Tasks

You don’t always have to build a macro for complex tasks. I have a `Temporary` macro where I use to complete tasks that is simple, repetitive, and boring — copy and paste values into spreadsheets is one of the example.

Last week I had to reindex all the pages in Swiftype. Although I have requested the engine to recrawl the site, I still want to view the immediate results. I decided to reindex few pages by clicking the `Reindex` button in each detail page.  Having to switch between tabs, click the `Reindex` button, and reload over 60 pages is time consuming. So I whip up a macro like the one below to help me deal with those boring and mundane task.

[ ![Swiftype Reindex Macro][170914] ](http://images.sayzlim.net/2014/08/keyboard_maestro_swiftype.jpg "Swiftype Reindex Macro")

[170914]: http://images.sayzlim.net/2014/08/keyboard_maestro_swiftype.jpg "Swiftype Reindex Macro"

## Conclusion

Just keep this in mind when fiddling with Keyboard Maestro. The reason you want to build macros is to save time. If the amount of time spent to build macro won’t save you much time in long term, it’s better to just manually complete the tasks.  If you enjoyed this article, please share it with people who you think will benefit from this article.

And if you’re wondering why I don’t post any download links for these macro examples? Well, it’s your turn to build these macros yourself.