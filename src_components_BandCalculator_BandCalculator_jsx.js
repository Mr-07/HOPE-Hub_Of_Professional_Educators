"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhope"] = self["webpackChunkhope"] || []).push([["src_components_BandCalculator_BandCalculator_jsx"],{

/***/ "./src/components/BandCalculator/BandCalculator.jsx":
/*!**********************************************************!*\
  !*** ./src/components/BandCalculator/BandCalculator.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BandCalculator)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var common_utilities_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/utilities.jsx */ \"./src/common/utilities.jsx\");\n\n\n\nfunction BandCalculator() {\n  const [listeningScore, setListeningScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [readingScore, setReadingScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [speakingScore, setSpeakingScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [writingScore, setWritingScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [scoreObj, setScoreObj] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,common_utilities_jsx__WEBPACK_IMPORTED_MODULE_1__.getScoresInBandObj)());\n\n  const isValid = (score, scoreType) => {\n    if (!(score >= 0 && score <= 40) || score == '') {\n      document.getElementById(scoreType).classList.add('error');\n      return false;\n    } else {\n      document.getElementById(scoreType).classList.remove('error');\n      return true;\n    }\n  };\n\n  const calBand = (score, scoreType) => {\n    if (isValid(score, scoreType) === false) {\n      return false;\n    }\n\n    const ref = parseFloat((score / 4.4).toString()).toFixed(2);\n    return ref * 100 % 100 > 75 ? Math.ceil(ref) : Math.floor(ref);\n  };\n\n  const calculateBand = () => {\n    const obj = {};\n\n    for (const key in scoreObj) {\n      const scoreType = key.replace('InBand', '');\n\n      const score = (() => {\n        switch (scoreType) {\n          case 'listeningScore':\n            return calBand(listeningScore, scoreType);\n\n          case 'readingScore':\n            return calBand(readingScore, scoreType);\n\n          case 'speakingScore':\n            return calBand(speakingScore, scoreType);\n\n          default:\n            return calBand(writingScore, scoreType);\n        }\n      })();\n\n      if (score === false) {\n        alert('Invalid Score Entered for ' + scoreType);\n        return;\n      }\n\n      obj[key] = score;\n    }\n\n    setScoreObj(obj);\n  };\n\n  const resetScore = () => {\n    setListeningScore(0);\n    setReadingScore(0);\n    setSpeakingScore(0);\n    setWritingScore(0);\n    setScoreObj((0,common_utilities_jsx__WEBPACK_IMPORTED_MODULE_1__.getScoresInBandObj)());\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      position: 'relative',\n      width: '85%',\n      top: '130px',\n      left: '5%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    striped: true,\n    bordered: true,\n    hover: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n    colSpan: \"3\",\n    style: {\n      backgroundColor: 'lightgray'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Band Calculator\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", {\n    style: {\n      width: '30%'\n    }\n  }, \"Number /40\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", null, \"IELTS Band\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Listening Score\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    id: \"listeningScore\",\n    type: \"number\",\n    value: listeningScore,\n    onChange: e => {\n      setListeningScore(e.target.value);\n    },\n    onBlur: e => {\n      isValid(e.target.value, 'listeningScore');\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, scoreObj['listeningScoreInBand'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Reading Score\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    id: \"readingScore\",\n    type: \"number\",\n    value: readingScore,\n    onChange: e => {\n      setReadingScore(e.target.value);\n    },\n    onBlur: e => {\n      isValid(e.target.value, 'readingScore');\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, scoreObj['readingScoreInBand'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Writing Score\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    id: \"writingScore\",\n    type: \"number\",\n    value: writingScore,\n    onChange: e => {\n      setWritingScore(e.target.value);\n    },\n    onBlur: e => {\n      isValid(e.target.value, 'writingScore');\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, scoreObj['writingScoreInBand'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Speaking Score\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    id: \"speakingScore\",\n    type: \"number\",\n    value: speakingScore,\n    onChange: e => {\n      setSpeakingScore(e.target.value);\n    },\n    onBlur: e => {\n      isValid(e.target.value, 'speakingScore');\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, scoreObj['speakingScoreInBand'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", {\n    colSpan: \"3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: calculateBand,\n    style: {\n      padding: '5px',\n      marginRight: '5px'\n    }\n  }, \"Calculate Band Score\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: resetScore,\n    style: {\n      padding: '5px'\n    }\n  }, \"Reset Score\"))))));\n}\n\n//# sourceURL=webpack://hope/./src/components/BandCalculator/BandCalculator.jsx?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Table.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Table.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nconst Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  bsPrefix,\n  className,\n  striped,\n  bordered,\n  borderless,\n  hover,\n  size,\n  variant,\n  responsive,\n  ...props\n}, ref) => {\n  const decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'table');\n  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-striped`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);\n\n  const table = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"table\", { ...props,\n    className: classes,\n    ref: ref\n  });\n\n  if (responsive) {\n    let responsiveClass = `${decoratedBsPrefix}-responsive`;\n\n    if (typeof responsive === 'string') {\n      responsiveClass = `${responsiveClass}-${responsive}`;\n    }\n\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: responsiveClass,\n      children: table\n    });\n  }\n\n  return table;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);\n\n//# sourceURL=webpack://hope/./node_modules/react-bootstrap/esm/Table.js?");

/***/ })

}]);