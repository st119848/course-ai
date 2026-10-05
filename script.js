const todos = [];

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");

function renderTodos() {
  todoList.innerHTML = "";
  emptyMessage.hidden = todos.length > 0;

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `Mark "${todo.text}" as complete`);
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      renderTodos();
    });

    const text = document.createElement("span");
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const todoIndex = todos.indexOf(todo);
      todos.splice(todoIndex, 1);
      renderTodos();
    });

    item.append(checkbox, text, deleteButton);
    todoList.append(item);
  });
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) {
    return;
  }

  todos.push({
    text,
    completed: false,
  });

  todoInput.value = "";
  todoInput.focus();
  renderTodos();
});

renderTodos();
