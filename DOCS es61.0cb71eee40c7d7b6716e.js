(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/tabs.md?vue&type=template&id=01cd343e

const tabsvue_type_template_id_01cd343e_hoisted_1 = {
  class: "content element-doc"
};

const tabsvue_type_template_id_01cd343e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabulación ");

const tabsvue_type_template_id_01cd343e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Divide colecciones de datos que están relacionados pero pertenecen a diferentes tipos.", -1);

const tabsvue_type_template_id_01cd343e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const tabsvue_type_template_id_01cd343e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Tabulación básica y concisa", -1);

const tabsvue_type_template_id_01cd343e_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabulación provee funcionalidad de tarjeta selectiva. Por defecto, la primer pestaña es seleccionada como activa, y es posible activar cualquier pestaña estableciendo el atributo de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const tabsvue_type_template_id_01cd343e_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\" name=\"first\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\" name=\"second\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\" name=\"third\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\" name=\"fourth\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const tabsvue_type_template_id_01cd343e_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Estilo de Tarjeta ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Pestañas diseñadas como tarjetas.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establecer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para obtener una pestaña diseñada como tarjeta.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-tabs type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first',\n      }\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tarjeta con Bordes ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Pestañas de tarjeta con bordes.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establecer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"User\">User</el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Posición de tabulación ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Es posible usar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tab-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para establecer la posición de la tabulación.")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Es posible escoger entre cuatro direcciones: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tabPosition=\"left|right|top|bottom\"")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"tabPosition\" style=\"margin-bottom: 30px;\">\n    <el-radio-button label=\"top\">top</el-radio-button>\n    <el-radio-button label=\"right\">right</el-radio-button>\n    <el-radio-button label=\"bottom\">bottom</el-radio-button>\n    <el-radio-button label=\"left\">left</el-radio-button>\n  </el-radio-group>\n\n  <el-tabs :tab-position=\"tabPosition\" style=\"height: 200px;\">\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tabPosition: 'left',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Pestaña Personalizada ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Es posible usar slots con nombre para personalizar el contenido de la etiqueta de la pestaña.", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> Route</span>\n    </template>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Agregar y cerrar pestaña ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Solo las pestañas de tipo tarjeta soportan adición y cierre.", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  editable\n  @edit=\"handleTabsEdit\"\n>\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + ''\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content',\n          })\n          this.editableTabsValue = newTabName\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs\n          let activeName = this.editableTabsValue\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1]\n                if (nextTab) {\n                  activeName = nextTab.name\n                }\n              }\n            })\n          }\n\n          this.editableTabsValue = activeName\n          this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Botón disparador personalizado de la nueva pestaña ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button size=\"small\" @click=\"addTab(editableTabsValue)\">\n    add tab\n  </el-button>\n</div>\n<el-tabs\n  v-model=\"editableTabsValue\"\n  type=\"card\"\n  closable\n  @tab-remove=\"removeTab\"\n>\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [\n          {\n            title: 'Tab 1',\n            name: '1',\n            content: 'Tab 1 content',\n          },\n          {\n            title: 'Tab 2',\n            name: '2',\n            content: 'Tab 2 content',\n          },\n        ],\n        tabIndex: 2,\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + ''\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content',\n        })\n        this.editableTabsValue = newTabName\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs\n        let activeName = this.editableTabsValue\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1]\n              if (nextTab) {\n                activeName = nextTab.name\n              }\n            }\n          })\n        }\n\n        this.editableTabsValue = activeName\n        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Pestañas ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor enlazado, nombre de la pestaña seleccionada</td><td>string</td><td>—</td><td>nombre de la primer pestaña</td></tr><tr><td>type</td><td>tipo de Pestaña</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>si la Pestaña es cerrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>si la Pestaña es añadible</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>si la Pestaña es añadible y cerrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>posición de tabulación</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>si el ancho del tab se ajusta automáticamente a su contenedor</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>función <code>hook</code> antes de cambiar de pestaña. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y luego se rechaza, se evitará el cambio.</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos de Pestañas ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>tab-click</td><td>se lanza cuando se hace clic a una pestaña</td><td>pestaña clickeada</td></tr><tr><td>tab-remove</td><td>se lanza cuando se hace clic al botón tab-remove</td><td>nombre de la pestaña removida</td></tr><tr><td>tab-add</td><td>se lanza cuando se hace clic al botón tab-add</td><td>—</td></tr><tr><td>edit</td><td>se lanza cuando los botones de tab-add y/o tab-remove son clickeados</td><td>(targetName, action)</td></tr></tbody></table>", 1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos del Tab-pane ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores Aceptados</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>título de la pestaña</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si la Tabulación está deshabilitada</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>identificador correspondiente al value de la Tabulación, representando el alias del tab-pane</td><td>string</td><td>—</td><td>número ordinal del tab-pane en la secuencia, p.ej el primer tab-pane de pestañas es &#39;1&#39;</td></tr><tr><td>closable</td><td>si el Tab es cerrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>si Tab es renderizado con <code>lazy-load</code></td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tab-pane Slots ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane's content")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Tab-pane's label")])])], -1);

function tabsvue_type_template_id_01cd343e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tabsvue_type_template_id_01cd343e_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabulacion",
    content: "Tabulación",
    href: "#tabulacion",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_01cd343e_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabulacion"
    })]),
    _: 1
  }), tabsvue_type_template_id_01cd343e_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_01cd343e_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), tabsvue_type_template_id_01cd343e_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_01cd343e_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_01cd343e_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "estilo-de-tarjeta",
    content: "Estilo de Tarjeta",
    href: "#estilo-de-tarjeta",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tabsvue_type_template_id_01cd343e_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#estilo-de-tarjeta"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tarjeta-con-bordes",
    content: "Tarjeta con Bordes",
    href: "#tarjeta-con-bordes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tarjeta-con-bordes"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "posicion-de-tabulacion",
    content: "Posición de tabulación",
    href: "#posicion-de-tabulacion",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#posicion-de-tabulacion"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "pestana-personalizada",
    content: "Pestaña Personalizada",
    href: "#pestana-personalizada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#pestana-personalizada"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "agregar-y-cerrar-pestana",
    content: "Agregar y cerrar pestaña",
    href: "#agregar-y-cerrar-pestana",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#agregar-y-cerrar-pestana"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "boton-disparador-personalizado-de-la-nueva-pestana",
    content: "Botón disparador personalizado de la nueva pestaña",
    href: "#boton-disparador-personalizado-de-la-nueva-pestana",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#boton-disparador-personalizado-de-la-nueva-pestana"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-pestanas",
    content: "Atributos de Pestañas",
    href: "#atributos-de-pestanas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-pestanas"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-de-pestanas",
    content: "Eventos de Pestañas",
    href: "#eventos-de-pestanas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-de-pestanas"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-del-tab-pane",
    content: "Atributos del Tab-pane",
    href: "#atributos-del-tab-pane",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-del-tab-pane"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tab-pane-slots",
    content: "Tab-pane Slots",
    href: "#tab-pane-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tab-pane-slots"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/tabs.md?vue&type=template&id=01cd343e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/tabs.md?vue&type=script&lang=ts

/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeName = $event),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User",
            name: "first"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config",
            name: "second"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role",
            name: "third"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task",
            name: "fourth"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'first'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["onTabClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            activeName: 'first'
          };
        },

        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("top");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("right");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("bottom");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("left");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("User");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.tabPosition,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.tabPosition = $event),
          style: {
            "margin-bottom": "30px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: "top"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "right"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "bottom"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "left"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_tabs, {
          "tab-position": _ctx.tabPosition,
          style: {
            "height": "200px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, {
            label: "User"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_7]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }, 8, ["tab-position"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tabPosition: 'left'
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", null, [/*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" Route")], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" Route ");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Config");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Role");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_tab_pane, null, {
            label: _withCtx(() => [_hoisted_1]),
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Config"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Role"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_tab_pane, {
            label: "Task"
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      const democomponentExport = {
        data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },

        methods: {
          handleTabsEdit(targetName, action) {
            if (action === 'add') {
              let newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              let tabs = this.editableTabs;
              let activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                  if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            }
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createBlock: _createBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" add tab ");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_tab_pane = _resolveComponent("el-tab-pane");

        const _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.addTab(_ctx.editableTabsValue))
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.editableTabsValue = $event),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.editableTabs, (item, index) => {
            return _openBlock(), _createBlock(_component_el_tab_pane, {
              key: item.name,
              label: item.title,
              name: item.name
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(item.content), 1)]),
              _: 2
            }, 1032, ["label", "name"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      const democomponentExport = {
        data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },

        methods: {
          addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          },

          removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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
// CONCATENATED MODULE: ./website/docs/es/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_01cd343e_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);