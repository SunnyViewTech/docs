---
sidebar_position: 90
title: FAQ
slug: /mono-faq

---	

# FAQ

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## The camera cannot be turned on

We recommend that you try to turn on the camera using another program to confirm that the camera is properly connected to your computer.

You can also go to Camera Settings in Winows to check if Dollars MONO has permission to use the camera.

## The Character are floating or stuck in the ground

When you are using the camera for real-time capture, performing a [calibration](/Dollars-MONO/calibration) and selecting the appropriate [Motion Capture Mode](/Dollars-MONO/mode) before you start motion capture will alleviate floating or sinking into the ground.

If you are experiencing this problem when motion capture is performed via video, you can try to play the video via an external player, capture the playback using OBS, adjust the position appropriately, and then input Dollars MONO via the virtual camera.

You can refer to [Using OBS Virtual Camera as Input](/Dollars-MONO/virtualcam) for more information about how to use the virtual camera of OBS.

## Video capture is stuttering

You can try to lower the video resolution, or video frame rate.

Or you can use an external player to play the video, and then transfer the video into Dollars MONO via OBS's virtual camera. Using an external player can also provide you some playback control, which is easier to use.

You can refer to [Using OBS Virtual Camera as Input](/Dollars-MONO/virtualcam) for more information about how to use the virtual camera of OBS.

## Availability of Mac, mobile version

There are no Mac or cell phone versions of the Dollars MoCap products at this time.

## How to use your cell phone camera

First, you need to find the software for your cell phone and map the image from your cell phone to your computer. Then, you can use the OBS virtual camera to transfer the image to Dollars MONO.

You can refer to [Using OBS Virtual Camera as Input](/Dollars-MONO/virtualcam) for more information about how to use the virtual camera of OBS.

## Does it support multiple people/multiple cameras

Dollars MONO currently only supports single person, single camera.

If you want to have multiple characters in the same scene, you can refer to the following tutorial:

[Multi-person motion capture in UE](/ue-multiplayer)

[Multi-person motion capture in Unity](/unity-multiplayer)

Multi-person motion capture in Virt-A-Mate

<iframe width="640" height="360" src="https://www.youtube.com/embed/lbtP2zccvSM?si=otn1dgiLiaNkjKi_&amp;start=265" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

