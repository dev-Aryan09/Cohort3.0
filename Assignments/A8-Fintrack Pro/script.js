// ======================================
// DOM Elements
// ======================================

const loginContainer = document.getElementById("loginContainer");
const registerContainer = document.getElementById("registerContainer");

const loginForm = document.querySelector("#loginContainer form");
const registerForm = document.querySelector("#registerContainer form");

const loginOpen = document.querySelector("#loginContainer span");
const registerOpen = document.querySelector("#registerContainer span");

const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");

const container = document.querySelector(".container");
const userName = document.querySelector(".header-right span");
const logoutBtn = document.getElementById("logout");

// ======================================
// Helper Functions
// ======================================

function showMessage(element, message, type = "error") {
  if (!element) return;

  element.innerHTML = message;
  element.className = `form-message ${type}`;
}

function showToast(text) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.innerHTML = text;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ======================================
// Local Storage
// ======================================

let users = JSON.parse(localStorage.getItem("register")) || [];

function saveUsers() {
  localStorage.setItem("register", JSON.stringify(users));
}

// ======================================
// Switch Forms
// ======================================

registerOpen.addEventListener("click", () => {
  loginContainer.style.display = "flex";
  registerContainer.style.display = "none";

  showMessage(loginMessage, "");
  showMessage(registerMessage, "");
});

loginOpen.addEventListener("click", () => {
  registerContainer.style.display = "flex";
  loginContainer.style.display = "none";

  showMessage(loginMessage, "");
  showMessage(registerMessage, "");
});

// ======================================
// Register
// ======================================

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();

  if (!username || !password) {
    showMessage(registerMessage, "Please fill all fields.");

    return;
  }

  if (username.length < 3) {
    showMessage(registerMessage, "Username must contain minimum 3 characters.");

    return;
  }

  if (password.length < 4) {
    showMessage(registerMessage, "Password must contain minimum 4 characters.");

    return;
  }

  const exists = users.some((user) => user.username === username);

  if (exists) {
    showMessage(registerMessage, "Username already exists.");

    return;
  }

  const newUser = {
    username,
    password,
  };

  users.push(newUser);

  saveUsers();

  localStorage.setItem("login", JSON.stringify(newUser));

  showMessage(registerMessage, "Registration Successful", "success");

  showToast("Account Created Successfully");

  checkLogin();

  e.target.reset();
});

// ======================================
// Login
// ======================================

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();

  if (!username || !password) {
    showMessage(loginMessage, "Please fill all fields.");

    return;
  }

  const user = users.find((item) => {
    return item.username === username && item.password === password;
  });

  if (!user) {
    showMessage(loginMessage, "Invalid Username or Password.");

    return;
  }

  localStorage.setItem("login", JSON.stringify(user));

  showMessage(loginMessage, "Login Successful", "success");

  showToast("Welcome Back");

  checkLogin();

  e.target.reset();
});

// ======================================
// CHECK LOGIN
// ======================================

function getLoginUser() {
  const data = localStorage.getItem("login");

  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch (err) {
    localStorage.removeItem("login");

    return null;
  }
}

function checkLogin() {
  const user = getLoginUser();

  if (user) {
    if (userName) {
      userName.innerHTML = user.username;
    }

    if (container) {
      container.style.display = "flex";
    }

    if (loginContainer) {
      loginContainer.style.display = "none";
    }

    if (registerContainer) {
      registerContainer.style.display = "none";
    }
  } else {
    if (container) {
      container.style.display = "none";
    }

    if (loginContainer) {
      loginContainer.style.display = "flex";
    }

    if (registerContainer) {
      registerContainer.style.display = "none";
    }

    if (userName) {
      userName.innerHTML = "Guest";
    }
  }
}

checkLogin();

// =====================================
// Sidebar - Hamburder
// =====================================

const hamburgerBtn = document.querySelector("#hamburgerBtn");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector("#closeSidebarBtn");

hamburgerBtn?.addEventListener("click", () => {
  sidebar?.classList.add("open");
});

closeSidebarBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  sidebar?.classList.remove("open");
});

// ======================================
// LOGOUT
// ======================================

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("login");

    showToast("Logout Successfully");

    checkLogin();
  });
}

// ======================================
// TRANSACTIONS
// ======================================

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let editIndex = -1;

// ======================================
// SAVE TRANSACTIONS
// ======================================

function saveTransactions() {
  localStorage.setItem(
    "transactions",

    JSON.stringify(transactions),
  );
}

// ======================================
// DOM
// ======================================

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const transactionCount = document.getElementById("transactionCount");

const transactionTable = document.getElementById("transactionTable");

// ======================================
// UPDATE SUMMARY
// ======================================

function updateSummary() {
  let totalIncome = 0;

  let totalExpense = 0;

  transactions.forEach((item) => {
    if (item.type === "income") {
      totalIncome += Number(item.amount);
    } else {
      totalExpense += Number(item.amount);
    }
  });

  if (income) {
    income.innerHTML = `₹${totalIncome.toLocaleString()}`;
  }

  if (expense) {
    expense.innerHTML = `₹${totalExpense.toLocaleString()}`;
  }

  if (balance) {
    balance.innerHTML = `₹${(totalIncome - totalExpense).toLocaleString()}`;
  }

  if (transactionCount) {
    transactionCount.innerHTML = transactions.length;
  }
}

// ======================================
// INITIAL LOAD
// ======================================

updateSummary();

// ======================================
// TRANSACTION TABLE RENDER
// ======================================

function renderTransactions() {
  if (!transactionTable) return;

  transactionTable.innerHTML = "";

  if (transactions.length === 0) {
    transactionTable.innerHTML = `

        <tr>

            <td colspan="6">

                <div class="empty">

                    <i class="fa-regular fa-folder-open"></i>

                    <h3>No Transactions Found</h3>

                </div>

            </td>

        </tr>

        `;

    updateSummary();

    return;
  }

  transactions.forEach((item, index) => {
    transactionTable.innerHTML += `

        <tr>

            <td>${item.date}</td>

            <td>${item.description}</td>

            <td>${item.category}</td>

            <td>

                <span class="${
                  item.type === "income" ? "income-tag" : "expense-tag"
                }">

                    ${item.type}

                </span>

            </td>

            <td class="${
              item.type === "income" ? "income-color" : "expense-color"
            }">

                ${item.type === "income" ? "+" : "-"}

                ₹${Number(item.amount).toLocaleString()}

            </td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editTransaction(${index})">

                    <i class="fa-solid fa-pen"></i>

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTransaction(${index})">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </td>

        </tr>

        `;
  });

  updateSummary();
}

// ======================================
// DELETE TRANSACTION
// ======================================

function deleteTransaction(index) {
  const check = confirm("Are you sure you want to delete this transaction?");

  if (!check) return;

  transactions.splice(index, 1);

  saveTransactions();

  renderTransactions();

  updateChart();

  showToast("Transaction Deleted");
}

// ======================================
// EDIT TRANSACTION
// ======================================

function editTransaction(index) {
  editIndex = index;

  const item = transactions[index];

  document.getElementById("type").value = item.type;

  document.getElementById("description").value = item.description;

  document.getElementById("amount").value = item.amount;

  document.getElementById("date").value = item.date;

  document.getElementById("category").value = item.category;

  document.querySelector(".save-btn").innerHTML = "Update Transaction";

  modal.style.display = "flex";
}

// ======================================
// FIRST RENDER
// ======================================

renderTransactions();

// ======================================
// MODAL
// ======================================

const modal = document.getElementById("transactionModal");
const addBtn = document.querySelector(".add-btn");
const closeBtn = document.getElementById("closeModal");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    editIndex = -1;

    document.getElementById("transactionForm").reset();

    document.querySelector(".save-btn").innerHTML = "Save Transaction";

    modal.style.display = "flex";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ======================================
// FORM
// ======================================

const transactionForm = document.getElementById("transactionForm");

const typeInput = document.getElementById("type");

const descriptionInput = document.getElementById("description");

const amountInput = document.getElementById("amount");

const dateInput = document.getElementById("date");

const categoryInput = document.getElementById("category");

// ======================================
// ADD / UPDATE TRANSACTION
// ======================================

transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = descriptionInput.value.trim();

  const amount = Number(amountInput.value);

  const date = dateInput.value;

  const category = categoryInput.value;

  const type = typeInput.value;

  if (!description || !amount || !date || !category) {
    showToast("Please fill all fields");

    return;
  }

  if (amount <= 0) {
    showToast("Amount must be greater than zero");

    return;
  }

  const transaction = {
    type,

    description,

    amount,

    date,

    category,
  };

  if (editIndex === -1) {
    transactions.unshift(transaction);

    showToast("Transaction Added");
  } else {
    transactions[editIndex] = transaction;

    showToast("Transaction Updated");

    editIndex = -1;
  }

  saveTransactions();

  renderTransactions();

  updateChart();

  transactionForm.reset();

  document.querySelector(".save-btn").innerHTML = "Save Transaction";

  modal.style.display = "none";
});

// ======================================
// SEARCH, FILTER & SORT
// ======================================

const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");
const sortBy = document.getElementById("sortBy");

function filterTransactions() {
  let data = [...transactions];

  // Search
  const keyword = searchInput.value.toLowerCase().trim();

  if (keyword) {
    data = data.filter((item) => {
      return (
        item.description.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword) ||
        item.type.toLowerCase().includes(keyword) ||
        item.amount.toString().includes(keyword) ||
        item.date.includes(keyword)
      );
    });
  }

  // Filter

  if (filterType.value !== "all") {
    data = data.filter((item) => {
      return item.type === filterType.value;
    });
  }

  // Sort

  if (sortBy.value === "oldest") {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  renderFilteredTransactions(data);
}

// ======================================
// RENDER FILTER DATA
// ======================================

function renderFilteredTransactions(data) {
  transactionTable.innerHTML = "";

  if (data.length === 0) {
    transactionTable.innerHTML = `

        <tr>

            <td colspan="6">

                <div class="empty">

                    <i class="fa-regular fa-folder-open"></i>

                    <h3>No Transactions Found</h3>

                </div>

            </td>

        </tr>

        `;

    return;
  }

  data.forEach((item) => {
    const index = transactions.indexOf(item);

    transactionTable.innerHTML += `

        <tr>

            <td>${item.date}</td>

            <td>${item.description}</td>

            <td>${item.category}</td>

            <td>

                <span class="${
                  item.type === "income" ? "income-tag" : "expense-tag"
                }">

                ${item.type}

                </span>

            </td>

            <td class="${
              item.type === "income" ? "income-color" : "expense-color"
            }">

                ${item.type === "income" ? "+" : "-"}

                ₹${Number(item.amount).toLocaleString()}

            </td>

            <td>

                <button

                class="edit-btn"

                onclick="editTransaction(${index})">

                <i class="fa-solid fa-pen"></i>

                </button>

                <button

                class="delete-btn"

                onclick="deleteTransaction(${index})">

                <i class="fa-solid fa-trash"></i>

                </button>

            </td>

        </tr>

        `;
  });
}

searchInput.addEventListener("input", filterTransactions);

filterType.addEventListener("change", filterTransactions);

sortBy.addEventListener("change", filterTransactions);

// ======================================
// CHART
// ======================================

let financeChart;

const ctx = document.getElementById("financeChart");

function updateChart() {
  if (!ctx) return;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let incomeData = new Array(12).fill(0);
  let expenseData = new Array(12).fill(0);

  transactions.forEach((item) => {
    const date = new Date(item.date);

    const month = date.getMonth();

    // if (month > 5) return; // Jan-Jun only

    if (item.type === "income") {
      incomeData[month] += Number(item.amount);
    } else {
      expenseData[month] += Number(item.amount);
    }
  });

  if (financeChart) {
    financeChart.destroy();
  }

  financeChart = new Chart(ctx, {
    type: "bar",

    data: {
      labels: monthNames,

      datasets: [
        {
          label: "Income",
          data: incomeData,
          backgroundColor: "#16a34a",
          borderRadius: 8,
          borderSkipped: false,
          barThickness: 40,
        },

        {
          label: "Expense",
          data: expenseData,
          backgroundColor: "#dc2626",
          borderRadius: 8,
          borderSkipped: false,
          barThickness: 40,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      animation: {
        duration: 1200,
      },

      plugins: {
        legend: {
          position: "top",

          labels: {
            color: "#ffffff",
            boxWidth: 35,
            font: {
              size: 16,
            },
          },
        },
      },

      scales: {
        x: {
          grid: {
            color: "#374151",
          },

          ticks: {
            color: "#9ca3af",

            font: {
              size: 14,
            },
          },
        },

        y: {
          beginAtZero: true,

          grid: {
            color: "#374151",
          },

          ticks: {
            color: "#9ca3af",

            callback(value) {
              return value.toLocaleString();
            },
          },
        },
      },
    },
  });
}

updateChart();
renderTransactions();

// ======================================
// THEME
// ======================================

const themeToggle = document.getElementById("themeToggle");
console.log(themeToggle);

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");

  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark",
  );
});

const settingBtn = document.getElementById("settingBtn");
const settingModal = document.getElementById("settingModal");
const closeSetting = document.getElementById("closeSetting");

// Open Settings
settingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  settingModal.style.display = "flex";
});

// Close Settings
closeSetting.addEventListener("click", () => {
  settingModal.style.display = "none";
});

// Outside Click Close
window.addEventListener("click", (e) => {
  if (e.target === settingModal) {
    settingModal.style.display = "none";
  }
});

// ======================================
// RESET DATA
// ======================================

document.getElementById("resetData").addEventListener("click", () => {
  const check = confirm("Delete all transactions?");

  if (!check) return;

  transactions = [];

  saveTransactions();

  renderTransactions();

  updateChart();

  showToast("All Transactions Deleted");
});
