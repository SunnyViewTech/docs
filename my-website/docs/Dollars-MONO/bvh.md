---
sidebar_position: 50
title: Recording BVH Files
---

# Recording BVH Files

To start and stop recording a BVH file, simply press the button shown in the image.

![](../img/2023-10-20_22_49_40-806424_940206.png)

## Recording Frame Rate

### v.241128 and earlier versions

Recording frequency: 30FPS

Estimated size: 5MB per minute

### v.241223 and later versions

Recording frequency: 60FPS

Estimated size: 10MB per minute


## File Name and Save Location

### v.250618 and later versions

Recorded files will be named using the current timestamp and saved by default in the following directories, depending on your operating system,

- Windows

```C:\Users\[Username]\AppData\LocalLow\SunnyView\Dollars_MONO\```

- MacOS

```/Users/[Username]/Library/Application Support/com.SunnyView.Dollars-MONO```

- Linux

```~/.config/unity3d/SunnyView/Dollars_MONO/```

You can change the export directory in the settings.

Please ensure that the specified target directory has write permission. If MONO fails to save files in the selected directory, they will be saved automatically to the default path listed above.

:::warning Note

After changing the save directory, we recommend performing a test recording to confirm that the new location is writable.

:::
