---
sidebar_position: 60
title: 📢 FAQ 
---	

# FAQ

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Finger tracking support

Dollars VIVA natively supports the use of Valve Index controllers for finger tracking.

You can also use gloves with Dollars VIVA, and integrate fingers and body within the engine, as well as DCC software.

You can see an example [here](/otherdevices).

## Mannequin facing the wrong direction

The direction of the mannequin is determined by two factors:

1. SteamVR Orientation

![](../img/FnQ0l5F5DiMNNihvuOlQB_-wM7We.png#center)

2. Orientation of the Tracker on the character's head

![](../img/FgrS3TO83-n0tbFbzLjT7eFpNl0-.jpg#center)

Please refer to the relevant documentation for specific details.

## Unable to see the trackers after entering the pre-calibration state

Please check if the room setup is correct, especially the floor height.

## Multi-person motion capture

Dollars VIVA primarily support single-person motion capture, but you can achieve multi-person motion capture by sharing base stations in the same area and setting up multiple computers.

This allows you to capture the movements of multiple individuals simultaneously within the shared tracking space.
