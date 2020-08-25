// 1. save the input
// 2. create li with the user input
// 3. select #tasks
// 4. append li


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  let field = document.getElementById("new-task-description");

  function taskName() {
    let t = field.value;
    return t;
  }

  let submit = document.querySelector("#create-task-form").lastElementChild
  let taskList = document.querySelector("#tasks");

  submit.addEventListener("click", function(e){
    e.preventDefault();
    let li = document.createElement("li")
    li.innerText = taskName();
    taskList.appendChild(li);
    field.value = "";
  });
























});
