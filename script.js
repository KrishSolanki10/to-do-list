const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${input.value}
    <span onclick="removeTask(this)">✖</span>
  `;

  list.appendChild(li);
  input.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
