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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MintPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar createAlchemyWeb3 = (__webpack_require__(/*! @alch/alchemy-web3 */ \"../../node_modules/@alch/alchemy-web3/dist/esm/index.js\").createAlchemyWeb3);\nvar web3 = createAlchemyWeb3('https://eth-ropsten.alchemyapi.io/v2/rFjml79EMZI44Pr5auHaUxIapBl-xs4f');\nfunction MintPage() {\n    _s();\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectButton, message_code;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        connectButton = document.getElementById('connectMetamask');\n                        if (!(typeof web3 !== 'undefined')) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        message_code = _ctx.t0['code'];\n                        if (message_code == 4001) {\n                            connectButton.innerText = 'Connect Metamask';\n                        }\n                    case 14:\n                        _ctx.next = 17;\n                        break;\n                    case 16:\n                        {\n                            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n                            console.log('MetaMask is not installed');\n                            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n                        }\n                    case 17:\n                        ;\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    var runOnLoad = function(e) {\n        var connectButton = document.getElementById('connectMetamask');\n        if (typeof web3 == 'undefined') {\n            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n        } else {\n            web3.eth.getAccounts(function(err, accounts) {\n                if (err != null) console.error(\"An error occurred: \" + err);\n                else if (accounts.length == 0) console.log(\"User is not logged in to MetaMask\");\n                else {\n                    connectButton.innerText = 'Connected';\n                    connectButton.disabled = true;\n                }\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Metamask\",\n                    align: \"right\",\n                    children: [\n                        \"MetaMask:\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            id: \"connectMetamask\",\n                            type: \"button\",\n                            onClick: function(e) {\n                                return onClickConnect();\n                            },\n                            children: \"Connect Metamask\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 52,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    align: \"center\",\n                    children: \" Mint Page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"Back to main page.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 56,\n                            columnNumber: 26\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n            lineNumber: 49,\n            columnNumber: 5\n        }, this)\n    }, void 0, false));\n};\n_s(MintPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MintPage;\nvar _c;\n$RefreshReg$(_c, \"MintPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztnQ0FBS2QsTUFBTSxDQUFOQSxjQUFjOztzQ0FBSSxDQUFnQjs7Ozs7Ozs7Ozs7OzRGQUU1RjZCLENBQUU7b0JBQUNMLEtBQUssRUFBQyxDQUFROzhCQUFDLENBQVU7Ozs7Ozs0RkFDNUJNLENBQUU7b0JBQUNQLFNBQVMsRUFBQyxDQUFPOzBHQUNoQjVCLGtEQUFJO3dCQUFDb0MsSUFBSSxFQUFDLENBQUc7OEdBQUVDLENBQUM7c0NBQUMsQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDLENBQUM7R0F0RHVCakMsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21pbnQuanM/ZWZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTWV0YU1hc2tPbmJvYXJkaW5nLCB7IGZvcndhcmRlck9yaWdpbiB9IGZyb20gJ0BtZXRhbWFzay9vbmJvYXJkaW5nJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnN0IHsgY3JlYXRlQWxjaGVteVdlYjMgfSA9IHJlcXVpcmUoXCJAYWxjaC9hbGNoZW15LXdlYjNcIilcclxuY29uc3Qgd2ViMyA9IGNyZWF0ZUFsY2hlbXlXZWIzKCdodHRwczovL2V0aC1yb3BzdGVuLmFsY2hlbXlhcGkuaW8vdjIvckZqbWw3OUVNWkk0NFByNWF1SGFVeElhcEJsLXhzNGYnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWludFBhZ2UoKSB7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0KCkge1xyXG4gICAgY29uc3QgY29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKTtcclxuICAgIGlmICh0eXBlb2Ygd2ViMyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdGluZy4uLi4nO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0ZWQnO1xyXG4gICAgICBjb25uZWN0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VfY29kZSA9IGVycm9yWydjb2RlJ11cclxuICAgICAgaWYgKG1lc3NhZ2VfY29kZSA9PSA0MDAxKSB7XHJcbiAgICAgICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdCBNZXRhbWFzayc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ2xpY2sgaGVyZSB0byBpbnN0YWxsIE1ldGFtYXNrIEZpcnN0IGFuZCB0aGVuIHJlZnJlc2ggdGhpcyBwYWdlLic7XHJcbiAgICAgY29uc29sZS5sb2coJ01ldGFNYXNrIGlzIG5vdCBpbnN0YWxsZWQnKVxyXG4gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKS5zZXRBdHRyaWJ1dGUoJ29uQ2xpY2snLCd3aW5kb3cub3BlbihcImh0dHBzOi8vbWV0YW1hc2suaW8vXCIpJylcclxuICB9O1xyXG59XHJcblxyXG4gIGNvbnN0IHJ1bk9uTG9hZCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBjb25uZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvbm5lY3RNZXRhbWFzaycpO1xyXG4gICAgaWYgKHR5cGVvZiB3ZWIzID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ2xpY2sgaGVyZSB0byBpbnN0YWxsIE1ldGFtYXNrIEZpcnN0IGFuZCB0aGVuIHJlZnJlc2ggdGhpcyBwYWdlLic7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKS5zZXRBdHRyaWJ1dGUoJ29uQ2xpY2snLCd3aW5kb3cub3BlbihcImh0dHBzOi8vbWV0YW1hc2suaW8vXCIpJylcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgICB3ZWIzLmV0aC5nZXRBY2NvdW50cyhmdW5jdGlvbihlcnIsIGFjY291bnRzKXtcclxuICAgICAgICBpZiAoZXJyICE9IG51bGwpIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZDogXCIrZXJyKTtcclxuICAgICAgICBlbHNlIGlmIChhY2NvdW50cy5sZW5ndGggPT0gMCkgY29uc29sZS5sb2coXCJVc2VyIGlzIG5vdCBsb2dnZWQgaW4gdG8gTWV0YU1hc2tcIik7XHJcbiAgICAgICAgZWxzZSB7Y29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdGVkJztcclxuICAgICAgICBjb25uZWN0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTt9XHJcbiAgICB9KTtcclxuICAgIH1cclxuICAgICAgIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcnVuT25Mb2FkKCk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Ym9keT4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNZXRhbWFza1wiIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgTWV0YU1hc2s6e1wiIFwifVxyXG4gICAgICA8YnV0dG9uIGlkPSdjb25uZWN0TWV0YW1hc2snIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0Nvbm5lY3QoKX0+Q29ubmVjdCBNZXRhbWFzazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gICAgICA8aDEgYWxpZ249XCJjZW50ZXJcIj4gTWludCBQYWdlPC9oMT5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkJhY2sgdG8gbWFpbiBwYWdlLjwvYT48L0xpbms+XHJcbiAgICAgIDwvaDU+XHJcbiAgICA8L2JvZHk+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTGluayIsImNyZWF0ZUFsY2hlbXlXZWIzIiwicmVxdWlyZSIsIndlYjMiLCJNaW50UGFnZSIsIm9uQ2xpY2tDb25uZWN0IiwiY29ubmVjdEJ1dHRvbiIsIm1lc3NhZ2VfY29kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJkaXNhYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJydW5PbkxvYWQiLCJlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJlcnIiLCJhY2NvdW50cyIsImVycm9yIiwibGVuZ3RoIiwiYm9keSIsImRpdiIsImNsYXNzTmFtZSIsImFsaWduIiwiYnV0dG9uIiwiaWQiLCJ0eXBlIiwib25DbGljayIsImgxIiwiaDUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});