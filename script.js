function btnHandler(event) {
  event.preventDefault();
  //   const form = document.querySelector(".form");
  const input = document.querySelector(".todo-input").value;
  const todo_lists = document.querySelector(".todo-lists");

  const todo = input;

  const todo_el = document.createElement("div");
  todo_el.classList.add("todo");

  const todo_input_el = document.createElement("input");
  todo_input_el.classList.add("todo-edit-list");
  todo_input_el.type = "text";
  todo_input_el.value = todo;
  todo_input_el.setAttribute("readonly", "readonly");

  todo_el.appendChild(todo_input_el);

  const todo_action = document.createElement("div");
  todo_action.classList.add("action");

  todo_el.appendChild(todo_action);

  const todo_edit_btn = document.createElement("button");
  todo_edit_btn.classList.add("edit");
  todo_edit_btn.innerText = "Edit";

  const todo_delete_btn = document.createElement("button");
  todo_delete_btn.classList.add("delete");
  todo_delete_btn.innerText = "Delete";

  todo_action.appendChild(todo_edit_btn);
  todo_action.appendChild(todo_delete_btn);

  todo_lists.appendChild(todo_el);

  todo_edit_btn.addEventListener("click", (e) => {
    if (todo_edit_btn.innerText.toLowerCase() === "edit") {
      todo_edit_btn.innerText = "Save";
      todo_input_el.removeAttribute("readonly");
    } else {
      todo_edit_btn.innerText = "Edit";
      todo_input_el.setAttribute("readonly", "readonly");
    }
  });

  todo_delete_btn.addEventListener("click", (e) => {
    todo_lists.removeChild(todo_el);
  });
  //   return (input = "");
}
