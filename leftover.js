const form = document.querySelector('form')
  
const redDiv = document.getElementById('red-tasks')
const yellowDiv = document.getElementById('yellow-tasks')
const greenDiv = document.getElementById('green-tasks')
const submitButton = document.getElementById('submit-btn')

form.addEventListener('submit', function(e){
  const newTask = document.createElement('li')
  newTask.classList = "task"
  let task = document.getElementById('new-task-description')
  let userName = document.getElementById('username')
  const priority = document.getElementById('colors')
  e.preventDefault()
  newTask.innerText = `${task.value}`
  newTask.innerHTML = `
    ${userName.value} - 
    ${task.value}
    <button onClick="this.parentNode.parentNode.removeChild(this.parentNode);">x</button>
  `
  newTask.style.color = `${priority.value}`
  if (priority.value === "red") { 
    redDiv.append(newTask)
  } else if (priority.value === "yellow"){
    yellowDiv.append(newTask)
  } else {t
    greenDiv.append(newTask)
  }
  // const editTaskSelection = document.getElementById('edit-tasks')
  // document.querySelectorAll("li.task").forEach(function(task){
  //   let opt = document.createElement('option')
  //   opt.setAttribute("value", `${task.value}`)
  //   document.getElementById('edit-tasks').append(opt)

});