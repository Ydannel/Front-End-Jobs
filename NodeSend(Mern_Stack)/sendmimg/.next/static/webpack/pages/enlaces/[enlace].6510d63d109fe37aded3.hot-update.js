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
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("form", {
    className: "form-group",
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
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("label", {
    className: "headline ",
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "input-block background-warning",
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
    className: "paper-btn btn-block button",
    value: "Validar Password...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }), __jsx("img", {
    src: "/private.svg",
    width: "50%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("h1", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, "Descarga tu archivo"), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "".concat("http://localhost:4000", "/api/archivos/").concat(enlace.archivo),
    className: "paper-btn btn-block button",
    download: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, "Descargar Archivo")), __jsx("img", {
    src: "/download.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW5sYWNlcy9bZW5sYWNlXS5qcyJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUGF0aHMiLCJjbGllbnRlQXhpb3MiLCJnZXQiLCJlbmxhY2VzIiwicGF0aHMiLCJkYXRhIiwibWFwIiwiZW5sYWNlIiwicGFyYW1zIiwidXJsIiwiZmFsbGJhY2siLCJBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImFwcENvbnRleHQiLCJtb3N0cmFyQWxlcnRhIiwibWVuc2FqZV9hcmNoaXZvIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInRpZW5lUGFzc3dvcmQiLCJzZXRUaWVuZVBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidmVyaWZpY2FyUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicmVzdWx0YWRvIiwicmVzcG9uc2UiLCJtc2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2Nlc3MiLCJhcmNoaXZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCTyxTQUFlQSxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDdUJDLHFEQUFZLENBQUNDLEdBQWIsQ0FBaUIsY0FBakIsQ0FEdkI7O0FBQUE7QUFDT0MsbUJBRFA7QUFBQSw4Q0FFUTtBQUNIQyxtQkFBSyxFQUFFRCxPQUFPLENBQUNFLElBQVIsQ0FBYUYsT0FBYixDQUFxQkcsR0FBckIsQ0FBMEIsVUFBQUMsTUFBTTtBQUFBLHVCQUFNO0FBQ3pDQyx3QkFBTSxFQUFFO0FBQUVELDBCQUFNLEVBQUdBLE1BQU0sQ0FBQ0U7QUFBbEI7QUFEaUMsaUJBQU47QUFBQSxlQUFoQyxDQURKO0FBSUhDLHNCQUFRLEVBQUU7QUFKUCxhQUZSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUE7QUFBQTtBQUFBLElBbkJKLEVBd0JJO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsU0FBSyxFQUFDLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkosQ0FESixDQURKLENBSkosQ0FEUyxHQXFDVCxtRUFDSTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFFBQUksWUFBS0MsdUJBQUwsMkJBQTRDekIsTUFBTSxDQUFDMEIsT0FBbkQsQ0FEUjtBQUVJLGFBQVMsRUFBQyw0QkFGZDtBQUdJLFlBQVEsTUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLENBRkosRUFVSTtBQUFLLE9BQUcsRUFBQyxlQUFUO0FBQXlCLFNBQUssRUFBQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosQ0F2Q1osQ0FESjtBQXlESCxDQXhGRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbmxhY2VzL1tlbmxhY2VdLjY1MTBkNjNkMTA5ZmUzN2FkZWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9hcHAvYXBwQ29udGV4dCc7XG5pbXBvcnQgQWxlcnRhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWxlcnRhJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zfSkge1xuICAgIGNvbnN0IHsgZW5sYWNlIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhlbmxhY2UpXG4gICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KGAvYXBpL2VubGFjZXMvJHtlbmxhY2V9YCk7XG5cbi8vICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZW5sYWNlOiByZXN1bHRhZG8uZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVBhdGhzKCkge1xuICAgICAgICBjb25zdCBlbmxhY2VzID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCgnL2FwaS9lbmxhY2VzJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoczogZW5sYWNlcy5kYXRhLmVubGFjZXMubWFwKCBlbmxhY2UgPT4gKCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGVubGFjZSA6IGVubGFjZS51cmwgfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0ICh7ZW5sYWNlfSkgPT4ge1xuXG4gICAgLy8gQ29udGV4dCBkZSBsYSBhcHBcbiAgICBjb25zdCBBcHBDb250ZXh0ID0gdXNlQ29udGV4dChhcHBDb250ZXh0KTtcbiAgICBjb25zdCB7ICBtb3N0cmFyQWxlcnRhLCBtZW5zYWplX2FyY2hpdm8gfSA9IEFwcENvbnRleHQ7XG4gICAgXG5cbiAgICBjb25zdCBbIHRpZW5lUGFzc3dvcmQsIHNldFRpZW5lUGFzc3dvcmQgXSA9IHVzZVN0YXRlKGVubGFjZS5wYXNzd29yZCk7XG4gICAgY29uc3QgWyBwYXNzd29yZCwgc2V0UGFzc3dvcmQgXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnNvbGUubG9nKHRpZW5lUGFzc3dvcmQpXG5cbiAgICAvLyAgY29uc29sZS5sb2coZW5sYWNlKTtcblxuICAgIGNvbnN0IHZlcmlmaWNhclBhc3N3b3JkID0gYXN5bmMgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdChgL2FwaS9lbmxhY2VzLyR7ZW5sYWNlLmVubGFjZX1gLCBkYXRhKTtcbiAgICAgICAgICAgIHNldFRpZW5lUGFzc3dvcmQocmVzdWx0YWRvLmRhdGEucGFzc3dvcmQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbW9zdHJhckFsZXJ0YShlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpZW5lUGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkVzdGUgZW5sYWNlIGVzdGEgcHJvdGVnaWRvIHBvciB1biBwYXNzd29yZCwgY29sb2NhbG8gYSBjb250aW51YWNpw7NuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1lbnNhamVfYXJjaGl2byAmJiA8QWxlcnRhIC8+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyBlID0+IHZlcmlmaWNhclBhc3N3b3JkKGUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGxpbmUgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ibG9jayBiYWNrZ3JvdW5kLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCBkZWwgZW5sYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXBlci1idG4gYnRuLWJsb2NrIGJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJWYWxpZGFyIFBhc3N3b3JkLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcml2YXRlLnN2Z1wiIHdpZHRoPVwiNTAlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkbGluZVwiPkRlc2NhcmdhIHR1IGFyY2hpdm88L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtwcm9jZXNzLmVudi5iYWNrZW5kVVJMfS9hcGkvYXJjaGl2b3MvJHtlbmxhY2UuYXJjaGl2b31gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFwZXItYnRuIGJ0bi1ibG9jayBidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZCAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+RGVzY2FyZ2FyIEFyY2hpdm88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZG93bmxvYWQuc3ZnXCIgd2lkdGg9XCIxMDAlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=