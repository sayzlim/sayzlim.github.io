---
layout: post
title: ! 'OS X Toolbox Workflow for Alfred 2 '
description: Collection of Alfred 2 workflows for daily tasks to increase your productivity.
alias: /post/40457309216
tags:
- alfred
---
My favorite productivity tool, Alfred, has entered its second version and released the beta for every Mega Supporters last night. The most useful feature in Alfred 2 is workflow that allows you to create a series of actions to complete a task.

<!--more-->

The extensions support in the first version of Alfred were great but limited in term of creation. However, with the new workflow, everything are more powerful and easier to manage.

[ ![Alfred OS X Toolbox Workflow][img2] ](http://images.sayzlim.net/2013/01/alfred2_workflow.jpg "Alfred OS X Toolbox Workflow")

[img2]: http://images.sayzlim.net/2013/01/alfred2_workflow.jpg "Alfred OS X Toolbox Workflow"

Taking this chance, I’ve compiled all the extensions I’ve built and downloaded before into single workflow called “OS X Toolbox”. It’s a one stop toolkit to fix common annoyances and toggle states in OS X.

> Attribution to each original extension creator can be found in the shell script action.

**Rebuild Launch Services:** A simple command to rebuild your launch services that manage all the “Open with…” menu item. If you see duplicate items, run this command to fix the problem.

- **Toggle Desktop:** Turn desktop visible or hidden.
- **Toggle System Files by [Don Southard](http://www.dirtdon.com):** Turn system files visible/hidden.
- **Toggle Wi-Fi by [Jonas Eriksen](http://www.aiyo.dk/alfredapp):** Turn Wi-Fi On/Off.
- **Purge Inactive Memory:** Clear away inactive memory without rebooting your Mac.
- **Relaunch Finder:** If you’ve encountered a bug that stops you from revealing Alfred search result in Finder, then you’ll need this command. Usually it happened after you relaunch Finder without killing “appleeventsd” process. With this, you can relaunch Finder and kill the process in one stroke. <del>Because we need *sudo* command, you’ll need to enter your user password in the workflows menu (see the Relauch Finder shell script).</del> You’re no longer need to type in your password in the shell script. This action will use your password as argument and pass it along to the command.[^1]

[ ![Alfred Workflow Requires Password][img2] ](http://images.sayzlim.net/2013/01/alfred2_password.jpg "Alfred Workflow Requires Password")

[img2]: http://images.sayzlim.net/2013/01/alfred2_password.jpg "Alfred Workflow Requires Password"

The extensions are all packaged into one workflow so it won’t clutter your Alfred preferences, and the actual process is pleasant, even for beginner.

If you plan to build a better and complete version of this, [send me an email][2] and I’ll link it so others can download it. I simply want to show you how easy it is to create your own workflow in Alfred 2. If you haven’t upgraded to Mega Supporter license, don’t hesitate and hurry [get the license.][3]

> %update%
> **Update 2013-08-15:** I’ve included the command to reset Launchpad’s apps ordering in the latest update. You may get the workflow from the download link below.

Download: [OS X Toolbox Workflow for Alfred 2](http://s3.sayzlim.net/f/alfred-toolbox.zip "OS X Toolbox Workflow for Alfred 2")

> %update%
> **Update 2013-09-27:** Ed Heltzer from [Rainy Day Media][4] has sent me an updated workflow with more and better tools. With the improved Wi-Fi toggle, you can also view the your Wi-Fi network and see your IP address from single command. Perhaps the  “space” command is the one I’ll use the most. It’ll check and show the storage on your local and mounted drives. Pretty handy, isn’t it?

Download: [OS X Toolbox Workflow by Ed Heltzer](http://s3.sayzlim.net/f/alfred-toolbox-heltzer.zip "OS X Toolbox Workflow by Ed Heltzer")

[2]: http://sayzlim.net/contact "Contact | Sayz Lim"
[3]: https://buy.alfredapp.com "Buy Alfred"
[4]: http://rainydaymedia.net "RDM | A Storming Is Brewing"

[^1]: Thanks [CarlosNZ](http://geekzone.philosophicalzombie.net/ "Carl&#39;s Geekzone") for [his helpful tips](http://www.alfredforum.com/topic/178-fixing-your-reveal-in-finder-not-working-with-this-workflow/#entry1694).