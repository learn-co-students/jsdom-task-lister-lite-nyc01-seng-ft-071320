document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("loaded and ready to rumble")
  const tasklist=document.getElementById('tasks')
  const red=document.createElement("div")
  red.id="high"
  red.innerHTML='<p>High</p>'
  const yellow=document.createElement("div")
  yellow.id="some"
  yellow.innerHTML='<p>Some</p>'
  const green=document.createElement("div")
  green.id="low"
  green.innerHTML='<p>Low</p>'
  tasklist.append(red,yellow,green)

  const ourForm =document.getElementById("create-task-form")
  newform(ourForm)
  ourForm.addEventListener('submit',function(e){
    e.preventDefault()
    const newtask = {
      user: document.getElementById('user').value,
      duration: document.getElementById('duration').value,
      todo: document.getElementById('todo').value,
      date: document.getElementById('date').value,
      importance: document.getElementById('importance').value
    }
    console.log(newtask)
    create(newtask)
  })

  document.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.matches('button')){
      e.target.parentNode.remove()
    }
  })
});

function create(object){
  let listLi = document.createElement('li')
  listLi.innerHTML=`${object.user} needs ${object.duration} to do ${object.todo} on ${object.date}. This has ${object.importance}`
  let rankings = document.getElementById('low')
  if (object.importance=="red"){rankings=document.getElementById('high')}
  if (object.importance=="yellow"){rankings=document.getElementById('some')}
  rankings.append(listLi)
  
  //btn action
  const btn = document.createElement('button')
  btn.id="delete-btn"
  btn.innerText="delete"
  listLi.appendChild(btn)
}

function newform (form){
  form.innerHTML=`<form-id="input-firm">
  <input id='user' placeholder='name'>
  <input id='duration' placeholder='duration'>
  <input id='todo' placeholder='task that needs to be done'>
  <input id='date' type='date'>
  <select id ='importance'>
  <option value="red">Red</option>
  <option value="yellow">Yellow</option>
  <option value="green">Green</option>
  </select>
  <input type='submit' value='Create Task'>
  </form><h5>Red=highest priority, Yellow=Priority, Green=None<h5>
  `
}

  