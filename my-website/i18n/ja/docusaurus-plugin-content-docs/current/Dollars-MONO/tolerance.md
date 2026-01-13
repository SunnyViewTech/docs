---
sidebar_position: 32
title: Motion Capture Tolerance
---

# Motion Capture Tolerance


The level of tolerance directly affects the performance of the motion capture system and can be adjusted based on the specific use case.

**High Tolerance:**

The system is more likely to track the target character, even if there are slight deviations in posture or position, and will start tracking quickly. However, this may lead to an increase in misidentification rates, such as mistakenly recognizing the background or non-target objects as the target.

**Low Tolerance:**

The system has stricter requirements for identifying the target character and requires a stable, frontal view for an extended period before it begins tracking. This effectively reduces misidentification rates but may cause delays in tracking startup, especially when the target's posture is unstable or partially obstructed.

This setting is more suitable for scenarios where accuracy is crucial, such as live performances, demonstrations, or public events where interference must be minimized.

You can see the difference in motion capture results in the following video, showing how the same footage behaves under different tolerance settings.

<iframe width="640" height="360" src="https://www.youtube.com/embed/XkYgPHH5ZPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



