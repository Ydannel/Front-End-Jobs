webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.jsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\pages\\login.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Login = function Login() {
  _s();

  // definir el context
  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var mensaje = AuthContext.mensaje,
      autenticado = AuthContext.autenticado,
      iniciarSesion = AuthContext.iniciarSesion; // Next router

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (autenticado) {
      router.push('/');
    }
  }, [autenticado]); // Formulario y validación con formik y Yup

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('El email no es válido').required('El Email es Obligatorio'),
      password: Yup.string().required('El password no puede ir vacio')
    }),
    onSubmit: function onSubmit(valores) {
      iniciarSesion(valores);
    }
  });
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 18
    }
  }), __jsx("h2", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 16
    }
  }, "Inicia sesion"), __jsx("form", {
    className: "paper form-group",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 12
    }
  }, __jsx("input", {
    type: "email",
    placeholder: "Escribe tu correo",
    id: "email",
    value: formik.values.email,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: "input-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 20
    }
  }, formik.errors.pass, " ") : null, __jsx("input", {
    type: "password",
    placeholder: "Escribe tu clave",
    id: "password",
    value: formik.values.password,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: "input-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), formik.touched.password && formik.errors.password ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 20
    }
  }, formik.errors.password, " ") : null, __jsx("button", {
    type: "submit",
    className: "second-button second-button-text btn-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 16
    }
  }, " Iniciar sesion"))));
};

_s(Login, "2j99ihpnGtN/ruATsA0K61U0+60=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXV0aENvbnRleHQiLCJtZW5zYWplIiwiYXV0ZW50aWNhZG8iLCJpbmljaWFyU2VzaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsIm9iamVjdCIsInN0cmluZyIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWxvcmVzIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJwYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUdoQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBOUI7QUFKZ0IsTUFLUkMsT0FMUSxHQUtnQ0gsV0FMaEMsQ0FLUkcsT0FMUTtBQUFBLE1BS0NDLFdBTEQsR0FLZ0NKLFdBTGhDLENBS0NJLFdBTEQ7QUFBQSxNQUtjQyxhQUxkLEdBS2dDTCxXQUxoQyxDQUtjSyxhQUxkLEVBT2hCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0osV0FBSCxFQUFnQjtBQUNkRSxZQUFNLENBQUNHLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0wsV0FBRCxDQUpNLENBQVQsQ0FWZ0IsQ0FpQmhCOztBQUNBLE1BQU1NLE1BQU0sR0FBR0Msd0RBQVMsQ0FBQztBQUNyQkMsaUJBQWEsRUFBRTtBQUNiQyxXQUFLLEVBQUUsRUFETTtBQUViQyxjQUFRLEVBQUU7QUFGRyxLQURNO0FBS3JCQyxvQkFBZ0IsRUFBRUMsR0FBRyxDQUFDQyxNQUFKLENBQVc7QUFDekJKLFdBQUssRUFBRUcsR0FBRyxDQUFDRSxNQUFKLEdBQ0lMLEtBREosQ0FDVSx1QkFEVixFQUVJTSxRQUZKLENBRWEseUJBRmIsQ0FEa0I7QUFJekJMLGNBQVEsRUFBRUUsR0FBRyxDQUFDRSxNQUFKLEdBQ0NDLFFBREQsQ0FDVSwrQkFEVjtBQUplLEtBQVgsQ0FMRztBQVlyQkMsWUFBUSxFQUFFLGtCQUFBQyxPQUFPLEVBQUk7QUFDbkJoQixtQkFBYSxDQUFDZ0IsT0FBRCxDQUFiO0FBQ0Q7QUFkb0IsR0FBRCxDQUF4QjtBQWtCRixTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFbEIsT0FBTyxJQUFJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZiLEVBS1c7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxYLEVBTU87QUFBTSxhQUFTLEVBQUMsa0JBQWhCO0FBQW1DLFlBQVEsRUFBRU8sTUFBTSxDQUFDWSxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRU87QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFxQixlQUFXLEVBQUMsbUJBQWpDO0FBQ1UsTUFBRSxFQUFDLE9BRGI7QUFFRSxTQUFLLEVBQUVaLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjVixLQUZ2QjtBQUdFLFlBQVEsRUFBRUgsTUFBTSxDQUFDYyxZQUhuQjtBQUlFLFVBQU0sRUFBRWQsTUFBTSxDQUFDZSxVQUpqQjtBQUtFLGFBQVMsRUFBQyxhQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUCxFQVVLZixNQUFNLENBQUNnQixPQUFQLENBQWViLEtBQWYsSUFBd0JILE1BQU0sQ0FBQ2lCLE1BQVAsQ0FBY2QsS0FBdEMsR0FDRztBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlESCxNQUFNLENBQUNpQixNQUFQLENBQWNDLElBQS9ELE1BREgsR0FFRSxJQVpQLEVBYUs7QUFBUSxRQUFJLEVBQUMsVUFBYjtBQUF3QixlQUFXLEVBQUMsa0JBQXBDO0FBQ0ksTUFBRSxFQUFDLFVBRFA7QUFFSSxTQUFLLEVBQUVsQixNQUFNLENBQUNhLE1BQVAsQ0FBY1QsUUFGekI7QUFHSSxZQUFRLEVBQUVKLE1BQU0sQ0FBQ2MsWUFIckI7QUFJSSxVQUFNLEVBQUVkLE1BQU0sQ0FBQ2UsVUFKbkI7QUFLSSxhQUFTLEVBQUMsYUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkwsRUF1QktmLE1BQU0sQ0FBQ2dCLE9BQVAsQ0FBZVosUUFBZixJQUEyQkosTUFBTSxDQUFDaUIsTUFBUCxDQUFjYixRQUF6QyxHQUNHO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURKLE1BQU0sQ0FBQ2lCLE1BQVAsQ0FBY2IsUUFBL0QsTUFESCxHQUVFLElBekJQLEVBMkJJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLDRDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTNCSixDQU5QLENBRkEsQ0FERjtBQTRDRCxDQWhGRDs7R0FBTWYsSztVQVFhUSxxRCxFQVVBSSxnRDs7O0tBbEJiWixLO0FBa0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4yYTNmNzZjMWZjYTkxZGNkMjMwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgdXNlRm9ybWlrfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICBcclxuICAgIC8vIGRlZmluaXIgZWwgY29udGV4dFxyXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbWVuc2FqZSwgYXV0ZW50aWNhZG8sIGluaWNpYXJTZXNpb24gfSA9IEF1dGhDb250ZXh0O1xyXG5cclxuICAgIC8vIE5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZihhdXRlbnRpY2Fkbykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIFthdXRlbnRpY2Fkb10pO1xyXG5cclxuXHJcbiAgICAvLyBGb3JtdWxhcmlvIHkgdmFsaWRhY2nDs24gY29uIGZvcm1payB5IFl1cFxyXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZW1haWwoJ0VsIGVtYWlsIG5vIGVzIHbDoWxpZG8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBFbWFpbCBlcyBPYmxpZ2F0b3JpbycpLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHBhc3N3b3JkIG5vIHB1ZWRlIGlyIHZhY2lvJylcclxuICAgICAgICB9KSxcclxuICAgICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcbiAgICAgICAgICBpbmljaWFyU2VzaW9uKHZhbG9yZXMpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cclxuICAgIHsgbWVuc2FqZSAmJiA8QWxlcnRhIC8+fVxyXG5cclxuICAgIFxyXG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGxpbmVcIj5JbmljaWEgc2VzaW9uPC9oMj5cclxuICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwYXBlciBmb3JtLWdyb3VwXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHR1IGNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/KFxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgYnV0dG9uLXRleHRcIj57Zm9ybWlrLmVycm9ycy5wYXNzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKTogbnVsbH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHR1IGNsYXZlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5wYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLnBhc3N3b3JkID8oXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBidXR0b24tdGV4dFwiPntmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKTogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlY29uZC1idXR0b24gc2Vjb25kLWJ1dHRvbi10ZXh0IGJ0bi1ibG9ja1wiPiBJbmljaWFyIHNlc2lvbjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbjwvTGF5b3V0PiBcclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=