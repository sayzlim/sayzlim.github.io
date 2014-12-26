---
layout: post
title: "Evernote Search Alfred Workflow"
date: 2014-11-01 13:00
description: "Evernote Search is a simple Alfred workflow that searches for Evernote’s notes quickly by using Spotlight indexes."
tags:
- "Evernote"
- "Alfred"
---

I’ve been using this [Evernote workflow](http://support.alfredapp.com/evernote "Using Alfred with Evernote - Alfred v2 Support") to search notes in Alfred. It’s a powerful workflow with advanced features to create, manage, and search notes in Evernote, but it requires the Evernote app to be active all the time. The only feature I need from the workflow is the feature to search notes from Alfred even when Evernote is inactive.

<!-- more -->

I keep Evernote inactive most of the time. Most of the notes in my Evernote account are created automatically when I highlight a passage of text in Instapaper, save an article from Safari, or send an except from iBooks.  I don’t have to open Evernote unless I need to search for notes as references.

[ ![Evernote Notes in Spotlight][125134] ](http://images.sayzlim.net/2014/11/evernote_spotlight.jpg "Evernote Notes in Spotlight")

[125134]: http://images.sayzlim.net/2014/11/evernote_spotlight.jpg "Evernote Notes in Spotlight"

When I was trying Spotlight after OS X Yosemite release, I noticed that Evernote’s notes shows up in the search result despite that Evernote is inactive. Apparently, Evernote creates a list of documents which can be indexed by Spotlight known as Evernote Note Metadata. By default, Alfred doesn’t include Evernote Metadata as identified documents so you won’t be able to search it from Alfred. You can easily include it in the search result by dragging `com.evernote.Evernote` folder into Alfred Search Scope. You can find that folder in this path:

	~/Library/CoreData/com.evernote.Evernote/

Now you can use the `find` and `open` keywords to search for the Evernote notes with Alfred.

Make sure to [reindex the folder that contains Evernote’s notes](http://support.apple.com/kb/ht2409 "Spotlight: How to re-index folders or volumes - Apple"). You can do it by dragging the `com.evernoteEvernote` folder into Spotlight Privacy setting. This’ll remove the notes from Spotlight index. You can then remove the folder so Spotlight will start reindexing the notes. You’ll notice that the CPU usage will be around 35% in Activity Monitor. It’s normal. It’s a sign that `mdworker` is reindexing the notes.

There is one small problem with this setup though. If you open the notes from Alfred, the revealed notes will automatically activate the search panel and mess up the window. The solution for this problem is telling Alfred to open the notes with Finder which you can do by creating a custom search for Evernote’s notes.

[ ![Evernote Search][124837] ](http://images.sayzlim.net/2014/11/evernote_search.gif "Evernote Search")

[124837]: http://images.sayzlim.net/2014/11/evernote_search.gif "Evernote Search"

The preview above shows the custom workflow I’ve created to search for the notes stored in Evernote folder. It’s a straightforward workflow which you can build easily in Alfred without having write your own scripts. If you’re like me who only need a simple workflow to *quickly* search for notes in Evernote, you’re definitely going to love this workflow.

[**Download Evernote Search**](http://s3.sayzlim.net/f/evernote-search.alfredworkflow.zip "Evernote Search for Alfred")