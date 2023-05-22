const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

window.addEventListener('load', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
  });
});

const addTask = () => {
  if (inputBox.value === '') {
    alert('Warning! You must write something!');
  } else {
    const newTask = {
      id: new Date().getMilliseconds().toString(),
      value: inputBox.value,
      isChecked: false
    };

    const li = document.createElement('li');
    li.setAttribute('data-id', newTask.id);
    li.textContent = newTask.value;
    listContainer.appendChild(li);

    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    listContainer.appendChild(li);
    
    inputBox.value = '';

    saveData();
  }
};

const toggleChecked = (id) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].isChecked = !tasks[taskIndex].isChecked;
  saveTasks(tasks);
};


listContainer.addEventListener('click', (e) => {
  const target = e.target;
  switch (target.tagName) {
    case 'LI':
      target.classList.toggle('checked');
      toggleChecked(target.getAttribute('data-id'));
      break;
    case 'SPAN':
      const id = target.parentElement.getAttribute('data-id');
      target.parentElement.remove();
      deleteTask(id);
      break;
  }
}, false);



const deleteTask = (id) => {
  const tasks = getTasks().filter((task) => task.id !== id);
  saveTasks(tasks);
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
      value: li.textContent,
      isChecked: li.classList.contains('checked')
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
    if (task.isChecked) {
      li.classList.add('checked');
    }

    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    listContainer.appendChild(li);
  });
};

showTasks();