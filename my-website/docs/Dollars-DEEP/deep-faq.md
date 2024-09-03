---
sidebar_position: 30
title: FAQ
slug: /deep-faq
---	

# FAQ

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Lower Body Does Not Moves

If the lower body of the motion capture avatar is not moving, please confirm the following:

- The runtime library matching your depth camera has already been selected, refer to [Switching Runtime Libraries](/Dollars-DEEP/lilbraries) for details.
- DEEP is set to Full-Body Motion Capture mode.
- The motion capture avatar is blue.
- The lower body of the motion capture actor is fully captured in the frame.
- The installation directory of Dollars DEEP does not contain non-English characters.

If all the above points are confirmed and the lower body still does not move, you can download the Azure Kinect Body Tracking SDK from the following page. Run the `k4abt_simple_3d_viewer.exe` included in it to ensure it can operate correctly.

https://learn.microsoft.com/en-us/azure/kinect-dk/body-sdk-setup

If `k4abt_simple_3d_viewer.exe` correctly tracks the human body but DEEP still fails to capture lower body movements, please contact us for further support.