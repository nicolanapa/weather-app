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
}

.right-half {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 1fr;
    margin: 10px 30px 10px 5px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,6CAA6C;IAC7C,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC;IACtC,4BAA4B;IAC5B,+BAA+B;IAC/B,kCAAkC;AACtC;;AAEA;;IAEI,SAAS;IACT,mBAAmB;IACnB,oCAAoC;IACpC,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;IAC7B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,aAAa;IACb,sCAAsC;IACtC,4BAA4B;IAC5B,+BAA+B;IAC/B,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,sCAAsC;IACtC,6BAA6B;IAC7B,gCAAgC;IAChC,kCAAkC;AACtC;;AAEA;IACI,oCAAoC;IACpC,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,sCAAsC;IACtC,kCAAkC;IAClC,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap\");\r\n\r\n* {\r\n    font-family: roboto, \"Roboto Flex\", system-ui;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(53, 47, 68);\r\n}\r\n\r\n.form-search {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    border-top-left-radius: 35px;\r\n    border-bottom-left-radius: 35px;\r\n    background-color: rgb(92, 84, 112);\r\n}\r\n\r\n#city-input,\r\n#search-button {\r\n    border: 0;\r\n    border-radius: 20px;\r\n    background-color: rgb(255, 240, 209);\r\n    padding: 22.5px;\r\n    margin: 25px 5px;\r\n    font-weight: 500;\r\n}\r\n\r\n#search-button {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n}\r\n\r\n.credits {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 25px 10px;\r\n}\r\n\r\n.left-half {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 120px 1fr;\r\n    margin: 10px 30px 10px 5px;\r\n}\r\n\r\n.forecast-display {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    padding: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    border-top-left-radius: 35px;\r\n    border-bottom-left-radius: 35px;\r\n    background-color: rgb(92, 84, 112);\r\n}\r\n\r\n.forecast-display > div {\r\n    background-color: rgb(255, 240, 209);\r\n    border-radius: 20px;\r\n    margin: 30px 5%;\r\n    padding: 25px 0 10px 18px;\r\n}\r\n\r\n.forecast-display > div > .weather-images {\r\n    display: grid;\r\n    grid-template-columns: 88px 1.3fr 2.8fr;\r\n    align-items: center;\r\n    padding: 20px 10px;\r\n}\r\n\r\n.temp {\r\n    display: flex;\r\n    margin: 6px 0 -10px -12px;\r\n}\r\n\r\n.gif {\r\n    justify-self: end;\r\n    margin-right: 20%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.website-container {\r\n    display: grid;\r\n    grid-template-columns: 1.8fr 3fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n\r\n.right-half {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 40% 1fr;\r\n    margin: 10px 30px 10px 5px;\r\n}\r\n\r\n.current-0 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    border-top-right-radius: 35px;\r\n    border-bottom-right-radius: 35px;\r\n    background-color: rgb(92, 84, 112);\r\n}\r\n\r\n.current-0 > h2 {\r\n    background-color: rgb(255, 240, 209);\r\n    font-size: calc(1rem + 1vh + 1vw);\r\n    border-radius: 30px;\r\n    padding: 60px;\r\n}\r\n\r\n.double-container {\r\n    display: grid;\r\n    grid-template-columns: 2fr 3fr;\r\n    padding: 20px;\r\n    border: 2.5px solid rgb(185, 180, 199);\r\n    background-color: rgb(92, 84, 112);\r\n    border-top-right-radius: 35px;\r\n    border-bottom-right-radius: 35px;\r\n}\r\n\r\n.double-container > div {\r\n    background-color: rgb(255, 240, 209);\r\n    padding: 20px;\r\n    margin: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.weather-bigger {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.bigger-gif {\r\n    display: grid;\r\n    max-height: 1000px;\r\n}\r\n\r\n.bigger-gif > img {\r\n    justify-self: center;\r\n    align-self: center;\r\n    margin-right: 0;\r\n    border-radius: 40px;\r\n}\r\n"],"sourceRoot":""}]);
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

console.log(
    //"Weather API and Giphy API: " + localStorage.getItem("weatherApi") + ", " + localStorage.getItem("giphyApi"),
);




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSx3Q0FBd0Msb0JBQW9CLHFCQUFxQixzQkFBc0IsNkNBQTZDLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQyxLQUFLLG9DQUFvQyw4QkFBOEIsS0FBSyxlQUFlLG1CQUFtQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixLQUFLLHNCQUFzQixzQkFBc0Isd0JBQXdCLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLEtBQUssdUJBQXVCO0FBQ2hnQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9KQUFvSjtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlB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V0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ0U7QUFDTTtBQUNGO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9sb2dpblN0eWxlLmNzcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvbG9naW5TdHlsZS5jc3M/NWUxOCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL2dldFdlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL2xvZ2luQXBpLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL3B1c2hHaXBoeUdpZi5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9wdXNoV2VhdGhlckluZm8uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNkaWFsb2dMb2dpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XHJcbn1cclxuXHJcbi5mb3JtTG9naW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtTG9naW4gPiBsYWJlbCArIGlucHV0IHtcclxuICAgIG1hcmdpbjogMTBweCAwIDM1cHggMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuI2xvZ2luQnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sb2dpblN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2RpYWxvZ0xvZ2luIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUxvZ2luIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtTG9naW4gPiBsYWJlbCArIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMzVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dpbkJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rRmxleDpvcHN6LHdnaHRAOC4uMTQ0LDEwMC4uMTAwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bywgXCJSb2JvdG8gRmxleFwiLCBzeXN0ZW0tdWk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNDcsIDY4KTtcclxufVxyXG5cclxuLmZvcm0tc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigxODUsIDE4MCwgMTk5KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcclxufVxyXG5cclxuI2NpdHktaW5wdXQsXHJcbiNzZWFyY2gtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XHJcbiAgICBwYWRkaW5nOiAyMi41cHg7XHJcbiAgICBtYXJnaW46IDI1cHggNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI3NlYXJjaC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY3JlZGl0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWhhbGYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnI7XHJcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDVweDtcclxufVxyXG5cclxuLmZvcmVjYXN0LWRpc3BsYXkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigxODUsIDE4MCwgMTk5KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcclxufVxyXG5cclxuLmZvcmVjYXN0LWRpc3BsYXkgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogMzBweCA1JTtcclxuICAgIHBhZGRpbmc6IDI1cHggMCAxMHB4IDE4cHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1kaXNwbGF5ID4gZGl2ID4gLndlYXRoZXItaW1hZ2VzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg4cHggMS4zZnIgMi44ZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG59XHJcblxyXG4udGVtcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA2cHggMCAtMTBweCAtMTJweDtcclxufVxyXG5cclxuLmdpZiB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLndlYnNpdGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuOGZyIDNmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG59XHJcblxyXG4ucmlnaHQtaGFsZiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwJSAxZnI7XHJcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDVweDtcclxufVxyXG5cclxuLmN1cnJlbnQtMCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XHJcbn1cclxuXHJcbi5jdXJyZW50LTAgPiBoMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNjBweDtcclxufVxyXG5cclxuLmRvdWJsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigxODUsIDE4MCwgMTk5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG59XHJcblxyXG4uZG91YmxlLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLndlYXRoZXItYmlnZ2VyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWdnZXItZ2lmIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuXHJcbi5iaWdnZXItZ2lmID4gaW1nIHtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rRmxleDpvcHN6LHdnaHRAOC4uMTQ0LDEwMC4uMTAwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bywgXFxcIlJvYm90byBGbGV4XFxcIiwgc3lzdGVtLXVpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDQ3LCA2OCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXNlYXJjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigxODUsIDE4MCwgMTk5KTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NpdHktaW5wdXQsXFxyXFxuI3NlYXJjaC1idXR0b24ge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcXHJcXG4gICAgcGFkZGluZzogMjIuNXB4O1xcclxcbiAgICBtYXJnaW46IDI1cHggNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWRpdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtaGFsZiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1kaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDg0LCAxMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtZGlzcGxheSA+IGRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDUlO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4IDAgMTBweCAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtZGlzcGxheSA+IGRpdiA+IC53ZWF0aGVyLWltYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODhweCAxLjNmciAyLjhmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogNnB4IDAgLTEwcHggLTEycHg7XFxyXFxufVxcclxcblxcclxcbi5naWYge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWJzaXRlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS44ZnIgM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWhhbGYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MCUgMWZyO1xcclxcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtMCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigxODUsIDE4MCwgMTk5KTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDg0LCAxMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC0wID4gaDIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgcGFkZGluZzogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdWJsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDg0LCAxMTIpO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5kb3VibGUtY29udGFpbmVyID4gZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWJpZ2dlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnZ2VyLWdpZiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZ2dlci1naWYgPiBpbWcge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpblN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgd2VhdGhlckFwaSB9IGZyb20gXCIuL2xvZ2luQXBpXCI7XHJcbmltcG9ydCB7IGNoYW5nZUdpZiB9IGZyb20gXCIuL3B1c2hHaXBoeUdpZlwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VDaXR5SW5mbyB9IGZyb20gXCIuL3B1c2hXZWF0aGVySW5mb1wiO1xyXG5cclxubGV0IHNlYXJjaGVkQ2l0eSA9IFwiXCI7XHJcbmxldCBjaXR5SW5mbyA9IFwiXCI7XHJcbmxldCBjaXR5SW5mb01pbmlmaWVkID0gXCJcIjtcclxuXHJcbmZ1bmN0aW9uIGRhdGVDaGVja2VyKCkge1xyXG4gICAgLy8gQ3JlYXRlcyBhbiB2YXJpYWJsZSB3aXRoIHRvZGF5J3MgZGF0ZVxyXG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBpZiAodG9kYXlEYXRlLmdldE1vbnRoKCkgPD0gOSAmJiB0b2RheURhdGUuZ2V0RGF0ZSgpIDw9IDkpIHtcclxuICAgICAgICB0b2RheURhdGUgPSB0b2RheURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLTBcIiArICh0b2RheURhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItMFwiICsgdG9kYXlEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9nZ2kgw6ggaWwgXCIgKyB0b2RheURhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0b2RheURhdGUuZ2V0TW9udGgoKSA8PSA5ICYmIHRvZGF5RGF0ZS5nZXREYXRlKCkgPj0gOSkge1xyXG4gICAgICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRGdWxsWWVhcigpICsgXCItMFwiICsgKHRvZGF5RGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIHRvZGF5RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPZ2dpIMOoIGlsIFwiICsgdG9kYXlEYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodG9kYXlEYXRlLmdldERhdGUoKSA8PSA5ICYmIHRvZGF5RGF0ZS5nZXRNb250aCgpID49IDkpIHtcclxuICAgICAgICB0b2RheURhdGUgPSB0b2RheURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKHRvZGF5RGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi0wXCIgKyB0b2RheURhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2dnaSDDqCBpbCBcIiArIHRvZGF5RGF0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAodG9kYXlEYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgdG9kYXlEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9nZ2kgw6ggaWwgXCIgKyB0b2RheURhdGUpO1xyXG4gICAgfVxyXG4gICAgdG9kYXlEYXRlID0gU3RyaW5nKHRvZGF5RGF0ZSk7XHJcbiAgICByZXR1cm4gdG9kYXlEYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hDaXR5KCkge1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tc2VhcmNoXCIpO1xyXG4gICAgbGV0IGlucHV0Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eS1pbnB1dFwiKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICBzZWFyY2hlZENpdHkgPSBpbnB1dENpdHkudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IHNlYXJjaGVkOiBcIiArIHNlYXJjaGVkQ2l0eSk7XHJcbiAgICAgICAgZ2V0Q2l0eUluZm8oKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuc2VhcmNoQ2l0eSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eUluZm8oKSB7XHJcbiAgICBjaXR5SW5mbyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9XCIgKyB3ZWF0aGVyQXBpICsgXCImcT1cIiArIHNlYXJjaGVkQ2l0eSArIFwiJmRheXM9M1wiLFxyXG4gICAgKTtcclxuICAgIGNpdHlJbmZvID0gYXdhaXQgY2l0eUluZm8uanNvbigpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coY2l0eUluZm8pO1xyXG4gICAgcHJvY2Vzc0NpdHlJbmZvKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NDaXR5SW5mbygpIHtcclxuICAgIC8vbmV3IG9iamVjdCB0aGF0IG9ubHkgdGFrZXMgdGhlIG5lZWRlZCB2YWx1ZXNcclxuICAgIGNpdHlJbmZvTWluaWZpZWQgPSB7XHJcbiAgICAgICAgLy8gW2NpdHkgbmFtZSwgY2l0eSBjb3VudHJ5XVxyXG4gICAgICAgIGxvY2F0aW9uOiBbY2l0eUluZm8ubG9jYXRpb24ubmFtZSwgY2l0eUluZm8ubG9jYXRpb24uY291bnRyeV0sXHJcbiAgICAgICAgLy8gW2N1cnJlbnQgZGF5LCBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW4sIGN1cnJlbnQgaWNvbiBmaWxlLCBjdXJyZW50IHRlbXBlcmF0dXJlXVxyXG4gICAgICAgIGN1cnJlbnQ6IFtkYXRlQ2hlY2tlcigpLCBjaXR5SW5mby5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LCBmcm9tV2ViVG9Mb2NhbEljb25zMigpLCBjaXR5SW5mby5jdXJyZW50LnRlbXBfY10sXHJcbiAgICAgICAgbmV4dDA6IFtcclxuICAgICAgICAgICAgLy8gW2RhdGUsIHdlYXRoZXIgY29uZGl0aW9uLCBpY29uIGZpbGUsIGF2ZXJhZ2UgdGVtcGVyYXR1cmVdXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjBcIl1bXCJkYXRlXCJdLFxyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIwXCJdW1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1widGV4dFwiXSxcclxuICAgICAgICAgICAgZnJvbVdlYlRvTG9jYWxJY29ucygpLFxyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIwXCJdW1wiZGF5XCJdW1wiYXZndGVtcF9jXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmV4dDE6IFtcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMVwiXVtcImRhdGVcIl0sXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjFcIl1bXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgICBmcm9tV2ViVG9Mb2NhbEljb25zKCksXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjFcIl1bXCJkYXlcIl1bXCJhdmd0ZW1wX2NcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuZXh0MjogW1xyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIyXCJdW1wiZGF0ZVwiXSxcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMlwiXVtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl0sXHJcbiAgICAgICAgICAgIGZyb21XZWJUb0xvY2FsSWNvbnMoKSxcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMlwiXVtcImRheVwiXVtcImF2Z3RlbXBfY1wiXSxcclxuICAgICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBmcm9tV2ViVG9Mb2NhbEljb25zKCkge1xyXG4gICAgICAgIGxldCBzdHJUZW1wb3JhcnkgPSBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIxXCJdW1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1wiaWNvblwiXTtcclxuICAgICAgICBzdHJUZW1wb3JhcnkgPSBzdHJUZW1wb3JhcnkucmVwbGFjZShcIi8vY2RuLndlYXRoZXJhcGkuY29tL1wiLCBcIi4uL3NyYy9cIik7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJUZW1wb3Jhcnk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZnJvbVdlYlRvTG9jYWxJY29uczIoKSB7XHJcbiAgICAgICAgbGV0IHN0clRlbXBvcmFyeSA9IGNpdHlJbmZvLmN1cnJlbnQuY29uZGl0aW9uLmljb247XHJcbiAgICAgICAgc3RyVGVtcG9yYXJ5ID0gc3RyVGVtcG9yYXJ5LnJlcGxhY2UoXCIvL2Nkbi53ZWF0aGVyYXBpLmNvbS9cIiwgXCIuLi9zcmMvXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RyVGVtcG9yYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNpdHlJbmZvTWluaWZpZWQpO1xyXG4gICAgY29uc29sZS50YWJsZShjaXR5SW5mb01pbmlmaWVkKTtcclxuXHJcbiAgICBjaGFuZ2VDaXR5SW5mbygpO1xyXG4gICAgY2hhbmdlR2lmKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNlYXJjaGVkQ2l0eSwgY2l0eUluZm9NaW5pZmllZCB9O1xyXG4iLCJsZXQgd2VhdGhlckFwaSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2VhdGhlckFwaVwiKTtcclxubGV0IGdpcGh5QXBpID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnaXBoeUFwaVwiKTtcclxuXHJcbmZ1bmN0aW9uIGxvZ2luQ3JlYXRvcigpIHtcclxuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWJzaXRlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcclxuICAgIGRpYWxvZy5vcGVuID0gXCJ0cnVlXCI7XHJcbiAgICBkaWFsb2cuaWQgPSBcImRpYWxvZ0xvZ2luXCI7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgIGZvcm0uYWN0aW9uID0gXCIjXCI7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtTG9naW5cIik7XHJcblxyXG4gICAgbGV0IGxhYmVsV2VhdGhlckFwaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsV2VhdGhlckFwaS50ZXh0Q29udGVudCA9IFwiRW50ZXIgeW91ciBXZWF0aGVyIEFQSVwiO1xyXG4gICAgbGFiZWxXZWF0aGVyQXBpLmlkID0gXCJ3ZWF0aGVyQXBpXCI7XHJcbiAgICBsZXQgaW5wdXRXZWF0aGVyQXBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRXZWF0aGVyQXBpLmlkID0gXCJ3ZWF0aGVyQXBpXCI7XHJcbiAgICBpbnB1dFdlYXRoZXJBcGkucGxhY2Vob2xkZXIgPSBcImRrNDJkbDQuLi5cIjtcclxuXHJcbiAgICBsZXQgbGFiZWxHaXBoeUFwaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsR2lwaHlBcGkudGV4dENvbnRlbnQgPSBcIkVudGVyIHlvdXIgR2lwaHkgQVBJXCI7XHJcbiAgICBsYWJlbEdpcGh5QXBpLmlkID0gXCJnaXBoeUFwaVwiO1xyXG4gICAgbGV0IGlucHV0R2lwaHlBcGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dEdpcGh5QXBpLmlkID0gXCJnaXBoeUFwaVwiO1xyXG4gICAgaW5wdXRHaXBoeUFwaS5wbGFjZWhvbGRlciA9IFwiamRuMmtkc2YwNGYzLi4uXCI7XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkxvZ2luXCI7XHJcbiAgICBidXR0b24uaWQgPSBcImxvZ2luQnV0dG9uXCI7XHJcblxyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2cpO1xyXG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFdlYXRoZXJBcGkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFdlYXRoZXJBcGkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbEdpcGh5QXBpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRHaXBoeUFwaSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGRpYWxvZy5vcGVuID0gXCJmYWxzZVwiO1xyXG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIHdlYXRoZXJBcGkgPSBpbnB1dFdlYXRoZXJBcGkudmFsdWU7XHJcbiAgICAgICAgZ2lwaHlBcGkgPSBpbnB1dEdpcGh5QXBpLnZhbHVlO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndlYXRoZXJBcGlcIiwgd2VhdGhlckFwaSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnaXBoeUFwaVwiLCBnaXBoeUFwaSk7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2VhdGhlckFwaSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnaXBoeUFwaSk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3ZWF0aGVyQXBpXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2lwaHlBcGlcIikgPT09IG51bGwpIHtcclxuICAgIGxvZ2luQ3JlYXRvcigpO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coXCJXZWxjb21lIVwiKTtcclxufVxyXG5cclxuY29uc29sZS5sb2coXHJcbiAgICAvL1wiV2VhdGhlciBBUEkgYW5kIEdpcGh5IEFQSTogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndlYXRoZXJBcGlcIikgKyBcIiwgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdpcGh5QXBpXCIpLFxyXG4pO1xyXG5cclxuZXhwb3J0IHsgd2VhdGhlckFwaSwgZ2lwaHlBcGkgfTtcclxuIiwiaW1wb3J0IHsgY2l0eUluZm9NaW5pZmllZCwgc2VhcmNoZWRDaXR5IH0gZnJvbSBcIi4vZ2V0V2VhdGhlckluZm9cIjtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUdpZigpIHtcclxuICAgIGlmIChzZWFyY2hlZENpdHkgIT09IFwiXCIpIHtcclxuICAgICAgICBnaWZMb29wKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdpZkxvb3AoKSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBjaGFuZ2VHaWYgfTsiLCJpbXBvcnQgeyBzZWFyY2hlZENpdHksIGNpdHlJbmZvTWluaWZpZWQgfSBmcm9tIFwiLi9nZXRXZWF0aGVySW5mb1wiO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2l0eUluZm8oKSB7XHJcbiAgICBpZiAoc2VhcmNoZWRDaXR5ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgY2l0eUxvb3AoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2l0eUxvb3AoKSB7XHJcbiAgICBsZXQgYWxsQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGFsbENpdHlbaV0udGV4dENvbnRlbnQgPSBzZWFyY2hlZENpdHk7XHJcbiAgICAgICAgbGV0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LVwiICsgaSk7XHJcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gY2l0eUluZm9NaW5pZmllZFtcIm5leHRcIiArIGldWzBdO1xyXG5cclxuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1cIiArIGkpO1xyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBjaXR5SW5mb01pbmlmaWVkW1wibmV4dFwiICsgaV1bM107XHJcblxyXG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLVwiICsgaSk7XHJcbiAgICAgICAgaWNvbi5zcmMgPSBjaXR5SW5mb01pbmlmaWVkW1wibmV4dFwiICsgaV1bMl07XHJcblxyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGFsbENpdHlbM10udGV4dENvbnRlbnQgPSBzZWFyY2hlZENpdHk7XHJcbiAgICAgICAgICAgIGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LS0wXCIpO1xyXG4gICAgICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBjaXR5SW5mb01pbmlmaWVkW1wiY3VycmVudFwiXVswXTtcclxuICAgICAgICAgICAgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC0tMFwiKTtcclxuICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGNpdHlJbmZvTWluaWZpZWRbXCJjdXJyZW50XCJdWzNdO1xyXG4gICAgICAgICAgICBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLS0wXCIpO1xyXG4gICAgICAgICAgICBpY29uLnNyYyA9IGNpdHlJbmZvTWluaWZpZWRbXCJjdXJyZW50XCJdWzJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY2hhbmdlQ2l0eUluZm8gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9sb2dpblN0eWxlLmNzc1wiO1xyXG5pbXBvcnQge30gZnJvbSBcIi4vbG9naW5BcGlcIjtcclxuaW1wb3J0IHt9IGZyb20gXCIuL2dldFdlYXRoZXJJbmZvXCI7XHJcbmltcG9ydCB7fSBmcm9tIFwiLi9wdXNoR2lwaHlHaWZcIjtcclxuaW1wb3J0IHt9IGZyb20gXCIuL3B1c2hXZWF0aGVySW5mb1wiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=