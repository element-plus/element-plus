(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/quickstart.md?vue&type=template&id=6e528ddb

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Quick start");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "This section describes how to use ElementPlus in your project.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using components ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Full import ");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<blockquote><p>main.ts</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-comment\">// main.ts</span>\n<span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Import on demand ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElementPlus", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" provides out of box ");

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tree Shaking");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" functionalities based on ES Module.");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<blockquote><p>App.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-button</span>&gt;</span>\n    I am ElButton\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;app&#39;</span>\n  <span class=\"hljs-attr\">components</span>: {\n    ElButton,\n  },\n})\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Import stylesheets ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("It is ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "strongly recommended", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" that you import the ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "bundled stylesheet file", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", even though this could increase the final output bundle size, but it requires no packaging plugins for bundling, you can use ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("CDN");

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to load your stylesheet which would be much more faster than hosting the file on your own server.");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Import via JavaScript</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>Import via HTML <code>head</code> tag.</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("If you also want the style to be imported on demand, you need to use co-responding plugins based on your bundler, read more: ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("FAQs");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Starter templates ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using vue-cli@4.5 ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("We prepared a plugin ");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus VueCLI plugin");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", for new version ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("vue-cli");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", you can setup a project based on ElementPlus easily.");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using Starter Kit ");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("We provide a general ");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Project Template");

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", also a ");

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vite Template");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". For Laravel users we have a ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Laravel Template");

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Global configuration ");

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>When registering ElementPlus, you can pass a global config object with <code>size</code> and <code>zIndex</code> to set the default <code>size</code> for form components, and <code>zIndex</code> for popup components, the default value for <code>zIndex</code> is <strong>2000</strong></p><p>Full import:</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> });\n</code><span class=\"lang-mark\">js</span></pre><p>On demand:</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton);\n</code><span class=\"lang-mark\">js</span></pre>", 5);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using Nuxt.js ");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("We can also use ");

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Nuxt.js");

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("：");

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "glitch-embed-wrap",
  style: {
    "height": "420px",
    "width": "100%"
  }
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("iframe", {
  src: "https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true",
  alt: "nuxt-with-element on glitch",
  style: {
    "height": "100%",
    "width": "100%",
    "border": "0"
  }
})], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Let's get started ");

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "You can bootstrap your project from now on, for each components usage, please refer to individual component documentation.", -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("FAQs ");

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("I'd like to import both components and style at the same time ");

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "You can achieve that based on the bundler you are currently using, with ElementPlus supported plugins.", -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using vite ");

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("If you are using ");

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("vite");

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" as your bundler, then you need to install ");

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "vite-plugin-element-plus", -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" in order to get it work.");

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add vite-plugin-element-plus -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> or</span>\nnpm install vite-plugin-element-plus -D\n</code><span class=\"lang-mark\">sh</span></pre><p>Then you need to add the code below into your <code>vite.config.[t]js</code> file.</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VitePluginElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-element-plus&#39;</span>\n\n<span class=\"hljs-comment\">// https://vitejs.dev/config/</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig({\n  <span class=\"hljs-attr\">plugins</span>: [\n    vue(),\n    VitePluginElementPlus({\n      <span class=\"hljs-comment\">// if you need to use the *.scss source file, you need to uncomment this comment</span>\n      <span class=\"hljs-comment\">// useSource: true</span>\n    }),\n  ],\n})\n\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("For all public API, you can refer to ");

var _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("vite-plugin-element-plus");

var _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Using webpack ");

var _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("If you are using webpack as your bundler, then you need to install ");

var _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("babel-plugin-import");

var _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" in order to get it work.");

var _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add babel-plugin-import -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> or</span>\nnpm install babel-plugin-import -D\n</code><span class=\"lang-mark\">sh</span></pre><p>Then you need to add the code below into your <code>babel.config.js</code> file.</p><blockquote><p>babel.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-comment\">// ...others</span>\n    [\n      <span class=\"hljs-string\">&quot;import&quot;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-comment\">// this imports the [name].css file into the project.</span>\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/es/<span class=\"hljs-subst\">${name}</span>/style/css`</span>\n          <span class=\"hljs-comment\">// if you wish to import the *.scss source file, please uncomment this</span>\n          <span class=\"hljs-comment\">// return `element-plus/es/${name}/style`;</span>\n        },\n      },\n    ],\n  ],\n};\n</code><span class=\"lang-mark\">js</span></pre>", 4);

function render(_ctx, _cache) {
  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    content: "Quick start",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "using-components",
    content: "Using components",
    href: "#using-components",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#using-components"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "full-import",
    content: "Full import",
    href: "#full-import",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#full-import"
      })];
    }),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "import-on-demand",
    content: "Import on demand",
    href: "#import-on-demand",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#import-on-demand"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12]), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "import-stylesheets",
    content: "Import stylesheets",
    href: "#import-stylesheets",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#import-stylesheets"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22]), _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "/#/en-US/component/quickstart#faqs"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  })]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "starter-templates",
    content: "Starter templates",
    href: "#starter-templates",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#starter-templates"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "using-vue-cli-four-five",
    content: "Using vue-cli@4.5",
    href: "#using-vue-cli-four-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#using-vue-cli-four-five"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/vue-cli-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://cli.vuejs.org/"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    _: 1
  }), _hoisted_35]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "using-starter-kit",
    content: "Using Starter Kit",
    href: "#using-starter-kit",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#using-starter-kit"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-starter"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-vite-starter"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    _: 1
  }), _hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-in-laravel-starter"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    _: 1
  }), _hoisted_43]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "global-configuration",
    content: "Global configuration",
    href: "#global-configuration",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#global-configuration"
      })];
    }),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "using-nuxt-js",
    content: "Using Nuxt.js",
    href: "#using-nuxt-js",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#using-nuxt-js"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_51, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://nuxtjs.org"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_52];
    }),
    _: 1
  }), _hoisted_53]), _hoisted_54, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "let-s-get-started",
    content: "Let's get started",
    href: "#let-s-get-started",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#let-s-get-started"
      })];
    }),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "faqs",
    content: "FAQs",
    href: "#faqs",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_57, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#faqs"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "i-d-like-to-import-both-components-and-style-at-the-same-time",
    content: "I'd like to import both components and style at the same time",
    href: "#i-d-like-to-import-both-components-and-style-at-the-same-time",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_58, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#i-d-like-to-import-both-components-and-style-at-the-same-time"
      })];
    }),
    _: 1
  }), _hoisted_59, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "using-vite",
    content: "Using vite",
    href: "#using-vite",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_60, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#using-vite"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_61, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_62];
    }),
    _: 1
  }), _hoisted_63, _hoisted_64, _hoisted_65]), _hoisted_66, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_69, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/vite-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_70];
    }),
    _: 1
  })]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "using-webpack",
    content: "Using webpack",
    href: "#using-webpack",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_71, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#using-webpack"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_72, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/ant-design/babel-plugin-import"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_73];
    }),
    _: 1
  }), _hoisted_74]), _hoisted_75, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md?vue&type=template&id=6e528ddb

// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);