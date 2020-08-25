
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#submit-btn').addEventListener("click", function (e) {
    event.preventDefault();
    let inputField = document.getElementById('new-task-description');
    let newTask = inputField.value;
    let taskLi = document.createElement("li");
    taskLi.innerHTML = newTask;

    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerHTML = "X"
    deleteBtn.addEventListener("click", function (e) {
      let button = e.target;
      let parentLi = button.parentElement;
      parentLi.remove()
    });

    let editBtn = document.createElement("BUTTON");
    editBtn.innerHTML = "Edit Task"
    taskLi.append(deleteBtn)
    taskLi.append(editBtn)
    editBtn.addEventListener("click", function (e) {
      let button = e.target;
      let editInput = document.createElement("INPUT")
      editInput.label = 'edit-task'
      editInput.id = 'edit-task'
      let editSubmit = document.createElement("INPUT")
      editSubmit.type = 'submit'
      editSubmit.id = 'edit-submit'
      button.parentElement.append(editInput)
      button.parentElement.append(editSubmit)
      document.querySelector('#edit-submit').addEventListener("click", function (e) {
        taskLi.innerHTML = editInput.value
        taskLi.append(deleteBtn)
        taskLi.append(editBtn)
      });
    })

    let priorityDropdown = document.getElementById('task-colors')
    let priorityIndex = priorityDropdown.selectedIndex
    let priorityValue = priorityDropdown[priorityIndex].value

    function listColorChange(priority) {
      if (priority === "high-priority") {
        taskLi.style.color = "red"
      } else if (priority === "medium-priority") {
        taskLi.style.color = "yellow"
      } else {
        taskLi.style.color = "green"
      }
    }
    listColorChange(priorityValue)

    let taskList = document.getElementById('tasks');
    taskList.append(taskLi);
    inputField.value = "";
  });

});

