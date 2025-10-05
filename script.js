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