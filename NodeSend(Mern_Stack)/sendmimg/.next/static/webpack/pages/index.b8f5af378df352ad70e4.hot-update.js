webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/app/appContext */ "./context/app/appContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\components\\Form.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Formulario = function Formulario() {
  _s();

  // Context de la app
  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var agregarPassword = AppContext.agregarPassword,
      agregarDescargas = AppContext.agregarDescargas; //en caso de que el usuario quiera agregar una clave, la cual es opcional

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      tienePassword = _useState[0],
      setTienePassword = _useState[1];

  return __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Eliminar tras:"), __jsx("select", {
    className: "form-group",
    onChange: function onChange(e) {
      return agregarDescargas(parseInt(e.target.value));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("option", {
    value: "",
    selected: true,
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "-- Seleccione --"), __jsx("option", {
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "1 Descarga"), __jsx("option", {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "2 Descargas"), __jsx("option", {
    value: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "5 Descargas"), __jsx("option", {
    value: "10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "10 Descargas"))), __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "paper-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Proteger con Contrase\xF1a"), __jsx("input", {
    type: "checkbox",
    onChange: function onChange() {
      return setTienePassword(!tienePassword);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })), tienePassword ? __jsx("input", {
    type: "password",
    className: "",
    onChange: function onChange(e) {
      return agregarPassword(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }) : null));
};

_s(Formulario, "6pYinVaXR84D3XSh8WGNq6ttSjY=");

_c = Formulario;
/* harmony default export */ __webpack_exports__["default"] = (Formulario);

var _c;

$RefreshReg$(_c, "Formulario");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeCJdLCJuYW1lcyI6WyJGb3JtdWxhcmlvIiwiQXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJhcHBDb250ZXh0IiwiYWdyZWdhclBhc3N3b3JkIiwiYWdyZWdhckRlc2NhcmdhcyIsInVzZVN0YXRlIiwidGllbmVQYXNzd29yZCIsInNldFRpZW5lUGFzc3dvcmQiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUVyQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBN0I7QUFIcUIsTUFJYkMsZUFKYSxHQUl5QkgsVUFKekIsQ0FJYkcsZUFKYTtBQUFBLE1BSUlDLGdCQUpKLEdBSXlCSixVQUp6QixDQUlJSSxnQkFKSixFQU9yQjs7QUFQcUIsa0JBUXFCQyxzREFBUSxDQUFDLEtBQUQsQ0FSN0I7QUFBQSxNQVFkQyxhQVJjO0FBQUEsTUFRQ0MsZ0JBUkQ7O0FBVXJCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFSTtBQUNJLGFBQVMsRUFBQyxZQURkO0FBRUksWUFBUSxFQUFHLGtCQUFBQyxDQUFDO0FBQUEsYUFBSUosZ0JBQWdCLENBQUVLLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBVixDQUFwQjtBQUFBLEtBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQWlCLFlBQVEsTUFBekI7QUFBMEIsWUFBUSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKLEVBS0k7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLEVBTUk7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLEVBT0k7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLEVBUUk7QUFBUSxTQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJKLENBRkosQ0FESixFQWVJO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREosRUFFSTtBQUNJLFFBQUksRUFBQyxVQURUO0FBRUksWUFBUSxFQUFFO0FBQUEsYUFBTUosZ0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUF0QjtBQUFBLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFTTUEsYUFBYSxHQUNYO0FBQ0ksUUFBSSxFQUFDLFVBRFQ7QUFFSSxhQUFTLEVBQUMsRUFGZDtBQUdJLFlBQVEsRUFBRyxrQkFBQUUsQ0FBQztBQUFBLGFBQUlMLGVBQWUsQ0FBQ0ssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxLQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFcsR0FNWCxJQWZSLENBZkosQ0FESjtBQXNDSCxDQWhERDs7R0FBTVosVTs7S0FBQUEsVTtBQWtEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjhmNWFmMzc4ZGYzNTJhZDcwZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXBwL2FwcENvbnRleHQnO1xyXG5cclxuY29uc3QgRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBDb250ZXh0IGRlIGxhIGFwcFxyXG4gICAgY29uc3QgQXBwQ29udGV4dCA9IHVzZUNvbnRleHQoYXBwQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGFncmVnYXJQYXNzd29yZCwgYWdyZWdhckRlc2Nhcmdhc8KgfSA9IEFwcENvbnRleHQ7XHJcblxyXG5cclxuICAgIC8vZW4gY2FzbyBkZSBxdWUgZWwgdXN1YXJpbyBxdWllcmEgYWdyZWdhciB1bmEgY2xhdmUsIGxhIGN1YWwgZXMgb3BjaW9uYWxcclxuICAgIGNvbnN0IFt0aWVuZVBhc3N3b3JkLCBzZXRUaWVuZVBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJcIj5FbGltaW5hciB0cmFzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBhZ3JlZ2FyRGVzY2FyZ2FzKCBwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZD4tLSBTZWxlY2Npb25lIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xIERlc2NhcmdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yIERlc2Nhcmdhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NSBEZXNjYXJnYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMCBEZXNjYXJnYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+UHJvdGVnZXIgY29uIENvbnRyYXNlw7FhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0VGllbmVQYXNzd29yZCghdGllbmVQYXNzd29yZCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IHRpZW5lUGFzc3dvcmQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBhZ3JlZ2FyUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJpbzsiXSwic291cmNlUm9vdCI6IiJ9