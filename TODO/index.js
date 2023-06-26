window.addEventListener("load", () => {
  const todoForm = document.querySelector("#todo-form");
  const todoList = document.querySelector(".todos");
  const totalTasks = document.querySelector("#total-tasks");
  const mainInput = document.querySelector("#todo-form input");
  const emptyContainer = document.querySelector(".empty-container");
  const filters = document.querySelectorAll(".filters li");
  const clearAll = document.querySelector(".clear-btn");
  const searchInput = document.querySelector("#search-input");
  const clearInputBtn = document.querySelector("#clear-input-btn");

  // display date
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedCurrentDate = today.toLocaleDateString("en-US", options);

  document.querySelector(".day").innerHTML = formattedCurrentDate;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filterValue = "all";

  const checkContent = () => {
    const filteredTasks = tasks.filter((task) => {
      if (filterValue === "pending") {
        return !task.isCompleted;
      } else if (filterValue === "completed") {
        return task.isCompleted;
      } else {
        return true;
      }
    });

    emptyContainer.classList.toggle("hidden", filteredTasks.length > 0);
    clearAll.disabled = filteredTasks.length === 0;
    clearAll.classList.toggle("disabled", filteredTasks.length === 0);
    clearAll.classList.toggle("enabled", filteredTasks.length > 0);
  };

  const createTask = (task) => {
    const taskElement = document.createElement("li");

    taskElement.setAttribute("id", task.id);

    if (task.isCompleted) {
      taskElement.classList.add("complete");
    }

    const taskElementHTML = `
        
        <div class="tasks__item"">
            <input type="checkbox" name="tasks" id='${task.id}' ${
      task.isCompleted ? "checked" : ""
    }>
            <span ${!task.isCompleted ? "contenteditable" : ""} >${
      task.name
    }</span>
        </div>
          <div class="buttons">
            <button class="edit-task"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="remove-task"><i class="fa-solid fa-xmark"></i></button>
          </div>
    `;

    taskElement.innerHTML = taskElementHTML;
    todoList.appendChild(taskElement);
  };

  if (localStorage.getItem("tasks")) {
    tasks.map((task) => {
      createTask(task);
    });
  }

  checkContent();

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

      const currentTaskNode = document.getElementById(task.id);

      if (task.isCompleted) {
        span.removeAttribute("contenteditable");
        parent.classList.toggle("complete");
        console.log(filterValue, currentTaskNode);
        if (filterValue === "pending") {
          currentTaskNode.style.display = "none";
        }
      } else {
        span.setAttribute("contenteditable", "true");
        parent.classList.toggle("complete");

        if (filterValue === "completed") {
          currentTaskNode.style.display = "none";
        }
      }
    }

    checkContent();
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
      checkContent();
    }
  };

  clearAll.addEventListener("click", () => {
    tasks = [];
    localStorage.removeItem("tasks");
    todoList.innerHTML = "";
    totalTasks.textContent = 0;
    checkContent();
  });

  const urlParams = new URLSearchParams(window.location.search);
  const currentState = urlParams.get("state");

  const filterTasks = () => {
    const searchValue = searchInput.value.trim().toLowerCase();

    tasks.forEach((task) => {
      const taskElement = document.getElementById(task.id);

      if (task.name.toLowerCase().includes(searchValue)) {
        taskElement.style.display = "flex";
      } else {
        taskElement.style.display = "none";
      }
    });

    if (searchValue === "") {
      tasks.forEach((task) => {
        const taskElement = document.getElementById(task.id);
        taskElement.style.display = "flex";
      });
    }

    checkContent();
  };

  // FILTRATION.......................................................

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selectedFilter = filter.getAttribute("id");

      urlParams.set("state", selectedFilter);

      window.history.pushState({}, "", `?${urlParams}`);

      filterValue = selectedFilter;

      filters.forEach((el) => el.classList.remove("filter-item-active"));
      filter.classList.add("filter-item-active");

      //фильтрация
      tasks.forEach((task) => {
        const currentTaskNode = document.getElementById(task.id);

        switch (selectedFilter) {
          // фильтр "все таски"
          case "all":
            currentTaskNode.style.display = "flex";
            break;

          // фильтр незавершенных тасков
          case "pending":
            if (!task.isCompleted) {
              currentTaskNode.style.display = "flex";
            } else {
              currentTaskNode.style.display = "none";
            }
            break;
          case "completed":
            if (task.isCompleted) {
              currentTaskNode.style.display = "flex";
            } else {
              currentTaskNode.style.display = "none";
            }
            break;
        }
      });

      if (currentState === selectedFilter) {
        // если да, то устанавливаем соответствующий класс
        filter.classList.add("filter-item-active");
      }

      checkContent();
    });
  });

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = mainInput.value;

    if (inputValue === "") {
      const existingModal = document.querySelector(".modal-bg");
      if (!existingModal) {
        const modal = document.createElement("div");
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

        const modalCloseBtn = modal.querySelector(".modal-close");
        const modalBg = modal.querySelector(".modal-bg");

        modalBg.style.opacity = 0;
        modalBg.style.transition = "opacity 0.3s ease";

        modalBg.addEventListener("click", (e) => {
          if (e.target.classList.contains("modal-bg")) {
            modalBg.style.opacity = 0;
            setTimeout(() => {
              modal.remove();
            }, 400);
          }
        });

        setTimeout(() => {
          modalBg.style.opacity = 1;
        }, 40);

        modalCloseBtn.addEventListener("click", () => {
          modalBg.style.opacity = 0;
          setTimeout(() => {
            modal.remove();
          }, 400);
        });
      }
      return;
    }

    const task = {
      id: new Date().getMilliseconds(),
      name: inputValue,
      isCompleted: false,
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    totalTasks.textContent = ++totalTasks.textContent;

    createTask(task);
    checkContent();

    mainInput.value = "";
    mainInput.focus();
  });

  todoList.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("edit-task") ||
      e.target.parentElement.classList.contains("edit-task")
    ) {
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
  searchInput.addEventListener("input", filterTasks);

  clearInputBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterTasks();
  });

  searchInput.addEventListener("input", () => {
    clearInputBtn.style.display = searchInput.value ? "block" : "none";
    filterTasks();
  });

  todoList.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      e.target.blur();
    }
  });
});
