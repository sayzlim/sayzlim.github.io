---
layout: post
title: "Back to Finder"
date: 2013-11-14  01:23
description: Mavericks introduces tabs as one of the main feature alongside with tags. Should I go back to Finder?
tags:
- declutter
---

Tabs is finally available in Finder.  A simple and familiar feature we’ve grown accustomed can now be found in the wave of Mavericks.

<!--more-->

For the past six months, I’ve been using Path Finder as my default file browser. The reason for the switch is tabs. The lack of tabs support greatly affects the way I manage files. When I’m _actually_ working, windows and folders can fill up my screen in just a matter of seconds. What troubles me the most is when I need to work on two different projects at once. Since I can’t group the windows in tabs, App Exposé[^1] won’t be able to help me find window quicker.

With tabs, I only need a single window to open folders within a project. This approach cuts down the number of windows and helps me distinguish different projects in one glance. Remember App Exposé? Now you can use it to switch between projects.

Performance has never once been an problem in Finder. That’s why I can’t hide my disappointment when I realize creating new tab in Finder is significantly clunkier than Path Finder. For someone who is spoiled by Path Finder great performance, working with tabs in Finder is bothersome.

Despite the flaw, I’m going to switch my default file browser back to Finder. No matter how well designed a Finder replacement can get, it can never replace one feature. It’s the integration of third party apps system services.

System services are usually packaged along with the apps to help users accomplishing specific task. Try to use secondary click on one of your files. You’ll notice that some of the context menu items belong to certain apps. If you use Dropbox, these menu items are the one to share folder and create public link. You can also build and [install your own system services][0632-001].

[ ![Dropbox Contextual Link in Finder][img1] ](http://images.sayzlim.net/2013/11/finder_contextual_items.jpg "Dropbox Contextual Link in Finder")

[img1]: http://images.sayzlim.net/2013/11/finder_contextual_items.jpg "Dropbox Contextual Link in Finder"

Options to disable system services can be found in **Keyboard Shortcuts** under **System Preferences**. Use [Services Manager][0632-002] if you need more choices.

With Path Finder, I can search a folder through Alfred and have it opened in the new tab. This is the most precious feature for me. Mavericks with the new Finder, despite the addition of tabs, doesn’t allow “Reveal in Finder” to create new tab. The only available option to open folder in new tab is through Finder.

The easiest way to open folder in new tab is by pressing `Control + Command + O`. Not that it doesn’t work. It just doesn’t work for me — I’m awfully bad at pressing `Control + Command` key combination.

I need one shortcut. One shortcut to open files (`Command + O`) that can also open folders in new tab.

Fortunately, Keyboard Maestro can remedy the situation easily. Since folders are the only item that can be opened in new tab, I can create [a macro](http://s3.sayzlim.net/f/km-open-in-new-tab.zip "Open in New Tab Macro") that’ll check whether a menu item with the name of “Open in New Tab” exists. If the menu item exists, it’s a folder and it’ll opened in new tab. If it doesn’t exist, it’s a file and will be opened normally.

There is another reason why I prefer Finder over Path Finder: [beautiful sidebar and folder icons][2].

[2]: http://sayzlim.net/most-beautiful-folder-icons-mac "The Most Beautiful Folder Icons Replacement for Mac | Sayz Lim"

[^1]: App Exposé displays all current active app windows like Mission Control. The default gesture to call this feature is to swipe down with four fingers.

[0632-001]: http://brettterpstra.com/howtos/install-an-os-x-system-service/ "How To: Install an OS X System Service - BrettTerpstra.com"
[0632-002]: http://www.macosxautomation.com/services/servicesmanager/ "Mac OS X Automation: Services Manager"
