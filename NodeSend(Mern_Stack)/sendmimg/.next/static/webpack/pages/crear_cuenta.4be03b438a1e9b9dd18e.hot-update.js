webpackHotUpdate_N_E("pages/crear_cuenta",{

/***/ "./pages/crear_cuenta.jsx":
/*!********************************!*\
  !*** ./pages/crear_cuenta.jsx ***!
  \********************************/
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
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\pages\\crear_cuenta.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 //npm i formik yup validacion de formularios
//npm i react-dropzone con esto se suben las imagenes
//usecontext crea el context 
//use reducer son las funciones que modifican el state
//use state las acciones que disparan en el reducer
//context. provider = da la data
//context. consumer = recive la data

/*
para comunicarse el state con el reducer existen los
types
estos van el el objeto dispatch el cual son dos 
objetos: el type  y el payload
con el type se evalua en el case de un switch
con el payload es que se modifican los datos del state
           dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })

*/

var crear_Cuenta = function crear_Cuenta() {
  _s();

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var mensaje = AuthContext.mensaje,
      registrarUsuario = AuthContext.registrarUsuario;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // Formulario y validación con formik y Yup

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      nombre: '',
      email: '',
      pass: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      nombre: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El Nombre es Obligatorio'),
      email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email('El email no es válido').required('El Email es Obligatorio'),
      pass: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El password no puede ir vacio').min(8, 'El password debe contener al menos 8 caracteres')
    }),
    onSubmit: function onSubmit(valores) {
      registrarUsuario(valores);
      router.push('/');
    }
  });
  return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 22
    }
  }), __jsx("h2", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 20
    }
  }, "Crea una cuenta"), __jsx("form", {
    className: "form-group headline",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 16
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Escribe tu nombre",
    id: "nombre",
    value: formik.values.nombre,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: "input-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 20
    }
  }), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 24
    }
  }, formik.errors.nombre, " ") : null, __jsx("input", {
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
      lineNumber: 84,
      columnNumber: 22
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 24
    }
  }, formik.errors.pass, " ") : null, __jsx("input", {
    type: "password",
    placeholder: "Escribe tu clave",
    id: "pass",
    value: formik.values.pass,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: "input-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 22
    }
  }), formik.touched.pass && formik.errors.pass ? __jsx("div", {
    className: "alert alert-danger button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 24
    }
  }, formik.errors.pass, " ") : null, __jsx("button", {
    className: "btn-success-outline",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 20
    }
  }, " Crear cuenta"))));
};

_s(crear_Cuenta, "tOEihmhtcNYuZyh+0me4UpEIvdE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

/* harmony default export */ __webpack_exports__["default"] = (crear_Cuenta);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXJfY3VlbnRhLmpzeCJdLCJuYW1lcyI6WyJjcmVhcl9DdWVudGEiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsIm1lbnNhamUiLCJyZWdpc3RyYXJVc3VhcmlvIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsImVtYWlsIiwicGFzcyIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm9uU3VibWl0IiwidmFsb3JlcyIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFdkIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUZ1QixNQUdmQyxPQUhlLEdBR2VILFdBSGYsQ0FHZkcsT0FIZTtBQUFBLE1BR05DLGdCQUhNLEdBR2VKLFdBSGYsQ0FHTkksZ0JBSE07QUFJdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUp1QixDQU12Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHdEQUFTLENBQUM7QUFDckJDLGlCQUFhLEVBQUU7QUFDYkMsWUFBTSxFQUFFLEVBREs7QUFFYkMsV0FBSyxFQUFFLEVBRk07QUFHYkMsVUFBSSxFQUFFO0FBSE8sS0FETTtBQU1yQkMsb0JB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LE1BQU0sQ0FBQ2lCLE9BQVAsQ0FBZVosSUFBZixJQUF1QkwsTUFBTSxDQUFDa0IsTUFBUCxDQUFjYixJQUFyQyxHQUNHO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURMLE1BQU0sQ0FBQ2tCLE1BQVAsQ0FBY2IsSUFBL0QsTUFESCxHQUVFLElBbkNQLEVBcUNJO0FBQVEsYUFBUyxFQUFDLHFCQUFsQjtBQUF3QyxRQUFJLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQ0osQ0FKUCxDQUZKLENBRkY7QUFzREQsQ0FwRkQ7O0dBQU1iLFk7VUFJYU8scUQsRUFHQUUsZ0Q7OztBQStFSlQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXJfY3VlbnRhLjRiZTAzYjQzOGExZTliOWRkMThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlRm9ybWlrfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xyXG5cclxuLy9ucG0gaSBmb3JtaWsgeXVwIHZhbGlkYWNpb24gZGUgZm9ybXVsYXJpb3NcclxuLy9ucG0gaSByZWFjdC1kcm9wem9uZSBjb24gZXN0byBzZSBzdWJlbiBsYXMgaW1hZ2VuZXNcclxuLy91c2Vjb250ZXh0IGNyZWEgZWwgY29udGV4dCBcclxuLy91c2UgcmVkdWNlciBzb24gbGFzIGZ1bmNpb25lcyBxdWUgbW9kaWZpY2FuIGVsIHN0YXRlXHJcbi8vdXNlIHN0YXRlIGxhcyBhY2Npb25lcyBxdWUgZGlzcGFyYW4gZW4gZWwgcmVkdWNlclxyXG4vL2NvbnRleHQuIHByb3ZpZGVyID0gZGEgbGEgZGF0YVxyXG4vL2NvbnRleHQuIGNvbnN1bWVyID0gcmVjaXZlIGxhIGRhdGFcclxuXHJcblxyXG4vKlxyXG5wYXJhIGNvbXVuaWNhcnNlIGVsIHN0YXRlIGNvbiBlbCByZWR1Y2VyIGV4aXN0ZW4gbG9zXHJcbnR5cGVzXHJcbmVzdG9zIHZhbiBlbCBlbCBvYmpldG8gZGlzcGF0Y2ggZWwgY3VhbCBzb24gZG9zIFxyXG5vYmpldG9zOiBlbCB0eXBlICB5IGVsIHBheWxvYWRcclxuY29uIGVsIHR5cGUgc2UgZXZhbHVhIGVuIGVsIGNhc2UgZGUgdW4gc3dpdGNoXHJcbmNvbiBlbCBwYXlsb2FkIGVzIHF1ZSBzZSBtb2RpZmljYW4gbG9zIGRhdG9zIGRlbCBzdGF0ZVxyXG4gICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcclxuICAgICAgICAgICAgfSlcclxuXHJcbiovXHJcblxyXG5jb25zdCBjcmVhcl9DdWVudGEgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbWVuc2FqZSwgcmVnaXN0cmFyVXN1YXJpb8KgfSA9IEF1dGhDb250ZXh0O1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gRm9ybXVsYXJpbyB5IHZhbGlkYWNpw7NuIGNvbiBmb3JtaWsgeSBZdXBcclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgbm9tYnJlOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBhc3M6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgbm9tYnJlOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgTm9tYnJlIGVzIE9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbCgnRWwgZW1haWwgbm8gZXMgdsOhbGlkbycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIEVtYWlsIGVzIE9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgICAgIHBhc3M6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBwYXNzd29yZCBubyBwdWVkZSBpciB2YWNpbycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAubWluKDgsICdFbCBwYXNzd29yZCBkZWJlIGNvbnRlbmVyIGFsIG1lbm9zIDggY2FyYWN0ZXJlcycpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xyXG4gICAgICAgICAgICByZWdpc3RyYXJVc3VhcmlvKHZhbG9yZXMpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgIFxyXG4gICAgPExheW91dD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cclxuICAgICAgICB7IG1lbnNhamUgJiYgPEFsZXJ0YSAvPn1cclxuICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkbGluZVwiPkNyZWEgdW5hIGN1ZW50YTwvaDI+XHJcbiAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaGVhZGxpbmVcIiAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm5vbWJyZSAmJiBmb3JtaWsuZXJyb3JzLm5vbWJyZSA/KFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGJ1dHRvbi10ZXh0XCI+e2Zvcm1pay5lcnJvcnMubm9tYnJlfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICk6IG51bGx9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVzY3JpYmUgdHUgY29ycmVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/KFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGJ1dHRvbi10ZXh0XCI+e2Zvcm1pay5lcnJvcnMucGFzc30gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICApOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBjbGF2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLnBhc3MgJiYgZm9ybWlrLmVycm9ycy5wYXNzID8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgYnV0dG9uLXRleHRcIj57Zm9ybWlrLmVycm9ycy5wYXNzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICk6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc3VjY2Vzcy1vdXRsaW5lXCIgdHlwZT1cInN1Ym1pdFwiPiBDcmVhciBjdWVudGE8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9MYXlvdXQ+IFxyXG5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWFyX0N1ZW50YTsiXSwic291cmNlUm9vdCI6IiJ9