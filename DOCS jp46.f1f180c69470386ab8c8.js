(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[259],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/popover.md?vue&type=template&id=59529d30

var popovervue_type_template_id_59529d30_hoisted_1 = {
  class: "content element-doc"
};

var popovervue_type_template_id_59529d30_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Popover ");

var popovervue_type_template_id_59529d30_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基本的な使い方 ");

var popovervue_type_template_id_59529d30_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tooltipと同様に、Popoverも "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Vue-popper"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で構築されています。そのため、重複する属性については、Tooltipのドキュメントを参照してください。")], -1);

var popovervue_type_template_id_59529d30_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性は、popoverがどのようにトリガーされるかを定義するために使用されます: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "focus"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "manual"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。それは、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "#reference"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" という名前のスロットを使うか、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-popover"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ディレクティブを使って popover の "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に設定するかです。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-popover\n    placement=\"top-start\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"hover\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Hover to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"click\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Hover to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    ref=\"popover\"\n    placement=\"right\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"focus\"\n    content=\"this is content, this is content, this is content\"\n  >\n    <template #reference>\n      <el-button>Focus to activate</el-button>\n    </template>\n  </el-popover>\n\n  <el-popover\n    placement=\"bottom\"\n    title=\"Title\"\n    :width=\"200\"\n    trigger=\"manual\"\n    content=\"this is content, this is content, this is content\"\n    v-model:visible=\"visible\"\n  >\n    <template #reference>\n      <el-button @click=\"visible = !visible\">Manual to activate</el-button>\n    </template>\n  </el-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("入れ子になっている情報 ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "popoverの中には、他のコンポーネントを入れ子にすることができます。以下はネストされたテーブルの例です。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性をデフォルトの"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("に置き換えています。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"right\"\n  :width=\"400\"\n  trigger=\"click\"\n>\n  <template #reference>\n    <el-button>Click to activate</el-button>\n  </template>\n  <el-table :data=\"gridData\">\n    <el-table-column width=\"150\" property=\"date\" label=\"date\"></el-table-column>\n    <el-table-column width=\"100\" property=\"name\" label=\"name\"></el-table-column>\n    <el-table-column width=\"300\" property=\"address\" label=\"address\"></el-table-column>\n  </el-table>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: '2016-05-02',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-04',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-01',\n          name: 'Jack',\n          address: 'New York City'\n        }, {\n          date: '2016-05-03',\n          name: 'Jack',\n          address: 'New York City'\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Jack',\n            address: 'New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Jack',\n            address: 'New York City',\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("入れ子になった操作 ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "もちろん、他の操作をネストすることもできます。ダイアログを使うよりも軽量です。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-popover\n  placement=\"top\"\n  :width=\"160\"\n  v-model:visible=\"visible\"\n>\n  <p>Are you sure to delete this?</p>\n  <div style=\"text-align: right; margin: 0\">\n    <el-button size=\"mini\" type=\"text\" @click=\"visible = false\">cancel</el-button>\n    <el-button type=\"primary\" size=\"mini\" @click=\"visible = false\">confirm</el-button>\n  </div>\n  <template #reference>\n    <el-button @click=\"visible = true\">Delete</el-button>\n  </template>\n</el-popover>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        visible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性 ");

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Default")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverがどのようにトリガーされるか"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "click/focus/hover/manual"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "click")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverのタイトル"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popoverコンテンツ、デフォルトの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で置き換えることができます。")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "width"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popover幅"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string, number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Min width 150px")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popover配置"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "bottom")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverが無効になっているかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "visible / v-model:visible"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverが表示されているかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverオフセット"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverトランジションアニメーション"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-fade-in-linear")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "show-arrow", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ツールチップの矢印が表示されているかどうかを指定します。詳細については ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vue-popper");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-options", -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popper.js");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のためのパラメータ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "object", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("please refer to ");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popper.js");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "{ boundariesElement: 'body', gpuAcceleration: false }")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popover用カスタムクラス名"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "show-after"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "ミリ秒単位の出現の遅延"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hide-after"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "ミリ秒単位の消えるの遅延"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "auto-close"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "ツールチップを非表示にするタイムアウト（ミリ秒単位）"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "tabindex", -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("tabindex");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のpopover");

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number", -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("スロット ");

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverのテキストコンテンツ")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "reference"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popoverをトリガーするHTML要素")])])], -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("イベント ");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>show</td><td>popoverが表示されたときにトリガー</td><td>—</td></tr><tr><td>after-enter</td><td>入力トランジションの終了時にトリガされます。</td><td>—</td></tr><tr><td>hide</td><td>popoverが非表示になったときにトリガー</td><td>—</td></tr><tr><td>after-leave</td><td>離脱トランジション終了時のトリガー</td><td>—</td></tr></tbody></table>", 1);

function popovervue_type_template_id_59529d30_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", popovervue_type_template_id_59529d30_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "popover",
    content: "Popover",
    href: "#popover",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [popovervue_type_template_id_59529d30_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#popover"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-ben-dena-shii-fang",
    content: "基本的な使い方",
    href: "#ji-ben-dena-shii-fang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [popovervue_type_template_id_59529d30_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-ben-dena-shii-fang"
      })];
    }),
    _: 1
  }), popovervue_type_template_id_59529d30_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [popovervue_type_template_id_59529d30_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "rure-zininatuteiru-qing-bao",
    content: "入れ子になっている情報",
    href: "#rure-zininatuteiru-qing-bao",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#rure-zininatuteiru-qing-bao"
      })];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "rure-zininatuta-cao-zuo",
    content: "入れ子になった操作",
    href: "#rure-zininatuta-cao-zuo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#rure-zininatuta-cao-zuo"
      })];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#shu-xing"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  })]), _hoisted_28, _hoisted_29, _hoisted_30]), Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_33]), _hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    _: 1
  })]), _hoisted_37]), _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_43];
    }),
    _: 1
  }), _hoisted_44]), _hoisted_45, _hoisted_46, _hoisted_47])])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#surotuto"
      })];
    }),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ibento"
      })];
    }),
    _: 1
  }), _hoisted_51, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/popover.md?vue&type=template&id=59529d30

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/popover.md?vue&type=script&lang=ts


/* harmony default export */ var popovervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Hover to activate");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Hover to activate");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Focus to activate");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Manual to activate");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top-start",
          title: "Title",
          width: 200,
          trigger: "hover",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "click",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_popover, {
          ref: "popover",
          placement: "right",
          title: "Title",
          width: 200,
          trigger: "focus",
          content: "this is content, this is content, this is content"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512), _createVNode(_component_el_popover, {
          placement: "bottom",
          title: "Title",
          width: 200,
          trigger: "manual",
          content: "this is content, this is content, this is content",
          visible: _ctx.visible,
          "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = !_ctx.visible;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to activate");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  width: "150",
                  property: "date",
                  label: "date"
                }), _createVNode(_component_el_table_column, {
                  width: "100",
                  property: "name",
                  label: "name"
                }), _createVNode(_component_el_table_column, {
                  width: "300",
                  property: "address",
                  label: "address"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            gridData: [{
              date: '2016-05-02',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-04',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-01',
              name: 'Jack',
              address: 'New York City'
            }, {
              date: '2016-05-03',
              name: 'Jack',
              address: 'New York City'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "Are you sure to delete this?", -1);

      var _hoisted_2 = {
        style: {
          "text-align": "right",
          "margin": "0"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("cancel");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("confirm");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Delete");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_popover = _resolveComponent("el-popover");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_popover, {
          placement: "top",
          width: 160,
          visible: _ctx.visible,
          "onUpdate:visible": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.visible = $event;
          })
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[3] || (_cache[3] = function ($event) {
                return _ctx.visible = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
              size: "mini",
              type: "text",
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "primary",
              size: "mini",
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.visible = false;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 8, ["visible"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            visible: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/popover.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/popover.md



popovervue_type_script_lang_ts.render = popovervue_type_template_id_59529d30_render

/* harmony default export */ var popover = __webpack_exports__["default"] = (popovervue_type_script_lang_ts);

/***/ })

}]);