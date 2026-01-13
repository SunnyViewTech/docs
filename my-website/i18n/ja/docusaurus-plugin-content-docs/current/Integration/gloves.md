---
sidebar_position: 70
title: Use with Other Tracking Devices
slug: /otherdevices
---

# Use with Other Tracking Devices

All Dollars products can be used with other tracking devices and the tracking results can be integrated in the game engines and DCC software.

Here we will show you an example of using Dollars VIVA and Rokoko Smartgloves together and integrating them in Unity, other gloves such as the Noiton Hi5 can also be used with Dollars in the same way.

This article assumes that you have successfully connected Smartgloves in Rokoko Studio and activated Unity synchronization, the Rokoko Unity plugin can be downloaded here.

https://assetstore.unity.com/packages/tools/animation/rokoko-live-98045

We will use the following project as an example,

https://github.com/unity3d-jp/UnityChanKAGURA

Open the project and run it, you can see the latest version of UnityChan rendered using URP.

![](../img/image.png#center)

## Preparation

Let's deactivate the UI, the objects under Timeline, and the VCAM objects.

![](../img/image2.png#center)

Set the Animator Controller of UnityChanKAGURA to empty.

![](../img/image3.png#center)

Adjust the position of the Main Camera, run the project and it will look like this.

![](../img/image4.png#center)

That's pretty much it for preparation, let's move on to adding motion capture to UnityChan.

## Add Motion Capture

Import the DollarsMoCap Unity plugin into the project and add the **DollarsMoCap** prefab into the scene.

![](../img/image5.png#center)

Then add the **MoCapSrc** component to UnityChanKAGURA, setting the **DollarsMoCap** prefab you just added to the **src** variable.

![](../img/image6.png#center)

The motion capture is now complete.

## Import the Rokoko plugin

Import the downloaded Rokoko plugin. After importing, you may encounter shader errors¡ªthese can be ignored.

![](../img/image7.png#center)

In the Rokoko/Scenes directory, select **RokokoPluginExampleScene_CustomActors**, right-click on it, and select **Open Scene Additive**.

![](../img/image8.png#center)

The scene will be overlaid with an existing scene.

![](../img/image9.png#center)

Select the **Rokoko** and **StudioManager** objects in Rokoko's scene and drag them into your scene.

After that, right click on **RokokoPluginExampleScene_CustomActors** and select **Remove Scene**. Don't save the changes.

![](../img/image10.png#center)

Deactivate the **Environment** object under the **Rokoko** object, as well as the **Canvas** component in **Rokoko/CommandAPI/Canvas** and **Rokoko/Hierarchy_UI**.

![](../img/image11.png#center)

The scene is now back to normal.

## Add Smartgloves

Add Rokoko's **Actor** and **HumanBoneMapping** components to UnityChanKAGURA.

In the **Actor** component, fill in the **Profile Name** with the corresponding name from Rokoko Studio.

![](../img/image12.png#center)

In the **HumanBoneMapping** component, click **Copy from Animator**. This will automatically recognize the bones from UnityChanKAGURA and fill in the corresponding fields.

![](../img/image13.png#center)

Remove the fields besides those of the fingers, so that Rokoko only controls the fingers. The final setup should look like this,

![](../img/image14.png#center)

In the editor, adjust UnityChan's finger joints to be as flat as possible to achieve better capture results.

Before adjustment,

![](../img/image15.png#center)

After adjustment,

![](../img/image16.png#center)

Once everything is set up, start Dollars VIVA and Rokoko Studio separately. You should see that UnityChan's body is controlled by Dollars VIVA, while her hands are controlled by Rokoko.

Final result,

<iframe width="640" height="360" src="https://www.youtube.com/embed/YifUK3P_7h0?si=uTrddXNoAwcF1KMC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
