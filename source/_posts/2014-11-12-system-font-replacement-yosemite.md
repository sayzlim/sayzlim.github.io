---
layout: post
title: "System Font Replacement for OS X Yosemite"
date: 2014-11-12 21:45
description: "Replace Helvetica Neue with another font that is also optimized for non-Retina displays Mac as your system font."
tags:
- "Yosemite"
---

When Apple chooses Helvetica Neue as the new system font for OS X Yosemite, I realize that this font won’t work well on small sizes, especially for non-Retina displays. I [made a few tweaks with my new setup](http://sayzlim.net/yosemite-sweet-setup "OS X Yosemite Sweet Setup - Sayz Lim"), and the only change I left out was replacing system font with a better one that is on par with Lucida Grande in term of legibility.

<!-- more -->

Helvetica Neue is one of the most well-designed font which is why it looks gorgeous on iOS devices with Retina display. The same can be said for Mac line-up with Retina display. The problem is visible when you’re on non-Retina display with OS X Yosemite.

Font plays a major role that affects our experience with OS X. We spend most of our time interacting with the elements on the screen that are made of text, colors, and shapes. Squinting our eyes to differentiate between the number 3, 6, and 8 is the last thing you want to do in your list. I feel the letter *e* that are caught between *r* and *v* seems to be out of breath *forever*.

Input is a flexible system of fonts designed specifically for code by David Jonathan Ross. The team has scaled and adjusted the font to make them more suitable for use in OS X Yosemite. The font looks gorgeous on Mac. Just take a look at these screenshots.

[ ![Finder Menu Item][221034] ](http://images.sayzlim.net/2014/11/input_menu_item.jpg "Finder Menu Item")

[221034]: http://images.sayzlim.net/2014/11/input_menu_item.jpg "Finder Menu Item"

[ ![Finder Window][221047] ](http://images.sayzlim.net/2014/11/input_finder.jpg "Finder Window")

[221047]: http://images.sayzlim.net/2014/11/input_finder.jpg "Finder Window"

[ ![Desktop Settings][221118] ](http://images.sayzlim.net/2014/11/input_desktop.jpg "Desktop Settings")

[221118]: http://images.sayzlim.net/2014/11/input_desktop.jpg "Desktop Settings"

There is a [long story](http://input.fontbureau.com/info/ "Input: Fonts for Code — Info - Font Bureau") why they’ve designed this typeface, but what caught my attention was how the typeface was drawn over an 11-pixel grid. I’ve always liked Verdana as the fallback font when writing CSS for websites I develop. I even use Verdana as my font choice in [Mr. Reader](https://itunes.apple.com/us/app/mr.-reader/id412874834?mt=8&uo=4&at=11ld6n&ct=mr.+reader "Mr. Reader").

> Input takes its aesthetic cues from monospaced fonts and pixel fonts designed for consoles and screens, but casts off the technical limitations that constrained them. Inspired by Matthew Carter’s process for creating Verdana, David Jonathan Ross began designing Input as a bitmap font. After settling on the overall proportions, he drew Input’s outlines on top of the 11‑pixel grid.

I also like how Input Sans fits perfectly as the title in window. You won’t be able to find the same crispness brought by Input Sans in Pixelmator when the system font is Helvetica Neue.

[ ![iA Writer Pro][221109] ](http://images.sayzlim.net/2014/11/input_writer_pro.jpg "iA Writer Pro")

[221109]: http://images.sayzlim.net/2014/11/input_writer_pro.jpg "iA Writer Pro"

[ ![Pixelmator][221127] ](http://images.sayzlim.net/2014/11/input_pixelmator.jpg "Pixelmator")

[221127]: http://images.sayzlim.net/2014/11/input_pixelmator.jpg "Pixelmator"

The method to change system font is inspired by Jens Kutílek who has [packaged Fira Sans](https://github.com/jenskutilek/FiraSystemFontReplacement "jenskutilek/FiraSystemFontReplacement · GitHub") designed by Erik Spiekermann and Ralph du Carrois as system font replacement.[^1] Move the fonts into `/Library/Fonts/`, log out, and log in back. You’ll see the changes immediately. Resetting the system font to Helvetica Neue is simply removing Input Sans font family from the mentioned folder.

[**Download Input Sans System Font Replacement**](http://input.fontbureau.com/systemfont/ "System Font Replacement - Input - Font Bureau")

[^1]: I’ve tried Fira Sans as system font but find the letter weight is too heavy compared to Lucida Grande.