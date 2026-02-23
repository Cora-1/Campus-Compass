# Campus Compass 🧭
### Logic-Based Faculty Locator for Smart Campuses

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Status](https://img.shields.io/badge/status-Prototype-orange)

## 🌐 View Live Project
**[Click Here to View Live Map](https://campuscompass-899ca.web.app/)**

## 📖 Overview
**Campus Compass** is a privacy-first indoor navigation tool designed for large educational institutions. It solves the "Lost Student" problem by predicting faculty locations using a **Time-Space Logic Algorithm**, synthesizing academic timetables with real-time status updates. 

**Unique Value Proposition:** Navigation without Surveillance. No GPS tracking. No expensive hardware beacons.

## ✨ Key Features
* **Predictive Location:** Calculates faculty location based on Day, Time, and Master Schedule.
* **Interactive Maps:** SVG-based schematic maps of the campus layout.
* **Privacy Centric:** Does not require live GPS tracking of staff.
* **Admin Dashboard:** Allows HODs to perform manual overrides (e.g., "On Leave", "Class Swapped").
* **Search Function:** Quickly find faculty by Name or Department.

## 🛠 Tech Stack
* **Frontend:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript
* **Backend:** Google Firebase (Firestore Database)
* **Design:** Adobe Illustrator (for SVG Map digitization)
* **Hosting:** Firebase Hosting

## 🚀 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/yourusername/campus-compass.git](https://github.com/yourusername/campus-compass.git)
    ```

2.  **Configure Firebase**
    * Create a project in [Firebase Console](https://console.firebase.google.com/).
    * Copy your `firebaseConfig` object.
    * Paste it into `js/firebase-config.js`.

3.  **Run Locally**
    * Open `index.html` in your browser (or use Live Server in VS Code).

## 🧩 The Core Logic (Snippet)
```javascript
// The algorithm checks the schedule against the current system time
function getFacultyLocation(facultyId, currentTime) {
    const schedule = database.getSchedule(facultyId);
    const liveStatus = database.getLiveStatus(facultyId);

    // Priority 1: Check for Manual Override (e.g., Sick Leave)
    if (liveStatus.isActive) return liveStatus.location;

    // Priority 2: Check Standard Timetable
    const currentClass = schedule.find(slot =>
        slot.startTime <= currentTime && slot.endTime > currentTime
    );

    return currentClass ? currentClass.roomNumber : "Staff Cabin (Probable)";
}
