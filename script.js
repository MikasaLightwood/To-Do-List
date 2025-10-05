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