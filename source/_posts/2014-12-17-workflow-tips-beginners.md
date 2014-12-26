---
layout: post
title: "Workflow Tips for Beginners"
date: 2014-12-17 14:32
description: "Meet the latest automation tool that can save you a lot of time on iPhone and iPad. Here is a few tips to get you started."
tags:
- "Workflow"
---

I’ve been tinkering with Workflow for the past few days to see how much tasks I can automate with it. Surprisingly only a few workflows I’ve created manage to stay in the setup. Since I’m also new to Workflow, I believe the problems I had while using this app can be a valuable lessons for those who are new to Workflow.

<!-- more -->

I won’t be covering an in-depth review of Workflow. You can understand how Workflow works from this [review by Federico Viticci on MacStories](http://www.macstories.net/reviews/workflow-review-integrated-automation-for-ios-8/ "Workflow Review: Integrated Automation for iOS 8 – MacStories"). What I’ll be covering in this guide is a few concepts you must understand to build effective and useful workflows to help you get more things done on iPhone or iPad.

[ ![Workflow Preview][113953] ](http://images.sayzlim.net/2014/12/workflow_lists.jpg "Workflow Preview")

[113953]: http://images.sayzlim.net/2014/12/workflow_lists.jpg "Workflow Preview"

Workflow is an automation tool for iOS. The concept is similar to Automator for OS X. You can run a series of actions to perform a task, such as retrieving the latest screenshot and save it to Dropbox, or you can send anything from share sheet as input before running these actions, such as resizing selected photo from Photos app.

While iOS 8 proves to be a major milestone for apps to work together, you need these apps to match the data type with the [extension points](http://sayzlim.net/ios-8-app-extensions-overview/ "Brief Overview of iOS 8 App Extensions - Sayz Lim") in order for sharing to work. In other words, unless the data type are supported by the apps, you won’t be able to send them directly from the source app.

The benefits with Workflow is you can process the incoming data type into another format before sending them out. For example, I can pull the title of the URL, combine the title with the clipboard, and convert the combined text as PDF before saving it to Evernote. Not only you’re not limited to the type of data, you can also retrieve value from multiple sources under one workflow.

Here is a few tips to help you build an effective workflow.

## Normal vs Action Extension

There are two types of workflow you can build. The first one is **Normal Workflow** which doesn’t require input beforehand. You can treat this type of workflows as a standalone app by placing them in Launch Center Pro or Home screen. Take the Tip Budget from the gallery as example. You simply run the workflow to count the tip you need to give.

The second type is **Action Extension Workflow**. You run this type of workflow from the share sheet in other apps. Here is the first concept you must remember: **workflow triggered from action sheet always receives input from sources** — URL in Safari, files in Dropbox, or text document in iA Writer Pro. This type of workflow saves you time by consolidating tasks from different apps into one screen, for example, send a page title and clipboard as a new note to a specific Evernote notebook.

[ ![Send as Highlight Workflow][113933] ](http://images.sayzlim.net/2014/12/workflow_highlight.gif "Send as Highlight Workflow")

[113933]: http://images.sayzlim.net/2014/12/workflow_highlight.gif "Send as Highlight Workflow"

Depending the type of tasks you want to do, you have to choose which type of workflow you want to build to prevent them cluttering Workflow share sheet. It’s better to limit the workflow to certain data type if your workflow can only process text and rich text document.

## The Core: Input and Result

Never drag an action into workflow without reading the input and result. Tap on the action icon to see the expected input and produced result. This simple habit can save you from scratching your head wondering why the workflow doesn’t work as expected.

Let’s say you want to get the title of URL which you want to use in your email subject. Before sending it into the **Input from Text** action, you must have **Get Name** action to retrieve the page title.

Sometimes input will decide the result of an action. For example, sending text result to **Send Email** action will fill the body with the text, meanwhile other type of result will be treated as attachments.

## Action Extension Starts with Input

Whenever you create **Action Extension Workflow** you always have an input. What exactly are those inputs? Like I’ve mentioned earlier, they can be photos, texts, or URLs. Here is the list of data type Workflow supports:

```
- Contacts          - Locations         - Rich text
- Dates             - Maps links        - Text
- Email addresses   - Media             - URLs
- Files             - PDFs
- Images            - Phone numbers
```

Workflow determines the type of input according to the source of share sheet. If you run the workflow from Photos app, the input will be `Images`. If you run the workflow from iA Writer Pro, the input will be `Text`.

## Input, Variable, Clipboard, and Ask When Run

Perhaps the most useful feature in Workflow is the ability to store input as variable which you can reuse in other part of actions. This opens up the combination of different type of inputs for a workflow. You set a variable by putting them right after the processed input. If you build an **Action Extension Workflow** that receives URL, you can add **Set Variable** action to store the URL into variable. The following example shows you an workflow that receives URL as input, retrieve the page title, and save it to variable named "Title".

[ ![Workflow Setting Variables][120202] ](http://images.sayzlim.net/2014/12/workflow_variables.jpg "Workflow Setting Variables")

[120202]: http://images.sayzlim.net/2014/12/workflow_variables.jpg "Workflow Setting Variables"

It’s recommended to start your workflow by saving the input you need into separate variables. For example, if I want share a song to Instagram, I’ll need two inputs:

- The Song title
- The Album Artwork

By saving these two inputs as variable, I can later use **Get Variable** to retrieve the album artwork, sending it to **Post to Instagram** action with custom caption including the "Title" variable.

You can also use the built-in clipboard variable to pass the clipboard into text field. **Ask When Run** is best used when the value is different every time you run a workflow.

## Quick Look and Alert for Debug

Building workflow means you need to keep testing and debugging to make sure the produced result is right. Fortunately, Workflow has a Quick Look which you can use to preview the result in each step before you continue to next action. It’s the easiest way to check workflows that have **Create New Note** without cluttering your Dropbox, Evernote, or  iCloud with wrong result. Leave a breakpoint with **Alert** action to stop the workflow after previewing result in Quick Look.