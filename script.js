function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");

  listItem.innerHTML = `
        <label><input type="checkbox" onchange="toggleTask(this)"> ${taskText}</label>
        <button onclick="removeTask(this)">Hapus</button>
    `;

  taskList.appendChild(listItem);
  taskInput.value = "";
}

function removeTask(button) {
  const taskList = document.getElementById("taskList");
  const listItem = button.parentNode;
  taskList.removeChild(listItem);
}

function toggleTask(checkbox) {
  const label = checkbox.parentElement;
  if (checkbox.checked) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }
}
