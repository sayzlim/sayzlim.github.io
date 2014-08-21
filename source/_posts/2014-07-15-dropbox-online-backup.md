---
layout: post
title: "Dropbox as Online Backup"
date: 2014-07-15 22:45
description: Build a versatile online backup plan with Dropbox on your Mac.
tags:
- "Dropbox"
- "Declutter"
---

I recently scanned my MacBook Air’s hard drive to find out the number of free space. Well, I have about 80 GB free space left, but the number is dwindling down every day, largely because of [my photos and videos setup](http://sayzlim.net/move-entire-iphoto-library-to-dropbox "Move Entire iPhoto Library to Dropbox - Sayz Lim"). I keep an off-site backup in my external drive for those files, photos, and videos, however, they’re still occupying the main hard drive. Then I realize that **Selective Sync** in Dropbox could be the solution for this problem.

<!-- more -->

## The Selective Sync Setup

Here is the trick: create a new folder called `Backup` and let it syncs to Dropbox. Open Dropbox Preferences and uncheck this folder from the list of allowed syncing folders. The folder will be removed from the machine, but it remains available in Dropbox.

[ ![Dropbox Selective Sync][img] ](http://images.sayzlim.net/2014/07/dropbox_selective_sync.jpg "Dropbox Selective Sync")

[img]: http://images.sayzlim.net/2014/07/dropbox_selective_sync.jpg "Dropbox Selective Sync"

**What is the purpose of this folder?** This folder is for the files you want to backup online (just in case you need to download those files), but not necessarily need to be synced across all the devices you own.

Here is an example of how I use this folder.

I always upload videos along with photos. While I want those videos accessible from all my devices, I prefer not to store them locally due to the file sizes. Looks like these videos belong to the `Backup` folder. I move the uploaded videos from `Camera Uploads` to `Backup/Videos/` through the Dropbox web interface; the files disappear from the hard drive, but they still exist in Dropbox.[^1]

The reason I create a folder called `Backup` is to save time. Do you prefer to selectively choose the folders you need to exclude every time you install Dropbox on a new machine, or just exclude a `Backup` folder which clearly indicates its purpose?

## Browsing Backup Files

Browsing those files is more complicated — you can’t open and edit them directly from Finder. Moreover, the edited files aren’t synced to the Dropbox immediately. Here are some methods as consideration:

- **[Dropbox Website](http://www.dropbox.com/referrals/NTM1NjQ5ODQ5 "Dropbox")**: The most straightforward way to move, delete, and download the backup files. You can even rename the files right from the browser. Pretty much you can do everything with their web interface, except to edit documents.
- **[Dropbox in Fluid](http://fluidapp.com/ "Fluid - Turn Your Favorite Web Apps into Real Mac Apps.")**: Use Fluid to create a standalone web application which you can place in Dock or menu bar. The paid version also lets you create a separate cookies storage that is useful for multiple Dropbox accounts owner.
- **[Dropbox for Alfred](http://www.packal.org/workflow/dropbox-client-alfred "Dropbox Client for Alfred - Packal")**: This is my method to browse those backup files. You can connect this workflow to multiple Dropbox accounts which you can browse directly from Alfred. The feature is limited: you can only delete and download the files, but being able to browse those files without opening different application or tab is definitely more rewarding to Alfred user.

## Takeaway Points

This setup is intended for people who want to remove the rarely used files from local machine while keeping these files accessible from everywhere. It’s not suitable for you to move the documents you edit often into the `Backup` folder as it may hinders instead of helping you getting things done.

[^1]: You might want to delete the Dropbox cache folder by [showing the hidden files in Finder](https://discussions.apple.com/thread/5483892 "How to show hidden files in Finder (OS X 10.9)? - Apple Support ..."). The cache folder is usually called `.dropbox.cache`.