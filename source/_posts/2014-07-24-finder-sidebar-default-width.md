---
layout: post
title: "Change Finder Sidebar Default Width"
date: 2014-07-24 01:30
description: Does OS X provide an option to set Finder sidebar default width? No, but there is a workaround to change all Finder sidebar width, automatically.
tags:
- finder
- keyboardmaestro
- mac
---

Does OS X provide an option to set Finder sidebar default width? No, but there is a workaround to change all Finder sidebar width, automatically.

<!-- more -->

If you’ve changed Finder sidebar width before, you should know that the new width doesn’t apply to all folders. Each folder has its own view preferences — it’s the reason why you can have one folder in column view, while the other folder in list view.

Not a problem unless you want change the sidebar icon size.

[ ![Finder Sidebar Same Width][img] ](http://images.sayzlim.net/2014/07/finder_perfect.jpg "Finder Sidebar Same Width")

[img]: http://images.sayzlim.net/2014/07/finder_perfect.jpg "Finder Sidebar Same Width"

If you change the sidebar icon size to medium, the sidebar falls apart. The narrow sidebar that contains your favorite labels are now ending with ellipses. Your keen eyes on details — the reason why you choose Mac in the first place — can’t accept this smudge on the screen.

Fortunately, Finder has `sidebar width` property that you can modify with AppleScript.  Resize the sidebar in all active windows by running the script below in AppleScript Editor.

	tell application "Finder"
		set sidebar width of every window to 160
	end tell

Experiment the value until you discover the size that can fit all the sidebar labels, but still have enough room for the labels to breathe. 

It can get troublesome if you have to run the script whenever there is different sized sidebar on screen. Let’s come with a solution: tell Keyboard Maestro to run the script whenever Finder activates. Here is the screenshot of the macro:

[ ![Resize Finder Sidebar Macro][img2] ](http://images.sayzlim.net/2014/07/finder_resize_sidebar.jpg "Resize Finder Sidebar Macro")

[img2]: http://images.sayzlim.net/2014/07/finder_resize_sidebar.jpg "Resize Finder Sidebar Macro"

Name the macro as `Resize Sidebar` and put it in a group where only Finder can run the macros.

Now whether you create a new folder, open a shared folder, or accidentally resize the sidebar, Keyboard Maestro will change the sidebar width to the default value you’ve entered in the script. Finder is not perfect, but at least we don’t have to manually resize the Finder sidebar anymore.