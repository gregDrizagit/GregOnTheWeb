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
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-1581747706"
  }, "Published: ", props.blog.pubDate[0])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-1581747706"
  }, "Title: ", props.blog.title[0])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1581747706",
    css: "p.jsx-1581747706,h3.jsx-1581747706{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmxvZ0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUc4QyxpQkFDOEIsOENBQ25EIiwiZmlsZSI6ImNvbXBvbmVudHMvQmxvZ0NhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0dyZWdEcml6YS9Eb2N1bWVudHMvSW5kZXBlbmRlbnQvR3JlZ09uVGhlV2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQ29udGFpbmVyLCBcbiAgICBDYXJkLCBcbiAgICBJbWFnZSxcbiAgICBJdGVtXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5cblxuY29uc3QgcGFyc2VTdWJqZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIGxldCBzdWJqZWN0cyA9IHByb3BzLmJsb2cuY2F0ZWdvcnkubWFwKGl0ZW0gPT4ge3JldHVybiA8SXRlbT57aXRlbX08L0l0ZW0+IH0pXG4gICAgcmV0dXJuIHN1YmplY3RzXG59XG57LyogPEl0ZW0uR3JvdXAgZGl2aWRlZD5cbntcbiBwYXJzZVN1YmplY3RzKHByb3BzKVxufVxuPC9JdGVtLkdyb3VwPj4gKi99XG5cbmNvbnN0IEJsb2dDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8cD5QdWJsaXNoZWQ6IHtwcm9wcy5ibG9nLnB1YkRhdGVbMF19PC9wPlxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IHtwcm9wcy5ibG9nLnRpdGxlWzBdfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgcCwgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dDYXJkIl19 */\n/*@ sourceURL=components/BlogCard.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (BlogCard);

/***/ })

})
//# sourceMappingURL=8.5403f4f3bfdceb6f3520.hot-update.js.map