---
sidebar_position: 30
title: FAQ
slug: /deep-faq
---	

# FAQ

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## The lower body does not move

Please confirm the following points,

- DEEP is in full-body motion capture mode
- The motion capture doll is blue
- The lower body of the motion capture actor is fully captured in the frame
- The installation directory of Dollars DEEP does not contain non-English characters
- 
If all the above points are confirmed and the lower body still does not move, you can download the Azure Kinect Body Tracking SDK from the following page. Run the k4abt_simple_3d_viewer included in it to ensure it can operate correctly.

https://learn.microsoft.com/en-us/azure/kinect-dk/body-sdk-setup

If you have confirmed that k4abt_simple_3d_viewer can correctly track the human body, but DEEP still fails to capture the lower body movements, please contact us for further support.