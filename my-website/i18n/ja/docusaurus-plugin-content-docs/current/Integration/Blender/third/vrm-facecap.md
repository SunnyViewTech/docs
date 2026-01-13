---
sidebar_position: 20
title: VRM Facial Cap
slug: /blender-vrm-facecap
---

:::danger Note
The method introduced here relies on third-party paid addons.

If you prefer to use the free, native DollarsMoCap Blender addon, please refer to [this section](/blender-addon).
:::

# Real-time Facial Capture for VRM Files

:::info Version used in this article
Blender 3.0.0

VRM Add-on for Blender 2.20.27，https://vrm-addon-for-blender.info/en/

VMC4B 1.1.0，https://booth.pm/en/items/3432915
:::

In Blender, real-time facial capture for VRM requires two steps: modifying the plug-in file (if necessary) and confirming the VRM Proxy, in addition to installing the plug-ins above.

## Modifying the plug-in file

:::info

If you are using VMC4B version 1.1.2，you don't need this step.

:::

### 1. Locate the VMC4B Directory

Usually it is in `C:\Users\\_username_\AppData\Roaming\Blender Foundation\Blender\3.0\scripts\addons\VMC4B`.

### 2. Download and Replace config.py

Download config.py from [here](https://kilimanjaro.dollarsmocap.com/config.py) and overwrite the file with the same name in the `core` directory under the VMC4B directory.

The difference between the two is as follows, the left side is modified.

![](../../../img/2024_01_23_10_07_00-config.py.png)

## Confirming VRM Blend Shape Proxy

:::info
You need a VRM model that supports Perfect Sync for facial capture.
:::

### 1. Import the VRM Model
Import a VRM model and open the VRM plugin panel.

### 2. Check Blend Shape Proxy

In the Blend Shape Proxy column, find the blend shapes related to facial capture, and make sure that the Name of each blend shape follows the required format.

EyeBlinkLeft  
EyeLookDownLeft  
EyeLookInLeft  
EyeLookOutLeft  
EyeLookUpLeft  
EyeSquintLeft  
EyeWideLeft  
EyeBlinkRight  
EyeLookDownRight  
EyeLookInRight  
EyeLookOutRight  
EyeLookUpRight  
EyeSquintRight  
EyeWideRight  
JawForward  
JawLeft  
JawRight  
JawOpen  
MouthClose  
MouthFunnel  
MouthPucker  
MouthLeft  
MouthRight  
MouthSmileLeft  
MouthSmileRight  
MouthFrownLeft  
MouthFrownRight  
MouthDimpleLeft  
MouthDimpleRight  
MouthStretchLeft  
MouthStretchRight  
MouthRollLower  
MouthRollUpper  
MouthShrugLower  
MouthShrugUpper  
MouthPressLeft  
MouthPressRight  
MouthLowerDownLeft  
MouthLowerDownRight  
MouthUpperUpLeft  
MouthUpperUpRight  
BrowDownLeft  
BrowDownRight  
BrowInnerUp  
BrowOuterUpLeft  
BrowOuterUpRight  
CheekPuff  
CheekSquintLeft  
CheekSquintRight  
NoseSneerLeft  
NoseSneerRight  
TongueOut  

### 3. Make Necessary Changes

If the blend shape names do not follow the required format, modify them.

For example this VRM file, https://hub.vroid.com/characters/6076267521797946217/models/7503229929586800812

![](../../../img/2024_01_23_10_36_19-Blender.png)

Before,

![](../../../img/2024_01_23_10_44_00-Blender.png)

After,

![](../../../img/2024_01_23_10_44_14-Blender.png)

### 4. Export the Modified VRM

After making all changes, export the VRM file.

### 5. Load the New VRM

Load the new VRM and you can use VMC4B for facial capture.

:::info
If the VRM Proxy is already in the correct format, you can proceed with facial capture without any further modifications.

For example this VRM file, https://hub.vroid.com/characters/7173430845109381047/models/6304450858378362082

![](../../../img/2024_01_23_12_58_02-Blender.png)
:::


