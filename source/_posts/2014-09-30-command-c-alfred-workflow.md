---
layout: post
title: "Command-C Alfred Workflow"
date: 2014-10-01 00:30
description: "Send system clipboard with Alfred and Command-C to your selected device with a simple shortcut."
tags:
- "Command-C"
- "Alfred"
- "Review"
---

Command-C is a popular clipboard sharing app on OS X and iOS. You can read the [in-depth review](http://www.macstories.net/reviews/command-c-a-local-clipboard-sharing-tool-for-os-x-and-ios-7/ "Command-C: A Local Clipboard Sharing Tool for OS X and iOS 7 ...") from Federico Viticci and learn to [launch iOS actions from Mac with Alfred workflows](http://www.geekswithjuniors.com/note/launch-ios-actions-from-the-mac-using-alfred-and-command-c.html "Launch iOS Actions from the Mac using Alfred and Command-C ...") from Eric Pramono. In this post I’m going to share an Alfred workflow that sends clipboard to another device.

<!-- more -->

Command-C is still new in the list of my favorite apps, but the moment I downloaded it on my iPad and Mac, I realized that it’s going to become one of my most used utility. [Command-C for iOS](https://itunes.apple.com/us/app/command-c-clipboard-sharing/id692783673?mt=8&uo=4&at=11ld6n&ct=command+c+clipboard+sharing "Command-C — Clipboard Sharing Tool for iOS and OS X") lets me send clipboard between iPhone and iPad, and with [Command-C for OS X](https://itunes.apple.com/us/app/command-c-clipboard-sharing/id692787282?mt=12&uo=4 "Command-C — Clipboard Sharing Tool for iOS and OS X") I can send and receive clipboard between Mac and iOS devices.

Sending clipboard with Command-C is pretty simple. Pair the devices so it becomes available in the selection list, then tap the device name to send the system clipboard to selected destination device.

While the default setting works great, I hope there is a quicker way to send clipboard without having to tap the device name in the list first. Fortunately, Command-C supports `x-callback-url` which I can use in Alfred workflow. I create an Alfred workflow called **Command-C** that contains basic custom actions to send clipboard from Mac to selected iOS devices. There are three types of supported actions in Command-C, but you’re likely using only the action that sends system clipboard.

> %sidenote%
> **Command-C x-callback-url API Documentation:** The other two actions lets you send a custom text as clipboard to other devices or send an URL and open it in default browser on Mac. [More details »](http://danilo.to/command-c/faq/how-to-use-x-callback-url "Command-C ‣ x-callback-url API Documentation")

Take a look at this workflow I create to send clipboard by typing `cmc` into Alfred. The first one will send the system clipboard to my iPad mini, meanwhile the second one will send an argument as clipboard to my iPad mini.

[ ![Command-C Alfred Workflow][171151] ](http://images.sayzlim.net/2014/10/command_c_alfred_workflow.jpg "Command-C Alfred Workflow")

[171151]: http://images.sayzlim.net/2014/10/command_c_alfred_workflow.jpg "Command-C Alfred Workflow"

For example, this is first URL that sends the system clipboard to the device named `Espeon`:

	command-c://x-callback-url/copy?deviceName=Espeon

You can replace `deviceIndex` with `deviceName` as the option to choose your destination device — the first item in the list have the index of 0, so the new URL becomes:

	command-c://x-callback-url/copy?deviceIndex=0

The second action is the one that lets you send custom text as clipboard. The `x-callback-url` for this type of action is:

	command-c://x-callback-url/copyText?text={query}&deviceIndex=0

As you can see from the URL above, you can replace `{query}` with any value, or you can create your own script that calls this `x-callback-url` to launch apps that support `x-callback-url` on iPhone or iPad.

Command-C is useful for people who constantly need to send clipboard between Mac and iOS devices. Sharing screenshot with Command-C is much faster than [the Dropbox setup](http://sayzlim.net/manage-screenshots-hazel "Manage iPad and iPhone Screenshots with Hazel - Sayz Lim"), and you can avoid the tedious *paste to Notes app* whenever you want to copy a paragraph of text between Mac and iOS devices.

[**Download Command-C for Alfred Workflow**](http://s3.sayzlim.net/f/command-c.alfredworkflow.zip "Command-C Alfred Workflow")