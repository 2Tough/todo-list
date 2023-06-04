
export function newTodo() {
    
    const contentDiv = document.getElementById('main-content');
    contentDiv.classList.add('contentDiv');

    const mainPanelDiv = document.createElement('div');
    mainPanelDiv.classList.add('mainPanelDiv');
    mainPanelDiv.textContent = 'Folder content here'
    contentDiv.appendChild(mainPanelDiv);

    const sidePanelDiv = document.createElement('div');
    sidePanelDiv.classList.add('sidePanelDiv');
    contentDiv.appendChild(sidePanelDiv);

    const folderContentDiv = document.createElement('div');
    folderContentDiv.classList.add('folderContentDiv');
    folderContentDiv.textContent = 'Folders displayed here'
    contentDiv.appendChild(folderContentDiv);

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    sidePanelDiv.appendChild(todoDiv);

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

    todoDiv.append(
                   inputTodoTitle, inputTodoTitleLabel,
                   inputTodoDescription, inputTodoDescriptionLabel, 
                   inputTodoPriority, inputTodoPriorityLabel, 
                   inputTodoDueDate, inputTodoDateLabel, 
                   inputTodoDFolder, inputTodoDateFolderLabel );
    

}