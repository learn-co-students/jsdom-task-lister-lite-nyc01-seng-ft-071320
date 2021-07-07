document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  // your code here
  form.addEventListener("submit", function(e){
    const input = document.querySelector('#new-task-description');
    const newLi = document.createElement("li");
    const xButton = document.createElement("BUTTON");
    const listUl = document.querySelector('#list');
    newLi.textContent = input.value;
    listUl.append(newLi);
    // const priority = document.createElement("div")
    // priority.innerHTML =
    // `<form class="priority-form">
    // <p>Please select priority</p>
    // <select id="selPriority">
    // <option id="low" value="#008000">Low</option>
    // <option id="med" value="#FFFF00">Medium</option>
    // <option id="high" value="#FF0000">High</option>
    // </select>
    // <input type = "submit" />
    // </form>`
    
    
    // const selectForm = priority.querySelector('.priority-form')
    
    // selectForm.addEventListener("submit", function(e) {
    //   const selPriority = document.querySelector('#selPriority')
    //   const low = document.getElementById('low')
    //   const med = document.getElementById('med')
    //   const high = document.getElementById('high')
    //   if (e.target[0][0].id === "low") {
    //     // newLi.innerText.style.color = "green"
    //     // change the color
    //   }
      
    //   e.preventDefault();
    // })
    
    
    
    newLi.append(xButton);
    xButton.textContent = "X";
    xButton.addEventListener("click", function(e){
      newLi.remove();
    })
    
    
    // newLi.append(priority)


    e.preventDefault();
  })



  // next to the new li put a button
  // on click would .remove() that entire li


});

// create node li
// on click, grab input value & send text input to li node
