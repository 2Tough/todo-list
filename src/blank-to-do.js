export const blankToDo = () => {
    
    const projectsArrayTitle = [];
    const projectsArrayBody = [];
    let projectTitle = "Project name";
    let projectBody = "Project body";
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