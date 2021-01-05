(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[265],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/guide.vue?vue&type=template&id=695a3d8e

var _hoisted_1 = {
  class: "page-container page-guide"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_side_nav = Object(vue_esm_browser["P" /* resolveComponent */])("side-nav");

  var _component_el_col = Object(vue_esm_browser["P" /* resolveComponent */])("el-col");

  var _component_router_view = Object(vue_esm_browser["P" /* resolveComponent */])("router-view");

  var _component_el_row = Object(vue_esm_browser["P" /* resolveComponent */])("el-row");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("div", _hoisted_1, [Object(vue_esm_browser["o" /* createVNode */])(_component_el_row, null, {
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_el_col, {
        xs: 24,
        sm: 5
      }, {
        default: Object(vue_esm_browser["db" /* withCtx */])(function () {
          return [Object(vue_esm_browser["o" /* createVNode */])(_component_side_nav, {
            data: $options.navsData,
            base: "/" + $data.lang + "/guide"
          }, null, 8, ["data", "base"])];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_el_col, {
        xs: 24,
        sm: 19
      }, {
        default: Object(vue_esm_browser["db" /* withCtx */])(function () {
          return [Object(vue_esm_browser["o" /* createVNode */])(_component_router_view, {
            class: "content"
          })];
        }),
        _: 1
      })];
    }),
    _: 1
  })]);
}
// CONCATENATED MODULE: ./website/pages/guide.vue?vue&type=template&id=695a3d8e

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(734);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/guide.vue?vue&type=script&lang=js

/* harmony default export */ var guidevue_type_script_lang_js = ({
  data: function data() {
    return {
      lang: this.$route.meta.lang
    };
  },
  computed: {
    langConfig: function langConfig() {
      var _this = this;

      return page.filter(function (config) {
        return config.lang === _this.lang;
      })[0].pages.guide;
    },
    navsData: function navsData() {
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
 
// EXTERNAL MODULE: ./website/pages/guide.vue?vue&type=style&index=0&id=695a3d8e&lang=scss
var guidevue_type_style_index_0_id_695a3d8e_lang_scss = __webpack_require__(749);

// CONCATENATED MODULE: ./website/pages/guide.vue





guidevue_type_script_lang_js.render = render

/* harmony default export */ var guide = __webpack_exports__["default"] = (guidevue_type_script_lang_js);

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(11);
            var content = __webpack_require__(750);

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

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_695a3d8e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(739);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_695a3d8e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_695a3d8e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);