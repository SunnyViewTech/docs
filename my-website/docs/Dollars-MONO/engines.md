---
sidebar_position: 80
title:  Stream
---

# Stream to Other Applications

## Streaming Settings

You can enable or disable streaming to each engine through the options under Sync Engines.

The Target IP is the IP address of the computer running the engine. If motion capture and the engine run on the same computer, keep the default 127.0.0.1.

The Port is the port that the Dollars MoCap engine plugin listens on.

![](../img/2026_07_03_13_55_28.png)

The currently active streaming options are shown at the bottom left of the program.

![](../img/2026_07_03_13_42_37.png)

## Multi-person Mocap

When multi-person mocap is enabled, a number such as 0 or 1 appears above each avatar.

![](../img/2026_07_03_13_43_39.png)

### UE Live Link Plugin

With the Live Link plugin, you will see up to five Subjects in a single mocap source.

![](../img/2026-06-30_21-42-30-953.jpg)

The Subject numbers match those in the mocap program, so select the corresponding Subject to drive each character.

### Other Plugins

With the other plugins, each avatar's motion is streamed on its own port, starting from the configured port and counting up by avatar number.

For example, with the port set to 39639, avatar 0 streams on 39639, avatar 1 on 39640, and so on.

In the third-party program, add a receiver for each of these ports to drive multiple characters at the same time.
