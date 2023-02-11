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
    
    const inputTitle = document.createElement("input");
    inputTitle.classList.add("inputTitle");
    inputTitle.type = "text";
    
    const titleContainerDiv = document.createElement("div");
    titleContainerDiv.append(projectsDiv, inputTitle);
    toDoContainer.appendChild(titleContainerDiv);

    // Body

    const projectsDivBody = document.createElement("h4");
    projectsDivBody.textContent = blankToDo().projectBody;
    toDoContainer.appendChild(projectsDivBody);

    const inputBody = document.createElement("input");
    inputBody.classList.add("inputBody");
    inputBody.type = "text";
    toDoContainer.appendChild(inputBody);

    const bodyContainerDiv = document.createElement("div");
    bodyContainerDiv.append(projectsDivBody, inputBody);
    toDoContainer.appendChild(bodyContainerDiv);

    // Due date, priority and checklist

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.classList.add("date");
    dueDateInput.value = "2023-01-01"
    toDoContainer.appendChild(dueDateInput);

    const priorityInput = document.createElement("select");
    priorityInput.id = "priority";
    toDoContainer.appendChild(priorityInput);

    //Create array of options to be added
    let optionsArray = ["Low","Middle","High","Urgent"];


    for (let i = 0; i < optionsArray.length; i++) {
        let option = document.createElement("option");
        option.value = optionsArray[i];
        option.text = array[i];
        priorityInput.appendChild(option);
    }

    //Create and append the option
// for (var i = 0; i < array.length; i++) {
//     var option = document.createElement("option");
//     option.value = array[i];
//     option.text = array[i];
//     selectList.appendChild(option);
// }




//     <label for="start">Start date:</label>

// <input type="date" id="start" name="trip-start"
//        value="2018-07-22"
//        min="2018-01-01" max="2018-12-31"></input>


    // Submit button

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.classList.add("submitBtn");
    toDoContainer.appendChild(submitBtn);

    submitBtn.addEventListener("click", function () {
        const titleValue = inputTitle.value
        const bodyValue = inputBody.value
        

    })

    const createNewToDoBtn = document.createElement("button");
    createNewToDoBtn.textContent = "New ToDo";
    createNewToDoBtn.classList.add("newToDo");
    toDoContainer.appendChild(createNewToDoBtn);


    createNewToDoBtn.addEventListener("click", function () {
        console.log("this is the title value " + inputTitle.value);
        console.log("this is the body value " + inputBody.value);

        newToDo(inputTitle, inputBody, "tomorrow", "High", "Done");

        console.log(newToDo)
        console.log(toDoArray)
    

    })


    console.log(newToDo)
}