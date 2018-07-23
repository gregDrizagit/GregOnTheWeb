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
      value: {}
    }), _temp));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Dimmer, {
        page: true,
        active: this.state.dimmerActive,
        onClick: this.handleHide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Image, {
        src: this.state.resume,
        verticalAlign: "top",
        size: "massive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1483913739"
      }, "Education:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1483913739"
      }, "The Flatiron School (New York)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1483913739"
      }), " - Software Engineering '18", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1483913739"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1483913739"
      }), "University of the Arts (Philadelphia)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1483913739"
      }), " - BFA Interactive Digital Media / Music '17", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1483913739"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-1483913739"
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1483913739",
        css: "p.jsx-1483913739,h1.jsx-1483913739{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}h2.jsx-1483913739{font-size:medium;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHOEMsQUFJQSxpQkFIOEIsQUFJQSw4Q0FIbkQsQUFLQSIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvR3JlZ0RyaXphL0RvY3VtZW50cy9JbmRlcGVuZGVudC9HcmVnT25UaGVXZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgR3JpZFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge31cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RGltbWVyIHBhZ2UgYWN0aXZlPXt0aGlzLnN0YXRlLmRpbW1lckFjdGl2ZX0gb25DbGljaz17dGhpcy5oYW5kbGVIaWRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGhpcy5zdGF0ZS5yZXN1bWV9ICB2ZXJ0aWNhbEFsaWduPVwidG9wXCIgc2l6ZT1cIm1hc3NpdmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkVkdWNhdGlvbjo8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBGbGF0aXJvbiBTY2hvb2wgKE5ldyBZb3JrKTxiciAvPiAtIFNvZnR3YXJlIEVuZ2luZWVyaW5nICcxODxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbml2ZXJzaXR5IG9mIHRoZSBBcnRzIChQaGlsYWRlbHBoaWEpPGJyLz4gLSBCRkEgSW50ZXJhY3RpdmUgRGlnaXRhbCBNZWRpYSAvIE11c2ljICcxNzxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgcCwgaDF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0Il19 */\n/*@ sourceURL=pages/about.js */"
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
//# sourceMappingURL=8.08721fef54ef554f8bc6.hot-update.js.map