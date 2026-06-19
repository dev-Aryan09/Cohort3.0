const form = document.querySelector("form");
const inpName = document.querySelector("#name");
const inpEmail = document.querySelector("#email");
const inpUrl = document.querySelector("#url");
const users = document.querySelector(".users");

// dummy users data
const usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    dob: "1996-09-22",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    email: "rohan.gupta@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "2000-01-08",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "1997-07-30",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "1995-12-12",
  },
];

// Generating UI dynamically
const createUi = () => {
  users.innerHTML = "";
  usersData.forEach((user, index) => {
    users.innerHTML += `
    <div class="user_card">
    <div class="img_box">
    <img src = ${user.imageUrl} alt="image here" />
    </div>
    <div class="text">
    <h3>Name - ${user.name}</h3>
    <p>Email - ${user.email}</p>
    </div>
    <div class="actions">
    <button id="edit">Edit</button>
    <button id="del" onClick = "deleteUser(${index})">Delete</button>
    </div>
    </div>
    `;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = inpName.value;
  const email = inpEmail.value;
  const imageUrl = inpUrl.value;

  usersData.push({
    name,
    email,
    imageUrl,
  });

  createUi();
  form.reset();
});

const deleteUser = (index) => {
  usersData.splice(index, 1);
  createUi();
};
