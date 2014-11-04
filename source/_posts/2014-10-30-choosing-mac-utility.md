---
layout: post
title: "Which Mac Utility Should You Use?"
date: 2014-10-30 17:00
description: "Think of the best Mac utilities available. Which one should you use? Which one is the best one for the tasks you want to complete?"
tags:
- "Mac"
---

You’re familiar with these utilities: Hazel, Alfred, TextExpander, LaunchBar, PopClip, and Dropzone. You know what you can do with each utility, but when you want to automate a task, paralyzed by the choices, you’re unable to choose which utility should do the job.

<!-- more -->

Most of the utilities can carry out the same task. You can expand text with TextExpander or Keyboard Maestro. You can convert images into different format with Automator; you can also do the same with Hazel. Which utility should you use?

**It depends on the triggers**. You can have multiple utilities, but there can be just a few triggers. Do you want to run the task when the files arrive in a folder? Do you want to run the task when you open Terminal? Do you want to run the task when you type a specific word? You must know the triggers before building the tool.

There is a lot of triggers, but I’m going to talk about the triggers people often use when building a tool.

## Query Based

Query based is the most flexible trigger. Search engine is a perfect example of query based trigger. If I want to convert USD into JPY, I simply type `20 USD to JPY` in search engine.

[ ![Currency Conversion in Spotlight][152433] ](http://images.sayzlim.net/2014/10/utility_spotlight.jpg "Currency Conversion in Spotlight")

[152433]: http://images.sayzlim.net/2014/10/utility_spotlight.jpg "Currency Conversion in Spotlight"

[Alfred](http://www.alfredapp.com/ "Alfred App - Productivity App for Mac OS X"), [LaunchBar](http://www.obdev.at/launchbar/ "LaunchBar 6 - Objective Development"), and Spotlight belong to this category. You can define the word, convert currency, and search for information. Utilities like Alfred and LaunchBar even let you rename, move, and process the documents directly from search result. With Alfred workflows, you can also optimize and resize images.

[ ![List of Commands in Alfred][152452] ](http://images.sayzlim.net/2014/10/utility_alfred.jpg "List of Commands in Alfred")

[152452]: http://images.sayzlim.net/2014/10/utility_alfred.jpg "List of Commands in Alfred"

**Query based trigger is flexible because there is no shortcut to remember**. When I want to shut down computer, the natural query is `shutdown`. Since there is no such a thing as *shortcut conflicts*, you can use the same query for different type of tasks. Take a look at this [Alfred workflow I use to control system](http://sayzlim.net/os-x-toolbox-workflow-alfred-2 "OS X Toolbox Workflow for Alfred 2 - Sayz Lim"). Their keywords starts with `tb <command>`. Do I have to remember the command? No. Simply type `tb` and I can choose any commands from the list.

## Folders and Files Event Based

We often need to make decision based on the files and folders condition. Move the files containing specific word into Evernote. Rename the files in Download folder into this format. Delete the files in the Trash after three days. Won’t it be better if these tasks are taken care automatically?

There are two utilities recommended for this job: Automator and [Hazel](http://www.noodlesoft.com/hazel.php "Noodlesoft - Hazel").

Automator is a built-in OS X application by Apple for creating workflows to automate repetitive tasks. It comes in variety of forms: as a workflow, an application, or system services. But the one that fits into files and folders event based triggers is the **Folder Action**.

[ ![Automator Folder Actions][152534] ](http://images.sayzlim.net/2014/10/utility_automator.jpg "Automator Folder Actions")

[152534]: http://images.sayzlim.net/2014/10/utility_automator.jpg "Automator Folder Actions"

Folder Action monitors and processes the incoming files and folders with series of actions you add in the workflow. You can rename Finder items, convert the images into different format, or extract PDF text and save it into different document. Applications that support Automator will have their actions listed in the library. For example, if you own [Pixelmator](https://itunes.apple.com/us/app/pixelmator/id407963104?mt=12&uo=4&at=11ld6n&ct=pixelmator "Pixelmator"), you’ll be able to use **Watermark Images** action in your workflow. If you want to learn more about Automator, you can take a look how I use it to [create beautiful stack in Dock](http://sayzlim.net/clean-your-menu-bar-sweeten-download-stack "Clean Your Menu Bar, Sweeten Download Stack - Sayz Lim").

A far more powerful utility in this category is Hazel. With Hazel, you can setup rules to match the filename patterns, last modified date, or even the content of the incoming files. There are different type of default actions from renaming, moving, sorting the matching files into subfolder. You can also choose to run shell script, AppleScript, or Automator Workflow for each matching files. I use Hazel primarily to [sort photos](http://sayzlim.net/move-entire-iphoto-library-to-dropbox "Move Entire iPhoto Library to Dropbox - Sayz Lim"), [organize screenshots](http://sayzlim.net/manage-screenshots-hazel "Manage iPad and iPhone Screenshots with Hazel - Sayz Lim"), and [run Keyboard Maestro macro remotely](http://sayzlim.net/run-keyboard-maestro-macros-remotely "How to Run Keyboard Maestro Macros Remotely - Sayz Lim").

To conclude this section, whenever the task you want to run is definite and dependent to the files or folders, you should automate it with Folder Action or Hazel. This way you can save a lot of time from having to manually manage those files.

## Typed String Based

Typed string based trigger runs a specific action when you type a specific string. There are also two utilities you can use under this category: [TextExpander](http://smilesoftware.com/TextExpander/ "TextExpander: Mac Typing Shortcut Utility Saves You Time ... - Smile") and [Keyboard Maestro](http://www.keyboardmaestro.com/ "Keyboard Maestro 6.4.7: Work Faster with Macros for Mac OS X").

First let’s talk about TextExpander. Whenever you think “I want a text in this format whenever I type this”, TextExpander should be the utility you use. You can do the same with Keyboard Maestro, but I highly recommend TextExpander since its feature are made for specifically for, well, expanding text.

[ ![Fill-ins in TextExpander][152555] ](http://images.sayzlim.net/2014/10/utility_textexpander.gif "Fill-ins in TextExpander")

[152555]: http://images.sayzlim.net/2014/10/utility_textexpander.gif "Fill-ins in TextExpander"

One of the most used TextExpander features is fill-ins where you can insert single-line field, multi-line field, popup section, and optional section. The fill-ins let you create a template which you can populate with different type of values to speed up the typing process.

TextExpander supports rich text where you can customize the expanded text with different type of typeface combination, colors, and images. With some understanding of AppleScript or Shell script, you can manipulate the printed value in TextExpander.

[ ![Typed String Macro in Keyboard Maestro][152608] ](http://images.sayzlim.net/2014/10/utility_keyboardmaestro.gif "Typed String Macro in Keyboard Maestro")

[152608]: http://images.sayzlim.net/2014/10/utility_keyboardmaestro.gif "Typed String Macro in Keyboard Maestro"

As for Keyboard Maestro, the only time you choose it is whenever you want to do something aside expanding text. For example, you can create a macro that renames an active document whenever you type `.rename`. I’m not saying you shouldn’t use Keyboard Maestro to expand text, but TextExpander is a better choice when it comes to expanding text.

## Text Selection Based

Select some text, then choose what you want to do with it. The method you use to select the text will affect the type of utility you use.

If you spend most of your time on a mouse or stylus, you’re going to need a utility that can handle your selection without the need to reach over the keyboard. Think how you usually copy and paste text in iPhone and iPad? That would the utility you need for Mac.

[ ![Calculation in PopClip][152626] ](http://images.sayzlim.net/2014/10/utility_popclip.gif "Calculation in PopClip")

[152626]: http://images.sayzlim.net/2014/10/utility_popclip.gif "Calculation in PopClip"

[PopClip](https://itunes.apple.com/us/app/popclip/id445189367?mt=12&uo=4&at=11ld6n&ct=popclip "PopClip") is an utility that replicate iOS text selection behavior where list of executable commands are visible after you’ve selected the text with mouse cursor. This utility is particularly useful when you need to manipulate or pass the value of the selected text into a workflow. It has tons of extensions to supercharge your toolbox. You can select some text and search in Google, transform it into uppercase, or send it to Evernote.

Not everyone will enjoy using PopClip, I don’t use PopClip because I spend most of my time on keyboard. I usually select text with the combination of `Command`, `Shift`, and arrow keys. The type who likes to run a specific action with shortcuts can use Automator Service, Keyboard Maestro, or Alfred.

[ ![SearchLink by Brett Terpstra][152637] ](http://images.sayzlim.net/2014/10/utility_searchlink.gif "SearchLink by Brett Terpstra")

[152637]: http://images.sayzlim.net/2014/10/utility_searchlink.gif "SearchLink by Brett Terpstra"

Example of service tool I often use is [SearchLink](http://brettterpstra.com/projects/searchlink/ "SearchLink - BrettTerpstra.com") by Brett Terpstra where you can select some text and create link in Markdown format. I assign `Command-Shift-S` as the shortcut to the service so whenever I want to crate a link in Markdown, I just need to select the text and run the service.

There is no exact guidelines when you should use shortcut in which utility. Whenever I want to build the tool that handles selected myself, I choose Keyboard Maestro since it offers the easiest method to manipulate clipboard. But when I discover the tool that can carry out the tasks I want in Alfred such as [QuickCursor](http://www.alfredforum.com/topic/1857-edit-with%E2%80%A6-a-quickcursor-alternative-31-yosemite-support/ "Edit with… A QuickCursor alternative (3.1 - Yosemite support ..."), I won’t mind using it either.

## Files Selection Based

There are times where you need to execute workflow for bunch of selected files such as sending them to FTP server, or convert selected images into different format. Alfred users can batch process these files with the **File Selection** feature, however, the common way people run those files is selecting those files and drop them into Automator Folder actions or Automator Application. Another popular utility you can use for this type of triggers is [Dropzone](https://itunes.apple.com/us/app/dropzone-3/id695406827?mt=12&uo=4&at=11ld6n&ct=dropzone+3 "Dropzone 3").

[ ![Dropzone 3 Grid][152654] ](http://images.sayzlim.net/2014/10/utility_dropzone.jpg "Dropzone 3 Grid")

[152654]: http://images.sayzlim.net/2014/10/utility_dropzone.jpg "Dropzone 3 Grid"

Dropzone is similar to the Dock, except that it’s more organized than having all actions laid out in the Dock. It has the same feature as [DragonDrop](http://sayzlim.net/dragondrop-makes-dragging-and-dropping-easier "DragonDrop Makes Dragging and Dropping Easier - Sayz Lim") which acts as a temporary placeholder for the files you want to move. One of the example is where you can drop the files into **share to Dropbox public folder** that returns the public link into clipboard. Configure your FTP and Amazon S3 server so you can upload files from anytime.

## Miscellaneous Event Based

There is a lot of events you can use as trigger in Keyboard Maestro. From detecting which connected networks, computer name, and the screen condition. You can detect anything in Keyboard Maestro. Since Keyboard Maestro can do everything, it becomes the last consideration when building a tool — most of times I use Keyboard Maestro when the none of the mentioned utilities are suitable for the jobs.

For example, [this macro I build need to monitor the battery life every 40 minutes](http://sayzlim.net/most-distracting-menu-bar-status "The Most Distracting Menu Bar Status - Sayz Lim"). It’s an recursive events which can’t be built easily with other utilities — even if it can, it would take a complicated scripting to make it work. So I choose Keyboard Maestro to run this script that extracts the battery percentage, compare the result, and open the Battery Remaining Time when the charge falls below 40%.

Another reason to use Keyboard Maestro is when the actions you want to run needs to emulate the user actions as closely as possible. This can be clicking mouse event, moving files into different folder, or [enter password from keychain](http://sayzlim.net/secure-password-keyboard-maestro "Secure Your Password with Keyboard Maestro - Sayz Lim"). The Control Flow library is packaged with actions you can use to decide when to run a macro based on the environment variables which results in less scripting.

## Conclusion

If you have come this far, I hope you can understand the framework I use when deciding which utility should do the job. Try to find out what’s your preferred triggers so you can purchase the correct utility that’ll increase your productivity.