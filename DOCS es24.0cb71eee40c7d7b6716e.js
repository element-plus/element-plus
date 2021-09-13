(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/drawer.md?vue&type=template&id=2e428e6c

const drawervue_type_template_id_2e428e6c_hoisted_1 = {
  class: "content element-doc"
};

const drawervue_type_template_id_2e428e6c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer ");

const drawervue_type_template_id_2e428e6c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("A veces, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" no siempre satisface nuestros requisitos, digamos que tiene un formulario masivo, o necesita espacio para mostrar algo como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "terminos & condiciones"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" tiene una API casi idéntica a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", pero introduce una experiencia de usuario diferente.")], -1);

const drawervue_type_template_id_2e428e6c_hoisted_4 = {
  class: "tip"
};

const drawervue_type_template_id_2e428e6c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Translation needed ");

const drawervue_type_template_id_2e428e6c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Since v-model is natively supported for all components, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "visible.sync"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" has been deprecated, use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model=\"visibilityBinding\""), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to control the visibility of the current drawer.")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Uso básico ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Llamada de un drawer temporal, desde varias direcciones", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Debe establecer "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "model-value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" como lo hace "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para controlar la visibilidad. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "visible"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es del tipo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" tiene partes: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" & "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", el "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es un slot con nombre, también puede establecer el título a través de un atributo llamado "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", por defecto a una cadena vacía, la parte "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es el área principal de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", que contiene contenido definido por el usuario. Al abrir, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" se expande desde la "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "esquina derecha a la izquierda"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" cuyo tamaño es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "30%"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de la ventana del navegador por defecto. Puede cambiar ese comportamiento predeterminado estableciendo los atributos "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Este caso de demostración también muestra cómo utilizar la API "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", consulte la sección Atributos para obtener más detalles.")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"direction\">\n  <el-radio label=\"ltr\">left to right</el-radio>\n  <el-radio label=\"rtl\">right to left</el-radio>\n  <el-radio label=\"ttb\">top to bottom</el-radio>\n  <el-radio label=\"btt\">bottom to top</el-radio>\n</el-radio-group>\n\n<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I am the title\"\n  v-model=\"drawer\"\n  :direction=\"direction\"\n  :before-close=\"handleClose\"\n>\n  <span>Hi, there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        direction: 'rtl',\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Are you sure you want to close this?')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const drawer = ref(false);\n      const direction = ref('rtl');\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('Are you sure you want to close this?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        direction,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("No Title ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "When you no longer need a title, you can remove title from drawer.", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "withHeader"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", you can remove the title from drawer, thus your drawer can have more space on screen. If you want to be accessible, make sure to set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer title=\"I am the title\" v-model=\"drawer\" :with-header=\"false\">\n  <span>Hi there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        drawer: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Personalizar el contenido ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Al igual que "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" puede hacer muchas interacciones diversas.")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"table = true\"\n  >Open Drawer with nested table</el-button\n>\n<el-button type=\"text\" @click=\"dialog = true\"\n  >Open Drawer with nested form</el-button\n>\n<el-drawer\n  title=\"I have a nested table inside!\"\n  v-model=\"table\"\n  direction=\"rtl\"\n  size=\"50%\"\n>\n  <el-table :data=\"gridData\">\n    <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n    <el-table-column property=\"name\" label=\"Name\" width=\"200\"></el-table-column>\n    <el-table-column property=\"address\" label=\"Address\"></el-table-column>\n  </el-table>\n</el-drawer>\n\n<el-drawer\n  title=\"I have a nested form inside!\"\n  :before-close=\"handleClose\"\n  v-model=\"dialog\"\n  direction=\"ltr\"\n  custom-class=\"demo-drawer\"\n  ref=\"drawer\"\n>\n  <div class=\"demo-drawer__content\">\n    <el-form :model=\"form\">\n      <el-form-item label=\"Name\" :label-width=\"formLabelWidth\">\n        <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"Area\" :label-width=\"formLabelWidth\">\n        <el-select\n          v-model=\"form.region\"\n          placeholder=\"Please select activity area\"\n        >\n          <el-option label=\"Area1\" value=\"shanghai\"></el-option>\n          <el-option label=\"Area2\" value=\"beijing\"></el-option>\n        </el-select>\n      </el-form-item>\n    </el-form>\n    <div class=\"demo-drawer__footer\">\n      <el-button @click=\"cancelForm\">Cancel</el-button>\n      <el-button\n        type=\"primary\"\n        @click=\"$refs.drawer.closeDrawer()\"\n        :loading=\"loading\"\n        >{{ loading ? 'Submitting ...' : 'Submit' }}</el-button\n      >\n    </div>\n  </div>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        table: false,\n        dialog: false,\n        loading: false,\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n        ],\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '80px',\n        timer: null,\n      }\n    },\n    methods: {\n      handleClose(done) {\n        if (this.loading) {\n          return\n        }\n        this.$confirm('Do you want to submit?')\n          .then((_) => {\n            this.loading = true\n            this.timer = setTimeout(() => {\n              done()\n              // animation takes time\n              setTimeout(() => {\n                this.loading = false\n              }, 400)\n            }, 2000)\n          })\n          .catch((_) => {})\n      },\n      cancelForm() {\n        this.loading = false\n        this.dialog = false\n        clearTimeout(this.timer)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\nimport {defineComponent, reactive, toRefs } from 'vue';\nimport { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const state = reactive({\n        table: false,\n        dialog: false,\n        loading: false,\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n        ],\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '80px',\n        timer: null,\n      });\n\n      const handleClose = (done) => {\n        if (state.loading) {\n          return;\n        }\n        ElMessageBox\n          .confirm('Do you want to submit?')\n          .then((_) => {\n            state.loading = true;\n            state.timer = setTimeout(() => {\n              done();\n              // 动画关闭需要一定的时间\n              setTimeout(() => {\n                state.loading = false;\n              }, 400);\n            }, 2000);\n          })\n          .catch((_) => {});\n      };\n\n      const cancelForm = () => {\n        state.loading = false;\n        state.dialog = false;\n        clearTimeout(state.timer);\n      };\n\n      return {\n        ...toRefs(state),\n        handleClose,\n        cancelForm,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer anidados ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("También puede tener varias capas de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" al igual que con "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Si necesita varios drawer en diferentes capas, debe establecer el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "true")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer title=\"I'm outer Drawer\" v-model=\"drawer\" size=\"50%\">\n  <div>\n    <el-button @click=\"innerDrawer = true\">Click me!</el-button>\n    <el-drawer\n      title=\"I'm inner Drawer\"\n      :append-to-body=\"true\"\n      :before-close=\"handleClose\"\n      v-model=\"innerDrawer\"\n    >\n      <p>_(:зゝ∠)_</p>\n    </el-drawer>\n  </div>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        innerDrawer: false,\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('You still have unsaved data, proceed?')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const drawer = ref(false);\n      const innerDrawer = ref(false);\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('You still have unsaved data, proceed?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        innerDrawer,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El contenido dentro del Drawer debe ser renderizado de forma perezosa, lo que significa que el contenido dentro del Drawer no afectará al rendimiento inicial del renderizado, por lo que cualquier operación DOM debe realizarse a través de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ref' o después de que se emita el evento "), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("open'.")])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "El Drawer proporciona una API llamada \"destroyOnClose\", que es una variable de bandera que indica que debe destruir el contenido hijo dentro del Drawer después de que se haya cerrado. Puede utilizar esta API cuando necesite que su ciclo de vida \"mounted\" sea llamado cada vez que se abra el Cajón.")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de Drawer ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Parámetros</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Si se muestra el Drawer</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>append-to-body</td><td>Los controles deberían insertar Drawer en el elemento DocumentBody, los Drawer anidados deben asignar este parámetro a <strong>true</strong></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>whether scroll of body is disabled while Drawer is displayed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>Si está configurado, el procedimiento de cierre se detendrá.</td><td>function(done), done es un tipo de función que acepta un booleano como parámetro, una llamada hecha con true o sin parámetro abortará el procedimiento de cierre.</td><td>—</td><td>—</td></tr><tr><td>close-on-click-modal</td><td>whether the Drawer can be closed by clicking the mask</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>Indica si el Drawer puede cerrarse pulsando ESC</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>open-delay</td><td>Time(milliseconds) before open</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Time(milliseconds) before close</td><td>number</td><td>—</td><td>0</td></tr><tr><td>custom-class</td><td>Nombre extra de clase para Drawer</td><td>string</td><td>—</td><td>—</td></tr><tr><td>destroy-on-close</td><td>Indica si los children deben ser destruidos después de cerrar el Drawer.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>modal</td><td>Mostrará una capa de sombra</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>Dirección de apertura del Drawer</td><td>Direction</td><td>rtl / ltr / ttb / btt</td><td>rtl</td></tr><tr><td>show-close</td><td>Se mostrará el botón de cerrar en la parte superior derecha del Drawer</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Tamaño del Drawer. Si el Drawer está en modo horizontal, afecta a la propiedad width, de lo contrario afecta a la propiedad height, cuando el tamaño es tipo <code>number</code>, describe el tamaño por unidad de píxeles; cuando el tamaño es tipo <code>string</code>, se debe usar con notación <code>x%</code>, de lo contrario se interpretará como unidad de píxeles.</td><td>number / string</td><td>-</td><td>&#39;30%&#39;</td></tr><tr><td>title</td><td>El título del Drawer, también se puede establecer por slot con nombre, las descripciones detalladas se pueden encontrar en el formulario de slot.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>withHeader</td><td>Flag that controls the header section&#39;s existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won&#39;t work</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>modal-class</td><td>Nombre extra de clase para capa de sombra</td><td>string</td><td>-</td><td>-</td></tr><tr><td>z-index</td><td>set z-index</td><td>number</td><td>-</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Drawer Slot's ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "El contenido del Drawer")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "El titulo de la sección del Drawer")])])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Métodos Drawer ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "handleClose"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Para cerrar el Drawer, este método llamará "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])])])], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos Drawer ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>open</td><td>Se activa antes de que comience la animación de apertura del Drawer.</td><td>—</td></tr><tr><td>opened</td><td>Se activa cuando finaliza la animación de apertura del Drawer.</td><td>—</td></tr><tr><td>close</td><td>Se activa antes de que comience la animación de cierre del Drawer.</td><td>—</td></tr><tr><td>closed</td><td>Se activa después de que finaliza la animación de cierre del Drawer.</td><td>—</td></tr></tbody></table>", 1);

function drawervue_type_template_id_2e428e6c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", drawervue_type_template_id_2e428e6c_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer",
    content: "Drawer",
    href: "#drawer",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [drawervue_type_template_id_2e428e6c_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer"
    })]),
    _: 1
  }), drawervue_type_template_id_2e428e6c_hoisted_3, Object(vue_esm_browser_prod["createElementVNode"])("div", drawervue_type_template_id_2e428e6c_hoisted_4, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "translation-needed",
    content: "Translation needed",
    href: "#translation-needed",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [drawervue_type_template_id_2e428e6c_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#translation-needed"
    })]),
    _: 1
  }), drawervue_type_template_id_2e428e6c_hoisted_6]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "uso-basico",
    content: "Uso básico",
    href: "#uso-basico",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#uso-basico"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "no-title",
    content: "No Title",
    href: "#no-title",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#no-title"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "personalizar-el-contenido",
    content: "Personalizar el contenido",
    href: "#personalizar-el-contenido",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#personalizar-el-contenido"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer-anidados",
    content: "Drawer anidados",
    href: "#drawer-anidados",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer-anidados"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-drawer",
    content: "Atributos de Drawer",
    href: "#atributos-de-drawer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-drawer"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "drawer-slot-s",
    content: "Drawer Slot's",
    href: "#drawer-slot-s",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#drawer-slot-s"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "metodos-drawer",
    content: "Métodos Drawer",
    href: "#metodos-drawer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos-drawer"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-drawer",
    content: "Eventos Drawer",
    href: "#eventos-drawer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-drawer"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/drawer.md?vue&type=template&id=2e428e6c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/drawer.md?vue&type=script&lang=ts

/* harmony default export */ var drawervue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("left to right");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("right to left");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("top to bottom");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("bottom to top");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode(" open ");

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", null, "Hi, there!", -1);

      function render(_ctx, _cache) {
        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.direction,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.direction = $event)
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio, {
            label: "ltr"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "rtl"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "ttb"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_radio, {
            label: "btt"
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = $event => _ctx.drawer = true),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(() => [_hoisted_5]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.drawer = $event),
          direction: _ctx.direction,
          "before-close": _ctx.handleClose
        }, {
          default: _withCtx(() => [_hoisted_6]),
          _: 1
        }, 8, ["modelValue", "direction", "before-close"])]);
      }

      const democomponentExport = {
        data() {
          return {
            drawer: false,
            direction: 'rtl'
          };
        },

        methods: {
          handleClose(done) {
            this.$confirm('Are you sure you want to close this?').then(_ => {
              done();
            }).catch(_ => {});
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Hi there!", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.drawer = true),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.drawer = $event),
          "with-header": false
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            drawer: false
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Open Drawer with nested table");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Open Drawer with nested form");

      const _hoisted_3 = {
        class: "demo-drawer__content"
      };
      const _hoisted_4 = {
        class: "demo-drawer__footer"
      };

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_drawer = _resolveComponent("el-drawer");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.table = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = $event => _ctx.dialog = true)
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I have a nested table inside!",
          modelValue: _ctx.table,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.table = $event),
          direction: "rtl",
          size: "50%"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table, {
            data: _ctx.gridData
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
              property: "date",
              label: "Date",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              property: "name",
              label: "Name",
              width: "200"
            }), _createVNode(_component_el_table_column, {
              property: "address",
              label: "Address"
            })]),
            _: 1
          }, 8, ["data"])]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_drawer, {
          title: "I have a nested form inside!",
          "before-close": _ctx.handleClose,
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.dialog = $event),
          direction: "ltr",
          "custom-class": "demo-drawer",
          ref: "drawer"
        }, {
          default: _withCtx(() => [_createElementVNode("div", _hoisted_3, [_createVNode(_component_el_form, {
            model: _ctx.form
          }, {
            default: _withCtx(() => [_createVNode(_component_el_form_item, {
              label: "Name",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_input, {
                modelValue: _ctx.form.name,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.form.name = $event),
                autocomplete: "off"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
              label: "Area",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_select, {
                modelValue: _ctx.form.region,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.form.region = $event),
                placeholder: "Please select activity area"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_option, {
                  label: "Area1",
                  value: "shanghai"
                }), _createVNode(_component_el_option, {
                  label: "Area2",
                  value: "beijing"
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"])]),
            _: 1
          }, 8, ["model"]), _createElementVNode("div", _hoisted_4, [_createVNode(_component_el_button, {
            onClick: _ctx.cancelForm
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }, 8, ["onClick"]), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[5] || (_cache[5] = $event => _ctx.$refs.drawer.closeDrawer()),
            loading: _ctx.loading
          }, {
            default: _withCtx(() => [_createTextVNode(_toDisplayString(_ctx.loading ? 'Submitting ...' : 'Submit'), 1)]),
            _: 1
          }, 8, ["loading"])])])]),
          _: 1
        }, 8, ["before-close", "modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            table: false,
            dialog: false,
            loading: false,
            gridData: [{
              date: '2016-05-02',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-04',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-01',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-03',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }],
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '80px',
            timer: null
          };
        },

        methods: {
          handleClose(done) {
            if (this.loading) {
              return;
            }

            this.$confirm('Do you want to submit?').then(_ => {
              this.loading = true;
              this.timer = setTimeout(() => {
                done(); // animation takes time

                setTimeout(() => {
                  this.loading = false;
                }, 400);
              }, 2000);
            }).catch(_ => {});
          },

          cancelForm() {
            this.loading = false;
            this.dialog = false;
            clearTimeout(this.timer);
          }

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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Click me!");

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("p", null, "_(:зゝ∠)_", -1);

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.drawer = true),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I'm outer Drawer",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.drawer = $event),
          size: "50%"
        }, {
          default: _withCtx(() => [_createElementVNode("div", null, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.innerDrawer = true)
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_drawer, {
            title: "I'm inner Drawer",
            "append-to-body": true,
            "before-close": _ctx.handleClose,
            modelValue: _ctx.innerDrawer,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.innerDrawer = $event)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }, 8, ["before-close", "modelValue"])])]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            drawer: false,
            innerDrawer: false
          };
        },

        methods: {
          handleClose(done) {
            this.$confirm('You still have unsaved data, proceed?').then(_ => {
              done();
            }).catch(_ => {});
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
// CONCATENATED MODULE: ./website/docs/es/drawer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/drawer.md



drawervue_type_script_lang_ts.render = drawervue_type_template_id_2e428e6c_render

/* harmony default export */ var drawer = __webpack_exports__["default"] = (drawervue_type_script_lang_ts);

/***/ })

}]);