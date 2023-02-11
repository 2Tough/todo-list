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

/***/ "./src/blank-to-do.js":
/*!****************************!*\
  !*** ./src/blank-to-do.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blankToDo\": () => (/* binding */ blankToDo)\n/* harmony export */ });\nconst blankToDo = () => {\n    \n    const projectsArrayTitle = [];\n    const projectsArrayBody = [];\n    let projectTitle = \"Task title\";\n    let projectBody = \"Description\";\n    projectsArrayTitle.push(projectTitle)\n    projectsArrayBody.push(projectBody)\n\n    return {\n        projectsArrayTitle, \n        projectsArrayBody, \n        projectTitle,\n        projectBody\n\n    }\n};\n\n//Todo: get input value and store it.\n\n//# sourceURL=webpack://todo-list/./src/blank-to-do.js?");

/***/ }),

/***/ "./src/default-to-do.js":
/*!******************************!*\
  !*** ./src/default-to-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultToDo\": () => (/* binding */ defaultToDo)\n/* harmony export */ });\n/* harmony import */ var _blank_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-to-do */ \"./src/blank-to-do.js\");\n/* harmony import */ var _new_to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-to-do */ \"./src/new-to-do.js\");\n\n\n\nfunction defaultToDo() {\n\n    const contentDiv = document.getElementById(\"main-content\");\n\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Your ToDo for today\";\n    contentDiv.appendChild(heading);\n    \n    const toDoContainer = document.createElement(\"div\");\n    toDoContainer.classList.add(\"toDoContainer\");\n    contentDiv.appendChild(toDoContainer);\n\n\n\n      \n\n    // Title\n    \n    const projectsDiv = document.createElement(\"h3\");\n    projectsDiv.textContent = (0,_blank_to_do__WEBPACK_IMPORTED_MODULE_0__.blankToDo)().projectTitle;\n    projectsDiv.classList.add(\"taskTitle\");\n    \n    \n    const inputTitle = document.createElement(\"input\");\n    inputTitle.classList.add(\"inputTitle\");\n    inputTitle.type = \"text\";\n    \n    const titleContainerDiv = document.createElement(\"div\");\n    titleContainerDiv.append(projectsDiv, inputTitle);\n    toDoContainer.appendChild(titleContainerDiv);\n\n    // Body\n\n    const projectsDivBody = document.createElement(\"h4\");\n    projectsDivBody.textContent = (0,_blank_to_do__WEBPACK_IMPORTED_MODULE_0__.blankToDo)().projectBody;\n    projectsDivBody.classList.add(\"taskBody\")\n    toDoContainer.appendChild(projectsDivBody);\n\n    const inputBody = document.createElement(\"input\");\n    inputBody.classList.add(\"inputBody\");\n    inputBody.type = \"text\";\n    toDoContainer.appendChild(inputBody);\n\n    const bodyContainerDiv = document.createElement(\"div\");\n    bodyContainerDiv.append(projectsDivBody, inputBody);\n    toDoContainer.appendChild(bodyContainerDiv);\n\n    // Due date, priority and checklist\n\n    // Date and priority container\n\n    const datePriorityContainer = document.createElement(\"div\");\n    datePriorityContainer.classList.add(\"datePriorityContainer\");\n    toDoContainer.appendChild(datePriorityContainer);\n\n    const dueDateInput = document.createElement(\"input\");\n    dueDateInput.type = \"date\";\n    dueDateInput.classList.add(\"date\");\n    dueDateInput.value = \"2023-01-01\"\n    datePriorityContainer.appendChild(dueDateInput);\n\n    const priorityInput = document.createElement(\"select\");\n    priorityInput.classList.add = \"priority\";\n    priorityInput.value = \"Low\"\n    datePriorityContainer.appendChild(priorityInput);\n\n    //Create array of options to be added\n    let optionsArray = [\"Low\",\"Middle\",\"High\",\"Urgent\"];\n\n\n    for (let i = 0; i < optionsArray.length; i++) {\n        let option = document.createElement(\"option\");\n        option.value = optionsArray[i];\n        option.text = optionsArray[i];\n        priorityInput.appendChild(option);\n    }\n\n    //Create and append the option\n// for (var i = 0; i < array.length; i++) {\n//     var option = document.createElement(\"option\");\n//     option.value = array[i];\n//     option.text = array[i];\n//     selectList.appendChild(option);\n// }\n\n\n\n\n//     <label for=\"start\">Start date:</label>\n\n// <input type=\"date\" id=\"start\" name=\"trip-start\"\n//        value=\"2018-07-22\"\n//        min=\"2018-01-01\" max=\"2018-12-31\"></input>\n\n\n    // Submit button\n\n    const submitBtn = document.createElement(\"button\");\n    submitBtn.textContent = \"Submit\";\n    submitBtn.classList.add(\"submitBtn\");\n    toDoContainer.appendChild(submitBtn);\n\n    submitBtn.addEventListener(\"click\", function () {\n        const titleValue = inputTitle.value\n        const bodyValue = inputBody.value\n        \n\n    })\n\n    createNewToDoBtn.addEventListener(\"click\", function () {\n        console.log(\"this is the title value \" + inputTitle.value);\n        console.log(\"this is the body value \" + inputBody.value);\n\n        (0,_new_to_do__WEBPACK_IMPORTED_MODULE_1__.newToDo)(inputTitle, inputBody, \"tomorrow\", \"High\", \"Done\");\n\n        console.log(_new_to_do__WEBPACK_IMPORTED_MODULE_1__.newToDo)\n        console.log(toDoArray)\n    \n\n    })\n\n\n    console.log(_new_to_do__WEBPACK_IMPORTED_MODULE_1__.newToDo)\n}\n\n//# sourceURL=webpack://todo-list/./src/default-to-do.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blank_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-to-do */ \"./src/blank-to-do.js\");\n/* harmony import */ var _default_to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-to-do */ \"./src/default-to-do.js\");\n/* harmony import */ var _new_to_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-to-do */ \"./src/new-to-do.js\");\n\n\n\n\n(0,_blank_to_do__WEBPACK_IMPORTED_MODULE_0__.blankToDo)();\n\n(0,_default_to_do__WEBPACK_IMPORTED_MODULE_1__.defaultToDo)();\n\n\n\nconst contentDiv = document.getElementById(\"main-content\")\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/new-to-do.js":
/*!**************************!*\
  !*** ./src/new-to-do.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newToDo\": () => (/* binding */ newToDo)\n/* harmony export */ });\n/* harmony import */ var _default_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-to-do */ \"./src/default-to-do.js\");\n\n\nlet toDoArray = [];\n\n\n//New ToDo factory\n\nconst newToDo = (name) => {\n    const getNewToDo = (Title, Description, DueDate, Priority, CheckList) => {\n        Title\n        Description\n        DueDate\n        Priority\n        CheckList\n        \n    };\n    \n    \n    const changeTitle = () => {\n        getNewToDo.Title = newTitle;\n    }\n\n    const changeDescription = (Description) => {\n        return getNewToDo.Description = Description;\n        \n    }\n\n    const changeDueDate = (DueDate) => {\n        return getNewToDo.DueDate = DueDate;\n    }\n\n    const changePriority = (Priority) => {\n        return getNewToDo.Priority;\n    }\n\n    const changeCheckList = (CheckList) => {\n        return getNewToDo.CheckList;\n    }\n\n    const delTask = (title) => {\n        const deletion = newToDo.tasks.splice(\n            newToDo.tasks.findIndex((task) => task.title == title), 1);\n            return deletion;\n            \n    }\n\n\n    return \n        changeTitle,\n        changeDescription,\n        changeDueDate,\n        changePriority,\n        changeCheckList\n    \n\n    \n //TODO: Test factories and remaining elements.   \n\n    \n}\n\n// Create constructor or class here\n\n//# sourceURL=webpack://todo-list/./src/new-to-do.js?");

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