// Tasks include title, description, dueDate, priority

import {
  titleFactory,
  descriptionFactory,
  dueDateFactory,
  priorityFactory,
} from "./inputController";

import { appender } from "./appendController";
import { iconsFactory } from "./inputController";
import { mainListHeader } from "../main";

export function taskInputCombiner(
  taskTitle,
  taskDescription,
  taskDueDate,
  taskPrioriry,
  taskId
) {
  const htmlText = `
  <div class="todo-task-list-container-body" id=${taskId}>
  ${titleFactory(taskTitle)}
  ${descriptionFactory(taskDescription)}
  ${dueDateFactory(taskDueDate)}
  ${priorityFactory(taskPrioriry)}
  </div>`;
  appender(htmlText);
  return htmlText;
}
