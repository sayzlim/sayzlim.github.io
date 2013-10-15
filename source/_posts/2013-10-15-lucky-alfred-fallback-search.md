---
layout: post
title: "Stay Lucky With Alfred Fallback Searches"
date: 2013-10-15 16:09
description: There is no need to create many custom searches. With single custom search, you can search all the websites easily in Alfred.
---
Alfred’s [fallback searches][4920-002] is one of the most underutilized feature. The free version doesn’t allow users to set their own custom searches; Powerpack owners can configure it easily. This feature is especially useful for people who search regularly.

Although you can have several fallback searches in Alfred, I only need two fallback searches. The first fallback search is “**I’m Feeling Lucky**”.[^1]

[ ![I’m Feeling Lucky with Alfred][img2] ](http://images.sayzlim.net/2013/10/alfred_lucky_pinboard.jpg "I’m Feeling Lucky with Alfred")

[img2]: http://images.sayzlim.net/2013/10/alfred_lucky_pinboard.jpg "I’m Feeling Lucky with Alfred"

“I’m Feeling Lucky” turns Google into a bookmark directory. Instead of skimming the list of search results, or typing URL into address bar, I can just type the keywords to visit a webpage. In fact, Google is smart enough to detect your typo and show you the correct webpage.

Alfred has “I’m Feeling Lucky” custom search built in by default. You can set it as your fallback search under the **Default Results** preferences.

If you hate the built in Google search icon, you might consider making your own custom searches. Open **Alfred Preferences** and choose **Web Search**. You can create a new custom search by clicking the **Add Custom Search** at the bottom right. Use the URL below for your custom search:

	http://www.google.com/search?q={query}&btnI

You can also just [visit this link][1] to import the custom search into Alfred. I use the [Chrome icon][4920-003] designed by Chris Masterson for all the Google related searches.

[ ![Alfred Custom Search][img1] ](http://images.sayzlim.net/2013/10/alfred_lucky_search.jpg "Alfred Custom Search")

[img1]: http://images.sayzlim.net/2013/10/alfred_lucky_search.jpg "Alfred Custom Search"

[1]: alfred://customsearch/I%E2%80%99m%20feeling%20lucky%20for%20%27%7Bquery%7D%27/lucky/utf8/plus/http://www.google.com/search?q={query}&btnI "I’m Feeling Lucky for Alfred"

There is no need to create separate custom searches for App Store, Amazon, or Wikipedia. By adjusting your keywords, you can get desired results from all mentioned websites. Here are some example to get you started:

- Type “[author] + [post title/content]” like “shawn blanc pinboard"
- Type “wiki + [topic]" like “wiki Pokemon X"
- Type “app store + [app name]” like “houdini app store”
- Type “store name + [book name]" like “barnes elements of style"

That’s it. Single custom search for all websites. It works great when you know which page you want to visit. I still use the default Google search when I’m researching certain topic — typically when I need several resources. That’s my second fallback search in Alfred.

Changing the way you use search engine can be uncomfortable in the beginning. Since we’ve grown accustomed to see the search results first, we might find not knowing where you’re going to end up insecure. But with enough practice in choosing keywords, you can visit most of the pages accurately skipping the search results altogether.

[^1]: I hope using this feature doesn’t suck up all my luck.

[4920-002]: http://support.alfredapp.com/features:default-results "Default Results - Alfred v2 Support"
[4920-003]: http://chrismasterson.me/icons/chrome.html "Chris Masterson - Chrome"