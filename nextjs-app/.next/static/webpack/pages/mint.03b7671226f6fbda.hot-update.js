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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n// import Link from \"next/link\";\nfunction IndexPage() {\n    _s();\n    var onClickConnect = function() {\n        var _ref = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        onboardButton.innerText = 'Onboarding in progress';\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 4:\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    6\n                ]\n            ]);\n        }));\n        return function onClickConnect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var testClick = function(e) {\n        console.log('Test console print');\n    };\n    var runOnLoad = function(e) {\n        console.log('This should print on load');\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Mint Page.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"connectMetamask\",\n                type: \"button\",\n                onClick: function(e) {\n                    return onClickConnect();\n                },\n                children: \"Connect Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this));\n};\n_s(IndexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEMsRUFBNkU7QUFDN0UsRUFBZ0M7QUFFakIsUUFBUSxDQUFDRSxTQUFTLEdBQUcsQ0FBQzs7SUFHbkMsR0FBSyxDQUFDQyxjQUFjO29NQUFHLFFBQVEsV0FBSSxDQUFDOzs7O3dCQUNsQ0MsYUFBYSxDQUFDQyxTQUFTLEdBQUcsQ0FBd0I7OzsrQkFJMUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFxQjt3QkFBQyxDQUFDOzs7Ozs7O3dCQUV4REMsT0FBTyxDQUFDQyxLQUFLOzs7Ozs7Ozs7OztRQUdqQixDQUFDO3dCQVZLUCxjQUFjOzs7O0lBWXBCLEdBQUssQ0FBQ1EsU0FBUyxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDeEJILE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLENBQW9CO0lBQ2xDLENBQUM7SUFFRCxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBGLENBQUMsRUFBSyxDQUFDO1FBQ3hCSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxDQUEyQjtJQUN6QyxDQUFDO0lBQ0RaLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZmEsU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLDZFQUNIQyxDQUFHOztZQUFDLENBQ087WUFBQyxDQUFHO3dGQUNiQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBaUI7Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQUCxDQUFDO29CQUFLVCxNQUFNLENBQU5BLGNBQWM7OzBCQUFJLENBQWdCOzs7Ozs7Ozs7Ozs7QUFLbkcsQ0FBQztHQWpDdUJELFNBQVM7S0FBVEEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50LmpzP2VmYmQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBNZXRhTWFza09uYm9hcmRpbmcsIHsgZm9yd2FyZGVyT3JpZ2luIH0gZnJvbSAnQG1ldGFtYXNrL29uYm9hcmRpbmcnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICBcclxuXHJcbiAgY29uc3Qgb25DbGlja0Nvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBvbmJvYXJkQnV0dG9uLmlubmVyVGV4dCA9ICdPbmJvYXJkaW5nIGluIHByb2dyZXNzJztcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFdpbGwgb3BlbiB0aGUgTWV0YU1hc2sgVUlcclxuICAgICAgLy8gWW91IHNob3VsZCBkaXNhYmxlIHRoaXMgYnV0dG9uIHdoaWxlIHRoZSByZXF1ZXN0IGlzIHBlbmRpbmchXHJcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0ZXN0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1Rlc3QgY29uc29sZSBwcmludCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcnVuT25Mb2FkID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdUaGlzIHNob3VsZCBwcmludCBvbiBsb2FkJylcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJ1bk9uTG9hZCgpO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBNaW50IFBhZ2Uue1wiIFwifVxyXG4gICAgICA8YnV0dG9uIGlkPSdjb25uZWN0TWV0YW1hc2snIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0Nvbm5lY3QoKX0+Q29ubmVjdCBNZXRhbWFzazwvYnV0dG9uPlxyXG4gICAgICB7LyogPGJ1dHRvbiBpZD0nZ2V0QWNjb3VudHMnIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gdGVzdENsaWNrKGUpfT5HZXQgQWNjb3VudHM8L2J1dHRvbj4gICAgICAgKi99XHJcbiAgICAgIHsvKiA8YnV0dG9uIGlkPSdnZXRBY2NvdW50c1Jlc3VsdCcgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX0+R2V0IEFjY291bnRzIFJlc3VsdHM8L2J1dHRvbj4gICAgICAgKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSW5kZXhQYWdlIiwib25DbGlja0Nvbm5lY3QiLCJvbmJvYXJkQnV0dG9uIiwiaW5uZXJUZXh0IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImVycm9yIiwidGVzdENsaWNrIiwiZSIsImxvZyIsInJ1bk9uTG9hZCIsImRpdiIsImJ1dHRvbiIsImlkIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});