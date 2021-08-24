(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/custom-theme.md?vue&type=template&id=11a52f8b

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tema personalizado ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Element Plus utiliza la metodología BEM en CSS con la finalidad de que puedas sobrescribir los estilos fácilmente. Pero, si necesita remplazar estilos a gran escala, por ejemplo, cambiar el color del tema de azul a naranja o verde, quizás reemplazarlos uno a uno no sea lo más adecuado, para ello hay 4 maneras de modificar los estilos.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Cambiando el color del tema ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Si lo que se busca es cambiar el color del tema de Element, se recomienda utilizar el ");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("sitio de visualización de temas");

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Element Plus utiliza un color azul brillante y amigable como tema principal. Al cambiarlo, puede hacer que Element Plus este más conectado visualmente a proyectos específicos.");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Este sitio, le permitirá obtener una vista previa del tema con un nuevo color en tiempo real, y, además, obtener un paquete de estilos completo basado en el nuevo color para su descarga (para importar estos nuevos estilos, consulte la sección ‘Importar un tema personalizado’ o ‘Importar un tema de componente bajo demanda' que se encuentran dentro de esta sección).", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Actualizando variables SCSS en tu proyecto ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p><code>theme-chalk</code> esta escrito en SCSS. Si su proyecto también utiliza SCSS, puede cambiar las variables de estilos de Element. Para ello, solo necesita crear un nuevo archivo de estilos, por ejemplo, <code>element-variables.scss</code>:</p><pre class=\"example-code\"><code class=\"hljs language-html\">/* Color del tema */ $--color-primary: teal; /* Ubicación de la fuente,\nobligatoria */ $--font-path: &#39;~element-plus/lib/theme-chalk/fonts&#39;; @import\n&quot;~element-plus/packages/theme-chalk/src/index&quot;;\n</code><span class=\"lang-mark\">html</span></pre><p>Entonces, en el archivo principal del proyecto, importe este archivo de estilos en lugar de los estilos de Element:</p><pre class=\"example-code\"><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./element-variables.scss&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\n</code><span class=\"lang-mark\">JS</span></pre><div class=\"tip\"><p>Nota es necesario sobrescribir la ruta de la fuente por una ruta relativa de las fuentes de Element.</p></div>", 5);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("CLI para generar temas ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Si su proyecto no utiliza SCSS, puede personalizar el tema a través de esta herramienta:", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Instalación", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])();

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Primero, debe instalar el generador de temas ya sea de forma global o local. Se recomienda instalarlo de forma local, ya que de esta manera, cuando otros clonen su proyecto, npm automáticamente los instalará para ellos.</p><pre class=\"example-code\"><code class=\"hljs language-shell\">npm i element-theme -g\n</code><span class=\"lang-mark\">sh</span></pre><p>Ahora, instale el tema <code>chalk</code> desde npm o Github.</p><pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">#</span><span class=\"bash\"> desde npm</span>\nnpm i element-theme-chalk -D\n<span class=\"hljs-meta\">\n#</span><span class=\"bash\"> desde GitHub</span>\nnpm i https://github.com/ElementUI/theme-chalk -D\n</code><span class=\"lang-mark\">sh</span></pre>", 4);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Inicializar archivo de variables", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])();

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Después de haber instalado correctamente los paquetes, el comando <code>et</code> estará disponible en su CLI (si instalo el paquete de manera local, utilice <code>node_modules/.bin/et</code> en su lugar). Ejecute <code>-i</code> para inicializar un archivo de variables, puede especificar un nombre distinto, pero por defecto, el archivo se llama <code>element-variables.scss</code>. También puede especificar un directorio distinto.</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et -i [custom output file]\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ Generator variables file</span>\n</code><span class=\"lang-mark\">sh</span></pre><p>En el archivo <code>element-variables.scss</code> podrá encontrar todas las variables que utiliza Element Plus para definir los estilos y estos están definidos en SCSS. Aquí un ejemplo:</p><pre class=\"example-code\"><code class=\"hljs language-css\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-id\">#409EFF</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-primary-light-1</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 10%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 53a8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-2</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 20%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 66b1ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-3</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 30%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 79bbff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-4</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 40%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 8cc5ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-5</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 50%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* a0cfff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-6</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 60%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* b3d8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-7</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 70%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* c6e2ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-8</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 80%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* d9ecff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-9</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 90%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* ecf5ff */</span>\n\n$<span class=\"hljs-selector-tag\">--color-success</span>: <span class=\"hljs-selector-id\">#67c23a</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-warning</span>: <span class=\"hljs-selector-id\">#e6a23c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-danger</span>: <span class=\"hljs-selector-id\">#f56c6c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-info</span>: <span class=\"hljs-selector-id\">#909399</span> !<span class=\"hljs-selector-tag\">default</span>;\n\n...\n</code><span class=\"lang-mark\">css</span></pre>", 4);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Modificando variables", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])();

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Solo debe modificar el archivo <code>element-variables.scss</code>, por ejemplo, para cambiar el color del tema a rojo:</p><pre class=\"example-code\"><code class=\"hljs language-CSS\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-tag\">red</span>;\n</code><span class=\"lang-mark\">CSS</span></pre>", 2);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Construyendo el tema", -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])();

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Después de haber modificado el archivo de variables, utilizaremos el comando <code>et</code> para construir nuestro tema. Puedes activar el modo <code>watch</code> agregando el parámetro <code>-w</code>. Y, si desea personalizar el nombre del archivo, debes agregar el parámetro <code>-c</code> seguido del nombre. Por defecto, el archivo de tema construido es colocado dentro de <code>./theme</code>. Puede especificar un directorio distinto utilizando el parámetro <code>-o</code>.</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ build theme font</span>\n<span class=\"hljs-meta\">&gt;</span><span class=\"bash\"> ✔ build element theme</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 2);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Use custom theme ");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Importar un tema personalizado", -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])();

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Importing your own theme is just like importing the default theme, only this time you import the file built from &quot;Online Theme Roller&quot; or &quot;CLI tool&quot;:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;../theme/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\ncreateApp(App).use(ElementPlus)\n</code><span class=\"lang-mark\">js</span></pre>", 2);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "Importar un tema de componente bajo demanda", -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])();

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>Si esta utilizando <code>babel-plugin-component</code> para importar bajo demanda, solo debe modificar el archivo <code>.babelrc</code> y especificar en la propiedad <code>styleLibraryName</code> la ruta en donde se encuentra localizado su tema personalizado relativo a <code>.babelrc</code>. <strong>Nota</strong> el carácter <code>~</code> es obligatorio:</p><pre class=\"example-code\"><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;~theme&quot;</span>\n      }\n    ]\n  ]\n}\n</code><span class=\"lang-mark\">json</span></pre>", 2);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Si no esta familiarizado con ");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "babel-plugin-component", -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", por favor diríjase a la documentación sobre ");

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  href: "./#/en-US/component/quickstart"
}, "Como Iniciar", -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Para más detalles, consulte el ");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("repositorio del proyecto");

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de ");

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "element-theme", -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".");

function render(_ctx, _cache) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "tema-personalizado",
    content: "Tema personalizado",
    href: "#tema-personalizado",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#tema-personalizado"
      })];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "cambiando-el-color-del-tema",
    content: "Cambiando el color del tema",
    href: "#cambiando-el-color-del-tema",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#cambiando-el-color-del-tema"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://element-plus.github.io/theme-chalk-preview/#/en-US"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7]), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "actualizando-variables-scss-en-tu-proyecto",
    content: "Actualizando variables SCSS en tu proyecto",
    href: "#actualizando-variables-scss-en-tu-proyecto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#actualizando-variables-scss-en-tu-proyecto"
      })];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "cli-para-generar-temas",
    content: "CLI para generar temas",
    href: "#cli-para-generar-temas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#cli-para-generar-temas"
      })];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "instalacion",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#instalacion"
      })];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "inicializar-archivo-de-variables",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#inicializar-archivo-de-variables"
      })];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "modificando-variables",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#modificando-variables"
      })];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "construyendo-el-tema",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#construyendo-el-tema"
      })];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "use-custom-theme",
    content: "Use custom theme",
    href: "#use-custom-theme",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#use-custom-theme"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "importar-un-tema-personalizado",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38, _hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#importar-un-tema-personalizado"
      })];
    }),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "importar-un-tema-de-componente-bajo-demanda",
    content: "<strong>",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_42, _hoisted_43, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#importar-un-tema-de-componente-bajo-demanda"
      })];
    }),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/ElementUI/element-theme"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_51];
    }),
    _: 1
  }), _hoisted_52, _hoisted_53, _hoisted_54]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/custom-theme.md?vue&type=template&id=11a52f8b

// CONCATENATED MODULE: ./website/docs/es/custom-theme.md

const script = {}
script.render = render

/* harmony default export */ var custom_theme = __webpack_exports__["default"] = (script);

/***/ })

}]);