(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[219],{

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/alert.md?vue&type=template&id=e98a5944

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Alert ");

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "重要なalertメッセージを表示します。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基本的な使い方 ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "alertコンポーネントは、自動的には消えないページ内の非オーバーレイ要素です。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("alertは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で定義された4種類のテーマを提供しており、デフォルト値は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" です。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\">\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\">\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\">\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\">\n  </el-alert>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テーマ ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("alertは、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ライト"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("と"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ダーク"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("の2つの異なるテーマを提供しています。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テーマを変更するために "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を設定します。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    effect=\"dark\">\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    effect=\"dark\">\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    effect=\"dark\">\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    effect=\"dark\">\n  </el-alert>\n</template>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("カスタマイズ可能なクローズボタン ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "閉じるボタンをテキストや他の記号にカスタマイズします。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("alertでは、クローズ可能かどうかを設定することができます。閉じるボタンのテキストや閉じるコールバックもカスタマイズ可能です。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性はコンポーネントを閉じられるかどうかを決める。戻り値は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で、デフォルトは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" です。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を設定することで、デフォルトの十字マークを閉じるボタンに置き換えることができます。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は文字列でなければならないので注意が必要である。コンポーネントが閉じられたときに "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" イベントが発生する。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"unclosable alert\"\n    type=\"success\"\n    :closable=\"false\">\n  </el-alert>\n  <el-alert\n    title=\"customized close-text\"\n    type=\"info\"\n    close-text=\"Gotcha\">\n  </el-alert>\n  <el-alert\n    title=\"alert with callback\"\n    type=\"warning\"\n    @close=\"hello\">\n  </el-alert>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const hello = () => {\n        alert('Hello World!');\n      }\n      return {\n        hello\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("アイコン付き ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "アイコンを表示することで可読性が向上します。", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を設定すると、現在のalertタイプに対応するアイコンを表示します。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    show-icon>\n  </el-alert>\n</template>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("中央揃えのテキスト ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テキストを中央に配置するには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を使用します。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    center\n    show-icon>\n  </el-alert>\n</template>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("説明文付き ");

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "説明には、より詳細な情報が記載されたメッセージが含まれています。", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("必須の "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性の他に、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を追加することで、alertをより詳細に説明することができます。説明はテキスト文字列のみを格納することができ、自動的にワードラップされます。")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"with description\"\n    type=\"success\"\n    description=\"This is a description.\">\n  </el-alert>\n</template>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("アイコンと説明文付き ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "最後に、アイコンと説明文の例です。")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    description=\"more text description\"\n    show-icon>\n  </el-alert>\n</template>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性 ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>タイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>コンポーネントタイプ</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>description</td><td>説明的なテキスト。デフォルトのスロット</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closable</td><td>クローズ可能な場合かどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>center</td><td>テキストを中央に配置するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>close-text</td><td>カスタマイズしたクローズボタンのテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-icon</td><td>タイプアイコンが表示されているま</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>effect</td><td>テーマを選ぶ</td><td>string</td><td>light/dark</td><td>light</td></tr></tbody></table>", 1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("スロット ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "description")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "alertタイトルの内容")])])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("イベント ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "alertが閉じたときにトリガーされます"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")])])], -1);

function alertvue_type_template_id_e98a5944_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "alert",
    content: "Alert",
    href: "#alert",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#alert"
      })];
    }),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-ben-dena-shii-fang",
    content: "基本的な使い方",
    href: "#ji-ben-dena-shii-fang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-ben-dena-shii-fang"
      })];
    }),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "tema",
    content: "テーマ",
    href: "#tema",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#tema"
      })];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "kasutamaizu-ke-nengnakurozubotan",
    content: "カスタマイズ可能なクローズボタン",
    href: "#kasutamaizu-ke-nengnakurozubotan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#kasutamaizu-ke-nengnakurozubotan"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "aikon-fuki",
    content: "アイコン付き",
    href: "#aikon-fuki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#aikon-fuki"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "zhong-yang-jianenotekisuto",
    content: "中央揃えのテキスト",
    href: "#zhong-yang-jianenotekisuto",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#zhong-yang-jianenotekisuto"
      })];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "shuo-ming-wen-fuki",
    content: "説明文付き",
    href: "#shuo-ming-wen-fuki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#shuo-ming-wen-fuki"
      })];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "aikonto-shuo-ming-wen-fuki",
    content: "アイコンと説明文付き",
    href: "#aikonto-shuo-ming-wen-fuki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#aikonto-shuo-ming-wen-fuki"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#shu-xing"
      })];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#surotuto"
      })];
    }),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ibento"
      })];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/alert.md?vue&type=template&id=e98a5944

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/alert.md?vue&type=script&lang=ts


/* harmony default export */ var alertvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success"
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info"
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning"
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          effect: "dark"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "unclosable alert",
          type: "success",
          closable: false
        }), _createVNode(_component_el_alert, {
          title: "customized close-text",
          type: "info",
          "close-text": "Gotcha"
        }), _createVNode(_component_el_alert, {
          title: "alert with callback",
          type: "warning",
          onClose: _ctx.hello
        }, null, 8, ["onClose"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var hello = function hello() {
            alert('Hello World!');
          };

          return {
            hello: hello
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          "show-icon": ""
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          center: "",
          "show-icon": ""
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "with description",
          type: "success",
          description: "This is a description."
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_alert, {
          title: "success alert",
          type: "success",
          description: "more text description",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "info alert",
          type: "info",
          description: "more text description",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "warning alert",
          type: "warning",
          description: "more text description",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "error alert",
          type: "error",
          description: "more text description",
          "show-icon": ""
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/alert.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/alert.md



alertvue_type_script_lang_ts.render = alertvue_type_template_id_e98a5944_render

/* harmony default export */ var jp_alert = __webpack_exports__["default"] = (alertvue_type_script_lang_ts);

/***/ })

}]);