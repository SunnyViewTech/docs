---
sidebar_position: 20
title: Facial Capture Using LiveLinkFace Method
slug: /ue-livelinkface
---

# Facial Capture Using LiveLinkFace Method
:::info

The following Dollars MoCap products support facial capture using the LiveLinkFace method

- Dollars MONO (since v.240711)
- Dollars EGAO (since v.240812)
- Dollars NVIS (since v.240812)

:::

For the Dollars MoCap products that support the Live Link Face method, you can enable the corresponding switch in the settings. You can also modify the port used according to your needs.

![](../../img/2024_08_13_18_50_08-Dollars_EGAO.png)

After enabling Live Link for Face, you should see a Live Link subject named Dollars MoCap in the Live Link window of the Unreal Editor.

![](../../img/2024_08_13_18_55_36.png)

:::warning

If you don't see the Dollars MoCap subject in the editor, please ensure that only one Unreal project is open.

:::

After that, you can select Dollars MoCap as the facial capture input in the animation blueprint.

The following is an example of MetaHuman.

![](../../img/2024_08_13_18_56_11.png)
