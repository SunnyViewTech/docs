---
sidebar_position: 30
title: 📢 FAQ
slug: /unity-faq
---	

# FAQ

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Character floating in Unity scene.

If you find that you have moved a short distance in front of the camera, and Dollars MONO has recognized your movement, but in the Unity scene, your virtual character does not move, or moves a long distance, as shown in the image below,
![](../../img/unityfaq1.gif)

This is usually because the Scale of the Hips bone of the virtual character, or its parent nodes, is not set to 1.

For example, in the image below, the Scale of the Armature parent node of the Hips bone is 18.1.

![](../../img/2023_11_13_17_35_49.png)

In this case, we can change the Scale of the Armature to 1.

![](../../img/2023_11_13_17_41_08.png)

At the same time, in the model's Import Settings, change the Scale Factor to the earlier 18.1 and then Apply.

![](../../img/2023_11_13_17_41_40.png)

Afterwards, you will see that the virtual character can move normally.

![](../../img/unityfaq2.gif)
