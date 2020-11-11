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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 20
    }
  }, formik.errors.pass, " ") : null, __jsx("button", {
    type: "second-button",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXV0aENvbnRleHQiLCJtZW5zYWplIiwiYXV0ZW50aWNhZG8iLCJpbmljaWFyU2VzaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJlbWFpbCIsInBhc3MiLCJ2YWxpZGF0aW9uU2NoZW1hIiwieXVwIiwicmVxdWlyZWQiLCJtaW4iLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUZnQixNQUdSQyxPQUhRLEdBR2lDSCxXQUhqQyxDQUdSRyxPQUhRO0FBQUEsTUFHQ0MsV0FIRCxHQUdpQ0osV0FIakMsQ0FHQ0ksV0FIRDtBQUFBLE1BR2VDLGFBSGYsR0FHaUNMLFdBSGpDLENBR2VLLGFBSGYsRUFNaEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDUCxRQUFJSixXQUFKLEVBQWlCO0FBQ1ZFLFlBQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVo7QUFDTjtBQUNQLEdBSlEsRUFJUCxDQUFDTCxXQUFELENBSk8sQ0FBVCxDQVZnQixDQWdCZjs7QUFFQSxNQUFNTSxNQUFNLEdBQUdDLHdEQUFTLENBQUM7QUFFeEI7QUFFQUMsaUJBQWEsRUFBQztBQUNWQyxXQUFLLEVBQUUsRUFERztBQUVWQyxVQUFJLEVBQUM7QUFGSyxLQUpVO0FBU3hCO0FBRUFDLG9CQUFnQixFQUFFQywwQ0FBQSxDQUFXO0FBQ3pCSCxXQUFLLEVBQUVHLDBDQUFBLEdBQWFDLFFBQWIsQ0FBc0IsMEJBQXRCLEVBQ05KLEtBRE0sQ0FDQSwrQkFEQSxDQURrQjtBQUd6QkMsVUFBSSxFQUFFRSwwQ0FBQSxHQUFhQyxRQUFiLENBQXNCLHlCQUF0QixFQUNMQyxHQURLLENBQ0QsbURBREM7QUFIbUIsS0FBWCxDQVhNO0FBbUJ4QkMsWUFBUSxFQUFFLGtCQUFBQyxPQUFPLEVBQUk7QUFDbEJmLG1CQUFhLENBQUNlLE9BQUQsQ0FBYjtBQUNGO0FBckJ1QixHQUFELENBQXhCO0FBMkJILFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUVqQixPQUFPLElBQUksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRmIsRUFLVztBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTFgsRUFNTztBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBbUMsWUFBUSxFQUFFTyxNQUFNLENBQUNXLFlBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFTTtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLGVBQVcsRUFBQyxtQkFBakM7QUFDRCxTQUFLLEVBQUVYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjVCxLQURwQjtBQUVELFlBQVEsRUFBRUgsTUFBTSxDQUFDYSxZQUZoQjtBQUdELFVBQU0sRUFBRWIsTUFBTSxDQUFDYyxVQUhkO0FBSUQsYUFBUyxFQUFDLGFBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZOLEVBVUtkLE1BQU0sQ0FBQ2UsT0FBUCxDQUFlWixLQUFmLElBQXdCSCxNQUFNLENBQUNnQixNQUFQLENBQWNiLEtBQXRDLEdBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNSCxNQUFNLENBQUNnQixNQUFQLENBQWNaLElBQXBCLE1BREgsR0FFRSxJQVpQLEVBYU07QUFBUSxRQUFJLEVBQUMsVUFBYjtBQUF3QixlQUFXLEVBQUMsa0JBQXBDO0FBQ0QsU0FBSyxFQUFFSixNQUFNLENBQUNZLE1BQVAsQ0FBY1IsSUFEcEI7QUFFRCxZQUFRLEVBQUVKLE1BQU0sQ0FBQ2EsWUFGaEI7QUFHRCxVQUFNLEVBQUViLE1BQU0sQ0FBQ2MsVUFIZDtBQUlELGFBQVMsRUFBQyxhQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiTixFQXFCS2QsTUFBTSxDQUFDZSxPQUFQLENBQWVYLElBQWYsSUFBdUJKLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY1osSUFBckMsR0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1KLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY1osSUFBcEIsTUFESCxHQUVFLElBdkJQLEVBeUJJO0FBQVEsUUFBSSxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF6QkosQ0FOUCxDQUZBLENBREY7QUEwQ0QsQ0F2RkQ7O0dBQU1mLEs7VUFRYVEscUQsRUFVQ0ksZ0Q7OztLQWxCZFosSztBQXlGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMmIxZTBjM2FjZTU3MmZjOGNhYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IHVzZUZvcm1pa30gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydGEnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBtZW5zYWplLCBhdXRlbnRpY2FkbyAsIGluaWNpYXJTZXNpb27CoH0gPSBBdXRoQ29udGV4dDtcclxuXHJcbiAgICAgICAgICBcclxuICAgIC8vZWwgcm91dGluZ1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgIGlmIChhdXRlbnRpY2Fkbykge1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgfSxbYXV0ZW50aWNhZG9dKTtcclxuICBcclxuICAgICAvL3ZhbGlkYWNpb24gY29uIGZvcm1pa1xyXG5cclxuICAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAvL3ByaW1lcm8gc2UgbGUgcGFzYSB1biB2YWxvciBpbmljaWFsXHJcblxyXG4gICAgICBpbml0aWFsVmFsdWVzOntcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBhc3M6JydcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vZXZpdGFyIHF1ZSBzZSBtYW5kZSB2YWNpbyBlbCBmb3JtIGNvbiB5dXBcclxuXHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IHl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgZW1haWw6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRWwgY29ycmVvIGVzIG9ibGlnYXRvcmlvJylcclxuICAgICAgICAgIC5lbWFpbCgnZWwgY29ycmVvIGNyZWFkbyBubyBlcyB2YWxpZG8nKSxcclxuICAgICAgICAgIHBhc3M6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnTGEgY2xhdmUgZXMgb2JsaWdhdG9yaWEnKVxyXG4gICAgICAgICAgLm1pbignTGEgY2xhdmUgZGViZSBkZSBzZXIgZGUgdW4gbWluaW1vIGRlIDggY2FyYWN0ZXJlcycpXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgIH0pLFxyXG4gICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcbiAgICAgICAgIGluaWNpYXJTZXNpb24odmFsb3JlcylcclxuICAgICAgfVxyXG5cclxuICB9KVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPExheW91dD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblxyXG4gICAgeyBtZW5zYWplICYmIDxBbGVydGEgLz59XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkbGluZVwiPkluaWNpYSBzZXNpb248L2gyPlxyXG4gICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInBhcGVyIGZvcm0tZ3JvdXBcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiXHJcblxyXG4gICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyhcclxuICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMucGFzc30gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICk6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVzY3JpYmUgdHUgY2xhdmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQucGFzcyAmJiBmb3JtaWsuZXJyb3JzLnBhc3MgPyhcclxuICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMucGFzc30gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICk6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzZWNvbmQtYnV0dG9uXCI+IEluaWNpYXIgc2VzaW9uPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICBcclxuPC9MYXlvdXQ+IFxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==