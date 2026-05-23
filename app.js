// Function to add a new task
function addTask(text, status) {
    const taskList = document.getElementById(`${status}-list`);
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <p>${text}</p>
        <select onchange="moveTask(this)">
            <option value="todo" ${status === 'todo' ? 'selected' : ''}>To Do</option>
            <option value="inprogress" ${status === 'inprogress' ? 'selected' : ''}>In Progress</option>
            <option value="done" ${status === 'done' ? 'selected' : ''}>Done</option>
        </select>
    `;
    taskList.appendChild(taskDiv);
}

// Function to move task between lists
function moveTask(selectElement) {
    const taskDiv = selectElement.parentElement;
    const newStatus = selectElement.value;
    const newList = document.getElementById(`${newStatus}-list`);
    newList.appendChild(taskDiv);
}

// Initial dummy task to test
addTask("Design database schema", "todo");
addTask("Set up Express server", "inprogress");

function createTask() {
    const input = document.getElementById('taskInput');
    const select = document.getElementById('statusSelect');

    if (input.value.trim() !== "") {
        addTask(input.value, select.value);
        input.value = ""; // Clear the input field
    }
}