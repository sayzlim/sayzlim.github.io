---
layout: post
title: "Terminology for Mac"
date: 2014-08-29 23:30
description: "Bring Terminology — a dictionary, a thesaurus, and a reference tool — to your Mac with the combination of Fluid and Alfred."
tags:
- "Writing"
- "Terminology"
- "Fluid"
- "Alfred"
---

[Terminology](http://agiletortoise.com/terminology "Terminology - Agile Tortoise") is an indispensable tool for writers. It’s a dictionary, a thesaurus, a reference tool. Unfortunately, Terminology is only available for iPhone and iPad. There is no Mac version yet, but we can build one by ourselves.

<!-- more -->

Some people can write with iPhone or iPad, but I’m the type who can only write with Mac. The sensation of seeing the words flowing on the screen as you press the keyboard keys is addicting — so does the pain of staring at the blank screen for hours. 

The hardest part as writer — beside coming up with a simple and clear sentence — is finding suitable words to convey my point. Does this word makes sense to the readers? Is there any suitable words out there for this sentence? Am I using this word correctly?

Terminology helps writers exploring the vast selection of words in dictionary. With the built-in Dictionary, common word such as *restaurant* is just a place where people pay to sit and eat meals that are cooked and served on the premises. But when you put *restaurant* in Terminology, you’ll discover *bistro* that serves wine, *brewpub* that serves beer,  and an inexpensive restaurant known as *hash house*. That’s Terminology’s main feature: discover new words.

The good news is we can use the official Terminology companion online service [term.ly](http://term.ly/ "Dictionary, Thesaurus - term.ly") to define and explore words. Registered term.ly users can also save their favorite words and keep track of their search history.[^1] The only drawback with using term.ly is I have to open it with a browser.

## Defiining Words with Alfred
Alfred is a wonderful tool to define words. I can just type `define <word>` (or `d <word>` for faster search) to view the definition with built-in Dictionary. If Terminology is officially made for Mac, I would like to have the same feature for searching word definition. So I turn term.ly into a Mac app with Fluid and create an Alfred workflow that defines the word with Terminology.

[ ![Terminology for Mac Alfred Workflow][225017] ](http://images.sayzlim.net/2014/08/terminology_alfred.gif "Terminology for Mac Alfred Workflow")

[225017]: http://images.sayzlim.net/2014/08/terminology_alfred.gif "Terminology for Mac Alfred Workflow"

[Download Fluid](http://fluidapp.com/ "Fluid - Turn Your Favorite Web Apps into Real Mac Apps.") which we will use to turn term.ly into a Mac app. You only need the free version for this tutorial, but the paid version lets you create a separate cookies storage. 

The next thing you have to do is searching for a sweet icon for Terminology. I recommend the [Transmission icon replacement](http://iconaholic.com/2011/downloads.html#transmission "Iconaholic.com 2011 - Downloads") by Jono Hunt who has designed a lot of beautiful app icons (including my favorite Keyboard Maestro). 

Preparation is complete. Let’s create our own Terminology for Mac.

Run Fluid. Enter the URL and the name of the application like this screenshot.

[ ![Creating Terminology with Fluid][231130] ](http://images.sayzlim.net/2014/08/terminology_fluid.jpg "Creating Terminology with Fluid")

[231130]: http://images.sayzlim.net/2014/08/terminology_fluid.jpg "Creating Terminology with Fluid"

Select `Create` and wait for Fluid to complete creating your Mac app.

Now we have to configure few settings to make Terminology looks better.

**1. The first thing is to hide the status bar**. You can choose `View » Hide Status Bar` from the menu or just press `Command-Slash (/)`.

**2. Choose iOS Safari 7 as the browser user agent**. You can find it under  `Terminology » User Agent » iOS Safari 7 — iPhone` from menu bar. This will pick the mobile version of term.ly every time you open Terminology.

[ ![Terminology User Agent Setting][225056] ](http://images.sayzlim.net/2014/08/terminology_useragent.jpg "Terminology User Agent Setting")

[225056]: http://images.sayzlim.net/2014/08/terminology_useragent.jpg "Terminology User Agent Setting"

**3.  Hide the footer** by applying this CSS in user stylesheet. You can find preferences window under `Window » Userstyles`.

[ ![Terminology Userstyles Setting][225109] ](http://images.sayzlim.net/2014/08/terminology_userstyles.jpg "Terminology Userstyles Setting")

[225109]: http://images.sayzlim.net/2014/08/terminology_userstyles.jpg "Terminology Userstyles Setting"

**4. Hide the last browser window** to create a smoother experience. This’ll save you a few seconds spent on recreating a new window whenever you define a new word. You can find the settings below.

[ ![Terminology Behavior Preferences][225128] ](http://images.sayzlim.net/2014/08/terminology_preferences.jpg "Terminology Behavior Preferences")

[225128]: http://images.sayzlim.net/2014/08/terminology_preferences.jpg "Terminology Behavior Preferences"

You should be able to use Terminology like a normal Mac app. But it still doesn’t have the same feature I explained earlier. If you’ve followed everything I described in this guide, you should be able to use the workflow I build specifically to define words in Terminology for Mac.

[**Download Term.ly Alfred Workflow**](http://s3.sayzlim.net/f/term.ly.alfredworkflow.zip "Term.ly Alfred Worfklow")

This workflow passes the accepted keyword as query and open the URL in Terminology. The `Run NSAppleScript`action makes sure Terminology is always active — else the workflow will open the URL in default browser.

[^1]: Terminology for iPhone and iPad uses iCloud to store you favorite words and search history, and not synced with your term.ly account.