# Campus Compass 🧭 | Logic-Based Faculty Locator

**Campus Compass** is a real-time, logic-based navigation system designed to solve the problem of locating faculty on large university campuses. Unlike expensive GPS hardware, this system uses a "Predictive Logic Algorithm" that cross-references **Static Academic Timetables** with **Real-Time Teacher Statuses** (Substitutions, Meetings, Cabin Availability) to pinpoint faculty locations on an interactive digital map.

🔗 **Live Demo:** [https://campuscompass-899ca.web.app](https://campuscompass-899ca.web.app/login.html)

---

## 🚀 Key Features

### 1. 🗺️ Student View (Public Map)
* **No Login Required:** Accessible instantly by students and visitors.
* **Logic-Based Tracking:** Shows faculty location based on the current time and day (e.g., "In Class S4 CSE-A" or "Available in Cabin").
* **Smart Highlighting:** The specific building block (CS, Mech, Electronics, etc.) glows on the map.
* **Search & Filter:** Instantly find teachers by name or department.
* **Weekly Schedule:** View a teacher's full timetable for the week.

### 2. 🎓 Teacher Dashboard (Secure Portal)
* **Session-Based Login:** Secure access using unique Reg ID & Password.
* **Live Overrides:** Teachers can override the timetable logic with one click:
    * 📅 **Normal Schedule:** Reverts to the automatic timetable.
    * 🤝 **Substitution:** Selects a specific class (Theory/Lab) to take over.
    * 💼 **In Meeting:** Updates status to "Conference Room" (Admin Block).
    * ☕ **Free / Cabin:** Marks them as available in their staff cabin.
* **Smart Selector:** Auto-detects the correct block based on the selected class (e.g., selecting "Chemistry Lab" maps to the Science Block).

### 3. 🛡️ Admin Panel (Management)
* **Firebase Auth:** Secure email/password login for management.
* **Faculty Management:** Create/Delete teacher accounts and set credentials.
* **Timetable Entry:** Easy-to-use interface to input class schedules using the Smart Selector (Theory vs. Lab).
* **System Reset:** Change passwords and manage database integrity.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Mobile-Responsive), Vanilla JavaScript (ES6 Modules).
* **Backend:** Firebase (Google Cloud).
* **Database:** Cloud Firestore (NoSQL Real-time Database).
* **Authentication:** Firebase Auth & Session Storage.
* **Deployment:** Firebase Hosting.

---

## 📂 Project Structure

```text
/
├── index.html       # Public Map (Landing Page)
├── login.html       # Unified Gateway (Admin & Faculty Login)
├── teacher.html     # Teacher Dashboard (Status Overrides)
├── admin.html       # Admin Panel (Data Entry)
├── 404.html         # Firebase Error Page
├── firebase.json    # Hosting Configuration
└── README.md        # Documentation
