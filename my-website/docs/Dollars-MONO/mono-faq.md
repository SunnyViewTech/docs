---
sidebar_position: 90
title: FAQ
slug: /mono-faq

---	

# FAQ

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## The Camera Cannot Be Turned On

We recommend trying to turn on the camera using another program to confirm that it is properly connected to your computer. 

Additionally, check the Camera Settings in Windows to ensure that Dollars MONO has permission to use the camera.

## Characters Are Floating or Stuck in the Grounds

If you're using the camera for real-time capture, performing a [calibration](/Dollars-MONO/calibration) and selecting the appropriate [Motion Capture Mode](/Dollars-MONO/mode) before starting will help prevent characters from floating or sinking into the ground.

If you are experiencing this problem when motion capture is performed via video, you can try to play the video via an external player, capture the playback using OBS, adjust the position appropriately, and then input Dollars MONO via the virtual camera.

For more information on using the OBS virtual camera, refer to the section [Using Virtual Camera as Input](/Dollars-MONO/virtualcam).

## Video Capture Is Stuttering

You can try to lower the video resolution, or video frame rate.

Or you can use an external player to play the video, and then transfer the video into Dollars MONO via OBS's virtual camera. Using an external player can also provide you some playback control, which is easier to use.

You can refer to [Using Virtual Camera as Input](/Dollars-MONO/virtualcam) for more information about how to use the OBS virtual camera.

## Availability of Mac and Mobile Versionss

There are no Mac or cell phone versions of the Dollars MoCap products at this time.

## How to Use Your Cell Phone Camera as Input

To use your cell phone camera, first, find appropriate software to stream the image from your phone to your computer. Then, use the OBS virtual camera to transfer the image into Dollars MONO.

You can refer to [Using Virtual Camera as Input](/Dollars-MONO/virtualcam) for more information about how to use the OBS virtual camera.

## Support for Multiple People or Cameras

Dollars MONO currently supports only a single person and a single camera.

If you want to have multiple characters in the same scene, you can refer to the following tutorials:

[Multi-person motion capture in UE](/ue-multiplayer)

[Multi-person motion capture in Unity](/unity-multiplayer)

Multi-person motion capture in Virt-A-Mate

<iframe width="640" height="360" src="https://www.youtube.com/embed/lbtP2zccvSM?si=otn1dgiLiaNkjKi_&amp;start=265" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

