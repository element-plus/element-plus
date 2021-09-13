(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[256],{

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/pagination.md?vue&type=template&id=aaa1fc04

const paginationvue_type_template_id_aaa1fc04_hoisted_1 = {
  class: "content element-doc"
};

const paginationvue_type_template_id_aaa1fc04_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ページネーション ");

const paginationvue_type_template_id_aaa1fc04_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "データが多すぎて 1 ページに表示できない場合は、ページネーションを使用します。", -1);

const paginationvue_type_template_id_aaa1fc04_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const paginationvue_type_template_id_aaa1fc04_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カンマで区切って表示したいページネーション要素を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定します。ページネーション要素は以下の通りです。prev"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " (前のページに移動するボタン)、"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("next"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " (次のページに移動するボタン)、"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("pager"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " (ページリスト)、"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("jumper"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " (入力へのジャンプ)、"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("total"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " (アイテムの合計数)、"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " (ページサイズを決定するための選択)、そして"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("->` (このシンボル以降のすべての要素が右に引っ張られる)です。")])], -1);

const paginationvue_type_template_id_aaa1fc04_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">When you have few pages</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">When you have more than 7 pages</span>\n    <el-pagination layout=\"prev, pager, next\" :total=\"1000\"> </el-pagination>\n  </div>\n</template>\n")], -1);

const paginationvue_type_template_id_aaa1fc04_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ページャー数 ");

const paginationvue_type_template_id_aaa1fc04_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("デフォルトでは、ページネーションは 7 ページを超えると余分なページャーボタンを折りたたむようになっています。これは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "pager-count"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性で設定できます。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination\n    :page-size=\"20\"\n    :pager-count=\"11\"\n    layout=\"prev, pager, next\"\n    :total=\"1000\"\n  >\n  </el-pagination>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("背景色のあるボタン ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "background"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性を設定すると、ボタンの背景色が設定されます。")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination background layout=\"prev, pager, next\" :total=\"1000\">\n  </el-pagination>\n</template>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("小さなページネーション ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "スペースが限られている場合は、小さなページネーションを使用します。", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定するだけで、ページネーションが小さくなります。")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-pagination small layout=\"prev, pager, next\" :total=\"50\"> </el-pagination>\n</template>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("その他の要素 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "シナリオに基づいてモジュールを追加します。", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("この例は完全なユースケースです。ページサイズの変更と現在のページの変更を扱うために "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" イベントを利用しています。例えば、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("は 4 つのオプションを持つことを示しています。例えば、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は select に 4 つのオプションがあることを示します。")])], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Total item count</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage1\"\n      :page-size=\"100\"\n      layout=\"total, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Change page size</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage2\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"sizes, prev, pager, next\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Jump to</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage3\"\n      :page-size=\"100\"\n      layout=\"prev, pager, next, jumper\"\n      :total=\"1000\"\n    >\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">All combined</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage4\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"total, sizes, prev, pager, next, jumper\"\n      :total=\"400\"\n    >\n    </el-pagination>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleSizeChange(val) {\n        console.log(`${val} items per page`)\n      },\n      handleCurrentChange(val) {\n        console.log(`current page: ${val}`)\n      },\n    },\n    data() {\n      return {\n        currentPage1: 5,\n        currentPage2: 5,\n        currentPage3: 5,\n        currentPage4: 4,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleSizeChange = (val) => {\n        console.log(`${val} items per page`);\n      };\n      const handleCurrentChange = (val) => {\n        console.log(`current page: ${val}`);\n      };\n\n      return {\n        currentPage1: ref(5),\n        currentPage2: ref(5),\n        currentPage3: ref(5),\n        currentPage4: ref(4),\n        handleSizeChange,\n        handleCurrentChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("1 ページしかない場合はページネーションを隠す ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ページが 1 ページしかない場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hide-on-single-page"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定してページネーションを隠す。")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-switch v-model=\"value\"> </el-switch>\n    <el-pagination\n      :hide-on-single-page=\"value\"\n      :total=\"5\"\n      layout=\"prev, pager, next\"\n    >\n    </el-pagination>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false,\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>small</td><td>小さなページネーションの有無</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background</td><td>ボタンに背景色があるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>page-size</td><td>各ページの項目数 v-model 双方向バインディングをサポートします。</td><td>number</td><td>—</td><td>10</td></tr><tr><td>total</td><td>総項目数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>ページ数の合計を指定します。<code>total</code>か<code>page-count</code>のいずれかを設定するとページが表示されます。もし <code>page-sizes</code>が必要な場合は<code>total</code>が必要です。</td><td>number</td><td>—</td><td>—</td></tr><tr><td>pager-count</td><td>ページャーの数を指定します。ページ数の合計がこの値を超えるとページネーションが崩れます。</td><td>number</td><td>odd number between 5 and 21</td><td>7</td></tr><tr><td>current-page</td><td>現在のページ番号 v-model 双方向バインディングをサポートします。</td><td>number</td><td>—</td><td>1</td></tr><tr><td>layout</td><td>ページネーションのレイアウト、カンマで区切られた要素</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, -&gt;, total&#39;</td></tr><tr><td>page-sizes</td><td>ページあたりの項目数のオプション</td><td>number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>ページサイズセレクトドロップダウンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>前ボタンのテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>次のボタン用テキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>ページネーションが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>1 ページしかないときに非表示にするかどうか</td><td>boolean</td><td>—</td><td>-</td></tr></tbody></table>", 1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イベント ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>size-change</td><td><code>page-size</code> が変更されたときにトリガされる</td><td>the new page size</td></tr><tr><td>current-change</td><td><code>current-page</code> が変更されたときにトリガされる</td><td>the new current page</td></tr><tr><td>prev-click</td><td>前ボタンがクリックされ、現在のページが変更されたときに発生します。</td><td>the new current page</td></tr><tr><td>next-click</td><td>次ボタンがクリックされ、現在のページが変更されたときに発生します。</td><td>the new current page</td></tr></tbody></table>", 1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スロット ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタムコンテンツ。利用するためには"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("で"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("を宣言する必要があります。")])])])], -1);

function paginationvue_type_template_id_aaa1fc04_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", paginationvue_type_template_id_aaa1fc04_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "pezinesiyon",
    content: "ページネーション",
    href: "#pezinesiyon",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_aaa1fc04_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#pezinesiyon"
    })]),
    _: 1
  }), paginationvue_type_template_id_aaa1fc04_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-de-nashi-ifang",
    content: "基本的な使い方",
    href: "#ji-ben-de-nashi-ifang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_aaa1fc04_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-de-nashi-ifang"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_aaa1fc04_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_aaa1fc04_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "peziyashu",
    content: "ページャー数",
    href: "#peziyashu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_aaa1fc04_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#peziyashu"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [paginationvue_type_template_id_aaa1fc04_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bei-jing-se-noarubotan",
    content: "背景色のあるボタン",
    href: "#bei-jing-se-noarubotan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bei-jing-se-noarubotan"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xiao-sanapezinesiyon",
    content: "小さなページネーション",
    href: "#xiao-sanapezinesiyon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiao-sanapezinesiyon"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sonota-noyao-su",
    content: "その他の要素",
    href: "#sonota-noyao-su",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sonota-noyao-su"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "one-pezisikanaichang-he-hapezinesiyonwoyin-su",
    content: "1 ページしかない場合はページネーションを隠す",
    href: "#one-pezisikanaichang-he-hapezinesiyonwoyin-su",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-pezisikanaichang-he-hapezinesiyonwoyin-su"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ibento"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#surotuto"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/pagination.md?vue&type=template&id=aaa1fc04

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/pagination.md?vue&type=script&lang=ts

/* harmony default export */ var paginationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "When you have few pages", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "When you have more than 7 pages", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 50
        })]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 1000
        })])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          "page-size": 20,
          "pager-count": 11,
          layout: "prev, pager, next",
          total: 1000
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          background: "",
          layout: "prev, pager, next",
          total: 1000
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_pagination, {
          small: "",
          layout: "prev, pager, next",
          total: 50
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Total item count", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Change page size", -1);

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Jump to", -1);

      const _hoisted_7 = {
        class: "block"
      };

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "All combined", -1);

      function render(_ctx, _cache) {
        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage1,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = $event => _ctx.currentPage1 = $event),
          "page-size": 100,
          layout: "total, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage2,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = $event => _ctx.currentPage2 = $event),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "sizes, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage3,
          "onUpdate:currentPage": _cache[2] || (_cache[2] = $event => _ctx.currentPage3 = $event),
          "page-size": 100,
          layout: "prev, pager, next, jumper",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createElementVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage4,
          "onUpdate:currentPage": _cache[3] || (_cache[3] = $event => _ctx.currentPage4 = $event),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "total, sizes, prev, pager, next, jumper",
          total: 400
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])])]);
      }

      const democomponentExport = {
        methods: {
          handleSizeChange(val) {
            console.log(`${val} items per page`);
          },

          handleCurrentChange(val) {
            console.log(`current page: ${val}`);
          }

        },

        data() {
          return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
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
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event)
        }, null, 8, ["modelValue"]), _createVNode(_component_el_pagination, {
          "hide-on-single-page": _ctx.value,
          total: 5,
          layout: "prev, pager, next"
        }, null, 8, ["hide-on-single-page"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: false
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
// CONCATENATED MODULE: ./website/docs/jp/pagination.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/pagination.md



paginationvue_type_script_lang_ts.render = paginationvue_type_template_id_aaa1fc04_render

/* harmony default export */ var pagination = __webpack_exports__["default"] = (paginationvue_type_script_lang_ts);

/***/ })

}]);