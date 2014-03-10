---
layout: post
title: "Organize 1Password Accounts With Vaults"
date: 2014-01-11 22:54
description: Manage 1Password with multiple vaults and keep different accounts and passwords in separate location.
tags:
- 1password
- review
- declutter
---

One of the problems after using 1Password for several years is _all_ sensitive information are stored in there. Yes, from the Windows Live account I’ve never signed in, my brother’s Facebook recovered password that I’ve saved just in case he forgets again, and the router password I’ve configured for my sister. It’s no longer just about my accounts.

Hundred of accounts are stored in my 1Password  Primary Vault. I skim through them,  counting the number of accounts I don’t use in the past year, and in the midst of my reading time, I decide to clean up this old security vault.

I’ve been looking for a better way to manage my 1Password saved items. The first step is to have separate storage for different type of information.

1Password 4 introduces a new storage system known as [multiple vaults][1811-001]. This new feature allows me to keep my personal and business information separated.

I used to distinguish items under one service by including the username in the  title — like  "Facebook | Sayz Lim" and "Facebook | Brother Who Doesn’t Remember His Password".  By using  multiple vaults, I can create a vault designed for the people I’ve helped to create their accounts.

There are four vaults that I recommend each 1Password user to have. The default one,  called Primary Vault, along with Business Vault are must-have.  Additionally, we’ll create an Archive Vault to archive inactive accounts, and Family Vault for the family who can’t store their own information properly.

## Primary Vault
Like how you used to store items in 1Password, Primary Vault is used to store all your personal information. All saved items in here should belong  to you and *only* about you. It should be personal, which mean, your business email address shouldn’t be found in this vault.

## Business Vault
Business Vault, on the other hand, is where you store all information related to your business. You can also replace Business Vault with your employer’s company name.  If you’re in a team that shares same account, it’s recommended that you create a separate vault where you can share the vault with each other. You can later [sync the shared vault][1811-002] to keep everyone updated.

## Archive Vault
Audit all your saved login items. Sven Fechner on his blog, simplicitybliss, [has written a detailed tutorial][1811-003] to create smart folders that filter out saved logins that are not used in the past year. Just like him, I recommend you to either delete the unused accounts or move them to this vault.

<del>1Password hasn’t built a feature to move saved items between vault. One way to move the saved items is by exporting the selected items to desktop, followed by deleting the items from the original vault. Once you’ve verified the exported items are correct, switch to your destination vault and import the items into the vault.</del>

> %update%
> **Update 2014-03-10:** 1Password has the [feature to copy items between vaults](https://twitter.com/1Password/status/443066610715082752) all this time. You can find the option in **Item » Share » (Your Vault Name)**. Make sure to the delete the items in the original vault to prevent duplicate.

## Family Vault
Welcome home superhero! This place is where all the forgotten passwords shall be recovered. This is also one of the reasons why your family treats you as the computer genius. Hurry, move all their accounts to this vault and use the naming convention I’ve shown in the fifth paragraph.

Switching between vault can be troublesome. To make it easy for you, assign a shortcut to call 1Password mini and press `Command+Comma` to show all the available vaults. It’s a great way to change between mode, like only use Business Vault during working hour, or Primary Vault once you’ve returned to home.

[1811-001]: http://learn.agilebits.com/1Password4/Mac/en/Features/multiple-vaults.html "Multiple Vaults - AgileBits"
[1811-002]: http://blog.agilebits.com/2013/11/13/1password-tip-how-to-create-share-a-vault-with-family-or-coworkers-mac/ "1Password tip: How to create, share a vault with family or coworkers ..."
[1811-003]: http://simplicitybliss.com/blog/your-annual-1password-clean-up "Your Annual 1Password Clean-Up – SimplicityBliss"
