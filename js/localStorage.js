 const saveTaskToLocalStorage = (task) => {
  // get all tasks
  const previousTasksArr = JSON.parse(localStorage.getItem("tasks"));
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

const removeTaskFromLocalStorage = (task) => {
  const previousTasksArr = JSON.parse(localStorage.getItem("tasks"));
  const indexOfTask = previousTasksArr.indexOf(task);
  previousTasksArr.splice(indexOfTask, 1);
  localStorage.setItem("tasks", JSON.stringify(previousTasksArr));
};

export { saveTaskToLocalStorage, removeTaskFromLocalStorage };