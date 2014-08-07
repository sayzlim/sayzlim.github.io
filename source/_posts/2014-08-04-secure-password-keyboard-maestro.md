---
layout: post
title: "Secure Your Password with Keyboard Maestro"
date: 2014-08-04 08:00
description:  "Strong passwords are long. This macro will securely address the problem of typing long password in a dialog form that doesn’t accept paste command."
tags:
- keyboardmaestro
---

I recently wrote a guide to [managing passwords online with Mac](http://sayzlim.dev/digitalshelf/passwords/ "Manage Your Passwords Online - Sayz Lim"). If you’ve read them, you should notice that stronger passwords are long, and having to type them without doubt will cause more mistakes. This Keyboard Maestro macro will address the problem by letting you enter password with a single key press.

<!-- more -->

In the short guide I mentioned above, I suggested to have at least three master passwords.

> Create a strong memorable master password for these three accounts: Apple ID, Dropbox, and 1Password.

Strong passwords are long. It takes time to memorize them. Not to mention the effort required to type them when you want to unlock 1Password. You can store them in clipboard or create a macro that types out those passwords. But this practice breaks the rule of keeping your password secured which is: **never store your passwords in plain text**.

Fortunately, Keyboard Maestro can pull the value from Keychain Access and store them as variable without exposing them as plain text. It means that even if other people can open Keyboard Maestro, they won’t be able to see the value in the stored variable. By storing the passwords in Keychain, they also won’t be able to use the macro and type out the password before they unlock the Keychain.

> %sidenote%
> **New to Keychain Access?** Passwords you’ve entered in apps, like the mail accounts you save in Mail for OS X, are usually stored in Keychain Access. The synchronized items between Safari for iOS and OS X can also be found in a Keychain called iCloud in the sidebar.

## Create New Keychain Item

[ ![Create New Keychain Item][195935] ](http://images.sayzlim.net/2014/08/keyboard_maestro_keychain.jpg "Create New Keychain Item")

[195935]: http://images.sayzlim.net/2014/08/keyboard_maestro_keychain.jpg "Create New Keychain Item"

We’re going to do create a new password item for Keyboard Maestro. You can create a new keychain, but the one we’ll use is the default `login` keychain in the sidebar. Select the keychain, and choose `File » New Password Item…` from menu bar. Here’s a few things you should pay attention.

- **Keychain Item Name**: This is the name of the item you’ll pull with Keyboard Maestro later. Make sure to note it down. Prefix it with `KM` to make sure it’s identifiable.
- **Account Name**: The name of the account for this keychain item. You can enter this with any name you want, but I prefer to use the computer username.

Repeat the steps above to create all the passwords you need. In my case, I would have three master passwords stored in the `login` keychain.

## Building Password Macros

Now let’s build our macros! The macro contains two actions. The first one pulls the value from Keychain Access and store it in a temporary variable called `Password`.  The second action will type out the value stored in `Password` variable. Follow the screenshot below and replace them with the value you’ve created in Keychain Access.

> %sidenote%
> **About Password Variable — [Keyboard Maestro](http://www.keyboardmaestro.com/documentation/6/variables.html "Keyboard Maestro 6 Documentation: Variables"):** Variables with names that start or end with “Password” or “PW” are considered passwords – their values will not be stored (except in memory) and they cannot be read by shell scripts or AppleScripts.

[ ![Enter Password in Keyboard Maestro Macro][200025] ](http://images.sayzlim.net/2014/08/keyboard_maestro_password_macro.jpg "Enter Password in Keyboard Maestro Macro")

[200025]: http://images.sayzlim.net/2014/08/keyboard_maestro_password_macro.jpg "Enter Password in Keyboard Maestro Macro"

## Naming Macros Tips

Here is a quick tip when it comes to naming macros. If few macros share the same trigger, such as using the same hot key combination, Keyboard Maestro will offer you to choose which macro to run.  There are two quick ways to choose from the available macros. The first one is to use the number from 1–9 to choose the macros in the list. The second is to type the greyed out character in the macros. In the screenshot below, I name the macros by appending the first character of the passwords to the  word `Enter`.

[ ![Keyboard Maestro Shortcut][200050] ](http://images.sayzlim.net/2014/08/keyboard_maestro_shortcut.jpg "Keyboard Maestro Shortcut")

[200050]: http://images.sayzlim.net/2014/08/keyboard_maestro_shortcut.jpg "Keyboard Maestro Shortcut"

Apparently, it takes more than one stroke, but it’s definitely more secure compared to storing all the master passwords in plain text. [Contact me](http://sayzlim.net/contact "Contact - Sayz Lim") if you have any questions about this macro.