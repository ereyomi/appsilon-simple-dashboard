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

/***/ "./components/sidebar/sidebar.menu.ts":
/*!********************************************!*\
  !*** ./components/sidebar/sidebar.menu.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sideBarMenus\": function() { return /* binding */ sideBarMenus; }\n/* harmony export */ });\nvar sideBarMenus = [\n    {\n        id: 1,\n        iconName: \"overview\",\n        label: \"Overview\",\n        isActive: false\n    },\n    {\n        id: 2,\n        iconName: \"policy\",\n        label: \"Policy\",\n        isActive: false\n    },\n    {\n        id: 3,\n        iconName: \"reports\",\n        label: \"Reports\",\n        isActive: false\n    },\n    {\n        id: 4,\n        iconName: \"company\",\n        label: \"Company\",\n        isActive: false\n    },\n    {\n        id: 5,\n        iconName: \"user-account\",\n        label: \"User account\"\n    },\n    {\n        id: 6,\n        iconName: \"history\",\n        label: \"History\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5tZW51LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFPTyxJQUFNQSxZQUFZLEdBQVk7SUFDbkM7UUFDRUMsRUFBRSxFQUFFLENBQUM7UUFDTEMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNEO1FBQ0VILEVBQUUsRUFBRSxDQUFDO1FBQ0xDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCQyxLQUFLLEVBQUUsUUFBUTtRQUNmQyxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNEO1FBQ0VILEVBQUUsRUFBRSxDQUFDO1FBQ0xDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxLQUFLLEVBQUUsU0FBUztRQUNoQkMsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRDtRQUNFSCxFQUFFLEVBQUUsQ0FBQztRQUNMQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0Q7UUFDRUgsRUFBRSxFQUFFLENBQUM7UUFDTEMsUUFBUSxFQUFFLGNBQWM7UUFDeEJDLEtBQUssRUFBRSxjQUFjO0tBQ3RCO0lBQ0Q7UUFDRUYsRUFBRSxFQUFFLENBQUM7UUFDTEMsUUFBUSxFQUFFLFNBQVM7UUFDbkJDLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5tZW51LnRzP2Q2NjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgbWVudVQgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGljb25OYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlzQWN0aXZlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpZGVCYXJNZW51czogbWVudVRbXSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGljb25OYW1lOiAnb3ZlcnZpZXcnLFxuICAgIGxhYmVsOiAnT3ZlcnZpZXcnLFxuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGljb25OYW1lOiAncG9saWN5JyxcbiAgICBsYWJlbDogJ1BvbGljeScsXG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbk5hbWU6ICdyZXBvcnRzJyxcbiAgICBsYWJlbDogJ1JlcG9ydHMnLFxuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGljb25OYW1lOiAnY29tcGFueScsXG4gICAgbGFiZWw6ICdDb21wYW55JyxcbiAgICBpc0FjdGl2ZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBpY29uTmFtZTogJ3VzZXItYWNjb3VudCcsXG4gICAgbGFiZWw6ICdVc2VyIGFjY291bnQnLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgaWNvbk5hbWU6ICdoaXN0b3J5JyxcbiAgICBsYWJlbDogJ0hpc3RvcnknLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJzaWRlQmFyTWVudXMiLCJpZCIsImljb25OYW1lIiwibGFiZWwiLCJpc0FjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar/sidebar.menu.ts\n");

/***/ })

});