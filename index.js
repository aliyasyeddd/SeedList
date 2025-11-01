
let addBtn = document.querySelector(".add-btn")
let taskInput = document.getElementById("task-input")
let List = document.querySelector(".task-list")
let taskList = []


addBtn.addEventListener("click", function() {
    taskList.push(taskInput.value)
    console.log(taskInput.value)
    renderTasks()
    taskInput.value = ""
})

function renderTasks() {
    let taskListHTML = ""
    for(let tasks of taskList) {
        taskListHTML += `<li class="task-item">${tasks}</li>`
    }
    List.innerHTML = taskListHTML
}