import { DOM_creation } from "./DOM_creation.js"

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

    const mainPanelTitle = document.getElementById("mainPanelTitle");
    const mainPanelDescription = document.getElementById("mainPanelDescription");
    const mainPanelPriority = document.getElementById("mainPanelPriority");
    const mainPanelDate = document.getElementById("mainPanelDate");
    
    let array = []
    let todoArrayFolder = [];
    
    // Folder factory
    
    const createFolderFactory = (name) => {
            let folder = {
                name
            };
        todoArrayFolder.push(name) 
        }
    // Display to folders section factory
    
    const folderContentDiv = document.getElementById('folderContentDiv');
    let count = 0
    
    const folderContainerFactory = (folder) => {
        const folderIcons = document.createElement('div');
        folderIcons.classList.add('folderIcons')
        count++
        folderIcons.setAttribute('dataEl', `${count}`)

        if(localStorage.getItem('todo') === null) {
            folders = [];
        } else {
            folders = JSON.parse(localStorage.getItem('todo'));
            folders.map(el => {
                let folderNames = ""
                folderNames += `<p>${el.folder}</p>
                                <img class="folderDiv" src = '../images/folder.png';>
                `
            folderIcons.innerHTML += folderNames;

            })
        }
        

        
        folderContentDiv.appendChild(folderIcons);
        // const folderIcons = document.createElement('img');
        // folderIcons.src = '../images/folder.png';
        // folderIcons.innerHTML = `${folder}`;
        // folderIcons.classList.add('folderDiv');    
        // folderContentDiv.appendChild(folderIcons);

        // Check local storage to get Folder titles and display them in side Panel

        Array.from(document.getElementsByClassName('folderIcons')).forEach(el => {
            addEventListener('click', ()=> {
            console.log(array[array.length-1].description)
            })
        })

       
        
    }

    let folders = []

    function filterStorage() {
        console.log('getting from storage')

    }


    
    let defaultFolder = createFolderFactory('Default')
    let defaultFolder2 = createFolderFactory('Default2')

    console.log(todoArrayFolder[1])
    
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
        array.push(todoCreation);
        localStorage.setItem('todo', JSON.stringify(array))
        console.log(array[array.length-1].title)

        // createFolder()
        folderContainerFactory(todoFolder.value);
        displayFolder(todoTitle.value, todoDescription.value, todoPriority.value, todoDate.value, todoFolder.value);

        filterStorage()
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

     let mainFoldersDiv = document.getElementById('folderContentDiv');
     let mainPanelFolderName = document.getElementById('mainPanelFolderName');

    function displayFolder(title, description, priority, date, folder) {
       

        mainPanelTitle.innerHTML = 
        `<div>
            <h3>Title</h3>
            <p>${title}</p>
         </div> 
        `
        mainPanelDescription.innerHTML = 
        `<div>
            <h3>Description</h3>
            <p>${description}</p>
         </div> 
        `
        mainPanelPriority.innerHTML = 
        `<div>
            <h3>Priority</h3>
            <p>${priority}</p>
         </div> 
        `
        mainPanelDate.innerHTML = 
        `<div>
            <h3>Date</h3>
            <p>${date}</p>
         </div> 
        `
        mainPanelFolderName.innerHTML = 
        `<h2>${folder} content for:</h2> 
        `
    }

    // Display folder contents function after selecting folder

    
    // This should retrieve the data from local storage
    
    

// Display working edit & delete buttons in main section
    // InnerHtml / textContent would be equal to element.value
    // Delete button should search for an id and delete from local storage
}