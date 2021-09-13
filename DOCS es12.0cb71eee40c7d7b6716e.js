(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/checkbox.md?vue&type=template&id=38a70694

const checkboxvue_type_template_id_38a70694_hoisted_1 = {
  class: "content element-doc"
};

const checkboxvue_type_template_id_38a70694_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Checkbox ");

const checkboxvue_type_template_id_38a70694_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Un grupo de opciones para manejar múltiples elecciones.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Checkbox puede ser usado para alternar entre dos estados.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Define "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("(enlaza la variable) en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". El valor por defecto es un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y se convierte en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" cuando este es seleccionado. El contenido dentro del tag "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" se convierte en la descripción al costado del botón del checkbox.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Option 1\"></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Option 2\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Option 1\"\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Option 2\"\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked5\" label=\"Option 1\" size=\"small\"></el-checkbox>\n    <el-checkbox v-model=\"checked6\" label=\"Option 2\" size=\"small\"></el-checkbox>\n  </div>\n  <div>\n    <el-checkbox v-model=\"checked7\" label=\"Option 1\" size=\"mini\"></el-checkbox>\n    <el-checkbox v-model=\"checked8\" label=\"Option 2\" size=\"mini\"></el-checkbox>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: false,\n        checked5: false,\n        checked6: false,\n        checked7: false,\n        checked8: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(true);\n      const checked2 = ref(false);\n      const checked3 = ref(false);\n      const checked4 = ref(false);\n      const checked5 = ref(false);\n      const checked6 = ref(false);\n      const checked7 = ref(false);\n      const checked8 = ref(false);\n      return {\n        checked1,\n        checked2,\n        checked3,\n        checked4,\n        checked5,\n        checked6,\n        checked7,\n        checked8,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Estado Deshabilitado ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Estado deshabilitado para el checkbox.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Setear el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox v-model=\"checked1\" disabled>Opción</el-checkbox>\n  <el-checkbox v-model=\"checked2\" disabled>Opción</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checked1 = ref(false);\n      const checked2 = ref(true);\n      return {\n        checked1,\n        checked2,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Grupo de Checkboxes ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Es usado por múltiples checkboxes los cuales están enlazados a un grupo, indica si una opción está seleccionada verificando si esta está marcada.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El elemento "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" puede manejar múltiples checkboxes en un grupo usando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" el cuál está enlazado a un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Dentro del elemento "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es el valor del checkbox. Si en ese tag no hay contenido anidado, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" va a ser mostrado como la descripción al lado del botón del checkbox. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" también se corresponde con los valores del array. Es seleccionado si el valor especificado existe en el array y viceversa.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkList\">\n    <el-checkbox label=\"Opción A\"></el-checkbox>\n    <el-checkbox label=\"Opción B\"></el-checkbox>\n    <el-checkbox label=\"Opción C\"></el-checkbox>\n    <el-checkbox label=\"disabled\" disabled></el-checkbox>\n    <el-checkbox label=\"Seleccionado y deshabilitado\" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checkList: ['Seleccionado y deshabilitado', 'Opción A'],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const checkList = ref(['Seleccionado y deshabilitado','Opción A']);\n      return {\n        checkList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Indeterminado ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("La propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" puede ser usada para generar el efecto de marcar todos (check all).")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox\n    :indeterminate=\"isIndeterminate\"\n    v-model=\"checkAll\"\n    @change=\"handleCheckAllChange\"\n    >Marcar todos</el-checkbox\n  >\n  <el-checkbox-group\n    v-model=\"checkedCities\"\n    @change=\"handleCheckedCitiesChange\"\n  >\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      }\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : []\n        this.isIndeterminate = false\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length\n        this.checkAll = checkedCount === this.cities.length\n        this.isIndeterminate =\n          checkedCount > 0 && checkedCount < this.cities.length\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkAll: false,\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n        isIndeterminate: true,\n      });\n      const handleCheckAllChange = (val) => {\n        state.checkedCities = val ? cityOptions : [];\n        state.isIndeterminate = false;\n      };\n      const handleCheckedCitiesChange = (value) => {\n        const checkedCount = value.length;\n        state.checkAll = checkedCount === state.cities.length;\n        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;\n      };\n      return {\n        ...toRefs(state),\n        handleCheckAllChange,\n        handleCheckedCitiesChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Cantidad Mínima / Máxima de elementos seleccionados ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Las propiedades "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pueden limitar la cantidad de elementos seleccionados.")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-checkbox-group v-model=\"checkedCities\" :min=\"1\" :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n      >{{city}}</el-checkbox\n    >\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions,\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Estilo tipo Botón ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Checkbox con estilo tipo Botón.", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sólo debe cambiar el elemento "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" por el elemento "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-checkbox-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". También proveemos el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox-group v-model=\"checkboxGroup1\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"medium\">\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup3\" size=\"small\">\n      <el-checkbox-button\n        v-for=\"city in cities\"\n        :label=\"city\"\n        :disabled=\"city === 'Beijing'\"\n        :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup4\" size=\"mini\" disabled>\n      <el-checkbox-button v-for=\"city in cities\" :label=\"city\" :key=\"city\"\n        >{{city}}</el-checkbox-button\n      >\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']\n\n  export default {\n    data() {\n      return {\n        checkboxGroup1: ['Shanghai'],\n        checkboxGroup2: ['Shanghai'],\n        checkboxGroup3: ['Shanghai'],\n        checkboxGroup4: ['Shanghai'],\n        cities: cityOptions,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nconst cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      checkboxGroup1: ['Shanghai'],\n      checkboxGroup2: ['Shanghai'],\n      checkboxGroup3: ['Shanghai'],\n      checkboxGroup4: ['Shanghai'],\n      cities: cityOptions,\n    });\n\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Con bordes ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" agrega un borde a los Checkboxes.")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-checkbox v-model=\"checked1\" label=\"Opción1\" border></el-checkbox>\n    <el-checkbox v-model=\"checked2\" label=\"Opción2\" border></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox\n      v-model=\"checked3\"\n      label=\"Opción1\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n    <el-checkbox\n      v-model=\"checked4\"\n      label=\"Opción2\"\n      border\n      size=\"medium\"\n    ></el-checkbox>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup1\" size=\"small\">\n      <el-checkbox label=\"Opción1\" border></el-checkbox>\n      <el-checkbox label=\"Opción2\" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-checkbox-group v-model=\"checkboxGroup2\" size=\"mini\" disabled>\n      <el-checkbox label=\"Opción1\" border></el-checkbox>\n      <el-checkbox label=\"Opción2\" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: [],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Checkbox ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor enlazado</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>valor del Checkbox si es usado dentro de un tag <code>checkbox-group</code></td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>valor del Checkbox si está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>valor del Checkbox si no está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>especifica si el Checkbox está deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>especifica si agrega un borde alrededor del Checkbox</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>tamaño del Checkbox</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>atributo <code>name</code> nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>especifica si el Checkbox está marcado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>similar a <code>indeterminate</code> en el checkbox nativo</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos de Checkbox ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parametros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "se ejecuta cuando el valor enlazado cambia"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el valor actualizado")])])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Checkbox-group ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por Defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>valor enlazado</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>size of checkbox</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>especifica si los checkboxes anidados están deshabilitados</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>cantidad mínima de checkboxes que deben ser marcados</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>cantidad máxima de checkboxes que pueden ser marcados</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>color de fuente cuando el botón está activo</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>color de border y de fondo cuando el botón está activo</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table>", 1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos de Checkbox-group ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre de Evento"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parametros")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "se ejecuta cuando el valor enlazado cambia"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el valor actualizado")])])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Checkbox-button ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>label</td><td>valor del checkbox cuando es usado dentro de un <code>checkbox-group</code></td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>valor del checkbox si este está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>valor del checkbox si este no está marcado</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>especifica si el checkbox está deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>atributo &#39;name&#39; del checbox nativo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>si el checkbox está marcado</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

function checkboxvue_type_template_id_38a70694_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", checkboxvue_type_template_id_38a70694_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "checkbox",
    content: "Checkbox",
    href: "#checkbox",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [checkboxvue_type_template_id_38a70694_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#checkbox"
    })]),
    _: 1
  }), checkboxvue_type_template_id_38a70694_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "estado-deshabilitado",
    content: "Estado Deshabilitado",
    href: "#estado-deshabilitado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#estado-deshabilitado"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "grupo-de-checkboxes",
    content: "Grupo de Checkboxes",
    href: "#grupo-de-checkboxes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#grupo-de-checkboxes"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indeterminado",
    content: "Indeterminado",
    href: "#indeterminado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indeterminado"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cantidad-minima-maxima-de-elementos-seleccionados",
    content: "Cantidad Mínima / Máxima de elementos seleccionados",
    href: "#cantidad-minima-maxima-de-elementos-seleccionados",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cantidad-minima-maxima-de-elementos-seleccionados"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "estilo-tipo-boton",
    content: "Estilo tipo Botón",
    href: "#estilo-tipo-boton",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#estilo-tipo-boton"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "con-bordes",
    content: "Con bordes",
    href: "#con-bordes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#con-bordes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-checkbox",
    content: "Atributos de Checkbox",
    href: "#atributos-de-checkbox",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-checkbox"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-de-checkbox",
    content: "Eventos de Checkbox",
    href: "#eventos-de-checkbox",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-de-checkbox"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-checkbox-group",
    content: "Atributos de Checkbox-group",
    href: "#atributos-de-checkbox-group",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-checkbox-group"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-de-checkbox-group",
    content: "Eventos de Checkbox-group",
    href: "#eventos-de-checkbox-group",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-de-checkbox-group"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-checkbox-button",
    content: "Atributos de Checkbox-button",
    href: "#atributos-de-checkbox-button",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-checkbox-button"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/checkbox.md?vue&type=template&id=38a70694

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/checkbox.md?vue&type=script&lang=ts

/* harmony default export */ var checkboxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checked1 = $event),
          label: "Option 1"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          label: "Option 2"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checked3 = $event),
          label: "Option 1",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checked4 = $event),
          label: "Option 2",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked5,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.checked5 = $event),
          label: "Option 1",
          size: "small"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked6,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.checked6 = $event),
          label: "Option 2",
          size: "small"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked7,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.checked7 = $event),
          label: "Option 1",
          size: "mini"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked8,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.checked8 = $event),
          label: "Option 2",
          size: "mini"
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            checked8: false
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Opción");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Opción");

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checked1 = $event),
          disabled: ""
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          disabled: ""
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            checked1: false,
            checked2: true
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkList,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkList = $event)
        }, {
          default: _withCtx(() => [_createVNode(_component_el_checkbox, {
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
          })]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            checkList: ['Seleccionado y deshabilitado', 'Opción A']
          };
        }

      };
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
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createBlock: _createBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Marcar todos");

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox, {
          indeterminate: _ctx.isIndeterminate,
          modelValue: _ctx.checkAll,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkAll = $event),
          onChange: _ctx.handleCheckAllChange
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["indeterminate", "modelValue", "onChange"]), _createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checkedCities = $event),
          onChange: _ctx.handleCheckedCitiesChange
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      const democomponentExport = {
        data() {
          return {
            checkAll: false,
            checkedCities: ['Shanghai', 'Beijing'],
            cities: cityOptions,
            isIndeterminate: true
          };
        },

        methods: {
          handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
          },

          handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
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
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkedCities,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkedCities = $event),
          min: 1,
          max: 2
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      const democomponentExport = {
        data() {
          return {
            checkedCities: ['Shanghai', 'Beijing'],
            cities: cityOptions
          };
        }

      };
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
        createVNode: _createVNode,
        createElementVNode: _createElementVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_checkbox_button = _resolveComponent("el-checkbox-button");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checkboxGroup1 = $event)
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checkboxGroup2 = $event),
          size: "medium"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checkboxGroup3 = $event),
          size: "small"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              disabled: city === 'Beijing',
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label", "disabled"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checkboxGroup4 = $event),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, city => {
            return _openBlock(), _createBlock(_component_el_checkbox_button, {
              label: city,
              key: city
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(city), 1)]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
      const democomponentExport = {
        data() {
          return {
            checkboxGroup1: ['Shanghai'],
            checkboxGroup2: ['Shanghai'],
            checkboxGroup3: ['Shanghai'],
            checkboxGroup4: ['Shanghai'],
            cities: cityOptions
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      const _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.checked1 = $event),
          label: "Opción1",
          border: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.checked2 = $event),
          label: "Opción2",
          border: ""
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.checked3 = $event),
          label: "Opción1",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
          modelValue: _ctx.checked4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.checked4 = $event),
          label: "Opción2",
          border: "",
          size: "medium"
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_2, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.checkboxGroup1 = $event),
          size: "small"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_checkbox, {
            label: "Opción1",
            border: ""
          }), _createVNode(_component_el_checkbox, {
            label: "Opción2",
            border: "",
            disabled: ""
          })]),
          _: 1
        }, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_createVNode(_component_el_checkbox_group, {
          modelValue: _ctx.checkboxGroup2,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.checkboxGroup2 = $event),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_checkbox, {
            label: "Opción1",
            border: ""
          }), _createVNode(_component_el_checkbox, {
            label: "Opción2",
            border: ""
          })]),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/checkbox.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/checkbox.md



checkboxvue_type_script_lang_ts.render = checkboxvue_type_template_id_38a70694_render

/* harmony default export */ var es_checkbox = __webpack_exports__["default"] = (checkboxvue_type_script_lang_ts);

/***/ })

}]);