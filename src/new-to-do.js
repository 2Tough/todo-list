import { defaultToDo } from "./default-to-do";

let toDoArray = [];

//New ToDo factory

export const newToDo = (Title, Description, DueDate, Priority, CheckList) => {
    const getNewToDo = () => {
        Title
        Description
        DueDate
        Priority
        CheckList
    }
    
    //toDoArray.push({Title, Description, DueDate, Priority, CheckList})

    return {Title, Description, DueDate, Priority, CheckList};
}

// Create constructor or class here