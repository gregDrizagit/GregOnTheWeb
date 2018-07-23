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
      }), "I substituted geolocation for Google Autocomplete Places api because if MTA's API works anything like the subway, I didn't want to use it."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
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
      }, "Google Places Autocomplete API"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
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
        css: "p.jsx-1066324876,h1.jsx-1066324876{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RlcGFydHVyZXRpbWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIb0IsQUFHOEMsaUJBQzhCLDhDQUNuRCIsImZpbGUiOiJwYWdlcy9kZXBhcnR1cmV0aW1lcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvR3JlZ0RyaXphL0RvY3VtZW50cy9JbmRlcGVuZGVudC9HcmVnT25UaGVXZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgSW1hZ2UsIFxuICAgIERpbW1lcixcbiAgICBTZWdtZW50LFxuICAgIEdyaWQsXG4gICAgSWNvblxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7IFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuIGNsYXNzIFB1YmxpY0RvbWFpblJlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgIHN0YXRlID0ge1xuICAgICAgICAgYWN0aXZlSW1hZ2U6JycsIFxuICAgICAgICAgZGltbWVyQWN0aXZlOiBmYWxzZVxuICAgICB9XG4gICAgXG4gICBcbiAgICBoYW5kbGVTaG93ID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpbW1lckFjdGl2ZTogdHJ1ZSwgYWN0aXZlSW1hZ2U6IGUudGFyZ2V0Lm5hbWUgfSlcbiAgICAgfVxuICAgIGhhbmRsZUhpZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgaGlkZScpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaW1tZXJBY3RpdmU6IGZhbHNlIH0pXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPERpbW1lciBwYWdlIGFjdGl2ZT17dGhpcy5zdGF0ZS5kaW1tZXJBY3RpdmV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSGlkZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aGlzLnN0YXRlLmFjdGl2ZUltYWdlfSAgdmVydGljYWxBbGlnbj1cInRvcFwiIHNpemU9XCJtYXNzaXZlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxuICAgICAgICAgICAgICAgICAgICA8aDE+RGVwYXJ0dXJlIFRpbWVzPC9oMT48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgIEkgY2FtZSBhY3Jvc3MgYSByZXBvc2l0b3J5IG9mIGNvZGUgY2hhbGxlbmdlcyBVYmVyIHVzZXMgdG8gdmV0IHRoZWlyIHNvZnR3YXJlIGVuZ2luZWVyaW5nIGFwcGxpY2FudHMgb24gdGhlaXIgdG9vbHMgdGVhbS4gSGVyZSB3YXMgdGhlIGNoYWxsZW5nZTo8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIHNlcnZpY2UgdGhhdCBnaXZlcyByZWFsLXRpbWUgZGVwYXJ0dXJlIHRpbWUgZm9yIHB1YmxpYyB0cmFuc3BvcnRhdGlvbiAodXNlIGZyZWVseSBhdmFpbGFibGUgcHVibGljIEFQSSkuIFRoZSBhcHAgc2hvdWxkIGdlb2xvY2FsaXplIHRoZSB1c2VyLiA8YnIvPjxici8+IFxuICAgICAgICAgICAgICAgICAgICAgICBJIHN1YnN0aXR1dGVkIGdlb2xvY2F0aW9uIGZvciBHb29nbGUgQXV0b2NvbXBsZXRlIFBsYWNlcyBhcGkgYmVjYXVzZSBpZiBNVEEncyBBUEkgd29ya3MgYW55dGhpbmcgbGlrZSB0aGUgc3Vid2F5LCBJIGRpZG4ndCB3YW50IHRvIHVzZSBpdC4gXG5cbiAgICAgICAgICAgICAgICAgICAgPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGVjaG5vbG9neTogXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlYWN0LmpzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R29vZ2xlIFBsYWNlcyBBdXRvY29tcGxldGUgQVBJPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R3V0ZW5kZXggQVBJPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TVlTUUw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIG5hbWU9XCIvc3RhdGljL2R0LWdpZi0xLmdpZlwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd30gc3JjPXsnL3N0YXRpYy9kdC1naWYtMS5naWYnfSBzaXplPVwiaHVnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJzIGNhbiBzZWFyY2ggZm9yIGFueSBwbGFjZSB3aXRoIEdvb2dsZSBBdXRvY29tcGxldGUgUGxhY2VzIEFQSS4gU2VhcmNoIHJlc3VsdHMgYXJlIGNvbnN0cmFpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FuIEZyYW5jaXNjby4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvZHQtZ2lmLTIuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL2R0LWdpZi0yLmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZ2xlIHJldHVybnMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBzZWxlY3RlZCBwbGFjZS4gVGhlIDMxMSBBUEkgcHJvdmlkZXMgZm9yIHVzIHRoZSBjb29yZGluYXRlIGxvY2F0aW9uIG9mIGV2ZXJ5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1cyBzdG9wIGluIENhbGlmb3JuaWEuIFNvbWUgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hhdmVyc2luZV9mb3JtdWxhXCI+bWF0aDwvYT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgdXNlZCB0byBmaWx0ZXIgb3V0IGFsbCBvZiB0aGUgc3RvcHMgdGhhdCBhcmVuJ3Qgd2l0aGluIDAuNSBtaWxlcyBvZiB0aGUgc2VsZWN0ZWQgbG9jYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHBvc2l0aW9ucyBvZiB0aGUgc3RvcHMgY2FuIGJlIHBsb3R0ZWQgb24gdGhlIG1hcCB3aXRoIGdvb2dsZSBtYXBzIEFQSS4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvZHQtZ2lmLTMuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL2R0LWdpZi0zLmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcHMgYXJlIGxpc3RlZCBvbiB0aGUgbGVmdC1oYW5kIHNpZGViYXIuIFRoZXkgY2FuIGJlIHNlbGVjdGVkIG9uIHRoZSBtYXAgb3IgdGhlIHNpZGViYXIuIFJlZHV4IGlzIHVzZWZ1bCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2luZyBzdGF0ZSBoZXJlLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbmFtZT1cIi9zdGF0aWMvZHQtZ2lmLTQuZ2lmXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93fSBzcmM9eycvc3RhdGljL2R0LWdpZi00LmdpZid9IHNpemU9XCJodWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbmNlIGEgc3RvcCBpcyBzZWxlY3RlZCwgaXQgY2FuIGJlIHBvbGxlZCBldmVyeSBmZXcgc2Vjb25kcyB0byBnZXQgZ2V0IHJlYWwtdGltZSBidXMgY29vcmRpbmF0ZXMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgYnVzIHBvc2l0aW9ucyBjYW4gYmUgcGxhY2VkIG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnRHJpemFnaXQvRGVwYXJ0dXJlVGltZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGxpbmsgc2l6ZT1cIm1hc3NpdmVcIiBuYW1lPSdnaXRodWInIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgcCwgaDF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1YmxpY0RvbWFpblJlYWRlciJdfQ== */\n/*@ sourceURL=pages/departuretimes.js */"
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
//# sourceMappingURL=8.407084ac755926a33c9d.hot-update.js.map