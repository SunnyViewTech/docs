---
sidebar_position: 40
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

Import the DollarsMoCap Unity plugin into the project and add the DollarsMoCap prefab into the scene.

![](../img/image5.png#center)

Then add the MoCapSrc component to UnityChanKAGURA, setting the DollarsMoCap prefab you just added to the src variable.

![](../img/image6.png#center)

The motion capture is now complete.

## Import the Rokoko plugin

Next, we import the downloaded Rokoko plugin. After importing it, we will get the following shader error, let's ignore them.

![](../img/image7.png#center)

Select RokokoPluginExampleScene_CustomActors in the Rokoko/Scenes directory, right-click on it, and select Open Scene Additive in the menu.

![](../img/image8.png#center)

The scene will be overlaid with an existing scene.

![](../img/image9.png#center)

We select the Rokoko and StudioManager objects in Rokoko's scene and drag them into our scene.

After that we right click on RokokoPluginExampleScene_CustomActors and select Remove Scene. Don't save the changes.

![](../img/image10.png#center)

After that, we deactivate the Environment object under the Rokoko object, as well as the Canvas component in Rokoko/CommandAPI/Canvas and Rokoko/Hierarchy_UI.

![](../img/image11.png#center)

The scene has now come back.

## Add Smartgloves

We add Rokoko's Actor and Human Bone Mapping components to UnityChanKAGURA, and fill in the Profile Name of the Actor component with the corresponding name from Rokoko Studio.

![](../img/image12.png#center)

By clicking Copy from Animator in the HumanBoneMapping component, the component automatically recognizes the bones from UnityChanKAGURA and fills in the corresponding fields.

![](../img/image13.png#center)

What we'll do next is to remove the fields outside of the finger, so that Rokoko only controls the finger, and the end result looks like this.

![](../img/image14.png#center)

Also, we need to make the UnityChan's finger joints as flat as possible in the editor so that we can get a better capture.

Before adjustment,

![](../img/image15.png#center)

After adjustment,

![](../img/image16.png#center)

Once that's done, start up Dollars VIVA and Rokoko Studio separately, and you can see that UnityChan's body is now controlled by Dollars, and its hands are now controlled by Rokoko.

The result,

<iframe width="640" height="360" src="https://www.youtube.com/embed/YifUK3P_7h0?si=uTrddXNoAwcF1KMC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
