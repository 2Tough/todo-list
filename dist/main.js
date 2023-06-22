/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/defaultTodo.js":
/*!****************************!*\
  !*** ./src/defaultTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTodo: () => (/* binding */ defaultTodo)\n/* harmony export */ });\n/* harmony import */ var _newTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTodo.js */ \"./src/newTodo.js\");\n\n\n\n\nfunction defaultTodo() {\n\n    \n\n    const submitBtn = document.getElementsByClassName('submitButton');\n    \n    function createTodo(e) {\n        e.preventDefault();\n        console.log('test2')\n\n        todoObject = {\n            title: inputTodoTitle.value,\n            description: inputTodoDescription.value,\n            priority: inputTodoPriority.value,\n            dueDate: inputTodoDueDate.value,\n            folder: inputTodoDFolder.value\n        }\n\n        console.log(_newTodo_js__WEBPACK_IMPORTED_MODULE_0__.array)\n    }\n\n    const createFolderFactory = (name) => {\n        return {\n            folder: \n            name,\n            todo: \"\"\n        }\n    }\n\n    let defaultFolder = createFolderFactory('Default')\n    let folders = defaultFolder\n    let foldersDirectory = []\n    \n    const todoFactory = (title, description, priority, dueDate) => {\n        return {\n            title,\n            description,\n            priority,\n            dueDate\n        }\n    }\n    \n\n    \n    function createTodo(title, description, priority, dueDate, folder) {\n        let todo = todoFactory(title, description, priority, dueDate)\n        if(folder === \"\") {\n            folders.todo = todo\n            foldersDirectory.push(defaultFolder)\n        } else {\n            let newFolder = createFolderFactory(folder)\n            newFolder.name = todo\n            foldersDirectory.push(newFolder)\n        }\n        return todo\n    }\n\n    const note0 = createTodo(\"Go to church\", \"Need God\", \"1\", \"today\", \"Mass\")\n    const notetest = createTodo(\"test\", \"test\", \"1\", \"test\", \"\")\n    \n    \n    console.log(foldersDirectory)\n\n    \n    // console.log(note0)\n    // console.log(notetest)\n    \n\n\n\n    const note1 = todoFactory(\"Buy eggs\", \"Need to get some protein\", \"1\", \"Today\")\n    const note2 = todoFactory(\"Train\", \"I need to train\", \"1\", \"\")\n    const note3 = todoFactory(\"Program\", \"Need to program\", \"1\", \"\")\n\n    // console.log(note1, note2, note3)\n\n    // const newTodo = (() => {\n    //     const noteOne = todoFactory(\"Get water\", \"Need more water\", \"1\", \"\")\n    \n    //     console.log(noteOne)\n    // }\n        \n    // )()\n    \n    \n   return todoFactory\n\n}\n\n//# sourceURL=webpack://todo-list/./src/defaultTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _defaultTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultTodo.js */ \"./src/defaultTodo.js\");\n/* harmony import */ var _newTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodo.js */ \"./src/newTodo.js\");\n\n\n\nconst contentDiv = document.getElementById('main-content');\n\n(0,_defaultTodo_js__WEBPACK_IMPORTED_MODULE_0__.defaultTodo)();\n(0,_newTodo_js__WEBPACK_IMPORTED_MODULE_1__.newTodo)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/newTodo.js":
/*!************************!*\
  !*** ./src/newTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   array: () => (/* binding */ array),\n/* harmony export */   newTodo: () => (/* binding */ newTodo)\n/* harmony export */ });\n/* harmony import */ var _defaultTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultTodo.js */ \"./src/defaultTodo.js\");\n\n\n\n\n\nlet array = [];\n\nfunction newTodo() {\n    \n    const contentDiv = document.getElementById('main-content');\n    contentDiv.classList.add('contentDiv');\n\n    // Main panel\n    const mainPanelDiv = document.createElement('div');\n    mainPanelDiv.classList.add('mainPanelDiv');\n    mainPanelDiv.textContent = 'Folder content:'\n    contentDiv.appendChild(mainPanelDiv);\n\n    // Main panel divs\n\n    const mainPanelTodoDiv = document.createElement('form');\n    mainPanelTodoDiv.classList.add('mainPanelTodoDiv');\n    mainPanelDiv.appendChild(mainPanelTodoDiv);\n\n    const mainPanelTitleDiv = document.createElement('div');\n    const mainPanelDescriptionDiv = document.createElement('div');\n    const mainPanelPriorityDiv = document.createElement('div');\n    const mainPanelDateDiv = document.createElement('div');\n\n    // Title div\n    const mainPanelTitle = document.createElement('h3');\n    mainPanelTitle.textContent = \"Title\";\n    const mainPanelTitleText = document.createElement('p');\n    mainPanelTitleDiv.appendChild(mainPanelTitle, mainPanelTitleText);\n\n    // Description div\n    const mainPanelDescription = document.createElement('h3');\n    mainPanelDescription.textContent = \"Description\"\n    const mainPanelDescriptionText = document.createElement('p');\n    mainPanelTitleDiv.appendChild(mainPanelDescription, mainPanelDescriptionText);\n\n    // Priority div\n    const mainPanelPriority = document.createElement('h3');\n    mainPanelPriority.textContent = \"Priority\";\n    const mainPanelPriorityText = document.createElement('p');\n    mainPanelTitleDiv.appendChild(mainPanelPriority, mainPanelPriorityText);\n\n    // Date div\n    const mainPanelDate = document.createElement('h3');\n    mainPanelDate.textContent = \"Date\";\n    const mainPanelDateText = document.createElement('p');\n    mainPanelTitleDiv.appendChild(mainPanelDate, mainPanelDateText);\n\n    mainPanelTodoDiv.appendChild(mainPanelTitleDiv, \n                                 mainPanelDescriptionDiv,\n                                 mainPanelPriorityDiv,\n                                 mainPanelDateDiv\n                                 )\n\n\n    // Side panel\n    const sidePanelDiv = document.createElement('div');\n    sidePanelDiv.classList.add('sidePanelDiv');\n    contentDiv.appendChild(sidePanelDiv);\n\n    // Folder panel\n    const folderContentDiv = document.createElement('div');\n    folderContentDiv.classList.add('folderContentDiv');\n    contentDiv.appendChild(folderContentDiv);\n    \n    // Folder title and icon div\n    const folderIconTextContainer = document.createElement('div');\n    folderIconTextContainer.classList.add('folderIconTextContainer');\n    \n\n    // Text\n    const folderTextContainer = document.createElement('p');\n    folderTextContainer.classList.add('folderTextContainer');\n    folderIconTextContainer.textContent = \"Default\";\n    \n\n    // Icon\n    const imageFolder = document.createElement('img');\n    imageFolder.classList.add('folderDiv');\n    imageFolder.innerHTML = \"Default\";\n    imageFolder.src = '../images/folder.png';\n\n\n    folderIconTextContainer.appendChild(imageFolder, folderTextContainer);\n    folderContentDiv.appendChild(folderIconTextContainer);\n\n    document.querySelectorAll(\".folderDiv\").forEach(folder => folder.addEventListener(\"click\", ()=> {\n        console.log('Todo folder clicked!')\n    })\n)\n\n    // Todo container\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add('todoDiv');\n    sidePanelDiv.appendChild(todoDiv);\n\n    // Create todo text\n\n    const createTodoText = document.createElement('h3');\n    createTodoText.classList.add('createTodoText');\n    createTodoText.textContent = \"Create a new Todo\";\n    \n    // Todo inputs\n\n    const inputTodoTitleLabel = document.createElement('label');\n    inputTodoTitleLabel.textContent = 'Title';\n    inputTodoTitleLabel.classList.add('labels');\n    const inputTodoTitle = document.createElement('input');\n    \n    const inputTodoDescriptionLabel = document.createElement('label');\n    inputTodoDescriptionLabel.textContent = 'Description';\n    inputTodoDescriptionLabel.classList.add('labels');\n    const inputTodoDescription = document.createElement('input');\n\n    const inputTodoPriorityLabel = document.createElement('label');\n    inputTodoPriorityLabel.textContent = 'Priority';\n    inputTodoPriorityLabel.classList.add('labels');\n    const inputTodoPriority = document.createElement('input');\n\n    const inputTodoDateLabel = document.createElement('label');\n    inputTodoDateLabel.textContent = 'Date';\n    inputTodoDateLabel.classList.add('labels');\n    const inputTodoDueDate = document.createElement('input');\n\n    const inputTodoDateFolderLabel = document.createElement('label');\n    inputTodoDateFolderLabel.textContent = 'Folder';\n    inputTodoDateFolderLabel.classList.add('labels');\n    const inputTodoDFolder = document.createElement('input');\n\n    const submitButton = document.createElement('button');\n    \n    submitButton.textContent = 'Create';\n    submitButton.classList.add('submitButton');\n    submitButton.onclick = createTodo;\n\n    let todoObject = {\n        title: \"\",\n        description: \"\",\n        priority: \"\",\n        dueDate: \"\",\n        folder: \"\"\n    }\n\n\n    function createTodo(e) {\n        e.preventDefault();\n        \n        todoObject = {\n            title: inputTodoTitle.value,\n            description: inputTodoDescription.value,\n            priority: inputTodoPriority.value,\n            dueDate: inputTodoDueDate.value,\n            folder: inputTodoDFolder.value\n        }\n\n        \n        array.push(todoObject)\n        \n\n    }\n\n    todoDiv.append(\n                   createTodoText, \n                   inputTodoTitleLabel, inputTodoTitle, \n                   inputTodoDescriptionLabel, inputTodoDescription,\n                   inputTodoPriorityLabel, inputTodoPriority,\n                   inputTodoDateLabel, inputTodoDueDate,\n                   inputTodoDateFolderLabel, inputTodoDFolder,\n                   submitButton );\n    \n    return createTodo;\n}\n\n//# sourceURL=webpack://todo-list/./src/newTodo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;