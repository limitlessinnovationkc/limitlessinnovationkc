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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'\n// import Link from \"next/link\";\nfunction IndexPage() {\n    _s();\n    var initialize = function() {\n        //Basic Actions Section\n        var connectButton = document.getElementById('connectMetamask');\n    };\n    function onClickConnect() {\n        return _onClickConnect.apply(this, arguments);\n    }\n    function _onClickConnect() {\n        _onClickConnect = _asyncToGenerator(C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Blaine_Crypto_Solidity_lgg_nft2_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // const connectButton = document.getElementById('connectMetamask');\n                        connectButton.innerText = 'Connecting....';\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 4:\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                    case 9:\n                        connectButton.innerText = 'Connected';\n                        connectButton.disabled = true;\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    6\n                ]\n            ]);\n        }));\n        return _onClickConnect.apply(this, arguments);\n    }\n    ;\n    var testClick = function(e) {\n        console.log('Test console print');\n    };\n    var runOnLoad = function(e) {\n        var connectButton = document.getElementById('connectMetamask');\n        if (typeof web3 !== 'undefined') {\n            console.log('MetaMask is installed');\n        } else {\n            connectButton.innerText = 'Please Install Metamask First';\n            console.log('MetaMask is not installed');\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        runOnLoad();\n        initialize();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Mint Page.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                id: \"connectMetamask\",\n                type: \"button\",\n                onClick: function(e) {\n                    return onClickConnect();\n                },\n                children: \"Connect Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Blaine\\\\Crypto\\\\Solidity\\\\lgg-nft2\\\\nextjs-blog\\\\pages\\\\mint.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this));\n};\n_s(IndexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEMsRUFBNkU7QUFDN0UsRUFBZ0M7QUFFakIsUUFBUSxDQUFDRSxTQUFTLEdBQUcsQ0FBQzs7SUFFbkMsR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDeEIsRUFBdUI7UUFDdkIsR0FBSyxDQUFDQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQWlCO0lBQ2pFLENBQUM7YUFDY0MsY0FBYztlQUFkQSxlQUFjOzthQUFkQSxlQUFjO1FBQWRBLGVBQWMsb0xBQTdCLFFBQVEsV0FBd0IsQ0FBQzs7Ozt3QkFDL0IsRUFBb0U7d0JBQ3BFSCxhQUFhLENBQUNJLFNBQVMsR0FBRyxDQUFnQjs7OytCQUlsQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQzs0QkFBQ0MsTUFBTSxFQUFFLENBQXFCO3dCQUFDLENBQUM7Ozs7Ozs7d0JBRXhEQyxPQUFPLENBQUNDLEtBQUs7O3dCQUdmVCxhQUFhLENBQUNJLFNBQVMsR0FBRyxDQUFXO3dCQUNyQ0osYUFBYSxDQUFDVSxRQUFRLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7UUFDL0IsQ0FBQztlQWJjUCxlQUFjOzs7SUFlN0IsR0FBSyxDQUFDUSxTQUFTLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUN4QkosT0FBTyxDQUFDSyxHQUFHLENBQUMsQ0FBb0I7SUFDbEMsQ0FBQztJQUVELEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsQ0FBUEYsQ0FBQyxFQUFLLENBQUM7UUFDeEIsR0FBSyxDQUFDWixhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQWlCO1FBQzdELEVBQUUsRUFBRSxNQUFNLENBQUNhLElBQUksS0FBSyxDQUFXLFlBQUMsQ0FBQztZQUM5QlAsT0FBTyxDQUFDSyxHQUFHLENBQUMsQ0FBdUI7UUFDdEMsQ0FBQyxNQUNHLENBQUM7WUFDSGIsYUFBYSxDQUFDSSxTQUFTLEdBQUcsQ0FBK0I7WUFDeERJLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLENBQTJCO1FBQzFDLENBQUM7SUFDQSxDQUFDO0lBRU5oQixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZpQixTQUFTO1FBQ1RmLFVBQVU7SUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDSGlCLENBQUc7O1lBQUMsQ0FDTztZQUFDLENBQUc7d0ZBQ2JDLENBQU07Z0JBQUNDLEVBQUUsRUFBQyxDQUFpQjtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7Z0JBQUNDLE9BQU8sRUFBRSxRQUFRLENBQVBSLENBQUM7b0JBQUtULE1BQU0sQ0FBTkEsY0FBYzs7MEJBQUksQ0FBZ0I7Ozs7Ozs7Ozs7OztBQUtuRyxDQUFDO0dBaER1QkwsU0FBUztLQUFUQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21pbnQuanM/ZWZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgTWV0YU1hc2tPbmJvYXJkaW5nLCB7IGZvcndhcmRlck9yaWdpbiB9IGZyb20gJ0BtZXRhbWFzay9vbmJvYXJkaW5nJ1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAvL0Jhc2ljIEFjdGlvbnMgU2VjdGlvblxyXG4gICAgY29uc3QgY29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKTtcclxuICB9O1xyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0KCkge1xyXG4gICAgLy8gY29uc3QgY29ubmVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0TWV0YW1hc2snKTtcclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RpbmcuLi4uJztcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFdpbGwgb3BlbiB0aGUgTWV0YU1hc2sgVUlcclxuICAgICAgLy8gWW91IHNob3VsZCBkaXNhYmxlIHRoaXMgYnV0dG9uIHdoaWxlIHRoZSByZXF1ZXN0IGlzIHBlbmRpbmchXHJcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIH1cclxuICAgIGNvbm5lY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3RlZCc7XHJcbiAgICBjb25uZWN0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0ZXN0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1Rlc3QgY29uc29sZSBwcmludCcpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcnVuT25Mb2FkID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdE1ldGFtYXNrJyk7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2ViMyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnTWV0YU1hc2sgaXMgaW5zdGFsbGVkJylcclxuICAgICAgfSBcclxuICAgICAgZWxzZXtcclxuICAgICAgICBjb25uZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdQbGVhc2UgSW5zdGFsbCBNZXRhbWFzayBGaXJzdCc7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkJylcclxuICAgICAgfVxyXG4gICAgICAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcnVuT25Mb2FkKCk7XHJcbiAgICBpbml0aWFsaXplKCk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIE1pbnQgUGFnZS57XCIgXCJ9XHJcbiAgICAgIDxidXR0b24gaWQ9J2Nvbm5lY3RNZXRhbWFzaycgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ29ubmVjdCgpfT5Db25uZWN0IE1ldGFtYXNrPC9idXR0b24+XHJcbiAgICAgIHsvKiA8YnV0dG9uIGlkPSdnZXRBY2NvdW50cycgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB0ZXN0Q2xpY2soZSl9PkdldCBBY2NvdW50czwvYnV0dG9uPiAgICAgICAqL31cclxuICAgICAgey8qIDxidXR0b24gaWQ9J2dldEFjY291bnRzUmVzdWx0JyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfT5HZXQgQWNjb3VudHMgUmVzdWx0czwvYnV0dG9uPiAgICAgICAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJJbmRleFBhZ2UiLCJpbml0aWFsaXplIiwiY29ubmVjdEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbkNsaWNrQ29ubmVjdCIsImlubmVyVGV4dCIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJlcnJvciIsImRpc2FibGVkIiwidGVzdENsaWNrIiwiZSIsImxvZyIsInJ1bk9uTG9hZCIsIndlYjMiLCJkaXYiLCJidXR0b24iLCJpZCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mint.js\n");

/***/ })

});