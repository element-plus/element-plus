(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/menu.md?vue&type=template&id=8295db14

const menuvue_type_template_id_8295db14_hoisted_1 = {
  class: "content element-doc"
};

const menuvue_type_template_id_8295db14_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("NavMenu ");

const menuvue_type_template_id_8295db14_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Menú que provee la navegación para tu sitio.", -1);

const menuvue_type_template_id_8295db14_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Top bar ");

const menuvue_type_template_id_8295db14_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Top bar NavMenu puede ser usado en distinto escenarios.", -1);

const menuvue_type_template_id_8295db14_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Por defecto el menú es vertical, pero puede hacerlo horizontal asignando a la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" el valor 'horizontal'. Además, puede utilizar el componente de submenú para crear un menú de segundo nivel. Menú provee "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para customizar los colores.")])], -1);

const menuvue_type_template_id_8295db14_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-menu\n  :default-active=\"activeIndex\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n>\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\">Orders</el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\"\n>\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\">Orders</el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1',\n      }\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeIndex = ref('1');\n      const activeIndex2 = ref('1');\n      const handleSelect = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        activeIndex,\n        activeIndex2,\n        handleSelect,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_8295db14_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Side bar ");

const menuvue_type_template_id_8295db14_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "NavMenu vertical con sub-menús.", -1);

const menuvue_type_template_id_8295db14_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede utilizar el componente "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-menu-item-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para crear un grupo de menú, y el nombre del grupo estará determinado por la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const menuvue_type_template_id_8295db14_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>Default colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n    >\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>Custom colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\"\n    >\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_8295db14_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Collapse ");

const menuvue_type_template_id_8295db14_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "NavMenu vertical puede ser colapsado.", -1);

const menuvue_type_template_id_8295db14_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">expand</el-radio-button>\n  <el-radio-button :label=\"true\">collapse</el-radio-button>\n</el-radio-group>\n<el-menu\n  default-active=\"2\"\n  class=\"el-menu-vertical-demo\"\n  @open=\"handleOpen\"\n  @close=\"handleClose\"\n  :collapse=\"isCollapse\"\n>\n  <el-submenu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>Navigator One</span>\n    </template>\n    <el-menu-item-group>\n      <template #title><span>Group One</span></template>\n      <el-menu-item index=\"1-1\">item one</el-menu-item>\n      <el-menu-item index=\"1-2\">item two</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"Group Two\">\n      <el-menu-item index=\"1-3\">item three</el-menu-item>\n    </el-menu-item-group>\n    <el-submenu index=\"1-4\">\n      <template #title><span>item four</span></template>\n      <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>Navigator Two</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>Navigator Three</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>Navigator Four</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true,\n      }\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath)\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const isCollapse = ref(true);\n      const handleOpen = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      const handleClose = (key, keyPath) => {\n        console.log(key, keyPath);\n      };\n      return {\n        isCollapse,\n        handleOpen,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const menuvue_type_template_id_8295db14_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos Menu ");

const menuvue_type_template_id_8295db14_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>mode</td><td>modo de presentación del menú</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>si el menú está colapsado (solo en modo vertical)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>color de fondo del menú (formato hexadecimal)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>color de texto del menú (formato hexadecimal)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>color de text del menu-item activo (formato hexadecimal)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>índice del menu-item activo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>arreglo que contiene las llaves del sub-menus activo</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>si solo un submenu puede ser activo</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>como dispara eventos sub-menus, solo funciona cuando <code>mode</code> es &#39;horizontal&#39;</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>si el modo <code>vue-router</code> está activado. Si es verdadero, el índice será usado como &#39;path&#39; para activar la ruta</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>si se debe permitir collapse transition</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table>", 1);

const menuvue_type_template_id_8295db14_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Métodos Menu ");

const menuvue_type_template_id_8295db14_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Métodos de evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>open</td><td>abre un sub-menu específico</td><td>index: índice del sub-menu para abrir</td></tr><tr><td>close</td><td>cierra un sub-menu específico</td><td>index: índice del sub-menu para cerrar</td></tr></tbody></table>", 1);

const menuvue_type_template_id_8295db14_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos Menu ");

const menuvue_type_template_id_8295db14_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre de evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>select</td><td>callback ejecutado cuando el menú es activado</td><td>index: índice del menú activado, indexPath: index path del menú activado, item: el elemento de menú seleccionado, routeResult: resultado devuelto por <code>vue-router</code> si <code>router</code> está activado</td></tr><tr><td>open</td><td>callback ejecutado cuando sub-menu se expande</td><td>index: índice del sub-menu expandido, indexPath: index path del sub-menu expandido</td></tr><tr><td>close</td><td>callback ejecutado cuando sub-menu colapsa</td><td>index: índice del sub-menu colapsado, indexPath: index path del menú colapsado</td></tr></tbody></table>", 1);

const menuvue_type_template_id_8295db14_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos Menu-Item ");

const menuvue_type_template_id_8295db14_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre de evento"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parámetros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "callback ejecutado cuando se hace click sobre menu-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el: instancia de menu-item")])])], -1);

const menuvue_type_template_id_8295db14_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos SubMenu ");

const menuvue_type_template_id_8295db14_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>index</td><td>identificador único</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>popper-class</td><td>nombre personalizado de la clase del menú popup</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>tiempo de espera antes de mostrar un submenú</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>tiempo de espera antes de ocultar un submenú</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>si esta <code>disabled</code> el sub-menu</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>si se debe agregar el menú emergente al cuerpo. Si la posición del menú es incorrecta, puede intentar ajustar este prop</td><td>boolean</td><td>-</td><td>level one Submenu: true / other Submenus: false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_8295db14_hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos Menu-Item ");

const menuvue_type_template_id_8295db14_hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>index</td><td>identificador único</td><td>string</td><td>—</td><td>—</td></tr><tr><td>route</td><td>Objeto Vue Router</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si esta <code>disabled</code></td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const menuvue_type_template_id_8295db14_hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos Menu-Group ");

const menuvue_type_template_id_8295db14_hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>título del grupo</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function menuvue_type_template_id_8295db14_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", menuvue_type_template_id_8295db14_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "navmenu",
    content: "NavMenu",
    href: "#navmenu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#navmenu"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "top-bar",
    content: "Top bar",
    href: "#top-bar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#top-bar"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "side-bar",
    content: "Side bar",
    href: "#side-bar",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#side-bar"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "collapse",
    content: "Collapse",
    href: "#collapse",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#collapse"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-menu",
    content: "Atributos Menu",
    href: "#atributos-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "metodos-menu",
    content: "Métodos Menu",
    href: "#metodos-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-menu",
    content: "Eventos Menu",
    href: "#eventos-menu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-menu"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-menu-item",
    content: "Eventos Menu-Item",
    href: "#eventos-menu-item",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-menu-item"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-submenu",
    content: "Atributos SubMenu",
    href: "#atributos-submenu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-submenu"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-menu-item",
    content: "Atributos Menu-Item",
    href: "#atributos-menu-item",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-menu-item"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-menu-group",
    content: "Atributos Menu-Group",
    href: "#atributos-menu-group",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [menuvue_type_template_id_8295db14_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-menu-group"
    })]),
    _: 1
  }), menuvue_type_template_id_8295db14_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/menu.md?vue&type=template&id=8295db14

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/menu.md?vue&type=script&lang=ts

/* harmony default export */ var menuvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Processing Center");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Workspace");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Info");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Orders");

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("div", {
        class: "line"
      }, null, -1);

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Processing Center");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Workspace");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("Info");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("Orders");

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_submenu = _resolveComponent("el-submenu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_submenu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_2]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_6]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_9]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_10]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          })]),
          _: 1
        }, 8, ["default-active", "onSelect"]), _hoisted_12, _createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex2,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect,
          "background-color": "#545c64",
          "text-color": "#fff",
          "active-text-color": "#ffd04b"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_menu_item, {
            index: "1"
          }, {
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_submenu, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item, {
              index: "2-1"
            }, {
              default: _withCtx(() => [_hoisted_15]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-2"
            }, {
              default: _withCtx(() => [_hoisted_16]),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2-3"
            }, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2-4"
            }, {
              title: _withCtx(() => [_hoisted_18]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "2-4-1"
              }, {
                default: _withCtx(() => [_hoisted_19]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-2"
              }, {
                default: _withCtx(() => [_hoisted_20]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2-4-3"
              }, {
                default: _withCtx(() => [_hoisted_21]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            default: _withCtx(() => [_hoisted_22]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            default: _withCtx(() => [_hoisted_23]),
            _: 1
          })]),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },

        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }

        }
      };
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

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("h5", null, "Default colors", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", null, "Navigator One", -1);

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Two", -1);

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Three", -1);

      const _hoisted_13 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_14 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Four", -1);

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("h5", null, "Custom colors", -1);

      const _hoisted_16 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_17 = /*#__PURE__*/_createElementVNode("span", null, "Navigator One", -1);

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("item four");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_23 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_24 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Two", -1);

      const _hoisted_25 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_26 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Three", -1);

      const _hoisted_27 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_28 = /*#__PURE__*/_createElementVNode("span", null, "Navigator Four", -1);

      function render(_ctx, _cache) {
        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_submenu = _resolveComponent("el-submenu");

        const _component_el_menu = _resolveComponent("el-menu");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_1, _createVNode(_component_el_menu, {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose
            }, {
              default: _withCtx(() => [_createVNode(_component_el_submenu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_2, _hoisted_3]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, {
                  title: "Group One"
                }, {
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
                  title: "Group Two"
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
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                default: _withCtx(() => [_hoisted_9, _hoisted_10]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [_hoisted_11, _hoisted_12]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                default: _withCtx(() => [_hoisted_13, _hoisted_14]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_15, _createVNode(_component_el_menu, {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              onOpen: _ctx.handleOpen,
              onClose: _ctx.handleClose,
              "background-color": "#545c64",
              "text-color": "#fff",
              "active-text-color": "#ffd04b"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_submenu, {
                index: "1"
              }, {
                title: _withCtx(() => [_hoisted_16, _hoisted_17]),
                default: _withCtx(() => [_createVNode(_component_el_menu_item_group, {
                  title: "Group One"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-1"
                  }, {
                    default: _withCtx(() => [_hoisted_18]),
                    _: 1
                  }), _createVNode(_component_el_menu_item, {
                    index: "1-2"
                  }, {
                    default: _withCtx(() => [_hoisted_19]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Two"
                }, {
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-3"
                  }, {
                    default: _withCtx(() => [_hoisted_20]),
                    _: 1
                  })]),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "1-4"
                }, {
                  title: _withCtx(() => [_hoisted_21]),
                  default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                    index: "1-4-1"
                  }, {
                    default: _withCtx(() => [_hoisted_22]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "2"
              }, {
                default: _withCtx(() => [_hoisted_23, _hoisted_24]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [_hoisted_25, _hoisted_26]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "4"
              }, {
                default: _withCtx(() => [_hoisted_27, _hoisted_28]),
                _: 1
              })]),
              _: 1
            }, 8, ["onOpen", "onClose"])]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }

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
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("expand");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("collapse");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", null, "Navigator One", -1);

      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", null, "Group One", -1);

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("item two");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("item three");

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", null, "item four", -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("item one");

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Navigator Two");

      const _hoisted_13 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Navigator Three");

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("Navigator Four");

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_menu_item = _resolveComponent("el-menu-item");

        const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        const _component_el_submenu = _resolveComponent("el-submenu");

        const _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.isCollapse = $event),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: false
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: true
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "2",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(() => [_createVNode(_component_el_submenu, {
            index: "1"
          }, {
            title: _withCtx(() => [_hoisted_3, _hoisted_4]),
            default: _withCtx(() => [_createVNode(_component_el_menu_item_group, null, {
              title: _withCtx(() => [_hoisted_5]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-1"
              }, {
                default: _withCtx(() => [_hoisted_6]),
                _: 1
              }), _createVNode(_component_el_menu_item, {
                index: "1-2"
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_menu_item_group, {
              title: "Group Two"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-3"
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "1-4"
            }, {
              title: _withCtx(() => [_hoisted_9]),
              default: _withCtx(() => [_createVNode(_component_el_menu_item, {
                index: "1-4-1"
              }, {
                default: _withCtx(() => [_hoisted_10]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "2"
          }, {
            title: _withCtx(() => [_hoisted_12]),
            default: _withCtx(() => [_hoisted_11]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "3",
            disabled: ""
          }, {
            title: _withCtx(() => [_hoisted_14]),
            default: _withCtx(() => [_hoisted_13]),
            _: 1
          }), _createVNode(_component_el_menu_item, {
            index: "4"
          }, {
            title: _withCtx(() => [_hoisted_16]),
            default: _withCtx(() => [_hoisted_15]),
            _: 1
          })]),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      const democomponentExport = {
        data() {
          return {
            isCollapse: true
          };
        },

        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },

          handleClose(key, keyPath) {
            console.log(key, keyPath);
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
// CONCATENATED MODULE: ./website/docs/es/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_8295db14_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);