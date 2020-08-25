// document.addEventListener("DOMContentLoaded", () => {
//   // Get the form by ID and store it
//   const getFormId = document.getElementById("create-task-form")
//   // Get the submit button on the form and attach an event listener
//   // Case sensitivity matters in both params as that is what the button is throwing
//   getFormId.addEventListener("submit", attachList)
//   // Create a function that does the flow to attach a list
//     // First create an LI node,
//     // then create a Text node,
//     // then append the Text node to the LI node.
//     // Finally append the LI node to the list.
//   function attachList(e) {
//     e.preventDefault(); //Still unsure
//     // Create the li div
//     const createNewListElement = document.createElement("li")
//     // Get the field that the user input the task
//     const textBox = document.getElementById("new-task-description")
//     // Get the text from the field that the user typed in and set it equal to the same position in new li 
//     createNewListElement.innerText = textBox.value
//     // Adds the list with prefilled data onto the list
//     document.getElementById("tasks").appendChild(createNewListElement)
//   }
// });

const form = document.querySelector("form")
form.addEventListener("submit", function(e){
  e.preventDefault()

  const task = e.target['new-task-description'].value
  const taskli = document.createElement("li")
  taskli.textContent = task

  const button = document.createElement("button")
  button.textContent = "X"
  taskli.append(button)

  button.addEventListener("click", function(e){
    const taskli = e.target.parentElement
    console.log(taskli)
    taskli.remove();
  })

  const tasks = document.getElementById("tasks")
  tasks.append(taskli)
})