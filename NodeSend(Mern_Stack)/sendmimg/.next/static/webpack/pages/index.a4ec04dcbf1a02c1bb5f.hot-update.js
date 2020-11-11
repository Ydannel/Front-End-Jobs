webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.jsx");
/* harmony import */ var _components_Dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dropzone */ "./components/Dropzone.jsx");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/app/appContext */ "./context/app/appContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index() {
  _s();

  // Extraer el Usuario autenticado del Storage 
  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var usuarioAutenticado = AuthContext.usuarioAutenticado; // Extraer el mensaje de error de archivos

  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var mensaje_archivo = AppContext.mensaje_archivo,
      url = AppContext.url;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    }
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, url ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Tu URL es:"), " ", "".concat("http://localhost:3000", "/enlaces/").concat(url)), __jsx("button", {
    type: "button",
    className: "paper-btn button btn-block",
    onClick: function onClick() {
      return navigator.clipboard.writeText("".concat("http://localhost:3000", "/enlaces/").concat(url));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "Copiar Enlace")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mensaje_archivo && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 34
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-6 col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_components_Dropzone__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-6 col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, __jsx("h2", {
    className: "headline text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, "Compartir archivos de forma sencilla y privada"), __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "spaner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "ReactNodeSend"), " te permite compartir archivos con cifrado de extremo a extremo y un archivo que es eliminado despu\xE9s de ser descargado. As\xED que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en l\xEDnea para siempre."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "",
    href: "/crear_cuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 27
    }
  }, "Crea una cuenta para mayores beneficios")))))));
};

_s(Index, "9FKXpgcAUoOghwMx+BALTjVkVA4=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW9BdXRlbnRpY2FkbyIsIkFwcENvbnRleHQiLCJhcHBDb250ZXh0IiwibWVuc2FqZV9hcmNoaXZvIiwidXJsIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJvY2VzcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFbEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUVDLGlFQUFGLENBQTlCO0FBSGtCLE1BSVZDLGtCQUpVLEdBSWFILFdBSmIsQ0FJVkcsa0JBSlUsRUFNbEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHSCx3REFBVSxDQUFFSSwrREFBRixDQUE3QjtBQVBrQixNQVFWQyxlQVJVLEdBUWVGLFVBUmYsQ0FRVkUsZUFSVTtBQUFBLE1BUU9DLEdBUlAsR0FRZUgsVUFSZixDQVFPRyxHQVJQO0FBVWxCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkOztBQUVBLFFBQUdGLEtBQUgsRUFBVTtBQUNSTix3QkFBa0I7QUFDbkI7QUFFRixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUksR0FBRyxHQUNILG1FQUNFO0FBQUcsYUFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosaUJBQzZDSyx1QkFEN0Msc0JBQ2dGTCxHQURoRixFQURGLEVBSUU7QUFDSSxRQUFJLEVBQUMsUUFEVDtBQUVJLGFBQVMsRUFBQyw0QkFGZDtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1NLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsV0FBaUNILHVCQUFqQyxzQkFBb0VMLEdBQXBFLEVBQU47QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsQ0FERyxHQVlILG1FQUNFRCxlQUFlLElBQUksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHJCLEVBR0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERixFQUtJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREosRUFFSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLDhQQUZKLEVBS0ksTUFBQyxnREFBRDtBQUFNLGFBQVMsRUFBQyxFQUFoQjtBQUFtQixRQUFJLEVBQUMsZUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREosQ0FMSixDQUxKLENBSEYsQ0FiSixDQURKLENBREY7QUF1Q0QsQ0ExREQ7O0dBQU1QLEs7O0tBQUFBLEs7QUE0RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0ZWMwNGRjYmYxYTAyYzFiYjVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWxlcnRhIGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnRhJztcbmltcG9ydCBEcm9wem9uZSBmcm9tICcuLi9jb21wb25lbnRzL0Ryb3B6b25lJztcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwQ29udGV4dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcbiAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KCBhdXRoQ29udGV4dCApO1xuICBjb25zdCB7IHVzdWFyaW9BdXRlbnRpY2Fkb8KgfSA9IEF1dGhDb250ZXh0O1xuXG4gIC8vIEV4dHJhZXIgZWwgbWVuc2FqZSBkZSBlcnJvciBkZSBhcmNoaXZvc1xuICBjb25zdCBBcHBDb250ZXh0ID0gdXNlQ29udGV4dCggYXBwQ29udGV4dCApO1xuICBjb25zdCB7IG1lbnNhamVfYXJjaGl2bywgdXJsIH0gPSBBcHBDb250ZXh0O1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgaWYodG9rZW4pIHtcbiAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbygpXG4gICAgfVxuICAgXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKCBcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgeyB1cmwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlR1IFVSTCBlczo8L3NwYW4+IHtgJHtwcm9jZXNzLmVudi5mcm9udGVuZFVSTH0vZW5sYWNlcy8ke3VybH1gfSBcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXBlci1idG4gYnV0dG9uIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgJHtwcm9jZXNzLmVudi5mcm9udGVuZFVSTH0vZW5sYWNlcy8ke3VybH1gKSB9XG4gICAgICAgICAgICAgID5Db3BpYXIgRW5sYWNlPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIHsgbWVuc2FqZV9hcmNoaXZvICYmIDxBbGVydGEgLz4gfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRsaW5lIHRleHQtY2VudGVyXCI+Q29tcGFydGlyIGFyY2hpdm9zIGRlIGZvcm1hIHNlbmNpbGxhIHkgcHJpdmFkYTwvaDI+IFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuZXJcIj5SZWFjdE5vZGVTZW5kPC9zcGFuPiB0ZSBwZXJtaXRlIGNvbXBhcnRpciBhcmNoaXZvcyBjb24gY2lmcmFkbyBkZSBleHRyZW1vIGEgZXh0cmVtbyB5IHVuIGFyY2hpdm8gcXVlIGVzIGVsaW1pbmFkbyBkZXNwdcOpcyBkZSBzZXIgZGVzY2FyZ2Fkby4gQXPDrSBxdWUgcHVlZGVzIG1hbnRlbmVyIGxvIHF1ZSBjb21wYXJ0ZXMgZW4gcHJpdmFkbyB5IGFzZWd1cmFydGUgZGUgcXVlIHR1cyBjb3NhcyBubyBwZXJtYW5lemNhbiBlbiBsw61uZWEgcGFyYSBzaWVtcHJlLlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJcIiBocmVmPVwiL2NyZWFyX2N1ZW50YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DcmVhIHVuYSBjdWVudGEgcGFyYSBtYXlvcmVzIGJlbmVmaWNpb3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9