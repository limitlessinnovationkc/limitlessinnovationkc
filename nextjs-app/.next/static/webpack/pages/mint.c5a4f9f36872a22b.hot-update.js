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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MintPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n// import Link from \"next/link\";\nfunction MintPage() {\n    _s();\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectButton, message_code;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        connectButton = document.getElementById('connectMetamask');\n                        if (!(typeof web3 !== 'undefined')) {\n                            _ctx.next = 18;\n                            break;\n                        }\n                        console.log('MetaMask is installed');\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 7:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                        _ctx.next = 16;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        message_code = _ctx.t0['code'];\n                        console.error(message_code);\n                        if (message_code == 4001) {\n                            connectButton.innerText = 'Connect Metamask';\n                        }\n                    case 16:\n                        _ctx.next = 19;\n                        break;\n                    case 18:\n                        {\n                            connectButton.innerText = 'Click here Install Metamask First and then refresh this page.';\n                            console.log('MetaMask is not installed');\n                            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n                        }\n                    case 19:\n                        ;\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    11\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    var testClick = function(e) {\n        console.log('Test console print');\n    };\n    var runOnLoad = function(e) {};\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Mint Page.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"connectMetamask\",\n                type: \"button\",\n                onClick: function(e) {\n                    return onClickConnect();\n                },\n                children: \"Connect Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n};\n_s(MintPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MintPage;\nvar _c;\n$RefreshReg$(_c, \"MintPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEMsRUFBNkU7QUFDN0UsRUFBZ0M7QUFFakIsUUFBUSxDQUFDRSxRQUFRLEdBQUcsQ0FBQzs7YUFFbkJDLGNBQWM7ZUFBZEEsZUFBYzs7YUFBZEEsZUFBYztRQUFkQSxlQUFjLG9MQUE3QixRQUFRLFdBQXdCLENBQUM7Z0JBQ3pCQyxhQUFhLEVBU1hDLFlBQVk7Ozs7d0JBVGRELGFBQWEsR0FBR0UsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBaUI7OEJBQzNELE1BQU0sQ0FBQ0MsSUFBSSxLQUFLLENBQVc7Ozs7d0JBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF1Qjt3QkFDckNOLGFBQWEsQ0FBQ08sU0FBUyxHQUFHLENBQWdCOzs7K0JBRWxDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDOzRCQUFDQyxNQUFNLEVBQUUsQ0FBcUI7d0JBQUMsQ0FBQzs7d0JBQ3hEVixhQUFhLENBQUNPLFNBQVMsR0FBRyxDQUFXO3dCQUNyQ1AsYUFBYSxDQUFDVyxRQUFRLEdBQUcsSUFBSTs7Ozs7O3dCQUV2QlYsWUFBWSxXQUFTLENBQU07d0JBQ2pDSSxPQUFPLENBQUNPLEtBQUssQ0FBQ1gsWUFBWTt3QkFDMUIsRUFBRSxFQUFFQSxZQUFZLElBQUksSUFBSSxFQUFFLENBQUM7NEJBQ3pCRCxhQUFhLENBQUNPLFNBQVMsR0FBRyxDQUFrQjt3QkFDOUMsQ0FBQzs7Ozs7d0JBSUUsQ0FBQzs0QkFDTlAsYUFBYSxDQUFDTyxTQUFTLEdBQUcsQ0FBK0Q7NEJBQ3hGRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEyQjs0QkFDdkNKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQWlCLGtCQUFFVSxZQUFZLENBQUMsQ0FBUyxVQUFDLENBQXFDO3dCQUMxRyxDQUFDOzs7Ozs7Ozs7Ozs7O1FBQ0gsQ0FBQztlQXZCZ0JkLGVBQWM7O0lBeUI3QixHQUFLLENBQUNlLFNBQVMsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQ3hCVixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFvQjtJQUNsQyxDQUFDO0lBRUQsR0FBSyxDQUFDVSxTQUFTLEdBQUcsUUFBUSxDQUFQRCxDQUFDLEVBQUssQ0FBQyxDQUVwQjtJQUVObEIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmbUIsU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLDZFQUNIQyxDQUFHOztZQUFDLENBQ087WUFBQyxDQUFHO3dGQUNiQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBaUI7Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQTixDQUFDO29CQUFLaEIsTUFBTSxDQUFOQSxjQUFjOzswQkFBSSxDQUFnQjs7Ozs7Ozs7Ozs7O0FBS25HLENBQUM7R0E5Q3VCRCxRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWludC5qcz9lZmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBNZXRhTWFza09uYm9hcmRpbmcsIHsgZm9yd2FyZGVyT3JpZ2luIH0gZnJvbSAnQG1ldGFtYXNrL29uYm9hcmRpbmcnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbnRQYWdlKCkge1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdCgpIHtcclxuICAgIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJyk7XHJcbiAgICBpZiAodHlwZW9mIHdlYjMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgY29uc29sZS5sb2coJ01ldGFNYXNrIGlzIGluc3RhbGxlZCcpXHJcbiAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0aW5nLi4uLic7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RlZCc7XHJcbiAgICAgIGNvbm5lY3RCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZV9jb2RlID0gZXJyb3JbJ2NvZGUnXVxyXG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2VfY29kZSk7XHJcbiAgICAgIGlmIChtZXNzYWdlX2NvZGUgPT0gNDAwMSkge1xyXG4gICAgICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgTWV0YW1hc2snO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ2xpY2sgaGVyZSBJbnN0YWxsIE1ldGFtYXNrIEZpcnN0IGFuZCB0aGVuIHJlZnJlc2ggdGhpcyBwYWdlLic7XHJcbiAgICAgY29uc29sZS5sb2coJ01ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQnKVxyXG4gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKS5zZXRBdHRyaWJ1dGUoJ29uQ2xpY2snLCd3aW5kb3cub3BlbihcImh0dHBzOi8vbWV0YW1hc2suaW8vXCIpJylcclxuICB9O1xyXG59XHJcblxyXG4gIGNvbnN0IHRlc3RDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnVGVzdCBjb25zb2xlIHByaW50JylcclxuICB9O1xyXG5cclxuICBjb25zdCBydW5PbkxvYWQgPSAoZSkgPT4ge1xyXG4gXHJcbiAgICAgICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBydW5PbkxvYWQoKTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgTWludCBQYWdlLntcIiBcIn1cclxuICAgICAgPGJ1dHRvbiBpZD0nY29ubmVjdE1ldGFtYXNrJyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDb25uZWN0KCl9PkNvbm5lY3QgTWV0YW1hc2s8L2J1dHRvbj5cclxuICAgICAgey8qIDxidXR0b24gaWQ9J2dldEFjY291bnRzJyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHRlc3RDbGljayhlKX0+R2V0IEFjY291bnRzPC9idXR0b24+ICAgICAgICovfVxyXG4gICAgICB7LyogPGJ1dHRvbiBpZD0nZ2V0QWNjb3VudHNSZXN1bHQnIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9PkdldCBBY2NvdW50cyBSZXN1bHRzPC9idXR0b24+ICAgICAgICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIk1pbnRQYWdlIiwib25DbGlja0Nvbm5lY3QiLCJjb25uZWN0QnV0dG9uIiwibWVzc2FnZV9jb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndlYjMiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJUZXh0IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiZGlzYWJsZWQiLCJlcnJvciIsInNldEF0dHJpYnV0ZSIsInRlc3RDbGljayIsImUiLCJydW5PbkxvYWQiLCJkaXYiLCJidXR0b24iLCJpZCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});