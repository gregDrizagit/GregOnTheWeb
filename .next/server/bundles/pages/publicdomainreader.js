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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/publicdomainreader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/pages/publicdomainreader.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var PublicDomainReader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PublicDomainReader, _React$Component);

  function PublicDomainReader() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PublicDomainReader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PublicDomainReader.__proto__ || Object.getPrototypeOf(PublicDomainReader)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        activeImage: '',
        dimmerActive: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleShow", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log(e.target.name);

        _this.setState({
          dimmerActive: true,
          activeImage: e.target.name
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleHide", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('should hide');

        _this.setState({
          dimmerActive: false
        });
      }
    }), _temp));
  }

  _createClass(PublicDomainReader, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Dimmer"], {
        page: true,
        active: this.state.dimmerActive,
        onClick: this.handleHide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        src: this.state.activeImage,
        verticalAlign: "top",
        size: "massive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Segment"], {
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "There is a large amount of data on the web that is accessible, but not necessarily usable. Project Gutenberg (https://www.gutenberg.org/) has been digitizing the vast body literature in the public domain since 1971. Project Gutenberg makes all the works availible in a number of digital formats, but doesn't provide a great interface for exploring or reading the materials online. This project seeks to address some of these issues using React.js, Ruby on Rails, and the Gutendex API (https://github.com/garethbjohnson/gutendex)."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-1.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-1.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Users land at a home page when they create an account. Here users can create collections of books, view books in their current collections, view the books other users are currently reading, and jump back into the last book they were reading.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "User's collections are persisted across sessions. Collections can also be deleted."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-2.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-2.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        name: "/static/pdf-gif-3.gif",
        onClick: this.handleShow,
        src: '/static/pdf-gif-3.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Users can look through pages of all the books in the database or browse by category (subject, author, bookshelf). User's can view all the books in a given category and read or add books to a collection.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "You can quickly search through all categories containing a keywords. You can also filter search results by category."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-4.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-4.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-5.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-5.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "You can quickly search through all categories containing a keywords. You can also filter search results by Author, Subject, Bookshelf, and Title.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "You can quickly search through all categories containing a keywords. You can also filter search results by category."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-6.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-6.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-7.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-7.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "You can quickly search through all categories containing a keywords. You can also filter search results by category.")))));
    }
  }]);

  return PublicDomainReader;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PublicDomainReader);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/publicdomainreader.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=publicdomainreader.js.map