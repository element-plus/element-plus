(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/table.md?vue&type=template&id=ed7268fe

var tablevue_type_template_id_ed7268fe_hoisted_1 = {
  class: "content element-doc"
};

var tablevue_type_template_id_ed7268fe_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "tablas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tablas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tablas")], -1);

var tablevue_type_template_id_ed7268fe_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Visualiza múltiples datos con un formato en particular. Podrá ordenar, filtrar y comparar datos en una tabla.", -1);

var tablevue_type_template_id_ed7268fe_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabla-basica"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabla-basica"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabla básica")], -1);

var tablevue_type_template_id_ed7268fe_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "La tabla básica es solo para mostrar datos.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Después de haber establecido el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con un arreglo de objetos, puede usar la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prop"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" (el correspondiente a la clave de un objeto dentro del arreglo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(") en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para insertar datos a las columnas de la tabla, y establecer el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para definir el nombre de la columna. También puede usar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para establecer el ancho de las columnas.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "  <template>\n    <el-table\n      :data=\"tableData\"\n      style=\"width: 100%\">\n      <el-table-column\n        prop=\"date\"\n        label=\"Fecha\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"name\"\n        label=\"Nombre\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"address\"\n        label=\"Dirección\">\n      </el-table-column>\n    </el-table>\n  </template>\n\n  <script>\n    export default {\n      data() {\n        return {\n          tableData: [{\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }, {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }, {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }, {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }]\n        }\n      }\n    }\n  </script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabla-con-franjas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabla-con-franjas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabla con franjas")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "La tabla con franjas hace más fácil distinguir filas diferentes.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "stripe"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" también acepta un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si se encuentra "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", la tabla será con franjas.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    stripe\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabla-con-bordes"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabla-con-bordes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabla con bordes")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Por defecto, la tabla no tiene bordes verticales. Si lo necesita, puede establecer el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    border\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabla-con-estados"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabla-con-estados"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabla con estados")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Puede destacar el contenido de la tabla para distinguir entre \"success, information, warning, danger\" y otros estados.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilice "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row-class-name"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para agregar clases personalizadas a una fila en específico. Y entonces, podrá darle diseño con estas clases.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    :row-class-name=\"tableRowClassName\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .el-table .warning-row {\n    background: oldlace;\n  }\n\n  .el-table .success-row {\n    background: #f0f9eb;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      tableRowClassName({row, rowIndex}) {\n        if (rowIndex === 1) {\n          return 'warning-row';\n        } else if (rowIndex === 3) {\n          return 'success-row';\n        }\n        return '';\n      }\n    },\n    data() {\n      return {\n        tableData:  [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabla-con-cabecera-fija"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabla-con-cabecera-fija"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabla con cabecera fija")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cuando esta tiene demasiadas filas, puede utilizar una cabecera fija.", -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Al configurar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", puede fijar la cabecera de la tabla sin agregar otro código.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    height=\"250\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }],\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabla-con-columnas-fijas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabla-con-columnas-fijas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabla con columnas fijas")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cuando se tienen demasiadas columnas, puede fijar alguna de estas.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("El atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fixed"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es utilizado en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", este acepta un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si es "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", la columna será fijada a la izquierda. También acepta dos tipos: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", ambos indican donde debe ser fijada la columna.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      fixed\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"state\"\n      label=\"Estado\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"city\"\n      label=\"Ciudad\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\"\n      width=\"300\">\n    </el-table-column>\n    <el-table-column\n      prop=\"zip\"\n      label=\"Código postal\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      fixed=\"right\"\n      label=\"Operaciones\"\n      width=\"120\">\n      <template #default=\"scope\">\n        <el-button @click=\"handleClick\" type=\"text\" size=\"small\">Detalle</el-button>\n        <el-button type=\"text\" size=\"small\">Editar</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        console.log('click');\n      }\n    },\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tabla-con-columnas-y-cabecera-fija."
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabla-con-columnas-y-cabecera-fija."
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tabla con columnas y cabecera fija.")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cuando tienes grandes cantidades de datos para colocar en una tabla, puede fijar la cabecera y columnas al mismo tiempo.", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Fije las columnas y cabecera al mismo tiempo combinando los dos ejemplos anteriores.")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    height=\"250\">\n    <el-table-column\n      fixed\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"state\"\n      label=\"Estado\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"city\"\n      label=\"Ciudad\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\"\n      width=\"300\">\n    </el-table-column>\n    <el-table-column\n      prop=\"zip\"\n      label=\"Código postal\"\n      width=\"120\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "altura-fluido-de-tabla-con-cabecera-fija-y-columnas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#altura-fluido-de-tabla-con-cabecera-fija-y-columnas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Altura fluido de tabla con cabecera fija (y columnas)")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cuando los datos se modifican dinámicamente, es posible que necesite que la tabla tenga una altura máxima en lugar de una altura fija, y además, que se muestre la barra de desplazamiento si es necesario.", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Al configurar el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", tu puedes fijar la cabecera de la tabla. La barra de desplazamiento únicamente se mostrará si la altura sobrepasa el valor de la altura máxima.")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    max-height=\"250\">\n    <el-table-column\n      fixed\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"state\"\n      label=\"Estado\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"city\"\n      label=\"Ciudad\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\"\n      width=\"300\">\n    </el-table-column>\n    <el-table-column\n      prop=\"zip\"\n      label=\"Código postal\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      fixed=\"right\"\n      label=\"Operaciones\"\n      width=\"120\">\n      <template #default=\"scope\">\n        <el-button\n          @click.native.prevent=\"deleteRow(scope.$index, tableData)\"\n          type=\"text\"\n          size=\"small\">\n          Eliminar\n        </el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      deleteRow(index, rows) {\n        rows.splice(index, 1);\n      }\n    },\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "agrupando-cabeceras-de-la-tabla"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#agrupando-cabeceras-de-la-tabla"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Agrupando cabeceras de la tabla")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cuando la estructura de datos es compleja, tu puedes hacer uso de cabeceras agrupadas para mostrar datos por jerarquía.", -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Solo necesitas colocar "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" dentro de un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", de esta forma lograrás agruparlas.")])], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column label=\"Información de entrega\">\n      <el-table-column\n        prop=\"name\"\n        label=\"Nombre\"\n        width=\"120\">\n      </el-table-column>\n      <el-table-column label=\"Información de dirección\">\n        <el-table-column\n          prop=\"state\"\n          label=\"Estado\"\n          width=\"120\">\n        </el-table-column>\n        <el-table-column\n          prop=\"city\"\n          label=\"Ciudad\"\n          width=\"120\">\n        </el-table-column>\n        <el-table-column\n          prop=\"address\"\n          label=\"Dirección\"\n          width=\"300\">\n        </el-table-column>\n        <el-table-column\n          prop=\"zip\"\n          label=\"Código postal\"\n          width=\"120\">\n        </el-table-column>\n      </el-table-column>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccion-unica"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccion-unica"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Selección única")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "La selección de una fila esta soportada.", -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("La tabla permite la selección de una sola fila. Puede activarlo agregando el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "highlight-current-row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Un evento llamado "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" será disparado cuando la selección de la fila cambie, sus parámetros son la fila antes y después de que ocurre el cambio: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "currentRow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "oldCurrentRow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si necesita mostrar el índice de la fila, puede agregar un nuevo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" asignado al "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y podrá ver el índice iniciando desde 1.")])], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"singleTable\"\n    :data=\"tableData\"\n    highlight-current-row\n    @current-change=\"handleCurrentChange\"\n    style=\"width: 100%\">\n    <el-table-column\n      type=\"index\"\n      width=\"50\">\n    </el-table-column>\n    <el-table-column\n      property=\"date\"\n      label=\"Fecha\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      property=\"name\"\n      label=\"Nombre\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      property=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"setCurrent(tableData[1])\">Seleccionar segunda fila</el-button>\n    <el-button @click=\"setCurrent()\">Limpiar selección</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }],\n        currentRow: null\n      }\n    },\n\n    methods: {\n      setCurrent(row) {\n        this.$refs.singleTable.setCurrentRow(row);\n      },\n      handleCurrentChange(val) {\n        this.currentRow = val;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "seleccion-multiple"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#seleccion-multiple"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Selección multiple")], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "También puede seleccionar múltiples filas.", -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Activar la selección múltiple es sencillo: Solo debe agregar a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con su "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" establecido en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "selection"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Además de la selección múltiple, este ejemplo también utiliza "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(": por defecto, si el contenido es demasiado largo, este permite córtalo dentro de múltiples líneas. Si lo que busca es mantener una línea, utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", que acepta un valor "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Cuando este está establecido en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", el contenido extra puede mostrar un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("em", null, "tooltip"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" cuando se hace "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("em", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" sobre la celda.")])], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"multipleTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    @selection-change=\"handleSelectionChange\">\n    <el-table-column\n      type=\"selection\"\n      width=\"55\">\n    </el-table-column>\n    <el-table-column\n      label=\"Fecha\"\n      width=\"120\">\n      <template #default=\"scope\">{{ scope.row.date }}</template>\n    </el-table-column>\n    <el-table-column\n      property=\"name\"\n      label=\"Nombre\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      property=\"address\"\n      label=\"Dirección\"\n      show-overflow-tooltip>\n    </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"toggleSelection([tableData[1], tableData[2]])\">Cambia el estado de selección de la segunda y tercera fila.</el-button>\n    <el-button @click=\"toggleSelection()\">Limpiar selección</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }],\n        multipleSelection: []\n      }\n    },\n\n    methods: {\n      toggleSelection(rows) {\n        if (rows) {\n          rows.forEach(row => {\n            this.$refs.multipleTable.toggleRowSelection(row);\n          });\n        } else {\n          this.$refs.multipleTable.clearSelection();\n        }\n      },\n      handleSelectionChange(val) {\n        this.multipleSelection = val;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ordenamiento"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ordenamiento"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Ordenamiento")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Ordena los datos para encontrar o comparar información rápidamente.", -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para ordenar los datos de una columna. Este acepta un "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con un valor por defecto "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-sort"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para determinar la columna y orden por defecto. Para aplicar sus propias reglas de ordenamiento, utilice "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sort-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" o "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sort-by"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si lo que necesita es ordenar de forma remota desde backend, establezca "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "custom"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", y escuche el evento "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sort-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de la tabla. Al dispararse el evento, tendrá acceso a la columna ordenada y orden para que pueda obtener los datos de la tabla ordenada desde su API. En este ejemplo utilizamos otro atributo llamado "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "formatter"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para darle un formato al valor de ciertas columnas. Este acepta una función que tiene dos parámetros: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Puede disparar este de acuerdo a sus propias necesidades.")])], -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    :default-sort = \"{prop: 'date', order: 'descending'}\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      sortable\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\"\n      :formatter=\"formatter\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    },\n    methods: {\n      formatter(row, column) {\n        return row.address;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filtros"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filtros"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filtros")], -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Filtra la tabla para encontrar la información que necesita.", -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" haciendo esta columna filtrable. "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es un arreglo, y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es una función que decide que filas se muestra. Esta tiene tres parámetros: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button @click=\"resetDateFilter\">清除日期过滤器</el-button>\n  <el-button @click=\"clearFilter\">清除所有过滤器</el-button>\n  <el-table\n    row-key=\"date\"\n    ref=\"filterTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      sortable\n      width=\"180\"\n      column-key=\"date\"\n      :filters=\"[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]\"\n      :filter-method=\"filterHandler\"\n    >\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\"\n      :formatter=\"formatter\">\n    </el-table-column>\n    <el-table-column\n      prop=\"tag\"\n      label=\"Etiqueta\"\n      width=\"100\"\n      :filters=\"[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]\"\n      :filter-method=\"filterTag\"\n      filter-placement=\"bottom-end\">\n      <template #default=\"scope\">\n        <el-tag\n          :type=\"scope.row.tag === 'Home' ? 'primary' : 'success'\"\n          disable-transitions>{{scope.row.tag}}</el-tag>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Home'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Office'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Home'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Office'\n        }]\n      }\n    },\n    methods: {\n      resetDateFilter() {\n        this.$refs.filterTable.clearFilter('date');\n      },\n      clearFilter() {\n        this.$refs.filterTable.clearFilter();\n      },\n      formatter(row, column) {\n        return row.address;\n      },\n      filterTag(value, row) {\n        return row.tag === value;\n      },\n      filterHandler(value, row, column) {\n        const property = column['property'];\n        return row[property] === value;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "plantilla-de-columna-personalizada"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#plantilla-de-columna-personalizada"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Plantilla de columna personalizada")], -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Personalice la columna de la tabla para que pueda integrarse con otros componentes.", -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Tiene acceso a la siguiente información: row, column, $index, store (gestor de estados de la tabla) por "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://vuejs.org/v2/guide/components.html#Scoped-Slots"
}, "Scoped slots"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      label=\"Fecha\"\n      width=\"180\">\n      <template #default=\"scope\">\n        <i class=\"el-icon-time\"></i>\n        <span style=\"margin-left: 10px\">{{ scope.row.date }}</span>\n      </template>\n    </el-table-column>\n    <el-table-column\n      label=\"Nombre\"\n      width=\"180\">\n      <template #default=\"scope\">\n        <el-popover effect=\"light\" trigger=\"hover\" placement=\"top\">\n          <template #default>\n            <p>姓名: {{ scope.row.name }}</p>\n            <p>住址: {{ scope.row.address }}</p>\n          </template>\n          <template #reference>\n            <div class=\"name-wrapper\">\n              <el-tag size=\"medium\">{{ scope.row.name }}</el-tag>\n            </div>\n          </template>\n        </el-popover>\n      </template>\n    </el-table-column>\n    <el-table-column\n      label=\"Operaciones\">\n      <template #default=\"scope\">\n        <el-button\n          size=\"mini\"\n          @click=\"handleEdit(scope.$index, scope.row)\">Editar</el-button>\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\">Eliminar</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row);\n      },\n      handleDelete(index, row) {\n        console.log(index, row);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "table-con-cabecera-personalizada"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table-con-cabecera-personalizada"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table con cabecera personalizada")], -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Se puede personalizar el encabezado de la tabla para que se pueda adaptar aún más.", -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede personalizar el aspecto del encabezado con header "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots"
}, "scoped slots"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))\"\n    style=\"width: 100%\">\n    <el-table-column\n      label=\"Date\"\n      prop=\"date\">\n    </el-table-column>\n    <el-table-column\n      label=\"Name\"\n      prop=\"name\">\n    </el-table-column>\n    <el-table-column\n      align=\"right\">\n      <template #header #default=\"scope\">\n        <el-input\n          v-model=\"search\"\n          size=\"mini\"\n          placeholder=\"Type to search\"/>\n      </template>\n      <template #default=\"scope\">\n        <el-button\n          size=\"mini\"\n          @click=\"handleEdit(scope.$index, scope.row)\">Edit</el-button>\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\">Delete</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n        }, {\n          date: '2016-05-04',\n          name: 'John',\n          address: 'No. 189, Grove St, Los Angeles',\n        }, {\n          date: '2016-05-01',\n          name: 'Morgan',\n          address: 'No. 189, Grove St, Los Angeles',\n        }, {\n          date: '2016-05-03',\n          name: 'Jessy',\n          address: 'No. 189, Grove St, Los Angeles',\n        }],\n        search: ''\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row);\n      },\n      handleDelete(index, row) {\n        console.log(index, row);\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fila-expandible"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fila-expandible"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Fila expandible")], -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Cuando el contenido de la fila es demasiado largo y busca no mostrar la barra de desplazamiento horizontal, puede utilizar la característica de fila expandible.", -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede activar la fila expandible estableciendo la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "expand"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y Scoped Slots. La plantilla para "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" se representará como el contenido de la fila expandible, y puede acceder a algunos atributos cuando está usando "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Scoped Slots"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en plantillas de columna personalizadas.")])], -1);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column type=\"expand\">\n      <template #default=\"props\">\n        <p>Estado: {{ props.row.state }}</p>\n        <p>Ciudad: {{ props.row.city }}</p>\n        <p>Dirección: {{ props.row.address }}</p>\n        <p>Código postal: {{ props.row.zip }}</p>\n      </template>\n    </el-table-column>\n    <el-table-column\n      label=\"Fecha\"\n      prop=\"date\">\n    </el-table-column>\n    <el-table-column\n      label=\"Nombre\"\n      prop=\"name\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "datos-tree-y-modo-lazy"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#datos-tree-y-modo-lazy"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Datos tree y modo lazy")], -1);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede visualizar datos de estructura de árbol. Cuando la fila contiene el campo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", se trata como datos anidados. Para renderizar datos anidados, la "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" es requerida。Ademas, los datos de las filas secundarias pueden ser cargados asincrónicamente. Poner la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de Table a true y la función "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "load"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Especifique el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en la fila para determinar qué fila contiene descendencia. Tanto "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" como "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pueden configurarse a través de "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "tree-props"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n<div>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%;margin-bottom: 20px;\"\n    row-key=\"id\"\n    border\n    default-expand-all>\n    <el-table-column\n      prop=\"date\"\n      label=\"日期\"\n      sortable\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"name\"\n      sortable\n      width=\"180\">\n    </el-table-column>\n  </el-table>\n\n  <el-table\n    :data=\"tableData1\"\n    style=\"width: 100%\"\n    row-key=\"id\"\n    border\n    lazy\n    :load=\"load\"\n    :tree-props=\"{children: 'children', hasChildren: 'hasChildren'}\">\n    <el-table-column\n      prop=\"date\"\n      label=\"date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"name\"\n      width=\"180\">\n    </el-table-column>\n  </el-table>\n</div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          id: 1,\n          date: '2016-05-02',\n          name: 'wangxiaohu'\n        }, {\n          id: 2,\n          date: '2016-05-04',\n          name: 'wangxiaohu'\n        }, {\n          id: 3,\n          date: '2016-05-01',\n          name: 'wangxiaohu',\n          children: [{\n              id: 31,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n            }, {\n              id: 32,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n          }]\n        }, {\n          id: 4,\n          date: '2016-05-03',\n          name: 'wangxiaohu'\n        }],\n        tableData1: [{\n          id: 1,\n          date: '2016-05-02',\n          name: 'wangxiaohu'\n        }, {\n          id: 2,\n          date: '2016-05-04',\n          name: 'wangxiaohu'\n        }, {\n          id: 3,\n          date: '2016-05-01',\n          name: 'wangxiaohu',\n          hasChildren: true\n        }, {\n          id: 4,\n          date: '2016-05-03',\n          name: 'wangxiaohu'\n        }]\n      }\n    },\n    methods: {\n      load(tree, treeNode, resolve) {\n        setTimeout(() => {\n          resolve([\n            {\n              id: 31,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n            }, {\n              id: 32,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n            }\n          ])\n        }, 1000)\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fila-de-resumen"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fila-de-resumen"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Fila de resumen")], -1);

var _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Para una tabla de números, puede agregar una fila extra en el pie de página de la tabla que muestra la suma de cada columna.", -1);

var _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede agregar la fila de resumen configurando "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-summary"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Por defecto, para la fila de resumen, la primera columna no resume nada, pero siempre muestra la suma (puede configurar el texto mostrado usando "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sum-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("), mientras que otras columnas suman todos los números en esa columna y los muestran. Por supuesto, puede definir su propio comportamiento de suma. Para hacerlo, utiliza un método "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "summary-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", que devuelve un array, y cada elemento que fue retornado desde el arreglo puede ser mostrado en las columnas del resumen de fila. La segunda tabla de este ejemplo es una demostración detallada.")])], -1);

var _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    border\n    show-summary\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"id\"\n      label=\"ID\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount1\"\n      sortable\n      label=\"Monto 1\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount2\"\n      sortable\n      label=\"Monto 2\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount3\"\n      sortable\n      label=\"Monto 3\">\n    </el-table-column>\n  </el-table>\n\n  <el-table\n    :data=\"tableData\"\n    border\n    height=\"200\"\n    :summary-method=\"getSummaries\"\n    show-summary\n    style=\"width: 100%; margin-top: 20px\">\n    <el-table-column\n      prop=\"id\"\n      label=\"ID\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount1\"\n      label=\"Costo 1 ($)\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount2\"\n      label=\"Costo 2 ($)\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount3\"\n      label=\"Costo 3 ($)\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          id: '12987122',\n          name: 'Tom',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        }, {\n          id: '12987123',\n          name: 'Tom',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        }, {\n          id: '12987124',\n          name: 'Tom',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        }, {\n          id: '12987125',\n          name: 'Tom',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        }, {\n          id: '12987126',\n          name: 'Tom',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }]\n      };\n    },\n    methods: {\n      getSummaries(param) {\n        const { columns, data } = param;\n        const sums = [];\n        columns.forEach((column, index) => {\n          if (index === 0) {\n            sums[index] = 'Costo total';\n            return;\n          }\n          const values = data.map(item => Number(item[column.property]));\n          if (!values.every(value => isNaN(value))) {\n            sums[index] = '$ ' + values.reduce((prev, curr) => {\n              const value = Number(curr);\n              if (!isNaN(value)) {\n                return prev + curr;\n              } else {\n                return prev;\n              }\n            }, 0);\n          } else {\n            sums[index] = 'N/A';\n          }\n        });\n\n        return sums;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fusion-de-filas-y-columnas"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fusion-de-filas-y-columnas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Fusión de filas y columnas")], -1);

var _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Configurar "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("em", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("em", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" le permite fusionar celdas.")], -1);

var _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "span-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" para configurar rowspan y colspan. Este acepta un método, y pasa un objeto a ese método incluyendo la fila actual "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", columna actual "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", índice de fila actual "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rowIndex"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y índice de columna actual "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "columnIndex"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". El método debe devolver un arreglo de dos números, el primer número siendo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y el segundo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". También puede devolver un objeto con las propiedades "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"arraySpanMethod\"\n      border\n      style=\"width: 100%\">\n      <el-table-column\n        prop=\"id\"\n        label=\"ID\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"name\"\n        label=\"Nombre\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount1\"\n        sortable\n        label=\"Monto 1\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount2\"\n        sortable\n        label=\"Monto 2\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount3\"\n        sortable\n        label=\"Monto 3\">\n      </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"objectSpanMethod\"\n      border\n      style=\"width: 100%; margin-top: 20px\">\n      <el-table-column\n        prop=\"id\"\n        label=\"ID\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"name\"\n        label=\"Nombre\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount1\"\n        label=\"Monto 1\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount2\"\n        label=\"Monto 2\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount3\"\n        label=\"Monto 3\">\n      </el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          id: '12987122',\n          name: 'Tom',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        }, {\n          id: '12987123',\n          name: 'Tom',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        }, {\n          id: '12987124',\n          name: 'Tom',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        }, {\n          id: '12987125',\n          name: 'Tom',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        }, {\n          id: '12987126',\n          name: 'Tom',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }]\n      };\n    },\n    methods: {\n      arraySpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (rowIndex % 2 === 0) {\n          if (columnIndex === 0) {\n            return [1, 2];\n          } else if (columnIndex === 1) {\n            return [0, 0];\n          }\n        }\n      },\n\n      objectSpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (columnIndex === 0) {\n          if (rowIndex % 2 === 0) {\n            return {\n              rowspan: 2,\n              colspan: 1\n            };\n          } else {\n            return {\n              rowspan: 0,\n              colspan: 0\n            };\n          }\n        }\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "indice-personalizado"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#indice-personalizado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Índice personalizado")], -1);

var _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Puede personalizar el índice de la fila con la propiedad "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" de las columnas.")], -1);

var _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Para personalizar el índice de la fila, utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" en "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "<el-table-column>"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" con "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si este es asignado a un número, todos los índices tendrán un desplazamiento de ese número. Este también acepta un método con cada índice (iniciando desde 0) como un parámetro, y este devuelve un valor que puede ser mostrado como índice.")])], -1);

var _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      type=\"index\"\n      :index=\"indexMethod\">\n    </el-table-column>\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Nombre\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Dirección\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }],\n      }\n    },\n    methods: {\n      indexMethod(index) {\n        return index * 2;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"atributos-de-la-tabla\"><a class=\"header-anchor\" href=\"#atributos-de-la-tabla\">¶</a> Atributos de la tabla</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>data</td><td>Datos de la tabla</td><td>array</td><td>—</td><td>—</td></tr><tr><td>height</td><td>Altura de la tabla. Por defecto esta tiene un tamaño <code>auto</code>. Si este valor es un número, la altura es medido en pixeles; si este valor es una cadena, la altura es afectada por estilos externos.</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>Table&#39;s max-height. The legal value is a number or the height in px.</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>stripe</td><td>especifica si la tabla será en franjas</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>especifica si la tabla tiene bordes verticales</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>tamaño de la tabla</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>fit</td><td>especifica si el ancho de la columna se adapta automáticamente a su contenedor</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-header</td><td>especifica si la cabecera de la tabla es visible</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>highlight-current-row</td><td>especifica si la fila actual es resaltado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>current-row-key</td><td>clave de la fila actual, un ajuste de propiedad única</td><td>string,number</td><td>—</td><td>—</td></tr><tr><td>row-class-name</td><td>función que devuelve nombres de clases personalizadas para una fila, o una cadena asignando nombres de clases para cada fila</td><td>Function({row, rowIndex})/String</td><td>—</td><td>—</td></tr><tr><td>row-style</td><td>función que devuelve el estilo personalizado para una fila, o un objeto asignando estilos personalizado para cada fila</td><td>Function({row, rowIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>cell-class-name</td><td>función que devuelve nombres de clases personalizadas para una celda, o una cadena asignando nombres de clases para cada celda</td><td>Function({row, column, rowIndex, columnIndex})/String</td><td>—</td><td>—</td></tr><tr><td>cell-style</td><td>función que devuelve estilos personalizados para una celda, o un objeto asignado a estilos personalizados para cada celda</td><td>Function({row, column, rowIndex, columnIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>header-row-class-name</td><td>función que devuelve nombre de clases personalizadas para una fila en la cabecera de la tabla, o una cadena asignando nombres de clases para cada fila en la cabecera de la tabla</td><td>Function({row, rowIndex})/String</td><td>—</td><td>—</td></tr><tr><td>header-row-style</td><td>función que devuelve estilos personalizados para una fila en la cabecera de la tabla, o un objeto asignando estilos personalizados para cada fila en la cabecera de la tabla</td><td>Function({row, rowIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>header-cell-class-name</td><td>función que devuelve nombre de clases personalizadas para una celda en la cabecera de la tabla, o una cadena asignando nombres de clases para cada celda en la cabecera de la tabla</td><td>Function({row, column, rowIndex, columnIndex})/String</td><td>—</td><td>—</td></tr><tr><td>header-cell-style</td><td>función que devuelve estilos personalizados para una celda en la cabecera de la tabla, o un objeto asignando estilos personalizados para cada celda en la cabecera de la tabla</td><td>Function({row, column, rowIndex, columnIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>row-key</td><td>key de los datos de las filas, utilizada para optimizar el renderizado. Requerido si <code>reserve-selection</code> está activada o muestra los datos del árbol. Cuando su tipo es String, se admite el acceso multinivel, por ejemplo, <code>user.info.id</code>, pero <code>user.info[0].id</code> no se admite, en cuyo caso se debe utilizar la función.</td><td>Function(row)/String</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>Texto mostrado cuando no existen datos. Puede personalizar esta área con <code>#empty</code></td><td>String</td><td>—</td><td>No Data</td></tr><tr><td>default-expand-all</td><td>especifica si todas las filas se expanden por defecto, solo funciona cuando la tabla tiene una columna <code>type=&quot;expand&quot;</code></td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>expand-row-keys</td><td>establece las filas expandidas a través de esta propiedad, este valor es la clave de filas expandidas, debería establecer <code>row-key</code> antes de usar esta propiedad</td><td>Array</td><td>—</td><td></td></tr><tr><td>default-sort</td><td>establece la columna y orden por defecto. La propiedad <code>prop</code> es utilizada para establecer la columna de ordenamiento por defecto, la propiedad <code>order</code> es utilizada para definir el tipo de orden por defecto</td><td>Object</td><td><code>order</code>: ascending, descending</td><td>if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td></tr><tr><td>tooltip-effect</td><td>propiedad <code>effect</code> para efectos en tooltip</td><td>String</td><td>dark/light</td><td></td></tr><tr><td>show-summary</td><td>especifica si debe mostrar la fila de resumen</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>sum-text</td><td>texto a mostrar para la primer columna de la fila de resumen</td><td>String</td><td>—</td><td>Sum</td></tr><tr><td>summary-method</td><td>método personalizado para resumen</td><td>Function({ columns, data })</td><td>—</td><td>—</td></tr><tr><td>span-method</td><td>método que devuelve <em>rowspan</em> y <em>colspan</em></td><td>Function({ row, column, rowIndex, columnIndex })</td><td>—</td><td>—</td></tr><tr><td>select-on-indeterminate</td><td>controla el comportamiento del checkbox maestro en tablas de selección múltiple cuando sólo se seleccionan algunas filas (pero no todas). Si es true, todas las filas serán seleccionadas, de lo contrario deseleccionadas.</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>indent</td><td>indentación horizontal de los datos en formato tree</td><td>Number</td><td>—</td><td>16</td></tr><tr><td>lazy</td><td>si se realiza un lazy loading de los datos</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>load</td><td>método para cargar las filas de los hijos, solamente funciona cuando <code>lazy</code>es true</td><td>Function(row, treeNode, resolve)</td><td>—</td><td>—</td></tr><tr><td>tree-props</td><td>configuración para renderizar datos anidados</td><td>Object</td><td>—</td><td>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</td></tr></tbody></table><h3 id=\"eventos-de-la-tabla\"><a class=\"header-anchor\" href=\"#eventos-de-la-tabla\">¶</a> Eventos de la tabla</h3><table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>select</td><td>se dispara cuando el usuario hace clic al <em>checkbox</em> (caja de selección) en una fila</td><td>selection, row</td></tr><tr><td>select-all</td><td>se dispara cando el usuario hace clic al <em>checkbox</em> (caja de selección) en una cabecera de la tabla</td><td>selection</td></tr><tr><td>selection-change</td><td>se dispara cuando selección cambia</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>se dispara cuando se desplaza dentro de una celda</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>se dispara cuando se desplaza fuera de una celda</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>se dispara cuando se hace clic en una celda</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>se dispara cuando se hace doble clic en una celda</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>se dispara cuando se hace clic en una fila</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>se dispara cuando el usuario hace clic derecho en una fila</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>se dispara cuando se hace doble clic en una fila</td><td>row, column, event</td></tr><tr><td>header-click</td><td>se dispara cuando se hace clic en una cabecera de columna</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>se dispara cuando el usuario hace clic derecho en una cabecera de columna</td><td>column, event</td></tr><tr><td>sort-change</td><td>se dispara cuando el ordenamiento de la tabla cambia</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>clave de la columna. Si necesitas utilizar el evento filter-change, este atributo es obligatorio para identificar cuál columna está siendo filtrada</td><td>filters</td></tr><tr><td>current-change</td><td>se dispara cuando la fila actual cambia</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>se dispara después de modificar el ancho de una columna arrastrando el borde de la cabecera.</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>se activa cuando el usuario expande o colapsa una fila (para la tabla expansible, el segundo parámetro es expandedRows; para la tabla de árbol, el segundo parámetro es expanded)</td><td>row, (expandedRows | expanded)</td></tr></tbody></table><h3 id=\"metodos-de-la-tabla\"><a class=\"header-anchor\" href=\"#metodos-de-la-tabla\">¶</a> Métodos de la tabla</h3><table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>clearSelection</td><td>utilizado en selección múltiple de la tabla, limpiar selección</td><td>—</td></tr><tr><td>toggleRowSelection</td><td>utilizado en selección múltiple de la tabla, alterna si una cierta fila es seleccionada. Con el segundo parámetro, puede directamente establecer si la fila es seleccionada</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>usado en Table de selección múltiple, cambia los estados de selección de todas las filas.</td><td>-</td></tr><tr><td>toggleRowExpansion</td><td>utilizado en la Tabla expandible o en la Tabla de árbol, conmutar si se desglosa una determinada línea. Con el segundo parámetro, se puede fijar directamente si esta línea se desglosa o se pliega</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>utilizado en tabla con selección sencilla, establece una cierta fila seleccionada. Si es llamado sin ningún parámetro, este puede limpiar la selección</td><td>row</td></tr><tr><td>clearSort</td><td>limpiar ordenamiento, restaurar datos a orden original</td><td>—</td></tr><tr><td>clearFilter</td><td>Se utiliza para borrar todas las condiciones de filtro cuando no se pasan parámetros, los datos se restaurarán a un estado sin filtrar, o se puede pasar una matriz de columnas para borrar las condiciones de filtro de la columna especificada.</td><td>columnKey</td></tr><tr><td>doLayout</td><td>refresca el layout del Table. Cuando la visibilidad de Table cambia, puede que necesite llamar a este método para obtener un diseño correcto</td><td>—</td></tr><tr><td>sort</td><td>Ordenar tabla manualmente. La propiedad <code>prop</code> se utiliza para establecer la columna de ordenación, la propiedad <code>order</code> se utiliza para establecer el orden.</td><td>prop: string, order: string</td></tr></tbody></table><h3 id=\"slots-de-la-tabla\"><a class=\"header-anchor\" href=\"#slots-de-la-tabla\">¶</a> Slots de la tabla</h3><table><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody><tr><td>append</td><td>El contenido será insertado después de la última fila. Es posible que necesites este espacio si deseas implementar <em>scroll</em> infinito para la tabla. Este espacio se mostrará sobre la fila de resumen si hay uno.</td></tr></tbody></table><h3 id=\"atributos-para-las-columnas-de-la-tabla\"><a class=\"header-anchor\" href=\"#atributos-para-las-columnas-de-la-tabla\">¶</a> Atributos para las columnas de la tabla</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>type</td><td>tipo de la columna. Si se establece a <code>selection</code>, la columna puede mostrar un <em>checkbox</em>. Si se establece a <code>index</code>, la columna puede mostrar el índice de la fila (iniciando desde 1). Si se establece a <code>expand</code>, la columna puede mostrar un ícono para expandir.</td><td>string</td><td>selection/index/expand</td><td>—</td></tr><tr><td>index</td><td>personalice los índices para cada fila, funciona en columnas con <code>type=index</code></td><td>number, Function(index)</td><td>-</td><td>-</td></tr><tr><td>label</td><td>etiqueta de la columna</td><td>string</td><td>—</td><td>—</td></tr><tr><td>column-key</td><td>clave de la columna. Si necesita utilizar el evento <code>filter-change</code>, necesita el atributo para identificar cual columna está siendo filtrada</td><td>string</td><td>string</td><td>—</td></tr><tr><td>prop</td><td>nombre del campo. También puede usar su alias: <code>property</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>ancho de la columna</td><td>string</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>ancho mínimo de la columna. Columnas con <code>width</code> tienen un ancho fijo, mientras que las columnas con <code>min-width</code> tienen un ancho que se distribuye en proporción.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>fixed</td><td>especifica si la columna se fija a la izquierda o a la derecha. Se fijará a la izquierda si es <code>true</code></td><td>string/boolean</td><td>true/left/right</td><td>—</td></tr><tr><td>render-header</td><td>Función de renderizado para la cabecera de la tabla de esta columna</td><td>Function(h, { column, $index })</td><td>—</td><td>—</td></tr><tr><td>sortable</td><td>especifica que columna puede ser ordenado. El ordenamiento remoto puede ser hecho configurando el atributo <code>custom</code> y escucha al evento de tabla <code>sort-change</code></td><td>boolean, string</td><td>true, false, custom</td><td>false</td></tr><tr><td>sort-method</td><td>método de ordenamiento, funciona cuando <code>sortable</code> está en <code>true</code>. Debería devolver un número, al igual que Array.sort</td><td>Function(a, b)</td><td>—</td><td>—</td></tr><tr><td>sort-by</td><td>especifica por cual propiedad de va a ordenar, funciona cuando <code>sortable</code> es <code>true</code> y <code>sort-method</code> es <code>undefined</code>. Si se establece a un arreglo, la columna ordenara secuencialmente por la siguiente propiedad si la anterior es igual</td><td>Function(row, index)/String/Array</td><td>—</td><td>—</td></tr><tr><td>sort-orders</td><td>el orden de las estrategias de ordenación utilizadas al ordenar los datos, funciona cuando <code>sortable</code> es <code>true</code>. Acepta un array, a medida que el usuario hace clic en el encabezado, la columna se ordena en el orden de los elementos del array.</td><td>array</td><td>los elementos en el arreglo necesitan ser uno de los siguientes: <code>ascending</code>, <code>descending</code> y <code>null</code> (restaura el orden original)</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>especifica si el ancho de la columna puede ser redimensionado, funciona cuando <code>border</code> de <code>el-table</code> está en <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>formatter</td><td>función que formatea el contenido de la celda</td><td>Function(row, column, cellValue, index)</td><td>—</td><td>—</td></tr><tr><td>show-overflow-tooltip</td><td>especifica si el <em>tooltip</em> debe ocultarse o mostrarse al hacer <em>hover</em> en la celda</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>alineación</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>header-align</td><td>alineación de la cabecera de la tabla. Si se omite, se aplicará el valor del atributo anterior.</td><td>String</td><td>left/center/right</td><td>—</td></tr><tr><td>class-name</td><td>nombre de clase de la celda en la columna</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>nombre de clase de la etiqueta de esta columna</td><td>string</td><td>—</td><td>—</td></tr><tr><td>selectable</td><td>función que determina si una cierta fila puede ser seleccionada, funciona cuando <code>type</code> esta en <code>selection</code></td><td>Function(row, index)</td><td>—</td><td>—</td></tr><tr><td>reserve-selection</td><td>especifica si se reserva la selección después de actualizar los datos, funciona cuando <code>type</code> está en <code>selection</code>. Note que <code>row-key</code> es requerido para que esto funcione</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filters</td><td>un arreglo de opciones para filtrado de datos. Para cada elemento en este arreglo, <code>text</code> y <code>value</code> son obligatorios</td><td>Array[{ text, value }]</td><td>—</td><td>—</td></tr><tr><td>filter-placement</td><td>colocación para el menú desplegable del filtro</td><td>String</td><td>same as Tooltip&#39;s <code>placement</code></td><td>—</td></tr><tr><td>filter-multiple</td><td>especifica si el filtrado de datos soporta múltiples opciones</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>filter-method</td><td>método para filtrado de datos. Si <code>filter-multiple</code> está habilitado, este método se invocará varias veces para cada fila, y una fila puede mostrar si una de las llamadas devuelve <code>true</code></td><td>Function(value, row, column)</td><td>—</td><td>—</td></tr><tr><td>filtered-value</td><td>el valor del filtro para los datos seleccionados, puede ser útil cuando el encabezado de la tabla se representará con <code>render-header</code></td><td>Array</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"table-column-scoped-slot\"><a class=\"header-anchor\" href=\"#table-column-scoped-slot\">¶</a> Table-column Scoped Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenido personalizado para las columnas de la tabla. El parámetro del scope es { row, column, $index }</td></tr><tr><td>header</td><td>Contenido personalizado para el encabezado de la tabla. El parámetro del scope es { column, $index }</td></tr></tbody></table>", 12);

function tablevue_type_template_id_ed7268fe_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_element_demo10 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo10");

  var _component_element_demo11 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo11");

  var _component_element_demo12 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo12");

  var _component_element_demo13 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo13");

  var _component_element_demo14 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo14");

  var _component_element_demo15 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo15");

  var _component_element_demo16 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo16");

  var _component_element_demo17 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo17");

  var _component_element_demo18 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo18");

  var _component_element_demo19 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo19");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tablevue_type_template_id_ed7268fe_hoisted_1, [tablevue_type_template_id_ed7268fe_hoisted_2, tablevue_type_template_id_ed7268fe_hoisted_3, tablevue_type_template_id_ed7268fe_hoisted_4, tablevue_type_template_id_ed7268fe_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, _hoisted_36, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), _hoisted_39, _hoisted_40, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), _hoisted_43, _hoisted_44, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo10)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_46];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_45];
    }),
    _: 1
  }), _hoisted_47, _hoisted_48, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo11)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_50];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_49];
    }),
    _: 1
  }), _hoisted_51, _hoisted_52, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo12)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_54];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_53];
    }),
    _: 1
  }), _hoisted_55, _hoisted_56, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo13)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_58];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_57];
    }),
    _: 1
  }), _hoisted_59, _hoisted_60, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo14)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_62];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_61];
    }),
    _: 1
  }), _hoisted_63, _hoisted_64, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo15)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_66];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_65];
    }),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo16)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_69];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_68];
    }),
    _: 1
  }), _hoisted_70, _hoisted_71, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo17)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_73];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_72];
    }),
    _: 1
  }), _hoisted_74, _hoisted_75, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo18)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_77];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_76];
    }),
    _: 1
  }), _hoisted_78, _hoisted_79, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo19)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_81];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_80];
    }),
    _: 1
  }), _hoisted_82]);
}
// CONCATENATED MODULE: ./website/docs/es/table.md?vue&type=template&id=ed7268fe

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/table.md?vue&type=script&lang=ts


/* harmony default export */ var tablevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección"
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          stripe: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección"
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }]
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
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          border: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección"
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          "row-class-name": _ctx.tableRowClassName
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección"
            })];
          }),
          _: 1
        }, 8, ["data", "row-class-name"])]);
      }

      var democomponentExport = {
        methods: {
          tableRowClassName: function tableRowClassName(_ref) {
            var row = _ref.row,
                rowIndex = _ref.rowIndex;

            if (rowIndex === 1) {
              return 'warning-row';
            } else if (rowIndex === 3) {
              return 'success-row';
            }

            return '';
          }
        },
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          height: "250",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección"
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-08',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-06',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-07',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Detalle");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Editar");

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              fixed: "",
              prop: "date",
              label: "Fecha",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "state",
              label: "Estado",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "city",
              label: "Ciudad",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección",
              width: "300"
            }), _createVNode(_component_el_table_column, {
              prop: "zip",
              label: "Código postal",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              fixed: "right",
              label: "Operaciones",
              width: "120"
            }, {
              default: _withCtx(function (scope) {
                return [_createVNode(_component_el_button, {
                  onClick: _ctx.handleClick,
                  type: "text",
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "text",
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        methods: {
          handleClick: function handleClick() {
            console.log('click');
          }
        },
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Home'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Office'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Home'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Office'
            }]
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

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          height: "250"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              fixed: "",
              prop: "date",
              label: "Fecha",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "state",
              label: "Estado",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "city",
              label: "Ciudad",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección",
              width: "300"
            }), _createVNode(_component_el_table_column, {
              prop: "zip",
              label: "Código postal",
              width: "120"
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-08',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-06',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-07',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withModifiers = vue_esm_browser["gb" /* withModifiers */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Eliminar ");

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          "max-height": "250"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              fixed: "",
              prop: "date",
              label: "Fecha",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "state",
              label: "Estado",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "city",
              label: "Ciudad",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección",
              width: "300"
            }), _createVNode(_component_el_table_column, {
              prop: "zip",
              label: "Código postal",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              fixed: "right",
              label: "Operaciones",
              width: "120"
            }, {
              default: _withCtx(function (scope) {
                return [_createVNode(_component_el_button, {
                  onClick: _withModifiers(function ($event) {
                    return _ctx.deleteRow(scope.$index, _ctx.tableData);
                  }, ["prevent"]),
                  type: "text",
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 2
                }, 1032, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        methods: {
          deleteRow: function deleteRow(index, rows) {
            rows.splice(index, 1);
          }
        },
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-08',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-06',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-07',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              label: "Información de entrega"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "Nombre",
                  width: "120"
                }), _createVNode(_component_el_table_column, {
                  label: "Información de dirección"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_table_column, {
                      prop: "state",
                      label: "Estado",
                      width: "120"
                    }), _createVNode(_component_el_table_column, {
                      prop: "city",
                      label: "Ciudad",
                      width: "120"
                    }), _createVNode(_component_el_table_column, {
                      prop: "address",
                      label: "Dirección",
                      width: "300"
                    }), _createVNode(_component_el_table_column, {
                      prop: "zip",
                      label: "Código postal",
                      width: "120"
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-08',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-06',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-07',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Seleccionar segunda fila");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Limpiar selección");

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          ref: "singleTable",
          data: _ctx.tableData,
          "highlight-current-row": "",
          onCurrentChange: _ctx.handleCurrentChange,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              type: "index",
              width: "50"
            }), _createVNode(_component_el_table_column, {
              property: "date",
              label: "Fecha",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              property: "name",
              label: "Nombre",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              property: "address",
              label: "Dirección"
            })];
          }),
          _: 1
        }, 8, ["data", "onCurrentChange"]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.setCurrent(_ctx.tableData[1]);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.setCurrent();
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }],
            currentRow: null
          };
        },
        methods: {
          setCurrent: function setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
          },
          handleCurrentChange: function handleCurrentChange(val) {
            this.currentRow = val;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo10": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Cambia el estado de selección de la segunda y tercera fila.");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Limpiar selección");

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          ref: "multipleTable",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          onSelectionChange: _ctx.handleSelectionChange
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              type: "selection",
              width: "55"
            }), _createVNode(_component_el_table_column, {
              label: "Fecha",
              width: "120"
            }, {
              default: _withCtx(function (scope) {
                return [_createTextVNode(_toDisplayString(scope.row.date), 1)];
              }),
              _: 1
            }), _createVNode(_component_el_table_column, {
              property: "name",
              label: "Nombre",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              property: "address",
              label: "Dirección",
              "show-overflow-tooltip": ""
            })];
          }),
          _: 1
        }, 8, ["data", "onSelectionChange"]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.toggleSelection([_ctx.tableData[1], _ctx.tableData[2]]);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.toggleSelection();
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-08',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-06',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-07',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }],
            multipleSelection: []
          };
        },
        methods: {
          toggleSelection: function toggleSelection(rows) {
            var _this = this;

            if (rows) {
              rows.forEach(function (row) {
                _this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
          },
          handleSelectionChange: function handleSelectionChange(val) {
            this.multipleSelection = val;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo11": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          "default-sort": {
            prop: 'date',
            order: 'descending'
          },
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              sortable: "",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección",
              formatter: _ctx.formatter
            }, null, 8, ["formatter"])];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }]
          };
        },
        methods: {
          formatter: function formatter(row, column) {
            return row.address;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo12": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("清除日期过滤器");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("清除所有过滤器");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _ctx.resetDateFilter
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.clearFilter
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_table, {
          "row-key": "date",
          ref: "filterTable",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              sortable: "",
              width: "180",
              "column-key": "date",
              filters: [{
                text: '2016-05-01',
                value: '2016-05-01'
              }, {
                text: '2016-05-02',
                value: '2016-05-02'
              }, {
                text: '2016-05-03',
                value: '2016-05-03'
              }, {
                text: '2016-05-04',
                value: '2016-05-04'
              }],
              "filter-method": _ctx.filterHandler
            }, null, 8, ["filter-method"]), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección",
              formatter: _ctx.formatter
            }, null, 8, ["formatter"]), _createVNode(_component_el_table_column, {
              prop: "tag",
              label: "Etiqueta",
              width: "100",
              filters: [{
                text: 'Home',
                value: 'Home'
              }, {
                text: 'Office',
                value: 'Office'
              }],
              "filter-method": _ctx.filterTag,
              "filter-placement": "bottom-end"
            }, {
              default: _withCtx(function (scope) {
                return [_createVNode(_component_el_tag, {
                  type: scope.row.tag === 'Home' ? 'primary' : 'success',
                  "disable-transitions": ""
                }, {
                  default: _withCtx(function () {
                    return [_createTextVNode(_toDisplayString(scope.row.tag), 1)];
                  }),
                  _: 2
                }, 1032, ["type"])];
              }),
              _: 1
            }, 8, ["filter-method"])];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              tag: 'Home'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              tag: 'Office'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              tag: 'Home'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              tag: 'Office'
            }]
          };
        },
        methods: {
          resetDateFilter: function resetDateFilter() {
            this.$refs.filterTable.clearFilter('date');
          },
          clearFilter: function clearFilter() {
            this.$refs.filterTable.clearFilter();
          },
          formatter: function formatter(row, column) {
            return row.address;
          },
          filterTag: function filterTag(value, row) {
            return row.tag === value;
          },
          filterHandler: function filterHandler(value, row, column) {
            var property = column['property'];
            return row[property] === value;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo13": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-time"
      }, null, -1);

      var _hoisted_2 = {
        style: {
          "margin-left": "10px"
        }
      };
      var _hoisted_3 = {
        class: "name-wrapper"
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Editar");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Eliminar");

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_popover = _resolveComponent("el-popover");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              label: "Fecha",
              width: "180"
            }, {
              default: _withCtx(function (scope) {
                return [_hoisted_1, _createVNode("span", _hoisted_2, _toDisplayString(scope.row.date), 1)];
              }),
              _: 1
            }), _createVNode(_component_el_table_column, {
              label: "Nombre",
              width: "180"
            }, {
              default: _withCtx(function (scope) {
                return [_createVNode(_component_el_popover, {
                  effect: "light",
                  trigger: "hover",
                  placement: "top"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode("p", null, "姓名: " + _toDisplayString(scope.row.name), 1), _createVNode("p", null, "住址: " + _toDisplayString(scope.row.address), 1)];
                  }),
                  reference: _withCtx(function () {
                    return [_createVNode("div", _hoisted_3, [_createVNode(_component_el_tag, {
                      size: "medium"
                    }, {
                      default: _withCtx(function () {
                        return [_createTextVNode(_toDisplayString(scope.row.name), 1)];
                      }),
                      _: 2
                    }, 1024)])];
                  }),
                  _: 2
                }, 1024)];
              }),
              _: 1
            }), _createVNode(_component_el_table_column, {
              label: "Operaciones"
            }, {
              default: _withCtx(function (scope) {
                return [_createVNode(_component_el_button, {
                  size: "mini",
                  onClick: function onClick($event) {
                    return _ctx.handleEdit(scope.$index, scope.row);
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 2
                }, 1032, ["onClick"]), _createVNode(_component_el_button, {
                  size: "mini",
                  type: "danger",
                  onClick: function onClick($event) {
                    return _ctx.handleDelete(scope.$index, scope.row);
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
                  }),
                  _: 2
                }, 1032, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }]
          };
        },
        methods: {
          handleEdit: function handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete: function handleDelete(index, row) {
            console.log(index, row);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo14": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Edit");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Delete");

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData.filter(function (data) {
            return !_ctx.search || data.name.toLowerCase().includes(_ctx.search.toLowerCase());
          }),
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              label: "Date",
              prop: "date"
            }), _createVNode(_component_el_table_column, {
              label: "Name",
              prop: "name"
            }), _createVNode(_component_el_table_column, {
              align: "right"
            }, {
              header: _withCtx(function () {
                return [_createVNode(_component_el_input, {
                  modelValue: _ctx.search,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.search = $event;
                  }),
                  size: "mini",
                  placeholder: "Type to search"
                }, null, 8, ["modelValue"])];
              }),
              default: _withCtx(function (scope) {
                return [_createVNode(_component_el_button, {
                  size: "mini",
                  onClick: function onClick($event) {
                    return _ctx.handleEdit(scope.$index, scope.row);
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 2
                }, 1032, ["onClick"]), _createVNode(_component_el_button, {
                  size: "mini",
                  type: "danger",
                  onClick: function onClick($event) {
                    return _ctx.handleDelete(scope.$index, scope.row);
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 2
                }, 1032, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'John',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
              name: 'Morgan',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-03',
              name: 'Jessy',
              address: 'No. 189, Grove St, Los Angeles'
            }],
            search: ''
          };
        },
        methods: {
          handleEdit: function handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete: function handleDelete(index, row) {
            console.log(index, row);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo15": function () {
      var _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              type: "expand"
            }, {
              default: _withCtx(function (props) {
                return [_createVNode("p", null, "Estado: " + _toDisplayString(props.row.state), 1), _createVNode("p", null, "Ciudad: " + _toDisplayString(props.row.city), 1), _createVNode("p", null, "Dirección: " + _toDisplayString(props.row.address), 1), _createVNode("p", null, "Código postal: " + _toDisplayString(props.row.zip), 1)];
              }),
              _: 1
            }), _createVNode(_component_el_table_column, {
              label: "Fecha",
              prop: "date"
            }), _createVNode(_component_el_table_column, {
              label: "Nombre",
              prop: "name"
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-08',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-06',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }, {
              date: '2016-05-07',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo16": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%",
            "margin-bottom": "20px"
          },
          "row-key": "id",
          border: "",
          "default-expand-all": ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "日期",
              sortable: "",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "name",
              sortable: "",
              width: "180"
            })];
          }),
          _: 1
        }, 8, ["data"]), _createVNode(_component_el_table, {
          data: _ctx.tableData1,
          style: {
            "width": "100%"
          },
          "row-key": "id",
          border: "",
          lazy: "",
          load: _ctx.load,
          "tree-props": {
            children: 'children',
            hasChildren: 'hasChildren'
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "date",
              label: "date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "name",
              width: "180"
            })];
          }),
          _: 1
        }, 8, ["data", "load"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: 1,
              date: '2016-05-02',
              name: 'wangxiaohu'
            }, {
              id: 2,
              date: '2016-05-04',
              name: 'wangxiaohu'
            }, {
              id: 3,
              date: '2016-05-01',
              name: 'wangxiaohu',
              children: [{
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu'
              }, {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu'
              }]
            }, {
              id: 4,
              date: '2016-05-03',
              name: 'wangxiaohu'
            }],
            tableData1: [{
              id: 1,
              date: '2016-05-02',
              name: 'wangxiaohu'
            }, {
              id: 2,
              date: '2016-05-04',
              name: 'wangxiaohu'
            }, {
              id: 3,
              date: '2016-05-01',
              name: 'wangxiaohu',
              hasChildren: true
            }, {
              id: 4,
              date: '2016-05-03',
              name: 'wangxiaohu'
            }]
          };
        },
        methods: {
          load: function load(tree, treeNode, resolve) {
            setTimeout(function () {
              resolve([{
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu'
              }, {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu'
              }]);
            }, 1000);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo17": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          border: "",
          "show-summary": "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "id",
              label: "ID",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              sortable: "",
              label: "Monto 1"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              sortable: "",
              label: "Monto 2"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              sortable: "",
              label: "Monto 3"
            })];
          }),
          _: 1
        }, 8, ["data"]), _createVNode(_component_el_table, {
          data: _ctx.tableData,
          border: "",
          height: "200",
          "summary-method": _ctx.getSummaries,
          "show-summary": "",
          style: {
            "width": "100%",
            "margin-top": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "id",
              label: "ID",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              label: "Costo 1 ($)"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              label: "Costo 2 ($)"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              label: "Costo 3 ($)"
            })];
          }),
          _: 1
        }, 8, ["data", "summary-method"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: '12987122',
              name: 'Tom',
              amount1: '234',
              amount2: '3.2',
              amount3: 10
            }, {
              id: '12987123',
              name: 'Tom',
              amount1: '165',
              amount2: '4.43',
              amount3: 12
            }, {
              id: '12987124',
              name: 'Tom',
              amount1: '324',
              amount2: '1.9',
              amount3: 9
            }, {
              id: '12987125',
              name: 'Tom',
              amount1: '621',
              amount2: '2.2',
              amount3: 17
            }, {
              id: '12987126',
              name: 'Tom',
              amount1: '539',
              amount2: '4.1',
              amount3: 15
            }]
          };
        },
        methods: {
          getSummaries: function getSummaries(param) {
            var columns = param.columns,
                data = param.data;
            var sums = [];
            columns.forEach(function (column, index) {
              if (index === 0) {
                sums[index] = 'Costo total';
                return;
              }

              var values = data.map(function (item) {
                return Number(item[column.property]);
              });

              if (!values.every(function (value) {
                return isNaN(value);
              })) {
                sums[index] = '$ ' + values.reduce(function (prev, curr) {
                  var value = Number(curr);

                  if (!isNaN(value)) {
                    return prev + curr;
                  } else {
                    return prev;
                  }
                }, 0);
              } else {
                sums[index] = 'N/A';
              }
            });
            return sums;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo18": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          "span-method": _ctx.arraySpanMethod,
          border: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "id",
              label: "ID",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              sortable: "",
              label: "Monto 1"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              sortable: "",
              label: "Monto 2"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              sortable: "",
              label: "Monto 3"
            })];
          }),
          _: 1
        }, 8, ["data", "span-method"]), _createVNode(_component_el_table, {
          data: _ctx.tableData,
          "span-method": _ctx.objectSpanMethod,
          border: "",
          style: {
            "width": "100%",
            "margin-top": "20px"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              prop: "id",
              label: "ID",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              label: "Monto 1"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              label: "Monto 2"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              label: "Monto 3"
            })];
          }),
          _: 1
        }, 8, ["data", "span-method"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              id: '12987122',
              name: 'Tom',
              amount1: '234',
              amount2: '3.2',
              amount3: 10
            }, {
              id: '12987123',
              name: 'Tom',
              amount1: '165',
              amount2: '4.43',
              amount3: 12
            }, {
              id: '12987124',
              name: 'Tom',
              amount1: '324',
              amount2: '1.9',
              amount3: 9
            }, {
              id: '12987125',
              name: 'Tom',
              amount1: '621',
              amount2: '2.2',
              amount3: 17
            }, {
              id: '12987126',
              name: 'Tom',
              amount1: '539',
              amount2: '4.1',
              amount3: 15
            }]
          };
        },
        methods: {
          arraySpanMethod: function arraySpanMethod(_ref2) {
            var row = _ref2.row,
                column = _ref2.column,
                rowIndex = _ref2.rowIndex,
                columnIndex = _ref2.columnIndex;

            if (rowIndex % 2 === 0) {
              if (columnIndex === 0) {
                return [1, 2];
              } else if (columnIndex === 1) {
                return [0, 0];
              }
            }
          },
          objectSpanMethod: function objectSpanMethod(_ref3) {
            var row = _ref3.row,
                column = _ref3.column,
                rowIndex = _ref3.rowIndex,
                columnIndex = _ref3.columnIndex;

            if (columnIndex === 0) {
              if (rowIndex % 2 === 0) {
                return {
                  rowspan: 2,
                  colspan: 1
                };
              } else {
                return {
                  rowspan: 0,
                  colspan: 0
                };
              }
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo19": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table_column, {
              type: "index",
              index: _ctx.indexMethod
            }, null, 8, ["index"]), _createVNode(_component_el_table_column, {
              prop: "date",
              label: "Fecha",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Dirección"
            })];
          }),
          _: 1
        }, 8, ["data"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Home'
            }, {
              date: '2016-05-02',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Office'
            }, {
              date: '2016-05-04',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Home'
            }, {
              date: '2016-05-01',
              name: 'Tom',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
              tag: 'Office'
            }]
          };
        },
        methods: {
          indexMethod: function indexMethod(index) {
            return index * 2;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/table.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/table.md



tablevue_type_script_lang_ts.render = tablevue_type_template_id_ed7268fe_render

/* harmony default export */ var table = __webpack_exports__["default"] = (tablevue_type_script_lang_ts);

/***/ })

}]);