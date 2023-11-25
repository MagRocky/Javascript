document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('taskInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = document.createTextNode(taskInput.value.trim());
        const li = document.createElement('li');
        li.appendChild(createCheckBox());
        li.appendChild(taskText);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function createCheckBox() {
    const checkBox = document.createElement('span');
    checkBox.innerHTML = '&#9744;'; // Unchecked box symbol
    checkBox.classList.add('checkbox');
    checkBox.addEventListener('click', function () {
        this.innerHTML = this.innerHTML === '&#9744;' ? '&#9745;' : '&#9744;';
        toggleTaskComplete(this.parentNode);
    });
    return checkBox;
}

function toggleTaskComplete(task) {
    task.classList.toggle('complete');
}
