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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NotePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_features_productSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/features/productSlice */ \"(app-client)/./src/redux/features/productSlice.ts\");\n/* harmony import */ var _hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/Reduxhooks */ \"(app-client)/./hooks/Reduxhooks.ts\");\n/* harmony import */ var _hooks_useProductsHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useProductsHook */ \"(app-client)/./hooks/useProductsHook.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NotePage() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Obtem a id do produto a partir da URL, divide a url em 2 e paga ultima parte que é a ID\n    const id = pathname.split(\"/\").pop();\n    const productsList = (0,_hooks_useProductsHook__WEBPACK_IMPORTED_MODULE_5__.useProducts)();\n    const dispatch = (0,_hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_features_productSlice__WEBPACK_IMPORTED_MODULE_3__.addProducts)(productsList));\n    }, [\n        dispatch,\n        productsList\n    ]);\n    // Filtrar a lista de produtos para obter apenas o produto com a ID da URL\n    const product = productsList.find((item)=>item.id === id);\n    // Caso o produto não seja encontrado ou ainda não tenha sido carregado\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    const handleAdditenstoCart = (event)=>{\n        _s1();\n        const [array, setnewArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n        setnewArray([\n            ...array,\n            product\n        ]);\n    };\n    _s1(handleAdditenstoCart, \"danF84i85OHF1lyDt/ZKjeC2ybo=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>router.push(\"/\"),\n                children: \"home\"\n            }, void 0, false, {\n                fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: product.image_url,\n                        alt: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>\"\",\n                children: \"Adicionar ao carrinho\"\n            }, void 0, false, {\n                fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauri/Desktop/projetos/desafio-frontend/desafio-frontend/desafio-frontend/src/app/product/[id]/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(NotePage, \"oM7reLmj61oNJhznV0ddUaoNNMk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useProductsHook__WEBPACK_IMPORTED_MODULE_5__.useProducts,\n        _hooks_Reduxhooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = NotePage;\nvar _c;\n$RefreshReg$(_c, \"NotePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9kdWN0L1tpZF0vcGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDYTtBQUNHO0FBQ0U7QUFDVztBQUV6RCxTQUFTTyxXQUFXOzs7SUFDakMsTUFBTUMsV0FBV04sNERBQVdBO0lBQzVCLE1BQU1PLFNBQVNOLDBEQUFTQTtJQUN4QiwwRkFBMEY7SUFDMUYsTUFBTU8sS0FBS0YsU0FBU0csS0FBSyxDQUFDLEtBQUtDLEdBQUc7SUFFbEMsTUFBTUMsZUFBZVAsbUVBQVdBO0lBQ2hDLE1BQU1RLFdBQVdULGlFQUFjQTtJQUUvQkwsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxTQUFTVix5RUFBV0EsQ0FBQ1M7SUFDdkIsR0FBRztRQUFDQztRQUFVRDtLQUFhO0lBRTNCLDBFQUEwRTtJQUMxRSxNQUFNRSxVQUFVRixhQUFhRyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1AsRUFBRSxLQUFLQTtJQUV4RCx1RUFBdUU7SUFDdkUsSUFBSSxDQUFDSyxTQUFTO1FBQ1oscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQsTUFBTUMsdUJBQXVCLENBQUNDLFFBQTZCOztRQUN6RCxNQUFNLENBQUNDLE9BQU9DLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFZLEVBQUU7UUFDbkRxQixZQUFZO2VBQUlEO1lBQU9OO1NBQVE7SUFDakM7UUFITUk7SUFLTixxQkFDRSw4REFBQ0Q7OzBCQUNDLDhEQUFDSztnQkFBT0MsTUFBSztnQkFBU0MsU0FBUyxJQUFNaEIsT0FBT2lCLElBQUksQ0FBQzswQkFBTTs7Ozs7OzBCQUd2RCw4REFBQ1I7O2tDQUNDLDhEQUFDUztrQ0FBSVosUUFBUWEsSUFBSTs7Ozs7O2tDQUNqQiw4REFBQ0M7a0NBQUlkLFFBQVFlLFdBQVc7Ozs7OztrQ0FDeEIsOERBQUNDO3dCQUFJQyxLQUFLakIsUUFBUWtCLFNBQVM7d0JBQUVDLEtBQUtuQixRQUFRYSxJQUFJOzs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDTDtnQkFBT0MsTUFBSztnQkFBU0MsU0FBUyxJQUFNOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFLL0MsQ0FBQztHQXpDdUJsQjs7UUFDTEwsd0RBQVdBO1FBQ2JDLHNEQUFTQTtRQUlIRywrREFBV0E7UUFDZkQsNkRBQWNBOzs7S0FQVEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0L1tpZF0vcGFnZS50c3g/YWJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyBhZGRQcm9kdWN0cyB9IGZyb20gJ0AvcmVkdXgvZmVhdHVyZXMvcHJvZHVjdFNsaWNlJ1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy9SZWR1eGhvb2tzJ1xuaW1wb3J0IHsgUHJvZHVjdCwgdXNlUHJvZHVjdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VQcm9kdWN0c0hvb2snXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVQYWdlKCkge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgLy8gT2J0ZW0gYSBpZCBkbyBwcm9kdXRvIGEgcGFydGlyIGRhIFVSTCwgZGl2aWRlIGEgdXJsIGVtIDIgZSBwYWdhIHVsdGltYSBwYXJ0ZSBxdWUgw6kgYSBJRFxuICBjb25zdCBpZCA9IHBhdGhuYW1lLnNwbGl0KCcvJykucG9wKClcblxuICBjb25zdCBwcm9kdWN0c0xpc3QgPSB1c2VQcm9kdWN0cygpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkUHJvZHVjdHMocHJvZHVjdHNMaXN0KSlcbiAgfSwgW2Rpc3BhdGNoLCBwcm9kdWN0c0xpc3RdKVxuXG4gIC8vIEZpbHRyYXIgYSBsaXN0YSBkZSBwcm9kdXRvcyBwYXJhIG9idGVyIGFwZW5hcyBvIHByb2R1dG8gY29tIGEgSUQgZGEgVVJMXG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c0xpc3QuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpXG5cbiAgLy8gQ2FzbyBvIHByb2R1dG8gbsOjbyBzZWphIGVuY29udHJhZG8gb3UgYWluZGEgbsOjbyB0ZW5oYSBzaWRvIGNhcnJlZ2Fkb1xuICBpZiAoIXByb2R1Y3QpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICBjb25zdCBoYW5kbGVBZGRpdGVuc3RvQ2FydCA9IChldmVudDogSFRNTEJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBbYXJyYXksIHNldG5ld0FycmF5XSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pXG4gICAgc2V0bmV3QXJyYXkoWy4uLmFycmF5LCBwcm9kdWN0XSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlxuICAgICAgICBob21lXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XG4gICAgICAgIDxoNT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L2g1PlxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZV91cmx9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiAnJ30+XG4gICAgICAgIEFkaWNpb25hciBhbyBjYXJyaW5ob1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiYWRkUHJvZHVjdHMiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVByb2R1Y3RzIiwiTm90ZVBhZ2UiLCJwYXRobmFtZSIsInJvdXRlciIsImlkIiwic3BsaXQiLCJwb3AiLCJwcm9kdWN0c0xpc3QiLCJkaXNwYXRjaCIsInByb2R1Y3QiLCJmaW5kIiwiaXRlbSIsImRpdiIsImhhbmRsZUFkZGl0ZW5zdG9DYXJ0IiwiZXZlbnQiLCJhcnJheSIsInNldG5ld0FycmF5IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJwdXNoIiwiaDMiLCJuYW1lIiwiaDUiLCJkZXNjcmlwdGlvbiIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/product/[id]/page.tsx\n"));

/***/ })

});