"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhope"] = self["webpackChunkhope"] || []).push([["src_components_IELTS_Page_jsx"],{

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var common_Image_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/Image.jsx */ \"./src/common/Image.jsx\");\n/* harmony import */ var common_ContentBlock_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ContentBlock.jsx */ \"./src/common/ContentBlock.jsx\");\n\n\n\n\nfunction Card({\n  content\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    key: content.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: `${content.containerClass}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: `${content.splitClass}`\n  }, content.imagePosition == 'left' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Image_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    source: content.imageUrl,\n    imageClass: content.imageClass\n  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_ContentBlock_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: `${content.title}`,\n    titleClass: `${content.titleClass}`,\n    descriptionClass: `${content.descriptionClass}`,\n    points: 'points' in content ? content.points : null,\n    accordions: 'accordions' in content ? content.accordions : null,\n    description: 'descriptionPoints' in content ? content.descriptionPoints : null,\n    taglineClass: 'taglineClass' in content ? `${content.taglineClass}` : null\n  }), content.imagePosition == 'right' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Image_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    source: content.imageUrl\n  }) : null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://hope/./src/common/Card.jsx?");

/***/ }),

/***/ "./src/common/ContentBlock.jsx":
/*!*************************************!*\
  !*** ./src/common/ContentBlock.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var common_Point_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/Point.jsx */ \"./src/common/Point.jsx\");\n/* harmony import */ var common_Accordions_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/Accordions.jsx */ \"./src/common/Accordions.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Accordion.js\");\n/* harmony import */ var components_ComputerIelts_AccordionBody_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ComputerIelts/AccordionBody.jsx */ \"./src/components/ComputerIelts/AccordionBody.jsx\");\n\n\n\n\n\n\nfunction ContentBlock({\n  title,\n  points,\n  titleClass,\n  accordions,\n  description,\n  taglineClass,\n  descriptionClass\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: taglineClass\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: titleClass\n  }, title), description ? description.map((point, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: descriptionClass\n    }, point);\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null), points ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      paddingTop: '0.5rem'\n    }\n  }, points.map((point, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Point_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      text: point,\n      key: index\n    });\n  })) : null, accordions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    flush: true\n  }, accordions.map((accordion, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Accordions_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      header: accordion.header,\n      key: index,\n      eventKey: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ComputerIelts_AccordionBody_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: accordion.cities\n    }));\n  })) : null);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentBlock);\n\n//# sourceURL=webpack://hope/./src/common/ContentBlock.jsx?");

/***/ }),

/***/ "./src/common/Image.jsx":
/*!******************************!*\
  !*** ./src/common/Image.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Image({\n  source,\n  imageClass\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: imageClass\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: source\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);\n\n//# sourceURL=webpack://hope/./src/common/Image.jsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Card.js\");\n\n\n\nfunction AccordionBody({\n  data\n}) {\n  console.log(`data`, data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      gap: '2rem'\n    }\n  }, data.map((city, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      style: {\n        width: '18rem'\n      },\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Img, {\n      variant: \"top\",\n      style: {\n        width: '18rem',\n        height: '14rem',\n        objectFit: 'cover'\n      },\n      src: city.source\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Text, null, city.name)));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionBody);\n\n//# sourceURL=webpack://hope/./src/components/ComputerIelts/AccordionBody.jsx?");

/***/ }),

/***/ "./src/components/IELTS/Page.jsx":
/*!***************************************!*\
  !*** ./src/components/IELTS/Page.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var common_Card_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/Card.jsx */ \"./src/common/Card.jsx\");\n/* harmony import */ var _PageDetails_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetails.jsx */ \"./src/components/IELTS/PageDetails.jsx\");\n\n\n\n\nfunction Page() {\n  const pageDetails = (0,_PageDetails_jsx__WEBPACK_IMPORTED_MODULE_2__.getPageDetails)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      padding: '5rem'\n    }\n  }, pageDetails.map((data, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(common_Card_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      content: data,\n      key: index\n    });\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://hope/./src/components/IELTS/Page.jsx?");

/***/ }),

/***/ "./src/components/IELTS/PageDetails.jsx":
/*!**********************************************!*\
  !*** ./src/components/IELTS/PageDetails.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPageDetails\": () => (/* binding */ getPageDetails)\n/* harmony export */ });\n/* harmony import */ var images_IELTS_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! images/IELTS.jpg */ \"./src/images/IELTS.jpg\");\n\nfunction getPageDetails() {\n  return [{\n    id: 'introduction',\n    imageClass: null,\n    imagePosition: 'right',\n    imageUrl: images_IELTS_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    taglineClass: 'tagline',\n    titleClass: 'card-title',\n    title: 'IELTS',\n    splitClass: 'split--introduction',\n    descriptionClass: 'introduction--desc',\n    containerClass: 'container--block bg--darkgrey',\n    descriptionPoints: ['International English Language Testing System']\n  }, {\n    id: 'what_is_ielts',\n    splitClass: 'split',\n    imageClass: 'split-img',\n    imagePosition: 'left',\n    titleClass: 'card-title-with-description',\n    containerClass: 'container--block bg--light',\n    title: 'What is IELTS?',\n    description: 'IELTS is the International English Language Testing System. It’s the world’s most popular English language test for tertiary education, work and migration purposes. International students wanting to study at an Australian university are required to pass the IELTS test to show their English language abilities. The test can also be taken for work purposes or applying for residency. In a global partnership of language experts, IDP: IELTS Australia, the British Council and Cambridge English Language Assessment co-created IELTS. ',\n    descriptionPoints: [...getDescriptionPoints()],\n    descriptionClass: 'description--with---space'\n  }, {\n    id: 'why_ielts',\n    splitClass: 'split',\n    imageClass: 'split-img',\n    imagePosition: 'left',\n    titleClass: 'card-title-with-description',\n    containerClass: 'container--block bg--light',\n    title: 'Why take the IELTS test?',\n    descriptionPoints: ['IELTS is the International English Language Testing System. It’s the world’s most popular English language test for tertiary education, work and migration purposes. International students wanting to study at an Australian university are required to pass the IELTS test to show their English language abilities. The test can also be taken for work purposes or applying for residency. In a global partnership of language experts, IDP: IELTS Australia, the British Council and Cambridge English Language Assessment co-created IELTS. '],\n    descriptionClass: 'description--with---space'\n  }, {\n    id: 'fee_structure',\n    splitClass: 'split',\n    imageClass: 'split-img',\n    imagePosition: 'left',\n    titleClass: 'card-title-with-description',\n    containerClass: 'container--block bg--light',\n    title: 'IELTS test structure',\n    descriptionPoints: [...getFeeStructure()],\n    // accordions : [ ...getCentresData() ],\n    points: ['Academic', \"General Training\"],\n    descriptionClass: 'description--with---space'\n  }];\n}\n\nfunction getFrequencyPoints() {\n  return ['Results in 2-5 days', 'Testing up to 7 days a week', 'Free IELTS Masterclass', 'Free computer-delivered IELTS practice test'];\n}\n\nfunction getDescriptionPoints() {\n  return ['Millions of IELTS tests are taken each year in over 140 countries for study, work and migration purposes. Over 10,000 organisations including universities, immigration authorities and professional bodies recognise IELTS, which means it helps you reach your study and career goals faster.', 'IELTS is the only internationally recognised English language test where the speaking section of the test is held with an examiner in a private room so you will not be interrupted. Our examiners are fully qualified and follow rigorous global IELTS standards and are regularly monitored and re-certified.', 'IELTS content is developed by an international team of experts that do extensive research to ensure the test is fair and unbiased for all, regardless of nationality, gender, lifestyle or location.'];\n}\n\nfunction getFeeStructure() {\n  return ['Before applying, check the test format to determine the right module for you, as fees may apply for changing modules.', 'The IELTS test assesses four language skills - writing, reading, listening and speaking.', 'The listening, reading and writing sections are scheduled between 9.00 am and 12.30 pm. The speaking section is scheduled between 1.00 pm and 5.30 pm. All sections of the test are conducted in small rooms, providing you with a comfortable environment.', 'IELTS offers two modules:'];\n}\n\n//# sourceURL=webpack://hope/./src/components/IELTS/PageDetails.jsx?");

/***/ }),

/***/ "./src/images/IELTS.jpg":
/*!******************************!*\
  !*** ./src/images/IELTS.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"55911cdde4fbb90c10d7b785fc9942cf.jpg\");\n\n//# sourceURL=webpack://hope/./src/images/IELTS.jpg?");

/***/ })

}]);