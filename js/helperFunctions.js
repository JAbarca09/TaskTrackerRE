// Add functions needed for data validation here!

const checkIfInputEmpty = (input) => {
  const isValidInput = input.trim() !== "";
  return isValidInput;
};

const checkIfPriorityIsValid = (input) => {
  const isValidPriority = input !== "Open this select menu";
  return isValidPriority;
};

const truncateTaskName = (str, max) => {
  return str.length > max ? str.substr(0, max - 1) + "…" : str;
};

export { checkIfInputEmpty, checkIfPriorityIsValid, truncateTaskName };
