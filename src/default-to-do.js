import { blankToDo } from "./blank-to-do";
import { newToDo } from "./new-to-do";

export function defaultToDo() {

    const contentDiv = document.getElementById("main-content");


    const heading = document.createElement("h1");
    heading.textContent = "Your ToDo for today";
    contentDiv.appendChild(heading);
    
    const toDoContainer = document.createElement("div");
    toDoContainer.classList.add("toDoContainer");
    contentDiv.appendChild(toDoContainer);



      

    // Title
    
    const projectsDiv = document.createElement("h3");
    projectsDiv.textContent = blankToDo().projectTitle;
    projectsDiv.classList.add("taskTitle");
    
    
    const inputTitle = document.createElement("input");
    inputTitle.classList.add("inputTitle");
    inputTitle.type = "text";
    
    const titleContainerDiv = document.createElement("div");
    titleContainerDiv.append(projectsDiv, inputTitle);
    toDoContainer.appendChild(titleContainerDiv);

    // Body

    const projectsDivBody = document.createElement("h4");
    projectsDivBody.textContent = blankToDo().projectBody;
    projectsDivBody.classList.add("taskBody")
    toDoContainer.appendChild(projectsDivBody);

    const inputBody = document.createElement("input");
    inputBody.classList.add("inputBody");
    inputBody.type = "text";
    toDoContainer.appendChild(inputBody);

    const bodyContainerDiv = document.createElement("div");
    bodyContainerDiv.append(projectsDivBody, inputBody);
    toDoContainer.appendChild(bodyContainerDiv);

    // Due date, priority and checklist

    // Date and priority container

    const datePriorityContainer = document.createElement("div");
    datePriorityContainer.classList.add("datePriorityContainer");
    toDoContainer.appendChild(datePriorityContainer);

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.classList.add("date");
    dueDateInput.value = "2023-01-01"
    datePriorityContainer.appendChild(dueDateInput);

    const priorityInput = document.createElement("select");
    priorityInput.classList.add = "priority";
    priorityInput.value = "Low"
    datePriorityContainer.appendChild(priorityInput);

    //Create array of options to be added
    let optionsArray = ["Low","Middle","High","Urgent"];


    for (let i = 0; i < optionsArray.length; i++) {
        let option = document.createElement("option");
        option.value = optionsArray[i];
        option.text = optionsArray[i];
        priorityInput.appendChild(option);
    }

    // Submit button

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.classList.add("submitBtn");
    toDoContainer.appendChild(submitBtn);

    submitBtn.addEventListener("click", function() {
        const titleValue = inputTitle.value
        const bodyValue = inputBody.value


        console.log("Test")

        return inputTitle, bodyValue

    })


    let toDoArray1 = [inputTitle.value];
    
    return inputTitle,
           inputBody,
           dueDateInput,
           priorityInput,
           submitBtn,
           toDoArray1

    console.log(newToDo().inputTitle)
}