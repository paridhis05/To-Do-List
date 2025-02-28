function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const modeIcon = document.getElementById("mode-icon");

    // Toggle the icon between sun and moon
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.classList.replace("fa-moon", "fa-sun"); // Change to sun
        localStorage.setItem("darkMode", "enabled"); // Save preference
    } else {
        modeIcon.classList.replace("fa-sun", "fa-moon"); // Change to moon
        localStorage.setItem("darkMode", "disabled"); // Save preference
    }
}

// Apply saved dark mode preference on page load
window.onload = function() {
    const modeIcon = document.getElementById("mode-icon");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        modeIcon.classList.replace("fa-moon", "fa-sun"); // Show sun icon
    } else {
        modeIcon.classList.replace("fa-sun", "fa-moon"); // Show moon icon
    }
};

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
    const li = button.parentElement.parentElement;

    // Add fade-out animation
    li.classList.add("removing");

    // Remove task after animation completes
    setTimeout(() => {
        li.remove();
    }, 300);
}

// Add/removes the '.completed' class.
function toggleComplete(taskElement) {
    taskElement.parentElement.classList.toggle('completed');
}

// 
function editTask(button) {
    const li = button.parentElement.parentElement; // Finds the <li> that contains the task.
    const span = li.querySelector("span"); // Selects the <span> inside it (task text).
    const oldTask = span.innerText; // Stores the current task text

    // Creates an <input> field.
    const input = document.createElement("input");
    input.type = "text";
    input.value = oldTask;
    input.className = "edit-input"; // Adds a class for styling
    input.style.marginRight = "10px";

    // Creates a Save button.
    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    saveBtn.className = "edit-btn";

    // Restores edit button
    const originalEditBtn = button;

    // Save button functionality
    saveBtn.onclick = function () {
        if (input.value.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        span.innerText = input.value; // Save new task text
        li.replaceChild(span, input); // replacement
        saveBtn.replaceWith(originalEditBtn); // Restore Edit button
    };

    li.replaceChild(input, span); // Replaces the <span> with the input field.
    button.replaceWith(saveBtn); // Replaces the Edit button with the new Save button.
}