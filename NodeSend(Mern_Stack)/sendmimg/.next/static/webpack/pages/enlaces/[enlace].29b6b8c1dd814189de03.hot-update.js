webpackHotUpdate_N_E("pages/enlaces/[enlace]",{

/***/ "./pages/enlaces/[enlace].js":
/*!***********************************!*\
  !*** ./pages/enlaces/[enlace].js ***!
  \***********************************/
/*! exports provided: __N_SSP, getServerSidePaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSidePaths", function() { return getServerSidePaths; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/app/appContext */ "./context/app/appContext.js");
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Alerta */ "./components/Alerta.jsx");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\pages\\enlaces\\[enlace].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var __N_SSP = true;
function getServerSidePaths() {
  return _getServerSidePaths.apply(this, arguments);
}

function _getServerSidePaths() {
  _getServerSidePaths = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var enlaces;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _config_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/enlaces');

          case 2:
            enlaces = _context2.sent;
            return _context2.abrupt("return", {
              paths: enlaces.data.enlaces.map(function (enlace) {
                return {
                  params: {
                    enlace: enlace.url
                  }
                };
              }),
              fallback: false
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getServerSidePaths.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {
  _s();

  var enlace = _ref.enlace;
  // Context de la app
  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var mostrarAlerta = AppContext.mostrarAlerta,
      mensaje_archivo = AppContext.mensaje_archivo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(enlace.password),
      tienePassword = _useState[0],
      setTienePassword = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  console.log(tienePassword); //  console.log(enlace);

  var verificarPassword = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var data, resultado;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = {
                password: password
              };
              _context.prev = 2;
              _context.next = 5;
              return _config_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/enlaces/".concat(enlace.enlace), data);

            case 5:
              resultado = _context.sent;
              setTienePassword(resultado.data.password);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              mostrarAlerta(_context.t0.response.data.msg);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    return function verificarPassword(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, tienePassword ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, "Este enlace esta protegido por un password, colocalo a continuaci\xF3n"), mensaje_archivo && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 46
    }
  }), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4",
    onSubmit: function onSubmit(e) {
      return verificarPassword(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "password",
    placeholder: "Password del enlace",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  })), __jsx("input", {
    type: "submit",
    className: "bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold",
    value: "Validar Password...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("h1", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, "Descarga tu archivo"), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "".concat("http://localhost:4000", "/api/archivos/").concat(enlace.archivo),
    className: "paper-btn btn-block button",
    download: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, "Descargar Archivo")), __jsx("img", {
    src: "/download.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  })));
}, "Qn/NtrJYBPDFG93GjgpCZ5+0yLA="));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW5sYWNlcy9bZW5sYWNlXS5qcyJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUGF0aHMiLCJjbGllbnRlQXhpb3MiLCJnZXQiLCJlbmxhY2VzIiwicGF0aHMiLCJkYXRhIiwibWFwIiwiZW5sYWNlIiwicGFyYW1zIiwidXJsIiwiZmFsbGJhY2siLCJBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImFwcENvbnRleHQiLCJtb3N0cmFyQWxlcnRhIiwibWVuc2FqZV9hcmNoaXZvIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInRpZW5lUGFzc3dvcmQiLCJzZXRUaWVuZVBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidmVyaWZpY2FyUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicmVzdWx0YWRvIiwicmVzcG9uc2UiLCJtc2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2Nlc3MiLCJhcmNoaXZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCTyxTQUFlQSxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDdUJDLHFEQUFZLENBQUNDLEdBQWIsQ0FBaUIsY0FBakIsQ0FEdkI7O0FBQUE7QUFDT0MsbUJBRFA7QUFBQSw4Q0FFUTtBQUNIQyxtQkFBSyxFQUFFRCxPQUFPLENBQUNFLElBQVIsQ0FBYUYsT0FBYixDQUFxQkcsR0FBckIsQ0FBMEIsVUFBQUMsTUFBTTtBQUFBLHVCQUFNO0FBQ3pDQyx3QkFBTSxFQUFFO0FBQUVELDBCQUFNLEVBQUdBLE1BQU0sQ0FBQ0U7QUFBbEI7QUFEaUMsaUJBQU47QUFBQSxlQUFoQyxDQURKO0FBSUhDLHNCQUFRLEVBQUU7QUFKUCxhQUZSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQURKLENBREosQ0FKSixDQURTLEdBb0NULG1FQUNJO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksUUFBSSxZQUFLQyx1QkFBTCwyQkFBNEN6QixNQUFNLENBQUMwQixPQUFuRCxDQURSO0FBRUksYUFBUyxFQUFDLDRCQUZkO0FBR0ksWUFBUSxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosQ0FGSixFQVVJO0FBQUssT0FBRyxFQUFDLGVBQVQ7QUFBeUIsU0FBSyxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQXRDWixDQURKO0FBd0RILENBdkZEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VubGFjZXMvW2VubGFjZV0uMjliNmI4YzFkZDgxNDE4OWRlMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBwQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2FwcC9hcHBDb250ZXh0JztcbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbGVydGEnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXN9KSB7XG4gICAgY29uc3QgeyBlbmxhY2UgfSA9IHBhcmFtcztcblxuICAgIC8vIGNvbnNvbGUubG9nKGVubGFjZSlcbiAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoYC9hcGkvZW5sYWNlcy8ke2VubGFjZX1gKTtcblxuLy8gICAgY29uc29sZS5sb2cocmVzdWx0YWRvKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBlbmxhY2U6IHJlc3VsdGFkby5kYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUGF0aHMoKSB7XG4gICAgICAgIGNvbnN0IGVubGFjZXMgPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL2VubGFjZXMnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGhzOiBlbmxhY2VzLmRhdGEuZW5sYWNlcy5tYXAoIGVubGFjZSA9PiAoIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZW5sYWNlIDogZW5sYWNlLnVybCB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICAgICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgKHtlbmxhY2V9KSA9PiB7XG5cbiAgICAvLyBDb250ZXh0IGRlIGxhIGFwcFxuICAgIGNvbnN0IEFwcENvbnRleHQgPSB1c2VDb250ZXh0KGFwcENvbnRleHQpO1xuICAgIGNvbnN0IHsgIG1vc3RyYXJBbGVydGEsIG1lbnNhamVfYXJjaGl2byB9ID0gQXBwQ29udGV4dDtcbiAgICBcblxuICAgIGNvbnN0IFsgdGllbmVQYXNzd29yZCwgc2V0VGllbmVQYXNzd29yZCBdID0gdXNlU3RhdGUoZW5sYWNlLnBhc3N3b3JkKTtcbiAgICBjb25zdCBbIHBhc3N3b3JkLCBzZXRQYXNzd29yZCBdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc29sZS5sb2codGllbmVQYXNzd29yZClcblxuICAgIC8vICBjb25zb2xlLmxvZyhlbmxhY2UpO1xuXG4gICAgY29uc3QgdmVyaWZpY2FyUGFzc3dvcmQgPSBhc3luYyBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KGAvYXBpL2VubGFjZXMvJHtlbmxhY2UuZW5sYWNlfWAsIGRhdGEpO1xuICAgICAgICAgICAgc2V0VGllbmVQYXNzd29yZChyZXN1bHRhZG8uZGF0YS5wYXNzd29yZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBtb3N0cmFyQWxlcnRhKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGllbmVQYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RXN0ZSBlbmxhY2UgZXN0YSBwcm90ZWdpZG8gcG9yIHVuIHBhc3N3b3JkLCBjb2xvY2FsbyBhIGNvbnRpbnVhY2nDs248L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbWVuc2FqZV9hcmNoaXZvICYmIDxBbGVydGEgLz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbWQgcHgtOCBwdC02IHBiLTggbWItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17IGUgPT4gdmVyaWZpY2FyUGFzc3dvcmQoZSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCBkZWwgZW5sYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLWdyYXktOTAwIHctZnVsbCBwLTIgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlZhbGlkYXIgUGFzc3dvcmQuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGxpbmVcIj5EZXNjYXJnYSB0dSBhcmNoaXZvPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7cHJvY2Vzcy5lbnYuYmFja2VuZFVSTH0vYXBpL2FyY2hpdm9zLyR7ZW5sYWNlLmFyY2hpdm99YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcGVyLWJ0biBidG4tYmxvY2sgYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkRlc2NhcmdhciBBcmNoaXZvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rvd25sb2FkLnN2Z1wiIHdpZHRoPVwiMTAwJVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9