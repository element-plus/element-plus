(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[365],{

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(1202);

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

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_guide_vue_vue_type_style_index_0_id_3b152778_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1191);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_guide_vue_vue_type_style_index_0_id_3b152778_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_guide_vue_vue_type_style_index_0_id_3b152778_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/pages/guide.vue?vue&type=template&id=3b152778

const _hoisted_1 = {
  class: "page-container page-guide"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_side_nav = Object(vue_esm_browser_prod["resolveComponent"])("side-nav");

  const _component_el_col = Object(vue_esm_browser_prod["resolveComponent"])("el-col");

  const _component_router_view = Object(vue_esm_browser_prod["resolveComponent"])("router-view");

  const _component_el_row = Object(vue_esm_browser_prod["resolveComponent"])("el-row");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_el_row, null, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_el_col, {
      xs: 24,
      sm: 5
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_side_nav, {
        data: $options.navsData,
        base: `/${$data.lang}/guide`
      }, null, 8, ["data", "base"])]),
      _: 1
    }), Object(vue_esm_browser_prod["createVNode"])(_component_el_col, {
      xs: 24,
      sm: 19
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_router_view, {
        class: "content"
      })]),
      _: 1
    })]),
    _: 1
  })]);
}
// CONCATENATED MODULE: ./website/pages/guide.vue?vue&type=template&id=3b152778

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(1186);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/pages/guide.vue?vue&type=script&lang=js

/* harmony default export */ var guidevue_type_script_lang_js = ({
  data() {
    return {
      lang: this.$route.meta.lang
    };
  },

  computed: {
    langConfig() {
      return page.filter(config => config.lang === this.lang)[0].pages.guide;
    },

    navsData() {
      return [{
        path: '/design',
        name: this.langConfig[1]
      }, {
        path: '/nav',
        name: this.langConfig[2]
      }];
    }

  }
});
// CONCATENATED MODULE: ./website/pages/guide.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/guide.vue?vue&type=style&index=0&id=3b152778&lang=scss
var guidevue_type_style_index_0_id_3b152778_lang_scss = __webpack_require__(1201);

// CONCATENATED MODULE: ./website/pages/guide.vue





guidevue_type_script_lang_js.render = render

/* harmony default export */ var guide = __webpack_exports__["default"] = (guidevue_type_script_lang_js);

/***/ })

}]);