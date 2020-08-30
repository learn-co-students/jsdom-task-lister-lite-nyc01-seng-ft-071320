document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form#create-task-form');
  const taskList = document.querySelector('ul#tasks');
  form.insertAdjacentHTML('beforeend', `
  <label for="new-task-user">Task User:</label>
  <input type="text" id="new-task-user" name="new-task-user" placeholder="user">
  <select>
    <option value="red">Red</option>
    <option value="yellow">Yellow</option>
    <option value="green">Green</option>
  </select>`);

  taskList.insertAdjacentHTML('beforeend', `<div id="red"></div>
  <div id="yellow"></div>
  <div id="green"></div>
  `)
  const redDiv = taskList.querySelector('div#red')
  const yellowDiv = taskList.querySelector('div#yellow')
  const greenDiv = taskList.querySelector('div#green')

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    if(e.target[3].value === "red"){
      redDiv.insertAdjacentHTML('beforeend', `<li style="color:${e.target[3].value}">${e.target[0].value} by ${e.target[2].value}<button class="delete-button">X</button></li>`);
    }
    else if (e.target[3].value === "yellow"){
      yellowDiv.insertAdjacentHTML('beforeend', `<li style="color:${e.target[3].value}">${e.target[0].value} by ${e.target[2].value}<button class="delete-button">X</button></li>`);
    }
    else if (e.target[3].value === "green"){
      greenDiv.insertAdjacentHTML('beforeend', `<li style="color:${e.target[3].value}">${e.target[0].value} by ${e.target[2].value}<button class="delete-button">X</button></li>`);
    }

    
    
  })

  document.addEventListener('click', function(e){
    if(e.target.matches('button.delete-button')){
      e.target.parentNode.remove();
    }
  })



});
