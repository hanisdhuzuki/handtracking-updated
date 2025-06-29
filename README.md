# RIOT System – Phase II Calibration & Phase III Post-Calibration Analysis

This repository contains source code, scripts, and datasets used in **Phase II** (System Calibration) and **Phase III** (Post-Calibration Implementation & Evaluation) for the **RIOT (Rehabilitation Internet-of-Things)** research project.

The files demonstrate MediaPipe hand tracking calibration, gesture recognition, latency measurement in browser environments, and analysis of experimental results.

---

## 📂 Repository Structure

| File | Phase | Description |
|--------------------------|-----------|--------------------------------------------------------------|
| **analysis_results.xlsx** | Phase II | Raw experimental dataset from Phase III (DoE) runs, accuracy, latency logs, and test outputs. |
| **HandTrackingModule.py** | Phase II | Core Python module for real-time hand tracking using MediaPipe. |
| **VolumeHandControl.py** | Phase II | Prototype: control system volume using hand gestures. |
| **advancedVolumeHandCtrl.py** | Phase II | Extended volume control with additional features (gesture smoothing, stability). |
| **cvcode1.py** | Phase II | Experimental OpenCV test for webcam input and calibration checks. |
| **latencyCalculation.js** | Phase III | JavaScript snippet to log gesture timestamps and calculate latency in the RIOT web app. |
| **PhaseIII_FinalResult.ipynb** | Phase III | Jupyter Notebook for post-calibration data analysis and results summary. |


---

## ⚙️ How to Use

### 🐍 Python Scripts (Phase II)

1. Install dependencies:
   ```bash
   pip install opencv-python mediapipe
   
2. Run HandTrackingModule.py or use it as a helper:

  ```bash
  python HandTrackingModule.py
```

3. Test volume control prototypes:

```bash
  python VolumeHandControl.py
  python advancedVolumeHandCtrl.py
```

4. Experiment with OpenCV
```bash
python cvcode1.py
```

###📊 Jupyter Notebook (Phase III)
1. Open PhaseIII_FinalResult.ipynb in Jupyter:

```bash

jupyter notebook PhaseIII_FinalResult.ipynb
```
2. Run the cells to reproduce data summaries and plots for DoE results.

###🌐 Latency Calculation (Phase III)

Use latencyCalculation.js inside the RIOT web application:

1. Open browser console.

2. Paste the script.

3. Perform gestures.

4. View console logs for timestamps & latency.

📁 Data Files
analysis_results.xlsx contains the complete raw DoE data and recorded results for Phase II.

All data used matches the performance tables and figures reported in the thesis.

🔒 Note: No personal or sensitive user data is included.

