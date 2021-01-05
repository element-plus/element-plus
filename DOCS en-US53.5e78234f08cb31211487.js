(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/table.md?vue&type=template&id=069c6160

var tablevue_type_template_id_069c6160_hoisted_1 = {
  class: "content element-doc"
};

var tablevue_type_template_id_069c6160_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "table"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table")], -1);

var tablevue_type_template_id_069c6160_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Display multiple data with similar format. You can sort, filter, compare your data in a table.", -1);

var tablevue_type_template_id_069c6160_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-table"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-table"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic table")], -1);

var tablevue_type_template_id_069c6160_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Basic table is just for data display.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("After setting attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" with an object array, you can use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "prop"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" (corresponding to a key of the object in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" array) in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to insert data to table columns, and set the attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to define the column name. You can also use the attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to define the width of columns.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "  <template>\n    <el-table\n      :data=\"tableData\"\n      style=\"width: 100%\">\n      <el-table-column\n        prop=\"date\"\n        label=\"Date\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"name\"\n        label=\"Name\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"address\"\n        label=\"Address\">\n      </el-table-column>\n    </el-table>\n  </template>\n\n  <script>\n    export default {\n      data() {\n        return {\n          tableData: [{\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }, {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }, {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }, {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles'\n          }]\n        }\n      }\n    }\n  </script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "striped-table"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#striped-table"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Striped Table")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Striped table makes it easier to distinguish different rows.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "stripe"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" accepts a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". If "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", table will be striped.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    stripe\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "table-with-border"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table-with-border"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table with border")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("By default, Table has no vertical border. If you need it, you can set attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    border\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "table-with-status"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table-with-status"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table with status")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can highlight your table content to distinguish between \"success, information, warning, danger\" and other states.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row-class-name"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to add custom classes to a certain row. Then you can style it with custom classes.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    :row-class-name=\"tableRowClassName\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .el-table .warning-row {\n    background: oldlace;\n  }\n\n  .el-table .success-row {\n    background: #f0f9eb;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      tableRowClassName({row, rowIndex}) {\n        if (rowIndex === 1) {\n          return 'warning-row';\n        } else if (rowIndex === 3) {\n          return 'success-row';\n        }\n        return '';\n      }\n    },\n    data() {\n      return {\n        tableData:  [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "table-with-fixed-header"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table-with-fixed-header"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table with fixed header")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When there are too many rows, you can use a fixed header.", -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("By setting the attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", you can fix the table header without any other codes.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    height=\"250\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }],\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "table-with-fixed-column"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table-with-fixed-column"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table with fixed column")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When there are too many columns, you can fix some of them.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fixed"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is used in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", it accepts a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". If "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", the column will be fixed at left. It also accepts two string literals: 'left' and 'right', both indicating that the column will be fixed at corresponding direction.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      fixed\n      prop=\"date\"\n      label=\"Date\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"state\"\n      label=\"State\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"city\"\n      label=\"City\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\"\n      width=\"300\">\n    </el-table-column>\n    <el-table-column\n      prop=\"zip\"\n      label=\"Zip\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      fixed=\"right\"\n      label=\"Operations\"\n      width=\"120\">\n      <template #default=\"scope\">\n        <el-button @click=\"handleClick\" type=\"text\" size=\"small\">Detail</el-button>\n        <el-button type=\"text\" size=\"small\">Edit</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        console.log('click');\n      }\n    },\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "table-with-fixed-columns-and-header"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table-with-fixed-columns-and-header"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table with fixed columns and header")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When you have huge chunks of data to put in a table, you can fix the header and columns at the same time.", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Fix columns and header at the same time by combining the above two examples.")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    height=\"250\">\n    <el-table-column\n      fixed\n      prop=\"date\"\n      label=\"Date\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"state\"\n      label=\"State\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"city\"\n      label=\"City\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\"\n      width=\"300\">\n    </el-table-column>\n    <el-table-column\n      prop=\"zip\"\n      label=\"Zip\"\n      width=\"120\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fluid-height-table-with-fixed-header-and-columns"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fluid-height-table-with-fixed-header-and-columns"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Fluid-height Table with fixed header (and columns)")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When the the data is dynamically changed, you might want the table to have a maximum height rather than a fixed height and to show the scroll bar if needed.", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("By setting the attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", you can fix the table header. The table body scrolls only if the height of the rows exceeds the max height value.")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    max-height=\"250\">\n    <el-table-column\n      fixed\n      prop=\"date\"\n      label=\"Date\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"state\"\n      label=\"State\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"city\"\n      label=\"City\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\"\n      width=\"300\">\n    </el-table-column>\n    <el-table-column\n      prop=\"zip\"\n      label=\"Zip\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      fixed=\"right\"\n      label=\"Operations\"\n      width=\"120\">\n      <template #default=\"scope\">\n        <el-button\n          @click.native.prevent=\"deleteRow(scope.$index, tableData)\"\n          type=\"text\"\n          size=\"small\">\n          Remove\n        </el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      deleteRow(index, rows) {\n        rows.splice(index, 1);\n      }\n    },\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "grouping-table-head"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#grouping-table-head"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Grouping table head")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When the data structure is complex, you can use group header to show the data hierarchy.", -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Only need to place el-table-column inside a el-table-column, you can achieve group header.")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"150\">\n    </el-table-column>\n    <el-table-column label=\"Delivery Info\">\n      <el-table-column\n        prop=\"name\"\n        label=\"Name\"\n        width=\"120\">\n      </el-table-column>\n      <el-table-column label=\"Address Info\">\n        <el-table-column\n          prop=\"state\"\n          label=\"State\"\n          width=\"120\">\n        </el-table-column>\n        <el-table-column\n          prop=\"city\"\n          label=\"City\"\n          width=\"120\">\n        </el-table-column>\n        <el-table-column\n          prop=\"address\"\n          label=\"Address\"\n          width=\"300\">\n        </el-table-column>\n        <el-table-column\n          prop=\"zip\"\n          label=\"Zip\"\n          width=\"120\">\n        </el-table-column>\n      </el-table-column>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "single-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#single-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Single select")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Single row selection is supported.", -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Table supports single row selection. You can activate it by adding the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "highlight-current-row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute. An event called "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will be triggered when row selection changes, and its parameters are the rows after and before this change: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "currentRow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "oldCurrentRow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". If you need to display row index, you can add a new "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" with its "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute assigned to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and you will see the index starting from 1.")])], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"singleTable\"\n    :data=\"tableData\"\n    highlight-current-row\n    @current-change=\"handleCurrentChange\"\n    style=\"width: 100%\">\n    <el-table-column\n      type=\"index\"\n      width=\"50\">\n    </el-table-column>\n    <el-table-column\n      property=\"date\"\n      label=\"Date\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      property=\"name\"\n      label=\"Name\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      property=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"setCurrent(tableData[1])\">Select second row</el-button>\n    <el-button @click=\"setCurrent()\">Clear selection</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }],\n        currentRow: null\n      }\n    },\n\n    methods: {\n      setCurrent(row) {\n        this.$refs.singleTable.setCurrentRow(row);\n      },\n      handleCurrentChange(val) {\n        this.currentRow = val;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "multiple-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#multiple-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Multiple select")], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can also select multiple rows.", -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Activating multiple selection is easy: simply add an "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" with its "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" set to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "selection"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Apart from multiple selection, this example also uses "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(": by default, if the content is too long, it will break into multiple lines. If you want to keep it in one line, use attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", which accepts a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" value. When set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", the extra content will show in tooltip when hover on the cell.")])], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"multipleTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    @selection-change=\"handleSelectionChange\">\n    <el-table-column\n      type=\"selection\"\n      width=\"55\">\n    </el-table-column>\n    <el-table-column\n      label=\"Date\"\n      width=\"120\">\n      <template #default=\"scope\">{{ scope.row.date }}</template>\n    </el-table-column>\n    <el-table-column\n      property=\"name\"\n      label=\"Name\"\n      width=\"120\">\n    </el-table-column>\n    <el-table-column\n      property=\"address\"\n      label=\"Address\"\n      show-overflow-tooltip>\n    </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"toggleSelection([tableData[1], tableData[2]])\">Toggle selection status of second and third rows</el-button>\n    <el-button @click=\"toggleSelection()\">Clear selection</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }],\n        multipleSelection: []\n      }\n    },\n\n    methods: {\n      toggleSelection(rows) {\n        if (rows) {\n          rows.forEach(row => {\n            this.$refs.multipleTable.toggleRowSelection(row);\n          });\n        } else {\n          this.$refs.multipleTable.clearSelection();\n        }\n      },\n      handleSelectionChange(val) {\n        this.multipleSelection = val;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "sorting"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sorting"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Sorting")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Sort the data to find or compare data quickly.", -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in a certain column to sort the data based on this column. It accepts "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" with a default value "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Set table attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-sort"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to determine default sort column and order. To apply your own sorting rules, use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sort-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" or "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sort-by"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". If you need remote sorting from backend, set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "custom"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and listen to the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sort-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" event on Table. In the event handler, you have access to the sorting column and sorting order so that you can fetch sorted table data from API. In this example we use another attribute named "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "formatter"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to format the value of certain columns. It accepts a function which has two parameters: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". You can handle it according to your own needs.")])], -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    :default-sort = \"{prop: 'date', order: 'descending'}\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      sortable\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\"\n      :formatter=\"formatter\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    },\n    methods: {\n      formatter(row, column) {\n        return row.address;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filter"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filter"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filter")], -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Filter the table to find desired data.", -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" makes this column filterable. "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is an array, and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is a function deciding which rows are displayed. It has three parameters: "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button @click=\"resetDateFilter\">reset date filter</el-button>\n  <el-button @click=\"clearFilter\">reset all filters</el-button>\n  <el-table\n    row-key=\"date\"\n    ref=\"filterTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      sortable\n      width=\"180\"\n      column-key=\"date\"\n      :filters=\"[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]\"\n      :filter-method=\"filterHandler\"\n    >\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\"\n      :formatter=\"formatter\">\n    </el-table-column>\n    <el-table-column\n      prop=\"tag\"\n      label=\"Tag\"\n      width=\"100\"\n      :filters=\"[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]\"\n      :filter-method=\"filterTag\"\n      filter-placement=\"bottom-end\">\n      <template #default=\"scope\">\n        <el-tag\n          :type=\"scope.row.tag === 'Home' ? 'primary' : 'success'\"\n          disable-transitions>{{scope.row.tag}}</el-tag>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Home'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Office'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Home'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles',\n          tag: 'Office'\n        }]\n      }\n    },\n    methods: {\n      resetDateFilter() {\n        this.$refs.filterTable.clearFilter('date');\n      },\n      clearFilter() {\n        this.$refs.filterTable.clearFilter();\n      },\n      formatter(row, column) {\n        return row.address;\n      },\n      filterTag(value, row) {\n        return row.tag === value;\n      },\n      filterHandler(value, row, column) {\n        const property = column['property'];\n        return row[property] === value;\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-column-template"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-column-template"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom column template")], -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Customize table column so it can be integrated with other components.", -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You have access to the following data: row, column, $index and store (state management of Table) by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://vuejs.org/v2/guide/components.html#Scoped-Slots"
}, "Scoped slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      label=\"Date\"\n      width=\"180\">\n      <template #default=\"scope\">\n        <i class=\"el-icon-time\"></i>\n        <span style=\"margin-left: 10px\">{{ scope.row.date }}</span>\n      </template>\n    </el-table-column>\n    <el-table-column\n      label=\"Name\"\n      width=\"180\">\n      <template #default=\"scope\">\n        <el-popover effect=\"light\" trigger=\"hover\" placement=\"top\">\n          <template #default>\n            <p>姓名: {{ scope.row.name }}</p>\n            <p>住址: {{ scope.row.address }}</p>\n          </template>\n          <template #reference>\n            <div class=\"name-wrapper\">\n              <el-tag size=\"medium\">{{ scope.row.name }}</el-tag>\n            </div>\n          </template>\n        </el-popover>\n      </template>\n    </el-table-column>\n    <el-table-column\n      label=\"Operations\">\n      <template #default=\"scope\">\n        <el-button\n          size=\"mini\"\n          @click=\"handleEdit(scope.$index, scope.row)\">Edit</el-button>\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\">Delete</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }]\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row);\n      },\n      handleDelete(index, row) {\n        console.log(index, row);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "table-with-custom-header"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#table-with-custom-header"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Table with custom header")], -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Customize table header so it can be even more customized.", -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can customize how the header looks by header "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots"
}, "scoped slots"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))\"\n    style=\"width: 100%\">\n    <el-table-column\n      label=\"Date\"\n      prop=\"date\">\n    </el-table-column>\n    <el-table-column\n      label=\"Name\"\n      prop=\"name\">\n    </el-table-column>\n    <el-table-column\n      align=\"right\">\n      <template #header #default=\"scope\">\n        <el-input\n          v-model=\"search\"\n          size=\"mini\"\n          placeholder=\"Type to search\"/>\n      </template>\n      <template #default=\"scope\">\n        <el-button\n          size=\"mini\"\n          @click=\"handleEdit(scope.$index, scope.row)\">Edit</el-button>\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\">Delete</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-02',\n          name: 'John',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-04',\n          name: 'Morgan',\n          address: 'No. 189, Grove St, Los Angeles'\n        }, {\n          date: '2016-05-01',\n          name: 'Jessy',\n          address: 'No. 189, Grove St, Los Angeles'\n        }],\n        search: '',\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row);\n      },\n      handleDelete(index, row) {\n        console.log(index, row);\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "expandable-row"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#expandable-row"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Expandable row")], -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When the row content is too long and you do not want to display the horizontal scroll bar, you can use the expandable row feature.", -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Activate expandable row by adding type=\"expand\" and scoped slot. The template for el-table-column will be rendered as the contents of the expanded row, and you can access the same attributes as when you are using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Scoped slot"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in custom column templates.")])], -1);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column type=\"expand\">\n      <template #default=\"props\">\n        <p>State: {{ props.row.state }}</p>\n        <p>City: {{ props.row.city }}</p>\n        <p>Address: {{ props.row.address }}</p>\n        <p>Zip: {{ props.row.zip }}</p>\n      </template>\n    </el-table-column>\n    <el-table-column\n      label=\"Date\"\n      prop=\"date\">\n    </el-table-column>\n    <el-table-column\n      label=\"Name\"\n      prop=\"name\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-08',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-06',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }, {\n          date: '2016-05-07',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036'\n        }]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tree-data-and-lazy-mode"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tree-data-and-lazy-mode"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Tree data and lazy mode")], -1);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can display tree structure data. When row contains the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" field, it is treated as nested data. For rendering nested data, the prop "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is required。Also, child row data can be loaded asynchronously. Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" property of Table to true and the function "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "load"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Specify "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute in row to determine which row contains children. Both "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" can be configured via "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "tree-props"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n<div>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%;margin-bottom: 20px;\"\n    row-key=\"id\"\n    border\n    default-expand-all>\n    <el-table-column\n      prop=\"date\"\n      label=\"date\"\n      sortable\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      sortable\n      width=\"180\">\n    </el-table-column>\n  </el-table>\n\n  <el-table\n    :data=\"tableData1\"\n    style=\"width: 100%\"\n    row-key=\"id\"\n    border\n    lazy\n    :load=\"load\"\n    :tree-props=\"{children: 'children', hasChildren: 'hasChildren'}\">\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n  </el-table>\n</div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          id: 1,\n          date: '2016-05-02',\n          name: 'wangxiaohu'\n        }, {\n          id: 2,\n          date: '2016-05-04',\n          name: 'wangxiaohu'\n        }, {\n          id: 3,\n          date: '2016-05-01',\n          name: 'wangxiaohu',\n          children: [{\n              id: 31,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n            }, {\n              id: 32,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n          }]\n        }, {\n          id: 4,\n          date: '2016-05-03',\n          name: 'wangxiaohu'\n        }],\n        tableData1: [{\n          id: 1,\n          date: '2016-05-02',\n          name: 'wangxiaohu'\n        }, {\n          id: 2,\n          date: '2016-05-04',\n          name: 'wangxiaohu'\n        }, {\n          id: 3,\n          date: '2016-05-01',\n          name: 'wangxiaohu',\n          hasChildren: true\n        }, {\n          id: 4,\n          date: '2016-05-03',\n          name: 'wangxiaohu'\n        }]\n      }\n    },\n    methods: {\n      load(tree, treeNode, resolve) {\n        setTimeout(() => {\n          resolve([\n            {\n              id: 31,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n            }, {\n              id: 32,\n              date: '2016-05-01',\n              name: 'wangxiaohu'\n            }\n          ])\n        }, 1000)\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "summary-row"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#summary-row"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Summary row")], -1);

var _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "For table of numbers, you can add an extra row at the table footer displaying each column's sum.", -1);

var _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can add the summary row by setting "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-summary"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". By default, for the summary row, the first column does not sum anything up but always displays 'Sum' (you can configure the displayed text using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "sum-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("), while other columns sum every number in that column up and display them. You can of course define your own sum behaviour. To do so, pass a method to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "summary-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", which returns an array, and each element of the returned array will be displayed in the columns of the summary row. The second table of this example is a detailed demo.")])], -1);

var _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    border\n    show-summary\n    style=\"width: 100%\">\n    <el-table-column\n      prop=\"id\"\n      label=\"ID\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount1\"\n      sortable\n      label=\"Amount 1\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount2\"\n      sortable\n      label=\"Amount 2\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount3\"\n      sortable\n      label=\"Amount 3\">\n    </el-table-column>\n  </el-table>\n\n  <el-table\n    :data=\"tableData\"\n    border\n    height=\"200\"\n    :summary-method=\"getSummaries\"\n    show-summary\n    style=\"width: 100%; margin-top: 20px\">\n    <el-table-column\n      prop=\"id\"\n      label=\"ID\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount1\"\n      label=\"Cost 1 ($)\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount2\"\n      label=\"Cost 2 ($)\">\n    </el-table-column>\n    <el-table-column\n      prop=\"amount3\"\n      label=\"Cost 3 ($)\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          id: '12987122',\n          name: 'Tom',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        }, {\n          id: '12987123',\n          name: 'Tom',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        }, {\n          id: '12987124',\n          name: 'Tom',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        }, {\n          id: '12987125',\n          name: 'Tom',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        }, {\n          id: '12987126',\n          name: 'Tom',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }]\n      };\n    },\n    methods: {\n      getSummaries(param) {\n        const { columns, data } = param;\n        const sums = [];\n        columns.forEach((column, index) => {\n          if (index === 0) {\n            sums[index] = 'Total Cost';\n            return;\n          }\n          const values = data.map(item => Number(item[column.property]));\n          if (!values.every(value => isNaN(value))) {\n            sums[index] = '$ ' + values.reduce((prev, curr) => {\n              const value = Number(curr);\n              if (!isNaN(value)) {\n                return prev + curr;\n              } else {\n                return prev;\n              }\n            }, 0);\n          } else {\n            sums[index] = 'N/A';\n          }\n        });\n\n        return sums;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "rowspan-and-colspan"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rowspan-and-colspan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Rowspan and colspan")], -1);

var _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Configuring rowspan and colspan allows you to merge cells", -1);

var _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "span-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to configure rowspan and colspan. It accepts a method, and passes an object to that method including current row "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", current column "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", current row index "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rowIndex"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and current column index "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "columnIndex"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". The method should return an array of two numbers, the first number being "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and second "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". It can also return an object with "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" props.")])], -1);

var _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"arraySpanMethod\"\n      border\n      style=\"width: 100%\">\n      <el-table-column\n        prop=\"id\"\n        label=\"ID\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"name\"\n        label=\"Name\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount1\"\n        sortable\n        label=\"Amount 1\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount2\"\n        sortable\n        label=\"Amount 2\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount3\"\n        sortable\n        label=\"Amount 3\">\n      </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"objectSpanMethod\"\n      border\n      style=\"width: 100%; margin-top: 20px\">\n      <el-table-column\n        prop=\"id\"\n        label=\"ID\"\n        width=\"180\">\n      </el-table-column>\n      <el-table-column\n        prop=\"name\"\n        label=\"Name\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount1\"\n        label=\"Amount 1\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount2\"\n        label=\"Amount 2\">\n      </el-table-column>\n      <el-table-column\n        prop=\"amount3\"\n        label=\"Amount 3\">\n      </el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          id: '12987122',\n          name: 'Tom',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        }, {\n          id: '12987123',\n          name: 'Tom',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        }, {\n          id: '12987124',\n          name: 'Tom',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        }, {\n          id: '12987125',\n          name: 'Tom',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        }, {\n          id: '12987126',\n          name: 'Tom',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }]\n      };\n    },\n    methods: {\n      arraySpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (rowIndex % 2 === 0) {\n          if (columnIndex === 0) {\n            return [1, 2];\n          } else if (columnIndex === 1) {\n            return [0, 0];\n          }\n        }\n      },\n\n      objectSpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (columnIndex === 0) {\n          if (rowIndex % 2 === 0) {\n            return {\n              rowspan: 2,\n              colspan: 1\n            };\n          } else {\n            return {\n              rowspan: 0,\n              colspan: 0\n            };\n          }\n        }\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-index"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-index"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom index")], -1);

var _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can customize row index in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" columns.")], -1);

var _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("To customize row indices, use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute on "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" with "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". If it is assigned to a number, all indices will have an offset of that number. It also accepts a method with each index (starting from "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(") as parameter, and the returned value will be displayed as index.")])], -1);

var _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\">\n    <el-table-column\n      type=\"index\"\n      :index=\"indexMethod\">\n    </el-table-column>\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"name\"\n      label=\"Name\"\n      width=\"180\">\n    </el-table-column>\n    <el-table-column\n      prop=\"address\"\n      label=\"Address\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: '2016-05-03',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-02',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }, {\n          date: '2016-05-04',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Home'\n        }, {\n          date: '2016-05-01',\n          name: 'Tom',\n          state: 'California',\n          city: 'Los Angeles',\n          address: 'No. 189, Grove St, Los Angeles',\n          zip: 'CA 90036',\n          tag: 'Office'\n        }],\n      }\n    },\n    methods: {\n      indexMethod(index) {\n        return index * 2;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"table-attributes\"><a class=\"header-anchor\" href=\"#table-attributes\">¶</a> Table Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>Table data</td><td>array</td><td>—</td><td>—</td></tr><tr><td>height</td><td>Table&#39;s height. By default it has an <code>auto</code> height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element&#39;s style.height, the height is affected by external styles</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>Table&#39;s max-height. The legal value is a number or the height in px.</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>stripe</td><td>whether Table is striped</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>whether Table has vertical border</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of Table</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>fit</td><td>whether width of column automatically fits its container</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-header</td><td>whether Table header is visible</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>highlight-current-row</td><td>whether current row is highlighted</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>current-row-key</td><td>key of current row, a set only prop</td><td>string,number</td><td>—</td><td>—</td></tr><tr><td>row-class-name</td><td>function that returns custom class names for a row, or a string assigning class names for every row</td><td>Function({row, rowIndex})/String</td><td>—</td><td>—</td></tr><tr><td>row-style</td><td>function that returns custom style for a row, or an object assigning custom style for every row</td><td>Function({row, rowIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>cell-class-name</td><td>function that returns custom class names for a cell, or a string assigning class names for every cell</td><td>Function({row, column, rowIndex, columnIndex})/String</td><td>—</td><td>—</td></tr><tr><td>cell-style</td><td>function that returns custom style for a cell, or an object assigning custom style for every cell</td><td>Function({row, column, rowIndex, columnIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>header-row-class-name</td><td>function that returns custom class names for a row in table header, or a string assigning class names for every row in table header</td><td>Function({row, rowIndex})/String</td><td>—</td><td>—</td></tr><tr><td>header-row-style</td><td>function that returns custom style for a row in table header, or an object assigning custom style for every row in table header</td><td>Function({row, rowIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>header-cell-class-name</td><td>function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header</td><td>Function({row, column, rowIndex, columnIndex})/String</td><td>—</td><td>—</td></tr><tr><td>header-cell-style</td><td>function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header</td><td>Function({row, column, rowIndex, columnIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>row-key</td><td>key of row data, used for optimizing rendering. Required if <code>reserve-selection</code> is on or display tree data. When its type is String, multi-level access is supported, e.g. <code>user.info.id</code>, but <code>user.info[0].id</code> is not supported, in which case <code>Function</code> should be used.</td><td>Function(row)/String</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>Displayed text when data is empty. You can customize this area with <code>#empty</code></td><td>String</td><td>—</td><td>No Data</td></tr><tr><td>default-expand-all</td><td>whether expand all rows by default, works when the table has a column type=&quot;expand&quot; or contains tree structure data</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>expand-row-keys</td><td>set expanded rows by this prop, prop&#39;s value is the keys of expand rows, you should set row-key before using this prop</td><td>Array</td><td>—</td><td></td></tr><tr><td>default-sort</td><td>set the default sort column and order. property <code>prop</code> is used to set default sort column, property <code>order</code> is used to set default sort order</td><td>Object</td><td><code>order</code>: ascending, descending</td><td>if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td></tr><tr><td>tooltip-effect</td><td>tooltip <code>effect</code> property</td><td>String</td><td>dark/light</td><td></td></tr><tr><td>show-summary</td><td>whether to display a summary row</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>sum-text</td><td>displayed text for the first column of summary row</td><td>String</td><td>—</td><td>Sum</td></tr><tr><td>summary-method</td><td>custom summary method</td><td>Function({ columns, data })</td><td>—</td><td>—</td></tr><tr><td>span-method</td><td>method that returns rowspan and colspan</td><td>Function({ row, column, rowIndex, columnIndex })</td><td>—</td><td>—</td></tr><tr><td>select-on-indeterminate</td><td>controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected.</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>indent</td><td>horizontal indentation of tree data</td><td>Number</td><td>—</td><td>16</td></tr><tr><td>lazy</td><td>whether to lazy loading data</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>load</td><td>method for loading child row data, only works when <code>lazy</code> is true</td><td>Function(row, treeNode, resolve)</td><td>—</td><td>—</td></tr><tr><td>tree-props</td><td>configuration for rendering nested data</td><td>Object</td><td>—</td><td>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</td></tr></tbody></table><h3 id=\"table-events\"><a class=\"header-anchor\" href=\"#table-events\">¶</a> Table Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>triggers when user clicks the checkbox in a row</td><td>selection, row</td></tr><tr><td>select-all</td><td>triggers when user clicks the checkbox in table header</td><td>selection</td></tr><tr><td>selection-change</td><td>triggers when selection changes</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>triggers when hovering into a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>triggers when hovering out of a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>triggers when clicking a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>triggers when double clicking a cell</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>triggers when clicking a row</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>triggers when user right clicks on a row</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>triggers when double clicking a row</td><td>row, column, event</td></tr><tr><td>header-click</td><td>triggers when clicking a column header</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>triggers when user right clicks on a column header</td><td>column, event</td></tr><tr><td>sort-change</td><td>triggers when Table&#39;s sorting changes</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>column&#39;s key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered</td><td>filters</td></tr><tr><td>current-change</td><td>triggers when current row changes</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>triggers after changing a column&#39;s width by dragging the column header&#39;s border</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)</td><td>row, (expandedRows | expanded)</td></tr></tbody></table><h3 id=\"table-methods\"><a class=\"header-anchor\" href=\"#table-methods\">¶</a> Table Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearSelection</td><td>used in multiple selection Table, clear user selection</td><td>—</td></tr><tr><td>toggleRowSelection</td><td>used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>used in multiple selection Table, toggle the selected state of all rows</td><td>-</td></tr><tr><td>toggleRowExpansion</td><td>used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection.</td><td>row</td></tr><tr><td>clearSort</td><td>clear sorting, restore data to the original order</td><td>—</td></tr><tr><td>clearFilter</td><td>clear filters of the columns whose <code>columnKey</code> are passed in. If no params, clear all filters</td><td>columnKeys</td></tr><tr><td>doLayout</td><td>refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout</td><td>—</td></tr><tr><td>sort</td><td>sort Table manually. Property <code>prop</code> is used to set sort column, property <code>order</code> is used to set sort order</td><td>prop: string, order: string</td></tr></tbody></table><h3 id=\"table-slot\"><a class=\"header-anchor\" href=\"#table-slot\">¶</a> Table Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>append</td><td>Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.</td></tr></tbody></table><h3 id=\"table-column-attributes\"><a class=\"header-anchor\" href=\"#table-column-attributes\">¶</a> Table-column Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>type of the column. If set to <code>selection</code>, the column will display checkbox. If set to <code>index</code>, the column will display index of the row (staring from 1). If set to <code>expand</code>, the column will display expand icon.</td><td>string</td><td>selection/index/expand</td><td>—</td></tr><tr><td>index</td><td>customize indices for each row, works on columns with <code>type=index</code></td><td>number, Function(index)</td><td>-</td><td>-</td></tr><tr><td>label</td><td>column label</td><td>string</td><td>—</td><td>—</td></tr><tr><td>column-key</td><td>column&#39;s key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered</td><td>string</td><td>string</td><td>—</td></tr><tr><td>prop</td><td>field name. You can also use its alias: <code>property</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>column width</td><td>string</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>column minimum width. Columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion</td><td>string</td><td>—</td><td>—</td></tr><tr><td>fixed</td><td>whether column is fixed at left/right. Will be fixed at left if <code>true</code></td><td>string/boolean</td><td>true/left/right</td><td>—</td></tr><tr><td>render-header</td><td>render function for table header of this column</td><td>Function(h, { column, $index })</td><td>—</td><td>—</td></tr><tr><td>sortable</td><td>whether column can be sorted. Remote sorting can be done by setting this attribute to &#39;custom&#39; and listening to the <code>sort-change</code> event of Table</td><td>boolean, string</td><td>true, false, custom</td><td>false</td></tr><tr><td>sort-method</td><td>sorting method, works when <code>sortable</code> is <code>true</code>. Should return a number, just like Array.sort</td><td>Function(a, b)</td><td>—</td><td>—</td></tr><tr><td>sort-by</td><td>specify which property to sort by, works when <code>sortable</code> is <code>true</code> and <code>sort-method</code> is <code>undefined</code>. If set to an Array, the column will sequentially sort by the next property if the previous one is equal</td><td>Function(row, index)/String/Array</td><td>—</td><td>—</td></tr><tr><td>sort-orders</td><td>the order of the sorting strategies used when sorting the data, works when <code>sortable</code> is <code>true</code>. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array</td><td>array</td><td>the elements in the array need to be one of the following: <code>ascending</code>, <code>descending</code> and <code>null</code> (restores to the original order)</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>whether column width can be resized, works when <code>border</code> of <code>el-table</code> is <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>formatter</td><td>function that formats cell content</td><td>Function(row, column, cellValue, index)</td><td>—</td><td>—</td></tr><tr><td>show-overflow-tooltip</td><td>whether to hide extra content and show them in a tooltip when hovering on the cell</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>alignment</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>header-align</td><td>alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied</td><td>String</td><td>left/center/right</td><td>—</td></tr><tr><td>class-name</td><td>class name of cells in the column</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>class name of the label of this column</td><td>string</td><td>—</td><td>—</td></tr><tr><td>selectable</td><td>function that determines if a certain row can be selected, works when <code>type</code> is &#39;selection&#39;</td><td>Function(row, index)</td><td>—</td><td>—</td></tr><tr><td>reserve-selection</td><td>whether to reserve selection after data refreshing, works when <code>type</code> is &#39;selection&#39;. Note that <code>row-key</code> is required for this to work</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filters</td><td>an array of data filtering options. For each element in this array, <code>text</code> and <code>value</code> are required</td><td>Array[{ text, value }]</td><td>—</td><td>—</td></tr><tr><td>filter-placement</td><td>placement for the filter dropdown</td><td>String</td><td>same as Tooltip&#39;s <code>placement</code></td><td>—</td></tr><tr><td>filter-multiple</td><td>whether data filtering supports multiple options</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>filter-method</td><td>data filtering method. If <code>filter-multiple</code> is on, this method will be called multiple times for each row, and a row will display if one of the calls returns <code>true</code></td><td>Function(value, row, column)</td><td>—</td><td>—</td></tr><tr><td>filtered-value</td><td>filter value for selected data, might be useful when table header is rendered with <code>render-header</code></td><td>Array</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"table-column-scoped-slot\"><a class=\"header-anchor\" href=\"#table-column-scoped-slot\">¶</a> Table-column Scoped Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Custom content for table columns. The scope parameter is { row, column, $index }</td></tr><tr><td>header</td><td>Custom content for table header. The scope parameter is { column, $index }</td></tr></tbody></table>", 12);

function tablevue_type_template_id_069c6160_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", tablevue_type_template_id_069c6160_hoisted_1, [tablevue_type_template_id_069c6160_hoisted_2, tablevue_type_template_id_069c6160_hoisted_3, tablevue_type_template_id_069c6160_hoisted_4, tablevue_type_template_id_069c6160_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/table.md?vue&type=template&id=069c6160

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/table.md?vue&type=script&lang=ts


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
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
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
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
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
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
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
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
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
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Detail");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Edit");

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
              label: "Date",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "state",
              label: "State",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "city",
              label: "City",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address",
              width: "300"
            }), _createVNode(_component_el_table_column, {
              prop: "zip",
              label: "Zip",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              fixed: "right",
              label: "Operations",
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
              label: "Date",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "state",
              label: "State",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "city",
              label: "City",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address",
              width: "300"
            }), _createVNode(_component_el_table_column, {
              prop: "zip",
              label: "Zip",
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Remove ");

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
              label: "Date",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "state",
              label: "State",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "city",
              label: "City",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address",
              width: "300"
            }), _createVNode(_component_el_table_column, {
              prop: "zip",
              label: "Zip",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              fixed: "right",
              label: "Operations",
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
              label: "Date",
              width: "150"
            }), _createVNode(_component_el_table_column, {
              label: "Delivery Info"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "Name",
                  width: "120"
                }), _createVNode(_component_el_table_column, {
                  label: "Address Info"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_table_column, {
                      prop: "state",
                      label: "State",
                      width: "120"
                    }), _createVNode(_component_el_table_column, {
                      prop: "city",
                      label: "City",
                      width: "120"
                    }), _createVNode(_component_el_table_column, {
                      prop: "address",
                      label: "Address",
                      width: "300"
                    }), _createVNode(_component_el_table_column, {
                      prop: "zip",
                      label: "Zip",
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

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Select second row");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Clear selection");

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
              label: "Date",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              property: "name",
              label: "Name",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              property: "address",
              label: "Address"
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

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Toggle selection status of second and third rows");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Clear selection");

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
              label: "Date",
              width: "120"
            }, {
              default: _withCtx(function (scope) {
                return [_createTextVNode(_toDisplayString(scope.row.date), 1)];
              }),
              _: 1
            }), _createVNode(_component_el_table_column, {
              property: "name",
              label: "Name",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              property: "address",
              label: "Address",
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
              label: "Date",
              sortable: "",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address",
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("reset date filter");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("reset all filters");

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
              label: "Date",
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
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address",
              formatter: _ctx.formatter
            }, null, 8, ["formatter"]), _createVNode(_component_el_table_column, {
              prop: "tag",
              label: "Tag",
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

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Edit");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Delete");

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
              label: "Date",
              width: "180"
            }, {
              default: _withCtx(function (scope) {
                return [_hoisted_1, _createVNode("span", _hoisted_2, _toDisplayString(scope.row.date), 1)];
              }),
              _: 1
            }), _createVNode(_component_el_table_column, {
              label: "Name",
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
              label: "Operations"
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
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-02',
              name: 'John',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-04',
              name: 'Morgan',
              address: 'No. 189, Grove St, Los Angeles'
            }, {
              date: '2016-05-01',
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
                return [_createVNode("p", null, "State: " + _toDisplayString(props.row.state), 1), _createVNode("p", null, "City: " + _toDisplayString(props.row.city), 1), _createVNode("p", null, "Address: " + _toDisplayString(props.row.address), 1), _createVNode("p", null, "Zip: " + _toDisplayString(props.row.zip), 1)];
              }),
              _: 1
            }), _createVNode(_component_el_table_column, {
              label: "Date",
              prop: "date"
            }), _createVNode(_component_el_table_column, {
              label: "Name",
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
              label: "date",
              sortable: "",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
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
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
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
              label: "Name"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              sortable: "",
              label: "Amount 1"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              sortable: "",
              label: "Amount 2"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              sortable: "",
              label: "Amount 3"
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
              label: "Name"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              label: "Cost 1 ($)"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              label: "Cost 2 ($)"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              label: "Cost 3 ($)"
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
                sums[index] = 'Total Cost';
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
              label: "Name"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              sortable: "",
              label: "Amount 1"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              sortable: "",
              label: "Amount 2"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              sortable: "",
              label: "Amount 3"
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
              label: "Name"
            }), _createVNode(_component_el_table_column, {
              prop: "amount1",
              label: "Amount 1"
            }), _createVNode(_component_el_table_column, {
              prop: "amount2",
              label: "Amount 2"
            }), _createVNode(_component_el_table_column, {
              prop: "amount3",
              label: "Amount 3"
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
              label: "Date",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "180"
            }), _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
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
// CONCATENATED MODULE: ./website/docs/en-US/table.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/table.md



tablevue_type_script_lang_ts.render = tablevue_type_template_id_069c6160_render

/* harmony default export */ var table = __webpack_exports__["default"] = (tablevue_type_script_lang_ts);

/***/ })

}]);