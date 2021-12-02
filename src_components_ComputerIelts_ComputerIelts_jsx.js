"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhope"] = self["webpackChunkhope"] || []).push([["src_components_ComputerIelts_ComputerIelts_jsx"],{

/***/ "./node_modules/@mui/icons-material/Done.js":
/*!**************************************************!*\
  !*** ./node_modules/@mui/icons-material/Done.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@mui/icons-material/utils/createSvgIcon.js\"));\n\nvar _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)(\"path\", {\n  d: \"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"\n}), 'Done');\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://hope/./node_modules/@mui/icons-material/Done.js?");

/***/ }),

/***/ "./src/common/Card.jsx":
/*!*****************************!*\
  !*** ./src/common/Card.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction Card(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-container\"\n  }, props.children));\n}\n\n//# sourceURL=webpack://hope/./src/common/Card.jsx?");

/***/ }),

/***/ "./src/components/ComputerIelts/ComputerIelts.jsx":
/*!********************************************************!*\
  !*** ./src/components/ComputerIelts/ComputerIelts.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ComputerIelts)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var common_Card_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/Card.jsx */ \"./src/common/Card.jsx\");\n/* harmony import */ var components_ComputerIelts_Introduction_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ComputerIelts/Introduction.jsx */ \"./src/components/ComputerIelts/Introduction.jsx\");\n/* harmony import */ var components_ComputerIelts_Frequency_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ComputerIelts/Frequency.jsx */ \"./src/components/ComputerIelts/Frequency.jsx\");\n\n\n\n\nfunction ComputerIelts(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      padding: '3rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ComputerIelts_Introduction_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ComputerIelts_Frequency_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n}\n\n//# sourceURL=webpack://hope/./src/components/ComputerIelts/ComputerIelts.jsx?");

/***/ }),

/***/ "./src/components/ComputerIelts/Frequency.jsx":
/*!****************************************************!*\
  !*** ./src/components/ComputerIelts/Frequency.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Frequency)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var images_frequency_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/frequency.jpg */ \"./src/images/frequency.jpg\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n\n\n\nfunction Frequency() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    style: {\n      height: '100%',\n      width: '50%'\n    },\n    src: images_frequency_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      flexGrow: 1,\n      flexDirection: \"column\",\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: \"flex-start\",\n      paddingLeft: '25px',\n      paddingRight: '25px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      fontSize: '2.5em'\n    }\n  }, `Computer-delivered IELTS is available 3 times a day, 7 days a week`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      paddingBottom: '20px'\n    }\n  }, `For almost 30 years, IELTS has been a paper-based English test that people have used to achieve their work, study and migration dreams. But you asked for more choice – and we’ve listened. Meet computer-delivered IELTS: the same IELTS test you know, delivered via computer, with multiple test sessions a day and fast results.`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      verticalAlign: 'middle',\n      paddingRight: '5px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, `Results in 2-5 days`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      verticalAlign: 'middle',\n      paddingRight: '5px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, `Testing up to 7 days a week`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      verticalAlign: 'middle',\n      paddingRight: '5px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, `Free IELTS Masterclass`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      verticalAlign: 'middle',\n      paddingRight: '5px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, `Free computer-delivered IELTS practice test`))));\n}\n\n//# sourceURL=webpack://hope/./src/components/ComputerIelts/Frequency.jsx?");

/***/ }),

/***/ "./src/components/ComputerIelts/Introduction.jsx":
/*!*******************************************************!*\
  !*** ./src/components/ComputerIelts/Introduction.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Introduction)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var images_comp_ielts_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/comp-ielts.jpg */ \"./src/images/comp-ielts.jpg\");\n\n\nfunction Introduction() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      flexGrow: 2,\n      flexDirection: \"column\",\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: \"center\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      fontSize: '2.5em'\n    }\n  }, `Take IELTS on computer`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, `Results in 2-5 days. Now available in India`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      flewGrow: 1,\n      justifyContent: \"flex-end\",\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    style: {\n      height: '100%',\n      width: '80%',\n      objectFit: 'cover'\n    },\n    src: images_comp_ielts_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  })));\n}\n\n//# sourceURL=webpack://hope/./src/components/ComputerIelts/Introduction.jsx?");

/***/ }),

/***/ "./src/images/comp-ielts.jpg":
/*!***********************************!*\
  !*** ./src/images/comp-ielts.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"56e86296d90f037b1f4632aabae6ccac.jpg\");\n\n//# sourceURL=webpack://hope/./src/images/comp-ielts.jpg?");

/***/ }),

/***/ "./src/images/frequency.jpg":
/*!**********************************!*\
  !*** ./src/images/frequency.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4b665cdcafd2129d3ac1a130fc4b7876.jpg\");\n\n//# sourceURL=webpack://hope/./src/images/frequency.jpg?");

/***/ })

}]);