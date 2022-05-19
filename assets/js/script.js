/*//picks form as event handler for clicks
var formEl = document.querySelector("#task-form");
// picks ul html 
var tasksToDoEl = document.querySelector("#tasks-to-do");
// Function for click
var createTaskHandler = function(event){
    //prevents page from reset after click
    event.preventDefault();
    //selects the input
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // dom creatining list item
    var listIemEl = document.createElement("li");
    // dom assigning lis class name to css purposes
    listIemEl.className= "task-item";
    // dom text source
    listIemEl.textContent= taskNameInput
    // dom adding list item to actual page
    tasksToDoEl.appendChild(listIemEl);
    // creates dive to hold task info
    var taskInfoEl = document.createElement("div");
    // Give div class to styling purposes
    taskInfoEl.className="task-info";
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>"+ taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listIemEl.appendChild(taskInfoEl);
    //add it all to the screen???
    tasksToDoEl.appendChild(listIemEl);
};
// button click
formEl.addEventListener("submit", createTaskHandler); */
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  
  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);