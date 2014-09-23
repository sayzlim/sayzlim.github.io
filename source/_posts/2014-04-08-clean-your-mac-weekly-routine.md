---
layout: post
title: "Clean Your Mac Weekly Routine"
date: 2014-04-08 22:25
description: Learn the way to fix the most common problems in Mac with these routines.
tags:
- "Mac"
---

One lesson I want to share with all the Mac users is a way to keep their Mac free from dust and mess. Usually the mess are weird behaviors in Launchpad or Launch Services, and the dust are file relics from removed apps.

<!-- more -->

I keep the Mac clean by following this weekly routine. The routine has helped me to remove unused apps, keep the apps updated, and fix the weird behavior in OS X. But we‘ll start with the most basic tips to clean the mess: by removing unused apps.

## Remove unused apps
This is the most common tips, but I must emphasize the importance of removing unused apps. You want to create a workspace that helps you stay focused. Having those useless apps lingering in Launchpad and Spotlight will only take away your attention. It’s difficult enough to build focus with Internet; we don’t need more distraction.

The way apps are installed usually fall under these categories:

- Apps that are installed by drag and drop.
- Apps that are installed by drag and drop with administrator permission.
- Apps that are installed from Mac App Store.
- Apps that are installed with a package manager.

You can easily remove apps in the first three categories, along with its preferences, by using [AppCleaner](http://www.freemacsoft.net/appcleaner/ "AppCleaner - FreeMacSoft"). But for the last category, you should use the uninstall package manager to remove apps properly, otherwise, some of those files in system folders will stay forever.

## Show me your Launchpad
Launchpad is another way to launch apps in Mac, but organizing Launchpad is a tedious task. Remember that you’ve removed many unused apps in the first step? You’ll see that each section in Launchpad is full of blank spot, and I dislike those blank spot.

[ ![Clean Launchpad][img1] ](http://images.sayzlim.net/2014/04/clean_launchpad.jpg "Clean Launchpad")

[img1]: http://images.sayzlim.net/2014/04/clean_launchpad.jpg "Clean Launchpad"

My favorite (and lazy) way to organize apps in Launchpad is by resetting its layout using the Terminal command below:

	rm ~/Library/Application\ Support/Dock/*.db && killall Dock

OS X will rebuild the Launchpad with all the apps sorted alphabetically. No more blank spot, Launchpad is organized in no time.

## Update your apps
Part of my routines is to ensure all the apps are updated to the latest version. By staying updated, I can use the new feature to simplify my works. Security patches and bug fixes is one of the main reason to update your apps, but the most important thing from these updates is the performance improvement.

It’s easy to update your apps these days. Mac App Store streamlines the purchases and updates process in one place. You can run Mac App Store and view the list of available updates without having to run the app one by one. Third party apps that are available outside Mac App Store can be checked with apps like [AppFresh](http://metaquark.de/appfresh/mac "AppFresh for Mac – metaquark").

## Remove Login Items & Clean Launch Agents
An installed apps can run a process automatically through two ways. The most common way is by launching the app itself every time you log into Mac. They’re usually known as **Login Items** which you can find under `System Preferences > Users & Groups > Login Items`.

Sometimes installed apps takes the second approach to run process automatically. These processes are known as daemons or helpers — processes that run in background. For example, CleanMyMac offers to uninstall the app properly when you delete an app with - key, despite CleanMyMac itself is inactive. These activities are monitored by CleanMyMac helpers or daemons.

[ ![LaunchControl for Mac][img2] ](http://images.sayzlim.net/2014/04/clean_launchagent.jpg "LaunchControl for Mac")

[img2]: http://images.sayzlim.net/2014/04/clean_launchagent.jpg "LaunchControl for Mac"

Unlike **Login Items** that you can remove easily under `System Preferences`, **Launch Agents** are stored as a `plist` files in `~/Library/LaunchAgents/`. You can use [LaunchControl](http://www.soma-zone.com/LaunchControl/ "soma-zone: LaunchControl") to remove all inactive `plist` to clean the trace of all removed apps.

## Show System Files
It’s scary to show all the hidden files when you’re new to Mac; everything doesn’t make sense. But trust me on this one, it’s better to know which files or folders are created when you install an app. To show all the hidden files, type this in Terminal:

	defaults write com.apple.finder AppleShowAllFiles TRUE

Change the value from `TRUE` to `FALSE` if you wish to revert the changes.

## Reset Launch Services
Another common problem when you remove an app is the list of duplicate apps in **Open With…** selection. This is caused by the corrupted Launch Services after you remove the associated apps from all the files. Type this command in Terminal to reset the list:

	/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user

## Conclusion
I hope these routines can help you build a problem free workspace and stay focused whenever you turn on your Mac. The tool should empower our activities. One way to make sure the tool does its job is to maintain it properly.

As a bonus, I’ve put together these routines into a [Alfred 2 workflow](http://sayzlim.net/os-x-toolbox-workflow-alfred-2 "OS X Toolbox Workflow for Alfred 2 - Sayz Lim") if you don’t wish to open Terminal everytime you need to fix those quirks.