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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MintPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar Web3 = __webpack_require__(/*! web3 */ \"../../node_modules/web3/lib/index.js\");\nfunction MintPage() {\n    _s();\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectButton, message_code;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        connectButton = document.getElementById('connectMetamask');\n                        if (!(typeof web3 !== 'undefined')) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        message_code = _ctx.t0['code'];\n                        if (message_code == 4001) {\n                            connectButton.innerText = 'Connect Metamask';\n                        }\n                    case 14:\n                        _ctx.next = 17;\n                        break;\n                    case 16:\n                        {\n                            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n                            console.log('MetaMask is not installed');\n                            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n                        }\n                    case 17:\n                        ;\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    var testClick = function(e) {\n        console.log('Test console print');\n    };\n    var runOnLoad = function(e) {\n        var connectButton = document.getElementById('connectMetamask');\n        if (typeof web3 == 'undefined') {\n            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n        } else {\n            web3.eth.getAccounts(function(err, accounts) {\n                if (err != null) console.error(\"An error occurred: \" + err);\n                else if (accounts.length == 0) console.log(\"User is not logged in to MetaMask\");\n                else connectButton.innerText = 'Connected';\n                ;\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Mint Page\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            id: \"connectMetamask\",\n                            type: \"button\",\n                            onClick: function(e) {\n                                return onClickConnect();\n                            },\n                            children: \"Connect Metamask\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 55,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"Back to main page.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 58,\n                            columnNumber: 26\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, this)\n    }, void 0, false));\n};\n_s(MintPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MintPage;\nvar _c;\n$RefreshReg$(_c, \"MintPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs0RkFFNUY2QixDQUFFO29CQUFDQyxTQUFTLEVBQUMsQ0FBTzswR0FDaEJsQyxrREFBSTt3QkFBQ21DLElBQUksRUFBQyxDQUFHOzhHQUFFQyxDQUFDO3NDQUFDLENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QyxDQUFDO0dBekR1QmpDLFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50LmpzP2VmYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IE1ldGFNYXNrT25ib2FyZGluZywgeyBmb3J3YXJkZXJPcmlnaW4gfSBmcm9tICdAbWV0YW1hc2svb25ib2FyZGluZydcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5sZXQgV2ViMyA9IHJlcXVpcmUoJ3dlYjMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbnRQYWdlKCkge1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdCgpIHtcclxuICAgIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJyk7XHJcbiAgICBpZiAodHlwZW9mIHdlYjMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RpbmcuLi4uJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdGVkJztcclxuICAgICAgY29ubmVjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlX2NvZGUgPSBlcnJvclsnY29kZSddXHJcbiAgICAgIGlmIChtZXNzYWdlX2NvZGUgPT0gNDAwMSkge1xyXG4gICAgICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgTWV0YW1hc2snO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgdG8gaW5zdGFsbCBNZXRhbWFzayBGaXJzdCBhbmQgdGhlbiByZWZyZXNoIHRoaXMgcGFnZS4nO1xyXG4gICAgIGNvbnNvbGUubG9nKCdNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkJylcclxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJykuc2V0QXR0cmlidXRlKCdvbkNsaWNrJywnd2luZG93Lm9wZW4oXCJodHRwczovL21ldGFtYXNrLmlvL1wiKScpXHJcbiAgfTtcclxufVxyXG5cclxuICBjb25zdCB0ZXN0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1Rlc3QgY29uc29sZSBwcmludCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcnVuT25Mb2FkID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJyk7XHJcbiAgICBpZiAodHlwZW9mIHdlYjMgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDbGljayBoZXJlIHRvIGluc3RhbGwgTWV0YW1hc2sgRmlyc3QgYW5kIHRoZW4gcmVmcmVzaCB0aGlzIHBhZ2UuJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvbm5lY3RNZXRhbWFzaycpLnNldEF0dHJpYnV0ZSgnb25DbGljaycsJ3dpbmRvdy5vcGVuKFwiaHR0cHM6Ly9tZXRhbWFzay5pby9cIiknKVxyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgIHdlYjMuZXRoLmdldEFjY291bnRzKGZ1bmN0aW9uKGVyciwgYWNjb3VudHMpe1xyXG4gICAgICAgIGlmIChlcnIgIT0gbnVsbCkgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkOiBcIitlcnIpO1xyXG4gICAgICAgIGVsc2UgaWYgKGFjY291bnRzLmxlbmd0aCA9PSAwKSBjb25zb2xlLmxvZyhcIlVzZXIgaXMgbm90IGxvZ2dlZCBpbiB0byBNZXRhTWFza1wiKTtcclxuICAgICAgICBlbHNlIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RlZCc7O1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICAgICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBydW5PbkxvYWQoKTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxib2R5PiAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICBNaW50IFBhZ2V7XCIgXCJ9XHJcbiAgICAgIDxidXR0b24gaWQ9J2Nvbm5lY3RNZXRhbWFzaycgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ29ubmVjdCgpfT5Db25uZWN0IE1ldGFtYXNrPC9idXR0b24+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5CYWNrIHRvIG1haW4gcGFnZS48L2E+PC9MaW5rPlxyXG4gICAgICA8L2g1PlxyXG4gICAgPC9ib2R5PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxpbmsiLCJXZWIzIiwicmVxdWlyZSIsIk1pbnRQYWdlIiwib25DbGlja0Nvbm5lY3QiLCJjb25uZWN0QnV0dG9uIiwibWVzc2FnZV9jb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndlYjMiLCJpbm5lclRleHQiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJkaXNhYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJ0ZXN0Q2xpY2siLCJlIiwicnVuT25Mb2FkIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJlcnIiLCJhY2NvdW50cyIsImVycm9yIiwibGVuZ3RoIiwiYm9keSIsImRpdiIsImJ1dHRvbiIsImlkIiwidHlwZSIsIm9uQ2xpY2siLCJoNSIsImNsYXNzTmFtZSIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});