---
layout: post
title: "Safely Replace Apps Icons on OS X Yosemite"
date: 2014-10-22 22:33
description: "While we’re no longer be able to freely change the Dock design starting OS X Lion, it’s still possible to replace apps icons without breaking the code signing."
tags:
- "Personal"
- "Yosemite"
---

Personalization used to be popular among OS X users. We could change the appearance of the folder icons, app icons, and even the Dock. While we’re no longer be able to freely change the Dock design starting OS X Mountain Lion, it’s still possible to replace apps icons without breaking the code signing.

<!-- more -->

OS X Yosemite with the new flat design, boasting translucency to add more dimension to the desktop, once again ignites the sparks from designer community to come up with gorgeous icon replacements for built-in and popular third-party apps.

[Dribbble](https://dribbble.com/ "Dribbble - Show and tell for designers") has the most collection of custom icons made available for free. After OS X Yosemite initial public launch, I discover tons of icon replacements. But the problem is how to replace the apps and system icons safely?

[ ![CandyBar by Panic][224320] ](http://images.sayzlim.net/2014/10/candybar_collection.jpg "CandyBar by Panic")

[224320]: http://images.sayzlim.net/2014/10/candybar_collection.jpg "CandyBar by Panic"

Long time OS X users should be familiar with CandyBar. Developed by Panic, this is the best app to replace the system and apps icons. The company [stopped developing CandyBar and gave away this application for free](http://www.panic.com/blog/candybar-mountain-lion-and-beyond/ "Panic Blog » CandyBar, Mountain Lion, and Beyond"). Like I mentioned in the beginning, although it can’t change the Dock’s look anymore, CandyBar can still replace the system icons, and possibly one of the best free icon organizer for Mac.

> %sidenote%
> CandyBar can’t change system icons in OS X Yosemite? Don’t worry. You can still use [LiteIcon](http://www.freemacsoft.net/liteicon/ "LiteIcon - FreeMacSoft") by FreeMacSoft to change the system icons safely.

Due to code signing, you also can’t change the internal icons of Mac App Store apps with CandyBar. There is a workaround for this limitation. You can still change the icons with this method I’m going to show you. Not only this method won’t affect the code signing, it also simplifies the restoration process.

## Replace Apps Icons with CandyBar

1. Make sure you’ve imported the icons into CandyBar. Browse the folder that contains the icon you want to replace.
2. Select the icon you want to use and copy it by pressing `Command-V`. This’ll copy the icon as a folder icon format which you can paste into another folder icon.
3. Now reveal the app you want to replace in Finder. Press `Command-I` to show the information window.
4. Select the default icon in the information window. Press `Command-V` to replace it with your custom icon.

## Restore Apps Icons to Default

1. Reveal the app you want to replace in Finder. Press `Command-I` to show the information window.
2. Select the default icon in the information window. Press `Delete` to restore it to default icon.

CandyBar is my favorite app to manage icons. Even if you don’t use it to replace system icons, I’m sure you’ll enjoy using it to organize the icons collection.