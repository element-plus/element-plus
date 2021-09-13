(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/loading.md?vue&type=template&id=e0c1de0c

const loadingvue_type_template_id_e0c1de0c_hoisted_1 = {
  class: "content element-doc"
};

const loadingvue_type_template_id_e0c1de0c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cargando ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Se muestra la animación mientras se cargan los datos.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cargando dentro de un contenedor ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Muestra una animación en un contenedor (como en una tabla) mientras se cargan los datos.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Element Plus provee dos maneras para invocar el componente de Cargando: por directiva y por servicio. Para la directiva personalizada "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", solo necesitas enlazarlo a un valor "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Por defecto, la máscara de carga se agregará al elemento donde se usa la directiva. Al agregar el modificador "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", la máscara se agrega al elemento body.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table v-loading=\"loading\" :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        loading: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personalización ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Puede personalizar el texto de carga, spinner de carga y color de fondo.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Agregue el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" al elemento en el que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" está vinculado, y su valor se mostrará debajo del spinner. De manera similar, los atributos "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(","), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " element-loading-background"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" se utilizan para establecer el nombre de la clase del icono, el valor del color de fondo y el icono de carga, respectivamente.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"Loading...\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n  <el-table\n    v-loading=\"loading\"\n    :element-loading-svg=\"svg\"\n    class=\"custom-loading-svg\"\n    element-loading-svg-view-box=\"-10, -10, 50, 50\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        loading: true,\n        svg: `\n          <path class=\"path\" d=\"\n            M 30 15\n            L 28 17\n            M 25.61 25.61\n            A 15 15, 0, 0, 1, 15 30\n            A 15 15, 0, 1, 1, 27.99 7.5\n            L 15 15\n          \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n        `,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      tableData: [\n        {\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n        {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District',\n        },\n      ],\n      loading: true,\n      svg: `\n        <path class=\"path\" d=\"\n          M 30 15\n          L 28 17\n          M 25.61 25.61\n          A 15 15, 0, 0, 1, 15 30\n          A 15 15, 0, 1, 1, 27.99 7.5\n          L 15 15\n        \" style=\"stroke-width: 4px; fill: rgba(0, 0, 0, 0)\"/>\n      `,\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_12 = {
  class: "warning"
};

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Aunque el atributo ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" admite fragmentos HTML entrantes, es muy peligroso representar dinámicamente HTML arbitrario en el sitio web porque es fácil causar ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ataque XSS");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Asegúrese de que el contenido de ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-loading-svg", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sea confiable. ** Nunca ** asigne contenido enviado por el usuario al atributo");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " element-loading-svg", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cargando a pantalla completa ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Muestra una animación de pantalla completa mientras se cargan los datos", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cuando se utiliza como una directiva, la carga a pantalla completa requiere el modificador "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y este puede ser agregado al "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". En este caso, si desea deshabilitar el desplazamiento en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", puede agregar otro modificador "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Cuando se utiliza como un servicio, el componente puede ser mostrado a pantalla completa por defecto.")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\"\n  >\n    Como directiva\n  </el-button>\n  <el-button type=\"primary\" @click=\"openFullScreen2\"> Como servicio </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false,\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true\n        setTimeout(() => {\n          this.fullscreenLoading = false\n        }, 2000)\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 2000)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElLoading } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const fullscreenLoading = ref(false);\n      const openFullScreen1 = () => {\n        fullscreenLoading.value = true;\n        setTimeout(() => {\n          fullscreenLoading.value = false;\n        }, 2000);\n      };\n\n      const openFullScreen2 = () => {\n        const loading = ElLoading.service({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)',\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      };\n\n      return {\n        fullscreenLoading,\n        openFullScreen1,\n        openFullScreen2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Servicio ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Puede invocar el componente con un servicio. Importe el servicio:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><p>Invocar:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\">ElLoading.service(options)\n</code><span class=\"lang-mark\">js</span></pre><p>El parámetro <code>options</code> es la configuración del componente, y estos detalles pueden ser encontrados en la siguiente table. <code>LoadingService</code> devuelve una instancia del componente, y puede cerrarlo invocando el método <code>close</code>:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options)\nloadingInstance.close()\n</code><span class=\"lang-mark\">js</span></pre><p>Tenga en cuenta que, en este caso, el componente a pantalla completa es una instancia única. Si un nuevo componente de pantalla completa es invocado antes de que se cierre la existente, se devolverá la instancia existente en lugar de crear la otra instancia:</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> })\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> })\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2) <span class=\"hljs-comment\">// true</span>\n</code><span class=\"lang-mark\">js</span></pre><p>Llamar al método <code>close</code> en cualquiera de estas puede cerrarlo.</p><p>Si Element Plus es importado completamente, un método global <code>$loading</code> puede ser registrado a <code>app.config.globalProperties</code>. Puede invocarlo como esto: <code>this.$loading(options)</code>, y también devuelve una instancia del componente.</p>", 10);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Options ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>target</td><td>el nodo del DOM que el componente debe cubrir. Acepta un objecto DOM o una cadena. Si está es una cadena, este será pasado a <code>document.querySelector</code> para obtener el correspondiente nodo del DOM</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>igual que el modificador <code>body</code> de <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>igual que el modificador <code>fullscreen</code> de <code>v-loading</code></td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>igual que el modificador <code>lock</code> de <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>texto de cargando que se muestra debajo del spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>nombre de clase del spinner personalizado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>color de fondo de la máscara</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>nombre de clase personalizada para el componente</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function loadingvue_type_template_id_e0c1de0c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", loadingvue_type_template_id_e0c1de0c_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cargando",
    content: "Cargando",
    href: "#cargando",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [loadingvue_type_template_id_e0c1de0c_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cargando"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cargando-dentro-de-un-contenedor",
    content: "Cargando dentro de un contenedor",
    href: "#cargando-dentro-de-un-contenedor",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cargando-dentro-de-un-contenedor"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "personalizacion",
    content: "Personalización",
    href: "#personalizacion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#personalizacion"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_12, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_13, _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cargando-a-pantalla-completa",
    content: "Cargando a pantalla completa",
    href: "#cargando-a-pantalla-completa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cargando-a-pantalla-completa"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "servicio",
    content: "Servicio",
    href: "#servicio",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#servicio"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#options"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/loading.md?vue&type=template&id=e0c1de0c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/loading.md?vue&type=script&lang=ts

/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        resolveDirective: _resolveDirective,
        withCtx: _withCtx,
        withDirectives: _withDirectives,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createElementBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "Fecha",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Nombre",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Dirección"
          })]),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }],
            loading: true
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        resolveDirective: _resolveDirective,
        withCtx: _withCtx,
        withDirectives: _withDirectives,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createElementBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          "element-loading-text": "Loading...",
          "element-loading-spinner": "el-icon-loading",
          "element-loading-background": "rgba(0, 0, 0, 0.8)",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "Fecha",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Nombre",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Dirección"
          })]),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]]), _withDirectives(_createVNode(_component_el_table, {
          "element-loading-svg": _ctx.svg,
          class: "custom-loading-svg",
          "element-loading-svg-view-box": "-10, -10, 50, 50",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "Fecha",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Nombre",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Dirección"
          })]),
          _: 1
        }, 8, ["element-loading-svg", "data"]), [[_directive_loading, _ctx.loading]])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }],
            loading: true,
            svg: `
          <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        resolveDirective: _resolveDirective,
        withCtx: _withCtx,
        createVNode: _createVNode,
        withDirectives: _withDirectives,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Como directiva ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Como servicio ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createElementBlock("div", null, [_withDirectives(_createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen1
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), [[_directive_loading, _ctx.fullscreenLoading, void 0, {
          fullscreen: true,
          lock: true
        }]]), _createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen2
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            fullscreenLoading: false
          };
        },

        methods: {
          openFullScreen1() {
            this.fullscreenLoading = true;
            setTimeout(() => {
              this.fullscreenLoading = false;
            }, 2000);
          },

          openFullScreen2() {
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
            }, 2000);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_e0c1de0c_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);