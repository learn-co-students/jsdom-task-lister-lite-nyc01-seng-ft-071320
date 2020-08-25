document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskLister = document.getElementById('list')
});
const list = document.getElementById('tasks')
const field = document.getElementById('new-task-description')
const submission = document.getElementById('create-task-form')

submission.addEventListener('submit', function(e){
  e.preventDefault();
  let newField = document.createElement('li')
  let content = document.createTextNode(e.target.children[1].value)
  newField.appendChild(content);
  list.appendChild(newField);
});

 
const button = document.getElementById("remove")
button.addEventListener('click', function() {
  let task  = document.getElementById('tasks'); 
  // task.innerHTML = "Click on button to remove the element."; 
    
  function remove(e) {
    e.target.getElementById('tasks').remove;
  }
})

