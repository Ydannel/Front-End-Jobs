webpackHotUpdate_N_E("pages/crear_cuenta",{

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
  return __jsx("div", {
    className: "alert alert-primary ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, mensaje || mensaje_archivo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydGEuanN4Il0sIm5hbWVzIjpbIkFsZXJ0YSIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwibWVuc2FqZSIsIkFwcENvbnRleHQiLCJhcHBDb250ZXh0IiwibWVuc2FqZV9hcmNoaXZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBRWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUhrQixNQUlWQyxPQUpVLEdBSUVILFdBSkYsQ0FJVkcsT0FKVSxFQU1sQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdILHdEQUFVLENBQUVJLCtEQUFGLENBQTdCO0FBUGtCLE1BUVZDLGVBUlUsR0FRVUYsVUFSVixDQVFWRSxlQVJVO0FBVWpCLFNBR1E7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSCxPQUFPLElBQUlHLGVBRGhCLENBSFI7QUFRSCxDQWxCRDs7R0FBTVAsTTs7S0FBQUEsTTtBQW9CU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXJfY3VlbnRhLmU4OWQ5MDFiZDkxM2M3YTg0NWMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwQ29udGV4dCc7XHJcblxyXG5jb25zdCBBbGVydGEgPSAoKSA9PiB7XHJcblxyXG4gICAvLyBFeHRyYWVyIG1lbnNhamUgZGUgZXJyb3IgcGFyYSBVc3Vhcmlvc1xyXG4gICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG4gICBjb25zdCB7IG1lbnNhamUgfSA9IEF1dGhDb250ZXh0O1xyXG5cclxuICAgLy8gRXh0cmFlciBlbCBtZW5zYWplIGRlIGVycm9yIGRlIGFyY2hpdm9zXHJcbiAgIGNvbnN0IEFwcENvbnRleHQgPSB1c2VDb250ZXh0KCBhcHBDb250ZXh0ICk7XHJcbiAgIGNvbnN0IHsgbWVuc2FqZV9hcmNoaXZvIH0gPSBBcHBDb250ZXh0O1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnkgXCI+XHJcbiAgICAgICAgICAgICAgIHsgbWVuc2FqZSB8fCBtZW5zYWplX2FyY2hpdm8gfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0YTsiXSwic291cmNlUm9vdCI6IiJ9