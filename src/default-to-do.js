import { blankToDo } from "./blank-to-do";

export function defaultToDo () {

    const contentDiv = document.getElementById("main-content");
    
    const heading = document.createElement("h1");
    heading.textContent = "Your ToDo for today";
    contentDiv.appendChild(heading);

      

    // Title
    
    const projectsDiv = document.createElement("h3");
    projectsDiv.textContent = blankToDo().projectTitle;
    
    const inputTitle = document.createElement("input");
    inputTitle.classList.add("inputTitle");
    inputTitle.type = "text";
    
    const titleContainerDiv = document.createElement("div");
    titleContainerDiv.append(projectsDiv, inputTitle);
    contentDiv.appendChild(titleContainerDiv);

    // Body

    const projectsDivBody = document.createElement("h4");
    projectsDivBody.textContent = blankToDo().projectBody;
    contentDiv.appendChild(projectsDivBody);

    const inputBody = document.createElement("input");
    inputBody.classList.add("inputBody");
    inputBody.type = "text";
    contentDiv.appendChild(inputBody);

    const bodyContainerDiv = document.createElement("div");
    bodyContainerDiv.append(projectsDivBody, inputBody);
    contentDiv.appendChild(bodyContainerDiv);


    // Submit button

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.classList.add("submitBtn");
    contentDiv.appendChild(submitBtn);

    submitBtn.addEventListener("click", function () {
        console.log("test");
        const titleValue = inputTitle.value
        const bodyValue = inputBody.value
    
        console.log(titleValue);
        console.log(bodyValue);
    })




    return submitBtn


    // default styling can go here.

    // title value




}