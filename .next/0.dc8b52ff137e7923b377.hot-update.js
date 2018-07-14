webpackHotUpdate(0,{

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _this = this,
    _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/components/Nav.js";






var Nav = function Nav() {
  state = {};

  handleItemClick = function handleItemClick(e, _ref) {
    var name = _ref.name;

    _this.setState({
      activeItem: name
    });

    __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push({
      pathname: _this.state.activeItem
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Container */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["b" /* Header */], {
    as: "h2",
    color: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Greg Driza - Software Engineer", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["b" /* Header */].Subheader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Menu */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Menu */].Item, {
    name: "about",
    active: _this.state.activeItem === 'about',
    content: "About",
    onClick: _this.handleItemClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Menu */].Item, {
    name: "work",
    active: _this.state.activeItem === 'work',
    content: "Work",
    onClick: _this.handleItemClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ })

})
//# sourceMappingURL=0.dc8b52ff137e7923b377.hot-update.js.map