webpackHotUpdate(8,{

/***/ "./components/BlogCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/GregDriza/Documents/Independent/GregOnTheWeb/components/BlogCard.js";




var parseSubjects = function parseSubjects(props) {
  var subjects = props.blog.category.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["h" /* Item */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, item);
  });
  return subjects;
};

{
  /* <Item.Group divided>
  {
  parseSubjects(props)
  }
  </Item.Group>> */
}

var BlogCard = function BlogCard(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.blog.pubDate[0]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-3565590306"
  }, props.blog.title[0])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3565590306",
    css: "p.jsx-3565590306,h1.jsx-3565590306,h2.jsx-3565590306{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmxvZ0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUc4QyxpQkFDOEIsOENBQ25EIiwiZmlsZSI6ImNvbXBvbmVudHMvQmxvZ0NhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0dyZWdEcml6YS9Eb2N1bWVudHMvSW5kZXBlbmRlbnQvR3JlZ09uVGhlV2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQ29udGFpbmVyLCBcbiAgICBDYXJkLCBcbiAgICBJbWFnZSxcbiAgICBJdGVtXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5cblxuY29uc3QgcGFyc2VTdWJqZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIGxldCBzdWJqZWN0cyA9IHByb3BzLmJsb2cuY2F0ZWdvcnkubWFwKGl0ZW0gPT4ge3JldHVybiA8SXRlbT57aXRlbX08L0l0ZW0+IH0pXG4gICAgcmV0dXJuIHN1YmplY3RzXG59XG57LyogPEl0ZW0uR3JvdXAgZGl2aWRlZD5cbntcbiBwYXJzZVN1YmplY3RzKHByb3BzKVxufVxuPC9JdGVtLkdyb3VwPj4gKi99XG5cbmNvbnN0IEJsb2dDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuYmxvZy5wdWJEYXRlWzBdfVxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmJsb2cudGl0bGVbMF19XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICBwLCBoMSwgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nQ2FyZCJdfQ== */\n/*@ sourceURL=components/BlogCard.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (BlogCard);

/***/ }),

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("./api.js");
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
        var blogCards = _this.state.json.item.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlogCard__["a" /* default */], {
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

      var json = __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */].getMediumRSS().then(function (textXml) {
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["a" /* Card */].Group, {
        itemsPerRow: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.state.json ? this.renderBlogCards() : null)));
    }
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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
//# sourceMappingURL=8.89f8c1a9d7ec39b0b794.hot-update.js.map