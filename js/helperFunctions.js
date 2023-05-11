// Add functions needed for data validation here!

const checkIfInputEmpty = (input) => {
    const enteredInput = input.trim() === "";
    return enteredInput;
};


export { checkIfEmpty }
