(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[274],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/table.md?vue&type=template&id=184126d3

const tablevue_type_template_id_184126d3_hoisted_1 = {
  class: "content element-doc"
};

const tablevue_type_template_id_184126d3_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーブル ");

const tablevue_type_template_id_184126d3_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "複数のデータを同じような形式で表示します。データを並べ替えたり、フィルタリングしたり、テーブルで比較したりすることができます。", -1);

const tablevue_type_template_id_184126d3_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本テーブル ");

const tablevue_type_template_id_184126d3_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "基本テーブルはデータを表示するためだけのものです。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オブジェクトの配列で "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定した後、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" (配列 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に含まれるオブジェクトのキーに対応) を用いてテーブルのカラムにデータを挿入し、属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いてカラム名を定義することができます。また、属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いて列の幅を定義することもできる。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("縞模様のテーブル ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "縞模様のテーブルは、異なる行の区別を容易にします。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "stripe"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を受け入れる。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の場合、テーブルは縞模様になる。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" stripe style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ボーダー付きテーブル ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("デフォルトでは、テーブルには垂直方向の境界線がありません。必要であれば、属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定することができる。")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" border style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステータスのあるテーブル ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "テーブルの内容を\"成功、情報、警告、危険” などの状態に区別して強調できます。", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("特定の行にカスタムクラスを追加するには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row-class-name"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を使います。そうすれば、カスタムクラスを使ってスタイルを設定することができます。")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    :row-class-name=\"tableRowClassName\"\n  >\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  .el-table .warning-row {\n    --el-table-tr-background-color: var(--el-color-warning-lighter);\n  }\n  .el-table .success-row {\n    --el-table-tr-background-color: var(--el-color-success-lighter);\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      tableRowClassName({ row, rowIndex }) {\n        if (rowIndex === 1) {\n          return 'warning-row'\n        } else if (rowIndex === 3) {\n          return 'success-row'\n        }\n        return ''\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ヘッダを固定したテーブル ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "行数が多い場合は固定ヘッダーを使用します。", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定することで、他のコードを使わずにテーブルのヘッダを固定することができる。")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" height=\"250\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("列が固定されているテーブル ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "カラムが多すぎる場合は、いくつかの列を固定することができます。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "fixed"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で用いられる。 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の場合、列は左に固定される。また、'left' と 'right' の 2 つの文字列リテラルを受け取ることができ、どちらも対応する方向に固定されることを示す。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column fixed prop=\"date\" label=\"Date\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"state\" label=\"State\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"city\" label=\"City\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\" width=\"600\">\n    </el-table-column>\n    <el-table-column prop=\"zip\" label=\"Zip\" width=\"120\"> </el-table-column>\n    <el-table-column fixed=\"right\" label=\"Operations\" width=\"120\">\n      <template #default=\"scope\">\n        <el-button @click=\"handleClick\" type=\"text\" size=\"small\"\n          >Detail</el-button\n        >\n        <el-button type=\"text\" size=\"small\">Edit</el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        console.log('click')\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("固定列とヘッダーを持つテーブル ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "テーブルに入れるデータ量が膨大な場合は、ヘッダーとカラムを同時に固定することができます。", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "上記 2 つの例を組み合わせて、カラムとヘッダーを同時に固定します。")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\" height=\"250\">\n    <el-table-column fixed prop=\"date\" label=\"Date\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"state\" label=\"State\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"city\" label=\"City\" width=\"320\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\" width=\"600\">\n    </el-table-column>\n    <el-table-column prop=\"zip\" label=\"Zip\" width=\"120\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("固定ヘッダー（および列）を持つ流動的な高さのテーブル ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "データが動的に変更された場合、テーブルの高さを固定ではなく最大にして、必要に応じてスクロールバーを表示したい場合があります。", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("の属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定することで、テーブルのヘッダを固定することができる。テーブル本体は行の高さが最大の高さを超えた場合のみスクロールする。")])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\" max-height=\"250\">\n    <el-table-column fixed prop=\"date\" label=\"Date\" width=\"150\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"state\" label=\"State\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"city\" label=\"City\" width=\"120\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\" width=\"600\">\n    </el-table-column>\n    <el-table-column prop=\"zip\" label=\"Zip\" width=\"120\"> </el-table-column>\n    <el-table-column fixed=\"right\" label=\"Operations\" width=\"120\">\n      <template #default=\"scope\">\n        <el-button\n          @click.prevent=\"deleteRow(scope.$index, tableData)\"\n          type=\"text\"\n          size=\"small\"\n        >\n          Remove\n        </el-button>\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    methods: {\n      deleteRow(index, rows) {\n        rows.splice(index, 1)\n      },\n    },\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("グルーピングテーブルヘッド ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "データ構造が複雑な場合は、グループヘッダーを使用してデータ階層を表示することができます。", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "el-table-column の中に el-table-column を配置するだけで、グループヘッダーを実現することができます。")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column prop=\"date\" label=\"Date\" width=\"150\"> </el-table-column>\n    <el-table-column label=\"Delivery Info\">\n      <el-table-column prop=\"name\" label=\"Name\" width=\"120\"> </el-table-column>\n      <el-table-column label=\"Address Info\">\n        <el-table-column prop=\"state\" label=\"State\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"city\" label=\"City\" width=\"120\">\n        </el-table-column>\n        <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n        <el-table-column prop=\"zip\" label=\"Zip\" width=\"120\"> </el-table-column>\n      </el-table-column>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("シングル選択 ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "1 行選択に対応しています。", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーブルは 1 行選択をサポートしています。これを有効にするには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "highlight-current-row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を追加します。行の選択が変更されると "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" というイベントがトリガされ、そのパラメータは変更後の行と変更前の行である "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "currentRow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "oldCurrentRow"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" である。行のインデックスを表示したい場合は、新しい "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を追加して "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に代入すると、1 から始まるインデックスが表示されます。")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"singleTable\"\n    :data=\"tableData\"\n    highlight-current-row\n    @current-change=\"handleCurrentChange\"\n    style=\"width: 100%\"\n  >\n    <el-table-column type=\"index\" width=\"50\"> </el-table-column>\n    <el-table-column property=\"date\" label=\"Date\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"name\" label=\"Name\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"setCurrent(tableData[1])\">Select second row</el-button>\n    <el-button @click=\"setCurrent()\">Clear selection</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n        currentRow: null,\n      }\n    },\n\n    methods: {\n      setCurrent(row) {\n        this.$refs.singleTable.setCurrentRow(row)\n      },\n      handleCurrentChange(val) {\n        this.currentRow = val\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("複数選択 ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "複数の行を選択することもできます。", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("複数選択を有効にするのは簡単です: "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "selection"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定して追加するだけです。複数選択とは別に、この例では "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を利用しています: デフォルトでは、内容が長すぎると複数行に分割されます。1 行にまとめたい場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-overflow-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を利用します。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定すると、セル上にカーソルを置いたときに追加内容がツールチップに表示されます。")])], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    ref=\"multipleTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n    @selection-change=\"handleSelectionChange\"\n  >\n    <el-table-column type=\"selection\" width=\"55\"> </el-table-column>\n    <el-table-column label=\"Date\" width=\"120\">\n      <template #default=\"scope\">{{ scope.row.date }}</template>\n    </el-table-column>\n    <el-table-column property=\"name\" label=\"Name\" width=\"120\">\n    </el-table-column>\n    <el-table-column property=\"address\" label=\"Address\" show-overflow-tooltip>\n    </el-table-column>\n  </el-table>\n  <div style=\"margin-top: 20px\">\n    <el-button @click=\"toggleSelection([tableData[1], tableData[2]])\"\n      >Toggle selection status of second and third rows</el-button\n    >\n    <el-button @click=\"toggleSelection()\">Clear selection</el-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n        multipleSelection: [],\n      }\n    },\n\n    methods: {\n      toggleSelection(rows) {\n        if (rows) {\n          rows.forEach((row) => {\n            this.$refs.multipleTable.toggleRowSelection(row)\n          })\n        } else {\n          this.$refs.multipleTable.clearSelection()\n        }\n      },\n      handleSelectionChange(val) {\n        this.multipleSelection = val\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("並び替え ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "データを素早く、見つけやすいまたは比較しやすいようにソート出来ます。", -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("特定のカラムに "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定し、そのカラムに基づいてデータをソートする。これは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を受け付け、デフォルト値は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" である。テーブル属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-sort"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定して、デフォルトのソート列と順序を決定する。独自のソートルールを適用するには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" や "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-by"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用いる。バックエンドからのリモートソートが必要な場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sortable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "custom"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定し、テーブル上で "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sort-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" イベントをリッスンします。イベントハンドラではソートカラムとソート順にアクセスできるので、API からソートされたテーブルデータを取得することができます。この例では、特定のカラムの値を整形するために "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "formatter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" という名前の別の属性を使います。これは 2 つのパラメータを持つ関数を受け入れます。 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の 2 つのパラメータを持つ関数を受け付ける。この関数は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の 2 つのパラメータを持つ関数を受け付ける。")])], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData\"\n    :default-sort=\"{prop: 'date', order: 'descending'}\"\n    style=\"width: 100%\"\n  >\n    <el-table-column prop=\"date\" label=\"Date\" sortable width=\"180\">\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\" :formatter=\"formatter\">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n    methods: {\n      formatter(row, column) {\n        return row.address\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("フィルター ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "テーブルをフィルタリングして、目的のデータを見つけます。", -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" という属性を設定すると、この列をフィルタリング可能な状態にする。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filters"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は配列であり、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" はどの行を表示するかを決定する関数である。パラメータは 3 つある。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の 3 つのパラメータを持つ。")])], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button @click=\"resetDateFilter\">reset date filter</el-button>\n  <el-button @click=\"clearFilter\">reset all filters</el-button>\n  <el-table\n    row-key=\"date\"\n    ref=\"filterTable\"\n    :data=\"tableData\"\n    style=\"width: 100%\"\n  >\n    <el-table-column\n      prop=\"date\"\n      label=\"Date\"\n      sortable\n      width=\"180\"\n      column-key=\"date\"\n      :filters=\"[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]\"\n      :filter-method=\"filterHandler\"\n    >\n    </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\" :formatter=\"formatter\">\n    </el-table-column>\n    <el-table-column\n      prop=\"tag\"\n      label=\"Tag\"\n      width=\"100\"\n      :filters=\"[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]\"\n      :filter-method=\"filterTag\"\n      filter-placement=\"bottom-end\"\n    >\n      <template #default=\"scope\">\n        <el-tag\n          :type=\"scope.row.tag === 'Home' ? 'primary' : 'success'\"\n          disable-transitions\n          >{{scope.row.tag}}</el-tag\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Office',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n            tag: 'Office',\n          },\n        ],\n      }\n    },\n    methods: {\n      resetDateFilter() {\n        this.$refs.filterTable.clearFilter('date')\n      },\n      clearFilter() {\n        this.$refs.filterTable.clearFilter()\n      },\n      formatter(row, column) {\n        return row.address\n      },\n      filterTag(value, row) {\n        return row.tag === value\n      },\n      filterHandler(value, row, column) {\n        const property = column['property']\n        return row[property] === value\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムカラムテンプレート ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "テーブルのカラムをカスタマイズして、他のコンポーネントと統合できるようにします。", -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("行、列、$index、ストア(テーブルの状態管理)は、");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("slot");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("でアクセスできます。");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column label=\"Date\" width=\"180\">\n      <template #default=\"scope\">\n        <i class=\"el-icon-time\"></i>\n        <span style=\"margin-left: 10px\">{{ scope.row.date }}</span>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"Name\" width=\"180\">\n      <template #default=\"scope\">\n        <el-popover effect=\"light\" trigger=\"hover\" placement=\"top\">\n          <template #default>\n            <p>姓名: {{ scope.row.name }}</p>\n            <p>住址: {{ scope.row.address }}</p>\n          </template>\n          <template #reference>\n            <div class=\"name-wrapper\">\n              <el-tag size=\"medium\">{{ scope.row.name }}</el-tag>\n            </div>\n          </template>\n        </el-popover>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"Operations\">\n      <template #default=\"scope\">\n        <el-button size=\"mini\" @click=\"handleEdit(scope.$index, scope.row)\"\n          >Edit</el-button\n        >\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\"\n          >Delete</el-button\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row)\n      },\n      handleDelete(index, row) {\n        console.log(index, row)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムヘッダー付きのテーブル ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "テーブルヘッダーをカスタマイズすることで、さらにカスタマイズできるようになります。", -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ヘッダー");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("slots");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("でヘッダーの見え方をカスタマイズすることができます。");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table\n    :data=\"tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))\"\n    style=\"width: 100%\"\n  >\n    <el-table-column label=\"Date\" prop=\"date\"> </el-table-column>\n    <el-table-column label=\"Name\" prop=\"name\"> </el-table-column>\n    <el-table-column align=\"right\">\n      <template #header>\n        <el-input v-model=\"search\" size=\"mini\" placeholder=\"Type to search\" />\n      </template>\n      <template #default=\"scope\">\n        <el-button size=\"mini\" @click=\"handleEdit(scope.$index, scope.row)\"\n          >Edit</el-button\n        >\n        <el-button\n          size=\"mini\"\n          type=\"danger\"\n          @click=\"handleDelete(scope.$index, scope.row)\"\n          >Delete</el-button\n        >\n      </template>\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-02',\n            name: 'John',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Morgan',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Jessy',\n            address: 'No. 189, Grove St, Los Angeles',\n          },\n        ],\n        search: '',\n      }\n    },\n    methods: {\n      handleEdit(index, row) {\n        console.log(index, row)\n      },\n      handleDelete(index, row) {\n        console.log(index, row)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("拡張可能な行 ");

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "行の内容が長すぎて横スクロールバーを表示したくない場合は、拡張可能な行の機能を利用することができます。", -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("type=\"expand\" と slot を追加して、拡張可能な行を有効にします。el-table-column のテンプレートは拡張された行の内容としてレンダリングされ、カスタムカラムテンプレートで "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を使用している場合と同じ属性にアクセスできます。")])], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column type=\"expand\">\n      <template #default=\"props\">\n        <p>State: {{ props.row.state }}</p>\n        <p>City: {{ props.row.city }}</p>\n        <p>Address: {{ props.row.address }}</p>\n        <p>Zip: {{ props.row.zip }}</p>\n      </template>\n    </el-table-column>\n    <el-table-column label=\"Date\" prop=\"date\"> </el-table-column>\n    <el-table-column label=\"Name\" prop=\"name\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-08',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-06',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n          {\n            date: '2016-05-07',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n          },\n        ],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ツリーデータとレイジーモード ");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("木構造データを表示することができる。行に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" フィールドが含まれている場合、その行は入れ子データとして扱われる。入れ子になったデータを表示するには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" というプロップが必要である。テーブルの "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" プロパティを true に設定し、関数 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "load"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を実行する。行に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を指定することで、どの行に子を含むかを判断することができます。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("も "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hasChildren"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("も、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "tree-props"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("で設定することができる。")])], -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      style=\"width: 100%;margin-bottom: 20px;\"\n      row-key=\"id\"\n      border\n      default-expand-all\n    >\n      <el-table-column prop=\"date\" label=\"date\" sortable width=\"180\">\n      </el-table-column>\n      <el-table-column prop=\"name\" label=\"Name\" sortable width=\"180\">\n      </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData1\"\n      style=\"width: 100%\"\n      row-key=\"id\"\n      border\n      lazy\n      :load=\"load\"\n      :tree-props=\"{children: 'children', hasChildren: 'hasChildren'}\"\n    >\n      <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    </el-table>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: 1,\n            date: '2016-05-02',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 2,\n            date: '2016-05-04',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 3,\n            date: '2016-05-01',\n            name: 'wangxiaohu',\n            children: [\n              {\n                id: 31,\n                date: '2016-05-01',\n                name: 'wangxiaohu',\n              },\n              {\n                id: 32,\n                date: '2016-05-01',\n                name: 'wangxiaohu',\n              },\n            ],\n          },\n          {\n            id: 4,\n            date: '2016-05-03',\n            name: 'wangxiaohu',\n          },\n        ],\n        tableData1: [\n          {\n            id: 1,\n            date: '2016-05-02',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 2,\n            date: '2016-05-04',\n            name: 'wangxiaohu',\n          },\n          {\n            id: 3,\n            date: '2016-05-01',\n            name: 'wangxiaohu',\n            hasChildren: true,\n          },\n          {\n            id: 4,\n            date: '2016-05-03',\n            name: 'wangxiaohu',\n          },\n        ],\n      }\n    },\n    methods: {\n      load(tree, treeNode, resolve) {\n        setTimeout(() => {\n          resolve([\n            {\n              id: 31,\n              date: '2016-05-01',\n              name: 'wangxiaohu',\n            },\n            {\n              id: 32,\n              date: '2016-05-01',\n              name: 'wangxiaohu',\n            },\n          ])\n        }, 1000)\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("サマリー行 ");

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "数字のテーブルの場合、各列の合計を表示するテーブルのフッターに追加行を追加することができます。", -1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-summary"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定することでサマリー行を追加することができる。デフォルトでは、サマリー行の最初のカラムは何も合計せずに常に 'Sum' を表示します (表示するテキストは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "sum-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で設定できます)。もちろん、独自の合計の振る舞いを定義することもできます。そのためには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "summary-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に配列を返すメソッドを渡すと、配列の各要素がサマリー行の列に表示されます。この例の 2 番目の表に詳細なデモを示します。")])], -1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" border show-summary style=\"width: 100%\">\n    <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\"> </el-table-column>\n    <el-table-column prop=\"amount1\" sortable label=\"Amount 1\">\n    </el-table-column>\n    <el-table-column prop=\"amount2\" sortable label=\"Amount 2\">\n    </el-table-column>\n    <el-table-column prop=\"amount3\" sortable label=\"Amount 3\">\n    </el-table-column>\n  </el-table>\n\n  <el-table\n    :data=\"tableData\"\n    border\n    height=\"200\"\n    :summary-method=\"getSummaries\"\n    show-summary\n    style=\"width: 100%; margin-top: 20px\"\n  >\n    <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\"> </el-table-column>\n    <el-table-column prop=\"amount1\" label=\"Cost 1 ($)\"> </el-table-column>\n    <el-table-column prop=\"amount2\" label=\"Cost 2 ($)\"> </el-table-column>\n    <el-table-column prop=\"amount3\" label=\"Cost 3 ($)\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: '12987122',\n            name: 'Tom',\n            amount1: '234',\n            amount2: '3.2',\n            amount3: 10,\n          },\n          {\n            id: '12987123',\n            name: 'Tom',\n            amount1: '165',\n            amount2: '4.43',\n            amount3: 12,\n          },\n          {\n            id: '12987124',\n            name: 'Tom',\n            amount1: '324',\n            amount2: '1.9',\n            amount3: 9,\n          },\n          {\n            id: '12987125',\n            name: 'Tom',\n            amount1: '621',\n            amount2: '2.2',\n            amount3: 17,\n          },\n          {\n            id: '12987126',\n            name: 'Tom',\n            amount1: '539',\n            amount2: '4.1',\n            amount3: 15,\n          },\n        ],\n      }\n    },\n    methods: {\n      getSummaries(param) {\n        const { columns, data } = param\n        const sums = []\n        columns.forEach((column, index) => {\n          if (index === 0) {\n            sums[index] = 'Total Cost'\n            return\n          }\n          const values = data.map((item) => Number(item[column.property]))\n          if (!values.every((value) => isNaN(value))) {\n            sums[index] =\n              '$ ' +\n              values.reduce((prev, curr) => {\n                const value = Number(curr)\n                if (!isNaN(value)) {\n                  return prev + curr\n                } else {\n                  return prev\n                }\n              }, 0)\n          } else {\n            sums[index] = 'N/A'\n          }\n        })\n\n        return sums\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("rowspan と colspan ");

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "rowspan と colspan を設定すると、セルをマージすることができます。", -1);

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "span-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を用いて rowspan と colspan を設定する。これはメソッドを受け取り、現在の行 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、現在の列 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、現在の行インデックス "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowIndex"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、現在の列インデックス "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "columnIndex"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を含むオブジェクトをそのメソッドに渡します。このメソッドは 2 つの数値の配列を返す必要があり、1 つ目の数値は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、2 つ目の数値は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" です。また、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rowspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "colspan"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" のプロップを持つオブジェクトを返すこともできる。")])], -1);

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"arraySpanMethod\"\n      border\n      style=\"width: 100%\"\n    >\n      <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"Name\"> </el-table-column>\n      <el-table-column prop=\"amount1\" sortable label=\"Amount 1\">\n      </el-table-column>\n      <el-table-column prop=\"amount2\" sortable label=\"Amount 2\">\n      </el-table-column>\n      <el-table-column prop=\"amount3\" sortable label=\"Amount 3\">\n      </el-table-column>\n    </el-table>\n\n    <el-table\n      :data=\"tableData\"\n      :span-method=\"objectSpanMethod\"\n      border\n      style=\"width: 100%; margin-top: 20px\"\n    >\n      <el-table-column prop=\"id\" label=\"ID\" width=\"180\"> </el-table-column>\n      <el-table-column prop=\"name\" label=\"Name\"> </el-table-column>\n      <el-table-column prop=\"amount1\" label=\"Amount 1\"> </el-table-column>\n      <el-table-column prop=\"amount2\" label=\"Amount 2\"> </el-table-column>\n      <el-table-column prop=\"amount3\" label=\"Amount 3\"> </el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            id: '12987122',\n            name: 'Tom',\n            amount1: '234',\n            amount2: '3.2',\n            amount3: 10,\n          },\n          {\n            id: '12987123',\n            name: 'Tom',\n            amount1: '165',\n            amount2: '4.43',\n            amount3: 12,\n          },\n          {\n            id: '12987124',\n            name: 'Tom',\n            amount1: '324',\n            amount2: '1.9',\n            amount3: 9,\n          },\n          {\n            id: '12987125',\n            name: 'Tom',\n            amount1: '621',\n            amount2: '2.2',\n            amount3: 17,\n          },\n          {\n            id: '12987126',\n            name: 'Tom',\n            amount1: '539',\n            amount2: '4.1',\n            amount3: 15,\n          },\n        ],\n      }\n    },\n    methods: {\n      arraySpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (rowIndex % 2 === 0) {\n          if (columnIndex === 0) {\n            return [1, 2]\n          } else if (columnIndex === 1) {\n            return [0, 0]\n          }\n        }\n      },\n\n      objectSpanMethod({ row, column, rowIndex, columnIndex }) {\n        if (columnIndex === 0) {\n          if (rowIndex % 2 === 0) {\n            return {\n              rowspan: 2,\n              colspan: 1,\n            }\n          } else {\n            return {\n              rowspan: 0,\n              colspan: 0,\n            }\n          }\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom index ");

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" カラムで行のインデックスをカスタマイズすることができる。")], -1);

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("行のインデックスをカスタマイズするには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-table-column"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type=index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "index"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を用いる。これが数値に代入されている場合、すべてのインデックスはその数値のオフセットを持つことになる。また、各インデックス（"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("から始まる）をパラメータに持つメソッドも受け付けており、戻り値はインデックスとして表示される。")])], -1);

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-table :data=\"tableData\" style=\"width: 100%\">\n    <el-table-column type=\"index\" :index=\"indexMethod\"> </el-table-column>\n    <el-table-column prop=\"date\" label=\"Date\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"name\" label=\"Name\" width=\"180\"> </el-table-column>\n    <el-table-column prop=\"address\" label=\"Address\"> </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [\n          {\n            date: '2016-05-03',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-02',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Home',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Tom',\n            state: 'California',\n            city: 'Los Angeles',\n            address: 'No. 189, Grove St, Los Angeles',\n            zip: 'CA 90036',\n            tag: 'Office',\n          },\n        ],\n      }\n    },\n    methods: {\n      indexMethod(index) {\n        return index * 2\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Attributes ");

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>Table data</td><td>array</td><td>—</td><td>—</td></tr><tr><td>height</td><td>Table&#39;s height. By default it has an <code>auto</code> height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element&#39;s style.height, the height is affected by external styles</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>Table&#39;s max-height. The legal value is a number or the height in px.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>stripe</td><td>whether Table is striped</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>whether Table has vertical border</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of Table</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>fit</td><td>whether width of column automatically fits its container</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-header</td><td>whether Table header is visible</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>highlight-current-row</td><td>whether current row is highlighted</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>current-row-key</td><td>key of current row, a set only prop</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>row-class-name</td><td>function that returns custom class names for a row, or a string assigning class names for every row</td><td>function({ row, rowIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>row-style</td><td>function that returns custom style for a row, or an object assigning custom style for every row</td><td>function({ row, rowIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>cell-class-name</td><td>function that returns custom class names for a cell, or a string assigning class names for every cell</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>cell-style</td><td>function that returns custom style for a cell, or an object assigning custom style for every cell</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>header-row-class-name</td><td>function that returns custom class names for a row in table header, or a string assigning class names for every row in table header</td><td>function({ row, rowIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>header-row-style</td><td>function that returns custom style for a row in table header, or an object assigning custom style for every row in table header</td><td>function({ row, rowIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>header-cell-class-name</td><td>function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>—</td><td>—</td></tr><tr><td>header-cell-style</td><td>function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>—</td><td>—</td></tr><tr><td>row-key</td><td>key of row data, used for optimizing rendering. Required if <code>reserve-selection</code> is on or display tree data. When its type is String, multi-level access is supported, e.g. <code>user.info.id</code>, but <code>user.info[0].id</code> is not supported, in which case <code>Function</code> should be used.</td><td>function(row) / string</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>Displayed text when data is empty. You can customize this area with <code>#empty</code></td><td>string</td><td>—</td><td>No Data</td></tr><tr><td>default-expand-all</td><td>whether expand all rows by default, works when the table has a column type=&quot;expand&quot; or contains tree structure data</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-row-keys</td><td>set expanded rows by this prop, prop&#39;s value is the keys of expand rows, you should set row-key before using this prop</td><td>array</td><td>—</td><td>—</td></tr><tr><td>default-sort</td><td>set the default sort column and order. property <code>prop</code> is used to set default sort column, property <code>order</code> is used to set default sort order</td><td>object</td><td><code>order</code>: ascending / descending</td><td>if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td></tr><tr><td>tooltip-effect</td><td>tooltip <code>effect</code> property</td><td>string</td><td>dark / light</td><td>dark</td></tr><tr><td>show-summary</td><td>whether to display a summary row</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>sum-text</td><td>displayed text for the first column of summary row</td><td>string</td><td>—</td><td>Sum</td></tr><tr><td>summary-method</td><td>custom summary method</td><td>function({ columns, data })</td><td>—</td><td>—</td></tr><tr><td>span-method</td><td>method that returns rowspan and colspan</td><td>function({ row, column, rowIndex, columnIndex })</td><td>—</td><td>—</td></tr><tr><td>select-on-indeterminate</td><td>controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>indent</td><td>horizontal indentation of tree data</td><td>number</td><td>—</td><td>16</td></tr><tr><td>lazy</td><td>whether to lazy loading data</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>load</td><td>method for loading child row data, only works when <code>lazy</code> is true</td><td>function(row, treeNode, resolve)</td><td>—</td><td>—</td></tr><tr><td>tree-props</td><td>configuration for rendering nested data</td><td>object</td><td>—</td><td>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</td></tr></tbody></table>", 1);

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Events ");

const _hoisted_89 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>triggers when user clicks the checkbox in a row</td><td>selection, row</td></tr><tr><td>select-all</td><td>triggers when user clicks the checkbox in table header</td><td>selection</td></tr><tr><td>selection-change</td><td>triggers when selection changes</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>triggers when hovering into a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>triggers when hovering out of a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>triggers when clicking a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>triggers when double clicking a cell</td><td>row, column, cell, event</td></tr><tr><td>cell-contextmenu</td><td>triggers when user right clicks on a cell</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>triggers when clicking a row</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>triggers when user right clicks on a row</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>triggers when double clicking a row</td><td>row, column, event</td></tr><tr><td>header-click</td><td>triggers when clicking a column header</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>triggers when user right clicks on a column header</td><td>column, event</td></tr><tr><td>sort-change</td><td>triggers when Table&#39;s sorting changes</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>column&#39;s key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered</td><td>filters</td></tr><tr><td>current-change</td><td>triggers when current row changes</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>triggers after changing a column&#39;s width by dragging the column header&#39;s border</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)</td><td>row, (expandedRows | expanded)</td></tr></tbody></table>", 1);

const _hoisted_90 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Methods ");

const _hoisted_91 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>clearSelection</td><td>used in multiple selection Table, clear user selection</td><td>—</td></tr><tr><td>toggleRowSelection</td><td>used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>used in multiple selection Table, toggle select all and deselect all</td><td>—</td></tr><tr><td>toggleRowExpansion</td><td>used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection.</td><td>row</td></tr><tr><td>clearSort</td><td>clear sorting, restore data to the original order</td><td>—</td></tr><tr><td>clearFilter</td><td>clear filters of the columns whose <code>columnKey</code> are passed in. If no params, clear all filters</td><td>columnKeys</td></tr><tr><td>doLayout</td><td>refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout</td><td>—</td></tr><tr><td>sort</td><td>sort Table manually. Property <code>prop</code> is used to set sort column, property <code>order</code> is used to set sort order</td><td>prop: string, order: string</td></tr></tbody></table>", 1);

const _hoisted_92 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table Slots ");

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "append"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.")])])], -1);

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table-column Attributes ");

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>type of the column. If set to <code>selection</code>, the column will display checkbox. If set to <code>index</code>, the column will display index of the row (staring from 1). If set to <code>expand</code>, the column will display expand icon.</td><td>string</td><td>selection / index / expand</td><td>—</td></tr><tr><td>index</td><td>customize indices for each row, works on columns with <code>type=index</code></td><td>number / function(index)</td><td>—</td><td>—</td></tr><tr><td>label</td><td>column label</td><td>string</td><td>—</td><td>—</td></tr><tr><td>column-key</td><td>column&#39;s key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prop</td><td>field name. You can also use its alias: <code>property</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>column width</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>column minimum width. Columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>fixed</td><td>whether column is fixed at left / right. Will be fixed at left if <code>true</code></td><td>string / boolean</td><td>true / &#39;left&#39; / &#39;right&#39;</td><td>—</td></tr><tr><td>render-header</td><td>render function for table header of this column</td><td>function({ column, $index })</td><td>—</td><td>—</td></tr><tr><td>sortable</td><td>whether column can be sorted. Remote sorting can be done by setting this attribute to &#39;custom&#39; and listening to the <code>sort-change</code> event of Table</td><td>boolean / string</td><td>true / false / &#39;custom&#39;</td><td>false</td></tr><tr><td>sort-method</td><td>sorting method, works when <code>sortable</code> is <code>true</code>. Should return a number, just like Array.sort</td><td>function(a, b)</td><td>—</td><td>—</td></tr><tr><td>sort-by</td><td>specify which property to sort by, works when <code>sortable</code> is <code>true</code> and <code>sort-method</code> is <code>undefined</code>. If set to an Array, the column will sequentially sort by the next property if the previous one is equal</td><td>function(row, index) / string / array</td><td>—</td><td>—</td></tr><tr><td>sort-orders</td><td>the order of the sorting strategies used when sorting the data, works when <code>sortable</code> is <code>true</code>. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array</td><td>array</td><td>the elements in the array need to be one of the following: <code>ascending</code>, <code>descending</code> and <code>null</code> (restores to the original order)</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>whether column width can be resized, works when <code>border</code> of <code>el-table</code> is <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>formatter</td><td>function that formats cell content</td><td>function(row, column, cellValue, index)</td><td>—</td><td>—</td></tr><tr><td>show-overflow-tooltip</td><td>whether to hide extra content and show them in a tooltip when hovering on the cell</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>alignment</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>header-align</td><td>alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied</td><td>string</td><td>left / center / right</td><td>—</td></tr><tr><td>class-name</td><td>class name of cells in the column</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>class name of the label of this column</td><td>string</td><td>—</td><td>—</td></tr><tr><td>selectable</td><td>function that determines if a certain row can be selected, works when <code>type</code> is &#39;selection&#39;</td><td>function(row, index)</td><td>—</td><td>—</td></tr><tr><td>reserve-selection</td><td>whether to reserve selection after data refreshing, works when <code>type</code> is &#39;selection&#39;. Note that <code>row-key</code> is required for this to work</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filters</td><td>an array of data filtering options. For each element in this array, <code>text</code> and <code>value</code> are required</td><td>array[{ text, value }]</td><td>—</td><td>—</td></tr><tr><td>filter-placement</td><td>placement for the filter dropdown</td><td>string</td><td>top / top-start / top-end / bottom / bottom-star t /bottom-end / left / left-start / left-end / right / right-start / right-end</td><td>—</td></tr><tr><td>filter-multiple</td><td>whether data filtering supports multiple options</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>filter-method</td><td>data filtering method. If <code>filter-multiple</code> is on, this method will be called multiple times for each row, and a row will display if one of the calls returns <code>true</code></td><td>function(value, row, column)</td><td>—</td><td>—</td></tr><tr><td>filtered-value</td><td>filter value for selected data, might be useful when table header is rendered with <code>render-header</code></td><td>array</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_96 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Table-column Slots ");

const _hoisted_97 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Custom content for table columns. The scope parameter is { row, column, $index }")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "header"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Custom content for table header. The scope parameter is { column, $index }")])])], -1);

function tablevue_type_template_id_184126d3_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", tablevue_type_template_id_184126d3_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "teburu",
    content: "テーブル",
    href: "#teburu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tablevue_type_template_id_184126d3_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#teburu"
    })]),
    _: 1
  }), tablevue_type_template_id_184126d3_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-teburu",
    content: "基本テーブル",
    href: "#ji-ben-teburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [tablevue_type_template_id_184126d3_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-teburu"
    })]),
    _: 1
  }), tablevue_type_template_id_184126d3_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gao-mo-yang-noteburu",
    content: "縞模様のテーブル",
    href: "#gao-mo-yang-noteburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gao-mo-yang-noteburu"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bodafu-kiteburu",
    content: "ボーダー付きテーブル",
    href: "#bodafu-kiteburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bodafu-kiteburu"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutetasunoaruteburu",
    content: "ステータスのあるテーブル",
    href: "#sutetasunoaruteburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetasunoaruteburu"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "hetudawogu-ding-sitateburu",
    content: "ヘッダを固定したテーブル",
    href: "#hetudawogu-ding-sitateburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#hetudawogu-ding-sitateburu"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "lie-gagu-ding-sareteiruteburu",
    content: "列が固定されているテーブル",
    href: "#lie-gagu-ding-sareteiruteburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#lie-gagu-ding-sareteiruteburu"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gu-ding-lie-tohetudawochi-tuteburu",
    content: "固定列とヘッダーを持つテーブル",
    href: "#gu-ding-lie-tohetudawochi-tuteburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gu-ding-lie-tohetudawochi-tuteburu"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gu-ding-hetuda-oyobilie-wochi-tuliu-dong-de-nagao-sanoteburu",
    content: "固定ヘッダー（および列）を持つ流動的な高さのテーブル",
    href: "#gu-ding-hetuda-oyobilie-wochi-tuliu-dong-de-nagao-sanoteburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gu-ding-hetuda-oyobilie-wochi-tuliu-dong-de-nagao-sanoteburu"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gurupinguteburuhetudo",
    content: "グルーピングテーブルヘッド",
    href: "#gurupinguteburuhetudo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gurupinguteburuhetudo"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "singuruxuan-ze",
    content: "シングル選択",
    href: "#singuruxuan-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#singuruxuan-ze"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fu-shu-xuan-ze",
    content: "複数選択",
    href: "#fu-shu-xuan-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fu-shu-xuan-ze"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo10)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bing-biti-e",
    content: "並び替え",
    href: "#bing-biti-e",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bing-biti-e"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo11)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_50]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "huiruta",
    content: "フィルター",
    href: "#huiruta",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#huiruta"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo12)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamukaramutenpureto",
    content: "カスタムカラムテンプレート",
    href: "#kasutamukaramutenpureto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamukaramutenpureto"
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
    id: "kasutamuhetudafu-kinoteburu",
    content: "カスタムヘッダー付きのテーブル",
    href: "#kasutamuhetudafu-kinoteburu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamuhetudafu-kinoteburu"
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
    id: "kuo-zhang-ke-neng-naxing",
    content: "拡張可能な行",
    href: "#kuo-zhang-ke-neng-naxing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_67, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kuo-zhang-ke-neng-naxing"
    })]),
    _: 1
  }), _hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo15)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_70]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_69]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "turidetatoreizimodo",
    content: "ツリーデータとレイジーモード",
    href: "#turidetatoreizimodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_71, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#turidetatoreizimodo"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo16)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_73]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_72]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "samarixing",
    content: "サマリー行",
    href: "#samarixing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_74, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#samarixing"
    })]),
    _: 1
  }), _hoisted_75, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo17)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_77]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_76]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rowspan-to-colspan",
    content: "rowspan と colspan",
    href: "#rowspan-to-colspan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_78, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rowspan-to-colspan"
    })]),
    _: 1
  }), _hoisted_79, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo18)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_81]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_80]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "custom-index",
    content: "Custom index",
    href: "#custom-index",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_82, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#custom-index"
    })]),
    _: 1
  }), _hoisted_83, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo19)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_85]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_84]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-attributes",
    content: "Table Attributes",
    href: "#table-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_86, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-attributes"
    })]),
    _: 1
  }), _hoisted_87, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-events",
    content: "Table Events",
    href: "#table-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_88, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-events"
    })]),
    _: 1
  }), _hoisted_89, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-methods",
    content: "Table Methods",
    href: "#table-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_90, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-methods"
    })]),
    _: 1
  }), _hoisted_91, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-slots",
    content: "Table Slots",
    href: "#table-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_92, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-slots"
    })]),
    _: 1
  }), _hoisted_93, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-column-attributes",
    content: "Table-column Attributes",
    href: "#table-column-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_94, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-column-attributes"
    })]),
    _: 1
  }), _hoisted_95, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "table-column-slots",
    content: "Table-column Slots",
    href: "#table-column-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_96, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#table-column-slots"
    })]),
    _: 1
  }), _hoisted_97, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/table.md?vue&type=template&id=184126d3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/table.md?vue&type=script&lang=ts

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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Detail");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Edit");

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
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Zip",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            fixed: "right",
            label: "Operations",
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
            width: "320"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address",
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Zip",
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Remove ");

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
            width: "600"
          }), _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Zip",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            fixed: "right",
            label: "Operations",
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
            label: "Date",
            width: "150"
          }), _createVNode(_component_el_table_column, {
            label: "Delivery Info"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              width: "120"
            }), _createVNode(_component_el_table_column, {
              label: "Address Info"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_table_column, {
                prop: "state",
                label: "State",
                width: "120"
              }), _createVNode(_component_el_table_column, {
                prop: "city",
                label: "City",
                width: "120"
              }), _createVNode(_component_el_table_column, {
                prop: "address",
                label: "Address"
              }), _createVNode(_component_el_table_column, {
                prop: "zip",
                label: "Zip",
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Select second row");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Clear selection");

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
            label: "Date",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            property: "name",
            label: "Name",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            property: "address",
            label: "Address"
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Toggle selection status of second and third rows");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Clear selection");

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
            label: "Date",
            width: "120"
          }, {
            default: _withCtx(scope => [_createTextVNode(_toDisplayString(scope.row.date), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            property: "name",
            label: "Name",
            width: "120"
          }), _createVNode(_component_el_table_column, {
            property: "address",
            label: "Address",
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("reset date filter");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("reset all filters");

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

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Edit");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Delete");

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
            label: "Date",
            width: "180"
          }, {
            default: _withCtx(scope => [_hoisted_1, _createElementVNode("span", _hoisted_2, _toDisplayString(scope.row.date), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            label: "Name",
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
            label: "Operations"
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
            default: _withCtx(props => [_createElementVNode("p", null, "State: " + _toDisplayString(props.row.state), 1), _createElementVNode("p", null, "City: " + _toDisplayString(props.row.city), 1), _createElementVNode("p", null, "Address: " + _toDisplayString(props.row.address), 1), _createElementVNode("p", null, "Zip: " + _toDisplayString(props.row.zip), 1)]),
            _: 1
          }), _createVNode(_component_el_table_column, {
            label: "Date",
            prop: "date"
          }), _createVNode(_component_el_table_column, {
            label: "Name",
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
            label: "date",
            sortable: "",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
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
                sums[index] = 'Total Cost';
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
            label: "Date",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }), _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
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
// CONCATENATED MODULE: ./website/docs/jp/table.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/table.md



tablevue_type_script_lang_ts.render = tablevue_type_template_id_184126d3_render

/* harmony default export */ var table = __webpack_exports__["default"] = (tablevue_type_script_lang_ts);

/***/ })

}]);