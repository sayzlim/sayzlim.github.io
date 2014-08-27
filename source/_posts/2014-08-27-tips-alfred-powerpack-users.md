---
layout: post
title: "Tips for New Alfred Powerpack Users"
date: 2014-08-27 00:30
description: "Just bought Alfred for Mac recently? Amazing! Further boost your productivity with these tips written  for Powerpack users."
tags:
- "Alfred"
---

There is a [lot of differences](http://v1support.alfredapp.com/comparison-chart "Compare Spotlight/Alfred Free/Powerpack - Alfred v1 Support") between Alfred Free and Alfred Powerpack edition. The upgrade from Free to Powerpack edition will change the way you navigate files and control Mac. To help you getting started with this amazing utility, check out these Alfred Powerpack tips.

<!-- more -->

## 1. Install Workflows

[ ![Alfred Workflows][224748] ](http://images.sayzlim.net/2014/08/alfred_workflows.jpg "Alfred Workflow")

[224748]: http://images.sayzlim.net/2014/08/alfred_workflows.jpg "Alfred Workflow"

Workflows are essentially the reason you pay for Powerpack. You can  build workflow to create features that are unavailable in Alfred by using AppleScript, shell script, or  Terminal command.

Thanks to Alfred community, you can find most of the common workflows in the [official forum](http://www.alfredforum.com/ "Alfred App Community Forum"). There is also a workflows directory called [Packal](http://www.packal.org/ "Packal: Home") where you can browse workflows and themes.  You can use [Packal workflow](http://sayzlim.net/packal-updater "Manage Alfred Workflows with Packal Updater - Sayz Lim") to keep all your workflows updated.

Not sure which workflow you should get? I have a few list of workflows every Alfred 2 users must install.

- [Best Alfred 2 Workflows](http://sayzlim.net/best-alfred-2-workflows "Best Alfred 2 Workflows - Sayz Lim")
- [More Useful Alfred Workflows](http://sayzlim.net/more-useful-alfred-workflows "More Useful Alfred Workflows - Sayz Lim")
- [OS X Toolbox Workflow for Alfred 2](http://sayzlim.net/os-x-toolbox-workflow-alfred-2 "OS X Toolbox Workflow for Alfred 2 - Sayz Lim")


## 2. Setup File Selection Shortcut

[ ![Alfred File Selection][224645] ](http://images.sayzlim.net/2014/08/alfred_file_selection.gif "Alfred File Selection")

[224645]: http://images.sayzlim.net/2014/08/alfred_file_selection.gif "Alfred File Selection"

The next thing you should do after unlocking Powerpack is to configure your file selection shortcut. You can find it under `Features » File Search » Actions` panel. This shortcut is important because it’s going to be the feature you use often while working with files.

When we select files in Finder, we want to take actions. These actions usually require the need to use mouse cursor like moving files between folders, compressing selected files, or sending them as attachment via email. Alfred simplify the process by letting you act onto those files with actions. 

Alfred comes with a set of default actions such as `Open with…`, `Copy To…`, and `Move To…` which are the common actions we do in Finder. You can create more actions by installing workflow and do tasks like creating a new note in Evernote, optimizing selected images in ImageOptim, or even managing Finder tags.

You can also act onto these files directly with [Alfred built-in files browser](http://sayzlim.net/handy-tips-browse-files-alfred "5 Handy Tips to Browse Files in Alfred - Sayz Lim").

## 3. Create Custom Searches Workflow

[ ![Alfred Custom Searches Workflow][224700] ](http://images.sayzlim.net/2014/08/alfred_custom_searches_workflows.jpg "Alfred Custom Searches Workflow")

[224700]: http://images.sayzlim.net/2014/08/alfred_custom_searches_workflows.jpg "Alfred Custom Searches Workflow"

The first workflow you should create is `Custom Searches` which groups all your `File Filter` triggers in one location. One of the purpose of this workflow is to help you search files based on their types. I have a `File Filter` that only searches for all the Markdown document and open the selected file in Writer Pro. You can also choose different action for selected result such as `Reveal in Finder` or `Open with Marked`.

My favorite trigger is filtering and browsing folders in Alfred. Instead of creating a new window in Finder, I can just view the files inside folder by entering `f <folder name>` into Alfred. Need to show recently opened Sublime Projects? Create a file trigger  that filters all the `sublime-project` filetype, then type period as your search query. 

## 4. Limit Fallback Results

[ ![Alfred Fallback Results][224730] ](http://images.sayzlim.net/2014/08/alfred_fallback_results.jpg "Alfred Fallback Results")

[224730]: http://images.sayzlim.net/2014/08/alfred_fallback_results.jpg "Alfred Fallback Results"

Alfred Free edition only lets you search Google, Amazon, or Wikipedia in fallback results, but with Powerpack you can customize the fallback results. Just because you can choose which search feature you want to display doesn’t mean you should include everything in fallback results. The key to use Alfred efficiently is to maintain the list small, relevant, yet still powerful.

Here’s my suggestion to keep your default fallback results clean and powerful. Only use `I’m feeling lucky` and `Google` as your default fallback searches. I explained [why I choose this setup in this post](http://sayzlim.net/lucky-alfred-fallback-search "Stay Lucky With Alfred Fallback Searches - Sayz Lim"). The short answer is you have an almighty bookmark service in that `I’m feeling lucky` button.

I also recommend putting this  [Evernote for Alfred workflow](http://www.packal.org/workflow/evernote "Evernote - Packal") in your default fallback results. Unlike Google that lists all information on Internet, you can trust Evernote for revisiting knowledge you’ve collected across the time.

## 5. Leverage Clipboard Snippets and History

[ ![Alfred Clipboard History][224756] ](http://images.sayzlim.net/2014/08/alfred_clipboard_history.jpg "Alfred Clipboard History")

[224756]: http://images.sayzlim.net/2014/08/alfred_clipboard_history.jpg "Alfred Clipboard History"

Clipboard is one of the most essential tool in every operating system.  The Powerpack edition unlocks clipboard history which lets you search, browse, and preview the past text-based clipboard. [^1]Each clipboard item is accompanied with an icon to differentiate the source of clipboard.  You can also view the content of clipboard in the sidebar by scrolling through the list.

[ ![Alfred Snippets][234936] ](http://images.sayzlim.net/2014/08/alfred_snippets.jpg "Alfred Snippets")

[234936]: http://images.sayzlim.net/2014/08/alfred_snippets.jpg "Alfred Snippets"

Another feature you get from unlocking Powerpack is snippets. Store your email address, home address, or your identification number as snippets, and find them in clipboard viewer whenever you need it. This is the feature I rarely use because I store most of my snippets in TextExpander. I’ve written a post on [how to organize TextExpander abbreviations](http://sayzlim.net/memorable-textexpander-abbreviations "Creating Memorable TextExpander Abbreviations - Sayz Lim") which you can follow to keep the snippets in Alfred organized.

## 6. Contacts Custom Actions

[ ![Alfred Contacts Custom Actions][224812] ](http://images.sayzlim.net/2014/08/alfred_contact_custom_actions.gif "Alfred Contacts Custom Actions")

[224812]: http://images.sayzlim.net/2014/08/alfred_contact_custom_actions.gif "Alfred Contacts Custom Actions"

Here’s another cool trick to customize Alfred’s contacts viewer. When you choose a contact detail in Alfred contact viewer, by default, Alfred copies the contact detail into clipboard. But you can add custom URL actions, which turns out to be URL scheme, for each contact field. Contact field such as Twitter, Facebook, and LinkedIn are automatically configured — you can still modify the URL scheme.

I prefer to use `https://www.google.com/search?q={query}` in `Name` contact field whenever I want to find out the people I just met. That’s a quick way to understand the background of that person and prepare yourself to be a *mind reader*.

[^1]: Alfred doesn’t support image clipboard because it wants to maintain minimum memory usage.