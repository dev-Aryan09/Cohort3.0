const input = document.querySelector("input");
const addBtn = document.querySelector("#add");
const todoList = document.querySelector(".todo-list");
const editBtn = document.querySelector(".edit");

const deleteBtn = () => {
  /*
Downside of this approach:  
Every time you add a new todo, you’re re‑attaching listeners to all delete buttons (including old ones).
That means if you add 5 todos, the first delete button might have 5 listeners stacked on it. It still works,
but it’s inefficient and can cause duplicate actions.

"Event Delegation" is the best approach for doing this.
*/
  const delBtns = document.querySelectorAll(".del");
  delBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      e.target.closest(".li").remove();
    });
  });
};

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
  deleteBtn();
});
