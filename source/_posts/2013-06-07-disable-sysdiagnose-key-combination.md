---
layout: post
title: Disable Sysdiagnose Key Combination
alias: post/52388484975
tags:
- osx
- os x
- mac
---
I’ve learned many tips to improve my experience with OS X for the past three months. The most useful one, which I picked from Brett, is [turning `Caps Lock` into “Hyper” modifier key][1]. In his post, Brett also outlines how he remaps hitting `Caps Lock` into `Escape` key when it’s not used as modifier. Despite trying to follow him using `Caps Lock` as `Escape` key, I gave up. There are way too many escape mistakes.[^1]

[1]: http://brettterpstra.com/2012/12/08/a-useful-caps-lock-key/

I use [nVALT][6] to take notes. A global shortcut is required to toggle nVALT window quickly. **`Option + E`** used to be the key. You can easily find that shortcut being used across applications. As the result, there are some shortcuts being rendered useless. Hyper modifier key solves this problem.

[6]: http://brettterpstra.com/projects/nvalt/

The new modifier key prevents the common conflicts between app specific shortcuts with global shortcuts. There are many apps that sit in menu bar these days which allows you to assign shortcut to toggle them. These are the list of apps I’ve assigned with my own custom shortcuts.

- **`Hyper + B`** to toggle Bartender Bar
- **`Hyper + C`** to toggle Cobook
- **`Hyper + D`** to toggle Delibar
- **`Hyper + E`** to toggle nVALT
- **`Hyper + F`** to toggle Fantastical
- **`Hyper + Space`** to toggle Keyboard Maestro Macro Trigger

However, there is one small problem: you might trigger the sysdiagnose command accidentally. Finder will open the sysdiagnose folder, well, diagnose your system, and zip the log results. Worst, sysdiagnose will drive the CPU performance crazy in order to diagnose your system.

Apparently, the shortcut can be easily triggered.[^2] You can see the description of sysdiagnose by typing the command below into Terminal.

	man sysdiagnose

Well, to save your time.

> sysdiagnose can be triggered upon pressing a special key chord; this is currently **`Control-Option-Command-Shift-Period`**.

The only way I have figured so far to prevent OS X from triggering this special key chord is by remapping the Period key. I’m borrowing [Steve Losh’s tutorial][2][^3] as a guide in creating two mapping rules for [KeyRemap4MacBook][4]. I assume you’ve installed KeyRemap4MacBook since we’ll need it to map the `Period` key.

[2]: http://stevelosh.com/blog/2012/10/a-modern-space-cadet/#better-shifting
[4]: https://pqrs.org/macosx/keyremap4macbook/

![ [Open “private.xml” file][] ](http://images.sayzlim.net/2013/06/keyremap4macbook_private.jpg "Open “private.xml” file")

[Open “private.xml” file]: http://images.sayzlim.net/2013/06/keyremap4macbook_private.jpg

Run KeyRemap4MacBook and navigate to Misc & Uninstall tab. Choose “Open private.xml” under the Custom Setting. It’ll show you the private.xml. Open the file. Copy the code below and put it under the *root* tag.

	<item>
        <name>Disable Sysdiagnose DOT Key</name>
        <appendix>Disable Sysdiagnose Key</appendix>
        <identifier>private.disable_sysdiagnosedot</identifier>
        <autogen>
            --KeyToKey--
            KeyCode::DOT,
            ModifierFlag::OPTION_L | ModifierFlag::SHIFT_L | ModifierFlag::CONTROL_L | ModifierFlag::COMMAND_L,
            KeyCode::VK_NONE
        </autogen>
    </item>

    <item>
        <name>Disable Sysdiagnose COMMA Key</name>
        <appendix>Disable Sysdiagnose Key</appendix>
        <identifier>private.disable_sysdiagnosecomma</identifier>
        <autogen>
            --KeyToKey--
            KeyCode::COMMA,
            ModifierFlag::OPTION_L | ModifierFlag::SHIFT_L | ModifierFlag::CONTROL_L | ModifierFlag::COMMAND_L,
            KeyCode::VK_NONE
        </autogen>
    </item> 

Run KeyRemap4MacBook again. This time, open Change Key tab and choose ReloadXML. You should see two new remapping rules similar to the screenshot below. Activate them.

![ [Activate new mapping rules][] ](http://images.sayzlim.net/2013/06/keyremap4macbook_activate.jpg "Activate new mapping rules")

[Activate new mapping rules]: http://images.sayzlim.net/2013/06/keyremap4macbook_activate.jpg

The rules above prevent the combination between left side modifier with Period and Comma. Try to hit `Hyper + Comma` and `Hyper + Period`. It should do nothing, but you can still type `Shift + Comma` and `Shift + Period`.

The new remapping rules should solve the problem with sysdiagnose randomly popping out from nowhere. [Let me know][5] if it works for you.

[5]: /contact

[^1]: There are many times the app exit full screen when I’m just getting into the flow.

[^2]: Before solving this problem, I can end up with at least one sysdiagnose file every day.

[^3]: I’ve managed to train my muscle memory to use Left Shift and Right Shift. It lifts the strains put on your fingers.