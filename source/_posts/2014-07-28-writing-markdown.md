---
layout: post
title: "Writing in Markdown"
date: 2014-07-28 11:45
description: Markdown is useful, and it can be more useful. Learn the Markdown tools and services that can improve your writing efficiency drastically in this article.
tags:
- "Markdown"
- "TextExpander"
---

It’s not enough just being able to write in Markdown — the writing you do spans more than just leaving words on the blank cursor. It involves a lot of linking and formatting that take a lot of time. But with some right tools, you can increase your writing efficiency drastically while keeping the Markdown article clean.

<!-- more -->

Writing is spending minutes on drafts, hours on rewriting, and the rest of the days on editing.

These tips I’m going to mention in this article are the one that I practice in my writing to lessen the number of errors. I also automate most of the tasks so I can focus all my energy on the most time consuming task: editing.

## Use Markdown Supported Apps

[ ![Writer Pro: Edit Mode][215432] ](http://images.sayzlim.net/2014/07/markdown_writing.jpg "Writer Pro: Edit Mode")

[215432]: http://images.sayzlim.net/2014/07/markdown_writing.jpg "Writer Pro: Edit Mode"

Figure out your writing process and [seek for the right tool for your work](http://sayzlim.net/find-your-right-tool "Find Your Right Tool - Sayz Lim"). Compared to few years ago, we have much more choices when it comes to Markdown editors these days.

These are some of my favorites. They carry different design decision and feature set that can either make you love or hate them. None is better than the others, and you have to test them out to find the one that is right for you.

- [Writer Pro ($19.99)](https://itunes.apple.com/us/app/writer-pro-note-write-edit/id775737590?mt=12&at=11ld6n&ct=writer+pro+for+mac "Writer Pro: Note, Write, Edit, Read"): The idea of Writer Pro is breaking the writing into four stages: Note, Write, Edit, and Read, with Syntax Control highlights part of speech in the writing. This is the one I’m using because I like the choice of having no choices — you can’t change the typeface, colors, or the line-width. It also doesn’t support Dropbox, but there is a [workaround for this limitation](http://sayzlim.net/sync-writer-pro-icloud-dropbox "Sync Writer Pro Between iCloud and Dropbox - Sayz Lim").
- [Byword ($9.99)](https://itunes.apple.com/us/app/byword/id420212497?mt=12&uo&at=11ld6n&ct=byword "Byword"): The minimalistic Markdown editor with slightly more room for typography preferences. Byword is significantly better than Writer Pro when it comes to Markdown support. You can preview tables, drag and drop the image to create link, and with additional $4.99, you can publish to WordPress, Tumblr, Blogger, Scriptogram blogs and Evernote.
- [Ulysses III ($44.99)](https://itunes.apple.com/us/app/ulysses-iii/id623795237?mt=12&at=11ld6n&ct=ulysses+iii "Ulysses III"): Do you write a novel, a book, or a research paper? Long-form content like the one I mentioned lives in Ulysesses III. It’s probably the greatest text editor you can find on Mac.  Some of the features you might love from Ulysses III are the words/sentences goal, attachments for research, highly versatile organization sidebar, and the one click export to ePub or PDF — all done singlehandly in one beautiful app.

## Create Links While Writing

Anyone who writes online must use [SearchLink by Brett Terpstra](http://brettterpstra.com/projects/searchlink/ "SearchLink - BrettTerpstra.com"). This system service lets you convert any marked text into a fully working Marked links.

For example, if I want to create a link to Marked on Mac App Store, I simply enter `[Marked](!mas)` into text editor. Then I simply run the service to convert it into:

	[Marked](https://itunes.apple.com/us/app/marked-2/id890031187?mt=12&uo=4&at=11ld6n&at=11ld6n&ct=marked+2 "Marked 2")

You skip the tedious chores of copy paste each URL into text editor, instead, you mark the links as you write.

The default search services available are Google, iTunes, Mac App Store, Amazon, Wikipedia, and Last.fm. You can also configure your affiliate ID and append to the converted links automatically.

## Link Reference Images

If you’ve been reading this site for a while, you probably have noticed that all the images are linked. The main reason is that those images (or screenshots) are larger than the screen size of your iPhone. Linking these images lets you view the full image without having to tap and hold, or even right-clicking the images to open the original images.

Here is the Markdown I use to link those images:

	[ ![Image Title Text][Reference] ](http://someimage.com/image.jpg "Image Title Text")

	[Reference]: http://someimage.com/image.jpg "Image Title Text"

The `Reference` has to be different for each image. If I have more than one image in an article, I have to create more unique reference label, either by appending number to the reference, or  create a new reference. But that’s not important and I figure out that there might be a better way to handle this problem.

I ended up making this TextExpander snippet that pulls the current hours, minutes, and seconds and use it as the `Reference` .

Here’s the snippet I mentioned:

	[ ![%filltext:name=Image Title%][%H%M%S] ](%clipboard "%filltext:name=Image Title%")

	[%H%M%S]: %clipboard "%filltext:name=Image Title%"


Now whenever I want to enter the image into article, I just need to copy URL image, type `.mdimg` to expand the snippet, and fill in the image title.

## Wrapping Up
These tips are some of my favorites and hopefully they are useful for you who also writes in Markdown. Let me know what you think about this article by [sending me an email](http://sayzlim.net/contact "Contact - Sayz Lim"), or just mention me at [@sayzlim](https://twitter.com/sayzlim "Sayz Lim (sayzlim) on Twitter") on Twitter.