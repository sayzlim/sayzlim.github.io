---
layout: post
title: "Sync Writer Pro Between iCloud and Dropbox"
date: 2014-01-05 16:00
description: Writer Pro hasn’t build Dropbox sync yet, but you still can sync your documents by using symbolic links.
tags:
- "Dropbox"
- "Writer Pro"
- "Review"
---

[Information Architects][2210-001], the developer of my favorite writing app [iA Writer][2210-002],  released [Writer Pro][2210-003], an advanced writing tool tailored for professional writers few weeks ago. They believe [Writer Pro’s workflow][2210-004] — by dividing the writing process into four stages: Note, Write, Edit, and Read — can help writers to focus on their writing instead of tinkering with all the unnecessary preferences.

<!--more-->

The carefully selected typography and focus mode is the reason I choose iA Writer as my writing app. Writer Pro brings it to next level by introducing Syntax Control™ that highlights the element of sentences like adverbs and adjectives, which as the result, writers gain the eagle-eye view of their own writing.

Writer Pro won’t turn you into a better writer. I believe the only way to become a better writer is to read and write every day.  Writer Pro is just another writing tool built for writers.

Writing is a selfish act. We’re perfecting our craft  — ironically it’ll never be perfect —  so we feel the sense of achievement with each writing completed. We’re also arrogant enough to believe that our writing process is the holy grail that outweigh other writers’ writing process. Ultimately, writers just write and there is no tools that can define what you want to say.

> For there isn’t any “right” way to do such personal work. There are all kinds of writers and all kinds of methods, and any method that helps you to say what you want to say is the right method for you. — William Zinsser

My writing process must be neat and clear. The four stages writing process is common among writers. The only difference is how the writer store their notes, and the tool they use for each stage. I use nVALT to jot down my though in the Note stage, iA Writer for Write and Edit stage, and [Marked][2210-005] for Read stage. Although the experience is not unified, the transition between stage is clear.

## The Problem with iCloud
If you’ve used Writer Pro, you might notice with each stage change, such as from Note to Edit, the associated note will be moved to their respective folder in iCloud. This idea of _flowing the notes_ organizes your notes in each stage will be useful if we can access them directly. But this is the problem with iCloud, there is no way to access notes stored in Writer Pro from other apps.

Alex Knight from Zero Distraction shares some tips to [store Writer Pro documents to Dropbox][2210-006]. The idea is to copy Write Pro’s iCloud folders to Dropbox whenever notes are added or modified. With this approach, you always have a backup of your Writer Pro in Dropbox.

But the idea doesn’t solve one problem: changes made in Dropbox won’t appear in iCloud. You get the wonder of iCloud but left without the vast ecosystem of Dropbox that works with many writing apps. For example, what if I need the scripting feature from Editorial to insert links? Editorial doesn’t have the access to Writer Pro’s iCloud folder.

But don’t worry. There is a way to salvage this situation.

## Hail to Symbolic Link
If you’re not familiar with symbolic link, it’s another way to create shortcut that mimic the folder location. By creating a symbolic link that points to Writer Pro’s iCloud folder in Dropbox is same as storing the whole iCloud documents inside Dropbox. Symbolic link is great because we can maintain the single instance of files and avoid duplicates.

What we’re going doing here is to create folder called _Notes_[^1] that contains the four main folders in Writer Pro iCloud documents. So the structure will be like this:

[ ![Writer Pro in Dropbox][img1] ](http://images.sayzlim.net/2014/01/writer_pro_dropbox.jpg "Writer Pro in Dropbox")

[img1]: http://images.sayzlim.net/2014/01/writer_pro_dropbox.jpg "Writer Pro in Dropbox"

The arrow indicates that the note, write, edit, and read folders are symbolic link pointing to their source. So where are those sources located?

To view the original iCloud folders, you need to show your hidden _Library_ folder. Fortunately, Mavericks has provided an option to show Library. All you need to do is to open your user folder (as indicated by the House icon) and press `Command-J` to show **View Options**. Turn on the Show Library Folder checkbox. You should see your Library folder now.

[ ![Finder Show Hidden Library][img2] ](http://images.sayzlim.net/2014/01/writer_pro_toggle_library.jpg "Finder Show Hidden Library")

[img2]: http://images.sayzlim.net/2014/01/writer_pro_toggle_library.jpg "Finder Show Hidden Library"

Make sure iCloud Documents & Data sync is on.[^2] Navigate into the **Mobile Documents** and find a folder containing `pro~writer`. Mine is `27N4MQEA55~pro~writer`. Yours might differ. So make sure the contents are correct by navigating further into the folder. Once you’ve ensure the files are correct, we’re going to create symbolic link for each folder in this path:

	~/Library/Mobile Documents/27N4MQEA55~pro~writer/Documents/

You create symbolic link by using the command under this format:

	ln -s [source path] [target path]

Here is the example of commands that create symbolic link which are saved in Desktop. **Replace `27N4MQEA55` with your unique ID**, otherwise the symbolic links won’t be able to locate the folder if they’re different on your Mac. Run the command line by line.

	ln -s ~/Library/Mobile\ Documents/27N4MQEA55\~pro\~writer/Documents/Note ~/Desktop/Note
	ln -s ~/Library/Mobile\ Documents/27N4MQEA55\~pro\~writer/Documents/Write ~/Desktop/Write
	ln -s ~/Library/Mobile\ Documents/27N4MQEA55\~pro\~writer/Documents/Edit ~/Desktop/Edit
	ln -s ~/Library/Mobile\ Documents/27N4MQEA55\~pro\~writer/Documents/Read ~/Desktop/Read

You should be able to see four new folders on your desktop. They’re the symbolic links I’ve mentioned earlier. Drag them into the Notes folder we’ve created in Dropbox. Now you can access all your notes stored in iCloud through Dropbox.

## Different Tools for Different Stages
The apparent benefit of this sync method is the changes made in Dropbox will be reflected in iCloud and vice versa. What can you do with it?

The first thing you can do is opening documents with third-party apps. If you’re like me, storing all kind of notes, including code snippets, in single location — it will be the Note folder in this case — opening with third party apps like Sublime Text is doable.

My other favorites of this sync method is different tool can be used for different stage. During the initial writing stage, which is Note, I can use Byword on iPad and nVALT on Mac to save everything in `~/Dropbox/Notes/Note`. It means I don’t have to open Writer Pro if I want to store my notes while working on Mac. The moment I open Byword, I enter Note stage. This saves me the time from switching between folders.

Once I’ve decided which note can be elaborated into a writing, I’ll change the stage in Writer Pro. This will move the file into Write stage. Because I prefer Editorial for writing, I can use `~/Dropbox/Notes/Write` as the source in Editorial. Whenever I open Editorial, I only see the the posts I’m working on.

The Edit and Read stage are similar. With [Magic Launch][2210-007], I set a rule to open all plain text files inside the Edit and Read folders with Marked.

As you can see from the writing process above, I have a clear structure of each note with Writer Pro as manager of this folder structures. Opening each app will take me into the each stage of writing process: Byword and nVALT for note taking, Editorial for writing, and Marked for previewing[^3].

Instead of waiting for Information Architects to include Dropbox sync in their next release, this setup has provided me with the great benefit of both Dropbox and iCloud.

[^1]: Notes is where all the plain text documents are stored. Inside this folder you can create separate folder for different type of documents. However, I prefer to store everything inside Note and search them with nVALT.
[^2]: If you’re not sure, open iCloud in System Preferences to see the status of Documents & Data checkbox.
[^3]: Configuring Writer Pro as the editor in Marked will open the post right into Edit stage. You can open them side by side for editing and previewing at the same time, skipping the Read stage altogether.

[2210-001]: http://ia.net/ "Information Architects | iA designs and builds digital products."
[2210-002]: https://itunes.apple.com/us/app/ia-writer/id439623248?mt=12&uo=4&at=11ld6n&ct=ia+writer "iA Writer"
[2210-003]: https://itunes.apple.com/us/app/writer-pro-note-write-edit/id775737590?mt=12&uo=4&at=11ld6n&ct=writer+pro "Writer Pro: Note, Write, Edit, Read"
[2210-004]: http://ia.net/blog/writer-pro/ "Writer Pro | Information Architects - iA"
[2210-005]: http://markedapp.com/ "Marked - smart tools for smart writers"
[2210-006]: https://zerodistraction.com/using-dropbox-with-writer-pro/ "Zero Distraction | Using Dropbox with Writer Pro"
[2210-007]: http://www.oneperiodic.com/products/magiclaunch/ "One Periodic - Magic Launch"
