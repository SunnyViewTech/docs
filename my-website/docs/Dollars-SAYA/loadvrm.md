---
sidebar_position: 30
title: Load VRM
---

# Load VRM

## What Loading a VRM Does

By default, SAYA solves motion based on the body proportions of the built-in Dollars MoCap model. If your character differs significantly from the built-in model in proportions such as shoulder width and arm length, the motion may be off. For example, in poses that require precise alignment, such as pressing both hands together, the hands may not meet correctly or may even clip into each other.

![](../img/2026.08.19_11.30.png)

In addition, if your character's waist height differs significantly from the built-in model, foot placement may be off, causing the feet to sink into the floor or float above it.

![](../img/2026_10_17_22_13_27.png)

After you load your VRM model, SAYA solves motion based on that model's bone proportions, so the motion fits your character's own body shape and reduces misaligned hands, clipping, and foot placement problems.

![](../img/[2026.08.19_11.30.35].png)

![](../img/2026_10_17_22_16_56.png)

## Steps

1. Transfer your character's VRM file to your device, for example via AirDrop, cloud storage, or a USB cable.
2. In SAYA, tap the button below and choose your VRM in the dialog.

![](../img/2026_08_19_10_48_22-SAYA2.png)

Once loaded, the VRM will load automatically every time SAYA starts.

:::info

Loading a VRM only affects the output of the Unity (VMC) protocol. Other protocols are not affected.

:::
