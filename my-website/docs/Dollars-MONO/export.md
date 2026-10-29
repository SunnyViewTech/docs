---
sidebar_position: 50
title: File Export
---

# File Export

Click the button shown below or press the **R** key to start or stop recording motion and facial capture files.

![](../img/2026_10_29_20_43_09-Dollars_MONO.png)

## Export formats

MONO currently supports the following formats,

1. FBX
2. BVH
3. BVH for Cascadeur
4. BVH for VAM
5. VAM Timeline

FBX supports exporting both motion and facial data, while BVH supports exporting motion data only.

### How to Choose

If you plan to use BVH in iClone or Cartoon Animator, please choose the second format.

If you plan to use BVH in Cascadeur, please choose the third format.

If you plan to use BVH in Virt-A-Mate, please choose the fourth format.

In other cases, you can select any format you prefer.

## File Name and Save Location

Motion files will be named with "Dollars_" followed by a timestamp.

Facial expression files will be named with "Dollars_BS_" followed by a timestamp.

Depending on the operating system, the files will be saved in the following directory.

- - Windows

```C:\Users\[Username]\AppData\LocalLow\SunnyView\Dollars_MONO\```

- MacOS

```/Users/[Username]/Library/Application Support/com.SunnyView.Dollars-MONO```

- Linux

```~/.config/unity3d/SunnyView/Dollars_MONO/```

You can change the export folder in the Options dialog.

![](../img/2026_10_29_20_43_55-Dollars_MONO.png)

By clicking the **Reset** button, you can restore the save location to the default directory above.

Please ensure that the specified target directory has write permission. If MONO fails to save files in the selected directory, they will be saved automatically to the default path listed above.

:::info Note

After changing the save directory, we recommend performing a test recording to confirm that the new location is writable.

:::
