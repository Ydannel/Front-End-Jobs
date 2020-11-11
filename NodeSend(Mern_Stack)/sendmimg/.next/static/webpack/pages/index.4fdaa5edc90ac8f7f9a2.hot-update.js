webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Alerta.jsx":
/*!*******************************!*\
  !*** ./components/Alerta.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/app/appContext */ "./context/app/appContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\components\\Alerta.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Alerta = function Alerta() {
  _s();

  // Extraer mensaje de error para Usuarios
  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var mensaje = AuthContext.mensaje; // Extraer el mensaje de error de archivos

  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var mensaje_archivo = AppContext.mensaje_archivo;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    className: "alert-state",
    id: "alert-1",
    type: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "alert alert-primary dismissible",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, mensaje || mensaje_archivo, __jsx("label", {
    className: "btn-close",
    "for": "alert-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "X")));
};

_s(Alerta, "qqtBZHbLOuctbePkeYHKmFRvGx0=");

_c = Alerta;
/* harmony default export */ __webpack_exports__["default"] = (Alerta);

var _c;

$RefreshReg$(_c, "Alerta");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydGEuanN4Il0sIm5hbWVzIjpbIkFsZXJ0YSIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwibWVuc2FqZSIsIkFwcENvbnRleHQiLCJhcHBDb250ZXh0IiwibWVuc2FqZV9hcmNoaXZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBRWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUhrQixNQUlWQyxPQUpVLEdBSUVILFdBSkYsQ0FJVkcsT0FKVSxFQU1sQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdILHdEQUFVLENBQUVJLCtEQUFGLENBQTdCO0FBUGtCLE1BUVZDLGVBUlUsR0FRVUYsVUFSVixDQVFWRSxlQVJVO0FBVWpCLFNBQ00sbUVBQ0U7QUFBTyxhQUFTLEVBQUMsYUFBakI7QUFBK0IsTUFBRSxFQUFDLFNBQWxDO0FBQTRDLFFBQUksRUFBQyxVQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILE9BQU8sSUFBSUcsZUFEaEIsRUFFSTtBQUFPLGFBQVMsRUFBQyxXQUFqQjtBQUE2QixXQUFJLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSixDQUZGLENBRE47QUFTSCxDQW5CRDs7R0FBTVAsTTs7S0FBQUEsTTtBQXFCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGZkYWE1ZWRjOTBhYzhmN2Y5YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgYXBwQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FwcC9hcHBDb250ZXh0JztcclxuXHJcbmNvbnN0IEFsZXJ0YSA9ICgpID0+IHtcclxuXHJcbiAgIC8vIEV4dHJhZXIgbWVuc2FqZSBkZSBlcnJvciBwYXJhIFVzdWFyaW9zXHJcbiAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbiAgIGNvbnN0IHsgbWVuc2FqZSB9ID0gQXV0aENvbnRleHQ7XHJcblxyXG4gICAvLyBFeHRyYWVyIGVsIG1lbnNhamUgZGUgZXJyb3IgZGUgYXJjaGl2b3NcclxuICAgY29uc3QgQXBwQ29udGV4dCA9IHVzZUNvbnRleHQoIGFwcENvbnRleHQgKTtcclxuICAgY29uc3QgeyBtZW5zYWplX2FyY2hpdm8gfSA9IEFwcENvbnRleHQ7XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWxlcnQtc3RhdGVcIiBpZD1cImFsZXJ0LTFcIiB0eXBlPVwiY2hlY2tib3hcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeSBkaXNtaXNzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICB7IG1lbnNhamUgfHwgbWVuc2FqZV9hcmNoaXZvIH1cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4tY2xvc2VcIiBmb3I9XCJhbGVydC0xXCI+WDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBbGVydGE7Il0sInNvdXJjZVJvb3QiOiIifQ==