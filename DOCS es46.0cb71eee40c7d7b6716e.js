(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/popover.md?vue&type=template&id=22abab9f

const popovervue_type_template_id_22abab9f_hoisted_1 = {
  class: "content element-doc"
};

const popovervue_type_template_id_22abab9f_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Popover ");

const popovervue_type_template_id_22abab9f_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const popovervue_type_template_id_22abab9f_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Similar a un Tooltip, Popover está construido con "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Vue-popper"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Así que para atributos duplicados, por favor refiérase a la documentación de Tooltip.")], -1);

const popovervue_type_template_id_22abab9f_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "trigger", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es usado para definir como el popover se dispara: ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hover", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "click", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "focus", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "manual", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". En cuanto al elemento desencadenante, puedes escribirlo de dos maneras diferentes: usando el ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "#reference", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("named slot");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", o usando la directiva ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-popover", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y poniendo el ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ref", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de Popover.");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-popover\n    placement=\"top-start\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"hover\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Hover to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"click\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Click to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    ref=\"popover\"\n    placement=\"right\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"focus\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Focus to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"manual\"\n    content=\"this is content, this is content, this is content\"\n    v-model:visible=\"visible\"\n  >\n    <template #reference>\n      <el-button @click=\"visible = !visible\">Manual to activate</el-button>\n    </template>\n  </el-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Información anidada ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Otros componentes pueden anidarse dentro de popover. A continuación un ejemplo de una tabla anidada.", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Reemplaza el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-popover placement=\"right\" :width=\"400\" trigger=\"click\">\n  <template #reference>\n    <el-button>Click to activate</el-button>\n  </template>\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"date\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"name\"></el-table-column>\n    <el-table-column\n      width=\"300\"\n      property=\"address\"\n      label=\"address\"\n    ></el-table-column>\n  </el-table>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Jack',\n            address: 'New York City',\n          },\n        ],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Jack',\n            address: 'New York City',\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Operación anidada ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Por supuesto, puedes anidar otras operaciones. Es más ligero que utilizar un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-popover placement=\"top\" :width=\"160\" v-model:visible=\"visible\">\n  <p>Are you sure to delete this?</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\"\n      >cancel</el-button\n    >\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\"\n      >confirm</el-button\n    >\n  </div>\n  <template #reference>\n    <el-button @click=\"visible = true\">Delete</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Atributo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Tipo"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Valores aceptados"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Por defecto")])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "cómo se dispara el popover"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click/focus/hover/manual"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "click")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "título del popover"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("contenido del popover, puede ser sustituido por un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "ancho del popover"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string, number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Min width 150px")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "posición del popover en la pantalla"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "bottom")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "si el popover está deshabilitado"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "visible / v-model:visible"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "si el popover está visible"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popover offset"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "animación de transición del popover"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el-fade-in-linear")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-arrow", -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("si una flecha del tooltip es mostrada o no. Para más información, por favor refiérase a ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vue-popper");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-options", -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("parámetros para ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("por favor, refiérase a ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("popper.js");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "{ boundariesElement: 'body', gpuAcceleration: false }")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clase propia para popover"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "retraso de la apariencia, en milisegundos"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-after"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "retraso en el cierre, en milisegundos"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "auto-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tiempo a esperar en milisegundos para esconder el Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tabindex", -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tabindex");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de Popover");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number", -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "texto contenido en popover")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "reference"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "elemento HTML que dispara el popover")])])], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos ");

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>show</td><td>se dispara cuando se muestra el popover</td><td>—</td></tr><tr><td>after-enter</td><td>se dispara cuando la transición de entrada termina</td><td>—</td></tr><tr><td>hide</td><td>se dispara cuando se oculta el popover</td><td>—</td></tr><tr><td>after-leave</td><td>se dispara cuando la transición de salida termina</td><td>—</td></tr></tbody></table>", 1);

function popovervue_type_template_id_22abab9f_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", popovervue_type_template_id_22abab9f_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "popover",
    content: "Popover",
    href: "#popover",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [popovervue_type_template_id_22abab9f_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#popover"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [popovervue_type_template_id_22abab9f_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), popovervue_type_template_id_22abab9f_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [popovervue_type_template_id_22abab9f_hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://vuejs.org/v2/guide/components.html#Named-Slots"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
      _: 1
    }), _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "informacion-anidada",
    content: "Información anidada",
    href: "#informacion-anidada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#informacion-anidada"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "operacion-anidada",
    content: "Operación anidada",
    href: "#operacion-anidada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#operacion-anidada"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_32, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_42, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44]),
    _: 1
  })]), _hoisted_45, _hoisted_46, _hoisted_47]), Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_48, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50]),
    _: 1
  })]), _hoisted_51, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  })]), _hoisted_54]), _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_59, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60]),
    _: 1
  }), _hoisted_61]), _hoisted_62, _hoisted_63, _hoisted_64])])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_65, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_66, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos",
    content: "Eventos",
    href: "#eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_67, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos"
    })]),
    _: 1
  }), _hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/popover.md?vue&type=template&id=22abab9f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/popover.md?vue&type=script&lang=ts

/* harmony default export */ var popovervue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Hover to activate");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Click to activate");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Focus to activate");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Manual to activate");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top-start",
          title: "Title",
          width: 200,
          trigger: "hover",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "click",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_popover, {
          ref: "popover",
          placement: "right",
          title: "Title",
          width: 200,
          trigger: "focus",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }, 512), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "manual",
          content: "this is content, this is content, this is content",
          visible: _ctx.visible,
          "onUpdate:visible": _cache[1] || (_cache[1] = $event => _ctx.visible = $event)
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = $event => _ctx.visible = !_ctx.visible)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["visible"])]);
      }

      const democomponentExport = {
        data() {
          return {
            visible: false
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to activate");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, null, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          })]),
          default: _withCtx(() => [_createVNode(_component_el_table, {
            data: _ctx.gridData
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
              width: "150",
              property: "date",
              label: "date"
            }), _createVNode(_component_el_table_column, {
              width: "100",
              property: "name",
              label: "name"
            }), _createVNode(_component_el_table_column, {
              width: "300",
              property: "address",
              label: "address"
            })]),
            _: 1
          }, 8, ["data"])]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-04',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-01',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-03',
              name: 'Jack',
              address: 'New York City'
            }]
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
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("p", null, "Are you sure to delete this?", -1);

      const _hoisted_2 = {
        style: {
          "text-align": "right",
          "margin": "0"
        }
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("cancel");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("confirm");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Delete");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top",
          width: 160,
          visible: _ctx.visible,
          "onUpdate:visible": _cache[3] || (_cache[3] = $event => _ctx.visible = $event)
        }, {
          reference: _withCtx(() => [_createVNode(_component_el_button, {
            onClick: _cache[2] || (_cache[2] = $event => _ctx.visible = true)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_1, _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
            size: "mini",
            type: "text",
            onClick: _cache[0] || (_cache[0] = $event => _ctx.visible = false)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            size: "mini",
            onClick: _cache[1] || (_cache[1] = $event => _ctx.visible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })])]),
          _: 1
        }, 8, ["visible"])]);
      }

      const democomponentExport = {
        data() {
          return {
            visible: false
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
// CONCATENATED MODULE: ./website/docs/es/popover.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/popover.md



popovervue_type_script_lang_ts.render = popovervue_type_template_id_22abab9f_render

/* harmony default export */ var popover = __webpack_exports__["default"] = (popovervue_type_script_lang_ts);

/***/ })

}]);