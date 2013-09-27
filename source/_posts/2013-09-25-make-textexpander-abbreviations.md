---
layout: post
title: "How to Create a Better TextExpander Abbreviations"
date: 2013-09-23 21:20
categories: mac
published: false
description: 
---

TextExpander is a tool that can save you ton of times when it’s being used correctly. It’s easy to understand the concept. You create a snippet and assign an abbreviation for the created snippet. The abbreviation later will be expanded into the snippet matching each others.

This post will not address what TextExpander can do nor showing you which snippets to use. They’ve been documented very well on [TextExpander site](!g "TextExpander how to use") and you can find a lot of useful [snippets on David Sparks’ blog](!g "textexapnder snippets"). The number of snippets are endless. You might don’t need them all. Each of them has their own version of abbreviations. This lead to another problem.

With different abbreviations, you’ll have difficult time to remember them all. In fact, you probably won’t remember them. Sometimes you might have created an abbreviation that works well at first, but when you want to create a new snippet, you can’t find the appropriate abbreviation for it.

What I’m going to show you is a way to create an abbreviation that doesn’t conflict with each other. TextExpander shows us that a [good abbreviation][2] should follow these criteria:

[2]: http://www.smilesoftware.com/help/TextExpander/creating.html

- short
- easy to remember
- unlikely to be typed by accident
- unique

You rarely can get them all right. If the abbreviation is too short, conflict happens often. If the abbreviation is not unique, it’ll get triggered easily. If the abbreviation is too complex, you can’t remember it. So what exactly is the method to create an complex, unique, and easy to remember abbreviation?

There are two suggestions to make the abbreviations unique. Also documented in the help section: 

> Duplicating an abbreviation's first character (ddate, ssig, zzip) is one way of creating abbreviations that meet these critieria. Another way is to use a period or other punctuation mark as the first character of your abbreviation (;date, 'sig, /zip).

**Don’t duplicate the first character**. I’ve tried that method and you’ll encounter more conflicts instead of making each of them unique. Using punctuation mark is far better. John Gruber uses semicolon, Brett Terpstra uses double comma. Personally, I use dot as the first character of the abbreviation. It’s a matter of preferences. My suggestion is to pick one character to reduce the number of types required. Either comma, semicolon, or dot is a nice choice.

Prepending the unique character itself alone is not enough to make an abbreviation unique. For example, let’s say I use “.img” as an abbreviation to create a Markdown snippet that take the clipboard as image URL and ask for the alternative text and title:

	![%filltext:name=Alternate Text%](%clipboard "%filltext:name=Title%")

What if I want to have a different version snippet where the img is inside the hyperlink. I can’t use the .imga nor .img2 because it’ll get expanded before I complete the abbreviation[^1]. Along with the unique character, also add a unique group abbreviations.

Group abbreviation is another way to make sure all the abbreviations are uniqe while providing an easy way for you to remember them. Instead of using `.img`, you can use `.mdimg` to make the abbreviations specific for markdown. Put them all together in a folder for better organization.

The overall structure of your abbreviations should use the following structure:

	[unique character][group abbreviation][snippet abbreviation]

You can come up with many different ideas for this your snippets. I use a lot of shortcodes when writing on MakeMac. It’s common for me to use `mm` as the group abbreviations for all the snippets. Some of the example are:

- `.mmtoapp`
- `.mmdirapp`


[^1]: You can enable delimiter to decide when the abbreviation should be expanded. With the delimited enabled (the default one are space, tab, return, and enter), the abbreviation will expand when one of the delimited is typed.