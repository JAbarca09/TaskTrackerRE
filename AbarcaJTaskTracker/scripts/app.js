//Jesse Abarca
// 1/27-28/22
//Task Tracker
//Complete a task tracker: design it, have saved data, task name. task desc, and task status: ToDo, progress, and complete
//Priority Status: Low, Medium or High, and Due Date. Be able to edit tasks, after changing status items should move to a different spot
//without refreshing the page, create elements, import and export, and build this application out for desktop!


//I lost most of my time on the modal, i tried creating elements for one, did it wrong, tried hardcoding it (id's ended up not working), tried mixing some
//hard code with the elements, that caused some wonky issues. I orginally added attributes using innerHTML when I was supposed to use setAtribute which is the correct way to do it!
//I heavily relied on innerHTML only for that to backfire and I had to fix my code!

import MakeTaskObject from './task.js';
import { AddToLocalStorage, GetTaskFromLocalStorage } from './localStorage.js';

//Where to inject the elements!
let injectToDoHere = document.getElementById('injectToDoHere'); //Inject To do's here
let injectInProgressHere = document.getElementById('injectInProgressHere'); //Inject the in progress here
let injectCompletedHere = document.getElementById('injectCompletedHere'); // Inject the completed ones here!

//Modal information and btns
// let inputTaskName = document.getElementById('inputTaskName'); //Where the user types in a tasks name!
let saveTaskBtn = document.getElementById('saveTaskBtn'); //Btn to save the task and its info: name, desc, date, priority!

//Counters For HTML
let counterToDo = document.getElementById('counterToDo');
let counterInProgress = document.getElementById('counterInProgress');
let counterCompleted = document.getElementById('counterCompleted');

let showDescription = document.getElementById('showDescription');

//Lecture 
let inputTaskName = document.querySelector('#inputTaskName');
let inputDescription = document.getElementById('inputDescription');
let priority = document.getElementById('priority');
let dueDate = document.getElementById('dueDate');

saveTaskBtn.addEventListener('click', function(e){
    console.log(inputTaskName.value);
    console.log(inputDescription.value);
    console.log(priority.value);
    console.log(dueDate.value);

    let task = MakeTaskObject(inputTaskName.value, inputDescription.value, priority.value, dueDate.value);
    console.log(task);
    AddToLocalStorage(task);


});




function createTask(){
    let outerMostCol = document.createElement('div');
    outerMostCol.className = "col-3";

    //create my card div, second row
    let cardDiv = document.createElement('div');
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";

    //card body, it goes inside the card Div!
    let cardBody = document.createElement('div');
    cardBody.className = "card-body";

    //Things inside the card div 
    let cardTitle = document.createElement('h4');
    cardTitle.textContent = 'Title of the task';    //Title of the task!
    cardTitle.className = "card-title text-center";

    //Do the div with the d-grid gap-2
    let divDgridGap2 = document.createElement('div');
    divDgridGap2.className = "d-grid gap-2";

    //first btn that triggers the modal!
    let btn1Modal = document.createElement('button');
    btn1Modal.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#TaskOptions">Task Options</button>`;

    //first Modal
    let modalDiv1 = document.createElement('div');
    modalDiv1.id = "TaskOptions";
    modalDiv1.className = "modal fade"
    modalDiv1.setAttribute("data-bs-backdrop", "static");
    modalDiv1.setAttribute("data-bs-keyboard", "false");
    modalDiv1.tabIndex = "-1";
    modalDiv1.setAttribute("aria-labelledby", "staticBackdropLabel");

    //Below is everything inside the modal in order!
    let modalDialog1 = document.createElement('div');
    modalDialog1.className = "modal-dialog";
    
    //modal content goes inside modal Dialog ^ 
    let modalContent1 = document.createElement('div');
    modalContent1.className = "modal-content";

    let modalHeader1 = document.createElement('div');
    modalHeader1.className = "modal-header";

    let h5ModalHeader1 = document.createElement('h5');
    h5ModalHeader1.className = "modal-title"; 
    h5ModalHeader1.id = 'staticBackdropLabel'; //update id
    h5ModalHeader1.textContent = 'Task Options Title'; //update the title 

    let CloseBtn1 = document.createElement('button');
    CloseBtn1.innerHTML = `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
    
    
    //Modal-body
    let modalBody1 = document.createElement('div');
    modalBody1.className = "modal-body";
    
    let row1InsideModalBody1 = document.createElement('div'); //1 level row in
    row1InsideModalBody1.className = "row";
    
    let divInsideRow1ModalBody1 = document.createElement('div'); 
    divInsideRow1ModalBody1.className = "col-4 d-flex justify-content-end";
    
    let h5TagInsideModalBody1 = document.createElement('h5');
    h5TagInsideModalBody1.innerHTML = `<h5 class="paddingTopModal">Name:</h5>`;
    
    
    //next div after divInsideRow1ModalBody1
    let div2InsideRow1ModalBody1 = document.createElement('div');
    div2InsideRow1ModalBody1.className = "col-8 d-flex justify-content-start";
    
    let userInputTaskName = document.createElement('input');
    userInputTaskName.innerHTML = `<input type="text" class="form-control"aria-describedby="TaskName">`;
    userInputTaskName.id = "inputTaskName"; //Enter an id that is passde in based on the PARAMETER!
    
    let row2InsideModalBody1 = document.createElement('div');
    row2InsideModalBody1.className = "row mt-1";
    
    let div3InsideRow1ModalBody1 = document.createElement('div');
    div3InsideRow1ModalBody1.className = "col-4 d-flex justify-content-end";

    let h5TagInsideDiv3InsideRow1ModalBody1 = document.createElement('h5');
    h5TagInsideDiv3InsideRow1ModalBody1.innerHTML = `<h5 class="paddingTopModal">Description:</h5>`;
    
    let div4InsideRow1ModalBody1 = document.createElement('div');
    div4InsideRow1ModalBody1.className = "col-8 d-flex justify-content-start";

    let inputInsideDiv4InsideRow1ModalBody1 = document.createElement('input');
    inputInsideDiv4InsideRow1ModalBody1.innerHTML = `<input type="text" class="form-control" aria-describedby="Description">`;
    inputInsideDiv4InsideRow1ModalBody1.id = "inputDescription";

    let row3InsideModalBody1 = document.createElement('div');
    row3InsideModalBody1.className = "row mt-1";
    
    let div1Insiderow3InsideModalBody1 = document.createElement('div');
    div1Insiderow3InsideModalBody1.className = "col-4 d-flex justify-content-end";
    
    let h5Insidediv1Insiderow3InsideModalBody1 = document.createElement('h5');
    h5Insidediv1Insiderow3InsideModalBody1.className = "paddingTopModal";
    h5Insidediv1Insiderow3InsideModalBody1.textContent = "Priority:"

    let div2Insiderow3InsideModalBody1 = document.createElement('div');
    div2Insiderow3InsideModalBody1.className = "col-8 d-flex justify-content-start"

    let selectPriorityInsideDiv2InRow3ModalBody1 = document.createElement('select');
    selectPriorityInsideDiv2InRow3ModalBody1.className = "form-select";
    selectPriorityInsideDiv2InRow3ModalBody1.ariaLabel = "Default select example";
    selectPriorityInsideDiv2InRow3ModalBody1.id = "priority"; //Change the id if need be!
    selectPriorityInsideDiv2InRow3ModalBody1.className = "form-select";

    let selectOpDefault = document.createElement('option');
    selectOpDefault.selected = "Open this select menu";
    selectOpDefault.textContent = "Open this select menu";
   
    let selectOp1Priority = document.createElement('option');
    // selectOp1Default.innerHTML = `<option value="1">Low</option>`;
    selectOp1Priority.value = "1";
    selectOp1Priority.textContent = "Low";

    let selectOp2Priority = document.createElement('option');
    // selectOp2Default.innerHTML = `<option value="2">Medium</option>`;
    selectOp2Priority.value = "2";
    selectOp2Priority.textContent = "Medium";

    let selectOp3Priority = document.createElement('option');
    // selectOp3Default.innerHTML = `<option value="3">High</option>`;
    selectOp3Priority.value = "3";
    selectOp3Priority.textContent = "High";

    let row4InsideModalBody1 = document.createElement('div');
    row4InsideModalBody1.className = "row mt-1";

    let div1Insiderow4InsideModalBody1 = document.createElement('div');
    div1Insiderow4InsideModalBody1.className = "col-4 d-flex justify-content-end";

    let h5Insidediv1Insiderow4InsideModalBody1 = document.createElement('h5');
    h5Insidediv1Insiderow4InsideModalBody1.className = "paddingTopModal"
    h5Insidediv1Insiderow4InsideModalBody1.textContent = "Condition:"

    let div2Insiderow4InsideModalBody1 = document.createElement('div');
    div2Insiderow4InsideModalBody1.className = "col-8 d-flex justify-content-start";

    let selectStatus1 = document.createElement('select');
    selectStatus1.id = "selectStatus1";
    selectStatus1.className = "form-select";
    selectStatus1.ariaLabel = "Default select example";

    let selectStatus1OptionDefault = document.createElement('option');
    // selectStatus1OptionDefault.innerHTML = `<option selected>Open this select menu</option>`;
    selectStatus1OptionDefault.selected = "Open this select menu";
    selectStatus1OptionDefault.textContent = "Open this select menu";

    let selectStatus1Option1 = document.createElement('option');
    // selectStatus1Option1.innerHTML = `<option value="1">To-Do</option>`;
    selectStatus1Option1.value = "1"; 
    selectStatus1Option1.textContent = "To-Do";

    let selectStatus1Option2 = document.createElement('option');
    // selectStatus1Option2.innerHTML = `<option value="2">In Progress</option>`;
    selectStatus1Option2.value = "2";
    selectStatus1Option2.textContent = "In Progress";
    
    let selectStatus1Option3 = document.createElement('option');
    // selectStatus1Option3.innerHTML = `<option value="3">Completed</option>`;
    selectStatus1Option3.value = "3";
    selectStatus1Option3.textContent = "Completed";

    let row5InsideModalBody1 = document.createElement('div');
    row5InsideModalBody1.className = "row mt-1";

    let div1InsideRow5ModalBody1 = document.createElement('div');
    div1InsideRow5ModalBody1.className = "col-4 d-flex justify-content-end";

    let h5InsideRow5InsideModalBody1 = document.createElement('h5');
    h5InsideRow5InsideModalBody1.innerHTML = `<h5 class="paddingTopModal">Due Date:</h5>`;

    let div2InsideRow5ModalBody1 = document.createElement('div');
    div2InsideRow5ModalBody1.className = "col-8 d-flex justify-content-start";

    let inputDueDate = document.createElement('input');
    inputDueDate.type = "date";
    inputDueDate.innerHTML = `<input name="dueDate"></input>`;
    inputDueDate.id = "dueDate";

    let modalFooter1 = document.createElement('div');
    modalFooter1.className = "modal-footer";

    let btnInsideModalFooter1 = document.createElement('button');
    btnInsideModalFooter1.innerHTML = `<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>`;

    let btn2InsideModalFooter1 = document.createElement('button');
    btn2InsideModalFooter1.innerHTML = `<button type="button" class="btn btn-primary">Save Task</button>`;
    btn2InsideModalFooter1.id = "SaveTaskCreateElementBtn";



    selectPriorityInsideDiv2InRow3ModalBody1.appendChild(selectOpDefault);
    selectPriorityInsideDiv2InRow3ModalBody1.appendChild(selectOp1Priority);
    selectPriorityInsideDiv2InRow3ModalBody1.appendChild(selectOp2Priority);
    selectPriorityInsideDiv2InRow3ModalBody1.appendChild(selectOp3Priority);
    
    
    //smaller to larger pieces to put together!!!
    modalContent1.appendChild(modalHeader1);
    modalContent1.appendChild(h5ModalHeader1);
    

    divInsideRow1ModalBody1.appendChild(h5TagInsideModalBody1); // row 1 contetn
    div2InsideRow1ModalBody1.appendChild(userInputTaskName); //row 1 content
    div3InsideRow1ModalBody1.appendChild(h5TagInsideDiv3InsideRow1ModalBody1); //row2 content
    div4InsideRow1ModalBody1.appendChild(inputInsideDiv4InsideRow1ModalBody1); //row2 content
    div2Insiderow3InsideModalBody1.appendChild(selectPriorityInsideDiv2InRow3ModalBody1);
    div1Insiderow3InsideModalBody1.appendChild(h5Insidediv1Insiderow3InsideModalBody1);
    div2Insiderow3InsideModalBody1.appendChild(selectPriorityInsideDiv2InRow3ModalBody1);
    selectStatus1.appendChild(selectStatus1OptionDefault);
    selectStatus1.appendChild(selectStatus1Option1);
    selectStatus1.appendChild(selectStatus1Option2);
    selectStatus1.appendChild(selectStatus1Option3);
    //row4
    div2Insiderow4InsideModalBody1.appendChild(selectStatus1);
    div1InsideRow5ModalBody1.appendChild(h5InsideRow5InsideModalBody1);
    div2InsideRow5ModalBody1.appendChild(inputDueDate);
    //row5
    div1InsideRow5ModalBody1.appendChild(h5InsideRow5InsideModalBody1);
    

    row1InsideModalBody1.appendChild(divInsideRow1ModalBody1);
    row1InsideModalBody1.appendChild(div2InsideRow1ModalBody1);
    row2InsideModalBody1.appendChild(div3InsideRow1ModalBody1);
    row2InsideModalBody1.appendChild(div4InsideRow1ModalBody1);
    row3InsideModalBody1.appendChild(div1Insiderow3InsideModalBody1);
    row3InsideModalBody1.appendChild(div2Insiderow3InsideModalBody1);
    row4InsideModalBody1.appendChild(div1Insiderow4InsideModalBody1);
    row4InsideModalBody1.appendChild(div2Insiderow4InsideModalBody1);
    row5InsideModalBody1.appendChild(div1InsideRow5ModalBody1);
    row5InsideModalBody1.appendChild(div2InsideRow5ModalBody1);
    modalBody1.appendChild(row1InsideModalBody1);
    modalBody1.appendChild(row2InsideModalBody1);
    modalBody1.appendChild(row3InsideModalBody1);
    modalBody1.appendChild(row4InsideModalBody1);
    modalBody1.appendChild(row5InsideModalBody1);
    modalFooter1.appendChild(btnInsideModalFooter1);
    modalFooter1.appendChild(btn2InsideModalFooter1);
    modalContent1.appendChild(modalHeader1);
    modalContent1.appendChild(modalBody1);
    modalContent1.appendChild(modalFooter1);
    modalDialog1.appendChild(modalContent1);
    modalDiv1.appendChild(modalDialog1);
    divDgridGap2.appendChild(btn1Modal);
    divDgridGap2.appendChild(modalDiv1);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(divDgridGap2);
    cardDiv.appendChild(cardBody);
    outerMostCol.appendChild(cardDiv);
    injectToDoHere.appendChild(outerMostCol);


}
createTask();



// createHardCodedCard();
/*
                    <div class="col-3"> AKA outerMostCol
                        <div class="card" style="width: 18rem;">  AKA cardDiv
                            <div class="card-body"> AKA cardBody
                                <h4 class="card-title text-center">Task Title</h4> AKA cardTitle
                                <div class="d-grid gap-2"> AKA divDGridGap2
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#TaskOptions">Task Options</button> AKA btn1Modal
                                    <div class="modal fade" id="TaskOptions" data-bs-backdrop="static"         AKA modalDiv1
                                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true">                                                         
                                        <div class="modal-dialog"> AKA modalDialog1
                                            <div class="modal-content"> AKA modalContent1
                                                <div class="modal-header"> AKA modalHeader1
                                                    <h5 class="modal-title" id="staticBackdropLabel">Task Options title</h5> AKA h5ModalHeader1
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body"> AKA modalBody1
                                                    <div class="row"> AKA row1InsideModalBody1
                                                        <div class="col-4 d-flex justify-content-end"> AKA divInsideRow1ModalBody1
                                                            <h5 class="paddingTopModal">Name:</h5> AKA h5TagInsideModalBody1
                                                        </div>
                                                        <div class="col-8 d-flex justify-content-start"> AKA div2InsideRow1ModalBody1
                                                            <input type="text" class="form-control" id="inputTaskName" aria-describedby="TaskName"> AKA userInputTaskName
                                                        </div>
                                                    </div>
                                                    <div class="row mt-1"> AKA row2InsideModalBody1
                                                        <div class="col-4 d-flex justify-content-end"> AKA div3InsideRow1ModalBody1
                                                            <h5 class="paddingTopModal">Description:</h5> AKA h5TagInsideDiv3InsideRow1ModalBody1
                                                        </div>
                                                        <div class="col-8 d-flex justify-content-start"> AKA div4InsideRow1ModalBody1
                                                            <input type="text" class="form-control" id="inputDescription" aria-describedby="Description"> AKA inputInsideDiv4InsideRow1ModalBody1
                                                        </div>
                                                    </div>
                                                    <div class="row mt-1"> AKA row3InsideModalBody1
                                                        <div class="col-4 d-flex justify-content-end"> AKA div1Insiderow3InsideModalBody1
                                                            <h5 class="paddingTopModal">Priority:</h5> AKA h5Insidediv1Insiderow3InsideModalBody1
                                                        </div>
                                                        <div class="col-8 d-flex justify-content-start"> AKA div2Insiderow3InsideModalBody1
                                                            <select id="priority" class="form-select"
                                                                aria-label="Default select example"> AKA selectPriorityInsideDiv2InRow3ModalBody1
                                                                <option selected>Open this select menu</option> AKA selectOpDefault
                                                                <option value="1">Low</option> AKA selectOp1Default...
                                                                <option value="2">Medium</option>
                                                                <option value="3">High</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-1"> AKA row4InsideModalBody1
                                                        <div class="col-4 d-flex justify-content-end"> AKA div1Insiderow4InsideModalBody1
                                                            <h5 class="paddingTopModal">Condition:</h5> AKA h5Insidediv1Insiderow4InsideModalBody1
                                                        </div>
                                                        <div class="col-8 d-flex justify-content-start"> AKA div2Insiderow4InsideModalBody1
                                                            <select class="form-select" AKA selectStatus1
                                                                aria-label="Default select example"> AKA selectStatus1
                                                                <option selected>Open this select menu</option> 
                                                                <option value="1">To-Do</option>
                                                                <option value="2">In Progress</option>
                                                                <option value="3">Completed</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-1"> AKA  row5InsideModalBody1    DO THIS ROW!
                                                        <div class="col-4 d-flex justify-content-end"> AKA div1InsideRow5ModalBody1
                                                            <h5 class="paddingTopModal">Due Date:</h5> AKA h5InsideRow5InsideModalBody1
                                                        </div>
                                                        <div class="col-8 d-flex justify-content-start"> AKA div2InsideRow5ModalBody1
                                                            <input type="date" id="dueDate" name="dueDate"> AKA inputDueDate
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer"> AKA modalFooter1
                                                    <button type="button" class="btn btn-danger" AKA btnInsideModalFooter1
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Understood</button> AKA btn2InsideModalFooter1
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ViewOptions">View Task</button>
                                    <div class="modal fade" id="ViewOptions" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <h5 class="modal-title" id="staticBackdropLabel">View Options Title</h5>
                                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-4 d-flex justify-content-end">
                                                        <h5 class="paddingTopModal">Name:</h5>
                                                    </div>
                                                    <div class="col-8 d-flex justify-content-start">
                                                        <h5 class="paddingTopModal">Name of the task!</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-4 d-flex justify-content-end">
                                                        <h5 class="paddingTopModal">Description:</h5>
                                                    </div>
                                                    <div class="col-8 d-flex justify-content-start">
                                                        <textarea class="form-control" id="showDescription" rows="3" disabled></textarea>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-4 d-flex justify-content-end">
                                                        <h5 class="paddingTopModal">Priority:</h5>
                                                    </div>
                                                    <div class="col-8 d-flex justify-content-start">
                                                        <h5 class="paddingTopModal">Priority value</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-4 d-flex justify-content-end">
                                                        <h5 class="paddingTopModal">Condition:</h5>
                                                    </div>
                                                    <div class="col-8 d-flex justify-content-start">
                                                        <h5 class="paddingTopModal">Current condition</h5>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-4 d-flex justify-content-end">
                                                        <h5 class="paddingTopModal">Due Date:</h5>
                                                    </div>
                                                    <div class="col-8 d-flex justify-content-start">
                                                        <h5 class="paddingTopModal">mm-dd-yyyy</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                              <button type="button" class="btn btn-primary">Understood</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */


