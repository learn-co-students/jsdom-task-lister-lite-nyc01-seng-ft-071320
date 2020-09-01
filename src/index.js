document.addEventListener("DOMContentLoaded", () => {});

// type a task into input field
// click some form of submit button
const ce = (tag) => document.createElement(tag);
const qs = (selector) => document.querySelector(selector);

const newTaskDescription = qs("#new-task-description");

const form = ce("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const form = e.target
    
    const newTask = ce("li");
    newTask.innerText = newTaskDescription.value;
    console.log(e.target);
   
  });

  const tasks = qs("ul#tasks");
  const li = ce("li");
  tasks.append(li);
  //create ul under divlist called tasks
  //append new li's into ul
};
