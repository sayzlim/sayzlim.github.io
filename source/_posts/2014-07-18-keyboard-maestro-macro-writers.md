---
layout: post
title: "Keyboard Maestro Macro for Writers"
date: 2014-07-18 16:35
description: I told myself that I should keep writing, ignore the spotted mistakes, and complete the first draft. This is the origin of this macro.
tags:
- "Keyboard Maestro"
---

I used to write a sentence over and over until I get it right. This approach is inefficient — I barely made any progress after spending few hours in front of the blinking cursor. I told myself that [I should keep writing](http://sayzlim.net/keep-writing "Keep Writing - Sayz Lim"), ignore the spotted mistakes, and complete the first draft. This is the origin of this macro.

<!-- more -->

Following the post by Matt Gemmell where [he shared his most used macros](http://mattgemmell.com/keyboard-maestro-macros "Keyboard Maestro macros - Matt Gemmell"), I want to share one of my favorites. This macro is made for writers with habit to fix the prose before the story is complete, for writers who is in doubt to finish their sentences, and for writers who just can’t seem to figure out what to write next.

I call this macro **Keep Writing**.


## About Keep Writing

[ ![Keep Writing Macro Preview][img2] ](http://images.sayzlim.net/2014/07/keep-writing-preview.jpg "Keep Writing Macro Preview")

[img2]: http://images.sayzlim.net/2014/07/keep-writing-preview.jpg "Keep Writing Macro Preview"

Gentle reminder and environment limitation can slowly fix our habit. We like to correct the prose because we can afford it. In the past, people wrote their first draft with typewriter that doesn’t allow immediate correction. This limitation makes them think before they type.

Editing comes naturally for them. After they’ve filled the paper with a complete story, they cross out the weak sentences, leave note for these corrections, and retype the whole story. This process is time consuming, but it’s definitely more efficient than my constant editing in the first paragraph.

By imitating their workflow, I create this macro that disable the `delete` key in text editor. It also motivates the writer to finish their sentence by reading out one of the quotes from your favorite writers — in other words, you must start collecting famous writing quotes.

Quotes collection must be in plain text with each quote separated by a line break. Searching for quotes doesn’t have to be complicated. I start by browsing [quotes about writing](g "http://www.goodreads.com/quotes/tag/writing"), and manually save them into my quotes collection.[^1]

[**Download Keep Writing Macro**](http://s3.sayzlim.net/f/km-keep-writing.zip "Keep Writing Keyboard Maestro Macro")

## Macro Configuration

Decide where you want to run this macro. I suggest you only allow this workflow in the text editor you use. The screenshot below shows that the workflow can only run in Writer Pro.

[ ![Keep Writing Group Setting][img1] ](http://images.sayzlim.net/2014/07/keep-writing-setting.jpg "Keep Writing Group Setting")

[img1]: http://images.sayzlim.net/2014/07/keep-writing-setting.jpg "Keep Writing Group Setting"

Unlike most of the macros, this macro group uses several macros to accomplish one goal. The `.Preferences` lets you choose the source of your quotes collection and the type of notification. You can read the complete instruction in the actions sheet.

`Toggle “Keep Writing” Mode` is the only macro you need to trigger. You can either assign a hot key, or if you use Writer Pro, you can create a macro with conditional action to execute `Toggle “Keep Writing” Mode` macro whenever the `Write` menu item is selected.


## Conclusion

The fineness of [Keyboard Maestro](http://www.keyboardmaestro.com/ "Keyboard Maestro 6.4.3: Work Faster with Macros for Mac OS X") comes from its practicality to build anything you need on your Mac. When the applications you use don’t have the feature you need, simply extend it with Keyboard Maestro. Start with the simplest macro and slowly combine them into a feature rich macro like the one I’ve shown in this post.

[^1]: If you’re up for a challenge, try to create a macro that automatically appends quote to your file. Ben Brooks has a similar [macro specifically made to save his favorite quotes](https://brooksreview.net/2012/12/km-append-quote/ "Keyboard Maestro Macro: Append to Quote File — The Brooks Review").