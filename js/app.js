import { saveTaskToLocalStorage } from "./localStorage.js";
import {
  checkIfInputEmpty,
  checkIfPriorityIsValid,
} from "./helperFunctions.js";

/*
    UPDATE: 09/04/2022
    Start working on the functionality of the application when the user adds a task, create an element
    by calling the function. Additionally work on a solution for the local storage, I think an array
    of objects seems to be a feasible solution if its possible with local storage!

    TODO
    1. When editing task the task name, description, due date, and priority should be pulled
    2. If edits to a task are made they should be reflected in local storage and on the DOM

    BUGS:
    1. Tasks with the same name can exist and that breaks stuff ie: opening modals
    2. Tasks can have a past date, limit it to only the present and future dates
    FIXME
    3. When creating tasks, the task form can be submitted incorrectly needs data validation!
    4. When a task is created from the Add task button, a message should appear that a task was created!

    Additional Things to consider:
    1. Delete task button on the cards themselves we cannot remove tasks as of currently!
        a. functionality for deleting cards and modals! for now remove from the DOM

    UPDATE 11/4/22
    Added a delete button to task options
    working on delete button functionality, removing card and modals from the DOM they need updated Ids which causes the modals to need updated targets as well!
    */

//injection card column locations
let todoColumn = document.getElementById("inject-to-do");
let inProgressColumn = document.getElementById("inject-in-progress");
let completedColumn = document.getElementById("inject-completed");

//inject Modal location
let injectModals = document.getElementById("injectModals");

//modal inputs
let addTaskBtn = document.getElementById("addTaskBtn");
let taskNameInput = document.getElementById("taskName");
let taskDescriptionInput = document.getElementById("taskDescription");
let taskPriorityInput = document.getElementById("taskPriority");
let dueDateInput = document.getElementById("dueDateInput");

//error divs
let taskNameError = document.getElementById("taskNameError");
let taskDescriptionError = document.getElementById("taskDescriptionError");
let dueDateInputError = document.getElementById("dueDateInputError");
let taskPriorityError = document.getElementById("taskPriorityError");

//set dueDateInput minimum to be in YYYY-MM-DD format to set the minimum for the dueDateInput dont forget calendar Input as well!
const result = new Date().toLocaleDateString("sv");
dueDateInput.min = result;

let tasks = [];

addTaskBtn.addEventListener("click", function (e) {
  // FIXME Add data validation to add Task before submitted
  const isNameValid = checkIfInputEmpty(taskNameInput.value);
  const isDescriptionValid = checkIfInputEmpty(taskDescriptionInput.value);
  const isDueDateValid = checkIfInputEmpty(dueDateInput.value);
  const isValidPriority = checkIfPriorityIsValid(taskPriorityInput.value);

  // remove errors
  taskNameError.innerHTML = "";
  taskDescriptionError.innerHTML = "";
  dueDateInputError.innerHTML = "";
  taskPriorityError.innerHTML = "";

  //Data validate task before submitting it
  if (
    !isNameValid ||
    !isDescriptionValid ||
    !isDueDateValid ||
    !isValidPriority
  ) {
    if (!isNameValid) {
      taskNameError.innerHTML =
        '<p class="mb-0 invalid">Enter a valid task name!</p>';
    }
    if (!isDescriptionValid) {
      taskDescriptionError.innerHTML =
        '<p class="mb-0 invalid">Enter a valid task description!</p>';
    }
    if (!isDueDateValid) {
      dueDateInputError.innerHTML =
        '<p class="mb-0 invalid">Enter a valid due date!</p>';
    }
    if (!isValidPriority) {
      taskPriorityError.innerHTML =
        '<p class="mb-0 invalid">Enter a valid task priority!</p>';
    }
    // stop the function from creating a task if there is an error
    return;
  }

  let injectionLocation;
  let cardColorClass;
  let taskObj = {
    name: "",
    description: "",
    injectionLocation: "",
    dueDate: "",
  };

  taskObj["name"] = taskNameInput.value;
  taskObj["description"] = taskDescriptionInput.value;
  taskObj["priority"] = taskPriorityInput.value;
  taskObj["dueDate"] = dueDateInput.value;

  console.log(taskObj["priority"]);

  switch (taskPriorityInput.value) {
    /*
        Include corresponding colors as well!
        To-Do
        In Progress
        Completed
        */

    case "1":
      injectionLocation = todoColumn;
      cardColorClass = "todoCard";
      break;
    case "2":
      injectionLocation = inProgressColumn;
      cardColorClass = "inProgressCard";
      break;
    case "3":
      injectionLocation = completedColumn;
      cardColorClass = "completedCard";
      break;
  }

  //save the task to local storage!
  saveTaskToLocalStorage(taskObj);
  createBlock(
    injectionLocation,
    taskPriorityInput.value,
    cardColorClass,
    taskNameInput.value,
    taskDescription.value,
    dueDateInput.value
  );
});

const createBlock = (
  injectionLocation,
  priority,
  cardType,
  taskTitle,
  taskDescription,
  dueDate
) => {
  
  //MODAL 1
  const REVISEDtaskTitle = modalNameFix(taskTitle);

  //Modal 1 outermost div
  let modal1OutermostDiv = document.createElement("div");

  //Modal 1 subdiv 1 from outermost div
  let modal1SubDiv1 = document.createElement("div");

  //Modal 1 subdiv 2 from outermost div
  let modal1SubDiv2 = document.createElement("div");

  //Modal body
  let modalBody = document.createElement("div");
  let modalBodyForm = document.createElement("form");

  //styling for modal 1 outermost div
  modal1OutermostDiv.className = "modal fade";
  modal1OutermostDiv.id = `TaskOptions${REVISEDtaskTitle}`;
  modal1OutermostDiv.setAttribute("tabindex", "-1");
  modal1OutermostDiv.setAttribute("aria-labelledby", "exampleModalLabel");
  modal1OutermostDiv.setAttribute("aria-hidden", "true");

  //styling for subDiv1 from outermost div
  modal1SubDiv1.className = "modal-dialog";

  //styling for subDiv2 from outermost div
  modal1SubDiv2.className = "modal-content";

  //styling for the modal body
  modalBody.className = "modal-body";

  //row 1 vars and declarations
  let modalBodyRow1 = document.createElement("div");
  let modalBodyCol1 = document.createElement("div");
  let modalLabelRow1 = document.createElement("label");
  let modalInputRow1 = document.createElement("input");

  //row 2 vars and declarations
  let modalBodyRow2 = document.createElement("div");
  let modalBodyLabel2 = document.createElement("label");
  let modalBodyCol2 = document.createElement("div");
  let modalInputRow2 = document.createElement("input");

  //row 3 vars and declarations
  let modalBodyRow3 = document.createElement("div");
  let modalBodyLabel3 = document.createElement("label");
  let modalBodyCol3 = document.createElement("div");
  let modalBodySelect3 = document.createElement("select");
  //different options for the select
  let modalBodySelectThreeOption1 = document.createElement("option");
  let modalBodySelectThreeOption2 = document.createElement("option");
  let modalBodySelectThreeOption3 = document.createElement("option");
  let modalBodySelectThreeOption4 = document.createElement("option");

  //row 3 vars and declarations
  let modalBodyRow4 = document.createElement("div");
  let modalBodyLabel4 = document.createElement("label");
  let modalBodyCol4 = document.createElement("div");
  let modalBodyInputRow4 = document.createElement("input");

  //Modal1 Header
  let modal1Header = document.createElement("div");
  let modal1HeaderTitle = document.createElement("h5");
  let modal1HeaderCloseBtn = document.createElement("button");

  //Modal1 footer
  let modal1Footer = document.createElement("div");
  let modal1FooterDeleteBtn = document.createElement("button");
  let modal1FooterCloseBtn2 = document.createElement("button");

  //styling for the first row
  modalBodyRow1.className = "mb-3 row";
  modalBodyCol1.className = "col-sm-9";
  modalLabelRow1.className = "col-sm-3 col-form-label";
  modalLabelRow1.innerHTML = "Name:";
  modalLabelRow1.setAttribute("for", ``);
  modalInputRow1.className = "form-control";
  modalInputRow1.id = `${taskTitle}Row`;
  modalInputRow1.setAttribute("type", "text");

  //styling for the second row
  modalBodyRow2.className = "mb-3 row";
  modalBodyLabel2.className = "col-sm-3 col-form-label";
  modalBodyLabel2.innerHTML = "Description:";
  modalBodyLabel2.setAttribute("for", `${taskDescription}`);
  modalBodyCol2.className = "col-sm-9";
  modalInputRow2.className = "form-control";
  modalInputRow2.id = `${taskDescription}`;
  modalInputRow2.setAttribute("type", "text");

  //styling for the third row
  modalBodyRow3.className = "mb-3 row";
  modalBodyLabel3.className = "col-sm-3 col-form-label";
  modalBodyLabel3.innerHTML = "Priority:";
  modalBodyLabel3.setAttribute("for", "task-priority");
  modalBodyCol3.className = "col-sm-9";
  modalBodySelect3.className = "form-select";
  modalBodySelect3.id = `task-priority ${taskTitle}`;
  modalBodySelect3.setAttribute("aria-label", "Select a task priority");
  modalBodySelectThreeOption1.setAttribute("selected", "true");
  modalBodySelectThreeOption1.innerHTML = "Open this select menu";
  modalBodySelectThreeOption2.setAttribute("value", "1");
  modalBodySelectThreeOption2.innerHTML = "To-Do";
  modalBodySelectThreeOption3.setAttribute("value", "2");
  modalBodySelectThreeOption3.innerHTML = "In Progress";
  modalBodySelectThreeOption4.setAttribute("value", "3");
  modalBodySelectThreeOption4.innerHTML = "Completed";

  //styling for the fourth row
  modalBodyRow4.className = "mb-2 row";
  modalBodyLabel4.className = "col-sm-3 col-form-label";
  modalBodyLabel4.innerHTML = "Due Date:";
  modalBodyLabel4.setAttribute("for", `${dueDate}`);
  modalBodyCol4.className = "col-sm-9";
  modalBodyInputRow4.className = "calendarInput";
  modalBodyInputRow4.id = "dueDate";
  modalBodyInputRow4.min = result;
  modalBodyInputRow4.setAttribute("type", "date");

  //styling for the modal 1 header
  modal1Header.className = "modal-header";
  modal1HeaderTitle.className = "modal-title";
  modal1HeaderTitle.id = "exampleModalLabel";
  modal1HeaderTitle.innerHTML = "Edit Task";
  modal1HeaderCloseBtn.className = "btn-close";
  modal1HeaderCloseBtn.setAttribute("type", "button");
  modal1HeaderCloseBtn.setAttribute("data-bs-dismiss", "modal");
  modal1HeaderCloseBtn.setAttribute("aria-label", "Close");

  //styling for the modal 1 footer
  modal1Footer.className = "modal-footer";
  modal1Footer.id = "TaskOptionsModalFooter";
  modal1FooterDeleteBtn.className = "btn btn-danger";
  modal1FooterDeleteBtn.innerHTML = "Delete Task";
  //close the modal after deleting the task!
  //remove the elements: both the card and the modal from the DOM!
  //add the button first to the DOM
  modal1FooterDeleteBtn.setAttribute("data-bs-dismiss", "modal"); //dismisses the modal
  modal1FooterDeleteBtn.setAttribute("type", "button");

  modal1FooterCloseBtn2.className = "btn btn-primary";
  modal1FooterCloseBtn2.setAttribute("type", "button");
  modal1FooterCloseBtn2.innerHTML = "Save Changes";

  //putting the first modal row together
  modalBodyRow1.appendChild(modalLabelRow1);
  modalBodyRow1.appendChild(modalBodyCol1);
  modalBodyCol1.appendChild(modalInputRow1);

  //putting the second modal row together
  modalBodyRow2.appendChild(modalBodyLabel2);
  modalBodyRow2.appendChild(modalBodyCol2);
  modalBodyCol2.appendChild(modalInputRow2);

  //putting the third modal row together
  modalBodyRow3.appendChild(modalBodyLabel3);
  modalBodyRow3.appendChild(modalBodyCol3);
  modalBodyCol3.appendChild(modalBodySelect3);
  modalBodySelect3.appendChild(modalBodySelectThreeOption1);
  modalBodySelect3.appendChild(modalBodySelectThreeOption2);
  modalBodySelect3.appendChild(modalBodySelectThreeOption3);
  modalBodySelect3.appendChild(modalBodySelectThreeOption4);

  //putting the fourth modal row together
  modalBodyRow4.appendChild(modalBodyLabel4);
  modalBodyRow4.appendChild(modalBodyCol4);
  modalBodyCol4.appendChild(modalBodyInputRow4);

  //putting the modal header together
  modal1Header.appendChild(modal1HeaderTitle);
  modal1Header.appendChild(modal1HeaderCloseBtn);

  //putting the modal footer together
  modal1Footer.appendChild(modal1FooterDeleteBtn);
  modal1Footer.appendChild(modal1FooterCloseBtn2);

  //Putting the modal BODY TOGETHER
  modalBody.appendChild(modalBodyForm);
  modalBodyForm.appendChild(modalBodyRow1);
  modalBodyForm.appendChild(modalBodyRow2);
  modalBodyForm.appendChild(modalBodyRow3);
  modalBodyForm.appendChild(modalBodyRow4);

  //Putting the modal Together
  //need body, header, footer
  modal1OutermostDiv.appendChild(modal1SubDiv1);
  modal1SubDiv1.appendChild(modal1SubDiv2);
  modal1SubDiv2.appendChild(modal1Header);
  modal1SubDiv2.appendChild(modalBody);
  modal1SubDiv2.appendChild(modal1Footer);

  //TODO Content that should be inside the modal when opened!
  modalInputRow1.value = taskTitle;
  modalInputRow2.value = taskDescription;
  modalBodySelect3.value = priority;
  modalBodyInputRow4.value = dueDate;

  //----------------------------------------------------------------------------------------------------------------
  //MODAL 2 TASK DETAILS

  //modal outermost div
  let modal2OutermostDiv = document.createElement("div");

  //subdiv of outermost div
  let modal2SubDiv1 = document.createElement("div");

  //modal-content div
  let modal2SubDiv2 = document.createElement("div");

  //modal header
  let modal2Header2 = document.createElement("div");
  let modal2HeaderTitle = document.createElement("h5");
  let modal2CloseModalBtn = document.createElement("button");

  //modal body declarations
  let modal2Body = document.createElement("div");
  let modal2BodyText = document.createElement("p");
  let modal2BodyDueDate = document.createElement("p");

  //modal footer declarations
  let modal2Footer = document.createElement("div");
  let modal2FooterBtn = document.createElement("button");

  modal2OutermostDiv.className = "modal fade";
  modal2OutermostDiv.id = "ViewTask" + REVISEDtaskTitle;
  modal2OutermostDiv.setAttribute("tabindex", "-1");
  modal2OutermostDiv.setAttribute("aria-labelledby", "exampleModalLabel");
  modal2OutermostDiv.setAttribute("aria-hidden", "true");

  modal2SubDiv1.className = "modal-dialog";

  modal2SubDiv2.className = "modal-content";

  //modal header styling
  modal2Header2.className = "modal-header";
  modal2HeaderTitle.className = "modal-title";
  modal2HeaderTitle.innerHTML = "Task Details";
  modal2CloseModalBtn.className = "btn-close";
  modal2CloseModalBtn.setAttribute("type", "button");
  modal2CloseModalBtn.setAttribute("data-bs-dismiss", "modal");
  modal2CloseModalBtn.setAttribute("aria-label", "Close");

  //modal body styling
  modal2Body.className = "modal-body";
  modal2BodyText.innerHTML = taskDescription;
  modal2BodyDueDate.innerHTML = `Due date: <strong>${dueDate}</strong>`;

  //modal footer styling
  modal2Footer.className = "modal-footer";
  modal2FooterBtn.className = "btn btn-secondary";
  modal2FooterBtn.setAttribute("type", "button");
  modal2FooterBtn.setAttribute("data-bs-dismiss", "modal");
  modal2FooterBtn.innerHTML = "Close";

  //appending the modal header together
  modal2Header2.appendChild(modal2HeaderTitle);
  modal2Header2.appendChild(modal2CloseModalBtn);

  //appending the modal body together
  modal2Body.appendChild(modal2BodyText);
  modal2Body.appendChild(modal2BodyDueDate);

  //appending the modal footer together
  modal2Footer.appendChild(modal2FooterBtn);

  //appending Modal 2 together!
  modal2OutermostDiv.appendChild(modal2SubDiv1);
  modal2SubDiv1.appendChild(modal2SubDiv2);
  modal2SubDiv2.appendChild(modal2Header2);
  modal2SubDiv2.appendChild(modal2Body);
  modal2SubDiv2.appendChild(modal2Footer);

  //----------------------------------------------------------------------------------------------------------------

  //CREATE ELEMENTS FOR THE CARDS
  let outermostDiv = document.createElement("div");

  //first row vars and declarations
  let row1 = document.createElement("div");
  let row1Div1 = document.createElement("div");
  let row1h2 = document.createElement("h2");

  //second row vars and declarations
  let row2 = document.createElement("div");
  let row2Div2 = document.createElement("div");
  let row2DivBtn = document.createElement("button");

  //third row vars and declarations
  let row3 = document.createElement("div");
  let row3Div3 = document.createElement("div");
  let row3DivBtn2 = document.createElement("button");

  //styling for first row
  outermostDiv.className = `col-12 ${cardType} mb-3`;
  row1.className = "row";
  row1Div1.className = "col-12 mt-2";
  row1h2.className = "taskTitle text-center";
  row1h2.innerHTML = taskTitle;

  //styling for the second row
  row2.className = "row mt-4";
  row2Div2.className = "col-12 d-flex justify-content-center";
  row2DivBtn.className = "btn btn-primary cardBtns";
  row2DivBtn.innerHTML = "Task Options";
  row2DivBtn.setAttribute("data-bs-target", `#TaskOptions${REVISEDtaskTitle}`);
  row2DivBtn.setAttribute("data-bs-toggle", "modal");

  //styling for the third row
  row3.className = "row mt-2 pb-3";
  row3Div3.className = "col-12 d-flex justify-content-center";
  row3DivBtn2.className = "btn btn-dark cardBtns";
  row3DivBtn2.innerHTML = "View Task";
  row3DivBtn2.setAttribute("data-bs-target", "#ViewTask" + REVISEDtaskTitle);
  row3DivBtn2.setAttribute("data-bs-toggle", "modal");

  //append everything together
  outermostDiv.appendChild(row1);
  outermostDiv.appendChild(row2);
  outermostDiv.appendChild(row3);

  //row 1 appending
  row1.appendChild(row1Div1);
  row1Div1.appendChild(row1h2);

  //row2 appending
  row2.appendChild(row2Div2);
  row2Div2.appendChild(row2DivBtn);

  //row3 appending
  row3.appendChild(row3Div3);
  row3Div3.appendChild(row3DivBtn2);

  injectionLocation.appendChild(outermostDiv);

  //inject the modals as well
  injectModals.appendChild(modal1OutermostDiv);
  injectModals.appendChild(modal2OutermostDiv);

  //functionality for the buttons
  modal1FooterDeleteBtn.addEventListener("click", function () {
    console.log(
      "Delete the card and the modals from the DOM and eventually local storage"
    );

    /*target parent nodes of both the card and the modals! 3 things need to get deleted
        card
        task options modal
        view task modal
        local storage
        */
  });
};

const modalNameFix = (taskTitle) => {
  let newTitle = "";
  let taskWordsArr = [];
  taskWordsArr = taskTitle.split(" ");
  if (taskWordsArr.length > 1) {
    newTitle = taskWordsArr.join(" ").replace(/ /g, ""); //the replace removes any white space in the words
  } else {
    newTitle = taskTitle;
  }
  return newTitle;
};

// Calls to create cards
// createBlock(
//   inProgressColumn,
//   "inProgressCard",
//   "Task Tracker   Project",
//   "Work on the Task tracker",
//   "11/04/22"
// );
// createBlock(
//   todoColumn,
//   "todoCard",
//   "Title",
//   "Work on the Task tracker",
//   "11/04/22"
// );
// createBlock(
//   completedColumn,
//   "completedCard",
//   "Another Project",
//   "Work on the Task tracker",
//   "11/04/22"
// );

// injectionLocations: todoCard, inProgressCard, completedCard
//     cardType,
//     taskTitle,
//     taskDescription,
//     taskPriority,
//     dueDate
