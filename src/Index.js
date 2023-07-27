import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const inputForm = document.querySelector("form > input");
const todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputForm.value;
  inputForm.value = "";
  if (value === "") {
    alert("Votre ToDo est vide !");
  } else {
    ajoutTodo(value);
  }
});

function todoCreateElements(todo, index) {
  const li = document.createElement("li");
  const btnSuppression = document.createElement("button");
  btnSuppression.innerHTML = "Supprimer";
  btnSuppression.className = "violet-medium";
  const btnModif = document.createElement("button");
  btnModif.innerHTML = "Modifier";
  btnModif.className = "violet-clair";
  btnModif.addEventListener("click", (event) => {
    event.stopPropagation();
    cocheModif(index);
  });
  btnSuppression.addEventListener("click", (event) => {
    event.stopPropagation();
    supprimerTodo(index);
  });

  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p class="${todo.done ? "raye" : ""}"  >${todo.text}</p>
    `;
  li.addEventListener("click", (event) => {
    cocheTodo(index);
  });
  li.append(btnModif, btnSuppression);
  return li;
}

function todoModifElements(todo, index) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      modifTodo(index, input);
    }
    if (event.key === "Escape") {
      cocheModif(index);
    }
  });
  const btnAnnul = document.createElement("button");
  btnAnnul.innerHTML = "Annuler";
  btnAnnul.className = "violet-clair";
  btnAnnul.addEventListener("click", (event) => {
    event.stopPropagation();
    cocheModif(index);
  });
  const btnModif = document.createElement("button");
  btnModif.innerHTML = "Confirmer";
  btnModif.className = "violet-medium";
  btnModif.addEventListener("click", (event) => {
    event.stopPropagation();
    modifTodo(index, input);
  });

  li.append(input, btnAnnul, btnModif);
  return li;
}

function todo() {
  const todoMap = todos.map((todo, index) => {
    if (todo.modifMode) {
      return todoModifElements(todo, index);
    } else {
      return todoCreateElements(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todoMap);
}

function ajoutTodo(text) {
  text = text.trim();
  if (text) {
    const textMaj = text.charAt(0).toUpperCase() + text.slice(1);
    todos.push({
      text: textMaj,
      done: false,
      modifMode: false,
    });
    todo();
  }
}

function supprimerTodo(index) {
  todos.splice(index, 1);
  todo();
}

function cocheTodo(index) {
  todos[index].done = !todos[index].done;
  todo();
}

function cocheModif(index) {
  todos[index].modifMode = !todos[index].modifMode;
  todo();
}

function modifTodo(index, input) {
  todos[index].text = input.value;
  todos[index].modifMode = !todos[index].modifMode;
  todo();
}

todo();
