---
sidebar_position: 17
title: Gesture Recognition
slug: /unity-gestures
---

# Gesture Recognition

:::info

The following Dollars MoCap products support sending gesture events to Unity,

- Dollars SOMA

:::

You can react to body postures and hand gestures by listening to the ```Dollars.GestureListener.OnGestureDetected``` and ```Dollars.GestureListener.OnHandGestureDetected``` events.

A typical controller class would look like this:

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GestureController : MonoBehaviour
{
    void Awake()
    {
        Dollars.GestureListener.OnGestureDetected += HandleGesture;
        Dollars.GestureListener.OnHandGestureDetected += HandleHandGesture;
    }

    void HandleHandGesture(string gesture)
    {
        Debug.Log(gesture);
    }

    void HandleGesture(string gesture, float value)
    {
    }
}
```

In these two events:
- The ```gesture``` parameter indicates the name of the captured body or hand gesture.
- For ZoomIn and ZoomOut gesture, the ```value``` parameter represents the ratio of the current distance between hands to the distance when the action was triggered.
- For other gestures, this ```value``` is always 0.

