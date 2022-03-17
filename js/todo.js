const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let todos = [];

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id != parseInt(li.id));
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.classList.add("margin-bottom10");
  li.classList.add("li-width");
  li.id = newTodo.id;
  const todos = document.createElement("span");
  todos.innerText = newTodo.text;
  const button = document.createElement("button");
  button.classList.add("btn-position");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(todos);
  li.appendChild(button);
  todoList.appendChild(li);
}

function toDoSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", toDoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
