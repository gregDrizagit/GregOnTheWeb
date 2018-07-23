webpackHotUpdate(7,{

/***/ "./pages/spotifyclone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/pages/spotifyclone.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var SpotifyClone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SpotifyClone, _React$Component);

  function SpotifyClone() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SpotifyClone);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SpotifyClone.__proto__ || Object.getPrototypeOf(SpotifyClone)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
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

  _createClass(SpotifyClone, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["b" /* Dimmer */], {
        page: true,
        active: this.state.dimmerActive,
        onClick: this.handleHide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        src: this.state.activeImage,
        verticalAlign: "top",
        size: "massive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Segment */], {
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
      }, "Spotify Clone"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
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
      }, "Node.js"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3565590306"
      }, "Spotify API"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3565590306"
      }, "Semantic React UI")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://github.com/gregDrizagit/SpotifyCloneFE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Icon */], {
        link: true,
        size: "huge",
        name: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), "See the code for this project")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-1.gif",
        onClick: this.handleShow,
        src: '/static/spotify-gif-1.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-3565590306"
      }, "Users land at a home page when they create an account. Here users can create collections of books, view books in their current collections, view the books other users are currently reading, and jump back into the last book they were reading."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-3565590306"
      }, "User's collections are persisted across sessions. Collections can also be deleted.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-2.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-2.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-3.gif",
        onClick: this.handleShow,
        src: '/static/pdf-gif-3.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-3565590306"
      }, "Users can look through pages of all 50,000+ of the books in the database or browse by category (subject, author, bookshelf). User's can view all the books in a given category and flip through books or add books to a collection."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-3565590306"
      }, "Users can quickly search all categories, books, authors, and subjects at the same time with a quick keyword search. Search results can be filtered by Author, Subject, Bookshelf, and Book.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-4.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-4.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-5.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-5.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        className: "jsx-3565590306"
      }, "When the user selects a book, the book is returned from Gutendex in a massive HTML document. This is convenient for a number of reasons. Since Project Gutenberg is largely a voluneer effort, every book is formatted a little differently. We can use some simple Javascript to create consistent format across all books as well as provide the user with some controls to enhance the reading experience."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-3565590306"
      }, "Inside the collapsable control panel are controls for site navigation, and text size adjustment.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-6.gif",
        onClick: this.handleShow,
        src: '/static/pdr-gif-6.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Segment */], {
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-3565590306"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-3565590306"
      }, "See my other projects "))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3565590306",
        css: "p.jsx-3565590306,h1.jsx-3565590306,h2.jsx-3565590306{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Nwb3RpZnljbG9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSm9CLEFBRzhDLGlCQUM4Qiw4Q0FDbkQiLCJmaWxlIjoicGFnZXMvc3BvdGlmeWNsb25lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9HcmVnRHJpemEvRG9jdW1lbnRzL0luZGVwZW5kZW50L0dyZWdPblRoZVdlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIENvbnRhaW5lcixcbiAgICBJbWFnZSwgXG4gICAgRGltbWVyLFxuICAgIFNlZ21lbnQsXG4gICAgR3JpZCxcbiAgICBJY29uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4gY2xhc3MgU3BvdGlmeUNsb25lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgc3RhdGUgPSB7XG4gICAgICAgICBhY3RpdmVJbWFnZTonJywgXG4gICAgICAgICBkaW1tZXJBY3RpdmU6IGZhbHNlXG4gICAgIH1cbiAgICBcbiAgIFxuICAgIGhhbmRsZVNob3cgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGltbWVyQWN0aXZlOiB0cnVlLCBhY3RpdmVJbWFnZTogZS50YXJnZXQubmFtZSB9KVxuICAgICB9XG4gICAgaGFuZGxlSGlkZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBoaWRlJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpbW1lckFjdGl2ZTogZmFsc2UgfSlcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8RGltbWVyIHBhZ2UgYWN0aXZlPXt0aGlzLnN0YXRlLmRpbW1lckFjdGl2ZX0gb25DbGljaz17dGhpcy5oYW5kbGVIaWRlfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMuc3RhdGUuYWN0aXZlSW1hZ2V9ICB2ZXJ0aWNhbEFsaWduPVwidG9wXCIgc2l6ZT1cIm1hc3NpdmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICA8aDE+U3BvdGlmeSBDbG9uZTwvaDE+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgaXMgYSBsYXJnZSBhbW91bnQgb2YgZGF0YSBvbiB0aGUgd2ViIHRoYXQgaXMgYWNjZXNzaWJsZSwgYnV0IG5vdCBuZWNlc3NhcmlseSB1c2FibGUuIFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBHdXRlbmJlcmcgKGh0dHBzOi8vd3d3Lmd1dGVuYmVyZy5vcmcvKSBoYXMgYmVlbiBkaWdpdGl6aW5nIHRoZSB2YXN0IGJvZHkgbGl0ZXJhdHVyZSBpbiB0aGUgcHVibGljIGRvbWFpbiBzaW5jZSAxOTcxLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgR3V0ZW5iZXJnIG1ha2VzIGFsbCB0aGUgd29ya3MgYXZhaWxpYmxlIGluIGEgbnVtYmVyIG9mIGRpZ2l0YWwgZm9ybWF0cywgYnV0IGRvZXNuJ3QgcHJvdmlkZSBhIGdyZWF0IGludGVyZmFjZSBmb3IgZXhwbG9yaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3IgcmVhZGluZyB0aGUgbWF0ZXJpYWxzIG9ubGluZS4gVGhpcyBwcm9qZWN0IHNlZWtzIHRvIGFkZHJlc3Mgc29tZSBvZiB0aGVzZSBpc3N1ZXMgdXNpbmcgUmVhY3QuanMsIFJ1Ynkgb24gUmFpbHMsIGFuZCB0aGUgR3V0ZW5kZXggXG4gICAgICAgICAgICAgICAgICAgICAgICBBUEkgKGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJldGhiam9obnNvbi9ndXRlbmRleCkuIFxuICAgICAgICAgICAgICAgICAgICA8L3A+IFxuICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2d5OiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmVhY3QuanM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ob2RlLmpzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3BvdGlmeSBBUEk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZW1hbnRpYyBSZWFjdCBVSTwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyZWdEcml6YWdpdC9TcG90aWZ5Q2xvbmVGRVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGxpbmsgc2l6ZT1cImh1Z2VcIiBuYW1lPSdnaXRodWInIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZWUgdGhlIGNvZGUgZm9yIHRoaXMgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICA8L2gyPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL3Nwb3RpZnktZ2lmLTEuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Nwb3RpZnktZ2lmLTEuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VycyBsYW5kIGF0IGEgaG9tZSBwYWdlIHdoZW4gdGhleSBjcmVhdGUgYW4gYWNjb3VudC4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVyZSB1c2VycyBjYW4gY3JlYXRlIGNvbGxlY3Rpb25zIG9mIGJvb2tzLCB2aWV3IGJvb2tzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoZWlyIGN1cnJlbnQgY29sbGVjdGlvbnMsIHZpZXcgdGhlIGJvb2tzIG90aGVyIHVzZXJzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZSBjdXJyZW50bHkgcmVhZGluZywgYW5kIGp1bXAgYmFjayBpbnRvIHRoZSBsYXN0IGJvb2sgdGhleSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXJlIHJlYWRpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIncyBjb2xsZWN0aW9ucyBhcmUgcGVyc2lzdGVkIGFjcm9zcyBzZXNzaW9ucy4gQ29sbGVjdGlvbnMgY2FuIGFsc28gYmUgZGVsZXRlZC4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9zcG90aWZ5LWdpZi0yLmdpZlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gc3JjPXsnL3N0YXRpYy9wZHItZ2lmLTIuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvc3BvdGlmeS1naWYtMy5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvcGRmLWdpZi0zLmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgY2FuIGxvb2sgdGhyb3VnaCBwYWdlcyBvZiBhbGwgNTAsMDAwKyBvZiB0aGUgYm9va3MgaW4gdGhlIGRhdGFiYXNlIG9yIGJyb3dzZSBieSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSAoc3ViamVjdCwgYXV0aG9yLCBib29rc2hlbGYpLiBVc2VyJ3MgY2FuIHZpZXcgYWxsIHRoZSBib29rcyBpbiBhIGdpdmVuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5IGFuZCBmbGlwIHRocm91Z2ggYm9va3Mgb3IgYWRkIGJvb2tzIHRvIGEgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgY2FuIHF1aWNrbHkgc2VhcmNoIGFsbCBjYXRlZ29yaWVzLCBib29rcywgYXV0aG9ycywgYW5kIHN1YmplY3RzIGF0IHRoZSBzYW1lIHRpbWUgd2l0aCBhIHF1aWNrIGtleXdvcmQgc2VhcmNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggcmVzdWx0cyBjYW4gYmUgZmlsdGVyZWQgYnkgQXV0aG9yLCBTdWJqZWN0LCBCb29rc2hlbGYsIGFuZCBCb29rLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9zcG90aWZ5LWdpZi00LmdpZlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gc3JjPXsnL3N0YXRpYy9wZHItZ2lmLTQuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9zcG90aWZ5LWdpZi01LmdpZlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gc3JjPXsnL3N0YXRpYy9wZHItZ2lmLTUuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGJvb2ssIHRoZSBib29rIGlzIHJldHVybmVkIGZyb20gR3V0ZW5kZXggaW4gYSBtYXNzaXZlIEhUTUwgZG9jdW1lbnQuIFRoaXMgaXMgY29udmVuaWVudCBmb3IgYSBudW1iZXIgb2YgcmVhc29ucy4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luY2UgUHJvamVjdCBHdXRlbmJlcmcgaXMgbGFyZ2VseSBhIHZvbHVuZWVyIGVmZm9ydCwgZXZlcnkgYm9vayBpcyBmb3JtYXR0ZWQgYSBsaXR0bGUgZGlmZmVyZW50bHkuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNhbiB1c2Ugc29tZSBzaW1wbGUgSmF2YXNjcmlwdCB0byBjcmVhdGUgY29uc2lzdGVudCBmb3JtYXQgYWNyb3NzIGFsbCBib29rcyBhcyB3ZWxsIGFzIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBzb21lIGNvbnRyb2xzIHRvIGVuaGFuY2UgdGhlIHJlYWRpbmcgZXhwZXJpZW5jZS4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zaWRlIHRoZSBjb2xsYXBzYWJsZSBjb250cm9sIHBhbmVsIGFyZSBjb250cm9scyBmb3Igc2l0ZSBuYXZpZ2F0aW9uLCBhbmQgdGV4dCBzaXplIGFkanVzdG1lbnQuIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9zcG90aWZ5LWdpZi02LmdpZlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gc3JjPXsnL3N0YXRpYy9wZHItZ2lmLTYuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWUgbXkgb3RoZXIgcHJvamVjdHMgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICBwLCBoMSwgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwb3RpZnlDbG9uZSJdfQ== */\n/*@ sourceURL=pages/spotifyclone.js */"
      }));
    }
  }]);

  return SpotifyClone;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SpotifyClone);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/spotifyclone")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.b9614ab985a0b1c002bd.hot-update.js.map