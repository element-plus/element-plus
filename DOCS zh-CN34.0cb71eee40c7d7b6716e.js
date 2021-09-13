(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[317],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/installation.md?vue&type=template&id=6bf42fff

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("安装 ElementPlus");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("环境支持 ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("li", null, "现代浏览器")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Edge"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "last 2 versions"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "last 2 versions"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "last 2 versions")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("blockquote", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "由于 Vue3 不再支持 IE11，故而 ElementPlus 也不支持 IE11 及之前版本。")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("当前最新版本 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ElementPlus 目前还处于快速开发迭代中：", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过 npm 或者 yarn 安装 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "我们推荐使用包管理器的方式安装", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，它能更好地和 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("vite");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("webpack");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 打包工具配合使用。");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> npm install element-plus --save</span>\n</code><span class=\"lang-mark\">sh</span></pre><pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> yarn add element-plus</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 2);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果你的网络环境不佳，推荐使用 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("cnpm");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 或使用 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("阿里巴巴镜像");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("浏览器直接引入 ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过浏览器 HTML 标签的方式直接引入 ElementPlus, 在全局可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的方式全量引入 ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，根据不同的 ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 提供商有不同的引入方式，我们在这里以 ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("unpkg");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("jsdelivr");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 举例， 你也可以使用其它的 ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 供应商。");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 unpkg ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 jsDelivr ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span>\n    <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span>\n    <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/element-plus/dist/index.css&quot;</span>\n  /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_41 = {
  class: "tip"
};

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("我们建议使用 ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 引入 ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的用户在链接地址上锁定版本，以免将来 ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 升级时受到非兼容性更新的影响。锁定版本的方法请查看 ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("unpkg.com");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Hello world ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过 ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "CDN", -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的方式我们可以很容易地使用 ");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ElementPlus", -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 写出一个 Hello world 页面。");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在线演示");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("iframe", {
  height: "469",
  style: {
    "width": "100%"
  },
  scrolling: "no",
  title: "YzWMaVr",
  src: "https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result",
  frameborder: "no",
  loading: "lazy",
  allowtransparency: "true",
  allowfullscreen: "true"
}, "\n  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun\n  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.\n", -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果是通过 npm / yarn 安装，并希望配合打包工具使用，请阅读下一节：");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("快速上手");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。");

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_img = Object(vue_esm_browser_prod["resolveComponent"])("app-img");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    content: "安装 ElementPlus",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "huan-jing-zhi-chi",
    content: "环境支持",
    href: "#huan-jing-zhi-chi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#huan-jing-zhi-chi"
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
    id: "dang-qian-zui-xin-ban-ben",
    content: "当前最新版本",
    href: "#dang-qian-zui-xin-ban-ben",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dang-qian-zui-xin-ban-ben"
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
    id: "tong-guo-npm-huo-zhe-yarn-an-zhuang",
    content: "通过 npm 或者 yarn 安装",
    href: "#tong-guo-npm-huo-zhe-yarn-an-zhuang",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tong-guo-npm-huo-zhe-yarn-an-zhuang"
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
  }), _hoisted_15]), _hoisted_16, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/cnpm/cnpm"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://registry.npm.taobao.org"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  })]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "liu-lan-qi-zhi-jie-yin-ru",
    content: "浏览器直接引入",
    href: "#liu-lan-qi-zhi-jie-yin-ru",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#liu-lan-qi-zhi-jie-yin-ru"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://jsdelivr.com"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), _hoisted_34, _hoisted_35, _hoisted_36]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-unpkg",
    content: "使用 unpkg",
    href: "#shi-yong-unpkg",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-unpkg"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-jsdelivr",
    content: "使用 jsDelivr",
    href: "#shi-yong-jsdelivr",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-jsdelivr"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_41, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    _: 1
  }), _hoisted_50])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "hello-world",
    content: "Hello world",
    href: "#hello-world",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#hello-world"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://codepen.io/iamkun/pen/YzWMaVr"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57]),
    _: 1
  })]), _hoisted_58, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_59, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "/#/zh-CN/component/quickstart"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60]),
    _: 1
  }), _hoisted_61]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md?vue&type=template&id=6bf42fff

// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);