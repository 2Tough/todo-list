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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_creation: () => (/* binding */ DOM_creation),\n/* harmony export */   array: () => (/* binding */ array)\n/* harmony export */ });\n/* harmony import */ var _DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_manipulation.js */ \"./src/DOM_manipulation.js\");\n\r\n\r\n\r\n\r\n\r\nlet array = [];\r\n\r\nfunction DOM_creation() {\r\n    \r\n    const contentDiv = document.getElementById('main-content');\r\n    contentDiv.classList.add('contentDiv');\r\n\r\n    // Main panel\r\n    const mainPanelDiv = document.createElement('div');\r\n    mainPanelDiv.classList.add('mainPanelDiv');\r\n    \r\n    \r\n    const mainPanelFolderName = document.createElement('h2');\r\n    mainPanelFolderName.setAttribute(\"id\", \"mainPanelFolderName\");\r\n    mainPanelFolderName.textContent = 'Folder content for:';\r\n    mainPanelDiv.appendChild(mainPanelFolderName);\r\n\r\n    contentDiv.appendChild(mainPanelDiv);\r\n\r\n    // Main panel divs\r\n    \r\n\r\n    const mainPanelTodoDiv = document.createElement('div');\r\n    mainPanelTodoDiv.classList.add('mainPanelTodoDiv');\r\n    mainPanelDiv.appendChild(mainPanelTodoDiv);\r\n\r\n\r\n    // Divs for each section\r\n    const mainPanelTitleDiv = document.createElement('div');\r\n    const mainPanelDescriptionDiv = document.createElement('div');\r\n    const mainPanelPriorityDiv = document.createElement('div');\r\n    const mainPanelDateDiv = document.createElement('div');\r\n\r\n    // Title div\r\n    const mainPanelTitle = document.createElement('h3');\r\n    mainPanelTitle.textContent = \"Title\";\r\n    const mainPanelTitleText = document.createElement('p');\r\n    mainPanelTitle.setAttribute(\"id\", \"mainPanelTitleText\");\r\n    mainPanelTitleDiv.appendChild(mainPanelTitle, mainPanelTitleText);\r\n\r\n    // Description div\r\n    const mainPanelDescription = document.createElement('h3');\r\n    mainPanelDescription.textContent = \"Description\"\r\n    const mainPanelDescriptionText = document.createElement('p');\r\n    mainPanelDescriptionText.setAttribute(\"id\", \"mainPanelDescriptionText\");\r\n    mainPanelDescriptionDiv.appendChild(mainPanelDescription, mainPanelDescriptionText);\r\n\r\n    // Priority div\r\n    const mainPanelPriority = document.createElement('h3');\r\n    mainPanelPriority.textContent = \"Priority\";\r\n    const mainPanelPriorityText = document.createElement('p');\r\n    mainPanelPriority.setAttribute(\"id\", \"mainPanelPriority\");\r\n    mainPanelPriorityDiv.appendChild(mainPanelPriority, mainPanelPriorityText);\r\n\r\n    // Date div\r\n    const mainPanelDate = document.createElement('h3');\r\n    mainPanelDate.textContent = \"Date\";\r\n    const mainPanelDateText = document.createElement('p');\r\n    mainPanelDate.setAttribute(\"id\", \"mainPanelDateText\");\r\n    mainPanelDateDiv.appendChild(mainPanelDate, mainPanelDateText);\r\n\r\n    mainPanelTodoDiv.append(mainPanelTitleDiv, \r\n                            mainPanelDescriptionDiv,\r\n                            mainPanelPriorityDiv,\r\n                            mainPanelDateDiv\r\n                            )\r\n\r\n\r\n    // Side panel\r\n    const sidePanelDiv = document.createElement('div');\r\n    sidePanelDiv.classList.add('sidePanelDiv');\r\n    \r\n\r\n    \r\n    // sidePanelDiv.innerHTML= `\r\n    // <div class=\"folderContentDiv\">\r\n    //     <div class=\"folderIconTextContainer\">\r\n    //         <p class=\"folderTextContainer\">Default</p>\r\n    //         <img class=\"folderDiv\" src = '../images/folder.png'>\r\n        \r\n    //     </div>\r\n        \r\n\r\n        \r\n    // </div>`\r\n\r\n    contentDiv.appendChild(sidePanelDiv);\r\n\r\n    // Folder panel\r\n    const folderContentDiv = document.createElement('div');\r\n    folderContentDiv.classList.add('folderContentDiv');\r\n    folderContentDiv.setAttribute(\"id\", \"folderContentDiv\");\r\n    contentDiv.appendChild(folderContentDiv);\r\n    \r\n    // Folder title and icon div\r\n    const folderIconTextContainer = document.createElement('div');\r\n    folderIconTextContainer.classList.add('folderIconTextContainer');\r\n    \r\n\r\n    // Text\r\n    const folderTextContainer = document.createElement('p');\r\n    folderTextContainer.classList.add('folderTextContainer');\r\n    folderIconTextContainer.textContent = \"Default\";\r\n    \r\n\r\n    // Icon\r\n    const imageFolder = document.createElement('img');\r\n    imageFolder.classList.add('folderDiv');\r\n    imageFolder.innerHTML = \"Default\";\r\n    imageFolder.src = '../images/folder.png';\r\n\r\n\r\n    folderIconTextContainer.appendChild(imageFolder, folderTextContainer);\r\n    folderContentDiv.appendChild(folderIconTextContainer);\r\n\r\n    document.querySelectorAll(\".folderDiv\").forEach(folder => folder.addEventListener(\"click\", ()=> {\r\n        console.log('Todo folder clicked!')\r\n    })\r\n)\r\n\r\n    // Todo container\r\n    const todoDiv = document.createElement('div');\r\n    sidePanelDiv.appendChild(todoDiv);\r\n\r\n    todoDiv.innerHTML =\r\n    `\r\n    <div class=\"todoDiv\">\r\n        <form id=\"todoForm\" role=\"form\">\r\n        <h3 class=\"createTodoText\">Create a new Todo</h3>\r\n\r\n        <label for=\"todoTitle\">Title</label>\r\n        <input type=\"text\" id=\"todoTitle\" required></input>\r\n\r\n        <label for=\"todoDescription\">Description</label>\r\n        <input type=\"text\" id=\"todoDescription\" required></input>  \r\n\r\n        <label for=\"todoPriority\">Priority</label>\r\n        <select type=\"text\" id=\"todoPriority\" required>\r\n            <option value=\"low\">Low</option>\r\n            <option value=\"medium\">Medium</option>\r\n            <option value=\"high\">High</option>\r\n        \r\n        </select>    \r\n\r\n        <label for=\"todoDate\">Date</label>\r\n        <input type=\"Date\" id=\"todoDate\" required></input>    \r\n\r\n        <label for=\"todoFolder\">Folder</label>\r\n        <input type=\"text\" id=\"todoFolder\" required></input>   \r\n        \r\n        <button class=\"btn submitButton\" id=\"submitBtn\">Create</button>\r\n        <button class=\"btn cancelButton\" id=\"cancelBtn>Cancel</button>\r\n\r\n        </form>\r\n    </div>\r\n\r\n    `\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM_creation.js?");

/***/ }),

/***/ "./src/DOM_manipulation.js":
/*!*********************************!*\
  !*** ./src/DOM_manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM_manipulation: () => (/* binding */ DOM_manipulation)\n/* harmony export */ });\n/* harmony import */ var _DOM_creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_creation.js */ \"./src/DOM_creation.js\");\n\r\n\r\n\r\n\r\nfunction DOM_manipulation() {\r\n\r\n    // Variables for side panel\r\n\r\n    let todoForm = document.getElementById('todoForm')\r\n\r\n    const todoTitle = document.getElementById('todoTitle')    \r\n    const todoDescription = document.getElementById('todoDescription')\r\n    const todoPriority = document.getElementById('todoPriority')\r\n    const todoDate = document.getElementById('todoDate')\r\n    const todoFolder = document.getElementById('todoFolder')\r\n\r\n    const submitBtn = document.getElementById('submitBtn');\r\n    const cancelBtn = document.getElementById('cancelBtn');\r\n\r\n    // Variables for main panel\r\n\r\n    const mainPanelTitle = document.getElementById(\"mainPanelTitleText\");\r\n    const mainPanelDescription = document.getElementById(\"mainPanelDescriptionText\");\r\n    const mainPanelPriority = document.getElementById(\"mainPanelPriorityText\");\r\n    const mainPanelDate = document.getElementById(\"mainPanelDateText\");\r\n    const mainPanelFolder= document.getElementById(\"mainPanelDiv\");\r\n\r\n    let array = []\r\n    let todoObject = {\r\n        title: \"\",\r\n        description: \"\",\r\n        priority: \"\",\r\n        dueDate: \"\",\r\n        folder: \"\"\r\n    }\r\n\r\n       // Folder factory\r\n    \r\n       const createFolderFactory = (name) => {\r\n        return {\r\n            folder: \r\n            name,\r\n            todo: \"\"\r\n        }\r\n    }\r\n\r\n    let defaultFolder = createFolderFactory('Default')\r\n    \r\n    // Todo factory\r\n    \r\n    function createTodo(title, description, priority, dueDate, folder) {\r\n        return {\r\n            title,\r\n            description,\r\n            priority,\r\n            dueDate,\r\n            folder\r\n        }\r\n    }\r\n\r\n\r\n\r\n    // Submit Todo button \r\n    \r\n    submitBtn.addEventListener('click', function(e) {\r\n        e.preventDefault();\r\n\r\n        let todoCreation = createTodo(todoTitle.value,todoDescription.value, todoPriority.value, todoDate.value, todoFolder.value)\r\n        \r\n        // Saving to localStorage\r\n        if (localStorage.getItem('todo') === null) {\r\n            array = [];\r\n        } else {\r\n            array =  JSON.parse(localStorage.getItem('todo'))\r\n        }\r\n        array.push(todoCreation);\r\n        localStorage.setItem('todo', JSON.stringify(array))\r\n        console.log(array[array.length-1].title)\r\n\r\n        // createFolder()\r\n     })\r\n    \r\n     \r\n    \r\n        // Todo placeholders\r\n    \r\n        const note0 = createTodo(\"Go to church\", \"Need God\", \"1\", \"today\", \"Mass\")\r\n        const note1 = createTodo(\"Buy eggs\", \"Need to get some protein\", \"1\", \"Today\")\r\n        const note2 = createTodo(\"Train\", \"I need to train\", \"1\", \"\")\r\n        const note3 = createTodo(\"Program\", \"Need to program\", \"1\", \"\")\r\n\r\n\r\n     // Display Todo in main section\r\n     let retrievedTodo = array[array.length-1];\r\n     let todoObjectToPost = {}\r\n\r\n     // Display new folder in side panel\r\n\r\n     let foldersDiv = document.getElementById('folderContentDiv')\r\n\r\n    // New Folder icon\r\n\r\n    folderContentDiv.innerHTML = `\r\n        <div>\r\n            <p class=\"folderTitle\">Test folder</p>\r\n            <img class=\"folderDiv\" src=\"../images/folder.png\">\r\n        </div>`\r\n    \r\n    \r\n    \r\n\r\n    \r\n\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM_manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_manipulation.js */ \"./src/DOM_manipulation.js\");\n/* harmony import */ var _DOM_creation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_creation.js */ \"./src/DOM_creation.js\");\n\r\n\r\n\r\n\r\n(0,_DOM_creation_js__WEBPACK_IMPORTED_MODULE_1__.DOM_creation)();\r\n(0,_DOM_manipulation_js__WEBPACK_IMPORTED_MODULE_0__.DOM_manipulation)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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