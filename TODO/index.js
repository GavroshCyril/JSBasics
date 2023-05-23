window.addEventListener("load", () => {

const todoForm = document.querySelector('#todo-form')
const todoList = document.querySelector('.todos')
const totalTasks = document.querySelector('#total-tasks')
const completedTasks = document.querySelector('#completed-tasks')
const mainInput = document.querySelector('#todo-form input')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []



todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = mainInput.value
   

    if(inputValue === '') {
        return alert("Warning! You must write something!")
    }

    const task = {
        id: new Date().getMilliseconds(),
        name: inputValue,
        isCompleted: false,
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    createTask(task)

 
    mainInput.focus()
})

const removeTask = (taskId) => {

    tasks = tasks.filter(task => task.id != parseInt(taskId))

    localStorage.setItem('tasks', JSON.stringify(tasks))
    document.getElementById(taskId).remove()

    countTasks()
}

todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-task') || e.target.parentElement.classList.contains('remove-task'))   {
        const taskId = e.target.closest('li').id

        removeTask(taskId)
    }
})

todoList.addEventListener('keydown', (e) => {
    if (e.keyCode == 13){
        e.preventDefault()

        e.target.blur()
    }
})

const countTasks = () => {

    const completedTasksArr = tasks.filter((task) => {
        task.isCompleted == true
    })

    totalTasks.textContent = tasks.length
    completedTasks.textContent = completedTasksArr.length
} 

const updateTask = (taskId, el) => {

    const task = tasks.find(task => {task.id === parseInt(taskId)})

    if (el.hasAttribute('contenteditable')) {
        task.name = el.textContent
    } else {
        const span = el.nextElementSibling
        const parent = el.closest('li')

        task.isCompleted = !task.isCompleted
        console.log(task.isCompleted);

        if(task.isCompleted) {
            span.removeAttribute('contenteditable')
            parent.classList.add('complete')
        } else {
            span.setAttribute('contenteditable', 'true')
            parent.classList.remove('complete')
        }
    
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
    
    countTasks()
}

todoList.addEventListener('input', (e) => {
    const taskId = e.target.closest('li').id
    
    updateTask(taskId, e.target)
})





const createTask = (task) => {
    const taskElement = document.createElement('li')

    taskElement.setAttribute('id', task.id)
    
    if(task.isCompleted) {
        taskElement.classList.add('complete')
    }

    const taskElementHTML = `
        <div>
            <input type="checkbox" name="tasks" id='${task.id}' ${task.isCompleted ? 'checked' : ''}>
            <span ${!task.isCompleted ? 'contenteditable' : ''} >${task.name}</span>
        </div>

        <button class="remove-task"><i class="fa-solid fa-xmark"></i></button>
    `

    taskElement.innerHTML = taskElementHTML;

    todoList.appendChild(taskElement)

    countTasks()
}

if(localStorage.getItem('tasks')) {
    tasks.map((task) => {
        createTask(task)
    })
}


});

