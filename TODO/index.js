window.addEventListener("load", () => {
    const todoForm = document.querySelector("#todo-form");
    const todoList = document.querySelector(".todos");
    const totalTasks = document.querySelector("#total-tasks");
    const mainInput = document.querySelector("#todo-form input"); 
    const emptyContainer = document.querySelector(".empty-container"); 
    const filters = document.querySelectorAll('.filters li')
    const clearAll = document.querySelector('.clear-btn')

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
            clearAll.disabled = false;
            clearAll.style.color = "black";
            clearAll.style.borderBottom = '2px solid black'
            clearAll.style.cursor = 'pointer'
          } else {
            emptyContainer.style.display = 'flex';
            clearAll.style.color = "grey";
            clearAll.style.borderBottom = '2px solid grey'
            clearAll.style.cursor = 'not-allowed'
          }
    }

    const createTask = (task) => {

      const taskElement = document.createElement("li");
  
      taskElement.setAttribute("id", task.id);
      taskElement.setAttribute("data-status", task.status);
  

      if (task.isCompleted ) {

        taskElement.classList.add("complete");
        task.status = 'completed';

      } else {
        task.status = 'pending';
      }

        const taskElementHTML = `
        
        <div class="tasks__item"">
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

    clearAll.addEventListener('click', () => {
      tasks = [];
      localStorage.removeItem('tasks');
      todoList.innerHTML = "";
      totalTasks.textContent = 0;
      checkContent();
  });

  // FILTRATION.......................................................

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {

      const selectedFilter = filter.getAttribute("id");
      const statusValue = (selectedFilter === "pending") ? "pending" :
      (selectedFilter === "completed") ? "complete" : "";


      filters.forEach((f) => {
        f.classList.remove("filter-item-active");
      });
      filter.classList.add("filter-item-active");


      //фильтрация
      const allTasks = document.querySelectorAll(".todos li");

      allTasks.forEach((task) => {
        const taskStatus = task.getAttribute("data-status");
        switch (selectedFilter) {
         
          // фильтр "все таски"
            case "all":
              console.log(taskStatus);
            task.style.display = "flex";
            break;

             // фильтр незавершенных тасков
             case "pending":
              if (taskStatus === "pending") {
                task.style.display = "flex";
              } else {
                task.style.display = "none";
              }
              break;
            case "completed":
              if (taskStatus === "complete") {
                task.style.display = "flex";
              } else {
                task.style.display = "none";
              }
              break;
        }
      }); 
    });
  });

    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const inputValue = mainInput.value;
  
      if(inputValue===""){
        const modal = document.createElement('div');
        modal.innerHTML = `
          <div class="modal-bg">
            <div class="modal">
              <h2>Error</h2>
              <p>You didn't enter anything! Please fill in the input field.</p>
              <button class="modal-close">&times;</button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);
        const modalCloseBtn = document.querySelector('.modal-close');
        const modalBg = document.querySelector('.modal-bg');
        modalBg.style.opacity = 0;
        modalBg.style.transition = 'opacity 0.3s ease';
        modalBg.addEventListener('click', (e) => {
          if (e.target.classList.contains('modal-bg')) {
            modalBg.style.opacity = 0;
            setTimeout(() => {
              modal.remove();
            }, 400);
          }
        });
        setTimeout(() => {
          modalBg.style.opacity = 1;
        }, 40);
        modalCloseBtn.addEventListener('click', () => {
          modalBg.style.opacity = 0;
          setTimeout(() => {
            modal.remove();
          }, 400);
        });
        return;
      }
  
      const task = {
        id: new Date().getMilliseconds(),
        name: inputValue,
        isCompleted: false,
        status: statusValue,
      };
  
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      totalTasks.textContent = ++totalTasks.textContent;
  
      createTask(task);
  
      mainInput.focus();
    });

    todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit-task") || e.target.parentElement.classList.contains("edit-task")) {
        const taskEl = e.target.closest("li");
        const span = taskEl.querySelector("span");
        
        span.setAttribute("contenteditable", "true");
        span.focus();
    
        span.addEventListener("keydown", (e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            span.blur();
          }
        });
    
        span.addEventListener("blur", () => {
          span.removeAttribute("contenteditable");
          const task = tasks.find((task) => task.id === Number(taskEl.id));
          task.name = span.textContent;
          localStorage.setItem("tasks", JSON.stringify(tasks));
        });
      }
    });

    todoList.addEventListener("click", removeTask);
    todoList.addEventListener("input", updateTask);
    
    todoList.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        e.target.blur();
      }
    });


  });