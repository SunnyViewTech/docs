---
sidebar_position: 30
title: Multiplayer Networked MoCap
slug: /ue-network
---

# Multiplayer Networked MoCap

You can use Unreal Engine's Replication mechanism to achieve multiplayer networking across networks. This requires some modifications to the Dollars MoCap Unreal plugin. The following is a summary of these modifications using Unreal Engine's TPS (Third-Person Shooter) template as an example.

## Modifying the Character Blueprint

In the Character Blueprint, we will check whether the current instance is the local controller. If it is, we will spawn a DollarsReceiver.

![](../../img/2025_03_11_16_06_02-BP_ThirdPersonCharacter.png)

At the same time, we will add a DollarsMoCap structure to store the data obtained from the Receiver.

## Modifying the Character Animation Blueprint

In the Animation Blueprint, we will attempt to retrieve the DollarsMoCap structure from the Character Blueprint. This structure will be used in Control Rig, allowing it to control motion.

![](../../img/2025_03_11_16_08_56-ABP_Manny.png)

## Modifying the DollarsReceiver

In DollarsReceiver, we will add a Character Blueprint class variable. The data originally stored in DollarsMoCapActor will now be stored in the DollarsMoCap structure within the Character Blueprint.

![](../../img/2025_03_11_16_15_04-BP_DollarsReceiver.png)

After completing these steps, you can run the program to confirm that the character is spawned correctly and that motion capture is functioning.

## Setting Replication Properties

Finally, go back to the Character Blueprint and set the Replication properties of both the DollarsReceiver and the DollarsMoCap structure to Replicated. This will enable multiplayer networking.

![](../../img/2025_03_11_16_21_11-BP_ThirdPersonCharacter.png)

## Demo

<iframe width="640" height="360" src="https://www.youtube.com/embed/2_A57tHEn9k?si=9jfzE313srk2m9TZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Sample Project

https://drive.usercontent.google.com/download?id=1B7p1zdKil-Dcs9VHNhq-CGQI23gqbnZt&export=download&authuser=0

