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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Point */ \"./src/js/game/Point.js\");\n/* harmony import */ var _game_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/Hero */ \"./src/js/game/Hero.js\");\n\n\n\n\nwindow.addEventListener('load', function (event) {\n  var point = new _game_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 2);\n  var hero = new _game_Hero__WEBPACK_IMPORTED_MODULE_1__[\"default\"](point);\n  var result = \"\";\n  result = result + \"Hero is at (\".concat(hero.getX(), \", \").concat(hero.getY(), \")\") + '\\n';\n  hero.moveLeft();\n  result = result + \"Hero moved left\" + '\\n';\n  result = result + \"Hero is at (\".concat(hero.getX(), \", \").concat(hero.getY(), \")\") + '\\n';\n  hero.moveRight();\n  result = result + \"Hero moved right\" + '\\n';\n  result = result + \"Hero is at (\".concat(hero.getX(), \", \").concat(hero.getY(), \")\") + '\\n';\n  hero.moveUp();\n  result = result + \"Hero moved up\" + '\\n';\n  result = result + \"Hero is at (\".concat(hero.getX(), \", \").concat(hero.getY(), \")\") + '\\n';\n  hero.moveDown();\n  result = result + \"Hero moved down\" + '\\n';\n  result = result + \"Hero is at (\".concat(hero.getX(), \", \").concat(hero.getY(), \")\") + '\\n';\n  var preElement = document.createElement('pre');\n  var textNode = document.createTextNode(result);\n  preElement.appendChild(textNode);\n  document.getElementById('output').appendChild(preElement);\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/game/Hero.js":
/*!*****************************!*\
  !*** ./src/js/game/Hero.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hero)\n/* harmony export */ });\n/* harmony import */ var _WereldObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WereldObject */ \"./src/js/game/WereldObject.js\");\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Hero = /*#__PURE__*/function (_WereldObject) {\n  _inherits(Hero, _WereldObject);\n\n  var _super = _createSuper(Hero);\n\n  function Hero(location) {\n    _classCallCheck(this, Hero);\n\n    return _super.call(this, location);\n  }\n\n  _createClass(Hero, [{\n    key: \"moveUp\",\n    value: function moveUp() {\n      this.setY(this.getY() + 1);\n    }\n  }, {\n    key: \"moveDown\",\n    value: function moveDown() {\n      this.setY(this.getY() - 1);\n    }\n  }, {\n    key: \"moveRight\",\n    value: function moveRight() {\n      this.setX(this.getX() + 1);\n    }\n  }, {\n    key: \"moveLeft\",\n    value: function moveLeft() {\n      this.setX(this.getX() - 1);\n    }\n  }]);\n\n  return Hero;\n}(_WereldObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/game/Hero.js?");

/***/ }),

/***/ "./src/js/game/Point.js":
/*!******************************!*\
  !*** ./src/js/game/Point.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Point)\n/* harmony export */ });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Point = /*#__PURE__*/function () {\n  function Point(x, y) {\n    _classCallCheck(this, Point);\n\n    if (typeof x != 'number' || typeof y != 'number') {\n      throw new Error(\"Parameter is not a number!\");\n    }\n\n    this._x = x;\n    this._y = y;\n  }\n\n  _createClass(Point, [{\n    key: \"x\",\n    get: function get() {\n      return this._x;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this._y;\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"(\".concat(this._x, \",\").concat(this._y, \")\");\n    }\n  }]);\n\n  return Point;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/game/Point.js?");

/***/ }),

/***/ "./src/js/game/WereldObject.js":
/*!*************************************!*\
  !*** ./src/js/game/WereldObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WereldObject)\n/* harmony export */ });\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./src/js/game/Point.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\n\n\nvar _location = /*#__PURE__*/new WeakMap();\n\nvar WereldObject = /*#__PURE__*/function () {\n  function WereldObject(location) {\n    _classCallCheck(this, WereldObject);\n\n    _classPrivateFieldInitSpec(this, _location, {\n      writable: true,\n      value: void 0\n    });\n\n    if (!(location instanceof _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n      throw new Error(\"Parameter is not a point\");\n    }\n\n    _classPrivateFieldSet(this, _location, new _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](location.x, location.y));\n  }\n\n  _createClass(WereldObject, [{\n    key: \"getX\",\n    value: function getX() {\n      return _classPrivateFieldGet(this, _location).x;\n    }\n  }, {\n    key: \"getY\",\n    value: function getY() {\n      return _classPrivateFieldGet(this, _location).y;\n    }\n  }, {\n    key: \"setX\",\n    value: function setX(x) {\n      _classPrivateFieldSet(this, _location, new _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, this.getY()));\n    }\n  }, {\n    key: \"setY\",\n    value: function setY(y) {\n      _classPrivateFieldSet(this, _location, new _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getX(), y));\n    }\n  }]);\n\n  return WereldObject;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/game/WereldObject.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;