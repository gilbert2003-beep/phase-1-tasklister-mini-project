
document.addEventListener("DOMContentLoaded", () => {
  // Handle task deletion
function handleTaskDelete(event) {
  if (event.target.classList.contains("delete-button")) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
}
// Handle priority change
function handlePriorityChange(event) {
  const taskItem = event.target.parentElement;
  const priorityValue = event.target.value;
  taskItem.style.color = getPriorityColor(priorityValue);
}

  // Add event listeners
  taskForm.addEventListener("submit", handleFormSubmit);
  taskList.addEventListener("click", handleTaskDelete);
  prioritySelect.addEventListener("change", handlePriorityChange);
});

// Add task to the list
function addTaskToList(description, priority) {
  const taskItem = document.createElement("li");
  const deleteButton = document.createElement("button");

  // Configure the delete button
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete-button";

  // Set the task description
  taskItem.innerText = description;

  // Append the delete button to the task item
  taskItem.appendChild(deleteButton);

  // Set the color based on the priority
  taskItem.style.color = getPriorityColor(priority);

  // Get the task list and add the task item
  const taskList = document.getElementById("tasks");
  taskList.appendChild(taskItem);
}


  // Get references to the necessary elements
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const prioritySelect = document.getElementById("priority-select");


// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get task input and priority select elements
  const taskInput = document.getElementById("new-task-description");
  const prioritySelect = document.getElementById("priority-select");

  // Get the task description and priority
  const taskDescription = taskInput.value;
  const taskPriority = prioritySelect.value;

  // Add task to the list
  if (taskDescription) {
    addTaskToList(taskDescription, taskPriority);
    taskInput.value = "";
  }
}


// Get the color based on the priority
function getPriorityColor(priority) {
  switch (priority) {
    case "high":
      return "red";
    case "medium":
      return "yellow";
    case "low":
      return "green";
    default:
      return "inherit";
  }
}
