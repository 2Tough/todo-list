export function defaultTodo() {

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

    const note0 = createTodo("Go to church", "Need God", "1", "today", "Mass")
    const notetest = createTodo("test", "test", "1", "test", "")
    
    
    console.log(foldersDirectory)

    
    // console.log(note0)
    // console.log(notetest)
    



    const note1 = todoFactory("Buy eggs", "Need to get some protein", "1", "Today")
    const note2 = todoFactory("Train", "I need to train", "1", "")
    const note3 = todoFactory("Program", "Need to program", "1", "")

    // console.log(note1, note2, note3)

    // const newTodo = (() => {
    //     const noteOne = todoFactory("Get water", "Need more water", "1", "")
    
    //     console.log(noteOne)
    // }
        
    // )()
    
    
   return todoFactory

}