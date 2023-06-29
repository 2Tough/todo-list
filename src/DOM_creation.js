
import { DOM_manipulation } from "./DOM_manipulation.js"

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
    mainPanelTodoDiv.setAttribute("id", "mainPanelTodoDiv");
    mainPanelDiv.appendChild(mainPanelTodoDiv);

    // Divs for each section
    const mainPanelTitleDiv = document.createElement('div');
    mainPanelTitleDiv.setAttribute("id", "mainPanelTitle");

    const mainPanelDescriptionDiv = document.createElement('div');
    mainPanelDescriptionDiv.setAttribute("id", "mainPanelDescription");

    const mainPanelPriorityDiv = document.createElement('div');
    mainPanelPriorityDiv.setAttribute("id", "mainPanelPriority");
    
    const mainPanelDateDiv = document.createElement('div');
    mainPanelDateDiv.setAttribute("id", "mainPanelDate");

    mainPanelTodoDiv.append(mainPanelTitleDiv, 
                            mainPanelDescriptionDiv,
                            mainPanelPriorityDiv,
                            mainPanelDateDiv
                            )

    // Side panel
    const sidePanelDiv = document.createElement('div');
    sidePanelDiv.classList.add('sidePanelDiv');
    
    contentDiv.appendChild(sidePanelDiv);

    // Folder panel
    const folderContentDiv = document.createElement('div');
    folderContentDiv.classList.add('folderContentDiv');
    folderContentDiv.setAttribute("id", "folderContentDiv");
    contentDiv.appendChild(folderContentDiv);
    
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