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
  li.innerHTML = `
    <span class="todo ${todo.done ? " done" : ""}  "></span>
    <p>${todo.text}</p>
    <button>Supprimer</button>
    `;
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

todo();
