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
    
    
    const changeTitle = () => {
        getNewToDo.Title = newTitle;
    }

    const changeDescription = (Description) => {
        return getNewToDo.Description = Description;
        
    }

    const changeDueDate = (DueDate) => {
        return getNewToDo.DueDate = DueDate;
    }

    const changePriority = (Priority) => {
        return getNewToDo.Priority;
    }

    const changeCheckList = (CheckList) => {
        return getNewToDo.CheckList;
    }

    const delTask = (title) => {
        const deletion = newToDo.tasks.splice(
            newToDo.tasks.findIndex((task) => task.title == title), 1);
            return deletion;
            
    }


    return 
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority,
        changeCheckList
    

    
 //TODO: Test factories and remaining elements.   

    
}

// Create constructor or class here