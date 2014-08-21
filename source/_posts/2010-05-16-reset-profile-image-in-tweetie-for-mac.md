---
layout: post
title: Reset Profile Image in Tweetie for Mac
description: Caches in Tweetie can be resetted easily with this command line.
tags:
- "Tweetie"
---
Tweetie, a simple and elegant Twitter application, is liked by many mac enthusiast from the desktop apps to iPhone apps. It is no wonder why Tweetie is popular because of its user interface which won the leading Apple Design Awards for iPhone. Of course, there is also some minor problem which the developer hasn’t fixed yet.

<!--more-->

Have you ever changed your Twitter profile image and realize that Tweetie doesn’t cache and change your profile image accordingly? There is a chance the problem is caused by the slow caching system on Twitter server. But if your profile picture doesn’t change after 1–2 days. Then the problem lies with the Tweetie caching system.

To reset your Tweetie profile image cache, delete the cache image folder `com.atebits.tweetie.profile-images`  in:

	User » Home » Library » com.atebits.tweetie.profile-images

Reopen your Tweetie. That’ll solve the problem. This is another detailed [Tweetie Tips and Tricks Guide.][1]

[1]:	http://www.manu-j.com/blog/tweetie-tips-tricks-guide/250/ "Tweetie for Mac : Tips &amp; Tricks Guide - Manu J"