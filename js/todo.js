const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-form input");
let todos = [];
const TODOS_KEY = "todos";

function savetodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleTodoForm(e) {
  e.preventDefault();
  const inputvalue = todoInput.value;
  todoInput.value = "";
  const inputvalueOBJ = {
    text: inputvalue,
    id: Date.now(),
  };
  todos.push(inputvalueOBJ);
  plusli(inputvalueOBJ);
  savetodo();
}

todoForm.addEventListener("submit", handleTodoForm);

function plusli(inputvalueee) {
  const li = document.createElement("li");
  li.id = inputvalueee.id;
  const span = document.createElement("span");
  span.innerText = inputvalueee.text;
  const deletebtn = document.createElement("button");
  deletebtn.innerText = "😢";
  li.appendChild(span);
  li.appendChild(deletebtn);
  todoList.appendChild(li);
  deletebtn.addEventListener("click", Dbtn);
}

function Dbtn(event) {
  const liselect = event.target.parentElement;
  liselect.remove();
  todos = todos.filter((a) => a.id !== parseInt(liselect.id));
  savetodo();
}

const savedtodo = localStorage.getItem(TODOS_KEY);

if (savedtodo !== null) {
  const parsetodo = JSON.parse(savedtodo);
  todos = parsetodo;
  parsetodo.forEach(plusli);
}
