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

    let array = []
    let todoObject = {
        title: "",
        description: "",
        priority: "",
        dueDate: "",
        folder: ""
    }

    // Folder factory
    
       const createFolderFactory = (name) => {
        return {
            folder: name,
            img: 
            folderContentDiv.innerHTML = `
            <div>
                <p class="folderTitle">${name}</p>
                <img class="folderDiv" src="../images/folder.png">
            </div>`
        }
    }

    let defaultFolder = createFolderFactory('Default')

    console.log(defaultFolder)
    
    // Todo factory
    
    function createTodo(title, description, priority, dueDate, folder) {
        return {
            title,
            description,
            priority,
            dueDate,
            folder
        }
    }

    // Submit Todo button 
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let todoCreation = createTodo(todoTitle.value,todoDescription.value, todoPriority.value, todoDate.value, todoFolder.value)
        
        console.log(todoCreation)
        // Saving to localStorage
        if (localStorage.getItem('todo') === null) {
            array = [];
        } else {
            array =  JSON.parse(localStorage.getItem('todo'))
        }
        array.push(todoObject);
        localStorage.setItem('todo', JSON.stringify(array))
        console.log(array[array.length-1].title)

        // createFolder()
     })
        
        // Todo placeholders
    
        const note0 = createTodo("Go to church", "Need God", "1", "today", "Mass")
        const note1 = createTodo("Buy eggs", "Need to get some protein", "1", "Today")
        const note2 = createTodo("Train", "I need to train", "1", "")
        const note3 = createTodo("Program", "Need to program", "1", "")


     // Display Todo in main section
     let retrievedTodo = array[array.length-1];
     let todoObjectToPost = {}

     // Display new folder in side panel

     let foldersDiv = document.getElementById('folderContentDiv')

    // New Folder icon


    
    
    

    


}