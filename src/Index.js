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
  todo();
});

function todoCreateElements(todo, index) {
  const li = document.createElement("li");
  const btnSuppression = document.createElement("button");
  btnSuppression.innerHTML = "Supprimer";
  btnSuppression.addEventListener("click", (event) => {
    supprimerTodo(index);
  });
  li.innerHTML = `
    <span class="todo ${todo.done ? " done" : ""}  "></span>
    <p>${todo.text}</p>
    `;
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
}
function supprimerTodo(index) {
  todos.splice(index, 1);
  todo();
}

todo();
