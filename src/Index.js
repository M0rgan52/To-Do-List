import "./style.css";

const ul = document.querySelector("ul");

// const todos = [
//   {
//     text: "1ere chose à faire",
//     done: true,
//   },
//   {
//     text: "2nde chose à faire",
//     done: false,
//   },
// ];

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

todo();
