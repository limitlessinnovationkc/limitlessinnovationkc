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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n// import Link from \"next/link\";\nfunction IndexPage() {\n    _s();\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectButton;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        connectButton = document.getElementById('connectMetamask');\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 5:\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.error(_ctx.t0);\n                    case 10:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    7\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    ;\n    var testClick = function(e) {\n        console.log('Test console print');\n    };\n    var runOnLoad = function(e) {\n        var connectButton = document.getElementById('connectMetamask');\n        if (typeof web3 !== 'undefined') {\n            console.log('MetaMask is installed');\n        } else {\n            console.log('MetaMask is not installed');\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Mint Page.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"connectMetamask\",\n                type: \"button\",\n                onClick: function(e) {\n                    return onClickConnect();\n                },\n                children: \"Connect Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n};\n_s(IndexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEMsRUFBNkU7QUFDN0UsRUFBZ0M7QUFFakIsUUFBUSxDQUFDRSxTQUFTLEdBQUcsQ0FBQzs7YUFFcEJDLGNBQWM7ZUFBZEEsZUFBYzs7YUFBZEEsZUFBYztRQUFkQSxlQUFjLG9MQUE3QixRQUFRLFdBQXdCLENBQUM7Z0JBQ3pCQyxhQUFhOzs7O3dCQUFiQSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQWlCO3dCQUMvREYsYUFBYSxDQUFDRyxTQUFTLEdBQUcsQ0FBZ0I7OzsrQkFJbENDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFxQjt3QkFBQyxDQUFDOzs7Ozs7O3dCQUV4REMsT0FBTyxDQUFDQyxLQUFLOzt3QkFHZlIsYUFBYSxDQUFDRyxTQUFTLEdBQUcsQ0FBVzt3QkFDckNILGFBQWEsQ0FBQ1MsUUFBUSxHQUFHLElBQUk7Ozs7Ozs7Ozs7O1FBQy9CLENBQUM7ZUFiY1YsZUFBYzs7O0lBZTdCLEdBQUssQ0FBQ1csU0FBUyxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDeEJKLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLENBQW9CO0lBQ2xDLENBQUM7SUFFRCxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBGLENBQUMsRUFBSyxDQUFDO1FBQ3hCLEdBQUssQ0FBQ1gsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFpQjtRQUM3RCxFQUFFLEVBQUUsTUFBTSxDQUFDWSxJQUFJLEtBQUssQ0FBVyxZQUFDLENBQUM7WUFDOUJQLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLENBQXVCO1FBQ3RDLENBQUMsTUFDRyxDQUFDO1lBQ0ZMLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLENBQTJCO1FBQzFDLENBQUM7SUFDQSxDQUFDO0lBRU5mLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZmdCLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDSEUsQ0FBRzs7WUFBQyxDQUNPO1lBQUMsQ0FBRzt3RkFDYkMsQ0FBTTtnQkFBQ0MsRUFBRSxFQUFDLENBQWlCO2dCQUFDQyxJQUFJLEVBQUMsQ0FBUTtnQkFBQ0MsT0FBTyxFQUFFLFFBQVEsQ0FBUFIsQ0FBQztvQkFBS1osTUFBTSxDQUFOQSxjQUFjOzswQkFBSSxDQUFnQjs7Ozs7Ozs7Ozs7O0FBS25HLENBQUM7R0ExQ3VCRCxTQUFTO0tBQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWludC5qcz9lZmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBNZXRhTWFza09uYm9hcmRpbmcsIHsgZm9yd2FyZGVyT3JpZ2luIH0gZnJvbSAnQG1ldGFtYXNrL29uYm9hcmRpbmcnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBjb25uZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvbm5lY3RNZXRhbWFzaycpO1xyXG4gICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdGluZy4uLi4nO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gV2lsbCBvcGVuIHRoZSBNZXRhTWFzayBVSVxyXG4gICAgICAvLyBZb3Ugc2hvdWxkIGRpc2FibGUgdGhpcyBidXR0b24gd2hpbGUgdGhlIHJlcXVlc3QgaXMgcGVuZGluZyFcclxuICAgICAgYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgfVxyXG4gICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdGVkJztcclxuICAgIGNvbm5lY3RCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRlc3RDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnVGVzdCBjb25zb2xlIHByaW50JylcclxuICB9O1xyXG5cclxuICBjb25zdCBydW5PbkxvYWQgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgY29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKTtcclxuICAgICAgaWYgKHR5cGVvZiB3ZWIzICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdNZXRhTWFzayBpcyBpbnN0YWxsZWQnKVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCcpXHJcbiAgICAgIH1cclxuICAgICAgIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJ1bk9uTG9hZCgpO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBNaW50IFBhZ2Uue1wiIFwifVxyXG4gICAgICA8YnV0dG9uIGlkPSdjb25uZWN0TWV0YW1hc2snIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0Nvbm5lY3QoKX0+Q29ubmVjdCBNZXRhbWFzazwvYnV0dG9uPlxyXG4gICAgICB7LyogPGJ1dHRvbiBpZD0nZ2V0QWNjb3VudHMnIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gdGVzdENsaWNrKGUpfT5HZXQgQWNjb3VudHM8L2J1dHRvbj4gICAgICAgKi99XHJcbiAgICAgIHsvKiA8YnV0dG9uIGlkPSdnZXRBY2NvdW50c1Jlc3VsdCcgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX0+R2V0IEFjY291bnRzIFJlc3VsdHM8L2J1dHRvbj4gICAgICAgKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSW5kZXhQYWdlIiwib25DbGlja0Nvbm5lY3QiLCJjb25uZWN0QnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJlcnJvciIsImRpc2FibGVkIiwidGVzdENsaWNrIiwiZSIsImxvZyIsInJ1bk9uTG9hZCIsIndlYjMiLCJkaXYiLCJidXR0b24iLCJpZCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});