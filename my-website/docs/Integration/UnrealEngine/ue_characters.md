---
sidebar_position: 19
title: Using Your Characters
slug: /ue-characters
---	

# Using Your Characters

## Motion Capture

There are two methods to add motion capture for your character:

### Using Ctrl Rig

#### Using the Ctrl Rig provided by Dollars MoCap

If your character is based on the following skeletons, you can use the corresponding Ctrl Rig provided by Dollars MoCap to implement motion capture:

- MetaHuman

<iframe width="640" height="360" src="https://www.youtube.com/embed/LgHAZTLJ0Ns?si=9jfzE313srk2m9TZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Daz3D Genesis8 & 8.1

<iframe width="640" height="360" src="https://www.youtube.com/embed/tXToSJjUeQQ?si=jkbQB3LTZya5Pa66" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Character Creator

<iframe width="640" height="360" src="https://www.youtube.com/embed/NDslO7iYeto?si=HcyFICE6W6LivT6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Customizing Ctrl Rig Based on the Model Skeleton

If your character does not use the above skeletons, you can make the required Ctrl Rig.

- VRM Characters

<iframe width="640" height="360" src="https://www.youtube.com/embed/Sc2sk1hXN9c?si=YnoGr0ifz0iEHEhf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Any other characters

<iframe width="640" height="360" src="https://www.youtube.com/embed/fsNpU4sruSI?si=GywYrdof1zjxi00A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Using IK Rig

You can also use IK Rig to implement motion capture in Unreal Engine 5.4 or later versions.

<iframe width="640" height="360" src="https://www.youtube.com/embed/2s1lnaF3IwE?si=PaR8MwcWz_w8mXc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### How to Choose

1. Can you use the Ctrl Rig provided by Dollars MoCap?
   - Yes &rarr; Use it directly.
   - No  &rarr; Continue to check the Unreal Engine version.

2. Check Unreal Engine Version
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