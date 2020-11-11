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
    className: "form-group",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXJfY3VlbnRhLmpzeCJdLCJuYW1lcyI6WyJjcmVhcl9DdWVudGEiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsIm1lbnNhamUiLCJyZWdpc3RyYXJVc3VhcmlvIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsImVtYWlsIiwicGFzcyIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm9uU3VibWl0IiwidmFsb3JlcyIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFdkIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUZ1QixNQUdmQyxPQUhlLEdBR2VILFdBSGYsQ0FHZkcsT0FIZTtBQUFBLE1BR05DLGdCQUhNLEdBR2VKLFdBSGYsQ0FHTkksZ0JBSE07QUFJdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUp1QixDQU12Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHdEQUFTLENBQUM7QUFDckJDLGlCQUFhLEVBQUU7QUFDYkMsWUFBTSxFQUFFLEVBREs7QUFFYkMsV0FBSyxFQUFFLEVBRk07QUFHYkMsVUFBSSxFQUFFO0FBSE8sS0FETTtBQU1yQkMsb0JB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TUFBTSxDQUFDaUIsT0FBUCxDQUFlWixJQUFmLElBQXVCTCxNQUFNLENBQUNrQixNQUFQLENBQWNiLElBQXJDLEdBQ0c7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpREwsTUFBTSxDQUFDa0IsTUFBUCxDQUFjYixJQUEvRCxNQURILEdBRUUsSUFuQ1AsRUFxQ0k7QUFBUSxhQUFTLEVBQUMscUJBQWxCO0FBQXdDLFFBQUksRUFBQyxRQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJDSixDQUpQLENBRkosQ0FGRjtBQXNERCxDQXBGRDs7R0FBTWIsWTtVQUlhTyxxRCxFQUdBRSxnRDs7O0FBK0VKVCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhcl9jdWVudGEuNzQyMGQwYzc2M2JhZGE5Y2QzMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWt9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgQWxlcnRhIGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnRhJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XHJcblxyXG4vL25wbSBpIGZvcm1payB5dXAgdmFsaWRhY2lvbiBkZSBmb3JtdWxhcmlvc1xyXG4vL25wbSBpIHJlYWN0LWRyb3B6b25lIGNvbiBlc3RvIHNlIHN1YmVuIGxhcyBpbWFnZW5lc1xyXG4vL3VzZWNvbnRleHQgY3JlYSBlbCBjb250ZXh0IFxyXG4vL3VzZSByZWR1Y2VyIHNvbiBsYXMgZnVuY2lvbmVzIHF1ZSBtb2RpZmljYW4gZWwgc3RhdGVcclxuLy91c2Ugc3RhdGUgbGFzIGFjY2lvbmVzIHF1ZSBkaXNwYXJhbiBlbiBlbCByZWR1Y2VyXHJcbi8vY29udGV4dC4gcHJvdmlkZXIgPSBkYSBsYSBkYXRhXHJcbi8vY29udGV4dC4gY29uc3VtZXIgPSByZWNpdmUgbGEgZGF0YVxyXG5cclxuXHJcbi8qXHJcbnBhcmEgY29tdW5pY2Fyc2UgZWwgc3RhdGUgY29uIGVsIHJlZHVjZXIgZXhpc3RlbiBsb3NcclxudHlwZXNcclxuZXN0b3MgdmFuIGVsIGVsIG9iamV0byBkaXNwYXRjaCBlbCBjdWFsIHNvbiBkb3MgXHJcbm9iamV0b3M6IGVsIHR5cGUgIHkgZWwgcGF5bG9hZFxyXG5jb24gZWwgdHlwZSBzZSBldmFsdWEgZW4gZWwgY2FzZSBkZSB1biBzd2l0Y2hcclxuY29uIGVsIHBheWxvYWQgZXMgcXVlIHNlIG1vZGlmaWNhbiBsb3MgZGF0b3MgZGVsIHN0YXRlXHJcbiAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuKi9cclxuXHJcbmNvbnN0IGNyZWFyX0N1ZW50YSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBtZW5zYWplLCByZWdpc3RyYXJVc3VhcmlvwqB9ID0gQXV0aENvbnRleHQ7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBGb3JtdWxhcmlvIHkgdmFsaWRhY2nDs24gY29uIGZvcm1payB5IFl1cFxyXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICBub21icmU6ICcnLFxyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcGFzczogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICBub21icmU6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBOb21icmUgZXMgT2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmVtYWlsKCdFbCBlbWFpbCBubyBlcyB2w6FsaWRvJylcclxuICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgRW1haWwgZXMgT2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgcGFzczogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHBhc3N3b3JkIG5vIHB1ZWRlIGlyIHZhY2lvJylcclxuICAgICAgICAgICAgICAgICAgICAgIC5taW4oOCwgJ0VsIHBhc3N3b3JkIGRlYmUgY29udGVuZXIgYWwgbWVub3MgOCBjYXJhY3RlcmVzJylcclxuICAgICAgICB9KSxcclxuICAgICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlZ2lzdHJhclVzdWFyaW8odmFsb3JlcylcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuXHJcbiAgcmV0dXJuICggXHJcbiAgICAgXHJcbiAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblxyXG4gICAgICAgIHsgbWVuc2FqZSAmJiA8QWxlcnRhIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+Q3JlYSB1bmEgY3VlbnRhPC9oMj5cclxuICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiICBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHR1IG5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQubm9tYnJlICYmIGZvcm1pay5lcnJvcnMubm9tYnJlID8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgYnV0dG9uLXRleHRcIj57Zm9ybWlrLmVycm9ycy5ub21icmV9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgKTogbnVsbH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSB0dSBjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsID8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgYnV0dG9uLXRleHRcIj57Zm9ybWlrLmVycm9ycy5wYXNzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICk6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFc2NyaWJlIHR1IGNsYXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQucGFzcyAmJiBmb3JtaWsuZXJyb3JzLnBhc3MgPyhcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBidXR0b24tdGV4dFwiPntmb3JtaWsuZXJyb3JzLnBhc3N9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgKTogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zdWNjZXNzLW91dGxpbmVcIiB0eXBlPVwic3VibWl0XCI+IENyZWFyIGN1ZW50YTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L0xheW91dD4gXHJcblxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXJfQ3VlbnRhOyJdLCJzb3VyY2VSb290IjoiIn0=