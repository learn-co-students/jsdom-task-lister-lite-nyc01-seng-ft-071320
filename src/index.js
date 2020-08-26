document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // +1. I need to add a submit listener to the form
  // +2. get the text out of the form
  // +3. I need to create li's for the text (since it's within a ul)
  //      -  I also need to make sure the text will be inside the 'li'
  // 4. I need to append the li item to the ul

  
  const form = document.querySelector("form")

  form.addEventListener("submit", function(e) {
    e.preventDefault()

    const form = e.target

    const priority = form.priority.value

    const task = e.target['new-task-description'].value
    const taskLi = document.createElement('li')
    taskLi.textContent = task
    taskLi.style.backgroundColor = priority

    const button = document.createElement("button")
    button.textContent = "X"
    taskLi.append(button)

    const edit = document.createElement("button")
    edit.textContent = "Edit"
    taskLi.append(edit)

    button.addEventListener("click", function(e) {
      // the purpose of this is to be able to remove the li instance(s) we'll create
      const taskLi = e.target.parentElement
      taskLi.remove()

      
    })

    // const tasks = document.getElementById('tasks')
    // tasks.append(taskLi)    

    const div = document.querySelector(`#${priority}`)
    div.append(taskLi)
  });

});
