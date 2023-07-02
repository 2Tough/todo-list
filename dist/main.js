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

/***/ "./src/DOM_creation.js":
/*!*****************************!*\
  !*** ./src/DOM_creation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_creation: () => (/* binding */ DOM_creation)\n/* harmony export */ });\n/* harmony import */ var _DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_manipulation.js */ \"./src/DOM_manipulation.js\");\n\n\n\nfunction DOM_creation() {\n    \n    const contentDiv = document.getElementById('main-content');\n    contentDiv.classList.add('contentDiv');\n\n    // Main panel\n    const mainPanelDiv = document.createElement('div');\n    mainPanelDiv.classList.add('mainPanelDiv');\n    \n    \n    const mainPanelFolderName = document.createElement('h2');\n    mainPanelFolderName.setAttribute(\"id\", \"mainPanelFolderName\");\n    mainPanelFolderName.textContent = 'Folder content for:';\n    mainPanelDiv.appendChild(mainPanelFolderName);\n\n    contentDiv.appendChild(mainPanelDiv);\n\n    // Main panel divs\n    \n    const mainPanelTodoDiv = document.createElement('div');\n    mainPanelTodoDiv.classList.add('mainPanelTodoDiv');\n    mainPanelTodoDiv.setAttribute(\"id\", \"mainPanelTodoDiv\");\n    mainPanelDiv.appendChild(mainPanelTodoDiv);\n\n    // Divs for each section\n    const mainPanelTitleDiv = document.createElement('div');\n    mainPanelTitleDiv.setAttribute(\"id\", \"mainPanelTitle\");\n\n    const mainPanelDescriptionDiv = document.createElement('div');\n    mainPanelDescriptionDiv.setAttribute(\"id\", \"mainPanelDescription\");\n\n    const mainPanelPriorityDiv = document.createElement('div');\n    mainPanelPriorityDiv.setAttribute(\"id\", \"mainPanelPriority\");\n    \n    const mainPanelDateDiv = document.createElement('div');\n    mainPanelDateDiv.setAttribute(\"id\", \"mainPanelDate\");\n\n    mainPanelTodoDiv.append(mainPanelTitleDiv, \n                            mainPanelDescriptionDiv,\n                            mainPanelPriorityDiv,\n                            mainPanelDateDiv\n                            )\n\n    // Side panel\n    const sidePanelDiv = document.createElement('div');\n    sidePanelDiv.classList.add('sidePanelDiv');\n    \n    contentDiv.appendChild(sidePanelDiv);\n\n    // Folder panel\n    const folderContentDiv = document.createElement('div');\n    folderContentDiv.classList.add('folderContentDiv');\n    folderContentDiv.setAttribute(\"id\", \"folderContentDiv\");\n    contentDiv.appendChild(folderContentDiv);\n    \n    document.querySelectorAll(\".folderDiv\").forEach(folder => folder.addEventListener(\"click\", ()=> {\n        console.log('Todo folder clicked!')\n    })\n)\n\n    // Todo container\n    const todoDiv = document.createElement('div');\n    sidePanelDiv.appendChild(todoDiv);\n\n    todoDiv.innerHTML =\n    `\n    <div class=\"todoDiv\">\n        <form id=\"todoForm\" role=\"form\">\n        <h3 class=\"createTodoText\">Create a new Todo</h3>\n\n        <label for=\"todoTitle\">Title</label>\n        <input type=\"text\" id=\"todoTitle\" required></input>\n\n        <label for=\"todoDescription\">Description</label>\n        <input type=\"text\" id=\"todoDescription\" required></input>  \n\n        <label for=\"todoPriority\">Priority</label>\n        <select type=\"text\" id=\"todoPriority\" required>\n            <option value=\"low\">Low</option>\n            <option value=\"medium\">Medium</option>\n            <option value=\"high\">High</option>\n        \n        </select>    \n\n        <label for=\"todoDate\">Date</label>\n        <input type=\"Date\" id=\"todoDate\" required></input>    \n\n        <label for=\"todoFolder\">Folder</label>\n        <input type=\"text\" id=\"todoFolder\" required></input>   \n        \n        <button class=\"btn submitButton\" id=\"submitBtn\">Create</button>\n        <button class=\"btn cancelButton\" id=\"cancelBtn>Cancel</button>\n\n        </form>\n    </div>\n\n    `\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM_creation.js?");

/***/ }),

/***/ "./src/DOM_manipulation.js":
/*!*********************************!*\
  !*** ./src/DOM_manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_manipulation: () => (/* binding */ DOM_manipulation)\n/* harmony export */ });\n/* harmony import */ var _DOM_creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_creation.js */ \"./src/DOM_creation.js\");\n\n\nfunction DOM_manipulation() {\n\n    // Variables for side panel\n\n    let todoForm = document.getElementById('todoForm')\n\n    const todoTitle = document.getElementById('todoTitle')    \n    const todoDescription = document.getElementById('todoDescription')\n    const todoPriority = document.getElementById('todoPriority')\n    const todoDate = document.getElementById('todoDate')\n    const todoFolder = document.getElementById('todoFolder')\n\n    const submitBtn = document.getElementById('submitBtn');\n    const cancelBtn = document.getElementById('cancelBtn');\n\n    // Variables for main panel\n\n    const mainPanelTitle = document.getElementById(\"mainPanelTitle\");\n    const mainPanelDescription = document.getElementById(\"mainPanelDescription\");\n    const mainPanelPriority = document.getElementById(\"mainPanelPriority\");\n    const mainPanelDate = document.getElementById(\"mainPanelDate\");\n    \n    let array = []\n    let todoArrayFolder = [];\n    \n    // Folder factory\n    \n    const createFolderFactory = (name) => {\n            let folder = {\n                name\n            };\n        todoArrayFolder.push(name) \n        }\n    // Display to folders section factory\n    \n    const folderContentDiv = document.getElementById('folderContentDiv');\n    let count = 0\n    \n    const folderContainerFactory = (folder) => {\n        const folderIcons = document.createElement('div');\n        folderIcons.classList.add('folderIcons')\n        count++\n        folderIcons.setAttribute('dataEl', `${count}`)\n        \n\n        folderIcons.innerHTML = \n        `\n            <p>${folder}</p>\n            <img class=\"folderDiv\" src = '../images/folder.png';>\n        `\n        folderContentDiv.appendChild(folderIcons);\n        // const folderIcons = document.createElement('img');\n        // folderIcons.src = '../images/folder.png';\n        // folderIcons.innerHTML = `${folder}`;\n        // folderIcons.classList.add('folderDiv');    \n        // folderContentDiv.appendChild(folderIcons);\n\n        // Check local storage to get Folder titles and display them in side Panel\n\n        Array.from(document.getElementsByClassName('folderIcons')).forEach(el => {\n            addEventListener('click', ()=> {\n            console.log(array[array.length-1].description)\n            })\n        })\n\n       \n        \n    }\n\n    let folders = []\n\n    function filterStorage() {\n        console.log('getting from storage')\n        if(localStorage.getItem('todo') === null) {\n            folders = [];\n        } else {\n            folders = JSON.parse(localStorage.getItem('todo'));\n            folders.map(el => {\n                console.log(el.title)})\n                console.log(folders)\n            \n        }\n    }\n\n\n    \n    let defaultFolder = createFolderFactory('Default')\n    let defaultFolder2 = createFolderFactory('Default2')\n\n    console.log(todoArrayFolder[1])\n    \n    // Todo factory\n    \n    function createTodo(title, description, priority, dueDate, folder) {\n        return {\n            title,\n            description,\n            priority,\n            dueDate,\n            folder\n        }\n    }\n\n    // Submit Todo button \n    \n    submitBtn.addEventListener('click', function(e) {\n        e.preventDefault();\n\n        let todoCreation = createTodo(todoTitle.value,todoDescription.value, todoPriority.value, todoDate.value, todoFolder.value)\n        \n        console.log(todoCreation)\n        // Saving to localStorage\n        if (localStorage.getItem('todo') === null) {\n            array = [];\n        } else {\n            array =  JSON.parse(localStorage.getItem('todo'))\n        }\n        array.push(todoCreation);\n        localStorage.setItem('todo', JSON.stringify(array))\n        console.log(array[array.length-1].title)\n\n        // createFolder()\n        folderContainerFactory(todoFolder.value);\n        displayFolder(todoTitle.value, todoDescription.value, todoPriority.value, todoDate.value, todoFolder.value);\n\n        filterStorage()\n    })\n        \n        // Todo placeholders\n    \n    const note0 = createTodo(\"Go to church\", \"Need God\", \"1\", \"today\", \"Mass\")\n    const note1 = createTodo(\"Buy eggs\", \"Need to get some protein\", \"1\", \"Today\")\n    const note2 = createTodo(\"Train\", \"I need to train\", \"1\", \"\")\n    const note3 = createTodo(\"Program\", \"Need to program\", \"1\", \"\")\n\n\n     // Display Todo in main section\n     let retrievedTodo = array[array.length-1];\n     let todoObjectToPost = {}\n\n     // Display new folder in side panel\n\n     let mainFoldersDiv = document.getElementById('folderContentDiv');\n     let mainPanelFolderName = document.getElementById('mainPanelFolderName');\n\n    function displayFolder(title, description, priority, date, folder) {\n       \n\n        mainPanelTitle.innerHTML = \n        `<div>\n            <h3>Title</h3>\n            <p>${title}</p>\n         </div> \n        `\n        mainPanelDescription.innerHTML = \n        `<div>\n            <h3>Description</h3>\n            <p>${description}</p>\n         </div> \n        `\n        mainPanelPriority.innerHTML = \n        `<div>\n            <h3>Priority</h3>\n            <p>${priority}</p>\n         </div> \n        `\n        mainPanelDate.innerHTML = \n        `<div>\n            <h3>Date</h3>\n            <p>${date}</p>\n         </div> \n        `\n        mainPanelFolderName.innerHTML = \n        `<h2>${folder} content for:</h2> \n        `\n    }\n\n    // Display folder contents function after selecting folder\n\n    \n    // This should retrieve the data from local storage\n    \n    \n\n// Display working edit & delete buttons in main section\n    // InnerHtml / textContent would be equal to element.value\n    // Delete button should search for an id and delete from local storage\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM_manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_manipulation.js */ \"./src/DOM_manipulation.js\");\n/* harmony import */ var _DOM_creation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_creation.js */ \"./src/DOM_creation.js\");\n\n\n\n\n(0,_DOM_creation_js__WEBPACK_IMPORTED_MODULE_1__.DOM_creation)();\n(0,_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.DOM_manipulation)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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