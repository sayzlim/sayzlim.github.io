---
layout: post
title: "How to Restore Default Fonts on Mac"
date: 2014-10-24 01:30
description: "You realize that the free fonts you’ve collected these past few years take up a lot of space on your Mac. It’s time to open Font Book and remove the fonts you’re no longer use."
tags:
- "Mac"
---

You realize that the free fonts you’ve collected these past few years take up a lot of space on your Mac. It’s time to open Font Book and remove the fonts you’re no longer use. Whether you want to save more space or just want a organized fonts gallery, this tutorial will show you how to do it easily with built-in feature.

<!-- more -->

Restoring fonts to default is useful especially when you have problem with how the fonts look like in some apps. Fortunately, Font Book has a command that allows you to restore the default fonts easily.

[ ![Font Book » Restore Standard Fonts][231114] ](http://images.sayzlim.net/2014/10/fontbook_restore.jpg "Font Book » Restore Standard Fonts")

[231114]: http://images.sayzlim.net/2014/10/fontbook_restore.jpg "Font Book » Restore Standard Fonts"

Run Font Book and select `File » Restore Standard Fonts…`. This menu item will restore the standard fonts on your Mac and move the custom fonts into a folder called `Font (Removed)`. You’ll be prompted to enter your password. Enter it and choose `Restore`.

The fonts are restored, but your job is not done yet. First, browse the list of your removed fonts in this path `~/Library/Fonts (Removed)`. You can open Finder and press `Command-Shift-G` to display the `Go to the folder:` menu. Install the fonts you use by dragging them into Font Book.

Now we want to make sure that all the apps look perfect. Start by checking the list of apps you use regularly. Photoshop and similar softwares sometimes use their own custom fonts for their custom UI elements. If you spot any mistakes, chance is the custom fonts they use are unavailable.[^1]

Remove `Fonts (Removed)` folder along with the fonts inside it after you’ve checked all the apps — you need to log out first if you want to empty the trash. If you want to play safe, you can archive the folder and keep it in for few months so you can restore them whenever you discover problem with some of the apps.

[^1]: [This comprehensive guide](http://www.jklstudios.com/misc/osxfonts.html "Font Management in OS X - JKL Studios") by Kurt Lang shows where the fonts are located and which can be safely removed.