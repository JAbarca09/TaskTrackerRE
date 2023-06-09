// Add functions needed for data validation here!

const checkIfInputEmpty = (input) => {
  const isValidInput = input.trim() !== '';
  return isValidInput;
};

const checkIfPriorityIsValid = (input) => {
  const isValidPriority = input !== 'Open this select menu';
  return isValidPriority;
};

const truncateTaskName = (str, max) => {
  return str.length > max ? str.substr(0, max - 1) + '…' : str;
};

const taskPriorityText = (priority) => {
  let taskPriorityTxt;
  switch (priority) {
    case '1':
      taskPriorityTxt = 'To-do';
      break;
    case '2':
      taskPriorityTxt = 'In Progress';
      break;
    case '3':
      taskPriorityTxt = 'Complete';
      break;
  }
  return taskPriorityTxt;
};

const formatDate = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return `${month}/${day}/${year}`;
};

export {
  checkIfInputEmpty,
  checkIfPriorityIsValid,
  truncateTaskName,
  taskPriorityText,
  formatDate,
};
