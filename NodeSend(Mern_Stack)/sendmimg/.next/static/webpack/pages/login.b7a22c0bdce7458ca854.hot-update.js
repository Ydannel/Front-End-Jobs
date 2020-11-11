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
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email('El email no es válido').required('El Email es Obligatorio'),
      password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El password no puede ir vacio')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXV0aENvbnRleHQiLCJtZW5zYWplIiwiYXV0ZW50aWNhZG8iLCJpbmljaWFyU2VzaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWxvcmVzIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJwYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUdoQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBOUI7QUFKZ0IsTUFLUkMsT0FMUSxHQUtnQ0gsV0FMaEMsQ0FLUkcsT0FMUTtBQUFBLE1BS0NDLFdBTEQsR0FLZ0NKLFdBTGhDLENBS0NJLFdBTEQ7QUFBQSxNQUtjQyxhQUxkLEdBS2dDTCxXQUxoQyxDQUtjSyxhQUxkLEVBT2hCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0osV0FBSCxFQUFnQjtBQUNkRSxZQUFNLENBQUNHLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0wsV0FBRCxDQUpNLENBQVQsQ0FWZ0IsQ0FpQmhCOztBQUNBLE1BQU1NLE1BQU0sR0FBR0Msd0RBQVMsQ0FBQztBQUNyQkMsaUJBQWEsRUFBRTtBQUNiQyxXQUFLLEVBQUUsRUFETTtBQUViQyxjQUFRLEVBQUU7QUFGRyxLQURNO0FBS3JCQyxvQkFBZ0IsRUFBRUMsMENBQUEsQ0FBVztBQUN6QkgsV0FBSyxFQUFFRywwQ0FBQSxHQUNJSCxLQURKLENBQ1UsdUJBRFYsRUFFSUksUUFGSixDQUVhLHlCQUZiLENBRGtCO0FBSXpCSCxjQUFRLEVBQUVFLDBDQUFBLEdBQ0NDLFFBREQsQ0FDVSwrQkFEVjtBQUplLEtBQVgsQ0FMRztBQVlyQkMsWUFBUSxFQUFFLGtCQUFBQyxPQUFPLEVBQUk7QUFDbkJkLG1CQUFhLENBQUNjLE9BQUQsQ0FBYjtBQUNEO0FBZG9CLEdBQUQsQ0FBeEI7QUFrQkYsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRWhCLE9BQU8sSUFBSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGYixFQUtXO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMWCxFQU1PO0FBQU0sYUFBUyxFQUFDLGtCQUFoQjtBQUFtQyxZQUFRLEVBQUVPLE1BQU0sQ0FBQ1UsWUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVPO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsZUFBVyxFQUFDLG1CQUFqQztBQUNVLE1BQUUsRUFBQyxPQURiO0FBRUUsU0FBSyxFQUFFVixNQUFNLENBQUNXLE1BQVAsQ0FBY1IsS0FGdkI7QUFHRSxZQUFRLEVBQUVILE1BQU0sQ0FBQ1ksWUFIbkI7QUFJRSxVQUFNLEVBQUVaLE1BQU0sQ0FBQ2EsVUFKakI7QUFLRSxhQUFTLEVBQUMsYUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlAsRUFVS2IsTUFBTSxDQUFDYyxPQUFQLENBQWVYLEtBQWYsSUFBd0JILE1BQU0sQ0FBQ2UsTUFBUCxDQUFjWixLQUF0QyxHQUNHO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURILE1BQU0sQ0FBQ2UsTUFBUCxDQUFjQyxJQUEvRCxNQURILEdBRUUsSUFaUCxFQWFLO0FBQVEsUUFBSSxFQUFDLFVBQWI7QUFBd0IsZUFBVyxFQUFDLGtCQUFwQztBQUNJLE1BQUUsRUFBQyxVQURQO0FBRUksU0FBSyxFQUFFaEIsTUFBTSxDQUFDVyxNQUFQLENBQWNQLFFBRnpCO0FBR0ksWUFBUSxFQUFFSixNQUFNLENBQUNZLFlBSHJCO0FBSUksVUFBTSxFQUFFWixNQUFNLENBQUNhLFVBSm5CO0FBS0ksYUFBUyxFQUFDLGFBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJMLEVBdUJLYixNQUFNLENBQUNjLE9BQVAsQ0FBZVYsUUFBZixJQUEyQkosTUFBTSxDQUFDZSxNQUFQLENBQWNYLFFBQXpDLEdBQ0c7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpREosTUFBTSxDQUFDZSxNQUFQLENBQWNYLFFBQS9ELE1BREgsR0FFRSxJQXpCUCxFQTJCSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyw0Q0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkEzQkosQ0FOUCxDQUZBLENBREY7QUE0Q0QsQ0FoRkQ7O0dBQU1mLEs7VUFRYVEscUQsRUFVQUksZ0Q7OztLQWxCYlosSztBQWtGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYjdhMjJjMGJkY2U3NDU4Y2E4NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IHVzZUZvcm1pa30gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydGEnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgXHJcbiAgICAvLyBkZWZpbmlyIGVsIGNvbnRleHRcclxuICAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IG1lbnNhamUsIGF1dGVudGljYWRvLCBpbmljaWFyU2VzaW9uIH0gPSBBdXRoQ29udGV4dDtcclxuXHJcbiAgICAvLyBOZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYoYXV0ZW50aWNhZG8pIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbYXV0ZW50aWNhZG9dKTtcclxuXHJcblxyXG4gICAgLy8gRm9ybXVsYXJpbyB5IHZhbGlkYWNpw7NuIGNvbiBmb3JtaWsgeSBZdXBcclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmVtYWlsKCdFbCBlbWFpbCBubyBlcyB2w6FsaWRvJylcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgRW1haWwgZXMgT2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBwYXNzd29yZCBubyBwdWVkZSBpciB2YWNpbycpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xyXG4gICAgICAgICAgaW5pY2lhclNlc2lvbih2YWxvcmVzKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICA8TGF5b3V0PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHJcbiAgICB7IG1lbnNhamUgJiYgPEFsZXJ0YSAvPn1cclxuXHJcbiAgICBcclxuICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+SW5pY2lhIHNlc2lvbjwvaDI+XHJcbiAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicGFwZXIgZm9ybS1ncm91cFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyhcclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGJ1dHRvbi10ZXh0XCI+e2Zvcm1pay5lcnJvcnMucGFzc30gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICk6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBjbGF2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5wYXNzd29yZCA/KFxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgYnV0dG9uLXRleHRcIj57Zm9ybWlrLmVycm9ycy5wYXNzd29yZH0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICk6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWNvbmQtYnV0dG9uIHNlY29uZC1idXR0b24tdGV4dCBidG4tYmxvY2tcIj4gSW5pY2lhciBzZXNpb248L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG48L0xheW91dD4gXHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9