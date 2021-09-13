(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[267],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/select.md?vue&type=template&id=38be26ba

const selectvue_type_template_id_38be26ba_hoisted_1 = {
  class: "content element-doc"
};

const selectvue_type_template_id_38be26ba_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("セレクト ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "オプションが豊富な場合は、ドロップダウンメニューを使って表示し、希望するものをセレクトすることができます。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は現在セレクトされている "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の値である。")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オプションの無効化 ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オプションを無効にするには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の値を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定する。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n            disabled: true,\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オプションの無効化 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "コンポーネント全体を無効にします。", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定すると無効になります。")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" disabled placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("クリア可能なセレクト ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "セレクトはクリアアイコンでクリアできます。", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定すると、クリアアイコンが表示されるようになる。なお、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("はシングルセレクトの場合のみ有効である。")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" clearable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な複数セレクト ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "複数セレクトは、セレクトされたオプションを表示するためにタグを使用します。", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("複数モードを有効にするには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定する。この場合、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の値はセレクトされたオプションの配列となる。デフォルトでは、セレクトされたオプションはタグとして表示される。collapse-tags` 属性を用いることで、それらをテキストに折りたたむことができる。")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value1\" multiple placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model=\"value2\"\n    multiple\n    collapse-tags\n    style=\"margin-left: 20px;\"\n    placeholder=\"Select\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value1: [],\n        value2: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムテンプレート ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "オプションの HTML テンプレートをカスタマイズすることができます。", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタマイズした HTML テンプレートを "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" のスロットに挿入します。")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span\n        style=\"float: right; color: var(--el-text-color-secondary); font-size: 13px\"\n        >{{ item.value }}</span\n      >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [\n          {\n            value: 'Beijing',\n            label: 'Beijing',\n          },\n          {\n            value: 'Shanghai',\n            label: 'Shanghai',\n          },\n          {\n            value: 'Nanjing',\n            label: 'Nanjing',\n          },\n          {\n            value: 'Chengdu',\n            label: 'Chengdu',\n          },\n          {\n            value: 'Shenzhen',\n            label: 'Shenzhen',\n          },\n          {\n            value: 'Guangzhou',\n            label: 'Guangzhou',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("グルーピング ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "グループのオプションを表示します。", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オプションをグループ化するには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を用い、その "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性はグループ名を表す。")])], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\"\n    >\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\"\n      >\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            label: 'Popular cities',\n            options: [\n              {\n                value: 'Shanghai',\n                label: 'Shanghai',\n              },\n              {\n                value: 'Beijing',\n                label: 'Beijing',\n              },\n            ],\n          },\n          {\n            label: 'City name',\n            options: [\n              {\n                value: 'Chengdu',\n                label: 'Chengdu',\n              },\n              {\n                value: 'Shenzhen',\n                label: 'Shenzhen',\n              },\n              {\n                value: 'Guangzhou',\n                label: 'Guangzhou',\n              },\n              {\n                value: 'Dalian',\n                label: 'Dalian',\n              },\n            ],\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オプションフィルタリング ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ご希望のオプションをフィルタリングすることができます。", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を追加すると、フィルタリングが可能になる。デフォルトでは、セレクト肢は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性に入力値が含まれるすべてのオプションを検索する。他のフィルタリング方法を使いたい場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を渡すことができる。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は入力値が変更されたときに呼び出される "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" であり、そのパラメータは現在の入力値である。")])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" filterable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("リモート検索 ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "サーバーからキーワードや検索データを入力します。", -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("リモート検索を有効にするには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定し、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を渡す必要がある。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("は入力値が変化したときに呼び出される "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" であり、そのパラメータは現在の入力値である。もし "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-for"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" ディレクティブでレンダリングされている場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を追加しなければならないことに注意してください。その値は、以下の例の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "item.value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" のように一意である必要があります。")])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder=\"Please enter a keyword\"\n    :remote-method=\"remoteMethod\"\n    :loading=\"loading\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: [\n          'Alabama',\n          'Alaska',\n          'Arizona',\n          'Arkansas',\n          'California',\n          'Colorado',\n          'Connecticut',\n          'Delaware',\n          'Florida',\n          'Georgia',\n          'Hawaii',\n          'Idaho',\n          'Illinois',\n          'Indiana',\n          'Iowa',\n          'Kansas',\n          'Kentucky',\n          'Louisiana',\n          'Maine',\n          'Maryland',\n          'Massachusetts',\n          'Michigan',\n          'Minnesota',\n          'Mississippi',\n          'Missouri',\n          'Montana',\n          'Nebraska',\n          'Nevada',\n          'New Hampshire',\n          'New Jersey',\n          'New Mexico',\n          'New York',\n          'North Carolina',\n          'North Dakota',\n          'Ohio',\n          'Oklahoma',\n          'Oregon',\n          'Pennsylvania',\n          'Rhode Island',\n          'South Carolina',\n          'South Dakota',\n          'Tennessee',\n          'Texas',\n          'Utah',\n          'Vermont',\n          'Virginia',\n          'Washington',\n          'West Virginia',\n          'Wisconsin',\n          'Wyoming',\n        ],\n      }\n    },\n    mounted() {\n      this.list = this.states.map((item) => {\n        return { value: `value:${item}`, label: `label:${item}` }\n      })\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true\n          setTimeout(() => {\n            this.loading = false\n            this.options = this.list.filter((item) => {\n              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1\n            })\n          }, 200)\n        } else {\n          this.options = []\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("新規アイテムの作成 ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "セレクトオプションに含まれないアイテムを新規に作成してセレクトする", -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性を使うことで、ユーザは入力ボックスに入力することで新しいアイテムを作成することができます。なお、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が動作するためには、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" でなければならない。この例では "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-first-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" も示している。この属性を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定すると、マウスや矢印キーで移動しなくても、エンターキーを押すことで現在のオプションリストの最初のオプションをセレクトすることができる。")])], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    default-first-option\n    placeholder=\"Choose tags for your article\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'HTML',\n            label: 'HTML',\n          },\n          {\n            value: 'CSS',\n            label: 'CSS',\n          },\n          {\n            value: 'JavaScript',\n            label: 'JavaScript',\n          },\n        ],\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("セレクトされたバインディング値がオブジェクトの場合、そのユニークな ID キー名として "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を割り当てるようにしてください。")])], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性の選択 ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>複数セレクトが有効かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>セレクトが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>値がオブジェクトの場合に必要な、値の一意の ID キー名</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>インプットサイズ</td><td>string</td><td>large/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>セレクトクリア可能かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>複数セレクト時にタグをテキストに折りたたむかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td><code>multiple</code> が <code>true</code> のときにユーザがセレクトできるオプションの最大数。0 に設定した場合は無制限</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>セレクト入力の名前属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>セレクト入力のオートコンプリート属性</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>プレースホルダー</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>filterable</td><td>セレクトがフィルタリング可能かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>新しいアイテムの作成を許可するかどうかを指定します。これを使うには、<code>filterable</code> が true でなければなりません。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>カスタムフィルタ方式</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>オプションがサーバから読み込まれているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>カスタムリモート検索法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>セレクトがサーバからデータをロードしているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>サーバからのデータ読み込み中に表示されるテキスト</td><td>string</td><td>—</td><td>Loading</td></tr><tr><td>no-match-text</td><td>フィルタリングクエリに一致するデータがない場合は、スロット <code>empty</code> を使用することもできます。</td><td>string</td><td>—</td><td>No matching data</td></tr><tr><td>no-data-text</td><td>オプションがないときにテキストを表示するには、スロット <code>empty</code> を使うこともできます。</td><td>string</td><td>—</td><td>No data</td></tr><tr><td>popper-class</td><td>custom class name for Select&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td><code>multiple</code> と <code>filter</code> が真の場合、オプションを選択した後に現在のキーワードを予約するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>エンターキーで最初にマッチするオプションを選択する。<code>filterable</code> または <code>remote</code>と一緒に使う</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>ポッパーメニューをボディに追加するかどうか。ポッパーの位置が間違っている場合は、このプロップを false に設定してみてください。</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>ノンフィルターセレクトの場合、このプロップは、入力がフォーカスされたときにオプションメニューがポップアップするかどうかを決定します。</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イベントの選択 ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>選択された値が変更されたときにトリガされます。</td><td>current selected value</td></tr><tr><td>visible-change</td><td>ドロップダウンが表示/非表示になったときにトリガされます。</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>複数のモードでタグが削除された場合のトリガー</td><td>removed tag value</td></tr><tr><td>clear</td><td>クリア可能な選択範囲内でクリアアイコンがクリックされたときにトリガーされます。</td><td>—</td></tr><tr><td>blur</td><td>インプットがぼやけたときにトリガされます。</td><td>(event: Event)</td></tr><tr><td>focus</td><td>インプットがフォーカスされたときにトリガされます。</td><td>(event: Event)</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("セレクトスロット ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>オプションコンポーネントリスト</td></tr><tr><td>prefix</td><td>セレクトプレフィックスとしてのコンテンツ</td></tr><tr><td>empty</td><td>オプションがない場合のコンテンツ</td></tr></tbody></table>", 1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オプショングループの属性 ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>グループの名前</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>このグループのすべてのオプションを無効にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("オプション属性 ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>オプションの値</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>オプションのラベル、省略された場合は <code>value</code> と同じ</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>オプションが無効かどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("方法 ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>インプットコンポーネントにフォーカス</td><td>-</td></tr><tr><td>blur</td><td>インプットコンポーネントをぼかし、ドロップダウンを非表示にします。</td><td>-</td></tr></tbody></table>", 1);

function selectvue_type_template_id_38be26ba_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", selectvue_type_template_id_38be26ba_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "serekuto",
    content: "セレクト",
    href: "#serekuto",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [selectvue_type_template_id_38be26ba_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#serekuto"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "opusiyonnowu-xiao-hua",
    content: "オプションの無効化",
    href: "#opusiyonnowu-xiao-hua",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#opusiyonnowu-xiao-hua"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "opusiyonnowu-xiao-hua-2",
    content: "オプションの無効化",
    href: "#opusiyonnowu-xiao-hua-2",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#opusiyonnowu-xiao-hua-2"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kuriake-neng-naserekuto",
    content: "クリア可能なセレクト",
    href: "#kuriake-neng-naserekuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kuriake-neng-naserekuto"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nafu-shu-serekuto",
    content: "基本的な複数セレクト",
    href: "#ji-ben-de-nafu-shu-serekuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nafu-shu-serekuto"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamutenpureto",
    content: "カスタムテンプレート",
    href: "#kasutamutenpureto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamutenpureto"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "gurupingu",
    content: "グルーピング",
    href: "#gurupingu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#gurupingu"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "opusiyonhuirutaringu",
    content: "オプションフィルタリング",
    href: "#opusiyonhuirutaringu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#opusiyonhuirutaringu"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rimotojian-suo",
    content: "リモート検索",
    href: "#rimotojian-suo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rimotojian-suo"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xin-gui-aitemunozuo-cheng",
    content: "新規アイテムの作成",
    href: "#xin-gui-aitemunozuo-cheng",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-gui-aitemunozuo-cheng"
    })]),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing-noxuan-ze",
    content: "属性の選択",
    href: "#shu-xing-noxuan-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing-noxuan-ze"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ibentonoxuan-ze",
    content: "イベントの選択",
    href: "#ibentonoxuan-ze",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ibentonoxuan-ze"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "serekutosurotuto",
    content: "セレクトスロット",
    href: "#serekutosurotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#serekutosurotuto"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "opusiyongurupunoshu-xing",
    content: "オプショングループの属性",
    href: "#opusiyongurupunoshu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#opusiyongurupunoshu-xing"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "opusiyonshu-xing",
    content: "オプション属性",
    href: "#opusiyonshu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#opusiyonshu-xing"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/select.md?vue&type=template&id=38be26ba

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/select.md?vue&type=script&lang=ts

/* harmony default export */ var selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value,
              disabled: item.disabled
            }, null, 8, ["label", "value", "disabled"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          disabled: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          clearable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          multiple: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_select, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          multiple: "",
          "collapse-tags": "",
          style: {
            "margin-left": "20px"
          },
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "float": "left"
        }
      };
      const _hoisted_2 = {
        style: {
          "float": "right",
          "color": "var(--el-text-color-secondary)",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, {
              default: _withCtx(() => [_createElementVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createElementVNode("span", _hoisted_2, _toDisplayString(item.value), 1)]),
              _: 2
            }, 1032, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_option_group = _resolveComponent("el-option-group");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, group => {
            return _openBlock(), _createBlock(_component_el_option_group, {
              key: group.label,
              label: group.label
            }, {
              default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(group.options, item => {
                return _openBlock(), _createBlock(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 128))]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo8": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          multiple: "",
          filterable: "",
          remote: "",
          "reserve-keyword": "",
          placeholder: "Please enter a keyword",
          "remote-method": _ctx.remoteMethod,
          loading: _ctx.loading
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "remote-method", "loading"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [],
            value: [],
            list: [],
            loading: false,
            states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
          };
        },

        mounted() {
          this.list = this.states.map(item => {
            return {
              value: `value:${item}`,
              label: `label:${item}`
            };
          });
        },

        methods: {
          remoteMethod(query) {
            if (query !== '') {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.options = this.list.filter(item => {
                  return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
              }, 200);
            } else {
              this.options = [];
            }
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          multiple: "",
          filterable: "",
          "allow-create": "",
          "default-first-option": "",
          placeholder: "Choose tags for your article"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/select.md



selectvue_type_script_lang_ts.render = selectvue_type_template_id_38be26ba_render

/* harmony default export */ var jp_select = __webpack_exports__["default"] = (selectvue_type_script_lang_ts);

/***/ })

}]);