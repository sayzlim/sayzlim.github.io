---
layout: post
title: Sync iCloud Contacts and Calendar on Snow Leopard
alias: [/post/15776938944/sync-icloud-contacts-and-calendar-on-snow-leopard, post/15776938944/]
description: Follow the step by step tutorial to sync your iCloud contacts and calendar on Snow Leopard.
---
Syncing iCloud to Snow Leopard is relatively simple. The information you need are your __iCloud ID__, usually in number identified as 1473233284, and the __iCloud Server Number__, usually labeled as pXX-caldav.icloud.com.

To find out your iCloud ID and iCloud Server Number, you need to run Safari and [sign into your iCloud](https://www.icloud.com/ "iCloud") account.

Pick Calendar or Contacts and choose __Windows » Activity__ from menu bar.

[ ![iCloud ID and Server Number][img1] ](http://images.sayzlim.net/2012/01/sync_icloud_id.jpg "iCloud ID and Server Number")

[img1]: http://images.sayzlim.net/2012/01/sync_icloud_id.jpg "iCloud ID and Server Number"

You should find something similar to this:

	p03-contactsws.icloud.com/co/mecard/?dsid=1325673149

From the image above, my iCloud ID would be __1325673149__ and my data are stored in server __p03__. Note down what you’ve found out because we’ll need these information later while setting up iCloud on iCal and Address Book.

### Syncing iCal
Run iCal and choose __iCal -&gt; Preferences…__ from menu bar. Pick __Accounts Tab__ and click on the small plus sign at the bottom left. Fill in your iCloud email address and password.

[ ![iCal Settings iCloud Sync][img2] ](http://images.sayzlim.net/2012/01/sync_ical_setting.jpg "iCal Settings iCloud Sync")

[img2]: http://images.sayzlim.net/2012/01/sync_ical_setting.jpg "iCal Settings iCloud Sync"

The most important part is to replace the __p03-caldav.icloud.com__ with your own iCloud Server Number. For instance, if you find out that your iCloud Server Number is __p11__, fill the Server address with __p11-caldav.icloud.com__.

### Syncing Address Book
Syncing your contacts[^1] might be a little bit difficult if you’re not used to edit .plist files. This is the right time to export all your contacts from Address Book and import them to iCloud before proceeding to next step. You can do this by select all your contacts and use right-click to create a backup file.

Access Address Book preferences by choosing __Address Book -&gt; Preferences…__ from menu bar. Add a CardDAV account by following the same procedure as iCal.

[ ![Address Book Accounts for iCloud][img3] ](http://images.sayzlim.net/2012/01/sync_addressbook.jpg "Address Book Accounts for iCloud")

[img3]: http://images.sayzlim.net/2012/01/sync_addressbook.jpg "Address Book Accounts for iCloud"

Fill the "User name field" with your iCloud email address under this format:

	emailAddress%40domainName.com:yourPassword

For instance, if your iCloud email address is LOLcats@yahoo.com and the password is DogsMuffin, you must fill "User name field" with:

	LOLcats%40yahoo.com:DogsMuffin

__Leave the Password field blank__ and replace the Server address field with your own iCloud Server Number. Take note that it’s pXX-__contacts.icloud.com__ this time. Ignore the error and warning, you’ll fix it later.

Choose the "Server Settings" and fill in your iCloud server address. It’s the one you fill in earlier in Server address field. (pXX-__contacts.icloud.com__)

#### Working With Configuration Files
We’re going to configure some setting by navigating to Address Book support folder. Run Finder, choose __Go -&gt; Go to Folder…__ and enter this:

	~/Library/Application Support/AddressBook/Sources

[ ![AddressBook Sources][img4] ](http://images.sayzlim.net/2012/01/sync_folder.jpg "AddressBook Sources")

[img4]: http://images.sayzlim.net/2012/01/sync_folder.jpg "AddressBook Sources"

You should be able to find one or several geeky folders. Run through each folder and open the __configuration.plist__ with TextEdit or any similar text editor apps until your find the configuration associated to your iCloud account.

[ ![Configuration Plist][img7] ](http://images.sayzlim.net/2012/01/sync_configuration.jpg "Configuration Plist")

[img7]: http://images.sayzlim.net/2012/01/sync_configuration.jpg "Configuration Plist"

Replace the value after servername with:

	https://pXX-contacts.icloud.com:443/YYYYYYYYYY/principal/

Replace the XX with your own iCloud Server Number and YYYYYYYY with your iCloud ID number. Once you’re done, save the file and run Address Book. Fill in your iCloud password in the "Password field" and you should be able to see your iCloud contacts immediately.[^2]

> %update%
> __Update 12/02/2012__: Federico pointed the need to enable __SSL Connection__ to make contact sync works. You can also use https to skip SSL.

### Notes and Duplicate Bugs
Sometimes Address Book will behave weird and keep duplicating your contacts. There is no need to worry having your contacts duplicated at iCloud Contacts. Those duplicated contacts only exist locally.

> %update%
> __Update 24/03/2013__: It seems this tutorial has brought [some discussions][15] at MacRumors. There are some solutions suggested there, especially the part that modifies “addressBookName” key.

[15]: http://forums.macrumors.com/showthread.php?p=14811447 "Finally! Sync your Address CardDav in OSX 10.6 Snow Leopard"

I haven’t found the way to fix this bug. However, you can stop the bug temporary by reading your iCloud account to Address Book. Make sure to remove the previous iCloud account first.

You can always use the contact form if you have any questions.

[^1]: [Finally! Sync your Address CardDav in OSX 10.6 Snow Leopard](http://forums.macrumors.com/showthread.php?t=1265730)
[^2]: Thanks for [j-dubya](http://forums.macrumors.com/member.php?u=636665) who helped to clear up all the confusion.