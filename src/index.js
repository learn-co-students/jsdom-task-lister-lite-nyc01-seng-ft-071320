document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('form')
  const tasksUl = document.getElementById('tasks')
  const redDiv = document.getElementById('red-tasks')
  const yellowDiv = document.getElementById('yellow-tasks')
  const greenDiv = document.getElementById('green-tasks')
  
  form.addEventListener('submit', function(e){
    e.preventDefault()
    const newTask = e.target['new-task-description'].value
    const newLi = document.createElement('li')
    const priority = document.getElementById('colors')
    newLi.innerHTML = ` 
      ${newTask}
      <button onClick="this.parentNode.remove();">x</button>
      `
    newLi.style.color = `${priority.value}`
    if (priority.value === "red") { 
      redDiv.append(newLi)
    } else if (priority.value === "yellow"){
      yellowDiv.append(newLi)
    } else {
      greenDiv.append(newLi)
    }

  })
});
