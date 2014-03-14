---
layout: post
title: "Creating Memorable TextExpander Abbreviations"
date: 2013-09-28 19:00
description: Learn how to create a memorable TextExpander abbreviations with this simple guide.
tags:
- declutter
- TextExpander
---

TextExpander has saved me a lot of time. Rather than copy pasting, or arranging the rich text format, I can turn them into snippets. You can assign variable and input field for each snippet to make it more useful.

<!--more-->

This post won’t address what TextExpander can do nor showing you which snippets to use. You can learn what it does by visiting [official TextExpander’s site][3]. For snippets recommendations, [David Sparks][4] and [Brett Terpstra][5] have shared their snippets which you can use as references.

[3]: http://www.smilesoftware.com/help/TextExpander/index.html "TextExpander Help: Index"
[4]: http://macsparky.com/tesnippets/ "TextExpander Snippets — MacSparky"
[5]: http://brettterpstra.com/projects/te-tools/ "TextExpander Tools - BrettTerpstra.com"

The most challenging part using TextExpander is not creating snippets. Snippets are called, but in order to trigger the call, we need abbreviations. Without memorable and unique abbreviations, you’ll waste more time trying to remember which abbreviations to use.

TextExpander shows us that a [good abbreviation][2] should follow these criteria:

[2]: http://www.smilesoftware.com/help/TextExpander/creating.html "TextExpander Help: Creating Snippets"

- short
- easy to remember
- unlikely to be typed by accident
- unique

You can hardly get them all right. If the abbreviation is too short, conflict happens often. If the abbreviation is not unique, it’ll get triggered unexpectedly. If the abbreviation is too complicated, it’ll be forgotten easily. So what exactly is the method to create a unique and memorable abbreviation?

There are two ways to make the abbreviations unique.

> Duplicating an abbreviation's first character (ddate, ssig, zzip) is one way of creating abbreviations that meet these criteria. Another way is to use a period or other punctuation mark as the first character of your abbreviation (;date, 'sig, /zip).

**Don’t duplicate the first character**. I’ve tried that method and instead of making each of them unique, more conflicts arise. Using punctuation mark as unique character is recommended. John Gruber uses semicolon, Brett Terpstra uses double comma. Personally, I use dot as the the unique character abbreviation. It’s a matter of preferences. My suggestion is to only pick one character. Either comma, semicolon, or dot is a nice choice.

Prepending unique character itself alone is not enough. Let’s say I use `.img` as an abbreviation. It’s used to expand a Markdown snippet by taking image URL from clipboard. It also asks for the alternative text and title for the image.

	![%filltext:name=Alternate Text%](%clipboard "%filltext:name=Title%")

What if I want to have a different version snippet where the image is inside the hyperlink? I can’t use the `.imga` or `.img2` because it’ll get triggered before I complete the abbreviation[^1]. I also can’t use `.iimg` because it increases the complexity of the abbreviations.

What is the solution? **Add group abbreviation right after the unique character.**

Group abbreviation is another way to ensure all the abbreviations are unique. It can also help you remember snippets with similar content. Instead of using `.img`, you can use `.mdimg` to make the abbreviations specific for Markdown.

The structure of your abbreviations should be like this:

	[unique character][group abbreviation][snippet abbreviation]

If you’re a developer, you should be familiar with Git. From the rules above, your structure would be:

- Unique character: dot
- Group abbreviation: git
- Snippet abbreviation: command

You can come up with the list of abbreviations such as `.gitlog`, `.gitbran`, `.gitpush`, and `.gitstat`. The optimal group abbreviation character length is three, while you can just truncate the snippet abbreviation to four characters.

[ ![TextExpander Group Abbreviations][img1] ](http://images.sayzlim.net/2013/09/textexpander_group.jpg "TextExpander Group Abbreviations")

[img1]: http://images.sayzlim.net/2013/09/textexpander_group.jpg "TextExpander Group Abbreviations"

The structure above works because we only need to remember the group abbreviations. The snippet abbreviations itself is the truncated version, in other word, you don’t need to memorize them. For `git branch` command, I don’t use `.gitbrnc`, I just use `.gitbran`.

You’ll also find this useful when writing CSS. By prepending `.css` to all your abbreviations, the group itself will be unique. You can also use your company alias or the blog you’re working by prepending matching abbreviations like the one I do for MakeMac.

[ ![TextExpander MakeMac][img2] ](http://images.sayzlim.net/2013/09/textexpander_company.jpg "TextExpander MakeMac")

[img2]: http://images.sayzlim.net/2013/09/textexpander_company.jpg "TextExpander MakeMac"

## Take Apart The Structure
The structure is made to help you organize abbreviations. Sometimes you might want to take apart the structure for different snippets. If you’ve read [Plain Text Primer][6] by Michael Schechter, you should know that simple abbreviations like `.nx` and `.bx` is better than prepending group abbreviations.

**Frequently used snippets don’t need to use group abbreviations.** You can use `.date` to show current date, or even `.time` to show current time.

Try using different unique character for different type of snippets. If you need to remember file path, using `~` as the unique character works better than dot or other characters. Use it to store all the most common used file path like assigning `~log` to access your server log.

By combining what you’ve learned, you can differentiate between snippets with group abbreviations. If you need to access your remote server, use the server name or company name as prefix. That way you can access the same path, but only need to remember the different group abbreviations, eg. `~yhlog`, `~wdlog`, `~msnlog`.

> %update%
> **Update 2013-10-01**: One of the readers, [Johnny Knittle](http://johnnyrk.com/ "johnny knittle. music."), has shown me a similar approach, but with more flexibility to group abbreviations based on functions and objects. By using the unique character as separator, you can create multiple level abbreviations for your personal contacts.

If you group them according to objects, the snippets will be like the one in the list:

- `me.e` = your email address
- `me.addr` = your home address
- `me.cell` = cell phone

The main benefit with this method is you can have different set of first level abbreviations. You can use one character as the abbreviation like `r.ok` for replies and still use `run.abbreviations`, `re.abbreviations`, and `roam.abbreviation` without conflicts.

## Conclusion
The main point of this structure is to lessen the number of abbreviations we need to remember. Similar snippet functions, like the one with accessing log files, share the same snippet abbreviation. With the help of group abbreviation, we can make them unique, avoiding conflicting abbreviations altogether.

[^1]: You can enable delimiter to decide when abbreviations should be expanded. With the delimiter enabled (the default one are space, tab, return, and enter), the abbreviation will expand only when one of the delimiter is typed.

[6]: http://bettermess.com/a-plain-text-primer/ "A Plain Text Primer - A Better Mess"
