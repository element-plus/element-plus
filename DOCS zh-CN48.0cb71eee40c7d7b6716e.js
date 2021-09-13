(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[332],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/quickstart.md?vue&type=template&id=1a3b3c9e

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("快速上手");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "本节将介绍如何在项目中使用 ElementPlus。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用组件 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("完整引入所有组件 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>main.ts</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("按需引入组件 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("的 JS 代码默认支持基于 ES modules 的 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("摇树 tree shaking");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>App.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-button</span>&gt;</span> 我是 ElButton <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;app&#39;</span>\n    <span class=\"hljs-attr\">components</span>: {\n      ElButton,\n    },\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("样式的引入 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("我们");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "强烈建议直接引入全部的样式文件", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，虽然这看起来会增大整个应用的体积，但这样做可以避免引入额外的打包工具插件（减少负担），你还可以通过 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CDN");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的方式来加载样式文件，从而使得你的应用加载更快。");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>通过 JS 的方式引入</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>通过 HTML 的头文件引入</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果你想让样式也按需引入，你可以使用对应工具提供的插件来引用。请看");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("常见问题");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("快捷搭建项目模板 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 vue-cli@4.5 ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("我们为新版的 vue-cli 准备了相应的 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus 插件");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("你可以用它们快速地搭建一个基于 Element Plus 的项目。");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 Starter Kit ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("我们提供了通用的");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("项目模板");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，你可以直接使用，另外我们还提供了 Vite ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("模板");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。对于 Laravel 用户，我们也准备了相应的");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("模板");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，同样可以直接下载使用。");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("全局配置 ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>在引入 Element Plus 时，可以传入一个全局配置对象。该对象目前支持 <code>size</code> 与 <code>zIndex</code> 字段。<code>size</code> 用于改变组件的默认尺寸，<code>zIndex</code> 设置弹框的初始 z-index（默认值：2000）。按需引入 Element Plus 的方式，具体操作如下：</p><p>完整引入 ElementPlus：</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> })\n</code><span class=\"lang-mark\">js</span></pre><p>按需引入 ElementPlus：</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton)\n</code><span class=\"lang-mark\">js</span></pre><p>按照以上设置，项目中所有拥有 <code>size</code> 属性的组件的默认尺寸均为 &#39;small&#39;，弹框的初始 z-index 为 3000。</p>", 6);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 Nuxt.js ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("我们还可以使用 ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nuxt.js");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("：");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "glitch-embed-wrap",
  style: {
    "height": "420px",
    "width": "100%"
  }
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("iframe", {
  src: "https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true",
  alt: "nuxt-with-element on glitch",
  style: {
    "height": "100%",
    "width": "100%",
    "border": "0"
  }
})], -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("开始使用 ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "至此，一个基于 Vue 和 Element Plus 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。", -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("常见问题 ");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("我想同时按需引入组件和样式，我应该怎么做？ ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 vite 按需加载样式 ");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果你使用 ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 作为构建打包工具，那么你需要先安装 ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vite-plugin-element-plus", -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 来实现按需加载样式");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add vite-plugin-element-plus -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> 或</span>\nnpm install vite-plugin-element-plus -D\n</code><span class=\"lang-mark\">sh</span></pre><p>然后将如下代码添加至 <code>vite.config.js</code> 文件中:</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VitePluginElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-element-plus&#39;</span>\n\n<span class=\"hljs-comment\">// https://vitejs.dev/config/</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig(<span class=\"hljs-function\">(<span class=\"hljs-params\">{ mode }</span>) =&gt;</span> {\n  <span class=\"hljs-keyword\">return</span> {\n    <span class=\"hljs-attr\">plugins</span>: [\n      vue(),\n      VitePluginElementPlus({\n        <span class=\"hljs-comment\">// 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。</span>\n        <span class=\"hljs-comment\">// 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus</span>\n        <span class=\"hljs-comment\">// 的文档注释</span>\n        <span class=\"hljs-comment\">// useSource: true</span>\n        <span class=\"hljs-attr\">format</span>: mode === <span class=\"hljs-string\">&#39;development&#39;</span> ? <span class=\"hljs-string\">&#39;esm&#39;</span> : <span class=\"hljs-string\">&#39;cjs&#39;</span>,\n      }),\n    ],\n  }\n})\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 webpack 按需加载样式 ");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>如果你使用 webpack 作为构建打包工具，那么你需要先安装 <code>babel-plugin-import</code> 来实现按需加载样式</p><pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add babel-plugin-import -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> 或</span>\nnpm install babel-plugin-import -D\n</code><span class=\"lang-mark\">sh</span></pre><p>然后你需要将以下代码加入你的 <code>babel.config.js</code> 文件中。</p><blockquote><p>babel.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    [\n      <span class=\"hljs-string\">&#39;import&#39;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-comment\">// 引入组件</span>\n        <span class=\"hljs-attr\">customName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>`</span>\n        },\n        <span class=\"hljs-comment\">// 引入样式</span>\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-comment\">// 如果你需要引入 [name].scss 文件，你需要用下面这行</span>\n          <span class=\"hljs-comment\">// return `element-plus/lib/components/${name}/style`</span>\n          <span class=\"hljs-comment\">// 引入 [name].css</span>\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>/style/css`</span>\n        },\n      },\n    ],\n  ],\n}\n</code><span class=\"lang-mark\">js</span></pre>", 5);

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "快速上手",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-zu-jian",
    content: "使用组件",
    href: "#shi-yong-zu-jian",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-zu-jian"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "wan-zheng-yin-ru-suo-you-zu-jian",
    content: "完整引入所有组件",
    href: "#wan-zheng-yin-ru-suo-you-zu-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#wan-zheng-yin-ru-suo-you-zu-jian"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "an-xu-yin-ru-zu-jian",
    content: "按需引入组件",
    href: "#an-xu-yin-ru-zu-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#an-xu-yin-ru-zu-jian"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), _hoisted_12]), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yang-shi-de-yin-ru",
    content: "样式的引入",
    href: "#yang-shi-de-yin-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yang-shi-de-yin-ru"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_16, _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), _hoisted_20]), _hoisted_21, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/zh-CN/component/quickstart#chang-jian-wen-ti"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    _: 1
  })]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kuai-jie-da-jian-xiang-mu-mo-ban",
    content: "快捷搭建项目模板",
    href: "#kuai-jie-da-jian-xiang-mu-mo-ban",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kuai-jie-da-jian-xiang-mu-mo-ban"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-vue-cli-four-five",
    content: "使用 vue-cli@4.5",
    href: "#shi-yong-vue-cli-four-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-vue-cli-four-five"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/vue-cli-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    _: 1
  }), _hoisted_31]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-starter-kit",
    content: "使用 Starter Kit",
    href: "#shi-yong-starter-kit",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-starter-kit"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-vite-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-in-laravel-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), _hoisted_39]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "quan-ju-pei-zhi",
    content: "全局配置",
    href: "#quan-ju-pei-zhi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#quan-ju-pei-zhi"
    })]),
    _: 1
  }), _hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-nuxt-js",
    content: "使用 Nuxt.js",
    href: "#shi-yong-nuxt-js",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-nuxt-js"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://nuxtjs.org"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    _: 1
  }), _hoisted_50]), _hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kai-shi-shi-yong",
    content: "开始使用",
    href: "#kai-shi-shi-yong",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kai-shi-shi-yong"
    })]),
    _: 1
  }), _hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chang-jian-wen-ti",
    content: "常见问题",
    href: "#chang-jian-wen-ti",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chang-jian-wen-ti"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "wo-xiang-tong-shi-an-xu-yin-ru-zu-jian-he-yang-shi-wo-ying-gai-zen-me-zuo",
    content: "我想同时按需引入组件和样式，我应该怎么做？",
    href: "#wo-xiang-tong-shi-an-xu-yin-ru-zu-jian-he-yang-shi-wo-ying-gai-zen-me-zuo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#wo-xiang-tong-shi-an-xu-yin-ru-zu-jian-he-yang-shi-wo-ying-gai-zen-me-zuo"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-vite-an-xu-jia-zai-yang-shi",
    content: "使用 vite 按需加载样式",
    href: "#shi-yong-vite-an-xu-jia-zai-yang-shi",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-vite-an-xu-jia-zai-yang-shi"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_58]),
    _: 1
  }), _hoisted_59, _hoisted_60, _hoisted_61]), _hoisted_62, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-webpack-an-xu-jia-zai-yang-shi",
    content: "使用 webpack 按需加载样式",
    href: "#shi-yong-webpack-an-xu-jia-zai-yang-shi",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-webpack-an-xu-jia-zai-yang-shi"
    })]),
    _: 1
  }), _hoisted_66, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/quickstart.md?vue&type=template&id=1a3b3c9e

// CONCATENATED MODULE: ./website/docs/zh-CN/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);