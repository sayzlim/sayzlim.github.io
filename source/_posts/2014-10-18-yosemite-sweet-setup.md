---
layout: post
title: "OS X Yosemite Sweet Setup"
date: 2014-10-18 11:44
description: "What I’ve done to make this flat user interface looks better and cleaner on MacBook Air."
tags:
- "Personal"
---

It’s been a day since I started using OS X Yosemite. I love the fact that OS X Yosemite brings a new look to the operating system that sports the Aqua theme for the past fourteen years, but I also hate the truth that this flat interface only looks perfectly gorgeous on Retina display.

<!-- more -->

With every major OS X release, I go over my setup to make sure it stays functional and beautiful. The latter is especially important as the appearance of the Dock, Menu bar, and Desktop items reflects my priorities. Here is a few adjustments I’ve made for Yosemite.

## Manage Extensions

[ ![OS X Yosemite Extensions Setting][140158] ](http://images.sayzlim.net/2014/10/yosemite_extensions.jpg "OS X Yosemite Extensions Setting")

[140158]: http://images.sayzlim.net/2014/10/yosemite_extensions.jpg "OS X Yosemite Extensions Setting"

Extensions is the uniform feature between iOS and OS X. In [the overview of extensions for iOS 8](http://sayzlim.net/ios-8-app-extensions-overview "Brief Overview of iOS 8 App Extensions - Sayz Lim"), I left out one extension point that is available only on OS X which is known as Finder extension. This extension shows the state of files in Finder so apps like Dropbox can include syncing state right beside the documents title in Finder.

Beside Finder extension, you’ll find Today, Share, and Action extensions in OS X Yosemite. The first thing I do is turning off the extensions I don’t use.

## Customize Dashboard Behavior

[ ![OS X Yosemite Dashboard Setting][140137] ](http://images.sayzlim.net/2014/10/yosemite_dashboard.jpg "OS X Yosemite Dashboard Setting")

[140137]: http://images.sayzlim.net/2014/10/yosemite_dashboard.jpg "OS X Yosemite Dashboard Setting"

Visit Mission Control and you can find a new setting to show Dashboard as overlay or space. Non-Dashboard users may turn off the Dashboard without going through the Terminal. I keep the Dashboard disabled to save memory and minimize CPU usage since most of the tasks can be done with Alfred.

## Grid View for Stack

Gorgeous OS X with sharp, crisp, and clean typeface *only* on Retina display. These praises become the flaws when you can still see a pixel on your screen. The worst offender is the Fan view in Stack. Take a look at these rough edges (click the image to view orginal version).

[ ![OS X Yosemite Stack Fan View][140056] ](http://images.sayzlim.net/2014/10/yosemite_stack_fan.jpg "OS X Yosemite Stack Fan View")

[140056]: http://images.sayzlim.net/2014/10/yosemite_stack_fan.jpg "OS X Yosemite Stack Fan View"

If you guys haven’t used or heard about Stack, I’ve written a [guide to decorate it with wooden stack icon](http://sayzlim.net/clean-your-menu-bar-sweeten-download-stack "Clean Your Menu Bar, Sweeten Download Stack - Sayz Lim"). The solution for this problem is to use Grid view which offers the similar functionality as Fan View that has thumbnails.

[ ![OS X Yosemite Stack Grid View][140125] ](http://images.sayzlim.net/2014/10/yosemite_stack_grid.jpg "OS X Yosemite Stack Grid View")

[140125]: http://images.sayzlim.net/2014/10/yosemite_stack_grid.jpg "OS X Yosemite Stack Grid View"

## Safari New Look

[ ![OS X Yosemite: Safari New Look][140042] ](http://images.sayzlim.net/2014/10/yosemite_safari.jpg "OS X Yosemite: Safari New Look")

[140042]: http://images.sayzlim.net/2014/10/yosemite_safari.jpg "OS X Yosemite: Safari New Look"

Safari looks wonderful in Yosemite. I used to keep Favorites Bar and Toolbar Icons visible the whole time, but Safari in Yosemite seems to look better with just an Address Bar. I remove the rest of toolbar icons and keep [Sessions](https://dl.dropboxusercontent.com/u/8247646/sessions/index.html "Safari Extensions — Sessions by David Yoo") and Downloads. Fortunately the smarter address bar shows the favorited bookmarks so I can hide it and create this new Safari setup.

## Clean Unused Language Files

[ ![CleanMyMac Language Files][140018] ](http://images.sayzlim.net/2014/10/yosemite_cleanmymac.jpg "CleanMyMac Language Files")

[140018]: http://images.sayzlim.net/2014/10/yosemite_cleanmymac.jpg "CleanMyMac Language Files"

I’ve been using [CleanMyMac](http://macpaw.com/cleanmymac "CleanMyMac 2: The Best Mac Cleanup App. Clean My Mac OS X") since the first time I got my MacBook. It’s one of the perfect utility to clean and manage the underlying part of your Mac. I mainly use it to remove application, clean caches, and manage plugins. You’ll be able to save tons of storage by running CleanMyMac on your Mac.

The surprising discovery in Yosemite is I can clean up language files without affecting the signed application. Cleaning these language files saves me over 700 MB of storage.

> %sidenote%
> **About Signed Applications:** Signed applications are the one where developers have codesigned every frameworks, plugins, and files in the `app` bundle. Modifying the `app` bundle without codesigning will cause the OS X takes extra precaution by requesting your permission before granting these modified applications network permission access.