---
sidebar_position: 51
title: File Batch Processing
---

# File Batch Processing

MONO supports batch processing of video files since v.260212.

## Export Frame Rate

The exported file frame rate will match the video frame rate. If the video frame rate is non-integer (e.g., 29.97fps), slight deviations may occur in the final result.

## Processing Time

Due to overhead such as disk I/O and frame-by-frame processing, the processing time will be longer than the video duration itself, typically 3 to 10 times the video length. The exact time depends on the video resolution, frame rate, encoding format, and hardware performance.

## Options

The following options remain effective during batch processing,

- Facial capture module
- Export folder
- Export format

The following options will be automatically adjusted,

- Enhanced mode is enabled by default
- Motion capture mode defaults to full-body jumping mode
- Motion capture Profile is not applied by default
