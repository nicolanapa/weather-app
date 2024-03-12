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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSx3Q0FBd0Msb0JBQW9CLHFCQUFxQixzQkFBc0IsNkNBQTZDLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQyxLQUFLLG9DQUFvQyw4QkFBOEIsS0FBSyxlQUFlLG1CQUFtQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixLQUFLLHNCQUFzQixzQkFBc0Isd0JBQXdCLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLEtBQUssdUJBQXVCO0FBQ2hnQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9KQUFvSjtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksd0lBQXdJLFdBQVcsd0RBQXdELGtCQUFrQixtQkFBbUIsS0FBSyxjQUFjLDBDQUEwQyxLQUFLLHNCQUFzQixzQkFBc0IsZ0NBQWdDLDRCQUE0QiwrQ0FBK0MscUNBQXFDLHdDQUF3QywyQ0FBMkMsS0FBSyx3Q0FBd0Msa0JBQWtCLDRCQUE0Qiw2Q0FBNkMsd0JBQXdCLHlCQUF5Qix5QkFBeUIsS0FBSyx3QkFBd0Isc0JBQXNCLDRCQUE0Qix3QkFBd0IseUJBQXlCLEtBQUssa0JBQWtCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLGdDQUFnQywyQkFBMkIsS0FBSyxvQkFBb0Isc0JBQXNCLG1DQUFtQyxzQ0FBc0MsbUNBQW1DLEtBQUssMkJBQTJCLHNCQUFzQixtQ0FBbUMsMkNBQTJDLHNCQUFzQiwrQ0FBK0MscUNBQXFDLHdDQUF3QywyQ0FBMkMsS0FBSyxpQ0FBaUMsNkNBQTZDLDRCQUE0Qix3QkFBd0Isa0NBQWtDLEtBQUssbURBQW1ELHNCQUFzQixnREFBZ0QsNEJBQTRCLDJCQUEyQixLQUFLLGVBQWUsc0JBQXNCLGtDQUFrQyxLQUFLLGNBQWMsMEJBQTBCLDBCQUEwQiw0QkFBNEIsS0FBSyw0QkFBNEIsc0JBQXNCLHlDQUF5QyxnQ0FBZ0MsS0FBSyxxQkFBcUIsc0JBQXNCLG1DQUFtQyxvQ0FBb0MsbUNBQW1DLEtBQUssb0JBQW9CLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLDRCQUE0QiwrQ0FBK0Msc0NBQXNDLHlDQUF5QywyQ0FBMkMsS0FBSyx5QkFBeUIsNkNBQTZDLDBDQUEwQyw0QkFBNEIsc0JBQXNCLEtBQUssMkJBQTJCLHNCQUFzQix1Q0FBdUMsc0JBQXNCLCtDQUErQywyQ0FBMkMsc0NBQXNDLHlDQUF5QyxLQUFLLGlDQUFpQyw2Q0FBNkMsc0JBQXNCLHFCQUFxQiw0QkFBNEIsS0FBSyx5QkFBeUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsS0FBSyxxQkFBcUIsc0JBQXNCLDJCQUEyQixLQUFLLDJCQUEyQiw2QkFBNkIsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsS0FBSyx1QkFBdUI7QUFDeDZKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaksxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywyRkFBTzs7OztBQUlrRDtBQUMxRSxPQUFPLGlFQUFlLDJGQUFPLElBQUksMkZBQU8sVUFBVSwyRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNHO0FBQ1E7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsaURBQVU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFjO0FBQ2xCLElBQUksd0RBQVM7QUFDYjtBQUNBO0FBQzBDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEcxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFa0M7QUFDbEU7QUFDQTtBQUNBLFFBQVEseURBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hrRTtBQUNsRTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLGlDQUFpQyx5REFBWTtBQUM3QztBQUNBLDBCQUEwQiw2REFBZ0I7QUFDMUM7QUFDQTtBQUNBLDJCQUEyQiw2REFBZ0I7QUFDM0M7QUFDQTtBQUNBLG1CQUFtQiw2REFBZ0I7QUFDbkM7QUFDQTtBQUNBLHFDQUFxQyx5REFBWTtBQUNqRDtBQUNBLDhCQUE4Qiw2REFBZ0I7QUFDOUM7QUFDQSwrQkFBK0IsNkRBQWdCO0FBQy9DO0FBQ0EsdUJBQXVCLDZEQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7OztVQ2xDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0s7QUFDRTtBQUNNO0FBQ0Y7QUFDRyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL2xvZ2luU3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9sb2dpblN0eWxlLmNzcz81ZTE4Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvZ2V0V2VhdGhlckluZm8uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvbG9naW5BcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvLi9zcmMvcHVzaEdpcGh5R2lmLmpzIiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzLy4vc3JjL3B1c2hXZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11c2VyLWludGVyZmFjZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtdXNlci1pbnRlcmZhY2VzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9keW5hbWljLXVzZXItaW50ZXJmYWNlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2RpYWxvZ0xvZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcclxufVxyXG5cclxuLmZvcm1Mb2dpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm1Mb2dpbiA+IGxhYmVsICsgaW5wdXQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMzVweCAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4jbG9naW5CdXR0b24ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xvZ2luU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZGlhbG9nTG9naW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtTG9naW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Mb2dpbiA+IGxhYmVsICsgaW5wdXQge1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAzNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ2luQnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytGbGV4Om9wc3osd2dodEA4Li4xNDQsMTAwLi4xMDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvLCBcIlJvYm90byBGbGV4XCIsIHN5c3RlbS11aTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA0NywgNjgpO1xyXG59XHJcblxyXG4uZm9ybS1zZWFyY2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDg0LCAxMTIpO1xyXG59XHJcblxyXG4jY2l0eS1pbnB1dCxcclxuI3NlYXJjaC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcclxuICAgIHBhZGRpbmc6IDIyLjVweDtcclxuICAgIG1hcmdpbjogMjVweCA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jcmVkaXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcclxufVxyXG5cclxuLmxlZnQtaGFsZiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmcjtcclxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNXB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3QtZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDg0LCAxMTIpO1xyXG59XHJcblxyXG4uZm9yZWNhc3QtZGlzcGxheSA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDUlO1xyXG4gICAgcGFkZGluZzogMjVweCAwIDEwcHggMThweDtcclxufVxyXG5cclxuLmZvcmVjYXN0LWRpc3BsYXkgPiBkaXYgPiAud2VhdGhlci1pbWFnZXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODhweCAxLjNmciAyLjhmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDZweCAwIC0xMHB4IC0xMnB4O1xyXG59XHJcblxyXG4uZ2lmIHtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ud2Vic2l0ZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS44ZnIgM2ZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbn1cclxuXHJcbi5yaWdodC1oYWxmIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDAlIDFmcjtcclxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNXB4O1xyXG59XHJcblxyXG4uY3VycmVudC0wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcclxufVxyXG5cclxuLmN1cnJlbnQtMCA+IGgyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG59XHJcblxyXG4uZG91YmxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA4NCwgMTEyKTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XHJcbn1cclxuXHJcbi5kb3VibGUtY29udGFpbmVyID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ud2VhdGhlci1iaWdnZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJpZ2dlci1naWYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuLmJpZ2dlci1naWYgPiBpbWcge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLDZDQUE2QztJQUM3QyxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytGbGV4Om9wc3osd2dodEA4Li4xNDQsMTAwLi4xMDAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgICBmb250LWZhbWlseTogcm9ib3RvLCBcXFwiUm9ib3RvIEZsZXhcXFwiLCBzeXN0ZW0tdWk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNDcsIDY4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc2VhcmNoIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDg0LCAxMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2l0eS1pbnB1dCxcXHJcXG4jc2VhcmNoLWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xcclxcbiAgICBwYWRkaW5nOiAyMi41cHg7XFxyXFxuICAgIG1hcmdpbjogMjVweCA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlZGl0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMjVweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1oYWxmIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyO1xcclxcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWRpc3BsYXkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1kaXNwbGF5ID4gZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQwLCAyMDkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDMwcHggNSU7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHggMCAxMHB4IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1kaXNwbGF5ID4gZGl2ID4gLndlYXRoZXItaW1hZ2VzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4OHB4IDEuM2ZyIDIuOGZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiA2cHggMCAtMTBweCAtMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZiB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYnNpdGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjhmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtaGFsZiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwJSAxZnI7XFxyXFxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC0wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDE4NSwgMTgwLCAxOTkpO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LTAgPiBoMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MCwgMjA5KTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdmggKyAxdncpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG91YmxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMTg1LCAxODAsIDE5OSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgODQsIDExMik7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdWJsZS1jb250YWluZXIgPiBkaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDAsIDIwOSk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItYmlnZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaWdnZXItZ2lmIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnZ2VyLWdpZiA+IGltZyB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW5TdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB3ZWF0aGVyQXBpIH0gZnJvbSBcIi4vbG9naW5BcGlcIjtcclxuaW1wb3J0IHsgY2hhbmdlR2lmIH0gZnJvbSBcIi4vcHVzaEdpcGh5R2lmXCI7XHJcbmltcG9ydCB7IGNoYW5nZUNpdHlJbmZvIH0gZnJvbSBcIi4vcHVzaFdlYXRoZXJJbmZvXCI7XHJcblxyXG5sZXQgc2VhcmNoZWRDaXR5ID0gXCJcIjtcclxubGV0IGNpdHlJbmZvID0gXCJcIjtcclxubGV0IGNpdHlJbmZvTWluaWZpZWQgPSBcIlwiO1xyXG5cclxuZnVuY3Rpb24gZGF0ZUNoZWNrZXIoKSB7XHJcbiAgICAvLyBDcmVhdGVzIGFuIHZhcmlhYmxlIHdpdGggdG9kYXkncyBkYXRlXHJcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGlmICh0b2RheURhdGUuZ2V0TW9udGgoKSA8PSA5ICYmIHRvZGF5RGF0ZS5nZXREYXRlKCkgPD0gOSkge1xyXG4gICAgICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRGdWxsWWVhcigpICsgXCItMFwiICsgKHRvZGF5RGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi0wXCIgKyB0b2RheURhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2dnaSDDqCBpbCBcIiArIHRvZGF5RGF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZGF5RGF0ZS5nZXRNb250aCgpIDw9IDkgJiYgdG9kYXlEYXRlLmdldERhdGUoKSA+PSA5KSB7XHJcbiAgICAgICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi0wXCIgKyAodG9kYXlEYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgdG9kYXlEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9nZ2kgw6ggaWwgXCIgKyB0b2RheURhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0b2RheURhdGUuZ2V0RGF0ZSgpIDw9IDkgJiYgdG9kYXlEYXRlLmdldE1vbnRoKCkgPj0gOSkge1xyXG4gICAgICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAodG9kYXlEYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLTBcIiArIHRvZGF5RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPZ2dpIMOoIGlsIFwiICsgdG9kYXlEYXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArICh0b2RheURhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyB0b2RheURhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2dnaSDDqCBpbCBcIiArIHRvZGF5RGF0ZSk7XHJcbiAgICB9XHJcbiAgICB0b2RheURhdGUgPSBTdHJpbmcodG9kYXlEYXRlKTtcclxuICAgIHJldHVybiB0b2RheURhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaENpdHkoKSB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zZWFyY2hcIik7XHJcbiAgICBsZXQgaW5wdXRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5LWlucHV0XCIpO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHNlYXJjaGVkQ2l0eSA9IGlucHV0Q2l0eS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3Ugc2VhcmNoZWQ6IFwiICsgc2VhcmNoZWRDaXR5KTtcclxuICAgICAgICBnZXRDaXR5SW5mbygpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5zZWFyY2hDaXR5KCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDaXR5SW5mbygpIHtcclxuICAgIGNpdHlJbmZvID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1cIiArIHdlYXRoZXJBcGkgKyBcIiZxPVwiICsgc2VhcmNoZWRDaXR5ICsgXCImZGF5cz0zXCIsXHJcbiAgICApO1xyXG4gICAgY2l0eUluZm8gPSBhd2FpdCBjaXR5SW5mby5qc29uKCk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhjaXR5SW5mbyk7XHJcbiAgICBwcm9jZXNzQ2l0eUluZm8oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0NpdHlJbmZvKCkge1xyXG4gICAgLy9uZXcgb2JqZWN0IHRoYXQgb25seSB0YWtlcyB0aGUgbmVlZGVkIHZhbHVlc1xyXG4gICAgY2l0eUluZm9NaW5pZmllZCA9IHtcclxuICAgICAgICAvLyBbY2l0eSBuYW1lLCBjaXR5IGNvdW50cnldXHJcbiAgICAgICAgbG9jYXRpb246IFtjaXR5SW5mby5sb2NhdGlvbi5uYW1lLCBjaXR5SW5mby5sb2NhdGlvbi5jb3VudHJ5XSxcclxuICAgICAgICAvLyBbY3VycmVudCBkYXksIGN1cnJlbnQgd2VhdGhlciBjb25kaXRpbiwgY3VycmVudCBpY29uIGZpbGUsIGN1cnJlbnQgdGVtcGVyYXR1cmVdXHJcbiAgICAgICAgY3VycmVudDogW2RhdGVDaGVja2VyKCksIGNpdHlJbmZvLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsIGZyb21XZWJUb0xvY2FsSWNvbnMyKCksIGNpdHlJbmZvLmN1cnJlbnQudGVtcF9jXSxcclxuICAgICAgICBuZXh0MDogW1xyXG4gICAgICAgICAgICAvLyBbZGF0ZSwgd2VhdGhlciBjb25kaXRpb24sIGljb24gZmlsZSwgYXZlcmFnZSB0ZW1wZXJhdHVyZV1cclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMFwiXVtcImRhdGVcIl0sXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjBcIl1bXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJ0ZXh0XCJdLFxyXG4gICAgICAgICAgICBmcm9tV2ViVG9Mb2NhbEljb25zKCksXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjBcIl1bXCJkYXlcIl1bXCJhdmd0ZW1wX2NcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuZXh0MTogW1xyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIxXCJdW1wiZGF0ZVwiXSxcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMVwiXVtcImRheVwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl0sXHJcbiAgICAgICAgICAgIGZyb21XZWJUb0xvY2FsSWNvbnMoKSxcclxuICAgICAgICAgICAgY2l0eUluZm9bXCJmb3JlY2FzdFwiXVtcImZvcmVjYXN0ZGF5XCJdW1wiMVwiXVtcImRheVwiXVtcImF2Z3RlbXBfY1wiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG5leHQyOiBbXHJcbiAgICAgICAgICAgIGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjJcIl1bXCJkYXRlXCJdLFxyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIyXCJdW1wiZGF5XCJdW1wiY29uZGl0aW9uXCJdW1widGV4dFwiXSxcclxuICAgICAgICAgICAgZnJvbVdlYlRvTG9jYWxJY29ucygpLFxyXG4gICAgICAgICAgICBjaXR5SW5mb1tcImZvcmVjYXN0XCJdW1wiZm9yZWNhc3RkYXlcIl1bXCIyXCJdW1wiZGF5XCJdW1wiYXZndGVtcF9jXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGZyb21XZWJUb0xvY2FsSWNvbnMoKSB7XHJcbiAgICAgICAgbGV0IHN0clRlbXBvcmFyeSA9IGNpdHlJbmZvW1wiZm9yZWNhc3RcIl1bXCJmb3JlY2FzdGRheVwiXVtcIjFcIl1bXCJkYXlcIl1bXCJjb25kaXRpb25cIl1bXCJpY29uXCJdO1xyXG4gICAgICAgIHN0clRlbXBvcmFyeSA9IHN0clRlbXBvcmFyeS5yZXBsYWNlKFwiLy9jZG4ud2VhdGhlcmFwaS5jb20vXCIsIFwiLi4vc3JjL1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0clRlbXBvcmFyeTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmcm9tV2ViVG9Mb2NhbEljb25zMigpIHtcclxuICAgICAgICBsZXQgc3RyVGVtcG9yYXJ5ID0gY2l0eUluZm8uY3VycmVudC5jb25kaXRpb24uaWNvbjtcclxuICAgICAgICBzdHJUZW1wb3JhcnkgPSBzdHJUZW1wb3JhcnkucmVwbGFjZShcIi8vY2RuLndlYXRoZXJhcGkuY29tL1wiLCBcIi4uL3NyYy9cIik7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJUZW1wb3Jhcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY2l0eUluZm9NaW5pZmllZCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKGNpdHlJbmZvTWluaWZpZWQpO1xyXG5cclxuICAgIGNoYW5nZUNpdHlJbmZvKCk7XHJcbiAgICBjaGFuZ2VHaWYoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2VhcmNoZWRDaXR5LCBjaXR5SW5mb01pbmlmaWVkIH07XHJcbiIsImxldCB3ZWF0aGVyQXBpID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3ZWF0aGVyQXBpXCIpO1xyXG5sZXQgZ2lwaHlBcGkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdpcGh5QXBpXCIpO1xyXG5cclxuZnVuY3Rpb24gbG9naW5DcmVhdG9yKCkge1xyXG4gICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYnNpdGUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG4gICAgZGlhbG9nLm9wZW4gPSBcInRydWVcIjtcclxuICAgIGRpYWxvZy5pZCA9IFwiZGlhbG9nTG9naW5cIjtcclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBmb3JtLm1ldGhvZCA9IFwicG9zdFwiO1xyXG4gICAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1Mb2dpblwiKTtcclxuXHJcbiAgICBsZXQgbGFiZWxXZWF0aGVyQXBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWxXZWF0aGVyQXBpLnRleHRDb250ZW50ID0gXCJFbnRlciB5b3VyIFdlYXRoZXIgQVBJXCI7XHJcbiAgICBsYWJlbFdlYXRoZXJBcGkuaWQgPSBcIndlYXRoZXJBcGlcIjtcclxuICAgIGxldCBpbnB1dFdlYXRoZXJBcGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dFdlYXRoZXJBcGkuaWQgPSBcIndlYXRoZXJBcGlcIjtcclxuICAgIGlucHV0V2VhdGhlckFwaS5wbGFjZWhvbGRlciA9IFwiZGs0MmRsNC4uLlwiO1xyXG5cclxuICAgIGxldCBsYWJlbEdpcGh5QXBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWxHaXBoeUFwaS50ZXh0Q29udGVudCA9IFwiRW50ZXIgeW91ciBHaXBoeSBBUElcIjtcclxuICAgIGxhYmVsR2lwaHlBcGkuaWQgPSBcImdpcGh5QXBpXCI7XHJcbiAgICBsZXQgaW5wdXRHaXBoeUFwaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0R2lwaHlBcGkuaWQgPSBcImdpcGh5QXBpXCI7XHJcbiAgICBpbnB1dEdpcGh5QXBpLnBsYWNlaG9sZGVyID0gXCJqZG4ya2RzZjA0ZjMuLi5cIjtcclxuXHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTG9naW5cIjtcclxuICAgIGJ1dHRvbi5pZCA9IFwibG9naW5CdXR0b25cIjtcclxuXHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpYWxvZyk7XHJcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsV2VhdGhlckFwaSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0V2VhdGhlckFwaSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsR2lwaHlBcGkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEdpcGh5QXBpKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgZGlhbG9nLm9wZW4gPSBcImZhbHNlXCI7XHJcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgd2VhdGhlckFwaSA9IGlucHV0V2VhdGhlckFwaS52YWx1ZTtcclxuICAgICAgICBnaXBoeUFwaSA9IGlucHV0R2lwaHlBcGkudmFsdWU7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2VhdGhlckFwaVwiLCB3ZWF0aGVyQXBpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdpcGh5QXBpXCIsIGdpcGh5QXBpKTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyQXBpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdpcGh5QXBpKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndlYXRoZXJBcGlcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnaXBoeUFwaVwiKSA9PT0gbnVsbCkge1xyXG4gICAgbG9naW5DcmVhdG9yKCk7XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUhXCIpO1xyXG59XHJcblxyXG4vL2NvbnNvbGUubG9nKFwiV2VhdGhlciBBUEkgYW5kIEdpcGh5IEFQSTogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndlYXRoZXJBcGlcIikgKyBcIiwgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdpcGh5QXBpXCIpKTtcclxuXHJcbmV4cG9ydCB7IHdlYXRoZXJBcGksIGdpcGh5QXBpIH07XHJcbiIsImltcG9ydCB7IGNpdHlJbmZvTWluaWZpZWQsIHNlYXJjaGVkQ2l0eSB9IGZyb20gXCIuL2dldFdlYXRoZXJJbmZvXCI7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VHaWYoKSB7XHJcbiAgICBpZiAoc2VhcmNoZWRDaXR5ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgZ2lmTG9vcCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnaWZMb29wKCkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgY2hhbmdlR2lmIH07IiwiaW1wb3J0IHsgc2VhcmNoZWRDaXR5LCBjaXR5SW5mb01pbmlmaWVkIH0gZnJvbSBcIi4vZ2V0V2VhdGhlckluZm9cIjtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNpdHlJbmZvKCkge1xyXG4gICAgaWYgKHNlYXJjaGVkQ2l0eSAhPT0gXCJcIikge1xyXG4gICAgICAgIGNpdHlMb29wKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNpdHlMb29wKCkge1xyXG4gICAgbGV0IGFsbENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBhbGxDaXR5W2ldLnRleHRDb250ZW50ID0gc2VhcmNoZWRDaXR5O1xyXG4gICAgICAgIGxldCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS1cIiArIGkpO1xyXG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9IGNpdHlJbmZvTWluaWZpZWRbXCJuZXh0XCIgKyBpXVswXTtcclxuXHJcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtXCIgKyBpKTtcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gY2l0eUluZm9NaW5pZmllZFtcIm5leHRcIiArIGldWzNdO1xyXG5cclxuICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1cIiArIGkpO1xyXG4gICAgICAgIGljb24uc3JjID0gY2l0eUluZm9NaW5pZmllZFtcIm5leHRcIiArIGldWzJdO1xyXG5cclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICBhbGxDaXR5WzNdLnRleHRDb250ZW50ID0gc2VhcmNoZWRDaXR5O1xyXG4gICAgICAgICAgICBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS0tMFwiKTtcclxuICAgICAgICAgICAgZGF5LnRleHRDb250ZW50ID0gY2l0eUluZm9NaW5pZmllZFtcImN1cnJlbnRcIl1bMF07XHJcbiAgICAgICAgICAgIHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtLTBcIik7XHJcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBjaXR5SW5mb01pbmlmaWVkW1wiY3VycmVudFwiXVszXTtcclxuICAgICAgICAgICAgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi0tMFwiKTtcclxuICAgICAgICAgICAgaWNvbi5zcmMgPSBjaXR5SW5mb01pbmlmaWVkW1wiY3VycmVudFwiXVsyXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoYW5nZUNpdHlJbmZvIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vbG9naW5TdHlsZS5jc3NcIjtcclxuaW1wb3J0IHt9IGZyb20gXCIuL2xvZ2luQXBpXCI7XHJcbmltcG9ydCB7fSBmcm9tIFwiLi9nZXRXZWF0aGVySW5mb1wiO1xyXG5pbXBvcnQge30gZnJvbSBcIi4vcHVzaEdpcGh5R2lmXCI7XHJcbmltcG9ydCB7fSBmcm9tIFwiLi9wdXNoV2VhdGhlckluZm9cIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9