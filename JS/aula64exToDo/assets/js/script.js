const inputTask = document.querySelector(".input-task");
const btnTask = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;

    tasks.appendChild(li);
    clearInput();
    createDeleteButton(li);
    saveTasks();
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDeleteButton(li) {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('class', 'delete');
    li.appendChild(deleteButton);
}

inputTask.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
})

btnTask.addEventListener('click', () => {
    if (!inputTask.value) return;

    createTask(inputTask.value);
})

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
})

function saveTasks() {
    const allTasks = tasks.querySelectorAll('li');
    const todoList = [];
    
    for (let task of allTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '').trim();
        todoList.push(taskText);
    }

    const todoJSON = JSON.stringify(todoList);
    localStorage.setItem('tasks', todoJSON);
}

function readSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const todoList = JSON.parse(tasks);

    for (let task of todoList) {
        createTask(task);
    }
}

readSavedTasks();
