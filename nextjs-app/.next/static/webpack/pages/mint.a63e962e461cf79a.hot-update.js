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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metamask_onboarding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @metamask/onboarding */ \"./node_modules/@metamask/onboarding/dist/metamask-onboarding.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import Link from \"next/link\";\nfunction IndexPage() {\n    _s();\n    var _s1 = $RefreshSig$();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(_s1(function() {\n        _s1();\n        var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        var handleClick = function(e) {\n            console.log('fuck this shit');\n        };\n        var initialize = function() {\n            //Basic Actions Section\n            var onboardButton = document.getElementById('connectButton');\n            var getAccountsButton = document.getElementById('getAccounts');\n            var getAccountsResult = document.getElementById('getAccountsResult');\n            //Created check function to see if the MetaMask extension is installed\n            var isMetaMaskInstalled = function() {\n                //Have to check the ethereum binding on the window object to see if it's installed\n                var ethereum = window.ethereum;\n                return Boolean(ethereum && ethereum.isMetaMask);\n            };\n            //We create a new MetaMask onboarding object to use in our app\n            var onboarding = new _metamask_onboarding__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                forwarderOrigin: _metamask_onboarding__WEBPACK_IMPORTED_MODULE_4__.forwarderOrigin\n            });\n            //This will start the onboarding proccess\n            var onClickInstall = function() {\n                onboardButton.innerText = 'Onboarding in progress';\n                onboardButton.disabled = true;\n                //On this object we have startOnboarding which will start the onboarding process for our end user\n                onboarding.startOnboarding();\n            };\n            var onClickConnect = function() {\n                var _ref = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return ethereum.request({\n                                    method: 'eth_requestAccounts'\n                                });\n                            case 3:\n                                _ctx.next = 8;\n                                break;\n                            case 5:\n                                _ctx.prev = 5;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                console.error(_ctx.t0);\n                            case 8:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            5\n                        ]\n                    ]);\n                }));\n                return function onClickConnect() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            var MetaMaskClientCheck = function() {\n                //Now we check to see if Metmask is installed\n                if (!isMetaMaskInstalled()) {\n                    //If it isn't installed we ask the user to click to install it\n                    onboardButton.innerText = 'Click here to install MetaMask!';\n                    //When the button is clicked we call th is function\n                    onboardButton.onclick = onClickInstall;\n                    //The button is now disabled\n                    onboardButton.disabled = false;\n                } else {\n                    //If MetaMask is installed we ask the user to connect to their wallet\n                    onboardButton.innerText = 'Connect';\n                    //When the button is clicked we call this function to connect the users MetaMask Wallet\n                    onboardButton.onclick = onClickConnect;\n                    //The button is now disabled\n                    onboardButton.disabled = false;\n                }\n            };\n            //Eth_Accounts-getAccountsButton\n            getAccountsButton.addEventListener('click', _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var accounts;\n                return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return ethereum.request({\n                                method: 'eth_accounts'\n                            });\n                        case 2:\n                            accounts = _ctx.sent;\n                            //We take the first address in the array of addresses and display it\n                            getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts';\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            })));\n            MetaMaskClientCheck();\n        };\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n            // Client-side-only code\n            window.addEventListener('DOMContentLoaded', initialize);\n        });\n    }, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n        ];\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Hello World.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"connectMetamask\",\n                type: \"button\",\n                onClick: function(e) {\n                    return initialize().onClickConnect();\n                },\n                children: \"Connect To Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"getAccounts\",\n                type: \"button\",\n                onClick: function(e) {\n                    return handleClick(e);\n                },\n                children: \"Get Accounts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"getAccountsResult\",\n                type: \"button\",\n                onClick: function(e) {\n                    return handleClick(e);\n                },\n                children: \"Get Accounts Results\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this));\n};\n_s(IndexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQztBQUNrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxRSxFQUFnQztBQUVqQixRQUFRLENBQUNLLFNBQVMsR0FBRyxDQUFDOzs7SUFDbkNILGdEQUFTLEtBQUMsUUFBUSxHQUFGLENBQUM7O1FBQ2pCLEdBQUssQ0FBQ0ksTUFBTSxHQUFHTixzREFBUztRQUV4QixHQUFLLENBQUNPLFdBQVcsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1lBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQjtRQUM5QixDQUFDO1FBRUQsR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFBUSxHQUFGLENBQUM7WUFDeEIsRUFBdUI7WUFDdkIsR0FBSyxDQUFDQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQWU7WUFDN0QsR0FBSyxDQUFDQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBYTtZQUMvRCxHQUFLLENBQUNFLGlCQUFpQixHQUFHSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFtQjtZQUVyRSxFQUFzRTtZQUN0RSxHQUFLLENBQUNHLG1CQUFtQixHQUFHLFFBQVEsR0FBRixDQUFDO2dCQUNqQyxFQUFrRjtnQkFDbEYsR0FBSyxDQUFHQyxRQUFRLEdBQUtDLE1BQU0sQ0FBbkJELFFBQVE7Z0JBQ2hCLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDRixRQUFRLElBQUlBLFFBQVEsQ0FBQ0csVUFBVTtZQUNoRCxDQUFDO1lBRUQsRUFBOEQ7WUFDOUQsR0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDbkIsNERBQWtCLENBQUMsQ0FBQztnQkFBQ0MsZUFBZSxFQUFmQSxpRUFBZTtZQUFDLENBQUM7WUFFN0QsRUFBeUM7WUFDekMsR0FBSyxDQUFDbUIsY0FBYyxHQUFHLFFBQVEsR0FBRixDQUFDO2dCQUM1QlgsYUFBYSxDQUFDWSxTQUFTLEdBQUcsQ0FBd0I7Z0JBQ2xEWixhQUFhLENBQUNhLFFBQVEsR0FBRyxJQUFJO2dCQUM3QixFQUFpRztnQkFDakdILFVBQVUsQ0FBQ0ksZUFBZTtZQUM1QixDQUFDO1lBRUQsR0FBSyxDQUFDQyxjQUFjOzRNQUFHLFFBQVEsV0FBSSxDQUFDOzs7Ozs7dUNBSTFCVCxRQUFRLENBQUNVLE9BQU8sQ0FBQyxDQUFDO29DQUFDQyxNQUFNLEVBQUUsQ0FBcUI7Z0NBQUMsQ0FBQzs7Ozs7OztnQ0FFeERwQixPQUFPLENBQUNxQixLQUFLOzs7Ozs7Ozs7OztnQkFFakIsQ0FBQztnQ0FSS0gsY0FBYzs7OztZQVVwQixHQUFLLENBQUNJLG1CQUFtQixHQUFHLFFBQVEsR0FBRixDQUFDO2dCQUNqQyxFQUE2QztnQkFDN0MsRUFBRSxHQUFHZCxtQkFBbUIsSUFBSSxDQUFDO29CQUMzQixFQUE4RDtvQkFDOURMLGFBQWEsQ0FBQ1ksU0FBUyxHQUFHLENBQWlDO29CQUMzRCxFQUFtRDtvQkFDbkRaLGFBQWEsQ0FBQ29CLE9BQU8sR0FBR1QsY0FBYztvQkFDdEMsRUFBNEI7b0JBQzVCWCxhQUFhLENBQUNhLFFBQVEsR0FBRyxLQUFLO2dCQUNoQyxDQUFDLE1BQU0sQ0FBQztvQkFDTixFQUFxRTtvQkFDckViLGFBQWEsQ0FBQ1ksU0FBUyxHQUFHLENBQVM7b0JBQ25DLEVBQXVGO29CQUN2RlosYUFBYSxDQUFDb0IsT0FBTyxHQUFHTCxjQUFjO29CQUN0QyxFQUE0QjtvQkFDNUJmLGFBQWEsQ0FBQ2EsUUFBUSxHQUFHLEtBQUs7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBRUQsRUFBZ0M7WUFDaENWLGlCQUFpQixDQUFDa0IsZ0JBQWdCLENBQUMsQ0FBTyx5TEFBRSxRQUFRLFdBQUksQ0FBQztvQkFFakRDLFFBQVE7Ozs7O21DQUFTaEIsUUFBUSxDQUFDVSxPQUFPLENBQUMsQ0FBQztnQ0FBQ0MsTUFBTSxFQUFFLENBQWM7NEJBQUMsQ0FBQzs7NEJBQTVESyxRQUFROzRCQUNkLEVBQW9FOzRCQUNwRWxCLGlCQUFpQixDQUFDbUIsU0FBUyxHQUFHRCxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQTBCOzs7Ozs7WUFDekUsQ0FBQztZQUVESCxtQkFBbUI7UUFDckIsQ0FBQztRQUNEN0IsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNmLEVBQXdCO1lBQ3hCaUIsTUFBTSxDQUFDYyxnQkFBZ0IsQ0FBQyxDQUFrQixtQkFBRXRCLFVBQVU7UUFDMUQsQ0FBQztJQUNELENBQUM7O1lBekVnQlgsa0RBQVM7OztJQTBFeEIsTUFBTSw2RUFDSG9DLENBQUc7O1lBQUMsQ0FDUztZQUFDLENBQUc7d0ZBQ2ZDLENBQU07Z0JBQUNDLEVBQUUsRUFBQyxDQUFpQjtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7Z0JBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVBoQyxDQUFDO29CQUFLRyxNQUFNLENBQU5BLFVBQVUsR0FBR2dCLGNBQWM7OzBCQUFJLENBQW1COzs7Ozs7d0ZBQzVHVSxDQUFNO2dCQUFDQyxFQUFFLEVBQUMsQ0FBYTtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7Z0JBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVBoQyxDQUFDO29CQUFLRCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsQ0FBQzs7MEJBQUcsQ0FBWTs7Ozs7O3dGQUNsRjZCLENBQU07Z0JBQUNDLEVBQUUsRUFBQyxDQUFtQjtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7Z0JBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVBoQyxDQUFDO29CQUFLRCxNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsQ0FBQzs7MEJBQUcsQ0FBb0I7Ozs7Ozs7Ozs7OztBQUd2RyxDQUFDO0dBcEZ1QkgsU0FBUztLQUFUQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21pbnQuanM/ZWZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1ldGFNYXNrT25ib2FyZGluZywgeyBmb3J3YXJkZXJPcmlnaW4gfSBmcm9tICdAbWV0YW1hc2svb25ib2FyZGluZydcclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdmdWNrIHRoaXMgc2hpdCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgIC8vQmFzaWMgQWN0aW9ucyBTZWN0aW9uXHJcbiAgICBjb25zdCBvbmJvYXJkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvbm5lY3RCdXR0b24nKTtcclxuICAgIGNvbnN0IGdldEFjY291bnRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldEFjY291bnRzJyk7XHJcbiAgICBjb25zdCBnZXRBY2NvdW50c1Jlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXRBY2NvdW50c1Jlc3VsdCcpO1xyXG4gIFxyXG4gICAgLy9DcmVhdGVkIGNoZWNrIGZ1bmN0aW9uIHRvIHNlZSBpZiB0aGUgTWV0YU1hc2sgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZFxyXG4gICAgY29uc3QgaXNNZXRhTWFza0luc3RhbGxlZCA9ICgpID0+IHtcclxuICAgICAgLy9IYXZlIHRvIGNoZWNrIHRoZSBldGhlcmV1bSBiaW5kaW5nIG9uIHRoZSB3aW5kb3cgb2JqZWN0IHRvIHNlZSBpZiBpdCdzIGluc3RhbGxlZFxyXG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcbiAgICAgIHJldHVybiBCb29sZWFuKGV0aGVyZXVtICYmIGV0aGVyZXVtLmlzTWV0YU1hc2spO1xyXG4gICAgfTtcclxuICBcclxuICAgIC8vV2UgY3JlYXRlIGEgbmV3IE1ldGFNYXNrIG9uYm9hcmRpbmcgb2JqZWN0IHRvIHVzZSBpbiBvdXIgYXBwXHJcbiAgICBjb25zdCBvbmJvYXJkaW5nID0gbmV3IE1ldGFNYXNrT25ib2FyZGluZyh7IGZvcndhcmRlck9yaWdpbiB9KTtcclxuICBcclxuICAgIC8vVGhpcyB3aWxsIHN0YXJ0IHRoZSBvbmJvYXJkaW5nIHByb2NjZXNzXHJcbiAgICBjb25zdCBvbkNsaWNrSW5zdGFsbCA9ICgpID0+IHtcclxuICAgICAgb25ib2FyZEJ1dHRvbi5pbm5lclRleHQgPSAnT25ib2FyZGluZyBpbiBwcm9ncmVzcyc7XHJcbiAgICAgIG9uYm9hcmRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAvL09uIHRoaXMgb2JqZWN0IHdlIGhhdmUgc3RhcnRPbmJvYXJkaW5nIHdoaWNoIHdpbGwgc3RhcnQgdGhlIG9uYm9hcmRpbmcgcHJvY2VzcyBmb3Igb3VyIGVuZCB1c2VyXHJcbiAgICAgIG9uYm9hcmRpbmcuc3RhcnRPbmJvYXJkaW5nKCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgb25DbGlja0Nvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gV2lsbCBvcGVuIHRoZSBNZXRhTWFzayBVSVxyXG4gICAgICAgIC8vIFlvdSBzaG91bGQgZGlzYWJsZSB0aGlzIGJ1dHRvbiB3aGlsZSB0aGUgcmVxdWVzdCBpcyBwZW5kaW5nIVxyXG4gICAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IE1ldGFNYXNrQ2xpZW50Q2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgIC8vTm93IHdlIGNoZWNrIHRvIHNlZSBpZiBNZXRtYXNrIGlzIGluc3RhbGxlZFxyXG4gICAgICBpZiAoIWlzTWV0YU1hc2tJbnN0YWxsZWQoKSkge1xyXG4gICAgICAgIC8vSWYgaXQgaXNuJ3QgaW5zdGFsbGVkIHdlIGFzayB0aGUgdXNlciB0byBjbGljayB0byBpbnN0YWxsIGl0XHJcbiAgICAgICAgb25ib2FyZEJ1dHRvbi5pbm5lclRleHQgPSAnQ2xpY2sgaGVyZSB0byBpbnN0YWxsIE1ldGFNYXNrISc7XHJcbiAgICAgICAgLy9XaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB3ZSBjYWxsIHRoIGlzIGZ1bmN0aW9uXHJcbiAgICAgICAgb25ib2FyZEJ1dHRvbi5vbmNsaWNrID0gb25DbGlja0luc3RhbGw7XHJcbiAgICAgICAgLy9UaGUgYnV0dG9uIGlzIG5vdyBkaXNhYmxlZFxyXG4gICAgICAgIG9uYm9hcmRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL0lmIE1ldGFNYXNrIGlzIGluc3RhbGxlZCB3ZSBhc2sgdGhlIHVzZXIgdG8gY29ubmVjdCB0byB0aGVpciB3YWxsZXRcclxuICAgICAgICBvbmJvYXJkQnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0JztcclxuICAgICAgICAvL1doZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBjb25uZWN0IHRoZSB1c2VycyBNZXRhTWFzayBXYWxsZXRcclxuICAgICAgICBvbmJvYXJkQnV0dG9uLm9uY2xpY2sgPSBvbkNsaWNrQ29ubmVjdDtcclxuICAgICAgICAvL1RoZSBidXR0b24gaXMgbm93IGRpc2FibGVkXHJcbiAgICAgICAgb25ib2FyZEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgLy9FdGhfQWNjb3VudHMtZ2V0QWNjb3VudHNCdXR0b25cclxuICAgIGdldEFjY291bnRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvL3dlIHVzZSBldGhfYWNjb3VudHMgYmVjYXVzZSBpdCByZXR1cm5zIGEgbGlzdCBvZiBhZGRyZXNzZXMgb3duZWQgYnkgdXMuXHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XHJcbiAgICAgIC8vV2UgdGFrZSB0aGUgZmlyc3QgYWRkcmVzcyBpbiB0aGUgYXJyYXkgb2YgYWRkcmVzc2VzIGFuZCBkaXNwbGF5IGl0XHJcbiAgICAgIGdldEFjY291bnRzUmVzdWx0LmlubmVySFRNTCA9IGFjY291bnRzWzBdIHx8ICdOb3QgYWJsZSB0byBnZXQgYWNjb3VudHMnO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBNZXRhTWFza0NsaWVudENoZWNrKCk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2xpZW50LXNpZGUtb25seSBjb2RlXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpO1xyXG59KVxyXG59KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBIZWxsbyBXb3JsZC57XCIgXCJ9XHJcbiAgICAgIDxidXR0b24gaWQ9J2Nvbm5lY3RNZXRhbWFzaycgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBpbml0aWFsaXplKCkub25DbGlja0Nvbm5lY3QoKX0+Q29ubmVjdCBUbyBNZXRhbWFzazwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGlkPSdnZXRBY2NvdW50cycgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX0+R2V0IEFjY291bnRzPC9idXR0b24+ICAgICAgXHJcbiAgICAgIDxidXR0b24gaWQ9J2dldEFjY291bnRzUmVzdWx0JyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfT5HZXQgQWNjb3VudHMgUmVzdWx0czwvYnV0dG9uPiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsIk1ldGFNYXNrT25ib2FyZGluZyIsImZvcndhcmRlck9yaWdpbiIsIkluZGV4UGFnZSIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsaXplIiwib25ib2FyZEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBY2NvdW50c0J1dHRvbiIsImdldEFjY291bnRzUmVzdWx0IiwiaXNNZXRhTWFza0luc3RhbGxlZCIsImV0aGVyZXVtIiwid2luZG93IiwiQm9vbGVhbiIsImlzTWV0YU1hc2siLCJvbmJvYXJkaW5nIiwib25DbGlja0luc3RhbGwiLCJpbm5lclRleHQiLCJkaXNhYmxlZCIsInN0YXJ0T25ib2FyZGluZyIsIm9uQ2xpY2tDb25uZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsImVycm9yIiwiTWV0YU1hc2tDbGllbnRDaGVjayIsIm9uY2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiYWNjb3VudHMiLCJpbm5lckhUTUwiLCJkaXYiLCJidXR0b24iLCJpZCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});