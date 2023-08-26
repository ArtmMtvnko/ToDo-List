/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus,\na:active {\n  outline: none;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 16px;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul, li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 0 40px;\n  background-color: #bcedbc;\n  font-family: \"Black Ops One\", cursive;\n}\n.header svg {\n  transform: translateY(-5px);\n  font-size: 42px;\n}\n.header h1 {\n  font-size: 32px;\n  margin: 0 20px;\n}\n\n.aside {\n  margin: 0 30px;\n}\n\n.aside__input {\n  display: flex;\n  margin: 0 0 30px 0;\n}\n.aside__input button {\n  margin: 0 0 0 20px;\n  padding: 10px 20px;\n  background-color: #97f697;\n  border-radius: 12px;\n  font-size: 16px;\n}\n\n.input-wrap {\n  position: relative;\n}\n.input-wrap label, .input-wrap input {\n  padding: 10px 20px;\n  font-size: 18px;\n}\n.input-wrap input {\n  border-top: 1px solid transparent;\n  border-left: 1px solid transparent;\n  border-right: 1px solid transparent;\n}\n.input-wrap input {\n  flex: 1;\n  border-bottom: 1px solid #000000;\n  background-color: transparent;\n  transition: 0.5s;\n}\n.input-wrap input:hover {\n  background-color: #e4e4e4;\n}\n.input-wrap input:focus {\n  border: 1px solid #4e864e;\n  background-color: transparent;\n}\n.input-wrap input:focus + label {\n  transform: translate(0, -28px);\n  margin: 10px 20px;\n  padding: 4px 5px;\n  border-radius: 5px;\n  background-color: #97f697;\n  color: #000;\n}\n.input-wrap input.contain-text {\n  border: 1px solid #4e864e;\n  background-color: transparent;\n}\n.input-wrap input.contain-text + label {\n  transform: translate(0, -28px);\n  margin: 10px 20px;\n  padding: 4px 5px;\n  border-radius: 5px;\n  background-color: #97f697;\n  color: #000;\n}\n.input-wrap label {\n  position: absolute;\n  left: 0px;\n  background-color: transparent;\n  color: #8a8a8a;\n  transform: translate(0, 5px);\n  transition: 0.7s;\n}\n\n.folder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n  padding: 15px 20px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.folder p {\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.folder img {\n  width: 20px;\n  cursor: pointer;\n  user-select: none;\n}\n.folder:hover {\n  background-color: #dfdfdf;\n}\n.folder.active {\n  background-color: #97f697;\n}\n\n.main {\n  display: grid;\n  grid-template: 1fr/1fr 2fr;\n  background-color: #f7f7f7;\n  padding: 50px;\n}\n\n.notes-wrap {\n  display: grid;\n  grid-template: minmax(50px, auto) 1fr/minmax(80px, 150px) minmax(200px, 1fr) minmax(80px, 100px);\n  height: 80vh;\n  overflow-y: scroll;\n}\n.notes-wrap .add-note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  background-color: #97f697;\n  font-size: 16px;\n}\n.notes-wrap .add-note svg {\n  margin: 0 10px 0 0;\n}\n.notes-wrap .add-note.inactive {\n  background-color: #c9f6c9;\n  color: #5b5b5b;\n  cursor: default;\n}\n.notes-wrap .add-note.inactive svg {\n  fill: #818181;\n}\n.notes-wrap input {\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  margin: 0 0 0 30px;\n  font-size: 20px;\n  padding: 0 20px;\n}\n.notes-wrap .search {\n  background-color: #97f697;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.notes {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  margin: 40px 0;\n}\n\n.notes__item {\n  display: grid;\n  grid-template: 50px auto/auto repeat(6, 1fr);\n  margin: 10px 0;\n  border-bottom: 1px solid #212121;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  overflow: hidden;\n  transition: 0.3s;\n}\n.notes__item.hidden {\n  grid-template: 50px 0px/auto repeat(6, 1fr);\n}\n.notes__item.hidden .notes__arrow-button {\n  transform: rotate(0deg);\n}\n.notes__item input {\n  align-self: center;\n  margin: 0 20px;\n}\n.notes__item .notes__title {\n  place-self: center;\n  font-size: 20px;\n  font-weight: 600;\n}\n.notes__item .notes__priority {\n  justify-self: end;\n  align-self: center;\n}\n.notes__item .notes__date {\n  justify-self: end;\n  align-self: center;\n}\n.notes__item img {\n  width: 20px;\n  cursor: pointer;\n  user-select: none;\n  justify-self: end;\n  align-self: center;\n}\n.notes__item .notes__arrow-button {\n  width: 30px;\n  transform: rotate(180deg);\n  transition: 0.3s;\n}\n.notes__item .notes__arrow-button {\n  justify-self: end;\n  align-self: center;\n  margin: 0 20px;\n}\n.notes__item .notes__description {\n  grid-column: 1/-1;\n  padding: 20px;\n  line-height: 1.4rem;\n  white-space: pre-wrap;\n  overflow: hidden;\n}\n.notes__item:hover {\n  background-color: #dfdfdf;\n}\n\n.radio-inputs {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 0.5rem;\n  background-color: #EEE;\n  box-sizing: border-box;\n  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);\n  padding: 0.25rem;\n  width: 300px;\n  font-size: 14px;\n  user-select: none;\n}\n\n.radio-inputs .radio {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.radio-inputs .radio input {\n  display: none;\n}\n\n.radio-inputs .radio .name {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  border: none;\n  padding: 0.5rem 0;\n  color: rgb(51, 65, 85);\n  transition: all 0.15s ease-in-out;\n}\n\n.radio-inputs .radio input:checked + .name {\n  background-color: #fff;\n  font-weight: 600;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.wrap {\n  display: grid;\n  grid-template: 1fr 9fr/1fr;\n  height: 100vh;\n}\n\n.pop-up {\n  position: absolute;\n  z-index: 10;\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3843137255);\n}\n\n.pop-up__body {\n  position: relative;\n  padding: 20px 40px;\n  background-color: #ebebeb;\n  border-radius: 28px;\n}\n.pop-up__body > img {\n  margin: 0;\n  padding: 0 5px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  width: 40px;\n  cursor: pointer;\n  fill: #181818;\n}\n.pop-up__body > img:hover {\n  background-color: #dedede;\n}\n.pop-up__body > * {\n  margin: 0 0 40px 0;\n}\n.pop-up__body p {\n  margin: 10px 0;\n  font-size: 20px;\n}\n\n.pop-up__description textarea, .pop-up__title input {\n  padding: 5px 10px;\n  font-size: 16px;\n}\n\n.pop-up__title input {\n  background-color: transparent;\n  border-bottom: 1px solid #000;\n}\n\n.pop-up__description textarea {\n  background-color: transparent;\n  border: 1px solid #000;\n  border-radius: 10px;\n  min-width: 340px;\n  max-width: 80vw;\n  min-height: 120px;\n  max-height: 40vh;\n}\n\n.pop-up__date input {\n  padding: 10px;\n  font-size: 16px;\n}\n\n.pop-up__cancel-button, .pop-up__add-button {\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 18px;\n  margin: 0;\n}\n\n.pop-up__add-button {\n  background-color: #97f697;\n}\n\n.pop-up__cancel-button {\n  background-color: #f69797;\n  float: right;\n}\n\n.aside__folders, .notes-wrap {\n  padding: 30px;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3411764706);\n  border-radius: 24px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/calendar-check.svg */ \"./src/assets/icons/calendar-check.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>ToDo</title>\\n    <link rel=\\\"shortcut icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/x-icon\\\"></head>\\n<body>\\n    <div class=\\\"wrap\\\">\\n        <header class=\\\"header\\\">\\n            <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" height=\\\"1em\\\" viewBox=\\\"0 0 448 512\\\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z\\\"/></svg>\\n            <h1>ToDo List</h1>\\n        </header>\\n        <main class=\\\"main\\\">\\n            <aside class=\\\"aside\\\">\\n                <div class=\\\"aside__input\\\">\\n                    <div class=\\\"input-wrap\\\">\\n                        <input id=\\\"folderName\\\" type=\\\"text\\\">\\n                        <label for=\\\"folderName\\\">Folder name</label>\\n                    </div>\\n                    <button id=\\\"createFolderBtn\\\">Create</button>\\n                </div>\\n                <div id=\\\"foldersList\\\" class=\\\"aside__folders\\\"></div>\\n            </aside>\\n            <section class=\\\"notes-wrap\\\">\\n                <button id=\\\"addNote\\\" class=\\\"add-note\\\">\\n                    <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" height=\\\"1em\\\" viewBox=\\\"0 0 448 512\\\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z\\\"/></svg>\\n                    Add\\n                </button>\\n                <input id=\\\"searchInput\\\" type=\\\"text\\\" placeholder=\\\"Search in notes\\\">\\n                <button id=\\\"searhBtn\\\" class=\\\"search\\\">\\n                    <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" height=\\\"1em\\\" viewBox=\\\"0 0 512 512\\\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\\\"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z\\\"/></svg>\\n                </button>\\n                <div id=\\\"notesList\\\" class=\\\"notes\\\"></div>\\n            </section>\\n        </main>\\n    </div>\\n</body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://todo-list/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNoteBtn: () => (/* binding */ addNoteBtn)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _scripts_folderInputAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/folderInputAnimation */ \"./src/scripts/folderInputAnimation.js\");\n/* harmony import */ var _scripts_folderInputAnimation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_folderInputAnimation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_folderImplementor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/folderImplementor */ \"./src/scripts/folderImplementor.js\");\n/* harmony import */ var _scripts_popUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/popUp */ \"./src/scripts/popUp.js\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/data */ \"./src/scripts/data.js\");\n/* harmony import */ var _scripts_saveData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/saveData */ \"./src/scripts/saveData.js\");\n/* harmony import */ var _scripts_setActiveClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/setActiveClass */ \"./src/scripts/setActiveClass.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.onload = () => _scripts_saveData__WEBPACK_IMPORTED_MODULE_6__.storage.loadSavedData()\n\nconst folderCreateBtn = document.querySelector('#createFolderBtn')\nconst folderInput = document.querySelector('#folderName')\n\nconst searchInput = document.querySelector('#searchInput')\nconst searchBtn = document.querySelector('#searhBtn')\n\nconst addNoteBtn = document.querySelector('#addNote')\naddNoteBtn.classList.add('inactive')\n\nfolderCreateBtn.addEventListener('click', () => {\n    const name = folderInput.value.trim()\n    if (name === '') return\n    \n    folderInput.value = ''\n    folderInput.classList.remove('contain-text')\n\n    const foldersObject = _scripts_folderImplementor__WEBPACK_IMPORTED_MODULE_3__.folders.createFolder(name)\n\n    _scripts_folderImplementor__WEBPACK_IMPORTED_MODULE_3__.folders.writeFolderToData(foldersObject.folderObject)\n\n    foldersObject.folderDOMNode.addEventListener('click', () => {\n        addNoteBtn.classList.remove('inactive')\n        \n        ;(0,_scripts_setActiveClass__WEBPACK_IMPORTED_MODULE_7__.setActiveClass)(foldersObject.folderDOMNode)\n\n        _scripts_folderImplementor__WEBPACK_IMPORTED_MODULE_3__.folders.showNotesInFolder()\n\n        console.log('DATA', _scripts_data__WEBPACK_IMPORTED_MODULE_5__.data)\n    })\n\n    _scripts_saveData__WEBPACK_IMPORTED_MODULE_6__.storage.updateData()\n\n    console.log('Folders', _scripts_folderImplementor__WEBPACK_IMPORTED_MODULE_3__.folders)\n})\n\naddNoteBtn.addEventListener('click', () => {\n    if (addNoteBtn.classList.contains('inactive')) return\n    \n    const popUp = (0,_scripts_popUp__WEBPACK_IMPORTED_MODULE_4__.createPopUp)()\n    popUp.show()\n})\n\nsearchBtn.addEventListener('click', () => {\n    _scripts_folderImplementor__WEBPACK_IMPORTED_MODULE_3__.folders.showNotesInFolder(searchInput.value)\n    searchInput.value = ''\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data)\n/* harmony export */ });\nconst data = {\n    folders: [],\n    setData(parsedData) {\n        parsedData.folders.forEach(folder => {\n            this.folders.push(folder)\n        })\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/scripts/data.js?");

/***/ }),

/***/ "./src/scripts/folderImplementor.js":
/*!******************************************!*\
  !*** ./src/scripts/folderImplementor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   folders: () => (/* binding */ folders)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_angle_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/angle-down.svg */ \"./src/assets/icons/angle-down.svg\");\n/* harmony import */ var _assets_icons_trash_can_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/trash-can.svg */ \"./src/assets/icons/trash-can.svg\");\n/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/edit.svg */ \"./src/assets/icons/edit.svg\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/scripts/data.js\");\n/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveData */ \"./src/scripts/saveData.js\");\n/* harmony import */ var _popUpForEditing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popUpForEditing */ \"./src/scripts/popUpForEditing.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n\n\n\n\n\n\nfunction folderImplementor() {\n    const folders = {\n        folders: []\n    }\n    return {\n        ...folders,\n        ...createFolderImplementor(folders),\n        ...addNoteToFolderImplementor(folders),\n        ...addNoteToDataImplementor(),\n        ...showNotesInFolderImplementor(folders)\n    }\n}\n\nfunction createFolderImplementor({folders}) {\n    return {\n        createFolder: (title, setID = null) => {\n            const folderList = document.querySelector('#foldersList')\n            const folder = document.createElement('div')\n            folder.classList.add('folder')\n\n            const folderName = document.createElement('p')\n            folderName.textContent = title\n            const bin = document.createElement('img')\n            bin.src = _assets_icons_trash_can_svg__WEBPACK_IMPORTED_MODULE_1__\n\n            folder.appendChild(folderName)\n            folder.appendChild(bin)\n\n            let ID\n\n            if (setID === null) {\n                ID = Math.floor(Math.random() * 10000000000)\n            } else {\n                ID = setID\n            }\n\n            folder.setAttribute('uniqe-id', ID)\n\n            folderList.appendChild(folder)\n\n            folders.push({\n                folderNode: folder,\n                notes: []\n            })\n\n            console.log(folders)\n\n            bin.addEventListener('click', () => {\n                setTimeout(() => _index__WEBPACK_IMPORTED_MODULE_6__.addNoteBtn.classList.add('inactive'), 0)\n                \n                const indexToRemoveNode = folders.findIndex(obj => {\n                    return obj.folderNode === folder\n                })\n\n                folders.splice(indexToRemoveNode, 1)\n                \n                console.log(folders)\n\n                folder.remove()\n\n                const idToRemove = parseInt(folder.getAttribute('uniqe-id'))\n\n                const indexToRemoveData =_data__WEBPACK_IMPORTED_MODULE_3__.data.folders.findIndex(folderObj => {\n                    return folderObj.ID === idToRemove\n                })\n\n                _data__WEBPACK_IMPORTED_MODULE_3__.data.folders.splice(indexToRemoveData, 1)\n\n                _saveData__WEBPACK_IMPORTED_MODULE_4__.storage.updateData()\n\n                const notesList = document.querySelector('#notesList')\n                notesList.innerHTML = ''\n            })\n\n            return {\n                folderDOMNode: folder,\n                folderObject: {\n                    title,\n                    ID,\n                    notes: []\n                }\n            }\n        },\n        writeFolderToData: (folderObj) => {\n            _data__WEBPACK_IMPORTED_MODULE_3__.data.folders.push(folderObj)\n            console.log('Data', _data__WEBPACK_IMPORTED_MODULE_3__.data)\n        }\n    }\n}\n\nfunction addNoteToFolderImplementor({folders}) {\n    return {\n        addNoteToFolder: (note, folderID) => {\n            const requiredFolder = folders.find(folder => {\n                const id = parseInt(folder.folderNode.getAttribute('uniqe-id'))\n                return folderID === id\n            })\n\n            const noteNode = document.createElement('div')\n            noteNode.classList.add('notes__item', 'hidden')\n            noteNode.setAttribute('uniqe-id', note.ID)\n            \n            // Checkbox\n            const checkboxInput = document.createElement('input')\n            checkboxInput.type = 'checkbox'\n\n            // Title\n            const titleParagraph = document.createElement('p')\n            titleParagraph.classList.add('notes__title')\n            titleParagraph.textContent = note.title\n\n            // Priority\n            const priorityParagraph = document.createElement('p')\n            priorityParagraph.classList.add('notes__priority')\n            priorityParagraph.textContent = note.priority\n\n            // Date\n            const dateParagraph = document.createElement('p')\n            dateParagraph.classList.add('notes__date')\n            dateParagraph.textContent = note.date\n            \n            // Delete Btn\n            const deleteBtn = document.createElement('img')\n            deleteBtn.src = _assets_icons_trash_can_svg__WEBPACK_IMPORTED_MODULE_1__\n            \n            deleteBtn.addEventListener('click', () => {\n                const requiredFolder = folders.find(folder => folder.folderNode.classList.contains('active'))\n                const indexToRemoveNode = requiredFolder.notes.findIndex(note => note === noteNode)\n                requiredFolder.notes.splice(indexToRemoveNode, 1)\n                noteNode.remove()\n                \n                const uniqeID = parseInt(requiredFolder.folderNode.getAttribute('uniqe-id'))\n                const noteUniqeId = parseInt(noteNode.getAttribute('uniqe-id'))\n                \n                const requiredFolderFromData = _data__WEBPACK_IMPORTED_MODULE_3__.data.folders.find(folderObj => folderObj.ID === uniqeID)\n                const indexToRemoveNodeFromData = requiredFolderFromData.notes.findIndex(note => note.ID === noteUniqeId)\n                requiredFolderFromData.notes.splice(indexToRemoveNodeFromData, 1)\n                _saveData__WEBPACK_IMPORTED_MODULE_4__.storage.updateData()\n            })\n            \n            // Arrow Button\n            const angleDownBtn = document.createElement('img')\n            angleDownBtn.classList.add('notes__arrow-button')\n            angleDownBtn.src = _assets_icons_angle_down_svg__WEBPACK_IMPORTED_MODULE_0__\n            \n            angleDownBtn.addEventListener('click', () => noteNode.classList.toggle('hidden'))\n            \n            // Description\n            const descriptionWrap = document.createElement('div')\n            descriptionWrap.classList.add('notes__description')\n            \n            const descriptionParagraph = document.createElement('p')\n            descriptionParagraph.textContent = note.description\n\n            // Edit Btn\n            const editBtn = document.createElement('img')\n            editBtn.src = _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__\n\n            editBtn.addEventListener('click', () => {\n                _popUpForEditing__WEBPACK_IMPORTED_MODULE_5__.popUpForEditing.createPopUpWindow(noteNode, {\n                    title: titleParagraph.textContent,\n                    description: descriptionParagraph.textContent,\n                    date: dateParagraph.textContent,\n                    isLow() {\n                        return priorityParagraph.textContent === 'Low' ? true : false\n                    },\n                    isMedium() {\n                        return priorityParagraph.textContent === 'Medium' ? true : false\n                    },\n                    isHigh() {\n                        return priorityParagraph.textContent === 'High' ? true : false\n                    }\n                })\n            })\n\n\n            // HERE !!!!!!!!!!!!\n\n            // Concatination\n            descriptionWrap.appendChild(descriptionParagraph)\n            \n            noteNode.append(checkboxInput, titleParagraph, priorityParagraph, dateParagraph, editBtn, deleteBtn, angleDownBtn, descriptionWrap)\n            \n            requiredFolder.notes.push(noteNode)\n        }\n    }\n}\n\nfunction addNoteToDataImplementor() {\n    return {\n        addNoteToData: (note, folderID) => {\n            const requiredFolder = _data__WEBPACK_IMPORTED_MODULE_3__.data.folders.find(folderObj => {\n                return folderObj.ID === folderID\n            })\n\n            requiredFolder.notes.push(note)\n        }\n    }\n}\n\nfunction showNotesInFolderImplementor({folders}) {\n    return {\n        showNotesInFolder: (filters = null) => {\n            const requiredFolderObj = folders.find(folder => {\n                return folder.folderNode.classList.contains('active')\n            })\n\n            if (requiredFolderObj === undefined) return\n\n            const notesList = document.querySelector('#notesList')\n\n            // while (notesList.firstChild) {\n            //     notesList.removeChild(notesList.firstChild)\n            // }\n            notesList.innerHTML = ''\n\n            if (filters !== null) {\n                const keyWord = filters.trim()\n\n                for (const note of requiredFolderObj.notes) {\n                    const title = note.querySelector('.notes__title')\n                    if (title.textContent.includes(keyWord)) {\n                        notesList.appendChild(note)\n                        continue\n                    }\n                    const description = note.querySelector('.notes__description').firstChild\n                    if (description.textContent.includes(keyWord)) {\n                        notesList.appendChild(note)\n                    }\n                }\n                \n                return\n            }\n\n            requiredFolderObj.notes.forEach(note => {\n                notesList.appendChild(note)\n            })\n        }\n    }\n}\n\nconst folders = folderImplementor()\n\n//# sourceURL=webpack://todo-list/./src/scripts/folderImplementor.js?");

/***/ }),

/***/ "./src/scripts/folderInputAnimation.js":
/*!*********************************************!*\
  !*** ./src/scripts/folderInputAnimation.js ***!
  \*********************************************/
/***/ (() => {

eval("const folderInput = document.querySelector('#folderName')\n\nfolderInput.addEventListener('blur', () => {\n    if (folderInput.value.trim() === '') {\n        folderInput.classList.remove('contain-text')\n        return\n    }\n    folderInput.classList.add('contain-text')\n})\n\n//# sourceURL=webpack://todo-list/./src/scripts/folderInputAnimation.js?");

/***/ }),

/***/ "./src/scripts/popUp.js":
/*!******************************!*\
  !*** ./src/scripts/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPopUp: () => (/* binding */ createPopUp),\n/* harmony export */   createRadioButtons: () => (/* binding */ createRadioButtons),\n/* harmony export */   priorityValue: () => (/* binding */ priorityValue)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_xmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/xmark.svg */ \"./src/assets/icons/xmark.svg\");\n/* harmony import */ var _folderImplementor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folderImplementor */ \"./src/scripts/folderImplementor.js\");\n/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveData */ \"./src/scripts/saveData.js\");\n\n\n\n\nfunction createPopUp(title = '', description = '', priority = 'low', date = 'No date') {\n    const params = {\n        title,\n        description,\n        priority,\n        date\n    }\n    return {\n        ...params,\n        ...showPopUp(params)\n    }\n}\n\nfunction showPopUp({title, description, priority, date}) {\n    return {\n        show: () => {\n            const windowWrap = document.querySelector('.wrap')\n            \n            const popUpWrap = document.createElement('div')\n            popUpWrap.classList.add('pop-up')\n            const popUp = document.createElement('div')\n            popUp.classList.add('pop-up__body')\n\n            // Img (x-mark)\n            const exitBtn = document.createElement('img')\n            exitBtn.src = _assets_icons_xmark_svg__WEBPACK_IMPORTED_MODULE_0__\n\n            exitBtn.addEventListener('click', () => popUpWrap.remove())\n\n            // Title\n            const titleWrap = document.createElement('div')\n            titleWrap.classList.add('pop-up__title')\n\n            const titleParagraph = document.createElement('p')\n            titleParagraph.textContent = 'Title'\n\n            const titleInput = document.createElement('input')\n            titleInput.type = 'text'\n            titleInput.placeholder = 'Your title'\n            titleInput.value = title\n\n            titleWrap.append(titleParagraph, titleInput)\n\n            // Description\n            const descriptionWrap = document.createElement('div')\n            descriptionWrap.classList.add('pop-up__description')\n\n            const descriptionParagraph = document.createElement('p')\n            descriptionParagraph.textContent = 'Description'\n\n            const descriptionTextArea = document.createElement('textarea')\n            descriptionTextArea.placeholder = 'Your description'\n            descriptionTextArea.cols = 30\n            descriptionTextArea.rows = 10\n            descriptionTextArea.value = description\n\n            descriptionWrap.append(descriptionParagraph, descriptionTextArea)\n\n            // Priority\n            const priorityWrap = document.createElement('div')\n            priorityWrap.classList.add('pop-up__priority')\n\n            const priorityParagraph = document.createElement('p')\n            priorityParagraph.textContent = 'Priority'\n\n            const radioBtnsWrap = document.createElement('div')\n            radioBtnsWrap.classList.add('radio-inputs')\n\n            const lowPriorityBtn = createRadioButtons('Low', true)\n            const mediumPriorityBtn = createRadioButtons('Medium')\n            const highPriorityBtn = createRadioButtons('High')\n\n            radioBtnsWrap.append(lowPriorityBtn, mediumPriorityBtn, highPriorityBtn)\n\n            priorityWrap.append(priorityParagraph, radioBtnsWrap)\n\n            // Date\n            const dateWrap = document.createElement('div')\n            dateWrap.classList.add('pop-up__date')\n\n            const dateParagraph = document.createElement('p')\n            dateParagraph.textContent = 'Date'\n\n            const dateInput = document.createElement('input')\n            dateInput.type = 'date'\n\n            dateWrap.append(dateParagraph, dateInput)\n\n            // Buttons\n            const applyButton = document.createElement('button')\n            applyButton.classList.add('pop-up__add-button')\n            applyButton.textContent = 'Apply'\n\n            const cancelButton = document.createElement('button')\n            cancelButton.classList.add('pop-up__cancel-button', 'close-pop-up')\n            cancelButton.textContent = 'Cancel'\n\n            applyButton.addEventListener('click', () => {\n                const $desiredFolder = document.querySelector('.folder.active')\n                const uniqeID = parseInt($desiredFolder.getAttribute('uniqe-id'))\n                const noteUniqeId = Math.floor(Math.random() * 10000000000)\n                \n                _folderImplementor__WEBPACK_IMPORTED_MODULE_1__.folders.addNoteToFolder({\n                    title: titleInput.value,\n                    description: descriptionTextArea.value,\n                    priority: priorityValue([lowPriorityBtn, mediumPriorityBtn, highPriorityBtn]),\n                    date: dateInput.value === '' ? 'No date' : dateInput.value,\n                    ID: noteUniqeId\n                }, uniqeID)\n\n                _folderImplementor__WEBPACK_IMPORTED_MODULE_1__.folders.addNoteToData({\n                    title: titleInput.value,\n                    description: descriptionTextArea.value,\n                    priority: priorityValue([lowPriorityBtn, mediumPriorityBtn, highPriorityBtn]),\n                    date: dateInput.value,\n                    ID: noteUniqeId\n                }, uniqeID)\n\n                _folderImplementor__WEBPACK_IMPORTED_MODULE_1__.folders.showNotesInFolder()\n                _saveData__WEBPACK_IMPORTED_MODULE_2__.storage.updateData()\n\n                popUpWrap.remove()\n            })\n\n            cancelButton.addEventListener('click', () => popUpWrap.remove())\n\n\n\n            popUp.append(exitBtn, titleWrap, descriptionWrap, priorityWrap, dateWrap, applyButton, cancelButton)\n            popUpWrap.appendChild(popUp)\n            windowWrap.appendChild(popUpWrap)\n        }\n    }\n}\n\nfunction createRadioButtons(text, checked = false) {\n    const label = document.createElement('label')\n    label.classList.add('radio')\n\n    const input = document.createElement('input')\n    input.type = 'radio'\n    input.name = 'radio'\n    \n    if (checked) input.setAttribute('checked', \"\")\n\n    const span = document.createElement('span')\n    span.classList.add('name')\n    span.textContent = text\n\n    label.append(input, span)\n\n    return label\n}\n\nfunction priorityValue(elements) {\n    return elements.find(elem => elem.firstChild.checked).textContent\n}\n\n//# sourceURL=webpack://todo-list/./src/scripts/popUp.js?");

/***/ }),

/***/ "./src/scripts/popUpForEditing.js":
/*!****************************************!*\
  !*** ./src/scripts/popUpForEditing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popUpForEditing: () => (/* binding */ popUpForEditing)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_xmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/xmark.svg */ \"./src/assets/icons/xmark.svg\");\n/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveData */ \"./src/scripts/saveData.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/scripts/data.js\");\n/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popUp */ \"./src/scripts/popUp.js\");\n\n\n\n\n\n\nfunction createPopUpForEditing() {\n    return {\n        ...createPopUpWindowImplementor()\n    }\n}\n\nfunction createPopUpWindowImplementor() {\n    return {\n        createPopUpWindow: (noteNode, params) => {\n            const windowWrap = document.querySelector('.wrap')\n            \n            const popUpWrap = document.createElement('div')\n            popUpWrap.classList.add('pop-up')\n            const popUp = document.createElement('div')\n            popUp.classList.add('pop-up__body')\n\n            // Img (x-mark)\n            const exitBtn = document.createElement('img')\n            exitBtn.src = _assets_icons_xmark_svg__WEBPACK_IMPORTED_MODULE_0__\n\n            exitBtn.addEventListener('click', () => popUpWrap.remove())\n\n            // Title\n            const titleWrap = document.createElement('div')\n            titleWrap.classList.add('pop-up__title')\n\n            const titleParagraph = document.createElement('p')\n            titleParagraph.textContent = 'Title'\n\n            const titleInput = document.createElement('input')\n            titleInput.type = 'text'\n            titleInput.placeholder = 'Your title'\n            titleInput.value = params.title\n\n            titleWrap.append(titleParagraph, titleInput)\n\n            // Description\n            const descriptionWrap = document.createElement('div')\n            descriptionWrap.classList.add('pop-up__description')\n\n            const descriptionParagraph = document.createElement('p')\n            descriptionParagraph.textContent = 'Description'\n\n            const descriptionTextArea = document.createElement('textarea')\n            descriptionTextArea.placeholder = 'Your description'\n            descriptionTextArea.cols = 30\n            descriptionTextArea.rows = 10\n            descriptionTextArea.value = params.description\n\n            descriptionWrap.append(descriptionParagraph, descriptionTextArea)\n\n            // Priority\n            const priorityWrap = document.createElement('div')\n            priorityWrap.classList.add('pop-up__priority')\n\n            const priorityParagraph = document.createElement('p')\n            priorityParagraph.textContent = 'Priority'\n\n            const radioBtnsWrap = document.createElement('div')\n            radioBtnsWrap.classList.add('radio-inputs')\n\n            const lowPriorityBtn = (0,_popUp__WEBPACK_IMPORTED_MODULE_3__.createRadioButtons)('Low', params.isLow())\n            const mediumPriorityBtn = (0,_popUp__WEBPACK_IMPORTED_MODULE_3__.createRadioButtons)('Medium', params.isMedium())\n            const highPriorityBtn = (0,_popUp__WEBPACK_IMPORTED_MODULE_3__.createRadioButtons)('High', params.isHigh())\n\n            radioBtnsWrap.append(lowPriorityBtn, mediumPriorityBtn, highPriorityBtn)\n\n            priorityWrap.append(priorityParagraph, radioBtnsWrap)\n\n            // Date\n            const dateWrap = document.createElement('div')\n            dateWrap.classList.add('pop-up__date')\n\n            const dateParagraph = document.createElement('p')\n            dateParagraph.textContent = 'Date'\n\n            const dateInput = document.createElement('input')\n            dateInput.type = 'date'\n            dateInput.value = params.date\n\n            dateWrap.append(dateParagraph, dateInput)\n\n            // Buttons\n            const applyButton = document.createElement('button')\n            applyButton.classList.add('pop-up__add-button')\n            applyButton.textContent = 'Apply'\n\n            const cancelButton = document.createElement('button')\n            cancelButton.classList.add('pop-up__cancel-button', 'close-pop-up')\n            cancelButton.textContent = 'Cancel'\n\n            applyButton.addEventListener('click', () => {\n                debugger\n                const priorityToWrite = (0,_popUp__WEBPACK_IMPORTED_MODULE_3__.priorityValue)([lowPriorityBtn, mediumPriorityBtn, highPriorityBtn])\n                \n                noteNode.querySelector('.notes__title').textContent = titleInput.value\n                noteNode.querySelector('.notes__priority').textContent = priorityToWrite\n                noteNode.querySelector('.notes__date').textContent = dateInput.value\n                noteNode.querySelector('.notes__description').firstChild.textContent = descriptionTextArea.value\n\n                const currentFolderID = parseInt(document.querySelector('.folder.active').getAttribute('uniqe-id'))\n                const currentNoteID = parseInt(noteNode.getAttribute('uniqe-id'))\n\n                const requiredFolder = _data__WEBPACK_IMPORTED_MODULE_2__.data.folders.find(folderObj => folderObj.ID === currentFolderID)\n                const requiredNote = requiredFolder.notes.find(note => note.ID === currentNoteID)\n                requiredNote.title = titleInput.value\n                requiredNote.description = descriptionTextArea.value\n                requiredNote.priority = priorityToWrite\n                requiredNote.date = dateInput.value\n\n                _saveData__WEBPACK_IMPORTED_MODULE_1__.storage.updateData()\n                popUpWrap.remove()\n            })\n\n            cancelButton.addEventListener('click', () => popUpWrap.remove())\n\n\n\n            popUp.append(exitBtn, titleWrap, descriptionWrap, priorityWrap, dateWrap, applyButton, cancelButton)\n            popUpWrap.appendChild(popUp)\n            windowWrap.appendChild(popUpWrap)\n        }\n    }\n}\n\nconst popUpForEditing = createPopUpForEditing()\n\n//# sourceURL=webpack://todo-list/./src/scripts/popUpForEditing.js?");

/***/ }),

/***/ "./src/scripts/saveData.js":
/*!*********************************!*\
  !*** ./src/scripts/saveData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/scripts/data.js\");\n/* harmony import */ var _folderImplementor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folderImplementor */ \"./src/scripts/folderImplementor.js\");\n/* harmony import */ var _setActiveClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setActiveClass */ \"./src/scripts/setActiveClass.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n\n\nfunction saveData() {\n    return {\n        ...addToStorageImplementor(),\n        ...loadSavedDataImplementor()\n    }\n}\n\nfunction addToStorageImplementor() {\n    return {\n        updateData: () => {\n            localStorage.removeItem('data')\n            \n            const dataStorage = JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.data)\n            localStorage.setItem('data', dataStorage)\n        }\n    }\n}\n\nfunction loadSavedDataImplementor() {\n    return {\n        loadSavedData: () => {\n            _data__WEBPACK_IMPORTED_MODULE_0__.data.setData(JSON.parse(localStorage.getItem('data')))\n            \n            _data__WEBPACK_IMPORTED_MODULE_0__.data.folders.forEach(folderObj => {\n                const foldersObject = _folderImplementor__WEBPACK_IMPORTED_MODULE_1__.folders.createFolder(folderObj.title, folderObj.ID)\n\n                foldersObject.folderDOMNode.addEventListener('click', () => {\n                    _index__WEBPACK_IMPORTED_MODULE_3__.addNoteBtn.classList.remove('inactive')\n        \n                    ;(0,_setActiveClass__WEBPACK_IMPORTED_MODULE_2__.setActiveClass)(foldersObject.folderDOMNode)\n            \n                    _folderImplementor__WEBPACK_IMPORTED_MODULE_1__.folders.showNotesInFolder()\n            \n                    console.log('DATA', _data__WEBPACK_IMPORTED_MODULE_0__.data)\n                })\n\n                folderObj.notes.forEach(note => {\n                    _folderImplementor__WEBPACK_IMPORTED_MODULE_1__.folders.addNoteToFolder({\n                        title: note.title,\n                        description: note.description,\n                        priority: note.priority,\n                        date: note.date === '' ? 'No date' : note.date,\n                        ID: note.ID\n                    }, folderObj.ID)\n                })\n\n            })\n\n            console.log('FOLDERS', _folderImplementor__WEBPACK_IMPORTED_MODULE_1__.folders)\n        }\n    }\n}\n\nconst storage = saveData()\n\n//# sourceURL=webpack://todo-list/./src/scripts/saveData.js?");

/***/ }),

/***/ "./src/scripts/setActiveClass.js":
/*!***************************************!*\
  !*** ./src/scripts/setActiveClass.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setActiveClass: () => (/* binding */ setActiveClass)\n/* harmony export */ });\n/* harmony import */ var _folderImplementor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderImplementor */ \"./src/scripts/folderImplementor.js\");\n\n\nfunction setActiveClass(element) {\n    _folderImplementor__WEBPACK_IMPORTED_MODULE_0__.folders.folders.forEach(obj => {\n        obj.folderNode.classList.remove('active')\n\n        element.classList.add('active')\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/scripts/setActiveClass.js?");

/***/ }),

/***/ "./src/assets/icons/angle-down.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/angle-down.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/angle-down.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/angle-down.svg?");

/***/ }),

/***/ "./src/assets/icons/calendar-check.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/calendar-check.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/calendar-check.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/calendar-check.svg?");

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/edit.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/edit.svg?");

/***/ }),

/***/ "./src/assets/icons/trash-can.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/trash-can.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/trash-can.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/trash-can.svg?");

/***/ }),

/***/ "./src/assets/icons/xmark.svg":
/*!************************************!*\
  !*** ./src/assets/icons/xmark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/xmark.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/xmark.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;