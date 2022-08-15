//create the object!!!


let taskObj = {
    TaskName: '',
    TaskDescription: '',
    Priority: '',
    DueDate:'',
    Status: ''
}

//When a task is made, status is defaulting to To-do

export default function MakeTaskObject(TaskName, TaskDescription, Priority, DueDate, status){
    let taskObj = {
        TaskName: TaskName,
        TaskDescription: TaskDescription,
        Priority: Priority,
        DueDate: DueDate,
        Status: status
    }
    return taskObj;
}