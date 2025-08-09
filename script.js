const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskText) {
  const li = document.createElement('li');

  // Task text
  li.textContent = taskText;

  // Clicking task toggles completed class
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'deleteBtn';

  // Delete task on click
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggling completed when deleting
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);

  return li;
}

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = createTaskItem(taskText);
  taskList.appendChild(taskItem);
  taskInput.value = ''; //reset what the user typed
}

addBtn.addEventListener('click', addTask);

// Optional: add task on pressing Enter
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});