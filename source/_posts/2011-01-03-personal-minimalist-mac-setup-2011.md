---
layout: post
title: Personal Minimalist Mac Setup 2011
description: The setup I’ve made for my Mac in the year of 2011.
tags:
- mac
---
Embracing minimalism is the path to stay focused. Embedding minimalism approach in the gadget you use is often misunderstood with removing everything to a plain white paper. [Know your needs][1] is the first step have a minimalist setup. This post reflect my implementation of minimalist approach for my Mac setup this year.

I have made several change for the system preferences. Some of them to disable the services I never use.

The first thing I change is the Appearance color and highlight color to Graphite. And I change all the number of recent items to “None”. The Desktop and Screen Saver remain the same, except that I disable the Translucent menu bar.

The dock position is now on the left bottom side. I used to have them at the bottom, but now I have them pinned on the left side. You can also have this effect by typing the line below into terminal:

	defaults write com.apple.dock pinning -string end

To gain more screen space, I set the Dock to automatically hide itself. While the Dock is a nice indicator for the running applications, I don’t see the need to have them on screen all the time. I also disable the opening applications animation.

Expose and Spaces is the most amazing feature in OS X. I enabled them the first year of using Mac. After a while, I realize that I don’t need it very much. The only setting I have them enabled are the Active Screen Corners where All Windows for the upper left and Desktop for the upper right.

As for Language and Text, I remove all the language except English. I never enable the input menu in menu bar and only enable the language I always use. There is only English in input sources. I will have Chinese as one of my input sources one day. Yes, I will.

Snow Leopard has some new configuration in security panel. I set my Mac require password to login after 1 hour and disable automatic login for security issue. Of course, I let the Firewall turned on. The other setting are left unticked. Untick “Use secure virtual memory” if you’re sure you won’t get hacked because it gives a little performance boost. Only do it when you know what you are doing.

I don’t use Spotlight anymore since I have Alfred. So I disable all the setting in Spotlight. There is always a [reason][2] for me to give up certain feature.

CDs and DVDs? Ignore. Please remove it for the next Mac generation Mr. Steve Jobs.

No MobileMe. I delete all the list on Network except the AirPort because I rarely bring my MacBook out. And I don’t use cable when I go out anyway. Bluetooth is disabled since I don’t use it. Of course, I turn off all the service at Sharing.

Since I know what I’m doing. There is no need to create a separate administrator account. There is only one account which is mine. Having the guest account disabled ensures that nobody can access your Mac. Have only essential apps included in the “Login items”. Remove all the services you don’t use everytime you turn on your Mac.

To sum up this post, remove and disable unnecessary.

[1]: http://sayzlim.net/minimal-living-with-macbook "Minimal Living with MacBook | Sayz Lim"
[2]: http://sayzlim.net/alfred-app-vs-spotlight "Alfred App vs Spotlight | Sayz Lim"