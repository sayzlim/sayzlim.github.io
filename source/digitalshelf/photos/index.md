---
layout: digitalshelf
title: "Manage Your Photos"
date: 2014-08-06  13:39
description: There is nothing more efficient than having your images and photos organized in a way that you can search one specific photo under few seconds.
---

Be it a parent who takes the photos of their children, or a professional photographer who aims for the best captured moment, eventually you’re going to save the best taken photos forever.

Nothing is more frustrating than having a list of messy images and photos without proper naming pattern. In this guide, I’m going to share a guide that has helped me to keep these images and photos in order.


## What type of library are you building?

You take a photo or save an image for a reason. Figure out the reason. It’s the only way to group these photos in their own library.

- Do you take the photos of your daily life? It’s your photo journal.
- Do you take photos of the objects you’re interested? It’s  your portfolio.
- Do you save images or take screenshot of websites for references? It’s your inspiration library.

Put the photos in their own library. Mixing the photos from your photo journal with the images from inspiration library only bring chaos. There is a theme for each library, and this theme is what governing the order and structure of your collections.

I’m not trying to tell you the right way to organize your images. I only want to share the method I use to organize all my photos. Here’s a few summaries of the library I’m building.

- I keep a photo journal. It’s a great way to capture your day by taking the photos of the place you visited or a meal you had in a secret alley of the town. Sometimes they’re the photos of my nieces and nephews, sometimes they’re the photos of my friends.
- I save a lot of web design example and copywriting. It’s the library I open the most when I’m searching for idea to redesign this site, or coming up with a new layout. It’s also the place where I save all the photos of fixed gear bike.

The idea is you need to know the library you want to build before organizing them. The purpose of the library is the framework for building a solid structure that adapts to any type of situations.

## Perfect Image Manager

Choose an image manager that preserve photos’ metadata. Some image manager strips away the photos’ metadata and causes you lose information like exposure time, camera model, and geolocation. These metadata plays an important in automating organization, so make sure they’re left untouched.

Here’s the list of requirements of my perfect image manager:

- It keeps the photos and images metadata intact.
- It can monitor the updates in a folder without going through the import process.
- It’s lightweight and versatile.
- It supports tags.
- It has [advanced search](http://www.pixa-app.com/faq/#faq2_10 "Pixa - Frequently Asked Questions") to help you to find photos by tags and dimensions.

I highly recommend [Pixa](https://itunes.apple.com/us/app/pixa/id527618971?mt=12&uo=4&at=11ld6n&ct=pixa "Pixa") because it’s the only image manager I’ve seen so far that fulfills most of the requirements I mentioned above. It uses the widely common OpenMeta framework for tags which means you can view these tagged images and photos in third party tags manager such as [Tags](http://www.caseapps.com/tags/ "Tags - Simply Organized - Case Apps").

## The Flow of Photos and Images

Imagine the process of organizing photos as the flow from river source to river mouth. The photos and images come from different sources. Some of them come from iPhone, some of them come from digital camera, and some of them come from websites.

No matter where they come from, eventually they all flow into the main river. What exactly is the main river? It’s a temporary folder where you gather all the photos together. The main river is where you sort those photos. You decide the name of the photos, you choose which river mouth (or the library) these photos shall flow into.

In main river, we’re dealing with a two problems:

- Which library  does the photos belong to?
- How should I name the photos in each library?

You should automate the mentioned tasks in this stage. Avoid renaming images or photos manually. Create a naming pattern for each library to avoid unnecessary fiddling with filename. Photos are about the visual interpretation of what you see. The filename is secondary.

We’re going to use [Hazel](http://www.noodlesoft.com/hazel.php "Noodlesoft - Hazel") to handle all the renaming and directing the flow of photos to each river mouth. I’ll explain the concept of the flow in this guide. You’ll find a link to in-depth tutorial at the end of each section.

**1. Create a main river folder**. This is the place where all you photos are temporarily stored. Import all the photos from your iPhone and digital camera into this folder. You can have more than one main river, but to simplify the flow, I tend to use one main river. In my case, this folder is the `Camera Uploads` in Dropbox.

**2. Create directing rules with Hazel**. We want to do two things in the main river. First is to direct the photos to its respective library. Second is to create a naming pattern for the moved files.

The common naming pattern I use for photos is this one:

	2014-06-22 at 13.22.47 in -6.127,106.792.jpg

Sometimes I use a more simplified naming pattern like this one for screenshots:

	Screen Shot 2014-08-06 at 13.37.18.jpg

By using Hazel to automatically rename all the photos in the main river, I can avoid the complicated process of irrelevant naming sequence like `IMG_2355` or `Photos (1233)`. Beside, the filename itself describes date created and the geolocation of the photos.

Take a look the list of rules in Hazel in the screenshot below. It shows different rules to move iPhone and iPad screenshots to `Screenshots` folder and the rest of photos to `Gallery` folder.

[ ![Hazel Flow Rules][201645] ](http://images.sayzlim.net/digitalshelf/photos_hazel_flow_rules.jpg "Hazel Flow Rules")

[201645]: http://images.sayzlim.net/digitalshelf/photos_hazel_flow_rules.jpg "Hazel Flow Rules"

The question is how to differentiate the source of the photos or images?  The most practical method is to use the pixel height and width. Alternatively, you can also make use of the model device name found in the EXIF data of your photo as the conditions. Here’s the conditions to figure out if these photos are iPad screenshots.

[ ![Hazel Condition Detect by Dimension][201836] ](http://images.sayzlim.net/digitalshelf/photos_hazel_flow_conditions.jpg "Hazel Condition Detect by Dimension")

[201836]: http://images.sayzlim.net/digitalshelf/photos_hazel_flow_conditions.jpg "Hazel Condition Detect by Dimension"

The order of rules affects how the photos are organized. Let the rules with specific conditions stay on top and the general one at the bottom. If you put the conditions that move all images and photos with `JPG` as extension to `Gallery` folder, then there won’t be any files left to match `Move iPad Screenshots` and `Move iPhone Screenshots` rules.

> %sidenote%
> **Matching Condition Tutorial:** Read this [guide of managing iPhone and iPad screenshots](http://sayzlim.net/manage-screenshots-hazel "Manage iPad and iPhone Screenshots with Hazel - Sayz Lim") to see how I differentiate the type of images inside with nested rules.

## Folders and Tags

Let’s take a short break and review what you’ve completed so far.

1. You created a folder that acts as main river.
2. You added some Hazel rules that rename and direct the flow of photos to each library folder (or river mouth).

Try to put some images and photos  in the main river and see if they’re renamed and moved to each library correctly. If there is any mistakes, revisit the previous section and see if you miss any steps.

Everything is correct? Great!

Now that all the photos and images are in the right library. We’re going to organize the photos and images. You have two choices when it comes to organize library: folders and tags.

### Sorting with Folders

I’m not an advocate of folders. You can’t come up with a structure of folders that works in every situation. The only reason I use folder is when I want to group files in the highest level possible — like when I put all the `pxm` inside `Pixelmator` folder.

> %sidenote%
> **Organizing Files in Folders:** I organize all the files and documents in Dropbox. You can find out how I do this in this [guide of organizing files in Dropbox](http://sayzlim.net/organize-files-in-dropbox "How I Organize Files in Dropbox - Sayz Lim").

But what is the best method to separate a large number of photos and images if not with folders? Hazel lets you sort the files into subfolder according to the pattern you’ve assigned. For example, you can sort files based on their  date created. If you’re adventurous, you can first sort them according to the device model, and sort them by year and month.

[ ![Create Years Folder in Finder][201558] ](http://images.sayzlim.net/digitalshelf/photos_finder_year_folder.jpg "Create Years Folder in Finder")

[201558]: http://images.sayzlim.net/digitalshelf/photos_finder_year_folder.jpg "Create Years Folder in Finder"

Let’s say you have a folder called `Photo Journal` that stores all the photos you’ve taken with iPhone. The first thing you should do is create folders that’ll store the photos based on your criteria. Say you want to sort them by year first, you must create the fews `<Year Number>` folder. In this case, you’ll have to create `2014` folder to store all the photos taken this year.

[ ![Hazel Rules in Photo Journal][201507] ](http://images.sayzlim.net/digitalshelf/photos_hazel_year_rules.jpg "Hazel Rules in Photo Journal")

[201507]: http://images.sayzlim.net/digitalshelf/photos_hazel_year_rules.jpg "Hazel Rules in Photo Journal"

The next step is to create a rule that moves the photos in the `Photo Journal` folder to `2014` folder. Since there is no way to only check the year of date created in Hazel, you must tell the rules to move the photos and images containing `2014`in filename to the target folder — in this case, the `2014` folder. You’ll also tell the rule to sort the photos into subfolder automatically in this step.

[ ![Hazel Conditions Detect by Name][201720] ](http://images.sayzlim.net/digitalshelf/photos_hazel_year_conditions.jpg "Hazel Conditions Detect by Name")

[201720]: http://images.sayzlim.net/digitalshelf/photos_hazel_year_conditions.jpg "Hazel Conditions Detect by Name"

The drawback from the this approach is you need to create new rule every year, but you can avoid adding too many folders in Hazel and only populate the rules section.

> %sidenote%
> **In-Depth Tutorial:** You can read the complete tutorial to [move from iPhoto to Dropbox](http://sayzlim.net//move-entire-iphoto-library-to-dropbox "Move entire iPhoto Library to Dropbox - Sayz Lim") and sort all the photos by the structure I described in this section.

### Sorting with Tags

Tags is the most flexible tool to group your photos and images by context. Think about the trouble you have to go when sorting your files by folders. A single image can’t exist in two folders, but it can have more than two tags. By taking the advantage of tags you can come up with a structure that makes searching for photos much easier.

Think about the way you usually sort photos. What are the common grouping you use to differentiate between images. Here’s a few example.

- **By location**. Did you take the photos in England? Tag them with `England`. The photos are taken during your trip to your school? Tag them with `School`. The point to give contextual meaning to your photos by tags.
- **By project or event**. This is probably the one you’ll use the most. Tag images and photos according to the project or event name.
- **By photo genre**. Tags them based on the genres: `Street Photography`, `Landscape Photography`, or `Fashion Photography`.

> %sidenote%
> **Projects in Pixa:** You can also create a project in Pixa and put related images and photos in the project without affecting the images or photos structure. A project is like a *ghost* folder that links to all your existing images and photos. Once you’ve completed the project, tag them with project name and delete the existing Pixa project.

The fact that it doesn’t affect the way you organize photos means you can use tags under any situations. Just make sure you don’t over-tagging those images and photos.  Remember that tags must  help narrowing down the search results.

You can skip sorting the images and photos by years and months if they’re not reliant to date created — inspiration library is a great example for this situation. You can just organize the images by their functions like tagging them as `Button`, `Form`, `Progress Bar`, etc. You can also organize them by their device types such as `iPhone`,  `iPad`, or `Android`.

## Wrapping Up

I believe this is the most ideal setup for anyone who takes photos and save images.  This organization structure relies heavily on tags to give meaning to the photos and images. You get to organize your photos in OS X Finder and access them from everywhere by storing them in Dropbox. You also can open and edit the photos with any third party apps without having to export them first.

[Please contact me](http://sayzlim.net/contact "Contact - Sayz Lim") if you have any questions or suggestions to make this guide better.