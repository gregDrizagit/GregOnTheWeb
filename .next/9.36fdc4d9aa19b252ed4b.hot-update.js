webpackHotUpdate(9,{

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlogCard__ = __webpack_require__("./components/BlogCard.js");
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/pages/blog.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var parseString = __webpack_require__("./node_modules/xml2js/lib/xml2js.js").parseString;

var Blog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Blog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Blog.__proto__ || Object.getPrototypeOf(Blog)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(_assertThisInitialized(_this), "renderBlogCards", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var blogCards = _this.props.blogs.item.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlogCard__["a" /* default */], {
            key: Math.floor(Math.random() * 1000),
            blog: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          });
        });

        return blogCards;
      }
    }), _temp));
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3713411630"
      }, "Articles from ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://medium.com/@gdriza",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3713411630"
      }, "@gdriza"), " via Medium RSS: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Group, {
        style: {
          padding: "20px"
        },
        itemsPerRow: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.props.blogs ? this.renderBlogCards() : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Loader */], {
        active: true,
        inline: "centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3713411630",
        css: "h1.jsx-3713411630{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NvQixBQUc4QyxpQkFDOEIsOENBQ25DLGFBQ2hCIiwiZmlsZSI6InBhZ2VzL2Jsb2cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0dyZWdEcml6YS9Eb2N1bWVudHMvSW5kZXBlbmRlbnQvR3JlZ09uVGhlV2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIENvbnRhaW5lciwgXG4gICAgQ2FyZCxcbiAgICBMb2FkZXIsXG4gICAgSWNvblxuXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5pbXBvcnQgQmxvZ0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nQ2FyZCdcbnZhciBwYXJzZVN0cmluZyA9IHJlcXVpcmUoJ3htbDJqcycpLnBhcnNlU3RyaW5nO1xuXG5cbmNsYXNzIEJsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7IFxuXG4gICAgc3RhdGUgPSB7fVxuICAgIFxuICAgIHJlbmRlckJsb2dDYXJkcyA9ICgpID0+IHtcbiAgICAgICBsZXQgYmxvZ0NhcmRzID0gdGhpcy5wcm9wcy5ibG9ncy5pdGVtLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiggPEJsb2dDYXJkIGtleT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9IGJsb2c9e2l0ZW19IC8+KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBibG9nQ2FyZHNcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxoMT5BcnRpY2xlcyBmcm9tIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQGdkcml6YVwiPkBnZHJpemE8L2E+IHZpYSBNZWRpdW0gUlNTOiA8L2gxPlxuICAgICAgICAgICAgICAgIDxDYXJkLkdyb3VwIHN0eWxlPXt7cGFkZGluZzogXCIyMHB4XCJ9fSBpdGVtc1BlclJvdz17NH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJsb2dzID8gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQmxvZ0NhcmRzKClcbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIGFjdGl2ZSBpbmxpbmU9J2NlbnRlcmVkJyAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NhcmQuR3JvdXA+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgIFxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXX0= */\n/*@ sourceURL=pages/blog.js */"
      }));
    }
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blog);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blog")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=9.36fdc4d9aa19b252ed4b.hot-update.js.map