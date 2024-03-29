import {
  saveTaskToLocalStorage,
  removeTaskFromLocalStorage,
  editTaskOnLocalStorage,
  generateTaskId,
} from './localStorage.js';
import {
  checkIfInputEmpty,
  checkIfPriorityIsValid,
  truncateTaskName,
  taskPriorityText,
  formatDate,
} from './helperFunctions.js';

/*
  TODO
  
*/

//Task counter locations
let TodoCounter = document.getElementById('TodoCounter');
let InProgressCounter = document.getElementById('InProgressCounter');
let CompletedCounter = document.getElementById('CompletedCounter');

//injection card column locations
let todoColumn = document.getElementById('inject-to-do');
let inProgressColumn = document.getElementById('inject-in-progress');
let completedColumn = document.getElementById('inject-completed');

//inject Modal location
let injectModals = document.getElementById('injectModals');

//Alert injection location
let alertInjectionLocation = document.getElementById('alertInjectionLocation');

// modal close btn for add Task
let closeModalBtn = document.getElementById('closeModal');

//modal inputs
let addTaskBtn = document.getElementById('addTaskBtn');
let taskNameInput = document.getElementById('taskName');
let taskDescriptionInput = document.getElementById('taskDescription');
let taskPriorityInput = document.getElementById('taskPriority');
let dueDateInput = document.getElementById('dueDateInput');

//error divs
let taskNameError = document.getElementById('taskNameError');
let taskDescriptionError = document.getElementById('taskDescriptionError');
let dueDateInputError = document.getElementById('dueDateInputError');
let taskPriorityError = document.getElementById('taskPriorityError');

const currentDate = new Date().toLocaleDateString('sv');
dueDateInput.min = currentDate;

addTaskBtn.addEventListener('click', function (e) {
  const isNameValid = checkIfInputEmpty(taskNameInput.value);
  const isDescriptionValid = checkIfInputEmpty(taskDescriptionInput.value);
  const isDueDateValid = checkIfInputEmpty(dueDateInput.value);
  const isValidPriority = checkIfPriorityIsValid(taskPriorityInput.value);

  // remove errors
  taskNameError.innerHTML = '';
  taskDescriptionError.innerHTML = '';
  dueDateInputError.innerHTML = '';
  taskPriorityError.innerHTML = '';

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
  const taskId = generateTaskId();

  let taskObj = {
    id: taskId,
    name: '',
    description: '',
    priority: '',
    dueDate: '',
  };

  taskObj['name'] = taskNameInput.value;
  taskObj['description'] = taskDescriptionInput.value;
  taskObj['priority'] = taskPriorityInput.value;
  taskObj['dueDate'] = dueDateInput.value;

  switch (taskPriorityInput.value) {
    /*
        Include corresponding colors as well!
        To-Do
        In Progress
        Completed
        */

    case '1':
      injectionLocation = todoColumn;
      cardColorClass = 'todoCard';
      break;
    case '2':
      injectionLocation = inProgressColumn;
      cardColorClass = 'inProgressCard';
      break;
    case '3':
      injectionLocation = completedColumn;
      cardColorClass = 'completedCard';
      break;
  }

  //save the task to local storage!
  saveTaskToLocalStorage(taskObj);
  createBlock(
    taskId,
    injectionLocation,
    taskPriorityInput.value,
    cardColorClass,
    taskNameInput.value,
    taskDescriptionInput.value,
    dueDateInput.value
  );

  //update task counter
  updateTaskCounter(taskPriorityInput.value, null, 'ADD');

  // Reset the values of Add Task form after a successful submission!
  taskNameInput.value = '';
  taskDescriptionInput.value = '';
  dueDateInput.value = '';
  taskPriorityInput.value = '';

  // Add success message
  alertInjectionLocation.innerHTML = `<div class="alert alert-success mt-3" role="alert">Task Created!</div>`;
  setTimeout(() => {
    alertInjectionLocation.innerHTML = '';
  }, 5000);

  // close the modal
  closeModalBtn.click();
});

const createBlock = (
  id,
  injectionLocation,
  priority,
  cardType,
  taskTitle,
  taskDescription,
  dueDate
) => {
  const task = {
    id,
    name: taskTitle,
    description: taskDescription,
    priority,
    dueDate,
  };

  //---------------------------------------------------------------------MODAL 1

  //Modal 1 outermost div
  let modal1OutermostDiv = document.createElement('div');

  //Modal 1 subdiv 1 from outermost div
  let modal1SubDiv1 = document.createElement('div');

  //Modal 1 subdiv 2 from outermost div
  let modal1SubDiv2 = document.createElement('div');

  //Modal body
  let modalBody = document.createElement('div');
  let modalBodyForm = document.createElement('form');

  //styling for modal 1 outermost div
  modal1OutermostDiv.className = 'modal fade';
  modal1OutermostDiv.id = `TaskOptions${id}`;
  modal1OutermostDiv.setAttribute('tabindex', '-1');
  modal1OutermostDiv.setAttribute('aria-labelledby', 'exampleModalLabel');
  modal1OutermostDiv.setAttribute('aria-hidden', 'true');

  //styling for subDiv1 from outermost div
  modal1SubDiv1.className = 'modal-dialog';

  //styling for subDiv2 from outermost div
  modal1SubDiv2.className = 'modal-content';

  //styling for the modal body
  modalBody.className = 'modal-body';

  //row 1 vars and declarations
  let modalBodyRow1 = document.createElement('div');
  let modalBodyCol1 = document.createElement('div');
  let modalLabelRow1 = document.createElement('label');
  let modalInputRow1 = document.createElement('input');
  let modalTaskNameError = document.createElement('div');

  //row 2 vars and declarations
  let modalBodyRow2 = document.createElement('div');
  let modalBodyLabel2 = document.createElement('label');
  let modalBodyCol2 = document.createElement('div');
  let modalInputRow2 = document.createElement('input');
  let modalTaskDescriptionError = document.createElement('div');

  //row 3 vars and declarations
  let modalBodyRow3 = document.createElement('div');
  let modalBodyLabel3 = document.createElement('label');
  let modalBodyCol3 = document.createElement('div');
  let modalBodySelect3 = document.createElement('select');
  let modalTaskPriorityError = document.createElement('div');

  //different options for the select
  let modalBodySelectThreeOption1 = document.createElement('option');
  let modalBodySelectThreeOption2 = document.createElement('option');
  let modalBodySelectThreeOption3 = document.createElement('option');
  let modalBodySelectThreeOption4 = document.createElement('option');

  //row 3 vars and declarations
  let modalBodyRow4 = document.createElement('div');
  let modalBodyLabel4 = document.createElement('label');
  let modalBodyCol4 = document.createElement('div');
  let modalBodyInputRow4 = document.createElement('input');
  let modalTaskDueDateError = document.createElement('div');

  //Modal1 Header
  let modal1Header = document.createElement('div');
  let modal1HeaderTitle = document.createElement('h5');
  let modal1HeaderCloseBtn = document.createElement('button');

  //Modal1 footer
  let modal1Footer = document.createElement('div');
  let modal1FooterDeleteBtn = document.createElement('button');
  let modal1FooterCloseBtn2 = document.createElement('button');

  //styling for the first row
  modalBodyRow1.className = 'mb-3 row';
  modalBodyCol1.className = 'col-sm-9';
  modalLabelRow1.className = 'col-sm-3 col-form-label';
  modalLabelRow1.innerHTML = 'Name:';
  modalLabelRow1.setAttribute('for', ``);
  modalInputRow1.className = 'form-control';
  modalInputRow1.id = `${taskTitle}Row`;
  modalInputRow1.setAttribute('type', 'text');
  modalInputRow1.setAttribute('maxlength', '40');

  //styling for the second row
  modalBodyRow2.className = 'mb-3 row';
  modalBodyLabel2.className = 'col-sm-3 col-form-label';
  modalBodyLabel2.innerHTML = 'Description:';
  modalBodyLabel2.setAttribute('for', `${taskDescription}`);
  modalBodyCol2.className = 'col-sm-9';
  modalInputRow2.className = 'form-control';
  modalInputRow2.id = `${taskDescription}`;
  modalInputRow2.setAttribute('type', 'text');

  //styling for the third row
  modalBodyRow3.className = 'mb-3 row';
  modalBodyLabel3.className = 'col-sm-3 col-form-label';
  modalBodyLabel3.innerHTML = 'Priority:';
  modalBodyLabel3.setAttribute('for', 'task-priority');
  modalBodyCol3.className = 'col-sm-9';
  modalBodySelect3.className = 'form-select';
  modalBodySelect3.id = `task-priority ${taskTitle}`;
  modalBodySelect3.setAttribute('aria-label', 'Select a task priority');
  modalBodySelectThreeOption1.setAttribute('selected', 'true');
  modalBodySelectThreeOption1.innerHTML = 'Open this select menu';
  modalBodySelectThreeOption2.setAttribute('value', '1');
  modalBodySelectThreeOption2.innerHTML = 'To-Do';
  modalBodySelectThreeOption3.setAttribute('value', '2');
  modalBodySelectThreeOption3.innerHTML = 'In Progress';
  modalBodySelectThreeOption4.setAttribute('value', '3');
  modalBodySelectThreeOption4.innerHTML = 'Completed';

  //styling for the fourth row
  modalBodyRow4.className = 'mb-2 row';
  modalBodyLabel4.className = 'col-sm-3 col-form-label';
  modalBodyLabel4.innerHTML = 'Due Date:';
  modalBodyLabel4.setAttribute('for', `${dueDate}`);
  modalBodyCol4.className = 'col-sm-9';
  modalBodyInputRow4.className = 'calendarInput';
  modalBodyInputRow4.id = 'dueDate';
  modalBodyInputRow4.min = currentDate;
  modalBodyInputRow4.setAttribute('type', 'date');

  //styling for the modal 1 header
  modal1Header.className = 'modal-header';
  modal1HeaderTitle.className = 'modal-title';
  modal1HeaderTitle.id = 'exampleModalLabel';
  modal1HeaderTitle.innerHTML = 'Edit Task';
  modal1HeaderCloseBtn.className = 'btn-close';
  modal1HeaderCloseBtn.setAttribute('type', 'button');
  modal1HeaderCloseBtn.setAttribute('data-bs-dismiss', 'modal');
  modal1HeaderCloseBtn.setAttribute('aria-label', 'Close');

  //styling for the modal 1 footer
  modal1Footer.className = 'modal-footer';
  modal1Footer.id = 'TaskOptionsModalFooter';
  modal1FooterDeleteBtn.className = 'btn btn-danger';
  modal1FooterDeleteBtn.innerHTML = 'Delete Task';
  //close the modal after deleting the task!
  //remove the elements: both the card and the modal from the DOM!
  //add the button first to the DOM
  modal1FooterDeleteBtn.setAttribute('data-bs-dismiss', 'modal'); //dismisses the modal
  modal1FooterDeleteBtn.setAttribute('type', 'button');

  modal1FooterCloseBtn2.className = 'btn btn-primary';
  modal1FooterCloseBtn2.setAttribute('type', 'button');
  modal1FooterCloseBtn2.innerHTML = 'Save Changes';

  //putting the first modal row together
  modalBodyRow1.appendChild(modalLabelRow1);
  modalBodyRow1.appendChild(modalBodyCol1);
  modalBodyCol1.appendChild(modalInputRow1);
  modalBodyCol1.appendChild(modalTaskNameError);

  //putting the second modal row together
  modalBodyRow2.appendChild(modalBodyLabel2);
  modalBodyRow2.appendChild(modalBodyCol2);
  modalBodyCol2.appendChild(modalInputRow2);
  modalBodyCol2.appendChild(modalTaskDescriptionError);

  //putting the third modal row together
  modalBodyRow3.appendChild(modalBodyLabel3);
  modalBodyRow3.appendChild(modalBodyCol3);
  modalBodyCol3.appendChild(modalBodySelect3);
  modalBodySelect3.appendChild(modalBodySelectThreeOption1);
  modalBodySelect3.appendChild(modalBodySelectThreeOption2);
  modalBodySelect3.appendChild(modalBodySelectThreeOption3);
  modalBodySelect3.appendChild(modalBodySelectThreeOption4);
  modalBodyCol3.appendChild(modalTaskPriorityError);

  //putting the fourth modal row together
  modalBodyRow4.appendChild(modalBodyLabel4);
  modalBodyRow4.appendChild(modalBodyCol4);
  modalBodyCol4.appendChild(modalBodyInputRow4);
  modalBodyCol4.appendChild(modalTaskDueDateError);

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

  modalInputRow1.value = taskTitle;
  modalInputRow2.value = taskDescription;
  modalBodySelect3.value = priority;
  modalBodyInputRow4.value = dueDate;

  //----------------------------------------------------------------------------------------------------------------
  //MODAL 2 TASK DETAILS

  //modal outermost div
  let modal2OutermostDiv = document.createElement('div');

  //subdiv of outermost div
  let modal2SubDiv1 = document.createElement('div');

  //modal-content div
  let modal2SubDiv2 = document.createElement('div');

  //modal header
  let modal2Header2 = document.createElement('div');
  let modal2HeaderTitle = document.createElement('h3');
  let modal2CloseModalBtn = document.createElement('button');

  //modal body declarations
  let modal2Body = document.createElement('div');
  let modal2BodyText = document.createElement('p');
  let modal2BodyDueDate = document.createElement('p');
  let modal2BodyPriority = document.createElement('p');

  //modal footer declarations
  let modal2Footer = document.createElement('div');
  let modal2FooterBtn = document.createElement('button');

  modal2OutermostDiv.className = 'modal fade';
  modal2OutermostDiv.id = 'ViewTask' + id;
  modal2OutermostDiv.setAttribute('tabindex', '-1');
  modal2OutermostDiv.setAttribute('aria-labelledby', 'exampleModalLabel');
  modal2OutermostDiv.setAttribute('aria-hidden', 'true');

  modal2SubDiv1.className = 'modal-dialog';

  modal2SubDiv2.className = 'modal-content';

  //modal header styling
  modal2Header2.className = 'modal-header';
  modal2HeaderTitle.className = 'view-task-header modal-title';
  modal2HeaderTitle.textContent = taskTitle;
  modal2CloseModalBtn.className = 'btn-close';
  modal2CloseModalBtn.setAttribute('type', 'button');
  modal2CloseModalBtn.setAttribute('data-bs-dismiss', 'modal');
  modal2CloseModalBtn.setAttribute('aria-label', 'Close');

  let taskPriorityTaskText = taskPriorityText(priority);
  let formattedDate = formatDate(dueDate);

  //modal body styling
  modal2Body.className = 'modal-body';
  modal2BodyText.innerHTML = `<p>Task Description: ${taskDescription}</p>`;
  modal2BodyDueDate.innerHTML = `Due Date: <strong>${formattedDate}</strong>`;
  modal2BodyPriority.innerHTML = `<p>Task Status: <strong>${taskPriorityTaskText}</strong></p>`;

  //modal footer styling
  modal2Footer.className = 'modal-footer';
  modal2FooterBtn.className = 'btn btn-secondary';
  modal2FooterBtn.setAttribute('type', 'button');
  modal2FooterBtn.setAttribute('data-bs-dismiss', 'modal');
  modal2FooterBtn.innerHTML = 'Close';

  //appending the modal header together
  modal2Header2.appendChild(modal2HeaderTitle);
  modal2Header2.appendChild(modal2CloseModalBtn);

  //appending the modal body together
  modal2Body.appendChild(modal2BodyPriority);
  modal2Body.appendChild(modal2BodyDueDate);
  modal2Body.appendChild(modal2BodyText);

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
  let outermostDiv = document.createElement('div');

  //first row vars and declarations
  let row1 = document.createElement('div');
  let row1Div1 = document.createElement('div');
  let row1h2 = document.createElement('h2');

  //second row vars and declarations
  let row2 = document.createElement('div');
  let row2Div2 = document.createElement('div');
  let row2DivBtn = document.createElement('button');

  //third row vars and declarations
  let row3 = document.createElement('div');
  let row3Div3 = document.createElement('div');
  let row3DivBtn2 = document.createElement('button');

  //truncate task name
  const truncateName = truncateTaskName(taskTitle, 10);

  //styling for first row
  outermostDiv.className = `col-12 ${cardType} mb-3`;
  outermostDiv.id = `outerMostDiv${taskTitle}`;
  row1.className = 'row';
  row1Div1.className = 'col-12 mt-2';
  row1h2.className = 'taskTitle text-center';
  row1h2.innerHTML = truncateName;

  //styling for the second row
  row2.className = 'row mt-4';
  row2Div2.className = 'col-12 d-flex justify-content-center';
  row2DivBtn.className = 'btn btn-primary cardBtns';
  row2DivBtn.innerHTML = 'Task Options';
  row2DivBtn.setAttribute('data-bs-target', `#TaskOptions${id}`);
  row2DivBtn.setAttribute('data-bs-toggle', 'modal');

  //styling for the third row
  row3.className = 'row mt-2 pb-3';
  row3Div3.className = 'col-12 d-flex justify-content-center';
  row3DivBtn2.className = 'btn btn-dark cardBtns';
  row3DivBtn2.innerHTML = 'View Task';
  row3DivBtn2.setAttribute('data-bs-target', '#ViewTask' + id);
  row3DivBtn2.setAttribute('data-bs-toggle', 'modal');

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

  //delete btn on task options
  modal1FooterDeleteBtn.addEventListener('click', function () {
    updateTaskCounter(task.priority, null, 'REMOVE');
    removeTaskFromLocalStorage(task);

    //remove card, view, and task options modal!
    outermostDiv.remove();
    modal1OutermostDiv.remove();
    modal2OutermostDiv.remove();

    alertInjectionLocation.innerHTML = `<div class="alert alert-danger mt-3" role="alert">Task Deleted!</div>`;
    setTimeout(() => {
      alertInjectionLocation.innerHTML = '';
    }, 5000);
  });

  //save changes btn on task options
  modal1FooterCloseBtn2.addEventListener('click', function () {
    const isEditNameValid = checkIfInputEmpty(modalInputRow1.value);
    const isEditDescriptionValid = checkIfInputEmpty(modalInputRow2.value);
    const isEditDueDateValid = checkIfInputEmpty(modalBodySelect3.value);
    const isEditValidPriority = checkIfPriorityIsValid(
      modalBodyInputRow4.value
    );

    // remove errors
    modalTaskNameError.innerHTML = '';
    modalTaskDescriptionError.innerHTML = '';
    modalTaskDueDateError.innerHTML = '';
    modalTaskPriorityError.innerHTML = '';

    //Data validate task before submitting it
    if (
      !isEditNameValid ||
      !isEditDescriptionValid ||
      !isEditDueDateValid ||
      !isEditValidPriority
    ) {
      if (!isEditNameValid) {
        modalTaskNameError.innerHTML =
          '<p class="mb-0 invalid">Enter a valid task name!</p>';
      }
      if (!isEditDescriptionValid) {
        modalTaskDescriptionError.innerHTML =
          '<p class="mb-0 invalid">Enter a valid task description!</p>';
      }
      if (!isEditDueDateValid) {
        modalTaskDueDateError.innerHTML =
          '<p class="mb-0 invalid">Enter a valid due date!</p>';
      }
      if (!isEditValidPriority) {
        modalTaskPriorityError.innerHTML =
          '<p class="mb-0 invalid">Enter a valid task priority!</p>';
      }
      // stop the function from creating a task if there is an error
      return;
    }

    //close the edit task modal!
    modal1HeaderCloseBtn.click();

    let newCardColorClass = '';
    let newInjectionLocation;
    let tempTaskObj = {
      id,
      name: modalInputRow1.value,
      description: modalInputRow2.value,
      priority: modalBodySelect3.value,
      dueDate: modalBodyInputRow4.value,
    };
    //take the new changes of the card and save them to local storage
    editTaskOnLocalStorage(tempTaskObj);

    // Changes should be reflected on the DOM
    switch (modalBodySelect3.value) {
      case '1':
        newInjectionLocation = todoColumn;
        newCardColorClass = 'todoCard';
        break;
      case '2':
        newInjectionLocation = inProgressColumn;
        newCardColorClass = 'inProgressCard';
        break;
      case '3':
        newInjectionLocation = completedColumn;
        newCardColorClass = 'completedCard';
        break;
    }

    //card changes
    taskPriorityTaskText = taskPriorityText(modalBodySelect3.value);
    row1h2.innerHTML = truncateTaskName(modalInputRow1.value, 10);
    outermostDiv.className = `col-12 ${newCardColorClass} mb-3`;
    newInjectionLocation.appendChild(outermostDiv);

    let formattedDate2 = formatDate(modalBodyInputRow4.value);

    // View Task modal changes
    modal2HeaderTitle.textContent = modalInputRow1.value;
    modal2BodyText.innerHTML = `<p>${modalInputRow2.value}</p>`;
    modal2BodyDueDate.innerHTML = `Due date: <strong>${formattedDate2}</strong>`;
    modal2BodyPriority.innerHTML = `<p>Task Status: <strong>${taskPriorityTaskText}</strong></p>`;

    //Alert message that task was successfully edited!
    alertInjectionLocation.innerHTML = `<div class="alert alert-success mt-3" role="alert">Task Edited!</div>`;
    setTimeout(() => {
      alertInjectionLocation.innerHTML = '';
    }, 5000);

    //Counter changes
    updateTaskCounter(modalBodySelect3.value, task.priority, 'SWITCH');

    //update task priority From to new From location
    task.priority = modalBodySelect3.value;
  });
};

loadTasksFromLocalStorage();
loadTaskCountersOnLoad();

// load tasks using local storage
function loadTasksFromLocalStorage() {
  const previousTasksArr = JSON.parse(localStorage.getItem('tasks'));
  //check if there are tasks in the arr!
  if (previousTasksArr !== null) {
    previousTasksArr.map((task) => {
      let loadInjectionLocation;
      let loadCardColorClass;

      switch (task.priority) {
        case '1':
          loadInjectionLocation = todoColumn;
          loadCardColorClass = 'todoCard';
          break;
        case '2':
          loadInjectionLocation = inProgressColumn;
          loadCardColorClass = 'inProgressCard';
          break;
        case '3':
          loadInjectionLocation = completedColumn;
          loadCardColorClass = 'completedCard';
          break;
      }
      createBlock(
        task.id,
        loadInjectionLocation,
        task.priority,
        loadCardColorClass,
        task.name,
        task.description,
        task.dueDate
      );
    });
  }
}

function updateTaskCounter(To, From = null, Type) {
  //get the counters
  let TodoCount = Number(TodoCounter.innerText);
  let InProgressCount = Number(InProgressCounter.innerText);
  let CompletedCount = Number(CompletedCounter.innerText);

  if (From === null) {
    if (Type === 'ADD') {
      switch (To) {
        //Add 1 to the counter!
        case '1':
          TodoCount++;
          TodoCounter.innerText = `${TodoCount}`;
          break;

        case '2':
          InProgressCount++;
          InProgressCounter.innerText = `${InProgressCount}`;
          break;

        case '3':
          CompletedCount++;
          CompletedCounter.innerText = `${CompletedCount}`;
          break;
      }
      return;
    }

    if (Type === 'REMOVE') {
      switch (To) {
        //Subtract 1 to the counter!
        case '1':
          TodoCount--;
          TodoCounter.innerText = `${TodoCount}`;
          break;

        case '2':
          InProgressCount--;
          InProgressCounter.innerText = `${InProgressCount}`;
          break;

        case '3':
          CompletedCount--;
          CompletedCounter.innerText = `${CompletedCount}`;
          break;
      }
      return;
    }
  }

  if (Type === 'SWITCH') {
    // subtract 1 from the "From" location
    // add 1 to the "To" location

    switch (From) {
      case '1':
        TodoCount--;
        TodoCounter.innerText = `${TodoCount}`;
        break;

      case '2':
        InProgressCount--;
        InProgressCounter.innerText = `${InProgressCount}`;
        break;

      case '3':
        CompletedCount--;
        CompletedCounter.innerText = `${CompletedCount}`;
        break;
    }

    switch (To) {
      case '1':
        TodoCount++;
        TodoCounter.innerText = `${TodoCount}`;
        break;

      case '2':
        InProgressCount++;
        InProgressCounter.innerText = `${InProgressCount}`;
        break;

      case '3':
        CompletedCount++;
        CompletedCounter.innerText = `${CompletedCount}`;
        break;
    }
  }
}

function loadTaskCountersOnLoad() {
  const previousTasksArr = JSON.parse(localStorage.getItem('tasks'));
  let TodoCount = Number(TodoCounter.innerText);
  let InProgressCount = Number(InProgressCounter.innerText);
  let CompletedCount = Number(CompletedCounter.innerText);

  for (let i = 0; i < previousTasksArr.length; i++) {
    switch (previousTasksArr[i].priority) {
      case '1':
        TodoCount++;
        TodoCounter.innerText = `${TodoCount}`;
        break;

      case '2':
        InProgressCount++;
        InProgressCounter.innerText = `${InProgressCount}`;
        break;

      case '3':
        CompletedCount++;
        CompletedCounter.innerText = `${CompletedCount}`;
        break;
    }
  }
}
