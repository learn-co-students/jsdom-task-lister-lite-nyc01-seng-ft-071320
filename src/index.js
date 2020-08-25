document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // addEventListener("submit")
 document.addEventListener('submit', e => {
  e.preventDefault() 
  const form = document.querySelector("#create-task-form")
  if(e.target === form){
    const input = document.querySelector("#new-task-description").value
    const taskLi = document.createElement("li")
    taskLi.textContent = input
    const todoUl = document.querySelector("#tasks")
    todoUl.append(taskLi)
    form.reset()
    const deleteButton = document.createElement("BUTTON")
    deleteButton.innerText = "Delete"
    taskLi.append(deleteButton)

    deleteButton.addEventListener('click', e => {
      taskLi.remove()
    })
  }



 })
});
