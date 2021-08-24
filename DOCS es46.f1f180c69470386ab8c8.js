(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/popover.md?vue&type=template&id=5f188fd4

var popovervue_type_template_id_5f188fd4_hoisted_1 = {
  class: "content element-doc"
};

var popovervue_type_template_id_5f188fd4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Popover ");

var popovervue_type_template_id_5f188fd4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Uso básico ");

var popovervue_type_template_id_5f188fd4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Similar a un Tooltip, Popover está construido con "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Vue-popper"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". Así que para atributos duplicados, por favor refiérase a la documentación de Tooltip.")], -1);

var popovervue_type_template_id_5f188fd4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("El atributo ");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "trigger", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" es usado para definir como el popover se dispara: ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hover", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "click", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "focus", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" o ");

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "manual", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". En cuanto al elemento desencadenante, puedes escribirlo de dos maneras diferentes: usando el ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "#reference", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("named slot");

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", o usando la directiva ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-popover", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y poniendo el ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ref", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de Popover.");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-popover\n    placement=\"top-start\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"hover\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Hover to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"click\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Click to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    ref=\"popover\"\n    placement=\"right\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"focus\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Focus to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"manual\"\n    content=\"this is content, this is content, this is content\"\n    v-model:visible=\"visible\"\n  >\n    <template #reference>\n      <el-button @click=\"visible = !visible\">Manual to activate</el-button>\n    </template>\n  </el-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Información anidada ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Otros componentes pueden anidarse dentro de popover. A continuación un ejemplo de una tabla anidada.", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Reemplaza el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" con un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"right\"\n  :width=\"400\"\n  trigger=\"click\"\n>\n  <template #reference>\n    <el-button>Click to activate</el-button>\n  </template>\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"date\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"name\"></el-table-column>\n    <el-table-column width=\"300\" property=\"address\" label=\"address\"></el-table-column>\n  </el-table>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: '2016-05-02',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-04',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-01',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-03',\n          name: 'Jack',\n          address: 'New York City'\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Jack',\n            address: 'New York City',\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Operación anidada ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Por supuesto, puedes anidar otras operaciones. Es más ligero que utilizar un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"top\"\n  :width=\"160\"\n  v-model:visible=\"visible\"\n>\n  <p>Are you sure to delete this?</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">cancel</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\">confirm</el-button>\n  </div>\n  <template #reference>\n    <el-button @click=\"visible = true\">Delete</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Atributos ");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Atributo"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Tipo"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Valores aceptados"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Por defecto")])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "cómo se dispara el popover"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "click/focus/hover/manual"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "click")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "título del popover"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("contenido del popover, puede ser sustituido por un "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "ancho del popover"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string, number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Min width 150px")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "posición del popover en la pantalla"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "bottom")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "si el popover está deshabilitado"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "visible / v-model:visible"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "si el popover está visible"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popover offset"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "animación de transición del popover"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-fade-in-linear")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "show-arrow", -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("si una flecha del tooltip es mostrada o no. Para más información, por favor refiérase a ");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vue-popper");

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean", -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true", -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-options", -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("parámetros para ");

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popper.js");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "object", -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("por favor, refiérase a ");

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popper.js");

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "{ boundariesElement: 'body', gpuAcceleration: false }")], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "clase propia para popover"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "show-after"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "retraso de la apariencia, en milisegundos"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hide-after"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "retraso en el cierre, en milisegundos"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "auto-close"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "tiempo a esperar en milisegundos para esconder el Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "tabindex", -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("tabindex");

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de Popover");

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number", -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Slot ");

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Nombre"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "texto contenido en popover")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "reference"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "elemento HTML que dispara el popover")])])], -1);

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Eventos ");

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>show</td><td>se dispara cuando se muestra el popover</td><td>—</td></tr><tr><td>after-enter</td><td>se dispara cuando la transición de entrada termina</td><td>—</td></tr><tr><td>hide</td><td>se dispara cuando se oculta el popover</td><td>—</td></tr><tr><td>after-leave</td><td>se dispara cuando la transición de salida termina</td><td>—</td></tr></tbody></table>", 1);

function popovervue_type_template_id_5f188fd4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", popovervue_type_template_id_5f188fd4_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "popover",
    content: "Popover",
    href: "#popover",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [popovervue_type_template_id_5f188fd4_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#popover"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [popovervue_type_template_id_5f188fd4_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#uso-basico"
      })];
    }),
    _: 1
  }), popovervue_type_template_id_5f188fd4_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [popovervue_type_template_id_5f188fd4_hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        href: "https://vuejs.org/v2/guide/components.html#Named-Slots"
      }, {
        default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
          return [_hoisted_17];
        }),
        _: 1
      }), _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22])])];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "informacion-anidada",
    content: "Información anidada",
    href: "#informacion-anidada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#informacion-anidada"
      })];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "operacion-anidada",
    content: "Operación anidada",
    href: "#operacion-anidada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#operacion-anidada"
      })];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "atributos",
    content: "Atributos",
    href: "#atributos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#atributos"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_43, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    _: 1
  })]), _hoisted_45, _hoisted_46, _hoisted_47]), Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_49, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_50];
    }),
    _: 1
  })]), _hoisted_51, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_52, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_53];
    }),
    _: 1
  })]), _hoisted_54]), _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_59, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_60];
    }),
    _: 1
  }), _hoisted_61]), _hoisted_62, _hoisted_63, _hoisted_64])])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_65, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#slot"
      })];
    }),
    _: 1
  }), _hoisted_66, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "eventos",
    content: "Eventos",
    href: "#eventos",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_67, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#eventos"
      })];
    }),
    _: 1
  }), _hoisted_68, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/popover.md?vue&type=template&id=5f188fd4

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/popover.md?vue&type=script&lang=ts


/* harmony default export */ var popovervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Hover to activate");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Click to activate");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Focus to activate");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Manual to activate");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top-start",
          title: "Title",
          width: 200,
          trigger: "hover",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "click",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          ref: "popover",
          placement: "right",
          title: "Title",
          width: 200,
          trigger: "focus",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "manual",
          content: "this is content, this is content, this is content",
          visible: _ctx.visible,
          "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = !_ctx.visible;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to activate");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
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
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
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
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "Are you sure to delete this?", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "right",
          "margin": "0"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("cancel");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("confirm");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Delete");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top",
          width: 160,
          visible: _ctx.visible,
          "onUpdate:visible": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.visible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
              size: "mini",
              type: "text",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              size: "mini",
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/popover.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/popover.md



popovervue_type_script_lang_ts.render = popovervue_type_template_id_5f188fd4_render

/* harmony default export */ var popover = __webpack_exports__["default"] = (popovervue_type_script_lang_ts);

/***/ })

}]);