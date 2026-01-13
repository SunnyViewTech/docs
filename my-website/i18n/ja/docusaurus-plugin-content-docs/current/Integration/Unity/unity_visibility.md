---
sidebar_position: 15
title: Tracking Status
slug: /unity-visibility
---

# Actor Tracking Status

You can check the tracking status by retrieving the **MoCapVisibility** component from the **DollarsMoCap** prefab,

![](../../img/2024_12_18_11_24_54.png)

and getting the value of **VisibilityHead** to determine if an actor is being tracked.

![](../../img/2024_12_18_11_28_02.png)

If an actor is being tracked, the value is usually greater than 0.95.

In addition to **VisibilityHead**, **MoCapVisibility** also contains the following tracking values, which you can use as needed,

- VisibilityLeftHand

- VisibilityRightHand

- VisibilityHip

- VisibilityLeftLeg

- VisibilityRightLeg