---
sidebar_position: 60
title: Using the API
---

# Using the API

You can use the OSC protocol to communicate with the MOTS front end to control the character's movements.

## OSC Command

|address|parameter|description|
|---|---|---|
|/dollars/generate|string| string is the description of the action, in English.|

## Port

MOTS frontend listens to port 4999 by default.

You can change it in Settings, after that you need to restart MOTS front end to make the change effective.

![](../img/2024_01_19_11_55_02-Dollars_MOTS.png)

## Sample Projects

### OSC sample

https://github.com/SunnyViewTech/MOTS-OSCSample

Includes Python, UE, and Unity implementations.

### Using voice to control actions

https://github.com/SunnyViewTech/MOTS-VoiceCmdSample

Contains an English speech examples using the Microsoft Azure API and OSC protocol to control the MOTS front-end, as well as a Chinese speech examples using Baidu for speech recognition, and Chinese to English translation.
