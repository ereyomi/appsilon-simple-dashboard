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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./components/Context.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sidebar_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.menu */ \"./components/sidebar/sidebar.menu.ts\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Sidebar = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_Context__WEBPACK_IMPORTED_MODULE_2__.useUIContext)(), displaySidebar = ref.displaySidebar, closeSidebar = ref.closeSidebar;\n    var overLayCloseSidebar = function(e) {\n        closeSidebar();\n    };\n    var sidebarClose = function(e) {\n        e.stopPropagation();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(!displaySidebar && \" hidden \", \" w-screen md:w-[306px] h-screen absolute inset-0 bg-black/[0.2] z-[1000]\"),\n        onClick: overLayCloseSidebar,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: sidebarClose,\n            className: \"w-[306px] h-screen shadow-sideBarShadow bg-white pt-[30px] pb-[33px] px-[58px] flex flex-col justify-between transition-all \".concat(displaySidebar ? \"translate-x-[]\" : \"-translate-x-[100%]\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/svgs/main-logo.svg\",\n                                    alt: \"main-logo\",\n                                    height: 32,\n                                    width: 28\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg font-semibold ml-[12px]\",\n                                    children: \"Insurance Portal\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-[22px] mb-[8px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/svgs/picture.svg\",\n                                alt: \"profile picture\",\n                                height: 78,\n                                width: 78\n                            }, void 0, false, {\n                                fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-lg font-bold text-tertiary\",\n                            children: \"Hello ! Rusalba Ruiz\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-xs font-normal text-secondary my-[4px]\",\n                            children: \"Welcome Back To Your Insurance Portal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-normal text-[14px] leading-[19px] text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-secondary\",\n                                    children: \"Your Plan : \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#33D69F]\",\n                                    children: \"Free\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-[20px] mb-[50px] flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"bg-primary rounded-[7px] px-[20px] py-[8px] text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[14px] text-[14px] leading-[19px] font-bold\",\n                                        children: \"Create New Plan\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/svgs/plus.svg\",\n                                        alt: \"plus\",\n                                        height: 12,\n                                        width: 12\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col pl-[10px]\",\n                            children: _sidebar_menu__WEBPACK_IMPORTED_MODULE_4__.sideBarMenus.map(function(v) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center mb-[26px] \".concat(v.isActive ? \" text-primary \" : \" text-secondary \"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/svgs/\".concat(v.iconName, \".svg\"),\n                                            alt: v.iconName,\n                                            height: 20,\n                                            width: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"ml-[25px] font-normal text-lg text-inherit\",\n                                            children: v.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, _this1)\n                                    ]\n                                }, v.id, true, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: \"flex flex-row items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/svgs/log-out.svg\",\n                            alt: \"log-out\",\n                            height: 18,\n                            width: 18\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-[18px] leading-[24px] ml-[14px] text-secondary\",\n                            children: \"Log Out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"uWF0IK+7FlwIOFn0W6Lx+GrBxvw=\", false, function() {\n    return [\n        _Context__WEBPACK_IMPORTED_MODULE_2__.useUIContext\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUNBQXNDLENBRWhELE9BRENXLENBQUMsQ0FBQ0MsUUFBUSxHQUFHLGdCQUFnQixHQUFHLGtCQUFrQixDQUNsRDs7c0RBR0YsOERBQUN0QixtREFBSzs0Q0FDSlksR0FBRyxFQUFFLFFBQU8sQ0FBYSxNQUFJLENBQWZTLENBQUMsQ0FBQ0UsUUFBUSxFQUFDLE1BQUksQ0FBQzs0Q0FDOUJWLEdBQUcsRUFBRVEsQ0FBQyxDQUFDRSxRQUFROzRDQUNmVCxNQUFNLEVBQUUsRUFBRTs0Q0FDVkMsS0FBSyxFQUFFLEVBQUU7Ozs7O2tEQUNUO3NEQUNGLDhEQUFDRSxNQUFJOzRDQUFDUCxTQUFTLEVBQUMsNENBQTZDO3NEQUMxRFcsQ0FBQyxDQUFDRyxLQUFLOzs7OztrREFDSDs7bUNBVkZILENBQUMsQ0FBQ0ksRUFBRTs7OzswQ0FXTDs2QkFDUCxDQUFDOzs7OztpQ0FDRTs7Ozs7O3lCQUNGOzhCQUNOLDhEQUFDQyxRQUFNO29CQUFDaEIsU0FBUyxFQUFDLDJDQUEyQzs7c0NBQzNELDhEQUFDVixtREFBSzs0QkFBQ1ksR0FBRyxFQUFDLG1CQUFtQjs0QkFBQ0MsR0FBRyxFQUFDLFNBQVM7NEJBQUNDLE1BQU0sRUFBRSxFQUFFOzRCQUFFQyxLQUFLLEVBQUUsRUFBRTs7Ozs7aUNBQUk7c0NBQ3RFLDhEQUFDQyxHQUFDOzRCQUFDTixTQUFTLEVBQUMsbUVBQW1FO3NDQUFDLFNBRWpGOzs7OztpQ0FBSTs7Ozs7O3lCQUNHOzs7Ozs7aUJBQ0w7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBN0ZLUixPQUFPOztRQUM4Qkgsa0RBQVk7OztBQURqREcsS0FBQUEsT0FBTztBQStGYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnRzeD83ODY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVVJQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgbWVudVQsIHNpZGVCYXJNZW51cyB9IGZyb20gJy4vc2lkZWJhci5tZW51JztcblxuY29uc3QgU2lkZWJhcjogRnVuY3Rpb25Db21wb25lbnQ8YW55PiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgZGlzcGxheVNpZGViYXIsIGNsb3NlU2lkZWJhciB9ID0gdXNlVUlDb250ZXh0KCk7XG5cbiAgY29uc3Qgb3ZlckxheUNsb3NlU2lkZWJhciA9IChlOiBhbnkpID0+IHtcbiAgICBjbG9zZVNpZGViYXIoKTtcbiAgfTtcblxuICBjb25zdCBzaWRlYmFyQ2xvc2UgPSAoZTogYW55KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICFkaXNwbGF5U2lkZWJhciAmJiAnIGhpZGRlbiAnXG4gICAgICB9IHctc2NyZWVuIG1kOnctWzMwNnB4XSBoLXNjcmVlbiBhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrL1swLjJdIHotWzEwMDBdYH1cbiAgICAgIG9uQ2xpY2s9e292ZXJMYXlDbG9zZVNpZGViYXJ9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXtzaWRlYmFyQ2xvc2V9XG4gICAgICAgIGNsYXNzTmFtZT17YHctWzMwNnB4XSBoLXNjcmVlbiBzaGFkb3ctc2lkZUJhclNoYWRvdyBiZy13aGl0ZSBwdC1bMzBweF0gcGItWzMzcHhdIHB4LVs1OHB4XSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgIGRpc3BsYXlTaWRlYmFyID8gJ3RyYW5zbGF0ZS14LVtdJyA6ICctdHJhbnNsYXRlLXgtWzEwMCVdJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz0nL3N2Z3MvbWFpbi1sb2dvLnN2ZydcbiAgICAgICAgICAgICAgYWx0PSdtYWluLWxvZ28nXG4gICAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgIHdpZHRoPXsyOH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCBtbC1bMTJweF0nPkluc3VyYW5jZSBQb3J0YWw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXQtWzIycHhdIG1iLVs4cHhdJz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9Jy9zdmdzL3BpY3R1cmUuc3ZnJ1xuICAgICAgICAgICAgICBhbHQ9J3Byb2ZpbGUgcGljdHVyZSdcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3OH1cbiAgICAgICAgICAgICAgd2lkdGg9ezc4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtbGcgZm9udC1ib2xkIHRleHQtdGVydGlhcnknPlxuICAgICAgICAgICAgSGVsbG8gISBSdXNhbGJhIFJ1aXpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbm9ybWFsIHRleHQtc2Vjb25kYXJ5IG15LVs0cHhdJz5cbiAgICAgICAgICAgIFdlbGNvbWUgQmFjayBUbyBZb3VyIEluc3VyYW5jZSBQb3J0YWxcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW5vcm1hbCB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxOXB4XSB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc2Vjb25kYXJ5Jz5Zb3VyIFBsYW4gOiA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtWyMzM0Q2OUZdJz5GcmVlPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtWzIwcHhdIG1iLVs1MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXByaW1hcnkgcm91bmRlZC1bN3B4XSBweC1bMjBweF0gcHktWzhweF0gdGV4dC13aGl0ZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtci1bMTRweF0gdGV4dC1bMTRweF0gbGVhZGluZy1bMTlweF0gZm9udC1ib2xkJz5cbiAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IFBsYW5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvc3Zncy9wbHVzLnN2ZycgYWx0PSdwbHVzJyBoZWlnaHQ9ezEyfSB3aWR0aD17MTJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwbC1bMTBweF0nPlxuICAgICAgICAgICAge3NpZGVCYXJNZW51cy5tYXAoKHY6IG1lbnVUKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBtYi1bMjZweF0gJHtcbiAgICAgICAgICAgICAgICAgIHYuaXNBY3RpdmUgPyAnIHRleHQtcHJpbWFyeSAnIDogJyB0ZXh0LXNlY29uZGFyeSAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAga2V5PXt2LmlkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2Avc3Zncy8ke3YuaWNvbk5hbWV9LnN2Z2B9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3YuaWNvbk5hbWV9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtbC1bMjVweF0gZm9udC1ub3JtYWwgdGV4dC1sZyAgdGV4dC1pbmhlcml0Jz5cbiAgICAgICAgICAgICAgICAgIHt2LmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL3N2Z3MvbG9nLW91dC5zdmcnIGFsdD0nbG9nLW91dCcgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LVsxOHB4XSBsZWFkaW5nLVsyNHB4XSBtbC1bMTRweF0gdGV4dC1zZWNvbmRhcnknPlxuICAgICAgICAgICAgTG9nIE91dFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VVSUNvbnRleHQiLCJJbWFnZSIsInNpZGVCYXJNZW51cyIsIlNpZGViYXIiLCJkaXNwbGF5U2lkZWJhciIsImNsb3NlU2lkZWJhciIsIm92ZXJMYXlDbG9zZVNpZGViYXIiLCJlIiwic2lkZWJhckNsb3NlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicCIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwibWFwIiwidiIsImlzQWN0aXZlIiwiaWNvbk5hbWUiLCJsYWJlbCIsImlkIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar/sidebar.tsx\n");

/***/ })

});