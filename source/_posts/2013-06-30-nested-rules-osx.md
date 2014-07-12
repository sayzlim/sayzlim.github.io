---
layout: post
title: Why You Should Start Using OS X Nested Rules
description: Nested rules has been built in OS X all along to simplify the searches and filters.
tags:
- mac
---
Rules is an old time feature in OS X. It can be found all across the Cocoa app — commonly in Finder, Mail, and iTunes. Setting up rules for your favorite apps is straightforward. Natural language takes away the fear of making mistakes during the setup. Once the rules are set, we have what we call as smart folders, smart playlists, and smart mailboxes.

<!--more-->

You probably have never heard about rules before. Why should you learn about it? What are the advantages of rules? Obviously, I’ve seen some people who don’t organize their folders and leave smart folders filtering files for them. But, when you use productivity app such as Hazel, then rules is one of the important tools you need to know.

Sometimes we only want to see all the files that have been created today. Let’s try this with smart folders in Finder. We’ll create a smart folder[^1] which only display all files created today.

[ ![Finder Smart Folder Rules][img1] ](http://images.sayzlim.net/2013/06/smartplaylist_finder.jpg "Finder Smart Folder Rules")

[img1]: http://images.sayzlim.net/2013/06/smartplaylist_finder.jpg "Finder Smart Folder Rules"

These rules, as shown above, are the common one. They’re simple. As you become more experienced with rules, you can create many smart playlists to generate songs automatically every day in iTunes. All can be done without you lifting a finger.

But that’s not the only thing. These rules can be nested. Nested rules is useful when you’re faced with some problems that doesn’t seem resolvable.

Let’s start with a simple problem. What if you want a smart playlist that lists all popular song that haven’t been played nor skipped for the past two days? This playlist can only include rock and pop songs.

Well, let’s set up some rules.

*   Rating greater than four stars.
*   Not yet played in the last two days.
*   Not yet skipped in the last two days.
*   The category must come from Pop and Rock.[^2]

The best set rules you can create without nested rules is the one below.

[ ![Smart Playlists in iTunes][img2] ](http://images.sayzlim.net/2013/06/smartplaylist_notnested.jpg "Smart Playlists in iTunes")

[img2]: http://images.sayzlim.net/2013/06/smartplaylist_notnested.jpg "Smart Playlists in iTunes"

Hmmm… everything looks alright. But it’s not going to work. You’ll end up with an empty playlist. No song will match your created rule. A song is only allowed to be inside one category[^3]. Instead of matching **all rules**, you can try to match **any rules**. The playlist is a mess. All pop and rock songs, including all four rating star or above will get mixed up, not to mention all the songs that haven’t been skipped or played in the last two days.

This is where nested rules shine. Nested rules, or rules within rules, allows you to create many combination set of rules. We can fix it. Correct the rules above by nesting a rule for categories. You can nest the rules by holding **Option** key and press the plus sign button. The end result is the one below.

[ ![Smart Folders Nested Rules in iTunes][img3] ](http://images.sayzlim.net/2013/06/smartplaylist_nested.jpg "Smart Folders Nested Rules in iTunes")

[img3]: http://images.sayzlim.net/2013/06/smartplaylist_nested.jpg "Smart Folders Nested Rules in iTunes"

Your playlist will now work correctly. It will even update in real time whenever you play or skip a song. This way, you won’t listen to the song you’ve skipped.

Nested rules offers the flexibility for you to combine several common set of rules into one rule. Using it effectively will lead to a more manageable rules library.

Let‘s take another set of rules I’ve set in Hazel. I use Hazel frequently. To move the screenshots from iPhone and iPad to my Mac is one tedious task. To speed up the process, I set up some rules that will detect the image width and height of iPad and move them to my screenshot folder. You can create separate rule to move portrait and landscape screenshots. But with nested rules, you can combine them in one rule, just the like one below.

[ ![Hazel Rules to Move iPad Screenshots in Landscape & Portrait][img4] ](http://images.sayzlim.net/2013/06/smartplaylist_hazel.jpg "Hazel Rules to Move iPad Screenshots in Landscape & Portrait")

[img4]: http://images.sayzlim.net/2013/06/smartplaylist_hazel.jpg "Hazel Rules to Move iPad Screenshots in Landscape & Portrait"

Not only it’s easier to manage, you may find the rules are easier to fix. Although I suggest you to keep the number of rules low, it doesn’t mean you should combine all the rules together. You should ask yourself whether these rules, when grouped together, are trying to accomplish the same thing. Unless you can answer this question confidently, perhaps it’s better to leave them as they are, as long they’re working fine.

[^1]: Smart folder menu can be found under the `File` in menu bar.

[^2]: Bad example. I know.

[^3]: I’m not sure about others. But you can’t assign more than one category for a song in iTunes.
