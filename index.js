function addTask() {
    const input = document.getElementById('input-id');
    const task = input.value.trim();

    if (task === '') {
        alert('Please enter a task.');
        return;
    }

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

    ul.appendChild(li);
    input.value = '';
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function toggleComplete(taskElement) {
    taskElement.parentElement.classList.toggle('completed');
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector("span");
    const oldTask = span.innerText;

    const input = document.createElement("input");
    input.type = "text";
    input.value = oldTask;
    input.className = "edit-input";
    input.style.marginRight = "10px";

    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    saveBtn.className = "edit-btn";
    saveBtn.onclick = function() {
        span.innerText = input.value;
        li.replaceChild(span, input);
        li.querySelector(".edit-btn").replaceWith(button);
    };

    li.replaceChild(input, span);
    li.querySelector(".edit-btn").replaceWith(saveBtn);
}