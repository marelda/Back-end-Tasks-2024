document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.querySelector('.Add-Task button');
    const newTaskInput = document.querySelector('.Add-Task input');
    const todoForm = document.querySelector('form');

    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const newTask = createTask(taskText);
            todoForm.insertBefore(newTask, document.querySelector('.Add-Task'));
            newTaskInput.value = '';
        }
    });

    function createTask(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'Task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = ` ${taskText}`;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);

        return taskDiv;
    }
});
