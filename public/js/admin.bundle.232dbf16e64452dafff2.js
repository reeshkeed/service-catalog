/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"admin": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "D:\\User\\Aleks\\Documents\\Dev\\service-catalog\\public";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./resources/js/index.admin.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Admin.js":
/*!*******************************!*\
  !*** ./resources/js/Admin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./resources/js/routes.js\");\n\n\n //JSX\n\nvar Admin = function Admin(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"routes\"].map(function (route, key) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: key,\n      exact: true,\n      path: route.path,\n      component: route.component\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);\n\n//# sourceURL=webpack:///./resources/js/Admin.js?");

/***/ }),

/***/ "./resources/js/index.admin.js":
/*!*************************************!*\
  !*** ./resources/js/index.admin.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin */ \"./resources/js/Admin.js\");\n\n\n\n\nif (document.querySelector('#root')) {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.querySelector('#root'));\n}\n\n//# sourceURL=webpack:///./resources/js/index.admin.js?");

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _views_admin_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/admin/Home */ \"./resources/js/views/admin/Home.js\");\n/* harmony import */ var _views_admin_categories_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/admin/categories/List */ \"./resources/js/views/admin/categories/List.js\");\n/* harmony import */ var _views_errors_404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/errors/404 */ \"./resources/js/views/errors/404.js\");\n\n\n\nvar routes = [{\n  path: '/',\n  component: _views_admin_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/categories',\n  component: _views_admin_categories_List__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  component: _views_errors_404__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}];\n\n//# sourceURL=webpack:///./resources/js/routes.js?");

/***/ }),

/***/ "./resources/js/views/admin/Home.js":
/*!******************************************!*\
  !*** ./resources/js/views/admin/Home.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Master */ \"./resources/js/views/admin/layouts/Master.js\");\n\n\n\nvar Home = function Home(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Master__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Home\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./resources/js/views/admin/Home.js?");

/***/ }),

/***/ "./resources/js/views/admin/categories/List.js":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/categories/List.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Master */ \"./resources/js/views/admin/layouts/Master.js\");\n\n\n\nvar List = function List(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Master__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"List\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./resources/js/views/admin/categories/List.js?");

/***/ }),

/***/ "./resources/js/views/admin/layouts/Master.js":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/layouts/Master.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/Drawer/index.js\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/List/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/Divider/index.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Badge */ \"./node_modules/@material-ui/core/Badge/index.js\");\n/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ \"./node_modules/@material-ui/icons/ChevronLeft.js\");\n/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Notifications */ \"./node_modules/@material-ui/icons/Notifications.js\");\n/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/ListItemText/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ \"./node_modules/@material-ui/core/ListSubheader/index.js\");\n/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ \"./node_modules/@material-ui/icons/Dashboard.js\");\n/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ \"./node_modules/@material-ui/icons/ShoppingCart.js\");\n/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_29__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar drawerWidth = 240;\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      display: 'flex'\n    },\n    toolbar: {\n      paddingRight: 24 // keep right padding when drawer closed\n\n    },\n    toolbarIcon: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7___default()({\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'flex-end',\n      padding: '0 8px'\n    }, theme.mixins.toolbar),\n    appBar: {\n      zIndex: theme.zIndex.drawer + 1,\n      transition: theme.transitions.create(['width', 'margin'], {\n        easing: theme.transitions.easing.sharp,\n        duration: theme.transitions.duration.leavingScreen\n      })\n    },\n    appBarShift: {\n      marginLeft: drawerWidth,\n      width: \"calc(100% - \".concat(drawerWidth, \"px)\"),\n      transition: theme.transitions.create(['width', 'margin'], {\n        easing: theme.transitions.easing.sharp,\n        duration: theme.transitions.duration.enteringScreen\n      })\n    },\n    menuButton: {\n      marginLeft: 12,\n      marginRight: 36\n    },\n    menuButtonHidden: {\n      display: 'none'\n    },\n    title: {\n      flexGrow: 1\n    },\n    drawerPaper: {\n      position: 'relative',\n      whiteSpace: 'nowrap',\n      width: drawerWidth,\n      transition: theme.transitions.create('width', {\n        easing: theme.transitions.easing.sharp,\n        duration: theme.transitions.duration.enteringScreen\n      })\n    },\n    drawerPaperClose: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({\n      overflowX: 'hidden',\n      transition: theme.transitions.create('width', {\n        easing: theme.transitions.easing.sharp,\n        duration: theme.transitions.duration.leavingScreen\n      }),\n      width: theme.spacing.unit * 7\n    }, theme.breakpoints.up('sm'), {\n      width: theme.spacing.unit * 9\n    }),\n    appBarSpacer: theme.mixins.toolbar,\n    content: {\n      flexGrow: 1,\n      padding: theme.spacing.unit * 3,\n      height: '100vh',\n      overflow: 'auto'\n    },\n    h5: {\n      marginBottom: theme.spacing.unit * 2\n    },\n    body: {\n      padding: '2rem'\n    }\n  };\n};\n\nvar Master =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Master, _React$Component);\n\n  function Master() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Master);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Master)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      open: true\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleDrawerOpen\", function () {\n      _this.setState({\n        open: true\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleDrawerClose\", function () {\n      _this.setState({\n        open: false\n      });\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Master, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          classes = _this$props.classes,\n          history = _this$props.history;\n      var renderNavLinks = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_24___default.a, {\n        button: true,\n        onClick: function onClick() {\n          return history.push('/');\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_25___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_28___default.a, null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_26___default.a, {\n        primary: \"Dashboard\"\n      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_24___default.a, {\n        button: true,\n        onClick: function onClick() {\n          return history.push('/categories');\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_25___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_29___default.a, null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_26___default.a, {\n        primary: \"Categories\"\n      })));\n      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n        className: classes.root\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default.a, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14___default.a, {\n        position: \"absolute\",\n        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.appBar, this.state.open && classes.appBarShift)\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15___default.a, {\n        disableGutters: !this.state.open,\n        className: classes.toolbar\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {\n        color: \"inherit\",\n        \"aria-label\": \"Open drawer\",\n        onClick: this.handleDrawerOpen,\n        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.menuButton, this.state.open && classes.menuButtonHidden)\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_21___default.a, null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17___default.a, {\n        component: \"h1\",\n        variant: \"h6\",\n        color: \"inherit\",\n        noWrap: true,\n        className: classes.title\n      }, \"Dashboard\"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {\n        color: \"inherit\"\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_20___default.a, {\n        badgeContent: 4,\n        color: \"secondary\"\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_23___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13___default.a, {\n        variant: \"permanent\",\n        classes: {\n          paper: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)\n        },\n        open: this.state.open\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n        className: classes.toolbarIcon\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {\n        onClick: this.handleDrawerClose\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_22___default.a, null))), renderNavLinks), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"main\", {\n        className: classes.content\n      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n        className: classes.body\n      }, this.props.children)));\n    }\n  }]);\n\n  return Master;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\nMaster.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__[\"withStyles\"])(styles)(Master));\n\n//# sourceURL=webpack:///./resources/js/views/admin/layouts/Master.js?");

/***/ }),

/***/ "./resources/js/views/errors/404.js":
/*!******************************************!*\
  !*** ./resources/js/views/errors/404.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"404 not Found\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./resources/js/views/errors/404.js?");

/***/ })

/******/ });