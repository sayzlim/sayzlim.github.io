---
layout: post
title: How to Remove Spotlight Icon in Menubar
---

If you choose [Alfred over Spotlight](http://sayzlim.net/alfred-app-vs-spotlight "Alfred App vs Spotlight - Sayz Lim"), it looks better without menu bar icon. Paste the code below into Terminal.app and enter your admin password.

### To Hide Spotlight Icon

    sudo chmod 600 /System/Library/CoreServices/Search.bundle/Contents/MacOS/Search && killall SystemUIServer

### To Show Spotlight Icon

	sudo chmod 777 /System/Library/CoreServices/Search.bundle/Contents/MacOS/Search && killall SystemUIServer