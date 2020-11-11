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
    className: 'dropzone  paper container-lg card border-thick'
  }), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card-body"
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
    className: "second-button-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, "Selecciona un archivo y arrastralo aqu\xED"), __jsx("button", {
    className: "paper-btn btn-block button",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wem9uZS5qc3giXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImFwcENvbnRleHQiLCJjYXJnYW5kbyIsIm1vc3RyYXJBbGVydGEiLCJzdWJpckFyY2hpdm8iLCJjcmVhckVubGFjZSIsIkF1dGhDb250ZXh0IiwiYXV0aENvbnRleHQiLCJ1c3VhcmlvIiwiYXV0ZW50aWNhZG8iLCJvbkRyb3BSZWplY3RlZCIsIm9uRHJvcEFjY2VwdGVkIiwidXNlQ2FsbGJhY2siLCJhY2NlcHRlZEZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhdGgiLCJtYXhTaXplIiwidXNlRHJvcHpvbmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYXJjaGl2b3MiLCJtYXAiLCJhcmNoaXZvIiwibGFzdE1vZGlmaWVkIiwic2l6ZSIsIk1hdGgiLCJwb3ciLCJ0b0ZpeGVkIiwibGVuZ3RoIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQTdCO0FBSG1CLE1BSVhDLFFBSlcsR0FJNENILFVBSjVDLENBSVhHLFFBSlc7QUFBQSxNQUlEQyxhQUpDLEdBSTRDSixVQUo1QyxDQUlESSxhQUpDO0FBQUEsTUFJY0MsWUFKZCxHQUk0Q0wsVUFKNUMsQ0FJY0ssWUFKZDtBQUFBLE1BSTRCQyxXQUo1QixHQUk0Q04sVUFKNUMsQ0FJNEJNLFdBSjVCLEVBTW5COztBQUNBLE1BQU1DLFdBQVcsR0FBR04sd0RBQVUsQ0FBQ08saUVBQUQsQ0FBOUI7QUFQbUIsTUFRWEMsT0FSVyxH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LENBREosR0EwQkksb0dBQVVlLFlBQVksQ0FBQztBQUFFWSxhQUFTLEVBQUU7QUFBYixHQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSTtBQUFPLGFBQVMsRUFBQztBQUFqQixLQUFrQ1gsYUFBYSxFQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosRUFHWUMsWUFBWSxHQUFHO0FBQUcsYUFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBSCxHQUNaO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREosRUFFSTtBQUFRLGFBQVMsRUFBQyw0QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FGSixDQUpaLENBL0JSLENBREo7QUErQ0gsQ0F4RkQ7O0dBQU14QixRO1VBMkJtRXFCLDBEOzs7S0EzQm5FckIsUTtBQTBGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2UyYTAyZjYxNDlmNjgwNzQ5YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyAgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xyXG5pbXBvcnQgYXBwQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FwcC9hcHBDb250ZXh0JztcclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XHJcbmltcG9ydCBGb3JtdWxhcmlvIGZyb20gJy4vRm9ybSc7XHJcblxyXG5cclxuLy91c2UgY2FsYmFjayB1c2FkbyBwYXJhIG11bHRpcGxlcyByZW5kZXJpbmcgZGUgbGEgYXBwXHJcbmNvbnN0IERyb3B6b25lID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIENvbnRleHQgZGUgbGEgYXBwXHJcbiAgICBjb25zdCBBcHBDb250ZXh0ID0gdXNlQ29udGV4dChhcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgY2FyZ2FuZG8sIG1vc3RyYXJBbGVydGEsIHN1YmlyQXJjaGl2bywgY3JlYXJFbmxhY2XCoH0gPSBBcHBDb250ZXh0O1xyXG5cclxuICAgIC8vIENvbnRleHQgZGUgYXV0ZW50aWNhY2nDs25cclxuICAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IHVzdWFyaW8sIGF1dGVudGljYWRvwqB9ID0gQXV0aENvbnRleHQ7XHJcblxyXG4gICAgY29uc3Qgb25Ecm9wUmVqZWN0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgbW9zdHJhckFsZXJ0YSgnTm8gc2UgcHVkbyBzdWJpciwgZWwgTGltaXRlIGVzIDFNQiwgb2J0ZW4gdW5hIGN1ZW50YSBncmF0aXMgcGFyYSBzdWJpciBhcmNoaXZvcyBtw6FzIGdyYW5kZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkRyb3BBY2NlcHRlZCA9IHVzZUNhbGxiYWNrKCBhc3luYyAoYWNjZXB0ZWRGaWxlcykgPT4ge1xyXG4gICAgICAgIC8vIENyZWFyIHVuIGZvcm0gRGF0YVxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgLy9jcmVhIGVsIGZvcm1kYXRhXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhcmNoaXZvJywgYWNjZXB0ZWRGaWxlc1swXSk7XHJcblxyXG4gICAgICAgIHN1YmlyQXJjaGl2byhmb3JtRGF0YSwgYWNjZXB0ZWRGaWxlc1swXS5wYXRoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IGF1dGVudGljYWRvID8gMTAwMDAwMDAwMDAwMCA6IDEwMDAwMDA7XHJcblxyXG4gICAgLy8gRXh0cmFlciBjb250ZW5pZG8gZGUgRHJvcHpvbmVcclxuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUsIGFjY2VwdGVkRmlsZXMgfSA9IHVzZURyb3B6b25lKHtvbkRyb3BBY2NlcHRlZCwgb25Ecm9wUmVqZWN0ZWQsIG1heFNpemV9KTtcclxuXHJcbiAgICBjb25zdCBhcmNoaXZvcyA9IGFjY2VwdGVkRmlsZXMubWFwKCBhcmNoaXZvID0+IChcclxuICAgICAgICA8bGkga2V5PXthcmNoaXZvLmxhc3RNb2RpZmllZH0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPnthcmNoaXZvLnBhdGh9PC9wPiBcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e1xyXG4gICAgICAgICAgICAvL21vc3RyYXIgZW4gTUJcclxuICAgICAgICAgICAgKGFyY2hpdm8uc2l6ZSAvIE1hdGgucG93KDEwMjQsIDIpKS50b0ZpeGVkKDIpIH0gTUI8L3A+XHJcbiAgICAgICAgPC9saT5cclxuICAgICkgKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgLy9TaSB0ZW5nbyB5YSB1biBhcmNoaXZvIHN1Ymlkbywgc2UgbW9zdHJhcmEgZWwgbGlzdGFkbyBkZSBhcmNoaXZvcyBwYXJhIHBvbmVybGUgY29uZmlndXJhY2lvblxyXG4gICAgICAgICAgICAvL2VuIGNhc28gY29udHJhcmlvLCBzdWJpciB1biBhcmNoaXZvXHJcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+QXJjaGl2b3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FyY2hpdm9zfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0ZW50aWNhZG8gPyA8Rm9ybXVsYXJpbyAvPiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB7IC8vc3Bpbm5lciAgXHJcbiAgICAgICAgICAgICAgICAgICAgIGNhcmdhbmRvID8gPHAgY2xhc3NOYW1lPVwiXCI+U3ViaWVuZG8gQXJjaGl2by4uLjwvcD4gOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXBlci1idG4gYnRuLWJsb2NrIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gY3JlYXJFbmxhY2UoKSAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhciBFbmxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiB7IC4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogJ2Ryb3B6b25lICBwYXBlciBjb250YWluZXItbGcgY2FyZCBib3JkZXItdGhpY2snIH0pIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHsgLi4uZ2V0SW5wdXRQcm9wcygpIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnQWN0aXZlID8gPHAgY2xhc3NOYW1lPVwiXCI+IFN1ZWx0YSBlbCBhcmNoaXZvIDwvcD4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWNvbmQtYnV0dG9uLXRleHRcIj5TZWxlY2Npb25hIHVuIGFyY2hpdm8geSBhcnJhc3RyYWxvIGFxdcOtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFwZXItYnRuIGJ0bi1ibG9jayBidXR0b25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmEgYXJjaGl2b3MgcGFyYSBzdWJpclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRHJvcHpvbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==