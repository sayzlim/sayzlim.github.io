---
layout: post
title: Default Activity Monitor Processes
description: Find out the functions of all the running processes  if you doesn’t run anything at all on Mac.
---
> Use your Mac, more importantly to know what is running.

If you are like me, someone who is always looking at the Activity Monitor to find out what is running, then there is high chance you know what is running.

What if you don’t know what is running? Sometimes I wonder what process should be running and which one is the redundant one. When you install an apps, there is a chance it will run additional plugin or process without your knowing. So what you need to know what is the default processes that every OS X running.

Take a look at the image below. It shows you the default processes if you don’t run any apps except connected to Internet. Let’s take a look at each process. And, I’m going to explain in human language. :-)

[ ![Default Activity Monitor Processes][img1] ](http://images.sayzlim.net/2010/10/activity_monitor.jpg "Default Activity Monitor Processes")

[img1]: http://images.sayzlim.net/2010/10/activity_monitor.jpg "Default Activity Monitor Processes"

- **Quick Look Helper** is the background process that generate icon preview whenever you use the Quick Look feature. Let’s say it lets you to view PDF and any supported filetypes directly by pressing space.
- **Finder** is the application with a smile face for you to navigate your files. It lets you to run Finder.
- **Activity Monitor** is not running by default. It is the application that I use to see the processes that is currently running, be it an foreground or background processes.
- **SystemUIServer** is the background process that control how your OS display stuffs on screen. The common usage is to display the icons at the right corner side of Menu Bar.
- **mdworker** is the background process that is used by the Spotlight to index your files. It is constantly running to build a list that will help you when you use it to search files via Spotlight.
- **Dock** is the process that generate those beautiful icons at bottom of screen.
- **loginwindow** is the process that start before anyone login into the computer. It displays login screen, validating login attempts, setting a user environment like launching finder, dock, login apps at the login. It also monitors how you use your mac and provide minor error handling without your consent. Aside the things above, it also handle the logout, restart, and shutdown procedures.
- **System Events** is the background process that support the usage of AppleScript scripts by the developers. You can say that it is the process that is required to run the features in AppleScript scripts.
- **cvmsComp_x86_64** is the process that somehow related to the Intel [x86_64 instruction set](http://en.wikipedia.org/wiki/X86-64). It is a terminology in Operating System, therefore you don’t need to understand this process. **Update**: After some searching, it seems that it is part of the OpenGL framework.
- **AirPort Base Station Agent** is apparently the process used for tracking wireless network.
- **UserEventAgent** is a process that handles complicated stuffs.
- **Folder Action Dispatcher** is a process that run the enabled scripts that have been applied to the folder. Usually, it give additional contextual menu when you right-click a folder.
- **fontd** is a process that check and validate the &#8220;system fonts&#8221; installed on your machine. By default, OS X requires some fonts that can’t be uninstalled to run properly.
- **AppleSpell.service** is the process that check your spelling in any text-based apps or system.
- **launchd** is the system process that control the behaviour of your computer. It is the core behind your running computer.
- **pboard** is also known as paste board is the process that is function as the temporary storage for process like copy and paste.