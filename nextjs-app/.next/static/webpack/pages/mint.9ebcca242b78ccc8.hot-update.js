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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MintPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar createAlchemyWeb3 = (__webpack_require__(/*! @alch/alchemy-web3 */ \"../../node_modules/@alch/alchemy-web3/dist/esm/index.js\").createAlchemyWeb3);\nvar web3 = createAlchemyWeb3('https://eth-ropsten.alchemyapi.io/v2/rFjml79EMZI44Pr5auHaUxIapBl-xs4f');\nfunction MintPage() {\n    _s();\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectButton, message_code;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        connectButton = document.getElementById('connectMetamask');\n                        if (!(typeof web3 !== 'undefined')) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        message_code = _ctx.t0['code'];\n                        if (message_code == 4001) {\n                            connectButton.innerText = 'Connect Metamask';\n                        }\n                    case 14:\n                        _ctx.next = 17;\n                        break;\n                    case 16:\n                        {\n                            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n                            console.log('MetaMask is not installed');\n                            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n                        }\n                    case 17:\n                        ;\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    var runOnLoad = function(e) {\n        var connectButton = document.getElementById('connectMetamask');\n        if (typeof web3 == 'undefined') {\n            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n        } else {\n            web3.eth.getAccounts(function(err, accounts) {\n                if (err != null) console.error(\"An error occurred: \" + err);\n                else if (accounts.length == 0) console.log(\"User is not logged in to MetaMask\");\n                else {\n                    connectButton.innerText = 'Connected';\n                    connectButton.disabled = true;\n                }\n            });\n        }\n    };\n    function getAccount() {\n        return _getAccount.apply(this, arguments);\n    }\n    function _getAccount() {\n        _getAccount = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 2:\n                        accounts = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getAccount.apply(this, arguments);\n    }\n    function mint() {\n        return _mint.apply(this, arguments);\n    }\n    function _mint() {\n        _mint = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        accounts = getAccount();\n                        //Sending Ethereum to an address\n                        ethereum.request({\n                            method: 'eth_sendTransaction',\n                            params: [\n                                {\n                                    from: accounts[0],\n                                    to: '0x4e55d726D8E995Bd8e4bD0E8A35656379B50bf50',\n                                    value: '0x29a2241af62c0000',\n                                    gasPrice: '0x09184e72a000',\n                                    gas: '0x2710'\n                                }, \n                            ]\n                        }).then(function(txHash) {\n                            return console.log(txHash);\n                        }).catch(function(error) {\n                            return console.error;\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _mint.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Metamask\",\n                    align: \"right\",\n                    children: [\n                        \"MetaMask:\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            id: \"connectMetamask\",\n                            type: \"button\",\n                            onClick: function(e) {\n                                return onClickConnect();\n                            },\n                            children: \"Connect Metamask\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 77,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 75,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    align: \"center\",\n                    children: \" Mint Page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"Back to main page.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 81,\n                            columnNumber: 26\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 80,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        id: \"mint\",\n                        type: \"button\",\n                        onClick: function(e) {\n                            return mint();\n                        },\n                        children: \"Mint NFT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n            lineNumber: 74,\n            columnNumber: 5\n        }, this)\n    }, void 0, false));\n};\n_s(MintPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MintPage;\nvar _c;\n$RefreshReg$(_c, \"MintPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFHOzhHQUFFQyxDQUFDO3NDQUFDLENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OzRGQUV2Q0MsQ0FBTztvQkFBQ1QsS0FBSyxFQUFDLENBQVE7MEdBQ3RCQyxDQUFNO3dCQUFDQyxFQUFFLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQVE7d0JBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVB6QixDQUFDOzRCQUFLUSxNQUFNLENBQU5BLElBQUk7O2tDQUFJLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RSxDQUFDO0dBbkZ1QnZCLFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50LmpzP2VmYmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE1ldGFNYXNrT25ib2FyZGluZywgeyBmb3J3YXJkZXJPcmlnaW4gfSBmcm9tICdAbWV0YW1hc2svb25ib2FyZGluZydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCB7IGNyZWF0ZUFsY2hlbXlXZWIzIH0gPSByZXF1aXJlKFwiQGFsY2gvYWxjaGVteS13ZWIzXCIpXHJcbmNvbnN0IHdlYjMgPSBjcmVhdGVBbGNoZW15V2ViMygnaHR0cHM6Ly9ldGgtcm9wc3Rlbi5hbGNoZW15YXBpLmlvL3YyL3JGam1sNzlFTVpJNDRQcjVhdUhhVXhJYXBCbC14czRmJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbnRQYWdlKCkge1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdCgpIHtcclxuICAgIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJyk7XHJcbiAgICBpZiAodHlwZW9mIHdlYjMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RpbmcuLi4uJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgY29ubmVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdGVkJztcclxuICAgICAgY29ubmVjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlX2NvZGUgPSBlcnJvclsnY29kZSddXHJcbiAgICAgIGlmIChtZXNzYWdlX2NvZGUgPT0gNDAwMSkge1xyXG4gICAgICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgTWV0YW1hc2snO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgdG8gaW5zdGFsbCBNZXRhbWFzayBGaXJzdCBhbmQgdGhlbiByZWZyZXNoIHRoaXMgcGFnZS4nO1xyXG4gICAgIGNvbnNvbGUubG9nKCdNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkJylcclxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJykuc2V0QXR0cmlidXRlKCdvbkNsaWNrJywnd2luZG93Lm9wZW4oXCJodHRwczovL21ldGFtYXNrLmlvL1wiKScpXHJcbiAgfTtcclxufVxyXG5cclxuICBjb25zdCBydW5PbkxvYWQgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgY29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKTtcclxuICAgIGlmICh0eXBlb2Ygd2ViMyA9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgdG8gaW5zdGFsbCBNZXRhbWFzayBGaXJzdCBhbmQgdGhlbiByZWZyZXNoIHRoaXMgcGFnZS4nO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJykuc2V0QXR0cmlidXRlKCdvbkNsaWNrJywnd2luZG93Lm9wZW4oXCJodHRwczovL21ldGFtYXNrLmlvL1wiKScpXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgd2ViMy5ldGguZ2V0QWNjb3VudHMoZnVuY3Rpb24oZXJyLCBhY2NvdW50cyl7XHJcbiAgICAgICAgaWYgKGVyciAhPSBudWxsKSBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQ6IFwiK2Vycik7XHJcbiAgICAgICAgZWxzZSBpZiAoYWNjb3VudHMubGVuZ3RoID09IDApIGNvbnNvbGUubG9nKFwiVXNlciBpcyBub3QgbG9nZ2VkIGluIHRvIE1ldGFNYXNrXCIpO1xyXG4gICAgICAgIGVsc2Uge2Nvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RlZCc7XHJcbiAgICAgICAgY29ubmVjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7fVxyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICAgICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnQoKSB7XHJcbiAgICBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICB9ICAgXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1pbnQoKSB7XHJcbiAgICBsZXQgYWNjb3VudHMgPSBnZXRBY2NvdW50KCk7XHJcbiAgICBcclxuICAvL1NlbmRpbmcgRXRoZXJldW0gdG8gYW4gYWRkcmVzc1xyXG4gICAgZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXHJcbiAgICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgICB0bzogJzB4NGU1NWQ3MjZEOEU5OTVCZDhlNGJEMEU4QTM1NjU2Mzc5QjUwYmY1MCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMHgyOWEyMjQxYWY2MmMwMDAwJyxcclxuICAgICAgICAgICAgZ2FzUHJpY2U6ICcweDA5MTg0ZTcyYTAwMCcsXHJcbiAgICAgICAgICAgIGdhczogJzB4MjcxMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh0eEhhc2gpID0+IGNvbnNvbGUubG9nKHR4SGFzaCkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IpO1xyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcnVuT25Mb2FkKCk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Ym9keT4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNZXRhbWFza1wiIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgTWV0YU1hc2s6e1wiIFwifVxyXG4gICAgICA8YnV0dG9uIGlkPSdjb25uZWN0TWV0YW1hc2snIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0Nvbm5lY3QoKX0+Q29ubmVjdCBNZXRhbWFzazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gICAgICA8aDEgYWxpZ249XCJjZW50ZXJcIj4gTWludCBQYWdlPC9oMT5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkJhY2sgdG8gbWFpbiBwYWdlLjwvYT48L0xpbms+XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxzZWN0aW9uIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIDxidXR0b24gaWQ9J21pbnQnIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gbWludCgpfT5NaW50IE5GVDwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPC9ib2R5PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxpbmsiLCJjcmVhdGVBbGNoZW15V2ViMyIsInJlcXVpcmUiLCJ3ZWIzIiwiTWludFBhZ2UiLCJvbkNsaWNrQ29ubmVjdCIsImNvbm5lY3RCdXR0b24iLCJtZXNzYWdlX2NvZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiZGlzYWJsZWQiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0cmlidXRlIiwicnVuT25Mb2FkIiwiZSIsImV0aCIsImdldEFjY291bnRzIiwiZXJyIiwiYWNjb3VudHMiLCJlcnJvciIsImxlbmd0aCIsImdldEFjY291bnQiLCJtaW50IiwicGFyYW1zIiwiZnJvbSIsInRvIiwidmFsdWUiLCJnYXNQcmljZSIsImdhcyIsInRoZW4iLCJ0eEhhc2giLCJjYXRjaCIsImJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJhbGlnbiIsImJ1dHRvbiIsImlkIiwidHlwZSIsIm9uQ2xpY2siLCJoMSIsImg1IiwiaHJlZiIsImEiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});