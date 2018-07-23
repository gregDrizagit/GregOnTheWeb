webpackHotUpdate(8,{

/***/ "./pages/departuretimes.js":
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
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/pages/departuretimes.js";


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
        className: "jsx-1066324876"
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
        className: "jsx-1066324876"
      }, "Departure Times"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-1066324876"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-1066324876"
      }, "I came across a repository of code challenges Uber uses to vet their software engineering applicants on their tools team. Here was the challenge:", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1066324876"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1066324876"
      }), "Create a service that gives real-time departure time for public transportation (use freely available public API). The app should geolocalize the user. ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-1066324876"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-1066324876"
      }), "I substituted geolocation for Google Autocomplete Places api."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-1066324876"
      }, "Technology:", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-1066324876"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-1066324876"
      }, "React.js"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-1066324876"
      }, "Ruby on Rails"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-1066324876"
      }, "Gutendex API"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-1066324876"
      }, "MYSQL")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/dt-gif-1.gif",
        onClick: this.handleShow,
        src: '/static/dt-gif-1.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-1066324876"
      }, "Users can search for any place with Google Autocomplete Places API. Search results are constrained San Francisco."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/dt-gif-2.gif",
        onClick: this.handleShow,
        src: '/static/dt-gif-2.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-1066324876"
      }, "Google returns the coordinates of the selected place. The 311 API provides for us the coordinate location of every bus stop in California. Some ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/Haversine_formula",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-1066324876"
      }, "math"), "is used to filter out all of the stops that aren't within 0.5 miles of the selected location. The positions of the stops can be plotted on the map with google maps API."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/dt-gif-3.gif",
        onClick: this.handleShow,
        src: '/static/dt-gif-3.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-1066324876"
      }, "Stops are listed on the left-hand sidebar. They can be selected on the map or the sidebar. Redux is useful managing state here."))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Image */], {
        name: "/static/dt-gif-4.gif",
        onClick: this.handleShow,
        src: '/static/dt-gif-4.gif',
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-1066324876"
      }, "Once a stop is selected, it can be polled every few seconds to get get real-time bus coordinates. The bus positions can be placed on the map.")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://github.com/gregDrizagit/DepartureTimes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-1066324876"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Icon */], {
        link: true,
        size: "massive",
        name: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1066324876",
        css: "p.jsx-1066324876,h1.jsx-1066324876{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RlcGFydHVyZXRpbWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIb0IsQUFHOEMsaUJBQzhCLDhDQUNuRCIsImZpbGUiOiJwYWdlcy9kZXBhcnR1cmV0aW1lcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvR3JlZ0RyaXphL0RvY3VtZW50cy9JbmRlcGVuZGVudC9HcmVnT25UaGVXZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgSW1hZ2UsIFxuICAgIERpbW1lcixcbiAgICBTZWdtZW50LFxuICAgIEdyaWQsXG4gICAgSWNvblxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7IFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuIGNsYXNzIFB1YmxpY0RvbWFpblJlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgIHN0YXRlID0ge1xuICAgICAgICAgYWN0aXZlSW1hZ2U6JycsIFxuICAgICAgICAgZGltbWVyQWN0aXZlOiBmYWxzZVxuICAgICB9XG4gICAgXG4gICBcbiAgICBoYW5kbGVTaG93ID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpbW1lckFjdGl2ZTogdHJ1ZSwgYWN0aXZlSW1hZ2U6IGUudGFyZ2V0Lm5hbWUgfSlcbiAgICAgfVxuICAgIGhhbmRsZUhpZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgaGlkZScpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1tZXJBY3RpdmU6IGZhbHNlIH0pXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPERpbW1lciBwYWdlIGFjdGl2ZT17dGhpcy5zdGF0ZS5kaW1tZXJBY3RpdmV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSGlkZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aGlzLnN0YXRlLmFjdGl2ZUltYWdlfSAgdmVydGljYWxBbGlnbj1cInRvcFwiIHNpemU9XCJtYXNzaXZlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICA8aDE+RGVwYXJ0dXJlIFRpbWVzPC9oMT48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgIEkgY2FtZSBhY3Jvc3MgYSByZXBvc2l0b3J5IG9mIGNvZGUgY2hhbGxlbmdlcyBVYmVyIHVzZXMgdG8gdmV0IHRoZWlyIHNvZnR3YXJlIGVuZ2luZWVyaW5nIGFwcGxpY2FudHMgb24gdGhlaXIgdG9vbHMgdGVhbS4gSGVyZSB3YXMgdGhlIGNoYWxsZW5nZTo8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIHNlcnZpY2UgdGhhdCBnaXZlcyByZWFsLXRpbWUgZGVwYXJ0dXJlIHRpbWUgZm9yIHB1YmxpYyB0cmFuc3BvcnRhdGlvbiAodXNlIGZyZWVseSBhdmFpbGFibGUgcHVibGljIEFQSSkuIFRoZSBhcHAgc2hvdWxkIGdlb2xvY2FsaXplIHRoZSB1c2VyLiA8YnIvPjxici8+IFxuICAgICAgICAgICAgICAgICAgICAgICBJIHN1YnN0aXR1dGVkIGdlb2xvY2F0aW9uIGZvciBHb29nbGUgQXV0b2NvbXBsZXRlIFBsYWNlcyBhcGkuIFxuXG4gICAgICAgICAgICAgICAgICAgIDwvcD4gXG4gICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlY2hub2xvZ3k6IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZWFjdC5qczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJ1Ynkgb24gUmFpbHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HdXRlbmRleCBBUEk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NWVNRTDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2gyPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvZHQtZ2lmLTEuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL2R0LWdpZi0xLmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgY2FuIHNlYXJjaCBmb3IgYW55IHBsYWNlIHdpdGggR29vZ2xlIEF1dG9jb21wbGV0ZSBQbGFjZXMgQVBJLiBTZWFyY2ggcmVzdWx0cyBhcmUgY29uc3RyYWluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYW4gRnJhbmNpc2NvLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9kdC1naWYtMi5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvZHQtZ2lmLTIuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgcmV0dXJucyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHNlbGVjdGVkIHBsYWNlLiBUaGUgMzExIEFQSSBwcm92aWRlcyBmb3IgdXMgdGhlIGNvb3JkaW5hdGUgbG9jYXRpb24gb2YgZXZlcnkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzIHN0b3AgaW4gQ2FsaWZvcm5pYS4gU29tZSA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGF2ZXJzaW5lX2Zvcm11bGFcIj5tYXRoPC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyB1c2VkIHRvIGZpbHRlciBvdXQgYWxsIG9mIHRoZSBzdG9wcyB0aGF0IGFyZW4ndCB3aXRoaW4gMC41IG1pbGVzIG9mIHRoZSBzZWxlY3RlZCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcG9zaXRpb25zIG9mIHRoZSBzdG9wcyBjYW4gYmUgcGxvdHRlZCBvbiB0aGUgbWFwIHdpdGggZ29vZ2xlIG1hcHMgQVBJLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9kdC1naWYtMy5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvZHQtZ2lmLTMuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9wcyBhcmUgbGlzdGVkIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZWJhci4gVGhleSBjYW4gYmUgc2VsZWN0ZWQgb24gdGhlIG1hcCBvciB0aGUgc2lkZWJhci4gUmVkdXggaXMgdXNlZnVsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnaW5nIHN0YXRlIGhlcmUuIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBuYW1lPVwiL3N0YXRpYy9kdC1naWYtNC5naWZcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3d9IHNyYz17Jy9zdGF0aWMvZHQtZ2lmLTQuZ2lmJ30gc2l6ZT1cImh1Z2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9uY2UgYSBzdG9wIGlzIHNlbGVjdGVkLCBpdCBjYW4gYmUgcG9sbGVkIGV2ZXJ5IGZldyBzZWNvbmRzIHRvIGdldCBnZXQgcmVhbC10aW1lIGJ1cyBjb29yZGluYXRlcy4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBidXMgcG9zaXRpb25zIGNhbiBiZSBwbGFjZWQgb24gdGhlIG1hcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyZWdEcml6YWdpdC9EZXBhcnR1cmVUaW1lc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbGluayBzaXplPVwibWFzc2l2ZVwiIG5hbWU9J2dpdGh1YicgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICBwLCBoMXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVibGljRG9tYWluUmVhZGVyIl19 */\n/*@ sourceURL=pages/departuretimes.js */"
      }));
    }
  }]);

  return PublicDomainReader;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PublicDomainReader);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/departuretimes")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.2d796a64f2a18bd3e705.hot-update.js.map