---
sidebar_position: 12
title: Using the Plugin in the Editor
slug: /ue-ineditor
---	
# Using Dollars MoCap Plugin in UE Editor

:::info

You need the Dollars MoCap Plugin supporting Unreal Engine 5.3 or above to use this Play-in-Editor feature.

In addition, this feature currently supports only one mocap character at a time. Controlling multiple characters simultaneously within the editor is not yet available.

:::



## Preparation

1. Complete the integration steps as shown in our [tutorial videos](/ue-characters).

2. In the character blueprint, add a custom event that enables ```Set Update Animation in Editor``` for **all Skeletal Meshes**. Also enable ```Call In Editor``` for this event.

![](../../img/2025_07_14_19_35_19-DollarsUE4MannquininEditor.jpg)

3. In the scene, in addition to placing the character blueprint and DollarsReceiver, also add **Dollars > Blueprints > EUB_DollarsTick**.

![](../../img/2025_07_14_19_37_28-DollarsUE4MannquininEditor.jpg)

## MoCap in Editor (UE4 Mannequin as an example)

1. In the scene, select ```Dollar Receiver``` and click ```Listen``` in the details panel.

If the ```OSCServer``` variable is not None before clicking ```Listen```, you can click ```Stop``` to clear it.

![](../../img/2025_06_06_20_22_05.png)

2. After clicking ```Listen```, you will see that the ```OSCServer``` variable is assigned.

![](../../img/2025_06_06_20_24_15.png)

3. Select the character blueprint and click the Event created in Preparation #2 in the details panel.

![](../../img/2025_06_06_20_25_12.png)

4. Enable UE Streaming in the Dollars application, and you will be able to control the character directly in the editor in real time, without entering Play mode.

:::warning

After clicking Listen, if you need to run the project, please make sure to click Stop first.

Otherwise it may cause a port conflict, and the motion capture data will not be received correctly during runtime.

:::
