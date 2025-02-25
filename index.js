// function addTask() {
// const input = document.getElementsByClassName('input');
// const task = input.value;

// const ul = document.getElementsByTagName('ul');
// const li = document.createElement('li');
// li.className = 'listing';
// li.innerHTML= `<span> ${task} </span>`;

// ul.appendChild(li);
// input.value = '';

// }

//
function addTask() {
    const input = document.getElementById('input-id');
    const task = input.value.trim();

    if (task === ''){
        alert('Please enter a task.');
        return;
    }
    
    const ul = document.getElementById('List-id');
    const li = document.createElement('li');
    li.className = 'listing';
    li.innerHTML= `
        <span onclick="toggleComplete(this)">${task}</span>
        <button class="delete-btn" onclick="deleteTask(this)">&times;</button>
    `;
    
    ul.appendChild(li);
    input.value = '';
    }

    function deleteTask(button){
        const taskbtn = button.parentElement;
        taskbtn.remove();
    }

    function toggleComplete(taskElement){
        taskElement.parentElement.classList.toggle('completed');
    }
