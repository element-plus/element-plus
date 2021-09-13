(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[362],{

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(30);
            var content = __webpack_require__(1196);

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

/***/ 1195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_changelog_vue_vue_type_style_index_0_id_6bc48bf0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1188);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_changelog_vue_vue_type_style_index_0_id_6bc48bf0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_vue_loader_dist_index_js_ref_13_0_changelog_vue_vue_type_style_index_0_id_6bc48bf0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--13-0!./website/pages/changelog.vue?vue&type=template&id=6bc48bf0

const _hoisted_1 = {
  class: "page-changelog"
};
const _hoisted_2 = {
  class: "heading"
};

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("a", {
  href: "https://github.com/element-plus/element-plus/releases",
  target: "_blank"
}, "GitHub Releases", -1);

const _hoisted_4 = {
  ref: "timeline",
  class: "timeline"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = Object(vue_esm_browser_prod["resolveComponent"])("el-button");

  const _component_change_log_en = Object(vue_esm_browser_prod["resolveComponent"])("change-log-en");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("div", _hoisted_1, [Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_2, [Object(vue_esm_browser_prod["createVNode"])(_component_el_button, {
    class: "fr"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_3]),
    _: 1
  }), Object(vue_esm_browser_prod["createTextVNode"])(" " + Object(vue_esm_browser_prod["toDisplayString"])($options.langConfig[1]), 1)]), Object(vue_esm_browser_prod["createElementVNode"])("ul", _hoisted_4, null, 512), Object(vue_esm_browser_prod["createVNode"])(_component_change_log_en, {
    ref: "changeLog"
  }, null, 512)]);
}
// CONCATENATED MODULE: ./website/pages/changelog.vue?vue&type=template&id=6bc48bf0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./CHANGELOG.en-US.md?vue&type=template&id=39cf5f96

const md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_1 = {
  class: "content element-doc"
};

const md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Changelog ");

const md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.10 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-09-13")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Components [el-badge] support color of type when is-dot (#3279 by @adaex)</li><li>Components [el-virtual-scroll-bar] handle click event (#3308 by @SorrowX)</li><li>Components image-viewer component support slot (#3345 by @xiaoxian521)</li><li>Components calendar component header support slot (#3316 by @xiaoxian521)</li><li>Components [el-calendar] add prev-year and next-year (#3360 by @xiaoxian521)</li><li>Components [el-input-number] add focus &amp; blur methods (#3337 by @adaex)</li><li>Components [el-upload] support put method (#3358 by @xiaoxian521)</li><li>Components [el-upload] <code>clearFiles</code> support filter status (#1501 by @gaoyia)</li><li>Utils getPropByPath function adjust (#1276 by @jectychen)</li><li>Hooks extracting size injection for form items (#3383 by @JeremyWuuuuu)</li></ul>", 1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Components [el-menu] fix the infinite loop (#3263 by @BeADre)</li><li>Components [el-alert] change the border-radius variable (#3271 by @btea)</li><li>Components [el-dialog] avoid custom class style conflict (#3267 by @adaex)</li><li>Components [el-form]: ensure form validation always triggers callback (#3294 by @digitalkaoz)</li><li>Hooks warn renamed to debugWarn (#3329 by @sxzz)</li><li>Project typo (#3340 by @sxzz)</li><li>Components [el-cascader] event renamed to e (#3344 by @btea)</li><li>Components [el-textarea] show different font family (#3349 by @Alanscut)</li><li>[el-table] default-expand-all doesn&#39;t work (#3321 by @Alanscut)</li><li>Components rename loading directive instance name (#3336 by @sxzz)</li><li>Add @vueuse/core as dependency (#3374 by @sxzz)</li><li>Components [el-dialog] fix emits (#3375 by @sxzz)</li><li>Components [el-badge] add export type (#3376 by @sxzz)</li><li>Components [el-virtual-scrollbar] fix move bug (#3379 by @SorrowX)</li></ul>", 1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Utils improve debug warn (#3302 by @adaex)</li><li>Hooks refactor useAttrs (#3300 by @sxzz)</li><li>Utils refactor <code>throwError</code> (#3301 by @sxzz)</li><li>Components refactor check-tag (#3311 by @sxzz)</li><li>Utils drop ie support (#3304 by @sxzz)</li><li>Utils refactor menu-bar (#3343 by @btea)</li><li>Utils refactor with-install (#3355 by @sxzz)</li><li>Components refactor button (#3341 by @sxzz)</li><li>Components [el-alert] improve judgment (#1985 by @cbbfcd)</li><li>Components refactor avatar (#3364 by @sxzz)</li><li>Components refactor alert (#3365 by @sxzz)</li><li>Components refactor badge (#3366 by @sxzz)</li><li>Components refactor card (#3367 by @sxzz)</li><li>Components refactor dialog (#3369 by @sxzz)</li><li>Components refactor affix (#3368 by @sxzz)</li><li>Add type declaration (#3310 by @xiaoxian521)</li><li>Revert &quot;fix(components): [el-form]: ensure form validation always triggers callback (#3294 by @HerringtonDarkholme)&quot; (#3324)</li></ul>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.9 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-09-05")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components [el-timeline] add hollow prop (#3229 by @kooriookami)")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>El-image-viewer drag have problem (#3133 by @Alanscut)</li><li>Components virtualized selector optimize (#3160 by @msidolphin)</li><li>Theme-chalk fixed the wrong background color of timeline-item (#3165 by @msidolphin)</li><li>Utils improve element.addEventListener (#3173 by @adaex)</li><li>Components [el-form-item] dom element null checking (#3172 by @taosher)</li><li>Utils make width valid with <code>calc</code> (#3181 by @cokemine)</li><li>Components collapse incorrect export statement (#3185 by @msidolphin)</li><li>Components descriptions cell class (#3195 by @adaex)</li><li>Components tabs dynamic text (#3174 by @imswk) (#3180)</li><li>Components [el-input-number] model:value not required (#3190 by @msidolphin)</li><li>Missing timepicker css var (#3204 by @YunYouJun)</li><li>[el-form-item] add min-width (#3208 by @sxzz)</li><li>Chore typo package.json (#3214 by @linrongbin16)</li><li>Theme-chalk [el-form] no display red asterisk when width is auto (#3222 by @msidolphin)</li><li>Docs fix typo in README.md (close #3216) (#3230 by @KimYangOfCat)</li><li>Build agolia indices script (#3234 by @JeremyWuuuuu)</li><li>Components message verified by el-form is &quot;&quot; validate (#3227 by @imswk) (#3231)</li><li>Components [el-menu] fix warn &amp; listen item (#3225 by @sxzz)</li><li>Components lazy image is not work when it changes src (#3189 by @zycoJamie)</li><li>Allow custom tr background-color (#3166 by @YunYouJun)</li><li>Perf menu add back arrow-icon and overflow (#3167 by @kooriookami)</li><li>Style <code>$--border-color-hover</code> var reference (#3179 by @adaex)</li><li>Style fixed style (#3202 by @sunnuan)</li><li>Perf [el-menu] only vertical mode has transition (#3200 by @kooriookami)</li><li>Style fix missing import (#3212 by @sunnuan)</li><li>Style use prettier (#3228 by @sxzz)</li><li>Style [el-image] format code (#3238 by @sxzz)</li></ul>", 1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components Improve calendar date range validate (#3156 by @adaex)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Upgrade to husky@7 & lint-staged@11 & commitlint@13 (#3239 by @YunYouJun)")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.8 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-31")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components form add scrollToField method (#3110 by @sxzz)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components select-v2 support filter-method & remote-search (#3092 by @msidolphin)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components button-group add size (#3098 by @sxzz)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components [el-image-viewer] emit close event (#3129 by @btea)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components select-v2 support keyboard operations (#3138 by @msidolphin)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Menu add ellipsis in horizontal mode (#3083 by @kooriookami)")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Theme-chalk add the missing margin-left to transfer</li><li>Remove useless and duplicate declaration (#3082 by @BeADre)</li><li>Components image no emit switch event (close #3132) (#3134 by @imswk)</li><li>Components [el-upload] revoke object url on item remove (#3135 by @adaex)</li><li>[el-cascader-panel] fix childrenData (close #3126) (#3131 by @qinpeip)</li><li>Locale update korean translation (#3137 by @rikapo)</li><li>Components layout css lost (#3140 by @JeremyWuuuuu)</li><li>Icon clipboard (#3142 by @kooriookami)</li><li>Components [el-table] width init error (close #3087) (#3117 by @imswk)</li><li>[el-scrollbar] add missing off mouseup (#3143 by @kooriookami)</li><li>Style update calc style (#3090 by @kooriookami)</li><li>Style checkbox support size prop both border or not (#3099 by @kooriookami)</li><li>Style radio support size prop both border or not (#3103 by @kooriookami)</li><li>Table fix Destructuring assignment bug (#2893 by @HaitaoWang555)</li><li>[image-viewer] two-finger zoom in and out (#3114 by @Alanscut)</li></ul>", 1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Enhance type definition (#3062 by @sxzz)")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.7 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-26")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components style path error for radio button (#3079 by @JeremyWuuuuu)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Input autosize type problem (#3008 by @imswk) (#3012)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Build marking side effects for webpack importing styles")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.6 ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-26")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components [table] avoid table border style conflict (#3064 by @adaex)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Eslint ignore bundle file (#3061 by @sxzz)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Form el-from/src/token.d.ts file miss (#2979 by @imswk) (#2988)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components exposing style folder for select dropdpwn (#3077 by @JeremyWuuuuu)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Style(docs): Optimized style of documentation (#3010 by @kooriookami)")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.5 ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-25")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Select-v2 support allow-create feature (#3017 by @msidolphin)")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Missing folders and umd locale builds and i18n docs for umd builds (#3053 by @JeremyWuuuuu)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Rateuse constant (#3011 by @Notryag)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Stop pinning vue peer dependency version (#3051 by @sodatea)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Ed resolve font path errors (#3048 by @wilhantian)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Build unpin vue compiler version (#3055 by @JeremyWuuuuu)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Style remove useless style (#3042 by @kooriookami)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Perf pdate tw lang (#3045 by @kooriookami)")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.4 ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-25")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Message-box fix type (#3038 by @sxzz)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "[label-wrap] Fix misspellings (#3030 by @wangbincyzj)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Components [descriptions] avoid conflict with el-table (#3005 by @adaex)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Build exposing installer function and version for umd build (#3041 by @JeremyWuuuuu)")], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Rename el-submenu to el-sub-menu (#3037 by @sxzz)")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.3 ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-24")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Build fix rollup full bundile issue (#3034 by @JeremyWuuuuu)")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.2 ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-24")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Build upgrade vue to 3.2.x (#3031 by @JeremyWuuuuu)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Build: update browserslist (#3027 by @kooriookami)")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.1.0-beta.1 ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-24")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Breaking changes: ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Please refer to: ");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Breaking changes made in 1.1.0-beta.1");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Date-picker custom date-editor width (#2836 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Card add var background-color & prepare for dark mode (#2912 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Link remove href prototype when empty (#2969 by @adaex)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Add ElSkeleton template scoped parameter "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". (#2944 by @callmesoul)")])], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Dropdown add css var for popper (#2909 by @inottn)</li><li>Carousel a invalid css rule by typo (#2951 by @KawaiiZapic)</li><li>Pagination icon center aligned (#2962 by @adaex)</li><li>Link fix style (#2990 by @kooriookami)</li><li>Notification icon color error (#2992 by @adaex)</li><li>Components form-item Fix misspellings (#3019 by @wangbincyzj)</li><li>Update token.ts (#3001 by @wangbincyzj)</li><li>Improvement(tabs): optimize tab-bar offset calc (#2844 by @Senasiko)</li><li>checkbox fix the size property is invalid (#2985 by @kooriookami)</li><li>Menu change to border-box (#2999 by @kooriookami)</li><li>Transfer add text-algin (#3018 by @kooriookami)</li></ul>", 1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update package path and bundle folder (#3016 by @JeremyWuuuuu)")], -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.71 ");

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-18")], -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Table add new css var background-color (#2866 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Switch add border color (#2933 by @HatemSat)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Add 'calendar-change' event to date-range datetime-range picker (#2964 by @iamkun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Scrollbar add min-size prop (#2916 by @kooriookami)")], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Button when(circle) use button-padding-vertical &amp; add size demo (#2860 by @YunYouJun)</li><li>Drawer missing css var, close #2848 (#2861 by @YunYouJun)</li><li>Select options display fix when allow-create, also empty &amp; entered #2826 #2854 (#2830 by @noah19846)</li><li>Locale update error url and remove useless code (#2852 by @zwwtj2014)</li><li>Comments update var button comments (#2896 by @liamfend)</li><li>Tabs add v-resize directive (#2886 by @kooriookami)</li><li>Tree undefined parent cause error on SSR (#2942 by @tolking)</li><li>Badge fix dot-badge color (#2943 by @ninedev-i)</li><li>Style allow custom alone color sass var (#2963 by @YunYouJun)</li><li>Pagination locale key correction (#2889 by @ioslh)</li><li>Pagination Fix that current-page and page-size do not support hyphen style when using v-model (#2884 by @LeeSamFong)</li></ul>", 1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Transition use sass map refactor & rename some transition (#2879 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Tag use inherit css var way to simplify tag (#2878 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Color add css var color for button & fix style for datepicker (#2869 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Pagination optimize demo style (#2890 by @Eyes22798)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Var alert/badge/link/message/message-box/notification/tag (#2892 by @YunYouJun)")], -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.70 ");

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-05")], -1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Date-picker color-text has been renamed to text-color (#2835 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Cascader revert #2344 to fix not update when options change (#2843 by @SimonaliaChen)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Cascader missing cascader-panel css var & add default var for thumb (#2847 by @YunYouJun)")], -1);

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.69 ");

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-04")], -1);

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix sass compiling error (#2831)")], -1);

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.68 ");

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-04")], -1);

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Dropdown styles error (#2823 by @tolking)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Var fix input/radio/checkbox used by other components (#2821 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Project node is not exporting issue (#2827 by @JeremyWuuuuu)")], -1);

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.67 ");

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-04")], -1);

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_89 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Theme-chalk fix fonts build by gulp (#2817 by @YunYouJun)")], -1);

const _hoisted_90 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_91 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Var move css var from root to class (#2808 by @YunYouJun)")], -1);

const _hoisted_92 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.66 ");

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-08-03")], -1);

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Input Removed validator for autocomplete attribute (#2757 by @ShookTea)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Icon introduce-el-icons-into-ep (#2766 by @JeremyWuuuuu)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Space add fill support (#2716 by @adaex)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Var var sass map for components (#2778 by @YunYouJun)")], -1);

const _hoisted_96 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_97 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Var map merge default var (#2727 by @YunYouJun)</li><li>Scrollbar the problem of ScrollbarDirKey being deleted (#2722 by @msidolphin)</li><li>Input no trigger input event when clear value (#2723 by @msidolphin)</li><li>Message using iconClass causes &quot;el-message__icon&quot; to be lost (#2709 by @GaliMu)</li><li>Locale inject locale for modal like components (#2737 by @JeremyWuuuuu)</li><li>Tooltip styles error (#2763 by @tolking)</li><li>Input Improve inputStyle reference (#2780 by @adaex)</li><li>Select-v2&#39;s dropdown width wrong if create in style(display: none) (#2791 by @zhaozhongyu)</li><li>Checkbox checkbox bordered padding &amp; height (#2784 by @YunYouJun)</li><li>Locale update Norwegian translation file (#2789 by @AdrianAndersen)</li><li>Select option does not delete in onBeforeMount (#2753 by @zhaozhongyu)</li><li>Fix Nullable type for RefElement (#2730 by @PxlBuzzard)</li><li>Fix LabelWraplabel-width bug (#2742 by @SorrowX)</li></ul>", 1);

const _hoisted_98 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_99 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Var simplify checkbox var & move transition to root (#2729 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Backtop migrate css var (#2711 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Badge/card/dropdown/rate migrate css var & use sass:map (#2764 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Link remove unused link variables & add sass map (#2768 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Slider migrate css var & use sass map for message (#2772 by @YunYouJun)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Button use sass map & add outline:none for focus (#2774 by @YunYouJun)")], -1);

const _hoisted_100 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.65 ");

const _hoisted_101 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-28")], -1);

const _hoisted_102 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_103 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(input-number): fix style (#2738)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(date-picker): date-picker focus end-time resets start-time (#2290)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix: date-time picker same day select time bug (#2747)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(image-viewer): image-viewer export error (#2754)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix: time picker adjust spinner bug (#2743)")], -1);

const _hoisted_104 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore ");

const _hoisted_105 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "test(select-v2): complete unit tests (#2739)")], -1);

const _hoisted_106 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.64 ");

const _hoisted_107 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_108 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(var): map merge default var (#2727)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(scrollbar): the problem of ScrollbarDirKey being deleted (#2722)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(input): no trigger input event when clear value (#2723) …"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(message): using iconClass causes \"el-message__icon\" to be lost (#… …"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(typing): fixed Nullable type for RefElement (#2730)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(locale): inject locale for modal like components (#2737)")], -1);

const _hoisted_109 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_110 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "refactor(backtop): migrate css var (#2711)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "refactor(var): simplify checkbox var & move transition to root (#2729)")], -1);

const _hoisted_111 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.63 ");

const _hoisted_112 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-27")], -1);

const _hoisted_113 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactor ");

const _hoisted_114 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Refactor popover migrate css var (#2687)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Refactor tooltip migrate css var (#2686)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Refactor color rename color-text to text-color (#2691)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Refactor scrollbar migrate css var (#2698)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Refactor date-picker migrate css var (#2689)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Refactor tree popup form timeline-item migrate css var (#2697)")], -1);

const _hoisted_115 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_116 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix radio-button checked should sync with state (#2699)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update i18n version (#2690)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix notification improve type definition and define closeAll function (#2705)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix message iconClass not working (#2695)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix avatar css property line-height (#2702)")], -1);

const _hoisted_117 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.62 ");

const _hoisted_118 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-26")], -1);

const _hoisted_119 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_120 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix build script error on Github Runner (#2683)")], -1);

const _hoisted_121 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.61 ");

const _hoisted_122 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-26")], -1);

const _hoisted_123 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_124 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fix documentation error for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Config Provider"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (#2679)")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix build script issue (#2680)")], -1);

const _hoisted_125 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.60 ");

const _hoisted_126 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-26")], -1);

const _hoisted_127 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_128 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fix "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dayjs"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" integration issue with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-config-provider"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "build.sh"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" shell error (#2678)")])], -1);

const _hoisted_129 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.59 ");

const _hoisted_130 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-26")], -1);

const _hoisted_131 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Breaking change ");

const _hoisted_132 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "feat(locale): i18n implementation (#2670)")], -1);

const _hoisted_133 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_134 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(locale): missing install & locale issue (#2647)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(select): should not stop at invisible options by up and down (#2585) …"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(style): ondemand style lost (#2648)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(select-v2): adjust the trigger conditions of focus and blur (#2650)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(style): remove bg-color of menu items at ':focus'"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "fix(input): input maxlength calculate the correct length (#2654)")], -1);

const _hoisted_135 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore ");

const _hoisted_136 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "chore: update i18n demo (#2672)")], -1);

const _hoisted_137 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactors ");

const _hoisted_138 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>refactor(result): migrate css var (#2637)</li><li>refactor(carousel): migrate css var (#2638)</li><li>refactor(transfer): migrate css var (#2639)</li><li>refactor(dialog): migrate css var (#2641)</li><li>refactor(menu): migrate css var (#2642)</li><li>refactor(descriptions): migrate css var (#2643)</li><li>refactor(empty): migrate css var (#2644)</li><li>refactor(color): migrate all color-text var &amp; simplify color docs (#2656)</li><li>refactor(border): migrate css var &amp; simplify docs (#2663)</li><li>refactor(collapse): migrate css var (#2661)</li><li>refactor: i18n implementation (#2670)</li><li>refactor(locale): i18n migration website code (#2671)</li></ul>", 1);

const _hoisted_139 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.58 ");

const _hoisted_140 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-24")], -1);

const _hoisted_141 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_142 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Hotfix for setLocale")], -1);

const _hoisted_143 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.57 ");

const _hoisted_144 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-23")], -1);

const _hoisted_145 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_146 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Hotfix for setLocale")], -1);

const _hoisted_147 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.56 ");

const _hoisted_148 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-23")], -1);

const _hoisted_149 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_150 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Add useCssVar for inject custom css vars (#2547)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Cascader supports popper-append-to-body feature (#2544)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Improve menu handleItemClick (#2514)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Re-design popper apis (#2529)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Change formItem slot label formItem to scopedSlots (#2522)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Export popperjs common attributes (#2520)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update checkbox label supports object type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update loading custom loading svg (#2456)")], -1);

const _hoisted_151 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Refactor ");

const _hoisted_152 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Refactor link migrate css var (#2622)</li><li>Refactor avatar migrate css var (#2601)</li><li>Refactor tag migrate css var (#2592)</li><li>Refactor skeleton migrate css var (#2586)</li><li>Refactor pagination migrate css var (#2587)</li><li>Refactor switch migrate css var (#2584)</li><li>Refactor button migrate css var (#2582)</li><li>Refactor cascader migrate css var (#2578)</li><li>Refactor message-box migrate css var (#2568)</li><li>Refactor table+calendar migrate css var (#2588)</li><li>Refactor color add error var (#2565)</li><li>Refactor message migrate css var (#2560)</li><li>Refactor notification migrate css var (#2552)</li><li>Refactor color migrate color css var &amp; simplify color box docs (#2589)</li><li>Refactor alert replace all css var (#2545)</li><li>Refactor typography add css var for typography</li><li>Refactor container header/footer/aside size by css variables (#2530)</li><li>Refactor container header/footer/asdide size by css variables (#2526)</li><li>Refactor generate color var by sass map (#2504)</li><li>Refactor button/radio/input size by sass map (#2502)</li><li>Refactor color css var for border-color &amp; simplify border-color docs (#2540)</li><li>Refactor checkbox migrate checkbox css3 var (#2493)</li><li>Refactor style use css3 var refactor base variable (#2478)</li></ul>", 1);

const _hoisted_153 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_154 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix select-v2 add some test cases &amp; fix selectLabel/multiple-limit issue (#2626)</li><li>Optimize select-v2 style (#2628)</li><li>Update bundle strategy</li><li>Update date-picker shortcuts support function type (#2617)</li><li>Fix ensure that the loading icon is inline (#2550)</li><li>Fix affix expose update function (#2603)</li><li>Fix autocomplete optimize some const of autocomplete (#2593)</li><li>Fix descriptions fix the last td colspan (#2567)</li><li>Fix time-select fix editable prop and add disabled prop (#1899)</li><li>Update hooks refactor transition (#2556)</li><li>Fix el-tree accordion attribute only takes effect on root nodes (#2523)</li><li>Fix select filtered empty groups (#2507)</li><li>Refactor popper use-popper-hook for popper</li><li>Fix select-v2 inputWidth is not defined (#2510)</li><li>Fix el-menu activeIndex bug (#2468)</li><li>Fix select hoverIndex has incorrect when popover is turned on again (#2469)</li><li>Fix option selectemitter was not turned off when it was destroyed (#2450)</li><li>Fix time-picker model-value should sync when disable-attrs was updated (#2462)</li><li>Fix table-column parse width and minWidth (#2466)</li><li>Fix form no effect when label-width prop is auto (#2480)</li><li>Fix time-picker missing blur methods and spelling error (#2457)</li><li>Fix upload file-list is updated but without re-rendered (#2405) (#2460)</li><li>Fix more than one component in table_column.spec.js (#2461)</li><li>refactor pagination pagination internal logic refactored (#2491)</li><li>Fix form add default value of label-width (#2492)</li><li>Fix time-select missing blur method (#2477)</li></ul>", 1);

const _hoisted_155 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.55 ");

const _hoisted_156 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-09")], -1);

const _hoisted_157 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_158 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Refactor the type definition of breadcrumb (#2443)</li><li>Add use-timeout hook (#2439)</li><li>Fix menu missing styles (#2423) (#2444)</li><li>Fix table selectable callback index incorrect issue (#2393)</li><li>Fix isScroll Utils (#2433)</li><li>Fix scrollbar add always show props and control scrollbar methods</li><li>Add use-model-toggle hook</li><li>Add use-transition-fallthrough-hook</li><li>Fix duplicate cell-contextmenu (#2426)</li><li>Add use-teleport hook (#2421)</li><li>Add descriptions new feature for customized style (#2358)</li><li>Fix warning in console when cell-contextmenu triggered (#2404)</li><li>Fix table add cell-contextmenu emit event (#2074)</li><li>Fix table-column rendered other component in hidden-columns (#2401)</li><li>Add event type definition</li><li>Fix menu hover color not change when background is changed (#2417)</li><li>Fix table empty data render bug</li><li>Fix form label-width supports number type (#2396)</li><li>Fix code space style (#2411)</li></ul>", 1);

const _hoisted_159 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.54 ");

const _hoisted_160 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-07-02")], -1);

const _hoisted_161 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_162 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix select_v2 asynchronous binding issue (#2368)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix add resize directive (#2167)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix checkbox label auto convert to bool when label is empty (#2287)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix update peerDependencies vue version (#2352)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix virtual-list template string to render function (#2388)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix code space (#2376)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix cascader arrow position (#2356)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix carousel not working when using v-show (#2361)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Revert fix scrollbar update when slot changed (#2322)")], -1);

const _hoisted_163 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.53 ");

const _hoisted_164 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-06-25")], -1);

const _hoisted_165 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_166 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix messageBox should close when press enter (#2308)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix scrollbar update when slot changed (#2322)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix can not binding multiple click-outside directives on a component (#2327)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix v-popover can't work (#2341)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix cascader-panel should not re-init when props's value not change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix input-number fix border color when disabled and hover over buttons (#2334)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix @use \"sass:math\" repeat reference (#2336)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix cascader-panel default value doesn't work in lazy mode (#2338)")], -1);

const _hoisted_167 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.52 ");

const _hoisted_168 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-06-24")], -1);

const _hoisted_169 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_170 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix virtual-list module resolve issue (#2316)")], -1);

const _hoisted_171 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.49 ");

const _hoisted_172 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-06-23")], -1);

const _hoisted_173 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_174 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix col different size style (#2237)</li><li>Refactor extract common props for props (#2300)</li><li>Fix Descriptions not re-rendered when slots is updated (#2275)</li><li>Fix table index error issue (#1919)</li><li>Fix form use flex layout</li><li>Fix checkbox selfModel use ref</li><li>Fix cascader style</li><li>Fix cascader add fallback-placements in some components (#2267)</li><li>Rename message-box some var --msgbox to --messagebox (#2241)</li><li>Fix menu add ms-menu-border-color (#2240)</li><li>Fix Checkbox checked optional cannot control state issue (#2046)</li><li>Refactor table test cases (#2232)</li><li>Fix ElTable index calculation issue (#2143)</li><li>Fix table test (#2229)</li><li>Fix date-picker default-time does not work when type is datetime (#2177)</li></ul>", 1);

const _hoisted_175 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.47 ");

const _hoisted_176 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-06-11")], -1);

const _hoisted_177 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_178 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Feat Popover: add himBH-popover-border-radius variable (#2094) (#2095)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Feat SelectV2: integrate-virtual-list-with-select (#1906)")], -1);

const _hoisted_179 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_180 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix DatePicker: date picker support value-format (#2120)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Input: style use show-password and clearable (#2168) (#2169)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Rate: update change event trigger condition (#2181)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix PopConfirm: import missing popover.scss (#2207)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Project: upgrade to vue 3.1.1 and with bug fix (#2220)")], -1);

const _hoisted_181 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore ");

const _hoisted_182 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Chore docs: side-nav refactor with Vue3 (#1943)</li><li>Chore docs: update doc template (#2142)</li><li>Chore docs: Collapse code for composition (#2152)</li><li>Chore docs: Checkbox code for composition (#2153)</li><li>Chore docs: Cascader code for composition (#2154)</li><li>Chore docs: Card code for composition (#2155)</li><li>Chore docs: Calendar code for composition (#2156)</li><li>Chore docs: Image code for composition (#2157)</li><li>Chore docs: Avatar code for composition (#2158)</li><li>Chore docs: ColorPicker code for composition (#2160)</li><li>Chore docs: Container code for composition (#2161)</li><li>Chore docs: DatePicker code for composition (#2162)</li><li>Chore docs: DateTimePicker code for composition (#2163)</li><li>Chore docs: Dialog code for composition (#2164)</li><li>Chore docs: Drawer code for composition (#2165)</li><li>Chore docs:</li><li>Chore docs: drawer put v-model to the first (#2174)</li><li>Chore docs: update Dialog doc (#2175)</li><li>Chore docs: update dialog (#2176)</li><li>Chore docs: tooltip appendToBody default value is true (#2184)</li><li>Chore docs: InfiniteScroll code for composition (#2193)</li><li>Chore docs: Dropdown code for composition (#2194)</li><li>Chore docs: InputNumber code for composition (#2195)</li><li>Chore docs: Loading code for composition (#2196)</li></ul>", 1);

const _hoisted_183 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.46 ");

const _hoisted_184 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-06-04")], -1);

const _hoisted_185 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_186 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Feat website: demo Composition API (#2099)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Feat Input: add input-style prop (#2117)")], -1);

const _hoisted_187 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bugfixes ");

const _hoisted_188 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Col: should hidden when span is zero (#1769)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Table: hot reload (#2077) (#2097)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Popper: in dialog isn't enough space to position problem (#2102)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix ImageViewer: isLast attribute calculation error issue (#1902) (#2125)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Popper: tabindex prop type (#2130)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Locale: week translations for hr locale (#2134)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Cascader: size issue when filterable and multiple are enabled (#2123)")], -1);

const _hoisted_189 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore ");

const _hoisted_190 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore Website: update radio VCA doc (#2111)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore Project: esbuild for single component build (#2112)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore Website: use built-in throwError function. (#2131)")], -1);

const _hoisted_191 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.45 ");

const _hoisted_192 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-05-28")], -1);

const _hoisted_193 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_194 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Feat VClickOutside: Expose mousedown and mouseup event object (#2038)")], -1);

const _hoisted_195 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bugfixes ");

const _hoisted_196 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix Website: &#39;textContent&#39; of undefined and text wrapping (#1973)</li><li>Fix DatePicker: attribute &#39;type&#39; add ts declare (#1979)</li><li>Fix Table: fix sorting error #1919 (#1983)</li><li>Fix Table: fix v-if patch bug on el-table-column (#1988)</li><li>Fix Badge: should test is-dot class existed. (#1992)</li><li>Fix Dropdown: add additional css in dropdown (#1998)</li><li>Fix Notification: fix notification component zIndex prop can not work (#2021)</li><li>Fix Tabs: update the setCurrentName function. (#2030)</li><li>Fix DateTimePicker: respect format props and default value (#2034)</li><li>Fix Locale: japanese translations (#2050)</li><li>Fix Pagination: fix bug #2025 (#2062)</li><li>Fix Website: algolia search wrong search parameter (#2065)</li><li>Fix ScrollBar: perf behavior of bar click (#2066)</li><li>Fix DateTimePicker: allow clearable to control both of the clear button (#2072)</li></ul>", 1);

const _hoisted_197 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore ");

const _hoisted_198 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Chore Tag: add specific type declaration (#1939)</li><li>Chore Docs: drawer.md add modal-class attribute (#1974)</li><li>Chore Transfer: remove useless button style (#1975)</li><li>Chore Badge: Remove unused type declarations (#1991)</li><li>Chore Table: refactored the type definition of table (#1997)</li><li>Chore Result: it should verify that text is inserted in the slot (#2000)</li><li>Chore Website: webpackChunkName of jp doc map. (#2007)</li><li>Chore Docs: added dropdown disabled attribute for all languages (#2013)</li><li>Chore Tabs: remove unused code (#2019)</li><li>Chore Tabs: add tabs type&#39;s definition (#2020)</li><li>Chore TabNav: use same throw error utils function. (#2022)</li><li>Chore add button click type&#39;s definition (#2026)</li><li>Chore Tab: remove meaningless parentheses (#2033)</li><li>Chore Docs: update the &#39;value&#39; property to &#39;ModelValue&#39; (#2044)</li><li>Chore ScrollBar: add scrollbar type&#39;s definition (#2057)</li><li>Chore Style: remove useless style (#2058)</li><li>Chore Project: bump sass from 1.26.10 to 1.34.0 (#2060)</li><li>Chore Docs: value -&gt; model-value in vue 3 (#2067)</li></ul>", 1);

const _hoisted_199 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.44 ");

const _hoisted_200 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-05-11")], -1);

const _hoisted_201 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_202 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Hot fix for #1980 (#1981)")], -1);

const _hoisted_203 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.43 ");

const _hoisted_204 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-05-10")], -1);

const _hoisted_205 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_206 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix DateTimePicker positioning issue (#1980, #1981)")], -1);

const _hoisted_207 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.42 ");

const _hoisted_208 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-05-09")], -1);

const _hoisted_209 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_210 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Rate: remove the confusing this (#1910)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Drawer: add modal false div class (#1932)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Button: fix incorrect style rule when hovering disabled plain button (#1937)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Form: fix validate typing error (#1938)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Table: fix table checkbox onChange event unable to be emitted in legacy browser (#1945)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Icon: update icon design styles (#1950)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Transfer: remove useless button style (#1953)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Popover: add additional css in popover (#1956)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Switch: fix switch component onMounted condition error (#1966)")], -1);

const _hoisted_211 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore ");

const _hoisted_212 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore Notification: Remove magic numbers (#1928)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore Tag: keep the same with property name (#1940)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore Pagination: update Pagination documentation with .sync modifier (#1920 #1957)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore Project: replace unreasonable code (#1963)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Chore website: update ad (#1968)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore ThemeChalk: add missing "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "!default"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" modifiers for global variables (#1969)")])], -1);

const _hoisted_213 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.41 ");

const _hoisted_214 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-04-26")], -1);

const _hoisted_215 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_216 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Progress: indeterminate progress bar (#1832)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Descriptions: new component descriptions (#1856)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Scrollbar: new component Scrollbar (#1859)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Switch: add beforeChange hook (#1878)")], -1);

const _hoisted_217 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_218 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix Image fix image Add the dom of the preview picture to the body (#1577)</li><li>Fix Icon fix icon (#1896)</li><li>Fix page-header add icon props and slots (#1882)</li><li>Fix Scrollbar perf behavior of scrollbar (#1869)</li><li>Fix Button setup props add type (#1879)</li><li>Fix Upload expose abort method (#1877)</li><li>Fix Dropdown fix click disabled still trigger (#1865)</li><li>Fix Virtual-list enhance-virtual-list (#1813)</li><li>Fix Space string spacer style issue (#1845)</li><li>Fix Checkbox activeStyle boxShadow error (#1829)</li></ul>", 1);

const _hoisted_219 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.40 ");

const _hoisted_220 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-04-14")], -1);

const _hoisted_221 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_222 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix table page resize event not monitor (#1790)</li><li>Fix time-picker added popperRef in picker to Fix issue #1809 (#1812)</li><li>Fix select fix select with filterable has wrong dropdown options (#1811)</li><li>Fix table fix bug of table crash under complex data (#1805)</li><li>Fix alert.scss carousel.scss switch.scss v-enter(vue2) to v-enter(vue3) (#1803)</li><li>Fix build not generate code hint files when publish-npm (#1802)</li><li>Fix avatar fix src attributes default value (#1770)</li><li>Fix talbe null check error (#1807)</li><li>Fix image-viewer fix image src attribute error #1791 (#1819)</li><li>Fix date-picker date-picker daterange panel clear value and view not updated (#1816)</li><li>style(date-picker): date-picker-com conditional judgment (#1823)</li><li>Fix docs footer links error (#1827)</li><li>Fix table fix table column rerendered whenever table updates</li><li>Fix time-picker time picker change event bug (#1828)</li></ul>", 1);

const _hoisted_223 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_224 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Result: new componet Result (#1818)")], -1);

const _hoisted_225 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore updares ");

const _hoisted_226 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "style using 'Array.prototype.forEach()' (#1826)")], -1);

const _hoisted_227 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.39 ");

const _hoisted_228 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-04-09")], -1);

const _hoisted_229 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_230 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fix "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "packages/utils"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" path issue (#1792)")])], -1);

const _hoisted_231 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.38 ");

const _hoisted_232 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-04-08")], -1);

const _hoisted_233 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fix "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "packages/utils"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" build issue caused "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "setConfig"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" not working (#1788)")])], -1);

const _hoisted_234 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.37 ");

const _hoisted_235 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-04-08")], -1);

const _hoisted_236 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_237 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix input prefix-icon-incorrect-height (#1766)</li><li>Fix select fix filter method is not called when input first letter (#1711)</li><li>Fix picker add focus (#1475)</li><li>Fix time-select input value not changed with v-model bindings (#1725)</li><li>Fix tooltip component tabindex prop (#1621)</li><li>Fix select fix type of modelValue incompatible (#1719)</li><li>Fix utils isIE logic (#1757)</li><li>Refactor card remove needless div tag (#1732)</li><li>Fix input add keydown event listener for textarea (#1723)</li><li>Fix time-picker update oldValue when visible change (#1635)</li><li>Fix drawer close button outline issue when focusing (#1727)</li></ul>", 1);

const _hoisted_238 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.36 ");

const _hoisted_239 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-03-28")], -1);

const _hoisted_240 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_241 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>fix option-group error when groupQueryChange event trigger</li><li>fix model-value error when Slider rendered</li><li>fix use-lock-screen hook (#1651)</li><li>fix modelValue should be deep reactive in multiple mode (#1624)</li><li>fix not returning resetField &amp; clearValidate methods (#1663)</li><li>fix bug in render column structure (#1664)</li><li>fix bug caused by dynamic rendering (#1640) …</li><li>fix tooltip&#39;s export (#1678)</li><li>fix should reset placeholder after clear (#1679)</li><li>fix image onload overridden (#1689)</li><li>fix #1653 (#1665)</li><li>fix tabindex prop (#1642)</li><li>fix notification css word break (#1699)</li><li>fix transition error trigger when fileList is static (#1686 …</li><li>fix error position of input and tags (#1682)</li><li>fix incompatible migration (#1671) …</li><li>fix the current row render flashing when expanding line toggle</li><li>fix menu component animation bug (#1690)</li><li>fix style of break word (#1701)</li></ul>", 1);

const _hoisted_242 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_243 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "add new feature check-tag (#1696)")], -1);

const _hoisted_244 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore updates ");

const _hoisted_245 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "docs update label docs of tab-pane (#1646)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "add web-types.json (#1662)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "chore: remove an repetitive file in .gitignore (#1673)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "docs: Update the quickstart.md of zh-cn language (#1698)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "docs: update on demand import docs (#1672)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "project/bumping-vue-version (#1702)")], -1);

const _hoisted_246 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.35 ");

const _hoisted_247 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-03-15")], -1);

const _hoisted_248 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix type generator error")], -1);

const _hoisted_249 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.34 ");

const _hoisted_250 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-03-12")], -1);

const _hoisted_251 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_252 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix slider warning of modelValue (#1622)</li><li>Fix tree auto expand parent on set current key and node (#1502)</li><li>Fix avatar watch invalid when src is missing from props (#1615)</li><li>Fix select tag can&#39;t close if the option is disabled (#1605)</li><li>Fix table the bug that cannot watch data (#1612)</li><li>Fix cascader-panel no loaded nodes should not be checked (#1583)</li><li>Fix cascader prevent log error for before filter (#1582)</li><li>Fix some components miss install type (#1547)</li><li>Fix pagination current-page event error emit (#1575)</li><li>Fix select option migrate error (#1574)</li><li>Fix popover panel disappear when hover on panel (#1573)</li><li>Fix table fix #1572 (#1592)</li><li>Fix table fix #1591 (#1593)</li><li>Fix radio type order (#1554)</li><li>Fix time-picker replace test <code>it.only</code> with <code>it</code> in test (#1586)</li><li>Fix popper simplify mapEvents logic &amp; add PopperEvents (#1541)</li><li>Fix pagination component layout prop bug (#1576)</li><li>Fix select disabled group not works (#1559)</li><li>Fix dropdown dropdown will expand when unexpected (#1569)</li><li>Fix table table column resize not work (#1567) …</li></ul>", 1);

const _hoisted_253 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.33 ");

const _hoisted_254 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-03-03")], -1);

const _hoisted_255 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_256 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix cascader-panel value can be falsy value (#1533)</li><li>Fix scss error (#1542)</li><li>Fix popper error cause by vue version update (#1556)</li><li>Fix col will always be hidden when responsive span is zero (#1532)</li><li>Fix empty svg render not normal in multiple tab-pane (#1534)</li><li>Fix layout gutter bug (#1537)</li><li>Fix select options watch flush post (#1513)</li><li>Fix select noMatchText error show (#1523)</li><li>Fix avatar need reset hasLoadError to false, if src changed (#1515)</li><li>Fix input remove invalid attrs after render (#1489)</li><li>Fix select emit blur event (#1504)</li><li>Fix table bug of invalid tooltipEffect prop (#1470)</li><li>Fix table column default rendering errors (#1433) …</li><li>Fix scrollbar update bar when window resize (#1456)</li><li>Fix autocomplete migration error (#1493)</li><li>Fix message-box miss overlay style when on demand import (#1494)</li></ul>", 1);

const _hoisted_257 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.32 ");

const _hoisted_258 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-31")], -1);

const _hoisted_259 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_260 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix switch cannot change width dynamically (#1435)</li><li>Fix PopConfirm translation error (#1450)</li><li>Fix date range picker input issue (#1439)</li><li>Fix date picker second clear not trigger change event #1438</li><li>Fix behavior of tooltip (#1443)</li><li>Fix bug cause by scrollToOption (#1440)</li><li>Fix the issue which caused input area render error on Safari (#1429)</li><li>Fix shadow rendering bug of initializing fixed columns (#1418)</li><li>Fix popper trigger ref cannot be fetched (#1419)</li><li>Remove tab incorrect highlight style (#1416)</li><li>Fix type check error of message (#1413)</li><li>Fix that the column width is calculated incorrectly (#1381)</li><li>Fix popper position error (#1411)</li><li>Fix style of demo card header (#1405)</li><li>Fix upload list remove animation incorrect (#1379)</li></ul>", 1);

const _hoisted_261 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Features ");

const _hoisted_262 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "feat(carousel): add pause-on-hover prop (#1423)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "feat(dropdown): add max-height prop of menu (#1436)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "feat(progress): add default slot (#1426)")], -1);

const _hoisted_263 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore updates ");

const _hoisted_264 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "docs: remove auto-complete of input and select (#1437)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "css prefix (#1407)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("docs(project): Update "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "importing on demand"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" section in `quickstart.md, to solve the issue which caused importing on demand not working (#1414)")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix dome-block bottom bar width error when fixed (#1406)")], -1);

const _hoisted_265 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.31 ");

const _hoisted_266 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-31")], -1);

const _hoisted_267 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_268 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix Select can not scroll to default option (#1397)</li><li>Fix Select tag&#39;s text is empty string when multiple with remote (#1393)</li><li>Fix Tree error cause by child node&#39;s data is not reactive (#1396)</li><li>Update Button change height to min-height (#1402)</li><li>Fix Tree every node @check-change event fire only once (#1390)</li><li>Fix Notification remove dom when destoryed (#1378)</li><li>Fix Message component trigger many times bug #1269 (#1270)</li><li>Fix ColorPicker compilation errors caused by switch (#1375)</li><li>Fix Table column insertion disorder (#1329)</li><li>Fix Popover z-index won&#39;t update when popover is shown (#1364)</li><li>Update Dialog to accept number type (#1373)</li><li>Fix Pagination jumper style error (#1372)</li><li>Fix Col style gets affected by invalid value bug (#1370)</li><li>Fix table remove tooltip when the component destroyed (#1245)</li><li>Update Scrollbar when scrollbar isn&#39;t shown, hide the bar (#1342)</li><li>Fix MessageBox remove default button text which caused i18n not working (#1357)</li><li>Fix Popper api consistency (#1354)</li><li>Fix dropdown/select/picker popper position error when has line-height (#1349)</li><li>Fix DatePicker modify the judgment logic of startDate and endDate (#1322)</li><li>Refactor Message and Notification component with VCA (#1387)</li></ul>", 1);

const _hoisted_269 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore updates ");

const _hoisted_270 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update Axure resource v2.1.0 (#1400)")], -1);

const _hoisted_271 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.30 ");

const _hoisted_272 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-25")], -1);

const _hoisted_273 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_274 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix dropdown/select/picker popper position error when has line-height (#1349)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix DatePicker modify the judgment logic of startDate and endDate (#1322)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix full bundle export bug (#1350)")], -1);

const _hoisted_275 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.29 ");

const _hoisted_276 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-25")], -1);

const _hoisted_277 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New feature ");

const _hoisted_278 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Add type 'contextmenu' trigger for Dropdown (#1286)")], -1);

const _hoisted_279 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_280 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix i18n bundle error (#1346)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Drawer error size prop to support Number (#1335)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix affix to change target.value to props.target in judgement (#1343)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix carousel don't update the indicator and items when data change(#1244)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix fixed table height error when no data(#1332)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table header checkbox can be triggered when disabled(#1333)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Repair table column width calculation abnormal (#1334)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix image incorrect custom object-fit ratio (#1338)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix color-picker can't select 8-digit hex color (#1323)")], -1);

const _hoisted_281 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.2-beta.28 ");

const _hoisted_282 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-20")], -1);

const _hoisted_283 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New feature ");

const _hoisted_284 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Support vue-i18n@next (#1306)")], -1);

const _hoisted_285 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_286 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Add tags and attributes completions for Vetur (#1303)</li><li>Fix table when the data changes, the table does not update the layout (#1315)</li><li>Fix table bug of table-column property watching (#1309)</li><li>Fix loading transition invalid (#1321)</li><li>Fix checkbox migrate error (#1293)</li><li>Fix notification style when its type set and title not set (#1288)</li><li>Fix tree node not render in lazy (#1298)</li><li>Fix slider can&#39;t drag in mobile (#1299)</li><li>Fix table column insertion disorder BUG</li><li>Fix table checkbox in table header style error (#1292)</li><li>Fix table migrate error (#1294)</li></ul>", 1);

const _hoisted_287 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.27 ");

const _hoisted_288 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-15")], -1);

const _hoisted_289 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_290 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix overlay overflowing issue (#1282)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix loading directive cannot dispatch for the second time (#1281)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Date picker bind attr to panel error (#1277)")], -1);

const _hoisted_291 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.26 ");

const _hoisted_292 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-14")], -1);

const _hoisted_293 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New feature ");

const _hoisted_294 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New component "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Affix"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (#1210)")])], -1);

const _hoisted_295 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_296 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix overlay event triggering issue (#1235)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix form add missing emits (#1272)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix switch id of input can't be empty (#1273)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table filter icon height of table header (#1233)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix col lacking props named tag (#1264)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix input-number increase/decrease button not work (#1259)")], -1);

const _hoisted_297 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.24 ");

const _hoisted_298 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-11")], -1);

const _hoisted_299 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_300 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix time picker scroll bug (#1227)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix tree node don't update after push new node into parent (#1231)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix loading error show when parent's display is not block (#1250)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix input-number behavior error (#1252)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix select emptyText error show (#1213)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix select to replace symbols to strings to avoid individual importing symbol bug (#1224)")], -1);

const _hoisted_301 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.23 ");

const _hoisted_302 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-07")], -1);

const _hoisted_303 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New feature ");

const _hoisted_304 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New component "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElEmpty"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (#1210)")])], -1);

const _hoisted_305 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_306 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix dropdown menu stop-popper-mouse-event (#1219)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix menu item group not working (#1217)")], -1);

const _hoisted_307 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore updates ");

const _hoisted_308 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Bumping dep versions (#1214)")], -1);

const _hoisted_309 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.22 ");

const _hoisted_310 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-06")], -1);

const _hoisted_311 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_312 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix menu item not expanding correctly (#1212)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix popover hijacking mouse event bug (#1201)")], -1);

const _hoisted_313 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Chore updates ");

const _hoisted_314 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update contain doc style (#1204)")], -1);

const _hoisted_315 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.21 ");

const _hoisted_316 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-05")], -1);

const _hoisted_317 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_318 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Separate ImageViewer component (#1199)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix YearPicker disabledDate bug (#1193)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Dialog render bug (#1144)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Tree deep watch data (#1188)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Popper transition lost bug (#1190)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Popover clickoutside not working bug (#1171)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Textarea line-height style bug (#1181)")], -1);

const _hoisted_319 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.19 ");

const _hoisted_320 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2021-01-02")], -1);

const _hoisted_321 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_322 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix WeekPicker should return the first day of the week (#1169)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Dialog close event (#1164)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Select prop type missing array (#1168)")], -1);

const _hoisted_323 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.18 ");

const _hoisted_324 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-31")], -1);

const _hoisted_325 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_326 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix timepicker keyevent bug (#1151)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Bumping vue version to 3.0.5 (#1159)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table when the data changes, the layout is not updated bug (#1059)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix Module @vue/test-utils has no exported members bug (#1139)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix scrollbar mouseup event bug (#1123)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix select props modelValue type error (#1158)")], -1);

const _hoisted_327 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.15 ");

const _hoisted_328 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-27")], -1);

const _hoisted_329 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_330 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix cascader panel bug (#1112)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix date-picker clear bug (#1114)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update build logic (#1118)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix notification style bug (#1122)")], -1);

const _hoisted_331 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.14 ");

const _hoisted_332 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-24")], -1);

const _hoisted_333 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_334 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Export textarea method resizeTextarea (#1032)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table column not deleted bug (#1062)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix scrollbar mouseup scroll bug (#1066)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix slider mouseup scroll bug (#1066)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix pagination v-model of page-size not work (#1079)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix app.use(comp.vue) type (#1067)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix the style of scrollbar (#1042)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix color-picker drag (#1084)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table z-index (#1078)")], -1);

const _hoisted_335 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.11 ");

const _hoisted_336 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-21")], -1);

const _hoisted_337 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New features ");

const _hoisted_338 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Add Skeleton compontent (#953)")], -1);

const _hoisted_339 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_340 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix input add placeholder (#1052)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix date-picker bind $attrs issue (#1069)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix popper use EmitType to replace string (#1053)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table border style (#1056)")], -1);

const _hoisted_341 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.10 ");

const _hoisted_342 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-18")], -1);

const _hoisted_343 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("New features ");

const _hoisted_344 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Add Space Component (#1002)")], -1);

const _hoisted_345 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_346 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix select content overflow in multiple select (#967)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table global config (#999)")], -1);

const _hoisted_347 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.9 ");

const _hoisted_348 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-16")], -1);

const _hoisted_349 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_350 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix menu collapse animation failure (#1003)</li><li>Fix timepicker / datepicker fragment error (#1009)</li><li>Update time select (#1014)</li><li>Fix dialog can&#39;t scroll if the content too large (#993)</li><li>Fix tree keyboard navigation bug (#995)</li><li>Fix table filter-panel style (#943)</li><li>Fix dialog header slot (#997)</li><li>Fix native scrollbar not hide when <code>native</code> is not true (#971)</li></ul>", 1);

const _hoisted_351 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.8 ");

const _hoisted_352 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-12")], -1);

const _hoisted_353 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_354 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix table style bug (#969)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix some components import type (#959)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix popover with pure should has border (#954)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix export locale (#950)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix menu open method error (#952)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix collapse not emitting change (#949)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix dialog bouncing (#955)")], -1);

const _hoisted_355 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.7 ");

const _hoisted_356 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-10")], -1);

const _hoisted_357 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_358 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix select multi mode rendering (#941)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix notification left empty divs (#913)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix upload bug (#927)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Add input placeholder type (#814)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix cascader-panel checked nodes not update when options change (#934)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Update col layout style (#875)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix drawer layout issue (#924)")], -1);

const _hoisted_359 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.6 ");

const _hoisted_360 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-09")], -1);

const _hoisted_361 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_362 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix error PropType (#906)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix tree right click event bug (#886)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix form-item props undefined bug (#888)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix autocomplete clearable doesn't work (#892)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix color-picker can not select color (#896)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix popper attr style fallthrough failed (#897)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix color-picker popper-class invalid (#883)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix tree document bug (#873)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix upload file slot not work bug (#868)")], -1);

const _hoisted_363 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.5 ");

const _hoisted_364 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-07")], -1);

const _hoisted_365 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_366 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Fix input non-emit events such as keyup not work (#866)</li><li>Fix Select.focus is undefined bug (#862)</li><li>Optimize useAttrs signature (#864)</li><li>Fix table ts error (#863)</li><li>Fix table avoiding the error of el-table-column rendering (#828)</li><li>Fix popper gets covered by dialog/drawer (#861)</li><li>Fix drawer implementation with hook (#817)</li><li>Fix exporting fix for volar (#849)</li><li>Fix cascader render error of radio label (#859)</li><li>Fix pagination known issues (#811)</li><li>Fix select error style of select-dropdown (#838)</li></ul>", 1);

const _hoisted_367 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.4 ");

const _hoisted_368 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-05")], -1);

const _hoisted_369 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_370 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul><li>Complete show-overflow-tooltip (#736)</li><li>Remove dropdown outline (#798)</li><li>Fix popover positioning (#796)</li><li>Fix on demand importing dialog lacking overlay css (#809)</li><li>Fix select value did not match issue (#808)</li><li>Fix select height error bug (#834)</li><li>Fix ts name error (#813)</li><li>Fix popper border .is-light style bug (#829)</li><li>Fix form-item auto width bug (#830)</li><li>Set popper appendToBody to true by default (#845)</li></ul>", 1);

const _hoisted_371 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.3 ");

const _hoisted_372 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-03")], -1);

const _hoisted_373 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_374 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix nested menu ref unwrap value problem (#775)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix alert style errors when no description (#782)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix dialog show-close is invalid (#773)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Destructing import from lodash (#788)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix popper transition with 'el-zoom-in-top' (#785)")], -1);

const _hoisted_375 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.2 ");

const _hoisted_376 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-02")], -1);

const _hoisted_377 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_378 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix navigation menu potential bug (#768)")], -1);

const _hoisted_379 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1.0.1-beta.1 ");

const _hoisted_380 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "2020-12-01")], -1);

const _hoisted_381 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Bug fixes ");

const _hoisted_382 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix router behavior (#745)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Add esm bundle (#577)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix date picker referencing issue (#757)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Fix pagination current-change event not emitting (#756)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fix "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "bodyStyle"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" bug (#754)")])], -1);

function md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "changelog",
    content: "Changelog",
    href: "#changelog",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#changelog"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-onezero",
    content: "1.1.0-beta.10",
    href: "#one-one-zero-beta-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-onezero"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features",
    content: "Features",
    href: "#features",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes",
    content: "Bug fixes",
    href: "#bug-fixes",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors",
    content: "Refactors",
    href: "#refactors",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-nine",
    content: "1.1.0-beta.9",
    href: "#one-one-zero-beta-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-nine"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-2",
    content: "Features",
    href: "#features-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-2"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-2",
    content: "Bug fixes",
    href: "#bug-fixes-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-2"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-2",
    content: "Refactors",
    href: "#refactors-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-2"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-eight",
    content: "1.1.0-beta.8",
    href: "#one-one-zero-beta-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-eight"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-3",
    content: "Features",
    href: "#features-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-3"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-3",
    content: "Bug fixes",
    href: "#bug-fixes-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-3"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-3",
    content: "Refactors",
    href: "#refactors-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-3"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-seven",
    content: "1.1.0-beta.7",
    href: "#one-one-zero-beta-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-seven"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-4",
    content: "Bug fixes",
    href: "#bug-fixes-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-4"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-six",
    content: "1.1.0-beta.6",
    href: "#one-one-zero-beta-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-six"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-5",
    content: "Bug fixes",
    href: "#bug-fixes-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-5"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-five",
    content: "1.1.0-beta.5",
    href: "#one-one-zero-beta-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-five"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-4",
    content: "Features",
    href: "#features-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-4"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-6",
    content: "Bug fixes",
    href: "#bug-fixes-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-6"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-four",
    content: "1.1.0-beta.4",
    href: "#one-one-zero-beta-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-four"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-7",
    content: "Bug fixes",
    href: "#bug-fixes-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-7"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-4",
    content: "Refactors",
    href: "#refactors-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-4"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-three",
    content: "1.1.0-beta.3",
    href: "#one-one-zero-beta-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-three"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-8",
    content: "Bug fixes",
    href: "#bug-fixes-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-8"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-two",
    content: "1.1.0-beta.2",
    href: "#one-one-zero-beta-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-two"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-9",
    content: "Bug fixes",
    href: "#bug-fixes-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-9"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-one-zero-beta-one",
    content: "1.1.0-beta.1",
    href: "#one-one-zero-beta-one",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-one-zero-beta-one"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "breaking-changes",
    content: "Breaking changes:",
    href: "#breaking-changes",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#breaking-changes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [Object(vue_esm_browser_prod["createElementVNode"])("li", null, [_hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/discussions/3020"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59]),
    _: 1
  })])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-5",
    content: "Features",
    href: "#features-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-5"
    })]),
    _: 1
  }), _hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-10",
    content: "Bug fixes",
    href: "#bug-fixes-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_62, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-10"
    })]),
    _: 1
  }), _hoisted_63, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-5",
    content: "Refactors",
    href: "#refactors-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_64, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-5"
    })]),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sevenone",
    content: "1.0.2-beta.71",
    href: "#one-zero-two-beta-sevenone",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_66, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sevenone"
    })]),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-6",
    content: "Features",
    href: "#features-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-6"
    })]),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-11",
    content: "Bug fixes",
    href: "#bug-fixes-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_70, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-11"
    })]),
    _: 1
  }), _hoisted_71, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-6",
    content: "Refactors",
    href: "#refactors-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_72, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-6"
    })]),
    _: 1
  }), _hoisted_73, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sevenzero",
    content: "1.0.2-beta.70",
    href: "#one-zero-two-beta-sevenzero",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_74, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sevenzero"
    })]),
    _: 1
  }), _hoisted_75, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-12",
    content: "Bug fixes",
    href: "#bug-fixes-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_76, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-12"
    })]),
    _: 1
  }), _hoisted_77, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixnine",
    content: "1.0.2-beta.69",
    href: "#one-zero-two-beta-sixnine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_78, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixnine"
    })]),
    _: 1
  }), _hoisted_79, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-13",
    content: "Bug fixes",
    href: "#bug-fixes-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_80, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-13"
    })]),
    _: 1
  }), _hoisted_81, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixeight",
    content: "1.0.2-beta.68",
    href: "#one-zero-two-beta-sixeight",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_82, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixeight"
    })]),
    _: 1
  }), _hoisted_83, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-14",
    content: "Bug fixes",
    href: "#bug-fixes-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_84, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-14"
    })]),
    _: 1
  }), _hoisted_85, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixseven",
    content: "1.0.2-beta.67",
    href: "#one-zero-two-beta-sixseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_86, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixseven"
    })]),
    _: 1
  }), _hoisted_87, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-15",
    content: "Bug fixes",
    href: "#bug-fixes-15",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_88, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-15"
    })]),
    _: 1
  }), _hoisted_89, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-7",
    content: "Refactors",
    href: "#refactors-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_90, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-7"
    })]),
    _: 1
  }), _hoisted_91, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixsix",
    content: "1.0.2-beta.66",
    href: "#one-zero-two-beta-sixsix",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_92, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixsix"
    })]),
    _: 1
  }), _hoisted_93, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-7",
    content: "Features",
    href: "#features-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_94, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-7"
    })]),
    _: 1
  }), _hoisted_95, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-16",
    content: "Bug fixes",
    href: "#bug-fixes-16",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_96, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-16"
    })]),
    _: 1
  }), _hoisted_97, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-8",
    content: "Refactors",
    href: "#refactors-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_98, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-8"
    })]),
    _: 1
  }), _hoisted_99, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixfive",
    content: "1.0.2-beta.65",
    href: "#one-zero-two-beta-sixfive",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_100, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixfive"
    })]),
    _: 1
  }), _hoisted_101, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-17",
    content: "Bug fixes",
    href: "#bug-fixes-17",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_102, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-17"
    })]),
    _: 1
  }), _hoisted_103, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore",
    content: "Chore",
    href: "#chore",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_104, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore"
    })]),
    _: 1
  }), _hoisted_105, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixfour",
    content: "1.0.2-beta.64",
    href: "#one-zero-two-beta-sixfour",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_106, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixfour"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-18",
    content: "Bug fixes",
    href: "#bug-fixes-18",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_107, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-18"
    })]),
    _: 1
  }), _hoisted_108, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-9",
    content: "Refactors",
    href: "#refactors-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_109, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-9"
    })]),
    _: 1
  }), _hoisted_110, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixthree",
    content: "1.0.2-beta.63",
    href: "#one-zero-two-beta-sixthree",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_111, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixthree"
    })]),
    _: 1
  }), _hoisted_112, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactor",
    content: "Refactor",
    href: "#refactor",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_113, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactor"
    })]),
    _: 1
  }), _hoisted_114, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-19",
    content: "Bug fixes",
    href: "#bug-fixes-19",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_115, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-19"
    })]),
    _: 1
  }), _hoisted_116, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixtwo",
    content: "1.0.2-beta.62",
    href: "#one-zero-two-beta-sixtwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_117, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixtwo"
    })]),
    _: 1
  }), _hoisted_118, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-20",
    content: "Bug fixes",
    href: "#bug-fixes-20",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_119, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-20"
    })]),
    _: 1
  }), _hoisted_120, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixone",
    content: "1.0.2-beta.61",
    href: "#one-zero-two-beta-sixone",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_121, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixone"
    })]),
    _: 1
  }), _hoisted_122, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-21",
    content: "Bug fixes",
    href: "#bug-fixes-21",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_123, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-21"
    })]),
    _: 1
  }), _hoisted_124, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-sixzero",
    content: "1.0.2-beta.60",
    href: "#one-zero-two-beta-sixzero",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_125, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-sixzero"
    })]),
    _: 1
  }), _hoisted_126, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-22",
    content: "Bug fixes",
    href: "#bug-fixes-22",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_127, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-22"
    })]),
    _: 1
  }), _hoisted_128, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fivenine",
    content: "1.0.2-beta.59",
    href: "#one-zero-two-beta-fivenine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_129, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fivenine"
    })]),
    _: 1
  }), _hoisted_130, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "breaking-change",
    content: "Breaking change",
    href: "#breaking-change",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_131, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#breaking-change"
    })]),
    _: 1
  }), _hoisted_132, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-23",
    content: "Bug fixes",
    href: "#bug-fixes-23",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_133, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-23"
    })]),
    _: 1
  }), _hoisted_134, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-2",
    content: "Chore",
    href: "#chore-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_135, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-2"
    })]),
    _: 1
  }), _hoisted_136, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactors-10",
    content: "Refactors",
    href: "#refactors-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_137, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors-10"
    })]),
    _: 1
  }), _hoisted_138, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fiveeight",
    content: "1.0.2-beta.58",
    href: "#one-zero-two-beta-fiveeight",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_139, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fiveeight"
    })]),
    _: 1
  }), _hoisted_140, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-24",
    content: "Bug fixes",
    href: "#bug-fixes-24",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_141, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-24"
    })]),
    _: 1
  }), _hoisted_142, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fiveseven",
    content: "1.0.2-beta.57",
    href: "#one-zero-two-beta-fiveseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_143, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fiveseven"
    })]),
    _: 1
  }), _hoisted_144, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-25",
    content: "Bug fixes",
    href: "#bug-fixes-25",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_145, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-25"
    })]),
    _: 1
  }), _hoisted_146, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fivesix",
    content: "1.0.2-beta.56",
    href: "#one-zero-two-beta-fivesix",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_147, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fivesix"
    })]),
    _: 1
  }), _hoisted_148, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-8",
    content: "Features",
    href: "#features-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_149, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-8"
    })]),
    _: 1
  }), _hoisted_150, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "refactor-2",
    content: "Refactor",
    href: "#refactor-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_151, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactor-2"
    })]),
    _: 1
  }), _hoisted_152, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-26",
    content: "Bug fixes",
    href: "#bug-fixes-26",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_153, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-26"
    })]),
    _: 1
  }), _hoisted_154, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fivefive",
    content: "1.0.2-beta.55",
    href: "#one-zero-two-beta-fivefive",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_155, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fivefive"
    })]),
    _: 1
  }), _hoisted_156, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-27",
    content: "Bug fixes",
    href: "#bug-fixes-27",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_157, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-27"
    })]),
    _: 1
  }), _hoisted_158, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fivefour",
    content: "1.0.2-beta.54",
    href: "#one-zero-two-beta-fivefour",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_159, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fivefour"
    })]),
    _: 1
  }), _hoisted_160, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-28",
    content: "Bug fixes",
    href: "#bug-fixes-28",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_161, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-28"
    })]),
    _: 1
  }), _hoisted_162, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fivethree",
    content: "1.0.2-beta.53",
    href: "#one-zero-two-beta-fivethree",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_163, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fivethree"
    })]),
    _: 1
  }), _hoisted_164, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-29",
    content: "Bug fixes",
    href: "#bug-fixes-29",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_165, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-29"
    })]),
    _: 1
  }), _hoisted_166, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fivetwo",
    content: "1.0.2-beta.52",
    href: "#one-zero-two-beta-fivetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_167, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fivetwo"
    })]),
    _: 1
  }), _hoisted_168, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-30",
    content: "Bug fixes",
    href: "#bug-fixes-30",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_169, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-30"
    })]),
    _: 1
  }), _hoisted_170, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fournine",
    content: "1.0.2-beta.49",
    href: "#one-zero-two-beta-fournine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_171, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fournine"
    })]),
    _: 1
  }), _hoisted_172, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-31",
    content: "Bug fixes",
    href: "#bug-fixes-31",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_173, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-31"
    })]),
    _: 1
  }), _hoisted_174, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fourseven",
    content: "1.0.2-beta.47",
    href: "#one-zero-two-beta-fourseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_175, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fourseven"
    })]),
    _: 1
  }), _hoisted_176, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-9",
    content: "Features",
    href: "#features-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_177, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-9"
    })]),
    _: 1
  }), _hoisted_178, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-32",
    content: "Bug fixes",
    href: "#bug-fixes-32",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_179, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-32"
    })]),
    _: 1
  }), _hoisted_180, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-3",
    content: "Chore",
    href: "#chore-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_181, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-3"
    })]),
    _: 1
  }), _hoisted_182, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-foursix",
    content: "1.0.2-beta.46",
    href: "#one-zero-two-beta-foursix",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_183, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-foursix"
    })]),
    _: 1
  }), _hoisted_184, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-10",
    content: "Features",
    href: "#features-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_185, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-10"
    })]),
    _: 1
  }), _hoisted_186, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bugfixes",
    content: "Bugfixes",
    href: "#bugfixes",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_187, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bugfixes"
    })]),
    _: 1
  }), _hoisted_188, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-4",
    content: "Chore",
    href: "#chore-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_189, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-4"
    })]),
    _: 1
  }), _hoisted_190, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fourfive",
    content: "1.0.2-beta.45",
    href: "#one-zero-two-beta-fourfive",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_191, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fourfive"
    })]),
    _: 1
  }), _hoisted_192, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-11",
    content: "Features",
    href: "#features-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_193, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-11"
    })]),
    _: 1
  }), _hoisted_194, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bugfixes-2",
    content: "Bugfixes",
    href: "#bugfixes-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_195, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bugfixes-2"
    })]),
    _: 1
  }), _hoisted_196, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-5",
    content: "Chore",
    href: "#chore-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_197, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-5"
    })]),
    _: 1
  }), _hoisted_198, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fourfour",
    content: "1.0.2-beta.44",
    href: "#one-zero-two-beta-fourfour",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_199, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fourfour"
    })]),
    _: 1
  }), _hoisted_200, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-33",
    content: "Bug fixes",
    href: "#bug-fixes-33",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_201, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-33"
    })]),
    _: 1
  }), _hoisted_202, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fourthree",
    content: "1.0.2-beta.43",
    href: "#one-zero-two-beta-fourthree",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_203, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fourthree"
    })]),
    _: 1
  }), _hoisted_204, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-34",
    content: "Bug fixes",
    href: "#bug-fixes-34",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_205, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-34"
    })]),
    _: 1
  }), _hoisted_206, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fourtwo",
    content: "1.0.2-beta.42",
    href: "#one-zero-two-beta-fourtwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_207, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fourtwo"
    })]),
    _: 1
  }), _hoisted_208, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-35",
    content: "Bug fixes",
    href: "#bug-fixes-35",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_209, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-35"
    })]),
    _: 1
  }), _hoisted_210, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-6",
    content: "Chore",
    href: "#chore-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_211, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-6"
    })]),
    _: 1
  }), _hoisted_212, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fourone",
    content: "1.0.2-beta.41",
    href: "#one-zero-two-beta-fourone",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_213, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fourone"
    })]),
    _: 1
  }), _hoisted_214, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-12",
    content: "Features",
    href: "#features-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_215, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-12"
    })]),
    _: 1
  }), _hoisted_216, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-36",
    content: "Bug fixes",
    href: "#bug-fixes-36",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_217, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-36"
    })]),
    _: 1
  }), _hoisted_218, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-fourzero",
    content: "1.0.2-beta.40",
    href: "#one-zero-two-beta-fourzero",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_219, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-fourzero"
    })]),
    _: 1
  }), _hoisted_220, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-37",
    content: "Bug fixes",
    href: "#bug-fixes-37",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_221, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-37"
    })]),
    _: 1
  }), _hoisted_222, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-13",
    content: "Features",
    href: "#features-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_223, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-13"
    })]),
    _: 1
  }), _hoisted_224, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-updares",
    content: "Chore updares",
    href: "#chore-updares",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_225, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-updares"
    })]),
    _: 1
  }), _hoisted_226, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threenine",
    content: "1.0.2-beta.39",
    href: "#one-zero-two-beta-threenine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_227, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threenine"
    })]),
    _: 1
  }), _hoisted_228, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-38",
    content: "Bug fixes",
    href: "#bug-fixes-38",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_229, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-38"
    })]),
    _: 1
  }), _hoisted_230, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threeeight",
    content: "1.0.2-beta.38",
    href: "#one-zero-two-beta-threeeight",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_231, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threeeight"
    })]),
    _: 1
  }), _hoisted_232, _hoisted_233, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threeseven",
    content: "1.0.2-beta.37",
    href: "#one-zero-two-beta-threeseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_234, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threeseven"
    })]),
    _: 1
  }), _hoisted_235, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-39",
    content: "Bug fixes",
    href: "#bug-fixes-39",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_236, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-39"
    })]),
    _: 1
  }), _hoisted_237, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threesix",
    content: "1.0.2-beta.36",
    href: "#one-zero-two-beta-threesix",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_238, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threesix"
    })]),
    _: 1
  }), _hoisted_239, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-40",
    content: "Bug fixes",
    href: "#bug-fixes-40",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_240, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-40"
    })]),
    _: 1
  }), _hoisted_241, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-14",
    content: "Features",
    href: "#features-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_242, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-14"
    })]),
    _: 1
  }), _hoisted_243, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-updates",
    content: "Chore updates",
    href: "#chore-updates",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_244, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-updates"
    })]),
    _: 1
  }), _hoisted_245, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threefive",
    content: "1.0.2-beta.35",
    href: "#one-zero-two-beta-threefive",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_246, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threefive"
    })]),
    _: 1
  }), _hoisted_247, _hoisted_248, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threefour",
    content: "1.0.2-beta.34",
    href: "#one-zero-two-beta-threefour",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_249, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threefour"
    })]),
    _: 1
  }), _hoisted_250, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-41",
    content: "Bug fixes",
    href: "#bug-fixes-41",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_251, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-41"
    })]),
    _: 1
  }), _hoisted_252, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threethree",
    content: "1.0.2-beta.33",
    href: "#one-zero-two-beta-threethree",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_253, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threethree"
    })]),
    _: 1
  }), _hoisted_254, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-42",
    content: "Bug fixes",
    href: "#bug-fixes-42",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_255, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-42"
    })]),
    _: 1
  }), _hoisted_256, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threetwo",
    content: "1.0.2-beta.32",
    href: "#one-zero-two-beta-threetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_257, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threetwo"
    })]),
    _: 1
  }), _hoisted_258, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-43",
    content: "Bug fixes",
    href: "#bug-fixes-43",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_259, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-43"
    })]),
    _: 1
  }), _hoisted_260, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "features-15",
    content: "Features",
    href: "#features-15",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_261, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#features-15"
    })]),
    _: 1
  }), _hoisted_262, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-updates-2",
    content: "Chore updates",
    href: "#chore-updates-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_263, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-updates-2"
    })]),
    _: 1
  }), _hoisted_264, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threeone",
    content: "1.0.2-beta.31",
    href: "#one-zero-two-beta-threeone",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_265, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threeone"
    })]),
    _: 1
  }), _hoisted_266, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-44",
    content: "Bug fixes",
    href: "#bug-fixes-44",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_267, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-44"
    })]),
    _: 1
  }), _hoisted_268, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-updates-3",
    content: "Chore updates",
    href: "#chore-updates-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_269, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-updates-3"
    })]),
    _: 1
  }), _hoisted_270, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-threezero",
    content: "1.0.2-beta.30",
    href: "#one-zero-two-beta-threezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_271, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-threezero"
    })]),
    _: 1
  }), _hoisted_272, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-45",
    content: "Bug fixes",
    href: "#bug-fixes-45",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_273, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-45"
    })]),
    _: 1
  }), _hoisted_274, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-twonine",
    content: "1.0.2-beta.29",
    href: "#one-zero-two-beta-twonine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_275, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-twonine"
    })]),
    _: 1
  }), _hoisted_276, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "new-feature",
    content: "New feature",
    href: "#new-feature",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_277, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature"
    })]),
    _: 1
  }), _hoisted_278, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-46",
    content: "Bug fixes",
    href: "#bug-fixes-46",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_279, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-46"
    })]),
    _: 1
  }), _hoisted_280, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-two-beta-twoeight",
    content: "1.0.2-beta.28",
    href: "#one-zero-two-beta-twoeight",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_281, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-two-beta-twoeight"
    })]),
    _: 1
  }), _hoisted_282, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "new-feature-2",
    content: "New feature",
    href: "#new-feature-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_283, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-2"
    })]),
    _: 1
  }), _hoisted_284, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-47",
    content: "Bug fixes",
    href: "#bug-fixes-47",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_285, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-47"
    })]),
    _: 1
  }), _hoisted_286, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-twoseven",
    content: "1.0.1-beta.27",
    href: "#one-zero-one-beta-twoseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_287, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-twoseven"
    })]),
    _: 1
  }), _hoisted_288, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-48",
    content: "Bug fixes",
    href: "#bug-fixes-48",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_289, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-48"
    })]),
    _: 1
  }), _hoisted_290, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-twosix",
    content: "1.0.1-beta.26",
    href: "#one-zero-one-beta-twosix",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_291, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-twosix"
    })]),
    _: 1
  }), _hoisted_292, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "new-feature-3",
    content: "New feature",
    href: "#new-feature-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_293, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-3"
    })]),
    _: 1
  }), _hoisted_294, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-49",
    content: "Bug fixes",
    href: "#bug-fixes-49",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_295, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-49"
    })]),
    _: 1
  }), _hoisted_296, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-twofour",
    content: "1.0.1-beta.24",
    href: "#one-zero-one-beta-twofour",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_297, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-twofour"
    })]),
    _: 1
  }), _hoisted_298, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-50",
    content: "Bug fixes",
    href: "#bug-fixes-50",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_299, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-50"
    })]),
    _: 1
  }), _hoisted_300, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-twothree",
    content: "1.0.1-beta.23",
    href: "#one-zero-one-beta-twothree",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_301, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-twothree"
    })]),
    _: 1
  }), _hoisted_302, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "new-feature-4",
    content: "New feature",
    href: "#new-feature-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_303, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-4"
    })]),
    _: 1
  }), _hoisted_304, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-51",
    content: "Bug fixes",
    href: "#bug-fixes-51",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_305, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-51"
    })]),
    _: 1
  }), _hoisted_306, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-updates-4",
    content: "Chore updates",
    href: "#chore-updates-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_307, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-updates-4"
    })]),
    _: 1
  }), _hoisted_308, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-twotwo",
    content: "1.0.1-beta.22",
    href: "#one-zero-one-beta-twotwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_309, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-twotwo"
    })]),
    _: 1
  }), _hoisted_310, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-52",
    content: "Bug fixes",
    href: "#bug-fixes-52",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_311, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-52"
    })]),
    _: 1
  }), _hoisted_312, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chore-updates-5",
    content: "Chore updates",
    href: "#chore-updates-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_313, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-updates-5"
    })]),
    _: 1
  }), _hoisted_314, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-twoone",
    content: "1.0.1-beta.21",
    href: "#one-zero-one-beta-twoone",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_315, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-twoone"
    })]),
    _: 1
  }), _hoisted_316, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-53",
    content: "Bug fixes",
    href: "#bug-fixes-53",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_317, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-53"
    })]),
    _: 1
  }), _hoisted_318, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-onenine",
    content: "1.0.1-beta.19",
    href: "#one-zero-one-beta-onenine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_319, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-onenine"
    })]),
    _: 1
  }), _hoisted_320, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-54",
    content: "Bug fixes",
    href: "#bug-fixes-54",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_321, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-54"
    })]),
    _: 1
  }), _hoisted_322, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-oneeight",
    content: "1.0.1-beta.18",
    href: "#one-zero-one-beta-oneeight",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_323, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-oneeight"
    })]),
    _: 1
  }), _hoisted_324, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-55",
    content: "Bug fixes",
    href: "#bug-fixes-55",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_325, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-55"
    })]),
    _: 1
  }), _hoisted_326, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-onefive",
    content: "1.0.1-beta.15",
    href: "#one-zero-one-beta-onefive",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_327, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-onefive"
    })]),
    _: 1
  }), _hoisted_328, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-56",
    content: "Bug fixes",
    href: "#bug-fixes-56",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_329, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-56"
    })]),
    _: 1
  }), _hoisted_330, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-onefour",
    content: "1.0.1-beta.14",
    href: "#one-zero-one-beta-onefour",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_331, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-onefour"
    })]),
    _: 1
  }), _hoisted_332, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-57",
    content: "Bug fixes",
    href: "#bug-fixes-57",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_333, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-57"
    })]),
    _: 1
  }), _hoisted_334, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-oneone",
    content: "1.0.1-beta.11",
    href: "#one-zero-one-beta-oneone",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_335, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-oneone"
    })]),
    _: 1
  }), _hoisted_336, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "new-features",
    content: "New features",
    href: "#new-features",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_337, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-features"
    })]),
    _: 1
  }), _hoisted_338, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-58",
    content: "Bug fixes",
    href: "#bug-fixes-58",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_339, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-58"
    })]),
    _: 1
  }), _hoisted_340, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-onezero",
    content: "1.0.1-beta.10",
    href: "#one-zero-one-beta-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_341, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-onezero"
    })]),
    _: 1
  }), _hoisted_342, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "new-features-2",
    content: "New features",
    href: "#new-features-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_343, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-features-2"
    })]),
    _: 1
  }), _hoisted_344, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-59",
    content: "Bug fixes",
    href: "#bug-fixes-59",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_345, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-59"
    })]),
    _: 1
  }), _hoisted_346, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-nine",
    content: "1.0.1-beta.9",
    href: "#one-zero-one-beta-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_347, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-nine"
    })]),
    _: 1
  }), _hoisted_348, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-60",
    content: "Bug fixes",
    href: "#bug-fixes-60",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_349, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-60"
    })]),
    _: 1
  }), _hoisted_350, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-eight",
    content: "1.0.1-beta.8",
    href: "#one-zero-one-beta-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_351, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-eight"
    })]),
    _: 1
  }), _hoisted_352, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-61",
    content: "Bug fixes",
    href: "#bug-fixes-61",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_353, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-61"
    })]),
    _: 1
  }), _hoisted_354, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-seven",
    content: "1.0.1-beta.7",
    href: "#one-zero-one-beta-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_355, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-seven"
    })]),
    _: 1
  }), _hoisted_356, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-62",
    content: "Bug fixes",
    href: "#bug-fixes-62",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_357, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-62"
    })]),
    _: 1
  }), _hoisted_358, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-six",
    content: "1.0.1-beta.6",
    href: "#one-zero-one-beta-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_359, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-six"
    })]),
    _: 1
  }), _hoisted_360, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-63",
    content: "Bug fixes",
    href: "#bug-fixes-63",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_361, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-63"
    })]),
    _: 1
  }), _hoisted_362, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-five",
    content: "1.0.1-beta.5",
    href: "#one-zero-one-beta-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_363, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-five"
    })]),
    _: 1
  }), _hoisted_364, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-64",
    content: "Bug fixes",
    href: "#bug-fixes-64",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_365, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-64"
    })]),
    _: 1
  }), _hoisted_366, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-four",
    content: "1.0.1-beta.4",
    href: "#one-zero-one-beta-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_367, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-four"
    })]),
    _: 1
  }), _hoisted_368, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-65",
    content: "Bug fixes",
    href: "#bug-fixes-65",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_369, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-65"
    })]),
    _: 1
  }), _hoisted_370, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-three",
    content: "1.0.1-beta.3",
    href: "#one-zero-one-beta-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_371, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-three"
    })]),
    _: 1
  }), _hoisted_372, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-66",
    content: "Bug fixes",
    href: "#bug-fixes-66",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_373, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-66"
    })]),
    _: 1
  }), _hoisted_374, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-two",
    content: "1.0.1-beta.2",
    href: "#one-zero-one-beta-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_375, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-two"
    })]),
    _: 1
  }), _hoisted_376, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-67",
    content: "Bug fixes",
    href: "#bug-fixes-67",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_377, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-67"
    })]),
    _: 1
  }), _hoisted_378, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-zero-one-beta-one",
    content: "1.0.1-beta.1",
    href: "#one-zero-one-beta-one",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_379, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-one-beta-one"
    })]),
    _: 1
  }), _hoisted_380, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bug-fixes-68",
    content: "Bug fixes",
    href: "#bug-fixes-68",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_381, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-68"
    })]),
    _: 1
  }), _hoisted_382, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./CHANGELOG.en-US.md?vue&type=template&id=39cf5f96

// CONCATENATED MODULE: ./CHANGELOG.en-US.md

const script = {}
script.render = md_loader_CHANGELOG_en_USvue_type_template_id_39cf5f96_render

/* harmony default export */ var CHANGELOG_en_US = (script);
// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(1186);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--13-0!./website/pages/changelog.vue?vue&type=script&lang=js
// import ChangeLogCn from '../../CHANGELOG.zh-CN.md'
// import ChangeLogEs from '../../CHANGELOG.es.md'
 // import ChangeLogFr from '../../CHANGELOG.fr-FR.md'
// import ChangeLogJp from '../../CHANGELOG.jp.md'


/* harmony default export */ var changelogvue_type_script_lang_js = ({
  components: {
    // ChangeLogCn,
    // ChangeLogEs,
    ChangeLogEn: CHANGELOG_en_US // ChangeLogFr,
    // ChangeLogJp,

  },

  data() {
    return {
      lang: this.$route.meta.lang
    };
  },

  computed: {
    langConfig() {
      return page.filter(config => config.lang === this.lang)[0].pages.changelog;
    }

  },

  mounted() {
    const changeLog = this.$refs.changeLog;
    const changeLogNodes = changeLog.$el.children;
    let a = changeLogNodes[1].querySelector('a');
    a && a.remove();
    let release = changeLogNodes[1].textContent.trim();
    let fragments = `<li><h3><a href="https://github.com/element-plus/element-plus/releases/tag/${release}" target="_blank">${release}</a></h3>`;

    for (let len = changeLogNodes.length, i = 2; i < len; i++) {
      let node = changeLogNodes[i];
      a = changeLogNodes[i].querySelector('a');
      a && a.getAttribute('class') === 'header-anchor' && a.remove();

      if (node.tagName !== 'H3') {
        fragments += changeLogNodes[i].outerHTML;
      } else {
        // removing ¶ from the texts.
        release = changeLogNodes[i].textContent.slice(2).trim();
        fragments += `</li><li><h3><a href="https://github.com/element-plus/element-plus/releases/tag/${release}" target="_blank">${release}</a></h3>`;
      }
    }

    fragments = fragments.replace(/#(\d+)/g, '<a href="https://github.com/element-plus/element-plus/issues/$1" target="_blank">#$1</a>');
    fragments = fragments.replace(/@([\w-]+)/g, '<a href="https://github.com/$1" target="_blank">@$1</a>');
    this.$refs.timeline.innerHTML = `${fragments}</li>`;
    changeLog.$el.remove();
  }

});
// CONCATENATED MODULE: ./website/pages/changelog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/changelog.vue?vue&type=style&index=0&id=6bc48bf0&lang=scss
var changelogvue_type_style_index_0_id_6bc48bf0_lang_scss = __webpack_require__(1195);

// CONCATENATED MODULE: ./website/pages/changelog.vue





changelogvue_type_script_lang_js.render = render

/* harmony default export */ var changelog = __webpack_exports__["default"] = (changelogvue_type_script_lang_js);

/***/ })

}]);