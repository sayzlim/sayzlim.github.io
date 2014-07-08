---
layout: post
title: "Manage Alfred Workflows with Packal Updater"
date: 2014-07-03 23:42
description: Packal Updater is the missing workflows manager for Alfred.
tags:
- alfred
---

Alfred has been my main control center on Mac since 2011. I’ve used it for a lot of things: [launch apps][0722-001], [search the web][0722-002], and [manage documents][0722-003]. I start everything from Alfred.

<!-- more -->

[0722-001]: http://sayzlim.net/alfred-full-fuzzy-match "Type Less with Full Fuzzy Match Search in Alfred - Sayz Lim"
[0722-002]: http://sayzlim.net/lucky-alfred-fallback-search "Stay Lucky With Alfred Fallback Searches - Sayz Lim"
[0722-003]: http://sayzlim.net/handy-tips-browse-files-alfred "5 Handy Tips to Browse Files in Alfred - Sayz Lim"

When I want to check which process is running wild, I use [Top Processes workflow][4037-001]. When I want to [clean up Launchpad][4037-002], I use my [own custom workflow][4037-003].  Alfred won’t be able to carry out the tasks I’ve mentioned without these workflows.

[4037-001]: http://sayzlim.net/best-alfred-2-workflows "Best Alfred 2 Workflows - Sayz Lim"
[4037-002]: http://sayzlim.net/clean-your-mac-weekly-routine "Clean Your Mac Weekly Routine - Sayz Lim - SayzLim.net"
[4037-003]: http://sayzlim.net/os-x-toolbox-workflow-alfred-2 "OS X Toolbox Workflow for Alfred 2 - Sayz Lim"

Discovery of the new workflows is not a problem, at least for me. I can visit [Alfred Community Forum](http://www.alfredforum.com/ "Alfred App Community Forum") to see if any new workflows available. The problem I’ve been facing these past few years is to keep all the workflows updated.  There is no one simple method to upgrade all installed workflows (the only choice is to visit the original thread one by one) until the release of Packal Updater yesterday.

## What is Packal?

[Packal](http://www.packal.org/ "Packal: Home") is a dynamic repository for Alfred Workflows and Themes. Registered users can submit their workflows and themes to the repository for the community to use. It’s made by [Shawn Patrick Rice](https://github.com/shawnrice "shawnrice (Shawn Patrick Rice) · GitHub") to address one problem each new Alfred user faces: discovery of useful workflows.

The repository hosts over 200 workflows: ranging from a simple workflow to complex worklfow. Although not all the workflows in the forum uses Packal as an update framework, I find that most of the workflows I regularly use are already available there. Hopefully more authors will distribute their workflows through Packal.

## What exactly is Packal Updater?

Packal Updater is an Alfred workflow that’ll  **only upgrade all the workflows downloaded from Packal**.  It won’t upgrade any workflows you’ve downloaded from other sources, including the one you’ve written.

[ ![Packal Updater in Alfred][img] ](http://images.sayzlim.net/2014/07/packal_alfred.jpg "Packal Updater in Alfred")

[img]: http://images.sayzlim.net/2014/07/packal_alfred.jpg "Packal Updater in Alfred"

The first thing you should do after installing this workflow is to open the graphical application which is available right after you type `packal` as query.  Take some time to configure Packal Updater settings (you can toggle the menu by pressing the burger menu on top of the window). Enter the name you use for all your custom workflows, and make changes to other options according to your preferences.

[ ![Packal Updater Status][img2] ](http://images.sayzlim.net/2014/07/packal_status.jpg "Packal Updater Status")

[img2]: http://images.sayzlim.net/2014/07/packal_status.jpg "Packal Updater Status"

Return to the status section and update the manifest. You should be able to see the total number of the workflows you’ve written and the one you’ve installed from Packal.

If you happens to have a lot of workflows installed, Packal will match installed workflows Bundle IDs with the one available in Packal repository. If it finds a match, it’ll show you another details with a link to download these matching workflows from Packal. Replace these workflows with the one from Packal.

Packal keeps a backup of your updated workflows just in case you want to revert them back. What if you don’t want to update to the latest workflows? Fortunately Packal provides a way to add workflows into blacklist so it won’t get updated when you update workflows next time.

## Conclusion
[Packal Updater](http://www.alfredforum.com/topic/4579-packal-updater/ "Packal Updater - Share your Workflows - Alfred App Community Forum") is the missing workflows manager for Alfred. Now just like Alfred, the updates for workflows is only one query away.