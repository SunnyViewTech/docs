---
sidebar_position: 70
title: FAQ
slug: /unity-faq
---	

# FAQ

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Character Floating in Unity Scenes

If you find that after moving a short distance in front of the camera, Dollars MONO has recognized your movement, but in the Unity scene, your character either does not move or moves a disproportionately long distance (as shown in the image below), this issue is usually caused by the scale of the Hips bone or its parent nodes not being set to 1.

![](../../img/unityfaq1.gif)

For example, in the image below, the Scale of the Armature parent node of the Hips bone is 18.1.

![](../../img/2023_11_13_17_35_49.png)

In this case, we can change the Scale of the Armature to 1.

![](../../img/2023_11_13_17_41_08.png)

At the same time, in the model's Import Settings, change the Scale Factor to the earlier 18.1 and then Apply.

![](../../img/2023_11_13_17_41_40.png)

After making these adjustments, the character should move normally in the Unity scene.

![](../../img/unityfaq2.gif)
