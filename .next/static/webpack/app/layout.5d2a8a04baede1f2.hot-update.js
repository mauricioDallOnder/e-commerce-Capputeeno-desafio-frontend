"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/components/cartTotalAmount.tsx":
/*!********************************************!*\
  !*** ./src/components/cartTotalAmount.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartTotalAmount; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_icons_cartIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/cartIcon */ \"(app-client)/./src/assets/icons/cartIcon.tsx\");\n/* harmony import */ var _hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/Reduxhooks */ \"(app-client)/./hooks/Reduxhooks.ts\");\n/* harmony import */ var _styles_cartStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/cartStyle */ \"(app-client)/./styles/cartStyle.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CartTotalAmount() {\n    _s();\n    const count = (0,_hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.counter.cartQuantity);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_cartStyle__WEBPACK_IMPORTED_MODULE_3__.CartStyle, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/cart\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_cartIcon__WEBPACK_IMPORTED_MODULE_1__.CartIcon, {}, void 0, false, {\n                    fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/components/cartTotalAmount.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                count > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_cartStyle__WEBPACK_IMPORTED_MODULE_3__.Elipse, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: count\n                    }, void 0, false, {\n                        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/components/cartTotalAmount.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/components/cartTotalAmount.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this) : \"\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/components/cartTotalAmount.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/components/cartTotalAmount.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(CartTotalAmount, \"HZtyjzN294FsMkUOEFgta8Js+Cs=\", false, function() {\n    return [\n        _hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = CartTotalAmount;\nvar _c;\n$RefreshReg$(_c, \"CartTotalAmount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvY2FydFRvdGFsQW1vdW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSTtBQUNHO0FBQzlCO0FBRWIsU0FBU0ssa0JBQWtCOztJQUN4QyxNQUFNQyxRQUFRTCxpRUFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxPQUFPLENBQUNDLFlBQVk7SUFFbEUscUJBQ0UsOERBQUNQLHdEQUFTQTtrQkFDUiw0RUFBQ0Usa0RBQUlBO1lBQUNNLE1BQU07OzhCQUNWLDhEQUFDViw0REFBUUE7Ozs7O2dCQUNSTSxRQUFRLGtCQUNQLDhEQUFDSCxxREFBTUE7OEJBQ0wsNEVBQUNRO2tDQUFNTDs7Ozs7Ozs7OzsyQkFHVCxFQUNEOzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBakJ1QkQ7O1FBQ1JKLDZEQUFjQTs7O0tBRE5JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnRUb3RhbEFtb3VudC50c3g/YWNhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0SWNvbiB9IGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jYXJ0SWNvbidcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvUmVkdXhob29rcydcbmltcG9ydCB7IENhcnRTdHlsZSwgRWxpcHNlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL2NhcnRTdHlsZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFRvdGFsQW1vdW50KCkge1xuICBjb25zdCBjb3VudCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY291bnRlci5jYXJ0UXVhbnRpdHkpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydFN0eWxlPlxuICAgICAgPExpbmsgaHJlZj17Jy9jYXJ0J30+XG4gICAgICAgIDxDYXJ0SWNvbiAvPlxuICAgICAgICB7Y291bnQgPiAwID8gKFxuICAgICAgICAgIDxFbGlwc2U+XG4gICAgICAgICAgICA8c3Bhbj57Y291bnR9PC9zcGFuPlxuICAgICAgICAgIDwvRWxpcHNlPlxuICAgICAgICApIDogKFxuICAgICAgICAgICcnXG4gICAgICAgICl9XG4gICAgICA8L0xpbms+XG4gICAgPC9DYXJ0U3R5bGU+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJ0SWNvbiIsInVzZUFwcFNlbGVjdG9yIiwiQ2FydFN0eWxlIiwiRWxpcHNlIiwiTGluayIsIkNhcnRUb3RhbEFtb3VudCIsImNvdW50Iiwic3RhdGUiLCJjb3VudGVyIiwiY2FydFF1YW50aXR5IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/cartTotalAmount.tsx\n"));

/***/ }),

/***/ "(app-client)/./src/redux/features/ShoppingCartSlice.ts":
/*!*************************************************!*\
  !*** ./src/redux/features/ShoppingCartSlice.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": function() { return /* binding */ counter; },\n/* harmony export */   \"decrement\": function() { return /* binding */ decrement; },\n/* harmony export */   \"decrementByAmount\": function() { return /* binding */ decrementByAmount; },\n/* harmony export */   \"increment\": function() { return /* binding */ increment; },\n/* harmony export */   \"incrementByAmount\": function() { return /* binding */ incrementByAmount; },\n/* harmony export */   \"reset\": function() { return /* binding */ reset; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-client)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    cartQuantity: 0\n};\nconst counter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        reset: ()=>initialState,\n        increment: (state)=>{\n            state.cartQuantity += 1;\n        },\n        decrement: (state)=>{\n            if (state.cartQuantity < 1) {\n                state.cartQuantity = 0;\n            } else {\n                state.cartQuantity -= 1;\n            }\n        },\n        incrementByAmount: (state, action)=>{\n            state.cartQuantity += action.payload;\n        },\n        decrementByAmount: (state, action)=>{\n            state.cartQuantity -= action.payload;\n        }\n    }\n});\nconst { increment , incrementByAmount , decrement , decrementByAmount , reset  } = counter.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (counter.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3JlZHV4L2ZlYXR1cmVzL1Nob3BwaW5nQ2FydFNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkQ7QUFNN0QsTUFBTUMsZUFBZTtJQUNuQkMsY0FBYztBQUNoQjtBQUVPLE1BQU1DLFVBQVVILDZEQUFXQSxDQUFDO0lBQ2pDSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsT0FBTyxJQUFNTDtRQUNiTSxXQUFXLENBQUNDLFFBQVU7WUFDcEJBLE1BQU1OLFlBQVksSUFBSTtRQUN4QjtRQUNBTyxXQUFXLENBQUNELFFBQVU7WUFDcEIsSUFBSUEsTUFBTU4sWUFBWSxHQUFHLEdBQUc7Z0JBQzFCTSxNQUFNTixZQUFZLEdBQUc7WUFDdkIsT0FBTztnQkFDTE0sTUFBTU4sWUFBWSxJQUFJO1lBQ3hCLENBQUM7UUFDSDtRQUNBUSxtQkFBbUIsQ0FBQ0YsT0FBT0csU0FBa0M7WUFDM0RILE1BQU1OLFlBQVksSUFBSVMsT0FBT0MsT0FBTztRQUN0QztRQUNBQyxtQkFBbUIsQ0FBQ0wsT0FBT0csU0FBa0M7WUFDM0RILE1BQU1OLFlBQVksSUFBSVMsT0FBT0MsT0FBTztRQUN0QztJQUNGO0FBQ0YsR0FBRTtBQUVLLE1BQU0sRUFDWEwsVUFBUyxFQUNURyxrQkFBaUIsRUFDakJELFVBQVMsRUFDVEksa0JBQWlCLEVBQ2pCUCxNQUFLLEVBQ04sR0FBR0gsUUFBUVcsT0FBTztBQUNuQiwrREFBZVgsUUFBUVksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvZmVhdHVyZXMvU2hvcHBpbmdDYXJ0U2xpY2UudHM/M2Q0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbnR5cGUgQ291bnRlclN0YXRlID0ge1xuICBjYXJ0UXVhbnRpdHk6IG51bWJlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhcnRRdWFudGl0eTogMCxcbn0gYXMgQ291bnRlclN0YXRlXG5cbmV4cG9ydCBjb25zdCBjb3VudGVyID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY291bnRlcicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICByZXNldDogKCkgPT4gaW5pdGlhbFN0YXRlLFxuICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5jYXJ0UXVhbnRpdHkgKz0gMVxuICAgIH0sXG4gICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5jYXJ0UXVhbnRpdHkgPCAxKSB7XG4gICAgICAgIHN0YXRlLmNhcnRRdWFudGl0eSA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmNhcnRRdWFudGl0eSAtPSAxXG4gICAgICB9XG4gICAgfSxcbiAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgICAgc3RhdGUuY2FydFF1YW50aXR5ICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBkZWNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgICAgc3RhdGUuY2FydFF1YW50aXR5IC09IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCB7XG4gIGluY3JlbWVudCxcbiAgaW5jcmVtZW50QnlBbW91bnQsXG4gIGRlY3JlbWVudCxcbiAgZGVjcmVtZW50QnlBbW91bnQsXG4gIHJlc2V0LFxufSA9IGNvdW50ZXIuYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgY291bnRlci5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjYXJ0UXVhbnRpdHkiLCJjb3VudGVyIiwibmFtZSIsInJlZHVjZXJzIiwicmVzZXQiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImRlY3JlbWVudCIsImluY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9uIiwicGF5bG9hZCIsImRlY3JlbWVudEJ5QW1vdW50IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/redux/features/ShoppingCartSlice.ts\n"));

/***/ })

});