---
layout: post
title: "Brief Overview of iOS 8 App Extensions"
date: 2014-09-20 17:00
description: "App extensions are available in different part of system area. Learn their differences and use them in your workflow"
tags:
- "iOS 8"
---

App extension is the greatest feature in iOS 8. It gives you the ability to edit photos with third-party photos editing apps within Photos app. It lets you edit the files in other storage providers without importing the files. It improves the Notification Center with widgets. It changes the way you use iPhone and iPad.

<!-- more -->

Extensions are available in different part of system area, such as sharing, Notification Center, or iOS keyboard. A system area that supports these extension is called an **extension point**. Being able to identify different type of extension point helps you figure out where to find and use extension. Here is list the overview of each extension point and its example.

## Today Extension

[ ![Today Extension][152156] ](http://images.sayzlim.net/2014/09/extension_today_widget.jpg "Today Extension")

[152156]: http://images.sayzlim.net/2014/09/extension_today_widget.jpg "Today Extension"

Today extension or **widget** shows the quick overview of information or provides a shortcut to perform quick task from Notification Center. Think of it as the combination [Launch Center Pro](https://itunes.apple.com/us/app/launch-center-pro-for-ipad/id799664902?mt=8&uo=4&at=11ld6n&ct=launch+center+pro+for+ipad "Launch Center Pro for iPad") and [Status Board](https://itunes.apple.com/us/app/status-board/id449955536?mt=8&uo=4&at=11ld6n&ct=status+board "Status Board").

Here is a few of my favorite widgets:

- **[Clear](https://itunes.apple.com/us/app/clear-tasks-reminders-to-do/id493136154?mt=8&uo=4&at=11ld6n&ct=clear+tasks+reminders+to+do "Clear – Tasks, Reminders & To-Do Lists")** displays the list of upcoming tasks adorned with gorgeous color spectrum as border. When you have zero upcoming tasks, it displays inspiring quote.
- **[Instapaper](https://itunes.apple.com/us/app/instapaper/id288545208?mt=8&uo=4&at=11ld6n&ct=instapaper "Instapaper")** shows your today saved articles. Tapping the list item will take you selected article.
- **[Day One](https://itunes.apple.com/us/app/day-one-journal-notes-diary/id421706526?mt=8&uo=4&at=11ld6n&ct=day+one+journal+notes+diary "Day One (Journal / Notes / Diary)")** draws the daily chart of the entries you’ve created for the past 50 days and two random photos from the entries. This is a beautiful way to view your journaling activity and history.

Most of the apps I use only support one type of widget layout. I believe there will be a widget option within the app where we can choose what to display in widget. For example, Instapaper might add an option to display random highlight instead of today saved articles. You should check out this [productivity widget bundle](https://itunes.apple.com/us/app-bundle/productivity-widget-bundle/id920110246?mt=8&at=11ld6n&ct=productivity+widget+bundle "Productivity Widget Bundle by Avanio on the App Store on ... - Apple") where you can modify the clipboard in Notification Center.

## Share Extension

[ ![Share Extension][152206] ](http://images.sayzlim.net/2014/09/extension_share.jpg "Share Extension")

[152206]: http://images.sayzlim.net/2014/09/extension_share.jpg "Share Extension"

Share extension is not exactly a new feature. In iOS 7, we can pass selected files to other apps with the classic `Open in…` button. The common use case was importing `epub` files in Dropbox to iBooks. The actual sharing extension experience happens when you share images to Twitter and Facebook. You’ll see a dialog to enter description and choose the location of albums in Facebook.

Share extension in iOS 8 gives developers the same privilege as Twitter and Facebook in iOS 7. You may now select some photos in Photos app and share it to Day One, Evernote, or Pinterest. Not only files, you can also share other type of information that the extension supports, such as URL in Safari. 

Each share extension can use the default share sheet, or further customize them into to match the style of the app. For example, Evernote changes the color of share sheet, while Tumblr takes a different approach to make the dialog full screen.

## Action Extension

[ ![Action Extension][152213] ](http://images.sayzlim.net/2014/09/extension_action_1password_dialog.jpg "Action Extension")

[152213]: http://images.sayzlim.net/2014/09/extension_action_1password_dialog.jpg "Action Extension"

The idea of iOS design is each app can’t have direct access information from another app. This approach results in a secure mobile operating system that we use every day.

But what if you want to enter the password from 1Password in Safari? Since there is no way for Safari and 1Password to exchange information with each other, we must copy the password from 1Password and paste it into Safari.

While sharing extension lets us send files to other apps, action extension lets us view, use, and manipulate the content from hosted app in contained app. The design of iOS that forbids app to exchange information directly with each other still persists to maintain the same level of security.

1Password action extension lets you enter password in Safari without switching apps. You can turn it on by tapping the `More` button and arrange the position of actions.[^1] Tapping the 1Password action will prompt for your 1Password master password, and as you unlock the vault, there’ll be a relevant result in a dialog. Tap the item and the password is automatically filled.

Like I’ve mentioned earlier, action extension can manipulate the content of the hosted app. You can find this example in Writer Pro where you can copy Markdown files as HTML or rich formatted text.

## Photo Editing Extension

[ ![Photo Editing Extension][152221] ](http://images.sayzlim.net/2014/09/extension_photo_editing.jpg "Photo Editing Extension")

[152221]: http://images.sayzlim.net/2014/09/extension_photo_editing.jpg "Photo Editing Extension"

This type of extension is available only in Photos app. Any third party apps with this extension allows you to use them in Photos app for editing. You can access the list of supported apps from `Edit` button in navigation bar and tap the `More` icon (symbolized by three round small circles). Photos will keep the original and edited images so you can revert to the original image as needed. This saves you the trouble from having to import photos to other apps whenever you edit photos.

## Document Provider Extension

[ ![Document Provider Extension in Dropbox][152234] ](http://images.sayzlim.net/2014/09/extension_document_provider.jpg "Document Provider Extension in Dropbox")

[152234]: http://images.sayzlim.net/2014/09/extension_document_provider.jpg "Document Provider Extension in Dropbox"

We store files in different storage providers. Some of them live in Dropbox, some of them live in Google Drive, and some of them live in iCloud Drive. Until now we can’t easily add files to our choice of storage. Even Dropbox only allow the use of Camera Uploads, but not upload other type of files directly.

Not to confuse document provider extension with share extension where you can only send and upload selected files, document provider extension provides more options to export, import, open, and move files between document storage providers.

The basic functionality each document provider extension supports is export and import. It lets the extension to export or import the files to destination path. To see this extension in action, you may update to the latest Dropbox and turn it on from the `More` button in **Files**.

A much more complex functionality is the open and move feature. If you’re like me, you probably store all your documents in Dropbox. In iOS 7 you won’t be able to edit the files stored in Dropbox directly. Document provider gives you an option to browse through the folders in Dropbox and edit selected files. Any changes you’ve made to the files will be uploaded back to the original location.

The beauty of this extension is iOS never have to keep the local copy of the files since it’ll only download it when you request the files.

## Custom Keyboard Extension

[ ![SwiftKey Custom Keyboard Extension][152247] ](http://images.sayzlim.net/2014/09/extension_custom_keyboard.jpg "SwiftKey Custom Keyboard Extension")

[152247]: http://images.sayzlim.net/2014/09/extension_custom_keyboard.jpg "SwiftKey Custom Keyboard Extension"

Starting in iOS 8 you can replace the built-in keyboard with the one made by third-party keyboards.[^2] You can add the custom keyboard in `Settings » General » Keyboards` under the list of third-party keyboards.

[^1]: iOS 8 has a bug that return the position to default every time you relaunch the app.
[^2]: Check out MacStories for more [list of recommended keyboards](http://www.macstories.net/roundups/my-favorite-ios-8-keyboards-so-far/ "My Favorite iOS 8 Keyboards So Far – MacStories").