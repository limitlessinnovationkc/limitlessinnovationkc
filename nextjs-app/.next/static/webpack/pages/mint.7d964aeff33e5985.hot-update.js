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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MintPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n// import Link from \"next/link\";\nfunction MintPage() {\n    _s();\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectButton;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        connectButton = document.getElementById('connectMetamask');\n                        if (!(typeof web3 !== 'undefined')) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        console.log('MetaMask is installed');\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.error(_ctx.t0);\n                    case 12:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                        _ctx.next = 17;\n                        break;\n                    case 16:\n                        {\n                            connectButton.innerText = 'Please Install Metamask First';\n                            console.log('MetaMask is not installed');\n                            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n                        }\n                    case 17:\n                        ;\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    var testClick = function(e) {\n        console.log('Test console print');\n    };\n    var runOnLoad = function(e) {};\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Mint Page.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"connectMetamask\",\n                type: \"button\",\n                onClick: function(e) {\n                    return onClickConnect();\n                },\n                children: \"Connect Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this));\n};\n_s(MintPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MintPage;\nvar _c;\n$RefreshReg$(_c, \"MintPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEMsRUFBNkU7QUFDN0UsRUFBZ0M7QUFFakIsUUFBUSxDQUFDRSxRQUFRLEdBQUcsQ0FBQzs7YUFFbkJDLGNBQWM7ZUFBZEEsZUFBYzs7YUFBZEEsZUFBYztRQUFkQSxlQUFjLG9MQUE3QixRQUFRLFdBQXdCLENBQUM7Z0JBQ3pCQyxhQUFhOzs7O3dCQUFiQSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQWlCOzhCQUMzRCxNQUFNLENBQUNDLElBQUksS0FBSyxDQUFXOzs7O3dCQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBdUI7d0JBQ3JDTCxhQUFhLENBQUNNLFNBQVMsR0FBRyxDQUFnQjs7OytCQUVsQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQzs0QkFBQ0MsTUFBTSxFQUFFLENBQXFCO3dCQUFDLENBQUM7Ozs7Ozs7d0JBRXhETCxPQUFPLENBQUNNLEtBQUs7O3dCQUdmVixhQUFhLENBQUNNLFNBQVMsR0FBRyxDQUFXO3dCQUNyQ04sYUFBYSxDQUFDVyxRQUFRLEdBQUcsSUFBSTs7Ozt3QkFDeEIsQ0FBQzs0QkFDTlgsYUFBYSxDQUFDTSxTQUFTLEdBQUcsQ0FBK0I7NEJBQ3hERixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEyQjs0QkFDdkNKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQWlCLGtCQUFFVSxZQUFZLENBQUMsQ0FBUyxVQUFDLENBQXFDO3dCQUMxRyxDQUFDOzs7Ozs7Ozs7Ozs7O1FBQ0gsQ0FBQztlQWxCZ0JiLGVBQWM7O0lBb0I3QixHQUFLLENBQUNjLFNBQVMsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQ3hCVixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFvQjtJQUNsQyxDQUFDO0lBRUQsR0FBSyxDQUFDVSxTQUFTLEdBQUcsUUFBUSxDQUFQRCxDQUFDLEVBQUssQ0FBQyxDQUVwQjtJQUVOakIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNma0IsU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLDZFQUNIQyxDQUFHOztZQUFDLENBQ087WUFBQyxDQUFHO3dGQUNiQyxDQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBaUI7Z0JBQUNDLElBQUksRUFBQyxDQUFRO2dCQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQTixDQUFDO29CQUFLZixNQUFNLENBQU5BLGNBQWM7OzBCQUFJLENBQWdCOzs7Ozs7Ozs7Ozs7QUFLbkcsQ0FBQztHQXpDdUJELFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50LmpzP2VmYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IE1ldGFNYXNrT25ib2FyZGluZywgeyBmb3J3YXJkZXJPcmlnaW4gfSBmcm9tICdAbWV0YW1hc2svb25ib2FyZGluZydcclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWludFBhZ2UoKSB7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0KCkge1xyXG4gICAgY29uc3QgY29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKTtcclxuICAgIGlmICh0eXBlb2Ygd2ViMyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICBjb25zb2xlLmxvZygnTWV0YU1hc2sgaXMgaW5zdGFsbGVkJylcclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RpbmcuLi4uJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RlZCc7XHJcbiAgICBjb25uZWN0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnUGxlYXNlIEluc3RhbGwgTWV0YW1hc2sgRmlyc3QnO1xyXG4gICAgIGNvbnNvbGUubG9nKCdNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkJylcclxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJykuc2V0QXR0cmlidXRlKCdvbkNsaWNrJywnd2luZG93Lm9wZW4oXCJodHRwczovL21ldGFtYXNrLmlvL1wiKScpXHJcbiAgfTtcclxufVxyXG5cclxuICBjb25zdCB0ZXN0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1Rlc3QgY29uc29sZSBwcmludCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcnVuT25Mb2FkID0gKGUpID0+IHtcclxuIFxyXG4gICAgICAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcnVuT25Mb2FkKCk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIE1pbnQgUGFnZS57XCIgXCJ9XHJcbiAgICAgIDxidXR0b24gaWQ9J2Nvbm5lY3RNZXRhbWFzaycgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ29ubmVjdCgpfT5Db25uZWN0IE1ldGFtYXNrPC9idXR0b24+XHJcbiAgICAgIHsvKiA8YnV0dG9uIGlkPSdnZXRBY2NvdW50cycgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB0ZXN0Q2xpY2soZSl9PkdldCBBY2NvdW50czwvYnV0dG9uPiAgICAgICAqL31cclxuICAgICAgey8qIDxidXR0b24gaWQ9J2dldEFjY291bnRzUmVzdWx0JyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfT5HZXQgQWNjb3VudHMgUmVzdWx0czwvYnV0dG9uPiAgICAgICAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJNaW50UGFnZSIsIm9uQ2xpY2tDb25uZWN0IiwiY29ubmVjdEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3ZWIzIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImVycm9yIiwiZGlzYWJsZWQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXN0Q2xpY2siLCJlIiwicnVuT25Mb2FkIiwiZGl2IiwiYnV0dG9uIiwiaWQiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});