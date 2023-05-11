export const saveTaskToLocalStorage = (item) => {
  // get the previous tasks, save them into a variable []
  // save the new task to the variable
  // set local storage to JSON.stringify(variable)
  const previousTasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(previousTasks);
  localStorage.setItem("tasks", JSON.stringify(item));
  const tasks = localStorage.getItem("tasks");
  console.log(tasks);
};
