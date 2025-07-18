---
sidebar_position: 12
title: Using the Plugin in the Editor(Beta)
slug: /ue-ineditor
---	
# Using Dollars MoCap Plugin in UE Editor

## Download the Plugin and Control Rig

Compatible with UE5.3 and above

- Unreal Engine Plugin

https://kilimanjaro.dollarsmocap.com/ineditor/Dollars.zip

- Control Rig for UE4 Mannequin

https://kilimanjaro.dollarsmocap.com/ineditor/Dollars_UE4Mannequin.zip

- Control Rig for MetaHuman(downloaded via Quixel Bridge)

https://kilimanjaro.dollarsmocap.com/ineditor/Dollars_MetaHuman.zip

- Control Rig for MetaHuman(created locally in 5.6 and above)

https://kilimanjaro.dollarsmocap.com/ineditor/Dollars_MetaHumanCharacters.zip

## Sample Projects

- UE4 Mannequin

https://drive.usercontent.google.com/download?id=1vxRN-WnplO-BMeUs5lecrM12WX6YGvO7&export=download&authuser=0

- IK Rig-Driven Character

https://drive.usercontent.google.com/download?id=11wwUxRap5BoDB2lCZ9KWceTUJzJfsAi0&export=download&authuser=0

- MetaHuman(downloaded via Quixel Bridge)

https://drive.usercontent.google.com/download?id=19P-NaPRptPstWC6JLAnDQ_QNEco4YxPJ&export=download&authuser=0

- MetaHuman(created locally in 5.6 and above)

https://drive.usercontent.google.com/download?id=1WDlx7f8eXGDqfsp3Hh49tGzPb0p46kj2&export=download&authuser=0

## Using the Sample Project (UE4 Mannequin)

1. In the scene, select **Dollar Receiver** and click **Listen** in the details panel.

If the **OSCServer** variable is not None before clicking **Listen**, you can click **Stop** to clear it.

![](../../img/2025_06_06_20_22_05.png)

2. After clicking **Listen**, you will see that the **OSCServer** variable is assigned.

![](../../img/2025_06_06_20_24_15.png)

3. Select the character blueprint and click **Update Anim in Editor** in the details panel. (MetaHumans generated locally in 5.6 or above do not require this step)

![](../../img/2025_06_06_20_25_12.png)

4. Enable UE Streaming in the Dollars application, and you will be able to control the character directly in the editor in real time, without entering Play mode.

## Using Your Characters

Please use the plugin and Ctrl Rig provided on this page to replace the versions downloaded from the DollarsMoCap website, and complete the integration steps as shown in our [tutorial videos](/ue-characters).

In addition, complete the following two steps,

1. In the character blueprint, add a custom event that enables **Set Update Animation in Editor** for all Skeletal Meshes. Also enable **Call In Editor** for this event.

![](../../img/2025_07_14_19_35_19-DollarsUE4MannquininEditor.jpg)

2. In the scene, in addition to placing the character blueprint and DollarsReceiver, also add Dollars > Blueprints > EUB_DollarsTick.

![](../../img/2025_07_14_19_37_28-DollarsUE4MannquininEditor.jpg)

Once these steps are completed, you will be able to receive OSC data and drive the character animation without entering Play Mode.