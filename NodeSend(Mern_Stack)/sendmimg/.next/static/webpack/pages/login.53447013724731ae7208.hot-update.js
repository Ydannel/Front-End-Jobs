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

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var mensaje = AuthContext.mensaje,
      autenticado = AuthContext.autenticado,
      iniciarSesion = AuthContext.iniciarSesion; //el routing

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (autenticado) {
      router.push('/');
    }
  }, [autenticado]); //validacion con formik

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    //primero se le pasa un valor inicial
    initialValues: {
      email: '',
      pass: ''
    },
    //evitar que se mande vacio el form con yup
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El correo es obligatorio').email('el correo creado no es valido'),
      pass: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('La clave es obligatoria').min('La clave debe de ser de un minimo de 8 caracteres')
    }),
    onSubmit: function onSubmit(valores) {
      iniciarSesion(valores);
    }
  });
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 18
    }
  }), __jsx("h2", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 16
    }
  }, "Inicia sesion"), __jsx("form", {
    className: "paper form-group",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 12
    }
  }, __jsx("input", {
    type: "email",
    placeholder: "Escribe tu correo",
    value: formik.values.email,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: "input-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 18
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 20
    }
  }, formik.errors.pass, " ") : null, __jsx("input", {
    type: "password",
    placeholder: "Escribe tu clave",
    value: formik.values.pass,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: "input-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 18
    }
  }), formik.touched.pass && formik.errors.pass ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 20
    }
  }, formik.errors.pass, " ") : null, __jsx("button", {
    type: "submit",
    className: "second-button second-button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXV0aENvbnRleHQiLCJtZW5zYWplIiwiYXV0ZW50aWNhZG8iLCJpbmljaWFyU2VzaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJlbWFpbCIsInBhc3MiLCJ2YWxpZGF0aW9uU2NoZW1hIiwieXVwIiwicmVxdWlyZWQiLCJtaW4iLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUZnQixNQUdSQyxPQUhRLEdBR2lDSCxXQUhqQyxDQUdSRyxPQUhRO0FBQUEsTUFHQ0MsV0FIRCxHQUdpQ0osV0FIakMsQ0FHQ0ksV0FIRDtBQUFBLE1BR2VDLGFBSGYsR0FHaUNMLFdBSGpDLENBR2VLLGFBSGYsRUFNaEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDUCxRQUFJSixXQUFKLEVBQWlCO0FBQ1ZFLFlBQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDTjtBQUNQLEdBSlEsRUFJUCxDQUFDTCxXQUFELENBSk8sQ0FBVCxDQVZnQixDQWdCZjs7QUFFQSxNQUFNTSxNQUFNLEdBQUdDLHdEQUFTLENBQUM7QUFFeEI7QUFFQUMsaUJBQWEsRUFBQztBQUNWQyxXQUFLLEVBQUUsRUFERztBQUVWQyxVQUFJLEVBQUM7QUFGSyxLQUpVO0FBU3hCO0FBRUFDLG9CQUFnQixFQUFFQywwQ0FBQSxDQUFXO0FBQ3pCSCxXQUFLLEVBQUVHLDBDQUFBLEdBQWFDLFFBQWIsQ0FBc0IsMEJBQXRCLEVBQ05KLEtBRE0sQ0FDQSwrQkFEQSxDQURrQjtBQUd6QkMsVUFBSSxFQUFFRSwwQ0FBQSxHQUFhQyxRQUFiLENBQXNCLHlCQUF0QixFQUNMQyxHQURLLENBQ0QsbURBREM7QUFIbUIsS0FBWCxDQVhNO0FBbUJ4QkMsWUFBUSxFQUFFLGtCQUFBQyxPQUFPLEVBQUk7QUFDbEJmLG1CQUFhLENBQUNlLE9BQUQsQ0FBYjtBQUNGO0FBckJ1QixHQUFELENBQXhCO0FBMkJILFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUVqQixPQUFPLElBQUksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRmIsRUFLVztBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTFgsRUFNTztBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBbUMsWUFBUSxFQUFFTyxNQUFNLENBQUNXLFlBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFTTtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLGVBQVcsRUFBQyxtQkFBakM7QUFDRCxTQUFLLEVBQUVYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjVCxLQURwQjtBQUVELFlBQVEsRUFBRUgsTUFBTSxDQUFDYSxZQUZoQjtBQUdELFVBQU0sRUFBRWIsTUFBTSxDQUFDYyxVQUhkO0FBSUQsYUFBUyxFQUFDLGFBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZOLEVBVUtkLE1BQU0sQ0FBQ2UsT0FBUCxDQUFlWixLQUFmLElBQXdCSCxNQUFNLENBQUNnQixNQUFQLENBQWNiLEtBQXRDLEdBQ0c7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpREgsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjWixJQUEvRCxNQURILEdBRUUsSUFaUCxFQWFNO0FBQVEsUUFBSSxFQUFDLFVBQWI7QUFBd0IsZUFBVyxFQUFDLGtCQUFwQztBQUNELFNBQUssRUFBRUosTUFBTSxDQUFDWSxNQUFQLENBQWNSLElBRHBCO0FBRUQsWUFBUSxFQUFFSixNQUFNLENBQUNhLFlBRmhCO0FBR0QsVUFBTSxFQUFFYixNQUFNLENBQUNjLFVBSGQ7QUFJRCxhQUFTLEVBQUMsYUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYk4sRUFxQktkLE1BQU0sQ0FBQ2UsT0FBUCxDQUFlWCxJQUFmLElBQXVCSixNQUFNLENBQUNnQixNQUFQLENBQWNaLElBQXJDLEdBQ0c7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpREosTUFBTSxDQUFDZ0IsTUFBUCxDQUFjWixJQUEvRCxNQURILEdBRUUsSUF2QlAsRUF5Qkk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsa0NBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBekJKLENBTlAsQ0FGQSxDQURGO0FBMENELENBdkZEOztHQUFNZixLO1VBUWFRLHFELEVBVUNJLGdEOzs7S0FsQmRaLEs7QUF5RlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjUzNDQ3MDEzNzI0NzMxYWU3MjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VGb3JtaWt9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgQWxlcnRhIGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnRhJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbWVuc2FqZSwgYXV0ZW50aWNhZG8gLCBpbmljaWFyU2VzaW9uwqB9ID0gQXV0aENvbnRleHQ7XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAvL2VsIHJvdXRpbmdcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICBpZiAoYXV0ZW50aWNhZG8pIHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgIH0sW2F1dGVudGljYWRvXSk7XHJcbiAgXHJcbiAgICAgLy92YWxpZGFjaW9uIGNvbiBmb3JtaWtcclxuXHJcbiAgICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgICAgICAgICBcclxuICAgICAgLy9wcmltZXJvIHNlIGxlIHBhc2EgdW4gdmFsb3IgaW5pY2lhbFxyXG5cclxuICAgICAgaW5pdGlhbFZhbHVlczp7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzOicnXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvL2V2aXRhciBxdWUgc2UgbWFuZGUgdmFjaW8gZWwgZm9ybSBjb24geXVwXHJcblxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hOiB5dXAub2JqZWN0KHtcclxuICAgICAgICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ0VsIGNvcnJlbyBlcyBvYmxpZ2F0b3JpbycpXHJcbiAgICAgICAgICAuZW1haWwoJ2VsIGNvcnJlbyBjcmVhZG8gbm8gZXMgdmFsaWRvJyksXHJcbiAgICAgICAgICBwYXNzOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ0xhIGNsYXZlIGVzIG9ibGlnYXRvcmlhJylcclxuICAgICAgICAgIC5taW4oJ0xhIGNsYXZlIGRlYmUgZGUgc2VyIGRlIHVuIG1pbmltbyBkZSA4IGNhcmFjdGVyZXMnKVxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICB9KSxcclxuICAgICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xyXG4gICAgICAgICBpbmljaWFyU2VzaW9uKHZhbG9yZXMpXHJcbiAgICAgIH1cclxuXHJcbiAgfSlcclxuXHJcblxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cclxuICAgIHsgbWVuc2FqZSAmJiA8QWxlcnRhIC8+fVxyXG5cclxuICAgIFxyXG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGxpbmVcIj5JbmljaWEgc2VzaW9uPC9oMj5cclxuICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwYXBlciBmb3JtLWdyb3VwXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVzY3JpYmUgdHUgY29ycmVvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtYmxvY2tcIlxyXG5cclxuICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsID8oXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBidXR0b24tdGV4dFwiPntmb3JtaWsuZXJyb3JzLnBhc3N9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICApOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHR1IGNsYXZlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLnBhc3MgJiYgZm9ybWlrLmVycm9ycy5wYXNzID8oXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBidXR0b24tdGV4dFwiPntmb3JtaWsuZXJyb3JzLnBhc3N9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICApOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2Vjb25kLWJ1dHRvbiBzZWNvbmQtYnV0dG9uLXRleHRcIj4gSW5pY2lhciBzZXNpb248L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG48L0xheW91dD4gXHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9