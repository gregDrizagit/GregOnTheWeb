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
    style: {
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-3034807148"
  }, "Published: ", new Date(props.blog.pubDate[0]).toLocaleDateString())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-3034807148"
  }, props.blog.title[0])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3034807148",
    css: "p.jsx-3034807148,h3.jsx-3034807148{font-size:larger;font-family:\"Lucida Console\",Monaco,monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmxvZ0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUc4QyxpQkFDOEIsOENBQ25EIiwiZmlsZSI6ImNvbXBvbmVudHMvQmxvZ0NhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0dyZWdEcml6YS9Eb2N1bWVudHMvSW5kZXBlbmRlbnQvR3JlZ09uVGhlV2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQ29udGFpbmVyLCBcbiAgICBDYXJkLCBcbiAgICBJbWFnZSxcbiAgICBJdGVtXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JzsgXG5cblxuY29uc3QgcGFyc2VTdWJqZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIGxldCBzdWJqZWN0cyA9IHByb3BzLmJsb2cuY2F0ZWdvcnkubWFwKGl0ZW0gPT4ge3JldHVybiA8SXRlbT57aXRlbX08L0l0ZW0+IH0pXG4gICAgcmV0dXJuIHN1YmplY3RzXG59XG57LyogPEl0ZW0uR3JvdXAgZGl2aWRlZD5cbntcbiBwYXJzZVN1YmplY3RzKHByb3BzKVxufVxuPC9JdGVtLkdyb3VwPj4gKi99XG5cbmNvbnN0IEJsb2dDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Q2FyZCBzdHlsZT17e3BhZGRpbmc6ICcxMHB4J319PlxuICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICA8cD5QdWJsaXNoZWQ6IHtuZXcgRGF0ZShwcm9wcy5ibG9nLnB1YkRhdGVbMF0pLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICB7cHJvcHMuYmxvZy50aXRsZVswXX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIHAsIGgze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dDYXJkIl19 */\n/*@ sourceURL=components/BlogCard.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (BlogCard);

/***/ })

})
//# sourceMappingURL=8.4825c7ac4eba808f0539.hot-update.js.map