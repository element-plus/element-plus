(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/quickstart.md?vue&type=template&id=326f55c0

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Quick start");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "This section describes how to use ElementPlus in your project.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Using components ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Full import ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>main.ts</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-comment\">// main.ts</span>\n<span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Import on demand ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" provides out of box ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tree Shaking");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" functionalities based on ES Module.");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<blockquote><p>App.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-button</span>&gt;</span> I am ElButton <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineComponent({\n    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;app&#39;</span>\n    <span class=\"hljs-attr\">components</span>: {\n      ElButton,\n    },\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Import stylesheets ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("It is ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "strongly recommended", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" that you import the ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "bundled stylesheet file", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", even though this could increase the final output bundle size, but it requires no packaging plugins for bundling, you can use ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CDN");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to load your stylesheet which would be much more faster than hosting the file on your own server.");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Import via JavaScript</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>Import via HTML <code>head</code> tag.</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If you also want the style to be imported on demand, you need to use co-responding plugins based on your bundler, read more: ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("FAQs");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Starter templates ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Using vue-cli@4.5 ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("We prepared a plugin ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus VueCLI plugin");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", for new version ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vue-cli");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", you can setup a project based on ElementPlus easily.");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Using Starter Kit ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("We provide a general ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Project Template");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", also a ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vite Template");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". For Laravel users we have a ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Laravel Template");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Global configuration ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>When registering ElementPlus, you can pass a global config object with <code>size</code> and <code>zIndex</code> to set the default <code>size</code> for form components, and <code>zIndex</code> for popup components, the default value for <code>zIndex</code> is <strong>2000</strong></p><p>Full import:</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> })\n</code><span class=\"lang-mark\">js</span></pre><p>On demand:</p><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton)\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Using Nuxt.js ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("We can also use ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Nuxt.js");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("：");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
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

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Let's get started ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can bootstrap your project from now on, for each components usage, please refer to individual component documentation.", -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("FAQs ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("I'd like to import both components and style at the same time ");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can achieve that based on the bundler you are currently using, with ElementPlus supported plugins.", -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Using vite ");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If you are using ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" as your bundler, then you need to install ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vite-plugin-element-plus", -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in order to get it work.");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add vite-plugin-element-plus -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> or</span>\nnpm install vite-plugin-element-plus -D\n</code><span class=\"lang-mark\">sh</span></pre><p>Then you need to add the code below into your <code>vite.config.[t]js</code> file.</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VitePluginElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-element-plus&#39;</span>\n\n<span class=\"hljs-comment\">// https://vitejs.dev/config/</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig(<span class=\"hljs-function\">(<span class=\"hljs-params\">{ mode }</span>) =&gt;</span> {\n  <span class=\"hljs-keyword\">return</span> {\n    <span class=\"hljs-attr\">plugins</span>: [\n      vue(),\n      VitePluginElementPlus({\n        <span class=\"hljs-comment\">// if you need to use the *.scss source file, you need to uncomment this comment</span>\n        <span class=\"hljs-comment\">// useSource: true</span>\n        <span class=\"hljs-attr\">format</span>: mode === <span class=\"hljs-string\">&#39;development&#39;</span> ? <span class=\"hljs-string\">&#39;esm&#39;</span> : <span class=\"hljs-string\">&#39;cjs&#39;</span>,\n      }),\n    ],\n  }\n})\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("For all public API, you can refer to ");

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite-plugin-element-plus");

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Using webpack ");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If you are using webpack as your bundler, then you need to install ");

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("babel-plugin-import");

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in order to get it work.");

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\">yarn add babel-plugin-import -D\n<span class=\"hljs-meta\">#</span><span class=\"bash\"> or</span>\nnpm install babel-plugin-import -D\n</code><span class=\"lang-mark\">sh</span></pre><p>Then you need to add the code below into your <code>babel.config.js</code> file.</p><blockquote><p>babel.config.js</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    [\n      <span class=\"hljs-string\">&#39;import&#39;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-comment\">// import component</span>\n        <span class=\"hljs-attr\">customName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>`</span>\n        },\n        <span class=\"hljs-comment\">// import style</span>\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-comment\">// if you need [name].scss source file, you need to uncomment this line</span>\n          <span class=\"hljs-comment\">// return `element-plus/lib/components/${name}/style`</span>\n          <span class=\"hljs-comment\">// import [name].css</span>\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/components/<span class=\"hljs-subst\">${name}</span>/style/css`</span>\n        },\n      },\n    ],\n  ],\n}\n</code><span class=\"lang-mark\">js</span></pre>", 4);

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "Quick start",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "using-components",
    content: "Using components",
    href: "#using-components",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-components"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "full-import",
    content: "Full import",
    href: "#full-import",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#full-import"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "import-on-demand",
    content: "Import on demand",
    href: "#import-on-demand",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-on-demand"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_9, _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), _hoisted_12]), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "import-stylesheets",
    content: "Import stylesheets",
    href: "#import-stylesheets",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-stylesheets"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), _hoisted_22]), _hoisted_23, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/en-US/component/quickstart#faqs"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  })]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "starter-templates",
    content: "Starter templates",
    href: "#starter-templates",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#starter-templates"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "using-vue-cli-four-five",
    content: "Using vue-cli@4.5",
    href: "#using-vue-cli-four-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-vue-cli-four-five"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/vue-cli-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://cli.vuejs.org/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    _: 1
  }), _hoisted_35]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "using-starter-kit",
    content: "Using Starter Kit",
    href: "#using-starter-kit",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-starter-kit"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-vite-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40]),
    _: 1
  }), _hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus-in-laravel-starter"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    _: 1
  }), _hoisted_43]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "global-configuration",
    content: "Global configuration",
    href: "#global-configuration",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#global-configuration"
    })]),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "using-nuxt-js",
    content: "Using Nuxt.js",
    href: "#using-nuxt-js",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-nuxt-js"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://nuxtjs.org"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_52]),
    _: 1
  }), _hoisted_53]), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "let-s-get-started",
    content: "Let's get started",
    href: "#let-s-get-started",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#let-s-get-started"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "faqs",
    content: "FAQs",
    href: "#faqs",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#faqs"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "i-d-like-to-import-both-components-and-style-at-the-same-time",
    content: "I'd like to import both components and style at the same time",
    href: "#i-d-like-to-import-both-components-and-style-at-the-same-time",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#i-d-like-to-import-both-components-and-style-at-the-same-time"
    })]),
    _: 1
  }), _hoisted_59, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "using-vite",
    content: "Using vite",
    href: "#using-vite",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-vite"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_62]),
    _: 1
  }), _hoisted_63, _hoisted_64, _hoisted_65]), _hoisted_66, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_69, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-plus/vite-plugin-element-plus"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_70]),
    _: 1
  })]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "using-webpack",
    content: "Using webpack",
    href: "#using-webpack",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_71, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#using-webpack"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_72, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/ant-design/babel-plugin-import"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_73]),
    _: 1
  }), _hoisted_74]), _hoisted_75, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md?vue&type=template&id=326f55c0

// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);