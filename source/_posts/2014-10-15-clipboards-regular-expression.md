---
layout: post
title: "Manipulate Clipboards with Regular Expression"
date: 2014-10-15 21:07
description: "Learn the basic regular expression and manipulate clipboards with Keyboard Maestro."
tags:
- "Keyboard Maestro"
---

One of the Keyboard Maestro’s feature that I didn’t mention in [building macro tips](http://sayzlim.net/building-keyboard-maestro-macros-tips "Building Keyboard Maestro Macros Tips - Sayz Lim") is the ability to search and replace clipboards with regular expression. What is regular expression and how does it help you to manipulate clipboards?

<!-- more -->

The common pattern to manipulate clipboards is the search and replace feature that lets you replace the clipboards without using text editor. But there is a limit of how much you can manipulate clipboards with only search and replace. This is where regular expression can solve the common obstacle we have in manipulating string: matching complex pattern.

## Understanding Regular Expression

Regular expression is a text matching technology. It’s the same as the **Find & Replace** feature you use in TextEdit. The only difference with regular expression is you can have more choices to match different text pattern.

We’ll be using [RegExr](http://www.regexr.com/ "RegExr: Learn, Build, &amp; Test RegEx") to test the regular expression in the example thorough this guide (feel free to experiment with the regular expression as you read each section). You may use the cheatsheet and examples on RegExr to help you understand regular expression syntax.

This guide addresses the basic of regular expression, and once you finish this, you should be able to write a decent regular expression to manipulate clipboards, extract the matched string, and assign it as variable in Keyboard Maestro.

## Pipe (|) for alternation

[ ![Regular Expression: Alternation][004104] ](http://images.sayzlim.net/2014/10/regex_alternation.jpg "Regular Expression: Alternation")

[004104]: http://images.sayzlim.net/2014/10/regex_alternation.jpg "Regular Expression: Alternation"

When you need to match one or more pattern, you can use pipe for alternation. You can have more than one pipe under one regular expression. If you want to match multiple email addresses, you can use `list@gmail.com|home@gmail.com|work@gmail.com` as expression.

## Parenthesis ( or ) for grouping

[ ![Regular Expression: Grouping][004123] ](http://images.sayzlim.net/2014/10/regex_grouping.jpg "Regular Expression: Grouping")

[004123]: http://images.sayzlim.net/2014/10/regex_grouping.jpg "Regular Expression: Grouping"

What if you want to match “My favorite fruit is banana” or “My favorite fruit is apple”? You can write the regular expression as `My favorite fruit is apple|My favorite fruit is banana` to match the sentence above, but you can also use parenthesis to group these two words together. The rewritten regular expression is `My favorite fruit is (apple|banana)`.

## Bracket ([ or ]) for character sets

[ ![Regular Expression: Sets][004133] ](http://images.sayzlim.net/2014/10/regex_sets.jpg "Regular Expression: Sets")

[004133]: http://images.sayzlim.net/2014/10/regex_sets.jpg "Regular Expression: Sets"

Character set matches any character inside the scope of brackets. Using `[fun]` as regular expression matches any text that has `f`, `u`, or `n`. The character set is useful when you need to match specific pattern that carries range of characters such as numbers or lowercase letters. If you want to match `id9829747`, you can simply write the regular expression as `id[0123456789]` or use the simplified version as `id[0-9]`. The use of dash in the bracket is known as character range. You can also use `[a-zA-Z]` to match lowercase and uppercase alphabet.

## Period (.) to match any character

[ ![Regular Expression: Period][004141] ](http://images.sayzlim.net/2014/10/regex_period.jpg "Regular Expression: Period")

[004141]: http://images.sayzlim.net/2014/10/regex_period.jpg "Regular Expression: Period"

Sometimes you want to match the words with slightly different variation. This regular expression `l..k` matches text that has any two characters between `l` and `k` such as `look`, `leek`, and `link`.

People often mistype my name Sutanto as Susanto. I can use this regular expression `su.anto` to match any incoming emails that contains Sutanto, Sumanto, Susanto, with single expression instead of using alternation.

## Asterisk (*) and Plus Sign (+) for repetition

Asterisk and plus sign are quantifier. They determine the number of times precedented pattern should repeat itself. You‘ll find yourself using it along with period to match long pattern such as URL, sentence, or paragraph.

Asterisk matches the precedented character, character set, or group zero time or more. The regular expression `run*ing` marks the precedented character `n` as optional, but still matches the text that carries the character more than once such as `ruining` or `runnnnning`.

Plus sign matches the precedented character, character set, or group once or more. Replacing the asterisk in the previous regular expression into `run+ing` marks the precedented character `n` as necessary. The new regular expression will only match `runing` or `running`, but not `ruining`.

[ ![Regular Expression: Repetition][004150] ](http://images.sayzlim.net/2014/10/regex_repetition.jpg "Regular Expression: Repetition")

[004150]: http://images.sayzlim.net/2014/10/regex_repetition.jpg "Regular Expression: Repetition"

Keyboard Maestro has a feature to search clipboard by regular expression and assign it as variable. Combining quantifier lets you extract part of text which you can use as variable or combine it into different clipboard. Let’s say I want to extract the name of the application from:

	https://itunes.apple.com/us/app/dash-docs-snippets/id458034879

I can write a regular expression `/app/.+/` to get `/app/dash-docs-snippets/`. I can clean up the extracted clipboard by replacing the initial `/app/` and ending `/` with empty character. The end result will be `dash-docs-snippets` which I can append as campaign term for tracking purpose.

## Caret (^) to match the beginning of line

[ ![Regular Expression: Caret][004202] ](http://images.sayzlim.net/2014/10/regex_caret.jpg "Regular Expression: Caret")

[004202]: http://images.sayzlim.net/2014/10/regex_caret.jpg "Regular Expression: Caret"

Caret is useful when you’re running change to the list of line where you want to extract part of the text from the beginning of line and leave the rest of text intact. I used to copy description from Excel spreadsheet which contains a lot of description with duplicate apostrophe at the beginning and end of line like this one:

> """""Somewhere mine is not working", she said."""""

I want to clean up the duplicate apostrophe. Using caret to mark the beginning of the line, I write this regular expression `^""+` to match description that has more than two apostrophes in the beginning of the line. Once detected, I just need to replace it with single apostrophe which turns the clipboard into:

> "Somewhere mine is not working", she said."""""

## Dollar Sign ($) to match end of line

[ ![Regular Expression: Dollar Sign][004213] ](http://images.sayzlim.net/2014/10/regex_dollar_sign.jpg "Regular Expression: Dollar Sign")

[004213]: http://images.sayzlim.net/2014/10/regex_dollar_sign.jpg "Regular Expression: Dollar Sign"

Following the previous example, the end of sentence also has duplicate apostrophes. I can use dollar sign to match only the end of sentence using this expression `""+$`.

You can combine these two expressions into one with alternation which is `^""+|""+$` and replace detected text with a single apostrophe. Run the macro and I‘ll have a cleaned up clipboard as following:

> "Somewhere mine is not working", she said."

## Backslash (\\) to escape special characters

[ ![Regular Expression: Backslash][004227] ](http://images.sayzlim.net/2014/10/regex_backslash.jpg "Regular Expression: Backslash")

[004227]: http://images.sayzlim.net/2014/10/regex_backslash.jpg "Regular Expression: Backslash"

The most common regular expression method to escape special character that I’ve listed here is prepending it with backslash (\\). For example, when you need to regular expression to match period, you can enter the expression as `\.`. This is useful when you need to match URL or sentence that carries period within.

Here are some common special characters you’ll often use in matching text.

- `\n` matches new line
- `\t` matches tab
- `\r` matches carriage return

## Conclusion

This guide merely scratches the surface of regular expression that deals with the common clipboard manipulation. The point for me to write this guide is to help you getting started using **Search Clipboard with Regular Expression** action in Keyboard Maestro. With regular expression, you have more choices when dealing with clipboards. I hope you can create some awesome macros with this new knowledge.