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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./components/Context.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sidebar_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.menu */ \"./components/sidebar/sidebar.menu.ts\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar overLayCloseSidebar = function(e) {\n    console.log(e);\n    e.stopPropagation();\n};\nvar SidebarClose = function(e) {\n    console.log(e);\n    e.stopPropagation();\n};\n_c = SidebarClose;\nvar Sidebar = function() {\n    var _this1 = _this;\n    _s();\n    var displaySidebar = (0,_Context__WEBPACK_IMPORTED_MODULE_2__.useUIContext)().displaySidebar;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(!displaySidebar && \" hidden \", \" w-screen md:w-[306px] h-screen absolute inset-0 bg-black/[0.4] z-[1000]\"),\n        onClick: closeSidebar,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"!w-[306px] h-screen shadow-sideBarShadow bg-white pt-[30px] pb-[33px] px-[58px] flex flex-col justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/svgs/main-logo.svg\",\n                                    alt: \"main-logo\",\n                                    height: 32,\n                                    width: 28\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg font-semibold ml-[12px]\",\n                                    children: \"Insurance Portal\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-[22px] mb-[8px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/svgs/picture.svg\",\n                                alt: \"profile picture\",\n                                height: 78,\n                                width: 78\n                            }, void 0, false, {\n                                fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-lg font-bold text-[#888CB7]\",\n                            children: \"Hello ! Rusalba Ruiz\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-xs font-normal text-[#A2A4B9] my-[4px]\",\n                            children: \"Welcome Back To Your Insurance Portal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-normal text-[14px] leading-[19px] text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#A2A4B9]\",\n                                    children: \"Your Plan : \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#33D69F]\",\n                                    children: \"Free\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-[20px] mb-[50px] flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"bg-primary rounded-[7px] px-[20px] py-[8px] text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-[14px] text-[14px] leading-[19px] font-bold\",\n                                        children: \"Create New Plan\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: \"/svgs/plus.svg\",\n                                        alt: \"plus\",\n                                        height: 12,\n                                        width: 12\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col pl-[10px]\",\n                            children: _sidebar_menu__WEBPACK_IMPORTED_MODULE_4__.sideBarMenus.map(function(v) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center mb-[26px] \".concat(v.isActive ? \" text-primary \" : \" text-secondary \"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"/svgs/\".concat(v.iconName, \".svg\"),\n                                            alt: v.iconName,\n                                            height: 20,\n                                            width: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"ml-[25px] font-normal text-lg text-inherit\",\n                                            children: v.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, _this1)\n                                    ]\n                                }, v.id, true, {\n                                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: \"flex flex-row items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/svgs/log-out.svg\",\n                            alt: \"log-out\",\n                            height: 18,\n                            width: 18\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-[18px] leading-[24px] ml-[14px] text-secondary\",\n                            children: \"Log Out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ereyomioluwaseyi/Documents/my-github/Appsilon/components/sidebar/sidebar.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"TE15pLe0esopY/uqc6kv6kcvTmM=\", false, function() {\n    return [\n        _Context__WEBPACK_IMPORTED_MODULE_2__.useUIContext\n    ];\n});\n_c1 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"SidebarClose\");\n$RefreshReg$(_c1, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RENZLENBQUMsQ0FBQ0MsUUFBUSxHQUFHLGdCQUFnQixHQUFHLGtCQUFrQixDQUNsRDs7c0RBR0YsOERBQUN4QixtREFBSzs0Q0FDSmMsR0FBRyxFQUFFLFFBQU8sQ0FBYSxNQUFJLENBQWZTLENBQUMsQ0FBQ0UsUUFBUSxFQUFDLE1BQUksQ0FBQzs0Q0FDOUJWLEdBQUcsRUFBRVEsQ0FBQyxDQUFDRSxRQUFROzRDQUNmVCxNQUFNLEVBQUUsRUFBRTs0Q0FDVkMsS0FBSyxFQUFFLEVBQUU7Ozs7O2tEQUNUO3NEQUNGLDhEQUFDRSxNQUFJOzRDQUFDUixTQUFTLEVBQUMsNENBQTZDO3NEQUMxRFksQ0FBQyxDQUFDRyxLQUFLOzs7OztrREFDSDs7bUNBVkZILENBQUMsQ0FBQ0ksRUFBRTs7OzswQ0FXTDs2QkFDUCxDQUFDOzs7OztpQ0FDRTs7Ozs7O3lCQUNGOzhCQUNOLDhEQUFDQyxRQUFNO29CQUFDakIsU0FBUyxFQUFDLDJDQUEyQzs7c0NBQzNELDhEQUFDWCxtREFBSzs0QkFBQ2MsR0FBRyxFQUFDLG1CQUFtQjs0QkFBQ0MsR0FBRyxFQUFDLFNBQVM7NEJBQUNDLE1BQU0sRUFBRSxFQUFFOzRCQUFFQyxLQUFLLEVBQUUsRUFBRTs7Ozs7aUNBQUk7c0NBQ3RFLDhEQUFDQyxHQUFDOzRCQUFDUCxTQUFTLEVBQUMsbUVBQW1FO3NDQUFDLFNBRWpGOzs7OztpQ0FBSTs7Ozs7O3lCQUNHOzs7Ozs7aUJBQ0w7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBL0VLSCxPQUFPOztRQUNnQlQsa0RBQVk7OztBQURuQ1MsTUFBQUEsT0FBTztBQWlGYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnRzeD83ODY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVVJQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgbWVudVQsIHNpZGVCYXJNZW51cyB9IGZyb20gJy4vc2lkZWJhci5tZW51JztcblxuY29uc3Qgb3ZlckxheUNsb3NlU2lkZWJhciA9IChlOiBhbnkpID0+IHtcbiAgY29uc29sZS5sb2coZSk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5jb25zdCBTaWRlYmFyQ2xvc2UgPSAoZTogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGUpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY29uc3QgU2lkZWJhcjogRnVuY3Rpb25Db21wb25lbnQ8YW55PiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgZGlzcGxheVNpZGViYXIgfSA9IHVzZVVJQ29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICFkaXNwbGF5U2lkZWJhciAmJiAnIGhpZGRlbiAnXG4gICAgICB9IHctc2NyZWVuIG1kOnctWzMwNnB4XSBoLXNjcmVlbiBhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrL1swLjRdIHotWzEwMDBdYH1cbiAgICAgIG9uQ2xpY2s9e2Nsb3NlU2lkZWJhcn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIXctWzMwNnB4XSBoLXNjcmVlbiBzaGFkb3ctc2lkZUJhclNoYWRvdyBiZy13aGl0ZSBwdC1bMzBweF0gcGItWzMzcHhdIHB4LVs1OHB4XSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9Jy9zdmdzL21haW4tbG9nby5zdmcnXG4gICAgICAgICAgICAgIGFsdD0nbWFpbi1sb2dvJ1xuICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICB3aWR0aD17Mjh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWwtWzEycHhdJz5JbnN1cmFuY2UgUG9ydGFsPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LVsyMnB4XSBtYi1bOHB4XSc+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPScvc3Zncy9waWN0dXJlLnN2ZydcbiAgICAgICAgICAgICAgYWx0PSdwcm9maWxlIHBpY3R1cmUnXG4gICAgICAgICAgICAgIGhlaWdodD17Nzh9XG4gICAgICAgICAgICAgIHdpZHRoPXs3OH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LVsjODg4Q0I3XSc+XG4gICAgICAgICAgICBIZWxsbyAhIFJ1c2FsYmEgUnVpelxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQteHMgZm9udC1ub3JtYWwgdGV4dC1bI0EyQTRCOV0gbXktWzRweF0nPlxuICAgICAgICAgICAgV2VsY29tZSBCYWNrIFRvIFlvdXIgSW5zdXJhbmNlIFBvcnRhbFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbm9ybWFsIHRleHQtWzE0cHhdIGxlYWRpbmctWzE5cHhdIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bI0EyQTRCOV0nPllvdXIgUGxhbiA6IDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bIzMzRDY5Rl0nPkZyZWU8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC1bMjBweF0gbWItWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctcHJpbWFyeSByb3VuZGVkLVs3cHhdIHB4LVsyMHB4XSBweS1bOHB4XSB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21yLVsxNHB4XSB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsxOXB4XSBmb250LWJvbGQnPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgUGxhblxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9zdmdzL3BsdXMuc3ZnJyBhbHQ9J3BsdXMnIGhlaWdodD17MTJ9IHdpZHRoPXsxMn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHBsLVsxMHB4XSc+XG4gICAgICAgICAgICB7c2lkZUJhck1lbnVzLm1hcCgodjogbWVudVQpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1iLVsyNnB4XSAke1xuICAgICAgICAgICAgICAgICAgdi5pc0FjdGl2ZSA/ICcgdGV4dC1wcmltYXJ5ICcgOiAnIHRleHQtc2Vjb25kYXJ5ICdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBrZXk9e3YuaWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17YC9zdmdzLyR7di5pY29uTmFtZX0uc3ZnYH1cbiAgICAgICAgICAgICAgICAgIGFsdD17di5pY29uTmFtZX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLVsyNXB4XSBmb250LW5vcm1hbCB0ZXh0LWxnICB0ZXh0LWluaGVyaXQnPlxuICAgICAgICAgICAgICAgICAge3YubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvc3Zncy9sb2ctb3V0LnN2ZycgYWx0PSdsb2ctb3V0JyBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtWzE4cHhdIGxlYWRpbmctWzI0cHhdIG1sLVsxNHB4XSB0ZXh0LXNlY29uZGFyeSc+XG4gICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVVJQ29udGV4dCIsIkltYWdlIiwic2lkZUJhck1lbnVzIiwib3ZlckxheUNsb3NlU2lkZWJhciIsImUiLCJjb25zb2xlIiwibG9nIiwic3RvcFByb3BhZ2F0aW9uIiwiU2lkZWJhckNsb3NlIiwiU2lkZWJhciIsImRpc3BsYXlTaWRlYmFyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImNsb3NlU2lkZWJhciIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicCIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwibWFwIiwidiIsImlzQWN0aXZlIiwiaWNvbk5hbWUiLCJsYWJlbCIsImlkIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar/sidebar.tsx\n");

/***/ })

});