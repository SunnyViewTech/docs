---
sidebar_position: 20
title: Multi-person Motion Capture
slug: /ue-multiplayer
---

# Multi-person Motion Capture

You can run the Dollars MoCap program on multiple computers separately, and gather the motion capture results into the same UE scene to achieve multi-character interaction.

## Setup

For instance, if we want to perform motion capture on Computer A (with IP address 192.168.1.3) and Computer B (with IP address 192.168.1.10), and combine the results into the UE scene on Computer A, follow these steps,

### Ensure Connectivity
First, ensure that Computer B can ping Computer A. If the ping is unsuccessful, check the firewall settings on Computer A.

### Running Dollars MoCap

On Computer A, we run the Dollars MoCap program as usual.

On Computer B, after running the Dollars MoCap program, we open the options dialog box, enter the IP of Computer A, 192.168.1.3, in the IP field, and change the UE port to a number other than 39639, for example, 39640.

:::info
You can also run multiple instances of the Dollars MoCap program on the same computer. In this case, keep the IP as the default local address, 127.0.0.1, and set different port numbers for each instance.
:::

### UE Scene Setup

In the Unreal Engine scene on Computer A, add two instances of the `BP_DollarsReceiver` Blueprint.

For easy identification, name them `BP_DollarsReceiver_A` and `BP_DollarsReceiver_B`.

![](../../img/2023_11_03_23_08_00-DollarsVRMUE_Multiplayers.png)

Select `BP_DollarsReceiver_B` and change its Port to the number 39640, which is the port number we set earlier on Computer B. 

![](../../img/2023_11_03_23_10_35-DollarsVRMUE_Multiplayers.png)

### Character Blueprint Setup

Add two character blueprints into the scene. Name them `BP_VRM_A` and `BP_VRM_B`.

In the `BP_VRM_A` blueprint, set the Dollar Receiver variable to reference the `BP_DollarsReceiver_A` you've added to the scene.

![](../../img/2023_11_03_23_14_13-DollarsVRMUE_Multiplayers.png)

For `BP_VRM_B`, you should set the Dollar Receiver variable to reference the `BP_DollarsReceiver_B`.

![](../../img/2023_11_03_23_15_09-DollarsVRMUE_Multiplayer.png)

At this point, `BP_VRM_A` is controlled by the motion capture program running on Computer A, and `BP_VRM_B` is controlled by the motion capture program running on Computer B.

You can download a sample Unreal Engine project with the above setup from the following link:

https://drive.google.com/u/0/uc?id=1EGJmPzi_JL2YCRALKkuhpXTWmZZV0Ckc&export=download