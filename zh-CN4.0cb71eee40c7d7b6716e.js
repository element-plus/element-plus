(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[366],{

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(1204);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_index_vue_vue_type_style_index_0_id_3399543e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1192);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_index_vue_vue_type_style_index_0_id_3399543e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_index_vue_vue_type_style_index_0_id_3399543e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./website/assets/images/theme-index-blue.png
/* harmony default export */ var theme_index_blue = (__webpack_require__.p + "static/theme-index-blue.8fbb67d.png");
// CONCATENATED MODULE: ./website/assets/images/theme-index-red.png
/* harmony default export */ var theme_index_red = (__webpack_require__.p + "static/theme-index-red.5e43266.png");
// EXTERNAL MODULE: ./website/assets/images/bit.svg
var bit = __webpack_require__(296);

// EXTERNAL MODULE: ./website/assets/images/renren.png
var renren = __webpack_require__(297);

// CONCATENATED MODULE: ./website/assets/images/guide.png
/* harmony default export */ var guide = (__webpack_require__.p + "static/guide.e81dcf2.png");
// CONCATENATED MODULE: ./website/assets/images/component.png
/* harmony default export */ var component = (__webpack_require__.p + "static/component.7d1ca06.png");
// CONCATENATED MODULE: ./website/assets/images/resource.png
/* harmony default export */ var resource = (__webpack_require__.p + "static/resource.53cc5d2.png");
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/pages/index.vue?vue&type=template&id=3399543e&scoped=true









Object(vue_esm_browser_prod["pushScopeId"])("data-v-3399543e");

const _hoisted_1 = {
  class: "banner"
};
const _hoisted_2 = {
  class: "banner-desc"
};
const _hoisted_3 = {
  ref: "indexMainImg",
  class: "jumbotron"
};

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("img", {
  src: theme_index_blue,
  alt: ""
}, null, -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("img", {
  src: theme_index_red,
  alt: ""
}, null, -1);

const _hoisted_6 = [_hoisted_5];
const _hoisted_7 = {
  class: "sponsors"
};
const _hoisted_8 = {
  class: "sponsor",
  href: "https://bit.dev/?from=element-ui",
  target: "_blank"
};

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("img", {
  width: "45",
  src: bit["a" /* default */],
  alt: "bit"
}, null, -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("span", {
  class: "name"
}, "bit", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Share Code", -1);

const _hoisted_12 = {
  class: "sponsor renren",
  href: "https://www.renren.io/?from=element-ui",
  target: "_blank"
};

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("img", {
  width: "45",
  src: renren["a" /* default */],
  alt: "bit"
}, null, -1);

const _hoisted_14 = {
  class: "name"
};
const _hoisted_15 = {
  class: "cards"
};
const _hoisted_16 = {
  class: "container"
};
const _hoisted_17 = {
  class: "card"
};

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("img", {
  src: guide,
  alt: ""
}, null, -1);

const _hoisted_19 = {
  class: "card"
};

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("img", {
  src: component,
  alt: ""
}, null, -1);

const _hoisted_21 = {
  class: "card"
};

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("img", {
  src: resource,
  alt: ""
}, null, -1);

Object(vue_esm_browser_prod["popScopeId"])();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = Object(vue_esm_browser_prod["resolveComponent"])("router-link");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_1, [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_2, [Object(vue_esm_browser_prod["createElementVNode"])("h1", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[1]), 1), Object(vue_esm_browser_prod["createElementVNode"])("p", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[2]), 1)])]), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_3, [_hoisted_4, Object(vue_esm_browser_prod["createElementVNode"])("div", {
    class: "jumbotron-red",
    style: Object(vue_esm_browser_prod["normalizeStyle"])({
      height: $data.mainImgOffset + 'px'
    })
  }, _hoisted_6, 4)], 512), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_7, [Object(vue_esm_browser_prod["createElementVNode"])("a", _hoisted_8, [_hoisted_9, Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])($options.sponsorLabel) + " ", 1), _hoisted_10]), _hoisted_11])]), Object(vue_esm_browser_prod["createElementVNode"])("a", _hoisted_12, [_hoisted_13, Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])($options.sponsorLabel) + " ", 1), Object(vue_esm_browser_prod["createElementVNode"])("span", _hoisted_14, Object(vue_esm_browser_prod["toDisplayString"])($options.sponsorNameR), 1)]), Object(vue_esm_browser_prod["createElementVNode"])("p", null, Object(vue_esm_browser_prod["toDisplayString"])($options.sponsorIntroR), 1)])])]), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_15, [Object(vue_esm_browser_prod["createElementVNode"])("ul", _hoisted_16, [Object(vue_esm_browser_prod["createElementVNode"])("li", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_17, [_hoisted_18, Object(vue_esm_browser_prod["createElementVNode"])("h3", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[3]), 1), Object(vue_esm_browser_prod["createElementVNode"])("p", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[4]), 1), Object(vue_esm_browser_prod["createVNode"])(_component_router_link, {
    "active-class": "active",
    to: `/${$data.lang}/guide/design`,
    exact: ""
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[5]), 1)]),
    _: 1
  }, 8, ["to"])])]), Object(vue_esm_browser_prod["createElementVNode"])("li", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_19, [_hoisted_20, Object(vue_esm_browser_prod["createElementVNode"])("h3", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[6]), 1), Object(vue_esm_browser_prod["createElementVNode"])("p", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[7]), 1), Object(vue_esm_browser_prod["createVNode"])(_component_router_link, {
    "active-class": "active",
    to: `/${$data.lang}/component/layout`,
    exact: ""
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[5]), 1)]),
    _: 1
  }, 8, ["to"])])]), Object(vue_esm_browser_prod["createElementVNode"])("li", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_21, [_hoisted_22, Object(vue_esm_browser_prod["createElementVNode"])("h3", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[8]), 1), Object(vue_esm_browser_prod["createElementVNode"])("p", null, Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[9]), 1), Object(vue_esm_browser_prod["createVNode"])(_component_router_link, {
    "active-class": "active",
    to: `/${$data.lang}/resource`,
    exact: ""
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createTextVNode"])(Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[5]), 1)]),
    _: 1
  }, 8, ["to"])])])])])]);
}
// CONCATENATED MODULE: ./website/pages/index.vue?vue&type=template&id=3399543e&scoped=true

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(1186);

// EXTERNAL MODULE: ./node_modules/throttle-debounce/index.umd.js
var index_umd = __webpack_require__(1187);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/pages/index.vue?vue&type=script&lang=js


/* harmony default export */ var pagesvue_type_script_lang_js = ({
  data() {
    return {
      lang: this.$route.meta.lang,
      mainImgOffset: 0
    };
  },

  computed: {
    sponsorLabel() {
      return this.lang === 'zh-CN' ? '赞助商' : 'Sponsored by';
    },

    sponsorIntroR() {
      return this.lang === 'zh-CN' ? '企业级的快速开发平台' : 'Rapid development platform';
    },

    sponsorNameR() {
      return this.lang === 'zh-CN' ? '人人开源' : 'renren.io';
    },

    langConfig() {
      return page.filter(config => config.lang === this.lang)[0].pages.index;
    }

  },

  created() {
    this.throttledHandleScroll = Object(index_umd["throttle"])(10, true, index => {
      this.handleScroll(index);
    });
  },

  beforeUnmount() {
    const dom = document.querySelector('#app>.el-scrollbar>.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default');
    dom.removeEventListener('scroll', this.throttledHandleScroll);
  },

  mounted() {
    const dom = document.querySelector('#app>.el-scrollbar>.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default');
    dom.addEventListener('scroll', this.throttledHandleScroll);
  },

  methods: {
    handleScroll() {
      const ele = this.$refs.indexMainImg;
      const rect = ele.getBoundingClientRect();
      const eleHeight = ele.clientHeight + 55;
      let calHeight = (180 - rect.top) * 2;
      if (calHeight < 0) calHeight = 0;
      if (calHeight > eleHeight) calHeight = eleHeight;
      this.mainImgOffset = calHeight;
    }

  }
});
// CONCATENATED MODULE: ./website/pages/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/index.vue?vue&type=style&index=0&id=3399543e&lang=scss&scoped=true
var pagesvue_type_style_index_0_id_3399543e_lang_scss_scoped_true = __webpack_require__(1203);

// CONCATENATED MODULE: ./website/pages/index.vue





pagesvue_type_script_lang_js.render = render
pagesvue_type_script_lang_js.__scopeId = "data-v-3399543e"

/* harmony default export */ var pages = __webpack_exports__["default"] = (pagesvue_type_script_lang_js);

/***/ })

}]);