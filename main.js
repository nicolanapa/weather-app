/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/loginStyle.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/loginStyle.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#dialogLogin {
    width: 100%;
    height: 100%;
    padding: 40px;
    background-color: rgb(255, 240, 209);
}

.formLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.formLogin > label + input {
    margin: 10px 0 35px 0;
}

input {
    width: 20%;
    padding: 15px 25px;
    border: 2px solid black;
    border-radius: 15px;
}

#loginButton {
    padding: 15px;
    font-size: 18px;
    border: 2px solid black;
    background-color: white;
    border-radius: 25px;
}
`, "",{"version":3,"sources":["webpack://./src/loginStyle.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["#dialogLogin {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 40px;\r\n    background-color: rgb(255, 240, 209);\r\n}\r\n\r\n.formLogin {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.formLogin > label + input {\r\n    margin: 10px 0 35px 0;\r\n}\r\n\r\ninput {\r\n    width: 20%;\r\n    padding: 15px 25px;\r\n    border: 2px solid black;\r\n    border-radius: 15px;\r\n}\r\n\r\n#loginButton {\r\n    padding: 15px;\r\n    font-size: 18px;\r\n    border: 2px solid black;\r\n    background-color: white;\r\n    border-radius: 25px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    font-family: roboto, "Roboto Flex", system-ui;
    margin: 0;
    padding: 0;
}

body {
    background-color: rgb(53, 47, 68);
}

.form-search {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border: 2.5px solid rgb(185, 180, 199);
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    background-color: rgb(92, 84, 112);
}

#city-input,
#search-button {
    border: 0;
    border-radius: 20px;
    background-color: rgb(255, 240, 209);
    padding: 22.5px;
    margin: 25px 5px;
    font-weight: 500;
}

#search-button {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
}

.credits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25px 10px;
}

.left-half {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 1fr;
    margin: 10px 30px 10px 5px;
}

.forecast-display {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    padding: 20px;
    border: 2.5px solid rgb(185, 180, 199);
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    background-color: rgb(92, 84, 112);
}

.forecast-display > div {
    background-color: rgb(255, 240, 209);
    border-radius: 20px;
    margin: 30px 5%;
    padding: 25px 0 10px 18px;
}

.forecast-display > div > .weather-images {
    display: grid;
    grid-template-columns: 88px 1.3fr 2.8fr;
    align-items: center;
    padding: 20px 10px;
}

.temp {
    display: flex;
    margin: 6px 0 -10px -12px;
}

.gif {
    justify-self: end;
    margin-right: 20%;
    border-radius: 20px;
}

.website-container {
    display: grid;
    grid-template-columns: 1.8fr 3fr;
    grid-template-rows: 1fr;
    padding: 15px;
}

.right-half {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 1fr;
    margin: 10px 0 10px 5px;
}

.current-0 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 2.5px solid rgb(185, 180, 199);
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    background-color: rgb(92, 84, 112);
}

.current-0 > h2 {
    background-color: rgb(255, 240, 209);
    font-size: calc(1rem + 1vh + 1vw);
    border-radius: 30px;
    padding: 60px;
}

.double-container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding: 20px;
    border: 2.5px solid rgb(185, 180, 199);
    background-color: rgb(92, 84, 112);
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
}

.double-container > div {
    background-color: rgb(255, 240, 209);
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
}

.weather-bigger {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bigger-gif {
    display: grid;
    max-height: 1000px;
}

.bigger-gif > img {
    justify-self: center;
    align-self: center;
    margin-right: 0;
    border-radius: 40px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,6CAA6C;IAC7C,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC;IACtC,4BAA4B;IAC5B,+BAA+B;IAC/B,kCAAkC;AACtC;;AAEA;;IAEI,SAAS;IACT,mBAAmB;IACnB,oCAAoC;IACpC,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;IAC7B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,aAAa;IACb,sCAAsC;IACtC,4BAA4B;IAC5B,+BAA+B;IAC/B,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,sCAAsC;IACtC,6BAA6B;IAC7B,gCAAgC;IAChC,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;IACpC,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,sCAAsC;IACtC,kCAAkC;IAClC,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap\");\r\n\r\n* {\r\n    font-family: roboto, \"Roboto Flex\", system-ui;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(53, 47, 68);\r\n}\r\n\r\n.form-search {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    border-top-left-radius: 35px;\r\n    border-bottom-left-radius: 35px;\r\n    background-color: rgb(92, 84, 112);\r\n}\r\n\r\n#city-input,\r\n#search-button {\r\n    border: 0;\r\n    border-radius: 20px;\r\n    background-color: rgb(255, 240, 209);\r\n    padding: 22.5px;\r\n    margin: 25px 5px;\r\n    font-weight: 500;\r\n}\r\n\r\n#search-button {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n}\r\n\r\n.credits {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 25px 10px;\r\n}\r\n\r\n.left-half {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 120px 1fr;\r\n    margin: 10px 30px 10px 5px;\r\n}\r\n\r\n.forecast-display {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    padding: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    border-top-left-radius: 35px;\r\n    border-bottom-left-radius: 35px;\r\n    background-color: rgb(92, 84, 112);\r\n}\r\n\r\n.forecast-display > div {\r\n    background-color: rgb(255, 240, 209);\r\n    border-radius: 20px;\r\n    margin: 30px 5%;\r\n    padding: 25px 0 10px 18px;\r\n}\r\n\r\n.forecast-display > div > .weather-images {\r\n    display: grid;\r\n    grid-template-columns: 88px 1.3fr 2.8fr;\r\n    align-items: center;\r\n    padding: 20px 10px;\r\n}\r\n\r\n.temp {\r\n    display: flex;\r\n    margin: 6px 0 -10px -12px;\r\n}\r\n\r\n.gif {\r\n    justify-self: end;\r\n    margin-right: 20%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.website-container {\r\n    display: grid;\r\n    grid-template-columns: 1.8fr 3fr;\r\n    grid-template-rows: 1fr;\r\n    padding: 15px;\r\n}\r\n\r\n.right-half {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 40% 1fr;\r\n    margin: 10px 0 10px 5px;\r\n}\r\n\r\n.current-0 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    border-top-right-radius: 35px;\r\n    border-bottom-right-radius: 35px;\r\n    background-color: rgb(92, 84, 112);\r\n}\r\n\r\n.current-0 > h2 {\r\n    background-color: rgb(255, 240, 209);\r\n    font-size: calc(1rem + 1vh + 1vw);\r\n    border-radius: 30px;\r\n    padding: 60px;\r\n}\r\n\r\n.double-container {\r\n    display: grid;\r\n    grid-template-columns: 2fr 3fr;\r\n    padding: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    background-color: rgb(92, 84, 112);\r\n    border-top-right-radius: 35px;\r\n    border-bottom-right-radius: 35px;\r\n}\r\n\r\n.double-container > div {\r\n    background-color: rgb(255, 240, 209);\r\n    padding: 20px;\r\n    margin: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.weather-bigger {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.bigger-gif {\r\n    display: grid;\r\n    max-height: 1000px;\r\n}\r\n\r\n.bigger-gif > img {\r\n    justify-self: center;\r\n    align-self: center;\r\n    margin-right: 0;\r\n    border-radius: 40px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/loginStyle.css":
/*!****************************!*\
  !*** ./src/loginStyle.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loginStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./loginStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/loginStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loginStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loginStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loginStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loginStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/getWeatherInfo.js":
/*!*******************************!*\
  !*** ./src/getWeatherInfo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cityInfoMinified: () => (/* binding */ cityInfoMinified),
/* harmony export */   searchedCity: () => (/* binding */ searchedCity)
/* harmony export */ });
/* harmony import */ var _loginApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginApi */ "./src/loginApi.js");
/* harmony import */ var _pushGiphyGif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushGiphyGif */ "./src/pushGiphyGif.js");
/* harmony import */ var _pushWeatherInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pushWeatherInfo */ "./src/pushWeatherInfo.js");




let searchedCity = "";
let cityInfo = "";
let cityInfoMinified = "";

function dateChecker() {
    // Creates an variable with today's date
    let todayDate = new Date();
    if (todayDate.getMonth() <= 9 && todayDate.getDate() <= 9) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    } else if (todayDate.getMonth() <= 9 && todayDate.getDate() >= 9) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    } else if (todayDate.getDate() <= 9 && todayDate.getMonth() >= 9) {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    } else {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    }
    todayDate = String(todayDate);
    return todayDate;
}

function searchCity() {
    let form = document.querySelector(".form-search");
    let inputCity = document.querySelector("#city-input");

    form.addEventListener("submit", (e) => {
        searchedCity = inputCity.value;

        console.log("You searched: " + searchedCity);
        getCityInfo();
        e.preventDefault();
    });
}

searchCity();

async function getCityInfo() {
    cityInfo = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=" + _loginApi__WEBPACK_IMPORTED_MODULE_0__.weatherApi + "&q=" + searchedCity + "&days=3",
    );
    cityInfo = await cityInfo.json();

    //console.log(cityInfo);
    processCityInfo();
}

function processCityInfo() {
    //new object that only takes the needed values
    cityInfoMinified = {
        // [city name, city country]
        location: [cityInfo.location.name, cityInfo.location.country],
        // [current day, current weather conditin, current icon file, current temperature]
        current: [dateChecker(), cityInfo.current.condition.text, fromWebToLocalIcons2(), cityInfo.current.temp_c],
        next0: [
            // [date, weather condition, icon file, average temperature]
            cityInfo["forecast"]["forecastday"]["0"]["date"],
            cityInfo["forecast"]["forecastday"]["0"]["day"]["condition"]["text"],
            fromWebToLocalIcons(),
            cityInfo["forecast"]["forecastday"]["0"]["day"]["avgtemp_c"],
        ],
        next1: [
            cityInfo["forecast"]["forecastday"]["1"]["date"],
            cityInfo["forecast"]["forecastday"]["1"]["day"]["condition"]["text"],
            fromWebToLocalIcons(),
            cityInfo["forecast"]["forecastday"]["1"]["day"]["avgtemp_c"],
        ],
        next2: [
            cityInfo["forecast"]["forecastday"]["2"]["date"],
            cityInfo["forecast"]["forecastday"]["2"]["day"]["condition"]["text"],
            fromWebToLocalIcons(),
            cityInfo["forecast"]["forecastday"]["2"]["day"]["avgtemp_c"],
        ],
    };

    function fromWebToLocalIcons() {
        let strTemporary = cityInfo["forecast"]["forecastday"]["1"]["day"]["condition"]["icon"];
        strTemporary = strTemporary.replace("//cdn.weatherapi.com/", "../src/");

        return strTemporary;
    }

    function fromWebToLocalIcons2() {
        let strTemporary = cityInfo.current.condition.icon;
        strTemporary = strTemporary.replace("//cdn.weatherapi.com/", "../src/");

        return strTemporary;
    }

    console.log(cityInfoMinified);
    console.table(cityInfoMinified);

    (0,_pushWeatherInfo__WEBPACK_IMPORTED_MODULE_2__.changeCityInfo)();
    (0,_pushGiphyGif__WEBPACK_IMPORTED_MODULE_1__.changeGif)();
}




/***/ }),

/***/ "./src/loginApi.js":
/*!*************************!*\
  !*** ./src/loginApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   giphyApi: () => (/* binding */ giphyApi),
/* harmony export */   weatherApi: () => (/* binding */ weatherApi)
/* harmony export */ });
let weatherApi = localStorage.getItem("weatherApi");
let giphyApi = localStorage.getItem("giphyApi");

function loginCreator() {
    let mainContainer = document.querySelector(".website-container");

    let dialog = document.createElement("dialog");
    dialog.open = "true";
    dialog.id = "dialogLogin";
    let form = document.createElement("form");
    form.method = "post";
    form.action = "#";
    form.classList.add("formLogin");

    let labelWeatherApi = document.createElement("label");
    labelWeatherApi.textContent = "Enter your Weather API";
    labelWeatherApi.id = "weatherApi";
    let inputWeatherApi = document.createElement("input");
    inputWeatherApi.id = "weatherApi";
    inputWeatherApi.placeholder = "dk42dl4...";

    let labelGiphyApi = document.createElement("label");
    labelGiphyApi.textContent = "Enter your Giphy API";
    labelGiphyApi.id = "giphyApi";
    let inputGiphyApi = document.createElement("input");
    inputGiphyApi.id = "giphyApi";
    inputGiphyApi.placeholder = "jdn2kdsf04f3...";

    let button = document.createElement("button");
    button.textContent = "Login";
    button.id = "loginButton";

    mainContainer.appendChild(dialog);
    dialog.appendChild(form);
    form.appendChild(labelWeatherApi);
    form.appendChild(inputWeatherApi);
    form.appendChild(labelGiphyApi);
    form.appendChild(inputGiphyApi);

    form.appendChild(button);

    form.addEventListener("submit", (e) => {
        dialog.open = "false";
        dialog.close();
        weatherApi = inputWeatherApi.value;
        giphyApi = inputGiphyApi.value;

        localStorage.setItem("weatherApi", weatherApi);
        localStorage.setItem("giphyApi", giphyApi);

        //console.log(weatherApi);
        //console.log(giphyApi);

        e.preventDefault();
    });
}

if (localStorage.getItem("weatherApi") === null || localStorage.getItem("giphyApi") === null) {
    loginCreator();
} else {
    console.log("Welcome!");
}

//console.log("Weather API and Giphy API: " + localStorage.getItem("weatherApi") + ", " + localStorage.getItem("giphyApi"));




/***/ }),

/***/ "./src/pushGiphyGif.js":
/*!*****************************!*\
  !*** ./src/pushGiphyGif.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeGif: () => (/* binding */ changeGif)
/* harmony export */ });
/* harmony import */ var _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherInfo */ "./src/getWeatherInfo.js");


function changeGif() {
    if (_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.searchedCity !== "") {
        gifLoop();
    }
}

function gifLoop() {

}



/***/ }),

/***/ "./src/pushWeatherInfo.js":
/*!********************************!*\
  !*** ./src/pushWeatherInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCityInfo: () => (/* binding */ changeCityInfo)
/* harmony export */ });
/* harmony import */ var _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherInfo */ "./src/getWeatherInfo.js");


function changeCityInfo() {
    if (_getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.searchedCity !== "") {
        cityLoop();
    }
}

function cityLoop() {
    let allCity = document.querySelectorAll(".city");

    for (let i = 0; i < 3; i++) {
        allCity[i].textContent = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.searchedCity;
        let day = document.querySelector(".day-" + i);
        day.textContent = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.cityInfoMinified["next" + i][0];

        let temp = document.querySelector(".temp-" + i);
        temp.textContent = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.cityInfoMinified["next" + i][3];

        let icon = document.querySelector(".icon-" + i);
        icon.src = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.cityInfoMinified["next" + i][2];

        if (i === 0) {
            allCity[3].textContent = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.searchedCity;
            day = document.querySelector(".day--0");
            day.textContent = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.cityInfoMinified["current"][0];
            temp = document.querySelector(".temp--0");
            temp.textContent = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.cityInfoMinified["current"][3];
            icon = document.querySelector(".icon--0");
            icon.src = _getWeatherInfo__WEBPACK_IMPORTED_MODULE_0__.cityInfoMinified["current"][2];
        }
    }
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loginStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginStyle.css */ "./src/loginStyle.css");
/* harmony import */ var _loginApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginApi */ "./src/loginApi.js");
/* harmony import */ var _getWeatherInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWeatherInfo */ "./src/getWeatherInfo.js");
/* harmony import */ var _pushGiphyGif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pushGiphyGif */ "./src/pushGiphyGif.js");
/* harmony import */ var _pushWeatherInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pushWeatherInfo */ "./src/pushWeatherInfo.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSx3Q0FBd0Msb0JBQW9CLHFCQUFxQixzQkFBc0IsNkNBQTZDLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQyxLQUFLLG9DQUFvQyw4QkFBOEIsS0FBSyxlQUFlLG1CQUFtQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixLQUFLLHNCQUFzQixzQkFBc0Isd0JBQXdCLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLEtBQUssdUJBQXVCO0FBQ2hnQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9KQUFvSjtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdB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aUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSztBQUNFO0FBQ007QUFDRjtBQUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvbG9naW5TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL2xvZ2luU3R5bGUuY3NzPzVlMTgiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9nZXRXZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9sb2dpbkFwaS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9wdXNoR2lwaHlHaWYuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvcHVzaFdlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjZGlhbG9nTG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xyXG59XHJcblxyXG4uZm9ybUxvZ2luIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybUxvZ2luID4gbGFiZWwgKyBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAzNXB4IDA7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbiNsb2dpbkJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbG9naW5TdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNkaWFsb2dMb2dpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Mb2dpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUxvZ2luID4gbGFiZWwgKyBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDM1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9naW5CdXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0ZsZXg6b3Bzeix3Z2h0QDguLjE0NCwxMDAuLjEwMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8sIFwiUm9ib3RvIEZsZXhcIiwgc3lzdGVtLXVpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDQ3LCA2OCk7XHJcbn1cclxuXHJcbi5mb3JtLXNlYXJjaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XHJcbn1cclxuXHJcbiNjaXR5LWlucHV0LFxyXG4jc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xyXG4gICAgcGFkZGluZzogMjIuNXB4O1xyXG4gICAgbWFyZ2luOiAyNXB4IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiNzZWFyY2gtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNyZWRpdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMjVweCAxMHB4O1xyXG59XHJcblxyXG4ubGVmdC1oYWxmIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA1cHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1kaXNwbGF5ID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggNSU7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDAgMTBweCAxOHB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3QtZGlzcGxheSA+IGRpdiA+IC53ZWF0aGVyLWltYWdlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4OHB4IDEuM2ZyIDIuOGZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxufVxyXG5cclxuLnRlbXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogNnB4IDAgLTEwcHggLTEycHg7XHJcbn1cclxuXHJcbi5naWYge1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi53ZWJzaXRlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjhmciAzZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5yaWdodC1oYWxmIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDAlIDFmcjtcclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggNXB4O1xyXG59XHJcblxyXG4uY3VycmVudC0wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcclxufVxyXG5cclxuLmN1cnJlbnQtMCA+IGgyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG59XHJcblxyXG4uZG91YmxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XHJcbn1cclxuXHJcbi5kb3VibGUtY29udGFpbmVyID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ud2VhdGhlci1iaWdnZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpZ2dlci1naWYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuLmJpZ2dlci1naWYgPiBpbWcge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLDZDQUE2QztJQUM3QyxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0ZsZXg6b3Bzeix3Z2h0QDguLjE0NCwxMDAuLjEwMDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8sIFxcXCJSb2JvdG8gRmxleFxcXCIsIHN5c3RlbS11aTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA0NywgNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1zZWFyY2gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XFxyXFxufVxcclxcblxcclxcbiNjaXR5LWlucHV0LFxcclxcbiNzZWFyY2gtYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XFxyXFxuICAgIHBhZGRpbmc6IDIyLjVweDtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jcmVkaXRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWhhbGYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnI7XFxyXFxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtZGlzcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigxODUsIDE4MCwgMTk5KTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWRpc3BsYXkgPiBkaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweCA1JTtcXHJcXG4gICAgcGFkZGluZzogMjVweCAwIDEwcHggMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWRpc3BsYXkgPiBkaXYgPiAud2VhdGhlci1pbWFnZXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg4cHggMS4zZnIgMi44ZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDZweCAwIC0xMHB4IC0xMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lmIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vic2l0ZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuOGZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1oYWxmIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDAlIDFmcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LTAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtMCA+IGgyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5kb3VibGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigxODUsIDE4MCwgMTk5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG91YmxlLWNvbnRhaW5lciA+IGRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1iaWdnZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ2dlci1naWYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5iaWdnZXItZ2lmID4gaW1nIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpblN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW5TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHdlYXRoZXJBcGkgfSBmcm9tIFwiLi9sb2dpbkFwaVwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VHaWYgfSBmcm9tIFwiLi9wdXNoR2lwaHlHaWZcIjtcclxuaW1wb3J0IHsgY2hhbmdlQ2l0eUluZm8gfSBmcm9tIFwiLi9wdXNoV2VhdGhlckluZm9cIjtcclxuXHJcbmxldCBzZWFyY2hlZENpdHkgPSBcIlwiO1xyXG5sZXQgY2l0eUluZm8gPSBcIlwiO1xyXG5sZXQgY2l0eUluZm9NaW5pZmllZCA9IFwiXCI7XHJcblxyXG5mdW5jdGlvbiBkYXRlQ2hlY2tlcigpIHtcclxuICAgIC8vIENyZWF0ZXMgYW4gdmFyaWFibGUgd2l0aCB0b2RheSdzIGRhdGVcclxuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgaWYgKHRvZGF5RGF0ZS5nZXRNb250aCgpIDw9IDkgJiYgdG9kYXlEYXRlLmdldERhdGUoKSA8PSA5KSB7XHJcbiAgICAgICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi0wXCIgKyAodG9kYXlEYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLTBcIiArIHRvZGF5RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPZ2dpIMOoIGlsIFwiICsgdG9kYXlEYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodG9kYXlEYXRlLmdldE1vbnRoKCkgPD0gOSAmJiB0b2RheURhdGUuZ2V0RGF0ZSgpID49IDkpIHtcclxuICAgICAgICB0b2RheURhdGUgPSB0b2RheURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLTBcIiArICh0b2RheURhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyB0b2RheURhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2dnaSDDqCBpbCBcIiArIHRvZGF5RGF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZGF5RGF0ZS5nZXREYXRlKCkgPD0gOSAmJiB0b2RheURhdGUuZ2V0TW9udGgoKSA+PSA5KSB7XHJcbiAgICAgICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArICh0b2RheURhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItMFwiICsgdG9kYXlEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9nZ2kgw6ggaWwgXCIgKyB0b2RheURhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2RheURhdGUgPSB0b2RheURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKHRvZGF5RGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIHRvZGF5RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPZ2dpIMOoIGlsIFwiICsgdG9kYXlEYXRlKTtcclxuICAgIH1cclxuICAgIHRvZGF5RGF0ZSA9IFN0cmluZyh0b2RheURhdGUpO1xyXG4gICAgcmV0dXJuIHRvZGF5RGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQ2l0eSgpIHtcclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXNlYXJjaFwiKTtcclxuICAgIGxldCBpbnB1dENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHktaW5wdXRcIik7XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoZWRDaXR5ID0gaW5wdXRDaXR5LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBzZWFyY2hlZDogXCIgKyBzZWFyY2hlZENpdHkpO1xyXG4gICAgICAgIGdldENpdHlJbmZvKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnNlYXJjaENpdHkoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENpdHlJbmZvKCkge1xyXG4gICAgY2l0eUluZm8gPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PVwiICsgd2VhdGhlckFwaSArIFwiJnE9XCIgKyBzZWFyY2hlZENpdHkgKyBcIiZkYXlzPTNcIixcclxuICAgICk7XHJcbiAgICBjaXR5SW5mbyA9IGF3YWl0IGNpdHlJbmZvLmpzb24oKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGNpdHlJbmZvKTtcclxuICAgIHByb2Nlc3NDaXR5SW5mbygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzQ2l0eUluZm8oKSB7XHJcbiAgICAvL25ldyBvYmplY3QgdGhhdCBvbmx5IHRha2VzIHRoZSBuZWVkZWQgdmFsdWVzXHJcbiAgICBjaXR5SW5mb01pbmlmaWVkID0ge1xyXG4gICAgICAgIC8vIFtjaXR5IG5hbWUsIGNpdHkgY291bnRyeV1cclxuICAgICAgICBsb2NhdGlvbjogW2NpdHlJbmZvLmxvY2F0aW9uLm5hbWUsIGNpdHlJbmZvLmxvY2F0aW9uLmNvdW50cnldLFxyXG4gICAgICAgIC8vIFtjdXJyZW50IGRheSwgY3VycmVudCB3ZWF0aGVyIGNvbmRpdGluLCBjdXJyZW50IGljb24gZmlsZSwgY3VycmVudCB0ZW1wZXJhdHVyZV1cclxuICAgICAgICBjdXJyZW50OiBbZGF0ZUNoZWNrZXIoKSwgY2l0eUluZm8uY3VycmVudC5jb25kaXRpb24udGV4dCwgZnJvbVdlYlRvTG9jYWxJY29uczIoKSwgY2l0eUluZm8uY3VycmVudC50ZW1wX2NdLFxyXG4gICAgICAgIG5leHQwOiBbXHJcbiAgICAgICAgICAgIC8vIFtkYXRlLCB3ZWF0aGVyIGNvbmRpdGlvbiwgaWNvbiBmaWxlLCBhdmVyYWdlIHRlbXBlcmF0dXJlXVxyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIwXCJdW1wiZGF0ZVwiXSxcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMFwiXVtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl0sXHJcbiAgICAgICAgICAgIGZyb21XZWJUb0xvY2FsSWNvbnMoKSxcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMFwiXVtcImRheVwiXVtcImF2Z3RlbXBfY1wiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG5leHQxOiBbXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjFcIl1bXCJkYXRlXCJdLFxyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIxXCJdW1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1widGV4dFwiXSxcclxuICAgICAgICAgICAgZnJvbVdlYlRvTG9jYWxJY29ucygpLFxyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIxXCJdW1wiZGF5XCJdW1wiYXZndGVtcF9jXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmV4dDI6IFtcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMlwiXVtcImRhdGVcIl0sXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjJcIl1bXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgICBmcm9tV2ViVG9Mb2NhbEljb25zKCksXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjJcIl1bXCJkYXlcIl1bXCJhdmd0ZW1wX2NcIl0sXHJcbiAgICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZnJvbVdlYlRvTG9jYWxJY29ucygpIHtcclxuICAgICAgICBsZXQgc3RyVGVtcG9yYXJ5ID0gY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMVwiXVtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcImljb25cIl07XHJcbiAgICAgICAgc3RyVGVtcG9yYXJ5ID0gc3RyVGVtcG9yYXJ5LnJlcGxhY2UoXCIvL2Nkbi53ZWF0aGVyYXBpLmNvbS9cIiwgXCIuLi9zcmMvXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RyVGVtcG9yYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZyb21XZWJUb0xvY2FsSWNvbnMyKCkge1xyXG4gICAgICAgIGxldCBzdHJUZW1wb3JhcnkgPSBjaXR5SW5mby5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xyXG4gICAgICAgIHN0clRlbXBvcmFyeSA9IHN0clRlbXBvcmFyeS5yZXBsYWNlKFwiLy9jZG4ud2VhdGhlcmFwaS5jb20vXCIsIFwiLi4vc3JjL1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0clRlbXBvcmFyeTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaXR5SW5mb01pbmlmaWVkKTtcclxuICAgIGNvbnNvbGUudGFibGUoY2l0eUluZm9NaW5pZmllZCk7XHJcblxyXG4gICAgY2hhbmdlQ2l0eUluZm8oKTtcclxuICAgIGNoYW5nZUdpZigpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzZWFyY2hlZENpdHksIGNpdHlJbmZvTWluaWZpZWQgfTtcclxuIiwibGV0IHdlYXRoZXJBcGkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndlYXRoZXJBcGlcIik7XHJcbmxldCBnaXBoeUFwaSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2lwaHlBcGlcIik7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkNyZWF0b3IoKSB7XHJcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vic2l0ZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgICBkaWFsb2cub3BlbiA9IFwidHJ1ZVwiO1xyXG4gICAgZGlhbG9nLmlkID0gXCJkaWFsb2dMb2dpblwiO1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0ubWV0aG9kID0gXCJwb3N0XCI7XHJcbiAgICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybUxvZ2luXCIpO1xyXG5cclxuICAgIGxldCBsYWJlbFdlYXRoZXJBcGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbFdlYXRoZXJBcGkudGV4dENvbnRlbnQgPSBcIkVudGVyIHlvdXIgV2VhdGhlciBBUElcIjtcclxuICAgIGxhYmVsV2VhdGhlckFwaS5pZCA9IFwid2VhdGhlckFwaVwiO1xyXG4gICAgbGV0IGlucHV0V2VhdGhlckFwaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0V2VhdGhlckFwaS5pZCA9IFwid2VhdGhlckFwaVwiO1xyXG4gICAgaW5wdXRXZWF0aGVyQXBpLnBsYWNlaG9sZGVyID0gXCJkazQyZGw0Li4uXCI7XHJcblxyXG4gICAgbGV0IGxhYmVsR2lwaHlBcGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbEdpcGh5QXBpLnRleHRDb250ZW50ID0gXCJFbnRlciB5b3VyIEdpcGh5IEFQSVwiO1xyXG4gICAgbGFiZWxHaXBoeUFwaS5pZCA9IFwiZ2lwaHlBcGlcIjtcclxuICAgIGxldCBpbnB1dEdpcGh5QXBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRHaXBoeUFwaS5pZCA9IFwiZ2lwaHlBcGlcIjtcclxuICAgIGlucHV0R2lwaHlBcGkucGxhY2Vob2xkZXIgPSBcImpkbjJrZHNmMDRmMy4uLlwiO1xyXG5cclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2dpblwiO1xyXG4gICAgYnV0dG9uLmlkID0gXCJsb2dpbkJ1dHRvblwiO1xyXG5cclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcclxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxXZWF0aGVyQXBpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRXZWF0aGVyQXBpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxHaXBoeUFwaSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0R2lwaHlBcGkpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICBkaWFsb2cub3BlbiA9IFwiZmFsc2VcIjtcclxuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB3ZWF0aGVyQXBpID0gaW5wdXRXZWF0aGVyQXBpLnZhbHVlO1xyXG4gICAgICAgIGdpcGh5QXBpID0gaW5wdXRHaXBoeUFwaS52YWx1ZTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3ZWF0aGVyQXBpXCIsIHdlYXRoZXJBcGkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2lwaHlBcGlcIiwgZ2lwaHlBcGkpO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJBcGkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZ2lwaHlBcGkpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2VhdGhlckFwaVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdpcGh5QXBpXCIpID09PSBudWxsKSB7XHJcbiAgICBsb2dpbkNyZWF0b3IoKTtcclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2VsY29tZSFcIik7XHJcbn1cclxuXHJcbi8vY29uc29sZS5sb2coXCJXZWF0aGVyIEFQSSBhbmQgR2lwaHkgQVBJOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2VhdGhlckFwaVwiKSArIFwiLCBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2lwaHlBcGlcIikpO1xyXG5cclxuZXhwb3J0IHsgd2VhdGhlckFwaSwgZ2lwaHlBcGkgfTtcclxuIiwiaW1wb3J0IHsgY2l0eUluZm9NaW5pZmllZCwgc2VhcmNoZWRDaXR5IH0gZnJvbSBcIi4vZ2V0V2VhdGhlckluZm9cIjtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUdpZigpIHtcclxuICAgIGlmIChzZWFyY2hlZENpdHkgIT09IFwiXCIpIHtcclxuICAgICAgICBnaWZMb29wKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdpZkxvb3AoKSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBjaGFuZ2VHaWYgfTsiLCJpbXBvcnQgeyBzZWFyY2hlZENpdHksIGNpdHlJbmZvTWluaWZpZWQgfSBmcm9tIFwiLi9nZXRXZWF0aGVySW5mb1wiO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2l0eUluZm8oKSB7XHJcbiAgICBpZiAoc2VhcmNoZWRDaXR5ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgY2l0eUxvb3AoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2l0eUxvb3AoKSB7XHJcbiAgICBsZXQgYWxsQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGFsbENpdHlbaV0udGV4dENvbnRlbnQgPSBzZWFyY2hlZENpdHk7XHJcbiAgICAgICAgbGV0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LVwiICsgaSk7XHJcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gY2l0eUluZm9NaW5pZmllZFtcIm5leHRcIiArIGldWzBdO1xyXG5cclxuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1cIiArIGkpO1xyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBjaXR5SW5mb01pbmlmaWVkW1wibmV4dFwiICsgaV1bM107XHJcblxyXG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLVwiICsgaSk7XHJcbiAgICAgICAgaWNvbi5zcmMgPSBjaXR5SW5mb01pbmlmaWVkW1wibmV4dFwiICsgaV1bMl07XHJcblxyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGFsbENpdHlbM10udGV4dENvbnRlbnQgPSBzZWFyY2hlZENpdHk7XHJcbiAgICAgICAgICAgIGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LS0wXCIpO1xyXG4gICAgICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBjaXR5SW5mb01pbmlmaWVkW1wiY3VycmVudFwiXVswXTtcclxuICAgICAgICAgICAgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC0tMFwiKTtcclxuICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGNpdHlJbmZvTWluaWZpZWRbXCJjdXJyZW50XCJdWzNdO1xyXG4gICAgICAgICAgICBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLS0wXCIpO1xyXG4gICAgICAgICAgICBpY29uLnNyYyA9IGNpdHlJbmZvTWluaWZpZWRbXCJjdXJyZW50XCJdWzJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY2hhbmdlQ2l0eUluZm8gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9sb2dpblN0eWxlLmNzc1wiO1xyXG5pbXBvcnQge30gZnJvbSBcIi4vbG9naW5BcGlcIjtcclxuaW1wb3J0IHt9IGZyb20gXCIuL2dldFdlYXRoZXJJbmZvXCI7XHJcbmltcG9ydCB7fSBmcm9tIFwiLi9wdXNoR2lwaHlHaWZcIjtcclxuaW1wb3J0IHt9IGZyb20gXCIuL3B1c2hXZWF0aGVySW5mb1wiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=