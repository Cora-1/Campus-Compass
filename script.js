// --- REAL VJEC FACULTY DATA (Simulated Database) ---
const facultyDB = [
    // CS Department
    { id: 1, name: "Ms. Divya B", dept: "Computer Science (HOD)", cabin: "CS Dept" },
    { id: 2, name: "Dr. Manoj V. Thomas", dept: "Computer Science", cabin: "CS Dept" },
    { id: 3, name: "Ms. Neena V.V", dept: "Computer Science", cabin: "CS Dept" },
    
    // Mechanical Department
    { id: 4, name: "Cdr. Raju K. Kuriakose", dept: "Mechanical (HOD)", cabin: "Mech Block" },
    { id: 5, name: "Dr. Christopher Ezhil Singh", dept: "Mechanical", cabin: "Mech Block" },
    
    // Electronics
    { id: 6, name: "Dr. Roshini T.V", dept: "Electronics (HOD)", cabin: "Electronics" },
    { id: 7, name: "Ms. Reema Mathew", dept: "Electronics", cabin: "Electronics" },

    // Admin
    { id: 8, name: "Dr. Benny Joseph", dept: "Principal", cabin: "Main Block" }
];

// --- TIMETABLE LOGIC (Hour: Location) ---
// This acts as the "Algorithm" linking time to place
const timetable = {
    // Divya B (CS) - busy at 10am and 2pm
    "1-10": "Main Block (Lecture Hall 1)",
    "1-14": "CS Dept (Lab 2)",
    
    // Manoj Thomas (CS) - busy at 9am
    "2-9": "CS Dept (Seminar Hall)",
    
    // Raju Kuriakose (Mech) - busy at 11am
    "4-11": "Mech Block (Workshop)",
    
    // Principal - Lunch at 1pm
    "8-13": "Canteen",
    "8-10": "Main Block (Meeting Room)"
};

// --- BIOMETRIC LOGS (Who is absent?) ---
const absentees = [5]; // Dr. Christopher is on leave

// --- STATE ---
let currentTime = 9;

// --- DOM ELEMENTS ---
const elements = {
    slider: document.getElementById('time-slider'),
    display: document.getElementById('time-display'),
    list: document.getElementById('results-list'),
    search: document.getElementById('search-input'),
    buildings: document.querySelectorAll('.building'),
    card: {
        self: document.getElementById('status-card'),
        name: document.getElementById('card-name'),
        status: document.getElementById('card-status'),
        dept: document.getElementById('card-dept'),
        loc: document.getElementById('card-loc')
    }
};

// --- INITIALIZE ---
function init() {
    renderList("");
    
    // Event Listeners
    elements.slider.addEventListener('input', updateTime);
    elements.search.addEventListener('input', (e) => renderList(e.target.value));
}

// --- CORE FUNCTIONS ---

function updateTime(e) {
    currentTime = parseInt(e.target.value);
    
    // Format Time
    const suffix = currentTime >= 12 ? "PM" : "AM";
    const hour = currentTime > 12 ? currentTime - 12 : currentTime;
    elements.display.innerText = `${hour}:00 ${suffix}`;
    
    // Refresh List & Map
    renderList(elements.search.value);
    
    // If a building is currently active, refresh the card logic
    // (Optional complexity, for now we just reset map focus to keep it simple)
    resetMap();
}

function getStatus(id, defaultCabin) {
    // 1. Check Attendance
    if (absentees.includes(id)) {
        return { state: "On Leave", loc: "Off Campus", color: "#ef4444", bldg: null };
    }

    // 2. Check Timetable
    const key = `${id}-${currentTime}`;
    if (timetable[key]) {
        return { 
            state: "In Class / Busy", 
            loc: timetable[key], 
            color: "#f59e0b", 
            bldg: mapLocationToId(timetable[key]) 
        };
    }

    // 3. Default (Available)
    return { 
        state: "Available", 
        loc: `Cabin (${defaultCabin})`, 
        color: "#10b981", 
        bldg: mapLocationToId(defaultCabin) 
    };
}

function mapLocationToId(locName) {
    if (locName.includes("CS")) return "bldg-cs";
    if (locName.includes("Mech")) return "bldg-mech";
    if (locName.includes("Electronics")) return "bldg-ec";
    if (locName.includes("Canteen")) return "bldg-canteen";
    return "bldg-main";
}

function renderList(query) {
    elements.list.innerHTML = "";
    
    const filtered = facultyDB.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
    
    filtered.forEach(f => {
        const status = getStatus(f.id, f.cabin);
        
        const div = document.createElement('div');
        div.className = "faculty-item";
        div.innerHTML = `
            <strong>${f.name}</strong>
            <small>${f.dept}</small>
            <div style="font-size:0.8rem; color:${status.color}; margin-top:4px;">● ${status.state}</div>
        `;
        
        div.addEventListener('click', () => activateFaculty(f, status));
        elements.list.appendChild(div);
    });
}

function activateFaculty(faculty, status) {
    resetMap();

    // Fill Card
    elements.card.name.innerText = faculty.name;
    elements.card.dept.innerText = faculty.dept;
    elements.card.status.innerText = status.state;
    elements.card.status.style.backgroundColor = status.color;
    elements.card.loc.innerText = status.loc;
    elements.card.self.classList.add('visible');

    // Highlight 3D Building
    if (status.bldg) {
        const bldg = document.getElementById(status.bldg);
        if (bldg) bldg.classList.add('active');
    }
}

function resetMap() {
    elements.buildings.forEach(b => b.classList.remove('active'));
    elements.card.self.classList.remove('visible');
}

function toggleDoc() {
    document.getElementById('doc-modal').classList.toggle('hidden');
}

// Run
init();