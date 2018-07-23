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
      }, "Spotify provides its premium users (who happen to be developers) with access to their entire library of music as well as some interesting functionality. I thought it would be an interesting exercise to try to and implement as many of the endpoints as I could from Spotify's API in a week."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-3565590306"
      }, "Technology:", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3565590306"
      }, "React.js"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3565590306"
      }, "Node.js"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-3565590306"
      }, "Spotify API"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-3565590306"
      }, "Semantic React UI")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://github.com/gregDrizagit/SpotifyCloneFE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Icon */], {
        link: true,
        size: "huge",
        name: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), "See the code for this project")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-1.gif",
        onClick: this.handleShow,
        src: '/static/spotify-gif-1.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3565590306"
      }, "Users can connect to their Spotify account. On the home page they will see Spotify's collection of new"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-3565590306"
      }, "User's collections are persisted across sessions. Collections can also be deleted.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-2.gif",
        onClick: this.handleShow,
        src: '/static/spotify-gif-2.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-3.gif",
        onClick: this.handleShow,
        src: '/static/spotify-gif-3.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-3565590306"
      }, "Users can look through pages of all 50,000+ of the books in the database or browse by category (subject, author, bookshelf). User's can view all the books in a given category and flip through books or add books to a collection."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        className: "jsx-3565590306"
      }, "Users can quickly search all categories, books, authors, and subjects at the same time with a quick keyword search. Search results can be filtered by Author, Subject, Bookshelf, and Book.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-4.gif",
        onClick: this.handleShow,
        src: '/static/spotify-gif-4.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-5.gif",
        onClick: this.handleShow,
        src: '/static/spotify-gif-5.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-3565590306"
      }, "When the user selects a book, the book is returned from Gutendex in a massive HTML document. This is convenient for a number of reasons. Since Project Gutenberg is largely a voluneer effort, every book is formatted a little differently. We can use some simple Javascript to create consistent format across all books as well as provide the user with some controls to enhance the reading experience."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-3565590306"
      }, "Inside the collapsable control panel are controls for site navigation, and text size adjustment.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/spotify-gif-6.gif",
        onClick: this.handleShow,
        src: '/static/spotify-gif-6.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["h" /* Segment */], {
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: "jsx-3565590306"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-3565590306"
      }, "See my other projects "))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3565590306",
        css: "p.jsx-3565590306,h1.jsx-3565590306,h2.jsx-3565590306{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Nwb3RpZnljbG9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSm9CLEFBRzhDLGlCQUM4Qiw4Q0FDbkQiLCJmaWxlIjoicGFnZXMvc3BvdGlmeWNsb25lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9HcmVnRHJpemEvRG9jdW1lbnRzL0luZGVwZW5kZW50L0dyZWdPblRoZVdlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIENvbnRhaW5lcixcbiAgICBJbWFnZSwgXG4gICAgRGltbWVyLFxuICAgIFNlZ21lbnQsXG4gICAgR3JpZCxcbiAgICBJY29uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4gY2xhc3MgU3BvdGlmeUNsb25lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgc3RhdGUgPSB7XG4gICAgICAgICBhY3RpdmVJbWFnZTonJywgXG4gICAgICAgICBkaW1tZXJBY3RpdmU6IGZhbHNlXG4gICAgIH1cbiAgICBcbiAgIFxuICAgIGhhbmRsZVNob3cgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGltbWVyQWN0aXZlOiB0cnVlLCBhY3RpdmVJbWFnZTogZS50YXJnZXQubmFtZSB9KVxuICAgICB9XG4gICAgaGFuZGxlSGlkZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBoaWRlJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpbW1lckFjdGl2ZTogZmFsc2UgfSlcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8RGltbWVyIHBhZ2UgYWN0aXZlPXt0aGlzLnN0YXRlLmRpbW1lckFjdGl2ZX0gb25DbGljaz17dGhpcy5oYW5kbGVIaWRlfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMuc3RhdGUuYWN0aXZlSW1hZ2V9ICB2ZXJ0aWNhbEFsaWduPVwidG9wXCIgc2l6ZT1cIm1hc3NpdmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICA8aDE+U3BvdGlmeSBDbG9uZTwvaDE+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3BvdGlmeSBwcm92aWRlcyBpdHMgcHJlbWl1bSB1c2VycyAod2hvIGhhcHBlbiB0byBiZSBkZXZlbG9wZXJzKSB3aXRoIGFjY2VzcyB0byB0aGVpciBlbnRpcmUgbGlicmFyeSBvZiBtdXNpYyBhcyB3ZWxsIGFzIFxuICAgICAgICAgICAgICAgICAgICAgICAgc29tZSBpbnRlcmVzdGluZyBmdW5jdGlvbmFsaXR5LiBJIHRob3VnaHQgaXQgd291bGQgYmUgYW4gaW50ZXJlc3RpbmcgZXhlcmNpc2UgdG8gdHJ5IHRvIGFuZCBpbXBsZW1lbnQgYXMgbWFueSBvZiB0aGUgZW5kcG9pbnRzIGFzIEkgY291bGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gU3BvdGlmeSdzIEFQSSBpbiBhIHdlZWsuIFxuICAgICAgICAgICAgICAgICAgICA8L3A+IFxuICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2d5OiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmVhY3QuanM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ob2RlLmpzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3BvdGlmeSBBUEk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZW1hbnRpYyBSZWFjdCBVSTwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyZWdEcml6YWdpdC9TcG90aWZ5Q2xvbmVGRVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGxpbmsgc2l6ZT1cImh1Z2VcIiBuYW1lPSdnaXRodWInIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZWUgdGhlIGNvZGUgZm9yIHRoaXMgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICA8L2gyPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL3Nwb3RpZnktZ2lmLTEuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Nwb3RpZnktZ2lmLTEuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VycyBjYW4gY29ubmVjdCB0byB0aGVpciBTcG90aWZ5IGFjY291bnQuIE9uIHRoZSBob21lIHBhZ2UgdGhleSB3aWxsIHNlZSBTcG90aWZ5J3MgY29sbGVjdGlvbiBvZiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcidzIGNvbGxlY3Rpb25zIGFyZSBwZXJzaXN0ZWQgYWNyb3NzIHNlc3Npb25zLiBDb2xsZWN0aW9ucyBjYW4gYWxzbyBiZSBkZWxldGVkLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL3Nwb3RpZnktZ2lmLTIuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Nwb3RpZnktZ2lmLTIuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvc3BvdGlmeS1naWYtMy5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvc3BvdGlmeS1naWYtMy5naWYnfSBzaXplPVwiaHVnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJzIGNhbiBsb29rIHRocm91Z2ggcGFnZXMgb2YgYWxsIDUwLDAwMCsgb2YgdGhlIGJvb2tzIGluIHRoZSBkYXRhYmFzZSBvciBicm93c2UgYnkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgKHN1YmplY3QsIGF1dGhvciwgYm9va3NoZWxmKS4gVXNlcidzIGNhbiB2aWV3IGFsbCB0aGUgYm9va3MgaW4gYSBnaXZlbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSBhbmQgZmxpcCB0aHJvdWdoIGJvb2tzIG9yIGFkZCBib29rcyB0byBhIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJzIGNhbiBxdWlja2x5IHNlYXJjaCBhbGwgY2F0ZWdvcmllcywgYm9va3MsIGF1dGhvcnMsIGFuZCBzdWJqZWN0cyBhdCB0aGUgc2FtZSB0aW1lIHdpdGggYSBxdWljayBrZXl3b3JkIHNlYXJjaC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoIHJlc3VsdHMgY2FuIGJlIGZpbHRlcmVkIGJ5IEF1dGhvciwgU3ViamVjdCwgQm9va3NoZWxmLCBhbmQgQm9vay4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvc3BvdGlmeS1naWYtNC5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvc3BvdGlmeS1naWYtNC5naWYnfSBzaXplPVwiaHVnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL3Nwb3RpZnktZ2lmLTUuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL3Nwb3RpZnktZ2lmLTUuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGJvb2ssIHRoZSBib29rIGlzIHJldHVybmVkIGZyb20gR3V0ZW5kZXggaW4gYSBtYXNzaXZlIEhUTUwgZG9jdW1lbnQuIFRoaXMgaXMgY29udmVuaWVudCBmb3IgYSBudW1iZXIgb2YgcmVhc29ucy4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luY2UgUHJvamVjdCBHdXRlbmJlcmcgaXMgbGFyZ2VseSBhIHZvbHVuZWVyIGVmZm9ydCwgZXZlcnkgYm9vayBpcyBmb3JtYXR0ZWQgYSBsaXR0bGUgZGlmZmVyZW50bHkuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNhbiB1c2Ugc29tZSBzaW1wbGUgSmF2YXNjcmlwdCB0byBjcmVhdGUgY29uc2lzdGVudCBmb3JtYXQgYWNyb3NzIGFsbCBib29rcyBhcyB3ZWxsIGFzIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBzb21lIGNvbnRyb2xzIHRvIGVuaGFuY2UgdGhlIHJlYWRpbmcgZXhwZXJpZW5jZS4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zaWRlIHRoZSBjb2xsYXBzYWJsZSBjb250cm9sIHBhbmVsIGFyZSBjb250cm9scyBmb3Igc2l0ZSBuYXZpZ2F0aW9uLCBhbmQgdGV4dCBzaXplIGFkanVzdG1lbnQuIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9zcG90aWZ5LWdpZi02LmdpZlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gc3JjPXsnL3N0YXRpYy9zcG90aWZ5LWdpZi02LmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VlIG15IG90aGVyIHByb2plY3RzIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgcCwgaDEsIGgye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcG90aWZ5Q2xvbmUiXX0= */\n/*@ sourceURL=pages/spotifyclone.js */"
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
//# sourceMappingURL=7.569a84ed558f181f7167.hot-update.js.map