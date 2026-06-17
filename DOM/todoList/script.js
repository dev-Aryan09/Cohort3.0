const input = document.querySelector("input");
const addBtn = document.querySelector("#add");
const todoList = document.querySelector(".todo-list");

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
  editBtn();
});

const editBtn = () => {
  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
      const editBoxDiv = document.createElement("div");
      editBoxDiv.classList.add("edit-box");

      const editInput = document.createElement("input");
      editInput.setAttribute("id", "edit-input");
      editInput.setAttribute("type", "text");
      editInput.setAttribute("placeholder", "Update todo");
      editBoxDiv.append(editInput);

      const editBtnsDiv = document.createElement("div");
      editBtnsDiv.classList.add("edit-btns");

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.setAttribute("id", "cancel");
      cancelBtn.classList.add("edit-btn");
      editBtnsDiv.append(cancelBtn);
      cancelBtn.addEventListener("click", () => cancelButton(editBoxDiv));

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.setAttribute("id", "save");
      saveBtn.classList.add("edit-btn");
      editBtnsDiv.append(saveBtn);
      saveBtn.addEventListener("click", () =>
        saveButton(editInput, todoText, editBoxDiv),
      );

      editBoxDiv.append(editBtnsDiv);

      const todoItem = e.target.closest(".li");

      // if editable field already exist then won't add another with existing
      const isExistEditBoxDiv = todoItem.nextElementSibling;
      if (
        todoItem.isExistEditBoxDiv &&
        isExistEditBoxDiv.classList.contains("edit-box")
      ) {
        return;
      }
      todoItem.after(editBoxDiv);

      const todoText = e.target.closest(".li").querySelector("h3");
    });
  });
};

const cancelButton = (editBoxDiv) => {
  editBoxDiv.remove();
};

const saveButton = (editInput, todoText, editBoxDiv) => {
  if (editInput.value.trim() === "") return;

  todoText.textContent = editInput.value;

  editBoxDiv.remove();
};

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
