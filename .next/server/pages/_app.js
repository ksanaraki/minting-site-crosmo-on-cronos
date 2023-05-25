"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: external "@sentry/react"
var react_ = __webpack_require__(427);
;// CONCATENATED MODULE: external "redux-sentry-middleware"
const external_redux_sentry_middleware_namespaceObject = require("redux-sentry-middleware");
var external_redux_sentry_middleware_default = /*#__PURE__*/__webpack_require__.n(external_redux_sentry_middleware_namespaceObject);
// EXTERNAL MODULE: ./globalState/initSlice.js
var initSlice = __webpack_require__(6);
// EXTERNAL MODULE: ./globalState/user.js
var user = __webpack_require__(641);
;// CONCATENATED MODULE: ./store/store.js






const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    user: user/* user */.EA,
    appInitialize: initSlice/* appInitializeStateReducer */.uY
});
// const reduxDevToolsComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sentryEnhancedMiddlewares = (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()), external_redux_sentry_middleware_default()(react_, {}));
const enableDevTools =  false || process.env.REACT_APP_DEVTOOLS === 'true';
const reduxDevToolsEnhancedMiddlewares = sentryEnhancedMiddlewares;
const store = (0,external_redux_namespaceObject.createStore)(rootReducer, reduxDevToolsEnhancedMiddlewares);
/* harmony default export */ const store_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 322:
/***/ ((module) => {

module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("@sentry/react");

/***/ }),

/***/ 137:
/***/ ((module) => {

module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [988], () => (__webpack_exec__(518)));
module.exports = __webpack_exports__;

})();