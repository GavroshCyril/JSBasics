const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container'); 

const addTask = () => {
    
    if (inputBox.value === '') {
        alert('Warning! You must write something!');
    } else {

    const newTask = {
        id: new Date().getMilliseconds().toString(),
        value: inputBox.value
    };

    const li = document.createElement('li');
        li.setAttribute('data-id', newTask.id);
        li.textContent = newTask.value;
        listContainer.appendChild(li);

   /*  const span = document.createElement('span'); */
        /* span.innerHTML = '\u00d7'; */
/*         li.appendChild(span); */

    inputBox.value = '';
    saveData();
    }
};

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        const id = e.target.parentElement.getAttribute('data-id');
        e.target.parentElement.remove();
        deleteTask(id);
        }
    }, false
);

const deleteTask = (id) => {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
};

const getTasks = () => {
    const tasksString = localStorage.getItem('tasks');
    if (tasksString) {
        return JSON.parse(tasksString);
    } else {
        return [];
    }
};

const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const saveData = () => {
    const tasks = [];
    listContainer.querySelectorAll('li').forEach((li) => {

    const task = {
        id: li.getAttribute('data-id'),
        value: li.textContent
    };

        tasks.push(task);
    });
    saveTasks(tasks);
};

const showTasks = () => {
    const tasks = getTasks();
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        li.textContent = task.value;
        listContainer.appendChild(li);

    const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    });
};

showTasks();