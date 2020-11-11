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
    className: "form-group text-center",
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
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Eliminar despues de "), __jsx("select", {
    className: "form-group second-button second-button-text input-block",
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
    "for": "paperChecks1",
    className: "paper-check headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "checkbox",
    onChange: function onChange() {
      return setTienePassword(!tienePassword);
    },
    id: "paperChecks1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }, "Proteger con Contrase\xF1a"))), tienePassword ? __jsx("input", {
    type: "password",
    className: "input-block button",
    onChange: function onChange(e) {
      return agregarPassword(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeCJdLCJuYW1lcyI6WyJGb3JtdWxhcmlvIiwiQXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJhcHBDb250ZXh0IiwiYWdyZWdhclBhc3N3b3JkIiwiYWdyZWdhckRlc2NhcmdhcyIsInVzZVN0YXRlIiwidGllbmVQYXNzd29yZCIsInNldFRpZW5lUGFzc3dvcmQiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUVyQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBN0I7QUFIcUIsTUFJYkMsZUFKYSxHQUl5QkgsVUFKekIsQ0FJYkcsZUFKYTtBQUFBLE1BSUlDLGdCQUpKLEdBSXlCSixVQUp6QixDQUlJSSxnQkFKSixFQU9yQjs7QUFQcUIsa0JBUXFCQyxzREFBUSxDQUFDLEtBQUQsQ0FSN0I7QUFBQSxNQVFkQyxhQVJjO0FBQUEsTUFRQ0MsZ0JBUkQ7O0FBVXJCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLGFBQVMsRUFBQyxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLEVBRUk7QUFDSSxhQUFTLEVBQUMseURBRGQ7QUFFSSxZQUFRLEVBQUcsa0JBQUFDLENBQUM7QUFBQSxhQUFJSixnQkFBZ0IsQ0FBRUssUUFBUSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFWLENBQXBCO0FBQUEsS0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBa0IsWUFBUSxNQUExQjtBQUEyQixZQUFRLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkosRUFLSTtBQUFRLFNBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosRUFNSTtBQUFRLFNBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosRUFPSTtBQUFRLFNBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEosRUFRSTtBQUFRLFNBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosQ0FGSixDQURKLEVBZUk7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxXQUFJLGNBQVo7QUFBMkIsYUFBUyxFQUFDLHNCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFDSSxRQUFJLEVBQUMsVUFEVDtBQUVJLFlBQVEsRUFBRTtBQUFBLGFBQU1KLGdCQUFnQixDQUFDLENBQUNELGFBQUYsQ0FBdEI7QUFBQSxLQUZkO0FBR0ksTUFBRSxFQUFDLGNBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBS0U7QUFBTSxhQUFTLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FMRixDQURKLENBREosRUFZTUEsYUFBYSxHQUNYO0FBQ0ksUUFBSSxFQUFDLFVBRFQ7QUFFSSxhQUFTLEVBQUMsb0JBRmQ7QUFHSSxZQUFRLEVBQUcsa0JBQUFFLENBQUM7QUFBQSxhQUFJTCxlQUFlLENBQUNLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQUEsS0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURXLEdBTVgsSUFsQlIsQ0FmSixDQURKO0FBeUNILENBbkREOztHQUFNWixVOztLQUFBQSxVO0FBcURTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYzA2YzAwNTYxYTllOGJjOGNkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwQ29udGV4dCc7XHJcblxyXG5jb25zdCBGb3JtdWxhcmlvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIENvbnRleHQgZGUgbGEgYXBwXHJcbiAgICBjb25zdCBBcHBDb250ZXh0ID0gdXNlQ29udGV4dChhcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgYWdyZWdhclBhc3N3b3JkLCBhZ3JlZ2FyRGVzY2FyZ2FzwqB9ID0gQXBwQ29udGV4dDtcclxuXHJcblxyXG4gICAgLy9lbiBjYXNvIGRlIHF1ZSBlbCB1c3VhcmlvIHF1aWVyYSBhZ3JlZ2FyIHVuYSBjbGF2ZSwgbGEgY3VhbCBlcyBvcGNpb25hbFxyXG4gICAgY29uc3QgW3RpZW5lUGFzc3dvcmQsIHNldFRpZW5lUGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+RWxpbWluYXIgZGVzcHVlcyBkZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHNlY29uZC1idXR0b24gc2Vjb25kLWJ1dHRvbi10ZXh0IGlucHV0LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gYWdyZWdhckRlc2NhcmdhcyggcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgIHNlbGVjdGVkIGRpc2FibGVkPi0tIFNlbGVjY2lvbmUgLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjEgRGVzY2FyZ2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjIgRGVzY2FyZ2FzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41IERlc2Nhcmdhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwIERlc2Nhcmdhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXItY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGZvcj1cInBhcGVyQ2hlY2tzMVwiIGNsYXNzTmFtZT1cInBhcGVyLWNoZWNrIGhlYWRsaW5lXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRUaWVuZVBhc3N3b3JkKCF0aWVuZVBhc3N3b3JkKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFwZXJDaGVja3MxXCJcclxuICAgICAgICAgICAgICAgICAgICAvPjxzcGFuIGNsYXNzTmFtZT1cIlwiPlByb3RlZ2VyIGNvbiBDb250cmFzZcOxYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyB0aWVuZVBhc3N3b3JkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJsb2NrIGJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gYWdyZWdhclBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyaW87Il0sInNvdXJjZVJvb3QiOiIifQ==