(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/menu.md?vue&type=template&id=66b2876d

var menuvue_type_template_id_66b2876d_hoisted_1 = {
  class: "content element-doc"
};

var menuvue_type_template_id_66b2876d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "navmenu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#navmenu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" NavMenu")], -1);

var menuvue_type_template_id_66b2876d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Menú que provee la navegación para tu sitio.", -1);

var menuvue_type_template_id_66b2876d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "top-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#top-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Top bar")], -1);

var menuvue_type_template_id_66b2876d_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Top bar NavMenu puede ser usado en distinto escenarios.", -1);

var menuvue_type_template_id_66b2876d_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Por defecto el menú es vertical, pero puede hacerlo horizontal asignando a la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "mode"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" el valor 'horizontal'. Además, puede utilizar el componente de submenú para crear un menú de segundo nivel. Menú provee "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "background-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-text-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para customizar los colores.")])], -1);

var menuvue_type_template_id_66b2876d_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-menu :default-active=\"activeIndex\" class=\"el-menu-demo\" mode=\"horizontal\" @select=\"handleSelect\">\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Orders</a></el-menu-item>\n</el-menu>\n<div class=\"line\"></div>\n<el-menu\n  :default-active=\"activeIndex2\"\n  class=\"el-menu-demo\"\n  mode=\"horizontal\"\n  @select=\"handleSelect\"\n  background-color=\"#545c64\"\n  text-color=\"#fff\"\n  active-text-color=\"#ffd04b\">\n  <el-menu-item index=\"1\">Processing Center</el-menu-item>\n  <el-submenu index=\"2\">\n    <template #title>Workspace</template>\n    <el-menu-item index=\"2-1\">item one</el-menu-item>\n    <el-menu-item index=\"2-2\">item two</el-menu-item>\n    <el-menu-item index=\"2-3\">item three</el-menu-item>\n    <el-submenu index=\"2-4\">\n      <template #title>item four</template>\n      <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n      <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n      <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"3\" disabled>Info</el-menu-item>\n  <el-menu-item index=\"4\"><a href=\"https://www.ele.me\" target=\"_blank\">Orders</a></el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: '1',\n        activeIndex2: '1'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_66b2876d_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "side-bar"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#side-bar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Side bar")], -1);

var menuvue_type_template_id_66b2876d_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "NavMenu vertical con sub-menús.", -1);

var menuvue_type_template_id_66b2876d_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede utilizar el componente "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-menu-item-group"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para crear un grupo de menú, y el nombre del grupo estará determinado por la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" o la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var menuvue_type_template_id_66b2876d_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"tac\">\n  <el-col :span=\"12\">\n    <h5>Default colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span=\"12\">\n    <h5>Custom colors</h5>\n    <el-menu\n      default-active=\"2\"\n      class=\"el-menu-vertical-demo\"\n      @open=\"handleOpen\"\n      @close=\"handleClose\"\n      background-color=\"#545c64\"\n      text-color=\"#fff\"\n      active-text-color=\"#ffd04b\">\n      <el-submenu index=\"1\">\n        <template #title>\n          <i class=\"el-icon-location\"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title=\"Group One\">\n          <el-menu-item index=\"1-1\">item one</el-menu-item>\n          <el-menu-item index=\"1-2\">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title=\"Group Two\">\n          <el-menu-item index=\"1-3\">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index=\"1-4\">\n          <template #title>item four</template>\n          <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index=\"2\">\n        <i class=\"el-icon-menu\"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index=\"3\" disabled>\n        <i class=\"el-icon-document\"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index=\"4\">\n        <i class=\"el-icon-setting\"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_66b2876d_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "collapse"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Collapse")], -1);

var menuvue_type_template_id_66b2876d_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "NavMenu vertical puede ser colapsado.", -1);

var menuvue_type_template_id_66b2876d_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"isCollapse\" style=\"margin-bottom: 20px;\">\n  <el-radio-button :label=\"false\">expand</el-radio-button>\n  <el-radio-button :label=\"true\">collapse</el-radio-button>\n</el-radio-group>\n<el-menu default-active=\"2\" class=\"el-menu-vertical-demo\" @open=\"handleOpen\" @close=\"handleClose\" :collapse=\"isCollapse\">\n  <el-submenu index=\"1\">\n    <template #title>\n      <i class=\"el-icon-location\"></i>\n      <span>Navigator One</span>\n    </template>\n    <el-menu-item-group>\n      <template #title><span>Group One</span></template>\n      <el-menu-item index=\"1-1\">item one</el-menu-item>\n      <el-menu-item index=\"1-2\">item two</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title=\"Group Two\">\n      <el-menu-item index=\"1-3\">item three</el-menu-item>\n    </el-menu-item-group>\n    <el-submenu index=\"1-4\">\n      <template #title><span>item four</span></template>\n      <el-menu-item index=\"1-4-1\">item one</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index=\"2\">\n    <i class=\"el-icon-menu\"></i>\n    <template #title>Navigator Two</template>\n  </el-menu-item>\n  <el-menu-item index=\"3\" disabled>\n    <i class=\"el-icon-document\"></i>\n    <template #title>Navigator Three</template>\n  </el-menu-item>\n  <el-menu-item index=\"4\">\n    <i class=\"el-icon-setting\"></i>\n    <template #title>Navigator Four</template>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n</script>\n")], -1);

var menuvue_type_template_id_66b2876d_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos-menu\"><a class=\"header-anchor\" href=\"#atributos-menu\">¶</a> Atributos Menu</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>mode</td><td>modo de presentación del menú</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>si el menú está colapsado (solo en modo vertical)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>color de fondo del menú (formato hexadecimal)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>color de texto del menú (formato hexadecimal)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>color de text del menu-item activo (formato hexadecimal)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>índice del menu-item activo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>arreglo que contiene las llaves del sub-menus activo</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>si solo un submenu puede ser activo</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>como dispara eventos sub-menus, solo funciona cuando <code>mode</code> es &#39;horizontal&#39;</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>si el modo <code>vue-router</code> está activado. Si es verdadero, el índice será usado como &#39;path&#39; para activar la ruta</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>si se debe permitir collapse transition</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id=\"metodos-menu\"><a class=\"header-anchor\" href=\"#metodos-menu\">¶</a> Métodos Menu</h3><table><thead><tr><th>Métodos de evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>open</td><td>abre un sub-menu específico</td><td>index: índice del sub-menu para abrir</td></tr><tr><td>close</td><td>cierra un sub-menu específico</td><td>index: índice del sub-menu para cerrar</td></tr></tbody></table><h3 id=\"eventos-menu\"><a class=\"header-anchor\" href=\"#eventos-menu\">¶</a> Eventos Menu</h3><table><thead><tr><th>Nombre de evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>select</td><td>callback ejecutado cuando el menú es activado</td><td>index: índice del menú activado, indexPath: index path del menú activado</td></tr><tr><td>open</td><td>callback ejecutado cuando sub-menu se expande</td><td>index: índice del sub-menu expandido, indexPath: index path del sub-menu expandido</td></tr><tr><td>close</td><td>callback ejecutado cuando sub-menu colapsa</td><td>index: índice del sub-menu colapsado, indexPath: index path del menú colapsado</td></tr></tbody></table><h3 id=\"eventos-menu-item\"><a class=\"header-anchor\" href=\"#eventos-menu-item\">¶</a> Eventos Menu-Item</h3><table><thead><tr><th>Nombre de evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>click</td><td>callback ejecutado cuando se hace click sobre menu-item</td><td>el: instancia de menu-item</td></tr></tbody></table><h3 id=\"atributos-submenu\"><a class=\"header-anchor\" href=\"#atributos-submenu\">¶</a> Atributos SubMenu</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>index</td><td>identificador único</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>popper-class</td><td>nombre personalizado de la clase del menú popup</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>tiempo de espera antes de mostrar un submenú</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>tiempo de espera antes de ocultar un submenú</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>si esta <code>disabled</code> el sub-menu</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>si se debe agregar el menú emergente al cuerpo. Si la posición del menú es incorrecta, puede intentar ajustar este prop</td><td>boolean</td><td>-</td><td>level one Submenu: true / other Submenus: false</td></tr></tbody></table><h3 id=\"atributos-menu-item\"><a class=\"header-anchor\" href=\"#atributos-menu-item\">¶</a> Atributos Menu-Item</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>index</td><td>identificador único</td><td>string</td><td>—</td><td>—</td></tr><tr><td>route</td><td>Objeto Vue Router</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si esta <code>disabled</code></td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"atributos-menu-group\"><a class=\"header-anchor\" href=\"#atributos-menu-group\">¶</a> Atributos Menu-Group</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>title</td><td>título del grupo</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 14);

function menuvue_type_template_id_66b2876d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", menuvue_type_template_id_66b2876d_hoisted_1, [menuvue_type_template_id_66b2876d_hoisted_2, menuvue_type_template_id_66b2876d_hoisted_3, menuvue_type_template_id_66b2876d_hoisted_4, menuvue_type_template_id_66b2876d_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_66b2876d_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_66b2876d_hoisted_6];
    }),
    _: 1
  }), menuvue_type_template_id_66b2876d_hoisted_8, menuvue_type_template_id_66b2876d_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_66b2876d_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_66b2876d_hoisted_10];
    }),
    _: 1
  }), menuvue_type_template_id_66b2876d_hoisted_12, menuvue_type_template_id_66b2876d_hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [menuvue_type_template_id_66b2876d_hoisted_14];
    }),
    _: 1
  }), menuvue_type_template_id_66b2876d_hoisted_15]);
}
// CONCATENATED MODULE: ./website/docs/es/menu.md?vue&type=template&id=66b2876d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/menu.md?vue&type=script&lang=ts


/* harmony default export */ var menuvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Processing Center");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Workspace");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_11 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Orders", -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "line"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("Processing Center");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Workspace");

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("Info");

      var _hoisted_23 = /*#__PURE__*/_createVNode("a", {
        href: "https://www.ele.me",
        target: "_blank"
      }, "Orders", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_menu, {
          "default-active": _ctx.activeIndex,
          class: "el-menu-demo",
          mode: "horizontal",
          onSelect: _ctx.handleSelect
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_2];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
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
          default: _withCtx(function () {
            return [_createVNode(_component_el_menu_item, {
              index: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_submenu, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item, {
                  index: "2-1"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_15];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-2"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_16];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item, {
                  index: "2-3"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "2-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_18];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "2-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_19];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_20];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2-4-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_21];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["default-active", "onSelect"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect: function handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("h5", null, "Default colors", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", null, "Navigator Two", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("span", null, "Navigator Three", -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("span", null, "Navigator Four", -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("h5", null, "Custom colors", -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_17 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_18 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_19 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("item four");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_23 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_24 = /*#__PURE__*/_createVNode("span", null, "Navigator Two", -1);

      var _hoisted_25 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_26 = /*#__PURE__*/_createVNode("span", null, "Navigator Three", -1);

      var _hoisted_27 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_28 = /*#__PURE__*/_createVNode("span", null, "Navigator Four", -1);

      function render(_ctx, _cache) {
        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "tac"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_2, _hoisted_3];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group One"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_4];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_5];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Two"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_6];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_7];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_8];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9, _hoisted_10];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_11, _hoisted_12];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_13, _hoisted_14];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_15, _createVNode(_component_el_menu, {
                  "default-active": "2",
                  class: "el-menu-vertical-demo",
                  onOpen: _ctx.handleOpen,
                  onClose: _ctx.handleClose,
                  "background-color": "#545c64",
                  "text-color": "#fff",
                  "active-text-color": "#ffd04b"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_submenu, {
                      index: "1"
                    }, {
                      title: _withCtx(function () {
                        return [_hoisted_16, _hoisted_17];
                      }),
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_menu_item_group, {
                          title: "Group One"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_18];
                              }),
                              _: 1
                            }), _createVNode(_component_el_menu_item, {
                              index: "1-2"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_19];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_menu_item_group, {
                          title: "Group Two"
                        }, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-3"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_20];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        }), _createVNode(_component_el_submenu, {
                          index: "1-4"
                        }, {
                          title: _withCtx(function () {
                            return [_hoisted_21];
                          }),
                          default: _withCtx(function () {
                            return [_createVNode(_component_el_menu_item, {
                              index: "1-4-1"
                            }, {
                              default: _withCtx(function () {
                                return [_hoisted_22];
                              }),
                              _: 1
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_23, _hoisted_24];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "3",
                      disabled: ""
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_25, _hoisted_26];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "4"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_27, _hoisted_28];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["onOpen", "onClose"])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("expand");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("collapse");

      var _hoisted_3 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", null, "Navigator One", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", null, "Group One", -1);

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("item two");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("item three");

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", null, "item four", -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("item one");

      var _hoisted_11 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-menu"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("Navigator Two");

      var _hoisted_13 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-document"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createTextVNode("Navigator Three");

      var _hoisted_15 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-setting"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("Navigator Four");

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_menu_item = _resolveComponent("el-menu-item");

        var _component_el_menu_item_group = _resolveComponent("el-menu-item-group");

        var _component_el_submenu = _resolveComponent("el-submenu");

        var _component_el_menu = _resolveComponent("el-menu");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.isCollapse,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.isCollapse = $event;
          }),
          style: {
            "margin-bottom": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: false
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio_button, {
              label: true
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_menu, {
          "default-active": "2",
          class: "el-menu-vertical-demo",
          onOpen: _ctx.handleOpen,
          onClose: _ctx.handleClose,
          collapse: _ctx.isCollapse
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_submenu, {
              index: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_menu_item_group, null, {
                  title: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_6];
                      }),
                      _: 1
                    }), _createVNode(_component_el_menu_item, {
                      index: "1-2"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_7];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_menu_item_group, {
                  title: "Group Two"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-3"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_8];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_el_submenu, {
                  index: "1-4"
                }, {
                  title: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_menu_item, {
                      index: "1-4-1"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_10];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "2"
            }, {
              title: _withCtx(function () {
                return [_hoisted_12];
              }),
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "3",
              disabled: ""
            }, {
              title: _withCtx(function () {
                return [_hoisted_14];
              }),
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_menu_item, {
              index: "4"
            }, {
              title: _withCtx(function () {
                return [_hoisted_16];
              }),
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onOpen", "onClose", "collapse"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            isCollapse: true
          };
        },
        methods: {
          handleOpen: function handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose: function handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/menu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/menu.md



menuvue_type_script_lang_ts.render = menuvue_type_template_id_66b2876d_render

/* harmony default export */ var menu = __webpack_exports__["default"] = (menuvue_type_script_lang_ts);

/***/ })

}]);