
export function newTodo() {
    
    const contentDiv = document.getElementById('main-content');

    const todoDiv = document.createElement('div');
    contentDiv.appendChild(todoDiv);

    const inputTodoTitle = document.createElement('input')
    contentDiv.appendChild(inputTodoTitle);

    const inputTodoPriority = document.createElement('input')
    contentDiv.appendChild(inputTodoPriority);

    const inputTodoDueDate = document.createElement('input')
    contentDiv.appendChild(inputTodoDueDate);

    const inputTodoDFolder = document.createElement('input')
    contentDiv.appendChild(inputTodoDFolder);
    

}