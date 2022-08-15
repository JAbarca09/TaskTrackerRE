


//Save to local storage
let taskArray = [];
function AddToLocalStorage(something){
    //All in one you can hard code
    taskArray.push(something)
    localStorage.setItem('Task', JSON.stringify(taskArray));
}

function UpdateLocalStorageItem(itemToUpdate){
    //search for the item and splice
    //Need the index
    let idx = taskArray.indexOf(itemToUpdate);
    //taskArray.splice(idx, 1);
    taskArray.splice(idx, 0 , itemToUpdate);
    //Save to local storage
    SaveToLocalStorage();
}

function SaveToLocalStorage(){
    localStorage.setItem('Task', JSON.stringify(taskArray));
}

function GetLocalStorage(){
    //Validation

    taskArray =  JSON.parse(localStorage.getItem('Tasks'));
    if(taskArray == null){
        return [];
    }else{
        return JSON.parse(taskArray);
    }
}

function GetTaskFromLocalStorage(){
    GetLocalStorage();
    taskArray.filter(data => 
        data.TaskName == taskName
    )
}

export  {AddToLocalStorage, GetTaskFromLocalStorage}