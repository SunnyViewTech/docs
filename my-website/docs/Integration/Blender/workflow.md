---
sidebar_position: 15
title: Workflow
slug: /blender-workflow
---

# Workflow

## Step-by-Step Guide

### 1. Start Blender Streaming

In the DollarsMoCap program, enable the Blender streaming. You can modify the port as needed.

![](../../img/2025_05_22_11_11_23.png)

### 2. Import the Model

Import your model into Blender.

For specific model requirements, please refer to the [Model Requirements](/blender-addon#models) section.

### 3. Configure Facial Capture Meshes

In the Meshes list, add all the meshes used for facial capture.

#### 3.1 Click the "+" button to add a new mesh entry.

![](../../img/2025_05_22_11_17_1.png)

#### 3.2 In the newly added entry, select the corresponding mesh object.

![](../../img/2025_05_22_11_18_27.png)

#### 3.3 If your model contains multiple facial meshes, repeat the above steps to add all of them.

![](../../img/2025_05_22_11_20_25.png)

If your model's blendshapes do not use ARKit naming conventions, you can adjust the Target Blendshape names in the Blendshape Remapping panel.

![](../../img/2025_05_21_21_40_02.png)

### 4. Configure Motion Capture Armature

Select the armature of your model.

![](../../img/2025_05_22_11_33_23.png)

The addon will automatically match bones based on their names. You can also manually adjust the mapping in the Bone Remapping panel.

![](../../img/2025_05_22_11_34_21.png)

The addon will automatically detect the hip bone height, but you can manually edit this value (in meters) as needed.

![](../../img/2025_05_22_11_35_12.png)

### 5. Connect and Preview in Real Time

Click Start Listening to establish a connection with the DollarsMoCap software and preview motion and facial capture results in real time.

![](../../img/2025_05_22_11_36_25.png)

### 6. Record Capture Data

Click Start Recording to begin capturing and recording data.

![](../../img/2025_05_22_11_37_00.png)

After recording, you will see the corresponding keyframes in the Blender Timeline.

![](../../img/2025_05_22_11_38_09.png)

:::info Note
It is recommended to disconnect from the DollarsMoCap software before playing back recorded data.
:::

## Exporting and Importing Mapping Configurations

### Export Configuration

After setting up blendshape or bone mappings, click Export to save the current configuration for future use.

![](../../img/2025_05_22_11_40_31.png)

### Import Configuration

To reuse a previously saved configuration file, simply click Import and select the desired file. The mapping settings will be loaded automatically.

If you wish to import a bone mapping configuration, please ensure you have selected the target armature first to make sure the configuration is applied correctly to your model’s skeleton.
