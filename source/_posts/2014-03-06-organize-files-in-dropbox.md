---
layout: post
title: "How I Organize Files in Dropbox"
date: 2014-03-06 17:00
description: Dropbox is great for storing all your files, only if you organize them well.
tags:
- dropbox
- declutter
---

There is no perfect setup. Not mine, not yours. We organize folders our own ways.

Even Mac experts [organize their mountain of files differently](http://www.macworld.com/article/2079188/how-mac-experts-organize-their-files.html "How Mac experts organize their files - Macworld").  You pick a few lessons from them and come up with your own setup. My setup is suitable for people who want to synchronize their files across devices while maintaining the number of folders small.

<!--more-->

If you’re like me, carry on reading this post.

## Store almost everything in Dropbox
No, not the movies and music folder; I’m talking about the rest of the files that you want to access remotely. Don’t bother to sync music or movies; you can stream them online nowadays.

It takes less than 2 GB to store all my files.

I only use that much storage because I store all my reference files in Evernote. Free plan gives me unlimited storage with 60 MB monthly upload quota. Since I only save text files — mostly coming from [Evernote Web Clipper][9983-001] — the monthly quota never bothers me. I can even [keep the history of my online activities with Evernote][9983-002].

[9983-001]: http://evernote.com/webclipper/ "Evernote Web Clipper - Evernote"
[9983-002]: http://sayzlim.net/remember-everything "Remember Everything - Sayz Lim"

[ ![Dropbox Folder Organization][img1] ](http://images.sayzlim.net/2014/03/dropbox_folder_organization.jpg "Dropbox Folder Organization")

[img1]: http://images.sayzlim.net/2014/03/dropbox_folder_organization.jpg "Dropbox Folder Organization"

The documents I store in Dropbox fall under these categories:

- **Notes** – The location where I store notes in plain text.
- **Photos** – Any type of images goes here.
- **Projects** – All the active projects stay in this folder.
- **Safe** – My iCloud in Dropbox, I save apps specific files in this location, grouped by folders.

As you can see from the structures above, raw files like images and text files are not bound to any specific apps. I don’t need iPhoto to view these photos, I can use Writer Pro, Byword, or even Sublime Text to edit text files. Storing all documents in Dropbox means I can sync them to iPhone, iPad, and other Mac easily.

## Plan documents flow for each folder
Documents flow describes the characteristic of each folder:

- What purpose does the folder serve?
- What is the structure of each folder? What files does it store?
- How to retrieve the files stored in folder?

Dropbox creates 3 default folders: Apps, Photos, and Public. These folders are useful. **Apps** stores the configuration files for third party apps, **Photos** is where you store images, and **Public** is for files you want to share to public.

Here are the document flows I’ve assigned for each folder:

**Notes** – I need a quick way to jot down notes on Mac. It has to be an app that works universally and plays well with plain text — learn why you should [use plain text](http://bettermess.com/a-plain-text-primer/ "A Plain Text Primer - A Better Mess"). This means I can freely create a plain text file from everywhere, and also access it with any apps. By far,  [nvALT](http://brettterpstra.com/projects/nvalt/ "nvALT - BrettTerpstra.com") by Brett Terpstra is the best app for this task.

Set Notes as the source of your text files. Configure a keyboard shortcut to toggle nvALT everywhere. My preferred key combination is `Hyper+E`.[^1]

If you’re a Writer Pro user, you might want to bring all your notes into this folder. You can achieve this by [creating a symbolic link for each folder from iCloud to Dropbox](http://sayzlim.net/sync-writer-pro-icloud-dropbox "Sync Writer Pro Between iCloud and Dropbox - Sayz Lim").

**Photos** – I’ve [moved all my photos from iPhoto to Dropbox][8675-001]. Organizing photos without relying third party apps has many benefits. I can choose to open photos with Pixelmator, Sketch, or Photoshop. I can access those photos from Android devices. I can also share those photos easily with Dropbox Sharing. I hate naming files; it’s a time wasting task. That’s why [I use Hazel and Pixa to manage photos in Dropbox][8675-002].

[8675-001]: http://sayzlim.net/move-entire-iphoto-library-to-dropbox "Move Entire iPhoto Library to Dropbox - Sayz Lim"
[8675-002]: http://sayzlim.net/manage-dropbox-photos-pixa "How I Manage Photos with Dropbox and Pixa - Sayz Lim"

**Projects** – Store all the active projects on folder basis here. By sorting based on last opened date[^2], I can keep the most active projects on top of the list.

When you’re working on a project, you’ll accumulate abundance of reference files for that particular project. I prefer to keep them inside project folder instead of Evernote.

Mavericks incorporates tagging feature for us to organize files. But how do we decide when to use tags as opposed to folders?

Aleh Cherp answered this question in [his post on tags and folders usage](http://blog.macademic.org/2014/02/09/tags-or-folders-depends-on-the-file/ "Tags or folders? Depends on the file. - Academic workflows on a Mac"):

> For the last three years, I have consistently used folders for project files and tags for reference files in academic work.

[ ![Search References by Tags in Aflred][img3] ](http://images.sayzlim.net/2014/03/dropbox_alfred_tags.jpg "Search References by Tags in Aflred")

[img3]: http://images.sayzlim.net/2014/03/dropbox_alfred_tags.jpg "Search References by Tags in Aflred"

The point of tagging is to simplify the searching flow. With Alfred, you can use `tags` keyword to show specific tagged files in search result.

I usually store long term reference files like articles, tutorials, or e-books  in Evernote. If by some chance one of these files fall under these categories, I’ll save them into Evernote before archiving these projects.

[ ![Hazel Rules for Archive][img4] ](http://images.sayzlim.net/2014/03/dropbox_hazel_rules.jpg "Hazel Rules for Archive")

[img4]: http://images.sayzlim.net/2014/03/dropbox_hazel_rules.jpg "Hazel Rules for Archive"

Create a folder called Archives and move all completed projects into this location. I have a Hazel rules that monitor any incoming folders, prepend with these folders created date, and zip them to save spaces.

**Safe** – This folder is unique to the apps you’ve installed. Most of the times, when you’re not working on a particular projects, you’ll create some files that is unique to apps. Files like `psd` is for Photoshop, `pxm` for Pixelmator, and `sublime-project` for Sublime Text. I prefer to keep them all in one place, like how each app on iPad stores their documents in iCloud.

Unlike Documents in iCloud, you can open those files with any apps.

[ ![App Specifics Files][img2] ](http://images.sayzlim.net/2014/03/dropbox_safe_folder.jpg "App Specifics Files")

[img2]: http://images.sayzlim.net/2014/03/dropbox_safe_folder.jpg "App Specifics Files"

Name all the folders with the app name. Replace the the folder icon with the app icon. Here is the quick tutorial to replace Pixelmator folder icon:

1. Select Pixelmator app and press `Command+I` to get the information window.
2. Select the icon in the information window and press `Command+C` to copy the icon.
3. Select Pixelmator folder in Safe folder and press `Command+I` to get the information window.
4. Select the icon in information window and press `Command+V` to paste the Pixelmator icon.

Repeat for all the folders in Safe.

## In Conclusion
What I’ve learned from organizing those files is to lessen the amount of user participation in organizing files. Avoid renaming files you’ve downloaded, avoid tagging files that don’t need it, and avoid moving all the files manually. Automate what you can automate.

Find the setup that works for you, but remember to keep the structure simple. Few years later, we might use different tools to access the files we have today. When that time comes, you won’t have to get busy exporting all the notes and photos.

[^1]: Learn about `Hyper` key in [this post](http://brettterpstra.com/2012/12/08/a-useful-caps-lock-key/ "A useful Caps Lock key - BrettTerpstra.com") by Brett Terpstra.

[^2]: You can access the preferences by pressing `Command+J` in active window.
