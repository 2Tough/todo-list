import undoneCheckImg from "../assets/checkundone.png";
import editImg from "../assets/boton-editar.png";
import trashImg from "../assets/bote-de-basura.png";

export function titleFactory(title) {
  const htmlText = `<div class="todo-task-list-container-unit-title">
                  ${title}
                </div>`;
  return htmlText;
}

export function descriptionFactory(description) {
  const htmlText = `<div class="todo-task-list-container-unit-description">
                  ${description}
                </div>`;
  return htmlText;
}

export function dueDateFactory(dueDate) {
  const htmlText = `<div class="todo-task-list-container-unit-dueDate">
                  ${dueDate}
                </div>`;
  return htmlText;
}

export function priorityFactory(priority) {
  const htmlText = `<div class="todo-task-list-container-unit-priority">
                  ${priority}
                </div>`;
  return htmlText;
}

export function iconsFactory() {
  const htmlText = `<div class="todo-task-list-container-icons">
  <img src=${undoneCheckImg} />
  <img src=${editImg} />
  <img src=${trashImg} />
</div>`;
  return htmlText;
}
