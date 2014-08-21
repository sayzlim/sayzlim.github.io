---
layout: post
title: "How to Change Übersicht Widgets Position"
date: 2014-08-19 11:30
description: "Short guide of arranging Übersicht widgets position for users who have never written a single line of CSS before."
tags:
- "Ubersicth"
---

Unlike Geeklets which you can drag around, the only way to modify Übersicht widgets position is by editing the CSS inside the script. This is the guide for you who want to change the widgets position but never write a single line of CSS.

<!-- more -->

[Download this inspirational quote widget](https://raw.githubusercontent.com/felixhageloh/uebersicht-widgets/master/inspirational-quote/inspirational-quote.widget.zip "Inspiration Quote Widget"). We’re going to use this widget as an example.

Open the `index.coffee` file inside the `inspirational-quote.widget` folder with your preferred text editor. Take a look at each non-indented line in the file. You should be able to find these five sections that describe Übersicht’s basic widget structure.

``` coffeescript
command: # This is the command executed in shell.
refreshFrequency: # This is how often the widget is refreshed in milliseconds.
style: # This is the part that styles the rendered layout.
render: # This is what is shown on desktop.
update: (output, domEl) -> # This will update the rendered layout every time the widget is refreshed.
```

Unless you’re developing your own widgets, you only need to fiddle with the `style` and `render`  sections.  Let’s take a look at the `style` section.

``` coffeescript
style: """
  bottom: 0px
  right: 0px
  color: #fff
  font-family: Helvetica Neue

  .output
    padding: 5px 10px
    width: 300px
    font-size: 20px
    font-weight: lighter
    font-smoothing: antialiased

  .author, .example, .example-meaning
    text-transform: capitalize
    font-size: 14px
  .author
    text-align: right
"""
```

Content for `style` section starts and ends with `"""`. Editing the content in this section will affect widget appearance. But with these many lines as content, which value must you change?

First, we have to identify the CSS for widget’s main **block — the container or wrapper of elements**. You can tell whether a CSS is for the main block from the level of indentation. The first level indentation right after `style:"""` is where you can modify or add new properties.

If I extract only the first indentation level content from `style` section, I’ll get the snippet below:

``` coffeescript
style: """
  bottom: 0px
  right: 0px
  color: #fff
  font-family: Helvetica Neue
```

The `bottom`, `right`, `color`, and `font-family` are called **properties**. These properties describe widget’s main block style. You can change the position and appearance of the widget by modifying the value on the right side. There are a lot of CSS properties you can use, but for positioning, we’re going to take a look at `top`, `right`, `bottom`, and `left` properties.

The style above tells Übersicht to put inspirational quote widget `0px` from the bottom edge, and `0px` from the right edge. Try to change the value and see if the widget changes position.

You can also use percentage as the value if you prefer the widget adapt to the screen size. The code below will place the widget 5% from the bottom edge, and 10% from the right edge of the screen.

``` coffeescript
style: """
  bottom: 5%
  right: 10%
  color: #fff
  font-family: Helvetica Neue
```

Make sure the main block doesn’t have opposite properties. Avoid having `top` and `bottom`, or `left` and `right` properties together. The easiest way to prevent mistakes is by only using `top` and `left` properties for all widgets.

You can also center the widget perfectly on all screen size with this method: set `left` property value to `50%` and the `margin-left` property value to the half of widget’s total width in negative.

``` coffeescript
style: """
  left: 50%
  margin-left: -160px
  color: #fff
  font-family: Helvetica Neue
```

You can find the total width by summing width, left and right padding property value. These properties are available under `.output` where `width: 300px` and `padding: 5px 10px`.

In CSS, there is a way to define padding in one line under this format: `padding: <top> <right> <bottom> <left>`. When `<bottom> <left>`  are undefined, padding will use the same value as the opposite direction. So the padding from the code above results in `padding: 5px 10px 5px 10px`.

By summing up the width and padding, you get `300px+10px+10px` of total `320px` which you divide by half results in `160px`.

There is a lot HTML and CSS terms I deliberately didn’t include in this guide because I’m afraid it might confuse a beginner. [Feel free to contact me](http://sayzlim.net/contact "Contact - Sayz Lim") if you have any questions or problems.