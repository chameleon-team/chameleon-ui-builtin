webpackJsonp([0],{

/***/ "+/tp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ssr support
const inBrowser = typeof window !== 'undefined'
/* harmony export (immutable) */ __webpack_exports__["a"] = inBrowser;

const ua = inBrowser && navigator.userAgent.toLowerCase()
/* unused harmony export ua */

const isWeChatDevTools = ua && /wechatdevtools/.test(ua)
/* harmony export (immutable) */ __webpack_exports__["c"] = isWeChatDevTools;

const isAndroid = ua && ua.indexOf('android') > 0
/* harmony export (immutable) */ __webpack_exports__["b"] = isAndroid;



/***/ }),

/***/ "+Hus":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml__ = __webpack_require__("bQu9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394fecda_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml__ = __webpack_require__("/bmL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("4PA1")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-394fecda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394fecda_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394fecda_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_container_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/layout/container/container.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-394fecda", Component.options)
  } else {
    hotAPI.reload("data-v-394fecda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "+gIU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_scroll_event__ = __webpack_require__("fpcZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_scroll_init__ = __webpack_require__("Z5Xs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_scroll_core__ = __webpack_require__("4bam");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_scroll_pulldown__ = __webpack_require__("j8uF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_scroll_pullup__ = __webpack_require__("Lwr/");






function CScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.')
  }
  this.scroller = this.wrapper.children[0]
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.')
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style

  this._init(el, options)
}

Object(__WEBPACK_IMPORTED_MODULE_1__src_scroll_init__["a" /* initMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_2__src_scroll_core__["a" /* coreMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_0__src_scroll_event__["a" /* eventMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_3__src_scroll_pulldown__["a" /* pullDownMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_4__src_scroll_pullup__["a" /* pullUpMixin */])(CScroll)


/* harmony default export */ __webpack_exports__["default"] = (CScroll);

/***/ }),

/***/ "+iRC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showToast;

var _index = __webpack_require__("nFN1");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showToast(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$duration = opt.duration,
      duration = _opt$duration === undefined ? 2000 : _opt$duration;

  _index2.default.showToast({
    message: message,
    duration: duration
  });
}

/***/ }),

/***/ "+loL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("7B77");
var step = __webpack_require__("qcjd");
var Iterators = __webpack_require__("7unY");
var toIObject = __webpack_require__("dkPk");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("aPys")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "+mgi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml__ = __webpack_require__("ebFP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_696889f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml__ = __webpack_require__("lwos");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("YV71")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-696889f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_696889f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_696889f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/textarea/textarea.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-696889f2", Component.options)
  } else {
    hotAPI.reload("data-v-696889f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/+/s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("+/tp");


const DEFAULT_INTERVAL = 100 / 60

function noop() {
}

const requestAnimationFrame = (() => {
  if (!__WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */]) {
    /* istanbul ignore if */
    return noop
  }
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2) // make interval as precise as possible.
    }
})()
/* harmony export (immutable) */ __webpack_exports__["b"] = requestAnimationFrame;


const cancelAnimationFrame = (() => {
  if (!__WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */]) {
    /* istanbul ignore if */
    return noop
  }
  return window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id)
    }
})()
/* harmony export (immutable) */ __webpack_exports__["a"] = cancelAnimationFrame;


/***/ }),

/***/ "/9uN":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _richtextWeb = __webpack_require__("FkKS");

var _richtextWeb2 = _interopRequireDefault(_richtextWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Richtext = function () {
  function Richtext() {
    (0, _classCallCheck3.default)(this, Richtext);
    this.data = {
      richData: {
        message: '这是一段富文本',
        rich_message: [{ "color": "#666666",
          "font_size": 28,
          "start": 0,
          "end": 3 }, {
          "color": "#fc9153",
          "font_size": 28,
          "start": 4,
          "end": 6
        }]
      }
    };
    this.computed = {};
    this.watch = {};
    this.methods = {};
  }

  (0, _createClass3.default)(Richtext, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return Richtext;
}(); //
//
//
//
//
//
//
//
//
//
//

exports.default = new Richtext();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cRichtext: _richtextWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "/VIj":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("StTd");
var isObject = __webpack_require__("OuXD");
var newPromiseCapability = __webpack_require__("bjfn");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "/akk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml__ = __webpack_require__("ChwR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_d62960d4_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml__ = __webpack_require__("dkby");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("qnJe")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d62960d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_d62960d4_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_d62960d4_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_foot_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/layout/foot/foot.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d62960d4", Component.options)
  } else {
    hotAPI.reload("data-v-d62960d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/bmL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "c-container  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.containerStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-394fecda", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "/g4D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml__ = __webpack_require__("ZGdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_61e6c6d6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml__ = __webpack_require__("RGMs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("JUmD")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61e6c6d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_61e6c6d6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_61e6c6d6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_head_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/layout/head/head.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61e6c6d6", Component.options)
  } else {
    hotAPI.reload("data-v-61e6c6d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/o7k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/device_804d59a.png";

/***/ }),

/***/ "05EG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "09Zy":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _common = __webpack_require__("Go0R");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getWidth',
    value: function getWidth() {
      var _getViewportSize = (0, _common.getViewportSize)(),
          viewportWidth = _getViewportSize.viewportWidth;

      return viewportWidth;
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "0JVX":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+loL");
var global = __webpack_require__("tRKg");
var hide = __webpack_require__("SMww");
var Iterators = __webpack_require__("7unY");
var TO_STRING_TAG = __webpack_require__("hTSS")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "0OI6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0T/F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "cml-btn  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.mrBtnStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: { "data-evt-click": "" },
      on: {
        click: _vm.$stopOuterA,
        cml$tap: function($event) {
          $event.stopPropagation()
          _vm._cmlEventProxy($event, "onclick")
        }
      }
    },
    [
      _c(
        "span",
        {
          staticClass: "btn-text  cml-base cml-text",
          style: _vm._cmlStyleProxy(_vm.mrTextStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-630d2ef1", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "0pJn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("inputable", {
    staticClass: " cml-base cml-inputable",
    attrs: {
      value: _vm.value,
      placeholder: _vm.placeholder,
      disabled: _vm.disabled,
      maxlength: _vm.maxlength,
      rows: _vm.rows,
      focus: _vm.focus,
      returnKeyType: _vm.returnKeyType,
      placerHolderColor: _vm.placerHolderColor,
      computedStyle: _vm.computedStyle,
      template: "textarea",
      "data-evt-input": "",
      "data-evt-blur": "",
      "data-evt-focus": "",
      "data-evt-keyup": ""
    },
    on: {
      input: function($event) {
        $event.stopPropagation()
        return _vm.inputEvent($event)
      },
      blur: function($event) {
        $event.stopPropagation()
        return _vm.blurEvent($event)
      },
      focus: function($event) {
        $event.stopPropagation()
        return _vm.focusEvent($event)
      },
      keyup: function($event) {
        $event.stopPropagation()
        return _vm.keyupEvent($event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ebd88b1", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "0v3s":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

var Image = function Image() {
        (0, _classCallCheck3.default)(this, Image);
        this.data = {
                imageSrc: __webpack_require__("lhC1")
        };
        this.methods = {
                imageLoad: function imageLoad(e) {},
                imageError: function imageError(e) {}
        };
};

exports.default = new Image();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "1+/X":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _index = __webpack_require__("lKwg");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPage(options) {
  return _index2.default.createPage(options);
}

/***/ }),

/***/ "1HDH":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("h696");

var _index2 = __webpack_require__("1+/X");

var _index3 = __webpack_require__("HTWf");

var _index4 = __webpack_require__("axut");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({
  createApp: _index.createApp,
  createPage: _index2.createPage,
  createComponent: _index3.createComponent
}, _index5.default);

/***/ }),

/***/ "1Iyr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__ = __webpack_require__("QYPr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_48473743_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__ = __webpack_require__("jB73");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("WBby")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-48473743"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_48473743_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_48473743_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/radio/radio.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48473743", Component.options)
  } else {
    hotAPI.reload("data-v-48473743", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1NSh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("VnQQ");

var _index2 = _interopRequireDefault(_index);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _scrollerWeb = __webpack_require__("mYJC");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _routerConfig2.default.routes; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var routeObj = {};
routes.forEach(function (route) {
  routeObj[route['name']] = route;
});

var Demo = function () {
  function Demo() {
    (0, _classCallCheck3.default)(this, Demo);
    this.data = {
      comList: [{
        id: "content",
        name: "基础内容",
        open: false,
        pages: [routeObj["text"],
        // routeObj["richtext"],
        routeObj["view"]],
        src: __webpack_require__("8UP1")
      }, {
        id: "view",
        name: "视图容器",
        open: false,
        pages: [routeObj["list"], routeObj["scroller"], routeObj["carousel"]],
        src: __webpack_require__("Yh4R")
      }, {
        id: "layout",
        name: "布局容器",
        open: false,
        pages: [routeObj["row"], routeObj["layout"]],
        src: __webpack_require__("Yh4R")
      }, {
        id: "form",
        name: "表单组件",
        open: false,
        pages: [routeObj["button"], routeObj["input"], routeObj["textarea"], routeObj["switch"], routeObj["radio"], routeObj["checkbox"]],
        src: __webpack_require__("9fjd")
      }, {
        id: "media",
        name: "媒体组件",
        open: false,
        pages: [routeObj["image"], routeObj["video"]],
        src: __webpack_require__("xkVx")
      }],
      apiList: [{
        id: "page",
        name: "界面",
        open: false,
        pages: [routeObj["cml.modal"], routeObj["cml.toast"]],
        src: __webpack_require__("83Hb")
      }, {
        id: "network",
        name: "网络",
        open: false,
        pages: [routeObj["cml.post"], routeObj["cml.get"]],
        src: __webpack_require__("pcby")
      }, {
        id: "storage",
        name: "数据",
        open: false,
        pages: [routeObj["cml.storage"]],
        src: __webpack_require__("bK8B")
      }, {
        id: "weex",
        name: "weex端扩展能力",
        open: false,
        pages: [routeObj["cml.weex"]],
        src: __webpack_require__("/o7k")
      }],
      comLogoSrc: __webpack_require__("XYVL"),
      apiLogoSrc: __webpack_require__("8HQr"),
      tabList: [{
        title: "组件",
        selected: true,
        iconPath: __webpack_require__("bdpq"),
        selectedIconPath: __webpack_require__("hocU")
      }, {
        title: "接口",
        selected: false,
        iconPath: __webpack_require__("l9fT"),
        selectedIconPath: __webpack_require__("GZYD")
      }],
      activeTab: "component",
      arrowIcon: "https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"
    };
    this.computed = {
      computedStyle: function computedStyle() {
        var transVal = this.activeTab === "api" ? "-750" : "0";
        var styl = "transform: translateX(" + transVal + "cpx);";

        return styl;
      },
      bodyComputedStyl: function bodyComputedStyl() {
        var styl = "";

        return styl;
      }
    };
    this.watch = {};
    this.methods = {
      kindToggle: function kindToggle(e) {
        var id = e.currentTarget.id;
        var list = this.activeTab === "component" ? this.comList : this.apiList;

        for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == id) {
            list[i].open = !list[i].open;
          } else {
            list[i].open = false;
          }
        }
      },
      tabItemClick: function tabItemClick(e) {
        var tar = e.currentTarget;
        var dataset = tar.dataset;
        var index = parseInt(dataset.index);

        this.tabList[index].selected = true;
        this.tabList[(index + 1) % 2].selected = false;

        this.activeTab = index == 0 ? "component" : "api";
      },
      routeTo: function routeTo(e) {
        var tar = e.currentTarget;
        var dataset = tar.dataset;
        var path = dataset.routepath;
        var url = dataset.routeurl;
        (0, _index2.default)({
          path: path
        });
      }
    };
  }

  (0, _createClass3.default)(Demo, [{
    key: "mounted",
    value: function mounted() {}
  }]);
  return Demo;
}();

exports.default = new Demo();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "1fyb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1iTB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Qz3K"), __esModule: true };

/***/ }),

/***/ "1yVu":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createApp',
    value: function createApp(options) {
      return new _web.App(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "204m":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

exports.buildToast = buildToast;

var _cToast = __webpack_require__("vpr6");

var _cToast2 = _interopRequireDefault(_cToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElement(id) {
  var popupContainer = document.createElement('div');
  popupContainer.setAttribute('id', id);
  document.body.appendChild(popupContainer);
}
// 在web端，以api的形式调用组件

/**
 * 在web端构建toast弹出层
 * @param {Object} opt 传入的弹出层配置
 * **/
function buildToast(opt) {

  createElement('popupContainer');

  var ToastConstructor = Vue.extend(_cToast2.default);
  var instance = new ToastConstructor({
    propsData: (0, _extends3.default)({
      needIcon: false
    }, opt)
  });
  instance.$mount('#popupContainer');
  return instance;
}

/***/ }),

/***/ "22F/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "23ia":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isInput
    ? _c("html:input", {
        ref: "c-input",
        style: _vm.styleObj,
        attrs: {
          value: _vm.value,
          type: _vm.type,
          placeholder: _vm.placeholder,
          disabled: _vm.disabled,
          maxlength: _vm.maxlength,
          pattern: _vm.typePattern,
          "data-evt-input": "",
          "data-evt-blur": "",
          "data-evt-focus": "",
          "data-evt-keyup": ""
        },
        on: {
          input: function($event) {
            $event.stopPropagation()
            return _vm.inputEvent($event)
          },
          blur: function($event) {
            $event.stopPropagation()
            return _vm.blurEvent($event)
          },
          focus: function($event) {
            $event.stopPropagation()
            return _vm.focusEvent($event)
          },
          keyup: function($event) {
            $event.stopPropagation()
            return _vm.keyupEvent($event)
          }
        }
      })
    : _c("html:textarea", {
        ref: "c-textarea",
        style: _vm.styleObj,
        attrs: {
          value: _vm.value,
          placeholder: _vm.placeholder,
          disabled: _vm.disabled,
          maxlength: _vm.maxlength,
          rows: _vm.rows,
          "data-evt-input": "",
          "data-evt-blur": "",
          "data-evt-focus": "",
          "data-evt-keyup": ""
        },
        on: {
          input: function($event) {
            $event.stopPropagation()
            return _vm.inputEvent($event)
          },
          blur: function($event) {
            $event.stopPropagation()
            return _vm.blurEvent($event)
          },
          focus: function($event) {
            $event.stopPropagation()
            return _vm.focusEvent($event)
          },
          keyup: function($event) {
            $event.stopPropagation()
            return _vm.keyupEvent($event)
          }
        }
      })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77b28d28", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "2Jju":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2Nno":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "richtext" } },
    [
      _c(
        "div",
        { staticClass: "container  cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "richtext" }
          }),
          _vm._v(" "),
          _c("c-richtext", {
            staticClass: " cml-base cml-c-richtext",
            staticStyle: { width: "2.66667rem", height: "1.33333rem" },
            attrs: { "rich-data": _vm.richData }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e5092d2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "2dk6":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _index = __webpack_require__("LOYP");

var moduleName = 'stream';
var methodName = 'fetch';

function request(params) {
  var url = params.url,
      headers = params.headers,
      body = params.body,
      method = params.method,
      cb = params.cb;


  var args = {
    url: url,
    method: method,
    headers: headers,
    type: 'text'

    // get不传body，for ios sdk
  };if (method.toLocaleLowerCase() != 'get') {
    args.body = body;
  }

  (0, _index.callNative)(moduleName, methodName, args, function (res) {
    /**
     * errno
     * data:
     *  status
     *  statusText
     *  data
     *  headers
     */
    var errno = res.errno,
        _res$data = res.data,
        data = _res$data === undefined ? '' : _res$data;

    if (errno == 0) {
      cb(data);
    }
  });
}

request.prototype.moduleName = moduleName;
request.prototype.methodName = methodName;

/***/ }),

/***/ "2qtJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("HJFi"), __esModule: true };

/***/ }),

/***/ "35um":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("SMww");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "3QsU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("+iRC");

var _index2 = _interopRequireDefault(_index);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _listWeb = __webpack_require__("5HYt");

var _listWeb2 = _interopRequireDefault(_listWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADMORE_COUNT = 4; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var List = function () {
  function List() {
    (0, _classCallCheck3.default)(this, List);
    this.data = {
      listStyle: "",
      bottomOffset: 20,
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      toElement: 'cell1'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      onBottom: function onBottom(e) {
        var _this = this;

        (0, _index2.default)({
          message: '加载中...',
          duration: 800
        });
        setTimeout(function () {
          var length = _this.lists.length;
          for (var i = length; i < length + LOADMORE_COUNT; ++i) {
            _this.lists.push(i + 1);
          }
        }, 800);
      },
      onScroll: function onScroll(e) {
        console.log(e);
        // alert(scroll);
      }
    };
  }

  (0, _createClass3.default)(List, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {
      var self = this;(function polling(ms) {
        setTimeout(function () {
          self.toElement = 'cell' + Math.ceil(Math.random() * 8);
          polling(ms);
        }, ms);
      })(3000);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return List;
}();

exports.default = new List();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cList: _listWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "3RHu":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _container = __webpack_require__("+Hus");

var _container2 = _interopRequireDefault(_container);

var _head = __webpack_require__("/g4D");

var _head2 = _interopRequireDefault(_head);

var _foot = __webpack_require__("/akk");

var _foot2 = _interopRequireDefault(_foot);

var _main = __webpack_require__("ycCb");

var _main2 = _interopRequireDefault(_main);

var _aside = __webpack_require__("Rkzw");

var _aside2 = _interopRequireDefault(_aside);

var _scrollerWeb = __webpack_require__("mYJC");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CLayout = function () {
        function CLayout() {
                (0, _classCallCheck3.default)(this, CLayout);
                this.data = {
                        headerTitle: 'layout布局',
                        headerDesc: 'layout布局',
                        asideStyle: 'height:300cpx;',
                        headStyle: '',
                        mainStyle: 'height:300cpx',
                        footStyle: ''
                };
        }

        (0, _createClass3.default)(CLayout, [{
                key: "mounted",
                value: function mounted() {}
        }]);
        return CLayout;
}();

exports.default = new CLayout();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cContainer: _container2.default, cHead: _head2.default, cFoot: _foot2.default, cMain: _main2.default, cAside: _aside2.default, cScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "3T2w":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _call = __webpack_require__("xjA6");

var _listen = __webpack_require__("ttS0");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'initChannel',
    value: function initChannel() {
      (0, _listen.init)();
    }
  }, {
    key: 'callNative',
    value: function callNative(module, method, args, callback) {
      _call.call.apply(undefined, ['invokeNativeMethod'].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: 'listenNative',
    value: function listenNative(module, method, callback) {
      _listen.listen.apply(undefined, arguments);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "3USK":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "3UaV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3h3k":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("5FFm");
var $keys = __webpack_require__("YKc4");

__webpack_require__("WcAg")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "3hlP":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bD0u");
__webpack_require__("WmdX");
__webpack_require__("Gfn8");
__webpack_require__("aSex");
module.exports = __webpack_require__("OzFA").Symbol;


/***/ }),

/***/ "46z+":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// options transform 基类
var BaseOptionsTransformer = function () {
  function BaseOptionsTransformer(config) {
    (0, _classCallCheck3.default)(this, BaseOptionsTransformer);

    this.type = config.type;
    this.options = config.options;
    this.injectMixins = config.injectMixins || [];
    this.builtinMixins = config.builtinMixins;
    this.hooks = config.hooks;
    this.hooksMap = config.hooksMap;
    this.platform = '';
  }

  (0, _createClass3.default)(BaseOptionsTransformer, [{
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);
  return BaseOptionsTransformer;
}();

exports.default = BaseOptionsTransformer;

/***/ }),

/***/ "49u2":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("w1p+");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "4PA1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4Ypl":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__("EK/L");

exports.default = {
  methods: {
    $stopOuterA: function $stopOuterA(e) {
      if (e && e.preventDefault && e.target) {
        if ((0, _component.insideA)(e.target)) {
          e.preventDefault();
        }
      }
    },
    $stopPropagation: function $stopPropagation(e) {
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    }
  }
};

/***/ }),

/***/ "4bam":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = coreMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__("9Cgj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ease__ = __webpack_require__("Rwfi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_momentum__ = __webpack_require__("SQbs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_raf__ = __webpack_require__("/+/s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_lang__ = __webpack_require__("FkXn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_const__ = __webpack_require__("B3mp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_env__ = __webpack_require__("+/tp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_debug__ = __webpack_require__("axW8");









function coreMixin(CScroll) {
  CScroll.prototype._start = function (e) {
    let _eventType = __WEBPACK_IMPORTED_MODULE_0__util_dom__["e" /* eventType */][e.type]
    if (_eventType !== __WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* TOUCH_EVENT */]) {
      if (e.button !== 0) {
        return
      }
    }
    if (this.destroyed || (this.initiated && this.initiated !== _eventType)) {
      return
    }
    this.initiated = _eventType

    if (this.options.preventDefault && !Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    this.moved = false
    this.distX = 0
    this.distY = 0
    this.directionX = 0
    this.directionY = 0
    this.movingDirectionX = 0
    this.movingDirectionY = 0
    this.directionLocked = 0

    this._transitionTime()
    this.startTime = Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()

    this.stop()

    let point = e.touches ? e.touches[0] : e

    this.startX = this.x
    this.startY = this.y
    this.absStartX = this.x
    this.absStartY = this.y
    this.pointX = point.pageX
    this.pointY = point.pageY

    this.trigger('beforeScrollStart')
  }

  CScroll.prototype._move = function (e) {
    if (this.destroyed || __WEBPACK_IMPORTED_MODULE_0__util_dom__["e" /* eventType */][e.type] !== this.initiated) {
      return
    }
    
    if (this.options.preventDefault) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    let point = e.touches ? e.touches[0] : e
    let deltaX = point.pageX - this.pointX
    let deltaY = point.pageY - this.pointY

    this.pointX = point.pageX
    this.pointY = point.pageY

    this.distX += deltaX
    this.distY += deltaY

    let absDistX = Math.abs(this.distX)
    let absDistY = Math.abs(this.distY)

    let timestamp = Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && (absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance)) {
      return
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h' // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v' // lock vertically
      } else {
        this.directionLocked = 'n' // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault()
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false
        return
      }
      deltaY = 0
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault()
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false
        return
      }
      deltaX = 0
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0
    deltaY = this.hasVerticalScroll ? deltaY : 0
    this.movingDirectionX = deltaX > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["c" /* DIRECTION_RIGHT */] : deltaX < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["b" /* DIRECTION_LEFT */] : 0
    this.movingDirectionY = deltaY > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["a" /* DIRECTION_DOWN */] : deltaY < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */] : 0

    let newX = this.x + deltaX
    let newY = this.y + deltaY

    let top = false
    let bottom = false
    let left = false
    let right = false
    // Slow down or stop if outside of the boundaries
    const bounce = this.options.bounce
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top
      bottom = bounce.bottom === undefined ? true : bounce.bottom
      left = bounce.left === undefined ? true : bounce.left
      right = bounce.right === undefined ? true : bounce.right
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if ((newX > this.minScrollX && left) || (newX < this.maxScrollX && right)) {
        newX = this.x + deltaX / 3
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if ((newY > this.minScrollY && top) || (newY < this.maxScrollY && bottom)) {
        newY = this.y + deltaY / 3
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY
      }
    }

    if (!this.moved) {
      this.moved = true
      this.trigger('scrollStart')
    }

    this._translate(newX, newY)

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp
      this.startX = this.x
      this.startY = this.y

      if (this.options.probeType === __WEBPACK_IMPORTED_MODULE_5__util_const__["e" /* PROBE_DEBOUNCE */]) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        })
      }
    }

    if (this.options.probeType > __WEBPACK_IMPORTED_MODULE_5__util_const__["e" /* PROBE_DEBOUNCE */]) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      })
    }

    let scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

    let pX = this.pointX - scrollLeft
    let pY = this.pointY - scrollTop

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance
    ) {
      this._end(e)
    }
  }

  CScroll.prototype._end = function (e) {
    if (this.destroyed || __WEBPACK_IMPORTED_MODULE_0__util_dom__["e" /* eventType */][e.type] !== this.initiated) {
      return
    }
    this.initiated = false

    if (this.options.preventDefault && !Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    })

    this.isInTransition = false

    // ensures that the last position is rounded
    let newX = Math.round(this.x)
    let newY = Math.round(this.y)

    let deltaX = newX - this.absStartX
    let deltaY = newY - this.absStartY
    this.directionX = deltaX > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["c" /* DIRECTION_RIGHT */] : deltaX < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["b" /* DIRECTION_LEFT */] : 0
    this.directionY = deltaY > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["a" /* DIRECTION_DOWN */] : deltaY < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */] : 0

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel')
      return
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce)) {
      return
    }

    this._translate(newX, newY)

    this.endTime = Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()
    let duration = this.endTime - this.startTime
    let absDistX = Math.abs(newX - this.startX)
    let absDistY = Math.abs(newY - this.startY)

    let time = 0
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      let top = false
      let bottom = false
      let left = false
      let right = false
      const bounce = this.options.bounce
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top
        bottom = bounce.bottom === undefined ? true : bounce.bottom
        left = bounce.left === undefined ? true : bounce.left
        right = bounce.right === undefined ? true : bounce.right
      }
      const wrapperWidth = ((this.directionX === __WEBPACK_IMPORTED_MODULE_5__util_const__["c" /* DIRECTION_RIGHT */] && left) || (this.directionX === __WEBPACK_IMPORTED_MODULE_5__util_const__["b" /* DIRECTION_LEFT */] && right)) ? this.wrapperWidth : 0
      const wrapperHeight = ((this.directionY === __WEBPACK_IMPORTED_MODULE_5__util_const__["a" /* DIRECTION_DOWN */] && top) || (this.directionY === __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */] && bottom)) ? this.wrapperHeight : 0
      let momentumX = this.hasHorizontalScroll ? Object(__WEBPACK_IMPORTED_MODULE_2__util_momentum__["a" /* momentum */])(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options)
        : {destination: newX, duration: 0}
      let momentumY = this.hasVerticalScroll ? Object(__WEBPACK_IMPORTED_MODULE_2__util_momentum__["a" /* momentum */])(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options)
        : {destination: newY, duration: 0}
      newX = momentumX.destination
      newY = momentumY.destination
      time = Math.max(momentumX.duration, momentumY.duration)
      this.isInTransition = true
    }

    let easing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].swipe

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].swipeBounce
      }
      this.scrollTo(newX, newY, time, easing)
      return
    }

    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    })
  }

  CScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    let preventClick = this.stopFromTransition && !this.pulling
    this.stopFromTransition = false

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (!preventClick) {
        const _dblclick = this.options.dblclick
        let dblclickTrigged = false
        if (_dblclick && this.lastClickTime) {
          const {delay = 300} = _dblclick
          if (Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])() - this.lastClickTime < delay) {
            dblclickTrigged = true
            Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["d" /* dblclick */])(e)
          }
        }
        if (this.options.tap) {
          Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["o" /* tap */])(e, this.options.tap)
        }

        if (this.options.click && !Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
          Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["c" /* click */])(e)
        }
        this.lastClickTime = dblclickTrigged ? null : Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()
        return true
      }
      return false
    }
    return false
  }

  CScroll.prototype._resize = function () {
    // fix a scroll problem under Android condition
    if (__WEBPACK_IMPORTED_MODULE_6__util_env__["b" /* isAndroid */]) {
      this.wrapper.scrollTop = 0
    }
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(() => {
      this.refresh()
    }, this.options.resizePolling)
  }

  CScroll.prototype._startProbe = function () {
    Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["a" /* cancelAnimationFrame */])(this.probeTimer)
    this.probeTimer = Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["b" /* requestAnimationFrame */])(probe)

    let me = this

    function probe() {
      let pos = me.getComputedPosition()
      me.trigger('scroll', pos)
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos)
        return
      }
      me.probeTimer = Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["b" /* requestAnimationFrame */])(probe)
    }
  }

  CScroll.prototype._transitionTime = function (time = 0) {
    this.scrollerStyle[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transitionDuration] = time + 'ms'
  }

  CScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transitionTimingFunction] = easing
  }

  CScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return
    }

    this._transitionTime()
    const needReset = !this.pulling || this.movingDirectionY === __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */]
    if (needReset && !this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce)) {
      this.isInTransition = false
      if (this.options.probeType !== __WEBPACK_IMPORTED_MODULE_5__util_const__["f" /* PROBE_REALTIME */]) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        })
      }
    }
  }

  CScroll.prototype._translate = function (x, y) {
    Object(__WEBPACK_IMPORTED_MODULE_7__util_debug__["a" /* assert */])(!Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["c" /* isUndef */])(x) && !Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["c" /* isUndef */])(y), 'Translate x or y is null or undefined.')
    
    this.scrollerStyle[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transform] = `translate(${x}px,${y}px) scale(1)${this.translateZ}`

    this.x = x
    this.y = y
  }

  CScroll.prototype.scrollTo = function (x, y, time = 0, easing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce) {
    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y)

    this._transitionTimingFunction(easing.style)
    this._transitionTime(time)
    this._translate(x, y)

    if (time && this.options.probeType === __WEBPACK_IMPORTED_MODULE_5__util_const__["f" /* PROBE_REALTIME */]) {
      this._startProbe()
    }

    if (!time && (x !== this.x || y !== this.y)) {
      this.trigger('scroll', {
        x,
        y
      })
      // force reflow to put everything in position
      this._reflow = document.body.offsetHeight
      if (!this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce)) {
        this.trigger('scrollEnd', {
          x,
          y
        })
      }
    }
  }

  CScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return
    }
    el = el.nodeType ? el : this.scroller.querySelector(el)

    let pos = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["k" /* offset */])(el)
    pos.left -= this.wrapperOffset.left
    pos.top -= this.wrapperOffset.top

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
    }

    pos.left -= offsetX || 0
    pos.top -= offsetY || 0
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top

    this.scrollTo(pos.left, pos.top, time, easing)
  }

  CScroll.prototype.resetPosition = function (time = 0, easeing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce) {
    let x = this.x
    let roundX = Math.round(x)
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX
    }

    let y = this.y
    let roundY = Math.round(y)
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY
    }

    if (x === this.x && y === this.y) {
      return false
    }

    this.scrollTo(x, y, time, easeing)

    return true
  }

  CScroll.prototype.getComputedPosition = function () {
    let matrix = window.getComputedStyle(this.scroller, null)
    let x
    let y

    matrix = matrix[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transform].split(')')[0].split(', ')
    x = +(matrix[12] || matrix[4])
    y = +(matrix[13] || matrix[5])
    
    return {
      x,
      y
    }
  }

  CScroll.prototype.stop = function () {
    if (this.isInTransition) {
      this.isInTransition = false
      Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["a" /* cancelAnimationFrame */])(this.probeTimer)
      let pos = this.getComputedPosition()
      this._translate(pos.x, pos.y)
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      })
      this.stopFromTransition = true
    }
  }

  CScroll.prototype.destroy = function () {
    this.destroyed = true
    this.trigger('destroy')
    Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["a" /* cancelAnimationFrame */])(this.probeTimer)
    this._removeDOMEvents()
    // remove custom events
    this._events = {}
  }
}


/***/ }),

/***/ "4f6o":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inSDK = inSDK;
function inSDK() {
  var query = this.getQueryObjSync();
  return !!query.cml_sdk;
}

/***/ }),

/***/ "4pef":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CCarouselItem = function () {
  function CCarouselItem() {
    (0, _classCallCheck3.default)(this, CCarouselItem);
    this.props = {
      index: {
        type: Number
      },
      pageLength: {
        type: Number
      }
    };
    this.name = 'slideritem';
    this.data = {
      slideClass: {
        'slider-item': true,
        'slider-active': false
      },
      data: {
        start: {},
        end: {},
        index: 0,
        $el: ''
      }
    };
    this.computed = {
      getSlideClass: function getSlideClass() {
        return (this.slideClass['slider-item'] ? 'slider-item' : '') + ' ' + (this.slideClass['slider-active'] ? 'slider-active' : '');
      },
      transform: function transform() {
        var options = this.$parent.options;
        var data = this.$parent.data;
        var sData = this.$parent.s_data;
        if (!options || !data || !sData || !this.$el || options.effect !== 'coverflow') {
          return '';
        }
        var index = this.index;
        var winWidth = sData.pageWidth;
        // let height = sData.pageHeight
        var width = this.$el.offsetWidth;
        var offsetWidth = winWidth / 2 - width / 2;
        var leftWidth = offsetWidth - sData.deviation + 'px';
        var rightWidth = offsetWidth + sData.deviation + 'px';
        var centerWidth = offsetWidth + 'px';
        var style = {};
        // 基本
        if (index === data.currentPage - 1 || index === this.pageLength - 2 && data.currentPage === -1) {
          style['transform'] = 'translate3D(' + leftWidth + ',0 ,0)' + ' scale3d(' + sData.widthScalingRatio + ',' + sData.heightScalingRatio + ',1)';
          style['opacity'] = '1';
          if (data.direction === 'left') {
            style['z-index'] = '10';
          } else {
            style['z-index'] = '1';
          }
        } else if (index === data.currentPage + 1 || index === 1 && data.currentPage === this.pageLength) {
          style['transform'] = 'translate3D(' + rightWidth + ',0 ,0)';
          style['transform'] = 'translate3D(' + rightWidth + ',0 ,0)' + ' scale3d(' + sData.widthScalingRatio + ',' + sData.heightScalingRatio + ',1)';
          style['opacity'] = '1';
          if (data.direction === 'left') {
            style['z-index'] = '1';
          } else {
            style['z-index'] = '10';
          }
        } else if (index === data.currentPage) {
          style['transform'] = 'translate3D(' + centerWidth + ',0 ,0)' + ' scale3d(' + 1 + ',' + 1 + ',1)';
          style['z-index'] = '99';
          style['opacity'] = '1';
        } else {
          style['transform'] = 'translate3D(' + centerWidth + ',0 ,0)';
          style['opacity'] = '0';
        }
        // 循环拓展
        if (index === this.pageLength - 1 && data.currentPage === 0) {
          style['transform'] = 'translate3D(' + leftWidth + ',0 ,0)' + ' scale3d(' + sData.widthScalingRatio + ',' + sData.heightScalingRatio + ',1)';
          style['opacity'] = '1';
        }
        if (index === 0 && data.currentPage === this.pageLength - 1) {
          style['transform'] = 'translate3D(' + rightWidth + ',0 ,0)' + ' scale3d(' + sData.widthScalingRatio + ',' + sData.heightScalingRatio + ',1)';
          style['opacity'] = '1';
        }
        // 切换优化
        if ((index === this.pageLength - 1 || index === this.pageLength - 2) && data.currentPage === -1 || (index === 0 || index === 1) && data.currentPage === this.pageLength) {
          style['opacity'] = '1';
          if (index === 0) {
            style['z-index'] = '99';
          }
          if (index === this.pageLength - 1) {
            style['z-index'] = '99';
          }
        }
        style[sData.prefixes.transition + 'Duration'] = (sData.animation ? options.speed || 300 : 0) + 'ms';
        style['position'] = 'absolute';

        return (0, _keys2.default)(style).reduce(function (pre, cur) {
          return pre + ('' + (pre ? ';' : '')) + cur + ':' + style[cur];
        }, '');
      }
    };
    this.methods = {
      touchStart: function touchStart(e) {
        if (e.type === 'touchstart') {
          if (e.touches.length > 1) {
            this.data.tracking = false;
            return false;
          } else {
            /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
            this.data.start.t = new Date().getTime();
            this.data.start.x = e._originEvent.targetTouches[0].clientX;
            this.data.start.y = e._originEvent.targetTouches[0].clientY;
            this.data.end.x = e._originEvent.targetTouches[0].clientX;
            this.data.end.y = e._originEvent.targetTouches[0].clientY;
            this.data.start.pageX = e._originEvent.targetTouches[0].pageX;
            this.data.start.pageY = e._originEvent.targetTouches[0].pageY;
          }
        } else {
          /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
          this.data.start.t = new Date().getTime();
          this.data.start.x = e.clientX;
          this.data.start.y = e.clientY;
          this.data.end.x = e.clientX;
          this.data.end.y = e.clientY;
          this.data.start.pageX = e.pageX;
          this.data.start.pageY = e.pageY;
        }
      },
      touchEnd: function touchEnd(e) {
        var now = new Date().getTime();
        var deltaTime = now - this.data.start.t;
        if (e.type === 'touchend') {
          this.data.end.t = new Date().getTime();
          this.data.end.x = e.changedTouches[0].clientX;
          this.data.end.y = e.changedTouches[0].clientY;
          this.data.end.pageX = e.changedTouches[0].pageX;
          this.data.end.pageY = e.changedTouches[0].pageY;
        } else {
          this.data.end.t = new Date().getTime();
          this.data.end.x = e.clientX;
          this.data.end.y = e.clientY;
          this.data.end.pageX = e.pageX;
          this.data.end.pageY = e.pageY;
        }
        var deltaX = this.data.end.pageX - this.data.start.pageX || 0;
        var deltaY = this.data.end.pageY - this.data.start.pageY || 0;
        if (deltaTime < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
          this.$emit('tap', this.data);
        }
      },
      renderDom: function renderDom() {
        if (this.$parent) {
          this.$parent.renderDom(this.$el);
        }
      },
      addActive: function addActive() {
        this.slideClass['slider-active'] = true;
      },
      removeActive: function removeActive() {
        this.slideClass['slider-active'] = false;
      },
      onTransitionEnd: function onTransitionEnd(e) {
        if (this.$parent) {
          this.$parent.onItemTransitionEnd(e);
        }
      }
    };
  }

  (0, _createClass3.default)(CCarouselItem, [{
    key: 'mounted',
    value: function mounted() {
      this.renderDom();
      this.data.$el = this.$el;
    }
  }]);
  return CCarouselItem;
}();

exports.default = new CCarouselItem();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "5A95":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _type = __webpack_require__("NbW/");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function str2obj(str) {
  var styleArr = str.split(';');
  var style = {};
  styleArr.forEach(function (item) {
    var si = item.split(':');
    if (si.length === 2) {
      style[si[0]] = si[1];
    }
  });
  return style;
  // return String.keys(obj)
  //   .map(key => `${key}:${obj[key]}`)
  //   .join(";");
} //
//
//
//
//
//
//


function obj2str(obj) {
  return (0, _keys2.default)(obj).map(function (key) {
    return key + ':' + obj[key];
  }).join(";");
}

var Button = function Button() {
  (0, _classCallCheck3.default)(this, Button);
  this.props = {
    text: {
      type: String,
      default: "确认"
    },
    size: {
      type: String,
      default: "none"
    },
    type: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: String,
      default: ""
    },
    textStyle: {
      type: String,
      default: ""
    },
    disabledStyle: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: "当前标题"
    },
    sendMessagePath: {
      type: String,
      default: "当前分享路径"
    },
    sendMessageImg: {
      type: String,
      default: "截图"
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ""
    }
  };
  this.computed = {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size,
          disabledStyle = this.disabledStyle;

      var mrBtnStyle = (0, _extends3.default)({}, _type.STYLE_MAP[type], str2obj(btnStyle), _type.BUTTON_STYLE_MAP[size]);

      var disabledInStyle = { opacity: 0.2 };
      if (type === "white") {
        disabledInStyle = { "background-color": "rgba(0, 0, 0, 0.1)" };
      }

      var afterStyle = disabled ? (0, _extends3.default)({}, mrBtnStyle, disabledInStyle, str2obj(disabledStyle), {
        "border-width": 0
      }) : mrBtnStyle;

      return obj2str(afterStyle);
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = (0, _extends3.default)({}, _type.TEXT_STYLE_MAP[type], str2obj(textStyle), _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      var afterStyle = disabled ? (0, _extends3.default)({}, mrTextStyle, { color: "#FFFFFF" }) : mrTextStyle;

      return obj2str(afterStyle);
    }
  };
  this.methods = {
    onclick: function onclick(e) {
      var type = this.type,
          disabled = this.disabled;

      if (disabled) return;
      this.$cmlEmit('onclick', {
        type: type,
        disabled: disabled
      });
    }
  };
};

exports.default = new Button();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "5BVc":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("WQ1V");
module.exports = __webpack_require__("OzFA").Object.getPrototypeOf;


/***/ }),

/***/ "5FFm":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("SQnF");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5HYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__ = __webpack_require__("qRkk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b7a9c9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__ = __webpack_require__("r0rv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("05EG")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b7a9c9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b7a9c9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b7a9c9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/list/list.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b7a9c9e", Component.options)
  } else {
    hotAPI.reload("data-v-1b7a9c9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5RnI":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("+iRC");

var _index2 = _interopRequireDefault(_index);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _videoWeb = __webpack_require__("f3pV");

var _videoWeb2 = _interopRequireDefault(_videoWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function () {
  function Video() {
    (0, _classCallCheck3.default)(this, Video);
    this.data = {
      videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      state: '----'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      onstart: function onstart(event) {
        this.state = 'onstart';
        (0, _index2.default)({
          message: this.state
        });
      },
      onpause: function onpause(event) {
        this.state = 'onpause';
        (0, _index2.default)({
          message: this.state
        });
      },
      onfinish: function onfinish(event) {
        this.state = 'onfinish';
        (0, _index2.default)({
          message: this.state
        });
      },
      onfail: function onfail(event) {
        this.state = 'onfail';
        (0, _index2.default)({
          message: this.state
        });
      }
    };
  }

  (0, _createClass3.default)(Video, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return Video;
}(); //
//
//
//
//
//
//
//
//
//
//
//

exports.default = new Video();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cVideo: _videoWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "5U5o":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5oHi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml__ = __webpack_require__("5RnI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_65bafeac_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml__ = __webpack_require__("rr+H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("ar1n")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65bafeac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_65bafeac_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_65bafeac_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/video/video.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65bafeac", Component.options)
  } else {
    hotAPI.reload("data-v-65bafeac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5uRN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml__ = __webpack_require__("jq6T");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bfd29f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml__ = __webpack_require__("9SfL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("UM67")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bfd29f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bfd29f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bfd29f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/scroller/scroller.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bfd29f2", Component.options)
  } else {
    hotAPI.reload("data-v-7bfd29f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5viq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "63jM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "650f":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _inputable = __webpack_require__("L32b");

var _inputable2 = _interopRequireDefault(_inputable);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
event: inputevent blurevent focusevent cconfirmevent
*/
var Input = function Input() {
  (0, _classCallCheck3.default)(this, Input);
  this.data = {
    defaultStyle: "line-height: normal;font-size: 16px; height: 40px;padding-left:10px; padding-right:10px; color: #000; border-width:1px; border-style:solid; border-color:#999;border-radius: 4px; text-align: left; background-color: #fff;",
    typePattern: '*'
  };
  this.props = {
    //类型
    type: {
      type: String,
      default: 'text' //枚举值 text number password
    },
    value: {
      type: String,
      default: ''
    },
    //placerholder
    placeholder: {
      type: String,
      default: ''
    },
    //是否禁用输入
    disabled: {
      type: Boolean,
      default: false
    },
    //控制是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    //最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    //右下角返回键类型
    returnKeyType: { //枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#bebebe'
    },
    cStyle: {
      type: String,
      default: ''
    },
    maxValue: { //type=number 最大值
      type: Number,
      default: Infinity
    },
    minValue: { //type=number 最小值
      type: Number,
      default: -Infinity
    }
  };
  this.computed = {
    computedStyle: function computedStyle() {
      return this.defaultStyle + this.cStyle;
    }
  };
  this.methods = {
    inputEvent: function inputEvent(e) {
      this.$cmlEmit('input', {
        value: e.target.value || ''
      });
      this.$cmlEmit('inputevent', {
        value: e.target.value || ''
      });
    },
    blurEvent: function blurEvent(e) {
      window.scroll(0, 0); // 键盘收起留白的bug
      this.$cmlEmit('blur', {
        value: e.target.value || ''
      });
      this.$cmlEmit('blurevent', {
        value: e.target.value || ''
      });
    },
    focusEvent: function focusEvent(e) {
      this.$cmlEmit('focus');
      this.$cmlEmit('focusevent');
    },

    // support enter key event
    keyupEvent: function keyupEvent(e) {
      this.$cmlEmit('confirm');
      this.$cmlEmit('confirmevent');
    }
  };
}; //
//
//
//
//

exports.default = new Input();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { inputable: _inputable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "6ApJ":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INDEX_CHANGE_NAME = exports.INDEX_CHANGE_NAME = 'INDEX_CHANGE_NAME';

/***/ }),

/***/ "6E5I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("ON4Y"), __esModule: true };

/***/ }),

/***/ "6wGs":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("ONZj");

var _index2 = _interopRequireDefault(_index);

var _chameleonScroll = __webpack_require__("+gIU");

var _chameleonScroll2 = _interopRequireDefault(_chameleonScroll);

var _utils = __webpack_require__("k5//");

var _collectSlotRefs = __webpack_require__("Yb5M");

var _collectSlotRefs2 = _interopRequireDefault(_collectSlotRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_collectSlotRefs2.default],
  props: {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    scrollDirection: {
      // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
      type: String,
      default: 'vertical'
    },
    // -1表示占用剩余高度或者宽度
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    toElement: {
      type: String,
      default: ''
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      scroll: null,
      loadmoreReset: true,
      wrapperStyle: '',
      scrollOptions: {
        probeType: 3,
        // 上拉下拉是否回弹
        bounce: this.bounce
      }
    };
  },
  watch: {
    cstyle: function cstyle() {
      if (!this.hasSize) return;
      this.initWrapperStyle();
    },
    height: function height(val) {
      if (!val) return;
      this.sizeInitAndChange();
    },
    width: function width() {
      if (!val) return;
      this.sizeInitAndChange();
    },
    scrollTop: function scrollTop(val) {
      if (!this.scroll) return;
      this.scroll.scrollTo(0, -val, 1000);
    },
    scrollLeft: function scrollLeft(val) {
      if (!this.scroll) return;
      this.scroll.scrollTo(-val, 0, 1000);
    },
    toElement: function toElement(val) {
      this.collectSlotRefs(this.$slots.default);
      var el = this._slotRefs[val];
      if (Array.isArray(el) && el.length) {
        el = this._slotRefs[val][0];
      }
      if (el) {
        /**
          scrollToElement(el, time, offsetX, offsetY, easing)
          {DOM | String} el 滚动到的目标元素, 如果是字符串，则内部会尝试调用 querySelector 转换成 DOM 对象。
          {Number} time 滚动动画执行的时长（单位 ms）
          {Number | Boolean} offsetX 相对于目标元素的横轴偏移量，如果设置为 true，则滚到目标元素的中心位置
          {Number | Boolean} offsetY 相对于目标元素的纵轴偏移量，如果设置为 true，则滚到目标元素的中心位置
        **/
        this.scroll.scrollToElement(el, 1000, false, false);
      }
    }
  },
  computed: {
    hasSize: function hasSize() {
      return this.height > 0 || this.width > 0;
    },
    innerStyle: function innerStyle() {
      return this.scrollDirection === 'vertical' ? 'flex-direction:column;' : 'flex-direction:row;';
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.scrollDirection === 'vertical' && !_this.height) {
        console.error('纵向滚动必须传递高度属性');
        return;
      }
      if (_this.scrollDirection === 'horizontal' && !_this.width) {
        console.error('横向滚动必须传递宽度属性');
        return;
      }
      _this.sizeInitAndChange();
    }, 200);
  },

  methods: {
    initWraper: function initWraper() {
      this.wrapper = this.$refs["c-scroller"];
    },
    sizeInitAndChange: function sizeInitAndChange() {
      var _this2 = this;

      this.initWraper();
      this.initWrapperStyle();
      if (!this.scroll) {
        this.calculateInnerWidth();
        // 等待WrapperStyle渲染完成，否则maxScrollY计算有问题
        setTimeout(function () {
          _this2.initScroller();
        }, 0);
      }
    },

    // 用于input blur
    touchstartHandler: function touchstartHandler(e) {
      var target = e.target.tagName;
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') && activeElement.tagName !== target) {
        activeElement.blur();
      }
    },
    onScrollHandler: function onScrollHandler() {
      var scroll = this.scroll;
      var startX = scroll.startX || 0;
      var startY = scroll.startY || 0;
      var detail = {
        deltaX: (0, _index2.default)(scroll.x - startX),
        deltaY: (0, _index2.default)(scroll.y - startY),
        scrollHeight: (0, _index2.default)(scroll.scrollerHeight),
        scrollLeft: (0, _index2.default)(Math.abs(scroll.x)),
        scrollTop: (0, _index2.default)(Math.abs(scroll.y)),
        scrollWidth: (0, _index2.default)(scroll.scrollerWidth)
      };
      this.$emit('onscroll', detail);
      this.$emit('customscroll', detail);
    },
    onBottomHandler: function onBottomHandler(detail) {
      this.$emit('scrolltobottom', {
        direction: 'bottom'
      });
    },
    resetLoadmore: function resetLoadmore() {
      this.loadmoreReset = true;
    },
    finishPull: function finishPull() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.scroll.finishPullUp();
        _this3.scroll.finishPullDown();
        var timer = setTimeout(function () {
          _this3.scroll && _this3.scroll.refresh();
          _this3._refresh.isRebounding = false;
          _this3._loading.isRebounding = false;
          clearTimeout(timer);
        }, 1000);
      });
    },
    initWrapperStyle: function initWrapperStyle() {
      if (!this.wrapper) return;
      var wrapper = this.wrapper;
      var style = '';
      if (this.scrollDirection === 'vertical') {
        style = this.height < 0 ? 'height:' + (window.innerHeight - wrapper.getBoundingClientRect().top) + 'px;' : 'height:' + this.height + 'px;';
      } else {
        style = this.width < 0 ? 'width:' + (window.innerWidth - wrapper.getBoundingClientRect().left) + 'px;' : 'width:' + this.width + 'px;';
      }
      var wrapperStyle = this.hasSize ? this.cstyle + style : style + this.cstyle;
      this.wrapperStyle = (0, _utils.cmlStyleTransfer)(wrapperStyle);
    },
    calculateInnerWidth: function calculateInnerWidth() {
      if (this.scrollDirection !== 'horizontal') return;
      // 仅横向滚动需要
      var inner = this.$refs.inner;
      var width = 0;
      if (inner.children && inner.children.length) {
        var lastChild = inner.children[inner.children.length - 1];
        var marginRight = document.defaultView.getComputedStyle(lastChild, null)['marginRight'];
        //  去掉px 转为数字
        marginRight = +marginRight.substring(0, marginRight.length - 2);
        width += lastChild.offsetLeft + lastChild.offsetWidth + marginRight;
      }
      // 设置子元素宽度
      inner.style.width = width + 'px';
    },
    initOptions: function initOptions() {
      if (this.scrollDirection !== 'vertical') {
        this.scrollOptions.scrollX = true;
        this.scrollOptions.eventPassthrough = 'vertical';
      }

      // 仅垂直方向可设置refresh loading
      if (this._refresh && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullDownRefresh = {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        };
      }

      if (this._loading && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullUpLoad = {
          threshold: 50
        };
      }
    },
    initScroller: function initScroller() {
      var _this4 = this;

      var wrapper = this.wrapper;
      var inner = this.$refs.inner;

      if (!wrapper || !inner) {
        return;
      }

      this.initOptions();
      this.scroll = new _chameleonScroll2.default(wrapper, this.scrollOptions);

      // 监听事件
      // 上拉
      if (this.scrollOptions.pullUpLoad) {
        this.scroll.on('pullingUp', function () {
          if (_this4._loading) {
            _this4._loading.pullingUp();
          }
        });
      }

      // 下拉
      if (this.scrollOptions.pullDownRefresh) {
        this.scroll.on('pullingDown', function () {
          // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
          _this4._refresh.pullingDown();
        });
      }

      this.scroll.on('scroll', function (pos) {
        _this4.onScrollHandler(pos);
        _this4._refresh && _this4._refresh.toggleBeforeRefreshing(pos.y);
      });

      this.scroll.on('scrollEnd', function () {
        // offset > 0 说明方向向bottom
        var offset = void 0,
            isReachedBottom = void 0;
        if (_this4.scrollDirection === 'vertical') {
          offset = _this4.scroll.startY - _this4.scroll.y;
          isReachedBottom = _this4.scroll.y <= _this4.scroll.maxScrollY + (0, _utils.cpx2px)(_this4.bottomOffset);
        } else {
          offset = _this4.scroll.startX - _this4.scroll.x;
          isReachedBottom = _this4.scroll.x <= _this4.scroll.maxScrollX + (0, _utils.cpx2px)(_this4.bottomOffset);
        }
        // 滚动到底部
        if (offset > 0 && _this4.loadmoreReset && isReachedBottom) {
          _this4.onBottomHandler();
        } else if (!isReachedBottom && !_this4.loadmoreReset) {
          _this4.resetLoadmore();
        }
      });

      this.scroll.on('beforeScrollStart', function () {
        _this4.scroll.refresh();
        _this4.calculateInnerWidth();
      });
    }
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "7B77":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "7FPV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml__ = __webpack_require__("AIkJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6695c95c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml__ = __webpack_require__("R8NC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("p5G8")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6695c95c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6695c95c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6695c95c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_text_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/text/text.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6695c95c", Component.options)
  } else {
    hotAPI.reload("data-v-6695c95c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "7Mo0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("nWd7");
module.exports = __webpack_require__("OzFA").Object.assign;


/***/ }),

/***/ "7Vrx":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//


var CPopup = function () {
  function CPopup() {
    (0, _classCallCheck3.default)(this, CPopup);
    this.props = {
      mask: {
        type: Boolean,
        default: true
      },
      show: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {
      maskClass: function maskClass() {
        return this.mask ? "has-mask" : "no-mask";
      },
      containerStyle: function containerStyle() {
        if (this.center) {
          return this.$cmlStyle({
            'align-items': 'center',
            'justify-content': 'center'
          });
        }
      },
      contentStyle: function contentStyle() {
        var style = "position: absolute;left:0;right:0;top:0;bottom:0;";
        switch (this.position) {
          case 'top':
            style = style.replace('bottom:0;', 'display:flex;flex-direction:column;');
            break;
          case 'right':
            style = style.replace('left:0;', 'display:flex;flex-direction:row;');
            break;
          case 'bottom':
            style = style.replace('top:0;', 'display:flex;flex-direction:column;');
            break;
          case 'left':
            style = style.replace('right:0;', 'display:flex;flex-direction:row;');
            break;
          default:
            style = "position:relative;";
            break;
        }
        return this.$cmlStyle(style);
      }
    };
    this.watch = {};
    this.methods = {
      closeevent: function closeevent() {
        this.$cmlEmit("close");
      },
      contentTap: function contentTap() {}
    };
  }

  (0, _createClass3.default)(CPopup, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CPopup;
}();

exports.default = new CPopup();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "7WrD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("AiQY");
var hiddenKeys = __webpack_require__("pI9x").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "7dny":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _richHandle2 = __webpack_require__("9I2i");

var _richHandle3 = _interopRequireDefault(_richHandle2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Richtext = function () {
  function Richtext() {
    (0, _classCallCheck3.default)(this, Richtext);
    this.props = {
      richData: {
        type: Object
      }
    };
    this.data = {
      richList: null
    };
    this.methods = {
      richHandle: function richHandle() {
        var richList = (0, _richHandle3.default)(this.richData);
        richList = richList.map(function (item) {
          if (item.color && item.font_size) {
            item.style = 'color:' + item.color + ';font-size:' + item.font_size + 'cpx;';
          } else {
            item.style = '';
          }
          return item;
        });
        this.richList = richList;
      }
    };
  }

  (0, _createClass3.default)(Richtext, [{
    key: 'created',
    value: function created() {
      this.richHandle();
    }
  }]);
  return Richtext;
}(); //
//
//
//
//
//
//


exports.default = new Richtext();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "7ksP":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("YKc4");
var gOPS = __webpack_require__("SCZj");
var pIE = __webpack_require__("PGoE");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "7s0b":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("df4s");
var $Object = __webpack_require__("OzFA").Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ "7unY":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "81UF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("RjZH"), __esModule: true };

/***/ }),

/***/ "83Hb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/page_7e6c522.png";

/***/ }),

/***/ "88tO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8ALk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("CzbJ"), __esModule: true };

/***/ }),

/***/ "8BQS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8D69":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonBridge = __webpack_require__("oMZh");

var _chameleonBridge2 = _interopRequireDefault(_chameleonBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _chameleonBridge2.default;

/***/ }),

/***/ "8HQr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo_0d40a73.png";

/***/ }),

/***/ "8Hjh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/selected_520dcc8.png";

/***/ }),

/***/ "8UP1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/content_615612b.png";

/***/ }),

/***/ "8W/S":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reload = reload;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml'; /**
                         * 重新加载weex页面
                         */

var methodName = 'reloadPage';

function reload() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /**
   * url
   */
  (0, _index.callNative)(moduleName, methodName, param, function () {});
}

reload.prototype.moduleName = moduleName;
reload.prototype.methodName = methodName;

/***/ }),

/***/ "8bHC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8d/N":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inSDK = inSDK;

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 判断是在ChameleonSDK中
 * @returns {boolean}
 */
function inSDK() {
  return _cmlBridge2.default.inSDK();
}

/***/ }),

/***/ "8foc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "rich-text  cml-base cml-view", attrs: {} },
    _vm._l(_vm.richList, function(item, index) {
      return _c(
        "span",
        {
          staticClass: " cml-base cml-text",
          style: _vm._cmlStyleProxy(item.style, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [_vm._v(_vm._s(item.text))]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4693bcde", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "8xvM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml__ = __webpack_require__("ILGR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b7e4652_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml__ = __webpack_require__("nD8z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("8BQS")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b7e4652"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b7e4652_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b7e4652_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_view_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/view/view.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b7e4652", Component.options)
  } else {
    hotAPI.reload("data-v-1b7e4652", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9Cgj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = addEvent;
/* harmony export (immutable) */ __webpack_exports__["m"] = removeEvent;
/* harmony export (immutable) */ __webpack_exports__["k"] = offset;
/* unused harmony export offsetToBody */
/* harmony export (immutable) */ __webpack_exports__["f"] = getRect;
/* harmony export (immutable) */ __webpack_exports__["l"] = preventDefaultException;
/* harmony export (immutable) */ __webpack_exports__["o"] = tap;
/* harmony export (immutable) */ __webpack_exports__["c"] = click;
/* harmony export (immutable) */ __webpack_exports__["d"] = dblclick;
/* unused harmony export prepend */
/* unused harmony export before */
/* unused harmony export removeChild */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("+/tp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__("FkXn");



let elementStyle = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && document.createElement('div').style

let vendor = (() => {
  if (!__WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */]) {
    return false
  }
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend'
    }
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, {passive: false, capture: !!capture})
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, {passive: false, capture: !!capture})
}

function offset(el) {
  let left = 0
  let top = 0

  while (el) {
    left -= el.offsetLeft
    top -= el.offsetTop
    el = el.offsetParent
  }

  return {
    left,
    top
  }
}

function offsetToBody(el) {
  let rect = el.getBoundingClientRect()

  return {
    left: -(rect.left + window.pageXOffset),
    top: -(rect.top + window.pageYOffset)
  }
}

const cssVendor = (vendor && vendor !== 'standard') ? '-' + vendor.toLowerCase() + '-' : ''
/* unused harmony export cssVendor */


let transform = prefixStyle('transform')
let transition = prefixStyle('transition')

const hasPerspective = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && prefixStyle('perspective') in elementStyle
/* harmony export (immutable) */ __webpack_exports__["g"] = hasPerspective;

// fix issue #361
const hasTouch = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && ('ontouchstart' in window || __WEBPACK_IMPORTED_MODULE_0__env__["c" /* isWeChatDevTools */])
/* harmony export (immutable) */ __webpack_exports__["h"] = hasTouch;

const hasTransform = transform !== false
/* harmony export (immutable) */ __webpack_exports__["i"] = hasTransform;

const hasTransition = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && transition in elementStyle
/* harmony export (immutable) */ __webpack_exports__["j"] = hasTransition;


const style = {
  transform,
  transition,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
}
/* harmony export (immutable) */ __webpack_exports__["n"] = style;


const TOUCH_EVENT = 1
/* harmony export (immutable) */ __webpack_exports__["a"] = TOUCH_EVENT;

const MOUSE_EVENT = 2
/* unused harmony export MOUSE_EVENT */


const eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
}
/* harmony export (immutable) */ __webpack_exports__["e"] = eventType;


function getRect(el) {
  if (el instanceof window.SVGElement) {
    let rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

function preventDefaultException(el, exceptions) {
  for (let i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true
    }
  }
  return false
}

function tap(e, eventName) {
  let ev = document.createEvent('Event')
  ev.initEvent(eventName, true, true)
  ev.pageX = e.pageX
  ev.pageY = e.pageY
  e.target.dispatchEvent(ev)
}

function click(e, event = 'click') {
  let eventSource
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0]
  }
  let posSrc = {}
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0
    posSrc.screenY = eventSource.screenY || 0
    posSrc.clientX = eventSource.clientX || 0
    posSrc.clientY = eventSource.clientY || 0
  }
  let ev
  const bubbles = true
  const cancelable = true
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, Object(__WEBPACK_IMPORTED_MODULE_1__lang__["a" /* extend */])({
        bubbles,
        cancelable
      }, posSrc))
    } catch (e) {
      createEvent()
    }
  } else {
    createEvent()
  }

  function createEvent() {
    ev = document.createEvent('Event')
    ev.initEvent(event, bubbles, cancelable)
    Object(__WEBPACK_IMPORTED_MODULE_1__lang__["a" /* extend */])(ev, posSrc)
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true
  ev._constructed = true
  e.target.dispatchEvent(ev)
}

function dblclick(e) {
  click(e, 'dblclick')
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target)
}

function removeChild(el, child) {
  el.removeChild(child)
}


/***/ }),

/***/ "9I2i":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = richHandle;
function richHandle(richData) {
  var richConf = richData.rich_message,
      richTexts = richData.message.split('');
  //切割文本
  richTexts = richTexts.map(function (item) {
    return {
      text: item,
      index: -1
    };
  });
  // 过滤错误配置
  richConf = richConf.filter(function (item) {
    var start = item.start,
        end = item.end;

    start = parseInt(start, 10);
    end = parseInt(end, 10);
    return !isNaN(start) && !isNaN(end) && start <= end;
  });
  // 遍历获取文本对应样式index
  richConf.forEach(function (item, index) {
    var start = item.start,
        end = item.end;

    start = parseInt(start, 10);
    end = parseInt(end, 10);
    start = start < 0 ? 0 : start;
    end = end > richTexts.length - 1 ? richTexts.length - 1 : end;
    for (var i = start; i <= end; i++) {
      richTexts[i].index = index;
    }
  });
  var start = 0,
      end = richTexts.length;
  var richList = [];
  while (start < end) {
    var i = start;
    var rIndex = richTexts[i].index;
    var conf = rIndex === -1 ? null : richConf[rIndex];
    var ri = {
      font_size: conf && conf.font_size,
      color: conf && conf.color,
      text: ''
    };
    for (; i < end; i++) {
      if (richTexts[i].index !== rIndex) {
        break;
      }
      ri.text += richTexts[i].text;
    }
    richList.push(ri);
    start = i;
  }

  return richList;
}

/***/ }),

/***/ "9S/u":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = exports.App = function (_BaseCtor) {
  (0, _inherits3.default)(App, _BaseCtor);

  function App(options) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'app',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return App;
}(_BaseCtor3.default);

/***/ }),

/***/ "9SfL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "scroller" } },
    [
      _c(
        "div",
        { staticClass: "container  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-scroller",
            {
              staticClass: " cml-base cml-c-scroller",
              attrs: {
                "scroll-direction": _vm.scrollDirection,
                "bottom-offset": _vm.bottomOffset,
                height: -1,
                "scroll-top": _vm.scrollTop,
                "data-evt-scrolltobottom": "",
                "data-evt-onscroll": ""
              },
              on: {
                scrolltobottom: function($event) {
                  _vm._cmlEventProxy($event, "onBottom")
                },
                onscroll: function($event) {
                  _vm._cmlEventProxy($event, "onScroll")
                }
              }
            },
            [
              _c("c-header", {
                staticClass: " cml-base cml-c-header",
                attrs: { title: "scroller" }
              }),
              _vm._v(" "),
              _vm._l(_vm.panels, function(item, i) {
                return _c(
                  "div",
                  {
                    staticClass: "cell  cml-base cml-view",
                    attrs: { "data-idx": i, "data-evt-click": "" },
                    on: {
                      click: _vm.$stopOuterA,
                      cml$tap: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "change")
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "panel  cml-base cml-view",
                        style: _vm._cmlStyleProxy(item.computedStyle, {
                          rem: true,
                          scale: 0.5,
                          remOptions: {
                            rootValue: { cpx: 75 },
                            minPixelValue: null
                          },
                          autoprefixOptions: {
                            browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                            grid: false
                          }
                        }),
                        attrs: {}
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "text  cml-base cml-text", attrs: {} },
                          [_vm._v(_vm._s(item.label))]
                        )
                      ]
                    )
                  ]
                )
              })
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7bfd29f2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "9Vv9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9ZB8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("tRKg");
var core = __webpack_require__("OzFA");
var dP = __webpack_require__("isOg");
var DESCRIPTORS = __webpack_require__("yfK2");
var SPECIES = __webpack_require__("hTSS")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "9fjd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/form_1d8d4bd.png";

/***/ }),

/***/ "9xHU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _mutationTypes = __webpack_require__("Zf4h");

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.INDEX_REPLACE_STATE, function (state, newState) {
  // for(let key in newState) {
  //   state[key] = newState[key]
  // }
  state.index = newState;
}), (0, _defineProperty3.default)(_mutations, types.INDEX_CHANGE_NAME, function (state, name) {
  state.index.name = name;
}), (0, _defineProperty3.default)(_mutations, types.INDEX_CHANGE_AGE, function (state, age) {
  state.index.age = age;
}), _mutations);

exports.default = mutations;

/***/ }),

/***/ "9zL9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0JVX");
__webpack_require__("YJhL");
module.exports = __webpack_require__("gkDN");


/***/ }),

/***/ "AIkJ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Text = function () {
  function Text() {
    (0, _classCallCheck3.default)(this, Text);
    this.data = {
      allLine: ["chameleon的目标是Write once run everywhere", "chameleon主要特性: ", "1、简洁强大的构建配置", "2、语法统一、快速上手", "3、方便的数据管理方案", "4、差异化方案", "......"],
      addLine: []
    };
    this.computed = {
      addTextClass: function addTextClass() {
        return this.allLine.length === this.addLine.length ? 'disable-text' : 'active-text';
      },
      removeTextClass: function removeTextClass() {
        return this.addLine.length === 0 ? 'disable-text' : 'active-text';
      }
    };
    this.watch = {};
    this.methods = {
      add: function add() {
        if (this.addLine.length >= this.allLine.length) {
          return;
        }
        this.addLine.push(this.allLine[this.addLine.length]);
      },
      remove: function remove() {
        if (this.addLine.length <= 0) {
          return;
        }
        this.addLine.pop();
      }
    };
  }

  (0, _createClass3.default)(Text, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return Text;
}();

exports.default = new Text();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "AJI0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createComponent',
    value: function createComponent(options) {
      return new _web.Component(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "AWYB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "checkbox演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "checkbox" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("Checkbox")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-checkbox", {
            staticClass: " cml-base cml-c-checkbox",
            attrs: {
              checked: _vm.checkboxValue1,
              disabled: false,
              label: "Checkbox1",
              "data-evt-change": ""
            },
            on: {
              change: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "valueChange1")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("value: " + _vm._s(_vm.checkboxValue1))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-checkbox", {
            staticClass: " cml-base cml-c-checkbox",
            attrs: {
              checked: _vm.checkboxValue2,
              label: "Checkbox2",
              position: "right",
              "data-evt-change": ""
            },
            on: {
              change: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "valueChange2")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("value: " + _vm._s(_vm.checkboxValue2))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-checkbox", {
            staticClass: " cml-base cml-c-checkbox",
            attrs: {
              checked: _vm.checkboxValue3,
              label: "Checkbox3",
              position: "right",
              disabled: true
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("value: " + _vm._s(_vm.checkboxValue3))
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f16f7dc", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "AiQY":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("JAUT");
var toIObject = __webpack_require__("dkPk");
var arrayIndexOf = __webpack_require__("hIjT")(false);
var IE_PROTO = __webpack_require__("NTY1")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "B3mp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DIRECTION_UP = 1
/* harmony export (immutable) */ __webpack_exports__["d"] = DIRECTION_UP;

const DIRECTION_DOWN = -1
/* harmony export (immutable) */ __webpack_exports__["a"] = DIRECTION_DOWN;

const DIRECTION_LEFT = 1
/* harmony export (immutable) */ __webpack_exports__["b"] = DIRECTION_LEFT;

const DIRECTION_RIGHT = -1
/* harmony export (immutable) */ __webpack_exports__["c"] = DIRECTION_RIGHT;


const PROBE_DEBOUNCE = 1
/* harmony export (immutable) */ __webpack_exports__["e"] = PROBE_DEBOUNCE;

const PROBE_NORMAL = 2
/* unused harmony export PROBE_NORMAL */

const PROBE_REALTIME = 3
/* harmony export (immutable) */ __webpack_exports__["f"] = PROBE_REALTIME;



/***/ }),

/***/ "B9oY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__("iXbp");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getQueryObjSync',
    value: function getQueryObjSync() {
      return (0, _utils.queryParse)(location.href);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "BXzI":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("xCCz");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("yfK2"), 'Object', { defineProperty: __webpack_require__("isOg").f });


/***/ }),

/***/ "Be+Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml__ = __webpack_require__("cbe4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0373288_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml__ = __webpack_require__("S2Yt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("gbjg")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f0373288"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0373288_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0373288_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textareademo_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/components/textareademo/textareademo.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0373288", Component.options)
  } else {
    hotAPI.reload("data-v-f0373288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "CHsc":
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = module.exports = {};
var utils = __webpack_require__("TdLX");
_.eventProxyName = '_cmlEventProxy';
_.modelEventProxyName = '_cmlModelEventProxy'; // c-model  v-model的事件代理
_.inlineStatementEventProxy = '_cmlInlineStatementEventProxy'; // 内联语句的事件代理
_.eventEmitName = '$cmlEmit'; // 触发事件的方法
_.styleParseName = '$cmlStyle'; // 提供各端处理style属性的方法  weex中处理成对象，wx中处理成字符串，web中不处理
_.styleProxyName = '_cmlStyleProxy'; // 提供代理 weex和web端处理style
_.mergeStyleName = '$cmlMergeStyle';
_.animationProxy = '_animationCb';
_.weexClassProxy = '_weexClassProxy';
_.merge = function (target, fromObj) {
  (0, _keys2.default)(fromObj).forEach(function (key) {
    target[key] = fromObj[key];
  });
};

_.isType = function (obj, type) {
  return Object.prototype.toString.call(obj).slice(8, -1) === type;
};

_.mergeStyle = function () {
  // 可以接受字符串或者对象
  function styleToObj(str) {
    var obj = {};
    str.split(';').filter(function (item) {
      return !!item.trim();
    }).forEach(function (item) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(item),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      key = key.replace(/\s+/, '');
      value = value.replace(/\s+/, '');
      obj[key] = value;
    });
    return obj;
  }
  var arr = [];

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (typeof arg === 'string') {
      arr.push(styleToObj(arg));
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
      arr.push(arg);
    }
  });
  var resultObj = _assign2.default.apply(Object, arr);

  var resultStr = '';
  (0, _keys2.default)(resultObj).forEach(function (key) {
    resultStr += key + ':' + resultObj[key] + ';';
  });
  return resultStr;
};
_.trim = function (value) {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
_.isReactive = function (value) {
  var reg = /(?:^'([^']*?)'$)/;
  return _.trim(value).match(reg);
};

/***/ }),

/***/ "CU9w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("awtq");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "Cdn7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ChwR":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CFoot = function CFoot() {
  (0, _classCallCheck3.default)(this, CFoot);
  this.props = {
    footStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: 'height:80cpx;'
  };
  this.computed = {
    mergeFootStyle: function mergeFootStyle() {
      return this.defaultStyle + this.footStyle;
    }
  };
};

exports.default = new CFoot();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "CqNQ":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "CzbJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0JVX");
__webpack_require__("YJhL");
module.exports = __webpack_require__("l4ty");


/***/ }),

/***/ "DAVl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "DKwb":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("isOg").f;
var has = __webpack_require__("JAUT");
var TAG = __webpack_require__("hTSS")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "Do8H":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = close;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'closePage';

function close() {
  (0, _index.callNative)(moduleName, methodName, {}, function () {});
}

close.prototype.moduleName = moduleName;
close.prototype.methodName = methodName;

/***/ }),

/***/ "DyO6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("btUP"), __esModule: true };

/***/ }),

/***/ "E+yl":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "EEl8":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.supportsPassive = supportsPassive;
exports.createEvent = createEvent;
exports.createBubblesEvent = createBubblesEvent;
exports.createCustomEvent = createCustomEvent;
exports.dispatchNativeEvent = dispatchNativeEvent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extend(to) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!args || args.length <= 0) {
    return to;
  }
  args.forEach(function (from) {
    if ((typeof from === 'undefined' ? 'undefined' : (0, _typeof3.default)(from)) !== 'object') {
      return;
    }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to;
}

// if support passive event listeners. 支持的浏览器会优化滚动性能：https://segmentfault.com/a/1190000007913386
var _supportsPassive = false;
try {
  document.createElement('div').addEventListener('test', function (_) {}, {
    get passive() {
      _supportsPassive = true;
    }
  });
} catch (e) {
  // do nothing.
}
function supportsPassive() {
  return _supportsPassive;
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent(target, type, props) {
  var event = new Event(type, { bubbles: false });

  extend(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend({}, event, { target: target });
  }
  return event;
}

/**
 * Create a bubbable Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createBubblesEvent(target, type, props) {
  var event = new Event(type, { bubbles: true });
  extend(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend({}, event, { target: target });
  }
  return event;
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent(target, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend(event, props);

  // event.target is readonly
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  } catch (err) {
    return extend({}, event, { target: target || null });
  }

  return event;
}

/**
 * dispatch a event on a HTML element.
 * @param  {HTMLElement} elm
 * @param  {Event} type event name.
 * @param  {Object} data extra data.
 */
function dispatchNativeEvent(elm, type, data) {
  elm.dispatchEvent(createEvent(elm, type, data));
}

/***/ }),

/***/ "EJ14":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "EK/L":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insideA = insideA;
function insideA(el) {
  if (typeof el._insideA === 'boolean') {
    return el._insideA;
  }
  var parent = el.parentElement;
  var parents = [];
  var checkParents = function checkParents(inside) {
    for (var i = 0, l = parents.length; i < l; i++) {
      parents[i]._insideA = inside;
    }
  };
  var check = function check(inside) {
    el._insideA = inside;
    checkParents(inside);
    return inside;
  };
  while (parent && parent !== document.body) {
    if (parent.tagName.toLowerCase() === 'a') {
      return check(true);
    }
    if (typeof parent._insideA === 'boolean') {
      return check(parent._insideA);
    }
    parents.push(parent);
    parent = parent.parentElement;
  }
  return check(false);
}

/***/ }),

/***/ "Emu9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__ = __webpack_require__("VrcO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_510c2c0c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__ = __webpack_require__("LoQw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("5U5o")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-510c2c0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_510c2c0c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_510c2c0c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/layout/row/row.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-510c2c0c", Component.options)
  } else {
    hotAPI.reload("data-v-510c2c0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "F6Tz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("5BVc"), __esModule: true };

/***/ }),

/***/ "F9zj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__ = __webpack_require__("JCdU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f16f7dc_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__ = __webpack_require__("AWYB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("no+4")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f16f7dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f16f7dc_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f16f7dc_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/checkbox/checkbox.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f16f7dc", Component.options)
  } else {
    hotAPI.reload("data-v-2f16f7dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FD/B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml__ = __webpack_require__("ZV9l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f3dea56_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml__ = __webpack_require__("kbHl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("3UaV")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f3dea56"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f3dea56_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f3dea56_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_header_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/components/header/header.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f3dea56", Component.options)
  } else {
    hotAPI.reload("data-v-2f3dea56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FkKS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml__ = __webpack_require__("7dny");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4693bcde_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml__ = __webpack_require__("8foc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("1fyb")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4693bcde"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4693bcde_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4693bcde_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/richtext/richtext.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4693bcde", Component.options)
  } else {
    hotAPI.reload("data-v-4693bcde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FkXn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getNow;
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
/* harmony export (immutable) */ __webpack_exports__["c"] = isUndef;
/* unused harmony export getDistance */
function getNow() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
}

function extend(target, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    let source = rest[i]
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}

function isUndef(v) {
  return v === undefined || v === null
}

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y)
}


/***/ }),

/***/ "Ft3I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml__ = __webpack_require__("os/Y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fb8fbb2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml__ = __webpack_require__("QXLS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Hmer")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7fb8fbb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fb8fbb2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fb8fbb2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/button/button.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fb8fbb2", Component.options)
  } else {
    hotAPI.reload("data-v-7fb8fbb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "G85p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "G8qx":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__("xfCQ");

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.global = window;
exports.default = global.chameleon = _instance2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("PvPp")))

/***/ }),

/***/ "GB0j":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GDCJ":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("7unY");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "GJ/K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "carousel" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "carousel" }
      }),
      _vm._v(" "),
      _c(
        "carousel",
        {
          staticClass: "container  cml-base cml-carousel",
          attrs: { "indicator-dots": true, current: 0, circular: true }
        },
        [
          _c(
            "carousel-item",
            { staticClass: " cml-base cml-carousel-item", attrs: {} },
            [
              _c("div", {
                staticClass: "carousel-item  cml-base cml-view",
                staticStyle: { "background-color": "#EBDEAA" },
                attrs: {}
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "carousel-item",
            { staticClass: " cml-base cml-carousel-item", attrs: {} },
            [
              _c("div", {
                staticClass: "carousel-item  cml-base cml-view",
                staticStyle: { "background-color": "#E3EDCD" },
                attrs: {}
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "carousel-item",
            { staticClass: " cml-base cml-carousel-item", attrs: {} },
            [
              _c("div", {
                staticClass: "carousel-item  cml-base cml-view",
                staticStyle: { "background-color": "#EAEAEF" },
                attrs: {}
              })
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ceb34b2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "GTLj":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("tRKg").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "GZYD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_API_HL_c803704.png";

/***/ }),

/***/ "Gfn8":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("vn5Q")('asyncIterator');


/***/ }),

/***/ "Gk/Z":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = setTitle;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'setTitle';

function setTitle(param) {
  (0, _index.callNative)(moduleName, methodName, param, function () {});
}

setTitle.prototype.moduleName = moduleName;
setTitle.prototype.methodName = methodName;

/***/ }),

/***/ "Gn1k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("html:video", {
    attrs: {
      controls: _vm.controls,
      autoplay: _vm.autoplay,
      loop: _vm.loop,
      src: _vm.src,
      "data-evt-play": "",
      "data-evt-pause": "",
      "data-evt-ended": "",
      "data-evt-error": ""
    },
    on: {
      play: _vm.onstart,
      pause: function($event) {
        $event.stopPropagation()
        return _vm.onpause($event)
      },
      ended: _vm.onfinish,
      error: _vm.onfail
    }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-493c08d9", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Go0R":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = void 0;
  var viewportHeight = void 0;
  if (window.innerWidth) {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
  } else if (document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth) {
    viewportWidth = document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
    viewportHeight = document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  }
  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "Guy4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("BXzI");
var $Object = __webpack_require__("OzFA").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "HJFi":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("TG55");
module.exports = __webpack_require__("OzFA").Object.entries;


/***/ }),

/***/ "HTWf":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;

var _index = __webpack_require__("AJI0");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createComponent(options) {
  return _index2.default.createComponent(options);
}

/***/ }),

/***/ "Hmer":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HtJK":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = 0;
  var viewportHeight = 0;

  var documentElementClientWidth = document.documentElement && document.documentElement.clientWidth;
  var documentElementClientHeight = document.documentElement && document.documentElement.clientHeight;
  var bodyClientWidth = document.body && document.body.clientWidth;
  var bodyClientHeight = document.body && document.body.clientHeight;

  viewportWidth = window.innerWidth || documentElementClientWidth || bodyClientWidth;
  viewportHeight = window.innerHeight || documentElementClientHeight || bodyClientHeight;

  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "ILGR":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _scrollerWeb = __webpack_require__("mYJC");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var View = function () {
        function View() {
                (0, _classCallCheck3.default)(this, View);
                this.data = {};
                this.computed = {};
                this.watch = {};
                this.methods = {};
        }

        (0, _createClass3.default)(View, [{
                key: "beforeCreate",
                value: function beforeCreate() {}
        }, {
                key: "created",
                value: function created() {}
        }, {
                key: "beforeMount",
                value: function beforeMount() {}
        }, {
                key: "mounted",
                value: function mounted() {}
        }, {
                key: "beforeDestroy",
                value: function beforeDestroy() {}
        }, {
                key: "destroyed",
                value: function destroyed() {}
        }]);
        return View;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new View();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "IMan":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wex = __webpack_require__("JCgp");

var _wex2 = _interopRequireDefault(_wex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _wex2.default;

/***/ }),

/***/ "IYim":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = undefined;

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = exports.Page = function (_BaseCtor) {
  (0, _inherits3.default)(Page, _BaseCtor);

  function Page(options) {
    (0, _classCallCheck3.default)(this, Page);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'page',
      hooks: _lifecycle2.default.get('cml.hooks'),
      needAddHookMixin: true
    });
    return _this;
  }

  return Page;
}(_BaseCtor3.default);

/***/ }),

/***/ "IZaB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("KA7s"), __esModule: true };

/***/ }),

/***/ "IcnI":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__("mUbh");

var _actions2 = _interopRequireDefault(_actions);

var _getters = __webpack_require__("UjVw");

var _getters2 = _interopRequireDefault(_getters);

var _state = __webpack_require__("lwq5");

var _state2 = _interopRequireDefault(_state);

var _mutations = __webpack_require__("ukYY");

var _mutations2 = _interopRequireDefault(_mutations);

var _chameleonStore = __webpack_require__("VWiq");

var _chameleonStore2 = _interopRequireDefault(_chameleonStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _chameleonStore2.default)({
  actions: _actions2.default,
  getters: _getters2.default,
  state: _state2.default,
  mutations: _mutations2.default
});

/***/ }),

/***/ "Ihxk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("JTBa");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "ImXL":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("E+yl");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "IyGo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("8ALk");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("US/B");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "J5Bc":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CAside = function CAside() {
  (0, _classCallCheck3.default)(this, CAside);
  this.props = {
    asideStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: 'width:200cpx;'
  };
  this.computed = {
    mergeAsideStyle: function mergeAsideStyle() {
      return this.defaultStyle + this.asideStyle;
    }
  };
};

exports.default = new CAside();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "JAUT":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "JCdU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _checkbox = __webpack_require__("naCP");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function () {
  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    this.data = {
      checkboxValue1: true,
      checkboxValue2: true,
      checkboxValue3: true
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      valueChange1: function valueChange1(e) {
        this.checkboxValue1 = e.detail.value;
      },
      valueChange2: function valueChange2(e) {
        this.checkboxValue2 = e.detail.value;
      }
    };
  }

  (0, _createClass3.default)(Checkbox, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return Checkbox;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new Checkbox();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cCheckbox: _checkbox2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "JCgp":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _vuex = __webpack_require__("NYxO");

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vuex2.default);

function createStore() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var store = new (Function.prototype.bind.apply(_vuex2.default.Store, [null].concat(args)))();['mapGetters', 'mapMutations', 'mapActions', 'mapState'].forEach(function (key) {
    store[key] = _vuex2.default[key];
  });

  return store;
}

/***/ }),

/***/ "JPzv":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "JTBa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("NgqT"), __esModule: true };

/***/ }),

/***/ "JUmD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JXiz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page  cml-base cml-view", attrs: {} },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a40a051", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Jx0+":
/***/ (function(module, exports, __webpack_require__) {

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if ((typeof extra === 'undefined' ? 'undefined' : (0, _typeof3.default)(extra)) === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  /**
   * A flag to distinguish with other events with the same name generated
   * by another library in the same page.
   */
  event._for = 'cml';

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2) + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
  var translate = [x3 - scale * x1 * Math.cos(rotate) + scale * y1 * Math.sin(rotate), y3 - scale * y1 * Math.cos(rotate) - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [[scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]], [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]], [0, 0, 1]]
  };
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {
  if ((0, _keys2.default)(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, true);
    docEl.addEventListener('touchend', touchendHandler, true);
    docEl.addEventListener('touchcancel', touchcancelHandler, true);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for cml
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        };
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if ((0, _keys2.default)(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return;
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time = Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time) / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time) / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2) + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical ? displacementY >= 0 ? 'down' : 'up' : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing') && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if ((0, _keys2.default)(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(position[0][0], position[0][1], position[1][0], position[1][1], current[0][0], current[0][1], current[1][0], current[1][1]);
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if ((0, _keys2.default)(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      // fire click, not tap.
      fireEvent(gesture.element, 'cml$tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && now - gesture.lastTime < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if ((0, _keys2.default)(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if ((0, _keys2.default)(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if ((0, _keys2.default)(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, true);
    docEl.removeEventListener('touchend', touchendHandler, true);
    docEl.removeEventListener('touchcancel', touchcancelHandler, true);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, true);
  isInitialized = true;
}

/***/ }),

/***/ "K0qK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/unselected_4e38c39.png";

/***/ }),

/***/ "K5yo":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var state = {
    name: '李四',
    age: '18'
};

exports.default = state;

/***/ }),

/***/ "KA7s":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("OzFA");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "KIKP":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var detectPrefixes = function detectPrefixes() {
  var transform = void 0;
  var transition = void 0;
  var transitionEnd = void 0;
  var hasTranslate3d = void 0;
  (function () {
    var el = document.createElement('_');
    var style = el.style;
    var prop = void 0;
    if (style[prop = 'webkitTransition'] === '') {
      transitionEnd = 'webkitTransitionEnd';
      transition = prop;
    }
    if (style[prop = 'transition'] === '') {
      transitionEnd = 'transitionend';
      transition = prop;
    }
    if (style[prop = 'webkitTransform'] === '') {
      transform = prop;
    }
    if (style[prop = 'msTransform'] === '') {
      transform = prop;
    }
    if (style[prop = 'transform'] === '') {
      transform = prop;
    }
    document.body.insertBefore(el, null);
    style[transform] = 'translate3d(0, 0, 0)';
    hasTranslate3d = !!window.getComputedStyle(el).getPropertyValue(transform);
    document.body.removeChild(el);
  })();
  return {
    transform: transform,
    transition: transition,
    transitionEnd: transitionEnd,
    hasTranslate3d: hasTranslate3d
  };
};

var Carousel = function () {
  function Carousel() {
    (0, _classCallCheck3.default)(this, Carousel);
    this.props = {
      autoplay: {
        type: Boolean,
        default: false
      },
      interval: {
        type: Number,
        default: 5000
      },
      current: {
        type: Number,
        default: 0
      },
      indicatorDots: {
        type: Boolean,
        default: false
      },
      circular: {
        type: Boolean,
        default: false
      }
    };
    this.name = 'slider';
    this.data = {
      pages: [],
      options: {},
      data: {
        poswidth: 0,
        posheight: 0,
        start: {},
        end: {},
        currentPage: this.current || 0,
        direction: ''
      },
      s_data: {
        prefixes: detectPrefixes(),
        transitionEnding: false,
        itemTransitionEnding: false,
        setIntervalid: '',
        renderTime: '',
        sliderLength: 0,
        effect: 'slide',
        direction: 'horizontal',
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 500,
        animation: false,
        itemAnimation: false,
        loading: false,
        containerClass: {
          'swiper-container-vertical': false,
          'swiper-container-cursorGrab': false
        },
        pageInit: false,
        widthScalingRatio: 0.8,
        heightScalingRatio: 0.8,
        deviation: 200,
        currentPage: this.current || 0,
        pageWidth: 0,
        pageHeight: 0,
        onSlide: false,
        onSlideEnd: true,
        sliderItem: '',
        nested: true,
        resize: true,
        freeze: false,
        slidesPerView: 0,
        // $parent: this.judgeParentSlider(this),
        route: false
      }
    };
    this.watch = {
      // 解决route跳转问题
      '$route': function $route() {
        var that = this;
        if (that.route) {
          var currentPage = that.data.currentPage;
          var sliderLength = that.s_data.sliderLength;
          that.s_data.transitionEnding = false;
          if (currentPage < 0) {
            that.slide(0, 'animationnone');
          } else if (currentPage >= (that.pagenums || sliderLength)) {
            that.slide(sliderLength - 1, 'animationnone');
          } else {
            that.slide(currentPage, 'animationnone');
          }
          that.autoplay && that.clock().begin(that);
          that.route = false;
        } else {
          that.route = true;
          that.autoplay && that.clock().stop(that);
        }
      }
    };
    this.computed = {
      // 动画执行obj
      styleStr: function styleStr() {
        var style = {};
        style['transform'] = 'translate3D(' + this.data.poswidth + 'px' + ',' + this.data.posheight * 2 + 'px' + ',0)';
        style[this.s_data.prefixes.transition + 'TimingFunction'] = this.options.timingFunction || 'ease';
        style[this.s_data.prefixes.transition + 'Duration'] = (this.s_data.animation ? this.options.speed || 300 : 0) + 'ms';
        if (this.s_data.effect === 'fade' || this.s_data.effect === 'coverflow') {
          return {};
        }
        return (0, _keys2.default)(style).reduce(function (pre, cur) {
          return pre + ('' + (pre ? ';' : '')) + cur + ':' + style[cur];
        }, '');
      },
      // pagenum滑动数
      pagenums: function pagenums() {
        // 初始化跳转到页面
        if ((this.pages.length || this.s_data.sliderLength !== 0) && !this.s_data.pageInit) {
          // this.s_data.pageInit = true
        }
        return this.pages.length;
      },
      // 组件的核心，计算当前父级需要进行的偏移,每次要遍历节点
      currentWidth: {
        get: function get() {
          if (!this.pages.length && this.s_data.sliderLength === 0 || this.s_data.effect === 'fade' || this.s_data.effect === 'coverflow') {
            return 0;
          }
          var $slider = void 0;
          var lastPage = this.data.currentPage;
          var pageWidth = this.s_data.pageWidth;
          var loopedSlides = this.options.loopedSlides || 1;
          // let srollbar = false
          if (this.circular) {
            if (loopedSlides) {
              lastPage = lastPage + (loopedSlides <= (this.pagenums || this.s_data.sliderLength) ? loopedSlides : this.pagenums || this.s_data.sliderLength);
            } else {
              lastPage = lastPage + 1;
            }
          }
          if (this.options.effect === 'coverflow') {
            lastPage -= 1;
          }
          // 获取slideritem子集
          for (var item in this.$el.children) {
            if (/slider-touch/ig.test(this.$el.children[item].className)) {
              $slider = this.$el.children[item];
            }
          }
          // 遍历子集
          var $sliderChildren = $slider.children[0].children;
          var offsetLeft = $sliderChildren[lastPage].offsetLeft;
          if (this.circular) {
            offsetLeft = $sliderChildren[lastPage].offsetLeft;
          }
          // 居中
          var offsetWidth = $sliderChildren[lastPage].offsetWidth;
          var slidesPerView = this.options.slidesPerView;
          var sliderLength = this.s_data.sliderLength;
          if (this.options.centeredSlides) {
            if (slidesPerView) {
              var currentPage = this.data.currentPage;
              var cent = parseInt((slidesPerView - 1) / 2);
              if (currentPage - cent <= 0) {
                currentPage = 0;
              } else if (currentPage + cent >= sliderLength) {
                currentPage = sliderLength - slidesPerView;
              } else {
                currentPage = currentPage - cent;
              }
              offsetLeft = $sliderChildren[currentPage].offsetLeft;
            } else {
              offsetLeft = offsetLeft - pageWidth / 2 + offsetWidth / 2;
            }
          }
          if (!this.options.centeredSlides && slidesPerView) {
            var _currentPage = this.data.currentPage;
            var slidesToScroll = this.options.slidesToScroll || 1;
            if (_currentPage + slidesToScroll >= sliderLength) {
              offsetLeft = $sliderChildren[sliderLength - slidesToScroll].offsetLeft;
            }
          }
          return offsetLeft + pageWidth - pageWidth;
        }
      },
      currentHeight: function currentHeight() {
        var sliderLength = this.s_data.sliderLength;
        var currentPage = this.data.currentPage;
        var pageLength = this.pages.length;
        var posheight = 0;
        var $slider = void 0;
        var lastPage = currentPage - 1;
        var pageWidth = this.s_data.pageWidth;
        var loopedSlides = this.options.loopedSlides || 1;
        if (!pageLength && sliderLength === 0 || this.s_data.effect === 'fade') {
          return 0;
        }
        // let srollbar = false
        if (this.circular) {
          if (loopedSlides) {
            lastPage = currentPage + (loopedSlides <= (pageLength || sliderLength) ? loopedSlides : pageLength || sliderLength) - 1;
          } else {
            lastPage = currentPage + 1;
          }
        }
        // 获取slideritem子集
        for (var item in this.$el.children) {
          if (/slider-touch/ig.test(this.$el.children[item].className)) {
            $slider = this.$el.children[item];
          }
        }
        // 遍历子集
        var $sliderChildren = $slider.children[0].children;
        for (var _item in $sliderChildren) {
          if (_item <= lastPage) {
            // 找到实际宽度clientWidth+外边距
            posheight += $sliderChildren[_item].offsetHeight;
            posheight += parseInt($sliderChildren[_item].style.marginTop || 0);
            posheight += parseInt($sliderChildren[_item].style.marginBottom || 0);
          }
        }
        return posheight + pageWidth - pageWidth;
      },
      getWrapperClass: function getWrapperClass() {
        var str = '';
        switch (this.options.effect) {
          case 'fade':
            str = 'slider-fade';
            break;
          default:
            break;
        }
        return str;
      }
    };
    this.methods = {
      visibilitychange: function visibilitychange() {
        var that = this;
        if (document.hidden) {
          that.autoplay && that.clock().stop(that);
        } else {
          that.autoplay && that.clock().begin(that);
        }
      },
      resize: function resize() {
        this.s_data.pageWidth = this.$el.offsetWidth;
        this.s_data.pageHeight = this.$el.offsetHeight;
        // 修复循环切换bug
        if (this.data.currentPage >= this.s_data.sliderLength && this.circular) {
          this.slide(0, 'animationnone');
          return false;
        }
        this.slide(this.data.currentPage, 'animationnone');
      },
      swipeStart: function swipeStart(e) {
        var that = this;
        this.s_data.e = e;
        if (this.s_data.freeze) {
          return;
        }
        if (this.s_data.transitionEnding) {
          return;
        }
        if (this.s_data.transitionEnding) {
          return;
        }
        if (this.s_data.itemTransitionEnding && this.options.itemAnimation) {
          return;
        }
        this.s_data.animation = false;
        // 暂停自动滚动
        if (this.autoplay) {
          this.clock().stop(that);
        }
        // 阻止页面滚动
        if (this.options.preventDocumentMove === true) {
          document.addEventListener('touchmove', that.preventDefault(e));
        }
        if (e.type === 'touchstart') {
          if (e.touches.length > 1) {
            this.s_data.tracking = false;
            return false;
          } else {
            this.s_data.tracking = true;
            /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
            this.data.start.t = new Date().getTime();
            this.data.start.x = e._originEvent.targetTouches[0].clientX;
            this.data.start.y = e._originEvent.targetTouches[0].clientY;
            this.data.end.x = e._originEvent.targetTouches[0].clientX;
            this.data.end.y = e._originEvent.targetTouches[0].clientY;
          }
        } else {
          this.s_data.tracking = true;
          /* Hack - would normally use e.timeStamp but it's whack in Fx/Android */
          this.data.start.t = new Date().getTime();
          this.data.start.x = e.clientX;
          this.data.start.y = e.clientY;
          this.data.end.x = e.clientX;
          this.data.end.y = e.clientY;
        }
      },
      swipeMove: function swipeMove(e) {
        this.s_data.e = e;
        if (this.s_data.tracking) {
          var effect = this.s_data.effect;
          var $parent = this.s_data.$parent;
          if (e.type === 'touchmove') {
            // e.preventDefault()
            this.data.end.x = e._originEvent.targetTouches[0].clientX;
            this.data.end.y = e._originEvent.targetTouches[0].clientY;
          } else {
            // e.preventDefault()
            this.data.end.x = e.clientX;
            this.data.end.y = e.clientY;
          }
          var deltaX = Math.abs(this.data.end.x - this.data.start.x);
          var deltaY = Math.abs(this.data.end.y - this.data.start.y);
          if (deltaX >= deltaY && this.options.direction !== 'vertical' && e.cancelable) {
            e.preventDefault();
          } else if (deltaX <= deltaY && this.options.direction === 'vertical' && e.cancelable) {
            e.preventDefault();
          }
          // 嵌套滚动处理事件传播
          if ($parent && $parent.s_data.direction === this.s_data.direction) {
            e.stopPropagation();
          }
          if (effect === 'fade' || effect === 'coverflow') {
            return;
          }
          if (this.options.direction === 'vertical') {
            if (deltaX > deltaY) {
              return;
            }
            // 处理嵌套滚动
            if ($parent && $parent.options.direction === 'vertical' && this.data.currentPage === 0 && this.data.end.y - this.data.start.y >= 0 && $parent.s_data.nested && !($parent.options.preventRebound && $parent.data.currentPage === 0)) {
              $parent.data.posheight = -$parent.currentHeight + this.data.end.y - this.data.start.y;
            } else if ($parent && $parent.options.direction === 'vertical' && this.data.currentPage === this.s_data.sliderLength - 1 && this.data.end.y - this.data.start.y <= 0 && $parent.s_data.nested && !($parent.options.preventRebound && $parent.data.currentPage === $parent.s_data.sliderLength - 1)) {
              $parent.data.posheight = -$parent.currentHeight + this.data.end.y - this.data.start.y;
            } else if (this.options.preventRebound && !this.circular) {
              return;
            } else {
              this.data.posheight = -this.currentHeight + this.data.end.y - this.data.start.y;
            }
          } else {
            if (deltaX < deltaY) {
              return;
            }
            // 处理嵌套滚动
            if ($parent && $parent.options.direction !== 'vertical' && this.data.currentPage === 0 && this.data.end.x - this.data.start.x >= 0 && $parent.s_data.nested && !($parent.options.preventRebound && $parent.data.currentPage === 0)) {
              $parent.data.poswidth = -$parent.currentWidth + this.data.end.x - this.data.start.x;
            } else if ($parent && $parent.options.direction !== 'vertical' && this.data.currentPage === this.s_data.sliderLength - 1 && this.data.end.x - this.data.start.x <= 0 && $parent.s_data.nested && !($parent.options.preventRebound && $parent.data.currentPage === $parent.s_data.sliderLength - 1)) {
              $parent.data.poswidth = -$parent.currentWidth + this.data.end.x - this.data.start.x;
            } else if (this.options.preventRebound && !this.circular) {
              return;
            } else {
              this.data.poswidth = -this.currentWidth + this.data.end.x - this.data.start.x;
            }
          }
        }
      },
      swipeEnd: function swipeEnd(e) {
        this.s_data.e = e;
        this.s_data.tracking = false;
        var now = new Date().getTime();
        var deltaTime = now - this.data.start.t;
        var deltaX = this.data.end.x - this.data.start.x;
        var deltaY = this.data.end.y - this.data.start.y;
        var thresholdDistance = this.s_data.thresholdDistance;
        var currentPage = this.data.currentPage;
        // 自动滚动重启
        if (this.autoplay) {
          var that = this;
          setTimeout(function () {
            that.clock().begin(that);
          }, this.autoplay);
        }
        // 解除阻止
        if (this.options.preventDocumentMove === true) {
          document.removeEventListener('touchmove', this.preventDefault(e));
        }
        if (deltaTime > this.s_data.thresholdTime) {
          this.slide(currentPage);
          /* gesture too slow */
          return false;
        } else if (this.options.direction !== 'vertical') {
          // 为了平滑滑动，修改y轴限制
          if (deltaX > thresholdDistance && Math.abs(deltaY) < thresholdDistance) {
            // swipe right
            this.pre();
            return false;
          } else if (-deltaX > thresholdDistance && Math.abs(deltaY) < thresholdDistance) {
            // swipe left
            this.next();
            return false;
            // tap
          } else if (deltaTime < 100 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
            this.$emit('tap', this.data);
            this.slide(currentPage, 'click');
            //
          } else {
            this.slide(currentPage);
            return false;
          }
          // 垂直判定
        } else {
          if (deltaY > thresholdDistance && Math.abs(deltaX) < thresholdDistance) {
            // swipe right
            this.pre();
            return false;
          } else if (-deltaY > thresholdDistance && Math.abs(deltaX) < thresholdDistance) {
            // swipe left
            this.next();
            return false;
          } else if (deltaTime < 100 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
            this.$emit('tap', this.data);
            this.slide(currentPage, 'click');
          } else {
            this.slide(currentPage);
            return false;
          }
        }
      },
      swipeOut: function swipeOut(e) {
        if (this.$el === e.target && this.s_data.tracking) {
          this.swipeEnd(e);
        }
      },
      pre: function pre() {
        // debugger
        this.data.direction = 'left';
        var sliderLength = this.s_data.sliderLength;
        var slidesToScroll = this.options.slidesToScroll || 1;
        var $parent = this.s_data.$parent;
        // let slidesPerView = this.s_data.slidesPerView
        if (this.data.currentPage >= 1 && this.data.currentPage - slidesToScroll >= 0) {
          this.data.currentPage -= slidesToScroll || 1;
          this.slide();
        } else if (this.circular && this.data.currentPage - slidesToScroll < 0 && (!$parent || !$parent.s_data.nested)) {
          this.data.currentPage -= slidesToScroll || 1;
          this.s_data.transitionEnding = true;
          this.s_data.itemTransitionEnding = true;
          if (this.data.currentPage < 0 && this.s_data.effect === 'fade') {
            this.slide((this.pagenums || sliderLength) - 1);
            this.s_data.transitionEnding = false;
            this.s_data.itemTransitionEnding = false;
          } else {
            this.slide();
          }
        } else if ($parent && this.data.currentPage === 0 && $parent.s_data.nested) {
          $parent.pre();
          this.slide();
        } else {
          this.slide(0);
        }
        // this.$emit('update:currentpage', this.data.currentPage)
        // this.$emit('slide', this.data)
      },
      next: function next() {
        this.data.direction = 'right';
        var sliderLength = this.s_data.sliderLength;
        var $parent = this.s_data.$parent;
        var slidesToScroll = this.options.slidesToScroll || 1;
        // let slidesPerView = this.s_data.slidesPerView ? (this.options.loop ? 0 : ((sliderLength - this.s_data.slidesPerView) / slidesToScroll)) : 0
        if (this.data.currentPage < (this.pagenums || sliderLength) - 1 && this.data.currentPage + slidesToScroll <= sliderLength - 1) {
          this.data.currentPage += this.options.slidesToScroll || 1;
          this.slide();
        } else if (this.circular && this.data.currentPage + slidesToScroll > sliderLength - 1 && (!$parent || !$parent.s_data.nested)) {
          this.data.currentPage += this.options.slidesToScroll || 1;
          this.s_data.transitionEnding = true;
          this.s_data.itemTransitionEnding = true;
          if (this.data.currentPage >= (this.pagenums || sliderLength) && this.s_data.effect === 'fade') {
            this.slide(0);
            this.s_data.transitionEnding = false;
            this.s_data.itemTransitionEnding = false;
          } else {
            this.slide();
          }
        } else if ($parent && this.data.currentPage === (this.pagenums || sliderLength) - 1 && $parent.s_data.nested) {
          var parent = this.s_data.$parent;
          parent.next();
          this.slide();
        } else {
          this.slide();
        }
        // this.$emit('update:currentpage', this.data.currentPage)
        // this.$emit('slide', this.data)
      },
      slide: function slide(pagenum, type) {
        // 执行动画
        this.s_data.animation = true;
        // 处理点击事件
        if (type === 'slideTo' && this.s_data.onSlide === true) {
          return false;
        }
        // 无样式滚动
        if (type === 'animationnone') {
          this.s_data.animation = false;
          this.s_data.onSlideEnd = true;
          this.s_data.onSlide = false;
        } else {
          this.s_data.onSlideEnd = false;
          this.s_data.onSlide = true;
        }
        if (pagenum || pagenum === 0) {
          this.data.currentPage = pagenum;
        }

        if (this.data.currentPage >= 0 && this.data.currentPage < this.$children.length) {
          this.$cmlEmit('change', { current: this.data.currentPage });
        }

        // fade优化
        if (this.s_data.effect === 'fade') {
          if (!this.pagenums) {
            this.fadeDom();
          }
          return;
        } else {
          // 增加垂直滚动判定
          if (this.options.direction === 'vertical') {
            if (Math.abs(this.data.posheight) === Math.abs(-this.currentHeight)) {
              this.s_data.onSlideEnd = true;
              this.s_data.onSlide = false;
            }
            this.data.posheight = -this.currentHeight;
          } else {
            if (Math.abs(this.data.poswidth) === Math.abs(-this.currentWidth)) {
              this.s_data.onSlideEnd = true;
              this.s_data.onSlide = false;
            }
            this.data.poswidth = -this.currentWidth;
          }
        }
        // 添加class
        if (this.s_data.sliderLength) {
          var slideDom = this.$el.getElementsByClassName('slider-wrapper')[0];
          var childrens = Array.prototype.slice.call(slideDom.children);
          var sliderItem = childrens.filter(function (item) {
            return item.className.indexOf('slider-item') !== -1;
          });
          var sliderActiveCopy = childrens.filter(function (item) {
            return item.className.indexOf('slider-active-copy') !== -1;
          });
          // let sliderItem = slideDom.getElementsByClassName('slider-item')
          // let sliderActiveCopy = slideDom.getElementsByClassName('slider-active-copy')
          var loopedSlides = this.options.loopedSlides || 1;
          var sliderLength = this.s_data.sliderLength;
          var children = this.$children;
          var currentPage = this.data.currentPage;
          children = children.filter(function (item) {
            return item.$options._componentTag === 'slideritem';
          });
          children.forEach(function (element) {
            element.removeActive();
          });
          // 取消嵌套轮播active标签
          if (this.options.effect === 'nest') {
            return;
          }
          if (children[currentPage] && children[currentPage].addActive) {
            children[currentPage].addActive();
          }
          if (currentPage < 0 || currentPage >= (this.pagenums || sliderLength)) {
            if (sliderItem[currentPage + loopedSlides] && sliderItem[currentPage + loopedSlides].classList) {
              sliderItem[currentPage + loopedSlides].classList.add('slider-active-copy');
            }
            var lastPage = currentPage < 0 ? (this.pagenums || sliderLength) + currentPage : 0 + currentPage - (this.pagenums || sliderLength);
            if (children[lastPage] && children[lastPage].addActive) {
              children[lastPage].addActive();
            }
          } else {
            for (var index = 0; index < sliderActiveCopy.length; index++) {
              var item = sliderActiveCopy[index];
              item.classList.remove('slider-active-copy');
            }
          }
        }
        if (this.data.currentPage < 0 || this.data.currentPage >= (this.pagenums || this.s_data.sliderLength)) {
          return false;
        }
      },

      clock: function clock() {
        // 暂时这么写，写了自调用，但是vue不支持，欢迎小伙伴提供新的思路
        return {
          begin: function begin(that) {
            if (that.s_data.setIntervalid) {
              return;
            }
            if (!that.autoplay) {
              return;
            }
            that.s_data.setIntervalid = setInterval(function () {
              that.next();
              if (that.data.currentPage === (that.pagenums || that.s_data.sliderLength) - 1 && !that.circular) {
                clearInterval(that.s_data.setIntervalid);
                that.s_data.setIntervalid = 0;
              }
            }, that.interval);
          },
          stop: function stop(that) {
            clearInterval(that.s_data.setIntervalid);
            that.s_data.setIntervalid = 0;
          }
        };
      },
      // 阻止页面滚动
      preventDefault: function preventDefault(e) {
        e.preventDefault();
      },

      // 无限循环中transitionEnd
      onTransitionEnd: function onTransitionEnd(e) {
        var that = this;
        this.s_data.onSlideEnd = true;
        this.s_data.onSlide = false;
        setTimeout(function () {
          var currentPage = that.data.currentPage;
          var sliderLength = that.s_data.sliderLength;
          if (that.circular && that.s_data.effect !== '') {
            that.s_data.transitionEnding = false;
            if (currentPage < 0) {
              that.slide((that.pagenums || sliderLength) + currentPage, 'animationnone');
            } else if (currentPage >= (that.pagenums || sliderLength)) {
              that.slide(0 + currentPage - (that.pagenums || sliderLength), 'animationnone');
            }
          }
        }, 0);
      },
      onItemTransitionEnd: function onItemTransitionEnd(e) {
        if (e.target !== e.currentTarget) {
          return;
        }
        var that = this;
        setTimeout(function () {
          that.s_data.itemTransitionEnding = false;
        }, 0);
      },
      renderDom: function renderDom(item) {
        var that = this;
        // 防抖函数
        if (this.s_data.renderTime) {
          clearTimeout(this.s_data.renderTime);
        }
        // fade添加z-index
        that.s_data.sliderLength += 1;
        if (that.s_data.sliderLength >= 1 && that.options.effect === 'fade') {
          if (item.previousSibling) {
            item['style']['z-index'] = 99 - that.s_data.sliderLength;
          } else {
            item['style']['z-index'] = 99 + that.s_data.sliderLength;
          }
        }
        this.s_data.renderTime = setTimeout(function () {
          that.s_data.renderTime = undefined;
          var slideDom = that.$el.getElementsByClassName('slider-wrapper')[0];
          var children = Array.prototype.slice.call(slideDom.children);
          var sliderItem = children.filter(function (item) {
            return item.className.indexOf('slider-item') !== -1;
          });
          // debugger
          // children = children.filter((item) => {
          //   return item.$options._componentTag === 'slideritem'
          // })
          // that.s_data.sliderLength = sliderItem.length
          // loop && effect !== 'fade'
          if (that.s_data.sliderLength >= 1 && that.circular && that.options.effect !== 'fade' && that.options.effect !== 'coverflow') {
            // 先清空上次添加的节点
            var sliderCopy = slideDom.getElementsByClassName('slider-copy');
            for (var i = sliderCopy.length - 1; i >= 0; i--) {
              slideDom.removeChild(sliderCopy[i]);
            }
            // debugger
            var _children = Array.prototype.slice.call(slideDom.children);
            // 批量复制添加
            sliderItem = _children.filter(function (item) {
              return item.className.indexOf('slider-item') !== -1;
            });
            var length = sliderItem.length;
            var loopedSlides = that.options.loopedSlides || 1;
            var a = 0;
            for (var j = 0; j < length; j++) {
              if (j + loopedSlides - length >= 0) {
                // 向前添加节点
                var copeBefore = sliderItem[j + a].cloneNode(true);
                copeBefore.classList.add('slider-copy');
                copeBefore.classList.remove('slider-active');
                slideDom.insertBefore(copeBefore, sliderItem[0 + a]);
                // slideDom.insertBefore(copeBefore, sliderItem[0 + a])
              }
              if (j - loopedSlides < 0) {
                // 向后添加节点
                var copeAfter = sliderItem[j].cloneNode(true);
                copeAfter.classList.add('slider-copy');
                copeAfter.classList.remove('slider-active');
                slideDom.appendChild(copeAfter);
              }
            }
          }
          that.$nextTick(function () {
            that.slide(that.data.currentPage, 'animationnone');
          });
        }, 0);
      },
      fadeDom: function fadeDom() {
        var currentPage = this.data.currentPage;
        var slideDom = this.$el.getElementsByClassName('slider-wrapper')[0];
        var sliderItem = slideDom.getElementsByClassName('slider-item');
        var speed = this.options.speed;
        for (var i = 0; i < sliderItem.length; i++) {
          if (i === currentPage || i === currentPage + 1) {
            sliderItem[i]['style']['opacity'] = '1';
            sliderItem[i]['style']['transition-property'] = 'opacity';
            sliderItem[i]['style'][this.s_data.prefixes.transition + '-duration'] = (this.s_data.animation ? speed || 300 : 0) + 'ms';
          } else {
            sliderItem[i]['style']['opacity'] = '0';
            sliderItem[i]['style'][this.s_data.prefixes.transition + '-duration'] = (this.s_data.animation ? speed || 300 : 0) + 'ms';
          }
        }
      },
      judgeParentSlider: function judgeParentSlider(that) {
        if (that.$parent && that.$parent.$vnode && that.$parent.$options._componentTag === 'slider') {
          return that.$parent;
        } else if (that.$parent && that.$parent.$vnode === undefined) {
          return false;
        } else {
          return this.judgeParentSlider(that.$parent);
        }
      }
    };
    this.components = {
      // basic: sliderBasic,
      // basicLoop: sliderBasicLoop,
      // fade: sliderFade,
      // fadeLoop: sliderFade,
      // coverflow: sliderCoverflow,
      renderpagination: { // eslint-disable-line
        render: function render(createElement) {
          var index = this.index;
          var render = this.options.renderPagination;
          return render.call(this, createElement, index);
        },
        name: 'renderpagination',
        props: {
          index: {
            type: Number,
            required: true
          },
          options: {
            type: Object,
            required: true
          }
        }
      }
    };
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'created',
    value: function created() {
      this.data.currentPage = this.current;
      this.s_data.currentPage = this.current;
      // 目前只支持横向滚动
      this.s_data.containerClass['swiper-container-horizontal'] = true;
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      var that = this;
      this.s_data.pageWidth = this.$el.offsetWidth;
      this.s_data.pageHeight = this.$el.offsetHeight;
      // 初始化事件
      this.$emit('init', this.data);
      // 定制事件
      this.$on('slideTo', function (num) {
        _this.slide(num, 'slideTo');
      });
      this.$on('slideNext', function () {
        _this.next();
      });
      this.$on('slidePre', function () {
        _this.pre();
      });
      this.$on('autoplayStart', function (autoplay) {
        _this.autoplay = autoplay || _this.autoplay && _this.interval;
        _this.clock().begin(that);
      });
      this.$on('autoplayStop', function () {
        _this.autoplay = false;
        _this.clock().stop(that);
      });
      this.$on('loadingShow', function () {
        _this.s_data.loading = true;
      });
      this.$on('loadingHide', function () {
        _this.s_data.loading = false;
      });
      if (this.autoplay) {
        // 自动轮播 支持无缝滚动
        this.clock().begin(that);
      }
      // 解决页面切换报错bug
      document.addEventListener('visibilitychange', this.visibilitychange, false);
      // 设定垂直轮播class
      if (this.options.direction === 'vertical') {
        this.s_data.containerClass['swiper-container-vertical'] = true;
      } else {
        this.s_data.containerClass['swiper-container-horizontal'] = true;
      }
      // 添加reszie监听
      if (this.s_data.resize) {
        window.addEventListener('resize', this.resize);
      }
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {
      this.autoplay && this.clock().stop(this);
      if (this.options.preventDocumentMove === true) {
        document.removeEventListener('touchmove', this.preventDefault());
      }
      document.removeEventListener('visibilitychange', this.visibilitychange, false);
      window.removeEventListener('resize', this.resize);
    }
  }]);
  return Carousel;
}();

exports.default = new Carousel();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "KTLs":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__("k5//");

exports.default = {
  data: function data() {
    return {
      typePattern: ''
    };
  },

  props: {
    //内容
    value: {
      type: String,
      default: ''
    },
    //placerholder
    placeholder: {
      type: String,
      default: ''
    },
    //是否禁用输入
    disabled: {
      type: Boolean,
      default: false
    },
    //控制是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    //最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    //右下角返回键类型
    returnKeyType: { //枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#bebebe'
    },
    computedStyle: {
      type: String,
      default: ''
    },
    pattern: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text' //枚举值 text number password
    },
    template: {
      type: String,
      default: 'text'
    },
    rows: {
      type: Number,
      default: 2
    },
    //type=number 最大值
    maxValue: {
      type: Number,
      default: Infinity
    },
    //type=number 最小值
    minValue: {
      type: Number,
      default: -Infinity
    }
  },
  watch: {
    focus: function focus(newVal, oldVal) {
      this.changeFocus(newVal);
    },
    value: function value(val) {
      this.$refs['c-input'].value = val;
    }
  },
  computed: {
    isInput: function isInput() {
      return this.template == 'input';
    },
    styleObj: function styleObj() {
      return (0, _utils.cmlStyleTransfer)(this.computedStyle) || {};
    },
    isInputNumber: function isInputNumber() {
      return this.template == 'input' && this.type === 'number';
    }
  },
  mounted: function mounted() {
    this.changeFocus(this.focus);
    // ios端 type为number不生效，需要加入pattern"[0-9]*"
    if (this.type === 'number') {
      this.typePattern = '[0-9]*';
    }
  },

  methods: {
    inputEvent: function inputEvent(e) {
      var value = e.target.value;
      if (this.isInputNumber) {
        e.target.value = (0, _utils.getValBetweenMaxAndMin)(value, this.maxValue, this.minValue);
      }
      this.$emit('input', e);
    },
    blurEvent: function blurEvent(e) {
      var value = e.target.value;
      if (this.isInputNumber) {
        e.target.value = (0, _utils.getValBetweenMaxAndMin)(value, this.maxValue, this.minValue);
      }
      this.$emit('blur', e);
    },
    focusEvent: function focusEvent(e) {
      this.$emit('focus', e);
    },

    // support enter key event
    keyupEvent: function keyupEvent(e) {
      var customKeyType = this.returnKeyType;
      if (customKeyType) {
        var code = e.keyCode;
        var key = e.key;
        if (code === 13) {
          if (!key || key.toLowerCase() === 'tab') {
            key = 'next';
          }
          this.$emit('confirm', e);
        }
      }
    },
    changeFocus: function changeFocus(focus) {
      var ref = 'c-' + this.template;
      if (focus) {
        this.$refs[ref].focus();
      } else {
        this.$refs[ref].blur();
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "KvLQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryObjSync = getQueryObjSync;

var _index = __webpack_require__("B9oY");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryObjSync() {
  return _index2.default.getQueryObjSync();
}

getQueryObjSync.prototype.moduleName = 'cml';
getQueryObjSync.prototype.methodName = 'getLaunchUrl';

/***/ }),

/***/ "L32b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_inputable_vue__ = __webpack_require__("KTLs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_inputable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_inputable_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_inputable_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_inputable_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77b28d28_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_inputable_vue__ = __webpack_require__("23ia");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("w+JB")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77b28d28"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_inputable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77b28d28_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_inputable_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77b28d28_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_inputable_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/assets/vue/inputable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77b28d28", Component.options)
  } else {
    hotAPI.reload("data-v-77b28d28", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LARG":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("EJ14");
var TAG = __webpack_require__("hTSS")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "LBP5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LOYP":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callNative = callNative;
exports.listenNative = listenNative;

var _index = __webpack_require__("3T2w");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 初始化通道
_index2.default.initChannel();

function callNative(module, method, args, callback) {
  _index2.default.callNative.apply(_index2.default, arguments);
}

function listenNative(module, method, callback) {
  _index2.default.listenNative.apply(_index2.default, arguments);
}

/***/ }),

/***/ "Lbn0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml__ = __webpack_require__("y0+v");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b567572_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml__ = __webpack_require__("sSlW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("PNwu")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3b567572"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b567572_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b567572_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/switch/switch.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b567572", Component.options)
  } else {
    hotAPI.reload("data-v-3b567572", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LoQw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.rowClass + "  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.rowStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-510c2c0c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Lwr/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pullUpMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_const__ = __webpack_require__("B3mp");


function pullUpMixin(CScroll) {
  CScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = __WEBPACK_IMPORTED_MODULE_0__util_const__["f" /* PROBE_REALTIME */]

    this.pullupWatching = false
    this._watchPullUp()
  }

  CScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return
    }
    this.pullupWatching = true
    this.on('scroll', this._checkToEnd)
  }

  CScroll.prototype._checkToEnd = function (pos) {
    const {threshold = 0} = this.options.pullUpLoad
    if (this.movingDirectionY === __WEBPACK_IMPORTED_MODULE_0__util_const__["d" /* DIRECTION_UP */] && pos.y <= (this.maxScrollY + threshold)) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', () => {
        this.pullupWatching = false
      })
      this.trigger('pullingUp')
      this.off('scroll', this._checkToEnd)
    }
  }

  CScroll.prototype.finishPullUp = function () {
    if (this.pullupWatching) {
      this.once('scrollEnd', () => {
        this._watchPullUp()
      })
    } else {
      this._watchPullUp()
    }
  }

  CScroll.prototype.openPullUp = function (config = true) {
    this.options.pullUpLoad = config
    this._initPullUp()
  }

  CScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false
    if (!this.pullupWatching) {
      return
    }
    this.pullupWatching = false
    this.off('scroll', this._checkToEnd)
  }
}


/***/ }),

/***/ "M8Ay":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewport = __webpack_require__("HtJK");

var idCnt = 0;

exports.default = {
  updated: function updated() {
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (this._rootId) {
      if (el.className.indexOf('cml-root') <= -1) {
        el.classList.add('cml-root');
        el.classList.add('cml-flx');
        el.setAttribute('data-cml-root-id', this._rootId);
      }
    }

    var tagName = this.$options && this.$options._componentTag;
    var metaUp = chameleon._meta.updated;
    if (!metaUp[tagName]) {
      metaUp[tagName] = 0;
    }
    metaUp[tagName]++;
  },
  mounted: function mounted() {
    var tagName = this.$options && this.$options._componentTag;
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (typeof chameleon._components[tagName] !== 'undefined') {
      chameleon._components[tagName]++;
    }
    var metaMt = chameleon._meta.mounted;
    if (!metaMt[tagName]) {
      metaMt[tagName] = 0;
    }
    metaMt[tagName]++;

    // when this is the root element of Vue instance.
    if (this === this.$root) {
      var rootId = 'cml-root-' + idCnt++;
      if (!chameleon._root) {
        chameleon._root = {};
      }
      chameleon._root[rootId] = this;
      this._rootId = rootId;
      if (el.nodeType !== 1) {
        return;
      }
      el.classList.add('cml-root');
      el.classList.add('cml-flx');
      el.setAttribute('data-cml-root-id', rootId);

      var _getViewportSize = (0, _viewport.getViewportSize)(),
          viewportHeight = _getViewportSize.viewportHeight;

      el.style.height = viewportHeight + 'px';
    }
  },
  destroyed: function destroyed() {
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }

    if (this._rootId) {
      delete chameleon._root[this._rootId];
      delete this._rootId;
    }
    var tagName = this.$options && this.$options._componentTag;
    if (typeof chameleon._components[tagName] !== 'undefined') {
      chameleon._components[tagName]--;
    }
    var metaDs = chameleon._meta.destroyed;
    if (!metaDs[tagName]) {
      metaDs[tagName] = 0;
    }
    metaDs[tagName]++;
  },


  methods: {}
};

/***/ }),

/***/ "Mg3C":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;

var _index = __webpack_require__("LOYP");

var moduleName = 'storage';
var methodSet = 'setStorage';
var methodGet = 'getStorage';
var methodRemove = 'removeStorage';

function setStorage(param, cb) {
  /**
   * key
   * value
   */
  (0, _index.callNative)(moduleName, methodSet, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

setStorage.prototype.moduleName = moduleName;
setStorage.prototype.methodName = methodSet;

function getStorage(param, cb) {
  /**
   * key
   */
  (0, _index.callNative)(moduleName, methodGet, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

getStorage.prototype.moduleName = moduleName;
getStorage.prototype.methodName = methodGet;

function removeStorage(param, cb) {
  /**
   * key
   */
  (0, _index.callNative)(moduleName, methodRemove, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

removeStorage.prototype.moduleName = moduleName;
removeStorage.prototype.methodName = methodRemove;

/***/ }),

/***/ "N4q2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("LARG");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var Iterators = __webpack_require__("7unY");
module.exports = __webpack_require__("OzFA").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "NE82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml__ = __webpack_require__("Q68Q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e9c7258_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml__ = __webpack_require__("hzQr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("GB0j")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e9c7258"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e9c7258_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e9c7258_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_col_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/layout/col/col.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e9c7258", Component.options)
  } else {
    hotAPI.reload("data-v-1e9c7258", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NJL6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SMww");


/***/ }),

/***/ "NQyb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("inputable", {
    staticClass: " cml-base cml-inputable",
    attrs: {
      value: _vm.value,
      type: _vm.type,
      placeholder: _vm.placeholder,
      disabled: _vm.disabled,
      maxlength: _vm.maxlength,
      focus: _vm.focus,
      returnKeyType: _vm.returnKeyType,
      placerHolderColor: _vm.placerHolderColor,
      pattern: _vm.typePattern,
      computedStyle: _vm.computedStyle,
      template: "input",
      maxValue: _vm.maxValue,
      minValue: _vm.minValue,
      "data-evt-input": "",
      "data-evt-blur": "",
      "data-evt-focus": "",
      "data-evt-keyup": ""
    },
    on: {
      input: function($event) {
        $event.stopPropagation()
        return _vm.inputEvent($event)
      },
      blur: function($event) {
        $event.stopPropagation()
        return _vm.blurEvent($event)
      },
      focus: function($event) {
        $event.stopPropagation()
        return _vm.focusEvent($event)
      },
      keyup: function($event) {
        $event.stopPropagation()
        return _vm.keyupEvent($event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1cce2b87", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "NTY1":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("p06J")('keys');
var uid = __webpack_require__("ucRq");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "NbW/":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    'background-color': '#db2a36'
  },
  orange: {
    'background-color': '#fc9153'
  },
  white: {
    'background-color': '#FFFFFF',
    'border-color': '#A5A5A5',
    'border-width': '1px'
  },
  blue: {
    'background-color': '#4a4c5b'
  },
  green: {
    'background-color': '#50a050'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  orange: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  },
  green: {
    color: '#FFFFFF'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702cpx',
    height: '88cpx'
  },
  big: {
    width: '339cpx',
    height: '70cpx'
  },
  medium: {
    width: '218cpx',
    height: '60cpx'
  },
  small: {
    width: '157cpx',
    height: '44cpx'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    'font-size': '36cpx'
  },
  big: {
    'font-size': '32cpx'
  },
  medium: {
    'font-size': '28cpx'
  },
  small: {
    'font-size': '24cpx'
  }
};

/***/ }),

/***/ "NgDF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NgqT":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("YJhL");
__webpack_require__("iC9F");
module.exports = __webpack_require__("OzFA").Array.from;


/***/ }),

/***/ "O5Hj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "index-page  cml-base cml-view", attrs: {} },
    [
      _c(
        "div",
        {
          staticClass: "index-body  cml-base cml-view",
          style: _vm._cmlStyleProxy(_vm.bodyComputedStyl, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [
          _c(
            "c-scroller",
            { staticClass: " cml-base cml-c-scroller", attrs: { height: -1 } },
            [
              _c(
                "div",
                {
                  ref: "index-content-wrap",
                  staticClass: "index-content-wrap  cml-base cml-view",
                  style: _vm._cmlStyleProxy(_vm.computedStyle, {
                    rem: true,
                    scale: 0.5,
                    remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                    autoprefixOptions: {
                      browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                      grid: false
                    }
                  }),
                  attrs: {}
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "index-item-content  cml-base cml-view",
                      attrs: {}
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "index-hd  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c("img", {
                            staticClass: "index-logo  cml-base cml-image",
                            attrs: { src: _vm.comLogoSrc }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "index-desc  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [
                                  _vm._v(
                                    "以下将展示chameleon自定义组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见chameleon开发文档。"
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "index-bd  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "kind-list  cml-base cml-view",
                              attrs: {}
                            },
                            _vm._l(_vm.comList, function(item, i) {
                              return _c(
                                "div",
                                {
                                  staticClass: " cml-base cml-view",
                                  attrs: {}
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      class:
                                        (item.open
                                          ? "kind-list-item-show"
                                          : "kind-list-item") +
                                        "  cml-base cml-view",
                                      attrs: {}
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          class:
                                            (item.open
                                              ? "kind-list-item-hd-show"
                                              : "kind-list-item-hd") +
                                            "  cml-base cml-view",
                                          attrs: {
                                            id: item.id,
                                            "data-evt-click": ""
                                          },
                                          on: {
                                            click: _vm.$stopOuterA,
                                            cml$tap: function($event) {
                                              $event.stopPropagation()
                                              _vm._cmlEventProxy(
                                                $event,
                                                "kindToggle"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "kind-list-text  cml-base cml-view",
                                              attrs: {}
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    " cml-base cml-text",
                                                  attrs: {}
                                                },
                                                [_vm._v(_vm._s(item.name))]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticClass:
                                              "kind-list-img  cml-base cml-image",
                                            attrs: { src: item.src }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          class:
                                            (item.open
                                              ? "kind-list-item-bd-show"
                                              : "kind-list-item-bd") +
                                            "  cml-base cml-view",
                                          attrs: {}
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              class:
                                                (item.open
                                                  ? "navigator-box-show"
                                                  : "navigator-box") +
                                                "  cml-base cml-view",
                                              attrs: {}
                                            },
                                            _vm._l(item.pages, function(
                                              page,
                                              j
                                            ) {
                                              return _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    " cml-base cml-view",
                                                  attrs: {}
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "navigator  cml-base cml-view",
                                                      attrs: {
                                                        "data-routepath":
                                                          page.path,
                                                        "data-routeurl":
                                                          page.url,
                                                        "data-evt-click": ""
                                                      },
                                                      on: {
                                                        click: _vm.$stopOuterA,
                                                        cml$tap: function(
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          _vm._cmlEventProxy(
                                                            $event,
                                                            "routeTo"
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "navigator-text  cml-base cml-view",
                                                          attrs: {}
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                " cml-base cml-text",
                                                              attrs: {}
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  page.name
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("img", {
                                                        staticClass:
                                                          "navigator-arrow  cml-base cml-image",
                                                        attrs: {
                                                          src: _vm.arrowIcon
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            })
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            })
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "index-item-content  cml-base cml-view",
                      attrs: {}
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "index-hd  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c("img", {
                            staticClass: "index-logo  cml-base cml-image",
                            attrs: { src: _vm.apiLogoSrc }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "index-desc  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [
                                  _vm._v(
                                    "以下将演示chameleon接口能力，具体属性参数详见chameleon开发文档。"
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "index-bd  cml-base cml-view",
                        attrs: {}
                      })
                    ]
                  )
                ]
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bad7fbd", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "O6ww":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "OBo1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "input" } },
    [
      _c(
        "div",
        { staticClass: "page-demo  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-scroller",
            { staticClass: " cml-base cml-c-scroller", attrs: { height: -1 } },
            [
              _c("c-header", {
                staticClass: " cml-base cml-c-header",
                attrs: { title: "input" }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("focus聚焦 web端不支持")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "focus聚焦 web端不支持",
                      focus: _vm.isfocus,
                      "data-evt-blur": ""
                    },
                    on: {
                      blur: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "bindblurevent")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("数据绑定,value:" + _vm._s(_vm.inputValue))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "数据绑定",
                      value: _vm.inputValue,
                      "data-evt-input": ""
                    },
                    on: {
                      input: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "inputEvent")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("监听input事件,当前事件：" + _vm._s(_vm.eventName))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "监听input事件",
                      "data-evt-input": "",
                      "data-evt-blur": "",
                      "data-evt-focus": "",
                      "data-evt-confirm": ""
                    },
                    on: {
                      input: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "testEvent")
                      },
                      blur: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "testEvent")
                      },
                      focus: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "testEvent")
                      },
                      confirm: function($event) {
                        _vm._cmlEventProxy($event, "testEvent")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("最大长度是5")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: { placeholder: "最大长度是5", maxlength: 5 }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("text类型的input")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: { placeholder: "text类型的input", type: "text" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("number类型的input")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: { placeholder: "number类型的input", type: "number" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("number类型的input 支持最大值 最小值")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "最大值200 最小值10",
                      value: _vm.testMaxMinVal,
                      type: "number",
                      maxValue: 200,
                      minValue: 10,
                      "data-evt-blur": ""
                    },
                    on: {
                      blur: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "testMaxMinEvent")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("password类型的input")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: { placeholder: "password类型的input", type: "password" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("禁用input")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: { placeholder: "禁用input", disabled: true }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("键盘右下键按钮search web端不支持")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "键盘右下键按钮search web端不支持",
                      "return-key-type": "search"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("键盘右下键按钮done web端不支持")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "键盘右下键按钮done web端不支持",
                      "return-key-type": "done"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("键盘右下键按钮next web端不支持")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "键盘右下键按钮next web端不支持",
                      "return-key-type": "next"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("键盘右下键按钮go web端不支持")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "键盘右下键按钮go web端不支持",
                      "return-key-type": "go"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("placeholderColor web端不支持")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "placeholderColor web端不支持",
                      "placer-holder-color": "#ff0000;"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "title-text  cml-base cml-text", attrs: {} },
                [_vm._v("自定义样式")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "end-item  cml-base cml-view", attrs: {} },
                [
                  _c("c-input", {
                    staticClass: " cml-base cml-c-input",
                    attrs: {
                      placeholder: "自定义样式",
                      "c-style": "color: #00ff00; border: 1px solid #00f;"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e543108", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "OI+Q":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationInfo = getLocationInfo;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getLocationInfo';

function getLocationInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    /**
     * lat:number
     * lng:number
     */
    cb(res);
  });
}

getLocationInfo.prototype.moduleName = moduleName;
getLocationInfo.prototype.methodName = methodName;

/***/ }),

/***/ "ON4Y":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("b6zB");
module.exports = __webpack_require__("OzFA").Object.setPrototypeOf;


/***/ }),

/***/ "ONZj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = px2cpx;

var _getWidth = __webpack_require__("09Zy");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function px2cpx(px) {

  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}

/***/ }),

/***/ "OSNL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("3hlP"), __esModule: true };

/***/ }),

/***/ "OuXD":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "Oyr4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Vbob"), __esModule: true };

/***/ }),

/***/ "OzFA":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "PGoE":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "PNwu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Pn5V":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = __webpack_require__("xT8E");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.copyProtoProperty = copyProtoProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */
function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    (0, _getOwnPropertyNames2.default)(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        // 原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}

/***/ }),

/***/ "Pqm7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Pta8":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("StTd");
var aFunction = __webpack_require__("w1p+");
var SPECIES = __webpack_require__("hTSS")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "Q68Q":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CCol = function CCol() {
  (0, _classCallCheck3.default)(this, CCol);
  this.props = {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    margin: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    colStyle: function colStyle() {
      var style = '';
      if (this.height) {
        style = 'height:' + this.height + 'cpx;';
      }
      if (this.width) {
        style += 'width:' + this.width + 'cpx;';
      }
      if (this.backgroundColor) {
        style += 'background-color:' + this.backgroundColor + ';';
      }
      if (this.margin) {
        var mr = this.margin / 2;
        style += 'margin-right:' + mr + 'cpx;margin-left:' + mr + 'cpx;';
      }
      return style;
    }
  };
};

exports.default = new CCol();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "QGZ+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QXLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "button" } },
    [
      _c(
        "c-scroller",
        { staticClass: " cml-base cml-c-scroller", attrs: { height: -1 } },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "button" }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "section-title  cml-base cml-view", attrs: {} },
            [
              _c(
                "span",
                {
                  staticClass: "section-title-text  cml-base cml-text",
                  attrs: {}
                },
                [_vm._v("类型样式")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "button-list  cml-base cml-view", attrs: {} },
            [
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("default/blue")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: { "data-evt-onclick": "" },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("disabled")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: {
                  type: "blue",
                  text: "确定",
                  disabled: true,
                  "data-evt-onclick": ""
                },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("orange")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: { type: "orange", text: "确定", "data-evt-onclick": "" },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("red && disabled")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: {
                  type: "red",
                  text: "确定",
                  disabled: true,
                  "data-evt-onclick": ""
                },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("green")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: { type: "green", text: "确定", "data-evt-onclick": "" },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "section-title  cml-base cml-view", attrs: {} },
            [
              _c(
                "span",
                {
                  staticClass: "section-title-text  cml-base cml-text",
                  attrs: {}
                },
                [_vm._v("尺寸")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "button-list  cml-base cml-view", attrs: {} },
            [
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("big")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: { "data-evt-onclick": "" },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("medium")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: {
                  type: "orange",
                  text: "确定",
                  size: "medium",
                  "data-evt-onclick": ""
                },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "button-text  cml-base cml-text", attrs: {} },
                [_vm._v("small")]
              ),
              _vm._v(" "),
              _c("c-button", {
                staticClass: " cml-base cml-c-button",
                attrs: {
                  type: "red",
                  text: "确定",
                  size: "small",
                  disabled: true,
                  "data-evt-onclick": ""
                },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "testclick")
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fb8fbb2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "QYOt":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = exports.base = undefined;

var _base = __webpack_require__("M8Ay");

var _base2 = _interopRequireDefault(_base);

var _event = __webpack_require__("4Ypl");

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.base = _base2.default;
exports.event = _event2.default;

/***/ }),

/***/ "QYPr":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//


var Radio = function () {
  function Radio() {
    (0, _classCallCheck3.default)(this, Radio);
    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      }
    };
    this.data = {
      innerChecked: false
    };
    this.computed = {
      radioStyle: function radioStyle() {
        var style = '';
        if (this.disabled) {
          style += 'opacity:0.5;';
        }
        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }
        return style;
      },
      radioClass: function radioClass() {
        if (this.disabled) {
          return this.innerChecked ? 'cml-radio-selected-disabled' : 'cml-radio-unselect-disabled';
        }
        return this.innerChecked ? 'cml-radio-selected' : 'cml-radio-unselect';
      }
    };
    this.watch = {
      checked: function checked(val) {
        this.innerChecked = val;
      }
    };
    this.methods = {
      changeSelect: function changeSelect() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked
        };
        if (this.groupIndex !== -1) {
          value.index = this.groupIndex;
        }
        this.$cmlEmit('change', value);
        this.$cmlEmit('changeevent', value);
      }
    };
  }

  (0, _createClass3.default)(Radio, [{
    key: 'mounted',
    value: function mounted() {
      this.innerChecked = this.checked;
    }
  }]);
  return Radio;
}();

exports.default = new Radio();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "Qr3T":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = __webpack_require__("xT8E");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.copyProtoProperty = copyProtoProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */
function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    (0, _getOwnPropertyNames2.default)(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        //原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}

/***/ }),

/***/ "Qz3K":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("WmdX");
__webpack_require__("YJhL");
__webpack_require__("0JVX");
__webpack_require__("kOO5");
__webpack_require__("WtzB");
__webpack_require__("myBf");
module.exports = __webpack_require__("OzFA").Promise;


/***/ }),

/***/ "R2s1":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("EJ14");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "R8NC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "text" } },
    [
      _c(
        "div",
        { staticClass: "page-demo  cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "text" }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-area  cml-base cml-view", attrs: {} },
            _vm._l(_vm.addLine, function(item, index) {
              return _c(
                "div",
                {
                  key: "item." + item,
                  staticClass: " cml-base cml-view",
                  attrs: {}
                },
                [
                  _c(
                    "span",
                    { staticClass: "line-text  cml-base cml-text", attrs: {} },
                    [_vm._v(_vm._s(item))]
                  )
                ]
              )
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "btn  cml-base cml-view",
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  $event.stopPropagation()
                  _vm._cmlEventProxy($event, "add")
                }
              }
            },
            [
              _c(
                "span",
                { class: _vm.addTextClass + "  cml-base cml-text", attrs: {} },
                [_vm._v("add line")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "btn  cml-base cml-view",
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  $event.stopPropagation()
                  _vm._cmlEventProxy($event, "remove")
                }
              }
            },
            [
              _c(
                "span",
                {
                  class: _vm.removeTextClass + "  cml-base cml-text",
                  attrs: {}
                },
                [_vm._v("remove line")]
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6695c95c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "RA/h":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("StTd");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "RGMs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "c-head  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.mergeHeadStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61e6c6d6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "RMKk":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSDKInfo = getSDKInfo;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getSDKInfo';

function getSDKInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, cb);
}

getSDKInfo.prototype.moduleName = moduleName;
getSDKInfo.prototype.methodName = methodName;

/***/ }),

/***/ "RbSO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RjZH":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("YJhL");
__webpack_require__("0JVX");
module.exports = __webpack_require__("ShPv").f('iterator');


/***/ }),

/***/ "Rkzw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml__ = __webpack_require__("J5Bc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_41d4fe08_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml__ = __webpack_require__("zpTV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("ajU/")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41d4fe08"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_41d4fe08_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_41d4fe08_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_aside_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/layout/aside/aside.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41d4fe08", Component.options)
  } else {
    hotAPI.reload("data-v-41d4fe08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "RvsW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RwSr":
/***/ (function(module, exports, __webpack_require__) {

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

var _app = __webpack_require__("v8KS");

var _app2 = _interopRequireDefault(_app);

var _index = __webpack_require__("IcnI");

var _index2 = _interopRequireDefault(_index);

var _$ROUTER = __webpack_require__("sufT");

var _$ROUTER2 = _interopRequireDefault(_$ROUTER);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chameleonRuntime2.default.bootstrap({ app: _app2.default, store: _index2.default, router: _$ROUTER2.default, routerConfig: _routerConfig2.default });

/***/ }),

/***/ "Rwfi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ease = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function (t) {
      return 1 + (--t * t * t * t * t)
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function (t) {
      return t * (2 - t)
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function (t) {
      return 1 - (--t * t * t * t)
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ease;



/***/ }),

/***/ "S+Cp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml__ = __webpack_require__("/9uN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e5092d2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml__ = __webpack_require__("2Nno");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Pqm7")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e5092d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e5092d2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e5092d2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_richtext_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/richtext/richtext.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e5092d2", Component.options)
  } else {
    hotAPI.reload("data-v-3e5092d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "S2Yt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "textarea" } },
    [
      _c(
        "div",
        { staticClass: "page-demo  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-scroller",
            { staticClass: " cml-base cml-c-scroller", attrs: { height: -1 } },
            [
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("focus聚焦 web端不支持")]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: {
                      placeholder: "focus聚焦 web端不支持",
                      focus: _vm.isfocus,
                      "data-evt-blur": ""
                    },
                    on: {
                      blur: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "bindblurevent")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("数据绑定,value:" + _vm._s(_vm.inputValue))]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: {
                      placeholder: "数据绑定",
                      value: "",
                      "data-evt-input": ""
                    },
                    on: {
                      input: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "inputEvent")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("监听input事件,当前事件：" + _vm._s(_vm.eventName))]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: {
                      placeholder: "监听textarea事件",
                      "data-evt-input": "",
                      "data-evt-blur": "",
                      "data-evt-focus": "",
                      "data-evt-confirm": ""
                    },
                    on: {
                      input: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "testEvent")
                      },
                      blur: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "testEvent")
                      },
                      focus: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "testEvent")
                      },
                      confirm: function($event) {
                        _vm._cmlEventProxy($event, "testEvent")
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("最大长度是5")]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: { placeholder: "最大长度是5", maxlength: 5 }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("禁用textarea")]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: { placeholder: "禁用textarea", disabled: true }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("键盘右下键按钮done web端不支持")]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: {
                      placeholder: "键盘右下键按钮done web端不支持",
                      "return-key-type": "done"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-wrap  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("placeholderColor web端不支持")]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: {
                      placeholder: "placeholderColor web端不支持",
                      "placer-holder-color": "#ff0000;"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "end-item  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "span",
                    { staticClass: "title-text  cml-base cml-text", attrs: {} },
                    [_vm._v("自定义样式")]
                  ),
                  _vm._v(" "),
                  _c("c-textarea", {
                    staticClass: " cml-base cml-c-textarea",
                    attrs: {
                      placeholder: "自定义样式",
                      "c-style": "color: #00ff00; border: 1px solid #00f;"
                    }
                  })
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f0373288", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "S8KF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("awtq");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "SCZj":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "SMww":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("isOg");
var createDesc = __webpack_require__("bYFs");
module.exports = __webpack_require__("yfK2") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "SQbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = momentum;
function momentum(current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
  let distance = current - start
  let speed = Math.abs(distance) / time

  let {deceleration, itemHeight, swipeBounceTime, wheel, swipeTime} = options
  let duration = swipeTime
  let rate = wheel ? 4 : 15

  let destination = current + speed / deceleration * (distance < 0 ? -1 : 1)

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / rate * speed)) : lowerMargin
    duration = swipeBounceTime
  } else if (destination > upperMargin) {
    destination = wrapperSize ? Math.min(upperMargin + wrapperSize / 4, upperMargin + wrapperSize / rate * speed) : upperMargin
    duration = swipeBounceTime
  }

  return {
    destination: Math.round(destination),
    duration
  }
}


/***/ }),

/***/ "SQnF":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "SRKA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "SUxG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "ShPv":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("hTSS");


/***/ }),

/***/ "StTd":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("OuXD");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "TG55":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("xCCz");
var $entries = __webpack_require__("ykF7")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "TMJ/":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("PGoE");
var createDesc = __webpack_require__("bYFs");
var toIObject = __webpack_require__("dkPk");
var toPrimitive = __webpack_require__("w7d5");
var has = __webpack_require__("JAUT");
var IE8_DOM_DEFINE = __webpack_require__("xrry");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("yfK2") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "TdLX":
/***/ (function(module, exports) {

var _ = module.exports = {};

_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex);
  var value = declaration.slice(colonIndex + 1);
  return {
    key: key, value: value
  };
};

/***/ }),

/***/ "U79J":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INDEX_DESC_NAME = exports.INDEX_DESC_NAME = 'INDEX_DESC_NAME';
var INDEX_DESC_AGE = exports.INDEX_DESC_AGE = 'INDEX_DESC_AGE';

/***/ }),

/***/ "UH9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml__ = __webpack_require__("3QsU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1af349f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml__ = __webpack_require__("VRWD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("nbNb")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1af349f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1af349f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1af349f2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/list/list.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1af349f2", Component.options)
  } else {
    hotAPI.reload("data-v-1af349f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "UM67":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "US/B":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("9zL9"), __esModule: true };

/***/ }),

/***/ "UTAz":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "UgQS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "image" } },
    [
      _c(
        "div",
        { staticClass: "container  cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "image", desc: "这是一张本地图片" }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: " cml-base cml-image",
            staticStyle: { width: "9.09333rem", height: "8rem" },
            attrs: {
              src: _vm.imageSrc,
              "data-evt-load": "",
              "data-evt-error": ""
            },
            on: {
              load: function($event) {
                _vm._cmlEventProxy($event, "imageLoad")
              },
              error: function($event) {
                _vm._cmlEventProxy($event, "imageError")
              }
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-98d4bb2c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "UjVw":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _getters = __webpack_require__("pKUO");

var _getters2 = _interopRequireDefault(_getters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _getters2.default);

/***/ }),

/***/ "Urzf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("6E5I");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("Oyr4");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "VRWD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "list" } },
    [
      _c(
        "div",
        { staticClass: "list-eg  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-list",
            {
              staticClass: " cml-base cml-c-list",
              attrs: {
                "bottom-offset": _vm.bottomOffset,
                "to-element": _vm.toElement,
                height: -1,
                "data-evt-scrolltobottom": "",
                "data-evt-onscroll": ""
              },
              on: {
                scrolltobottom: function($event) {
                  _vm._cmlEventProxy($event, "onBottom")
                },
                onscroll: function($event) {
                  _vm._cmlEventProxy($event, "onScroll")
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: " cml-base cml-cell", attrs: {} },
                [
                  _c("c-header", {
                    staticClass: " cml-base cml-c-header",
                    attrs: { title: "list" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.lists, function(item, i) {
                return _c(
                  "div",
                  {
                    ref: "cell" + (i + 1),
                    refInFor: true,
                    staticClass: "cell  cml-base cml-cell",
                    attrs: { "data-idx": i }
                  },
                  [
                    _c(
                      "div",
                      {
                        ref: "div" + (i + 1),
                        refInFor: true,
                        staticClass: "panel border-1px  cml-base cml-view",
                        attrs: {}
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "text  cml-base cml-text", attrs: {} },
                          [_vm._v(_vm._s(item))]
                        )
                      ]
                    )
                  ]
                )
              })
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1af349f2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "VWiq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("mrKC");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _index2.default;

/***/ }),

/***/ "VbmE":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//


var Switch = function Switch() {
  (0, _classCallCheck3.default)(this, Switch);
  this.props = {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  };
  this.data = {};
  this.computed = {
    switchStyle: function switchStyle() {
      var style = '';
      if (this.disabled) {
        style += 'opacity:0.5;';
      }
      return style;
    },
    innerStyle: function innerStyle() {
      var style = '';
      if (this.checked) {
        style += 'left:38cpx;border:1px solid #fc9153;';
      } else {
        style += 'left:-2cpx;border:1px solid #ccc;';
      }
      return style;
    },
    switchClass: function switchClass() {
      return this.checked ? 'cml-switch-open' : 'cml-switch-close';
    }
  };
  this.methods = {
    changeSwitch: function changeSwitch() {
      if (this.disabled) return;
      this.$cmlEmit('change', {
        value: !this.checked
      });
      this.$cmlEmit('changeevent', {
        value: !this.checked
      });
    }
  };
};

exports.default = new Switch();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "Vbob":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("gASe");
var $Object = __webpack_require__("OzFA").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "VnQQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateTo;

var _index = __webpack_require__("p4KU");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateTo(opt) {
  // 转换为字符串通过多态不支持object，需改
  var query = (0, _utils.queryStringify)(opt.query) || '';
  var path = opt.path || '';
  var url = opt.url || '';

  // 不能通过直接转换类型对opt.query重新赋值的操作, 否则会造成opt原始传入对象数据被篡改的问题
  _index2.default.navigateTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "VrcO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CRow = function CRow() {
  (0, _classCallCheck3.default)(this, CRow);
  this.props = {
    // start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'center'
    },
    // top/middle/bottom
    align: {
      type: String,
      default: 'middle'
    },
    height: {
      type: Number,
      default: 0
    },
    wrap: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    rowClass: function rowClass() {
      return 'flex-row-' + this.justify + '-' + this.align;
    },
    rowStyle: function rowStyle() {
      var style = '';
      if (this.height) {
        style += 'height:' + this.height + 'cpx;';
      }
      if (this.wrap) {
        style += 'flex-wrap:wrap;';
      }
      if (this.margin) {
        style += 'margin:' + this.margin / 2 + 'cpx 0;';
      }
      return style;
    }
  };
};

exports.default = new CRow();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "W8/k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml__ = __webpack_require__("KIKP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9126591e_hasScoped_false_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml__ = __webpack_require__("kEIA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Cdn7")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9126591e_hasScoped_false_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9126591e_hasScoped_false_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/carousel/carousel.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9126591e", Component.options)
  } else {
    hotAPI.reload("data-v-9126591e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "WAkV":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("isOg");
var anObject = __webpack_require__("StTd");
var getKeys = __webpack_require__("YKc4");

module.exports = __webpack_require__("yfK2") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "WBby":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WQ1V":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("5FFm");
var $getPrototypeOf = __webpack_require__("ryNh");

__webpack_require__("WcAg")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "WSrq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _radio = __webpack_require__("1Iyr");

var _radio2 = _interopRequireDefault(_radio);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio() {
  (0, _classCallCheck3.default)(this, Radio);
  this.data = {
    radioValue1: false,
    radioValue2: true,
    radioValue3: true,
    radioValue4: false
  };
  this.methods = {
    valueChange1: function valueChange1(e) {
      this.radioValue1 = e.detail.value;
    },
    valueChange2: function valueChange2(e) {
      this.radioValue2 = e.detail.value;
    }
  };
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new Radio();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cRadio: _radio2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "WUvx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml__ = __webpack_require__("4pef");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ec18533_hasScoped_false_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml__ = __webpack_require__("xFYO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ec18533_hasScoped_false_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ec18533_hasScoped_false_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_item_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/carousel-item/carousel-item.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ec18533", Component.options)
  } else {
    hotAPI.reload("data-v-4ec18533", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "WcAg":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("xCCz");
var core = __webpack_require__("OzFA");
var fails = __webpack_require__("lt2H");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "WcoU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "c-main  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.mergeMainStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5fb3f676", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "WgSU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseOptionsTransformer = __webpack_require__("46z+");

var _BaseOptionsTransformer2 = _interopRequireDefault(_BaseOptionsTransformer);

var _type = __webpack_require__("lNMv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// web&&weex options transform 基类
var WexOptTransformer = function (_BaseOptionsTransform) {
  (0, _inherits3.default)(WexOptTransformer, _BaseOptionsTransform);

  function WexOptTransformer(config) {
    (0, _classCallCheck3.default)(this, WexOptTransformer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WexOptTransformer.__proto__ || (0, _getPrototypeOf2.default)(WexOptTransformer)).call(this, config));

    _this.needAddHookMixin = config.needAddHookMixin;
    return _this;
  }

  (0, _createClass3.default)(WexOptTransformer, [{
    key: 'init',
    value: function init() {
      this.transformData();
      this.needAddHookMixin && this.addHookMixin();
    }

    // 对象属性 `data` 的 映射

  }, {
    key: 'transformData',
    value: function transformData() {
      if (this.options['data']) {
        var _temp = this.options['data'];

        this.options['data'] = function () {
          return (0, _extends3.default)({}, _temp);
        };
      }
    }
  }, {
    key: 'addHookMixin',
    value: function addHookMixin() {
      var _this2 = this;

      if (!this.hooks || !this.hooks.length) return;

      var self = this;

      this.hooks.forEach(function (key) {
        var hook = _this2.options[key];
        hook && (_this2.options[key] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var result = void 0;

          if ((0, _type.type)(hook) === 'Function') {
            switch (key) {
              case 'beforeCreate':
                // 钩子函数参数mixin
                args = self.beforeCreateArgsMixin ? self.beforeCreateArgsMixin.apply(this, args) : args;
                break;
              default:
                break;
            }
            // 这里的 this 是指向运行时上下文的
            result = hook.apply(this, args);
          }

          return result;
        });
      });
    }
  }]);
  return WexOptTransformer;
}(_BaseOptionsTransformer2.default);

exports.default = WexOptTransformer;

/***/ }),

/***/ "Wh0r":
/***/ (function(module, exports, __webpack_require__) {

var _entries = __webpack_require__("2qtJ");

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = {};
module.exports = _;
// 将字符串中的 单引号变成 双引号；
_.singlequot2doublequot = function (value) {
  return value.replace(/['']/g, '"');
};
// 用于将css样式值中的重复样式去掉
_.uniqueStyle = function (content) {
  var uniqueStyleKeyValue = {};
  var splitStyleKeyValue = content.split(';').filter(function (item) {
    return !!item.trim();
  });
  splitStyleKeyValue.forEach(function (declaration) {
    var _$getStyleKeyValue = _.getStyleKeyValue(declaration),
        key = _$getStyleKeyValue.key,
        value = _$getStyleKeyValue.value;

    if (!key || !value) {
      throw new Error('please check if the style that you write is correct');
    }
    uniqueStyleKeyValue[key] = value;
  });
  return (0, _entries2.default)(uniqueStyleKeyValue).map(function (keyValue) {
    return keyValue.join(':');
  }).join(';');
};
// 用于删除css样式的注释； /*width:100px;*/ ==> ''
_.disappearCssComment = function (content) {
  var commentReg = /\/\*[\s\S]*?\*\//g;
  return content.replace(commentReg, function (match) {
    return '';
  });
};
_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex).trim();
  var value = declaration.slice(colonIndex + 1).trim();
  return {
    key: key, value: value
  };
};

/***/ }),

/***/ "WmdX":
/***/ (function(module, exports) {



/***/ }),

/***/ "WtzB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("xCCz");
var core = __webpack_require__("OzFA");
var global = __webpack_require__("tRKg");
var speciesConstructor = __webpack_require__("Pta8");
var promiseResolve = __webpack_require__("/VIj");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "WwJq":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("StTd");
var dPs = __webpack_require__("WAkV");
var enumBugKeys = __webpack_require__("pI9x");
var IE_PROTO = __webpack_require__("NTY1")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("wUk3")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("GTLj").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "X5We":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getComponentRect',
    value: function getComponentRect(param, cb) {}
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "X6gH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "X7bL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "c-scroller",
      staticClass: "scroll-container",
      style: _vm.wrapperStyle,
      attrs: { "data-evt-touchstart": "" },
      on: {
        touchstart: function($event) {
          $event.stopPropagation()
          return _vm.touchstartHandler($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          ref: "inner",
          staticClass: "inner-scroll",
          style: _vm.innerStyle,
          attrs: {}
        },
        [_vm._t("default", null, {})],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1366645a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "XHu8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XYVL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo_d6e75ef.png";

/***/ }),

/***/ "YJhL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("hP+v")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("aPys")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "YKc4":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("AiQY");
var enumBugKeys = __webpack_require__("pI9x");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "YSHD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "radio演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "radio" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-radio", {
            staticClass: " cml-base cml-c-radio",
            attrs: {
              checked: _vm.radioValue1,
              label: "Option1",
              "data-evt-change": ""
            },
            on: {
              change: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "valueChange1")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("value: " + _vm._s(_vm.radioValue1))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-radio", {
            staticClass: " cml-base cml-c-radio",
            attrs: {
              checked: _vm.radioValue2,
              label: "Option3",
              position: "right",
              "data-evt-change": ""
            },
            on: {
              change: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "valueChange2")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("value: " + _vm._s(_vm.radioValue2))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-radio", {
            staticClass: " cml-base cml-c-radio",
            attrs: {
              checked: _vm.radioValue3,
              label: "Option2",
              disabled: true
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("value: " + _vm._s(_vm.radioValue3))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-radio", {
            staticClass: " cml-base cml-c-radio",
            attrs: {
              checked: _vm.radioValue4,
              label: "Option3",
              position: "right",
              disabled: true
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("value: " + _vm._s(_vm.radioValue4))
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-277540ac", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "YV71":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YYvI":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "Yb5M":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    collectSlotRefs: function collectSlotRefs() {
      var VNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!VNodes || !VNodes.length) return;

      var node = checkContext(VNodes);
      if (node) {
        this._slotRefs = node.context.$refs || {};
      } else {
        this._slotRefs = {};
      }

      function checkContext(vnodes) {
        var children = [];
        var node = null;
        for (var i = 0; i < vnodes.length; i++) {
          var vnode = vnodes[i];
          if (vnode.context) {
            return node = vnode;
          }

          if (vnode.children && vnode.children.length) {
            children = children.concat(vnode.children);
          }
        }
        if (children.length) {
          return checkContext(children);
        }
      }

      // const refs = this._slotRefs = {}

      // function getRefs(vnodes) {
      //   vnodes = vnodes.filter((vnode) => {
      //     if (vnode.children && vnode.children.length) {
      //       getRefs(vnode.children)
      //     }
      //     return vnode.data && vnode.data.ref
      //   })
      //   if (!vnodes.length) return
      //   vnodes.forEach(vnode => {
      //     const key = vnode.data.ref
      //     const ref = vnode.componentInstance || vnode.elm

      //     if (vnode.data.refInFor) {
      //       if (!Array.isArray(refs[key])) {
      //         refs[key] = [ref]
      //       } else if (refs[key].indexOf(ref) < 0) {
      //         refs[key].push(ref)
      //       }
      //     } else {
      //       refs[key] = ref
      //     }
      //   })
      // }
      // getRefs(VNodes)
    }
  }
};

/***/ }),

/***/ "Yh4R":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/view_b6fa835.png";

/***/ }),

/***/ "Ytor":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("OuXD");
var anObject = __webpack_require__("StTd");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("49u2")(Function.call, __webpack_require__("TMJ/").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "Yw/I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__ = __webpack_require__("6wGs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1366645a_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__ = __webpack_require__("X7bL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("XHu8")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1366645a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1366645a_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1366645a_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/assets/vue/scrollable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1366645a", Component.options)
  } else {
    hotAPI.reload("data-v-1366645a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Yymu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-popup",
    {
      staticClass: " cml-base cml-c-popup",
      attrs: { show: _vm.show, mask: _vm.mask }
    },
    [
      _c(
        "div",
        { staticClass: "toast-content  cml-base cml-view", attrs: {} },
        [
          _vm.needIcon
            ? _c("img", {
                staticClass: "toast-icon  cml-base cml-image",
                attrs: { src: _vm.typeImg }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "toast-text  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.message))]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e72ff30", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Z5Xs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__("9Cgj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_lang__ = __webpack_require__("FkXn");



const DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: __WEBPACK_IMPORTED_MODULE_0__util_dom__["h" /* hasTouch */],
  disableTouch: !__WEBPACK_IMPORTED_MODULE_0__util_dom__["h" /* hasTouch */],
  observeDOM: true,
  autoBlur: true,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  stopPropagation: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
}

function initMixin(CScroll) {
  CScroll.prototype._init = function (el, options) {
    this._handleOptions(options)

    // init private custom events
    this._events = {}

    this.x = 0
    this.y = 0
    this.directionX = 0
    this.directionY = 0

    this._addDOMEvents()
    this._initExtFeatures()
    this._watchTransition()
    this._initDOMObserver()
    this._handleAutoBlur()
    this.refresh()

    this.scrollTo(this.options.startX, this.options.startY)
  }

  CScroll.prototype._handleOptions = function (options) {
    this.options = Object(__WEBPACK_IMPORTED_MODULE_1__util_lang__["a" /* extend */])({}, DEFAULT_OPTIONS, options)

    this.translateZ = __WEBPACK_IMPORTED_MODULE_0__util_dom__["g" /* hasPerspective */] ? ' translateZ(0)' : ''

    this.options.useTransition = this.options.useTransition && __WEBPACK_IMPORTED_MODULE_0__util_dom__["j" /* hasTransition */]
    this.options.useTransform = this.options.useTransform && __WEBPACK_IMPORTED_MODULE_0__util_dom__["i" /* hasTransform */]

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY

    // With eventPassthrough we also need lockDirection mechanism
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold

    if (this.options.tap === true) {
      this.options.tap = 'tap'
    }
  }

  CScroll.prototype._addDOMEvents = function () {
    let eventOperation = __WEBPACK_IMPORTED_MODULE_0__util_dom__["b" /* addEvent */]
    this._handleDOMEvents(eventOperation)
  }

  CScroll.prototype._removeDOMEvents = function () {
    let eventOperation = __WEBPACK_IMPORTED_MODULE_0__util_dom__["m" /* removeEvent */]
    this._handleDOMEvents(eventOperation)
  }

  CScroll.prototype._handleDOMEvents = function (eventOperation) {
    let target = this.options.bindToWrapper ? this.wrapper : window
    eventOperation(window, 'orientationchange', this)
    eventOperation(window, 'resize', this)

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true)
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this)
      eventOperation(target, 'mousemove', this)
      eventOperation(target, 'mousecancel', this)
      eventOperation(target, 'mouseup', this)
    }

    if (__WEBPACK_IMPORTED_MODULE_0__util_dom__["h" /* hasTouch */] && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this)
      eventOperation(target, 'touchmove', this)
      eventOperation(target, 'touchcancel', this)
      eventOperation(target, 'touchend', this)
    }

    eventOperation(this.scroller, __WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transitionEnd, this)
  }

  CScroll.prototype._initExtFeatures = function () {
    if (this.options.pullUpLoad) {
      this._initPullUp()
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown()
    }
  }

  CScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return
    }
    let me = this
    let isInTransition = false
    let key = this.useTransition ? 'isInTransition' : 'isAnimating'
    Object.defineProperty(this, key, {
      get() {
        return isInTransition
      },
      set(newVal) {
        isInTransition = newVal
        // fix issue #359
        let el = me.scroller.children.length ? me.scroller.children : [me.scroller]
        let pointerEvents = (isInTransition && !me.pulling) ? 'none' : 'auto'
        for (let i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents
        }
      }
    })
  }

  CScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', () => {
      let activeElement = document.activeElement
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur()
      }
    })
  }

  CScroll.prototype._initDOMObserver = function () {
    if (typeof MutationObserver !== 'undefined') {
      let timer
      let observer = new MutationObserver((mutations) => {
        // don't do any refresh during the transition, or outside of the boundaries
        if (this._shouldNotRefresh()) {
          return
        }
        let immediateRefresh = false
        let deferredRefresh = false
        for (let i = 0; i < mutations.length; i++) {
          const mutation = mutations[i]
          if (mutation.type !== 'attributes') {
            immediateRefresh = true
            break
          } else {
            if (mutation.target !== this.scroller) {
              deferredRefresh = true
              break
            }
          }
        }
        if (immediateRefresh) {
          this.refresh()
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer)
          timer = setTimeout(() => {
            if (!this._shouldNotRefresh()) {
              this.refresh()
            }
          }, 60)
        }
      })
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      }
      observer.observe(this.scroller, config)

      this.on('destroy', () => {
        observer.disconnect()
      })
    } else {
      this._checkDOMUpdate()
    }
  }

  CScroll.prototype._shouldNotRefresh = function () {
    let outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY
    return this.isInTransition || this.stopFromTransition || outsideBoundaries
  }

  CScroll.prototype._checkDOMUpdate = function () {
    let scrollerRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.scroller)
    let oldWidth = scrollerRect.width
    let oldHeight = scrollerRect.height

    function check() {
      if (this.destroyed) {
        return
      }
      scrollerRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.scroller)
      let newWidth = scrollerRect.width
      let newHeight = scrollerRect.height

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh()
      }
      oldWidth = newWidth
      oldHeight = newHeight

      next.call(this)
    }

    function next() {
      setTimeout(() => {
        check.call(this)
      }, 1000)
    }

    next.call(this)
  }

  CScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e)
        break
      case 'touchmove':
      case 'mousemove':
        this._move(e)
        break
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e)
        break
      case 'orientationchange':
      case 'resize':
        this._resize()
        break
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e)
        break
      case 'click':
        if (!e._constructed) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
            e.preventDefault()
            e.stopPropagation()
          }
        }
        break
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e)
        break
    }
  }

  CScroll.prototype.refresh = function () {
    const isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static'
    let wrapperRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.wrapper)
    this.wrapperWidth = wrapperRect.width
    this.wrapperHeight = wrapperRect.height

    let scrollerRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.scroller)
    this.scrollerWidth = Math.round(scrollerRect.width)
    this.scrollerHeight = Math.round(scrollerRect.height)

    this.relativeX = scrollerRect.left
    this.relativeY = scrollerRect.top

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left
      this.relativeY -= wrapperRect.top
    }

    this.minScrollX = 0
    this.minScrollY = 0

    this.maxScrollX = this.wrapperWidth - this.scrollerWidth
    this.maxScrollY = this.wrapperHeight - this.scrollerHeight

    if (this.maxScrollX < 0) {
      this.maxScrollX -= this.relativeX
      this.minScrollX = -this.relativeX
    }
    if (this.maxScrollY < 0) {
      this.maxScrollY -= this.relativeY
      this.minScrollY = -this.relativeY
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX
      this.scrollerWidth = this.wrapperWidth
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY
      this.scrollerHeight = this.wrapperHeight
    }

    this.endTime = 0
    this.directionX = 0
    this.directionY = 0
    this.wrapperOffset = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["k" /* offset */])(this.wrapper)

    this.trigger('refresh')

    this.resetPosition()
  }

}


/***/ }),

/***/ "ZGdD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CHead = function CHead() {
  (0, _classCallCheck3.default)(this, CHead);
  this.props = {
    headStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: 'height:80cpx;'
  };
  this.computed = {
    mergeHeadStyle: function mergeHeadStyle() {
      return this.defaultStyle + this.headStyle;
    }
  };
};

exports.default = new CHead();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "ZV9l":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//


var Header = function () {
  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    this.props = {
      title: {
        type: String,
        default: '标题'
      },
      desc: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {};
    this.watch = {};
    this.methods = {};
  }

  (0, _createClass3.default)(Header, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);
  return Header;
}();

exports.default = new Header();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "ZcnJ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Checkbox = function () {
  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      }
    };
    this.data = {
      checkedImg: __webpack_require__("8Hjh"),
      uncheckImg: __webpack_require__("K0qK"),
      innerChecked: false
    };
    this.computed = {
      checkStyle: function checkStyle() {
        var style = '';
        if (this.disabled) {
          style += 'opacity:0.5;';
        }
        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }
        return style;
      },
      checkImg: function checkImg() {
        return this.innerChecked ? this.checkedImg : this.uncheckImg;
      },
      checkClass: function checkClass() {
        if (this.disabled) {
          return 'cml-checkbox-disabled';
        }
        return this.innerChecked ? 'cml-checkbox-checked' : 'cml-checkbox-uncheck';
      }
    };
    this.watch = {
      checked: function checked(newChecked) {
        this.innerChecked = newChecked;
      }
    };
    this.methods = {
      changeCheck: function changeCheck() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked
        };
        if (this.groupIndex !== -1) {
          value.index = this.groupIndex;
        }
        this.$cmlEmit('changeevent', value);
        this.$cmlEmit('change', value);
      }
    };
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'created',
    value: function created() {
      var checked = this.checked;

      this.innerChecked = checked;
    }
  }]);
  return Checkbox;
}();

exports.default = new Checkbox();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "Zf4h":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INDEX_REPLACE_STATE = exports.INDEX_REPLACE_STATE = 'REPLACE_INDEX_STATE';
var INDEX_CHANGE_NAME = exports.INDEX_CHANGE_NAME = 'INDEX_CHANGE_NAME';
var INDEX_CHANGE_AGE = exports.INDEX_CHANGE_AGE = 'INDEX_CHANGE_AGE';

/***/ }),

/***/ "Zva/":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__("ifN7");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = void 0,
    routerConfig = void 0,
    app = void 0,
    store = void 0;

// 定义模块的interface

/* istanbul ignore next */
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'bootstrap',
    value: function bootstrap() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      (0, _utils.validOptions)(options);

      options.createVM = options.createVM === false ? false : true;
      app = options.app;
      router = options.router;
      routerConfig = options.routerConfig;
      store = options.store;

      var vueOptions = {
        el: '#root',
        router: router,
        store: store,
        render: function render(h) {
          return h(app);
        }
      };

      if (options.createVM) {
        new Vue(vueOptions);
      }
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      return {
        router: router,
        routerConfig: routerConfig
      };
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "aP3p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("isOg");
var createDesc = __webpack_require__("bYFs");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "aPys":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("YYvI");
var $export = __webpack_require__("xCCz");
var redefine = __webpack_require__("NJL6");
var hide = __webpack_require__("SMww");
var Iterators = __webpack_require__("7unY");
var $iterCreate = __webpack_require__("cU5V");
var setToStringTag = __webpack_require__("DKwb");
var getPrototypeOf = __webpack_require__("ryNh");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "aSex":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("vn5Q")('observable');


/***/ }),

/***/ "aXX7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ajU/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ak61":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLaunchUrl = getLaunchUrl;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getLaunchUrl';

function getLaunchUrl(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, cb);
}

getLaunchUrl.prototype.moduleName = moduleName;
getLaunchUrl.prototype.methodName = methodName;

/***/ }),

/***/ "amoi":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query2json = exports.json2query = undefined;

var _entries = __webpack_require__("2qtJ");

var _entries2 = _interopRequireDefault(_entries);

var _getIterator2 = __webpack_require__("US/B");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__("IyGo");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isObject = isObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * url相关操作
 *
 * @module lib/url
 */

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
}

/**
 * 把对象转换成key=val的url参数
 * @param obj
 * @param isEncode 是否进行encodeURIComponent 默认为true
 * @return {string}
 */
var json2query = exports.json2query = function json2query(obj, isEncode) {
  isEncode = isEncode !== false;
  var url = '';
  if (isObject(obj)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(obj)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

        var k = _ref2[0];
        var v = _ref2[1];

        var value = v !== undefined ? v : '';
        url += '&' + k + '=' + (isEncode ? encodeURIComponent(value) : value);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return url ? url.substring(1) : '';
};

/**
 * 解析url参数
 * @example ?id=12345&a=b 或者 #id=12345&a=b
 * @return Object {id:12345,a:b}
 */
var query2json = exports.query2json = function query2json() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var reg = /[#?&][^#?&]+=[^#?&]+/g;
  var arr = url.match(reg);
  var obj = {};
  if (arr) {
    arr.forEach(function (item) {
      var tempArr = item.substring(1).split('=');
      var key = decodeURIComponent(tempArr[0]);
      var val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

exports.default = {
  json2query: json2query,
  query2json: query2json
};

/***/ }),

/***/ "ar1n":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "awtq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Guy4"), __esModule: true };

/***/ }),

/***/ "axW8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export warn */
/* harmony export (immutable) */ __webpack_exports__["a"] = assert;
function warn(msg) {
  console.error(`[Scroll warn]: ${msg}`)
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error(('[Scroll] ' + msg))
  }
}

/***/ }),

/***/ "axut":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Zva/");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
exports.default = {
  bootstrap: function bootstrap() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _index2.default.bootstrap.call(_index2.default, options);
  },
  getInfo: _index2.default.getInfo

};

/***/ }),

/***/ "b6zB":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("xCCz");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("Ytor").set });


/***/ }),

/***/ "bD0u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("tRKg");
var has = __webpack_require__("JAUT");
var DESCRIPTORS = __webpack_require__("yfK2");
var $export = __webpack_require__("xCCz");
var redefine = __webpack_require__("NJL6");
var META = __webpack_require__("w3K7").KEY;
var $fails = __webpack_require__("lt2H");
var shared = __webpack_require__("p06J");
var setToStringTag = __webpack_require__("DKwb");
var uid = __webpack_require__("ucRq");
var wks = __webpack_require__("hTSS");
var wksExt = __webpack_require__("ShPv");
var wksDefine = __webpack_require__("vn5Q");
var enumKeys = __webpack_require__("7ksP");
var isArray = __webpack_require__("uj1z");
var anObject = __webpack_require__("StTd");
var isObject = __webpack_require__("OuXD");
var toIObject = __webpack_require__("dkPk");
var toPrimitive = __webpack_require__("w7d5");
var createDesc = __webpack_require__("bYFs");
var _create = __webpack_require__("WwJq");
var gOPNExt = __webpack_require__("suar");
var $GOPD = __webpack_require__("TMJ/");
var $DP = __webpack_require__("isOg");
var $keys = __webpack_require__("YKc4");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("7WrD").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("PGoE").f = $propertyIsEnumerable;
  __webpack_require__("SCZj").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("YYvI")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("SMww")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "bFEg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__("9S/u");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _app.App;
  }
});

var _page = __webpack_require__("IYim");

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _page.Page;
  }
});

var _component = __webpack_require__("ll/r");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _component.Component;
  }
});

/***/ }),

/***/ "bFVL":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _videoable = __webpack_require__("hKPp");

var _videoable2 = _interopRequireDefault(_videoable);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video() {
  (0, _classCallCheck3.default)(this, Video);
  this.props = {
    controls: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    }
  };
  this.methods = {
    onstart: function onstart(e) {
      this.$cmlEmit('start');
      this.$cmlEmit('customstart');
    },
    onpause: function onpause(e) {
      this.$cmlEmit('pause');
      this.$cmlEmit('custompause');
    },
    onfinish: function onfinish(e) {
      this.$cmlEmit('finish');
      this.$cmlEmit('customfinish');
    },
    onfail: function onfail(e) {
      this.$cmlEmit('fail');
      this.$cmlEmit('customfail');
    }
  };
}; //
//
//
//
//

exports.default = new Video();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { videoable: _videoable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "bK8B":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/storage_c45d61a.png";

/***/ }),

/***/ "bQu9":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CContainer = function CContainer() {
  (0, _classCallCheck3.default)(this, CContainer);
  this.props = {
    direction: {
      type: String,
      default: 'row'
    }
  };
  this.computed = {
    isVertical: function isVertical() {
      if (this.direction === 'column') {
        return true;
      } else if (this.direction === 'row') {
        return false;
      }
    },
    containerStyle: function containerStyle() {
      var finalStyle = '';

      if (this.isVertical) {
        finalStyle = "flex-direction:column";
      }
      return finalStyle;
    }
  };
};

exports.default = new CContainer();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "bYFs":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "bbqi":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _row = __webpack_require__("Emu9");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__("NE82");

var _col2 = _interopRequireDefault(_col);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Row = function Row() {
        (0, _classCallCheck3.default)(this, Row);
};

exports.default = new Row();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cRow: _row2.default, cCol: _col2.default, cHeader: _header2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "bdpq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_component_90086e8.png";

/***/ }),

/***/ "bjfn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("w1p+");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "btUP":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3h3k");
module.exports = __webpack_require__("OzFA").Object.keys;


/***/ }),

/***/ "cL84":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _component = __webpack_require__("EK/L");

var component = _interopRequireWildcard(_component);

var _event = __webpack_require__("EEl8");

var event = _interopRequireWildcard(_event);

var _viewport = __webpack_require__("HtJK");

var viewport = _interopRequireWildcard(_viewport);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, component, event, viewport);

/***/ }),

/***/ "cU5V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("WwJq");
var descriptor = __webpack_require__("bYFs");
var setToStringTag = __webpack_require__("DKwb");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("SMww")(IteratorPrototype, __webpack_require__("hTSS")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "caUD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extendVue;

var _mixins = __webpack_require__("QYOt");

var _webMixins = __webpack_require__("p+oX");

var _webMixins2 = _interopRequireDefault(_webMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendVue(Vue) {

  // 自定义原生标签处理 覆盖Vue方法
  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) {
    return htmlRegex.test(tag);
  };
  Vue.config.parsePlatformTagName = function (tag) {
    return tag.replace(htmlRegex, '');
  };

  function isCmlTag(tag) {
    return typeof chameleon._components[tag] !== 'undefined';
  }
  var oldGetTagNamespace = Vue.config.getTagNamespace;
  Vue.config.getTagNamespace = function (tag) {
    if (isCmlTag(tag)) {
      return;
    }
    return oldGetTagNamespace(tag);
  };

  Vue.mixin(_mixins.base);
  Vue.mixin(_mixins.event);

  Vue.mixin(_webMixins2.default.mixins);
}

/***/ }),

/***/ "cbe4":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _textareaWeb = __webpack_require__("kTxT");

var _textareaWeb2 = _interopRequireDefault(_textareaWeb);

var _scrollerWeb = __webpack_require__("mYJC");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function () {
  function Textarea() {
    (0, _classCallCheck3.default)(this, Textarea);
    this.data = {
      isfocus: false,
      inputValue: '',
      eventName: '触发的事件名称'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      inputEvent: function inputEvent(e) {
        this.inputValue = e.detail.value;
      },
      testEvent: function testEvent(e) {
        this.eventName = e.type;
      },
      bindblurevent: function bindblurevent() {
        console.log('blur');
        this.isfocus = false;
      }
    };
  }

  (0, _createClass3.default)(Textarea, [{
    key: "mounted",
    value: function mounted() {
      var _this = this;

      setTimeout(function () {
        _this.isfocus = true;
      }, 300);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return Textarea;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new Textarea();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cTextarea: _textareaWeb2.default, cScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "dCBN":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rollbackWeb = rollbackWeb;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'rollbackWeb';

function rollbackWeb() {
  (0, _index.callNative)(moduleName, methodName, {}, function () {});
}

rollbackWeb.prototype.moduleName = moduleName;
rollbackWeb.prototype.methodName = methodName;

/***/ }),

/***/ "dWRg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "df4s":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__("WcAg")('getOwnPropertyNames', function () {
  return __webpack_require__("suar").f;
});


/***/ }),

/***/ "dkPk":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("R2s1");
var defined = __webpack_require__("SQnF");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "dkby":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "c-foot  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.mergeFootStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d62960d4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "eXs3":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("49u2");
var invoke = __webpack_require__("O6ww");
var html = __webpack_require__("GTLj");
var cel = __webpack_require__("wUk3");
var global = __webpack_require__("tRKg");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("EJ14")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "eYJ0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSystemInfo = getSystemInfo;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getSystemInfo';

function getSystemInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    /**
     * res.data
     * {
      "scale": 3,
      "deviceWidth": 1080,
      "deviceHeight": 2340,
      "os": "android",
      "extraParams": {
        "model": "PAFM00",
        "imei": "356416465466244",
        "netType": "WIFI"
      }
    }
     */
    // 兼容原始数据结构
    res.data.extraParams.os = res.data.os;

    var _res$data = res.data,
        deviceWidth = _res$data.deviceWidth,
        deviceHeight = _res$data.deviceHeight,
        scale = _res$data.scale;

    res.data.viewportWidth = deviceWidth / scale;
    res.data.viewportHeight = deviceHeight / scale;
    cb(res);
  });
}

getSystemInfo.prototype.moduleName = moduleName;
getSystemInfo.prototype.methodName = methodName;

/***/ }),

/***/ "eYwm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ebFP":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _textareademoWeb = __webpack_require__("Be+Q");

var _textareademoWeb2 = _interopRequireDefault(_textareademoWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {}; //
//
//
//
//

exports.default.components = (0, _extends3.default)({}, exports.default.components, { textareademo: _textareademoWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "elZ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml__ = __webpack_require__("3RHu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_232494b2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml__ = __webpack_require__("rtny");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("aXX7")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-232494b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_232494b2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_232494b2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_layout_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/layout/layout.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232494b2", Component.options)
  } else {
    hotAPI.reload("data-v-232494b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "en+i":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Page = exports.App = undefined;

var _instance = __webpack_require__("bFEg");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _instance.App;
  }
});
Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _instance.Page;
  }
});
Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _instance.Component;
  }
});

var _render = __webpack_require__("k1x2");

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_render2.default.init(Vue);
// import './style'

/***/ }),

/***/ "f+sd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "f1jY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__("IcnI");

var _index2 = _interopRequireDefault(_index);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//


var App = function () {
        function App() {
                (0, _classCallCheck3.default)(this, App);
                this.data = {
                        store: _index2.default,
                        routerConfig: _routerConfig2.default
                };
        }

        (0, _createClass3.default)(App, [{
                key: 'created',
                value: function created(res) {}
        }]);
        return App;
}();

exports.default = new App();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createApp(exports.default).getOptions();

/***/ }),

/***/ "f3pV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml__ = __webpack_require__("bFVL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_32704bae_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml__ = __webpack_require__("nbGy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("LBP5")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32704bae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_32704bae_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_32704bae_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_video_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/video/video.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32704bae", Component.options)
  } else {
    hotAPI.reload("data-v-32704bae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fmLH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("7Mo0"), __esModule: true };

/***/ }),

/***/ "fpcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eventMixin;
function eventMixin(CScroll) {
  CScroll.prototype.on = function (type, fn, context = this) {
    if (!this._events[type]) {
      this._events[type] = []
    }

    this._events[type].push([fn, context])
  }

  CScroll.prototype.once = function (type, fn, context = this) {
    function magic() {
      this.off(type, magic)

      fn.apply(context, arguments)
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn

    this.on(type, magic)
  }

  CScroll.prototype.off = function (type, fn) {
    let _events = this._events[type]
    if (!_events) {
      return
    }

    let count = _events.length
    while (count--) {
      if (_events[count][0] === fn || (_events[count][0] && _events[count][0].fn === fn)) {
        _events[count][0] = undefined
      }
    }
  }

  CScroll.prototype.trigger = function (type) {
    let events = this._events[type]
    if (!events) {
      return
    }

    let len = events.length
    let eventsCopy = [...events]
    for (let i = 0; i < len; i++) {
      let event = eventsCopy[i]
      let [fn, context] = event
      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1))
      }
    }
  }
}


/***/ }),

/***/ "gASe":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("xCCz");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("WwJq") });


/***/ }),

/***/ "gbjg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gj6D":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("xp5m");

var _index2 = _interopRequireDefault(_index);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CPage = function () {
  function CPage() {
    (0, _classCallCheck3.default)(this, CPage);
    this.props = {
      title: {
        required: true,
        type: String,
        default: ''
      }
    };
    this.watch = {
      title: function title(v) {
        this.setTitle(v);
      }
    };
    this.methods = {
      setTitle: function setTitle(v) {
        document.title = v;
        (0, _index2.default)(v);
      }
    };
  }

  (0, _createClass3.default)(CPage, [{
    key: 'created',
    value: function created() {
      this.setTitle(this.title);
    }
  }]);
  return CPage;
}();

exports.default = new CPage();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "gkDN":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("StTd");
var get = __webpack_require__("N4q2");
module.exports = __webpack_require__("OzFA").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "h2Ex":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function () {
  function Config(data) {
    (0, _classCallCheck3.default)(this, Config);

    this.data = data;
  }

  (0, _createClass3.default)(Config, [{
    key: 'get',
    value: function get() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var def = arguments[1];

      var result = this.data;
      path.split('.').forEach(function (key) {
        if (key && typeof result !== 'undefined') {
          result = result[key];
        }
      });
      if (typeof result !== 'undefined') {
        return result;
      } else {
        return def;
      }
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      if (typeof value === 'undefined') {
        this.data = path;
      } else {
        path = String(path || '').trim();
        if (path) {
          var paths = path.split('.');
          var last = paths.pop();
          var data = this.data || {};
          paths.forEach(function (key) {
            var type = data[key];
            if ((typeof type === 'undefined' ? 'undefined' : (0, _typeof3.default)(type)) === 'object') {
              data = data[key];
            } else if (typeof type === 'undefined') {
              data = data[key] = {};
            } else {
              throw new Error('forbidden to set property[' + key + '] of [' + type + '] data');
            }
          });
          data[last] = value;
        }
      }
    }
  }]);
  return Config;
}();

exports.default = Config;

/***/ }),

/***/ "h696":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _index = __webpack_require__("1yVu");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApp(options) {
  return _index2.default.createApp(options);
}

/***/ }),

/***/ "hDcu":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("49u2");
var call = __webpack_require__("RA/h");
var isArrayIter = __webpack_require__("GDCJ");
var anObject = __webpack_require__("StTd");
var toLength = __webpack_require__("ImXL");
var getIterFn = __webpack_require__("N4q2");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "hIjT":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("dkPk");
var toLength = __webpack_require__("ImXL");
var toAbsoluteIndex = __webpack_require__("vEog");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "hKPp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_videoable_vue__ = __webpack_require__("thLZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_videoable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_videoable_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_videoable_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_videoable_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_493c08d9_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_videoable_vue__ = __webpack_require__("Gn1k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("f+sd")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-493c08d9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_videoable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_493c08d9_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_videoable_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_493c08d9_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_videoable_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/assets/vue/videoable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-493c08d9", Component.options)
  } else {
    hotAPI.reload("data-v-493c08d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hP+v":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("E+yl");
var defined = __webpack_require__("SQnF");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "hTSS":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("p06J")('wks');
var uid = __webpack_require__("ucRq");
var Symbol = __webpack_require__("tRKg").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "hjGn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml__ = __webpack_require__("lmcA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e543108_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml__ = __webpack_require__("OBo1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("G85p")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e543108"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e543108_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e543108_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/input/input.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e543108", Component.options)
  } else {
    hotAPI.reload("data-v-4e543108", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hocU":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_component_HL_23be89c.png";

/***/ }),

/***/ "hzQr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "flex-item  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.colStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e9c7258", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "i0PX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _env = __webpack_require__("8d/N");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'setTitle',
    value: function setTitle(title) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.setTitle({
          title: title
        });
      } else {
        document.title = title;
      }
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "iC9F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("49u2");
var $export = __webpack_require__("xCCz");
var toObject = __webpack_require__("5FFm");
var call = __webpack_require__("RA/h");
var isArrayIter = __webpack_require__("GDCJ");
var toLength = __webpack_require__("ImXL");
var createProperty = __webpack_require__("aP3p");
var getIterFn = __webpack_require__("N4q2");

$export($export.S + $export.F * !__webpack_require__("p7Ns")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "iM0j":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentRect = getComponentRect;

var _index = __webpack_require__("X5We");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleName = 'dom';
var methodName = 'getComponentRect';

function getComponentRect(module, method, args, callback) {
  _index2.default.getComponentRect.apply(_index2.default, arguments);
}

getComponentRect.prototype.moduleName = moduleName;
getComponentRect.prototype.methodName = methodName;

/***/ }),

/***/ "iQx6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__ = __webpack_require__("WSrq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_277540ac_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__ = __webpack_require__("YSHD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("rDjA")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-277540ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_277540ac_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_277540ac_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/radio/radio.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-277540ac", Component.options)
  } else {
    hotAPI.reload("data-v-277540ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "iSEW":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("IMan");

var _web2 = _interopRequireDefault(_web);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createStore',
    value: function createStore(options) {
      return (0, _web2.default)(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "iXbp":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("SRKA");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

exports.isFn = isFn;
exports.isStr = isStr;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromSearchStr = getQueryParamsFromSearchStr;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.compareVersion = compareVersion;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var _key = keys[i];
      str += _key + '=' + encodeURIComponent(obj[_key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var _key2 = keys[i];
      str += _key2 + '=' + encodeURIComponent(obj[_key2]) + '&';
    }
  }
  return str;
}

function queryParse(search) {
  search = search || '';
  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return (/^\/[^/]/.test(url)
  );
}

function addApiPrefix(url) {
  if (process && process.env && "https://api.chameleon.com") {
    return "https://api.chameleon.com" + url;
  }
  return url;
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    some = JSON.parse(some);
  }
  return some;
}

function getQueryParamsFromSearchStr(qs) {
  var search = qs;
  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromSearchStr(url);
  var _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$wx_addr = queryObj.wx_addr,
      wx_addr = _queryObj$wx_addr === undefined ? '' : _queryObj$wx_addr,
      _queryObj$cml_addr = queryObj.cml_addr,
      cml_addr = _queryObj$cml_addr === undefined ? '' : _queryObj$cml_addr,
      extraData = (0, _objectWithoutProperties3.default)(queryObj, ['weixin_appid', 'weixin_path', 'weixin_envVersion', 'weex_path', 'wx_addr', 'cml_addr']);

  // weex 链接

  var weexUrl = '';
  if (cml_addr) {
    cml_addr = cml_addr + '?_cml_r=' + ~~(Math.random() * 1E5);
    cml_addr = encodeURIComponent(cml_addr);
    weexUrl = webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&cml_addr=' + cml_addr;
  }
  // 向下兼容
  if (wx_addr) {
    wx_addr = wx_addr + '?_cml_r=' + ~~(Math.random() * 1E5);
    wx_addr = encodeURIComponent(wx_addr);
    weexUrl = webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&wx_addr=' + wx_addr;
  }

  var objTreated = {
    weex: weexUrl,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path,
      extraData: extraData,
      envVersion: weixin_envVersion
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("uIsA")))

/***/ }),

/***/ "iaib":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BridgeGlobal = exports.BridgeGlobal = function () {
  var instance = void 0;
  function init() {
    return {
      listenCallbacks: {},
      callbackId: 0
    };
  }
  return {
    getInstance: function getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
}();

/***/ }),

/***/ "ifN7":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validOptions = validOptions;
function validOptions(options) {
  var validList = [{
    name: 'app',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165app'
  }, {
    name: 'store',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165store'
  }, {
    name: 'routerConfig',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165routerConfig'
  }, {
    name: 'router',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165router'
  }];

  validList.forEach(function (item) {
    if (!options[item.name]) {
      throw new Error(item.message);
    }
  });
}

/***/ }),

/***/ "irMx":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canIUse = canIUse;

var _index = __webpack_require__("LOYP");

var cModuleName = 'cml';
var cMethodName = 'canIUse';

function canIUse(_ref, cb) {
  var method = _ref.method;

  var moduleName = this[method] && this[method].prototype.moduleName;
  var methodName = this[method] && this[method].prototype.methodName;

  if (module && method) {
    (0, _index.callNative)(cModuleName, cMethodName, {
      module: moduleName,
      method: methodName
    }, cb);
  } else {
    this[method] ? cb(true) : cb(false);
  }
}

canIUse.prototype.moduleName = cModuleName;
canIUse.prototype.methodName = cMethodName;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("JPzv")(module)))

/***/ }),

/***/ "isOg":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("StTd");
var IE8_DOM_DEFINE = __webpack_require__("xrry");
var toPrimitive = __webpack_require__("w7d5");
var dP = Object.defineProperty;

exports.f = __webpack_require__("yfK2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "j8uF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pullDownMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ease__ = __webpack_require__("Rwfi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_const__ = __webpack_require__("B3mp");



function pullDownMixin(CScroll) {
  CScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = __WEBPACK_IMPORTED_MODULE_1__util_const__["f" /* PROBE_REALTIME */]
  }

  CScroll.prototype._checkPullDown = function () {
    const {threshold = 90, stop = 40} = this.options.pullDownRefresh

    // check if a real pull down action
    if (this.directionY !== __WEBPACK_IMPORTED_MODULE_1__util_const__["a" /* DIRECTION_DOWN */] || this.y < threshold) {
      return false
    }

    if (!this.pulling) {
      this.pulling = true
      this.trigger('pullingDown')
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_0__util_ease__["a" /* ease */].bounce)

    return this.pulling
  }

  CScroll.prototype.finishPullDown = function () {
    this.pulling = false
    this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_0__util_ease__["a" /* ease */].bounce)
  }

  CScroll.prototype.openPullDown = function (config = true) {
    this.options.pullDownRefresh = config
    this._initPullDown()
  }

  CScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false
  }
}


/***/ }),

/***/ "jB73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cml-radio  cml-base cml-view", attrs: {} }, [
    _c(
      "div",
      {
        staticClass: "cml-radio-wrap  cml-base cml-view",
        attrs: { "data-evt-click": "" },
        on: {
          click: _vm.$stopOuterA,
          cml$tap: function($event) {
            $event.stopPropagation()
            _vm._cmlEventProxy($event, "changeSelect")
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "cml-radio-select  cml-base cml-view",
            style: _vm._cmlStyleProxy(_vm.radioStyle, {
              rem: true,
              scale: 0.5,
              remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
              autoprefixOptions: {
                browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                grid: false
              }
            }),
            attrs: {}
          },
          [
            _c("div", {
              class: _vm.radioClass + "  cml-base cml-view",
              attrs: {}
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "cml-radio-label  cml-base cml-text", attrs: {} },
          [_vm._v(_vm._s(_vm.label))]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48473743", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "jRCD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClipBoardData = getClipBoardData;
exports.setClipBoardData = setClipBoardData;

var _index = __webpack_require__("LOYP");

var moduleName = 'clipboard';
var methodGet = 'getClipBoardData';
var methodSet = 'setClipBoardData';

function getClipBoardData() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments[1];

  /**
   * params {}
   */
  (0, _index.callNative)(moduleName, methodGet, param, function (res) {
    /**
    * errno
    * msg
    * data
    */
    cb(res);
  });
}

getClipBoardData.prototype.moduleName = moduleName;
getClipBoardData.prototype.methodName = methodGet;

function setClipBoardData(_ref, cb) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? '' : _ref$data;

  (0, _index.callNative)(moduleName, methodSet, {
    data: data
  }, function (res) {
    /**
    * errno
    * msg
    * data
    */
    cb(res);
  });
}

setClipBoardData.prototype.moduleName = moduleName;
setClipBoardData.prototype.methodName = methodSet;

/***/ }),

/***/ "jlOJ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CMain = function CMain() {
  (0, _classCallCheck3.default)(this, CMain);
  this.props = {
    mainStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {};
  this.computed = {
    mergeMainStyle: function mergeMainStyle() {
      return this.mainStyle;
    }
  };
};

exports.default = new CMain();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "jlt8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "row演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "c-row" }
      }),
      _vm._v(" "),
      _c(
        "c-row",
        { staticClass: " cml-base cml-c-row", attrs: { margin: 100 } },
        [
          _c("div", { staticClass: "col-item  cml-base cml-view", attrs: {} }),
          _vm._v(" "),
          _c("div", { staticClass: "col-item  cml-base cml-view", attrs: {} }),
          _vm._v(" "),
          _c("div", { staticClass: "col-item  cml-base cml-view", attrs: {} })
        ]
      ),
      _vm._v(" "),
      _c(
        "c-row",
        {
          staticClass: " cml-base cml-c-row",
          attrs: { margin: 100, height: 200 }
        },
        [
          _c(
            "c-col",
            {
              staticClass: " cml-base cml-c-col",
              attrs: {
                width: 50,
                height: 100,
                "background-color": "#ddd",
                margin: 20
              }
            },
            [_c("div", { staticClass: " cml-base cml-view", attrs: {} })]
          ),
          _vm._v(" "),
          _c(
            "c-col",
            {
              staticClass: " cml-base cml-c-col",
              attrs: {
                width: 100,
                height: 100,
                "background-color": "#bbb",
                margin: 20
              }
            },
            [_c("div", { staticClass: " cml-base cml-view", attrs: {} })]
          ),
          _vm._v(" "),
          _c(
            "c-col",
            {
              staticClass: " cml-base cml-c-col",
              attrs: {
                width: 200,
                height: 100,
                "background-color": "#aaa",
                margin: 20
              }
            },
            [_c("div", { staticClass: " cml-base cml-view", attrs: {} })]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "c-row",
        {
          staticClass: " cml-base cml-c-row",
          attrs: { margin: 100, height: 100 }
        },
        [
          _c(
            "c-col",
            { staticClass: " cml-base cml-c-col", attrs: { margin: 50 } },
            [
              _c("div", {
                staticClass: "col-item-2  cml-base cml-view",
                attrs: {}
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "c-col",
            { staticClass: " cml-base cml-c-col", attrs: { margin: 50 } },
            [
              _c("div", {
                staticClass: "col-item-2  cml-base cml-view",
                attrs: {}
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "c-col",
            { staticClass: " cml-base cml-c-col", attrs: { margin: 50 } },
            [
              _c("div", {
                staticClass: "col-item-2  cml-base cml-view",
                attrs: {}
              })
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ba76f68", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "jq6T":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _scrollerWeb = __webpack_require__("mYJC");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scroller = function () {
    function Scroller() {
        (0, _classCallCheck3.default)(this, Scroller);
        this.data = {
            /**
             * c-scroller 配置
             */
            bottomOffset: 20,
            scrollDirection: 'vertical',
            panels: [],
            rows: [],
            scrollTop: 0
        };
        this.computed = {};
        this.watch = {};
        this.methods = {
            change: function change(e) {
                var target = e.currentTarget;
                var dataset = target.dataset;
                var i = dataset.idx;

                var item = this.panels[i];
                if (item) {
                    item.height = item.height === 200 ? 400 : 200;
                    item.width = item.width === 330 ? 730 : 330;
                    item.computedStyle = "height:" + item.height + "cpx;width:" + item.width + "cpx;background-color:" + item.bgc + ";opacity:" + item.opacity;
                }
            },
            randomfn: function randomfn() {
                var ary = [];
                for (var i = 1; i <= 40; i++) {
                    var item = { label: i, height: 200, width: 730, bgc: '#69BE96', opacity: 1 };
                    item.computedStyle = "height:" + item.height + "cpx;width:" + item.width + "cpx;background-color:" + item.bgc + ";opacity:" + item.opacity + ";";

                    ary.push(item);
                }
                return ary;
            },
            onScroll: function onScroll(e) {
                console.log('scroll');
            },
            onBottom: function onBottom(e) {
                console.log('onBottom');
            }
        };
    }

    (0, _createClass3.default)(Scroller, [{
        key: "created",
        value: function created(res) {
            this.panels = this.randomfn();

            for (var i = 0; i < 30; i++) {
                this.rows.push('row ' + i);
            }
            console.log('demo page created:', res);
        }
    }, {
        key: "mounted",
        value: function mounted() {
            var _this = this;

            setTimeout(function () {
                _this.scrollTop = 2000;
            }, 2000);
        }
    }]);
    return Scroller;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new Scroller();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "k1x2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("Jx0+");

var _chameleon = __webpack_require__("G8qx");

var _chameleon2 = _interopRequireDefault(_chameleon);

var _extendVue = __webpack_require__("caUD");

var _extendVue2 = _interopRequireDefault(_extendVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _inited = false;

_chameleon2.default.init = function init(Vue) {
  if (_inited) {
    return;
  }
  _inited = true;
  _chameleon2.default._inited = true;

  (0, _extendVue2.default)(Vue);
};

if (global.Vue) {
  _chameleon2.default.init(global.Vue);
}

exports.default = _chameleon2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("PvPp")))

/***/ }),

/***/ "k5//":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.str2obj = str2obj;
exports.cpx2px = cpx2px;
exports.pxTransform = pxTransform;
exports.cmlStyleTransfer = cmlStyleTransfer;
exports.getValBetweenMaxAndMin = getValBetweenMaxAndMin;
function str2obj(str) {
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        var classValue = String(classObj[1]).replace(/(^\s*)|(\s*)$/g, "");
        obj[className] = classValue;
    });
    return obj;
}
function cpx2px(cpx) {
    if (typeof cpx !== 'number') {
        console.error('Parameter must be a number');
        return;
    }
    var viewportWidth = window.innerWidth;
    var px = viewportWidth / 750 * cpx;
    return px;
}
function pxTransform(s) {
    if (!s) return '';
    if (/(-?\d*\.?\d*)cpx/ig.test(s)) {
        return s.replace(/(-?\d*\.?\d*)cpx/ig, function (matchs, $1) {
            return cpx2px(Number($1)) + 'px';
        });
    }
    return s;
}
function cmlStyleTransfer(str) {
    if (!str) return {};
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        if (className) {
            var classValue = pxTransform(String(classObj[1]).replace(/(^\s*)|(\s*)$/g, ""));
            obj[className] = classValue;
        }
    });
    return obj;
}

function getValBetweenMaxAndMin(value, maxValue, minValue) {
    if (isNaN(Number(value))) {
        return '';
    }
    if (isNaN(maxValue) || isNaN(minValue)) {
        return value;
    }
    if (maxValue != Infinity && maxValue <= Number(value)) {
        value = String(maxValue);
    }
    if (minValue != -Infinity && minValue >= Number(value)) {
        value = String(minValue);
    }
    return value;
}

/***/ }),

/***/ "kEIA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "slider-container  cml-base cml-view",
      attrs: { "data-evt-mouseleave": "" },
      on: {
        mouseleave: function($event) {
          _vm._cmlEventProxy($event, "swipeOut")
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "slider-touch  cml-base cml-view",
          style: _vm._cmlStyleProxy(_vm.styleStr, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {
            "data-evt-touchmove": "",
            "data-evt-touchstart": "",
            "data-evt-touchend": "",
            "data-evt-mousedown": "",
            "data-evt-mouseup": "",
            "data-evt-mousemove": "",
            "data-evt-webkit-transition-end": "",
            "data-evt-transitionend": "",
            "data-evt-transitioncancel": "",
            "data-evt-webkit-transition-cancel": ""
          },
          on: {
            touchmove: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "swipeMove")
            },
            touchstart: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "swipeStart")
            },
            touchend: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "swipeEnd")
            },
            mousedown: function($event) {
              _vm._cmlEventProxy($event, "swipeStart")
            },
            mouseup: function($event) {
              _vm._cmlEventProxy($event, "swipeEnd")
            },
            mousemove: function($event) {
              _vm._cmlEventProxy($event, "swipeMove")
            },
            "webkit-transition-end": function($event) {
              _vm._cmlEventProxy($event, "onTransitionEnd")
            },
            transitionend: function($event) {
              _vm._cmlEventProxy($event, "onTransitionEnd")
            },
            transitioncancel: function($event) {
              _vm._cmlEventProxy($event, "onTransitionEnd")
            },
            "webkit-transition-cancel": function($event) {
              _vm._cmlEventProxy($event, "onTransitionEnd")
            }
          }
        },
        [
          _vm.pages.length === 0
            ? _c(
                "div",
                {
                  class:
                    "slider-wrapper " +
                    _vm.getWrapperClass +
                    "  cml-base cml-view",
                  attrs: {}
                },
                [_vm._t("default", null, {})],
                2
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _vm.indicatorDots
        ? _c(
            "div",
            {
              staticClass:
                "slider-pagination slider-pagination-bullets  cml-base cml-view",
              attrs: {}
            },
            _vm._l(_vm.pagenums || _vm.s_data.sliderLength, function(n, index) {
              return _c(
                "div",
                { key: n.index, staticClass: " cml-base cml-view", attrs: {} },
                [
                  !_vm.options.renderPagination
                    ? _c("div", {
                        class:
                          "slider-pagination-bullet " +
                          (n - 1 === _vm.data.currentPage
                            ? "slider-pagination-bullet-active"
                            : "") +
                          "  cml-base cml-view",
                        attrs: { "data-evt-click": "" },
                        on: {
                          click: _vm.$stopOuterA,
                          cml$tap: function($event) {
                            $event.stopPropagation()
                            _vm._cmlInlineStatementEventProxy("slide", n - 1)
                          }
                        }
                      })
                    : _vm._e()
                ]
              )
            })
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9126591e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "kOO5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("YYvI");
var global = __webpack_require__("tRKg");
var ctx = __webpack_require__("49u2");
var classof = __webpack_require__("LARG");
var $export = __webpack_require__("xCCz");
var isObject = __webpack_require__("OuXD");
var aFunction = __webpack_require__("w1p+");
var anInstance = __webpack_require__("UTAz");
var forOf = __webpack_require__("hDcu");
var speciesConstructor = __webpack_require__("Pta8");
var task = __webpack_require__("eXs3").set;
var microtask = __webpack_require__("zDda")();
var newPromiseCapabilityModule = __webpack_require__("bjfn");
var perform = __webpack_require__("CqNQ");
var userAgent = __webpack_require__("3USK");
var promiseResolve = __webpack_require__("/VIj");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("hTSS")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("35um")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("DKwb")($Promise, PROMISE);
__webpack_require__("9ZB8")(PROMISE);
Wrapper = __webpack_require__("OzFA")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("p7Ns")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "kTxT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml__ = __webpack_require__("uL5D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ebd88b1_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml__ = __webpack_require__("0pJn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("22F/")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ebd88b1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ebd88b1_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ebd88b1_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_textarea_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/textarea/textarea.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ebd88b1", Component.options)
  } else {
    hotAPI.reload("data-v-3ebd88b1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "kbHl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-head  cml-base cml-view", attrs: {} }, [
    _c(
      "div",
      { staticClass: "page-head-title  cml-base cml-view", attrs: {} },
      [
        _c(
          "span",
          { staticClass: "page-head-title-text  cml-base cml-text", attrs: {} },
          [_vm._v(_vm._s(_vm.title))]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "page-head-line  cml-base cml-view", attrs: {} }),
    _vm._v(" "),
    _vm.desc
      ? _c(
          "div",
          { staticClass: "page-head-desc  cml-base cml-view", attrs: {} },
          [
            _c(
              "span",
              {
                staticClass: "page-head-desc-text  cml-base cml-text",
                attrs: {}
              },
              [_vm._v(_vm._s(_vm.desc))]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f3dea56", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "kdbS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "l4ty":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("LARG");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var Iterators = __webpack_require__("7unY");
module.exports = __webpack_require__("OzFA").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "l9fT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_API_145b82b.png";

/***/ }),

/***/ "lHTR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("81UF");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("OSNL");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "lHU2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lKwg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createPage',
    value: function createPage(options) {
      return new _web.Page(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "lNMv":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = type;
function type(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}

/***/ }),

/***/ "lQbU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _carouselWeb = __webpack_require__("W8/k");

var _carouselWeb2 = _interopRequireDefault(_carouselWeb);

var _carouselItemWeb = __webpack_require__("WUvx");

var _carouselItemWeb2 = _interopRequireDefault(_carouselItemWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Carousel = function Carousel() {
        (0, _classCallCheck3.default)(this, Carousel);
};

exports.default = new Carousel();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, carousel: _carouselWeb2.default, carouselItem: _carouselItemWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "lhC1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/chameleon_39b423e.jpg";

/***/ }),

/***/ "ll/r":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = exports.Component = function (_BaseCtor) {
  (0, _inherits3.default)(Component, _BaseCtor);

  function Component(options) {
    (0, _classCallCheck3.default)(this, Component);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Component.__proto__ || (0, _getPrototypeOf2.default)(Component)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'component',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return Component;
}(_BaseCtor3.default);

/***/ }),

/***/ "lmcA":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _scrollerWeb = __webpack_require__("mYJC");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _inputWeb = __webpack_require__("z6xb");

var _inputWeb2 = _interopRequireDefault(_inputWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Input = function () {
  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    this.data = {
      isfocus: false,
      inputValue: '',
      eventName: '触发的事件名称',
      keywords: '',
      winHeight: 0,
      testMaxMinVal: '10'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      inputEvent: function inputEvent(e) {
        this.inputValue = e.detail.value;
      },
      testEvent: function testEvent(e) {
        this.eventName = e.type;
      },
      bindblurevent: function bindblurevent() {
        console.log('blur');
        this.isfocus = false;
      },
      testMaxMinEvent: function testMaxMinEvent(e) {
        var _this = this;

        this.testMaxMinVal = '';
        setTimeout(function () {
          _this.testMaxMinVal = e.detail.value;
        }, 300);
      }
    };
  }

  (0, _createClass3.default)(Input, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      console.log('mounted');
      setTimeout(function () {
        _this2.isfocus = true;
      }, 300);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return Input;
}();

exports.default = new Input();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cScroller: _scrollerWeb2.default, cInput: _inputWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "lt2H":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "lulO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = __webpack_require__("1iTB");

var _promise2 = _interopRequireDefault(_promise);

var _mutationTypes = __webpack_require__("Zf4h");

var mutationTypes = _interopRequireWildcard(_mutationTypes);

var _actionTypes = __webpack_require__("6ApJ");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, actionTypes.INDEX_CHANGE_NAME, function (_ref) {
  var commit = _ref.commit,
      state = _ref.state;
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve('action名称' + new Date().getTime());
    }, 2000);
  }).then(function (res) {
    commit(mutationTypes.CHANGE_NAME, res);
  });
});

/***/ }),

/***/ "lwos":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("textareademo", {
    staticClass: " cml-base cml-textareademo",
    attrs: {}
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-696889f2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "lwq5":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = __webpack_require__("K5yo");

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  index: _state2.default
};

exports.default = state;

/***/ }),

/***/ "mU5j":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warn_da3ad45.png";

/***/ }),

/***/ "mUbh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _actions = __webpack_require__("lulO");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _actions2.default);

/***/ }),

/***/ "mYJC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__ = __webpack_require__("zALR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_93fbae9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__ = __webpack_require__("v5cN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("QGZ+")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-93fbae9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_93fbae9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_93fbae9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/scroller/scroller.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-93fbae9e", Component.options)
  } else {
    hotAPI.reload("data-v-93fbae9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "mrKC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _index = __webpack_require__("iSEW");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(options) {
  return _index2.default.createStore(options);
}

/***/ }),

/***/ "myBf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("xCCz");
var newPromiseCapability = __webpack_require__("bjfn");
var perform = __webpack_require__("CqNQ");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "nD8z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "view" } },
    [
      _c(
        "div",
        { staticClass: "page-demo  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-scroller",
            { staticClass: " cml-base cml-c-scroller", attrs: { height: -1 } },
            [
              _c("c-header", {
                staticClass: " cml-base cml-c-header",
                attrs: { title: "view" }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "page-box  cml-base cml-view", attrs: {} },
                [
                  _c(
                    "div",
                    {
                      staticClass: "page-section  cml-base cml-view",
                      attrs: {}
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "page-section-title  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("flex-direction: row")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "page-section-content  cml-base cml-view",
                          staticStyle: { "flex-direction": "row" },
                          attrs: {}
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex-item demo-1  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("I")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex-item demo-2  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("II")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex-item demo-3  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("III")]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "page-section  cml-base cml-view",
                      attrs: {}
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "page-section-title  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("flex-direction: column")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "page-section-content  cml-base cml-view",
                          staticStyle: { "flex-direction": "column" },
                          attrs: {}
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex-item-V demo-1  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("I")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex-item-V demo-2  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("II")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex-item-V demo-3  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("III")]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b7e4652", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "nFN1":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _popupFactory = __webpack_require__("204m");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'showToast',
    value: function showToast(opt) {
      var message = opt.message,
          duration = opt.duration;

      var instance = (0, _popupFactory.buildToast)({ message: message, show: true });
      setTimeout(function () {
        instance.show = false;
      }, duration);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "nHQd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app", attrs: {} }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d879fa6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "nWd7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("xCCz");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("t9mz") });


/***/ }),

/***/ "naCP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__ = __webpack_require__("ZcnJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_791284eb_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__ = __webpack_require__("uctL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("88tO")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-791284eb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_791284eb_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_791284eb_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/checkbox/checkbox.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-791284eb", Component.options)
  } else {
    hotAPI.reload("data-v-791284eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nbGy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("videoable", {
    staticClass: " cml-base cml-videoable",
    attrs: {
      controls: _vm.controls,
      autoplay: _vm.autoplay,
      loop: _vm.loop,
      src: _vm.src,
      "data-evt-start": "",
      "data-evt-pause": "",
      "data-evt-finish": "",
      "data-evt-fail": ""
    },
    on: {
      start: function($event) {
        $event.stopPropagation()
        return _vm.onstart($event)
      },
      pause: function($event) {
        $event.stopPropagation()
        return _vm.onpause($event)
      },
      finish: function($event) {
        $event.stopPropagation()
        return _vm.onfinish($event)
      },
      fail: function($event) {
        $event.stopPropagation()
        return _vm.onfail($event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32704bae", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "nbNb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "njES":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _WexOptTransformer2 = __webpack_require__("WgSU");

var _WexOptTransformer3 = _interopRequireDefault(_WexOptTransformer2);

var _url = __webpack_require__("amoi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptTransformer = function (_WexOptTransformer) {
  (0, _inherits3.default)(OptTransformer, _WexOptTransformer);

  function OptTransformer(config) {
    (0, _classCallCheck3.default)(this, OptTransformer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OptTransformer.__proto__ || (0, _getPrototypeOf2.default)(OptTransformer)).call(this, config));

    _this.init();
    return _this;
  }

  (0, _createClass3.default)(OptTransformer, [{
    key: 'beforeCreateArgsMixin',
    value: function beforeCreateArgsMixin() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args = args || [];

      var searchObj = (0, _url.query2json)(location.search);

      var hashObj = (0, _url.query2json)(location.hash);

      args[0] = (0, _assign2.default)({}, args[0], searchObj, hashObj);

      return args;
    }
  }]);
  return OptTransformer;
}(_WexOptTransformer3.default);

exports.default = OptTransformer;

/***/ }),

/***/ "no+4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "o0T1":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cPopup = __webpack_require__("piik");

var _cPopup2 = _interopRequireDefault(_cPopup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CToast = function () {
  function CToast() {
    (0, _classCallCheck3.default)(this, CToast);
    this.props = {
      type: {
        type: String,
        default: "loading"
      },
      message: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: 3000
      },
      show: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: false
      },
      needIcon: {
        type: Boolean,
        default: true
      }
    };
    this.data = {
      transitionStyle: "",
      IconMap: {
        loading: __webpack_require__("dWRg"),
        success: __webpack_require__("yS3Q"),
        warn: __webpack_require__("mU5j")
      }
    };
    this.computed = {
      typeImg: function typeImg() {
        return this.IconMap[this.type];
      },
      maskClass: function maskClass() {
        return this.mask ? "has-mask" : "no-mask";
      }
    };
    this.watch = {
      show: function show(n, o) {
        var _this = this;

        if (n) {
          setTimeout(function () {
            _this.$cmlEmit("show", { value: false });
          }, this.duration);
        }
      }
    };
    this.methods = {};
  }

  (0, _createClass3.default)(CToast, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CToast;
}(); //
//
//
//
//
//
//
//
//
//

exports.default = new CToast();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPopup: _cPopup2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "oGul":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Chameleon 默认module名
var moduleDefault = exports.moduleDefault = 'cml';

/***/ }),

/***/ "oJVY":
/***/ (function(module, exports) {

module.exports = {"mode":"hash","domain":"https://api.chameleon.com","routes":[{"url":"/","path":"/pages/index/index","name":"首页","mock":"index.php"},{"name":"list","url":"/pages/example/list/list","path":"/pages/example/list/list","mock":"index.php"},{"name":"scroller","url":"/pages/example/scroller/scroller","path":"/pages/example/scroller/scroller","mock":"index.php"},{"name":"view","url":"/pages/example/view/view","path":"/pages/example/view/view","mock":"index.php"},{"name":"text","url":"/pages/example/text/text","path":"/pages/example/text/text","mock":"index.php"},{"name":"button","url":"/pages/example/button/button","path":"/pages/example/button/button","mock":"index.php"},{"name":"input","url":"/pages/example/input/input","path":"/pages/example/input/input","mock":"index.php"},{"name":"textarea","url":"/pages/example/textarea/textarea","path":"/pages/example/textarea/textarea","mock":"index.php"},{"name":"image","url":"/pages/example/image/image","path":"/pages/example/image/image","mock":"index.php"},{"name":"video","url":"/pages/example/video/video","path":"/pages/example/video/video","mock":"index.php"},{"name":"richtext","url":"/pages/example/richtext/richtext","path":"/pages/example/richtext/richtext"},{"name":"switch","url":"/pages/example/switch/switch","path":"/pages/example/switch/switch"},{"name":"radio","url":"/pages/example/radio/radio","path":"/pages/example/radio/radio"},{"name":"checkbox","url":"/pages/example/checkbox/checkbox","path":"/pages/example/checkbox/checkbox"},{"name":"carousel","url":"/pages/example/carousel/carousel","path":"/pages/example/carousel/carousel"},{"name":"row","url":"/pages/example/row/row","path":"/pages/example/row/row","mock":"index.php"},{"name":"layout","url":"/pages/example/layout/layout","path":"/pages/example/layout/layout","mock":"index.php"}]}

/***/ }),

/***/ "oMZh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _chooseImage = __webpack_require__("s0zd");

var chooseImage = _interopRequireWildcard(_chooseImage);

var _clipboard = __webpack_require__("jRCD");

var clipboard = _interopRequireWildcard(_clipboard);

var _close = __webpack_require__("Do8H");

var close = _interopRequireWildcard(_close);

var _location = __webpack_require__("OI+Q");

var location = _interopRequireWildcard(_location);

var _navigator = __webpack_require__("puJh");

var navigator = _interopRequireWildcard(_navigator);

var _openPage = __webpack_require__("z6Ez");

var openPage = _interopRequireWildcard(_openPage);

var _reload = __webpack_require__("8W/S");

var reload = _interopRequireWildcard(_reload);

var _request = __webpack_require__("2dk6");

var request = _interopRequireWildcard(_request);

var _rollbackWeb = __webpack_require__("dCBN");

var rollbackWeb = _interopRequireWildcard(_rollbackWeb);

var _socket = __webpack_require__("v56Z");

var socket = _interopRequireWildcard(_socket);

var _storage = __webpack_require__("Mg3C");

var storage = _interopRequireWildcard(_storage);

var _systemInfo = __webpack_require__("eYJ0");

var systemInfo = _interopRequireWildcard(_systemInfo);

var _canIUse = __webpack_require__("irMx");

var canIUse = _interopRequireWildcard(_canIUse);

var _getSDKInfo = __webpack_require__("RMKk");

var getSDKInfo = _interopRequireWildcard(_getSDKInfo);

var _title = __webpack_require__("Gk/Z");

var title = _interopRequireWildcard(_title);

var _index = __webpack_require__("KvLQ");

var query = _interopRequireWildcard(_index);

var _getLaunchUrl = __webpack_require__("ak61");

var getLaunchUrl = _interopRequireWildcard(_getLaunchUrl);

var _ui = __webpack_require__("oRcE");

var ui = _interopRequireWildcard(_ui);

var _inSDK = __webpack_require__("4f6o");

var inSDK = _interopRequireWildcard(_inSDK);

var _index2 = __webpack_require__("iM0j");

var getComponentRect = _interopRequireWildcard(_index2);

var _index3 = __webpack_require__("LOYP");

var core = _interopRequireWildcard(_index3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, chooseImage, clipboard, close, location, navigator, openPage, reload, request, rollbackWeb, socket, storage, systemInfo, canIUse, getSDKInfo, title, query, getLaunchUrl, getComponentRect, ui, inSDK, getComponentRect, core);

/***/ }),

/***/ "oRcE":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToast = showToast;
exports.alert = alert;
exports.confirm = confirm;

var _index = __webpack_require__("LOYP");

var moduleName = 'modal';
var methodShowToast = 'showToast';
var methodAlert = 'alert';
var methodConfirm = 'confirm';

function showToast(param) {
  /**
   * message
   * duration(ms)
   */
  (0, _index.callNative)(moduleName, methodShowToast, param, function () {});
}

showToast.prototype.moduleName = moduleName;
showToast.prototype.methodName = methodShowToast;

function alert(param, successCallBack) {
  /**
   * message
   * confirmTitle
   */
  (0, _index.callNative)(moduleName, methodAlert, param, successCallBack);
}

alert.prototype.moduleName = moduleName;
alert.prototype.methodName = methodAlert;

function confirm(param, successCallBack, failCallBack) {
  /**
   * message
   * confirmTitle
   * cancelTitle
   */
  (0, _index.callNative)(moduleName, methodConfirm, param, successCallBack);
}

confirm.prototype.moduleName = moduleName;
confirm.prototype.methodName = methodConfirm;

/***/ }),

/***/ "oWqj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("IZaB");

var _stringify2 = _interopRequireDefault(_stringify);

exports.serializeProtocol = serializeProtocol;
exports.deserializeProtocol = deserializeProtocol;
exports.registerCallback = registerCallback;
exports.registerListen = registerListen;
exports.dispatchProtocol = dispatchProtocol;

var _global = __webpack_require__("iaib");

var _const = __webpack_require__("oGul");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serializeProtocol(_ref) {
  var action = _ref.action,
      module = _ref.module,
      method = _ref.method,
      args = _ref.args,
      callbackId = _ref.callbackId;

  var param = encodeURIComponent((0, _stringify2.default)(args));
  var url = 'cml://channel?';
  url += 'module=' + module + '&';
  url += 'action=' + action + '&';
  url += 'method=' + method + '&';
  url += 'args=' + param + '&';
  url += 'callbackId=' + callbackId;
  return url;
}

function deserializeProtocol(ptcStr) {
  var ptcObj = {};
  var arr = ptcStr && ptcStr.split(/(\?|&)/);
  for (var i = 0; i < arr.length; i++) {
    if (~arr[i].indexOf('=')) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      ptcObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }

  // 获得所需的参数
  var action = ptcObj.action,
      module = ptcObj.module,
      method = ptcObj.method,
      args = ptcObj.args,
      callbackId = ptcObj.callbackId;


  try {
    args = JSON.parse(args);
  } catch (e) {}

  try {
    args.data = args.data ? decodeURIComponent(args.data) : '{}';
    args.data = JSON.parse(args.data);
  } catch (e) {}

  var listenName = module + '_' + method;

  return {
    action: action, module: module, method: method, args: args, callbackId: callbackId, listenName: listenName
  };
}

/**
 * 注册主动调用端上的回调监听
 * @param {Function} callback 回调方法体
 */
function registerCallback(module, method, callback) {
  var module = module || _const.moduleDefault;
  var instance = _global.BridgeGlobal.getInstance();
  var callbackId = module + '_' + method + '_callback_' + instance.callbackId;
  instance.listenCallbacks[callbackId] = callback;
  instance.callbackId++;
  return callbackId;
}

/**
 * 注册等待端上主动调用监听方法
 * @param {Function} callback 监听方法体
 */
function registerListen(module, method, callback) {
  var instance = _global.BridgeGlobal.getInstance();
  var module = module || _const.moduleDefault;
  var listenName = module + '_' + method;
  instance.listenCallbacks[listenName] = callback;
  return listenName;
}

/**
 * 处理通道协议
 * @param {string} protocol 协议
 */
function dispatchProtocol(protocol) {
  var _deserializeProtocol = deserializeProtocol(protocol),
      action = _deserializeProtocol.action,
      module = _deserializeProtocol.module,
      method = _deserializeProtocol.method,
      args = _deserializeProtocol.args,
      callbackId = _deserializeProtocol.callbackId,
      listenName = _deserializeProtocol.listenName;

  var instance = _global.BridgeGlobal.getInstance();

  if (action === 'callbackToJs') {
    instance.listenCallbacks[callbackId] && instance.listenCallbacks[callbackId](args);
  }

  if (action === 'invokeJsMethod') {
    instance.listenCallbacks[listenName] && instance.listenCallbacks[listenName](args);
  }
}

/***/ }),

/***/ "opUr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__ = __webpack_require__("5A95");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_630d2ef1_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__ = __webpack_require__("0T/F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("RbSO")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-630d2ef1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_630d2ef1_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_630d2ef1_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/button/button.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-630d2ef1", Component.options)
  } else {
    hotAPI.reload("data-v-630d2ef1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "os/Y":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("+iRC");

var _index2 = _interopRequireDefault(_index);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _buttonWeb = __webpack_require__("opUr");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _scrollerWeb = __webpack_require__("mYJC");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Button = function () {
  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    this.data = {
      userStyle: ''
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      testclick: function testclick(e) {
        var type = e.detail.type;
        (0, _index2.default)({
          message: type + ' button'
        });
      }
    };
  }

  (0, _createClass3.default)(Button, [{
    key: "mounted",
    value: function mounted() {}
  }]);
  return Button;
}();

exports.default = new Button();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cButton: _buttonWeb2.default, cScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "owDE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml__ = __webpack_require__("0v3s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98d4bb2c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml__ = __webpack_require__("UgQS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("8bHC")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-98d4bb2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98d4bb2c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98d4bb2c_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_image_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/image/image.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98d4bb2c", Component.options)
  } else {
    hotAPI.reload("data-v-98d4bb2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "p+oX":
/***/ (function(module, exports, __webpack_require__) {

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__("Ihxk");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _methods;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var common = __webpack_require__("CHsc");
var webStyleHandle = __webpack_require__("r3pY");

var _ = module.exports = {};
common.merge(_, common);

_.mixins = {
  methods: (_methods = {}, (0, _defineProperty3.default)(_methods, _.inlineStatementEventProxy, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args = args.reduce(function (result, arg) {
      if (arg instanceof Event) {
        result.push(getNewEvent(arg));
      } else {
        result.push(arg);
      }
      return result;
    }, []);
    var originFuncName = args[0];
    if (this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      this[originFuncName].apply(this, (0, _toConsumableArray3.default)(args.slice(1)));
    } else {
      console.log('can not find function ' + originFuncName);
    }
  }), (0, _defineProperty3.default)(_methods, _.modelEventProxyName, function (e, modelKey) {
    var newEvent = getNewEvent(e);
    this[modelKey] = newEvent.detail.value;
  }), (0, _defineProperty3.default)(_methods, _.eventProxyName, function (e, originFuncName) {
    //调用原始事件
    if (this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      //获取新的事件对象
      var newEvent = getNewEvent(e);
      this[originFuncName](newEvent);
    } else {
      console.log('can not find function  ' + originFuncName);
    }
  }), (0, _defineProperty3.default)(_methods, _.eventEmitName, function (eventKey, detail) {
    //传递的参数内容包装成detail参数
    this.$emit(eventKey, {
      type: eventKey,
      detail: detail,
      stopPropagation: function stopPropagation() {}
    });
    if (this['$__checkCmlEmit__']) {
      this['$__checkCmlEmit__'](eventKey, detail);
    }
  }), (0, _defineProperty3.default)(_methods, _.styleParseName, function (content) {
    //web端不需要处理直接返回
    var res = '';
    if (_.isType(content, 'String')) {
      res = content;
    } else if (_.isType(content, 'Object')) {
      (0, _keys2.default)(content).forEach(function (key) {
        res += key + ':' + content[key] + ';';
      });
    }
    return res;
  }), (0, _defineProperty3.default)(_methods, _.styleProxyName, function (content, options) {
    return webStyleHandle(content, options);
  }), (0, _defineProperty3.default)(_methods, _.mergeStyleName, function () {
    return _.mergeStyle.apply(_, arguments);
  }), _methods)
};

function getNewEvent(e) {
  var newEvent = {};
  var type = e.type,
      timeStamp = e.timeStamp,
      target = e.target,
      currentTarget = e.currentTarget,
      touches = e.touches,
      changedTouches = e.changedTouches,
      _e$detail = e.detail,
      detail = _e$detail === undefined ? {} : _e$detail;


  newEvent._originEvent = e;

  if (type) {
    type = type.replace(/^weex\$/, '');
    type = type === 'click' ? 'tap' : type;
    newEvent.type = type;
  }

  if (timeStamp) {
    newEvent.timeStamp = parseInt(timeStamp);
  }

  if (target) {
    newEvent.target = {
      id: target.id,
      // offsetLeft: target.offsetLeft,
      // offsetTop: target.offsetTop,
      dataset: target.dataset
    };
  }

  if (currentTarget) {
    newEvent.currentTarget = {
      id: currentTarget.id,
      // offsetLeft: currentTarget.offsetLeft,
      // offsetTop: currentTarget.offsetTop,
      dataset: currentTarget.dataset
    };
  }

  if (touches) {
    newEvent.touches = [];
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];
      var ret = {};
      ret.identifier = touch.identifier;
      ret.pageX = parseInt(touch.pageX);
      ret.pageY = parseInt(touch.pageY);
      ret.clientX = parseInt(touch.clientX);
      ret.clientY = parseInt(touch.clientY);
      newEvent.touches.push(ret);
    }
  }

  if (changedTouches) {
    newEvent.changedTouches = [];
    for (var _i = 0; _i < changedTouches.length; _i++) {
      var _touch = changedTouches[_i];
      var _ret = {};
      _ret.identifier = _touch.identifier;
      _ret.pageX = parseInt(_touch.pageX);
      _ret.pageY = parseInt(_touch.pageY);
      _ret.clientX = parseInt(_touch.clientX);
      _ret.clientY = parseInt(_touch.clientY);
      newEvent.changedTouches.push(_ret);
    }
  }

  if (_.isType(detail, 'Object')) {
    newEvent.detail = detail;
  } else {
    newEvent.detail = {};
  }

  if (target) {
    newEvent.detail.value = target.value;
  }

  //特殊事件处理
  if (type === 'loadmore') {
    newEvent.detail.direction = 'bottom';
  }

  if (type === 'scroll') {
    newEvent.detail = (0, _extends3.default)({}, newEvent.detail, {
      scrollHeight: e.contentSize ? e.contentSize.height : 0,
      scrollWidth: e.contentSize ? e.contentSize.width : 0,
      scrollLeft: e.contentOffset ? Math.abs(e.contentOffset.x) : 0,
      scrollTop: e.contentOffset ? Math.abs(e.contentOffset.y) : 0, // 坐标轴变换
      deltaX: 0,
      deltaY: 0
    });
  }

  return newEvent;
}

/***/ }),

/***/ "p06J":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("OzFA");
var global = __webpack_require__("tRKg");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("YYvI") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "p4KU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__("z4ZC");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'navigateTo',
    value: function navigateTo(opt) {
      var path = opt.path,
          query = opt.query;

      query = (0, _utils.queryParse)(query);

      var runtime = __webpack_require__("1HDH").default;

      var _runtime$getInfo = runtime.getInfo(),
          router = _runtime$getInfo.router,
          routerConfig = _runtime$getInfo.routerConfig;

      if (path && router) {
        var flag = false;

        var routes = routerConfig.routes;
        for (var i = 0; i < routes.length; i++) {
          var route = routes[i];
          if (path === route.path) {
            flag = true;
            router.push({
              path: route.url,
              query: query
            });
            break;
          }
        }
        if (!flag) {
          router.push({
            path: router.options.routes[0].path,
            query: query
          });
        }
      } else {
        router.push({
          path: router.options.routes[0].path,
          query: query
        });
      }
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "p5G8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p7Ns":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("hTSS")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "pI9x":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "pKUO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _types$INDEX_DESC_NAM;

var _getterTypes = __webpack_require__("U79J");

var types = _interopRequireWildcard(_getterTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_types$INDEX_DESC_NAM = {}, (0, _defineProperty3.default)(_types$INDEX_DESC_NAM, types.INDEX_DESC_NAME, function (state, getters) {
  return '\u6211\u53EB\uFF1A' + state.index.name + '\u3002';
}), (0, _defineProperty3.default)(_types$INDEX_DESC_NAM, types.INDEX_DESC_AGE, function (state, getters) {
  return '\u4ECA\u5E74\uFF1A' + state.index.age + ' \u5C81\u3002';
}), _types$INDEX_DESC_NAM);

/***/ }),

/***/ "pcby":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/network_c9413b1.png";

/***/ }),

/***/ "piik":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__ = __webpack_require__("7Vrx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f99648_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__ = __webpack_require__("qS74");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("NgDF")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33f99648"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f99648_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f99648_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-api/src/interfaces/alert/components/c-popup/c-popup.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33f99648", Component.options)
  } else {
    hotAPI.reload("data-v-33f99648", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "puJh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateTo = navigateTo;
exports.redirectTo = redirectTo;
exports.navigateBack = navigateBack;
function navigateTo(opt) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo = runtime.getInfo(),
      router = _runtime$getInfo.router,
      routerConfig = _runtime$getInfo.routerConfig;

  var path = opt.path,
      query = opt.query;


  if (path && router) {
    var flag = false;

    var routes = routerConfig.routes;
    for (var i = 0; i < routes.length; i++) {
      var route = routes[i];
      if (path === route.path) {
        flag = true;
        router.push({
          path: route.url,
          query: query
        });
        break;
      }
    }
    if (!flag) {
      router.push({
        path: router.options.routes[0].path,
        query: query
      });
    }
  } else {
    router.push({
      path: router.options.routes[0].path,
      query: query
    });
  }
}

function redirectTo(opt) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo2 = runtime.getInfo(),
      router = _runtime$getInfo2.router;

  var path = opt.path,
      query = opt.query;


  router.replace({
    path: path,
    query: query
  });
}

function navigateBack(backPageNum) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo3 = runtime.getInfo(),
      router = _runtime$getInfo3.router;

  router.go(backPageNum);
}

/***/ }),

/***/ "qRkk":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _scrollable = __webpack_require__("Yw/I");

var _scrollable2 = _interopRequireDefault(_scrollable);

var _utils = __webpack_require__("k5//");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var List = function List() {
  (0, _classCallCheck3.default)(this, List);
  this.props = {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    toElement: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    heightPx: function heightPx() {
      if (this.height >= 0) {
        return (0, _utils.cpx2px)(this.height);
      }
      return -1;
    }
  };
  this.methods = {
    scrollEvent: function scrollEvent(e) {
      this.$cmlEmit('onscroll', e);
      this.$cmlEmit('customscroll', e);
    },
    scrolltobottomEvent: function scrolltobottomEvent(e) {
      this.$cmlEmit('scrolltobottom', e);
    }
  };
};

exports.default = new List();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { scrollable: _scrollable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "qS74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        {
          staticClass: "c-popup  cml-base cml-view",
          style: _vm._cmlStyleProxy(_vm.containerStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [
          _c("div", {
            class: _vm.maskClass + "  cml-base cml-view",
            attrs: { "data-evt-click": "" },
            on: {
              click: _vm.$stopOuterA,
              cml$tap: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "closeevent")
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "c-popup-content  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.contentStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  $event.stopPropagation()
                  _vm._cmlEventProxy($event, "contentTap")
                }
              }
            },
            [_vm._t("default", null, {})],
            2
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33f99648", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "qThd":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

//根据配置生成路由
var options = {
  mode: "hash",
  routes: [{
    path: "/",
    name: "首页",
    component: __webpack_require__("w8mr").default
  }, {
    path: "/pages/example/list/list",
    name: "list",
    component: __webpack_require__("UH9w").default
  }, {
    path: "/pages/example/scroller/scroller",
    name: "scroller",
    component: __webpack_require__("5uRN").default
  }, {
    path: "/pages/example/view/view",
    name: "view",
    component: __webpack_require__("8xvM").default
  }, {
    path: "/pages/example/text/text",
    name: "text",
    component: __webpack_require__("7FPV").default
  }, {
    path: "/pages/example/button/button",
    name: "button",
    component: __webpack_require__("Ft3I").default
  }, {
    path: "/pages/example/input/input",
    name: "input",
    component: __webpack_require__("hjGn").default
  }, {
    path: "/pages/example/textarea/textarea",
    name: "textarea",
    component: __webpack_require__("+mgi").default
  }, {
    path: "/pages/example/image/image",
    name: "image",
    component: __webpack_require__("owDE").default
  }, {
    path: "/pages/example/video/video",
    name: "video",
    component: __webpack_require__("5oHi").default
  }, {
    path: "/pages/example/richtext/richtext",
    name: "richtext",
    component: __webpack_require__("S+Cp").default
  }, {
    path: "/pages/example/switch/switch",
    name: "switch",
    component: __webpack_require__("Lbn0").default
  }, {
    path: "/pages/example/radio/radio",
    name: "radio",
    component: __webpack_require__("iQx6").default
  }, {
    path: "/pages/example/checkbox/checkbox",
    name: "checkbox",
    component: __webpack_require__("F9zj").default
  }, {
    path: "/pages/example/carousel/carousel",
    name: "carousel",
    component: __webpack_require__("qjzm").default
  }, {
    path: "/pages/example/row/row",
    name: "row",
    component: __webpack_require__("r+6O").default
  }, {
    path: "/pages/example/layout/layout",
    name: "layout",
    component: __webpack_require__("elZ0").default
  }]
};

exports.default = options;

/***/ }),

/***/ "qcjd":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "qjzm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml__ = __webpack_require__("lQbU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ceb34b2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml__ = __webpack_require__("GJ/K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("63jM")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ceb34b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ceb34b2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ceb34b2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_carousel_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/carousel/carousel.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ceb34b2", Component.options)
  } else {
    hotAPI.reload("data-v-0ceb34b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qnJe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "r+6O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__ = __webpack_require__("bbqi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ba76f68_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__ = __webpack_require__("jlt8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("5viq")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ba76f68"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ba76f68_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ba76f68_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_row_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/example/row/row.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ba76f68", Component.options)
  } else {
    hotAPI.reload("data-v-1ba76f68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "r0rv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scrollable",
    {
      staticClass: " cml-base cml-scrollable",
      attrs: {
        cstyle: _vm.cstyle,
        bottomOffset: _vm.bottomOffset,
        toElement: _vm.toElement,
        bounce: _vm.bounce,
        height: _vm.heightPx,
        template: "list",
        "data-evt-onscroll": "",
        "data-evt-scrolltobottom": ""
      },
      on: { onscroll: _vm.scrollEvent, scrolltobottom: _vm.scrolltobottomEvent }
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b7a9c9e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "r3pY":
/***/ (function(module, exports, __webpack_require__) {

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 提供编译时样式处理的方法 */
// 运行时不能使用postcss 体积过大

var utils = __webpack_require__("Wh0r");
module.exports = function (content, options) {
  if (typeof options === 'string') {
    options = JSON.parse(utils.singlequot2doublequot(options));
  }
  if (typeof content !== 'string') {
    throw new Error('expected the value of style is string but get ' + (typeof content === 'undefined' ? 'undefined' : (0, _typeof3.default)(content)));
  }
  content = utils.disappearCssComment(content);
  content = utils.uniqueStyle(content);
  return parse(content);
  function parse(style) {
    return style.split(';').filter(function (declaration) {
      return !!declaration.trim();
    }).map(function (declaration) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(declaration),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      return {
        property: key,
        value: value
      };
    }).map(function (declaration) {
      declaration.value = handle(declaration.value, options);
      return declaration.property + ':' + declaration.value;
    }).join(';');
  }

  function handle(content, options) {
    var pxRegex = /(\d*\.?\d+)cpx/gi;
    var unitPrecision = 5;
    function toFixed(number, precision) {
      var multiplier = Math.pow(10, precision + 1);
      var wholeNumber = Math.floor(number * multiplier);
      return Math.round(wholeNumber / 10) * 10 / multiplier;
    }
    if (options.rem === true) {
      var base = options.remOptions.rootValue.cpx;
      return content.replace(pxRegex, function (m, $1) {
        return toFixed(parseFloat($1, 10) / base, unitPrecision) + 'rem';
      });
    } else {
      var scale = options.scale;
      return content.replace(pxRegex, function (m, $1) {
        return toFixed(parseFloat($1, 10) * scale, unitPrecision) + 'px';
      });
    }
  }
};

/***/ }),

/***/ "rDjA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rIAy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cml-switch  cml-base cml-view", attrs: {} },
    [
      _c(
        "div",
        {
          staticClass: "cml-switch-wrap  cml-base cml-view",
          attrs: { "data-evt-click": "" },
          on: {
            click: _vm.$stopOuterA,
            cml$tap: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "changeSwitch")
            }
          }
        },
        [
          _c(
            "div",
            {
              class: _vm.switchClass + "  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.switchStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: {}
            },
            [
              _c("div", {
                staticClass: "inner-icon  cml-base cml-view",
                style: _vm._cmlStyleProxy(_vm.innerStyle, {
                  rem: true,
                  scale: 0.5,
                  remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                  autoprefixOptions: {
                    browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                    grid: false
                  }
                }),
                attrs: {}
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "cml-switch-label  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.label))]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-88506e9e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "rr+H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "video" } },
    [
      _c(
        "div",
        { staticClass: "container  cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "video" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
            _vm._v("视频state: ")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "info  cml-base cml-text", attrs: {} }, [
            _vm._v(_vm._s(_vm.state))
          ]),
          _vm._v(" "),
          _c("c-video", {
            staticClass: "video  cml-base cml-c-video",
            staticStyle: {
              display: "flex",
              "flex-direction": "column",
              "align-items": "center"
            },
            attrs: {
              src: _vm.videoSrc,
              autoplay: true,
              controls: true,
              "data-evt-start": "",
              "data-evt-pause": "",
              "data-evt-finish": "",
              "data-evt-fail": ""
            },
            on: {
              start: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "onstart")
              },
              pause: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "onpause")
              },
              finish: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "onfinish")
              },
              fail: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "onfail")
              }
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-65bafeac", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "rtny":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "layout演示" } },
    [
      _c(
        "c-scroller",
        { staticClass: " cml-base cml-c-scroller", attrs: { height: -1 } },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: _vm.headerTitle, desc: _vm.headerDesc }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
            _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
              _vm._v("以下是demo")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-wrap  cml-base cml-view", attrs: {} },
            [
              _c(
                "c-container",
                {
                  staticClass: " cml-base cml-c-container",
                  attrs: { direction: "column" }
                },
                [
                  _c(
                    "c-head",
                    { staticClass: " cml-base cml-c-head", attrs: {} },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("header")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-main",
                    {
                      staticClass: " cml-base cml-c-main",
                      attrs: { "main-style": _vm.mainStyle }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("main")]
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-wrap  cml-base cml-view", attrs: {} },
            [
              _c(
                "c-container",
                {
                  staticClass: " cml-base cml-c-container",
                  attrs: { direction: "column" }
                },
                [
                  _c(
                    "c-head",
                    { staticClass: " cml-base cml-c-head", attrs: {} },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("header")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-main",
                    {
                      staticClass: " cml-base cml-c-main",
                      attrs: { "main-style": _vm.mainStyle }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("main")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-foot",
                    { staticClass: " cml-base cml-c-foot", attrs: {} },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("footer")]
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-wrap  cml-base cml-view", attrs: {} },
            [
              _c(
                "c-container",
                {
                  staticClass: " cml-base cml-c-container",
                  attrs: { direction: "row" }
                },
                [
                  _c(
                    "c-aside",
                    {
                      staticClass: " cml-base cml-c-aside",
                      attrs: { "aside-style": _vm.asideStyle }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("aside")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-main",
                    {
                      staticClass: " cml-base cml-c-main",
                      staticStyle: { flex: "1" },
                      attrs: { "main-style": _vm.mainStyle }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("main")]
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-wrap  cml-base cml-view", attrs: {} },
            [
              _c(
                "c-container",
                {
                  staticClass: " cml-base cml-c-container",
                  attrs: { direction: "column" }
                },
                [
                  _c(
                    "c-head",
                    { staticClass: " cml-base cml-c-head", attrs: {} },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("header")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-container",
                    {
                      staticClass: " cml-base cml-c-container",
                      staticStyle: { flex: "1" },
                      attrs: { direction: "row" }
                    },
                    [
                      _c(
                        "c-aside",
                        {
                          staticClass: " cml-base cml-c-aside",
                          attrs: { "aside-style": _vm.asideStyle }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("aside")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "c-main",
                        {
                          staticClass: " cml-base cml-c-main",
                          staticStyle: { flex: "1" },
                          attrs: { "main-style": _vm.mainStyle }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("main")]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-wrap  cml-base cml-view", attrs: {} },
            [
              _c(
                "c-container",
                {
                  staticClass: " cml-base cml-c-container",
                  attrs: { direction: "column" }
                },
                [
                  _c(
                    "c-head",
                    { staticClass: " cml-base cml-c-head", attrs: {} },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("header")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-container",
                    {
                      staticClass: " cml-base cml-c-container",
                      staticStyle: { flex: "1" },
                      attrs: { direction: "row" }
                    },
                    [
                      _c(
                        "c-aside",
                        {
                          staticClass: " cml-base cml-c-aside",
                          attrs: { "aside-style": "height:380cpx" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("aside")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "c-container",
                        {
                          staticClass: " cml-base cml-c-container",
                          staticStyle: { flex: "1" },
                          attrs: { direction: "column" }
                        },
                        [
                          _c(
                            "c-main",
                            {
                              staticClass: " cml-base cml-c-main",
                              staticStyle: { flex: "1" },
                              attrs: { "main-style": _vm.mainStyle }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "container-item  cml-base cml-view",
                                  attrs: {}
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: " cml-base cml-text",
                                      attrs: {}
                                    },
                                    [_vm._v("main")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "c-foot",
                            { staticClass: " cml-base cml-c-foot", attrs: {} },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "container-item  cml-base cml-view",
                                  attrs: {}
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: " cml-base cml-text",
                                      attrs: {}
                                    },
                                    [_vm._v("foot")]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-wrap  cml-base cml-view", attrs: {} },
            [
              _c(
                "c-container",
                {
                  staticClass: " cml-base cml-c-container",
                  attrs: { direction: "row" }
                },
                [
                  _c(
                    "c-aside",
                    {
                      staticClass: " cml-base cml-c-aside",
                      attrs: { "aside-style": "height:380cpx" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("aside")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-container",
                    {
                      staticClass: " cml-base cml-c-container",
                      staticStyle: { flex: "1" },
                      attrs: { direction: "column" }
                    },
                    [
                      _c(
                        "c-head",
                        { staticClass: " cml-base cml-c-head", attrs: {} },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("header")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "c-main",
                        {
                          staticClass: " cml-base cml-c-main",
                          staticStyle: { flex: "1" },
                          attrs: { "main-style": _vm.mainStyle }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("main")]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-wrap  cml-base cml-view", attrs: {} },
            [
              _c(
                "c-container",
                {
                  staticClass: " cml-base cml-c-container",
                  attrs: { direction: "row" }
                },
                [
                  _c(
                    "c-aside",
                    {
                      staticClass: " cml-base cml-c-aside",
                      attrs: { "aside-style": "height:460cpx" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "container-item  cml-base cml-view",
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("aside")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "c-container",
                    {
                      staticClass: " cml-base cml-c-container",
                      staticStyle: { flex: "1" },
                      attrs: { direction: "column" }
                    },
                    [
                      _c(
                        "c-head",
                        { staticClass: " cml-base cml-c-head", attrs: {} },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("header")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "c-main",
                        {
                          staticClass: " cml-base cml-c-main",
                          staticStyle: { flex: "1" },
                          attrs: { "main-style": _vm.mainStyle }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("main")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "c-foot",
                        { staticClass: " cml-base cml-c-foot", attrs: {} },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "container-item  cml-base cml-view",
                              attrs: {}
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: " cml-base cml-text",
                                  attrs: {}
                                },
                                [_vm._v("footer")]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-232494b2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "ryNh":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("JAUT");
var toObject = __webpack_require__("5FFm");
var IE_PROTO = __webpack_require__("NTY1")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "s0zd":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseImage = chooseImage;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'chooseImage';

function chooseImage(param, cb) {
  /**
   * type: camera/album/choice
   * cut: true/false
   * quality: 默认100 [0-100]
   * width: 0
   * height: 0
   */
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    if (res.errno == 0) {
      var base64 = 'data:image/' + res.data.type + ';base64,' + res.data.image;
      res.data.base64 = base64;
    } else {
      res.data = {
        type: '',
        image: '',
        base64: ''
      };
    }

    /**
    * errno: 0成功，1失败，2取消，3没权限
    * msg
    * data: {
    *   type,
    *   image,
    *   base64
    * }
    */
    cb(res);
  });
}

chooseImage.prototype.moduleName = moduleName;
chooseImage.prototype.methodName = methodName;

/***/ }),

/***/ "sSlW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-page",
    { staticClass: " cml-base cml-c-page", attrs: { title: "switch演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "switch" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-switch", {
            staticClass: " cml-base cml-c-switch",
            attrs: {
              checked: _vm.switchValue1,
              label: "Switch",
              "data-evt-change": ""
            },
            on: {
              change: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "switchChange1")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("switch value: " + _vm._s(_vm.switchValue1))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-switch", {
            staticClass: " cml-base cml-c-switch",
            attrs: {
              checked: _vm.switchValue2,
              label: "Switch",
              "data-evt-change": ""
            },
            on: {
              change: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "switchChange2")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("switch value: " + _vm._s(_vm.switchValue2))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-switch", {
            staticClass: " cml-base cml-c-switch",
            attrs: {
              checked: _vm.switchValue3,
              label: "Disabled Switch",
              disabled: true
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("switch value: " + _vm._s(_vm.switchValue3))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-switch", {
            staticClass: " cml-base cml-c-switch",
            attrs: {
              checked: _vm.switchValue4,
              label: "Disabled Switch",
              disabled: true
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("switch value: " + _vm._s(_vm.switchValue4))
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b567572", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "suar":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("dkPk");
var gOPN = __webpack_require__("7WrD").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "sufT":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueRouter = __webpack_require__("5oF4");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routerOptions = __webpack_require__("qThd");

var _routerOptions2 = _interopRequireDefault(_routerOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);

// 根据配置生成的路由options

/*global Vue*/


_routerOptions2.default.mode =  true ? _routerOptions2.default.mode : 'abstract';

var Router = new _vueRouter2.default(_routerOptions2.default);
exports.default = Router;

/***/ }),

/***/ "t9mz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("YKc4");
var gOPS = __webpack_require__("SCZj");
var pIE = __webpack_require__("PGoE");
var toObject = __webpack_require__("5FFm");
var IObject = __webpack_require__("R2s1");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("lt2H")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "tRKg":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "thLZ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

var Video = function Video() {
  (0, _classCallCheck3.default)(this, Video);
  this.props = {
    controls: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    }
  };
  this.methods = {
    onstart: function onstart(e) {
      this.$cmlEmit('start');
    },
    onpause: function onpause(e) {
      this.$cmlEmit('pause');
    },
    onfinish: function onfinish(e) {
      this.$cmlEmit('finish');
    },
    onfail: function onfail(e) {
      this.$cmlEmit('fail');
    }
  };
};

exports.default = new Video();

/***/ }),

/***/ "ttS0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.listen = listen;

var _common = __webpack_require__("oWqj");

/**
 * 注册监听通道
 */
function init() {
  window.cmlBridge = {};
  window.cmlBridge.channel = function (protocol) {
    (0, _common.dispatchProtocol)(protocol);
  };
}

/**
 * 注册主动监听
 * @param {String} module 
 * @param {String} method 
 * @param {Function} callback 
 */
function listen(module, method, callback) {
  _common.registerListen.apply(undefined, arguments);
}

/***/ }),

/***/ "uL5D":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _inputable = __webpack_require__("L32b");

var _inputable2 = _interopRequireDefault(_inputable);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
event: cinput cblur cfocus cconfirm
*/
var Textarea =
// mounted() {
//   this.changeFocus(this.focus);
//   // textarea无法默认赋值
//   this.$refs['c-textarea'].value = this.value;
// }
function Textarea() {
  (0, _classCallCheck3.default)(this, Textarea);
  this.props = {
    rows: {
      type: Number,
      default: 2
    },
    value: {
      type: String,
      default: ''
    },
    //placerholder
    placeholder: {
      type: String,
      default: ''
    },
    //是否禁用输入
    disabled: {
      type: Boolean,
      default: false
    },
    //控制是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    //最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    //右下角返回键类型
    returnKeyType: { //枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#bebebe'
    },
    cStyle: {
      type: String,
      default: ''
    }
  };
  this.data = {
    defaultStyle: "font-size: 18px; height: 75px; line-height: 25px; padding-left:10px; padding-right:10px; color: #000; text-align: left; background-color: #fff; border: 1px solid #999; border-radius: 4px;"
    // watch = {
    //   value: function (val) {
    //     this.$refs['c-textarea'].value = val
    //   }
    // }
  };
  this.computed = {
    computedStyle: function computedStyle() {
      return this.defaultStyle + this.cStyle;
    }
  };
  this.methods = {
    inputEvent: function inputEvent(e) {
      this.$cmlEmit('input', {
        value: e.target.value || ''
      });
      this.$cmlEmit('inputevent', {
        value: e.target.value || ''
      });
    },
    blurEvent: function blurEvent(e) {
      window.scroll(0, 0); // 键盘收起留白的bug
      this.$cmlEmit('blur');
      this.$cmlEmit('blurevent');
    },
    focusEvent: function focusEvent(e) {
      this.$cmlEmit('focus');
      this.$cmlEmit('focusevent');
    },

    // support enter key event
    keyupEvent: function keyupEvent(e) {
      this.$cmlEmit('confirm');
      this.$cmlEmit('confirmevent');
    }
  };
}; //
//
//
//
//

exports.default = new Textarea();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { inputable: _inputable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "ucRq":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "uctL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cml-checkbox  cml-base cml-view", attrs: {} },
    [
      _c(
        "div",
        {
          staticClass: "cml-checkbox-wrap  cml-base cml-view",
          attrs: { "data-evt-click": "" },
          on: {
            click: _vm.$stopOuterA,
            cml$tap: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "changeCheck")
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "cml-checkbox-check  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.checkStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: {}
            },
            [
              _c(
                "div",
                { class: _vm.checkClass + "  cml-base cml-view", attrs: {} },
                [
                  _c("img", {
                    staticClass: "inner-icon  cml-base cml-image",
                    attrs: { src: _vm.checkImg }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "cml-checkbox-label  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.label))]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-791284eb", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "uj1z":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("EJ14");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "ukYY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _mutations = __webpack_require__("9xHU");

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _mutations2.default);

/***/ }),

/***/ "v56Z":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = initSocket;

var _index = __webpack_require__("LOYP");

var moduleName = 'webSocket';
var methodName = 'WebSocket';

function initSocket(_ref) {
  var url = _ref.url;

  WebSocket.WebSocket(url);
  return WebSocket;
}

initSocket.prototype.moduleName = moduleName;
initSocket.prototype.methodName = methodName;

var WebSocket = {
  WebSocket: function WebSocket(url) {
    this._callAdapter(methodName, { url: url });
  },
  onopen: function onopen(cb) {
    this._listenAdapter('onopen', cb);
  },
  onmessage: function onmessage(cb) {
    this._listenAdapter('onmessage', cb);
  },
  onerror: function onerror(cb) {
    this._listenAdapter('onerror', cb);
  },
  onclose: function onclose(cb) {
    this._listenAdapter('onclose', cb);
  },
  send: function send() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._callAdapter('send', data);
  },
  close: function close() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { code: 0, reason: 'close' };

    /**
     * code: 0
     * reason: string
     */
    this._callAdapter('close', param);
  },
  _callAdapter: function _callAdapter(key, param) {
    (0, _index.callNative)(moduleName, key, param, function () {});
  },
  _listenAdapter: function _listenAdapter(key, cb) {
    (0, _index.listenNative)(moduleName, key, cb);
  }
};

/***/ }),

/***/ "v5cN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scrollable",
    {
      staticClass: " cml-base cml-scrollable",
      attrs: {
        cstyle: _vm.cstyle,
        bottomOffset: _vm.bottomOffset,
        scrollDirection: _vm.scrollDirection,
        bounce: _vm.bounce,
        height: _vm.heightPx,
        width: _vm.widthPx,
        template: "scroller",
        scrollTop: _vm.scrollTopPx,
        scrollLeft: _vm.scrollLeftPx,
        "data-evt-onscroll": "",
        "data-evt-scrolltobottom": ""
      },
      on: { onscroll: _vm.scrollEvent, scrolltobottom: _vm.scrolltobottomEvent }
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-93fbae9e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "v8KS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__ = __webpack_require__("f1jY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__ = __webpack_require__("nHQd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("2Jju")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d879fa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/app/app.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d879fa6", Component.options)
  } else {
    hotAPI.reload("data-v-5d879fa6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vEog":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("E+yl");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "vj2q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml__ = __webpack_require__("VbmE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_88506e9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml__ = __webpack_require__("rIAy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("RvsW")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-88506e9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_88506e9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_88506e9e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_switch_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/switch/switch.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88506e9e", Component.options)
  } else {
    hotAPI.reload("data-v-88506e9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vn5Q":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var core = __webpack_require__("OzFA");
var LIBRARY = __webpack_require__("YYvI");
var wksExt = __webpack_require__("ShPv");
var defineProperty = __webpack_require__("isOg").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "vpr6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__ = __webpack_require__("o0T1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e72ff30_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__ = __webpack_require__("Yymu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("0OI6")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e72ff30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e72ff30_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e72ff30_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-api/src/interfaces/showToast/components/c-toast/c-toast.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e72ff30", Component.options)
  } else {
    hotAPI.reload("data-v-4e72ff30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "w+JB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "w1p+":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "w3K7":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ucRq")('meta');
var isObject = __webpack_require__("OuXD");
var has = __webpack_require__("JAUT");
var setDesc = __webpack_require__("isOg").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("lt2H")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "w7d5":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("OuXD");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "w8mr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__ = __webpack_require__("1NSh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__ = __webpack_require__("O5Hj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("x0dB")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bad7fbd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bad7fbd", Component.options)
  } else {
    hotAPI.reload("data-v-1bad7fbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wUk3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("OuXD");
var document = __webpack_require__("tRKg").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "wbAX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__("h2Ex");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIFECYCLE = {
  web: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  },
  weex: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  },
  wx: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
    },
    component: {
      hooks: ['created', 'attached', 'ready', 'detached'],
      hooksMap: {
        'beforeCreate': 'created',
        'created': 'created',
        'beforeMount': 'attached',
        'mounted': 'ready',
        'beforeDestroy': 'detached',
        'destroyed': 'detached'
      },
      whitelist: ['moved']
    }
  },
  alipay: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onTitleClick']
    },
    component: {
      hooks: ['didMount', 'didUnmount'],
      hooksMap: {
        'beforeCreate': 'didMount',
        'created': 'didMount',
        'beforeMount': 'didMount',
        'mounted': 'didMount',
        'beforeDestroy': 'didUnmount',
        'destroyed': 'didUnmount'
      },
      whitelist: []
    }
  },
  baidu: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onForceReLaunch', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
    },
    component: {
      hooks: ['created', 'attached', 'ready', 'detached'],
      hooksMap: {
        'beforeCreate': 'created',
        'created': 'created',
        'beforeMount': 'created',
        'mounted': 'ready',
        'beforeDestroy': 'detached',
        'destroyed': 'detached'
      },
      whitelist: []
    }
  },
  cml: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  }
};

exports.default = new _config2.default(LIFECYCLE);

/***/ }),

/***/ "x0dB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xCCz":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var core = __webpack_require__("OzFA");
var ctx = __webpack_require__("49u2");
var hide = __webpack_require__("SMww");
var has = __webpack_require__("JAUT");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "xFYO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.getSlideClass + "  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.transform, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {
        "data-evt-mousedown": "",
        "data-evt-mouseup": "",
        "data-evt-webkit-transition-end": "",
        "data-evt-transitionend": ""
      },
      on: {
        mousedown: function($event) {
          _vm._cmlEventProxy($event, "touchStart")
        },
        mouseup: function($event) {
          _vm._cmlEventProxy($event, "touchEnd")
        },
        "webkit-transition-end": function($event) {
          _vm._cmlEventProxy($event, "onTransitionEnd")
        },
        transitionend: function($event) {
          _vm._cmlEventProxy($event, "onTransitionEnd")
        }
      }
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4ec18533", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "xT8E":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("7s0b"), __esModule: true };

/***/ }),

/***/ "xfCQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__("cL84");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chameleon = {
  config: {
    bundleUrl: location.href
  },

  utils: _utils2.default,
  mixins: {},
  _components: {
    button: 1,
    checkbox: 1,
    input: 1,
    list: 1,
    page: 1,
    radio: 1,
    richtext: 1,
    scroller: 1,
    switch: 1,
    textarea: 1,
    video: 1
  },
  _meta: {
    mounted: {},
    updated: {},
    destroyed: {},
    requiredModules: {},
    apiCalled: {},
    perf: {}
  }

};

exports.default = chameleon;

/***/ }),

/***/ "xjA6":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _const = __webpack_require__("oGul");

var _common = __webpack_require__("oWqj");

/**
 * js调用客户端
 * @param {String} action 行为方式
 * @param {String} module 模块名
 * @param {String} method 方法名
 * @param {Array}  args   参数数组
 */
function call(action, module, method, args, callback) {
  var module = module || _const.moduleDefault;
  var callbackId = (0, _common.registerCallback)(module, method, callback);
  var url = (0, _common.serializeProtocol)({
    action: action,
    module: module,
    method: method,
    args: args,
    callbackId: callbackId
  });

  schemeJump(url);
}

function schemeJump(url) {
  var iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.display = 'none';
  document.documentElement.appendChild(iframe);
  setTimeout(function () {
    document.documentElement.removeChild(iframe);
  }, 0);
}

/***/ }),

/***/ "xkVx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/media_1c79816.png";

/***/ }),

/***/ "xp5m":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTitle;

var _index = __webpack_require__("i0PX");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _index2.default.setTitle(title);
}

/***/ }),

/***/ "xrry":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("yfK2") && !__webpack_require__("lt2H")(function () {
  return Object.defineProperty(__webpack_require__("wUk3")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "y0+v":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _pageWeb = __webpack_require__("y6/3");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _header = __webpack_require__("FD/B");

var _header2 = _interopRequireDefault(_header);

var _switchWeb = __webpack_require__("vj2q");

var _switchWeb2 = _interopRequireDefault(_switchWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch() {
  (0, _classCallCheck3.default)(this, Switch);
  this.data = {
    switchValue1: false,
    switchValue2: true,
    switchValue3: false,
    switchValue4: true
  };
  this.computed = {};
  this.methods = {
    switchChange1: function switchChange1(e) {
      this.switchValue1 = e.detail.value;
    },
    switchChange2: function switchChange2(e) {
      this.switchValue2 = e.detail.value;
    }
  };
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new Switch();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPage: _pageWeb2.default, cHeader: _header2.default, cSwitch: _switchWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "y6/3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__ = __webpack_require__("gj6D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a40a051_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__ = __webpack_require__("JXiz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("eYwm")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a40a051"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a40a051_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a40a051_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/page/page.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a40a051", Component.options)
  } else {
    hotAPI.reload("data-v-0a40a051", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "yS3Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/succ_1ecca56.png";

/***/ }),

/***/ "yVTO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _proto = __webpack_require__("Qr3T");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseCtor = function () {
  function BaseCtor(options) {
    (0, _classCallCheck3.default)(this, BaseCtor);

    // 拷贝原型链上属性
    (0, _proto.copyProtoProperty)(options);

    this.options = (0, _assign2.default)({}, options);
    this.originalOptions = options;
  }

  (0, _createClass3.default)(BaseCtor, [{
    key: 'initOptTransformer',
    value: function initOptTransformer(OptTransformer, config) {
      var optTransformer = new OptTransformer((0, _extends3.default)({
        options: this.options
      }, config));
      this.options = optTransformer.getOptions();
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);
  return BaseCtor;
}();

exports.default = BaseCtor;

/***/ }),

/***/ "ycCb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml__ = __webpack_require__("jlOJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5fb3f676_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml__ = __webpack_require__("WcoU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("9Vv9")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5fb3f676"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5fb3f676_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5fb3f676_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_main_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/layout/main/main.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fb3f676", Component.options)
  } else {
    hotAPI.reload("data-v-5fb3f676", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "yfK2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("lt2H")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ykF7":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("YKc4");
var toIObject = __webpack_require__("dkPk");
var isEnum = __webpack_require__("PGoE").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "z4ZC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValue = undefined;

var _objectWithoutProperties2 = __webpack_require__("SRKA");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

exports.isFn = isFn;
exports.isStr = isStr;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromUrl = getQueryParamsFromUrl;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.getRefObj = getRefObj;
exports.compareVersion = compareVersion;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isNum(obj) {
  return typeof obj === 'number';
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryParse() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return (/^\/[^/]/.test(url)
  );
}

function addApiPrefix(url) {
  if (true) {
    return "https://api.chameleon.com" + url;
  }
  return url;
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    some = JSON.parse(some);
  }
  return some;
}

function getQueryParamsFromUrl(url) {
  var arr = url.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromUrl(url);
  var _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$wx_addr = queryObj.wx_addr,
      wx_addr = _queryObj$wx_addr === undefined ? '' : _queryObj$wx_addr,
      extraData = (0, _objectWithoutProperties3.default)(queryObj, ['weixin_appid', 'weixin_path', 'weixin_envVersion', 'weex_path', 'wx_addr']);


  var objTreated = {
    weex: wx_addr ? webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&wx_addr=' + wx_addr : null,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path,
      extraData: extraData,
      envVersion: weixin_envVersion
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

// 获取ref的通用对象
function getRefObj(ref) {
  var refObj = {
    webDom: '',
    id: '',
    weexRef: ''
  };
  if (false) {
    refObj.id = ref.id;
  } else if (false) {
    refObj.weexRef = ref;
  } else if (ref.$el) {
    refObj.webDom = ref.$el;
  } else {
    refObj.webDom = ref;
  }
  return refObj;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}

/**
 * 判断targetMap中的属性是否被checkMap的属性包含，不是则抛出错误
 * @param {Object || Array} checkMap 
 * @param {Object} targetMap 
 * @returns {Boolean}
 */
var checkValue = exports.checkValue = function checkValue(check, targetMap) {
  if (isObj(check) || isArray(check)) {
    var checkArray = isObj(check) ? (0, _keys2.default)(check) : check;
    (0, _keys2.default)(targetMap).forEach(function (key) {
      if (!checkArray.includes(key)) {
        throw Error(key + '\u503C\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u68C0\u67E5\uFF01');
      }
    });
  } else {
    // redLog('请传入数组或对象')
    return false;
  }
  return true;
};

/***/ }),

/***/ "z6Ez":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = open;

var _index = __webpack_require__("LOYP");

var _utils = __webpack_require__("iXbp");

var moduleName = 'cml';
var methodName = 'openPage';

function open(param) {
  /**
   * param: url, commonPatchParams, extraOptions
   */
  var url = param.url;
  var commonPatchParams = param.commonPatchParams;
  var closeCurrent = param.extraOptions && param.extraOptions.closeCurrent || false;
  url = (0, _utils.getUrlWithConnector)(url) + (0, _utils.queryStringify)(commonPatchParams);
  var openObj = (0, _utils.getOpenObj)(url);
  var urlOpen = openObj.weex ? openObj.weex : openObj.web;

  (0, _index.callNative)(moduleName, methodName, {
    url: urlOpen,
    closeCurrent: closeCurrent
  }, function () {});
}

open.prototype.moduleName = moduleName;
open.prototype.methodName = methodName;

/***/ }),

/***/ "z6xb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml__ = __webpack_require__("650f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cce2b87_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml__ = __webpack_require__("NQyb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("lHU2")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cce2b87"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cce2b87_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cce2b87_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_input_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/input/input.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cce2b87", Component.options)
  } else {
    hotAPI.reload("data-v-1cce2b87", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zALR":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _scrollable = __webpack_require__("Yw/I");

var _scrollable2 = _interopRequireDefault(_scrollable);

var _utils = __webpack_require__("k5//");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var Scroller = function Scroller() {
  (0, _classCallCheck3.default)(this, Scroller);
  this.props = {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    scrollDirection: {
      // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
      type: String,
      default: 'vertical'
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    heightPx: function heightPx() {
      if (this.height >= 0) {
        return (0, _utils.cpx2px)(this.height);
      }
      return -1;
    },
    widthPx: function widthPx() {
      if (this.width >= 0) {
        return (0, _utils.cpx2px)(this.width);
      }
      return -1;
    },
    scrollTopPx: function scrollTopPx() {
      return (0, _utils.cpx2px)(this.scrollTop);
    },
    scrollLeftPx: function scrollLeftPx() {
      return (0, _utils.cpx2px)(this.scrollLeft);
    }
  };
  this.methods = {
    scrollEvent: function scrollEvent(e) {
      this.$cmlEmit('onscroll', e);
      this.$cmlEmit('customscroll', e);
    },
    scrolltobottomEvent: function scrolltobottomEvent(e) {
      this.$cmlEmit('scrolltobottom', e);
    }
  };
};

exports.default = new Scroller();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { scrollable: _scrollable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "zDda":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var macrotask = __webpack_require__("eXs3").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("EJ14")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "zpTV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "c-aside  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.mergeAsideStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41d4fe08", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

},["RwSr"]);