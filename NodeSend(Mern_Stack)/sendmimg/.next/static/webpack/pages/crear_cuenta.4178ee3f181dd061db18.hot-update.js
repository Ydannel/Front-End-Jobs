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
    className: "alert alert-primary ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, mensaje || mensaje_archivo));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydGEuanN4Il0sIm5hbWVzIjpbIkFsZXJ0YSIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwibWVuc2FqZSIsIkFwcENvbnRleHQiLCJhcHBDb250ZXh0IiwibWVuc2FqZV9hcmNoaXZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBRWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUhrQixNQUlWQyxPQUpVLEdBSUVILFdBSkYsQ0FJVkcsT0FKVSxFQU1sQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdILHdEQUFVLENBQUVJLCtEQUFGLENBQTdCO0FBUGtCLE1BUVZDLGVBUlUsR0FRVUYsVUFSVixDQVFWRSxlQVJVO0FBVWpCLFNBQ00sbUVBQ0U7QUFBTyxhQUFTLEVBQUMsYUFBakI7QUFBK0IsTUFBRSxFQUFDLFNBQWxDO0FBQTRDLFFBQUksRUFBQyxVQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILE9BQU8sSUFBSUcsZUFEaEIsQ0FGRixDQUROO0FBU0gsQ0FuQkQ7O0dBQU1QLE07O0tBQUFBLE07QUFxQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyZWFyX2N1ZW50YS40MTc4ZWUzZjE4MWRkMDYxZGIxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XHJcbmltcG9ydCBhcHBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXBwL2FwcENvbnRleHQnO1xyXG5cclxuY29uc3QgQWxlcnRhID0gKCkgPT4ge1xyXG5cclxuICAgLy8gRXh0cmFlciBtZW5zYWplIGRlIGVycm9yIHBhcmEgVXN1YXJpb3NcclxuICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxuICAgY29uc3QgeyBtZW5zYWplIH0gPSBBdXRoQ29udGV4dDtcclxuXHJcbiAgIC8vIEV4dHJhZXIgZWwgbWVuc2FqZSBkZSBlcnJvciBkZSBhcmNoaXZvc1xyXG4gICBjb25zdCBBcHBDb250ZXh0ID0gdXNlQ29udGV4dCggYXBwQ29udGV4dCApO1xyXG4gICBjb25zdCB7IG1lbnNhamVfYXJjaGl2byB9ID0gQXBwQ29udGV4dDtcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhbGVydC1zdGF0ZVwiIGlkPVwiYWxlcnQtMVwiIHR5cGU9XCJjaGVja2JveFwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5IFwiPlxyXG4gICAgICAgICAgICAgICB7IG1lbnNhamUgfHwgbWVuc2FqZV9hcmNoaXZvIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBBbGVydGE7Il0sInNvdXJjZVJvb3QiOiIifQ==