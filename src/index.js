
document.addEventListener("DOMContentLoaded", function(e){
    
  createTask()
  
  
  
})

const submitButton = document.querySelector("#create-task-form").lastElementChild
let taskList = document.querySelector("#tasks")
let taskDescriptionField = document.querySelector("#new-task-description")
const redDiv = document.createElement("div")
redDiv.id = "red"
taskList.append(redDiv)
const yellowDiv = document.createElement("div")
yellowDiv.id = "yellow"
taskList.append(yellowDiv)
const greenDiv = document.createElement("div")
greenDiv.id = "green"
taskList.append(greenDiv)



function createTask (){
  
  submitButton.addEventListener("click", function(e){
      e.preventDefault()
      taskInfo = document.querySelector("#new-task-description").value
      let task = document.createElement("li")
      task.innerText = taskInfo
      task.className = "task"
      deleteButton(task)
      addPriorityToTask(task)
      sortTask(task)
      // editTask(task)
      
  })
}

function deleteButton(taskBullet){
  
  let deleteButton = document.createElement("button")
  deleteButton.type = "button"
  deleteButton.innerText = "X"
  taskBullet.appendChild(deleteButton)
  
  deleteButton.addEventListener("click", function(e){
      e.target.parentNode.remove()
      
  })
}

function addPriorityToTask(task){
  
  let priorityDropDown = document.querySelector("#selection")
  let fontColor = priorityDropDown.value
  task.style.color = fontColor
  task.dataset.colorvalue = fontColor
  
}


  

function sortTask(task){

  if (task.dataset.colorvalue === "red"){
      redDiv.appendChild(task)
      editTask(task)
  }
  if (task.dataset.colorvalue === "yellow"){
      yellowDiv.appendChild(task)
      editTask(task)
  }
  if (task.dataset.colorvalue === "green"){
      greenDiv.appendChild(task)
  }
}


// function editTask(task){
//     let editButton = document.createElement("button")
//     editButton.type = "button"
//     editButton.innerText = "Edit Task"
//     task.append(editButton)


// }