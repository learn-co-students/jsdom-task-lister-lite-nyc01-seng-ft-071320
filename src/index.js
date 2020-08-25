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
    let del = document.createElement("button")
    del.type = "button";
    del.innerText = "X";
    let selection = document.getElementById("selection");
    let textColor = selection.value;
    li.style.color = textColor
    
    del.addEventListener("click", function(e) {
      li.remove()
    });
    li.innerText = taskName();
    li.appendChild(del);
    taskList.appendChild(li);
    field.value = "";
  });
  

  });

  
