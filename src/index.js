document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target)
    let newTask = document.getElementById('new-task-description').value;
    let taskL = document.createElement('li');
    taskL.innerHTML = newTask;
    let taskList = document.getElementById('tasks');
    taskList.append(taskL);
    newTask = "";
  })// your code here
});
