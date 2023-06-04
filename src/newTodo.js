
import { defaultTodo } from "./defaultTodo.js"


export function newTodo() {
    
    const contentDiv = document.getElementById('main-content');
    contentDiv.classList.add('contentDiv');

    // Main panel
    const mainPanelDiv = document.createElement('div');
    mainPanelDiv.classList.add('mainPanelDiv');
    mainPanelDiv.textContent = 'Folder content here'
    contentDiv.appendChild(mainPanelDiv);

    // Main panel divs

    const mainPanelTodoDiv = document.createElement('div');
    mainPanelTodoDiv.classList.add('mainPanelTodoDiv');
    mainPanelDiv.appendChild(mainPanelTodoDiv);

    const mainPanelTitleDiv = document.createElement('div');
    const mainPanelDescriptionDiv = document.createElement('div');
    const mainPanelPriorityDiv = document.createElement('div');
    const mainPanelDateDiv = document.createElement('div');

    // Title div
    const mainPanelTitle = document.createElement('h3');
    const mainPanelTitleText = document.createElement('p');
    mainPanelTitleDiv.appendChild(mainPanelTitle, mainPanelTitleText);

    // Description div
    const mainPanelDescription = document.createElement('h3');
    const mainPanelDescriptionText = document.createElement('p');
    mainPanelTitleDiv.appendChild(mainPanelDescription, mainPanelDescriptionText);

    // Priority div
    const mainPanelPriority = document.createElement('h3');
    const mainPanelPriorityText = document.createElement('p');
    mainPanelTitleDiv.appendChild(mainPanelPriority, mainPanelPriorityText);

    // Date div
    const mainPanelDate = document.createElement('h3');
    const mainPanelDateText = document.createElement('p');
    mainPanelTitleDiv.appendChild(mainPanelDate, mainPanelDateText);

    mainPanelTodoDiv.appendChild(mainPanelTitleDiv, 
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
    contentDiv.appendChild(folderContentDiv);

    const imageFolder = document.createElement('img');
    imageFolder.classList.add('folderDiv');
    imageFolder.src = '../images/folder.png';
    

    folderContentDiv.appendChild(imageFolder);

    // Todo container
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    sidePanelDiv.appendChild(todoDiv);

    // Create todo text

    const createTodoText = document.createElement('h3');
    createTodoText.classList.add('createTodoText');
    createTodoText.textContent = "Create a new Todo";
    
    // Todo inputs

    const inputTodoTitleLabel = document.createElement('label');
    inputTodoTitleLabel.textContent = 'Title';
    inputTodoTitleLabel.classList.add('labels');
    const inputTodoTitle = document.createElement('input');
    
    const inputTodoDescriptionLabel = document.createElement('label');
    inputTodoDescriptionLabel.textContent = 'Description';
    inputTodoDescriptionLabel.classList.add('labels');
    const inputTodoDescription = document.createElement('input');

    const inputTodoPriorityLabel = document.createElement('label');
    inputTodoPriorityLabel.textContent = 'Priority';
    inputTodoPriorityLabel.classList.add('labels');
    const inputTodoPriority = document.createElement('input');

    const inputTodoDateLabel = document.createElement('label');
    inputTodoDateLabel.textContent = 'Date';
    inputTodoDateLabel.classList.add('labels');
    const inputTodoDueDate = document.createElement('input');

    const inputTodoDateFolderLabel = document.createElement('label');
    inputTodoDateFolderLabel.textContent = 'Folder';
    inputTodoDateFolderLabel.classList.add('labels');
    const inputTodoDFolder = document.createElement('input');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Create';
    submitButton.classList.add('submitButton');
    submitButton.onclick = createTodo;


    function createTodo(e) {
        e.preventDefault();
        console.log('test')
    }

    todoDiv.append(
                   createTodoText, 
                   inputTodoTitleLabel, inputTodoTitle, 
                   inputTodoDescriptionLabel, inputTodoDescription,
                   inputTodoPriorityLabel, inputTodoPriority,
                   inputTodoDateLabel, inputTodoDueDate,
                   inputTodoDateFolderLabel, inputTodoDFolder,
                   submitButton );
    

}