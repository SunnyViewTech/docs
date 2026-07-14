---
sidebar_position: 50
title: Program Options
className: translation-complete
---	

# Program Options

Most of the options in the program are self-explanatory. The following are some that require additional clarification.

## Upper Arm Span

![](../img/2026_01_04_14_53_192.png)

Please enter the horizontal distance between the left and right UpperArm bones (not the shoulders) of the model you plan to use for final display.

Due to potential tracking inaccuracies, it is recommended to slightly increase this value for better results.

The default value is 0.376, which corresponds to the UpperArm distance of the Dollars MoCap avatar.

## Eye Rotation Range

Some models' eyes cannot be driven by ARKit's eye BlendShapes. For these models, you can use the VMC data of the eye bones to control eye rotation instead, and set the horizontal and vertical ranges for each model.

![](../img/2026-07-14_13-59-11-6762.jpg)

To find the range values, rotate the model's eye bones to the limit position on one side and use the angle at that point.

For example, the horizontal range of the following model can be set to 12 degrees.

![](../img/2026-07-14_14-40-27-459.jpg)

The vertical range can also be set to 12 degrees.

![](../img/2026-07-14_14-40-27-4592.jpg)

For the following model, the horizontal range can be set to 30 degrees.

![](../img/2026-07-14_14-40-27-4593.jpg)

And the vertical range can be set to 20 degrees.

![](../img/2026-07-14_14-40-27-4594.jpg)

Note that the orientation of the eye bones follows the VRM standard.

You can usually also adjust the range on the receiving side. The following uses Warudo as an example.

![](../img/2026_07_14_14_52_40.png)

## inZOI Optimization

It is recommended to enable this option when sending data to inZOI.

![](../img/2026_01_04_14_53_19.png)

This option provides the following improvements.

- Reduces finger distortion when hands are clenched into fists.

![](../img/2025_10_26_11_53_33.png)

- Produces a more natural standing posture while minimizing foot penetration into the ground.

![](../img/2025_10_26_11_53_56.png)

