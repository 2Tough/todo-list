import { blankToDo } from "./blank-to-do";

export function defaultToDo () {

    const contentDiv = document.getElementById("content");
    
    const heading = document.createElement("h1");
    heading.textContent = "Your ToDo for today";
    contentDiv.appendChild(heading);

    const projectsDiv = document.createElement("div");
    projectsDiv.textContent = blankToDo().projectTitle;
    contentDiv.appendChild(projectsDiv);

    const inputTitle = document.createElement("input");
    inputTitle.classList.add("inputTitle");
    contentDiv.appendChild(inputTitle);

    const inputBody = document.createElement("input");
    inputBody.classList.add("inputBody");
    contentDiv.appendChild(inputBody);


    const inputContainer = document.createElement("div");
    inputContainer.classList.add("inputContainer");
    inputContainer.append(inputTitle, inputBody);
    contentDiv.append(inputContainer)


    

    // default styling can go here.

}