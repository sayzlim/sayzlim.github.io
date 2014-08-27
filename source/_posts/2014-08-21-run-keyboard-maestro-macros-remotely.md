---
layout: post
title: "How to Run Keyboard Maestro Macros Remotely"
date: 2014-08-21 21:00
description: "You already have a complete list of useful macros. Won’t it be better if you can run the macro with your iPhone from everywhere?"
tags:
- "Keyboard Maestro"
- "Launch Center Pro"
- "Drafts"
---

Won’t it be nice to execute Keyboard Maestro macros remotely? Imagine what you can do with this feature. Forget to lock your Mac? Put it to sleep with single tap. Need to run command in Terminal? Send the command from your iPhone. If you can build the macros, you can run it from everywhere.

<!-- more -->

[ ![Launch Center Pro Maestro Group][202016] ](http://images.sayzlim.net/2014/08/remote_macro_launch_center.jpg "Launch Center Pro Maestro Group")

[202016]: http://images.sayzlim.net/2014/08/remote_macro_launch_center.jpg "Launch Center Pro Maestro Group"

This guide is inspired from the post written by David Sparks who shared his method to [put Mac to sleep with Drafts](http://macsparky.com/blog/2013/5/put-your-mac-to-sleep-with-ios-drafts "Put Your Mac to Sleep with iOS Drafts — MacSparky") and Rick Stawarz who [simplified the process with Launch Center Pro](http://rickstawarz.com/blog/2014/8/remotely-lock-a-macs-screen-with-launch-center-pro "Remotely lock a Mac&#39;s screen with Launch Center Pro — Rick Stawarz"). The basic concept for this setup is to have Hazel monitor incoming new files in specified folder which in return, if the new file matches the rule conditions, will run an AppleScript that puts Mac to Sleep Mode.

Just like Rick Stawarz, I’m also not satisfied with only putting Mac into sleep mode. Sometimes I only want to turn off the display which can’t be done in AppleScript. I also want to receive notification when an action is completed.

The most important feature I’m looking for is simplicity to create more automated actions on Mac. AppleScript is powerful, but it’s difficult to organize them.

Since Keyboard Maestro also supports AppleScript, I put together the list of apps and services you can use to run macros remotely and receive notification when a macro is triggered.

**Required services:**

- [IFTTT](https://ifttt.com/ "IFTTT: Put the internet to work for you.")
- [Dropbox](https://www.dropbox.com/referrals/NTM1NjQ5ODQ5 "Register Dropbox Account — Dropbox")

**Required OS X apps**:

- [Hazel](http://www.noodlesoft.com/hazel.php "Noodlesoft - Hazel")
- [Keyboard Maestro](http://www.keyboardmaestro.com/ "Keyboard Maestro 6.4.6: Work Faster with Macros for Mac OS X")

**Required iOS apps:**

- [Drafts for iPhone][6] or [Drafts for iPad][7]
- [IFTTT for iOS](https://itunes.apple.com/us/app/ifttt/id660944635?mt=8&uo=4&at=11ld6n&ct=ifttt "IFTTT for iOS")
- [Launch Center Pro for iPhone][8] or [Launch Center Pro for iPad][9]

[6]:	https://itunes.apple.com/us/app/drafts-quickly-capture-notes/id502385074?mt=8&at=11ld6n&ct=drafts "Drafts - Quickly Capture Notes"
[7]:	https://itunes.apple.com/us/app/drafts-for-ipad-quickly-capture/id542797283?mt=8&uo=4&at=11ld6n&ct=drafts+for+ipad "Drafts for iPad - Quickly Capture Notes"
[8]:	https://itunes.apple.com/us/app/launch-center-pro/id532016360?mt=8&at=11ld6n&ct=launch+center+pro "Launch Center Pro on the App Store on iTunes"
[9]:	https://itunes.apple.com/us/app/launch-center-pro-for-ipad/id799664902?mt=8&uo=4&at=11ld6n&ct=launch+center+pro+for+ipad "Launch Center Pro for iPad"

## Configuring Notification

We’re going to use email channel as the trigger that will send the notification to Launch Center Pro. I considered other channels as triggers, but it seems to me that email is the only channel that offers flexibility in customizing notification message.

**1. Setup your email and Launch Center Connect channels in IFTTT**. [Activate this recipe that sends notification to Launch Center Pro](https://ifttt.com/recipes/196756-send-email-subject-as-launch-center-pro-notification "Send Email Subject as Launch Center Pro Notification"). Configure that email account in OS X Mail. We’re going to send emails to your IFTTT email address automatically with Keyboard Maestro later.

**2. Create a new remote macro group.** I name mine `Maestro Control`. It’s recommended to put macros with different triggers into separate macro groups. This structure allows us to extend existing macros easily — in our case, it’ll be sending email to IFTTT email address actions.

[ ![Put Computer to Sleep Action][204858] ](http://images.sayzlim.net/2014/08/remote_macro_sleep_computer_action.jpg "Put Computer to Sleep Action")

[204858]: http://images.sayzlim.net/2014/08/remote_macro_sleep_computer_action.jpg "Put Computer to Sleep Action"

**3. Create the macro you want to run remotely**. The one we all can benefit from is the `Put Computer to Sleep` macro. Try to see if the macro is working by clicking the `Try` button under the actions sheets. We can continue to next step when the macro is working as expected.

[ ![Put Computer to Sleep Macro][202108] ](http://images.sayzlim.net/2014/08/remote_macro_sleep_computer.jpg "Put Computer to Sleep Macro")

[202108]: http://images.sayzlim.net/2014/08/remote_macro_sleep_computer.jpg "Put Computer to Sleep Macro"

**4. Create email actions** that send email with the message of your notification as subject to your private IFTTT email address. I always name the subject with this pattern `Keyboard Maestro — <Message>` to differentiate Keyboard Maestro notifications from others.

You’ll notice that I put a 20 seconds pause before quitting Mail. This is because we want to make sure the email is sent to IFTTT properly. Sometimes you must send the notification first if the macro will pause the system process — like this macro that puts Mac into sleep mode.

[ ![IFTTT for iPad Events Log][202135] ](http://images.sayzlim.net/2014/08/remote_macro_ifttt.jpg "IFTTT for iPad Events Log")

[202135]: http://images.sayzlim.net/2014/08/remote_macro_ifttt.jpg "IFTTT for iPad Events Log"

Now we have a perfect working macro that’ll send you notification when it runs. IFTTT for iPhone keeps the log of triggered recipes. You can use it to find out what actions you’ve triggered throughout the day.

## Configuring Remote Triggers

Remote triggers are the way you send message to your Mac. It doesn’t have to be Drafts and Launch Center Pro. You can even just create a plain text document in the folder of your choice to trigger macros remotely. Since we prefer a simplified workflow, we’re going to use Drafts for uploading file to Dropbox, and Launch Center Pro for single tap trigger.

**1. Create a new Dropbox action in Drafts**. Follow the setting below to create a new plain text document with this filename pattern `2014-08-20-17-13-12 KM Sleep Screen`.

```
Name    : Trigger KM Macro
Path    : /Apps/Drafts/
File    : [Timestamp][First Line][•Predefined•]
          [[time]][[title]]
Ext     : txt
Write   : [•Create•][Prepend][Append][Replace]
Template: [[body]]
```

**2. Configure action to delete the notes after success by default**. You can find the setting for `After Success` under `Manage Actions`. This will remove the sent notes from history and archive.

[spreadsheet]: https://docs.google.com/spreadsheets/d/1aJtuHPmbyc4TNl7hproNqVXGLG28LyP6ZRXRUKQnkXs/edit#gid=0 "x-callback-url generator"

**3. [Use this spreadsheet][spreadsheet] to generate x-callback-url** that triggers action in Drafts. The formula in x-callback-url column replaces the `white space` with `%20`. You can also encode other characters with [URL Decoder/Encoder](http://meyerweb.com/eric/tools/dencoder/ "URL Decoder/Encoder - Meyerweb").

[ ![Launch Center Pro Action Composer][202207] ](http://images.sayzlim.net/2014/08/remote_macro_action_composer.jpg "Launch Center Pro Action Composer")

[202207]: http://images.sayzlim.net/2014/08/remote_macro_action_composer.jpg "Launch Center Pro Action Composer"

**4. Create a new action in Launch Center Pro**. Avoid using Action Composer. Instead, paste the generated x-callback-url in the `URL` field. Name it with the macro name (without KM) like `Put Computer to Sleep` and choose a suitable icon for it. Try to run the action. It should open Drafts, create a new plain text document in Dropbox, and return to Launch Center Pro.

The Drafts action we created earlier, if you noticed, skip the first line of text, and only upload the body of content to Dropbox. This means we can write anything on the second line and have AppleScript set its to system clipboard. We’re going to find out how to do it in AppleScript later. For now, let‘s focus how to pass sentence to second line in Launch Center Pro.

You’ll find a `line break` encoded character `%0A` in the generated x-callback-url. Put `[clipboard]` after `%0A` like this following example:

	drafts://x-callback-url/create?text=KM%20Open%20URL%20in%20Safari%0A[clipboard]&action=Trigger%20KM%20Macro&x-success=launch://

[ ![Launch Center Pro Prompt][202224] ](http://images.sayzlim.net/2014/08/remote_macro_action_composer_prompt.jpg "Launch Center Pro Prompt")

[202224]: http://images.sayzlim.net/2014/08/remote_macro_action_composer_prompt.jpg "Launch Center Pro Prompt"

Feel free to experiment with other type of prompt in Launch Center Pro action composer. The others are `[prompt]`, `[prompt-num]`, `[contact]`, and `[dropbox]`. You don’t have to memorize these tags since you’ll be able to see them when URL field is active.

**5. Check the new file in Dropbox**. Make sure new file exists in the folder you’ve selected in Dropbox — in our case the folder will be located at `~/Dropbox/Apps/Drafts/`. Verify the filename and its content.

## Setting Up Hazel to Monitor Triggers

Now we have remote triggers and notifications running properly. The final step will have Hazel links everything together. Hazel will tell Keyboard Maestro to run macros based on incoming files in Dropbox.

[ ![Drafts Folder in Hazel][202332] ](http://images.sayzlim.net/2014/08/remote_macro_hazel_folder.jpg "Drafts Folder in Hazel")

[202332]: http://images.sayzlim.net/2014/08/remote_macro_hazel_folder.jpg "Drafts Folder in Hazel"

**1. Tell Hazel to monitor `Drafts` folder**. If you’re new to Hazel, simply drag the folder into the `Folders` section.

[ ![Hazel Conditions][202347] ](http://images.sayzlim.net/2014/08/remote_macro_hazel_conditions.jpg "Hazel Conditions")

[202347]: http://images.sayzlim.net/2014/08/remote_macro_hazel_conditions.jpg "Hazel Conditions"

**2. Create a new rule for each macro.** The rule above runs macro by detecting the filename that you’ve defined in the spreadsheet that generates x-callback-url. Once Hazel detects a matching file, it’ll move it to Trash and runs the content of AppleScript.

**3. Run Keyboard Maestro macros with AppleScript.** There are three ways to run Keyboard Maestro macros in AppleScript. The simplest one is to run macro by name.

``` applescript
	tell application "Keyboard Maestro Engine"
	    do script "Put Computer to Sleep"
	end tell
```

But if you’ve followed my [guide to organize macro groups](http://sayzlim.net/organize-keyboard-maestro-macros "How I Organize Keyboard Maestro Macro Groups - Sayz Lim"), you probably will have a few macros with same name. So the best way is by using macro’s UID.

> %sidenote%
> **Finding Out Macros UID:** You can determine a macro’s UID by selecting it and choosing Copy UID command in the Copy as sub-menu in the Edit menu. [Learn more](http://www.keyboardmaestro.com/documentation/6/scripting.html "Keyboard Maestro 6 Documentation: Scripting").

Here is an example of AppleScript with UID.

``` applescript
	tell application "Keyboard Maestro Engine"
	    do script "20EF3819-72E1-4A9F-B864-09B5EBE8844C"
	end tell
```

**4. Pass file content to clipboard**. You can also set the system clipboard with the content of your Dropbox plain text document. Add these two lines of code that set the system clipboard to the file content.

```
set file_content to (read theFile)
set the clipboard to file_content

tell application "Keyboard Maestro Engine"
	do script "DC58681F-D192-4B18-A3A7-7E255478EF62"
end tell
```

### Wrapping Up
Now we have everything setup correctly. It’s time to test the workflow. Trigger an action remotely with Launch Center Pro and see your Mac runs macro.

Here is the summary of the steps you must follow each time you want to create a new remote trigger.

1. Create a new macro in `Maestro Control` group. Write the message of your notification.
2. Generate x-callback-url with [this spreadsheet][spreadsheet] based on the plain text document filename.
3. Copy the new macro UID by selecting `Edit » Copy As » Copy UID` from menu bar.
4. Create a new Hazel rule in Drafts folder that detects the filename of the plain text document. Use the UID in the AppleScript.
5. Create a new Launch Center Pro action and use the generated x-callback-url in `URL` field.

It’s a rather complex setup requiring a lot of apps and services. But the core of the services is Dropbox and Hazel. Drafts and Launch Center Pro merely simplify the workflow so you don’t have to type command whenever you want to run a macro remotely. If you find this guide useful, please share it with your friends or followers.