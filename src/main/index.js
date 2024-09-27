import "./styles.css";
import { titleFactory } from "../controllers/inputController";
import { taskInputCombiner } from "../controllers/taskController";

const btnCreate = document.getElementById("btn-create");
const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const taskDueDate = document.getElementById("task-dueDate");
const taskPrioriry = document.getElementById("task-priority");
export const mainListHeader = document.getElementById("startHere");

// Todo: removal of todos

let id = 0;
let taskContainer = [];

btnCreate.addEventListener("click", (e) => {
  id++;
  e.preventDefault();

  taskInputCombiner(
    taskTitle.value,
    taskDescription.value,
    taskDueDate.value,
    taskPrioriry.value,
    id
  );
});

function taskFactory(title, description, dueDate, priority, id) {}
