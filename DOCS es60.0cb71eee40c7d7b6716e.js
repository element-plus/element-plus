(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/table.md?vue&type=template&id=7704bc48

const tablevue_type_template_id_7704bc48_hoisted_1 = {
  class: "content element-doc"
};

const tablevue_type_template_id_7704bc48_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tablas ");

const tablevue_type_template_id_7704bc48_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Visualiza múltiples datos con un formato en particular. Podrá ordenar, filtrar y comparar datos en una tabla.", -1);

const tablevue_type_template_id_7704bc48_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabla básica ");

const tablevue_type_template_id_7704bc48_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La tabla básica es solo para mostrar datos.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Después de haber establecido el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con un arreglo de objetos, puede usar la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (el correspondiente a la clave de un objeto dentro del arreglo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(") en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para insertar datos a las columnas de la tabla, y establecer el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para definir el nombre de la columna. También puede usar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para establecer el ancho de las columnas.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabla con franjas ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La tabla con franjas hace más fácil distinguir filas diferentes.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "stripe"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" también acepta un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Si se encuentra "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", la tabla será con franjas.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" stripe style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabla con bordes ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Por defecto, la tabla no tiene bordes verticales. Si lo necesita, puede establecer el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" border style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabla con estados ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Puede destacar el contenido de la tabla para distinguir entre \"success, information, warning, danger\" y otros estados.", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilice "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row-class-name"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para agregar clases personalizadas a una fila en específico. Y entonces, podrá darle diseño con estas clases.")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    :row-class-name=\"tableRowClassName\"\n  >\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .el-table .warning-row {\n    background: oldlace;\n  }\n\n  .el-table .success-row {\n    background: #f0f9eb;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      tableRowClassName({ row, rowIndex }) {\n        if (rowIndex === 1) {\n          return 'warning-row'\n        } else if (rowIndex === 3) {\n          return 'success-row'\n        }\n        return ''\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabla con cabecera fija ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cuando esta tiene demasiadas filas, puede utilizar una cabecera fija.", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Al configurar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", puede fijar la cabecera de la tabla sin agregar otro código.")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" height=\"250\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabla con columnas fijas ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cuando se tienen demasiadas columnas, puede fijar alguna de estas.", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fixed"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es utilizado en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", este acepta un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Si es "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", la columna será fijada a la izquierda. También acepta dos tipos: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", ambos indican donde debe ser fijada la columna.")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column fixed prop=\"date\" label=\"Fecha\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"state\" label=\"Estado\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"city\" label=\"Ciudad\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\" width=\"600\">\n    </el-table-column>\n    <el-table-column prop=\"zip\" label=\"Código postal\" width=\"120\">\n    </el-table-column>\n    <el-table-column fixed=\"right\" label=\"Operaciones\" width=\"120\">\n      <template #default=\"scope\">\n        <el-button @click=\"handleClick\" type=\"text\" size=\"small\"\n          >Detalle</el-button\n        >\n        <el-button type=\"text\" size=\"small\">Editar</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        console.log('click')\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tabla con columnas y cabecera fija. ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cuando tienes grandes cantidades de datos para colocar en una tabla, puede fijar la cabecera y columnas al mismo tiempo.", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Fije las columnas y cabecera al mismo tiempo combinando los dos ejemplos anteriores.")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\" height=\"250\">\n    <el-table-column fixed prop=\"date\" label=\"Fecha\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"state\" label=\"Estado\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"city\" label=\"Ciudad\" width=\"320\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\" width=\"600\">\n    </el-table-column>\n    <el-table-column prop=\"zip\" label=\"Código postal\" width=\"120\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Altura fluido de tabla con cabecera fija (y columnas) ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cuando los datos se modifican dinámicamente, es posible que necesite que la tabla tenga una altura máxima en lugar de una altura fija, y además, que se muestre la barra de desplazamiento si es necesario.", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Al configurar el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", tu puedes fijar la cabecera de la tabla. La barra de desplazamiento únicamente se mostrará si la altura sobrepasa el valor de la altura máxima.")])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\" max-height=\"250\">\n    <el-table-column fixed prop=\"date\" label=\"Fecha\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"state\" label=\"Estado\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"city\" label=\"Ciudad\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\" width=\"600\">\n    </el-table-column>\n    <el-table-column prop=\"zip\" label=\"Código postal\" width=\"120\">\n    </el-table-column>\n    <el-table-column fixed=\"right\" label=\"Operaciones\" width=\"120\">\n      <template #default=\"scope\">\n        <el-button\n          @click.prevent=\"deleteRow(scope.$index, tableData)\"\n          type=\"text\"\n          size=\"small\"\n        >\n          Eliminar\n        </el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      deleteRow(index, rows) {\n        rows.splice(index, 1)\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Agrupando cabeceras de la tabla ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cuando la estructura de datos es compleja, tu puedes hacer uso de cabeceras agrupadas para mostrar datos por jerarquía.", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Solo necesitas colocar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" dentro de un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", de esta forma lograrás agruparlas.")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"150\"> </el-table-column>\n    <el-table-column label=\"Información de entrega\">\n      <el-table-column prop=\"name\" label=\"Nombre\" width=\"120\">\n      </el-table-column>\n      <el-table-column label=\"Información de dirección\">\n        <el-table-column prop=\"state\" label=\"Estado\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"city\" label=\"Ciudad\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n        <el-table-column prop=\"zip\" label=\"Código postal\" width=\"120\">\n        </el-table-column>\n      </el-table-column>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Selección única ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "La selección de una fila esta soportada.", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("La tabla permite la selección de una sola fila. Puede activarlo agregando el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "highlight-current-row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Un evento llamado "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" será disparado cuando la selección de la fila cambie, sus parámetros son la fila antes y después de que ocurre el cambio: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "currentRow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "oldCurrentRow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Si necesita mostrar el índice de la fila, puede agregar un nuevo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" asignado al "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y podrá ver el índice iniciando desde 1.")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"singleTable\"\n    :data=\"tableData\"\n    highlight-current-row\n    @current-change=\"handleCurrentChange\"\n    style=\"width: 100%\"\n  >\n    <el-table-column type=\"index\" width=\"50\"> </el-table-column>\n    <el-table-column property=\"date\" label=\"Fecha\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"name\" label=\"Nombre\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"setCurrent(tableData[1])\"\n      >Seleccionar segunda fila</el-button\n    >\n    <el-button @click=\"setCurrent()\">Limpiar selección</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n        currentRow: null,\n      }\n    },\n\n    methods: {\n      setCurrent(row) {\n        this.$refs.singleTable.setCurrentRow(row)\n      },\n      handleCurrentChange(val) {\n        this.currentRow = val\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Selección multiple ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "También puede seleccionar múltiples filas.", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Activar la selección múltiple es sencillo: Solo debe agregar a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con su "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" establecido en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "selection"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Además de la selección múltiple, este ejemplo también utiliza "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(": por defecto, si el contenido es demasiado largo, este permite córtalo dentro de múltiples líneas. Si lo que busca es mantener una línea, utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", que acepta un valor "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Cuando este está establecido en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", el contenido extra puede mostrar un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" cuando se hace "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" sobre la celda.")])], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"multipleTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    @selection-change=\"handleSelectionChange\"\n  >\n    <el-table-column type=\"selection\" width=\"55\"> </el-table-column>\n    <el-table-column label=\"Fecha\" width=\"120\">\n      <template #default=\"scope\">{{ scope.row.date }}</template>\n    </el-table-column>\n    <el-table-column property=\"name\" label=\"Nombre\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"address\" label=\"Dirección\" show-overflow-tooltip>\n    </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"toggleSelection([tableData[1], tableData[2]])\"\n      >Cambia el estado de selección de la segunda y tercera fila.</el-button\n    >\n    <el-button @click=\"toggleSelection()\">Limpiar selección</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n        multipleSelection: [],\n      }\n    },\n\n    methods: {\n      toggleSelection(rows) {\n        if (rows) {\n          rows.forEach((row) => {\n            this.$refs.multipleTable.toggleRowSelection(row)\n          })\n        } else {\n          this.$refs.multipleTable.clearSelection()\n        }\n      },\n      handleSelectionChange(val) {\n        this.multipleSelection = val\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Ordenamiento ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Ordena los datos para encontrar o comparar información rápidamente.", -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para ordenar los datos de una columna. Este acepta un "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con un valor por defecto "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-sort"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para determinar la columna y orden por defecto. Para aplicar sus propias reglas de ordenamiento, utilice "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" o "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-by"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Si lo que necesita es ordenar de forma remota desde backend, establezca "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "custom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", y escuche el evento "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de la tabla. Al dispararse el evento, tendrá acceso a la columna ordenada y orden para que pueda obtener los datos de la tabla ordenada desde su API. En este ejemplo utilizamos otro atributo llamado "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "formatter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para darle un formato al valor de ciertas columnas. Este acepta una función que tiene dos parámetros: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Puede disparar este de acuerdo a sus propias necesidades.")])], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    :default-sort=\"{prop: 'date', order: 'descending'}\"\n    style=\"width: 100%\"\n  >\n    <el-table-column prop=\"date\" label=\"Fecha\" sortable width=\"180\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\" :formatter=\"formatter\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n    methods: {\n      formatter(row, column) {\n        return row.address\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Filtros ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Filtra la tabla para encontrar la información que necesita.", -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Establezca el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" haciendo esta columna filtrable. "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es un arreglo, y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es una función que decide que filas se muestra. Esta tiene tres parámetros: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button @click=\"resetDateFilter\">清除日期过滤器</el-button>\n  <el-button @click=\"clearFilter\">清除所有过滤器</el-button>\n  <el-table\n    row-key=\"date\"\n    ref=\"filterTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column\n      prop=\"date\"\n      label=\"Fecha\"\n      sortable\n      width=\"180\"\n      column-key=\"date\"\n      :filters=\"[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]\"\n      :filter-method=\"filterHandler\"\n    >\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\" :formatter=\"formatter\">\n    </el-table-column>\n    <el-table-column\n      prop=\"tag\"\n      label=\"Etiqueta\"\n      width=\"100\"\n      :filters=\"[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]\"\n      :filter-method=\"filterTag\"\n      filter-placement=\"bottom-end\"\n    >\n      <template #default=\"scope\">\n        <el-tag\n          :type=\"scope.row.tag === 'Home' ? 'primary' : 'success'\"\n          disable-transitions\n          >{{scope.row.tag}}</el-tag\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Office',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Office',\n          },\n        ],\n      }\n    },\n    methods: {\n      resetDateFilter() {\n        this.$refs.filterTable.clearFilter('date')\n      },\n      clearFilter() {\n        this.$refs.filterTable.clearFilter()\n      },\n      formatter(row, column) {\n        return row.address\n      },\n      filterTag(value, row) {\n        return row.tag === value\n      },\n      filterHandler(value, row, column) {\n        const property = column['property']\n        return row[property] === value\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Plantilla de columna personalizada ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Personalice la columna de la tabla para que pueda integrarse con otros componentes.", -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Tiene acceso a la siguiente información: row, column, $index, store (gestor de estados de la tabla) por ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("slots");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column label=\"Fecha\" width=\"180\">\n      <template #default=\"scope\">\n        <i class=\"el-icon-time\"></i>\n        <span style=\"margin-left: 10px\">{{ scope.row.date }}</span>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"Nombre\" width=\"180\">\n      <template #default=\"scope\">\n        <el-popover effect=\"light\" trigger=\"hover\" placement=\"top\">\n          <template #default>\n            <p>姓名: {{ scope.row.name }}</p>\n            <p>住址: {{ scope.row.address }}</p>\n          </template>\n          <template #reference>\n            <div class=\"name-wrapper\">\n              <el-tag size=\"medium\">{{ scope.row.name }}</el-tag>\n            </div>\n          </template>\n        </el-popover>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"Operaciones\">\n      <template #default=\"scope\">\n        <el-button size=\"mini\" @click=\"handleEdit(scope.$index, scope.row)\"\n          >Editar</el-button\n        >\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\"\n          >Eliminar</el-button\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row)\n      },\n      handleDelete(index, row) {\n        console.log(index, row)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table con cabecera personalizada ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Se puede personalizar el encabezado de la tabla para que se pueda adaptar aún más.", -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede personalizar el aspecto del encabezado con header ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("slots");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))\"\n    style=\"width: 100%\"\n  >\n    <el-table-column label=\"Date\" prop=\"date\"> </el-table-column>\n    <el-table-column label=\"Name\" prop=\"name\"> </el-table-column>\n    <el-table-column align=\"right\">\n      <template #header>\n        <el-input v-model=\"search\" size=\"mini\" placeholder=\"Type to search\" />\n      </template>\n      <template #default=\"scope\">\n        <el-button size=\"mini\" @click=\"handleEdit(scope.$index, scope.row)\"\n          >Edit</el-button\n        >\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\"\n          >Delete</el-button\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Morgan',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Jessy',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n        search: '',\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row)\n      },\n      handleDelete(index, row) {\n        console.log(index, row)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fila expandible ");

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Cuando el contenido de la fila es demasiado largo y busca no mostrar la barra de desplazamiento horizontal, puede utilizar la característica de fila expandible.", -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede activar la fila expandible estableciendo la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "expand"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y Slots. La plantilla para "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" se representará como el contenido de la fila expandible, y puede acceder a algunos atributos cuando está usando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Slots"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en plantillas de columna personalizadas.")])], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column type=\"expand\">\n      <template #default=\"props\">\n        <p>Estado: {{ props.row.state }}</p>\n        <p>Ciudad: {{ props.row.city }}</p>\n        <p>Dirección: {{ props.row.address }}</p>\n        <p>Código postal: {{ props.row.zip }}</p>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"Fecha\" prop=\"date\"> </el-table-column>\n    <el-table-column label=\"Nombre\" prop=\"name\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Datos tree y modo lazy ");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede visualizar datos de estructura de árbol. Cuando la fila contiene el campo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", se trata como datos anidados. Para renderizar datos anidados, la "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" es requerida。Ademas, los datos de las filas secundarias pueden ser cargados asincrónicamente. Poner la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de Table a true y la función "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "load"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Especifique el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en la fila para determinar qué fila contiene descendencia. Tanto "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" como "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pueden configurarse a través de "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tree-props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      style=\"width: 100%;margin-bottom: 20px;\"\n      row-key=\"id\"\n      border\n      default-expand-all\n    >\n      <el-table-column prop=\"date\" label=\"日期\" sortable width=\"180\">\n      </el-table-column>\n      <el-table-column prop=\"name\" label=\"name\" sortable width=\"180\">\n      </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData1\"\n      style=\"width: 100%\"\n      row-key=\"id\"\n      border\n      lazy\n      :load=\"load\"\n      :tree-props=\"{children: 'children', hasChildren: 'hasChildren'}\"\n    >\n      <el-table-column prop=\"date\" label=\"date\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"name\" width=\"180\"> </el-table-column>\n    </el-table>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: 1,\n            date: '2016-05-02',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 2,\n            date: '2016-05-04',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 3,\n            date: '2016-05-01',\n            name: 'wangxiaohu',\n            children: [\n              {\n                id: 31,\n                date: '2016-05-01',\n                name: 'wangxiaohu',\n              },\n              {\n                id: 32,\n                date: '2016-05-01',\n                name: 'wangxiaohu',\n              },\n            ],\n          },\n          {\n            id: 4,\n            date: '2016-05-03',\n            name: 'wangxiaohu',\n          },\n        ],\n        tableData1: [\n          {\n            id: 1,\n            date: '2016-05-02',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 2,\n            date: '2016-05-04',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 3,\n            date: '2016-05-01',\n            name: 'wangxiaohu',\n            hasChildren: true,\n          },\n          {\n            id: 4,\n            date: '2016-05-03',\n            name: 'wangxiaohu',\n          },\n        ],\n      }\n    },\n    methods: {\n      load(tree, treeNode, resolve) {\n        setTimeout(() => {\n          resolve([\n            {\n              id: 31,\n              date: '2016-05-01',\n              name: 'wangxiaohu',\n            },\n            {\n              id: 32,\n              date: '2016-05-01',\n              name: 'wangxiaohu',\n            },\n          ])\n        }, 1000)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fila de resumen ");

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Para una tabla de números, puede agregar una fila extra en el pie de página de la tabla que muestra la suma de cada columna.", -1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede agregar la fila de resumen configurando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-summary"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Por defecto, para la fila de resumen, la primera columna no resume nada, pero siempre muestra la suma (puede configurar el texto mostrado usando "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sum-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("), mientras que otras columnas suman todos los números en esa columna y los muestran. Por supuesto, puede definir su propio comportamiento de suma. Para hacerlo, utiliza un método "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "summary-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", que devuelve un array, y cada elemento que fue retornado desde el arreglo puede ser mostrado en las columnas del resumen de fila. La segunda tabla de este ejemplo es una demostración detallada.")])], -1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" border show-summary style=\"width: 100%\">\n    <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\"> </el-table-column>\n    <el-table-column prop=\"amount1\" sortable label=\"Monto 1\"> </el-table-column>\n    <el-table-column prop=\"amount2\" sortable label=\"Monto 2\"> </el-table-column>\n    <el-table-column prop=\"amount3\" sortable label=\"Monto 3\"> </el-table-column>\n  </el-table>\n\n  <el-table\n    :data=\"tableData\"\n    border\n    height=\"200\"\n    :summary-method=\"getSummaries\"\n    show-summary\n    style=\"width: 100%; margin-top: 20px\"\n  >\n    <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\"> </el-table-column>\n    <el-table-column prop=\"amount1\" label=\"Costo 1 ($)\"> </el-table-column>\n    <el-table-column prop=\"amount2\" label=\"Costo 2 ($)\"> </el-table-column>\n    <el-table-column prop=\"amount3\" label=\"Costo 3 ($)\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: '12987122',\n            name: 'Tom',\n            amount1: '234',\n            amount2: '3.2',\n            amount3: 10,\n          },\n          {\n            id: '12987123',\n            name: 'Tom',\n            amount1: '165',\n            amount2: '4.43',\n            amount3: 12,\n          },\n          {\n            id: '12987124',\n            name: 'Tom',\n            amount1: '324',\n            amount2: '1.9',\n            amount3: 9,\n          },\n          {\n            id: '12987125',\n            name: 'Tom',\n            amount1: '621',\n            amount2: '2.2',\n            amount3: 17,\n          },\n          {\n            id: '12987126',\n            name: 'Tom',\n            amount1: '539',\n            amount2: '4.1',\n            amount3: 15,\n          },\n        ],\n      }\n    },\n    methods: {\n      getSummaries(param) {\n        const { columns, data } = param\n        const sums = []\n        columns.forEach((column, index) => {\n          if (index === 0) {\n            sums[index] = 'Costo total'\n            return\n          }\n          const values = data.map((item) => Number(item[column.property]))\n          if (!values.every((value) => isNaN(value))) {\n            sums[index] =\n              '$ ' +\n              values.reduce((prev, curr) => {\n                const value = Number(curr)\n                if (!isNaN(value)) {\n                  return prev + curr\n                } else {\n                  return prev\n                }\n              }, 0)\n          } else {\n            sums[index] = 'N/A'\n          }\n        })\n\n        return sums\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Fusión de filas y columnas ");

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Configurar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" le permite fusionar celdas.")], -1);

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "span-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" para configurar rowspan y colspan. Este acepta un método, y pasa un objeto a ese método incluyendo la fila actual "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", columna actual "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", índice de fila actual "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowIndex"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y índice de columna actual "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "columnIndex"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". El método debe devolver un arreglo de dos números, el primer número siendo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y el segundo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". También puede devolver un objeto con las propiedades "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"arraySpanMethod\"\n      border\n      style=\"width: 100%\"\n    >\n      <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"Nombre\"> </el-table-column>\n      <el-table-column prop=\"amount1\" sortable label=\"Monto 1\">\n      </el-table-column>\n      <el-table-column prop=\"amount2\" sortable label=\"Monto 2\">\n      </el-table-column>\n      <el-table-column prop=\"amount3\" sortable label=\"Monto 3\">\n      </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"objectSpanMethod\"\n      border\n      style=\"width: 100%; margin-top: 20px\"\n    >\n      <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"Nombre\"> </el-table-column>\n      <el-table-column prop=\"amount1\" label=\"Monto 1\"> </el-table-column>\n      <el-table-column prop=\"amount2\" label=\"Monto 2\"> </el-table-column>\n      <el-table-column prop=\"amount3\" label=\"Monto 3\"> </el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: '12987122',\n            name: 'Tom',\n            amount1: '234',\n            amount2: '3.2',\n            amount3: 10,\n          },\n          {\n            id: '12987123',\n            name: 'Tom',\n            amount1: '165',\n            amount2: '4.43',\n            amount3: 12,\n          },\n          {\n            id: '12987124',\n            name: 'Tom',\n            amount1: '324',\n            amount2: '1.9',\n            amount3: 9,\n          },\n          {\n            id: '12987125',\n            name: 'Tom',\n            amount1: '621',\n            amount2: '2.2',\n            amount3: 17,\n          },\n          {\n            id: '12987126',\n            name: 'Tom',\n            amount1: '539',\n            amount2: '4.1',\n            amount3: 15,\n          },\n        ],\n      }\n    },\n    methods: {\n      arraySpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (rowIndex % 2 === 0) {\n          if (columnIndex === 0) {\n            return [1, 2]\n          } else if (columnIndex === 1) {\n            return [0, 0]\n          }\n        }\n      },\n\n      objectSpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (columnIndex === 0) {\n          if (rowIndex % 2 === 0) {\n            return {\n              rowspan: 2,\n              colspan: 1,\n            }\n          } else {\n            return {\n              rowspan: 0,\n              colspan: 0,\n            }\n          }\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Índice personalizado ");

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Puede personalizar el índice de la fila con la propiedad "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" de las columnas.")], -1);

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Para personalizar el índice de la fila, utilice el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" en "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "<el-table-column>"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" con "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Si este es asignado a un número, todos los índices tendrán un desplazamiento de ese número. Este también acepta un método con cada índice (iniciando desde 0) como un parámetro, y este devuelve un valor que puede ser mostrado como índice.")])], -1);

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column type=\"index\" :index=\"indexMethod\"> </el-table-column>\n    <el-table-column prop=\"date\" label=\"Fecha\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Nombre\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Dirección\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n        ],\n      }\n    },\n    methods: {\n      indexMethod(index) {\n        return index * 2\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos de la tabla ");

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>data</td><td>Datos de la tabla</td><td>array</td><td>—</td><td>—</td></tr><tr><td>height</td><td>Altura de la tabla. Por defecto esta tiene un tamaño <code>auto</code>. Si este valor es un número, la altura es medido en pixeles; si este valor es una cadena, la altura es afectada por estilos externos.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>Table&#39;s max-height. The legal value is a number or the height in px.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>stripe</td><td>especifica si la tabla será en franjas</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>especifica si la tabla tiene bordes verticales</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>tamaño de la tabla</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>fit</td><td>especifica si el ancho de la columna se adapta automáticamente a su contenedor</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-header</td><td>especifica si la cabecera de la tabla es visible</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>highlight-current-row</td><td>especifica si la fila actual es resaltado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>current-row-key</td><td>clave de la fila actual, un ajuste de propiedad única</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>row-class-name</td><td>función que devuelve nombres de clases personalizadas para una fila, o una cadena asignando nombres de clases para cada fila</td><td>function({ row, rowIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>row-style</td><td>función que devuelve el estilo personalizado para una fila, o un objeto asignando estilos personalizado para cada fila</td><td>function({ row, rowIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>cell-class-name</td><td>función que devuelve nombres de clases personalizadas para una celda, o una cadena asignando nombres de clases para cada celda</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>cell-style</td><td>función que devuelve estilos personalizados para una celda, o un objeto asignado a estilos personalizados para cada celda</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>header-row-class-name</td><td>función que devuelve nombre de clases personalizadas para una fila en la cabecera de la tabla, o una cadena asignando nombres de clases para cada fila en la cabecera de la tabla</td><td>function({ row, rowIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>header-row-style</td><td>función que devuelve estilos personalizados para una fila en la cabecera de la tabla, o un objeto asignando estilos personalizados para cada fila en la cabecera de la tabla</td><td>function({ row, rowIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>header-cell-class-name</td><td>función que devuelve nombre de clases personalizadas para una celda en la cabecera de la tabla, o una cadena asignando nombres de clases para cada celda en la cabecera de la tabla</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>header-cell-style</td><td>función que devuelve estilos personalizados para una celda en la cabecera de la tabla, o un objeto asignando estilos personalizados para cada celda en la cabecera de la tabla</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>row-key</td><td>key de los datos de las filas, utilizada para optimizar el renderizado. Requerido si <code>reserve-selection</code> está activada o muestra los datos del árbol. Cuando su tipo es String, se admite el acceso multinivel, por ejemplo, <code>user.info.id</code>, pero <code>user.info[0].id</code> no se admite, en cuyo caso se debe utilizar la función.</td><td>function(row) / string</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>Texto mostrado cuando no existen datos. Puede personalizar esta área con <code>#empty</code></td><td>string</td><td>—</td><td>No Data</td></tr><tr><td>default-expand-all</td><td>especifica si todas las filas se expanden por defecto, solo funciona cuando la tabla tiene una columna <code>type=&quot;expand&quot;</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-row-keys</td><td>establece las filas expandidas a través de esta propiedad, este valor es la clave de filas expandidas, debería establecer <code>row-key</code> antes de usar esta propiedad</td><td>array</td><td>—</td><td>—</td></tr><tr><td>default-sort</td><td>establece la columna y orden por defecto. La propiedad <code>prop</code> es utilizada para establecer la columna de ordenamiento por defecto, la propiedad <code>order</code> es utilizada para definir el tipo de orden por defecto</td><td>object</td><td><code>order</code>: ascending / descending</td><td>if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td></tr><tr><td>tooltip-effect</td><td>propiedad <code>effect</code> para efectos en tooltip</td><td>string</td><td>dark / light</td><td>dark</td></tr><tr><td>show-summary</td><td>especifica si debe mostrar la fila de resumen</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>sum-text</td><td>texto a mostrar para la primer columna de la fila de resumen</td><td>string</td><td>—</td><td>Sum</td></tr><tr><td>summary-method</td><td>método personalizado para resumen</td><td>function({ columns, data })</td><td>—</td><td>—</td></tr><tr><td>span-method</td><td>método que devuelve <em>rowspan</em> y <em>colspan</em></td><td>function({ row, column, rowIndex, columnIndex })</td><td>—</td><td>—</td></tr><tr><td>select-on-indeterminate</td><td>controla el comportamiento del checkbox maestro en tablas de selección múltiple cuando sólo se seleccionan algunas filas (pero no todas). Si es true, todas las filas serán seleccionadas, de lo contrario deseleccionadas.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>indent</td><td>indentación horizontal de los datos en formato tree</td><td>number</td><td>—</td><td>16</td></tr><tr><td>lazy</td><td>si se realiza un lazy loading de los datos</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>load</td><td>método para cargar las filas de los hijos, solamente funciona cuando <code>lazy</code>es true</td><td>function(row, treeNode, resolve)</td><td>—</td><td>—</td></tr><tr><td>tree-props</td><td>configuración para renderizar datos anidados</td><td>object</td><td>—</td><td>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</td></tr></tbody></table>", 1);

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Eventos de la tabla ");

const _hoisted_89 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Nombre del evento</th><th>Descripción</th><th>Parámetros</th></tr></thead><tbody><tr><td>select</td><td>se dispara cuando el usuario hace clic al <em>checkbox</em> (caja de selección) en una fila</td><td>selection, row</td></tr><tr><td>select-all</td><td>se dispara cando el usuario hace clic al <em>checkbox</em> (caja de selección) en una cabecera de la tabla</td><td>selection</td></tr><tr><td>selection-change</td><td>se dispara cuando selección cambia</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>se dispara cuando se desplaza dentro de una celda</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>se dispara cuando se desplaza fuera de una celda</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>se dispara cuando se hace clic en una celda</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>se dispara cuando se hace doble clic en una celda</td><td>row, column, cell, event</td></tr><tr><td>cell-contextmenu</td><td>se dispara cuando el usuario hace clic derecho en una celda</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>se dispara cuando se hace clic en una fila</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>se dispara cuando el usuario hace clic derecho en una fila</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>se dispara cuando se hace doble clic en una fila</td><td>row, column, event</td></tr><tr><td>header-click</td><td>se dispara cuando se hace clic en una cabecera de columna</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>se dispara cuando el usuario hace clic derecho en una cabecera de columna</td><td>column, event</td></tr><tr><td>sort-change</td><td>se dispara cuando el ordenamiento de la tabla cambia</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>clave de la columna. Si necesitas utilizar el evento filter-change, este atributo es obligatorio para identificar cuál columna está siendo filtrada</td><td>filters</td></tr><tr><td>current-change</td><td>se dispara cuando la fila actual cambia</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>se dispara después de modificar el ancho de una columna arrastrando el borde de la cabecera.</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>se activa cuando el usuario expande o colapsa una fila (para la tabla expansible, el segundo parámetro es expandedRows; para la tabla de árbol, el segundo parámetro es expanded)</td><td>row, (expandedRows | expanded)</td></tr></tbody></table>", 1);

const _hoisted_90 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Métodos de la tabla ");

const _hoisted_91 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>clearSelection</td><td>utilizado en selección múltiple de la tabla, limpiar selección</td><td>—</td></tr><tr><td>toggleRowSelection</td><td>utilizado en selección múltiple de la tabla, alterna si una cierta fila es seleccionada. Con el segundo parámetro, puede directamente establecer si la fila es seleccionada</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>usado en Table de selección múltiple, toggle select all and deselect all</td><td>—</td></tr><tr><td>toggleRowExpansion</td><td>utilizado en la Tabla expandible o en la Tabla de árbol, conmutar si se desglosa una determinada línea. Con el segundo parámetro, se puede fijar directamente si esta línea se desglosa o se pliega</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>utilizado en tabla con selección sencilla, establece una cierta fila seleccionada. Si es llamado sin ningún parámetro, este puede limpiar la selección</td><td>row</td></tr><tr><td>clearSort</td><td>limpiar ordenamiento, restaurar datos a orden original</td><td>—</td></tr><tr><td>clearFilter</td><td>Se utiliza para borrar todas las condiciones de filtro cuando no se pasan parámetros, los datos se restaurarán a un estado sin filtrar, o se puede pasar una matriz de columnas para borrar las condiciones de filtro de la columna especificada.</td><td>columnKey</td></tr><tr><td>doLayout</td><td>refresca el layout del Table. Cuando la visibilidad de Table cambia, puede que necesite llamar a este método para obtener un diseño correcto</td><td>—</td></tr><tr><td>sort</td><td>Ordenar tabla manualmente. La propiedad <code>prop</code> se utiliza para establecer la columna de ordenación, la propiedad <code>order</code> se utiliza para establecer el orden.</td><td>prop: string, order: string</td></tr></tbody></table>", 1);

const _hoisted_92 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slots de la tabla ");

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Nombre"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Descripción")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "append"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("El contenido será insertado después de la última fila. Es posible que necesites este espacio si deseas implementar "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("em", null, "scroll"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" infinito para la tabla. Este espacio se mostrará sobre la fila de resumen si hay uno.")])])])], -1);

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Atributos para las columnas de la tabla ");

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>type</td><td>tipo de la columna. Si se establece a <code>selection</code>, la columna puede mostrar un <em>checkbox</em>. Si se establece a <code>index</code>, la columna puede mostrar el índice de la fila (iniciando desde 1). Si se establece a <code>expand</code>, la columna puede mostrar un ícono para expandir.</td><td>string</td><td>selection / index / expand</td><td>—</td></tr><tr><td>index</td><td>personalice los índices para cada fila, funciona en columnas con <code>type=index</code></td><td>number / function(index)</td><td>—</td><td>—</td></tr><tr><td>label</td><td>etiqueta de la columna</td><td>string</td><td>—</td><td>—</td></tr><tr><td>column-key</td><td>clave de la columna. Si necesita utilizar el evento <code>filter-change</code>, necesita el atributo para identificar cual columna está siendo filtrada</td><td>string</td><td>string</td><td>—</td></tr><tr><td>prop</td><td>nombre del campo. También puede usar su alias: <code>property</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>ancho de la columna</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>ancho mínimo de la columna. Columnas con <code>width</code> tienen un ancho fijo, mientras que las columnas con <code>min-width</code> tienen un ancho que se distribuye en proporción.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>fixed</td><td>especifica si la columna se fija a la izquierda o a la derecha. Se fijará a la izquierda si es <code>true</code></td><td>string / boolean</td><td>true / &#39;left&#39; / &#39;right&#39;</td><td>—</td></tr><tr><td>render-header</td><td>Función de renderizado para la cabecera de la tabla de esta columna</td><td>Function({ column, $index })</td><td>—</td><td>—</td></tr><tr><td>sortable</td><td>especifica que columna puede ser ordenado. El ordenamiento remoto puede ser hecho configurando el atributo <code>custom</code> y escucha al evento de tabla <code>sort-change</code></td><td>boolean / string</td><td>true, false, &#39;custom&#39;</td><td>false</td></tr><tr><td>sort-method</td><td>método de ordenamiento, funciona cuando <code>sortable</code> está en <code>true</code>. Debería devolver un número, al igual que Array.sort</td><td>function(a, b)</td><td>—</td><td>—</td></tr><tr><td>sort-by</td><td>especifica por cual propiedad de va a ordenar, funciona cuando <code>sortable</code> es <code>true</code> y <code>sort-method</code> es <code>undefined</code>. Si se establece a un arreglo, la columna ordenara secuencialmente por la siguiente propiedad si la anterior es igual</td><td>function(row, index) / string / array</td><td>—</td><td>—</td></tr><tr><td>sort-orders</td><td>el orden de las estrategias de ordenación utilizadas al ordenar los datos, funciona cuando <code>sortable</code> es <code>true</code>. Acepta un array, a medida que el usuario hace clic en el encabezado, la columna se ordena en el orden de los elementos del array.</td><td>array</td><td>los elementos en el arreglo necesitan ser uno de los siguientes: <code>ascending</code>, <code>descending</code> y <code>null</code> (restaura el orden original)</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>especifica si el ancho de la columna puede ser redimensionado, funciona cuando <code>border</code> de <code>el-table</code> está en <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>formatter</td><td>función que formatea el contenido de la celda</td><td>function(row, column, cellValue, index)</td><td>—</td><td>—</td></tr><tr><td>show-overflow-tooltip</td><td>especifica si el <em>tooltip</em> debe ocultarse o mostrarse al hacer <em>hover</em> en la celda</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>alineación</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>header-align</td><td>alineación de la cabecera de la tabla. Si se omite, se aplicará el valor del atributo anterior.</td><td>string</td><td>left / center / right</td><td>—</td></tr><tr><td>class-name</td><td>nombre de clase de la celda en la columna</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>nombre de clase de la etiqueta de esta columna</td><td>string</td><td>—</td><td>—</td></tr><tr><td>selectable</td><td>función que determina si una cierta fila puede ser seleccionada, funciona cuando <code>type</code> esta en <code>selection</code></td><td>function(row, index)</td><td>—</td><td>—</td></tr><tr><td>reserve-selection</td><td>especifica si se reserva la selección después de actualizar los datos, funciona cuando <code>type</code> está en <code>selection</code>. Note que <code>row-key</code> es requerido para que esto funcione</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filters</td><td>un arreglo de opciones para filtrado de datos. Para cada elemento en este arreglo, <code>text</code> y <code>value</code> son obligatorios</td><td>array[{ text, value }]</td><td>—</td><td>—</td></tr><tr><td>filter-placement</td><td>colocación para el menú desplegable del filtro</td><td>string</td><td>same as Tooltip&#39;s <code>placement</code></td><td>—</td></tr><tr><td>filter-multiple</td><td>especifica si el filtrado de datos soporta múltiples opciones</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>filter-method</td><td>método para filtrado de datos. Si <code>filter-multiple</code> está habilitado, este método se invocará varias veces para cada fila, y una fila puede mostrar si una de las llamadas devuelve <code>true</code></td><td>function(value, row, column)</td><td>—</td><td>—</td></tr><tr><td>filtered-value</td><td>el valor del filtro para los datos seleccionados, puede ser útil cuando el encabezado de la tabla se representará con <code>render-header</code></td><td>array</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_96 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table-column Slot ");

const _hoisted_97 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contenido personalizado para las columnas de la tabla. El parámetro del scope es { row, column, $index }")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contenido personalizado para el encabezado de la tabla. El parámetro del scope es { column, $index }")])])], -1);

function tablevue_type_template_id_7704bc48_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_element_demo8 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo8");

  const _component_element_demo9 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo9");

  const _component_element_demo10 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo10");

  const _component_element_demo11 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo11");

  const _component_element_demo12 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo12");

  const _component_element_demo13 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo13");

  const _component_element_demo14 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo14");

  const _component_element_demo15 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo15");

  const _component_element_demo16 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo16");

  const _component_element_demo17 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo17");

  const _component_element_demo18 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo18");

  const _component_element_demo19 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo19");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tablevue_type_template_id_7704bc48_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tablas",
    content: "Tablas",
    href: "#tablas",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tablevue_type_template_id_7704bc48_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tablas"
    })]),
    _: 1
  }), tablevue_type_template_id_7704bc48_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabla-basica",
    content: "Tabla básica",
    href: "#tabla-basica",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tablevue_type_template_id_7704bc48_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabla-basica"
    })]),
    _: 1
  }), tablevue_type_template_id_7704bc48_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabla-con-franjas",
    content: "Tabla con franjas",
    href: "#tabla-con-franjas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabla-con-franjas"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabla-con-bordes",
    content: "Tabla con bordes",
    href: "#tabla-con-bordes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabla-con-bordes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabla-con-estados",
    content: "Tabla con estados",
    href: "#tabla-con-estados",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabla-con-estados"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabla-con-cabecera-fija",
    content: "Tabla con cabecera fija",
    href: "#tabla-con-cabecera-fija",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabla-con-cabecera-fija"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabla-con-columnas-fijas",
    content: "Tabla con columnas fijas",
    href: "#tabla-con-columnas-fijas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabla-con-columnas-fijas"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tabla-con-columnas-y-cabecera-fija",
    content: "Tabla con columnas y cabecera fija.",
    href: "#tabla-con-columnas-y-cabecera-fija",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tabla-con-columnas-y-cabecera-fija"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "altura-fluido-de-tabla-con-cabecera-fija-y-columnas",
    content: "Altura fluido de tabla con cabecera fija (y columnas)",
    href: "#altura-fluido-de-tabla-con-cabecera-fija-y-columnas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#altura-fluido-de-tabla-con-cabecera-fija-y-columnas"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "agrupando-cabeceras-de-la-tabla",
    content: "Agrupando cabeceras de la tabla",
    href: "#agrupando-cabeceras-de-la-tabla",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#agrupando-cabeceras-de-la-tabla"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "seleccion-unica",
    content: "Selección única",
    href: "#seleccion-unica",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#seleccion-unica"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "seleccion-multiple",
    content: "Selección multiple",
    href: "#seleccion-multiple",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#seleccion-multiple"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo10)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ordenamiento",
    content: "Ordenamiento",
    href: "#ordenamiento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ordenamiento"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo11)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "filtros",
    content: "Filtros",
    href: "#filtros",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#filtros"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo12)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "plantilla-de-columna-personalizada",
    content: "Plantilla de columna personalizada",
    href: "#plantilla-de-columna-personalizada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#plantilla-de-columna-personalizada"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo13)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_60]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://v3.vuejs.org/guide/component-slots.html"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_58]),
      _: 1
    }), _hoisted_59])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-con-cabecera-personalizada",
    content: "Table con cabecera personalizada",
    href: "#table-con-cabecera-personalizada",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-con-cabecera-personalizada"
    })]),
    _: 1
  }), _hoisted_62, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo14)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_66]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_63, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://v3.vuejs.org/guide/component-slots.html"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_64]),
      _: 1
    }), _hoisted_65])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fila-expandible",
    content: "Fila expandible",
    href: "#fila-expandible",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_67, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fila-expandible"
    })]),
    _: 1
  }), _hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo15)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_70]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_69]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "datos-tree-y-modo-lazy",
    content: "Datos tree y modo lazy",
    href: "#datos-tree-y-modo-lazy",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_71, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#datos-tree-y-modo-lazy"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo16)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_73]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_72]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fila-de-resumen",
    content: "Fila de resumen",
    href: "#fila-de-resumen",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_74, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fila-de-resumen"
    })]),
    _: 1
  }), _hoisted_75, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo17)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_77]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_76]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fusion-de-filas-y-columnas",
    content: "Fusión de filas y columnas",
    href: "#fusion-de-filas-y-columnas",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_78, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fusion-de-filas-y-columnas"
    })]),
    _: 1
  }), _hoisted_79, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo18)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_81]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_80]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "indice-personalizado",
    content: "Índice personalizado",
    href: "#indice-personalizado",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_82, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#indice-personalizado"
    })]),
    _: 1
  }), _hoisted_83, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo19)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_85]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_84]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-de-la-tabla",
    content: "Atributos de la tabla",
    href: "#atributos-de-la-tabla",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_86, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-de-la-tabla"
    })]),
    _: 1
  }), _hoisted_87, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "eventos-de-la-tabla",
    content: "Eventos de la tabla",
    href: "#eventos-de-la-tabla",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_88, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#eventos-de-la-tabla"
    })]),
    _: 1
  }), _hoisted_89, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "metodos-de-la-tabla",
    content: "Métodos de la tabla",
    href: "#metodos-de-la-tabla",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_90, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#metodos-de-la-tabla"
    })]),
    _: 1
  }), _hoisted_91, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slots-de-la-tabla",
    content: "Slots de la tabla",
    href: "#slots-de-la-tabla",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_92, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots-de-la-tabla"
    })]),
    _: 1
  }), _hoisted_93, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "atributos-para-las-columnas-de-la-tabla",
    content: "Atributos para las columnas de la tabla",
    href: "#atributos-para-las-columnas-de-la-tabla",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_94, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#atributos-para-las-columnas-de-la-tabla"
    })]),
    _: 1
  }), _hoisted_95, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-column-slot",
    content: "Table-column Slot",
    href: "#table-column-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_96, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-column-slot"
    })]),
    _: 1
  }), _hoisted_97, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/table.md?vue&type=template&id=7704bc48

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/es/table.md?vue&type=script&lang=ts

/* harmony default export */ var tablevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          stripe: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          border: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          "row-class-name": _ctx.tableRowClassName
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data", "row-class-name"])]);
      }

      const democomponentExport = {
        methods: {
          tableRowClassName({
            row,
            rowIndex
          }) {
            if (rowIndex === 1) {
              return 'warning-row';
            } else if (rowIndex === 3) {
              return 'success-row';
            }

            return '';
          }

        },

        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          height: "250",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Detalle");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Editar");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Código postal",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            fixed: "right",
            label: "Operaciones",
            width: "120"
          }, {
            default: _withCtx(scope => [_createVNode(_component_el_button, {
              onClick: _ctx.handleClick,
              type: "text",
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "text",
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        methods: {
          handleClick() {
            console.log('click');
          }

        },

        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          height: "250"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
            width: "320"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Dirección",
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Código postal",
            width: "120"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        withModifiers: _withModifiers,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Eliminar ");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          "max-height": "250"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Código postal",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            fixed: "right",
            label: "Operaciones",
            width: "120"
          }, {
            default: _withCtx(scope => [_createVNode(_component_el_button, {
              onClick: _withModifiers($event => _ctx.deleteRow(scope.$index, _ctx.tableData), ["prevent"]),
              type: "text",
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 2
            }, 1032, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        methods: {
          deleteRow(index, rows) {
            rows.splice(index, 1);
          }

        },

        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo8": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "Fecha",
            width: "150"
          }), _createVNode(_component_el_table_column, {
            label: "Información de entrega"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
              prop: "name",
              label: "Nombre",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              label: "Información de dirección"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_table_column, {
                prop: "state",
                label: "Estado",
                width: "120"
              }), _createVNode(_component_el_table_column, {
                prop: "city",
                label: "Ciudad",
                width: "120"
              }), _createVNode(_component_el_table_column, {
                prop: "address",
                label: "Dirección"
              }), _createVNode(_component_el_table_column, {
                prop: "zip",
                label: "Código postal",
                width: "120"
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Seleccionar segunda fila");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Limpiar selección");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          ref: "singleTable",
          data: _ctx.tableData,
          "highlight-current-row": "",
          onCurrentChange: _ctx.handleCurrentChange,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data", "onCurrentChange"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.setCurrent(_ctx.tableData[1]))
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = $event => _ctx.setCurrent())
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        })])]);
      }

      const democomponentExport = {
        data() {
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
          setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
          },

          handleCurrentChange(val) {
            this.currentRow = val;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo10": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Cambia el estado de selección de la segunda y tercera fila.");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Limpiar selección");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          ref: "multipleTable",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          },
          onSelectionChange: _ctx.handleSelectionChange
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            type: "selection",
            width: "55"
          }), _createVNode(_component_el_table_column, {
            label: "Fecha",
            width: "120"
          }, {
            default: _withCtx(scope => [_createTextVNode(_toDisplayString(scope.row.date), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            property: "name",
            label: "Nombre",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            property: "address",
            label: "Dirección",
            "show-overflow-tooltip": ""
          })]),
          _: 1
        }, 8, ["data", "onSelectionChange"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = $event => _ctx.toggleSelection([_ctx.tableData[1], _ctx.tableData[2]]))
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = $event => _ctx.toggleSelection())
        }, {
          default: _withCtx(() => [_hoisted_3]),
          _: 1
        })])]);
      }

      const democomponentExport = {
        data() {
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
          toggleSelection(rows) {
            if (rows) {
              rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
          },

          handleSelectionChange(val) {
            this.multipleSelection = val;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo11": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          "default-sort": {
            prop: 'date',
            order: 'descending'
          },
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          }, null, 8, ["formatter"])]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
          formatter(row, column) {
            return row.address;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo12": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        toDisplayString: _toDisplayString,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("清除日期过滤器");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("清除所有过滤器");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _ctx.resetDateFilter
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.clearFilter
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_table, {
          "row-key": "date",
          ref: "filterTable",
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
            default: _withCtx(scope => [_createVNode(_component_el_tag, {
              type: scope.row.tag === 'Home' ? 'primary' : 'success',
              "disable-transitions": ""
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(scope.row.tag), 1)]),
              _: 2
            }, 1032, ["type"])]),
            _: 1
          }, 8, ["filter-method"])]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
          resetDateFilter() {
            this.$refs.filterTable.clearFilter('date');
          },

          clearFilter() {
            this.$refs.filterTable.clearFilter();
          },

          formatter(row, column) {
            return row.address;
          },

          filterTag(value, row) {
            return row.tag === value;
          },

          filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo13": function () {
      const {
        createElementVNode: _createElementVNode,
        toDisplayString: _toDisplayString,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-time"
      }, null, -1);

      const _hoisted_2 = {
        style: {
          "margin-left": "10px"
        }
      };
      const _hoisted_3 = {
        class: "name-wrapper"
      };

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Editar");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Eliminar");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_tag = _resolveComponent("el-tag");

        const _component_el_popover = _resolveComponent("el-popover");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            label: "Fecha",
            width: "180"
          }, {
            default: _withCtx(scope => [_hoisted_1, _createElementVNode("span", _hoisted_2, _toDisplayString(scope.row.date), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            label: "Nombre",
            width: "180"
          }, {
            default: _withCtx(scope => [_createVNode(_component_el_popover, {
              effect: "light",
              trigger: "hover",
              placement: "top"
            }, {
              default: _withCtx(() => [_createElementVNode("p", null, "姓名: " + _toDisplayString(scope.row.name), 1), _createElementVNode("p", null, "住址: " + _toDisplayString(scope.row.address), 1)]),
              reference: _withCtx(() => [_createElementVNode("div", _hoisted_3, [_createVNode(_component_el_tag, {
                size: "medium"
              }, {
                default: _withCtx(() => [_createTextVNode(_toDisplayString(scope.row.name), 1)]),
                _: 2
              }, 1024)])]),
              _: 2
            }, 1024)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            label: "Operaciones"
          }, {
            default: _withCtx(scope => [_createVNode(_component_el_button, {
              size: "mini",
              onClick: $event => _ctx.handleEdit(scope.$index, scope.row)
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 2
            }, 1032, ["onClick"]), _createVNode(_component_el_button, {
              size: "mini",
              type: "danger",
              onClick: $event => _ctx.handleDelete(scope.$index, scope.row)
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 2
            }, 1032, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
          handleEdit(index, row) {
            console.log(index, row);
          },

          handleDelete(index, row) {
            console.log(index, row);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo14": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Edit");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Delete");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData.filter(data => !_ctx.search || data.name.toLowerCase().includes(_ctx.search.toLowerCase())),
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            label: "Date",
            prop: "date"
          }), _createVNode(_component_el_table_column, {
            label: "Name",
            prop: "name"
          }), _createVNode(_component_el_table_column, {
            align: "right"
          }, {
            header: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.search,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.search = $event),
              size: "mini",
              placeholder: "Type to search"
            }, null, 8, ["modelValue"])]),
            default: _withCtx(scope => [_createVNode(_component_el_button, {
              size: "mini",
              onClick: $event => _ctx.handleEdit(scope.$index, scope.row)
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 2
            }, 1032, ["onClick"]), _createVNode(_component_el_button, {
              size: "mini",
              type: "danger",
              onClick: $event => _ctx.handleDelete(scope.$index, scope.row)
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 2
            }, 1032, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
          handleEdit(index, row) {
            console.log(index, row);
          },

          handleDelete(index, row) {
            console.log(index, row);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo15": function () {
      const {
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            type: "expand"
          }, {
            default: _withCtx(props => [_createElementVNode("p", null, "Estado: " + _toDisplayString(props.row.state), 1), _createElementVNode("p", null, "Ciudad: " + _toDisplayString(props.row.city), 1), _createElementVNode("p", null, "Dirección: " + _toDisplayString(props.row.address), 1), _createElementVNode("p", null, "Código postal: " + _toDisplayString(props.row.zip), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            label: "Fecha",
            prop: "date"
          }), _createVNode(_component_el_table_column, {
            label: "Nombre",
            prop: "name"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo16": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%",
            "margin-bottom": "20px"
          },
          "row-key": "id",
          border: "",
          "default-expand-all": ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "日期",
            sortable: "",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "name",
            sortable: "",
            width: "180"
          })]),
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
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "name",
            width: "180"
          })]),
          _: 1
        }, 8, ["data", "load"])])]);
      }

      const democomponentExport = {
        data() {
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
          load(tree, treeNode, resolve) {
            setTimeout(() => {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo17": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          border: "",
          "show-summary": "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
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
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data", "summary-method"])]);
      }

      const democomponentExport = {
        data() {
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
          getSummaries(param) {
            const {
              columns,
              data
            } = param;
            const sums = [];
            columns.forEach((column, index) => {
              if (index === 0) {
                sums[index] = 'Costo total';
                return;
              }

              const values = data.map(item => Number(item[column.property]));

              if (!values.every(value => isNaN(value))) {
                sums[index] = '$ ' + values.reduce((prev, curr) => {
                  const value = Number(curr);

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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo18": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          "span-method": _ctx.arraySpanMethod,
          border: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
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
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data", "span-method"])])]);
      }

      const democomponentExport = {
        data() {
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
          arraySpanMethod({
            row,
            column,
            rowIndex,
            columnIndex
          }) {
            if (rowIndex % 2 === 0) {
              if (columnIndex === 0) {
                return [1, 2];
              } else if (columnIndex === 1) {
                return [0, 0];
              }
            }
          },

          objectSpanMethod({
            row,
            column,
            rowIndex,
            columnIndex
          }) {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo19": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
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
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
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
          indexMethod(index) {
            return index * 2;
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
// CONCATENATED MODULE: ./website/docs/es/table.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/table.md



tablevue_type_script_lang_ts.render = tablevue_type_template_id_7704bc48_render

/* harmony default export */ var table = __webpack_exports__["default"] = (tablevue_type_script_lang_ts);

/***/ })

}]);