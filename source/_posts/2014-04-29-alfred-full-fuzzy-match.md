---
layout: post
title: "Type Less with Full Fuzzy Match Search in Alfred"
date: 2014-04-29 23:18
description: Search your apps faster with Alfred. This time you define your own custom shortcuts for each app.
tags:
- "Alfred"
---

I stop [comparing Alfred to Spotlight](http://sayzlim.net/alfred-app-vs-spotlight "Alfred App vs Spotlight - Sayz Lim"). Not because Spotlight is useless, but Alfred offers more with less.

<!-- more -->

Alfred is smart — in the way Spotlight can never match. It studies your search queries and return results based on your selected choice. If you often open iTunes by entering `itu` as search query, Alfred  will rank iTunes higher than the rest of items in search result. In other word, Alfred can be trained.

But there is one flaw with this feature: the number of shortcuts is limited. When I use `em` for `Empty Trash` and `Ember`, the action is no longer guaranteed. Typing `em` and press `Enter` won’t always empty the trash, sometimes it launches Ember. I can type three letters — by using `emt` and `emb` —  to avoid this problem, but I prefer to keep the query short.

Luckily, Alfred’s search setting is also smart.

The default search setting is set to **fuzzy capital letters** that lets you search apps by its capital letters. You can search `DragonDrop` with `dd` or `ReadKit` with `rk`. This pattern makes creating a unique query for different apps a lot easier.

In my case where `Empty Trash` and `Ember` overlaps, I can’t use `eb` for `Ember` because there is no two capital letters in the app name. Another example is `Pixelmator` and `Pixa` where both use `pix` as query. Capital fuzzy matching is insufficient.

I need a setting that offers more flexibility.

Alfred’s **full fuzzy match from word boundary** is the solution for this problem. This simple change in search setting allows me to launch an app by typing any characters it contains. Compared to **fuzzy capital letters**, there is more choices for the queries in this mode.

Now I just need to type two letters for my most used apps:

- `pi` for Pixelmator
- `px` for Pixa
- `eb` for Ember
- `em` for Empty Trash
- `pv` for Preview
- `st` for Sublime Text 2
- `mw` for MoneyWell
- `ub` for Unibox
- `tm` for Terminal

This method has saved me time from defining custom shortcuts in workflows to launch apps.  Moreover, you can train Alfred to rank certain apps or folders higher with your queries, all without accessing preferences.

Maybe we haven’t reached the peak  to use apps with natural language, however, this simple yet effective method to customize apps behavior is definitely useful.