---
layout: post
title: Speed Up Your Mac Drastically
alias: post/58245260102
tags:
- os x
- osx
- mac
---
Among many configurations I’ve made, under the hood tweaks are rarely documented. I’ve written several guides to [prettify a download folder][3], or choose themes for Adium, yet not a single article on improving the performance of OS X.

[3]: http://sayzlim.net/clean-your-menu-bar-sweeten-download-stack/

It’s a perception of speed that shapes up your experience from using a Mac. OS X has a lot of subtle animations in order to guide the users. Some animations are too slow. In order to achieve what I call as optimized performance, you need to be able to distinguish the difference between useful and useless animations and adjust it accordingly.

### Disable Window Animation

The first and foremost animation you should disable is the window animation. It’s a scaling animation you see whenever you create a new window. You can actually switch from one window to another window immediately without waiting for the animation to finish. However, you’ll feel something is off when the animation is cut off in the middle. You can turn off the animation by entering the command below in Terminal:

	defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool NO

Enabling the animation window can be done by changing the value from NO to YES as shown below:

	defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool YES

### Speed Up Mission Control Animation

Mission Control is wonderful. It combines the advantages of Exposé and the Spaces together without adding additional complexity. Make this feature better by increasing the animation speed. The default animation speed value is 0.75 which you can change accordingly by entering command below into Terminal:

	defaults write com.apple.dock expose-animation-duration -float 0.12

I’ve tried several values and decided to use 0.12 because it’s the fastest value for my eyes to follow. If you’re not comfortable with Terminal, you can get [Lion Designer][6] which I’ve used to [change the background of Launchpad and Mission Control][5].

[5]: http://sayzlim.net/spice-up-os-x-mission-control/
[6]: http://www.moritzwette.com/liondesigner/

Those two options above doesn’t actually speed up your Mac in term of hardware performance. It’s more about leveraging existing features and eliminating redundant animations.