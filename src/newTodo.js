
export function newTodo() {
    
    const contentDiv = document.getElementById('main-content');
    
    const sidePanelDiv = document.createElement('div');
    sidePanelDiv.classList.add('sidePanelDiv');
    contentDiv.appendChild(sidePanelDiv);

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv')
    sidePanelDiv.appendChild(todoDiv);

    const inputTodoTitle = document.createElement('input')

    const inputTodoPriority = document.createElement('input')

    const inputTodoDueDate = document.createElement('input')

    const inputTodoDFolder = document.createElement('input')
    todoDiv.append(inputTodoDFolder, inputTodoDueDate, inputTodoPriority,inputTodoTitle );
    

}