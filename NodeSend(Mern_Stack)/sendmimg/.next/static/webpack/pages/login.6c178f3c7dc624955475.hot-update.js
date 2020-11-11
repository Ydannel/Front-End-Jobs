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
      pass: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('La clave es obligatoria').min(8, 'La clave debe de ser de un minimo de 8 caracteres')
    }),
    onSubmit: function onSubmit(valores) {
      iniciarSesion(valores);
    }
  });
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 18
    }
  }), __jsx("h2", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 16
    }
  }, "Inicia sesion"), __jsx("form", {
    className: "",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 12
    }
  }, __jsx("input", {
    type: "email",
    placeholder: "Escribe tu correo",
    value: formik.values.email,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 20
    }
  }, formik.errors.pass, " ") : null, __jsx("input", {
    type: "password",
    placeholder: "Escribe tu clave",
    value: formik.values.pass,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), formik.touched.pass && formik.errors.pass ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 20
    }
  }, formik.errors.pass, " ") : null, __jsx("button", {
    type: "submit",
    className: "second-button second-button-text btn-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXV0aENvbnRleHQiLCJtZW5zYWplIiwiYXV0ZW50aWNhZG8iLCJpbmljaWFyU2VzaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJlbWFpbCIsInBhc3MiLCJ2YWxpZGF0aW9uU2NoZW1hIiwieXVwIiwicmVxdWlyZWQiLCJtaW4iLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUZnQixNQUdSQyxPQUhRLEdBR2lDSCxXQUhqQyxDQUdSRyxPQUhRO0FBQUEsTUFHQ0MsV0FIRCxHQUdpQ0osV0FIakMsQ0FHQ0ksV0FIRDtBQUFBLE1BR2VDLGFBSGYsR0FHaUNMLFdBSGpDLENBR2VLLGFBSGYsRUFNaEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDUCxRQUFJSixXQUFKLEVBQWlCO0FBQ1ZFLFlBQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDTjtBQUNQLEdBSlEsRUFJUCxDQUFDTCxXQUFELENBSk8sQ0FBVCxDQVZnQixDQWdCZjs7QUFFQSxNQUFNTSxNQUFNLEdBQUdDLHdEQUFTLENBQUM7QUFFeEI7QUFFQUMsaUJBQWEsRUFBQztBQUNWQyxXQUFLLEVBQUUsRUFERztBQUVWQyxVQUFJLEVBQUM7QUFGSyxLQUpVO0FBU3hCO0FBRUFDLG9CQUFnQixFQUFFQywwQ0FBQSxDQUFXO0FBQ3pCSCxXQUFLLEVBQUVHLDBDQUFBLEdBQWFDLFFBQWIsQ0FBc0IsMEJBQXRCLEVBQ05KLEtBRE0sQ0FDQSwrQkFEQSxDQURrQjtBQUd6QkMsVUFBSSxFQUFFRSwwQ0FBQSxHQUFhQyxRQUFiLENBQXNCLHlCQUF0QixFQUNMQyxHQURLLENBQ0QsQ0FEQyxFQUNDLG1EQUREO0FBSG1CLEtBQVgsQ0FYTTtBQW1CeEJDLFlBQVEsRUFBRSxrQkFBQUMsT0FBTyxFQUFJO0FBQ2xCZixtQkFBYSxDQUFDZSxPQUFELENBQWI7QUFFRjtBQXRCdUIsR0FBRCxDQUF4QjtBQTRCSCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFakIsT0FBTyxJQUFJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZiLEVBS1c7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxYLEVBTU87QUFBTSxhQUFTLEVBQUMsRUFBaEI7QUFBbUIsWUFBUSxFQUFFTyxNQUFNLENBQUNXLFlBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFTztBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLGVBQVcsRUFBQyxtQkFBakM7QUFFRSxTQUFLLEVBQUVYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjVCxLQUZ2QjtBQUdFLFlBQVEsRUFBRUgsTUFBTSxDQUFDYSxZQUhuQjtBQUlFLFVBQU0sRUFBRWIsTUFBTSxDQUFDYyxVQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlAsRUFVS2QsTUFBTSxDQUFDZSxPQUFQLENBQWVaLEtBQWYsSUFBd0JILE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY2IsS0FBdEMsR0FDRztBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlESCxNQUFNLENBQUNnQixNQUFQLENBQWNaLElBQS9ELE1BREgsR0FFRSxJQVpQLEVBYUs7QUFBUSxRQUFJLEVBQUMsVUFBYjtBQUF3QixlQUFXLEVBQUMsa0JBQXBDO0FBRUksU0FBSyxFQUFFSixNQUFNLENBQUNZLE1BQVAsQ0FBY1IsSUFGekI7QUFHSSxZQUFRLEVBQUVKLE1BQU0sQ0FBQ2EsWUFIckI7QUFJSSxVQUFNLEVBQUViLE1BQU0sQ0FBQ2MsVUFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJMLEVBdUJLZCxNQUFNLENBQUNlLE9BQVAsQ0FBZVgsSUFBZixJQUF1QkosTUFBTSxDQUFDZ0IsTUFBUCxDQUFjWixJQUFyQyxHQUNHO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURKLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY1osSUFBL0QsTUFESCxHQUVFLElBekJQLEVBMkJJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLDRDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTNCSixDQU5QLENBRkEsQ0FERjtBQTRDRCxDQTFGRDs7R0FBTWYsSztVQVFhUSxxRCxFQVVDSSxnRDs7O0tBbEJkWixLO0FBNEZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42YzE3OGYzYzdkYzYyNDk1NTQ3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgdXNlRm9ybWlrfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IG1lbnNhamUsIGF1dGVudGljYWRvICwgaW5pY2lhclNlc2lvbsKgfSA9IEF1dGhDb250ZXh0O1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgLy9lbCByb3V0aW5nXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgaWYgKGF1dGVudGljYWRvKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7ICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICB9LFthdXRlbnRpY2Fkb10pO1xyXG4gIFxyXG4gICAgIC8vdmFsaWRhY2lvbiBjb24gZm9ybWlrXHJcblxyXG4gICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgICAgXHJcbiAgICAgIC8vcHJpbWVybyBzZSBsZSBwYXNhIHVuIHZhbG9yIGluaWNpYWxcclxuXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM6e1xyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGFzczonJ1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy9ldml0YXIgcXVlIHNlIG1hbmRlIHZhY2lvIGVsIGZvcm0gY29uIHl1cFxyXG5cclxuICAgICAgdmFsaWRhdGlvblNjaGVtYTogeXVwLm9iamVjdCh7XHJcbiAgICAgICAgICBlbWFpbDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdFbCBjb3JyZW8gZXMgb2JsaWdhdG9yaW8nKVxyXG4gICAgICAgICAgLmVtYWlsKCdlbCBjb3JyZW8gY3JlYWRvIG5vIGVzIHZhbGlkbycpLFxyXG4gICAgICAgICAgcGFzczogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdMYSBjbGF2ZSBlcyBvYmxpZ2F0b3JpYScpXHJcbiAgICAgICAgICAubWluKDgsJ0xhIGNsYXZlIGRlYmUgZGUgc2VyIGRlIHVuIG1pbmltbyBkZSA4IGNhcmFjdGVyZXMnKVxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICB9KSxcclxuICAgICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xyXG4gICAgICAgICBpbmljaWFyU2VzaW9uKHZhbG9yZXMpXHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gIH0pXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8TGF5b3V0PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHJcbiAgICB7IG1lbnNhamUgJiYgPEFsZXJ0YSAvPn1cclxuXHJcbiAgICBcclxuICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+SW5pY2lhIHNlc2lvbjwvaDI+XHJcbiAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHR1IGNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyhcclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGJ1dHRvbi10ZXh0XCI+e2Zvcm1pay5lcnJvcnMucGFzc30gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICk6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBjbGF2ZVwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5wYXNzICYmIGZvcm1pay5lcnJvcnMucGFzcyA/KFxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgYnV0dG9uLXRleHRcIj57Zm9ybWlrLmVycm9ycy5wYXNzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKTogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlY29uZC1idXR0b24gc2Vjb25kLWJ1dHRvbi10ZXh0IGJ0bi1ibG9ja1wiPiBJbmljaWFyIHNlc2lvbjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbjwvTGF5b3V0PiBcclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=