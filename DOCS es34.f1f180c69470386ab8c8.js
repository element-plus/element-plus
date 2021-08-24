(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/installation.md?vue&type=template&id=092144f7

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Installing ElementPlus");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Medio ambiente ");

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("ul", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("li", null, "Navegador moderno")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Edge"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "last 2 versions"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "last 2 versions"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "last 2 versions")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("blockquote", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Dado que Vue3 ya no es compatible con IE11, ElementPlus no es compatible con IE11 y versiones anteriores anteriores.")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Última versión actual ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ElementPlus se encuentra actualmente en una iteración de desarrollo rápido:", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Instalación mediante npm o yarn ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Recomendamos utilizar el gestor de paquetes para instalar ElementPlus", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", para poder utilizar bundlers como ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("vite");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y ");

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("webpack");

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> npm install element-plus --save</span>\n</code><span class=\"lang-mark\">sh</span></pre><pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$</span><span class=\"bash\"> yarn add element-plus</span>\n</code><span class=\"lang-mark\">sh</span></pre><p>Si su entorno de red no es bueno, se recomienda utilizar un registro espejo</p>", 3);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Introducción directa del navegador ");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Importar directamente ElementPlus a través de las etiquetas HTML del navegador, y utilizar "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElementPlus"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de forma global")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Introducir ");

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElementPlus", -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" en su totalidad a través de ");

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "CDN", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Según los diferentes proveedores de ");

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "CDN", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" hay diferentes métodos de introducción. Aquí utilizamos ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("unpkg");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("jsdelivr");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Por ejemplo, También puede utilizar otros proveedores de ");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "CDN", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilice unpkg ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/dist/index.css&quot;</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Utilice jsDelivr ");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/element-plus/dist/index.css&quot;</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

var _hoisted_38 = {
  class: "tip"
};

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Recomendamos utilizar ");

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "CDN", -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para introducir a los usuarios de ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElementPlus", -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para bloquear la versión en la dirección del enlace, para no verse afectados por actualizaciones incompatibles cuando ");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElementPlus", -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" se actualice en el futuro. Por favor, consulte ");

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("unpkg.com");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para el método para bloquear la versión.");

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Hello world ");

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Con ");

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "CDN", -1);

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", podemos utilizar fácilmente ");

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElementPlus", -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para escribir una página de Hola Mundo. ");

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Online Demo");

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("iframe", {
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

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Si usted está instalando a través de npm / yarn y desea utilizarlo con una herramienta de empaquetado, por favor lea la siguiente sección: ");

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Inicio rápido");

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

function render(_ctx, _cache) {
  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_img = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-img");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    content: "Installing ElementPlus",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "medio-ambiente",
    content: "Medio ambiente",
    href: "#medio-ambiente",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#medio-ambiente"
      })];
    }),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png",
    alt: "IE",
    title: "null"
  })])]), Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png",
    alt: "Firefox",
    title: "null"
  })])]), Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png",
    alt: "Chrome",
    title: "null"
  })])]), Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_img, {
    src: "https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png",
    alt: "Safari",
    title: "null"
  })])])])]), _hoisted_5]), _hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ultima-version-actual",
    content: "Última versión actual",
    href: "#ultima-version-actual",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ultima-version-actual"
      })];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://www.npmjs.org/package/element-plus"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_img, {
        src: "https://img.shields.io/npm/v/element-plus.svg?style=flat-square",
        alt: "ElementPlus version badge",
        title: "null"
      })])];
    }),
    _: 1
  })]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "instalacion-mediante-npm-o-yarn",
    content: "Instalación mediante npm o yarn",
    href: "#instalacion-mediante-npm-o-yarn",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#instalacion-mediante-npm-o-yarn"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_10, _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://webpack.js.org/"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15]), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "introduccion-directa-del-navegador",
    content: "Introducción directa del navegador",
    href: "#introduccion-directa-del-navegador",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#introduccion-directa-del-navegador"
      })];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://jsdelivr.com"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, _hoisted_33]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "utilice-unpkg",
    content: "Utilice unpkg",
    href: "#utilice-unpkg",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#utilice-unpkg"
      })];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "utilice-jsdelivr",
    content: "Utilice jsDelivr",
    href: "#utilice-jsdelivr",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#utilice-jsdelivr"
      })];
    }),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_38, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46];
    }),
    _: 1
  }), _hoisted_47])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "hello-world",
    content: "Hello world",
    href: "#hello-world",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#hello-world"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://codepen.io/iamkun/pen/YzWMaVr"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_54];
    }),
    _: 1
  })]), _hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_56, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "/#/es/component/quickstart"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_57];
    }),
    _: 1
  }), _hoisted_58]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/installation.md?vue&type=template&id=092144f7

// CONCATENATED MODULE: ./website/docs/es/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);