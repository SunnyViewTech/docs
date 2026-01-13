---
sidebar_position: 50
title: Body Gestures
---

# Body Gestures

SOMA currently supports recognition of the following body gestures.

## Gesture Events

Gesture events are sent once when the corresponding gesture is recognized.

For the following gestures, events will be sent multiple times if the gesture is maintained for an extended period:

- RaiseRightHand
- RaiseLeftHand
- TPose

After the following events end, completion events will be sent:

- After ZoomIn ends, ZoomInCompleted is sent
- After ZoomOut ends, ZoomOutCompleted is sent

## Gesture Overview

The **Gesture Name** listed here are the gesture strings that can be received in Unreal Engine and Unity.

|Gesture Name|Display Name|Gesture Description|Gesture Demonstration|
|---|---|---|---|
|SwipeLeft|Right Hand Swipe Left|Place your right hand on the right side of your body, then smoothly swipe to the left.|![](../img/swipeleft.gif) 
|SwipeRight|Left Hand Swipe Right|Place your left hand on the left side of your body, then smoothly swipe to the right.|![](../img/swiperight.gif) 
|SwipeUp|Swipe up|Raise either hand upward, while keeping the other hand naturally hanging down.|![](../img/swipeup.gif) 
|SwipeDown|Swipe down|Move either hand downward from a raised position, while keeping the other hand naturally hanging down.|![](../img/swipedown.gif) 
|RaiseRightHand|Raise Right Hand|Raise your right hand above your head and maintain the position for a period of time.|![](../img/raiserighthand.gif) 
|RaiseLeftHand|Raise Left Hand|Raise your left hand above your head and maintain the position for a period of time.|![](../img/raiselefthand.gif) 
|ZoomIn|Zoom In|Place both hands close together in front of your chest and hold briefly. <br />Then adjust the distance between your hands to control the zoom level.<br />Zooming stops when you lower your hands.|![](../img/zoomin.gif) 
|ZoomOut|Zoom Out|Position both hands in front of your body with a distance between them greater than shoulder width.<br />After maintaining this posture briefly, adjust the distance between your hands to control the zoom level.<br />Zooming stops when you lower your hands.|![](../img/zoomout.gif) 
|Tpose|TPose|Extend both arms horizontally and maintain the position for a period of time.|![](../img/tpose.gif) 
|Jump|Jump|Literally jump once.|![](../img/jump.gif) 

