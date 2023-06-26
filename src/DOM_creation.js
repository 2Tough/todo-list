
import { DOM_manipulation } from "./DOM_manipulation.js"



export let array = [];

export function DOM_creation() {
    
    const contentDiv = document.getElementById('main-content');
    contentDiv.classList.add('contentDiv');

    // Main panel
    const mainPanelDiv = document.createElement('div');
    mainPanelDiv.classList.add('mainPanelDiv');
    
    
    const mainPanelFolderName = document.createElement('h2');
    mainPanelFolderName.setAttribute("id", "mainPanelFolderName");
    mainPanelFolderName.textContent = 'Folder content for:';
    mainPanelDiv.appendChild(mainPanelFolderName);

    contentDiv.appendChild(mainPanelDiv);

    // Main panel divs
    

    const mainPanelTodoDiv = document.createElement('div');
    mainPanelTodoDiv.classList.add('mainPanelTodoDiv');
    mainPanelDiv.appendChild(mainPanelTodoDiv);


    // Divs for each section
    const mainPanelTitleDiv = document.createElement('div');
    const mainPanelDescriptionDiv = document.createElement('div');
    const mainPanelPriorityDiv = document.createElement('div');
    const mainPanelDateDiv = document.createElement('div');

    // Title div
    const mainPanelTitle = document.createElement('h3');
    mainPanelTitle.textContent = "Title";
    const mainPanelTitleText = document.createElement('p');
    mainPanelTitle.setAttribute("id", "mainPanelTitleText");
    mainPanelTitleDiv.appendChild(mainPanelTitle, mainPanelTitleText);

    // Description div
    const mainPanelDescription = document.createElement('h3');
    mainPanelDescription.textContent = "Description"
    const mainPanelDescriptionText = document.createElement('p');
    mainPanelDescriptionText.setAttribute("id", "mainPanelDescriptionText");
    mainPanelDescriptionDiv.appendChild(mainPanelDescription, mainPanelDescriptionText);

    // Priority div
    const mainPanelPriority = document.createElement('h3');
    mainPanelPriority.textContent = "Priority";
    const mainPanelPriorityText = document.createElement('p');
    mainPanelPriority.setAttribute("id", "mainPanelPriority");
    mainPanelPriorityDiv.appendChild(mainPanelPriority, mainPanelPriorityText);

    // Date div
    const mainPanelDate = document.createElement('h3');
    mainPanelDate.textContent = "Date";
    const mainPanelDateText = document.createElement('p');
    mainPanelDate.setAttribute("id", "mainPanelDateText");
    mainPanelDateDiv.appendChild(mainPanelDate, mainPanelDateText);

    mainPanelTodoDiv.append(mainPanelTitleDiv, 
                            mainPanelDescriptionDiv,
                            mainPanelPriorityDiv,
                            mainPanelDateDiv
                            )


    // Side panel
    const sidePanelDiv = document.createElement('div');
    sidePanelDiv.classList.add('sidePanelDiv');
    

    
    // sidePanelDiv.innerHTML= `
    // <div class="folderContentDiv">
    //     <div class="folderIconTextContainer">
    //         <p class="folderTextContainer">Default</p>
    //         <img class="folderDiv" src = '../images/folder.png'>
        
    //     </div>
        

        
    // </div>`

    contentDiv.appendChild(sidePanelDiv);

    // Folder panel
    const folderContentDiv = document.createElement('div');
    folderContentDiv.classList.add('folderContentDiv');
    folderContentDiv.setAttribute("id", "folderContentDiv");
    contentDiv.appendChild(folderContentDiv);
    
    // Folder title and icon div
    const folderIconTextContainer = document.createElement('div');
    folderIconTextContainer.classList.add('folderIconTextContainer');
    

    // Text
    const folderTextContainer = document.createElement('p');
    folderTextContainer.classList.add('folderTextContainer');
    folderIconTextContainer.textContent = "Default";
    

    // Icon
    const imageFolder = document.createElement('img');
    imageFolder.classList.add('folderDiv');
    imageFolder.innerHTML = "Default";
    imageFolder.src = '../images/folder.png';


    folderIconTextContainer.appendChild(imageFolder, folderTextContainer);
    folderContentDiv.appendChild(folderIconTextContainer);

    document.querySelectorAll(".folderDiv").forEach(folder => folder.addEventListener("click", ()=> {
        console.log('Todo folder clicked!')
    })
)

    // Todo container
    const todoDiv = document.createElement('div');
    sidePanelDiv.appendChild(todoDiv);

    todoDiv.innerHTML =
    `
    <div class="todoDiv">
        <form id="todoForm" role="form">
        <h3 class="createTodoText">Create a new Todo</h3>

        <label for="todoTitle">Title</label>
        <input type="text" id="todoTitle" required></input>

        <label for="todoDescription">Description</label>
        <input type="text" id="todoDescription" required></input>  

        <label for="todoPriority">Priority</label>
        <select type="text" id="todoPriority" required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        
        </select>    

        <label for="todoDate">Date</label>
        <input type="Date" id="todoDate" required></input>    

        <label for="todoFolder">Folder</label>
        <input type="text" id="todoFolder" required></input>   
        
        <button class="btn submitButton" id="submitBtn">Create</button>
        <button class="btn cancelButton" id="cancelBtn>Cancel</button>

        </form>
    </div>

    `

}