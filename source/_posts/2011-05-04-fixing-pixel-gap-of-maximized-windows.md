---
layout: post
title: Fixing Pixel Gap of Maximized Windows
tags:
- prettify
---
Talking about perfection, there is one thing about Snow Leopard — I’m not sure about other version — that keeps bothering me. With the dock hidden, I expect the maximized window will cover entire screen perfectly, which unfortunately doesn’t do its job well. It leaves a 3–4 pixel gaps at the bottom of the hidden dock.

<!--more-->

After some research and the solution discovery process, it turns out that the bottom hidden dock reserves 3 pixels — as the matter of fact I don’t know what it does.

Not giving up, I move the dock to the left screen edge and try to maximize the window again (I used Cinch to maximize the window), and the gap is still there.

I have tested several applications, starting from Cinch, FlexiGlass, Divvy, and SizeUp, which yield a similar result. I started to believe that there is no way to fill the gap, until I discovered BetterTouchTool.

[BetterTouchTool][4] is a lightweight app designed by [Andreas Hegenberg][5] that add multiple shortcut ability to your trackpad and mouse devices. Alongside with these features, you can enable snapping features similar to the apps listed above.

Unlike other apps, BetterTouchTool can fill the whole screen if the dock is located on either side of the screen. I’m not going to write a lengthy article about BetterTouchTool right now[^1], but I will let you know how I [configure the behavior of the snapping feature][3].

[3]: http://images.sayzlim.net/2011/05/btt_settings.png "BetterTouchTool Settings"
[4]: http://blog.boastr.net/ "Great Tools For Your Mac By Andreas Hegenberg ... - BetterTouchTool"
[5]: https://twitter.com/boastr_net "Andreas Hegenberg (boastr_net) on Twitter"

[^1]: I am considering to cover a walkthrough and review article on it in the near future. Let me know if you’re interested and wish to know about this amazing free app.
