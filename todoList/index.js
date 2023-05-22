const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

window.addEventListener('load', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask();
    });
  });

  inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // 13 is the keycode for "Enter"
      event.preventDefault();
      addTask();
    }
})

const addNewTask = (newTask) => {
  const li = document.createElement('li');
  li.dataset.id = newTask.id;
  li.textContent = newTask.value;
  li.classList.toggle('editing', newTask.isEditing);

  const span = document.createElement('span');
  span.innerHTML = '\u00d7';
  li.appendChild(span);

    const spanEdit = document.createElement('span');
    spanEdit.innerHTML = '<i class="fas fa-edit"></i>'; // добавление иконки редактирования
    spanEdit.className = 'edit';
    li.appendChild(spanEdit);

  listContainer.appendChild(li);
};

const addTask = () => {
  if (inputBox.value === '') {
    alert('Warning! You must write something!');
  } else {
    const newTask = {
      id: new Date().getMilliseconds().toString(),
      value: inputBox.value,
      isEditing: false,
    };

    addNewTask(newTask);

    inputBox.value = '';
    saveData();
  }
};

listContainer.addEventListener('click', (e) => {
    const target = e.target;
    switch (target.tagName) {
      case 'LI':
        target.classList.toggle('checked');
        toggleChecked(target.getAttribute('data-id'));
        break;
      case 'SPAN':
        if (target.classList.contains('edit')) { // если нажата иконка редактирования
          const id = target.parentElement.getAttribute('data-id');
          const taskText = target.parentElement.textContent.trim(); // получение текстового содержимого таски
          const newTaskText = prompt('Enter new task text', taskText);
          if (newTaskText !== null && newTaskText !== '') {
            target.parentElement.textContent = newTaskText;
            const tasks = getTasks();
            const updatedTaskIndex = tasks.findIndex(task => task.id === id);
            tasks[updatedTaskIndex].value = newTaskText;
            saveTasks(tasks);
          }
        } else if (target.tagName === 'SPAN') { // если нажата иконка удаления
          const id = target.parentElement.getAttribute('data-id');
          target.parentElement.remove();
          deleteTask(id);
        }
        break;
    }
  }, false);

/* listContainer.addEventListener('dblclick', (e) => {
  if (e.target.tagName === 'LI') {
    const li = e.target;
    const input = document.createElement('input');
    input.value = li.textContent;
    li.textContent = '';
    li.appendChild(input);
    input.focus();
    li.classList.add('editing');
    input.addEventListener('blur', () => {
        li.classList.add('black')
      li.removeChild(input);
      li.textContent = input.value.trim();
      li.classList.remove('editing');
      const tasks = getTasks();
      const updatedTasks = tasks.map(task => {
        if (task.id === li.dataset.id) {
          task.value = li.textContent;
        }
        return task;
      });
      saveTasks(updatedTasks);
    });
  }
}, false); */

const removeTask = (id) => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(({id}) => id !== id);
  saveTasks(updatedTasks);
};

const getTasks = () => {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
    return JSON.parse(tasksString);
  }
  return [];
};

const saveTasks = (tasks = []) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const saveData = () => {
  const tasks = listContainer.querySelectorAll('li');
  const taskList = [];
  tasks.forEach(task => {
    const isEditing = task.classList.contains('editing');
    const taskDetails = {
      id: task.dataset.id,
      value: task.textContent,
      isEditing,
    };
    taskList.push(taskDetails);
  });
  saveTasks(taskList);
};

const showTasks = () => {
  const tasks = getTasks();
  tasks.forEach((task) => {
    addNewTask(task);
  });
};

showTasks();