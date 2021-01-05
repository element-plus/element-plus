(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/dialog.md?vue&type=template&id=64e97fb2

var dialogvue_type_template_id_64e97fb2_hoisted_1 = {
  class: "content element-doc"
};

var dialogvue_type_template_id_64e97fb2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "dialog"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dialog"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Dialog")], -1);

var dialogvue_type_template_id_64e97fb2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Informar a usuarios preservando el estado de la página actual.", -1);

var dialogvue_type_template_id_64e97fb2_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "uso-basico"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#uso-basico"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Uso Básico")], -1);

var dialogvue_type_template_id_64e97fb2_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Dialog abre una caja de diálogo, y es bastante personalizable.", -1);

var dialogvue_type_template_id_64e97fb2_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "visible"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con un booleano, y el Dialog se muestra cuando es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". El diálogo tiene dos partes: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", este último requiere un slot llamado "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es opcional (vacío por defecto) y sirve para definir un título. Por último, este ejemplo muestra cómo se utiliza "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogVisible = true\">click to open the Dialog</el-button>\n\n<el-dialog\n  title=\"Tips\"\n  v-model=\"dialogVisible\"\n  width=\"30%\"\n  :before-close=\"handleClose\">\n  <span>This is a message</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"dialogVisible = false\">Confirm</el-button>\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogVisible: false\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Are you sure to close this dialog?')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sólo funciona cuando el usuario hace clic en el icono de cerrar o en el fondo. Si tiene botones que cierran el cuadro de diálogo en el slot llamado "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", puede agregar lo que haría "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en el manejador de eventos de los botones.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "personalizaciones"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#personalizaciones"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Personalizaciones")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El contenido del Diálogo puede ser cualquier cosa, incluso una tabla o un formulario. Este ejemplo muestra cómo usar Element Plus Table y Form con Dialog", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogTableVisible = true\">open a Table nested Dialog</el-button>\n\n<el-dialog title=\"Shipping address\" v-model=\"dialogTableVisible\">\n  <el-table :data=\"gridData\">\n    <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n    <el-table-column property=\"name\" label=\"Name\" width=\"200\"></el-table-column>\n    <el-table-column property=\"address\" label=\"Address\"></el-table-column>\n  </el-table>\n</el-dialog>\n\n<!-- Form -->\n<el-button type=\"text\" @click=\"dialogFormVisible = true\">open a Form nested Dialog</el-button>\n\n<el-dialog title=\"Shipping address\" v-model=\"dialogFormVisible\">\n  <el-form :model=\"form\">\n    <el-form-item label=\"Promotion name\" :label-width=\"formLabelWidth\">\n      <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n    </el-form-item>\n    <el-form-item label=\"Zones\" :label-width=\"formLabelWidth\">\n      <el-select v-model=\"form.region\" placeholder=\"Please select a zone\">\n        <el-option label=\"Zone No.1\" value=\"shanghai\"></el-option>\n        <el-option label=\"Zone No.2\" value=\"beijing\"></el-option>\n      </el-select>\n    </el-form-item>\n  </el-form>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogFormVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"dialogFormVisible = false\">Confirm</el-button>\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: '2016-05-02',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-04',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-01',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }, {\n          date: '2016-05-03',\n          name: 'John Smith',\n          address: 'No.1518,  Jinshajiang Road, Putuo District'\n        }],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: ''\n        },\n        formLabelWidth: '120px'\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dialogo-anidado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dialogo-anidado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Diálogo anidado")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Si un diálogo está anidado en otro diálogo, se requiere append-to-body.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Normalmente no recomendamos el uso de Dialog anidado. Si necesita que se muestren múltiples diálogos en la página, puede simplemente aplanarlos para que sean hermanos entre sí. Si debe anidar un Diálogo dentro de otro Diálogo, establezca "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" del Diálogo anidado como true, y lo añadirá al cuerpo en lugar de su nodo padre, para que ambos Diálogos puedan ser correctamente renderizados.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"outerVisible = true\">open the outer Dialog</el-button>\n\n  <el-dialog title=\"Outer Dialog\" v-model=\"outerVisible\">\n    <el-dialog\n        width=\"30%\"\n        title=\"Inner Dialog\"\n        v-model=\"innerVisible\"\n        append-to-body>\n    </el-dialog>\n    <template #footer>\n      <div class=\"dialog-footer\">\n        <el-button @click=\"outerVisible = false\">Cancel</el-button>\n        <el-button type=\"primary\" @click=\"innerVisible = true\">open the inner Dialog</el-button>\n      </div>\n    </template>\n  </el-dialog>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        outerVisible: false,\n        innerVisible: false\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "contenido-centrado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#contenido-centrado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Contenido centrado")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "El contenido de Diálogo se puede centrar.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajuste "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para centrar el encabezado y el pie de página del cuadro de diálogo horizontalmente. "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sólo afecta al encabezado y pie de página de Dialog. El cuerpo de Dialog puede ser cualquier cosa, así que a veces no se ve bien cuando está centrado. Necesitas escribir algún CSS si deseas centrar el cuerpo también.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\">Click to open the Dialog</el-button>\n\n<el-dialog\n  title=\"Warning\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  center>\n  <span>It should be noted that the content will not be aligned in center by default</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\">Confirm</el-button>\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El contenido de Dialog se renderiza en modo lazy, lo que significa que la ranura por defecto no se renderiza en el DOM hasta que se abre por primera vez. Por lo tanto, si necesita realizar una manipulación DOM o acceder a un componente mediante ref, hágalo en el callback del evento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "destroy-on-close-translation-needed"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#destroy-on-close-translation-needed"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Destroy on Close (Translation needed)")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When this is feature is enabled, the content under default slot will be destroyed with a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-if"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" directive. Enable this when you have perf concerns.")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Note that by enabling this feature, the content will not be rendered before "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "transition.beforeEnter"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" dispatched, there will only be "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "overlay"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "header(if any)"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "footer(if any)"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\">Click to open Dialog</el-button>\n\n<el-dialog\n  title=\"Notice\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  destroy-on-close\n  center>\n  <span>Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered</span>\n  <div>\n    <strong>Extra content (Not rendered)</strong>\n  </div>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\">Confirm</el-button>\n    </span>\n  </template>\n\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false\n      };\n    }\n  };\n</script>\n\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" = false, please make sure that "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" was set to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("strong", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", because "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" was positioned by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "position: relative"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", when "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" gets removed, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will position itself based on the current position in the DOM, instead of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Document.Body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", thus the style will be messed up.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributo\"><a class=\"header-anchor\" href=\"#atributo\">¶</a> Atributo</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>visibilidad del Diálogo</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>title</td><td>título de Diálogo. También se puede pasar con un slot con nombre (ver la tabla siguiente)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>anchura de Diálogo</td><td>string</td><td>—</td><td>50%</td></tr><tr><td>fullscreen</td><td>si el diálogo ocupa pantalla completa</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>top</td><td>valor de <code>margin-top</code> del Diálogo CSS</td><td>string</td><td>—</td><td>15vh</td></tr><tr><td>modal</td><td>si se muestra una máscara</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>Si adjuntar el cuadro de diálogo al cuerpo</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>Si el scroll del cuerpo está desactivado mientras se muestra el cuadro de diálogo</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>nombres de clase personalizada para el Diálogo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>Tiempo (milisegundos) antes de abierto</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Tiempo (milisegundos) antes de cierre</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>si el Diálogo puede ser cerrado haciendo clic en la máscara</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>si el Diálogo puede ser cerrado presionando ESC</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>si mostrar un botón de cerrar</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>una devolución de llamada antes de que se cierre el cuadro de diálogo, y evitar cerrar el cuadro de diálogo</td><td>función(done) <code>done</code>se usa para cerrar el diálog</td><td>—</td><td>—</td></tr><tr><td>center</td><td>si alinear el encabezado y el pie de página en el centro</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>destroy-on-close</td><td>Destruir elementos en Dialog cuando se cierra</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\">¶</a> Slots</h3><table><thead><tr><th>Nombre</th><th>Descripcíon</th></tr></thead><tbody><tr><td>—</td><td>contenido de Diálogo</td></tr><tr><td>title</td><td>contenido del título de Diálogo</td></tr><tr><td>footer</td><td>contenido del pie de página de Diálogo</td></tr></tbody></table><h3 id=\"eventos\"><a class=\"header-anchor\" href=\"#eventos\">¶</a> Eventos</h3><table><thead><tr><th>Nombre de Evento</th><th>Descripcíon</th><th>Parámetros</th></tr></thead><tbody><tr><td>open</td><td>se activa cuando se abre el cuadro de Diálogo</td><td>—</td></tr><tr><td>opened</td><td>se activa cuando la animación de apertura del Dialog termina.</td><td>—</td></tr><tr><td>close</td><td>se dispara cuando el Diálogo se cierra</td><td>—</td></tr><tr><td>closed</td><td>se activa cuando finaliza la animación de cierre del Diálog</td><td>—</td></tr></tbody></table>", 6);

function dialogvue_type_template_id_64e97fb2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", dialogvue_type_template_id_64e97fb2_hoisted_1, [dialogvue_type_template_id_64e97fb2_hoisted_2, dialogvue_type_template_id_64e97fb2_hoisted_3, dialogvue_type_template_id_64e97fb2_hoisted_4, dialogvue_type_template_id_64e97fb2_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [dialogvue_type_template_id_64e97fb2_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
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
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23, _hoisted_25];
    }),
    _: 1
  }), _hoisted_26]);
}
// CONCATENATED MODULE: ./website/docs/es/dialog.md?vue&type=template&id=64e97fb2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/dialog.md?vue&type=script&lang=ts


/* harmony default export */ var dialogvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("click to open the Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "This is a message", -1);

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Tips",
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.dialogVisible = $event;
          }),
          width: "30%",
          "before-close": _ctx.handleClose
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.dialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue", "before-close"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            dialogVisible: false
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            this.$confirm('Are you sure to close this dialog?').then(function (_) {
              done();
            }).catch(function (_) {});
          }
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("open a Table nested Dialog");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("open a Form nested Dialog");

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_dialog = _resolveComponent("el-dialog");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.dialogTableVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Shipping address",
          modelValue: _ctx.dialogTableVisible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.dialogTableVisible = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
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
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[3] || (_cache[3] = function ($event) {
            return _ctx.dialogFormVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Shipping address",
          modelValue: _ctx.dialogFormVisible,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
            return _ctx.dialogFormVisible = $event;
          })
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[6] || (_cache[6] = function ($event) {
                return _ctx.dialogFormVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[7] || (_cache[7] = function ($event) {
                return _ctx.dialogFormVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_form, {
              model: _ctx.form
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_form_item, {
                  label: "Promotion name",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_input, {
                      modelValue: _ctx.form.name,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.form.name = $event;
                      }),
                      autocomplete: "off"
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
                  label: "Zones",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_select, {
                      modelValue: _ctx.form.region,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.form.region = $event;
                      }),
                      placeholder: "Please select a zone"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_option, {
                          label: "Zone No.1",
                          value: "shanghai"
                        }), _createVNode(_component_el_option, {
                          label: "Zone No.2",
                          value: "beijing"
                        })];
                      }),
                      _: 1
                    }, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"])];
              }),
              _: 1
            }, 8, ["model"])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-04',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-01',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }, {
              date: '2016-05-03',
              name: 'John Smith',
              address: 'No.1518,  Jinshajiang Road, Putuo District'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
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
            formLabelWidth: '120px'
          };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("open the outer Dialog");

      var _hoisted_2 = {
        class: "dialog-footer"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("open the inner Dialog");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.outerVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Outer Dialog",
          modelValue: _ctx.outerVisible,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.outerVisible = $event;
          })
        }, {
          footer: _withCtx(function () {
            return [_createVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.outerVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[4] || (_cache[4] = function ($event) {
                return _ctx.innerVisible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_dialog, {
              width: "30%",
              title: "Inner Dialog",
              modelValue: _ctx.innerVisible,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                return _ctx.innerVisible = $event;
              }),
              "append-to-body": ""
            }, null, 8, ["modelValue"])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            outerVisible: false,
            innerVisible: false
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
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "It should be noted that the content will not be aligned in center by default", -1);

      var _hoisted_3 = {
        class: "dialog-footer"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.centerDialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Warning",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.centerDialogVisible = $event;
          }),
          width: "30%",
          center: ""
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            centerDialogVisible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Dialog");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, [/*#__PURE__*/_createVNode("strong", null, "Extra content (Not rendered)")], -1);

      var _hoisted_4 = {
        class: "dialog-footer"
      };

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.centerDialogVisible = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Notice",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.centerDialogVisible = $event;
          }),
          width: "30%",
          "destroy-on-close": "",
          center: ""
        }, {
          footer: _withCtx(function () {
            return [_createVNode("span", _hoisted_4, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.centerDialogVisible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [_hoisted_2, _hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            centerDialogVisible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/dialog.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/dialog.md



dialogvue_type_script_lang_ts.render = dialogvue_type_template_id_64e97fb2_render

/* harmony default export */ var dialog = __webpack_exports__["default"] = (dialogvue_type_script_lang_ts);

/***/ })

}]);