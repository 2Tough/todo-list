import { DOM_creation } from "./DOM_creation.js"
import { array } from "./DOM_creation.js"


export function DOM_manipulation() {

    // Variables for side panel

    let todoForm = document.getElementById('todoForm')

    const todoTitle = document.getElementById('todoTitle')    
    const todoDescription = document.getElementById('todoDescription')
    const todoPriority = document.getElementById('todoPriority')
    const todoDate = document.getElementById('todoDate')
    const todoFolder = document.getElementById('todoFolder')

    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    // Variables for main panel

    const mainPanelTitle = document.getElementById("mainPanelTitleText");
    const mainPanelDescription = document.getElementById("mainPanelDescriptionText");
    const mainPanelPriority = document.getElementById("mainPanelPriorityText");
    const mainPanelDate = document.getElementById("mainPanelDateText");
    const mainPanelFolder= document.getElementById("mainPanelDiv");

    // Folder factory
    
    const createFolderFactory = (name) => {
        return {
            folder: 
            name,
            todo: ""
        }
    }

    let defaultFolder = createFolderFactory('Default')
    let folders = defaultFolder
    let foldersDirectory = []
    
    const todoFactory = (title, description, priority, dueDate) => {
        return {
            title,
            description,
            priority,
            dueDate
        }
    }
    
    // Todo factory
    
    function createTodo(title, description, priority, dueDate, folder) {
        let todo = todoFactory(title, description, priority, dueDate)
        if(folder === "") {
            folders.todo = todo
            foldersDirectory.push(defaultFolder)
        } else {
            let newFolder = createFolderFactory(folder)
            newFolder.name = todo
            foldersDirectory.push(newFolder)
        }
        return todo
    }

    // Todo placeholders

    const note0 = createTodo("Go to church", "Need God", "1", "today", "Mass")
    const note1 = todoFactory("Buy eggs", "Need to get some protein", "1", "Today")
    const note2 = todoFactory("Train", "I need to train", "1", "")
    const note3 = todoFactory("Program", "Need to program", "1", "")
    
    console.log(foldersDirectory)
    
    let array = []
    let todoObject = {
        title: "",
        description: "",
        priority: "",
        dueDate: "",
        folder: ""
    }

    // Submit Todo button 
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        todoObject = {
                title: todoTitle.value,
                description: todoDescription.value,
                priority: todoPriority.value,
                dueDate: todoDate.value,
                folder: todoFolder.value
                }
        
        
        // Saving to localStorage
        if (localStorage.getItem('todo') === null) {
            array = [];
        } else {
            array =  JSON.parse(localStorage.getItem('todo'))
        }
        array.push(todoObject);
        localStorage.setItem('todo', JSON.stringify(array))
        
     })
    

     // Display Todo in main section
     let retrievedTodo = localStorage.getItem('todo');
     let todoObjectToPost = {}


}