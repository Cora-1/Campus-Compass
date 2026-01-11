# 🧭 Campus Compass (VJEC Edition)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![Tech](https://img.shields.io/badge/HTML5-CSS3-orange) ![Status](https://img.shields.io/badge/Status-Prototype-green)

**Campus Compass** is a non-invasive, real-time faculty availability and location tracking system designed specifically for **Vimal Jyothi Engineering College (VJEC)**.

> **Problem:** Students often waste valuable time physically searching for faculty members across large campus blocks (CS Dept, Mech Block, Admin, etc.), not knowing if the teacher is in a lecture, in their cabin, or on leave.
>
> **Solution:** A centralized web dashboard that predicts faculty location by cross-referencing biometric attendance data with static academic timetables.

---

## 🚀 Key Features

### 1. 📍 Real-Time Location Logic
The system does not use invasive GPS tracking. Instead, it utilizes a **Time-Space Logic Algorithm**:
* **Check 1:** Is the faculty marked "Absent" in the biometric log? -> *Status: On Leave.*
* **Check 2:** Does the current time match a slot in the Master Timetable? -> *Status: In Class (e.g., S2 CSE-A).*
* **Default:** If neither, the faculty is assumed to be in their Staff Cabin. -> *Status: Available.*

### 2. 🗺️ Interactive Campus Map
* A visual 2D representation of the VJEC campus layout.
* Includes **CS Dept, Electronics Block, Mechanical Block, Admin Block, and Canteen**.
* **Visual Feedback:** Buildings light up and pulse when a specific faculty member is selected.

### 3. 🔴 Live Mode & Simulation
* **Live Mode:** Syncs with the device's actual system time to show the current real-time status of the campus.
* **Simulation Slider:** Allows users to manually drag a slider (9:00 AM - 5:00 PM) to check availability for future or past hours.

### 4. 🔍 Advanced Search & Filtering
* **Instant Search:** Find faculty by Name (e.g., "Navya", "Rinil").
* **Department Filter:** Filter the list by Computer Science, Electronics, Mechanical, Applied Science, or Humanities.

### 5. 📱 Mobile Responsive
* Fully optimized for mobile devices. The map scales down and the interface stacks vertically for easy access on smartphones.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox, Grid, CSS Variables).
* **Logic:** Vanilla JavaScript (ES6+).
* **Assets:** CSS-only graphics (No external heavy images).
* **Data:** JSON-structured local arrays (Simulating SQL Database).

---

## 📂 Data Sources & Accuracy

The current version is populated with **Real VJEC S2 Timetable Data (2025)** including:
* **S2 CSE-A, CSE-B, CSE-C**
* **S2 ECE**
* **S2 Mechanical**
* **S2 CSD & CC**

It tracks over **40+ Faculty Members** including Lab Instructors and Assistants.

---

## 💻 How to Run Locally

Since Campus Compass is built with vanilla web technologies, it requires no backend installation.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Cora-1/Campus-Compass.git](https://github.com/Cora-1/Campus-Compass.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd Campus-Compass
    ```
3.  **Run the App:**
    * Simply double-click `index.html` to open it in your browser (Chrome/Edge/Firefox).
    * *Optional:* Use the "Live Server" extension in VS Code for a better development experience.

---

## 🔮 Future Roadmap

* [ ] **Backend Integration:** Connect to VJEC's Etlab/Linways API for live attendance data.
* [ ] **Student Tracking:** Expand features to locate student batches.
* [ ] **3D Map:** Upgrade the 2D map to a WebGL/Three.js 3D Interactive model.
* [ ] **Admin Panel:** Allow HODs to update faculty cabins or leave status manually.

---

## 📄 License & IPR

This project focuses on the **Logic Algorithm** linking static timetables to dynamic availability statuses.
* **Copyright:** © 2026 Campus Compass Team (VJEC).
* **License:** 

---

### ❤️ Acknowledgements
Special thanks to the **VJEC Department of Computer Science** for the timetable data and support.
