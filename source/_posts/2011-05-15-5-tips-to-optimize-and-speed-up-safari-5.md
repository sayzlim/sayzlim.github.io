---
layout: post
title: 5 Tips to Optimize and Speed Up Safari 5
alias: [/post/5485663917/5-tips-to-optimize-and-speed-up-safari-5, /post/5485663917/]
description: Safari 5 can consume too much memory ocassionally. Here is the way to remedy the situation.
---
Safari is not the best browser on Windows. But it remains as one of the most used browser on OS X. For some people, memory usage on Safari is too high compared to other browsers. It causes some performance issues, but there is a cure. I’ve implemented these tips since the day I use Snow Leopard till Mountain Lion. It remains useful to improve the performance.

## Set new windows and tabs open in empty page

I’ve never set a homepage for my browser. It doesn’t only speed up Safari launch time, it also speed up the new windows and tabs launch time. You can access it under **Preferences &gt; General**.

## Set database storage to none

By disabling storage, you increase your browser security and know which website requires database. It doesn’t do much to the performance, but I think it’s better to know which website use your storage. You can access it under **Preferences &gt; Security &gt; Show Databases.**

## Disable the webpage preview caches

If you use Top Sites feature, you should know that Safari will create a screenshot of the site you’ve visited and store it in a folder. Over time, it’ll take a large space of your hard disk. Safari will search for the existing cache whenever it wants to display top site preview. The most important issue is the time it requires to search for the each screenshot - imagine your folders has over 300 screenshots.

Quit Safari if it’s running. Run Terminal and enter:

	touch desktop/Webpage\ Previews

Use Finder and navigate to the address below (You can type **Command+Shift+G** to show the Go To window):

	~/Library/Caches/com.apple.Safari/

Delete the Webpage Previews folder and move the new Webpage Previews (check your desktop) into `com.apple.safari folder`.

The reason why I choose this approach is to let you understand how the whole blocking works. We create a new empty file in order to block Safari from writing a new image into the folder. To restore the feature, delete the empty file and Safari should create new folder the next time it launches.

## Disable web icons storage

When you visit a website, Safari will store the tiny icon in the url into its own storage. If it’s getting larger, it’ll slow down Safari performance because it need to search the database every time it visits a website. There is an easier way if you don’t mind installing app.[^1]

Quit Safari if it’s running. Navigate to

	~/Library/Safari/

Delete the **WebPageIcons.db** Don’t worry, it’s safe. This is the storage I mentioned, deleting it won’t cause any issues to Safari.

Run Terminal and enter this:

	defaults write com.apple.Safari WebIconDatabaseEnabled -bool NO

## Speed up the initial layout

Decreasing the initial time layout delay to 0.25. Safari by default has a delay of 1 second before loading page (The time it takes to load and render the webpage before presenting it in your browser). By decreasing the delay, you make sure it displays faster but not loads faster. Because it depends on your internet connection and website to ensure the page loads under 1 second to see different.

Enter this to terminal:

	defaults write com.apple.Safari WebKitInitialTimedLayoutDelay 0.25

Bookmark, share this article if you find it useful. You’ll realize how much the author of blog hoping their readers to support them by spreading the words.

1.  You can simplify the whole process by installing [TinkerTool](http://www.bresink.com/osx/TinkerTool.html "TinkerTool: Description - Marcel Bresink Software-Systeme") to disable site icons and website preview caches.