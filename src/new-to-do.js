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
    
    

    return {Title, Description, DueDate, Priority, CheckList};
    toDoArray.push({Title, Description, DueDate, Priority, CheckList})

    const noteOne = getNewToDo("Buy meat", "I have to buy meat to eat after workouts", "02/15/2023", "High", "Pending") 
    const noteTwo = getNewToDo("Pick up vitamins", "I have to pick up the vitamins I bought", "02/17/2023", "High", "Pending") 
    

    console.log(newToDo);
    console.log(noteOne);
}

// Create constructor or class here