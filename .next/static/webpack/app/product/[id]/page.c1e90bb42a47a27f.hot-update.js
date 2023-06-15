"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[id]/page",{

/***/ "(app-client)/./src/app/product/[id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/product/[id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NotePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_features_productSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/features/productSlice */ \"(app-client)/./src/redux/features/productSlice.ts\");\n/* harmony import */ var _hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/Reduxhooks */ \"(app-client)/./hooks/Reduxhooks.ts\");\n/* harmony import */ var _hooks_useProductsHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useProductsHook */ \"(app-client)/./hooks/useProductsHook.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NotePage() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Obtem a id do produto a partir da URL, divide a url em 2 e paga ultima parte que é a ID\n    const id = pathname.split(\"/\").pop();\n    const productsList = (0,_hooks_useProductsHook__WEBPACK_IMPORTED_MODULE_5__.useProducts)();\n    const dispatch = (0,_hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_features_productSlice__WEBPACK_IMPORTED_MODULE_3__.addProducts)(productsList));\n    }, [\n        dispatch,\n        productsList\n    ]);\n    // Filtrar a lista de produtos para obter apenas o produto com a ID da URL\n    const product = productsList.find((item)=>item.id === id);\n    // Caso o produto não seja encontrado ou ainda não tenha sido carregado\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    const handleAdditenstoCart = (event)=>{\n        _s1();\n        const [array, setnewArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n        setnewArray([\n            ...array,\n            product\n        ]);\n        console.log(array);\n    };\n    _s1(handleAdditenstoCart, \"danF84i85OHF1lyDt/ZKjeC2ybo=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>router.push(\"/\"),\n                children: \"home\"\n            }, void 0, false, {\n                fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: product.image_url,\n                        alt: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>handleAdditenstoCart,\n                children: \"Adicionar ao carrinho\"\n            }, void 0, false, {\n                fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(NotePage, \"oM7reLmj61oNJhznV0ddUaoNNMk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useProductsHook__WEBPACK_IMPORTED_MODULE_5__.useProducts,\n        _hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = NotePage;\nvar _c;\n$RefreshReg$(_c, \"NotePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9kdWN0L1tpZF0vcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDYTtBQUNHO0FBQ0U7QUFDVztBQUV6RCxTQUFTTyxXQUFXOzs7SUFDakMsTUFBTUMsV0FBV04sNERBQVdBO0lBQzVCLE1BQU1PLFNBQVNOLDBEQUFTQTtJQUN4QiwwRkFBMEY7SUFDMUYsTUFBTU8sS0FBS0YsU0FBU0csS0FBSyxDQUFDLEtBQUtDLEdBQUc7SUFFbEMsTUFBTUMsZUFBZVAsbUVBQVdBO0lBQ2hDLE1BQU1RLFdBQVdULGlFQUFjQTtJQUUvQkwsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxTQUFTVix5RUFBV0EsQ0FBQ1M7SUFDdkIsR0FBRztRQUFDQztRQUFVRDtLQUFhO0lBRTNCLDBFQUEwRTtJQUMxRSxNQUFNRSxVQUFVRixhQUFhRyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1AsRUFBRSxLQUFLQTtJQUV4RCx1RUFBdUU7SUFDdkUsSUFBSSxDQUFDSyxTQUFTO1FBQ1oscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQsTUFBTUMsdUJBQXVCLENBQUNDLFFBQTZCOztRQUN6RCxNQUFNLENBQUNDLE9BQU9DLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFZLEVBQUU7UUFDbkRxQixZQUFZO2VBQUlEO1lBQU9OO1NBQVE7UUFDL0JRLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtRQUpNRjtJQU1OLHFCQUNFLDhEQUFDRDs7MEJBQ0MsOERBQUNPO2dCQUFPQyxNQUFLO2dCQUFTQyxTQUFTLElBQU1sQixPQUFPbUIsSUFBSSxDQUFDOzBCQUFNOzs7Ozs7MEJBR3ZELDhEQUFDVjs7a0NBQ0MsOERBQUNXO2tDQUFJZCxRQUFRZSxJQUFJOzs7Ozs7a0NBQ2pCLDhEQUFDQztrQ0FBSWhCLFFBQVFpQixXQUFXOzs7Ozs7a0NBQ3hCLDhEQUFDQzt3QkFBSUMsS0FBS25CLFFBQVFvQixTQUFTO3dCQUFFQyxLQUFLckIsUUFBUWUsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUVoRCw4REFBQ0w7Z0JBQU9DLE1BQUs7Z0JBQVNDLFNBQVMsSUFBTVI7MEJBQXNCOzs7Ozs7Ozs7Ozs7QUFLakUsQ0FBQztHQTFDdUJaOztRQUNMTCx3REFBV0E7UUFDYkMsc0RBQVNBO1FBSUhHLCtEQUFXQTtRQUNmRCw2REFBY0E7OztLQVBURSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3QvW2lkXS9wYWdlLnRzeD9hYmY2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IGFkZFByb2R1Y3RzIH0gZnJvbSAnQC9yZWR1eC9mZWF0dXJlcy9wcm9kdWN0U2xpY2UnXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL1JlZHV4aG9va3MnXG5pbXBvcnQgeyBQcm9kdWN0LCB1c2VQcm9kdWN0cyB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZVByb2R1Y3RzSG9vaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZVBhZ2UoKSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAvLyBPYnRlbSBhIGlkIGRvIHByb2R1dG8gYSBwYXJ0aXIgZGEgVVJMLCBkaXZpZGUgYSB1cmwgZW0gMiBlIHBhZ2EgdWx0aW1hIHBhcnRlIHF1ZSDDqSBhIElEXG4gIGNvbnN0IGlkID0gcGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKVxuXG4gIGNvbnN0IHByb2R1Y3RzTGlzdCA9IHVzZVByb2R1Y3RzKClcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRQcm9kdWN0cyhwcm9kdWN0c0xpc3QpKVxuICB9LCBbZGlzcGF0Y2gsIHByb2R1Y3RzTGlzdF0pXG5cbiAgLy8gRmlsdHJhciBhIGxpc3RhIGRlIHByb2R1dG9zIHBhcmEgb2J0ZXIgYXBlbmFzIG8gcHJvZHV0byBjb20gYSBJRCBkYSBVUkxcbiAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzTGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClcblxuICAvLyBDYXNvIG8gcHJvZHV0byBuw6NvIHNlamEgZW5jb250cmFkbyBvdSBhaW5kYSBuw6NvIHRlbmhhIHNpZG8gY2FycmVnYWRvXG4gIGlmICghcHJvZHVjdCkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZGl0ZW5zdG9DYXJ0ID0gKGV2ZW50OiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IFthcnJheSwgc2V0bmV3QXJyYXldID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSlcbiAgICBzZXRuZXdBcnJheShbLi4uYXJyYXksIHByb2R1Y3RdKVxuICAgIGNvbnNvbGUubG9nKGFycmF5KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+XG4gICAgICAgIGhvbWVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgPGg1Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlX3VybH0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZGl0ZW5zdG9DYXJ0fT5cbiAgICAgICAgQWRpY2lvbmFyIGFvIGNhcnJpbmhvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJhZGRQcm9kdWN0cyIsInVzZUFwcERpc3BhdGNoIiwidXNlUHJvZHVjdHMiLCJOb3RlUGFnZSIsInBhdGhuYW1lIiwicm91dGVyIiwiaWQiLCJzcGxpdCIsInBvcCIsInByb2R1Y3RzTGlzdCIsImRpc3BhdGNoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiZGl2IiwiaGFuZGxlQWRkaXRlbnN0b0NhcnQiLCJldmVudCIsImFycmF5Iiwic2V0bmV3QXJyYXkiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJwdXNoIiwiaDMiLCJuYW1lIiwiaDUiLCJkZXNjcmlwdGlvbiIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/product/[id]/page.tsx\n"));

/***/ })

});