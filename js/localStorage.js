const saveTaskToLocalStorage = (task) => {
  // get all tasks
  const previousTasksArr = JSON.parse(localStorage.getItem("tasks"));
  console.log(previousTasksArr);
  if (previousTasksArr !== null) {
    // if tasks are null
    previousTasksArr.push(task);
    localStorage.setItem("tasks", JSON.stringify(previousTasksArr));
  } else {
    // create the arr with one task and stringify it!
    let tempArr = [task];
    localStorage.setItem("tasks", JSON.stringify(tempArr));
  }
};

const editTaskOnLocalStorage = (task) => {
  const previousTasksArr = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < previousTasksArr.length; i++) {
    if (previousTasksArr[i].id === task.id) {
      previousTasksArr[i].id = task.id;
      previousTasksArr[i].name = task.name;
      previousTasksArr[i].description = task.description;
      previousTasksArr[i].priority = task.priority;
      previousTasksArr[i].dueDate = task.dueDate;
      break;
    }
  }
  //send array back to local storage
  localStorage.setItem("tasks", JSON.stringify(previousTasksArr));
};

const removeTaskFromLocalStorage = (task) => {
  const previousTasksArr = JSON.parse(localStorage.getItem("tasks"));
  console.log(task);
  let indexOfTask = 1;
  for (let i = 0; i <= previousTasksArr.length; i++) {
    // FIXME names have to be unique, or alternatively generate ids for tasks instead
    if (previousTasksArr[i].name === task.name) {
      indexOfTask = i;
      break;
    }
  }

  if (indexOfTask !== -1) {
    previousTasksArr.splice(indexOfTask, 1);
    localStorage.setItem("tasks", JSON.stringify(previousTasksArr));
  }
};

// short random string for ids - not guaranteed to be unique
const generateTaskId = function (length = 7) {
  let randomId = Math.random()
    .toString(36)
    .substring(2, length + 2);

  //check if the id is actually unique!
  const previousTasksArr = JSON.parse(localStorage.getItem("tasks"));

  if (previousTasksArr !== null) {
    for (let i = 0; i < previousTasksArr.length; i++) {
      if (previousTasksArr[i].id === randomId) {
        i = 0;
        randomId = Math.random()
          .toString(36)
          .substring(2, length + 2);
      }
    }
  }
  return randomId;
};

export {
  saveTaskToLocalStorage,
  removeTaskFromLocalStorage,
  editTaskOnLocalStorage,
  generateTaskId,
};
