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

/***/ "./pages/publicdomainreader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
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
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Dimmer"], {
        page: true,
        active: this.state.dimmerActive,
        onClick: this.handleHide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        src: this.state.activeImage,
        verticalAlign: "top",
        size: "massive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Segment"], {
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-3565590306"
      }, "Public Domain Reader"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-3565590306"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-3565590306"
      }, "There is a large amount of data on the web that is accessible, but not necessarily usable. Project Gutenberg (https://www.gutenberg.org/) has been digitizing the vast body literature in the public domain since 1971. Project Gutenberg makes all the works availible in a number of digital formats, but doesn't provide a great interface for exploring or reading the materials online. This project seeks to address some of these issues using React.js, Ruby on Rails, and the Gutendex API (https://github.com/garethbjohnson/gutendex)."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3565590306"
      }, "Technology:", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-3565590306"
      }, "React.js"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-3565590306"
      }, "Ruby on Rails"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3565590306"
      }, "Gutendex API"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3565590306"
      }, "MYSQL"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3565590306"
      }, "Semantic React UI")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://github.com/gregDrizagit/PublicDomainReaderFrontEnd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
        link: true,
        size: "huge",
        name: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), "See the code for this project")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-1.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-1.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-3565590306"
      }, "Users land at a home page when they create an account. Here users can create collections of books, view books in their current collections, view the books other users are currently reading, and jump back into the last book they were reading."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-3565590306"
      }, "User's collections are persisted across sessions. Collections can also be deleted.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-2.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-2.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdf-gif-3.gif",
        onClick: this.handleShow,
        src: '/static/pdf-gif-3.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-3565590306"
      }, "Users can look through pages of all 50,000+ of the books in the database or browse by category (subject, author, bookshelf). User's can view all the books in a given category and flip through books or add books to a collection."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-3565590306"
      }, "Users can quickly search all categories, books, authors, and subjects at the same time with a quick keyword search. Search results can be filtered by Author, Subject, Bookshelf, and Book.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-4.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-4.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-5.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-5.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-3565590306"
      }, "When the user selects a book, the book is returned from Gutendex in a massive HTML document. This is convenient for a number of reasons. Since Project Gutenberg is largely a voluneer effort, every book is formatted a little differently. We can use some simple Javascript to create consistent format across all books as well as provide the user with some controls to enhance the reading experience."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-3565590306"
      }, "Inside the collapsable control panel are controls for site navigation, and text size adjustment.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-6.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-6.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-7.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-7.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-3565590306"
      }, "Bookmarks can be placed in the text by clicking the paragraphs. This allows users to return to their place in the text over multiple sessions."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: "jsx-3565590306"
      }, "Users can also edit the CSS color properties of the HTML document to invert the colors for reading at night.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        name: "/static/pdr-gif-8.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-8.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Segment"], {
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        className: "jsx-3565590306"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: "jsx-3565590306"
      }, "See my other projects "))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3565590306",
        css: "p.jsx-3565590306,h1.jsx-3565590306,h2.jsx-3565590306{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3B1YmxpY2RvbWFpbnJlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2S29CLEFBRzhDLGlCQUM4Qiw4Q0FDbkQiLCJmaWxlIjoicGFnZXMvcHVibGljZG9tYWlucmVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9HcmVnRHJpemEvRG9jdW1lbnRzL0luZGVwZW5kZW50L0dyZWdPblRoZVdlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIENvbnRhaW5lcixcbiAgICBJbWFnZSwgXG4gICAgRGltbWVyLFxuICAgIFNlZ21lbnQsXG4gICAgR3JpZCxcbiAgICBJY29uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4gY2xhc3MgUHVibGljRG9tYWluUmVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgc3RhdGUgPSB7XG4gICAgICAgICBhY3RpdmVJbWFnZTonJywgXG4gICAgICAgICBkaW1tZXJBY3RpdmU6IGZhbHNlXG4gICAgIH1cbiAgICBcbiAgIFxuICAgIGhhbmRsZVNob3cgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGltbWVyQWN0aXZlOiB0cnVlLCBhY3RpdmVJbWFnZTogZS50YXJnZXQubmFtZSB9KVxuICAgICB9XG4gICAgaGFuZGxlSGlkZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBoaWRlJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpbW1lckFjdGl2ZTogZmFsc2UgfSlcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8RGltbWVyIHBhZ2UgYWN0aXZlPXt0aGlzLnN0YXRlLmRpbW1lckFjdGl2ZX0gb25DbGljaz17dGhpcy5oYW5kbGVIaWRlfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMuc3RhdGUuYWN0aXZlSW1hZ2V9ICB2ZXJ0aWNhbEFsaWduPVwidG9wXCIgc2l6ZT1cIm1hc3NpdmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICA8aDE+UHVibGljIERvbWFpbiBSZWFkZXI8L2gxPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGlzIGEgbGFyZ2UgYW1vdW50IG9mIGRhdGEgb24gdGhlIHdlYiB0aGF0IGlzIGFjY2Vzc2libGUsIGJ1dCBub3QgbmVjZXNzYXJpbHkgdXNhYmxlLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgR3V0ZW5iZXJnIChodHRwczovL3d3dy5ndXRlbmJlcmcub3JnLykgaGFzIGJlZW4gZGlnaXRpemluZyB0aGUgdmFzdCBib2R5IGxpdGVyYXR1cmUgaW4gdGhlIHB1YmxpYyBkb21haW4gc2luY2UgMTk3MS4gXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IEd1dGVuYmVyZyBtYWtlcyBhbGwgdGhlIHdvcmtzIGF2YWlsaWJsZSBpbiBhIG51bWJlciBvZiBkaWdpdGFsIGZvcm1hdHMsIGJ1dCBkb2Vzbid0IHByb3ZpZGUgYSBncmVhdCBpbnRlcmZhY2UgZm9yIGV4cGxvcmluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yIHJlYWRpbmcgdGhlIG1hdGVyaWFscyBvbmxpbmUuIFRoaXMgcHJvamVjdCBzZWVrcyB0byBhZGRyZXNzIHNvbWUgb2YgdGhlc2UgaXNzdWVzIHVzaW5nIFJlYWN0LmpzLCBSdWJ5IG9uIFJhaWxzLCBhbmQgdGhlIEd1dGVuZGV4IFxuICAgICAgICAgICAgICAgICAgICAgICAgQVBJIChodHRwczovL2dpdGh1Yi5jb20vZ2FyZXRoYmpvaG5zb24vZ3V0ZW5kZXgpLiBcbiAgICAgICAgICAgICAgICAgICAgPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGVjaG5vbG9neTogXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlYWN0LmpzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UnVieSBvbiBSYWlsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkd1dGVuZGV4IEFQSTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1ZU1FMPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VtYW50aWMgUmVhY3QgVUk8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnRHJpemFnaXQvUHVibGljRG9tYWluUmVhZGVyRnJvbnRFbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBsaW5rIHNpemU9XCJodWdlXCIgbmFtZT0nZ2l0aHViJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VlIHRoZSBjb2RlIGZvciB0aGlzIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgPC9oMj4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9wZHItZ2lmLTEuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Bkci1naWYtMS5naWYnfSBzaXplPVwiaHVnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJzIGxhbmQgYXQgYSBob21lIHBhZ2Ugd2hlbiB0aGV5IGNyZWF0ZSBhbiBhY2NvdW50LiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXJlIHVzZXJzIGNhbiBjcmVhdGUgY29sbGVjdGlvbnMgb2YgYm9va3MsIHZpZXcgYm9va3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gdGhlaXIgY3VycmVudCBjb2xsZWN0aW9ucywgdmlldyB0aGUgYm9va3Mgb3RoZXIgdXNlcnMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlIGN1cnJlbnRseSByZWFkaW5nLCBhbmQganVtcCBiYWNrIGludG8gdGhlIGxhc3QgYm9vayB0aGV5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcmUgcmVhZGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcidzIGNvbGxlY3Rpb25zIGFyZSBwZXJzaXN0ZWQgYWNyb3NzIHNlc3Npb25zLiBDb2xsZWN0aW9ucyBjYW4gYWxzbyBiZSBkZWxldGVkLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL3Bkci1naWYtMi5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvcGRyLWdpZi0yLmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL3BkZi1naWYtMy5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvcGRmLWdpZi0zLmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgY2FuIGxvb2sgdGhyb3VnaCBwYWdlcyBvZiBhbGwgNTAsMDAwKyBvZiB0aGUgYm9va3MgaW4gdGhlIGRhdGFiYXNlIG9yIGJyb3dzZSBieSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSAoc3ViamVjdCwgYXV0aG9yLCBib29rc2hlbGYpLiBVc2VyJ3MgY2FuIHZpZXcgYWxsIHRoZSBib29rcyBpbiBhIGdpdmVuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5IGFuZCBmbGlwIHRocm91Z2ggYm9va3Mgb3IgYWRkIGJvb2tzIHRvIGEgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgY2FuIHF1aWNrbHkgc2VhcmNoIGFsbCBjYXRlZ29yaWVzLCBib29rcywgYXV0aG9ycywgYW5kIHN1YmplY3RzIGF0IHRoZSBzYW1lIHRpbWUgd2l0aCBhIHF1aWNrIGtleXdvcmQgc2VhcmNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggcmVzdWx0cyBjYW4gYmUgZmlsdGVyZWQgYnkgQXV0aG9yLCBTdWJqZWN0LCBCb29rc2hlbGYsIGFuZCBCb29rLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9wZHItZ2lmLTQuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Bkci1naWYtNC5naWYnfSBzaXplPVwiaHVnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL3Bkci1naWYtNS5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvcGRyLWdpZi01LmdpZid9IHNpemU9XCJodWdlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgYSBib29rLCB0aGUgYm9vayBpcyByZXR1cm5lZCBmcm9tIEd1dGVuZGV4IGluIGEgbWFzc2l2ZSBIVE1MIGRvY3VtZW50LiBUaGlzIGlzIGNvbnZlbmllbnQgZm9yIGEgbnVtYmVyIG9mIHJlYXNvbnMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmNlIFByb2plY3QgR3V0ZW5iZXJnIGlzIGxhcmdlbHkgYSB2b2x1bmVlciBlZmZvcnQsIGV2ZXJ5IGJvb2sgaXMgZm9ybWF0dGVkIGEgbGl0dGxlIGRpZmZlcmVudGx5LiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBjYW4gdXNlIHNvbWUgc2ltcGxlIEphdmFzY3JpcHQgdG8gY3JlYXRlIGNvbnNpc3RlbnQgZm9ybWF0IGFjcm9zcyBhbGwgYm9va3MgYXMgd2VsbCBhcyBwcm92aWRlIHRoZSB1c2VyIHdpdGggc29tZSBjb250cm9scyB0byBlbmhhbmNlIHRoZSByZWFkaW5nIGV4cGVyaWVuY2UuIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc2lkZSB0aGUgY29sbGFwc2FibGUgY29udHJvbCBwYW5lbCBhcmUgY29udHJvbHMgZm9yIHNpdGUgbmF2aWdhdGlvbiwgYW5kIHRleHQgc2l6ZSBhZGp1c3RtZW50LiBcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvcGRyLWdpZi02LmdpZlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gc3JjPXsnL3N0YXRpYy9wZHItZ2lmLTYuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9wZHItZ2lmLTcuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Bkci1naWYtNy5naWYnfSBzaXplPVwiaHVnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29rbWFya3MgY2FuIGJlIHBsYWNlZCBpbiB0aGUgdGV4dCBieSBjbGlja2luZyB0aGUgcGFyYWdyYXBocy4gVGhpcyBhbGxvd3MgdXNlcnMgdG8gcmV0dXJuIHRvIHRoZWlyIHBsYWNlIGluIHRoZSB0ZXh0IG92ZXIgbXVsdGlwbGUgc2Vzc2lvbnMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJzIGNhbiBhbHNvIGVkaXQgdGhlIENTUyBjb2xvciBwcm9wZXJ0aWVzIG9mIHRoZSBIVE1MIGRvY3VtZW50IHRvIGludmVydCB0aGUgY29sb3JzIGZvciByZWFkaW5nIGF0IG5pZ2h0LiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9wZHItZ2lmLTguZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Bkci1naWYtOC5naWYnfSBzaXplPVwiaHVnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBiYXNpYz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNlZSBteSBvdGhlciBwcm9qZWN0cyA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIHAsIGgxLCBoMntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVibGljRG9tYWluUmVhZGVyIl19 */\n/*@ sourceURL=pages/publicdomainreader.js */"
      }));
    }
  }]);

  return PublicDomainReader;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PublicDomainReader);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/publicdomainreader.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

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
//# sourceMappingURL=publicdomainreader.js.map