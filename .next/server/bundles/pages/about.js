module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/components/Nav.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(_assertThisInitialized(_this), "handleItemClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref2) {
        var name = _ref2.name;

        _this.setState({
          activeItem: name
        });

        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push({
          pathname: _this.state.activeItem
        });
      }
    }), _temp));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Header"], {
        as: "h2",
        color: "grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Greg Driza - Software Engineer", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Header"].Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Menu"], {
        secondary: true,
        pointing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Menu"].Item, {
        name: "/about",
        active: activeItem === 'about',
        content: "About",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Menu"].Item, {
        name: "/work",
        active: activeItem === 'work',
        content: "Work",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Menu"].Item, {
        name: "/blog",
        active: activeItem === 'blog',
        content: "Blog",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })))));
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Nav__ = __webpack_require__("./components/Nav.js");
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/pages/about.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var About =
/*#__PURE__*/
function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        resume: 'static/GregResume3.pdf'
      }
    }), _temp));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1483913739"
      }, "Education:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1483913739"
      }, "The Flatiron School (New York)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1483913739"
      }), " - Software Engineering '18", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1483913739"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1483913739"
      }), "University of the Arts (Philadelphia)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1483913739"
      }), " - BFA Interactive Digital Media / Music '17", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1483913739"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        onClick: function onClick() {
          return window.open(_this2.state.resume);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1483913739"
      }, "CV")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-1483913739"
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1483913739",
        css: "p.jsx-1483913739,h1.jsx-1483913739{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}h2.jsx-1483913739{font-size:medium;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHOEMsQUFJQSxpQkFIOEIsQUFJQSw4Q0FIbkQsQUFLQSIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvR3JlZ0RyaXphL0RvY3VtZW50cy9JbmRlcGVuZGVudC9HcmVnT25UaGVXZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgR3JpZCwgXG4gICAgSW1hZ2UsXG4gICAgRGltbWVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHJlc3VtZTogJ3N0YXRpYy9HcmVnUmVzdW1lMy5wZGYnXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5FZHVjYXRpb246PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgRmxhdGlyb24gU2Nob29sIChOZXcgWW9yayk8YnIgLz4gLSBTb2Z0d2FyZSBFbmdpbmVlcmluZyAnMTg8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pdmVyc2l0eSBvZiB0aGUgQXJ0cyAoUGhpbGFkZWxwaGlhKTxici8+IC0gQkZBIEludGVyYWN0aXZlIERpZ2l0YWwgTWVkaWEgLyBNdXNpYyAnMTc8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHRoaXMuc3RhdGUucmVzdW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1ZcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICBwLCBoMXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQiXX0= */\n/*@ sourceURL=pages/about.js */"
      }));
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map