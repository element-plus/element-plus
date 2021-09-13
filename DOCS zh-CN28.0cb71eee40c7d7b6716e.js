(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[310],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/i18n.md?vue&type=template&id=6cdc37b8

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("国际化");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ElementPlus 组件内部"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "默认"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用英语，若希望使用其他语言，可以参考下面的方案。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("全局配置 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>ElementPlus 提供了全局配置国际化的设置。</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhCn <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/es/locale/lang/zh-cn&#39;</span>\n\napp.use(ElementPlus, {\n  <span class=\"hljs-attr\">locale</span>: zhCn,\n})\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ConfigProvider ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ElementPlus 还提供了一个 Vue 组件 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ConfigProvider");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 用于全局配置国际化的设置。");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-config-provider</span> <span class=\"hljs-attr\">:locale</span>=<span class=\"hljs-string\">&quot;locale&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">app</span> /&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { ElConfigProvider } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n  <span class=\"hljs-keyword\">import</span> zhCn <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n    <span class=\"hljs-attr\">components</span>: {\n      ElConfigProvider,\n    },\n    <span class=\"hljs-function\"><span class=\"hljs-title\">setup</span>(<span class=\"hljs-params\"></span>)</span> {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">locale</span>: zhCn,\n      }\n    },\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("详细配置见：");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ConfigProvider");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CDN 用法 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>如果你是使用 CDN 引入的 ElementPlus，那你将需要这样做，以 unpkg 举例</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/locale/zh-cn&quot;</span>&gt;</span><span class=\"handlebars\"><span class=\"xml\">\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span>\n  app.use(ElementPlus, {\n    locale: ElementPlus.lang.zhCn\n  })\n</span></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("支持的语言列表");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<ul class=\"language-list\"><li>简体中文（zh-cn）</li><li>英语（en）</li><li>德语（de）</li><li>葡萄牙语（pt）</li><li>西班牙语（es）</li><li>丹麦语（da）</li><li>法语（fr）</li><li>挪威语（nb-no）</li><li>繁体中文（zh-tw）</li><li>意大利语（it）</li><li>韩语（ko）</li><li>日语（ja）</li><li>荷兰语（nl）</li><li>越南语（vi）</li><li>俄语（ru）</li><li>土耳其语（tr）</li><li>巴西葡萄牙语（pt-br）</li><li>波斯语（fa）</li><li>泰语（th）</li><li>印尼语（id）</li><li>保加利亚语（bg）</li><li>波兰语（pl）</li><li>芬兰语（fi）</li><li>瑞典语（sv）</li><li>希腊语（el）</li><li>斯洛伐克语（sk）</li><li>加泰罗尼亚语（ca）</li><li>捷克语（cs）</li><li>乌克兰语（uk）</li><li>土库曼语（tk）</li><li>泰米尔语（ta）</li><li>拉脱维亚语（lv）</li><li>南非荷兰语（af）</li><li>爱沙尼亚语（et）</li><li>斯洛文尼亚语（sl）</li><li>阿拉伯语（ar）</li><li>希伯来语（he）</li><li>立陶宛语（lt）</li><li>蒙古语（mn）</li><li>哈萨克斯坦语（kk）</li><li>匈牙利语（hu）</li><li>罗马尼亚语（ro）</li><li>库尔德语（ku）</li><li>维吾尔语（ug-cn）</li><li>高棉语（km）</li><li>塞尔维亚语（sr）</li><li>巴斯克语（eu）</li><li>吉尔吉斯语（ky）</li><li>亚美尼亚语 (hy-am)</li><li>克罗地亚 (hr)</li><li>世界语 (eo)</li></ul>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果你需要使用其他的语言，欢迎贡献 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("PR");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 只需在");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("这里");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 添加一个语言配置文件即可。");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("常见问题 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果我想要替换默认语言包来减小打包体积，应该怎么做？ ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("当你的应用默认不是使用");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "英语", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的时候，你需要额外引入一个新的语言，这样会使得没有用到的语言文件被打包，会增加最终产物的文件大小，如果你非常在意最终产物文件的大小，你可以使用 ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("webpack");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 提供的 ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("NormalModuleReplacementPlugin");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 插件替换默认语言包。你可以把以下代码添加进 ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "webpack.config.js", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 文件中来应用这个插件。");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>webpack.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\">{\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-keyword\">new</span> webpack.NormalModuleReplacementPlugin(\n      <span class=\"hljs-regexp\">/element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/</span>,\n      <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n    ),\n  ]\n}\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "国际化",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "quan-ju-pei-zhi",
    content: "全局配置",
    href: "#quan-ju-pei-zhi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#quan-ju-pei-zhi"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "configprovider",
    content: "ConfigProvider",
    href: "#configprovider",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#configprovider"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/zh-CN/component/config-provider"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), _hoisted_10]), _hoisted_11, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/zh-CN/component/config-provider"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  })]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cdn-yong-fa",
    content: "CDN 用法",
    href: "#cdn-yong-fa",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cdn-yong-fa"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  })]), _hoisted_18, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/pulls"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), _hoisted_23]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chang-jian-wen-ti",
    content: "常见问题",
    href: "#chang-jian-wen-ti",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chang-jian-wen-ti"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ru-guo-wo-xiang-yao-ti-huan-mo-ren-yu-yan-bao-lai-jian-xiao-da-bao-ti-ji-ying-gai-zen-me-zuo",
    content: "如果我想要替换默认语言包来减小打包体积，应该怎么做？",
    href: "#ru-guo-wo-xiang-yao-ti-huan-mo-ren-yu-yan-bao-lai-jian-xiao-da-bao-ti-ji-ying-gai-zen-me-zuo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ru-guo-wo-xiang-yao-ti-huan-mo-ren-yu-yan-bao-lai-jian-xiao-da-bao-ti-ji-ying-gai-zen-me-zuo"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_26, _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/plugins/normal-module-replacement-plugin/#root"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), _hoisted_32, _hoisted_33, _hoisted_34]), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md?vue&type=template&id=6cdc37b8

// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);