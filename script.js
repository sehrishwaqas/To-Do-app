//Get elements
consttaskForm = document.getElementByld('task-form');
consttaskInput = document.getElementByld('task-input');
consttaskList = document.getElementById('task-list');

//Add event listener to form
taskForm.addEventListner('submit', (e) => {
    e.preventDefault();
    consttask = taskInput.value.trim();
    if (task) {
        //Create new task element
        consttaskElement = document.createElement('li');
        taskElement.textContent = task;
        //Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskElement.appendChild('deleteBtn');
        //Add complete button
        const completebtn = document.createElement('button');
        completebtn.textContent = 'Complete';
        completebtn.classList.add('complete-btn');
        taskElement.appendChild(completebtn);
        //Add task to list
        taskList.appendChild(taskElement);

        //Clear input field
        taskInput.value = "";
    }
});
// Add event listener to task list
taskList.addEventListner('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        //Delete task
        const taskElement = e.target.parentElement;
        taskList.removeChild(taskElement);

    } else if (e.target.classList.contains('complete-btn')) {
        //Complete task
        const taskElement = e.target.parentElement;
        taskElement.classList.toggle('completed');
    }

})

