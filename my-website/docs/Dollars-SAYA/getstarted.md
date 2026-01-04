---
sidebar_position: 10
title: Get Started
---	

# Get Started

## Device Placement

For the best capture results, please follow the steps below to correctly position your device.

- **Position**  
  Place your **iPhone or iPad** horizontally in front of your body with the camera facing you, and keep it as level with your face as possible.  
  It is recommended to use a stable tripod or phone holder to prevent small movements from affecting capture accuracy.

- **Angle Adjustment**  
  Keep the device as **vertical** as possible, avoiding tilting forward or backward.  
  If the device angle is too high or too low, the system may fail to fully detect your hands or upper body.

- **Framing**  
  When your hands are at rest (for example, hanging down or when you're using a mouse or keyboard), make sure they are outside the camera frame.  
  When you raise your hands, both should be fully visible within the camera frame.  

  If space allows, step slightly back to achieve a more complete capture range.

- **Lighting Conditions**  
  Use soft and even lighting.  
  Avoid strong backlight or low-light environments, as they can reduce tracking accuracy.

- ## Connect to Computer

After positioning your device, establish communication with your computer.

1. Open the **Dollars SAYA** app and go to the **Settings** page.  
2. In the “Target IP” field, enter your computer’s local network IP address.  
3. Once confirmed, tap **Save**.

> **Tip**  
> When connecting via USB, your device may be assigned a new IP address.  
> If that happens, please re-enter the updated IP address in the settings.

## Streaming to PC Software

**Dollars SAYA** can stream real-time capture data to PC programs or VTuber software.

1. In the SAYA main interface, activate the corresponding protocol to start real-time streaming.  
   - **VMC Protocol**: For VTuber software, virtual avatars, or Unity integration.  
   - **UE Protocol**: For driving Unreal Engine characters via Dollars MoCap integration.  
   - **Live Link Face Protocol**: For real-time facial animation in Unreal Engine.

## Tips

### General Motion Capture Advice

**Environment Setup**  
Keep the background clean and lighting consistent.  
Avoid moving objects in the background to help the system track gestures and body motion more accurately.

**Clothing**  
Avoid wearing clothes that are similar in color to the background, especially for the upper body.  
Avoid loose or reflective clothing, as these may interfere with key point detection.

### iOS Optimization

**Improve Network Stability**  
If wireless streaming feels unstable, use a **wired Ethernet adapter (Lightning/USB-C to RJ45)** to connect your device directly to the router.  
This significantly reduces latency and prevents Wi-Fi interruptions.

**USB Mode**  
You can also connect directly to your computer via **USB cable**.  
In this mode, it’s recommended to enable **Airplane Mode** to avoid calls or notifications interrupting your session.

**Monitor Device Temperature**  
When using ARKit, the device may heat up after long periods of operation. We have implemented multiple optimizations to reduce heat generation, but the device temperature may still rise during extended use.  
We recommend

- Using cooling accessories such as a small fan.
- Testing before long live sessions. The test duration should be longer than your expected live stream time to understand your device’s thermal performance.  