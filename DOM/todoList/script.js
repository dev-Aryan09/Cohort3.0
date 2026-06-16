const input = document.querySelector("input");
const addBtn = document.querySelector("#add");
const todoList = document.querySelector(".todo-list");
const editBtn = document.querySelector(".edit");

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  todoList.innerHTML += ` <div class="li">
            <h3>${input.value}</h3>
            <div>
                <button class="btn edit">Edit</button>
                <button class="btn del">Delete</button>
            </div>
        </div>`;
  input.value = "";
});
