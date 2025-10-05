// --- Task Constructor ---
function Task(description) {
  this.description = description;
  this.isDone = false;
}

// Mark as done
Task.prototype.markDone = function() {
  this.isDone = true;
};

// --- ToDoList Constructor ---
function ToDoList() {
  this.tasks = [];
}

// Add a task
ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
};

// Remove a task by description
ToDoList.prototype.removeTask = function(description) {
  this.tasks = this.tasks.filter(t => t.description !== description);
};

// --- Main App Logic ---
const myList = new ToDoList();

// Pre-filled tasks
myList.addTask(new Task("Finish JavaScript homework"));
myList.addTask(new Task("Organize photo folder"));
myList.addTask(new Task("Call Mom"));
myList.addTask(new Task("Plan weekend project"));
myList.addTask(new Task("Drink more water 💧"));

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Renders the tasks
function render() {
  taskList.innerHTML = "";

  myList.tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.description;

    if (task.isDone) li.classList.add("done");

    // Mark done when clicked
    li.addEventListener("click", () => {
      task.markDone();
      render();
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevents marking done when deleting
      myList.removeTask(task.description);
      render();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Add button functionality
addBtn.addEventListener("click", () => {
  const desc = taskInput.value.trim();
  if (desc) {
    const newTask = new Task(desc);
    myList.addTask(newTask);
    taskInput.value = "";
    render();
  }
});