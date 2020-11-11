webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dropzone.jsx":
/*!*********************************!*\
  !*** ./components/Dropzone.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/app/appContext */ "./context/app/appContext.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form */ "./components/Form.jsx");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Danell\\Desktop\\Proyectos_React\\NodeSend(Mern_Stack)\\sendmimg\\components\\Dropzone.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




 //use calback usado para multiples rendering de la app

var Dropzone = function Dropzone() {
  _s();

  // Context de la app
  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var cargando = AppContext.cargando,
      mostrarAlerta = AppContext.mostrarAlerta,
      subirArchivo = AppContext.subirArchivo,
      crearEnlace = AppContext.crearEnlace; // Context de autenticación

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var usuario = AuthContext.usuario,
      autenticado = AuthContext.autenticado;

  var onDropRejected = function onDropRejected() {
    mostrarAlerta('No se pudo subir, el Limite es 1MB, obten una cuenta gratis para subir archivos más grandes');
  };

  var onDropAccepted = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(acceptedFiles) {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Crear un form Data
              formData = new FormData(); //crea el formdata

              formData.append('archivo', acceptedFiles[0]);
              subirArchivo(formData, acceptedFiles[0].path);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  var maxSize = autenticado ? 1000000000000 : 1000000; // Extraer contenido de Dropzone

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["useDropzone"])({
    onDropAccepted: onDropAccepted,
    onDropRejected: onDropRejected,
    maxSize: maxSize
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      acceptedFiles = _useDropzone.acceptedFiles;

  var archivos = acceptedFiles.map(function (archivo) {
    return __jsx("li", {
      key: archivo.lastModified,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, archivo.path), __jsx("p", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, //mostrar en MB
    (archivo.size / Math.pow(1024, 2)).toFixed(2), " MB"));
  });
  return __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, //Si tengo ya un archivo subido, se mostrara el listado de archivos para ponerle configuracion
  //en caso contrario, subir un archivo
  acceptedFiles.length > 0 ? __jsx("div", {
    className: " text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Archivos"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, archivos), autenticado ? __jsx(_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 39
    }
  }) : "", //spinner  
  cargando ? __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "Subiendo Archivo...") : __jsx("button", {
    className: "paper-btn btn-block button",
    onClick: function onClick() {
      return crearEnlace();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 22
    }
  }, "Crear Enlace")) : __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps({
    className: 'dropzone w-full py-32'
  }), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "h-100 "
  }, getInputProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  })), isDragActive ? __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 44
    }
  }, " Suelta el archivo ") : __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, "Selecciona un archivo y arrastralo aqu\xED"), __jsx("button", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, "Selecciona archivos para subir"))));
};

_s(Dropzone, "kwQnK7tG9AzcGColoizl2K3ELkI=", false, function () {
  return [react_dropzone__WEBPACK_IMPORTED_MODULE_4__["useDropzone"]];
});

_c = Dropzone;
/* harmony default export */ __webpack_exports__["default"] = (Dropzone);

var _c;

$RefreshReg$(_c, "Dropzone");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wem9uZS5qc3giXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImFwcENvbnRleHQiLCJjYXJnYW5kbyIsIm1vc3RyYXJBbGVydGEiLCJzdWJpckFyY2hpdm8iLCJjcmVhckVubGFjZSIsIkF1dGhDb250ZXh0IiwiYXV0aENvbnRleHQiLCJ1c3VhcmlvIiwiYXV0ZW50aWNhZG8iLCJvbkRyb3BSZWplY3RlZCIsIm9uRHJvcEFjY2VwdGVkIiwidXNlQ2FsbGJhY2siLCJhY2NlcHRlZEZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhdGgiLCJtYXhTaXplIiwidXNlRHJvcHpvbmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYXJjaGl2b3MiLCJtYXAiLCJhcmNoaXZvIiwibGFzdE1vZGlmaWVkIiwic2l6ZSIsIk1hdGgiLCJwb3ciLCJ0b0ZpeGVkIiwibGVuZ3RoIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQTdCO0FBSG1CLE1BSVhDLFFBSlcsR0FJNENILFVBSjVDLENBSVhHLFFBSlc7QUFBQSxNQUlEQyxhQUpDLEdBSTRDSixVQUo1QyxDQUlESSxhQUpDO0FBQUEsTUFJY0MsWUFKZCxHQUk0Q0wsVUFKNUMsQ0FJY0ssWUFKZDtBQUFBLE1BSTRCQyxXQUo1QixHQUk0Q04sVUFKNUMsQ0FJNEJNLFdBSjVCLEVBTW5COztBQUNBLE1BQU1DLFdBQVcsR0FBR04sd0RBQVUsQ0FBQ08saUVBQUQsQ0FBOUI7QUFQbUIsTUFRWEMsT0FSVyxH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LENBREosR0EwQkksb0dBQVVlLFlBQVksQ0FBQztBQUFFWSxhQUFTLEVBQUU7QUFBYixHQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSTtBQUFPLGFBQVMsRUFBQztBQUFqQixLQUErQlgsYUFBYSxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosRUFHWUMsWUFBWSxHQUFHO0FBQUcsYUFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBSCxHQUNaO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFESixFQUVJO0FBQVEsYUFBUyxFQUFDLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRkosQ0FKWixDQS9CUixDQURKO0FBK0NILENBeEZEOztHQUFNeEIsUTtVQTJCbUVxQiwwRDs7O0tBM0JuRXJCLFE7QUEwRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjZDM1MDAxOWM3ZDJlN2MxZmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcclxuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwQ29udGV4dCc7XHJcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgRm9ybXVsYXJpbyBmcm9tICcuL0Zvcm0nO1xyXG5cclxuXHJcbi8vdXNlIGNhbGJhY2sgdXNhZG8gcGFyYSBtdWx0aXBsZXMgcmVuZGVyaW5nIGRlIGxhIGFwcFxyXG5jb25zdCBEcm9wem9uZSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBDb250ZXh0IGRlIGxhIGFwcFxyXG4gICAgY29uc3QgQXBwQ29udGV4dCA9IHVzZUNvbnRleHQoYXBwQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGNhcmdhbmRvLCBtb3N0cmFyQWxlcnRhLCBzdWJpckFyY2hpdm8sIGNyZWFyRW5sYWNlwqB9ID0gQXBwQ29udGV4dDtcclxuXHJcbiAgICAvLyBDb250ZXh0IGRlIGF1dGVudGljYWNpw7NuXHJcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xyXG4gICAgY29uc3QgeyB1c3VhcmlvLCBhdXRlbnRpY2Fkb8KgfSA9IEF1dGhDb250ZXh0O1xyXG5cclxuICAgIGNvbnN0IG9uRHJvcFJlamVjdGVkID0gKCkgPT4ge1xyXG4gICAgICAgIG1vc3RyYXJBbGVydGEoJ05vIHNlIHB1ZG8gc3ViaXIsIGVsIExpbWl0ZSBlcyAxTUIsIG9idGVuIHVuYSBjdWVudGEgZ3JhdGlzIHBhcmEgc3ViaXIgYXJjaGl2b3MgbcOhcyBncmFuZGVzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Ecm9wQWNjZXB0ZWQgPSB1c2VDYWxsYmFjayggYXN5bmMgKGFjY2VwdGVkRmlsZXMpID0+IHtcclxuICAgICAgICAvLyBDcmVhciB1biBmb3JtIERhdGFcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIC8vY3JlYSBlbCBmb3JtZGF0YVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXJjaGl2bycsIGFjY2VwdGVkRmlsZXNbMF0pO1xyXG5cclxuICAgICAgICBzdWJpckFyY2hpdm8oZm9ybURhdGEsIGFjY2VwdGVkRmlsZXNbMF0ucGF0aCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG1heFNpemUgPSBhdXRlbnRpY2FkbyA/IDEwMDAwMDAwMDAwMDAgOiAxMDAwMDAwO1xyXG5cclxuICAgIC8vIEV4dHJhZXIgY29udGVuaWRvIGRlIERyb3B6b25lXHJcbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlLCBhY2NlcHRlZEZpbGVzIH0gPSB1c2VEcm9wem9uZSh7b25Ecm9wQWNjZXB0ZWQsIG9uRHJvcFJlamVjdGVkLCBtYXhTaXplfSk7XHJcblxyXG4gICAgY29uc3QgYXJjaGl2b3MgPSBhY2NlcHRlZEZpbGVzLm1hcCggYXJjaGl2byA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17YXJjaGl2by5sYXN0TW9kaWZpZWR9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57YXJjaGl2by5wYXRofTwvcD4gXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntcclxuICAgICAgICAgICAgLy9tb3N0cmFyIGVuIE1CXHJcbiAgICAgICAgICAgIChhcmNoaXZvLnNpemUgLyBNYXRoLnBvdygxMDI0LCAyKSkudG9GaXhlZCgyKSB9IE1CPC9wPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApICk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIC8vU2kgdGVuZ28geWEgdW4gYXJjaGl2byBzdWJpZG8sIHNlIG1vc3RyYXJhIGVsIGxpc3RhZG8gZGUgYXJjaGl2b3MgcGFyYSBwb25lcmxlIGNvbmZpZ3VyYWNpb25cclxuICAgICAgICAgICAgLy9lbiBjYXNvIGNvbnRyYXJpbywgc3ViaXIgdW4gYXJjaGl2b1xyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkbGluZVwiPkFyY2hpdm9zPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcmNoaXZvc31cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGVudGljYWRvID8gPEZvcm11bGFyaW8gLz4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgeyAvL3NwaW5uZXIgIFxyXG4gICAgICAgICAgICAgICAgICAgICBjYXJnYW5kbyA/IDxwIGNsYXNzTmFtZT1cIlwiPlN1YmllbmRvIEFyY2hpdm8uLi48L3A+IDogKFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFwZXItYnRuIGJ0bi1ibG9jayBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGNyZWFyRW5sYWNlKCkgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXIgRW5sYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgeyAuLi5nZXRSb290UHJvcHMoeyBjbGFzc05hbWU6ICdkcm9wem9uZSB3LWZ1bGwgcHktMzInIH0pIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImgtMTAwIFwiIHsgLi4uZ2V0SW5wdXRQcm9wcygpIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnQWN0aXZlID8gPHAgY2xhc3NOYW1lPVwiXCI+IFN1ZWx0YSBlbCBhcmNoaXZvIDwvcD4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5TZWxlY2Npb25hIHVuIGFyY2hpdm8geSBhcnJhc3RyYWxvIGFxdcOtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY2Npb25hIGFyY2hpdm9zIHBhcmEgc3ViaXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IERyb3B6b25lOyJdLCJzb3VyY2VSb290IjoiIn0=