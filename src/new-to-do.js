import { defaultToDo } from "./default-to-do";

let toDoArray = [];


//New ToDo factory

export const newToDo = (name) => {
    const getNewToDo = (Title, Description, DueDate, Priority, CheckList) => {
        Title
        Description
        DueDate
        Priority
        CheckList
    };
    
    
    const changeName = () => {
        getNewToDo.Title = newTitle
    }

    const addTask = (task) => {
        getNewToDo.task.push(task);
        return task;
    }

    const delTask = (title) => {
        const deletion = newToDo.tasks.splice(
            newToDo.tasks.findIndex((task) => task.title == title), 1);
            return deletion;
            
    }

    
    toDoArray.push({Title, Description, DueDate, Priority, CheckList})

    
}

// Create constructor or class here