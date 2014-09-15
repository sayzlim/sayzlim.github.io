---
layout: post
title: "Replicate Ember Auto-Import Feature in Pixa"
date: 2014-09-10 22:30
description: "Ember can automatically tag the imported images by just moving files into selected folders. You can do more than just tagging with Pixa and Hazel."
tags:
- "Pixa"
- "Hazel"
---

Ember has a feature called auto-import that lets you import images into library by just moving them into folders. This feature is especially useful because you can also tag the imported images automatically. While Pixa doesn’t have this feature, its open nature allows us to create a similar system with live folders and Hazel.

<!-- more -->

 [ ![Pixa Tags Preview][183245] ](http://images.sayzlim.net/2014/09/hazel_pixa_preview.jpg "Pixa Tags Preview")

[183245]: http://images.sayzlim.net/2014/09/hazel_pixa_preview.jpg "Pixa Tags Preview"

Pixa uses a well-known standard meta data system called [OpenMeta](http://code.google.com/p/openmeta/ "openmeta - OpenMeta is an OS X standard for adding tags, ratings ...") for tagging, unlike Ember where tags are stored in their own file containers. This openness means you can switch to other third party apps that support OpenMeta, while maintaing the same tags structure for all the tagged images.

What you’re going to do in this guide is to enable OpenMeta in Hazel and create a system that lets you tag images automatically by just moving them into Hazel associated folders. 

## How to Enable OpenMeta in Hazel
**1. [Download OpenMeta command line tool](http://code.google.com/p/openmeta/downloads/list "Downloads - openmeta - OpenMeta is an OS X ... - Google Code")** from the official download page.

**2. Extract a file called `openmeta`.** It’s the command-line tool that Hazel will use as actions. Let’s move it to `/usr/local/bin/` where custom command-line tools are saved. If you have trouble locating that folder, enter `open /usr/local/bin/` in Terminal.

**3. Enable OpenMeta in Hazel** by referring it to the installed command line tool. Enter the following command in Terminal:
	
	defaults write com.noodlesoft.Hazel OMToolPath /usr/local/bin/openmeta

Restart Hazel to make sure the new conditions and actions are available.

## Clean Up Existing OpenMeta Tags

By default, Pixa automatically tag imported images by sizes and colors. If you prefer to handle the tagging by yourself, it’s recommended to disable auto-tag under `Preferences » Tagging`.

[ ![Tags by Case Apps][204609] ](http://images.sayzlim.net/2014/09/tags_preview.jpg "Tags by Case Apps")

[204609]: http://images.sayzlim.net/2014/09/tags_preview.jpg "Tags by Case Apps"

Since OpenMeta is a common standard for tagging, it’s likely that most of the files in your computer are populated by existing tags. There are [ton of apps that support viewing OpenMeta tags](https://code.google.com/p/openmeta/wiki/OpenMetaApplications "OpenMetaApplications - openmeta - A list of ... - Google Code") such as [Path Finder](http://www.cocoatech.com/ "Path Finder 7 by Cocoatech") and [TagIt](http://www.ironicsoftware.com/tagit/ "Tagit : Ironic Software"). But for this one time cleaning, you can use [Tags](http://www.caseapps.com/tags/ "Tags - Simply Organized - Case Apps") that offers 15 days free trial which you can use to delete all existing tags.

## Organize Inspiration Gallery

In the [guide to manage photos](http://sayzlim.net/digitalshelf/photos "Manage Your Photos - Sayz Lim"), I recommend everyone to group images with similar purpose in one library. For instance, here’s the list of my folders setup:

```
~/Dropbox/Photos/
  ↳ Downloads/ # Collective images for the images I’ve downloaded.
  ↳ Gallery/ # Mostly the personal photos I’ve taken or copied from friends.
  ↳ Stocks/ # The no copyright reserved stock images I’ve collected.
  ↳ Screenshots/ # List of screenshots I’ve taken on iPhone, iPad, or Mac.
  ↳ Wallpapers/ # Collection of my favorite wallpapers.
```

I don’t tag images in the library above because they’re already organized at folder level. I use Ember to manage all my inspiration and references[^2], but if I decide to switch to Pixa, I’ll just create a new folder called `Inspiration` and put it as live folder along with others in Pixa’s sidebar.

The `Inspiration` folder contains a lot of category and kind of images. Perhaps you want to organize by sources, perhaps you want to organize by file types, or perhaps you want to organize by the device models. Creating more folders won’t solve the organization problem. This is where Hazel and tagging can take care of organization automatically.

[ ![Pixa with Hazel Folders][183329] ](http://images.sayzlim.net/2014/09/hazel_pixa_folders.jpg "Pixa with Hazel Folders")

[183329]: http://images.sayzlim.net/2014/09/hazel_pixa_folders.jpg "Pixa with Hazel Folders"

To make sure I can find Hazel associated folders with ease, I create a new folder called `Hazel` where I keep all temporary folders purposely to process incoming files together.[^1] Keep a consistent folder name pattern — in this case I use `Pixa – [tag name]` pattern.

[ ![Pixa with Hazel Folder Rules][183429] ](http://images.sayzlim.net/2014/09/hazel_pixa_tag.jpg "Pixa with Hazel Folder Rules")

[183429]: http://images.sayzlim.net/2014/09/hazel_pixa_tag.jpg "Pixa with Hazel Folder Rules"

Now you need to add these folders into Hazel and configure the following rules to tag incoming images. It checks whether the incoming files are images, then tag and move them to `Inspiration` folder.

[ ![Pixa with Hazel Conditions][183456] ](http://images.sayzlim.net/2014/09/hazel_pixa_tag_rules.jpg "Pixa with Hazel Conditions")

[183456]: http://images.sayzlim.net/2014/09/hazel_pixa_tag_rules.jpg "Pixa with Hazel Conditions"

Go ahead and drop one of the image into `Pixa – iPhone` folder. You should be able to view it in Pixa under tags view — access it by using `Command + 2`.

> %sidenote%
> **Save image faster with Dropzone:** You can put the folders associated with Hazel rules into Dropzone grid for quick access. All you need to do is to drag the images into the folder, and Hazel will take care of the rest. [Buy Dropzone 3 ($4.99)](https://itunes.apple.com/us/app/dropzone-3/id695406827?mt=12&at=11ld6n&ct=dropzone+3 "Mac App Store –Dropzone 3")

## Automatic Tagging in Inspiration Folder

All the images eventually end up in `Inspiration` folder. You can add `Inspiration` folder in Hazel and create more rules to further organize your images based on other types of meta data. This following rule will tag images based on their file types. You can create more rules to organize by `PNG`, `SVG`, or `AI`.

Remember that you’ve disabled the auto-tag in Pixa? You can create your own rules to determine which dimension should be tagged as small, medium, or large.

[ ![Hazel Tag by File Types][214427] ](http://images.sayzlim.net/2014/09/hazel_pixa_tag_filetype.jpg "Hazel Tag by File Types")

[214427]: http://images.sayzlim.net/2014/09/hazel_pixa_tag_filetype.jpg "Hazel Tag by File Types"

I recommend to create another rule called `Rename Images` to maintain a consistent filename pattern. The one I use is `YYYY-MM-DD at hh.mm.ss [height × width]`. Feel free to come up with a pattern that you find comfortable.

[ ![Hazel Renaming Rules for Inspiration Folder][183529] ](http://images.sayzlim.net/2014/09/hazel_pixa_inspiration.jpg "Hazel Renaming Rules for Inspiration Folder")

[183529]: http://images.sayzlim.net/2014/09/hazel_pixa_inspiration.jpg "Hazel Renaming Rules for Inspiration Folder"

### Grouping Tags

Because one image can carry more than one tag, the number of tags will increase and clutter the sidebar. One way to organize tags is to group similar kind of tags together. Say you decide to tag images by file types, you can group `JPG`, `PNG`, and `SVG` into a folder called `Filetypes`.

[ ![Pixa Group Tags][214449] ](http://images.sayzlim.net/2014/09/hazel_pixa_group_tags.jpg "Pixa Group Tags")

[214449]: http://images.sayzlim.net/2014/09/hazel_pixa_group_tags.jpg "Pixa Group Tags"


## Wrapping Up

The greatest benefit with this setup is tags remains accesible in the apps that support OpenMeta. You can switch to other apps without worries, or use it along with other third-party apps to manage tags. The result is an organized library with the power of tags to scale your collection.


[Let me know](http://sayzlim.net/contact "Contact - Sayz Lim") what you think about this guide, and please share it if you like it.

[^1]: If you’re curious how I come up with this structure, you should [read the way I organize files in Dropbox](http://sayzlim.net/organize-files-in-dropbox "How I Organize Files in Dropbox - Sayz Lim").

[^2]: The setup to manage images between Pixa and Ember is similar. The only difference is nature of their storage where Pixa is open, while the Ember is dependant to the apps.