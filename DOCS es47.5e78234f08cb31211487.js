(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/select.md?vue&type=template&id=edd6ef2e

var selectvue_type_template_id_edd6ef2e_hoisted_1 = {
  class: "content element-doc"
};

var selectvue_type_template_id_edd6ef2e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Select")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cuando haya muchas opciones, utilice un menú desplegable para mostrar y seleccionar las que desee.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es el valor de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" que está seleccionado actualmente.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled-en-el-option"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled-en-el-option"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled en el-option")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca el valor de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" como "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para deshabilitar esta opción.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2',\n          disabled: true\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled-en-el-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled-en-el-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled en el-select")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Desactivar todo el componente.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Configure "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para deshabilitarla.")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" disabled placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "select-simple-limpiable"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#select-simple-limpiable"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Select simple limpiable")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede limpiar un Select con un icono.", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y aparecerá un icono. Tenga en cuenta que la opción "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es sólo para una selección individual.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" clearable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccion-multiple-basica"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccion-multiple-basica"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Selección múltiple básica")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Selección multiple utiliza tags para mostrar las opciones seleccionadas.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Configure el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para habilitar el modo múltiple. En este caso, el valor del "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" será un array de opciones seleccionadas. De forma predeterminada, las opciones seleccionadas se mostrarán como tags. Se pueden contraer a un texto utilizando el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value1\" multiple placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model=\"value2\"\n    multiple\n    collapse-tags\n    style=\"margin-left: 20px;\"\n    placeholder=\"Select\">\n    <el-option\n        v-for=\"item in options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value1: [],\n        value2: []\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personalizar-template"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personalizar-template"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personalizar template")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede personalizar templates HTML para las opciones.", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Inserte templates HTML personalizados en el slot de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.value }}</span>\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [{\n          value: 'Beijing',\n          label: 'Beijing'\n        }, {\n          value: 'Shanghai',\n          label: 'Shanghai'\n        }, {\n          value: 'Nanjing',\n          label: 'Nanjing'\n        }, {\n          value: 'Chengdu',\n          label: 'Chengdu'\n        }, {\n          value: 'Shenzhen',\n          label: 'Shenzhen'\n        }, {\n          value: 'Guangzhou',\n          label: 'Guangzhou'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "agrupando"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#agrupando"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Agrupando")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Mostrar opciones en grupos.", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilice "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option-group"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para agrupar las opciones, y su atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" representa el nombre del grupo.")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\">\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\">\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          label: 'Popular cities',\n          options: [{\n            value: 'Shanghai',\n            label: 'Shanghai'\n          }, {\n            value: 'Beijing',\n            label: 'Beijing'\n          }]\n        }, {\n          label: 'City name',\n          options: [{\n            value: 'Chengdu',\n            label: 'Chengdu'\n          }, {\n            value: 'Shenzhen',\n            label: 'Shenzhen'\n          }, {\n            value: 'Guangzhou',\n            label: 'Guangzhou'\n          }, {\n            value: 'Dalian',\n            label: 'Dalian'\n          }]\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filtrado-de-opciones"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filtrado-de-opciones"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filtrado de opciones")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede filtrar opciones como lo desee.", -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Añadir "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" permite filtrar. Por defecto, Select buscará todas las opciones cuyo atributo"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" contenga el valor del input. Si prefiere otras estrategias de filtrado, puede pasar el "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual.")])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" filterable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "busqueda-remota"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#busqueda-remota"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Búsqueda remota")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Introduzca palabras y datos para buscar desde el servidor.", -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Configure el valor de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para habilitar la búsqueda remota, y debería pasar el método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual. Tenga en cuenta que si "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" se presenta con la directiva "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-for"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", debe agregar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Su valor tiene que ser unívoco, como el valor de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "item.value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en el ejemplo siguiente.")])], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder=\"Please enter a keyword\"\n    :remote-method=\"remoteMethod\"\n    :loading=\"loading\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: [\"Alabama\", \"Alaska\", \"Arizona\",\n        \"Arkansas\", \"California\", \"Colorado\",\n        \"Connecticut\", \"Delaware\", \"Florida\",\n        \"Georgia\", \"Hawaii\", \"Idaho\", \"Illinois\",\n        \"Indiana\", \"Iowa\", \"Kansas\", \"Kentucky\",\n        \"Louisiana\", \"Maine\", \"Maryland\",\n        \"Massachusetts\", \"Michigan\", \"Minnesota\",\n        \"Mississippi\", \"Missouri\", \"Montana\",\n        \"Nebraska\", \"Nevada\", \"New Hampshire\",\n        \"New Jersey\", \"New Mexico\", \"New York\",\n        \"North Carolina\", \"North Dakota\", \"Ohio\",\n        \"Oklahoma\", \"Oregon\", \"Pennsylvania\",\n        \"Rhode Island\", \"South Carolina\",\n        \"South Dakota\", \"Tennessee\", \"Texas\",\n        \"Utah\", \"Vermont\", \"Virginia\",\n        \"Washington\", \"West Virginia\", \"Wisconsin\",\n        \"Wyoming\"]\n      }\n    },\n    mounted() {\n      this.list = this.states.map(item => {\n        return { value: `value:${item}`, label: `label:${item}` };\n      });\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true;\n          setTimeout(() => {\n            this.loading = false;\n            this.options = this.list.filter(item => {\n              return item.label.toLowerCase()\n                .indexOf(query.toLowerCase()) > -1;\n            });\n          }, 200);\n        } else {\n          this.options = [];\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "crear-nuevos-items"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#crear-nuevos-items"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Crear nuevos items")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Crear y seleccionar nuevos items que no están incluidas en las opciones de selección.", -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Al utilizar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", los usuarios pueden crear nuevos elementos escribiendo en el cuadro del input. Tenga en cuenta que para que "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" funcione, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" debe ser "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    placeholder=\"Choose tags for your article\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'HTML',\n          label: 'HTML'\n        }, {\n          value: 'CSS',\n          label: 'CSS'\n        }, {\n          value: 'JavaScript',\n          label: 'JavaScript'\n        }],\n        value: []\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>Si el valor de encuadernación de Select es un objeto, asegúrese de asignar <code>value-key</code> como el nombre único de la clave de identidad.</p></div><h3 id=\"select-atributos\"><a class=\"header-anchor\" href=\"#select-atributos\">¶</a> Select atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>si multiple-select esta activo</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>si Select esta deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>si se colapsan los tags a un texto cuando <code>multiple</code> es <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>nombre de clave de identidad única para el valor, necesario cuando el valor es un objeto.</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>tamaño del Input</td><td>string</td><td>large/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>si el select puede ser limpiado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>máximo numero de opciones que el usuario puede seleccionar cuando <code>multiple</code> es <code>true</code>. Sin límite cuando se fija a 0</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>el atributo <code>name</code> del input seleccionado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>el atributo <code>autocomplete</code> del input seleccionado</td><td>string</td><td>—</td><td>off</td></tr><tr><td>auto-complete</td><td>@DEPRECATED en la proxima major versión</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>placeholder</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>filterable</td><td>si Select es filtrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>si esta permitido crear nuevos items. Para usar esto, <code>filterable</code> debe ser <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>método de filtrado personalizado</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>si las opciones se traerán desde el servidor</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>método de búsqueda remota personalizada</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>si Select está cargando datos del servidor</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>texto mostrado durante la carga de datos del servidor, también puedes usar la configuración de slot = &quot;empty&quot;</td><td>string</td><td>—</td><td>Loading</td></tr><tr><td>no-match-text</td><td>texto mostrado cuando ningún dato coincide con la consulta de filtrado. También puedes usar la configuración de slot = &quot;empty&quot;</td><td>string</td><td>—</td><td>No matching data</td></tr><tr><td>no-data-text</td><td>texto mostrado cuando no hay opciones</td><td>string</td><td>—</td><td>No data</td></tr><tr><td>popper-class</td><td>nombre de clase personalizado para el menú desplegable del Select</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>cuando <code>multiple</code> y <code>filter</code> es <code>true</code>, si se debe reservar la palabra clave actual después de seleccionar una opción.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>seleccione la primera opción de coincidencia en la tecla enter. Uso con <code>filterable</code> o <code>remote</code>.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>si añadir o no el menu popup al body. Si el posicionamiento del popup es incorrecto, puede intentar poner este <code>prop</code> en <code>false</code>.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>automatic-dropdown</td><td>para non-filterable Select, este <code>prop</code> decide si el menú de opciones aparece cuando la entrada está enfocada</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>Clase personalizada para el icono <code>clear</code></td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id=\"eventos-select\"><a class=\"header-anchor\" href=\"#eventos-select\">¶</a> Eventos Select</h3><table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se dispara cuando el valor del select cambia</td><td>valor actual del select</td></tr><tr><td>visible-change</td><td>se dispara cuando el menú desplegable aparece o desaparece</td><td>true cuando aparece, y false en otro caso</td></tr><tr><td>remove-tag</td><td>se dispara cuando un tag es removido en modo múltiple</td><td>el valor del tag removido</td></tr><tr><td>clear</td><td>se dispara cuando el icono se clickea en un Select limpiable</td><td>—</td></tr><tr><td>blur</td><td>se dispara cuando el input pierde el foco</td><td>(event: Event)</td></tr><tr><td>focus</td><td>se dispara cuando el input obtiene el foco</td><td>(event: Event)</td></tr></tbody></table><h3 id=\"select-slots\"><a class=\"header-anchor\" href=\"#select-slots\">¶</a> Select Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>lista de los componentes Option</td></tr><tr><td>prefix</td><td>contenido prefix de un Select</td></tr><tr><td>empty</td><td>Lista sin opciones</td></tr></tbody></table><h3 id=\"atributos-del-grupo-de-opciones\"><a class=\"header-anchor\" href=\"#atributos-del-grupo-de-opciones\">¶</a> Atributos del grupo de opciones</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>label</td><td>nombre del grupo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si se deshabilitan todas las opciones del grupo</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"atributos-de-opciones\"><a class=\"header-anchor\" href=\"#atributos-de-opciones\">¶</a> Atributos de opciones</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value</td><td>valor de option</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>etiqueta de option, es igual a <code>value</code> si se omite</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si option esta deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"metodos\"><a class=\"header-anchor\" href=\"#metodos\">¶</a> Metodos</h3><table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>focus</td><td>Foco en el componente input</td><td>-</td></tr><tr><td>blur</td><td>Quita el focus del componente y oculta el dropdown</td><td>-</td></tr></tbody></table>", 13);

function selectvue_type_template_id_edd6ef2e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo9");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", selectvue_type_template_id_edd6ef2e_hoisted_1, [selectvue_type_template_id_edd6ef2e_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_30, _hoisted_31, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_34, _hoisted_35, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    _: 1
  }), _hoisted_38, _hoisted_39, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    _: 1
  }), _hoisted_42]);
}
// CONCATENATED MODULE: ./website/docs/es/select.md?vue&type=template&id=edd6ef2e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/select.md?vue&type=script&lang=ts


/* harmony default export */ var selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value,
                disabled: item.disabled
              }, null, 8, ["label", "value", "disabled"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2',
              disabled: true
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          disabled: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          clearable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          multiple: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_select, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          multiple: "",
          "collapse-tags": "",
          style: {
            "margin-left": "20px"
          },
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value1: [],
            value2: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "float": "left"
        }
      };
      var _hoisted_2 = {
        style: {
          "float": "right",
          "color": "#8492a6",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, {
                default: _withCtx(function () {
                  return [_createVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.value), 1)];
                }),
                _: 2
              }, 1032, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            cities: [{
              value: 'Beijing',
              label: 'Beijing'
            }, {
              value: 'Shanghai',
              label: 'Shanghai'
            }, {
              value: 'Nanjing',
              label: 'Nanjing'
            }, {
              value: 'Chengdu',
              label: 'Chengdu'
            }, {
              value: 'Shenzhen',
              label: 'Shenzhen'
            }, {
              value: 'Guangzhou',
              label: 'Guangzhou'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_option_group = _resolveComponent("el-option-group");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (group) {
              return _openBlock(), _createBlock(_component_el_option_group, {
                key: group.label,
                label: group.label
              }, {
                default: _withCtx(function () {
                  return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(group.options, function (item) {
                    return _openBlock(), _createBlock(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }), 128))];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              label: 'Popular cities',
              options: [{
                value: 'Shanghai',
                label: 'Shanghai'
              }, {
                value: 'Beijing',
                label: 'Beijing'
              }]
            }, {
              label: 'City name',
              options: [{
                value: 'Chengdu',
                label: 'Chengdu'
              }, {
                value: 'Shenzhen',
                label: 'Shenzhen'
              }, {
                value: 'Guangzhou',
                label: 'Guangzhou'
              }, {
                value: 'Dalian',
                label: 'Dalian'
              }]
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          multiple: "",
          filterable: "",
          remote: "",
          "reserve-keyword": "",
          placeholder: "Please enter a keyword",
          "remote-method": _ctx.remoteMethod,
          loading: _ctx.loading
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "remote-method", "loading"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [],
            value: [],
            list: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
          };
        },
        mounted: function mounted() {
          this.list = this.states.map(function (item) {
            return {
              value: "value:" + item,
              label: "label:" + item
            };
          });
        },
        methods: {
          remoteMethod: function remoteMethod(query) {
            var _this = this;

            if (query !== '') {
              this.loading = true;
              setTimeout(function () {
                _this.loading = false;
                _this.options = _this.list.filter(function (item) {
                  return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
              }, 200);
            } else {
              this.options = [];
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          multiple: "",
          filterable: "",
          "allow-create": "",
          placeholder: "Choose tags for your article"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'HTML',
              label: 'HTML'
            }, {
              value: 'CSS',
              label: 'CSS'
            }, {
              value: 'JavaScript',
              label: 'JavaScript'
            }],
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/select.md



selectvue_type_script_lang_ts.render = selectvue_type_template_id_edd6ef2e_render

/* harmony default export */ var es_select = __webpack_exports__["default"] = (selectvue_type_script_lang_ts);

/***/ })

}]);