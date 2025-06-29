# RIOT System – Phase II Calibration and Latency Measurement

This repository contains source code modules used in **Phase II (System Calibration and Testing)** of the RIOT (Rehabilitation Internet-of-Things) research project. The scripts demonstrate hand tracking calibration, gesture recognition, latency measurement, and prototype implementations for volume control using hand gestures.

---

## 📂 **Repository Structure**

| File | Description |
|----------------------|------------------------------------------------------------------|
| **HandTrackingModule.py** | Core Python module for hand tracking using MediaPipe. Contains functions to detect and annotate hand landmarks in video frames. |
| **VolumeHandControl.py** | Prototype script to control system volume based on hand gestures using the hand tracking module. |
| **advancedVolumeHandCtrl.py** | Extended version of the volume control script with additional features (e.g., gesture smoothing, improved detection stability). |
| **cvcode1.py** | Experimental OpenCV-based script for testing different webcam input configurations and hand detection calibration. |
| **latencyCalculation.js** | JavaScript snippet used in the RIOT web application to log gesture timestamps in the browser console for latency measurement. Demonstrates real-time detection and performance monitoring in the browser environment. |

---

## ⚙️ **How to Use**

### 1️⃣ Python Modules

- Make sure you have **Python 3.x**, **OpenCV**, and **MediaPipe** installed:
  ```bash
  pip install opencv-python mediapipe
