(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/installation.md?vue&type=template&id=3206a7b4

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Installing ElementPlus");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Environment ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "Modern browser")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Edge"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "last 2 versions"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "last 2 versions"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "last 2 versions")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("blockquote", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Since Vue3 no longer supports IE11, ElementPlus does not support IE11 and previous versions.")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Current latest version ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ElementPlus is currently in a rapid development iteration:", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Install via npm or yarn ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "We recommend using the package manager to install ElementPlus", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", so that you can utilize bundlers like ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("webpack");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> npm install element-plus --save</span>\n</code><span class=\"lang-mark\">sh</span></pre><pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> yarn add element-plus</span>\n</code><span class=\"lang-mark\">sh</span></pre><p>If your network environment is not good, it is recommended to use a mirror registry</p>", 3);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Browser direct introducing ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Directly import ElementPlus through browser HTML tags, and use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" globally")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Introduce ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in full through ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". According to different ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" providers, there are different introduction methods. Here we use ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("unpkg");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("jsdelivr");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" For example, You can also use other ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" providers.");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use unpkg ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use jsDelivr ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span>\n    <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span>\n    <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/element-plus/dist/index.css&quot;</span>\n  /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_38 = {
  class: "tip"
};

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("We recommend using ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to introduce ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" users to lock the version on the link address, so as not to be affected by incompatible updates when ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is upgraded in the future. Please check ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("unpkg.com");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" for the method to lock the version.");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Hello world ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("With ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", we can easily use ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to write a Hello world page. ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Online Demo");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("iframe", {
  height: "469",
  style: {
    "width": "100%"
  },
  scrolling: "no",
  title: "YzWMaVr",
  src: "https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",
  frameborder: "no",
  loading: "lazy",
  allowtransparency: "true",
  allowfullscreen: "true"
}, "\n  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun\n  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.\n", -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If you are installing via npm / yarn and want to use it with a packaging tool, please read the next section: ");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Quick Start");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_img = Object(vue_esm_browser_prod["resolveComponent"])("app-img");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "Installing ElementPlus",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "environment",
    content: "Environment",
    href: "#environment",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#environment"
    })]),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser_prod["createElementVNode"])("table", null, [Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [Object(vue_esm_browser_prod["createElementVNode"])("th", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png",
    alt: "IE",
    title: "null"
  })])]), Object(vue_esm_browser_prod["createElementVNode"])("th", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png",
    alt: "Firefox",
    title: "null"
  })])]), Object(vue_esm_browser_prod["createElementVNode"])("th", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png",
    alt: "Chrome",
    title: "null"
  })])]), Object(vue_esm_browser_prod["createElementVNode"])("th", null, [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png",
    alt: "Safari",
    title: "null"
  })])])])]), _hoisted_5]), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "current-latest-version",
    content: "Current latest version",
    href: "#current-latest-version",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#current-latest-version"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.npmjs.org/package/element-plus"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_img, {
      src: "https://img.shields.io/npm/v/element-plus.svg?style=flat-square",
      alt: "ElementPlus version badge",
      title: "null"
    })])]),
    _: 1
  })]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "install-via-npm-or-yarn",
    content: "Install via npm or yarn",
    href: "#install-via-npm-or-yarn",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#install-via-npm-or-yarn"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_10, _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), _hoisted_15]), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "browser-direct-introducing",
    content: "Browser direct introducing",
    href: "#browser-direct-introducing",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#browser-direct-introducing"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://jsdelivr.com"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    _: 1
  }), _hoisted_31, _hoisted_32, _hoisted_33]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "use-unpkg",
    content: "Use unpkg",
    href: "#use-unpkg",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-unpkg"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "use-jsdelivr",
    content: "Use jsDelivr",
    href: "#use-jsdelivr",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-jsdelivr"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_38, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46]),
    _: 1
  }), _hoisted_47])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "hello-world",
    content: "Hello world",
    href: "#hello-world",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#hello-world"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://codepen.io/iamkun/pen/YzWMaVr"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54]),
    _: 1
  })]), _hoisted_55, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/en-US/component/quickstart"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57]),
    _: 1
  }), _hoisted_58]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/installation.md?vue&type=template&id=3206a7b4

// CONCATENATED MODULE: ./website/docs/en-US/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);