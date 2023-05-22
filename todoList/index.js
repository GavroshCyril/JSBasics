window.addEventListener("load", () => {
    const form = document.getElementById("add-todo-form");
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const pendingNum = document.querySelector(".pending-num");


    const tasksFromStorage = localStorage.getItem("tasks");

    let tasks = tasksFromStorage ? JSON.parse(tasksFromStorage) : [];

    

    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    const createTask = (task) => {
    const { id, value, isDone } = task;

    const li = document.createElement("li");
        li.setAttribute("data-id", id);
        li.textContent = value;

    if (isDone) {
        li.classList.toggle("checked");
    }

    listContainer.appendChild(li);

    const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    };

    const generateTasksList = () => {
        tasks.forEach((task) => {
        createTask(task);
        });
    };

    generateTasksList();

    const saveTasks = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };


    const editTasks = (task) => {
        const editTask = document.createElement('button')
        editTask.classList.add('edit')
        li.appendChild(editTask)
    }
    


    const deleteTask = (taskId) => {
        tasks = tasks.filter(({ id }) => id !== taskId);

        saveTasks(tasks);
    };

    listContainer.addEventListener("click", (e) => {
        const targetName = e.target.tagName;

        switch (targetName) {
    case "LI": {
            const taskId = e.target.getAttribute("data-id");

            const currentTask = tasks.find(({ id }) => id === taskId);

            currentTask.isDone = !currentTask.isDone;

            saveTasks(tasks);

            e.target.classList.toggle("checked");

            break;
        }

    case "SPAN": {
        const taskId = e.target.parentElement.getAttribute("data-id");

        e.target.parentElement.remove();

        deleteTask(taskId);

            break;
        }
        }
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();

    
    if (inputBox.value === "") {
        return alert("Warning! You must write something!");
    }


      

    const newTask = {
        id: crypto.randomUUID(),
        value: inputBox.value,
        isDone: false,
    };

        createTask(newTask);

        tasks = [...tasks, newTask];
        saveTasks(tasks);

        inputBox.value = "";
    });
});