---
sidebar_position: 55
title: Setting a Profile
---

# Setting a Motion Capture Profile

Since version v.250707, MONO supports motion capture Profile configuration.

By setting a Profile, you can limit the range of motion for joints to help reduce clipping issues during capture, as shown on the right side of the image below.

![](../img/2025_07_07_18_22_1.jpg)

If you are rendering your characters in Unity, you can get a similar result using Unity’s built-in Muscle Settings.

For more information, refer to,

https://github.com/SunnyViewTech/MuscleSettings

:::warning Note

It remains technically challenging to completely eliminate clipping during real-time capture. This feature is designed to provide an effective mitigation approach.

:::

## Setup

1. Make sure your character is properly configured with the Dollars plugin so that motion data can sync correctly.

2. Enable streaming in MONO.

3. Enter the Profile editing mode.

4. Drag the Current Position slider to the far left, and set the minimum range for the Upper Arm.

5. Drag the Current Position slider to the far right, and set the maximum range for the Upper Arm.

6. Move the Current Position slider to observe and confirm if the settings meet your needs.

![](../img/2025-07-07_17-57-21-808.gif)

7. Click **Save** to complete the setup. The saved Profile will be automatically loaded each time the program starts.

8. You can create different Profiles for different characters and load them as needed.