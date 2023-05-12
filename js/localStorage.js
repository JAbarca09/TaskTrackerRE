export const saveTaskToLocalStorage = (task) => {
  // get the previous tasks, save them into a variable []
  // save the new task to the variable
  // set local storage to JSON.stringify(variable)
  const previousTasksArr = JSON.parse(localStorage.getItem("tasks"));
  if (previousTasksArr !== null) {
    //there is a task
    previousTasksArr.push(task);
    localStorage.setItem("tasks", JSON.stringify(previousTasksArr));
  } else {
    // create the arr with one task and stringify it!
    let tempArr = [task];
    localStorage.setItem("tasks", JSON.stringify(tempArr));
  }
};
