"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mint",{

/***/ "./pages/mint.js":
/*!***********************!*\
  !*** ./pages/mint.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction IndexPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var handleClick = function(e, path) {\n        if (path === \"/about\") {\n            console.log(\"I clicked on the About Page\");\n        }\n        if (path === \"/posts\") {\n            console.log(\"I clicked on the Posts Page\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Hello World.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                onClick: function(e) {\n                    return handleClick(e, \"/about\");\n                },\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: function(e) {\n                        return handleClick(e, \"/posts\");\n                    },\n                    children: \"Posts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n};\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNYOztBQUViLFFBQVEsQ0FBQ0UsU0FBUyxHQUFHLENBQUM7O0lBQ25DLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUV4QixHQUFLLENBQUNJLFdBQVcsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBRUMsSUFBSSxFQUFLLENBQUM7UUFDaEMsRUFBRSxFQUFFQSxJQUFJLEtBQUssQ0FBUSxTQUFFLENBQUM7WUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTZCO1FBQzNDLENBQUM7UUFDRCxFQUFFLEVBQUVGLElBQUksS0FBSyxDQUFRLFNBQUUsQ0FBQztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNkI7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLDZFQUNIQyxDQUFHOztZQUFDLENBQ1M7WUFBQyxDQUFHO3dGQUViQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQTixDQUFDO29CQUFLRCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFLENBQVE7OzBCQUFHLENBQUs7Ozs7Ozt3RkFFbkRKLGtEQUFJO2dCQUFDVyxJQUFJLEVBQUMsQ0FBRztzR0FDWEYsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLFFBQVEsQ0FBUE4sQ0FBQzt3QkFBS0QsTUFBTSxDQUFOQSxXQUFXLENBQUNDLENBQUMsRUFBRSxDQUFROzs4QkFBRyxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxRCxDQUFDO0dBdEJ1QkgsU0FBUzs7UUFDaEJGLGtEQUFTOzs7S0FERkUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50LmpzP2VmYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgcGF0aCkgPT4ge1xyXG4gICAgaWYgKHBhdGggPT09IFwiL2Fib3V0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJIGNsaWNrZWQgb24gdGhlIEFib3V0IFBhZ2VcIik7XHJcbiAgICB9XHJcbiAgICBpZiAocGF0aCA9PT0gXCIvcG9zdHNcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkkgY2xpY2tlZCBvbiB0aGUgUG9zdHMgUGFnZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBIZWxsbyBXb3JsZC57XCIgXCJ9XHJcbiAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiPiAqL31cclxuICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgXCIvYWJvdXRcIil9PkFib3V0PC9hPlxyXG4gICAgICB7LyogPC9MaW5rPntcIiBcIn0gKi99XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIFwiL3Bvc3RzXCIpfT5Qb3N0czwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMaW5rIiwiSW5kZXhQYWdlIiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJlIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJhIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});