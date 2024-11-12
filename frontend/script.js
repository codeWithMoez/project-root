const apiUrl = "http://localhost:5000/api/todos";

async function fetchTodos() {
  const response = await fetch(apiUrl);
  const todos = await response.json();
  document.getElementById("todo-list").innerHTML = todos
    .map(
      (todo) =>
        `<li>${todo.text} <button onclick="deleteTodo('${todo._id}')">Delete</button></li>`
    )
    .join("");
}

async function addTodo() {
  const text = document.getElementById("todo-input").value;
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  document.getElementById("todo-input").value = "";
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchTodos();
}

fetchTodos();
