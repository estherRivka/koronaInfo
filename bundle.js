/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("﻿const helloTitle = document.createElement('h2');\r\nhelloTitle.innerText = 'Hello';\r\ndocument.body.appendChild(helloTitle);\r\nlet dataObj={\r\n    columnNames : [\"Start Date\",\"End Date\", \"City\",\"Location\"],\r\n    locations:[],\r\n};\r\ndataObj.locations.push([1, \"John Hammond\", \"United States\"]);\r\ndataObj.locations.push([2, \"Mudassar Khan\", \"India\"]);\r\ndataObj.locations.push([3, \"Suzanne Mathews\", \"France\"]);\r\ndataObj.locations.push([4, \"Robert Schidner\", \"Russia\"]);\r\ndocument.getElementById(\"generateTable\").addEventListener(\"click\",alert(\"aa\"));\r\nfunction GenerateTable() {\r\n    //Build an array containing Customer records.\r\n   \r\n\r\n    //Create a HTML Table element.\r\n    var table = document.createElement(\"TABLE\");\r\n    table.border = \"1\";\r\n\r\n    //Get the count of columns.\r\n    var columnCount = dataObj.columnNames.length;\r\n\r\n    //Add the header row.\r\n    var row = table.insertRow(-1);\r\n    for (let i = 0; i < columnCount; i++) {\r\n        var headerCell = document.createElement(\"TH\");\r\n        headerCell.innerHTML = dataObj.columnNames[i];\r\n        row.appendChild(headerCell);\r\n    }\r\n\r\n    //Add the data rows.\r\n    for (let i = 1; i < dataObj.locations.length; i++) {\r\n        row = table.insertRow(-1);\r\n        for (var j = 0; j < columnCount; j++) {\r\n            var cell = row.insertCell(-1);\r\n            cell.innerHTML = customers[i][j];\r\n        }\r\n    }\r\n\r\n    var dvTable = document.getElementById(\"dvTable\");\r\n    dvTable.innerHTML = \"\";\r\n    dvTable.appendChild(table);\r\n}\r\n//add event listner\r\n// cell.dataset.id = count;\r\n\r\n//   // Click listener\r\n//   cell.addEventListener(\"click\", function(){\r\n//     // Retrieve attached custom data id\r\n//     console.log(this.dataset.id); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2NvbnN0IGhlbGxvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5oZWxsb1RpdGxlLmlubmVyVGV4dCA9ICdIZWxsbyc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVsbG9UaXRsZSk7XHJcbmxldCBkYXRhT2JqPXtcclxuICAgIGNvbHVtbk5hbWVzIDogW1wiU3RhcnQgRGF0ZVwiLFwiRW5kIERhdGVcIiwgXCJDaXR5XCIsXCJMb2NhdGlvblwiXSxcclxuICAgIGxvY2F0aW9uczpbXSxcclxufTtcclxuZGF0YU9iai5sb2NhdGlvbnMucHVzaChbMSwgXCJKb2huIEhhbW1vbmRcIiwgXCJVbml0ZWQgU3RhdGVzXCJdKTtcclxuZGF0YU9iai5sb2NhdGlvbnMucHVzaChbMiwgXCJNdWRhc3NhciBLaGFuXCIsIFwiSW5kaWFcIl0pO1xyXG5kYXRhT2JqLmxvY2F0aW9ucy5wdXNoKFszLCBcIlN1emFubmUgTWF0aGV3c1wiLCBcIkZyYW5jZVwiXSk7XHJcbmRhdGFPYmoubG9jYXRpb25zLnB1c2goWzQsIFwiUm9iZXJ0IFNjaGlkbmVyXCIsIFwiUnVzc2lhXCJdKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmF0ZVRhYmxlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFsZXJ0KFwiYWFcIikpO1xyXG5mdW5jdGlvbiBHZW5lcmF0ZVRhYmxlKCkge1xyXG4gICAgLy9CdWlsZCBhbiBhcnJheSBjb250YWluaW5nIEN1c3RvbWVyIHJlY29yZHMuXHJcbiAgIFxyXG5cclxuICAgIC8vQ3JlYXRlIGEgSFRNTCBUYWJsZSBlbGVtZW50LlxyXG4gICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG4gICAgdGFibGUuYm9yZGVyID0gXCIxXCI7XHJcblxyXG4gICAgLy9HZXQgdGhlIGNvdW50IG9mIGNvbHVtbnMuXHJcbiAgICB2YXIgY29sdW1uQ291bnQgPSBkYXRhT2JqLmNvbHVtbk5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAvL0FkZCB0aGUgaGVhZGVyIHJvdy5cclxuICAgIHZhciByb3cgPSB0YWJsZS5pbnNlcnRSb3coLTEpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEhcIik7XHJcbiAgICAgICAgaGVhZGVyQ2VsbC5pbm5lckhUTUwgPSBkYXRhT2JqLmNvbHVtbk5hbWVzW2ldO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChoZWFkZXJDZWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0FkZCB0aGUgZGF0YSByb3dzLlxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXRhT2JqLmxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJvdyA9IHRhYmxlLmluc2VydFJvdygtMSk7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb2x1bW5Db3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBjZWxsID0gcm93Lmluc2VydENlbGwoLTEpO1xyXG4gICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IGN1c3RvbWVyc1tpXVtqXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGR2VGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR2VGFibGVcIik7XHJcbiAgICBkdlRhYmxlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBkdlRhYmxlLmFwcGVuZENoaWxkKHRhYmxlKTtcclxufVxyXG4vL2FkZCBldmVudCBsaXN0bmVyXHJcbi8vIGNlbGwuZGF0YXNldC5pZCA9IGNvdW50O1xyXG5cclxuLy8gICAvLyBDbGljayBsaXN0ZW5lclxyXG4vLyAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAvLyBSZXRyaWV2ZSBhdHRhY2hlZCBjdXN0b20gZGF0YSBpZFxyXG4vLyAgICAgY29uc29sZS5sb2codGhpcy5kYXRhc2V0LmlkKTsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });