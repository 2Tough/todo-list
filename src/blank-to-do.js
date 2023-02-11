export const blankToDo = () => {
    
    const projectsArrayTitle = [];
    const projectsArrayBody = [];
    let projectTitle = "Task title";
    let projectBody = "Description";
    projectsArrayTitle.push(projectTitle)
    projectsArrayBody.push(projectBody)

    return {
        projectsArrayTitle, 
        projectsArrayBody, 
        projectTitle,
        projectBody

    }
};

//Todo: get input value and store it.