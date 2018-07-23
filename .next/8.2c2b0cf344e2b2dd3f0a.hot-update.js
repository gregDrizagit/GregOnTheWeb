webpackHotUpdate(8,{

/***/ "./components/BlogCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/components/BlogCard.js";



var parseSubjects = function parseSubjects(props) {
  var subjects = props.blog.category.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Item */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, item);
  });
  return subjects;
};

{
  /* <Item.Group divided>
  {
  parseSubjects(props)
  }
  </Item.Group>> */
}

var BlogCard = function BlogCard(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Card */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Card */].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.blog.pubDate[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Card */].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, props.blog.title[0])));
};

/* harmony default export */ __webpack_exports__["a"] = (BlogCard);

/***/ })

})
//# sourceMappingURL=8.2c2b0cf344e2b2dd3f0a.hot-update.js.map