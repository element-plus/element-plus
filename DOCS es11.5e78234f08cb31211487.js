(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/checkbox.md?vue&type=template&id=76c4ca4e

var checkboxvue_type_template_id_76c4ca4e_hoisted_1 = {
  class: "content element-doc"
};

var checkboxvue_type_template_id_76c4ca4e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "checkbox"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#checkbox"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Checkbox")], -1);

var checkboxvue_type_template_id_76c4ca4e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Un grupo de opciones para manejar múltiples elecciones.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso básico")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Checkbox puede ser usado para alternar entre dos estados.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Define "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("(enlaza la variable) en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". El valor por defecto es un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y se convierte en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" cuando este es seleccionado. El contenido dentro del tag "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" se convierte en la descripción al costado del botón del checkbox.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <!-- `checked` debe ser true o false -->\n  <el-checkbox v-model=\"checked\">Opción</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "estado-deshabilitado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#estado-deshabilitado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Estado Deshabilitado")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Estado deshabilitado para el checkbox.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Setear el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>Opción</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>Opción</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "grupo-de-checkboxes"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#grupo-de-checkboxes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Grupo de Checkboxes")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Es usado por múltiples checkboxes los cuales están enlazados a un grupo, indica si una opción está seleccionada verificando si esta está marcada.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El elemento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" puede manejar múltiples checkboxes en un grupo usando "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" el cuál está enlazado a un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Dentro del elemento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es el valor del checkbox. Si en ese tag no hay contenido anidado, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" va a ser mostrado como la descripción al lado del botón del checkbox. "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" también se corresponde con los valores del array. Es seleccionado si el valor especificado existe en el array y viceversa.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"Opción A\"></el-checkbox>\n    <el-checkbox label=\"Opción B\"></el-checkbox>\n    <el-checkbox label=\"Opción C\"></el-checkbox>\n    <el-checkbox label=\"disabled\" disabled></el-checkbox>\n    <el-checkbox label=\"Seleccionado y deshabilitado\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checkList: ['Seleccionado y deshabilitado','Opción A']\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "indeterminado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#indeterminado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Indeterminado")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("La propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" puede ser usada para generar el efecto de marcar todos (check all).")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox :indeterminate=\"isIndeterminate\" v-model=\"checkAll\" @change=\"handleCheckAllChange\">Marcar todos</el-checkbox>\n  <div style=\"margin: 15px 0;\"></div>\n  <el-checkbox-group v-model=\"checkedCities\" @change=\"handleCheckedCitiesChange\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true\n      };\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : [];\n        this.isIndeterminate = false;\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length;\n        this.checkAll = checkedCount === this.cities.length;\n        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "cantidad-minima-maxima-de-elementos-seleccionados"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cantidad-minima-maxima-de-elementos-seleccionados"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Cantidad Mínima / Máxima de elementos seleccionados")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Las propiedades "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pueden limitar la cantidad de elementos seleccionados.")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group \n    v-model=\"checkedCities\"\n    :min=\"1\"\n    :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "estilo-tipo-boton"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#estilo-tipo-boton"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Estilo tipo Botón")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Checkbox con estilo tipo Botón.", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Sólo debe cambiar el elemento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" por el elemento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-checkbox-button"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". También proveemos el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :disabled=\"city === 'Beijing'\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default {\n    data () {\n      return {\n        checkboxGroup1: ['Shanghai'],\n        checkboxGroup2: ['Shanghai'],\n        checkboxGroup3: ['Shanghai'],\n        checkboxGroup4: ['Shanghai'],\n        cities: cityOptions\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "con-bordes"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#con-bordes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Con bordes")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" agrega un borde a los Checkboxes.")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Opción1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Opción2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox v-model=\"checked3\" label=\"Opción1\" border size=\"medium\"></el-checkbox>\n    <el-checkbox v-model=\"checked4\" label=\"Opción2\" border size=\"medium\"></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"Opción1\" border></el-checkbox>\n      <el-checkbox label=\"Opción2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"Opción1\" border></el-checkbox>\n      <el-checkbox label=\"Opción2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: []\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos-de-checkbox\"><a class=\"header-anchor\" href=\"#atributos-de-checkbox\">¶</a> Atributos de Checkbox</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>valor del Checkbox si es usado dentro de un tag <code>checkbox-group</code></td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>valor del Checkbox si está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>valor del Checkbox si no está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>especifica si el Checkbox está deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>especifica si agrega un borde alrededor del Checkbox</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>tamaño del Checkbox, sólo funciona si <code>border</code> es true</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>atributo <code>name</code> nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>especifica si el Checkbox está marcado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>similar a <code>indeterminate</code> en el checkbox nativo</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"eventos-de-checkbox\"><a class=\"header-anchor\" href=\"#eventos-de-checkbox\">¶</a> Eventos de Checkbox</h3><table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se ejecuta cuando el valor enlazado cambia</td><td>el valor actualizado</td></tr></tbody></table><h3 id=\"atributos-de-checkbox-group\"><a class=\"header-anchor\" href=\"#atributos-de-checkbox-group\">¶</a> Atributos de Checkbox-group</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por Defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>tamaño de los checkboxes de tipo botón o los checkboxes con border</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>especifica si los checkboxes anidados están deshabilitados</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>cantidad mínima de checkboxes que deben ser marcados</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>cantidad máxima de checkboxes que pueden ser marcados</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>color de fuente cuando el botón está activo</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>color de border y de fondo cuando el botón está activo</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table><h3 id=\"eventos-de-checkbox-group\"><a class=\"header-anchor\" href=\"#eventos-de-checkbox-group\">¶</a> Eventos de Checkbox-group</h3><table><thead><tr><th>Nombre de Evento</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se ejecuta cuando el valor enlazado cambia</td><td>el valor actualizado</td></tr></tbody></table><h3 id=\"atributos-de-checkbox-button\"><a class=\"header-anchor\" href=\"#atributos-de-checkbox-button\">¶</a> Atributos de Checkbox-button</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>label</td><td>valor del checkbox cuando es usado dentro de un <code>checkbox-group</code></td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>valor del checkbox si este está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>valor del checkbox si este no está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>especifica si el checkbox está deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>atributo &#39;name&#39; del checbox nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>si el checkbox está marcado</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 10);

function checkboxvue_type_template_id_76c4ca4e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", checkboxvue_type_template_id_76c4ca4e_hoisted_1, [checkboxvue_type_template_id_76c4ca4e_hoisted_2, checkboxvue_type_template_id_76c4ca4e_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
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
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29]);
}
// CONCATENATED MODULE: ./website/docs/es/checkbox.md?vue&type=template&id=76c4ca4e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/checkbox.md?vue&type=script&lang=ts


/* harmony default export */ var checkboxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Opción");

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checked: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Opción");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Opción");

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checked1: false,
            checked2: true
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkList,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkList = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_checkbox, {
              label: "Opción A"
            }), _createVNode(_component_el_checkbox, {
              label: "Opción B"
            }), _createVNode(_component_el_checkbox, {
              label: "Opción C"
            }), _createVNode(_component_el_checkbox, {
              label: "disabled",
              disabled: ""
            }), _createVNode(_component_el_checkbox, {
              label: "Seleccionado y deshabilitado",
              disabled: ""
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checkList: ['Seleccionado y deshabilitado', 'Opción A']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Marcar todos");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "15px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox, {
          indeterminate: _ctx.isIndeterminate,
          modelValue: _ctx.checkAll,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkAll = $event;
          }),
          onChange: _ctx.handleCheckAllChange
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["indeterminate", "modelValue", "onChange"]), _hoisted_2, _createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checkedCities = $event;
          }),
          onChange: _ctx.handleCheckedCitiesChange
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      var cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      var democomponentExport = {
        data: function data() {
          return {
            checkAll: false,
            checkedCities: ['Shanghai', 'Beijing'],
            cities: cityOptions,
            isIndeterminate: true
          };
        },
        methods: {
          handleCheckAllChange: function handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
          },
          handleCheckedCitiesChange: function handleCheckedCitiesChange(value) {
            var checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          }
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
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkedCities = $event;
          }),
          min: 1,
          max: 2
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      var democomponentExport = {
        data: function data() {
          return {
            checkedCities: ['Shanghai', 'Beijing'],
            cities: cityOptions
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
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_checkbox_button = _resolveComponent("el-checkbox-button");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checkboxGroup1 = $event;
          })
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checkboxGroup2 = $event;
          }),
          size: "medium"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checkboxGroup3 = $event;
          }),
          size: "small"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                disabled: city === 'Beijing',
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label", "disabled"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.checkboxGroup4 = $event;
          }),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (city) {
              return _openBlock(), _createBlock(_component_el_checkbox_button, {
                label: city,
                key: city
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(city), 1)];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      var democomponentExport = {
        data: function data() {
          return {
            checkboxGroup1: ['Shanghai'],
            checkboxGroup2: ['Shanghai'],
            checkboxGroup3: ['Shanghai'],
            checkboxGroup4: ['Shanghai'],
            cities: cityOptions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_checkbox = _resolveComponent("el-checkbox");

        var _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.checked1 = $event;
          }),
          label: "Opción1",
          border: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.checked2 = $event;
          }),
          label: "Opción2",
          border: ""
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.checked3 = $event;
          }),
          label: "Opción1",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.checked4 = $event;
          }),
          label: "Opción2",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.checkboxGroup1 = $event;
          }),
          size: "small"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_checkbox, {
              label: "Opción1",
              border: ""
            }), _createVNode(_component_el_checkbox, {
              label: "Opción2",
              border: "",
              disabled: ""
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.checkboxGroup2 = $event;
          }),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_checkbox, {
              label: "Opción1",
              border: ""
            }), _createVNode(_component_el_checkbox, {
              label: "Opción2",
              border: ""
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: true,
            checkboxGroup1: [],
            checkboxGroup2: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_76c4ca4e_render

/* harmony default export */ var es_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);