---
layout: post
title: "Prevent Typographic Orphan in Post Title"
date: 2013-09-10 23:45
description: If you want to build a better web, you must eliminate typographic orphan.
tags:
- write
---

I’ve been reading [Butterick’s Practical Typography][1] this past week. It’s a book detailing how typography can be applied to make our writing every day more useful for our intended audience.

<!--more-->

I’m still at the beginning part of the book, but there is one important lesson I’ve learned from one of the section in the book. It answered one of the annoyance I keep encounter with responsive design, especially on this blog, is [typographic orphan][2].

Borrowing the definition from Wikipedia:

> A word, part of a word, or very short line that appears by itself at the end of a paragraph. Orphans result in too much white space between paragraphs or at the bottom of a page.

I [redesigned this blog][3] by referring to iPhone and iPad screen size. Even by limiting the screen size to iPhone and iPad, I occasionally will discover orphan in one of my post title as shown in the example below.

![ [Post Title Without Non-Breaking Space][] ](http://images.sayzlim.net/2013/09/orphan_before.jpg "Post Title Without Non-Breaking Space")

[Post Title Without Non-Breaking Space]: http://images.sayzlim.net/2013/09/orphan_before.jpg

Orphan is considered a bad style because it’ll create too much whitespace between paragraph. Orphan found in centered text is even worse. Another problem with orphan is it’s likely to break the flow of the text. If you see the example above one more time, the text in “4 Best Bowtie Themes to Decorate Your” doesn’t flow well into the “Mac”. “Decorate Your Mac” should stay together so readers can see the relation between words in one glance.

One way to avoid orphan is to use non-breaking space. As explained in Butterick’s Practical Typography on [non-breaking space][4]:

> A non­break­ing space is the same width as a word space, but it pre­vents the text from flowing to a new line or page. It’s like in­vis­i­ble glue be­tween the words on ei­ther side.

By using non-breaking space, I can ensure flow of title stay consistent across all screen sizes. I can control which words get wrapped when the width of screen size doesn’t fit. Following the example above, I can use non-breaking space for “Decorate Your Mac”. The phrase will be treated as singular word so each time the screen width won’t fit, it’ll flow into next line as shown in the screenshot below.

![ [Post Title with Non-Breaking Space][] ](http://images.sayzlim.net/2013/09/orphan_after.jpg "Post Title with Non-Breaking Space")

[Post Title with Non-Breaking Space]: http://images.sayzlim.net/2013/09/orphan_after.jpg

Now we have something useful for readers. They can process the words faster and the title also looks better in all screen sizes and styles, left aligned or centered.

This practice can also be applied to paragraph. By using non-breaking space in the last two or three words, you can ensure orphan won’t exist between paragraph.

Despite the form of contents have been growing in the last decade, text remains as the most popular among web users. By learning how to apply best typography practice in our works, we can deliver our works proudly to our audiences. As stated in the book, the core of typography is to perform utilitarian function.

[1]: http://practicaltypography.com/ "Butterick&#39;s Practical Typography"
[2]: http://en.wikipedia.org/wiki/Widows_and_orphans "Typographic orphan"
[3]: http://sayzlim.net/blog-redesign-fresh-citrus/ "sayzlim.net: Blog Redesign, Fresh Citrus Flavor"
[4]: http://practicaltypography.com/nonbreaking-spaces.html "nonbreaking space - Butterick&#39;s Practical Typography"
