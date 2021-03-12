/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/homepage/index.js":
/*!****************************************!*\
  !*** ./resources/js/homepage/index.js ***!
  \****************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\web\\exercises\\Final_Project\\Gifter\\resources\\js\\homepage\\index.js: Identifier 'Router' has already been declared (7:26)\n\n\u001b[0m \u001b[90m  5 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mWelcome\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m\"./pages/welcome/welcome\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mRoute\u001b[39m\u001b[33m,\u001b[39m \u001b[33mRouter\u001b[39m\u001b[33m,\u001b[39m \u001b[33mSwitch\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m\"react-router\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mBrowserRouter\u001b[39m \u001b[36mas\u001b[39m \u001b[33mRouter\u001b[39m\u001b[33m,\u001b[39m \u001b[33mSwitch\u001b[39m\u001b[33m,\u001b[39m \u001b[33mRoute\u001b[39m\u001b[33m,\u001b[39m \u001b[33mLink\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m\"react-router-dom\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mRouter\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:776:17)\n    at Object.raiseWithData (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:769:17)\n    at Object.raise (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:737:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:1453:12)\n    at ScopeHandler.declareName (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:1419:12)\n    at Object.checkLVal (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:10193:24)\n    at Object.parseImportSpecifier (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:13792:10)\n    at Object.parseNamedImportSpecifiers (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:13769:12)\n    at Object.parseImport (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:13600:39)\n    at Object.parseStatementContent (C:\\web\\exercises\\Final_Project\\Gifter\\node_modules\\@babel\\parser\\lib\\index.js:12284:27)");

/***/ }),

/***/ "./resources/scss/gifter.scss":
/*!************************************!*\
  !*** ./resources/scss/gifter.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./resources/js/homepage/index.js"],
/******/ 			["./resources/scss/gifter.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map