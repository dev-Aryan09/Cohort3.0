// ================================
// ELEMENTS
// ================================

const clock = document.getElementById("clock");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");
const greeting = document.getElementById("greeting");

const themeBtn = document.getElementById("themeBtn");
const formatToggle = document.getElementById("formatToggle");

// ================================
// THEME
// ================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeBtn.innerHTML = `<i class="fa-solid fa-sun">Dark</i> Theme`;
} else {
  themeBtn.innerHTML = `<i class="fa-solid fa-moon">Light</i> Theme`;
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");

    themeBtn.innerHTML = `<i class="fa-solid fa-sun">Dark</i> Theme`;
  } else {
    localStorage.setItem("theme", "dark");

    themeBtn.innerHTML = `<i class="fa-solid fa-moon">Light</i> Theme`;
  }
});

// ================================
// TIME FORMAT
// ================================

let is24Hour = localStorage.getItem("24hour") === "true";

formatToggle.checked = is24Hour;

formatToggle.addEventListener("change", () => {
  is24Hour = formatToggle.checked;

  localStorage.setItem("24hour", is24Hour);

  updateClock();
});

// ================================
// CLOCK
// ================================

function updateClock() {
  const now = new Date();

  let hours = now.getHours();

  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let period = "AM";

  if (!is24Hour) {
    period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    ampm.style.display = "inline";

    ampm.innerText = period;
  } else {
    ampm.style.display = "none";
  }

  clock.innerText = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();

// ================================
// DATE
// ================================

function updateDate() {
  const now = new Date();

  const options = {
    weekday: "long",

    day: "numeric",

    month: "long",

    year: "numeric",
  };

  date.innerText = now.toLocaleDateString("en-US", options);
}

updateDate();

// ================================
// GREETING
// ================================

function updateGreeting() {
  const hour = new Date().getHours();

  let text = "";

  if (hour < 12) {
    text = "Good Morning";
  } else if (hour < 17) {
    text = "Good Afternoon";
  } else if (hour < 21) {
    text = "Good Evening";
  } else {
    text = "Good Night";
  }

  greeting.innerHTML = `${text},   howdy`;
}

updateGreeting();

// ================================
// OPTIONAL FAKE WEATHER
// ================================

document.getElementById("weather").innerHTML = "32°C • Clear Sky";

const root = document.documentElement;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  root.style.setProperty("--x", `${currentX}px`);
  root.style.setProperty("--y", `${currentY}px`);

  requestAnimationFrame(animate);
}

animate();

// --------------------------
//         Todo Card
// --------------------------

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.querySelector(".task-list");

const filterButtons = document.querySelectorAll(".filters button");
const clearBtn = document.querySelector(".clear-btn");

const pendingCount = document.querySelector(".footer strong:first-child");
const totalCount = document.querySelector(".footer strong:last-child");

const todoContainer = document.querySelector(".todo-container");
const taskBtn = document.querySelector("#taskBtn");
const todoCloseBtn = document.querySelector("#todoCloseBtn");
const todoCart = document.querySelector(".todo-cart");
const totalTaskCount = document.getElementById("total-tasks-count");

taskBtn.addEventListener("click", () => {
  todoContainer.style.display = "flex";
});

todoContainer.addEventListener("click", () => {
  todoContainer.style.display = "none";
});

todoCloseBtn.addEventListener("click", () => {
  todoContainer.style.display = "none";
});

todoCart.addEventListener("click", (e) => {
  e.stopPropagation();
});

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

/*----------------------------
Total tasks 
-----------------------------*/

function totalTasks() {
  totalTaskCount.innerText = tasks.length;
}

/* -----------------------------
   Save Tasks
------------------------------ */

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* -----------------------------
   Update Counter
------------------------------ */

function updateCounter() {
  const pending = tasks.filter((task) => !task.completed).length;

  pendingCount.textContent = pending;
  totalCount.textContent = tasks.length;

  totalTasks();
}

/* -----------------------------
   Render Tasks
------------------------------ */

function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks;

  if (currentFilter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "done") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  filteredTasks.forEach((task) => {
    const index = tasks.indexOf(task);

    const div = document.createElement("div");

    div.className = "task";

    div.innerHTML = `
    <label>

        <input
            type="checkbox"
            ${task.completed ? "checked" : ""}
        >

            <span class="circle"></span>

            <p>${task.text}</p>

    </label>
        `;
    totalTasks();

    const checkbox = div.querySelector("input");

    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;

      saveTasks();

      updateCounter();

      renderTasks();
    });

    // Double click to delete

    div.addEventListener("dblclick", () => {
      if (confirm("Delete this task?")) {
        tasks.splice(index, 1);

        saveTasks();

        updateCounter();

        renderTasks();
      }
    });

    taskList.appendChild(div);
  });

  updateCounter();
}

/* -----------------------------
   Add Task
------------------------------ */

function addTask() {
  const value = taskInput.value.trim();

  if (value === "") {
    alert("Please enter a task.");

    return;
  }

  tasks.unshift({
    text: value,

    completed: false,
  });

  saveTasks();

  renderTasks();

  taskInput.value = "";
}

/* -----------------------------
   Add Button
------------------------------ */

addTaskBtn.addEventListener("click", addTask);

/* -----------------------------
   Enter Key
------------------------------ */

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

/* -----------------------------
   Filters
------------------------------ */

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    const text = btn.innerText.toLowerCase();

    if (text === "all") currentFilter = "all";

    if (text === "active") currentFilter = "active";

    if (text === "done") currentFilter = "done";

    renderTasks();
  });
});

/* -----------------------------
   Clear Done
------------------------------ */

clearBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);

  saveTasks();

  renderTasks();
});

/* -----------------------------
   Initial Load
------------------------------ */

renderTasks();

// ==========================================
//                     PLANNER POPUP
// ===========================================

// Planner

const plannerBtn = document.getElementById("plannerBtn");
const plannerContainer = document.querySelector(".planner-container");
const plannerCloseBtn = document.getElementById("plannerCloseBtn");
const plannerCard = document.querySelector(".planner-card");

plannerBtn.addEventListener("click", () => {
  plannerContainer.style.display = "flex";
});

plannerCloseBtn.addEventListener("click", () => {
  plannerContainer.style.display = "none";
});

plannerContainer.addEventListener("click", () => {
  plannerContainer.style.display = "none";
});

plannerCard.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ======================================
// PLANNER
// ======================================

const plannerTime = document.getElementById("plannerTime");
const plannerText = document.getElementById("plannerText");
const plannerAddBtn = document.getElementById("plannerAddBtn");
const plannerList = document.getElementById("plannerList");
const totalPlansCount = document.getElementById("total-plans-count");

let plannerData = JSON.parse(localStorage.getItem("plannerData")) || [];

// ---------------------------
// Total
// ---------------------------

function countTotalPlans() {
  totalPlansCount.innerText = plannerData.length;
}

// ----------------------------
// Save
// ----------------------------

function savePlanner() {
  localStorage.setItem("plannerData", JSON.stringify(plannerData));
}

// ----------------------------
// Time Format
// ----------------------------

function convertTime(time) {
  let [hour, min] = time.split(":");

  hour = parseInt(hour);

  let ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  return `${hour}:${min} ${ampm}`;
}

// ----------------------------
// Render
// ----------------------------

function renderPlanner() {
  plannerList.innerHTML = "";

  plannerData.sort((a, b) => {
    return a.time.localeCompare(b.time);
  });

  plannerData.forEach((item, index) => {
    plannerList.innerHTML += `

        <div class="planner-item">

            <div class="planner-left">

                <span class="planner-time">

                    ${convertTime(item.time)}

                </span>

                <span class="planner-text">

                    ${item.text}

                </span>

            </div>

            <button
            class="delete-plan"
            data-id="${index}">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;
  });

  savePlanner();
  countTotalPlans();
}

// ----------------------------
// Add
// ----------------------------

plannerAddBtn.addEventListener("click", () => {
  const time = plannerTime.value;

  const text = plannerText.value.trim();

  if (time === "" || text === "") {
    alert("Please enter time & task");

    return;
  }

  plannerData.push({
    time,

    text,
  });

  plannerText.value = "";

  plannerTime.value = "";

  renderPlanner();
});

// ----------------------------
// Enter Key
// ----------------------------

plannerText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    plannerAddBtn.click();
  }
});

// ----------------------------
// Delete
// ----------------------------

plannerList.addEventListener("click", (e) => {
  const btn = e.target.closest(".delete-plan");

  if (!btn) return;

  const index = btn.dataset.id;

  plannerData.splice(index, 1);

  renderPlanner();
});

// ----------------------------
// Initial Render
// ----------------------------

renderPlanner();

// =======================
// GOALS
// =======================

const goalBtn = document.getElementById("goalBtn");
const goalsContainer = document.querySelector(".goals-container");
const goalsCard = document.querySelector(".goals-card");
const goalCloseBtn = document.getElementById("goalCloseBtn");
const totalGoalsCount = document.getElementById("total-goals-count");

goalBtn.addEventListener("click", () => {
  goalsContainer.style.display = "flex";
});

goalCloseBtn.addEventListener("click", () => {
  goalsContainer.style.display = "none";
});

goalsContainer.addEventListener("click", () => {
  goalsContainer.style.display = "none";
});

goalsCard.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ======================================
// GOALS
// ======================================

const goalInput = document.getElementById("goalInput");
const goalAddBtn = document.getElementById("goalAddBtn");
const goalList = document.getElementById("goalList");

const goalPending = document.getElementById("goalPending");
const goalTotal = document.getElementById("goalTotal");

const goalClearBtn = document.getElementById("goalClearBtn");
const mainGoal = document.getElementById("mainGoal");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

// ===============================
// Total Goals
// ===============================

function totalGoals() {
  totalGoalsCount.innerText = goals.length;
}

// ===============================
// Save Goals
// ===============================

function saveGoals() {
  localStorage.setItem("goals", JSON.stringify(goals));
}

// ===============================
// Update Current Goal
// ===============================

function updateMainGoal() {
  const activeGoal = goals.find((goal) => !goal.completed);

  if (activeGoal) {
    mainGoal.innerText = activeGoal.text;
  } else {
    mainGoal.innerText = "Nothing Yet";
  }
}

// ===============================
// Counter
// ===============================

function updateGoalCounter() {
  const pending = goals.filter((goal) => !goal.completed).length;

  goalPending.innerText = pending;

  goalTotal.innerText = goals.length;
}

// ===============================
// Render
// ===============================

function renderGoals() {
  goalList.innerHTML = "";

  goals.forEach((goal, index) => {
    const div = document.createElement("div");

    div.className = "goal-item";

    div.innerHTML = `

        <div class="goal-left">

            <input
                type="checkbox"
                ${goal.completed ? "checked" : ""}>

            <span class="goal-text">

                ${goal.text}

            </span>

        </div>

        <button
            class="goal-delete">

            <i class="fa-solid fa-trash"></i>

        </button>

        `;

    // Complete

    const checkbox = div.querySelector("input");

    checkbox.addEventListener("change", () => {
      goals[index].completed = checkbox.checked;

      saveGoals();

      renderGoals();
    });

    // Delete

    div.querySelector(".goal-delete").addEventListener("click", () => {
      if (confirm("Delete this goal?")) {
        goals.splice(index, 1);

        saveGoals();

        renderGoals();
      }
    });

    goalList.appendChild(div);
  });
  totalGoals();

  updateGoalCounter();

  updateMainGoal();
}

// ===============================
// Add Goal
// ===============================

function addGoal() {
  const text = goalInput.value.trim();

  if (text === "") {
    alert("Please enter a goal.");

    return;
  }

  goals.unshift({
    text,

    completed: false,
  });

  goalInput.value = "";

  saveGoals();

  renderGoals();
}

// ===============================
// Button
// ===============================

goalAddBtn.addEventListener("click", addGoal);

// ===============================
// Enter Key
// ===============================

goalInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addGoal();
  }
});

// ===============================
// Clear Done
// ===============================

goalClearBtn.addEventListener("click", () => {
  goals = goals.filter((goal) => !goal.completed);
  saveGoals();
  renderGoals();
});

// ===============================
// Initial Load
// ===============================

renderGoals();

// ==========================
// POMODORO
// ==========================

const pomodoroBtn = document.getElementById("pomodoroBtn");
const pomodoroContainer = document.querySelector(".pomodoro-container");
const pomodoroCard = document.querySelector(".pomodoro-card");
const pomodoroCloseBtn = document.getElementById("pomodoroCloseBtn");

pomodoroBtn.addEventListener("click", () => {
  pomodoroContainer.style.display = "flex";
});

pomodoroCloseBtn.addEventListener("click", () => {
  pomodoroContainer.style.display = "none";
});

pomodoroContainer.addEventListener("click", () => {
  pomodoroContainer.style.display = "none";
});

pomodoroCard.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ======================================
// POMODORO TIMER
// ======================================

const timer = document.getElementById("timer");
const startPauseBtn = document.getElementById("startPauseTimer");
const resetBtn = document.getElementById("resetTimer");
const nextBtn = document.getElementById("nextSession");

const sessionText = document.getElementById("sessionText");

const tabs = document.querySelectorAll(".pomo-tab");

const progressCircle = document.querySelector(".ring-progress");

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

progressCircle.style.strokeDasharray = CIRCUMFERENCE;

let mode = localStorage.getItem("pomoMode") || "work";

let session = Number(localStorage.getItem("pomoSession")) || 1;

let durations = {
  work: 5 * 60,
  short: 1 * 60,
  long: 3 * 60,
};
let totalSeconds = durations[mode];

let remaining = Number(localStorage.getItem("pomoRemaining"));
let interval = null;
let running = false;

// const alarm = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
const alarm = new Audio("./instaRingtone.mp3");

if ("Notification" in window && Notification.permission === "granted") {
  new Notification("Pomodoro", {
    body: mode === "work" ? "Work Session Completed 🎉" : "Break Finished ✅",
  });
}

if (isNaN(remaining)) {
  remaining = totalSeconds;
}

function savePomodoro() {
  localStorage.setItem("pomoMode", mode);

  localStorage.setItem("pomoSession", session);

  localStorage.setItem("pomoRemaining", remaining);
}

// =========================
// Update Timer
// =========================

function updateTimer() {
  let min = Math.floor(remaining / 60);
  let sec = remaining % 60;
  timer.innerText = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  let progress = remaining / totalSeconds;
  progressCircle.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  savePomodoro();
}

// =========================
// Change Mode
// =========================

function setMode(newMode) {
  mode = newMode;

  totalSeconds = durations[mode];

  remaining = totalSeconds;

  clearInterval(interval);

  running = false;

  startPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;

  tabs.forEach((btn) => btn.classList.remove("active"));

  document.querySelector(`[data-mode="${mode}"]`).classList.add("active");

  if (mode === "work") {
    sessionText.innerText = `Session ${session} · Work`;
  }

  if (mode === "short") {
    sessionText.innerText = `Session ${session} · Short Break`;
  }

  if (mode === "long") {
    sessionText.innerText = `Session ${session} · Long Break`;
  }

  updateTimer();
  savePomodoro();
}

// =========================
// Start
// =========================

function startTimer() {
  interval = setInterval(() => {
    if (remaining > 0) {
      remaining--;

      updateTimer();
    } else {
      clearInterval(interval);

      running = false;

      startPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;

      alarm.play();

      if (Notification.permission === "granted") {
        new Notification(
          "Pomodoro",

          {
            body:
              mode === "work"
                ? "Work Session Completed 🎉"
                : "Break Finished ✅",
          },
        );
      }

      autoNext();
    }
  }, 1000);
}

// =========================
// Auto Session
// =========================

function autoNext() {
  if (mode === "work") {
    if (session % 4 === 0) {
      setMode("long");
    } else {
      setMode("short");
    }
  } else {
    session++;

    setMode("work");
  }
}

// =========================
// Play Pause
// =========================

startPauseBtn.addEventListener("click", () => {
  if (running) {
    clearInterval(interval);
    running = false;
    startPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    savePomodoro();
  } else {
    running = true;

    startPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;

    startTimer();
    savePomodoro();
  }
});

// =========================
// Reset
// =========================

resetBtn.addEventListener("click", () => {
  clearInterval(interval);

  running = false;
  remaining = totalSeconds;

  startPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;

  updateTimer();
  savePomodoro();
});

// =========================
// Next Session
// =========================

nextBtn.addEventListener("click", () => {
  clearInterval(interval);

  running = false;

  startPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  autoNext();
});

// =========================
// Tabs
// =========================

tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    setMode(btn.dataset.mode);
  });
});

// =========================
// Initial
// =========================

updateTimer();
