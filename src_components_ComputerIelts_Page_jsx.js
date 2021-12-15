"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhope"] = self["webpackChunkhope"] || []).push([["src_components_ComputerIelts_Page_jsx"],{

/***/ "./src/common/Accordions.jsx":
/*!***********************************!*\
  !*** ./src/common/Accordions.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Accordion.js\");\n\n\n\nfunction Accordions({\n  header,\n  children,\n  eventKey\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n    eventKey: eventKey\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Header, null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, null, children));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordions);\n\n//# sourceURL=webpack://hope/./src/common/Accordions.jsx?");

/***/ }),

/***/ "./src/common/Card.jsx":
/*!*****************************!*\
  !*** ./src/common/Card.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var common_Image_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/Image.jsx */ \"./src/common/Image.jsx\");\n/* harmony import */ var common_ContentBlock_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ContentBlock.jsx */ \"./src/common/ContentBlock.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Row.js\");\n\n\n\n\n\nfunction Card({\n  content\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: content.id,\n    className: `justify-content-between`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: content.containerClass,\n    style: {\n      padding: 'unset'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: `${content.splitClass}`\n  }, content.imagePosition == 'left' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Image_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    source: content.imageUrl,\n    imageClass: content.imageClass\n  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_ContentBlock_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: `${content.title}`,\n    titleClass: `${content.titleClass}`,\n    descriptionClass: `${content.descriptionClass}`,\n    points: 'points' in content ? content.points : null,\n    accordions: 'accordions' in content ? content.accordions : null,\n    description: 'descriptionPoints' in content ? content.descriptionPoints : null,\n    taglineClass: 'taglineClass' in content ? `${content.taglineClass}` : null,\n    isImagePresent: 'imagePosition' in content ? true : false\n  }), content.imagePosition == 'right' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Image_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    source: content.imageUrl\n  }) : null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://hope/./src/common/Card.jsx?");

/***/ }),

/***/ "./src/common/Centres.jsx":
/*!********************************!*\
  !*** ./src/common/Centres.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCentresData\": () => (/* binding */ getCentresData)\n/* harmony export */ });\n/* harmony import */ var images_Cities_Patiala_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! images/Cities/Patiala.jpg */ \"./src/images/Cities/Patiala.jpg\");\n/* harmony import */ var images_Cities_Amritsar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/Cities/Amritsar.jpg */ \"./src/images/Cities/Amritsar.jpg\");\n\n\nfunction getCentresData() {\n  return [{\n    id: 'punjab',\n    header: 'Punjab',\n    data: [...getPunjabData()]\n  }, {\n    id: 'haryana',\n    header: 'Haryana',\n    data: [...getPunjabData()]\n  }];\n}\n\nfunction getPunjabData() {\n  return [{\n    id: 'patiala',\n    name: 'Patiala',\n    source: images_Cities_Patiala_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }, {\n    id: 'amritsar',\n    name: 'Amritsar',\n    source: images_Cities_Amritsar_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }];\n}\n\n//# sourceURL=webpack://hope/./src/common/Centres.jsx?");

/***/ }),

/***/ "./src/common/ContentBlock.jsx":
/*!*************************************!*\
  !*** ./src/common/ContentBlock.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var common_Point_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/Point.jsx */ \"./src/common/Point.jsx\");\n/* harmony import */ var common_Accordions_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/Accordions.jsx */ \"./src/common/Accordions.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Accordion.js\");\n/* harmony import */ var components_ComputerIelts_AccordionBody_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ComputerIelts/AccordionBody.jsx */ \"./src/components/ComputerIelts/AccordionBody.jsx\");\n\n\n\n\n\n\nfunction ContentBlock({\n  title,\n  points,\n  titleClass,\n  accordions,\n  description,\n  taglineClass,\n  isImagePresent,\n  descriptionClass\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    md: isImagePresent ? 6 : 12,\n    className: `${taglineClass} child-full-width-padding`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: titleClass\n  }, title), description ? description.map(point => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: descriptionClass\n    }, point);\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null), points ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      paddingTop: '0.5rem'\n    }\n  }, points.map((point, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Point_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      text: point,\n      key: index\n    });\n  })) : null, accordions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      marginTop: '2rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    flush: true\n  }, accordions.map((accordion, index) => {\n    return 'body' in accordion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Accordions_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      header: accordion.header,\n      key: index,\n      eventKey: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(accordion.body, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Accordions_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      header: accordion.header,\n      key: index,\n      eventKey: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ComputerIelts_AccordionBody_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: accordion.data,\n      body: 'body' in accordion ? accordion.body : null\n    }));\n  }))) : null);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentBlock);\n\n//# sourceURL=webpack://hope/./src/common/ContentBlock.jsx?");

/***/ }),

/***/ "./src/common/Image.jsx":
/*!******************************!*\
  !*** ./src/common/Image.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Col.js\");\n\n\n\nfunction Image({\n  source,\n  imageClass\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    md: 6,\n    className: `${imageClass} child-full-width`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: source\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);\n\n//# sourceURL=webpack://hope/./src/common/Image.jsx?");

/***/ }),

/***/ "./src/common/Point.jsx":
/*!******************************!*\
  !*** ./src/common/Point.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Circle */ \"./node_modules/@mui/icons-material/Circle.js\");\n\n\n\nfunction Point({\n  text\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: 'flex--container--with--row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      paddingRight: '5px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    fontSize: `small`,\n    sx: {\n      color: '#626262'\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, `${text}`)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);\n\n//# sourceURL=webpack://hope/./src/common/Point.jsx?");

/***/ }),

/***/ "./src/components/ComputerIelts/AccordionBody.jsx":
/*!********************************************************!*\
  !*** ./src/components/ComputerIelts/AccordionBody.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Card.js\");\n\n\n\nfunction AccordionBody({\n  data,\n  children\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, data.map((city, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      lg: 3,\n      sm: 12,\n      style: {\n        paddingTop: '2rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: `child-full-width`,\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Img, {\n      variant: \"top\",\n      style: {\n        minHeight: '16rem',\n        objectFit: 'cover'\n      },\n      src: city.source\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Text, null, city.name))));\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionBody);\n\n//# sourceURL=webpack://hope/./src/components/ComputerIelts/AccordionBody.jsx?");

/***/ }),

/***/ "./src/components/ComputerIelts/Page.jsx":
/*!***********************************************!*\
  !*** ./src/components/ComputerIelts/Page.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var common_Card_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/Card.jsx */ \"./src/common/Card.jsx\");\n/* harmony import */ var _PageDetails_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetails.jsx */ \"./src/components/ComputerIelts/PageDetails.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Container.js\");\n\n\n\n\n\nfunction Page() {\n  const pageDetails = (0,_PageDetails_jsx__WEBPACK_IMPORTED_MODULE_2__.getPageDetails)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      marginTop: `6rem`\n    }\n  }, pageDetails.map((data, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Card_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      content: data,\n      key: index\n    });\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://hope/./src/components/ComputerIelts/Page.jsx?");

/***/ }),

/***/ "./src/components/ComputerIelts/PageDetails.jsx":
/*!******************************************************!*\
  !*** ./src/components/ComputerIelts/PageDetails.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPageDetails\": () => (/* binding */ getPageDetails)\n/* harmony export */ });\n/* harmony import */ var images_frequency_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! images/frequency-1.jpg */ \"./src/images/frequency-1.jpg\");\n/* harmony import */ var images_comp_ielts_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/comp-ielts.jpg */ \"./src/images/comp-ielts.jpg\");\n/* harmony import */ var common_Centres_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/Centres.jsx */ \"./src/common/Centres.jsx\");\n\n\n\nfunction getPageDetails() {\n  return [{\n    id: 'introduction',\n    imageClass: null,\n    imagePosition: 'right',\n    imageUrl: images_comp_ielts_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    taglineClass: 'tagline',\n    titleClass: 'card-title',\n    title: 'Take IELTS on computer',\n    splitClass: 'split--introduction',\n    descriptionClass: 'introduction--desc',\n    containerClass: 'container--block bg--darkgrey',\n    descriptionPoints: ['Results in 2-5 days. Now available in India']\n  }, {\n    id: 'frequency',\n    splitClass: 'split',\n    imageUrl: images_frequency_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    imageClass: 'split-img',\n    imagePosition: 'left',\n    points: [...getFrequencyPoints()],\n    titleClass: 'card-title-with-description',\n    containerClass: 'container--block bg--light',\n    title: 'Computer-delivered IELTS is available 3 times a day, 7 days a week',\n    descriptionPoints: ['For almost 30 years, IELTS has been a paper-based English test that people have used to achieve their work, study and migration dreams. But you asked for more choice – and we’ve listened. Meet computer-delivered IELTS: the same IELTS test you know, delivered via computer, with multiple test sessions a day and fast results.']\n  }, {\n    id: 'centres',\n    splitClass: 'split',\n    accordions: [...(0,common_Centres_jsx__WEBPACK_IMPORTED_MODULE_2__.getCentresData)()],\n    titleClass: 'card-title-with-description',\n    containerClass: 'container--block bg--light',\n    title: 'Computer-delivered IELTS is available 3 times a day, 7 days a week'\n  }];\n}\n\nfunction getFrequencyPoints() {\n  return ['Results in 2-5 days', 'Testing up to 7 days a week', 'Free IELTS Masterclass', 'Free computer-delivered IELTS practice test'];\n}\n\n//# sourceURL=webpack://hope/./src/components/ComputerIelts/PageDetails.jsx?");

/***/ }),

/***/ "./src/images/Cities/Amritsar.jpg":
/*!****************************************!*\
  !*** ./src/images/Cities/Amritsar.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9af1b8e5066abfc4ca7d4740ca47cc61.jpg\");\n\n//# sourceURL=webpack://hope/./src/images/Cities/Amritsar.jpg?");

/***/ }),

/***/ "./src/images/Cities/Patiala.jpg":
/*!***************************************!*\
  !*** ./src/images/Cities/Patiala.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4ca352f2ae77f71a86c4e53b3a2a5193.jpg\");\n\n//# sourceURL=webpack://hope/./src/images/Cities/Patiala.jpg?");

/***/ }),

/***/ "./src/images/comp-ielts.jpg":
/*!***********************************!*\
  !*** ./src/images/comp-ielts.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"56e86296d90f037b1f4632aabae6ccac.jpg\");\n\n//# sourceURL=webpack://hope/./src/images/comp-ielts.jpg?");

/***/ }),

/***/ "./src/images/frequency-1.jpg":
/*!************************************!*\
  !*** ./src/images/frequency-1.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bc21c2d8f9b43ceb21d2732a297d3fb3.jpg\");\n\n//# sourceURL=webpack://hope/./src/images/frequency-1.jpg?");

/***/ })

}]);