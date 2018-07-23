webpackHotUpdate(8,{

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__("./api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BlogCard__ = __webpack_require__("./components/BlogCard.js");
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
        var blogCards = _this.state.json.item.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BlogCard__["a" /* default */], {
            blog: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          });
        });

        return blogCards;
      }
    }), _temp));
  }

  _createClass(Blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var json = __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */].getMediumRSS().then(function (textXml) {
        parseString(textXml, function (err, xml) {
          _this2.setState({
            json: xml.rss.channel[0]
          });
        });
      });
      console.log(json);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.json);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-3565590306"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Group, {
        itemsPerRow: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.state.json ? this.renderBlogCards() : null)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3565590306",
        css: "p.jsx-3565590306,h1.jsx-3565590306,h2.jsx-3565590306{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURvQixBQUc4QyxpQkFDOEIsOENBQ25EIiwiZmlsZSI6InBhZ2VzL2Jsb2cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0dyZWdEcml6YS9Eb2N1bWVudHMvSW5kZXBlbmRlbnQvR3JlZ09uVGhlV2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIENvbnRhaW5lciwgXG4gICAgQ2FyZFxuXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaSdcbmltcG9ydCBCbG9nQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dDYXJkJ1xudmFyIHBhcnNlU3RyaW5nID0gcmVxdWlyZSgneG1sMmpzJykucGFyc2VTdHJpbmc7XG5cblxuY2xhc3MgQmxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHsgXG5cbiAgICBzdGF0ZSA9IHt9XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgICAgIGxldCBqc29uID0gIEFQSS5nZXRNZWRpdW1SU1MoKS50aGVuKHRleHRYbWwgPT4ge1xuICAgICAgICAgICAgcGFyc2VTdHJpbmcodGV4dFhtbCwgKGVyciwgeG1sKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2pzb246IHhtbC5yc3MuY2hhbm5lbFswXX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyQmxvZ0NhcmRzID0gKCkgPT4ge1xuICAgICAgIGxldCBibG9nQ2FyZHMgPSB0aGlzLnN0YXRlLmpzb24uaXRlbS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oIDxCbG9nQ2FyZCBibG9nPXtpdGVtfSAvPilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gYmxvZ0NhcmRzXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuanNvbilcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17NH0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuanNvbiA/IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJCbG9nQ2FyZHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgcCwgaDEsIGgye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXX0= */\n/*@ sourceURL=pages/blog.js */"
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
//# sourceMappingURL=8.2e65ab041fe48b660616.hot-update.js.map