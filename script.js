import { initialData } from "./initialData.js";

let tasks = [...initialData];

let selectedTaskId = null;

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  setupModalEvents();
});

function renderTasks() {
  clearColumns();

  tasks.forEach((task) => {
    const taskCard = createTaskCard(task);
    const column = document.querySelector(
      `.column-div[data-status="${task.status}"] .tasks-container`,
    );

    if (column) {
      column.appendChild(taskCard);
    }
  });

  updateColumnCounts();
}

function clearColumns() {
  document
    .querySelectorAll(".tasks-container")
    .forEach((container) => (container.innerHTML = ""));
}

function createTaskCard(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");
  taskDiv.textContent = task.title;
  taskDiv.addEventListener("click", () => openTaskModal(task.id));
  return taskDiv;
}

function openTaskModal(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  selectedTaskId = taskId;

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  document.getElementById("task-modal").showModal();
}

function closeModal() {
  document.getElementById("task-modal").close();
}

function saveTaskChanges() {
  const task = tasks.find((t) => t.id === selectedTaskId);
  if (!task) return;

  task.title = document.getElementById("task-title").value;
  task.description = document.getElementById("task-desc").value;
  task.status = document.getElementById("task-status").value;

  renderTasks();
  closeModal();
}

function updateColumnCounts() {
  const counts = {
    "to-do": 0,
    "in-progress": 0,
    done: 0,
  };

  tasks.forEach((task) => {
    if (counts[task.status] !== undefined) {
      counts[task.status]++;
    }
  });

  document.getElementById("toDoText").textContent =
    `To Do (${counts["to-do"]})`;
  document.getElementById("doingText").textContent =
    `In Progress (${counts["in-progress"]})`;
  document.getElementById("doneText").textContent = `Done (${counts.done})`;
}

function setupModalEvents() {
  document
    .getElementById("close-modal-btn")
    .addEventListener("click", closeModal);

  document
    .getElementById("save-task-btn")
    .addEventListener("click", saveTaskChanges);
}
