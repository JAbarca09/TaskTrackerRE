//UPDATE: 8/11/22, the form inside the modal body is done


//My Js is connected!
console.log("Hello World");

//injection locations
let todoColumn = document.getElementById('inject-to-do');
let inProgressColumn = document.getElementById('inject-in-progress');
let completedColumn = document.getElementById('inject-completed');


//btns
let addTaskBtn = document.getElementById('add-task-btn');





const createBlock = (injectionLocation, cardType, taskTitle, taskDescription, taskPriority, dueDate) => {
  //Modal 1
  //Modal body
  let modalBody = document.createElement('div');
  let modalBodyForm = document.createElement('form');

  //styling for the modal body
  modalBody.className = 'modal-body';

  //row 1 vars and declarations
  let modalBodyRow1 = document.createElement('div');
  let modalBodyCol1 = document.createElement('div');
  let modalLabelRow1 = document.createElement('label');
  let modalInputRow1 = document.createElement('input');

  //row 2 vars and declarations
  let modalBodyRow2 = document.createElement('div');
  let modalBodyLabel2 = document.createElement('label');
  let modalBodyCol2 = document.createElement('div');
  let modalInputRow2 = document.createElement('input');

  //row 3 vars and declarations
  let modalBodyRow3 = document.createElement('div');
  let modalBodyLabel3 = document.createElement('label');
  let modalBodyCol3 = document.createElement('div');
  let modalBodySelect3 = document.createElement('select');
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

  //Modal footer
  let modal1Footer = document.createElement('div');
  let modal1FooterCloseBtn1 = document.createElement('button');
  let modal1FooterCloseBtn2 = document.createElement('button');

  //styling for the first row
  modalBodyRow1.className = 'mb-3 row';
  modalBodyCol1.className = 'col-sm-9';
  modalLabelRow1.className = 'col-sm-3 col-form-label';
  modalLabelRow1.innerHTML = 'Name:';
  modalLabelRow1.setAttribute('for', `${taskTitle}`);
  modalInputRow1.className = 'form-control';
  modalInputRow1.id = `${taskTitle}`;
  modalInputRow1.setAttribute('type', 'text');

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
  modalBodyLabel3.setAttribute('for', `${taskPriority}`);
  modalBodyCol3.className = 'col-sm-9';
  modalBodySelect3.className = 'form-select';
  modalBodySelect3.id = `${taskPriority}`;
  modalBodySelect3.setAttribute('aria-label', 'Select a task priority');
  modalBodySelectThreeOption1.setAttribute('selected', 'true');
  modalBodySelectThreeOption1.innerHTML = 'Open this select menu';
  modalBodySelectThreeOption2.setAttribute('value', '1');
  modalBodySelectThreeOption2.innerHTML = 'To-Do';
  modalBodySelectThreeOption3.setAttribute('value', '2');
  modalBodySelectThreeOption3.innerHTML = 'In Progress';
  modalBodySelectThreeOption4.setAttribute('value', '3');
  modalBodySelectThreeOption4.innerHTML = 'High';

  //styling for the fourth row
  modalBodyRow4.className = 'mb-2 row';
  modalBodyLabel4.className = 'col-sm-3 col-form-label';
  modalBodyLabel4.innerHTML = 'Due Date:';
  modalBodyLabel4.setAttribute('for', `${dueDate}`);
  modalBodyCol4.className = 'col-sm-9';
  modalBodyInputRow4.className = 'calendarInput';
  modalBodyInputRow4.id = 'dueDate';
  modalBodyInputRow4.setAttribute('type', 'date');

  //styling for the modal 1 footer
  modal1Footer.className = 'modal-footer';
  modal1FooterCloseBtn1.className = 'btn btn-secondary';
  modal1FooterCloseBtn1.setAttribute('data-bs-dismiss', 'modal');
  modal1FooterCloseBtn1.setAttribute('type', 'button');
  modal1FooterCloseBtn1.innerHTML = 'Close';
  modal1FooterCloseBtn2.className = 'btn btn-primary';
  modal1FooterCloseBtn2.setAttribute('type', 'button');
  modal1FooterCloseBtn2.innerHTML = 'Save Changes';

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

  //putting the modal footer together
  modal1Footer.appendChild('modal1FooterCloseBtn1');
  modal1Footer.appendChild('modal1FooterCloseBtn2');
  
  //Putting the modal BODY TOGETHER
  modalBody.appendChild(modalBodyForm);
  modalBodyForm.appendChild(modalBodyRow1);
  modalBodyForm.appendChild(modalBodyRow2);
  modalBodyForm.appendChild(modalBodyRow3);
  modalBodyForm.appendChild(modalBodyRow4);


  //----------------------------------------------------------------------------------------------------------------
  
  
  
  
  
  
  
  
  
  
  
  
  //three rows
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

  //styling for first row
  outermostDiv.className = `col-12 ${cardType} mb-3`;
  row1.className = 'row';
  row1Div1.className = 'col-12 mt-2';
  row1h2.className = 'taskTitle text-center';
  row1h2.innerHTML = taskTitle;

  //styling for the second row
  row2.className = 'row mt-4';
  row2Div2.className = 'col-12 d-flex justify-content-center';
  row2DivBtn.className = 'btn btn-primary cardBtns';
  row2DivBtn.innerHTML = 'Task Options';

  //styling for the third row
  row3.className = 'row mt-2 pb-3';
  row3Div3.className = 'col-12 d-flex justify-content-center';
  row3DivBtn2.className = 'btn btn-dark cardBtns';
  row3DivBtn2.innerHTML = 'View Task';

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
}



//-------------------------------------------------------------------------------------
//modal HTML BELOW
/*
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <!-- Enter the Task details in here! -->
            <form>
                <div class="mb-3 row">
                    <label for="taskName" class="col-sm-3 col-form-label">Name:</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="taskName">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="taskDescription" class="col-sm-3 col-form-label">Description:</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="taskDescription">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="taskPriority" class="col-sm-3 col-form-label">Priority:</label>
                    <div class="col-sm-9">
                        <select class="form-select" id="taskPriority" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">To-Do</option>
                            <option value="2">In Progress</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                </div>
                <div class="mb-2 row">
                    <label for="dueDate" class="col-sm-3 col-form-label">Due Date:</label>
                    <div class="col-sm-9">
                        <input type="date" class="calendarInput" id="dueDate">
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
    </div>
</div>
</div>
*/