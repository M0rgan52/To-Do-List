import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const inputForm = document.querySelector("form > input");
const todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputForm.value;
  inputForm.value = "";
  ajoutTodo(value);
});

function todoCreateElements(todo, index) {
  const li = document.createElement("li");
  const btnSuppression = document.createElement("button");
  btnSuppression.innerHTML = "Supprimer";
  btnSuppression.addEventListener("click", (event) => {
    event.stopPropagation();
    supprimerTodo(index);
  });
  li.innerHTML = `
    <span class="todo ${todo.done ? " done" : ""}  "></span>
    <p>${todo.text}</p>
    `;
  li.addEventListener("click", (event) => {
    cocheTodo(index);
  });
  li.appendChild(btnSuppression);
  return li;
}

function todo() {
  const todoMap = todos.map((todo, index) => {
    return todoCreateElements(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todoMap);
}

function ajoutTodo(text) {
  todos.push({
    text,
    done: false,
  });
  todo();
}

function supprimerTodo(index) {
  todos.splice(index, 1);
  todo();
}

function cocheTodo(index) {
  todos[index].done = !todos[index].done;
  todo();
}

todo();
