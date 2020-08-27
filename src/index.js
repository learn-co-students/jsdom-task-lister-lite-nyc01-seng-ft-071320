document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form')
  const submitButton = document.querySelector("input[type=submit]")
  const taskList = document.getElementById('tasks')
  const taskDesc = document.querySelector('[name= "new-task-description"]')

  form.addEventListener("submit", function(e) {
    e.preventDefault()

    const taskItem = document.createElement('li')
    taskItem.innerText = taskDesc.value
    taskList.append(taskItem)

    const deleteButton = document.createElement('button')
    deleteButton.innerText = "X"
    taskItem.append(deleteButton)

    form.reset()
    deleteButton.addEventListener("click", function(e) {
      taskItem.remove()
    })
    
  })





});


// As a user, the task string that I provided should appear on the DOM 
// after the submit button has been activated.



// render as li tag with task desc
// append to under 'My Todos'


// add button to delete task