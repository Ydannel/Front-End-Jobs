webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/app/appContext */ "./context/app/appContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\components\\Header.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Header = function Header() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado,
      cerrarSesion = AuthContext.cerrarSesion; // Context de la aplicación

  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var limpiarState = AppContext.limpiarState;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    usuarioAutenticado();
  }, []);

  var redireccionar = function redireccionar() {
    router.push('/');
    limpiarState();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "border split-nav background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "nav-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return redireccionar();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 18
    }
  }, "Inicio"))), __jsx("div", {
    className: "collapsible",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, usuario ? __jsx("div", {
    className: "flex-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, "Hola ", usuario.nombre), __jsx("div", {
    className: "flex-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx("button", {
    className: "button button-text",
    onClick: function onClick() {
      return cerrarSesion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, "Cerrar Sesi\xF3n"))) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "paper-btn  btn-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, "Iniciar sesion")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/crear_cuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "paper-btn  btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "Crear Cuenta"))))));
};

_s(Header, "Q9HzjOwvO3BuraGtNWNQ+9K/iLY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwidXN1YXJpbyIsInVzdWFyaW9BdXRlbnRpY2FkbyIsImNlcnJhclNlc2lvbiIsIkFwcENvbnRleHQiLCJhcHBDb250ZXh0IiwibGltcGlhclN0YXRlIiwidXNlRWZmZWN0IiwicmVkaXJlY2Npb25hciIsInB1c2giLCJub21icmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVqQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIaUIsQ0FLZjs7QUFDRixNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUVDLGlFQUFGLENBQTlCO0FBTmlCLE1BT1RDLE9BUFMsR0FPc0NILFdBUHRDLENBT1RHLE9BUFM7QUFBQSxNQU9BQyxrQkFQQSxHQU9zQ0osV0FQdEMsQ0FPQUksa0JBUEE7QUFBQSxNQU9xQkMsWUFQckIsR0FPc0NMLFdBUHRDLENBT3FCSyxZQVByQixFQVNmOztBQUNGLE1BQU1DLFVBQVUsR0FBR0wsd0RBQVUsQ0FBRU0sK0RBQUYsQ0FBN0I7QUFWaUIsTUFXVEMsWUFYUyxHQVdRRixVQVhSLENBV1RFLFlBWFM7QUFhakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaTCxzQkFBa0I7QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJaLFVBQU0sQ0FBQ2EsSUFBUCxDQUFZLEdBQVo7QUFDQUgsZ0JBQVk7QUFDZixHQUhEOztBQU9BLFNBQ0ssbUVBQ0E7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFTLFdBQU8sRUFBRTtBQUFBLGFBQU1FLGFBQWEsRUFBbkI7QUFBQSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREwsQ0FEQSxDQURILEVBT0c7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR1FQLE9BQU8sR0FDSDtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLGFBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBc0JBLE9BQU8sQ0FBQ1MsTUFBOUIsQ0FGSixFQUlJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQ0ksYUFBUyxFQUFDLG9CQURkO0FBRUksV0FBTyxFQUFFO0FBQUEsYUFBTVAsWUFBWSxFQUFsQjtBQUFBLEtBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxDQUpKLENBREcsR0FnQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsQ0FESixFQUlJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxhQUFTLEVBQUMsd0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsQ0FKSixDQW5CRixDQVBILENBREEsQ0FETDtBQTRDSCxDQXBFRDs7R0FBTVIsTTtVQUdhRSxxRDs7O0tBSGJGLE07QUFzRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlYjE5YWVjOTlkM2YzNzU0OWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwQ29udGV4dCc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIHJvdXRpbmcgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAgIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcclxuICAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dCggYXV0aENvbnRleHQgKTtcclxuICAgIGNvbnN0IHsgdXN1YXJpbywgdXN1YXJpb0F1dGVudGljYWRvLCAgY2VycmFyU2VzaW9uwqB9ID0gQXV0aENvbnRleHQ7XHJcblxyXG4gICAgICAvLyBDb250ZXh0IGRlIGxhIGFwbGljYWNpw7NuXHJcbiAgICBjb25zdCBBcHBDb250ZXh0ID0gdXNlQ29udGV4dCggYXBwQ29udGV4dCApO1xyXG4gICAgY29uc3QgeyBsaW1waWFyU3RhdGXCoH0gPSBBcHBDb250ZXh0O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvKClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCByZWRpcmVjY2lvbmFyID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgbGltcGlhclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICA8PiBcclxuICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJib3JkZXIgc3BsaXQtbmF2IGJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYnJhbmRcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKSA9PiByZWRpcmVjY2lvbmFyKCkgfT5JbmljaW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5Ib2xhIHt1c3VhcmlvLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNlcnJhclNlc2lvbigpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DZXJyYXIgU2VzacOzbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmID1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBhcGVyLWJ0biAgYnRuLWRhbmdlclwiPkluaWNpYXIgc2VzaW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9XCIvY3JlYXJfY3VlbnRhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFwZXItYnRuICBidG4tcHJpbWFyeVwiPkNyZWFyIEN1ZW50YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICA8L25hdj5cclxuICAgICAgICAgIFxyXG4gICAgPC8+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9