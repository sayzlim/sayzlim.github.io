---
layout: post
title: "Übersicht: Lightweight GeekTool Alternative for Mac"
date: 2014-08-14 01:15
description: "Meet Übersicht, a resource friendly GeekTool alternative for Mac. Build your own widgets with HTML, CSS, and JavaScript, or download the ready-made widgets for free."
tags:
- "Ubersicth"
- "Mac"
---

GeekTool is a well-known application for displaying various information on the desktop. I was curious with this application. I searched for some geeklets (or widgets), installed them, and customized it to fit with my desktop. Everything was great until I saw the insane CPU usage in Activity Monitor. I removed GeekTool and started searching for a better alternative.

<!-- more -->

[ ![Übersicht: GeekTool Alternative for Mac][001332] ](http://images.sayzlim.net/2014/08/ubersicht_screenshot.jpg "Übersicht: GeekTool Alternative for Mac")

[001332]: http://images.sayzlim.net/2014/08/ubersicht_screenshot.jpg "Übersicht: GeekTool Alternative for Mac"

I disabled Dashboard because of the same reason: the widgets used way more resources than I thought. Since that day, I never install any applications or widgets that consume more resources than it should. This is also why most of the [apps in my recommendation list](http://sayzlim.net/apps "Apps Recommendations - Sayz Lim") uses small amount of RAM and CPU.

Übersicht changes my mind.

Übersicht is extremely lightweight — it uses ±16 MB for RAM and ±0.9% CPU resource. The ground technology Übersicht users plays an important part to achieve this. Here’s the [explanation](http://tracesof.net/blog/2014/04/22/ubersicht/ "Übersicht") from the developer Felix Hageloh himself.

> So in essence the app is just a large WebView that is glued to your desktop and widgets are little snippets of HTML+CSS+JS. Of course you can’t run system commands from within a WebView, so the app comes with a NodeJs backend.

You can browse the [complete list of widgets over here](http://tracesof.net/uebersicht-widgets/ "Übersicht Widgets - Traces Of").

Installing widgets is as easy as moving the them into `~/Library/Application Support/Übersicht/widgets` folder. You can also sync your widgets across machines by moving the widgets folder into Dropbox. If you’ve read [the way I organize document in Dropbox](http://sayzlim.net/organize-files-in-dropbox "How I Organize Files in Dropbox - Sayz Lim"), the best location for those widgets should be in `~/Dropbox/Apps/Übersicht/`.

Übersicht is a great tool for displaying information on desktop. With decent understanding of HTML, CSS, and JavaScript, you can customize the widgets position, style, and font to match your desktop wallpaper.