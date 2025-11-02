
let addBtn = document.querySelector(".add-btn")
let taskInput = document.getElementById("task-input")
let List = document.querySelector(".task-list")
let taskList = []


addBtn.addEventListener("click", function () {
    if(taskInput.value) {
      taskList.push(taskInput.value)
    }
    renderTasks()
    taskInput.value = ""
})

function renderTasks() {
    let taskListHTML = ""
    for (let tasks of taskList) {
        taskListHTML += `
        <li class="task-item"> 
        <span class="task-text">${tasks}</span>
        <div class="icon-left">
          <i class="fa-regular fa-pen-to-square edit-btn"></i> 
          <i class="fa-solid fa-trash delete-btn"></i>
        </div>
      </li>`
    }
    List.innerHTML = taskListHTML
}

renderTasks()

