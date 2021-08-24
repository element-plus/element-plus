(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/i18n.md?vue&type=template&id=280cef22

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Internationalization");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ElementPlus components are using English "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "by default"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", if you wish you use other languages, you can get you answer by keep reading.")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Global configuration ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>ElementPlus provides global configurations</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhCn <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/es/locale/lang/zh-cn&#39;</span>\n\napp.use(ElementPlus, {\n  <span class=\"hljs-attr\">locale</span>: zhCn,\n})\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ConfigProvider ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ElementPlus also provides a Vue component ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ConfigProvider");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" for globally configuring locale and other settings.");

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-config-provider</span> <span class=\"hljs-attr\">:locale</span>=<span class=\"hljs-string\">&quot;locale&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">app</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElConfigProvider } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n<span class=\"hljs-keyword\">import</span> zhCn <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n  <span class=\"hljs-attr\">components</span>: {\n    ElConfigProvider,\n  },\n  <span class=\"hljs-function\"><span class=\"hljs-title\">setup</span>(<span class=\"hljs-params\"></span>)</span> {\n    <span class=\"hljs-keyword\">return</span> {\n      <span class=\"hljs-attr\">locale</span>: zhCn,\n    }\n  },\n})\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Full documentation refer to: ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ConfigProvider");

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Supported Language List");

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<ul class=\"language-list\"><li>Simplified Chinese (zh-cn)</li><li>English (en)</li><li>German (de)</li><li>Portuguese (pt)</li><li>Spanish (es)</li><li>Danish (da)</li><li>French (fr)</li><li>Norwegian (nb-NO)</li><li>Traditional Chinese (zh-tw)</li><li>Italian (it)</li><li>Korean (ko)</li><li>Japanese (ja)</li><li>Dutch (nl)</li><li>Vietnamese (vi)</li><li>Russian (ru)</li><li>Turkish (tr)</li><li>Brazilian Portuguese (pt-br)</li><li>Farsi (fa)</li><li>Thai (th)</li><li>Indonesian (id)</li><li>Bulgarian (bg)</li><li>Polish (pl)</li><li>Finnish (fi)</li><li>Swedish (sv)</li><li>Greek (el)</li><li>Slovak (sk)</li><li>Catalunya (ca)</li><li>Czech (cs)</li><li>Ukrainian (uk)</li><li>Turkmen (tk)</li><li>Tamil (ta)</li><li>Latvian (lv)</li><li>Afrikaans (af)</li><li>Estonian (et)</li><li>Slovenian (sl)</li><li>Arabic (ar)</li><li>Hebrew (he)</li><li>Lithuanian (lt)</li><li>Mongolian (mn)</li><li>Kazakh (kk)</li><li>Hungarian (hu)</li><li>Romanian (ro)</li><li>Kurdish (ku)</li><li>Uighur (ug-cn)</li><li>Khmer (km)</li><li>Serbian (sr)</li><li>Basque (eu)</li><li>Kyrgyz (ky)</li><li>Armenian (hy-am)</li><li>Croatian (hr)</li><li>Esperanto (eo)</li></ul>", 1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("If you need any other languages, ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("PR");

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" is always welcomed, you only need to add a language file at ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("here");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("FAQs ");

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("If I want to replace the default language pack to reduce the size, how do I do? ");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("When the default language of your app is not ");

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "English", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", you will be going to need to import another language file, which will increase the bundle size since you have both ");

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "English", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Your desired language", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" bundled, you can use the plugin ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("NormalModuleReplacementPlugin");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" provided by ");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("webpack");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to replace the default language file, so that you will only get ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "1", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" language file bundled. Add the code below into your ");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "webpack.config.js", -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to get it work.");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<blockquote><p>webpack.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\">{\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-keyword\">new</span> webpack.NormalModuleReplacementPlugin(\n      <span class=\"hljs-regexp\">/element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/</span>,\n      <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>,\n    ),\n  ]\n}\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

function render(_ctx, _cache) {
  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    content: "Internationalization",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "global-configuration",
    content: "Global configuration",
    href: "#global-configuration",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#global-configuration"
      })];
    }),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "configprovider",
    content: "ConfigProvider",
    href: "#configprovider",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#configprovider"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "/#/zh-CN/component/config-provider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10]), _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "/#/zh-CN/component/config-provider"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  })]), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  })]), _hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/pulls"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "faqs",
    content: "FAQs",
    href: "#faqs",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#faqs"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "if-i-want-to-replace-the-default-language-pack-to-reduce-the-size-how-do-i-do",
    content: "If I want to replace the default language pack to reduce the size, how do I do?",
    href: "#if-i-want-to-replace-the-default-language-pack-to-reduce-the-size-how-do-i-do",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#if-i-want-to-replace-the-default-language-pack-to-reduce-the-size-how-do-i-do"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://webpack.js.org/plugins/normal-module-replacement-plugin/#root"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://webpack.js.org"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37]), _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/i18n.md?vue&type=template&id=280cef22

// CONCATENATED MODULE: ./website/docs/es/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);