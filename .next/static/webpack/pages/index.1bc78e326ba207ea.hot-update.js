"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sidebar/sidebar.tsx":
/*!****************************************!*\
  !*** ./components/sidebar/sidebar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./components/Context.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Sidebar = function() {\n    _s();\n    var displaySidebar = (0,_Context__WEBPACK_IMPORTED_MODULE_2__.useUIContext)().displaySidebar;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(!displaySidebar && \" hidden \", \" w-screen h-screen absolute inset-0 bg-black/[0.4] z-[1000]\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"!w-[306px] h-screen shadow-sideBarShadow bg-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: \".svgs/main-logo.svg\",\n                    height: 30,\n                    width: 30\n                }, void 0, false, {\n                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 12\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"TE15pLe0esopY/uqc6kv6kcvTmM=\", false, function() {\n    return [\n        _Context__WEBPACK_IMPORTED_MODULE_2__.useUIContext\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFDUDtBQUNYOztBQUUvQixJQUFNRyxPQUFPLEdBQTJCLFdBQW1COztJQUN6RCxJQUFNLGNBQWdCLEdBQUtGLHNEQUFZLEVBQUUsQ0FBakNHLGNBQWM7SUFDdEIscUJBQ0UsOERBQUNDLEtBQUc7UUFDRkMsU0FBUyxFQUFFLEVBQUMsQ0FFWCxNQUEyRCxDQUQxRCxDQUFDRixjQUFjLElBQUksVUFBVSxFQUM5Qiw2REFBMkQsQ0FBQztrQkFFN0QsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG1EQUFtRDtzQkFDaEUsNEVBQUNELEtBQUc7MEJBQ0QsNEVBQUNILG1EQUFLO29CQUNMSyxHQUFHLEVBQUMscUJBQXFCO29CQUN6QkMsTUFBTSxFQUFFLEVBQUU7b0JBQ1ZDLEtBQUssRUFBRSxFQUFFOzs7Ozt5QkFDVDs7Ozs7cUJBQ0U7Ozs7O2lCQUNGOzs7OzthQUNGLENBQ047Q0FDSDtHQW5CS04sT0FBTzs7UUFDZ0JGLGtEQUFZOzs7QUFEbkNFLEtBQUFBLE9BQU87QUFxQmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci50c3g/Nzg2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VVSUNvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgU2lkZWJhcjogRnVuY3Rpb25Db21wb25lbnQ8YW55PiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgZGlzcGxheVNpZGViYXIgfSA9IHVzZVVJQ29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICFkaXNwbGF5U2lkZWJhciAmJiAnIGhpZGRlbiAnXG4gICAgICB9IHctc2NyZWVuIGgtc2NyZWVuIGFic29sdXRlIGluc2V0LTAgYmctYmxhY2svWzAuNF0gei1bMTAwMF1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSchdy1bMzA2cHhdIGgtc2NyZWVuIHNoYWRvdy1zaWRlQmFyU2hhZG93IGJnLXdoaXRlJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgIHsgPEltYWdlXG4gICAgICAgICAgICBzcmM9Jy5zdmdzL21haW4tbG9nby5zdmcnXG4gICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVVJQ29udGV4dCIsIkltYWdlIiwiU2lkZWJhciIsImRpc3BsYXlTaWRlYmFyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidebar/sidebar.tsx\n");

/***/ })

});