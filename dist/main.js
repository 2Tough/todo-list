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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTodo: () => (/* binding */ defaultTodo)\n/* harmony export */ });\nfunction defaultTodo() {\n\n    const createFolderFactory = (name) => {\n        return {\n            folder: \n            name,\n            todo: \"\"\n        }\n    }\n\n    let defaultFolder = createFolderFactory('Default')\n    let folders = defaultFolder\n    let foldersDirectory = []\n    \n    const todoFactory = (title, description, priority, dueDate) => {\n        return {\n            title,\n            description,\n            priority,\n            dueDate\n        }\n    }\n    \n\n    \n    function createTodo(title, description, priority, dueDate, folder) {\n        let todo = todoFactory(title, description, priority, dueDate)\n        if(folder === \"\") {\n            folders.todo = todo\n            foldersDirectory.push(defaultFolder)\n        } else {\n            let newFolder = createFolderFactory(folder)\n            newFolder.name = todo\n            foldersDirectory.push(newFolder)\n        }\n        return todo\n    }\n\n    const note0 = createTodo(\"Go to church\", \"Need God\", \"1\", \"today\", \"Mass\")\n    const notetest = createTodo(\"test\", \"test\", \"1\", \"test\", \"\")\n    \n    \n    console.log(foldersDirectory)\n\n    \n    // console.log(note0)\n    // console.log(notetest)\n    \n\n\n\n    const note1 = todoFactory(\"Buy eggs\", \"Need to get some protein\", \"1\", \"Today\")\n    const note2 = todoFactory(\"Train\", \"I need to train\", \"1\", \"\")\n    const note3 = todoFactory(\"Program\", \"Need to program\", \"1\", \"\")\n\n    // console.log(note1, note2, note3)\n\n    // const newTodo = (() => {\n    //     const noteOne = todoFactory(\"Get water\", \"Need more water\", \"1\", \"\")\n    \n    //     console.log(noteOne)\n    // }\n        \n    // )()\n    \n    \n   return todoFactory\n\n}\n\n//# sourceURL=webpack://todo-list/./src/defaultTodo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTodo: () => (/* binding */ newTodo)\n/* harmony export */ });\n\nfunction newTodo() {\n    \n    const contentDiv = document.getElementById('main-content');\n    \n    const sidePanelDiv = document.createElement('div');\n    sidePanelDiv.classList.add('sidePanelDiv');\n    contentDiv.appendChild(sidePanelDiv);\n\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add('todoDiv')\n    sidePanelDiv.appendChild(todoDiv);\n\n    const inputTodoTitle = document.createElement('input')\n\n    const inputTodoPriority = document.createElement('input')\n\n    const inputTodoDueDate = document.createElement('input')\n\n    const inputTodoDFolder = document.createElement('input')\n    todoDiv.append(inputTodoDFolder, inputTodoDueDate, inputTodoPriority,inputTodoTitle );\n    \n\n}\n\n//# sourceURL=webpack://todo-list/./src/newTodo.js?");

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