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
    className: "second-button-text",
    download: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, "Aqu\xED"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW5sYWNlcy9bZW5sYWNlXS5qcyJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUGF0aHMiLCJjbGllbnRlQXhpb3MiLCJnZXQiLCJlbmxhY2VzIiwicGF0aHMiLCJkYXRhIiwibWFwIiwiZW5sYWNlIiwicGFyYW1zIiwidXJsIiwiZmFsbGJhY2siLCJBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImFwcENvbnRleHQiLCJtb3N0cmFyQWxlcnRhIiwibWVuc2FqZV9hcmNoaXZvIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInRpZW5lUGFzc3dvcmQiLCJzZXRUaWVuZVBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidmVyaWZpY2FyUGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicmVzdWx0YWRvIiwicmVzcG9uc2UiLCJtc2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2Nlc3MiLCJhcmNoaXZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCTyxTQUFlQSxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDdUJDLHFEQUFZLENBQUNDLEdBQWIsQ0FBaUIsY0FBakIsQ0FEdkI7O0FBQUE7QUFDT0MsbUJBRFA7QUFBQSw4Q0FFUTtBQUNIQyxtQkFBSyxFQUFFRCxPQUFPLENBQUNFLElBQVIsQ0FBYUYsT0FBYixDQUFxQkcsR0FBckIsQ0FBMEIsVUFBQUMsTUFBTTtBQUFBLHVCQUFNO0FBQ3pDQyx3QkFBTSxFQUFFO0FBQUVELDBCQUFNLEVBQUdBLE1BQU0sQ0FBQ0U7QUFBbEI7QUFEaUMsaUJBQU47QUFBQSxlQUFoQyxDQURKO0FBSUhDLHNCQUFRLEVBQUU7QUFKUCxhQUZSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFZUSxrRkFBYztBQUFBOztBQUFBLE1BQVpILE1BQVksUUFBWkEsTUFBWTtBQUV6QjtBQUNBLE1BQU1JLFVBQVUsR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBN0I7QUFIeUIsTUFJaEJDLGFBSmdCLEdBSW1CSCxVQUpuQixDQUloQkcsYUFKZ0I7QUFBQSxNQUlEQyxlQUpDLEdBSW1CSixVQUpuQixDQUlESSxlQUpDOztBQUFBLGtCQU9tQkMsc0RBQVEsQ0FBQ1QsTUFBTSxDQUFDVSxRQUFSLENBUDNCO0FBQUEsTUFPakJDLGFBUGlCO0FBQUEsTUFPRkMsZ0JBUEU7O0FBQUEsbUJBUVNILHNEQUFRLENBQUMsRUFBRCxDQVJqQjtBQUFBLE1BUWpCQyxRQVJpQjtBQUFBLE1BUVBHLFdBUk87O0FBVXpCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosYUFBWixFQVZ5QixDQVl6Qjs7QUFFQSxNQUFNSyxpQkFBaUI7QUFBQSxpTUFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUVNcEIsa0JBSGdCLEdBR1Q7QUFDVFksd0JBQVEsRUFBUkE7QUFEUyxlQUhTO0FBQUE7QUFBQTtBQUFBLHFCQVFNaEIscURBQVksQ0FBQ3lCLElBQWIsd0JBQWtDbkIsTUFBTSxDQUFDQSxNQUF6QyxHQUFtREYsSUFBbkQsQ0FSTjs7QUFBQTtBQVFac0IsdUJBUlk7QUFTbEJSLDhCQUFnQixDQUFDUSxTQUFTLENBQUN0QixJQUFWLENBQWVZLFFBQWhCLENBQWhCO0FBVGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV2xCSCwyQkFBYSxDQUFDLFlBQU1jLFFBQU4sQ0FBZXZCLElBQWYsQ0FBb0J3QixHQUFyQixDQUFiOztBQVhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQk4saUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQWlCQSxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRTCxhQUFhLEdBQ1QsbUVBQ0k7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhFQURKLEVBR01ILGVBQWUsSUFBSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIekIsRUFJSTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLGdEQURkO0FBRUksWUFBUSxFQUFHLGtCQUFBUyxDQUFDO0FBQUEsYUFBSUQsaUJBQWlCLENBQUNDLENBQUQsQ0FBckI7QUFBQSxLQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMseUNBRGQ7QUFFSSxXQUFPLEVBQUMsVUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBS0k7QUFDSSxRQUFJLEVBQUMsVUFEVDtBQUVJLGFBQVMsRUFBQyw0SEFGZDtBQUdJLE1BQUUsRUFBQyxVQUhQO0FBSUksZUFBVyxFQUFDLHFCQUpoQjtBQUtJLFNBQUssRUFBRVAsUUFMWDtBQU1JLFlBQVEsRUFBRyxrQkFBQU8sQ0FBQztBQUFBLGFBQUlKLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQUpKLEVBbUJJO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxhQUFTLEVBQUMsd0VBRmQ7QUFHSSxTQUFLLEVBQUMscUJBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQURKLENBREosQ0FKSixDQURTLEdBb0NULG1FQUNJO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksUUFBSSxZQUFLQyx1QkFBTCwyQkFBNEN6QixNQUFNLENBQUMwQixPQUFuRCxDQURSO0FBRUksYUFBUyxFQUFDLG9CQUZkO0FBR0ksWUFBUSxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQUZKLENBdENaLENBREo7QUFzREgsQ0FyRkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW5sYWNlcy9bZW5sYWNlXS44MzM0MmU0YTZlOTY1M2YwMDA3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvYXBwL2FwcENvbnRleHQnO1xuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsZXJ0YSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcbiAgICBjb25zdCB7IGVubGFjZSB9ID0gcGFyYW1zO1xuXG4gICAgLy8gY29uc29sZS5sb2coZW5sYWNlKVxuICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldChgL2FwaS9lbmxhY2VzLyR7ZW5sYWNlfWApO1xuXG4vLyAgICBjb25zb2xlLmxvZyhyZXN1bHRhZG8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGVubGFjZTogcmVzdWx0YWRvLmRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQYXRocygpIHtcbiAgICAgICAgY29uc3QgZW5sYWNlcyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvZW5sYWNlcycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF0aHM6IGVubGFjZXMuZGF0YS5lbmxhY2VzLm1hcCggZW5sYWNlID0+ICgge1xuICAgICAgICAgICAgICAgIHBhcmFtczogeyBlbmxhY2UgOiBlbmxhY2UudXJsIH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgICAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCAoe2VubGFjZX0pID0+IHtcblxuICAgIC8vIENvbnRleHQgZGUgbGEgYXBwXG4gICAgY29uc3QgQXBwQ29udGV4dCA9IHVzZUNvbnRleHQoYXBwQ29udGV4dCk7XG4gICAgY29uc3QgeyAgbW9zdHJhckFsZXJ0YSwgbWVuc2FqZV9hcmNoaXZvIH0gPSBBcHBDb250ZXh0O1xuICAgIFxuXG4gICAgY29uc3QgWyB0aWVuZVBhc3N3b3JkLCBzZXRUaWVuZVBhc3N3b3JkIF0gPSB1c2VTdGF0ZShlbmxhY2UucGFzc3dvcmQpO1xuICAgIGNvbnN0IFsgcGFzc3dvcmQsIHNldFBhc3N3b3JkIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zb2xlLmxvZyh0aWVuZVBhc3N3b3JkKVxuXG4gICAgLy8gIGNvbnNvbGUubG9nKGVubGFjZSk7XG5cbiAgICBjb25zdCB2ZXJpZmljYXJQYXNzd29yZCA9IGFzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoYC9hcGkvZW5sYWNlcy8ke2VubGFjZS5lbmxhY2V9YCwgZGF0YSk7XG4gICAgICAgICAgICBzZXRUaWVuZVBhc3N3b3JkKHJlc3VsdGFkby5kYXRhLnBhc3N3b3JkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG1vc3RyYXJBbGVydGEoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aWVuZVBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Fc3RlIGVubGFjZSBlc3RhIHByb3RlZ2lkbyBwb3IgdW4gcGFzc3dvcmQsIGNvbG9jYWxvIGEgY29udGludWFjacOzbjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgeyBtZW5zYWplX2FyY2hpdm8gJiYgPEFsZXJ0YSAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsgZSA9PiB2ZXJpZmljYXJQYXNzd29yZChlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkIGRlbCBlbmxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctZ3JheS05MDAgdy1mdWxsIHAtMiB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiVmFsaWRhciBQYXNzd29yZC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkbGluZVwiPkRlc2NhcmdhIHR1IGFyY2hpdm88L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtwcm9jZXNzLmVudi5iYWNrZW5kVVJMfS9hcGkvYXJjaGl2b3MvJHtlbmxhY2UuYXJjaGl2b31gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Vjb25kLWJ1dHRvbi10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkFxdcOtPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==