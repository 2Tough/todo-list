import { defaultToDo } from "./default-to-do";

export const blankToDo = () => {

    submitBtn.addEventListener("click", function() {
        const titleValue = inputTitle.value
        const bodyValue = inputBody.value

        console.log(inputTitle)
        console.log(bodyValue)
        console.log("Test")

    })
    
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