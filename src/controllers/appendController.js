import { taskInputCombiner } from "./taskController";
import { iconsFactory } from "./inputController";
import { mainListHeader } from "../main";

export function appender(unitContainer) {
  const createIcons = iconsFactory();
  const htmlText = `<div class="todo-task-list-container-unit">

${unitContainer}
${createIcons}
    </div>`;

  mainListHeader.innerHTML += htmlText;
  return htmlText;
}
