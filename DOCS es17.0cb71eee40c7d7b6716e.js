(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/container.md?vue&type=template&id=28d27075

const containervue_type_template_id_28d27075_hoisted_1 = {
  class: "content element-doc"
};

const containervue_type_template_id_28d27075_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Contenedor ");

const containervue_type_template_id_28d27075_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Componentes contenedores para iniciar una estructura básica de un sitio:</p><p><code>&lt;el-container&gt;</code>: Contenedor. Cuando este elemento se anida con un <code>&lt;el-header&gt;</code> o <code>&lt;el-footer&gt;</code>, todos los elementos secundarios se organizan verticalmente. De lo contrario, de forma horizontal.</p><p><code>&lt;el-header&gt;</code>: Contenedor para cabeceras.</p><p><code>&lt;el-aside&gt;</code>: Contenedor para secciones laterales (generalmente, una barra lateral).</p><p><code>&lt;el-main&gt;</code>: Contenedor para sección principal.</p><p><code>&lt;el-footer&gt;</code>: Contenedor para pie de página.</p><div class=\"tip\"><p>Estos componentes utilizan flex para el diseño, así que asegúrese que el navegador lo soporta. Además, los elementos directos de <code>&lt;el-container&gt;</code> tienen que ser uno o más de los últimos cuatro componentes. Y el elemento padre de los últimos cuatro componentes debe ser un <code>&lt;el-container&gt;</code>.</p></div>", 7);

const containervue_type_template_id_28d27075_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Diseños comunes ");

const containervue_type_template_id_28d27075_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div class=\"common-layout\">\n  <el-container>\n    <el-header>Cabecera</el-header>\n    <el-main>Principal</el-main>\n  </el-container>\n\n  <el-container>\n    <el-header>Cabecera</el-header>\n    <el-main>Principal</el-main>\n    <el-footer>Pie de página</el-footer>\n  </el-container>\n\n  <el-container>\n    <el-aside width=\"200px\">Barra lateral</el-aside>\n    <el-main>Principal</el-main>\n  </el-container>\n\n  <el-container>\n    <el-header>Cabecera</el-header>\n    <el-container>\n      <el-aside width=\"200px\">Barra lateral</el-aside>\n      <el-main>Principal</el-main>\n    </el-container>\n  </el-container>\n\n  <el-container>\n    <el-header>Cabecera</el-header>\n    <el-container>\n      <el-aside width=\"200px\">Barra lateral</el-aside>\n      <el-container>\n        <el-main>Principal</el-main>\n        <el-footer>Pie de página</el-footer>\n      </el-container>\n    </el-container>\n  </el-container>\n\n  <el-container>\n    <el-aside width=\"200px\">Barra lateral</el-aside>\n    <el-container>\n      <el-header>Cabecera</el-header>\n      <el-main>Principal</el-main>\n    </el-container>\n  </el-container>\n</div>\n\n<style>\n  .el-header,\n  .el-footer {\n    background-color: #b3c0d1;\n    color: var(--el-text-color-primary);\n    text-align: center;\n    line-height: 60px;\n  }\n\n  .el-aside {\n    background-color: #d3dce6;\n    color: var(--el-text-color-primary);\n    text-align: center;\n    line-height: 200px;\n  }\n\n  .el-main {\n    background-color: #e9eef3;\n    color: var(--el-text-color-primary);\n    text-align: center;\n    line-height: 160px;\n  }\n\n  body > .el-container {\n    margin-bottom: 40px;\n  }\n\n  .el-container:nth-child(5) .el-aside,\n  .el-container:nth-child(6) .el-aside {\n    line-height: 260px;\n  }\n\n  .el-container:nth-child(7) .el-aside {\n    line-height: 320px;\n  }\n</style>\n")], -1);

const containervue_type_template_id_28d27075_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ejemplo ");

const containervue_type_template_id_28d27075_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-container style=\"height: 500px; border: 1px solid #eee\">\n  <el-aside width=\"200px\" style=\"background-color: rgb(238, 241, 246)\">\n    <el-menu :default-openeds=\"['1', '3']\">\n      <el-submenu index=\"1\">\n        <template #title><i class=\"el-icon-message\"></i>Navigator One</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"1-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"1-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"1-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>Option4</template>\n          <el-menu-item index=\"1-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-submenu index=\"2\">\n        <template #title><i class=\"el-icon-menu\"></i>Navigator Two</template>\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"2-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"2-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"2-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"2-4\">\n          <template #title>Option 4</template>\n          <el-menu-item index=\"2-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-submenu index=\"3\">\n        <template #title\n          ><i class=\"el-icon-setting\"></i>Navigator Three</template\n        >\n        <el-menu-item-group>\n          <template #title>Group 1</template>\n          <el-menu-item index=\"3-1\">Option 1</el-menu-item>\n          <el-menu-item index=\"3-2\">Option 2</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group 2\">\n          <el-menu-item index=\"3-3\">Option 3</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"3-4\">\n          <template #title>Option 4</template>\n          <el-menu-item index=\"3-4-1\">Option 4-1</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n    </el-menu>\n  </el-aside>\n\n  <el-container>\n    <el-header style=\"text-align: right; font-size: 12px\">\n      <el-dropdown>\n        <i class=\"el-icon-setting\" style=\"margin-right: 15px\"></i>\n        <template #dropdown>\n          <el-dropdown-menu>\n            <el-dropdown-item>View</el-dropdown-item>\n            <el-dropdown-item>Add</el-dropdown-item>\n            <el-dropdown-item>Delete</el-dropdown-item>\n          </el-dropdown-menu>\n        </template>\n      </el-dropdown>\n      <span>Tom</span>\n    </el-header>\n\n    <el-main>\n      <el-table :data=\"tableData\">\n        <el-table-column prop=\"date\" label=\"Date\" width=\"140\">\n        </el-table-column>\n        <el-table-column prop=\"name\" label=\"Name\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n      </el-table>\n    </el-main>\n  </el-container>\n</el-container>\n\n<style>\n  .el-header {\n    background-color: #b3c0d1;\n    color: var(--el-text-color-primary);\n    line-height: 60px;\n  }\n\n  .el-aside {\n    color: var(--el-text-color-primary);\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      const item = {\n        date: '2016-05-02',\n        name: 'Tom',\n        address: 'No. 189, Grove St, Los Angeles',\n      }\n      return {\n        tableData: Array(20).fill(item),\n      }\n    },\n  }\n</script>\n\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const item = {\n        date: '2016-05-02',\n        name: 'Tom',\n        address: 'No. 189, Grove St, Los Angeles',\n      };\n\n      const tableData = ref(Array(20).fill(item));\n\n      return {\n        tableData,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const containervue_type_template_id_28d27075_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de contenedor ");

const containervue_type_template_id_28d27075_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>direction</td><td>dirección de diseño para elementos secundarios</td><td>string</td><td>horizontal / vertical</td><td>vertical cuando el elemento está anidado con <code>el-header</code>, de lo contrario, horizontal</td></tr></tbody></table>", 1);

const containervue_type_template_id_28d27075_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de cabecera ");

const containervue_type_template_id_28d27075_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>height</td><td>altura de la cabecera</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>", 1);

const containervue_type_template_id_28d27075_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de barra lateral ");

const containervue_type_template_id_28d27075_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>width</td><td>ancho de la barra lateral</td><td>string</td><td>—</td><td>300px</td></tr></tbody></table>", 1);

const containervue_type_template_id_28d27075_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de pie de página ");

const containervue_type_template_id_28d27075_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>height</td><td>altura del pie de página</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>", 1);

function containervue_type_template_id_28d27075_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", containervue_type_template_id_28d27075_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "contenedor",
    content: "Contenedor",
    href: "#contenedor",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#contenedor"
    })]),
    _: 1
  }), containervue_type_template_id_28d27075_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "disenos-comunes",
    content: "Diseños comunes",
    href: "#disenos-comunes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#disenos-comunes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ejemplo",
    content: "Ejemplo",
    href: "#ejemplo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ejemplo"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-contenedor",
    content: "Atributos de contenedor",
    href: "#atributos-de-contenedor",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-contenedor"
    })]),
    _: 1
  }), containervue_type_template_id_28d27075_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-cabecera",
    content: "Atributos de cabecera",
    href: "#atributos-de-cabecera",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-cabecera"
    })]),
    _: 1
  }), containervue_type_template_id_28d27075_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-barra-lateral",
    content: "Atributos de barra lateral",
    href: "#atributos-de-barra-lateral",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-barra-lateral"
    })]),
    _: 1
  }), containervue_type_template_id_28d27075_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-pie-de-pagina",
    content: "Atributos de pie de página",
    href: "#atributos-de-pie-de-pagina",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [containervue_type_template_id_28d27075_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-pie-de-pagina"
    })]),
    _: 1
  }), containervue_type_template_id_28d27075_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/container.md?vue&type=template&id=28d27075

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/container.md?vue&type=script&lang=ts

/* harmony default export */ var containervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "common-layout"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Cabecera");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Principal");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Cabecera");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Principal");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Pie de página");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Barra lateral");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Principal");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("Cabecera");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Barra lateral");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Principal");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Cabecera");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Barra lateral");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Principal");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("Pie de página");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("Barra lateral");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("Cabecera");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("Principal");

      function render(_ctx, _cache) {
        const _component_el_header = _resolveComponent("el-header");

        const _component_el_main = _resolveComponent("el-main");

        const _component_el_container = _resolveComponent("el-container");

        const _component_el_footer = _resolveComponent("el-footer");

        const _component_el_aside = _resolveComponent("el-aside");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_main, null, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_main, null, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }), _createVNode(_component_el_footer, null, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_aside, {
            width: "200px"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          }), _createVNode(_component_el_main, null, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_9]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(() => [_hoisted_10]),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(() => [_hoisted_11]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_header, null, {
            default: _withCtx(() => [_hoisted_12]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_aside, {
              width: "200px"
            }, {
              default: _withCtx(() => [_hoisted_13]),
              _: 1
            }), _createVNode(_component_el_container, null, {
              default: _withCtx(() => [_createVNode(_component_el_main, null, {
                default: _withCtx(() => [_hoisted_14]),
                _: 1
              }), _createVNode(_component_el_footer, null, {
                default: _withCtx(() => [_hoisted_15]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_container, null, {
          default: _withCtx(() => [_createVNode(_component_el_aside, {
            width: "200px"
          }, {
            default: _withCtx(() => [_hoisted_16]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_header, null, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(() => [_hoisted_18]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-message"
      }, null, -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Navigator One");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Group 1");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Option 1");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Option 2");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Option 3");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Option4");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Option 4-1");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Navigator Two");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Group 1");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Option 1");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Option 2");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Option 3");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("Option 4");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("Option 4-1");

      const _hoisted_17 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("Navigator Three");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("Group 1");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("Option 1");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("Option 2");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("Option 3");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("Option 4");

      const _hoisted_24 = /*#__PURE__*/_createTextVNode("Option 4-1");

      const _hoisted_25 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting",
        style: {
          "margin-right": "15px"
        }
      }, null, -1);

      const _hoisted_26 = /*#__PURE__*/_createTextVNode("View");

      const _hoisted_27 = /*#__PURE__*/_createTextVNode("Add");

      const _hoisted_28 = /*#__PURE__*/_createTextVNode("Delete");

      const _hoisted_29 = /*#__PURE__*/_createElementVNode("span", null, "Tom", -1);

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_submenu = _resolveComponent("el-submenu");

        const _component_el_menu = _resolveComponent("el-menu");

        const _component_el_aside = _resolveComponent("el-aside");

        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        const _component_el_header = _resolveComponent("el-header");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_main = _resolveComponent("el-main");

        const _component_el_container = _resolveComponent("el-container");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_container, {
          style: {
            "height": "500px",
            "border": "1px solid #eee"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_aside, {
            width: "200px",
            style: {
              "background-color": "rgb(238, 241, 246)"
            }
          }, {
            default: _withCtx(() => [_createVNode(_component_el_menu, {
              "default-openeds": ['1', '3']
            }, {
              default: _withCtx(() => [_createVNode(_component_el_submenu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_1, _hoisted_2]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_3]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_4]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_5]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group 2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_6]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_7]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_8]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_submenu, {
                index: "2"
              }, {
                title: _withCtx(() => [_hoisted_9, _hoisted_10]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_11]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "2-1"
                  }, {
                    default: _withCtx(() => [_hoisted_12]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "2-2"
                  }, {
                    default: _withCtx(() => [_hoisted_13]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group 2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "2-3"
                  }, {
                    default: _withCtx(() => [_hoisted_14]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(() => [_hoisted_15]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "2-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_16]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_submenu, {
                index: "3"
              }, {
                title: _withCtx(() => [_hoisted_17, _hoisted_18]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(() => [_hoisted_19]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "3-1"
                  }, {
                    default: _withCtx(() => [_hoisted_20]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "3-2"
                  }, {
                    default: _withCtx(() => [_hoisted_21]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group 2"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "3-3"
                  }, {
                    default: _withCtx(() => [_hoisted_22]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "3-4"
                }, {
                  title: _withCtx(() => [_hoisted_23]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "3-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_24]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_container, null, {
            default: _withCtx(() => [_createVNode(_component_el_header, {
              style: {
                "text-align": "right",
                "font-size": "12px"
              }
            }, {
              default: _withCtx(() => [_createVNode(_component_el_dropdown, null, {
                dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
                  default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [_hoisted_26]),
                    _: 1
                  }), _createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [_hoisted_27]),
                    _: 1
                  }), _createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [_hoisted_28]),
                    _: 1
                  })]),
                  _: 1
                })]),
                default: _withCtx(() => [_hoisted_25]),
                _: 1
              }), _hoisted_29]),
              _: 1
            }), _createVNode(_component_el_main, null, {
              default: _withCtx(() => [_createVNode(_component_el_table, {
                data: _ctx.tableData
              }, {
                default: _withCtx(() => [_createVNode(_component_el_table_column, {
                  prop: "date",
                  label: "Date",
                  width: "140"
                }), _createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "Name",
                  width: "120"
                }), _createVNode(_component_el_table_column, {
                  prop: "address",
                  label: "Address"
                })]),
                _: 1
              }, 8, ["data"])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          const item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          };
          return {
            tableData: Array(20).fill(item)
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/container.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/container.md



containervue_type_script_lang_ts.render = containervue_type_template_id_28d27075_render

/* harmony default export */ var container = __webpack_exports__["default"] = (containervue_type_script_lang_ts);

/***/ })

}]);