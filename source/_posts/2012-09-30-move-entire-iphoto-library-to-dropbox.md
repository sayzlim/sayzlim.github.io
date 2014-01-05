---
layout: post
title: "Move Entire iPhoto Library to Dropbox"
date: 2012-09-30 23:38
description: Here is the tutorial to move your iPhoto library into Dropbox and keep them accessible everywhere.
---

If you’re interested to move your entire iPhoto library to Dropbox, then the [tutorial][6064-001] written by Viticci should be enough to walk you through the process. The tutorial serves as the basic to create your own photo management system in Dropbox. There are some steps that can be simplified, especially the part where additional applications are required to keep the photos metadata intact.

I’ve never depended iPhoto for storing photos. The only time I use it was to test its features. It might sound funny from an iOS user, but I don’t like the way iPhoto keeping the photos separated from the operating system. Just like how I [use plain text on Mac][6064-002] now, this approach allows me to store images on folder basis. It’s not only easier to manage, I can also work with photos in many environment where Dropbox is available.

What you’re going to read here is similar to what you’re going to read in Viticci’s post. The only difference is during the export process and how I organize rules in Hazel.

## Moving Photos Out From iPhoto Library

The first thing you need to do is getting all the photos out from iPhoto without removing any single metadata such as location, brightness value, and camera type. **Don’t export the photos directly from iPhoto** because it’ll create a different file for each photo. What you really want to do is moving the original photo out of iPhoto library. That’ll keep the metadata intact.

[ ![Locate iPhoto Library][img1] ](http://images.sayzlim.net/2012/09/iphoto_show_package.jpg "Locate iPhoto Library1")

[img1]: http://images.sayzlim.net/2012/09/iphoto_show_package.jpg "Locate iPhoto Library1"

Locate your iPhoto Library. Usually you can find it in Pictures folder. It consists the database of your photos and also many other things such as Faces assigned to each contact in your address book. **Right-click the library and select Show Package Contents.** Find and move the “Masters” folder to the desktop. The “Masters” folder is where your original photos with metadata are stored. If you’re worried that you’ll lose photos inside iPhoto library, then feel free to copy it to desktop, keeping the structure of iPhoto Library untouched.

[ ![iPhoto Library Package Contens][img2] ](http://images.sayzlim.net/2012/09/iphoto_package.jpg "iPhoto Library Package Contents")

[img2]: http://images.sayzlim.net/2012/09/iphoto_package.jpg "iPhoto Library Package Contents"

Let the “Masters” folder to chill out for a while in desktop. We’re going to create some rules to define how Hazel handles all the JPEG photos inside “Camera Uploads” folder

## Hazel Rules

[Hazel][6064-003] is a small utility that you can install in Preferences Panes. A single license costs $25. You might find price is a bit too high for something this simple. But in the long run, you’ll realize that Hazel is one of the must-have app on Mac, or at least for power users.

[ ![Dropbox Photos Folder Preview][img3] ](http://images.sayzlim.net/2012/09/finder_preview.jpg "Dropbox Photos Folder Preview")

[img3]: http://images.sayzlim.net/2012/09/finder_preview.jpg "Dropbox Photos Folder Preview"

First, you need to decide where to store all your photos. I store all my photos, organized by folder, in the Dropbox “Photos” folder. I create a folder and name it “Gallery” to store all the photos taken with iPhone.

Now we’re going to set up some rules for “Camera Uploads” and “Gallery” folder. When setting up rules for a folder, you’re telling them to watch over the files and folders inside them and take action when a condition match. So here is what we’re going to tell them to do.

[ ![Camera Upload Hazel Rules][img4] ](http://images.sayzlim.net/2012/09/hazel_camera_uploads.jpg "Camera Upload Hazel Rules")

[img4]: http://images.sayzlim.net/2012/09/hazel_camera_uploads.jpg "Camera Upload Hazel Rules"

[ ![Gallery Hazel Rules][img5] ](http://images.sayzlim.net/2012/09/hazel_gallery.jpg "Gallery Hazel Rules")

[img5]: http://images.sayzlim.net/2012/09/hazel_gallery.jpg "Gallery Hazel Rules"

*   **Camera Uploads:** Please rename and move all JPEG images into “Gallery” folder.
*   **Gallery:** Please move all files into their respective created years and sort into subfolder by month created.

Drag the Camera Uploads folder into Hazel so you can apply rules. Create a new rule and name it “Move to Gallery”. Add condition according to the screenshot below.

[ ![Move to Gallery Hazel Rules][img6] ](http://images.sayzlim.net/2012/09/camera_hazel_rules.jpg "Move to Gallery Hazel Rules")

[img6]: http://images.sayzlim.net/2012/09/camera_hazel_rules.jpg "Move to Gallery Hazel Rules"

[ ![Hazel Rules Pattern][img7] ](http://images.sayzlim.net/2012/09/camera_hazel_rules_detail.jpg "Hazel Rules Pattern")

[img7]: http://images.sayzlim.net/2012/09/camera_hazel_rules_detail.jpg "Hazel Rules Pattern"

[ ![Hazel Dates Pattern][img] ](http://images.sayzlim.net/2012/09/camera_hazel_rules_detail2.jpg "Hazel Dates Pattern")

[img]: http://images.sayzlim.net/2012/09/camera_hazel_rules_detail2.jpg "Hazel Dates Pattern"

As you can see from the screenshot, there are 2 actions when the condition match. The first one is renaming all JPEG photos into certain pattern, followed by moving them into “Gallery” folder. The result of pattern is something like this:

    2012-06-30 at 11.44.47 in -6.916,106.613.jpg

I suggest to keep this pattern so you can easily copy the coordinate. I usually use the coordinate in Google Maps to find out the location where photos are taken.

> You can edit date pattern and adjust each variable by right-clicking on them.

We’re done with the “Camera Uploads” folder. You can setup multiple rules to handle different type of images.[^1]

[ ![Gallery Required Folders][img8] ](http://images.sayzlim.net/2012/09/gallery_list.jpg "Gallery Required Folders")

[img8]: http://images.sayzlim.net/2012/09/gallery_list.jpg "Gallery Required Folders"

Let’s see how we’re going to set rules for Gallery folder. Create some folders for your photos collection based on year created. If you don’t create those folders, then the rules we’re going to create aren’t going to work.

Create a rule to move filename containing “2012” into “2012” folder, followed by sorting into subfolder by months. I prefer to have the folder named with **09 September** pattern. If you’re wondering how it looks like, the following screenshot is self-explanatory.

[ ![Gallery Hazel Rules][img10] ](http://images.sayzlim.net/2012/09/gallery_hazel_rules.jpg "Gallery Hazel Rules")

[img10]: http://images.sayzlim.net/2012/09/gallery_hazel_rules.jpg "Gallery Hazel Rules"

[ ![Sub Folder Patterns][img11] ](http://images.sayzlim.net/2012/09/gallery_hazel_rules_detail.jpg "Sub Folder Patterns")

[img11]: http://images.sayzlim.net/2012/09/gallery_hazel_rules_detail.jpg "Sub Folder Patterns"

You must be wondering why we can’t have the “Gallery” folder to sort photos by year. The problem by having all photos organized by year means you have to create a “Sort into subfolder by months” for each year folder created. We want to avoid having to many folders in Hazel. What we get from this approach is same number of rules, less folders added to Hazel.

> When creating rules with Hazel, it’s better to come up with a steps that take less folder in Hazel. Have a folder to batch rename, modify the name before moving it to another folder. That’ll save many steps required to complete one flow of action.

Since you are unable to take photos from the past after you’ve imported all your photos, all you need to keep is one rule for “Gallery” folder. When you’re done with “Move to 2012”, you can replace with “Move to 2013”.

[ ![Move Entire iPhoto Library to Dropbox Result][img12] ](http://images.sayzlim.net/2012/09/hazel_result.jpg  "Move Entire iPhoto Library to Dropbox Result")

[img12]: http://images.sayzlim.net/2012/09/hazel_result.jpg  "Move Entire iPhoto Library to Dropbox Result"

When you’re done implementing all the rules, you can test the rules by dragging one of your photo into “Camera Uploads” folder. If there is no mistake, the photo should go into its year folder, inside month folder like the screenshot above.

## Conclusion

Using Dropbox instead of iPhoto has brought many benefits to me. Having a direct access to photos without the use of app is one of it. But the most important thing is knowing you can always get your photos easily without trouble.

Feel free to [contact me][6064-004] if you have any questions about Hazel or this tutorial.

[^1]: I’ve set some rules to store all iPhone and iPad screenshot into a folder name “Screenshots”. I also set color label to differentiate screenshot between iPhone and iPad. 

[6064-001]: http://www.macstories.net/tutorials/moving-from-iphoto-to-dropbox/ "Moving From iPhoto To Dropbox - MacStories"
[6064-002]: http://sayzlim.net/use-plain-text-on-your-mac/ "Use Plain Text on Your Mac  | Sayz Lim"
[6064-003]: http://www.noodlesoft.com/hazel.php "Noodlesoft | Hazel"
[6064-004]: http://sayzlim.net/contact "Contact | Sayz Lim"