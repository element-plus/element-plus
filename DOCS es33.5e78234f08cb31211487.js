(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/loading.md?vue&type=template&id=14c0c2f6

var loadingvue_type_template_id_14c0c2f6_hoisted_1 = {
  class: "content element-doc"
};

var loadingvue_type_template_id_14c0c2f6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "cargando"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cargando"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cargando")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Se muestra la animación mientras se cargan los datos.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "cargando-dentro-de-un-contenedor"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cargando-dentro-de-un-contenedor"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cargando dentro de un contenedor")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Muestra una animación en un contenedor (como en una tabla) mientras se cargan los datos.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Element Plus provee dos maneras para invocar el componente de Cargando: por directiva y por servicio. Para la directiva personalizada "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", solo necesitas enlazarlo a un valor "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Por defecto, la máscara de carga se agregará al elemento donde se usa la directiva. Al agregar el modificador "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", la máscara se agrega al elemento body.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personalizacion"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personalizacion"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personalización")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede personalizar el texto de carga, spinner de carga y color de fondo.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Agregue el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" al elemento en el que "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" está vinculado, y su valor se mostrará debajo del spinner. Del mismo modo, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-spinner"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "element-loading-background"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" son para personalizar el nombre de la clase del spinner y el color de fondo.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    v-loading=\"loading\"\n    element-loading-text=\"Loading...\"\n    element-loading-spinner=\"el-icon-loading\"\n    element-loading-background=\"rgba(0, 0, 0, 0.8)\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        loading: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "cargando-a-pantalla-completa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cargando-a-pantalla-completa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cargando a pantalla completa")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Muestra una animación de pantalla completa mientras se cargan los datos", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Cuando se utiliza como una directiva, la carga a pantalla completa requiere el modificador "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fullscreen"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y este puede ser agregado al "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". En este caso, si desea deshabilitar el desplazamiento en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", puede agregar otro modificador "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lock"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Cuando se utiliza como un servicio, el componente puede ser mostrado a pantalla completa por defecto.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen1\"\n    v-loading.fullscreen.lock=\"fullscreenLoading\">\n    Como directiva\n  </el-button>\n  <el-button\n    type=\"primary\"\n    @click=\"openFullScreen2\">\n    Como servicio\n  </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: 'Loading',\n          spinner: 'el-icon-loading',\n          background: 'rgba(0, 0, 0, 0.7)'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"servicio\"><a class=\"header-anchor\" href=\"#servicio\">¶</a> Servicio</h3><p>Puede invocar el componente con un servicio. Importe el servicio:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElLoading } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>Invocar:</p><pre><code class=\"hljs language-javascript\">ElLoading.service(options);\n</code></pre><p>El parámetro <code>options</code> es la configuración del componente, y estos detalles pueden ser encontrados en la siguiente table. <code>LoadingService</code> devuelve una instancia del componente, y puede cerrarlo invocando el método <code>close</code>:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance = ElLoading.service(options);\nloadingInstance.close();\n</code></pre><p>Tenga en cuenta que, en este caso, el componente a pantalla completa es una instancia única. Si un nuevo componente de pantalla completa es invocado antes de que se cierre la existente, se devolverá la instancia existente en lugar de crear la otra instancia:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">let</span> loadingInstance1 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-keyword\">let</span> loadingInstance2 = ElLoading.service({ <span class=\"hljs-attr\">fullscreen</span>: <span class=\"hljs-literal\">true</span> });\n<span class=\"hljs-built_in\">console</span>.log(loadingInstance1 === loadingInstance2); <span class=\"hljs-comment\">// true</span>\n</code></pre><p>Llamar al método <code>close</code> en cualquiera de estas puede cerrarlo.</p><p>Si Element Plus es importado completamente, un método global <code>$loading</code> puede ser registrado a <code>app.config.globalProperties</code>. Puede invocarlo como esto: <code>this.$loading(options)</code>, y también devuelve una instancia del componente.</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>target</td><td>el nodo del DOM que el componente debe cubrir. Acepta un objecto DOM o una cadena. Si está es una cadena, este será pasado a <code>document.querySelector</code> para obtener el correspondiente nodo del DOM</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>igual que el modificador <code>body</code> de <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>igual que el modificador <code>fullscreen</code> de <code>v-loading</code></td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>igual que el modificador <code>lock</code> de <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>texto de cargando que se muestra debajo del spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>nombre de clase del spinner personalizado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>color de fondo de la máscara</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>nombre de clase personalizada para el componente</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 13);

function loadingvue_type_template_id_14c0c2f6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", loadingvue_type_template_id_14c0c2f6_hoisted_1, [loadingvue_type_template_id_14c0c2f6_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16]);
}
// CONCATENATED MODULE: ./website/docs/es/loading.md?vue&type=template&id=14c0c2f6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/loading.md?vue&type=script&lang=ts


/* harmony default export */ var loadingvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
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
            })];
          }),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode(_component_el_table, {
          "element-loading-text": "Loading...",
          "element-loading-spinner": "el-icon-loading",
          "element-loading-background": "rgba(0, 0, 0, 0.8)",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
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
            })];
          }),
          _: 1
        }, 8, ["data"]), [[_directive_loading, _ctx.loading]])]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _resolveDirective = vue_esm_browser["Q" /* resolveDirective */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withDirectives = vue_esm_browser["eb" /* withDirectives */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Como directiva ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Como servicio ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _directive_loading = _resolveDirective("loading");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), [[_directive_loading, _ctx.fullscreenLoading, void 0, {
          fullscreen: true,
          lock: true
        }]]), _createVNode(_component_el_button, {
          type: "primary",
          onClick: _ctx.openFullScreen2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fullscreenLoading: false
          };
        },
        methods: {
          openFullScreen1: function openFullScreen1() {
            var _this = this;

            this.fullscreenLoading = true;
            setTimeout(function () {
              _this.fullscreenLoading = false;
            }, 2000);
          },
          openFullScreen2: function openFullScreen2() {
            var loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(function () {
              loading.close();
            }, 2000);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/loading.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/loading.md



loadingvue_type_script_lang_ts.render = loadingvue_type_template_id_14c0c2f6_render

/* harmony default export */ var loading = __webpack_exports__["default"] = (loadingvue_type_script_lang_ts);

/***/ })

}]);