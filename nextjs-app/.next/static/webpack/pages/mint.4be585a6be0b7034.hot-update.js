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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MintPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar createAlchemyWeb3 = (__webpack_require__(/*! @alch/alchemy-web3 */ \"../../node_modules/@alch/alchemy-web3/dist/esm/index.js\").createAlchemyWeb3);\nvar web3 = createAlchemyWeb3('https://eth-ropsten.alchemyapi.io/v2/rFjml79EMZI44Pr5auHaUxIapBl-xs4f');\nfunction MintPage() {\n    _s();\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectButton, message_code;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        connectButton = document.getElementById('connectMetamask');\n                        if (!(typeof web3 !== 'undefined')) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        message_code = _ctx.t0['code'];\n                        if (message_code == 4001) {\n                            connectButton.innerText = 'Connect Metamask';\n                        }\n                    case 14:\n                        _ctx.next = 17;\n                        break;\n                    case 16:\n                        {\n                            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n                            console.log('MetaMask is not installed');\n                            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n                        }\n                    case 17:\n                        ;\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    var runOnLoad = function(e) {\n        var connectButton = document.getElementById('connectMetamask');\n        if (typeof web3 == 'undefined') {\n            connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';\n            document.getElementById('connectMetamask').setAttribute('onClick', 'window.open(\"https://metamask.io/\")');\n        } else {\n            web3.eth.getAccounts(function(err, accounts) {\n                if (err != null) console.error(\"An error occurred: \" + err);\n                else if (accounts.length == 0) console.log(\"User is not logged in to MetaMask\");\n                else {\n                    connectButton.innerText = 'Connected';\n                    connectButton.disabled = true;\n                }\n            });\n        }\n    };\n    function mint() {\n        return _mint.apply(this, arguments);\n    }\n    function _mint() {\n        _mint = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var accounts, getAccount, _getAccount;\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        getAccount = function _getAccount1() {\n                            return _getAccount.apply(this, arguments);\n                        };\n                        _getAccount = function __getAccount() {\n                            _getAccount = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                                return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return ethereum.request({\n                                                method: 'eth_requestAccounts'\n                                            });\n                                        case 2:\n                                            accounts = _ctx.sent;\n                                        case 3:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return _getAccount.apply(this, arguments);\n                        };\n                        accounts = [];\n                        //Sending Ethereum to an address\n                        sendEthButton.addEventListener('click', function() {\n                            ethereum.request({\n                                method: 'eth_sendTransaction',\n                                params: [\n                                    {\n                                        from: accounts[0],\n                                        to: '0x4e55d726D8E995Bd8e4bD0E8A35656379B50bf50',\n                                        value: '0x29a2241af62c0000',\n                                        gasPrice: '0x09184e72a000',\n                                        gas: '0x2710'\n                                    }, \n                                ]\n                            }).then(function(txHash) {\n                                return console.log(txHash);\n                            }).catch(function(error) {\n                                return console.error;\n                            });\n                        });\n                        ethereumButton.addEventListener('click', function() {\n                            getAccount();\n                        });\n                        ;\n                        ;\n                    case 7:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _mint.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"Metamask\",\n                    align: \"right\",\n                    children: [\n                        \"MetaMask:\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            id: \"connectMetamask\",\n                            type: \"button\",\n                            onClick: function(e) {\n                                return onClickConnect();\n                            },\n                            children: \"Connect Metamask\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 84,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 82,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    align: \"center\",\n                    children: \" Mint Page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 86,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"Back to main page.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                            lineNumber: 88,\n                            columnNumber: 26\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 87,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        id: \"mint\",\n                        type: \"button\",\n                        onClick: function(e) {\n                            return mint();\n                        },\n                        children: \"Mint NFT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                    lineNumber: 90,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n            lineNumber: 81,\n            columnNumber: 5\n        }, this)\n    }, void 0, false));\n};\n_s(MintPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MintPage;\nvar _c;\n$RefreshReg$(_c, \"MintPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQVE7NEJBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVA1QixDQUFDO2dDQUFLZCxNQUFNLENBQU5BLGNBQWM7O3NDQUFJLENBQWdCOzs7Ozs7Ozs7Ozs7NEZBRTVGMkMsQ0FBRTtvQkFBQ0wsS0FBSyxFQUFDLENBQVE7OEJBQUMsQ0FBVTs7Ozs7OzRGQUM1Qk0sQ0FBRTtvQkFBQ1AsU0FBUyxFQUFDLENBQU87MEdBQ2hCMUMsa0RBQUk7d0JBQUNrRCxJQUFJLEVBQUMsQ0FBRzs4R0FBRUMsQ0FBQztzQ0FBQyxDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFFdkNDLENBQU87b0JBQUNULEtBQUssRUFBQyxDQUFROzBHQUN0QkMsQ0FBTTt3QkFBQ0MsRUFBRSxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFRO3dCQUFDQyxPQUFPLEVBQUUsUUFBUSxDQUFQNUIsQ0FBQzs0QkFBS08sTUFBTSxDQUFOQSxJQUFJOztrQ0FBSSxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEUsQ0FBQztHQTFGdUJ0QixRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWludC5qcz9lZmJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNZXRhTWFza09uYm9hcmRpbmcsIHsgZm9yd2FyZGVyT3JpZ2luIH0gZnJvbSAnQG1ldGFtYXNrL29uYm9hcmRpbmcnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgeyBjcmVhdGVBbGNoZW15V2ViMyB9ID0gcmVxdWlyZShcIkBhbGNoL2FsY2hlbXktd2ViM1wiKVxyXG5jb25zdCB3ZWIzID0gY3JlYXRlQWxjaGVteVdlYjMoJ2h0dHBzOi8vZXRoLXJvcHN0ZW4uYWxjaGVteWFwaS5pby92Mi9yRmptbDc5RU1aSTQ0UHI1YXVIYVV4SWFwQmwteHM0ZicpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaW50UGFnZSgpIHtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3QoKSB7XHJcbiAgICBjb25zdCBjb25uZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvbm5lY3RNZXRhbWFzaycpO1xyXG4gICAgaWYgKHR5cGVvZiB3ZWIzICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0aW5nLi4uLic7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RlZCc7XHJcbiAgICAgIGNvbm5lY3RCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZV9jb2RlID0gZXJyb3JbJ2NvZGUnXVxyXG4gICAgICBpZiAobWVzc2FnZV9jb2RlID09IDQwMDEpIHtcclxuICAgICAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0IE1ldGFtYXNrJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDbGljayBoZXJlIHRvIGluc3RhbGwgTWV0YW1hc2sgRmlyc3QgYW5kIHRoZW4gcmVmcmVzaCB0aGlzIHBhZ2UuJztcclxuICAgICBjb25zb2xlLmxvZygnTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCcpXHJcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvbm5lY3RNZXRhbWFzaycpLnNldEF0dHJpYnV0ZSgnb25DbGljaycsJ3dpbmRvdy5vcGVuKFwiaHR0cHM6Ly9tZXRhbWFzay5pby9cIiknKVxyXG4gIH07XHJcbn1cclxuXHJcbiAgY29uc3QgcnVuT25Mb2FkID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJyk7XHJcbiAgICBpZiAodHlwZW9mIHdlYjMgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDbGljayBoZXJlIHRvIGluc3RhbGwgTWV0YW1hc2sgRmlyc3QgYW5kIHRoZW4gcmVmcmVzaCB0aGlzIHBhZ2UuJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvbm5lY3RNZXRhbWFzaycpLnNldEF0dHJpYnV0ZSgnb25DbGljaycsJ3dpbmRvdy5vcGVuKFwiaHR0cHM6Ly9tZXRhbWFzay5pby9cIiknKVxyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgIHdlYjMuZXRoLmdldEFjY291bnRzKGZ1bmN0aW9uKGVyciwgYWNjb3VudHMpe1xyXG4gICAgICAgIGlmIChlcnIgIT0gbnVsbCkgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkOiBcIitlcnIpO1xyXG4gICAgICAgIGVsc2UgaWYgKGFjY291bnRzLmxlbmd0aCA9PSAwKSBjb25zb2xlLmxvZyhcIlVzZXIgaXMgbm90IGxvZ2dlZCBpbiB0byBNZXRhTWFza1wiKTtcclxuICAgICAgICBlbHNlIHtjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0ZWQnO1xyXG4gICAgICAgIGNvbm5lY3RCdXR0b24uZGlzYWJsZWQgPSB0cnVlO31cclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICAgfVxyXG5cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbWludCgpIHtcclxuICAgIGxldCBhY2NvdW50cyA9IFtdO1xyXG5cclxuICAvL1NlbmRpbmcgRXRoZXJldW0gdG8gYW4gYWRkcmVzc1xyXG4gIHNlbmRFdGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBldGhlcmV1bVxyXG4gICAgICAucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXHJcbiAgICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgICB0bzogJzB4NGU1NWQ3MjZEOEU5OTVCZDhlNGJEMEU4QTM1NjU2Mzc5QjUwYmY1MCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMHgyOWEyMjQxYWY2MmMwMDAwJyxcclxuICAgICAgICAgICAgZ2FzUHJpY2U6ICcweDA5MTg0ZTcyYTAwMCcsXHJcbiAgICAgICAgICAgIGdhczogJzB4MjcxMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh0eEhhc2gpID0+IGNvbnNvbGUubG9nKHR4SGFzaCkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IpO1xyXG59KTtcclxuXHJcbmV0aGVyZXVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGdldEFjY291bnQoKTtcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50KCkge1xyXG4gIGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG59XHJcbiAgfSAgICAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJ1bk9uTG9hZCgpO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGJvZHk+ICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTWV0YW1hc2tcIiBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgIE1ldGFNYXNrOntcIiBcIn1cclxuICAgICAgPGJ1dHRvbiBpZD0nY29ubmVjdE1ldGFtYXNrJyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDb25uZWN0KCl9PkNvbm5lY3QgTWV0YW1hc2s8L2J1dHRvbj5cclxuICAgIDwvZGl2PiAgICBcclxuICAgICAgPGgxIGFsaWduPVwiY2VudGVyXCI+IE1pbnQgUGFnZTwvaDE+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5CYWNrIHRvIG1haW4gcGFnZS48L2E+PC9MaW5rPlxyXG4gICAgICA8L2g1PlxyXG4gICAgICA8c2VjdGlvbiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICA8YnV0dG9uIGlkPSdtaW50JyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IG1pbnQoKX0+TWludCBORlQ8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDwvYm9keT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiY3JlYXRlQWxjaGVteVdlYjMiLCJyZXF1aXJlIiwid2ViMyIsIk1pbnRQYWdlIiwib25DbGlja0Nvbm5lY3QiLCJjb25uZWN0QnV0dG9uIiwibWVzc2FnZV9jb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImRpc2FibGVkIiwiY29uc29sZSIsImxvZyIsInNldEF0dHJpYnV0ZSIsInJ1bk9uTG9hZCIsImUiLCJldGgiLCJnZXRBY2NvdW50cyIsImVyciIsImFjY291bnRzIiwiZXJyb3IiLCJsZW5ndGgiLCJtaW50IiwiZ2V0QWNjb3VudCIsInNlbmRFdGhCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFyYW1zIiwiZnJvbSIsInRvIiwidmFsdWUiLCJnYXNQcmljZSIsImdhcyIsInRoZW4iLCJ0eEhhc2giLCJjYXRjaCIsImV0aGVyZXVtQnV0dG9uIiwiYm9keSIsImRpdiIsImNsYXNzTmFtZSIsImFsaWduIiwiYnV0dG9uIiwiaWQiLCJ0eXBlIiwib25DbGljayIsImgxIiwiaDUiLCJocmVmIiwiYSIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});