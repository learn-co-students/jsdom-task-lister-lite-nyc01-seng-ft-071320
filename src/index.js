document.addEventListener("DOMContentLoaded", () => {

  document.querySelector('input[type=submit]').addEventListener('click', e => {
    e.preventDefault()
    const toDo = e.target.form['new-task-description'].value
    const priority = e.target.form['task-priority'].value
    const username = e.target.form['username'].value

    const toDoLi = document.createElement('li')
    toDoLi.textContent = `${toDo} - ${username}`
    toDoLi.style.color = priority

    const editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'
    toDoLi.append(editButton)

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X'
    toDoLi.append(deleteButton)

    editButton.addEventListener('click', e => {
      e.preventDefault()
      const editForm = document.createElement('form')
      const editInput = document.createElement('input')
      toDoLi.prepend(editForm)
      editForm.append(editInput)
      editForm.addEventListener('submit', e => {
        e.preventDefault()
        updateTask = e.target[0].value
        toDoLi.textContent = `${updateTask} - ${username}`
        editInput.remove()
        toDoLi.append(editButton)
        toDoLi.append(deleteButton)
      })
    })

    deleteButton.addEventListener('click', e => {
      const taskLi = e.target.parentElement
      taskLi.remove()
    })

    document.querySelector(`#${priority}`).append(toDoLi)


  })

});
