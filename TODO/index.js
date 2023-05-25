window.addEventListener("load", () => {
    const todoForm = document.querySelector("#todo-form");
    const todoList = document.querySelector(".todos");
    const totalTasks = document.querySelector("#total-tasks");
    const mainInput = document.querySelector("#todo-form input"); 
    const emptyContainer = document.querySelector(".empty-container"); 
    const filters = document.querySelectorAll('.filters li')

    // display date 
    const today = new Date()
    const day = today.getDay()
    const fullDay = new Intl.DateTimeFormat('ru').format(today)
    let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    document.querySelector('.day').innerHTML = dayList[day] + ': ' + fullDay
 
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      

    const checkContent = () => {
        if (tasks.length > 0) {
            emptyContainer.style.display = 'none';
          } else {
            emptyContainer.style.display = 'flex';
          }
    }

  
    const createTask = (task, filter) => {

      const taskElement = document.createElement("li");
  
      taskElement.setAttribute("id", task.id);
  
      if (task.isCompleted) {
        taskElement.classList.add("complete");
      }



      

        const taskElementHTML = `
        <div class="tasks__item">
            <input type="checkbox" name="tasks" id='${task.id}' ${
      task.isCompleted ? "checked" : ""
    }>
            <span ${!task.isCompleted ? "contenteditable" : ""} >${task.name}</span>
        </div>
          <div class="buttons">
            <button class="edit-task"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="remove-task"><i class="fa-solid fa-xmark"></i></button>
          </div>
    `;

    taskElement.innerHTML = taskElementHTML;
  
    todoList.appendChild(taskElement);
  
      mainInput.value = "";
      checkContent()
      
    };
  
    if (localStorage.getItem("tasks")) {
      tasks.map((task) => {
        createTask(task);
      });
    }
  
    const countTasks = () => {
      totalTasks.textContent = tasks.length;
    };
  
    countTasks();
  
    const updateTask = (e) => {
      const el = e.target;
      console.log(el.classList.contains('edit-task'));

      const taskId = el.closest("li").id;
      
      const task = tasks.find((task) => task.id === Number(taskId));
  
      if (!task) {
        alert("Task not found");
      }
  
      if (el.hasAttribute("contenteditable")) {
        task.name = el.textContent;
      } else {
        const span = el.nextElementSibling;
        const parent = el.closest("li");
  
        task.isCompleted = !task.isCompleted;
  
        if (task.isCompleted) {
          span.removeAttribute("contenteditable");
          parent.classList.toggle("complete");
        } else {
          span.setAttribute("contenteditable", "true");
          parent.classList.toggle("complete");
        }
      }
  
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    const removeTask = (e) => {
      const el = e.target;
      
      if (
        el.classList.contains("remove-task") ||
        el.parentElement.classList.contains("remove-task")
      ) {
        const taskId = el.closest("li").id;
  
        tasks = tasks.filter((task) => task.id !== Number(taskId));
  
        totalTasks.textContent = --totalTasks.textContent;
  
        localStorage.setItem("tasks", JSON.stringify(tasks));
  
        document.getElementById(taskId).remove();
        checkContent()
      }
    };
  
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      
      const inputValue = mainInput.value;
  
      if (inputValue === "") {
        return alert("Warning! You must write something!");
      }
  
      const task = {
        id: new Date().getMilliseconds(),
        name: inputValue,
        isCompleted: false,
        status: 'pending'
      };
  
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      totalTasks.textContent = ++totalTasks.textContent;
  
      createTask(task);
  
      mainInput.focus();
    });
  
    

    todoList.addEventListener("click", removeTask);
  
    todoList.addEventListener("input", updateTask);
  
    todoList.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        e.target.blur();
      }
    });

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('li.filter-item-active').classList.remove('filter-item-active')
        btn.classList.add("filter-item-active")
        createTask(task.id)
      })
    })

  });