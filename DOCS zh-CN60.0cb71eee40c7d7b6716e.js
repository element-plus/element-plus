(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[346],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/table.md?vue&type=template&id=21a34359

const tablevue_type_template_id_21a34359_hoisted_1 = {
  class: "content element-doc"
};

const tablevue_type_template_id_21a34359_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table 表格 ");

const tablevue_type_template_id_21a34359_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。", -1);

const tablevue_type_template_id_21a34359_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础表格 ");

const tablevue_type_template_id_21a34359_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "基础的表格展示用法。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("当 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 元素中注入 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 对象数组后，在 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 中用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来对应对象中的键名即可填入数据，用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来定义表格的列名。可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来定义列宽。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带斑马纹表格 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "使用带斑马纹的表格，可以更容易区分出不同行的数据。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "stripe"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性可以创建带斑马纹的表格。它接受一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，默认为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，设置为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 即为启用。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" stripe style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带边框表格 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性，它接受一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，设置为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 即可启用。")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" border style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带状态表格 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以通过指定 Table 组件的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row-class-name"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    :row-class-name=\"tableRowClassName\"\n  >\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .el-table .warning-row {\n    --el-table-tr-background-color: var(--el-color-warning-lighter);\n  }\n  .el-table .success-row {\n    --el-table-tr-background-color: var(--el-color-success-lighter);\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      tableRowClassName({ row, rowIndex }) {\n        if (rowIndex === 1) {\n          return 'warning-row'\n        } else if (rowIndex === 3) {\n          return 'success-row'\n        }\n        return ''\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("固定表头 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "纵向内容过多时，可选择固定表头。", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("只要在 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 元素中定义了 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性，即可实现固定表头的表格，而不需要额外的代码。")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" height=\"250\" border style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-08',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-06',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-07',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("固定列 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "横向内容过多时，可选择固定列。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("固定列需要使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fixed"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性，它接受 Boolean 值或者 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，表示左边固定还是右边固定。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" border style=\"width: 100%\">\n    <el-table-column fixed prop=\"date\" label=\"日期\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"province\" label=\"省份\" width=\"120\">\n    </el-table-column>\n    <el-table-column prop=\"city\" label=\"市区\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\" width=\"600\"> </el-table-column>\n    <el-table-column prop=\"zip\" label=\"邮编\" width=\"120\"> </el-table-column>\n    <el-table-column fixed=\"right\" label=\"操作\" width=\"100\">\n      <template #default=\"scope\">\n        <el-button @click=\"handleClick(scope.row)\" type=\"text\" size=\"small\"\n          >查看</el-button\n        >\n        <el-button type=\"text\" size=\"small\">编辑</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleClick(row) {\n        console.log(row)\n      },\n    },\n\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1517 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1519 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1516 弄',\n            zip: 200333,\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("固定列和表头 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "横纵内容过多时，可选择固定列和表头。", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\" height=\"250\">\n    <el-table-column fixed prop=\"date\" label=\"日期\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"province\" label=\"省份\" width=\"120\">\n    </el-table-column>\n    <el-table-column prop=\"city\" label=\"市区\" width=\"320\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\" width=\"600\"> </el-table-column>\n    <el-table-column prop=\"zip\" label=\"邮编\" width=\"120\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-08',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-06',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-07',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("流体高度 ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当数据量动态变化时，可以为 Table 设置一个最大高度。", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。")])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\" max-height=\"250\">\n    <el-table-column fixed prop=\"date\" label=\"日期\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"province\" label=\"省份\" width=\"120\">\n    </el-table-column>\n    <el-table-column prop=\"city\" label=\"市区\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\" width=\"600\"> </el-table-column>\n    <el-table-column prop=\"zip\" label=\"邮编\" width=\"120\"> </el-table-column>\n    <el-table-column fixed=\"right\" label=\"操作\" width=\"120\">\n      <template #default=\"scope\">\n        <el-button\n          @click.prevent=\"deleteRow(scope.$index, tableData)\"\n          type=\"text\"\n          size=\"small\"\n        >\n          移除\n        </el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      deleteRow(index, rows) {\n        rows.splice(index, 1)\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-08',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-06',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-07',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("多级表头 ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("只需要在 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 里面嵌套 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，就可以实现多级表头。")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"日期\" width=\"150\"> </el-table-column>\n    <el-table-column label=\"配送信息\">\n      <el-table-column prop=\"name\" label=\"姓名\" width=\"120\"> </el-table-column>\n      <el-table-column label=\"地址\">\n        <el-table-column prop=\"province\" label=\"省份\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"city\" label=\"市区\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n        <el-table-column prop=\"zip\" label=\"邮编\" width=\"120\"> </el-table-column>\n      </el-table-column>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-08',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-06',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n          {\n            date: '2016-05-07',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("单选 ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "选择单行数据时使用色块表示。", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table 组件提供了单选的支持，只需要配置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "highlight-current-row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性即可实现单选。之后由 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 事件来管理选中时触发的事件，它会传入 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "currentRow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "oldCurrentRow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。如果需要显示索引，可以增加一列 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 即可显示从 1 开始的索引号。")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"singleTable\"\n    :data=\"tableData\"\n    highlight-current-row\n    @current-change=\"handleCurrentChange\"\n    style=\"width: 100%\"\n  >\n    <el-table-column type=\"index\" width=\"50\"> </el-table-column>\n    <el-table-column property=\"date\" label=\"日期\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"name\" label=\"姓名\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"setCurrent(tableData[1])\">选中第二行</el-button>\n    <el-button @click=\"setCurrent()\">取消选择</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n        currentRow: null,\n      }\n    },\n\n    methods: {\n      setCurrent(row) {\n        this.$refs.singleTable.setCurrentRow(row)\n      },\n      handleCurrentChange(val) {\n        this.currentRow = val\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("多选 ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "选择多行数据时使用 Checkbox。", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("实现多选非常简单: 手动添加一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，设 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "selection"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性，它接受一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 时多余的内容会在 hover 时以 tooltip 的形式显示出来。")])], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"multipleTable\"\n    :data=\"tableData\"\n    tooltip-effect=\"dark\"\n    style=\"width: 100%\"\n    @selection-change=\"handleSelectionChange\"\n  >\n    <el-table-column type=\"selection\" width=\"55\"> </el-table-column>\n    <el-table-column label=\"日期\" width=\"120\">\n      <template #default=\"scope\">{{ scope.row.date }}</template>\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\" show-overflow-tooltip>\n    </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"toggleSelection([tableData[1], tableData[2]])\"\n      >切换第二、第三行的选中状态</el-button\n    >\n    <el-button @click=\"toggleSelection()\">取消选择</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-08',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-06',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-07',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n        ],\n        multipleSelection: [],\n      }\n    },\n\n    methods: {\n      toggleSelection(rows) {\n        if (rows) {\n          rows.forEach((row) => {\n            this.$refs.multipleTable.toggleRowSelection(row)\n          })\n        } else {\n          this.$refs.multipleTable.clearSelection()\n        }\n      },\n      handleSelectionChange(val) {\n        this.multipleSelection = val\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("排序 ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "对表格进行排序，可快速查找或对比数据。", -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在列中设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性即可实现以该列为基准的排序，接受一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，默认为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。可以通过 Table 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-sort"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性设置默认的排序列和排序顺序。可以使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 或者 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-by"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 使用自定义的排序规则。如果需要后端排序，需将 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 设置为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "custom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，同时在 Table 上监听 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "formatter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性，它用于格式化指定列的值，接受一个 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，会传入两个参数："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，可以根据自己的需求进行处理。")])], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    :default-sort=\"{prop: 'date', order: 'descending'}\"\n  >\n    <el-table-column prop=\"date\" label=\"日期\" sortable width=\"180\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" sortable width=\"180\">\n    </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\" :formatter=\"formatter\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n      }\n    },\n    methods: {\n      formatter(row, column) {\n        return row.address\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("筛选 ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "对表格进行筛选，可快速查找到自己想看的数据。", -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在列中设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性即可开启该列的筛选，filters 是一个数组，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 是一个方法，它用于决定某些数据是否显示，会传入三个参数："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button @click=\"resetDateFilter\">清除日期过滤器</el-button>\n  <el-button @click=\"clearFilter\">清除所有过滤器</el-button>\n  <el-table\n    row-key=\"date\"\n    ref=\"filterTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column\n      prop=\"date\"\n      label=\"日期\"\n      sortable\n      width=\"180\"\n      column-key=\"date\"\n      :filters=\"[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]\"\n      :filter-method=\"filterHandler\"\n    >\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\" :formatter=\"formatter\">\n    </el-table-column>\n    <el-table-column\n      prop=\"tag\"\n      label=\"标签\"\n      width=\"100\"\n      :filters=\"[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]\"\n      :filter-method=\"filterTag\"\n      filter-placement=\"bottom-end\"\n    >\n      <template #default=\"scope\">\n        <el-tag\n          :type=\"scope.row.tag === '家' ? 'primary' : 'success'\"\n          disable-transitions\n          >{{scope.row.tag}}</el-tag\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n            tag: '家',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n            tag: '公司',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n            tag: '家',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n            tag: '公司',\n          },\n        ],\n      }\n    },\n    methods: {\n      resetDateFilter() {\n        this.$refs.filterTable.clearFilter('date')\n      },\n      clearFilter() {\n        this.$refs.filterTable.clearFilter()\n      },\n      formatter(row, column) {\n        return row.address\n      },\n      filterTag(value, row) {\n        return row.tag === value\n      },\n      filterHandler(value, row, column) {\n        const property = column['property']\n        return row[property] === value\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义列模板 ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "自定义列的显示内容，可组合其他组件使用。", -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。")])], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column label=\"日期\" width=\"180\">\n      <template #default=\"scope\">\n        <i class=\"el-icon-time\"></i>\n        <span style=\"margin-left: 10px\">{{ scope.row.date }}</span>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"姓名\" width=\"180\">\n      <template #default=\"scope\">\n        <el-popover effect=\"light\" trigger=\"hover\" placement=\"top\">\n          <template #default>\n            <p>姓名: {{ scope.row.name }}</p>\n            <p>住址: {{ scope.row.address }}</p>\n          </template>\n          <template #reference>\n            <div class=\"name-wrapper\">\n              <el-tag size=\"medium\">{{ scope.row.name }}</el-tag>\n            </div>\n          </template>\n        </el-popover>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"操作\">\n      <template #default=\"scope\">\n        <el-button size=\"mini\" @click=\"handleEdit(scope.$index, scope.row)\"\n          >编辑</el-button\n        >\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\"\n          >删除</el-button\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row)\n      },\n      handleDelete(index, row) {\n        console.log(index, row)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("展开行 ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。", -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=\"expand\""), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 可以开启展开行功能，"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 相同。")])], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column type=\"expand\">\n      <template #default=\"props\">\n        <el-form label-position=\"left\" inline class=\"demo-table-expand\">\n          <el-form-item label=\"商品名称\">\n            <span>{{ props.row.name }}</span>\n          </el-form-item>\n          <el-form-item label=\"所属店铺\">\n            <span>{{ props.row.shop }}</span>\n          </el-form-item>\n          <el-form-item label=\"商品 ID\">\n            <span>{{ props.row.id }}</span>\n          </el-form-item>\n          <el-form-item label=\"店铺 ID\">\n            <span>{{ props.row.shopId }}</span>\n          </el-form-item>\n          <el-form-item label=\"商品分类\">\n            <span>{{ props.row.category }}</span>\n          </el-form-item>\n          <el-form-item label=\"店铺地址\">\n            <span>{{ props.row.address }}</span>\n          </el-form-item>\n          <el-form-item label=\"商品描述\">\n            <span>{{ props.row.desc }}</span>\n          </el-form-item>\n        </el-form>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"商品 ID\" prop=\"id\"> </el-table-column>\n    <el-table-column label=\"商品名称\" prop=\"name\"> </el-table-column>\n    <el-table-column label=\"描述\" prop=\"desc\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .demo-table-expand {\n    font-size: 0;\n  }\n  .demo-table-expand label {\n    width: 90px;\n    color: #99a9bf;\n  }\n  .demo-table-expand .el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: '12987122',\n            name: '好滋好味鸡蛋仔',\n            category: '江浙小吃、小吃零食',\n            desc: '荷兰优质淡奶，奶香浓而不腻',\n            address: '上海市普陀区真北路',\n            shop: '王小虎夫妻店',\n            shopId: '10333',\n          },\n          {\n            id: '12987123',\n            name: '好滋好味鸡蛋仔',\n            category: '江浙小吃、小吃零食',\n            desc: '荷兰优质淡奶，奶香浓而不腻',\n            address: '上海市普陀区真北路',\n            shop: '王小虎夫妻店',\n            shopId: '10333',\n          },\n          {\n            id: '12987125',\n            name: '好滋好味鸡蛋仔',\n            category: '江浙小吃、小吃零食',\n            desc: '荷兰优质淡奶，奶香浓而不腻',\n            address: '上海市普陀区真北路',\n            shop: '王小虎夫妻店',\n            shopId: '10333',\n          },\n          {\n            id: '12987126',\n            name: '好滋好味鸡蛋仔',\n            category: '江浙小吃、小吃零食',\n            desc: '荷兰优质淡奶，奶香浓而不腻',\n            address: '上海市普陀区真北路',\n            shop: '王小虎夫妻店',\n            shopId: '10333',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("树形数据与懒加载 ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("支持树类型的数据的显示。当 row 中包含 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 字段时，被视为树形数据。渲染树形数据时，必须要指定 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。支持子节点数据异步加载。设置 Table 的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性为 true 与加载函数 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "load"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 。通过指定 row 中的 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 字段来指定哪些行是包含子节点。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 与 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 都可以通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tree-props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 配置。")])], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      style=\"width: 100%;margin-bottom: 20px;\"\n      row-key=\"id\"\n      border\n      default-expand-all\n      :tree-props=\"{children: 'children', hasChildren: 'hasChildren'}\"\n    >\n      <el-table-column prop=\"date\" label=\"日期\" sortable width=\"180\">\n      </el-table-column>\n      <el-table-column prop=\"name\" label=\"姓名\" sortable width=\"180\">\n      </el-table-column>\n      <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData1\"\n      style=\"width: 100%\"\n      row-key=\"id\"\n      border\n      lazy\n      :load=\"load\"\n      :tree-props=\"{children: 'children', hasChildren: 'hasChildren'}\"\n    >\n      <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n    </el-table>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: 1,\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            id: 2,\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            id: 3,\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n            children: [\n              {\n                id: 31,\n                date: '2016-05-01',\n                name: '王小虎',\n                address: '上海市普陀区金沙江路 1519 弄',\n              },\n              {\n                id: 32,\n                date: '2016-05-01',\n                name: '王小虎',\n                address: '上海市普陀区金沙江路 1519 弄',\n              },\n            ],\n          },\n          {\n            id: 4,\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n        tableData1: [\n          {\n            id: 1,\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            id: 2,\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            id: 3,\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n            hasChildren: true,\n          },\n          {\n            id: 4,\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n      }\n    },\n    methods: {\n      load(tree, treeNode, resolve) {\n        setTimeout(() => {\n          resolve([\n            {\n              id: 31,\n              date: '2016-05-01',\n              name: '王小虎',\n              address: '上海市普陀区金沙江路 1519 弄',\n            },\n            {\n              id: 32,\n              date: '2016-05-01',\n              name: '王小虎',\n              address: '上海市普陀区金沙江路 1519 弄',\n            },\n          ])\n        }, 1000)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义表头 ");

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "表头支持自定义。", -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置 ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("slot");

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 来自定义表头。");

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))\"\n    style=\"width: 100%\"\n  >\n    <el-table-column label=\"Date\" prop=\"date\"> </el-table-column>\n    <el-table-column label=\"Name\" prop=\"name\"> </el-table-column>\n    <el-table-column align=\"right\">\n      <template #header>\n        <el-input v-model=\"search\" size=\"mini\" placeholder=\"输入关键字搜索\" />\n      </template>\n      <template #default=\"scope\">\n        <el-button size=\"mini\" @click=\"handleEdit(scope.$index, scope.row)\"\n          >Edit</el-button\n        >\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\"\n          >Delete</el-button\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄',\n          },\n        ],\n        search: '',\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row)\n      },\n      handleDelete(index, row) {\n        console.log(index, row)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("表尾合计行 ");

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "若表格展示的是各类数字，可以在表尾显示各列的合计。", -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("将 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-summary"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 设置为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sum-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "summary-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。")])], -1);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" border show-summary style=\"width: 100%\">\n    <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\"> </el-table-column>\n    <el-table-column prop=\"amount1\" sortable label=\"数值 1\"> </el-table-column>\n    <el-table-column prop=\"amount2\" sortable label=\"数值 2\"> </el-table-column>\n    <el-table-column prop=\"amount3\" sortable label=\"数值 3\"> </el-table-column>\n  </el-table>\n\n  <el-table\n    :data=\"tableData\"\n    border\n    height=\"200\"\n    :summary-method=\"getSummaries\"\n    show-summary\n    style=\"width: 100%; margin-top: 20px\"\n  >\n    <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\"> </el-table-column>\n    <el-table-column prop=\"amount1\" label=\"数值 1（元）\"> </el-table-column>\n    <el-table-column prop=\"amount2\" label=\"数值 2（元）\"> </el-table-column>\n    <el-table-column prop=\"amount3\" label=\"数值 3（元）\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: '12987122',\n            name: '王小虎',\n            amount1: '234',\n            amount2: '3.2',\n            amount3: 10,\n          },\n          {\n            id: '12987123',\n            name: '王小虎',\n            amount1: '165',\n            amount2: '4.43',\n            amount3: 12,\n          },\n          {\n            id: '12987124',\n            name: '王小虎',\n            amount1: '324',\n            amount2: '1.9',\n            amount3: 9,\n          },\n          {\n            id: '12987125',\n            name: '王小虎',\n            amount1: '621',\n            amount2: '2.2',\n            amount3: 17,\n          },\n          {\n            id: '12987126',\n            name: '王小虎',\n            amount1: '539',\n            amount2: '4.1',\n            amount3: 15,\n          },\n        ],\n      }\n    },\n    methods: {\n      getSummaries(param) {\n        const { columns, data } = param\n        const sums = []\n        columns.forEach((column, index) => {\n          if (index === 0) {\n            sums[index] = '总价'\n            return\n          }\n          const values = data.map((item) => Number(item[column.property]))\n          if (!values.every((value) => isNaN(value))) {\n            sums[index] = values.reduce((prev, curr) => {\n              const value = Number(curr)\n              if (!isNaN(value)) {\n                return prev + curr\n              } else {\n                return prev\n              }\n            }, 0)\n            sums[index] += ' 元'\n          } else {\n            sums[index] = 'N/A'\n          }\n        })\n\n        return sums\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("合并行或列 ");

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "多行或多列共用一个数据时，可以合并行或列。", -1);

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过给 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 传入 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "span-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、当前列 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、当前行号 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowIndex"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、当前列号 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "columnIndex"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，第二个元素代表 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。 也可以返回一个键名为 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的对象。")])], -1);

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"arraySpanMethod\"\n      border\n      style=\"width: 100%\"\n    >\n      <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"姓名\"> </el-table-column>\n      <el-table-column prop=\"amount1\" sortable label=\"数值 1\">\n      </el-table-column>\n      <el-table-column prop=\"amount2\" sortable label=\"数值 2\">\n      </el-table-column>\n      <el-table-column prop=\"amount3\" sortable label=\"数值 3\">\n      </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"objectSpanMethod\"\n      border\n      style=\"width: 100%; margin-top: 20px\"\n    >\n      <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"姓名\"> </el-table-column>\n      <el-table-column prop=\"amount1\" label=\"数值 1（元）\"> </el-table-column>\n      <el-table-column prop=\"amount2\" label=\"数值 2（元）\"> </el-table-column>\n      <el-table-column prop=\"amount3\" label=\"数值 3（元）\"> </el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: '12987122',\n            name: '王小虎',\n            amount1: '234',\n            amount2: '3.2',\n            amount3: 10,\n          },\n          {\n            id: '12987123',\n            name: '王小虎',\n            amount1: '165',\n            amount2: '4.43',\n            amount3: 12,\n          },\n          {\n            id: '12987124',\n            name: '王小虎',\n            amount1: '324',\n            amount2: '1.9',\n            amount3: 9,\n          },\n          {\n            id: '12987125',\n            name: '王小虎',\n            amount1: '621',\n            amount2: '2.2',\n            amount3: 17,\n          },\n          {\n            id: '12987126',\n            name: '王小虎',\n            amount1: '539',\n            amount2: '4.1',\n            amount3: 15,\n          },\n        ],\n      }\n    },\n    methods: {\n      arraySpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (rowIndex % 2 === 0) {\n          if (columnIndex === 0) {\n            return [1, 2]\n          } else if (columnIndex === 1) {\n            return [0, 0]\n          }\n        }\n      },\n\n      objectSpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (columnIndex === 0) {\n          if (rowIndex % 2 === 0) {\n            return {\n              rowspan: 2,\n              colspan: 1,\n            }\n          } else {\n            return {\n              rowspan: 0,\n              colspan: 0,\n            }\n          }\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义索引 ");

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 列的行号。")], -1);

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过给 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 的列传入 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 开始）作为参数，返回值将作为索引展示。")])], -1);

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column type=\"index\" :index=\"indexMethod\"> </el-table-column>\n    <el-table-column prop=\"date\" label=\"日期\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"姓名\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"地址\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1518 弄',\n            zip: 200333,\n            tag: '家',\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1517 弄',\n            zip: 200333,\n            tag: '公司',\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1519 弄',\n            zip: 200333,\n            tag: '家',\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            province: '上海',\n            city: '普陀区',\n            address: '上海市普陀区金沙江路 1516 弄',\n            zip: 200333,\n            tag: '公司',\n          },\n        ],\n      }\n    },\n    methods: {\n      indexMethod(index) {\n        return index * 2\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Attributes ");

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>显示的数据</td><td>array</td><td>—</td><td>—</td></tr><tr><td>height</td><td>Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>Table 的最大高度。合法的值为数字或者单位为 px 的高度。</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>stripe</td><td>是否为斑马纹 table</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>是否带有纵向边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>Table 的尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>fit</td><td>列的宽度是否自撑开</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-header</td><td>是否显示表头</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>highlight-current-row</td><td>是否要高亮当前行</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>current-row-key</td><td>当前行的 key，只写属性</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>row-class-name</td><td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。</td><td>function({ row, rowIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>row-style</td><td>行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。</td><td>function({ row, rowIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>cell-class-name</td><td>单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>cell-style</td><td>单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>header-row-class-name</td><td>表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。</td><td>function({ row, rowIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>header-row-style</td><td>表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。</td><td>function({ row, rowIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>header-cell-class-name</td><td>表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>header-cell-style</td><td>表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>row-key</td><td>行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：<code>user.info.id</code>，但不支持 <code>user.info[0].id</code>，此种情况请使用 <code>Function</code>。</td><td>function(row) / string</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>空数据时显示的文本内容，也可以通过 <code>#empty</code> 设置</td><td>string</td><td>—</td><td>暂无数据</td></tr><tr><td>default-expand-all</td><td>是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-row-keys</td><td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。</td><td>array</td><td>—</td><td>—</td></tr><tr><td>default-sort</td><td>默认的排序列的 prop 和顺序。它的 <code>prop</code> 属性指定默认的排序的列，<code>order</code> 指定默认排序的顺序</td><td>object</td><td><code>order</code>: ascending / descending</td><td>如果只指定了 <code>prop</code>, 没有指定 <code>order</code>, 则默认顺序是 ascending</td></tr><tr><td>tooltip-effect</td><td>tooltip <code>effect</code> 属性</td><td>string</td><td>dark / light</td><td>dark</td></tr><tr><td>show-summary</td><td>是否在表尾显示合计行</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>sum-text</td><td>合计行第一列的文本</td><td>string</td><td>—</td><td>合计</td></tr><tr><td>summary-method</td><td>自定义的合计计算方法</td><td>function({ columns, data })</td><td>—</td><td>—</td></tr><tr><td>span-method</td><td>合并行或列的计算方法</td><td>function({ row, column, rowIndex, columnIndex })</td><td>—</td><td>—</td></tr><tr><td>select-on-indeterminate</td><td>在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>indent</td><td>展示树形数据时，树节点的缩进</td><td>number</td><td>—</td><td>16</td></tr><tr><td>lazy</td><td>是否懒加载子节点数据</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>load</td><td>加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息</td><td>function(row, treeNode, resolve)</td><td>—</td><td>—</td></tr><tr><td>tree-props</td><td>渲染嵌套数据的配置选项</td><td>object</td><td>—</td><td>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</td></tr></tbody></table>", 1);

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Events ");

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>select</td><td>当用户手动勾选数据行的 Checkbox 时触发的事件</td><td>selection, row</td></tr><tr><td>select-all</td><td>当用户手动勾选全选 Checkbox 时触发的事件</td><td>selection</td></tr><tr><td>selection-change</td><td>当选择项发生变化时会触发该事件</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>当单元格 hover 进入时会触发该事件</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>当单元格 hover 退出时会触发该事件</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>当某个单元格被点击时会触发该事件</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>当某个单元格被双击击时会触发该事件</td><td>row, column, cell, event</td></tr><tr><td>cell-contextmenu</td><td>当某个单元格被鼠标右键点击时会触发该事件</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>当某一行被点击时会触发该事件</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>当某一行被鼠标右键点击时会触发该事件</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>当某一行被双击时会触发该事件</td><td>row, column, event</td></tr><tr><td>header-click</td><td>当某一列的表头被点击时会触发该事件</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>当某一列的表头被鼠标右键点击时触发该事件</td><td>column, event</td></tr><tr><td>sort-change</td><td>当表格的排序条件发生变化的时候会触发该事件</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。</td><td>filters</td></tr><tr><td>current-change</td><td>当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>当拖动表头改变了列的宽度的时候会触发该事件</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）</td><td>row, (expandedRows | expanded)</td></tr></tbody></table>", 1);

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Methods ");

const _hoisted_89 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>clearSelection</td><td>用于多选表格，清空用户的选择</td><td>—</td></tr><tr><td>toggleRowSelection</td><td>用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>用于多选表格，切换全选和全不选</td><td>—</td></tr><tr><td>toggleRowExpansion</td><td>用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。</td><td>row</td></tr><tr><td>clearSort</td><td>用于清空排序条件，数据会恢复成未排序的状态</td><td>—</td></tr><tr><td>clearFilter</td><td>不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件</td><td>columnKey</td></tr><tr><td>doLayout</td><td>对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法</td><td>—</td></tr><tr><td>sort</td><td>手动对 Table 进行排序。参数 <code>prop</code> 属性指定排序列，<code>order</code> 指定排序顺序。</td><td>prop: string, order: string</td></tr></tbody></table>", 1);

const _hoisted_90 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Slot ");

const _hoisted_91 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "append"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。")])])], -1);

const _hoisted_92 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table-column Attributes ");

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>对应列的类型。如果设置了 <code>selection</code> 则显示多选框；如果设置了 <code>index</code> 则显示该行的索引（从 1 开始计算）；如果设置了 <code>expand</code> 则显示为一个可展开的按钮</td><td>string</td><td>selection / index / expand</td><td>—</td></tr><tr><td>index</td><td>如果设置了 <code>type=index</code>，可以通过传递 <code>index</code> 属性来自定义索引</td><td>number / function(index)</td><td>—</td><td>—</td></tr><tr><td>column-key</td><td>column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>显示的标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prop</td><td>对应列内容的字段名，也可以使用 property 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>对应列的宽度</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>对应列的最小宽度，与 <code>width</code> 的区别是 <code>width</code> 是固定的，<code>min-width</code> 会把剩余宽度按比例分配给设置了 <code>min-width</code> 的列</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>fixed</td><td>列是否固定在左侧或者右侧，true 表示固定在左侧</td><td>string, boolean</td><td>true / &#39;left&#39; / &#39;right&#39;</td><td>—</td></tr><tr><td>render-header</td><td>列标题 Label 区域渲染使用的 Function</td><td>function({ column, $index })</td><td>—</td><td>—</td></tr><tr><td>sortable</td><td>对应列是否可以排序，如果设置为 &#39;custom&#39;，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件</td><td>boolean / string</td><td>true / false / &#39;custom&#39;</td><td>false</td></tr><tr><td>sort-method</td><td>对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致</td><td>function(a, b)</td><td>—</td><td>—</td></tr><tr><td>sort-by</td><td>指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推</td><td>string / array / function(row, index)</td><td>—</td><td>—</td></tr><tr><td>sort-orders</td><td>数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序</td><td>array</td><td>数组中的元素需为以下三者之一：<code>ascending</code> 表示升序，<code>descending</code> 表示降序，<code>null</code> 表示还原为原始顺序</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>formatter</td><td>用来格式化内容</td><td>function(row, column, cellValue, index)</td><td>—</td><td>—</td></tr><tr><td>show-overflow-tooltip</td><td>当内容过长被隐藏时显示 tooltip</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>对齐方式</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>header-align</td><td>表头对齐方式，若不设置该项，则使用表格的对齐方式</td><td>string</td><td>left / center / right</td><td>—</td></tr><tr><td>class-name</td><td>列的 className</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>当前列标题的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>selectable</td><td>仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选</td><td>function(row, index)</td><td>—</td><td>—</td></tr><tr><td>reserve-selection</td><td>仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 <code>row-key</code>）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filters</td><td>数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。</td><td>array[{ text, value }]</td><td>—</td><td>—</td></tr><tr><td>filter-placement</td><td>过滤弹出框的定位</td><td>string</td><td>与 Tooltip 的 <code>placement</code> 属性相同</td><td>—</td></tr><tr><td>filter-multiple</td><td>数据过滤的选项是否多选</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>filter-method</td><td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。</td><td>function(value, row, column)</td><td>—</td><td>—</td></tr><tr><td>filtered-value</td><td>选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。</td><td>array</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table-column Slot ");

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义列的内容，参数为 { row, column, $index }")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "自定义表头的内容. 参数为 { column, $index }")])])], -1);

function tablevue_type_template_id_21a34359_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tablevue_type_template_id_21a34359_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-biao-ge",
    content: "Table 表格",
    href: "#table-biao-ge",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tablevue_type_template_id_21a34359_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-biao-ge"
    })]),
    _: 1
  }), tablevue_type_template_id_21a34359_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-biao-ge",
    content: "基础表格",
    href: "#ji-chu-biao-ge",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tablevue_type_template_id_21a34359_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-biao-ge"
    })]),
    _: 1
  }), tablevue_type_template_id_21a34359_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-ban-ma-wen-biao-ge",
    content: "带斑马纹表格",
    href: "#dai-ban-ma-wen-biao-ge",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-ban-ma-wen-biao-ge"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-bian-kuang-biao-ge",
    content: "带边框表格",
    href: "#dai-bian-kuang-biao-ge",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-bian-kuang-biao-ge"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-zhuang-tai-biao-ge",
    content: "带状态表格",
    href: "#dai-zhuang-tai-biao-ge",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-zhuang-tai-biao-ge"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gu-ding-biao-tou",
    content: "固定表头",
    href: "#gu-ding-biao-tou",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gu-ding-biao-tou"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gu-ding-lie",
    content: "固定列",
    href: "#gu-ding-lie",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gu-ding-lie"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gu-ding-lie-he-biao-tou",
    content: "固定列和表头",
    href: "#gu-ding-lie-he-biao-tou",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gu-ding-lie-he-biao-tou"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "liu-ti-gao-du",
    content: "流体高度",
    href: "#liu-ti-gao-du",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#liu-ti-gao-du"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "duo-ji-biao-tou",
    content: "多级表头",
    href: "#duo-ji-biao-tou",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#duo-ji-biao-tou"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dan-xuan",
    content: "单选",
    href: "#dan-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dan-xuan"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "duo-xuan",
    content: "多选",
    href: "#duo-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#duo-xuan"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo10)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "pai-xu",
    content: "排序",
    href: "#pai-xu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#pai-xu"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo11)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shai-xuan",
    content: "筛选",
    href: "#shai-xuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shai-xuan"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo12)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-lie-mo-ban",
    content: "自定义列模板",
    href: "#zi-ding-yi-lie-mo-ban",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-lie-mo-ban"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo13)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_58]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhan-kai-xing",
    content: "展开行",
    href: "#zhan-kai-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhan-kai-xing"
    })]),
    _: 1
  }), _hoisted_60, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo14)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_62]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing-shu-ju-yu-lan-jia-zai",
    content: "树形数据与懒加载",
    href: "#shu-xing-shu-ju-yu-lan-jia-zai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_63, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing-shu-ju-yu-lan-jia-zai"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo15)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_65]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_64]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-biao-tou",
    content: "自定义表头",
    href: "#zi-ding-yi-biao-tou",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_66, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-biao-tou"
    })]),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo16)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_71]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://v3.vuejs.org/guide/component-slots.html"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_69]),
      _: 1
    }), _hoisted_70])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "biao-wei-he-ji-xing",
    content: "表尾合计行",
    href: "#biao-wei-he-ji-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_72, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#biao-wei-he-ji-xing"
    })]),
    _: 1
  }), _hoisted_73, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo17)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_75]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_74]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "he-bing-xing-huo-lie",
    content: "合并行或列",
    href: "#he-bing-xing-huo-lie",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_76, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#he-bing-xing-huo-lie"
    })]),
    _: 1
  }), _hoisted_77, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo18)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_79]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_78]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-suo-yin",
    content: "自定义索引",
    href: "#zi-ding-yi-suo-yin",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_80, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-suo-yin"
    })]),
    _: 1
  }), _hoisted_81, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo19)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_83]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_82]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-attributes",
    content: "Table Attributes",
    href: "#table-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_84, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-attributes"
    })]),
    _: 1
  }), _hoisted_85, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-events",
    content: "Table Events",
    href: "#table-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_86, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-events"
    })]),
    _: 1
  }), _hoisted_87, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-methods",
    content: "Table Methods",
    href: "#table-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_88, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-methods"
    })]),
    _: 1
  }), _hoisted_89, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-slot",
    content: "Table Slot",
    href: "#table-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_90, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-slot"
    })]),
    _: 1
  }), _hoisted_91, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-column-attributes",
    content: "Table-column Attributes",
    href: "#table-column-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_92, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-column-attributes"
    })]),
    _: 1
  }), _hoisted_93, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-column-slot",
    content: "Table-column Slot",
    href: "#table-column-slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_94, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-column-slot"
    })]),
    _: 1
  }), _hoisted_95, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/table.md?vue&type=template&id=21a34359

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/table.md?vue&type=script&lang=ts

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
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
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
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
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
          border: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("查看");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("编辑");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table = _resolveComponent("el-table");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          data: _ctx.tableData,
          border: "",
          style: {
            "width": "100%"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            fixed: "",
            prop: "date",
            label: "日期",
            width: "150"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "province",
            label: "省份",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "city",
            label: "市区",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址",
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "邮编",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            fixed: "right",
            label: "操作",
            width: "100"
          }, {
            default: _withCtx(scope => [_createVNode(_component_el_button, {
              onClick: $event => _ctx.handleClick(scope.row),
              type: "text",
              size: "small"
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 2
            }, 1032, ["onClick"]), _createVNode(_component_el_button, {
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
          handleClick(row) {
            console.log(row);
          }

        },

        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1517 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1519 弄',
              zip: 200333
            }, {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1516 弄',
              zip: 200333
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
            label: "日期",
            width: "150"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "province",
            label: "省份",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "city",
            label: "市区",
            width: "320"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址",
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "邮编",
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
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-08',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-07',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" 移除 ");

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
            label: "日期",
            width: "150"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "province",
            label: "省份",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "city",
            label: "市区",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址",
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "邮编",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            fixed: "right",
            label: "操作",
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
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-08',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-07',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
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
            label: "日期",
            width: "150"
          }), _createVNode(_component_el_table_column, {
            label: "配送信息"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
              prop: "name",
              label: "姓名",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              label: "地址"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_table_column, {
                prop: "province",
                label: "省份",
                width: "120"
              }), _createVNode(_component_el_table_column, {
                prop: "city",
                label: "市区",
                width: "120"
              }), _createVNode(_component_el_table_column, {
                prop: "address",
                label: "地址"
              }), _createVNode(_component_el_table_column, {
                prop: "zip",
                label: "邮编",
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
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-08',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-07',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("选中第二行");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("取消选择");

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
            label: "日期",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            property: "name",
            label: "姓名",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            property: "address",
            label: "地址"
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
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("切换第二、第三行的选中状态");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("取消选择");

      function render(_ctx, _cache) {
        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_table, {
          ref: "multipleTable",
          data: _ctx.tableData,
          "tooltip-effect": "dark",
          style: {
            "width": "100%"
          },
          onSelectionChange: _ctx.handleSelectionChange
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            type: "selection",
            width: "55"
          }), _createVNode(_component_el_table_column, {
            label: "日期",
            width: "120"
          }, {
            default: _withCtx(scope => [_createTextVNode(_toDisplayString(scope.row.date), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址",
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
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
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
          style: {
            "width": "100%"
          },
          "default-sort": {
            prop: 'date',
            order: 'descending'
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "日期",
            sortable: "",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            sortable: "",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址",
            formatter: _ctx.formatter
          }, null, 8, ["formatter"])]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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
            label: "日期",
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
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址",
            formatter: _ctx.formatter
          }, null, 8, ["formatter"]), _createVNode(_component_el_table_column, {
            prop: "tag",
            label: "标签",
            width: "100",
            filters: [{
              text: '家',
              value: '家'
            }, {
              text: '公司',
              value: '公司'
            }],
            "filter-method": _ctx.filterTag,
            "filter-placement": "bottom-end"
          }, {
            default: _withCtx(scope => [_createVNode(_component_el_tag, {
              type: scope.row.tag === '家' ? 'primary' : 'success',
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
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              tag: '家'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
              tag: '公司'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              tag: '家'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              tag: '公司'
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

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("编辑");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("删除");

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
            label: "日期",
            width: "180"
          }, {
            default: _withCtx(scope => [_hoisted_1, _createElementVNode("span", _hoisted_2, _toDisplayString(scope.row.date), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            label: "姓名",
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
            label: "操作"
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
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_form = _resolveComponent("el-form");

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
            default: _withCtx(props => [_createVNode(_component_el_form, {
              "label-position": "left",
              inline: "",
              class: "demo-table-expand"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_form_item, {
                label: "商品名称"
              }, {
                default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(props.row.name), 1)]),
                _: 2
              }, 1024), _createVNode(_component_el_form_item, {
                label: "所属店铺"
              }, {
                default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(props.row.shop), 1)]),
                _: 2
              }, 1024), _createVNode(_component_el_form_item, {
                label: "商品 ID"
              }, {
                default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(props.row.id), 1)]),
                _: 2
              }, 1024), _createVNode(_component_el_form_item, {
                label: "店铺 ID"
              }, {
                default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(props.row.shopId), 1)]),
                _: 2
              }, 1024), _createVNode(_component_el_form_item, {
                label: "商品分类"
              }, {
                default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(props.row.category), 1)]),
                _: 2
              }, 1024), _createVNode(_component_el_form_item, {
                label: "店铺地址"
              }, {
                default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(props.row.address), 1)]),
                _: 2
              }, 1024), _createVNode(_component_el_form_item, {
                label: "商品描述"
              }, {
                default: _withCtx(() => [_createElementVNode("span", null, _toDisplayString(props.row.desc), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1024)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            label: "商品 ID",
            prop: "id"
          }), _createVNode(_component_el_table_column, {
            label: "商品名称",
            prop: "name"
          }), _createVNode(_component_el_table_column, {
            label: "描述",
            prop: "desc"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              id: '12987122',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }, {
              id: '12987123',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }, {
              id: '12987125',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }, {
              id: '12987126',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo15": function () {
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
          "default-expand-all": "",
          "tree-props": {
            children: 'children',
            hasChildren: 'hasChildren'
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_table_column, {
            prop: "date",
            label: "日期",
            sortable: "",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            sortable: "",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
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
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
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
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id: 2,
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              id: 3,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              children: [{
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }]
            }, {
              id: 4,
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
            tableData1: [{
              id: 1,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id: 2,
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              id: 3,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              hasChildren: true
            }, {
              id: 4,
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          };
        },

        methods: {
          load(tree, treeNode, resolve) {
            setTimeout(() => {
              resolve([{
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
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
    "element-demo16": function () {
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
              placeholder: "输入关键字搜索"
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
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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
            label: "姓名"
          }), _createVNode(_component_el_table_column, {
            prop: "amount1",
            sortable: "",
            label: "数值 1"
          }), _createVNode(_component_el_table_column, {
            prop: "amount2",
            sortable: "",
            label: "数值 2"
          }), _createVNode(_component_el_table_column, {
            prop: "amount3",
            sortable: "",
            label: "数值 3"
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
            label: "姓名"
          }), _createVNode(_component_el_table_column, {
            prop: "amount1",
            label: "数值 1（元）"
          }), _createVNode(_component_el_table_column, {
            prop: "amount2",
            label: "数值 2（元）"
          }), _createVNode(_component_el_table_column, {
            prop: "amount3",
            label: "数值 3（元）"
          })]),
          _: 1
        }, 8, ["data", "summary-method"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              id: '12987122',
              name: '王小虎',
              amount1: '234',
              amount2: '3.2',
              amount3: 10
            }, {
              id: '12987123',
              name: '王小虎',
              amount1: '165',
              amount2: '4.43',
              amount3: 12
            }, {
              id: '12987124',
              name: '王小虎',
              amount1: '324',
              amount2: '1.9',
              amount3: 9
            }, {
              id: '12987125',
              name: '王小虎',
              amount1: '621',
              amount2: '2.2',
              amount3: 17
            }, {
              id: '12987126',
              name: '王小虎',
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
                sums[index] = '总价';
                return;
              }

              const values = data.map(item => Number(item[column.property]));

              if (!values.every(value => isNaN(value))) {
                sums[index] = values.reduce((prev, curr) => {
                  const value = Number(curr);

                  if (!isNaN(value)) {
                    return prev + curr;
                  } else {
                    return prev;
                  }
                }, 0);
                sums[index] += ' 元';
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
            label: "姓名"
          }), _createVNode(_component_el_table_column, {
            prop: "amount1",
            sortable: "",
            label: "数值 1"
          }), _createVNode(_component_el_table_column, {
            prop: "amount2",
            sortable: "",
            label: "数值 2"
          }), _createVNode(_component_el_table_column, {
            prop: "amount3",
            sortable: "",
            label: "数值 3"
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
            label: "姓名"
          }), _createVNode(_component_el_table_column, {
            prop: "amount1",
            label: "数值 1（元）"
          }), _createVNode(_component_el_table_column, {
            prop: "amount2",
            label: "数值 2（元）"
          }), _createVNode(_component_el_table_column, {
            prop: "amount3",
            label: "数值 3（元）"
          })]),
          _: 1
        }, 8, ["data", "span-method"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              id: '12987122',
              name: '王小虎',
              amount1: '234',
              amount2: '3.2',
              amount3: 10
            }, {
              id: '12987123',
              name: '王小虎',
              amount1: '165',
              amount2: '4.43',
              amount3: 12
            }, {
              id: '12987124',
              name: '王小虎',
              amount1: '324',
              amount2: '1.9',
              amount3: 9
            }, {
              id: '12987125',
              name: '王小虎',
              amount1: '621',
              amount2: '2.2',
              amount3: 17
            }, {
              id: '12987126',
              name: '王小虎',
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
            label: "日期",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "姓名",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "地址"
          })]),
          _: 1
        }, 8, ["data"])]);
      }

      const democomponentExport = {
        data() {
          return {
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333,
              tag: '家'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1517 弄',
              zip: 200333,
              tag: '公司'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1519 弄',
              zip: 200333,
              tag: '家'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1516 弄',
              zip: 200333,
              tag: '公司'
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
// CONCATENATED MODULE: ./website/docs/zh-CN/table.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/table.md



tablevue_type_script_lang_ts.render = tablevue_type_template_id_21a34359_render

/* harmony default export */ var table = __webpack_exports__["default"] = (tablevue_type_script_lang_ts);

/***/ })

}]);