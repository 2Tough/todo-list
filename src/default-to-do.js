import { blankToDo } from "./blank-to-do";

export function defaultToDo () {

    const contentDiv = document.getElementById("content");
    const heading = document.createElement("h1");
    heading.textContent = "Your ToDo";
    contentDiv.appendChild(heading);

    const projectsDiv = document.createElement("div");
    projectsDiv.textContent = blankToDo().projectTitle;
    contentDiv.appendChild(projectsDiv);

}