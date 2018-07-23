webpackHotUpdate(5,{

/***/ "./api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "getMediumRSS",
    value: function getMediumRSS() {
      var xmlAsJson;
      return fetch('https://cors-anywhere.herokuapp.com/medium.com/feed/@gdriza').then(function (resp) {
        console.log(resp);
      });
    }
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["a"] = (Api); // resp.text()

/***/ })

})
//# sourceMappingURL=5.55b3ca835f4f4228822a.hot-update.js.map