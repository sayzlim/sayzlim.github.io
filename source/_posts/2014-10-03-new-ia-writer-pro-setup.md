---
layout: post
title: "New iA Writer Pro Setup"
date: 2014-10-03 11:30
description: "Learn how I configure my writing setup to fit the updated iA Writer Pro that brings a new workflow state handling, file extension icon, and Dropbox sync support."
tags:
- "Writer Pro"
- "Review"
---

[Information Architects](http://ia.net/ "Information Architects - iA designs and builds digital products.") has released an updated version of iA Writer Pro which adds Dropbox sync and develops a new way to handle workflow state — instead of placing documents inside different folders, now it changes the file extension. If you’ve followed [my setup to sync Writer Pro to Dropbox](http://sayzlim.net/sync-writer-pro-icloud-dropbox "Sync Writer Pro Between iCloud and Dropbox - Sayz Lim"), this guide will show you how I adapt the update to my writing workflow.

<!-- more -->

[ ![New iA Writer Pro Workflow State Icon][003332] ](http://images.sayzlim.net/2014/10/writer_pro_workflow.jpg "New iA Writer Pro Workflow State Icon")

[003332]: http://images.sayzlim.net/2014/10/writer_pro_workflow.jpg "New iA Writer Pro Workflow State Icon"

The moment I update iA Writer Pro, it‘ll move documents stored in iCloud out of its folder and change the file extension according to its workflow state as following: `note`, `md`, `edit`, and `read`. Each workflow state has a matching new document icon that follows the cursor color — this approach adds character to iA Writer Pro, I can also use it to tell the documents’ workflow state from a quick glance.

Another major feature in iA Writer Pro for iOS is Dropbox sync support. I avoid storing documents in iCloud because I’ve lost an entire Ember library due to the sync problem. I turn off iCloud for iA Writer Pro and move the documents to Dropbox. You can find the documents in iCloud in the following path:

	~/Library/Mobile Documents/27N4MQEA55~pro~writer/Documents/

Since iA Writer Pro distinguishes the documents’ workflow state by file extension, I can move the documents into a folder at `~/Dropbox/Notes` where I store plain text documents. Finish the setup by sorting the documents by kind to group same workflow state together.

## Show Note State Documents in nVALT

[nVALT](http://brettterpstra.com/projects/nvalt/ "nvALT - BrettTerpstra.com"), also known as my idea bank, is my favorite app to quickly jot down ideas — it’s the most powerful tool to work with plain text documents. When the note carries enough potential and information as an article , I change the document’s workflow state from Note to Write to indicate that I’ll be working on a new piece of writing soon.

I used to separate the notes in Note state from the rest of states by telling nVALT to only read notes from `~/Dropbox/Notes/Note/` folder, however, I’m unable to do the same since documents in every state are inside the same folder. Therefore I need to configure nVALT so it only reads the documents with `note` file extension.

[ ![nVALT Extension Setting][003357] ](http://images.sayzlim.net/2014/10/writer_pro_new_extension.jpg "nVALT Extension Setting")

[003357]: http://images.sayzlim.net/2014/10/writer_pro_new_extension.jpg "nVALT Extension Setting"

Fortunately, nVALT has a setting that lets me choose which file extension are included in the storage. If you’re on Mavericks, head over to preferences and find the hidden setting under `Notes » Storage » Extension`. You can click the hidden `plus (+)` beside the `minus (−)` to add more file types into the list.  Remove the rest of file types and add `note` as the only readable file type in nVALT.

## Update Writer Pro Alfred Workflow

[One of the tips for Alfred Powerpack users](http://sayzlim.net/tips-alfred-powerpack-users "Tips for New Alfred Powerpack Users - Sayz Lim") is to combine related actions into one workflow. Following the tips, I create a Writer Pro workflow containing four **File Filters** that search for documents in different state by its search scope. Since the new iA Writer Pro uses file type instead of folder, this means the existing workflow won’t be able to function properly. 

[ ![iA Writer Pro Alfred Workflow File Filters][003425] ](http://images.sayzlim.net/2014/10/writer_pro_filter.jpg "iA Writer Pro Alfred Workflow File Filters")

[003425]: http://images.sayzlim.net/2014/10/writer_pro_filter.jpg "iA Writer Pro Alfred Workflow File Filters"

I recreate the same workflow by changing the search scope to `~/Notes/` folder and include file type in each file filter which you can do by dropping related files into the file filter setup.

## Conclusion

The river flow concept plays a major part in my writing process by letting me shift the workflow state from one to another easily. While iA Writer Pro carries a high price tag, it’s one of the simple writing app you can find with strong character. The latest update is amazing as it fulfills the way I store notes. iA Writer Pro is definitely not for everyone, but if you like the philosophy that Information Architects is marketing, you’ll enjoy using iA Writer Pro as your writing tool.

[**iA Writer Pro for Mac ($19.99)**](https://itunes.apple.com/us/app/ia-writer-pro/id775737590?mt=12&uo=4&at=11ld6n&ct=ia+writer+pro "iA Writer Pro") / [**iA Writer Pro for iOS ($9.99)**](https://itunes.apple.com/us/app/writer-pro-note-write-edit/id775737172?mt=8&at=11ld6n&ct=writer+pro+note+write+edit "iA Writer Pro for iOS")