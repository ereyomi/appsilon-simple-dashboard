"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Context.tsx":
/*!********************************!*\
  !*** ./components/Context.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ManageUiContext\": function() { return /* binding */ ManageUiContext; },\n/* harmony export */   \"useUIContext\": function() { return /* binding */ useUIContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction uiReducer(state, action) {\n    switch(action.type){\n        case \"OPEN_SIDEBAR\":\n            {\n                return _objectSpread({}, state, {\n                    displaySidebar: true\n                });\n            }\n        case \"CLOSE_SIDEBAR\":\n            {\n                return _objectSpread({}, state, {\n                    displaySidebar: false\n                });\n            }\n        case \"OPEN_DROPDOWN\":\n            {\n                return _objectSpread({}, state, {\n                    displayDropdown: true\n                });\n            }\n        case \"CLOSE_DROPDOWN\":\n            {\n                return _objectSpread({}, state, {\n                    displayDropdown: false\n                });\n            }\n    }\n}\nvar initialState = {\n    displaySidebar: false,\n    displayDropdown: false\n};\nvar UIContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nvar UiContextProvider = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(uiReducer, initialState), state = ref[0], dispatch = ref[1];\n    var openSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        return dispatch({\n            type: \"OPEN_SIDEBAR\"\n        });\n    }, [\n        dispatch\n    ]);\n    var closeSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        return dispatch({\n            type: \"CLOSE_SIDEBAR\"\n        });\n    }, [\n        dispatch\n    ]);\n    var toggleSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        return state.displaySidebar ? dispatch({\n            type: \"CLOSE_SIDEBAR\"\n        }) : dispatch({\n            type: \"OPEN_SIDEBAR\"\n        });\n    }, [\n        dispatch,\n        state.displaySidebar\n    ]);\n    var openDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        return dispatch({\n            type: \"OPEN_DROPDOWN\"\n        });\n    }, [\n        dispatch\n    ]);\n    var closeDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        return dispatch({\n            type: \"CLOSE_DROPDOWN\"\n        });\n    }, [\n        dispatch\n    ]);\n    var value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return _objectSpread({}, state, {\n            openSidebar: openSidebar,\n            closeSidebar: closeSidebar,\n            toggleSidebar: toggleSidebar,\n            openDropdown: openDropdown,\n            closeDropdown: closeDropdown\n        });\n    }, [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UIContext.Provider, _objectSpread({\n        value: value\n    }, props), void 0, false, {\n        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/Context.tsx\",\n        lineNumber: 97,\n        columnNumber: 10\n    }, _this);\n};\n_s(UiContextProvider, \"4ARk0r1XEMFq6AaHUgL33FlitY8=\");\n_c = UiContextProvider;\nvar useUIContext = function() {\n    _s1();\n    var context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(UIContext);\n    if (context === undefined) {\n        throw new Error(\"useUI must be used within a UIProvider\");\n    }\n    return context;\n};\n_s1(useUIContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar ManageUiContext = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UiContextProvider, {\n        children: [\n            \" \",\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/Context.tsx\",\n        lineNumber: 111,\n        columnNumber: 10\n    }, _this);\n};\n_c1 = ManageUiContext;\nvar _c, _c1;\n$RefreshReg$(_c, \"UiContextProvider\");\n$RefreshReg$(_c1, \"ManageUiContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBTVUsWUFBWSxHQUFHLFdBQVc7O0lBQ3JDLElBQU1DLE9BQU8sR0FBR3hCLHVEQUFnQixDQUFDWSxTQUFTLENBQUM7SUFDM0MsSUFBSVksT0FBTyxLQUFLRSxTQUFTLEVBQUU7UUFDekIsTUFBTSxJQUFJQyxLQUFLLENBQUUsd0NBQXNDLENBQUUsQ0FBQztLQUMzRDtJQUNELE9BQU9ILE9BQU8sQ0FBQztDQUNoQixDQUFDO0lBTldELFlBQVk7QUFRbEIsSUFBTUssZUFBZSxHQUV2QixnQkFBK0I7UUFBNUJDLFFBQVEsU0FBUkEsUUFBUTtJQUNkLHFCQUFPLDhEQUFDaEIsaUJBQWlCOztZQUFDLEdBQUM7WUFBQ2dCLFFBQVE7Ozs7OzthQUFxQixDQUFDO0NBQzNELENBQUM7QUFKV0QsTUFBQUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRleHQudHN4PzA5YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIHN0YXRlVCA9IHtcbiAgZGlzcGxheVNpZGViYXI6IGJvb2xlYW47XG4gIGRpc3BsYXlEcm9wZG93bjogYm9vbGVhbjtcbn07XG5cbnR5cGUgQWN0aW9uVCA9XG4gIHwge1xuICAgICAgdHlwZTogJ09QRU5fU0lERUJBUic7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdDTE9TRV9TSURFQkFSJztcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ09QRU5fRFJPUERPV04nO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnQ0xPU0VfRFJPUERPV04nO1xuICAgIH07XG5cbmZ1bmN0aW9uIHVpUmVkdWNlcihzdGF0ZTogc3RhdGVULCBhY3Rpb246IEFjdGlvblQpIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ09QRU5fU0lERUJBUic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkaXNwbGF5U2lkZWJhcjogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ0NMT1NFX1NJREVCQVInOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGlzcGxheVNpZGViYXI6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnT1BFTl9EUk9QRE9XTic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkaXNwbGF5RHJvcGRvd246IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdDTE9TRV9EUk9QRE9XTic6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkaXNwbGF5RHJvcGRvd246IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBzdGF0ZVQgPSB7XG4gIGRpc3BsYXlTaWRlYmFyOiBmYWxzZSxcbiAgZGlzcGxheURyb3Bkb3duOiBmYWxzZSxcbn07XG5cbmNvbnN0IFVJQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8c3RhdGVUIHwgbnVsbD4oaW5pdGlhbFN0YXRlKTtcblxuY29uc3QgVWlDb250ZXh0UHJvdmlkZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PGFueT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVpUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBvcGVuU2lkZWJhciA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ09QRU5fU0lERUJBUicgfSksXG4gICAgW2Rpc3BhdGNoXVxuICApO1xuICBjb25zdCBjbG9zZVNpZGViYXIgPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdDTE9TRV9TSURFQkFSJyB9KSxcbiAgICBbZGlzcGF0Y2hdXG4gICk7XG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PlxuICAgICAgc3RhdGUuZGlzcGxheVNpZGViYXJcbiAgICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICdDTE9TRV9TSURFQkFSJyB9KVxuICAgICAgICA6IGRpc3BhdGNoKHsgdHlwZTogJ09QRU5fU0lERUJBUicgfSksXG4gICAgW2Rpc3BhdGNoLCBzdGF0ZS5kaXNwbGF5U2lkZWJhcl1cbiAgKTtcbiAgY29uc3Qgb3BlbkRyb3Bkb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnT1BFTl9EUk9QRE9XTicgfSksXG4gICAgW2Rpc3BhdGNoXVxuICApO1xuICBjb25zdCBjbG9zZURyb3Bkb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnQ0xPU0VfRFJPUERPV04nIH0pLFxuICAgIFtkaXNwYXRjaF1cbiAgKTtcblxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgb3BlblNpZGViYXIsXG4gICAgICBjbG9zZVNpZGViYXIsXG4gICAgICB0b2dnbGVTaWRlYmFyLFxuICAgICAgb3BlbkRyb3Bkb3duLFxuICAgICAgY2xvc2VEcm9wZG93bixcbiAgICB9KSxcbiAgICBbc3RhdGVdXG4gICk7XG5cbiAgcmV0dXJuIDxVSUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfSB7Li4ucHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVJQ29udGV4dCA9ICgpOiBhbnkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChVSUNvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1c2VVSSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVUlQcm92aWRlcmApO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IE1hbmFnZVVpQ29udGV4dDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufT4gPSAoeyBjaGlsZHJlbiB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gPFVpQ29udGV4dFByb3ZpZGVyPiB7Y2hpbGRyZW59PC9VaUNvbnRleHRQcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJ1aVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkaXNwbGF5U2lkZWJhciIsImRpc3BsYXlEcm9wZG93biIsImluaXRpYWxTdGF0ZSIsIlVJQ29udGV4dCIsIlVpQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJkaXNwYXRjaCIsIm9wZW5TaWRlYmFyIiwiY2xvc2VTaWRlYmFyIiwidG9nZ2xlU2lkZWJhciIsIm9wZW5Ecm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlVUlDb250ZXh0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJFcnJvciIsIk1hbmFnZVVpQ29udGV4dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Context.tsx\n");

/***/ })

});