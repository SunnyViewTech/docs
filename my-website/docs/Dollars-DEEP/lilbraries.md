---
sidebar_position: 6
title: Switching Runtime Libraries
---

# Switching Runtime Libraries

## How to Switch

By default, Dollars DEEP launches with runtime libraries for Azure Kinect.

If you are using Femto Bolt or Femto Mega, you will need to switch the runtime library to support it. To do this, run the `Install Femto Libraries.bat` file shown in the image below before starting the program.

![](../img/2025_08_20_16_10_31-E__Unity5Projects_Dollars_DEEP.png)

when you need to use Azure Kinect, you can run the `Install Azure Kinect Libraries.bat` file to switch to the runtime library that supports Azure Kinect.

:::info
This operation is only necessary the first time you use either Femto or Azure Kinect.
:::

## Check the Current Runtime Libraries

In the root directory of the program, you will find a file named `_AzureKinect` or `_Femto`.

This file indicates which runtime library is currently active.

**AzureKinect**

![](../img/2025_08_20_16_03_27-E__Unity5Projects_Dollars_DEEP.png)

**Femto**

![](../img/2025_08_20_16_03_41-E__Unity5Projects_Dollars_DEEP.png)


:::info
This feature is not supported in versions v.240306 and earlier.
:::
