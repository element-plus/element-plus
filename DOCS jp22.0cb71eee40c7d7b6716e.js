(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[232],{

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/dialog.md?vue&type=template&id=46a039a1

const dialogvue_type_template_id_46a039a1_hoisted_1 = {
  class: "content element-doc"
};

const dialogvue_type_template_id_46a039a1_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "現在のページの状態を保持したまま、ユーザーに情報を提供します。", -1);

const dialogvue_type_template_id_46a039a1_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const dialogvue_type_template_id_46a039a1_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "dialog は dialog ボックスをポップアップ表示します。", -1);

const dialogvue_type_template_id_46a039a1_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定し、それが "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" のときに dialog を表示します。dialog は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" の 2 つの部分からなり、後者は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" という名前の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "スロット"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を必要とします。オプションの "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性 (デフォルトでは空) はタイトルを定義するためのものです。最後に、この例では "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" がどのように使われるかを示します。")])], -1);

const dialogvue_type_template_id_46a039a1_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogVisible = true\"\n  >click to open the Dialog</el-button\n>\n\n<el-dialog\n  title=\"Tips\"\n  v-model=\"dialogVisible\"\n  width=\"30%\"\n  :before-close=\"handleClose\"\n>\n  <span>This is a message</span>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"dialogVisible = false\"\n        >Confirm</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogVisible: false,\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Are you sure to close this dialog?')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      const dialogVisible = ref(false);\n      \n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('Are you sure to close this dialog?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        dialogVisible,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" はユーザが閉じるアイコンか背景をクリックしたときにのみ動作します。footer"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "という名前のスロットにdialogを閉じるボタンがある場合、ボタンのクリックイベントハンドラに"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "と同じように"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("before-close` を追加することができます。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタマイズ ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "dialog の内容は何でも構いません、テーブルやフォームであっても構いません。この例では、要素テーブルとフォームを dialog で使う方法を示しています。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"dialogTableVisible = true\"\n  >open a Table nested Dialog</el-button\n>\n\n<el-dialog title=\"Shipping address\" v-model=\"dialogTableVisible\">\n  <el-table :data=\"gridData\">\n    <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n    <el-table-column property=\"name\" label=\"Name\" width=\"200\"></el-table-column>\n    <el-table-column property=\"address\" label=\"Address\"></el-table-column>\n  </el-table>\n</el-dialog>\n\n<!-- Form -->\n<el-button type=\"text\" @click=\"dialogFormVisible = true\"\n  >open a Form nested Dialog</el-button\n>\n\n<el-dialog title=\"Shipping address\" v-model=\"dialogFormVisible\">\n  <el-form :model=\"form\">\n    <el-form-item label=\"Promotion name\" :label-width=\"formLabelWidth\">\n      <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n    </el-form-item>\n    <el-form-item label=\"Zones\" :label-width=\"formLabelWidth\">\n      <el-select v-model=\"form.region\" placeholder=\"Please select a zone\">\n        <el-option label=\"Zone No.1\" value=\"shanghai\"></el-option>\n        <el-option label=\"Zone No.2\" value=\"beijing\"></el-option>\n      </el-select>\n    </el-form-item>\n  </el-form>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"dialogFormVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"dialogFormVisible = false\"\n        >Confirm</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-03',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '120px',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-04',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-01',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n          {\n            date: '2016-05-03',\n            name: 'John Smith',\n            address: 'No.1518,  Jinshajiang Road, Putuo District',\n          },\n        ],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '120px',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ネストされた dialog ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ある dialog が他の dialog にネストになっている場合は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" が必要です。")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通常、ネストになった dialog を使うことはお勧めしません。複数の dialog をページ上でレンダリングしたい場合は、単にそれらをフラットにして隣接することができます。dialog を別の dialog の中に入れ子にしなければならない場合は、入れ子にした dialog の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を true に設定すると、親ノードではなくボディに追加され、両方の dialog が正しくレンダリングされます。")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-button type=\"text\" @click=\"outerVisible = true\"\n    >open the outer Dialog</el-button\n  >\n\n  <el-dialog title=\"Outer Dialog\" v-model=\"outerVisible\">\n    <el-dialog\n      width=\"30%\"\n      title=\"Inner Dialog\"\n      v-model=\"innerVisible\"\n      append-to-body\n    >\n    </el-dialog>\n    <template #footer>\n      <div class=\"dialog-footer\">\n        <el-button @click=\"outerVisible = false\">Cancel</el-button>\n        <el-button type=\"primary\" @click=\"innerVisible = true\"\n          >open the inner Dialog</el-button\n        >\n      </div>\n    </template>\n  </el-dialog>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        outerVisible: false,\n        innerVisible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        outerVisible: ref(false),\n        innerVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("中央揃えコンテンツ ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "dialog の内容を中央揃えにすることができます。", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定すると、dialog のヘッダとフッタを水平方向に中央揃えにします。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("は Dialog のヘッダとフッタにのみ影響します。dialog のボディは何でもいいので、中央揃えにすると見栄えが悪くなることがあります。ボディも中央揃えにしたい場合は、CSS を書く必要があります。")])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\"\n  >Click to open the Dialog</el-button\n>\n\n<el-dialog title=\"Warning\" v-model=\"centerDialogVisible\" width=\"30%\" center>\n  <span\n    >It should be noted that the content will not be aligned in center by\n    default</span\n  >\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\"\n        >Confirm</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        centerDialogVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("dialog の内容は遅延的にレンダリングされます。つまり、デフォルトのスロットは最初に開かれるまで DOM にレンダリングされません。したがって、DOM の操作を行ったり "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を使ってコンポーネントにアクセスする必要がある場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" イベントコールバックで行います。")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("dialog 内の要素を破棄する (translation needed) ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When this is feature is enabled, the content under default slot will be destroyed with a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-if"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" directive. Enable this when you have perf concerns.")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Note that by enabling this feature, the content will not be rendered before "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "transition.beforeEnter"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" dispatched, there will only be "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "overlay"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "header(if any)"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "footer(if any)"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"centerDialogVisible = true\"\n  >Click to open Dialog</el-button\n>\n\n<el-dialog\n  title=\"Notice\"\n  v-model=\"centerDialogVisible\"\n  width=\"30%\"\n  destroy-on-close\n  center\n>\n  <span\n    >Notice: before dialog gets opened for the first time this node and the one\n    bellow will not be rendered</span\n  >\n  <div>\n    <strong>Extra content (Not rendered)</strong>\n  </div>\n  <template #footer>\n    <span class=\"dialog-footer\">\n      <el-button @click=\"centerDialogVisible = false\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"centerDialogVisible = false\"\n        >Confirm</el-button\n      >\n    </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        centerDialogVisible: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When using "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" = false, please make sure that "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" was set to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", because "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" was positioned by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "position: relative"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", when "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "modal"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" gets removed, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will position itself based on the current position in the DOM, instead of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Document.Body"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", thus the style will be messed up.")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>dialog の可視性</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>title</td><td>dialog のタイトルを指定します。名前付きスロットで渡すこともできます (次のテーブルを参照してください)。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>dialog の幅</td><td>string / number</td><td>—</td><td>50%</td></tr><tr><td>fullscreen</td><td>dialog が全画面を占めるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>top</td><td>dialogCSS の <code>margin-top</code> の値</td><td>string</td><td>—</td><td>15vh</td></tr><tr><td>modal</td><td>マスクが表示されているかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>dialog 自身をボディに追加するかどうかを指定します。入れ子になった dialog は、この属性を <code>true</code> に設定しなければなりません。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>dialog 表示中にボディのスクロールを無効にするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>dialog 用のカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>open-delay</td><td>Time(milliseconds) before open</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Time(milliseconds) before close</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-on-click-modal</td><td>マスクをクリックして dialog を閉じることができるかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>ESC を押して dialog を閉じることができるかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>閉じるボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>コールバックを使用することで、dialog が閉じるのを防ぐことができます。</td><td>function(done)，done is used to close the Dialog</td><td>—</td><td>—</td></tr><tr><td>center</td><td>ヘッダーとフッターを中央に配置するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>destroy-on-close</td><td>dialog を閉じたときに dialog 内の要素を破棄する</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スロット ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>dialog の内容</td></tr><tr><td>title</td><td>dialog タイトルの内容</td></tr><tr><td>footer</td><td>dialog フッターの内容</td></tr></tbody></table>", 1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イベント ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>dialog が開いたときにトリガーされます。</td><td>—</td></tr><tr><td>opened</td><td>dialog のオープニングアニメーションが終了したときにトリガーされます。</td><td>—</td></tr><tr><td>close</td><td>dialog が閉じたときにトリガーされます。</td><td>—</td></tr><tr><td>closed</td><td>dialog 終了アニメーションの終了時にトリガーされます。</td><td>—</td></tr></tbody></table>", 1);

function dialogvue_type_template_id_46a039a1_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", dialogvue_type_template_id_46a039a1_hoisted_1, [dialogvue_type_template_id_46a039a1_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dialogvue_type_template_id_46a039a1_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), dialogvue_type_template_id_46a039a1_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dialogvue_type_template_id_46a039a1_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dialogvue_type_template_id_46a039a1_hoisted_5]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamaizu",
    content: "カスタマイズ",
    href: "#kasutamaizu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamaizu"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "nesutosareta-dialog",
    content: "ネストされた dialog",
    href: "#nesutosareta-dialog",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nesutosareta-dialog"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhong-yang-jian-ekontentu",
    content: "中央揃えコンテンツ",
    href: "#zhong-yang-jian-ekontentu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhong-yang-jian-ekontentu"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dialog-nei-noyao-su-wopo-qi-suru-translation-needed",
    content: "dialog 内の要素を破棄する (translation needed)",
    href: "#dialog-nei-noyao-su-wopo-qi-suru-translation-needed",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dialog-nei-noyao-su-wopo-qi-suru-translation-needed"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, _hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#surotuto"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ibento"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/dialog.md?vue&type=template&id=46a039a1

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/dialog.md?vue&type=script&lang=ts

/* harmony default export */ var dialogvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("click to open the Dialog");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "This is a message", -1);

      const _hoisted_3 = {
        class: "dialog-footer"
      };

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.dialogVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Tips",
          modelValue: _ctx.dialogVisible,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.dialogVisible = $event),
          width: "30%",
          "before-close": _ctx.handleClose
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.dialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[2] || (_cache[2] = $event => _ctx.dialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })])]),
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue", "before-close"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dialogVisible: false
          };
        },

        methods: {
          handleClose(done) {
            this.$confirm('Are you sure to close this dialog?').then(_ => {
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("open a Table nested Dialog");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("open a Form nested Dialog");

      const _hoisted_3 = {
        class: "dialog-footer"
      };

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_table_column = _resolveComponent("el-table-column");

        const _component_el_table = _resolveComponent("el-table");

        const _component_el_dialog = _resolveComponent("el-dialog");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.dialogTableVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Shipping address",
          modelValue: _ctx.dialogTableVisible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.dialogTableVisible = $event)
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
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.dialogFormVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Shipping address",
          modelValue: _ctx.dialogFormVisible,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.dialogFormVisible = $event)
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
            onClick: _cache[5] || (_cache[5] = $event => _ctx.dialogFormVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[6] || (_cache[6] = $event => _ctx.dialogFormVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })])]),
          default: _withCtx(() => [_createVNode(_component_el_form, {
            model: _ctx.form
          }, {
            default: _withCtx(() => [_createVNode(_component_el_form_item, {
              label: "Promotion name",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_input, {
                modelValue: _ctx.form.name,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.form.name = $event),
                autocomplete: "off"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
              label: "Zones",
              "label-width": _ctx.formLabelWidth
            }, {
              default: _withCtx(() => [_createVNode(_component_el_select, {
                modelValue: _ctx.form.region,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.form.region = $event),
                placeholder: "Please select a zone"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_option, {
                  label: "Zone No.1",
                  value: "shanghai"
                }), _createVNode(_component_el_option, {
                  label: "Zone No.2",
                  value: "beijing"
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label-width"])]),
            _: 1
          }, 8, ["model"])]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("open the outer Dialog");

      const _hoisted_2 = {
        class: "dialog-footer"
      };

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("open the inner Dialog");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.outerVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Outer Dialog",
          modelValue: _ctx.outerVisible,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.outerVisible = $event)
        }, {
          footer: _withCtx(() => [_createElementVNode("div", _hoisted_2, [_createVNode(_component_el_button, {
            onClick: _cache[2] || (_cache[2] = $event => _ctx.outerVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[3] || (_cache[3] = $event => _ctx.innerVisible = true)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          })])]),
          default: _withCtx(() => [_createVNode(_component_el_dialog, {
            width: "30%",
            title: "Inner Dialog",
            modelValue: _ctx.innerVisible,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.innerVisible = $event),
            "append-to-body": ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            outerVisible: false,
            innerVisible: false
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open the Dialog");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "It should be noted that the content will not be aligned in center by default", -1);

      const _hoisted_3 = {
        class: "dialog-footer"
      };

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Cancel");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.centerDialogVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Warning",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.centerDialogVisible = $event),
          width: "30%",
          center: ""
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_3, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_4]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[2] || (_cache[2] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          })])]),
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            centerDialogVisible: false
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
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Click to open Dialog");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", null, "Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered", -1);

      const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, [/*#__PURE__*/_createElementVNode("strong", null, "Extra content (Not rendered)")], -1);

      const _hoisted_4 = {
        class: "dialog-footer"
      };

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Confirm");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dialog = _resolveComponent("el-dialog");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.centerDialogVisible = true)
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dialog, {
          title: "Notice",
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.centerDialogVisible = $event),
          width: "30%",
          "destroy-on-close": "",
          center: ""
        }, {
          footer: _withCtx(() => [_createElementVNode("span", _hoisted_4, [_createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_5]),
            _: 1
          }), _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[2] || (_cache[2] = $event => _ctx.centerDialogVisible = false)
          }, {
            default: _withCtx(() => [_hoisted_6]),
            _: 1
          })])]),
          default: _withCtx(() => [_hoisted_2, _hoisted_3]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            centerDialogVisible: false
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
// CONCATENATED MODULE: ./website/docs/jp/dialog.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/dialog.md



dialogvue_type_script_lang_ts.render = dialogvue_type_template_id_46a039a1_render

/* harmony default export */ var dialog = __webpack_exports__["default"] = (dialogvue_type_script_lang_ts);

/***/ })

}]);