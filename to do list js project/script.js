document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(taskItem));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(taskItem));

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function editTask(taskItem) {
    const taskText = taskItem.querySelector('.task-text').textContent;
    const newTaskText = prompt('Edit your task:', taskText);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('.task-text').textContent = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskItem.remove();
    }
}
