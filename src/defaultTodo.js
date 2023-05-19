


export function defaultTodo() {


    const todoFactory = (title, description, priority, dueDate) => {
        return {
            title,
            description,
            priority,
            dueDate
        }
    }

    const note1 = todoFactory("Buy eggs", "Need to get some protein", "1", "Today")
    const note2 = todoFactory("Train", "I need to train", "1", "")
    const note3 = todoFactory("Program", "Need to program", "1", "")

    console.log(note1, note2, note3)

    const newTodo = (() => {
        const noteOne = todoFactory("Get water", "Need more water", "1", "")
    
        console.log(noteOne)
    }
        
    )()
    
    
   return todoFactory

}


