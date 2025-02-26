function addTask() {
    const input = document.getElementById('input-id');
    const task = input.value.trim();

    // if the input is empty, shows an alert and stops execution.
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    // Creates a new element <li> and assigns it a class 'listing'.
    const ul = document.getElementById('List-id');
    const li = document.createElement('li');
    li.className = 'listing';
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${task}</span>
        <div>
            <button class="edit-btn" onclick="editTask(this)"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    // Add the new task to the task list.
    ul.appendChild(li);

    // Clears the input field.
    input.value = '';
}

// Deletes the task from the task.
function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

// Add/removes the '.completed' class.
function toggleComplete(taskElement) {
    taskElement.parentElement.classList.toggle('completed');
}

// 
function editTask(button) {
    const li = button.parentElement.parentElement; // Finds the <li> that contains the task.
    const span = li.querySelector("span"); // Selects the <span> inside it (task text).
    const oldTask = span.innerText; // Stores the current task text.

    // Creates an <input> field.
    const input = document.createElement("input"); 
    input.type = "text";
    input.value = oldTask;
    input.className = "edit-input"; // Adds a class 
    input.style.marginRight = "10px";

    // Creates a Save button.
    const saveBtn = document.createElement("button"); 
    saveBtn.innerHTML = `<i class="fa-solid fa-check"></i>`; 
    saveBtn.className = "edit-btn";

    // Restores the Edit button.
    saveBtn.onclick = function() {
        span.innerText = input.value;
        li.replaceChild(span, input);
        li.querySelector(".edit-btn").replaceWith(button);
    };

    // Replaces the <span> with the input field.
    li.replaceChild(input, span);

    // Replaces the Edit button with the new Save button.
    li.querySelector(".edit-btn").replaceWith(saveBtn);
}