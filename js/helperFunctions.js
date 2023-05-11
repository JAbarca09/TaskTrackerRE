// Add functions needed for data validation here!

const checkIfInputEmpty = (input) => {
  const isValidInput = input.trim() !== "";
  return isValidInput;
};

const checkIfPriorityIsValid = (input) => {
  const isValidPriority = input !== "Open this select menu";
  return isValidPriority;
};

export { checkIfInputEmpty, checkIfPriorityIsValid };
