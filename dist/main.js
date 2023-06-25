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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_creation: () => (/* binding */ DOM_creation),\n/* harmony export */   array: () => (/* binding */ array)\n/* harmony export */ });\n/* harmony import */ var _DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_manipulation.js */ \"./src/DOM_manipulation.js\");\n\n\n\n\n\nlet array = [];\n\nfunction DOM_creation() {\n    \n    const contentDiv = document.getElementById('main-content');\n    contentDiv.classList.add('contentDiv');\n\n    // Main panel\n    const mainPanelDiv = document.createElement('div');\n    mainPanelDiv.classList.add('mainPanelDiv');\n    \n    \n    const mainPanelFolderName = document.createElement('h2');\n    mainPanelFolderName.setAttribute(\"id\", \"mainPanelFolderName\");\n    mainPanelFolderName.textContent = 'Folder content for:';\n    mainPanelDiv.appendChild(mainPanelFolderName);\n\n    contentDiv.appendChild(mainPanelDiv);\n\n    // Main panel divs\n    \n\n    const mainPanelTodoDiv = document.createElement('div');\n    mainPanelTodoDiv.classList.add('mainPanelTodoDiv');\n    mainPanelDiv.appendChild(mainPanelTodoDiv);\n\n\n    // Divs for each section\n    const mainPanelTitleDiv = document.createElement('div');\n    const mainPanelDescriptionDiv = document.createElement('div');\n    const mainPanelPriorityDiv = document.createElement('div');\n    const mainPanelDateDiv = document.createElement('div');\n\n    // Title div\n    const mainPanelTitle = document.createElement('h3');\n    mainPanelTitle.textContent = \"Title\";\n    const mainPanelTitleText = document.createElement('p');\n    mainPanelTitle.setAttribute(\"id\", \"mainPanelTitleText\");\n    mainPanelTitleDiv.appendChild(mainPanelTitle, mainPanelTitleText);\n\n    // Description div\n    const mainPanelDescription = document.createElement('h3');\n    mainPanelDescription.textContent = \"Description\"\n    const mainPanelDescriptionText = document.createElement('p');\n    mainPanelDescriptionText.setAttribute(\"id\", \"mainPanelDescriptionText\");\n    mainPanelDescriptionDiv.appendChild(mainPanelDescription, mainPanelDescriptionText);\n\n    // Priority div\n    const mainPanelPriority = document.createElement('h3');\n    mainPanelPriority.textContent = \"Priority\";\n    const mainPanelPriorityText = document.createElement('p');\n    mainPanelPriority.setAttribute(\"id\", \"mainPanelPriority\");\n    mainPanelPriorityDiv.appendChild(mainPanelPriority, mainPanelPriorityText);\n\n    // Date div\n    const mainPanelDate = document.createElement('h3');\n    mainPanelDate.textContent = \"Date\";\n    const mainPanelDateText = document.createElement('p');\n    mainPanelDate.setAttribute(\"id\", \"mainPanelDateText\");\n    mainPanelDateDiv.appendChild(mainPanelDate, mainPanelDateText);\n\n    mainPanelTodoDiv.append(mainPanelTitleDiv, \n                            mainPanelDescriptionDiv,\n                            mainPanelPriorityDiv,\n                            mainPanelDateDiv\n                            )\n\n\n    // Side panel\n    const sidePanelDiv = document.createElement('div');\n    sidePanelDiv.classList.add('sidePanelDiv');\n    \n\n    \n    // sidePanelDiv.innerHTML= `\n    // <div class=\"folderContentDiv\">\n    //     <div class=\"folderIconTextContainer\">\n    //         <p class=\"folderTextContainer\">Default</p>\n    //         <img class=\"folderDiv\" src = '../images/folder.png'>\n        \n    //     </div>\n        \n\n        \n    // </div>`\n\n    contentDiv.appendChild(sidePanelDiv);\n\n    // Folder panel\n    const folderContentDiv = document.createElement('div');\n    folderContentDiv.classList.add('folderContentDiv');\n    contentDiv.appendChild(folderContentDiv);\n    \n    // Folder title and icon div\n    const folderIconTextContainer = document.createElement('div');\n    folderIconTextContainer.classList.add('folderIconTextContainer');\n    \n\n    // Text\n    const folderTextContainer = document.createElement('p');\n    folderTextContainer.classList.add('folderTextContainer');\n    folderIconTextContainer.textContent = \"Default\";\n    \n\n    // Icon\n    const imageFolder = document.createElement('img');\n    imageFolder.classList.add('folderDiv');\n    imageFolder.innerHTML = \"Default\";\n    imageFolder.src = '../images/folder.png';\n\n\n    folderIconTextContainer.appendChild(imageFolder, folderTextContainer);\n    folderContentDiv.appendChild(folderIconTextContainer);\n\n    document.querySelectorAll(\".folderDiv\").forEach(folder => folder.addEventListener(\"click\", ()=> {\n        console.log('Todo folder clicked!')\n    })\n)\n\n    // Todo container\n    const todoDiv = document.createElement('div');\n    sidePanelDiv.appendChild(todoDiv);\n\n    todoDiv.innerHTML =\n    `\n    <div class=\"todoDiv\">\n        <form id=\"todoForm\" role=\"form\">\n        <h3 class=\"createTodoText\">Create a new Todo</h3>\n\n        <label for=\"todoTitle\">Title</label>\n        <input type=\"text\" id=\"todoTitle\" required></input>\n\n        <label for=\"todoDescription\">Description</label>\n        <input type=\"text\" id=\"todoDescription\" required></input>  \n\n        <label for=\"todoPriority\">Priority</label>\n        <select type=\"text\" id=\"todoPriority\" required>\n            <option value=\"low\">Low</option>\n            <option value=\"medium\">Medium</option>\n            <option value=\"high\">High</option>\n        \n        </select>    \n\n        <label for=\"todoDate\">Date</label>\n        <input type=\"Date\" id=\"todoDate\" required></input>    \n\n        <label for=\"todoFolder\">Folder</label>\n        <input type=\"text\" id=\"todoFolder\" required></input>   \n        \n        <button class=\"btn submitButton\" id=\"submitBtn\">Create</button>\n        <button class=\"btn cancelButton\" id=\"cancelBtn>Cancel</button>\n\n        </form>\n    </div>\n\n    `\n\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM_creation.js?");

/***/ }),

/***/ "./src/DOM_manipulation.js":
/*!*********************************!*\
  !*** ./src/DOM_manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_manipulation: () => (/* binding */ DOM_manipulation)\n/* harmony export */ });\n/* harmony import */ var _DOM_creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_creation.js */ \"./src/DOM_creation.js\");\n\n\n\n\nfunction DOM_manipulation() {\n\n    // Variables for side panel\n\n    let todoForm = document.getElementById('todoForm')\n\n    const todoTitle = document.getElementById('todoTitle')    \n    const todoDescription = document.getElementById('todoDescription')\n    const todoPriority = document.getElementById('todoPriority')\n    const todoDate = document.getElementById('todoDate')\n    const todoFolder = document.getElementById('todoFolder')\n\n    const submitBtn = document.getElementById('submitBtn');\n    const cancelBtn = document.getElementById('cancelBtn');\n\n    // Variables for main panel\n\n    const mainPanelTitle = document.getElementById(\"mainPanelTitleText\");\n    const mainPanelDescription = document.getElementById(\"mainPanelDescriptionText\");\n    const mainPanelPriority = document.getElementById(\"mainPanelPriorityText\");\n    const mainPanelDate = document.getElementById(\"mainPanelDateText\");\n    const mainPanelFolder= document.getElementById(\"mainPanelDiv\");\n\n    // Folder factory\n    \n    const createFolderFactory = (name) => {\n        return {\n            folder: \n            name,\n            todo: \"\"\n        }\n    }\n\n    let defaultFolder = createFolderFactory('Default')\n    let folders = defaultFolder\n    let foldersDirectory = []\n    \n    const todoFactory = (title, description, priority, dueDate) => {\n        return {\n            title,\n            description,\n            priority,\n            dueDate\n        }\n    }\n    \n    // Todo factory\n    \n    function createTodo(title, description, priority, dueDate, folder) {\n        let todo = todoFactory(title, description, priority, dueDate)\n        if(folder === \"\") {\n            folders.todo = todo\n            foldersDirectory.push(defaultFolder)\n        } else {\n            let newFolder = createFolderFactory(folder)\n            newFolder.name = todo\n            foldersDirectory.push(newFolder)\n        }\n        return todo\n    }\n\n    // Todo placeholders\n\n    const note0 = createTodo(\"Go to church\", \"Need God\", \"1\", \"today\", \"Mass\")\n    const note1 = todoFactory(\"Buy eggs\", \"Need to get some protein\", \"1\", \"Today\")\n    const note2 = todoFactory(\"Train\", \"I need to train\", \"1\", \"\")\n    const note3 = todoFactory(\"Program\", \"Need to program\", \"1\", \"\")\n    \n    console.log(foldersDirectory)\n    \n    let array = []\n    let todoObject = {\n        title: \"\",\n        description: \"\",\n        priority: \"\",\n        dueDate: \"\",\n        folder: \"\"\n    }\n\n    // Submit Todo button \n    \n    submitBtn.addEventListener('click', function(e) {\n        e.preventDefault();\n\n        todoObject = {\n                title: todoTitle.value,\n                description: todoDescription.value,\n                priority: todoPriority.value,\n                dueDate: todoDate.value,\n                folder: todoFolder.value\n                }\n        \n        \n        // Saving to localStorage\n        array.push(todoObject)\n        let jsonStorage = JSON.stringify(array)\n        localStorage.setItem('form', jsonStorage)\n        console.log('test object', todoObject)\n        todoForm.reset()\n     })\n\n     // Display Todo in main section\n\n    //  if (localStorage.getItem('form')) {\n    //     mainPanelTitle.textContent = \"testing\"\n    //  }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM_manipulation.js?");

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