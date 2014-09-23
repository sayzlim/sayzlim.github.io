---
layout: post
title: Reset and Remove Applications in Location Services on Mountain Lion
alias: [post/39725203390/reset-and-remove-items-in-applications-services-on, post/39725203390/]
description: Explained how to remove application in the Location Services found on OS X Mountain Lion.
tags:
- "Mac"
---
One of the best features in OS X Lion is a better privacy control which allows you to see all the applications that have access to your information. Some example of those informations are your location, contacts, and Twitter account. They can be found in System Preferences under Security & Privacy pane.

<!--more-->

![Remained Applications in Location Services](http://images.sayzlim.net/2013/01/location_services.jpg)

If you’ve installed Tweetbot for Mac before and removed it from your Mac, then now you should see the removed app remains in the Location Services item list. Normally, we can remove them with secondary click or the button under item list, but not on Mountain Lion.

The remained items won’t cause any problems to your Mac. However, I don’t like to see broken preferences. Therefore, I researched how to remove it and discovered a method to fix this problem.[^1]

The method is to locate and edit the configuration file that stores the applications in Location Services. In order to do that, we need to open the folder that contains the file. Type `Command-Shift-G` in Finder and insert the file path below:

	/private/var/db/locationd/

You’ll see many files and folders. Find and select `locationd` folder. You’ll see it has a small red badge. The badge means that you don’t have the permission to access and edit the folder. We’ll grant permission to ourselves by pressing `Command-I` or **Secondary Click&#160;» Get Info** on the selected folder.

![Edit Permission for locationd Folder](http://images.sayzlim.net/2013/01/location_services_path.jpg)

Expand the Sharing & Permissions panel; you’ll see the privilege of each user. Unlock the panel by clicking the lock icon in the bottom corner right. You’ll be prompted to fill in your administrator password. Change everyone’s privilege into **Read & Write** as shown in screenshot above. With this modified, you can browse the files inside this folder.

Now we need to edit `clients.plist`. But before we do that, we’ve to convert it from binary mode into xml1 file. Run the command below in Terminal — you’ll have to fill in your administrator password:

	sudo plutil -convert xml1 /private/var/db/locationd/clients.plist

Following the steps you’ve used to grant Read & Write access to the `locationd` folder, you’ll need to do the same with the `clients.plist` file. Otherwise, you won’t be able to edit and save the file.

Open the clients.plist and remove the key and dictionary pair in the configuration file. If you’re not sure which line to remove, see the example below.

![Contents of clients.plist File](http://images.sayzlim.net/2013/01/location_services_plist.jpg "Contents of clients.plist File")

Let’s say I want to remove the Matilde key pair in the list. It means I have to find the Matilde key in the and remove its associated item. That would be the line between:

	<key>Application ID</key>
	<dict>Application Information</dict>

Delete those lines and save the file. Don’t forget to convert back the client.plist into binary file using the command below in Terminal:

	sudo plutil -convert binary1 /private/var/db/locationd/clients.plist

The last step is to restart the daemon that monitor the change of location. Type this command in Terminal:

	sudo killall -KILL locationd

![Clean Location Services in Mountain Lion](http://images.sayzlim.net/2013/01/location_services_removed.jpg "Clean Location Services in Mountain Lion")

All the removed applications will disappear from Location Services when you log out from your Mac. Until Apple fix this bug, we’ll have to do this manually with this method. For all the file permissions you’ve changed so far, don’t forget to revert it back to none. They’re clients.plist and locationd folder.

If you have any questions regarding this tutorial, feel free to [contact](/contact) me.

[^1]: [The discussion](https://discussions.apple.com/thread/4294283?start=0&tstart=0) provides a very brief answer which proves to be confusing for new Mac users.
