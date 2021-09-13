(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/custom-theme.md?vue&type=template&id=6b41195a

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom theme ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Element Plus uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea. We provide four ways to change the style variables.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Changing theme color ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If you just want to change the theme color of Element Plus, the ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("theme preview website");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is recommended. The theme color of Element Plus is bright and friendly blue. By changing it, you can make Element Plus more visually connected to specific projects.");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The above website enables you to preview theme of a new theme color in real-time, and it can generate a complete style package based on the new theme color for you to download directly (to import new style files in your project, please refer to the 'Import custom theme' or 'Import component theme on demand' part of this section).", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Update SCSS variables in your project ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p><code>theme-chalk</code> is written in SCSS. If your project also uses SCSS, you can directly change Element Plus style variables. Create a new style file, e.g. <code>element-variables.scss</code>:</p><pre class=\"example-code\"><code class=\"hljs language-html\">/* theme color */ $--color-primary: teal; /* icon font path, required */\n$--font-path: &#39;~element-plus/lib/theme-chalk/fonts&#39;; @import\n&quot;~element-plus/packages/theme-chalk/src/index&quot;;\n</code><span class=\"lang-mark\">html</span></pre><p>Then in the entry file of your project, import this style file instead of Element&#39;s built CSS:</p><pre class=\"example-code\"><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./element-variables.scss&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\n</code><span class=\"lang-mark\">JS</span></pre><div class=\"tip\"><p>Note that it is required to override icon font path to the relative path of Element&#39;s font files.</p></div>", 5);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("CLI theme tool ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "If you project doesn't use SCSS, you can customize themes with our CLI theme tool:", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "Install", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>First install the theme generator globally or locally. Local install is recommended because in this way, when others clone your project, npm will automatically install it for them.</p><pre class=\"example-code\"><code class=\"hljs language-shell\">npm i element-theme -g\n</code><span class=\"lang-mark\">sh</span></pre><p>Then install the chalk theme from npm or GitHub.</p><pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">#</span><span class=\"bash\"> from npm</span>\nnpm i element-theme-chalk -D\n<span class=\"hljs-meta\">\n#</span><span class=\"bash\"> from GitHub</span>\nnpm i https://github.com/ElementUI/theme-chalk -D\n</code><span class=\"lang-mark\">sh</span></pre>", 4);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "Initialize variable file", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>After successfully installing the above packages, a command named <code>et</code> is available in CLI (if the packages are installed locally, use <code>node_modules/.bin/et</code> instead). Run <code>-i</code> to initialize the variable file which outputs to <code>element-variables.scss</code> by default. And you can specify its output directory as you will.</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et -i [custom output file]\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ Generator variables file</span>\n</code><span class=\"lang-mark\">sh</span></pre><p>In <code>element-variables.scss</code> you can find all the variables we used to style Element Plus and they are defined in SCSS format. Here&#39;s a snippet:</p><pre class=\"example-code\"><code class=\"hljs language-css\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-id\">#409EFF</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-primary-light-1</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 10%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 53a8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-2</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 20%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 66b1ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-3</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 30%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 79bbff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-4</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 40%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 8cc5ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-5</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 50%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* a0cfff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-6</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 60%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* b3d8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-7</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 70%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* c6e2ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-8</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 80%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* d9ecff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-9</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 90%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* ecf5ff */</span>\n\n$<span class=\"hljs-selector-tag\">--color-success</span>: <span class=\"hljs-selector-id\">#67c23a</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-warning</span>: <span class=\"hljs-selector-id\">#e6a23c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-danger</span>: <span class=\"hljs-selector-id\">#f56c6c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-info</span>: <span class=\"hljs-selector-id\">#909399</span> !<span class=\"hljs-selector-tag\">default</span>;\n\n...\n</code><span class=\"lang-mark\">css</span></pre>", 4);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "Modify variables", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Just edit <code>element-variables.scss</code>, e.g. changing the theme color to red:</p><pre class=\"example-code\"><code class=\"hljs language-CSS\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-tag\">red</span>;\n</code><span class=\"lang-mark\">CSS</span></pre>", 2);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "Build theme", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>After saving the variable file, use <code>et</code> to build your theme. You can activate <code>watch</code> mode by adding a parameter <code>-w</code>. And if you customized the variable file&#39;s output, you need to add a parameter <code>-c</code> and variable file&#39;s name. By default the build theme file is placed inside <code>./theme</code>. You can specify its output directory with parameter <code>-o</code>.</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ build theme font</span>\n<span class=\"hljs-meta\">&gt;</span><span class=\"bash\"> ✔ build element theme</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 2);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use custom theme ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "Import custom theme", -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Importing your own theme is just like importing the default theme, only this time you import the file built from &quot;Online Theme Roller&quot; or &quot;CLI tool&quot;:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;../theme/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\ncreateApp(App).use(ElementPlus)\n</code><span class=\"lang-mark\">js</span></pre>", 2);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "Import component theme on demand", -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>If you are using <code>babel-plugin-component</code> for on-demand import, just modify <code>.babelrc</code> and specify <code>styleLibraryName</code> to the path where your custom theme is located relative to <code>.babelrc</code>. Note that <code>~</code> is required:</p><pre class=\"example-code\"><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;~theme&quot;</span>\n      }\n    ]\n  ]\n}\n</code><span class=\"lang-mark\">json</span></pre>", 2);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If you are unfamiliar with ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "babel-plugin-component", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", please refer to ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("a", {
  href: "./#/en-US/component/quickstart"
}, "Quick Start", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". For more details, check out the ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("project repository");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" of ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-theme", -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

function render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "custom-theme",
    content: "Custom theme",
    href: "#custom-theme",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#custom-theme"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "changing-theme-color",
    content: "Changing theme color",
    href: "#changing-theme-color",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#changing-theme-color"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://element-plus.github.io/theme-chalk-preview/#/en-US"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_7]), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "update-scss-variables-in-your-project",
    content: "Update SCSS variables in your project",
    href: "#update-scss-variables-in-your-project",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#update-scss-variables-in-your-project"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cli-theme-tool",
    content: "CLI theme tool",
    href: "#cli-theme-tool",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cli-theme-tool"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "install",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#install"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "initialize-variable-file",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#initialize-variable-file"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "modify-variables",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#modify-variables"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "build-theme",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#build-theme"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "use-custom-theme",
    content: "Use custom theme",
    href: "#use-custom-theme",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-custom-theme"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "import-custom-theme",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38, _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-custom-theme"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "import-component-theme-on-demand",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42, _hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-component-theme-on-demand"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/ElementUI/element-theme"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51]),
    _: 1
  }), _hoisted_52, _hoisted_53, _hoisted_54]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/custom-theme.md?vue&type=template&id=6b41195a

// CONCATENATED MODULE: ./website/docs/en-US/custom-theme.md

const script = {}
script.render = render

/* harmony default export */ var custom_theme = __webpack_exports__["default"] = (script);

/***/ })

}]);