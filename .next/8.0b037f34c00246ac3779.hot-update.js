webpackHotUpdate(8,{

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Dimmer */], {
        page: true,
        active: this.state.dimmerActive,
        onClick: this.handleHide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Image, {
        src: this.state.resume,
        verticalAlign: "top",
        size: "massive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1483913739"
      }, "Education:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1483913739"
      }, "The Flatiron School (New York)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1483913739"
      }), " - Software Engineering '18", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1483913739"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1483913739"
      }), "University of the Arts (Philadelphia)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-1483913739"
      }), " - BFA Interactive Digital Media / Music '17", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-1483913739"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Grid */].Column, {
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
        css: "p.jsx-1483913739,h1.jsx-1483913739{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}h2.jsx-1483913739{font-size:medium;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFHOEMsQUFJQSxpQkFIOEIsQUFJQSw4Q0FIbkQsQUFLQSIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvR3JlZ0RyaXphL0RvY3VtZW50cy9JbmRlcGVuZGVudC9HcmVnT25UaGVXZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgR3JpZCwgXG4gICAgRGltbWVyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHJlc3VtZTogJ3N0YXRpYy9HcmVnUmVzdW1lMy5wZGYnXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPERpbW1lciBwYWdlIGFjdGl2ZT17dGhpcy5zdGF0ZS5kaW1tZXJBY3RpdmV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSGlkZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMuc3RhdGUucmVzdW1lfSAgdmVydGljYWxBbGlnbj1cInRvcFwiIHNpemU9XCJtYXNzaXZlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5FZHVjYXRpb246PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgRmxhdGlyb24gU2Nob29sIChOZXcgWW9yayk8YnIgLz4gLSBTb2Z0d2FyZSBFbmdpbmVlcmluZyAnMTg8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pdmVyc2l0eSBvZiB0aGUgQXJ0cyAoUGhpbGFkZWxwaGlhKTxici8+IC0gQkZBIEludGVyYWN0aXZlIERpZ2l0YWwgTWVkaWEgLyBNdXNpYyAnMTc8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIHAsIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTpcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dCJdfQ== */\n/*@ sourceURL=pages/about.js */"
      }));
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.0b037f34c00246ac3779.hot-update.js.map