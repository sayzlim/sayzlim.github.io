---
layout: post
title: "How to Keep Your Mac Desktop Clean"
date: 2014-05-08 21:50
description: A clean desktop is your daily clean canvas before you put down the most important thing you need to work on.
tags:
- "Declutter"
- "Mac"
---

My desk is a mess. I shouldn’t have shared this desk with my sister who only clean this desk once a week. You can’t tell people to clean their desk, but you can clean your virtual desktop.

<!-- more -->

Every day is a clean state. When I turn on my Mac, I only see the gorgeous wallpaper and the cute icons sitting on the Dock. I feel calmer when there is no leftover folders or documents on the desktop.

After all, it doesn’t take much effort to keep my desktop clean all the time.

## Treat your desktop like your working desk

Treat desktop as your actual working desk. Only place files you need **now** on desktop.

You don’t need useless items on your desk, so do your desktop. Hide those hard disk, external disks, and connected servers items. Head over Finder, open **Preferences** and turn off everything. Create a folder as an archives for all your completed projects. Archive them.[^1]

[ ![Mac Clean Desktop][image-1] ][2]

## Use download folder for all your temporary files

I put all the files I received from emails, downloaded from Internet, and saved from Messages  in system default downloads folder. I avoid creating additional folders because they’re hard to manage. 

But won’t storing everything in one location turn the folder upside down? No. There is a way to keep them organized.

[ ![Finder Sort by Date Added][image-2] ][3]

One way you can do it, without relying third party apps is to arrange all the documents by added date. In OS X Mavericks, you can do it by pressing `Command-J` and choose how you want to sort or arrange the files. Once a week, you can remove files that have been added for longer than a week manually.

Here is another tip to make your Finder looks clean. Hide the rest of columns and only leave **size** visible. The extra space can accommodate lengthy filename.

## Leverage Hazel to remove files periodically

We can’t leave out Hazel when we’re talking about organizing folders and documents.

You probably have read how I [use Hazel to organize photos saved to Dropbox][4]. This time we’re going to use it to delete the files from **Screenshots** and **Downloads** folder automatically.

I rely heavily on the [nested rules][5] to deal with different type of saved files. For example, if the saved files are `torrent`, I’ll delete it after two minutes. If the saved files are `zip`, I’ll delete it after two hours. Because each person has a different needs for different temporary files, it’s recommended for you to come up with your preferred time before files are deleted from both Screenshots and Downloads folder.

Here is an example of the rules I’ve configured for my Downloads folder. You can change the time for `Date added is not in the last (time)` with your defined time, and the `Extension` field with the filetype you want to define.

[ ![Hazel Rules to Remove Files][image-3] ][6]

## Change your screenshots folder

The default target folder for screenshots is desktop. It’s  acceptable if you occasionally take one or two screenshots, but for people who take more than five at once, the only way to keep the desktop clean is by changing the target folder.

The simplest way to change the target folder is by using [TinkerTool][7], a utility designed to access OS X hidden preferences easily. I save [all the taken screenshots in my Dropbox folder][8] along with the iPhone and iPad screenshots. By storing them all in one folder, especially backed up online, I can share and edit those screenshots from all devices.

## Keeping it clean

Keeping your desktop clean doesn’t make you more productive. I’ve seen people with messy desk staying productive all the time. But there is a benefit from maintaining a clean desktop. It helps you embrace the morning with a clean and fresh mind. This way, you can put the most important thing you want to work today on that precious desk of yours.

[^1]:	Read more on [how I organize my Dropbox folders](http://sayzlim.net/organize-files-in-dropbox "How I Organize Files in Dropbox - Sayz Lim"), especially how I archive completed projects.

[1]:	http://sayzlim.net/organize-files-in-dropbox "How I Organize Files in Dropbox - Sayz Lim"
[2]:	http://images.sayzlim.net/2014/05/finder_desktop.jpg "Mac Clean Desktop"
[3]:	http://images.sayzlim.net/2014/05/finder_view.jpg "Finder Sort by Date Added"
[4]:	http://sayzlim.net/move-entire-iphoto-library-to-dropbox/ "Move Entire iPhoto Library to Dropbox - Sayz Lim"
[5]:	http://sayzlim.net/nested-rules-osx "Why You Should Start Using OS X Nested Rules - Sayz Lim"
[6]:	http://images.sayzlim.net/2014/05/finder_hazel.jpg "Hazel Rules to Remove Files"
[7]:	http://www.bresink.com/osx/TinkerTool.html "TinkerTool: Description - Marcel Bresink Software-Systeme"
[8]:	http://sayzlim.net/manage-screenshots-hazel "Manage iPad and iPhone Screenshots with Hazel - Sayz Lim"

[image-1]:	http://images.sayzlim.net/2014/05/finder_desktop.jpg "Mac Clean Desktop"
[image-2]:	http://images.sayzlim.net/2014/05/finder_view.jpg "Finder Sort by Date Added"
[image-3]:	http://images.sayzlim.net/2014/05/finder_hazel.jpg "Hazel Rules to Remove Files"