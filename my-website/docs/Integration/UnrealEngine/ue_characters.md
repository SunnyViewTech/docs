---
sidebar_position: 20
title: Using Your Characters
slug: /ue-characters
---	

# Using Your Characters

## Motion Capture

Dollars MoCap adds motion capture to your character through two plugins, **Live Link** and **OSC**. The OSC plugin includes two methods, Ctrl Rig and IK Rig.

### Using the Live Link Plugin

If your version supports Live Link (MONO v.260623 and above, and Unreal Engine 5.3 and above) and you are familiar with Unreal's IK retargeting, we recommend using this method first. For detailed steps, see [Using the Live Link Plugin](/ue-livelink).

If you are not yet familiar with IK retargeting, Epic's official documentation [Runtime IK Retargeting](https://dev.epicgames.com/documentation/unreal-engine/runtime-ik-retargeting-in-unreal-engine) is a good place to start.

The following video demonstrates the full workflow using a MetaHuman character.

<iframe width="640" height="360" src="https://www.youtube.com/embed/LwfCuZ-sicc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Using the OSC Plugin

The OSC plugin provides the following two methods.

#### Using Ctrl Rig

##### Using the Ctrl Rig provided by Dollars MoCap

If your character is based on the following skeletons, you can use the corresponding Ctrl Rig provided by Dollars MoCap to implement motion capture:

- MetaHuman (downloaded via Quixel Bridge)

<iframe width="640" height="360" src="https://www.youtube.com/embed/LgHAZTLJ0Ns?si=9jfzE313srk2m9TZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- MetaHuman (created locally in 5.6 and above)

<iframe width="640" height="360" src="https://www.youtube.com/embed/TD-0HCf3Viw?si=YVE5MYdrh057aWl-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Daz3D Genesis8 & 8.1

<iframe width="640" height="360" src="https://www.youtube.com/embed/tXToSJjUeQQ?si=jkbQB3LTZya5Pa66" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Character Creator

<iframe width="640" height="360" src="https://www.youtube.com/embed/NDslO7iYeto?si=HcyFICE6W6LivT6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##### Customizing Ctrl Rig Based on the Model Skeleton

If your character does not use the above skeletons, you can make the required Ctrl Rig.

- VRM Characters

<iframe width="640" height="360" src="https://www.youtube.com/embed/Sc2sk1hXN9c?si=YnoGr0ifz0iEHEhf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Any other characters

<iframe width="640" height="360" src="https://www.youtube.com/embed/fsNpU4sruSI?si=GywYrdof1zjxi00A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Using IK Rig

You can also use IK Rig to implement motion capture in Unreal Engine 5.4 or later versions.

<iframe width="640" height="360" src="https://www.youtube.com/embed/2s1lnaF3IwE?si=PaR8MwcWz_w8mXc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### How to Choose

1. Does your Dollars MoCap product support Live Link, and is Unreal Engine 5.3 or above?
   - Yes &rarr; We recommend the Live Link plugin.
   - No  &rarr; Use the OSC plugin, then continue.

2. (OSC plugin) Can you use the Ctrl Rig provided by Dollars MoCap?
   - Yes &rarr; Use it directly.
   - No  &rarr; Continue to check the Unreal Engine version.

3. Check Unreal Engine Version
   - 5.4 or later &rarr; Use IK Rig.
   - 5.3 or earlier &rarr; Customize Ctrl Rig based on the skeleton.

## Facial Capture

### Live Link for Face

(Starting at 2:22)

<iframe width="640" height="360" src="https://www.youtube.com/embed/LgHAZTLJ0Ns?si=elYbzTNnBaqsF-hx&start=142" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Modify Curve

(Starting at 2:00)

<iframe width="640" height="360" src="https://www.youtube.com/embed/0YSOR2s_rko?si=bJv6RWq7aZpj2nYh&start=119" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### How to Choose

Does the version of Dollars MoCap program you are using support Live Link for Face? ([Check supported versions](/ue-livelinkface))
   - Yes  &rarr; Use Live Link for Face.
   - No  &rarr; Use Modify Curve.