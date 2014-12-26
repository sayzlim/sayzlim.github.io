---
layout: post
title: "Customize Default Apps with Magic Launch"
date: 2014-09-17 01:00
description: "Magic Launch lets you customize the way you open files with custom rules that determine which apps to use based on filenames, labels, or extension."
tags:
- "Magic Launch"
- "Review"
---

Magic Launch is one of my favorite System Preferences pane along with Hazel, FunctionFlip, and SmoothMouse in my [recommended apps](http://sayzlim.net/apps "Apps Recommendations - Sayz Lim") page. Few days ago I mentioned Magic Launch again in [one of my tweet](https://twitter.com/sayzlim/status/510436022023229440 "Magic Launch on Twitter").  After these mentions, I want to briefly review Magic Launch and show you what you can do with this utility.

<!-- more -->

Magic Launch lets you customize the way you open files with custom rules that determine which apps to use based on filenames, labels, or extension. For example, I want to view `jpg` and `png` files in Preview, but I occasionally need to edit these files with Pixelmator. The common way to open the files with non-default apps is by choosing `Open With…` from the menu bar or using secondary-click that lists down the compatible apps. As you can see from the explanation above, it takes couple of steps to open files with non-default apps. Magic Launch removes these redundant steps with custom rules called launch rules.

Since I move the images I want to edit to `~/Desktop/`, I can create a rule that opens the `jpg` files in Pixelmator when they’re inside the folder of `~/Desktop/`. Take a look at the following rule.

[ ![Magic Launch Edit in Pixelmator Rule][002016] ](http://images.sayzlim.net/2014/09/magic_launch_pixelmator.jpg "Magic Launch Edit in Pixelmator Rule")

[002016]: http://images.sayzlim.net/2014/09/magic_launch_pixelmator.jpg "Magic Launch Edit in Pixemaltor Rule"

Now I just need to move `jpg` files to `~/Desktop/` and open it the usual way, and it’ll open in Pixelamtor — skipping tedious steps to open files with other apps.

Another useful condition you see from the rule above is **application is already open**. By using this condition in the rule, whenever Pixelmator is open, the`jpg` inside `Screenshots` folder will open in Pixelmator instead of Preview. If I close Pixelmator, opening the images will revert back to Preview.

Magic Launch is suitable for people who need to work on single file with different type of apps based on its file stage. In the post where I shared the [guide to sync Writer Pro to Dropbox](http://sayzlim.net/sync-writer-pro-icloud-dropbox "Sync Writer Pro Between iCloud and Dropbox - Sayz Lim"), I talked about how I differentiate the default apps between writing stages with Magic Launch.

Magic Launch is free to try, but without a license, it’ll remind you to purchase a license every time you open a document 10 times.

It’s easy to find out whether you’ll benefit from using Magic Launch. Do you often find yourself choosing `Open with…` in menu item? If your answer is yes, Magic Launch is one of the utility you must get on your Mac.

[**Download Magic Launch**](https://www.oneperiodic.com/products/magiclaunch/ "One Periodic - Magic Launch")