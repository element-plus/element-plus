(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[218],{

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/alert.md?vue&type=template&id=124d624c

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alert ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "重要な alert メッセージを表示します。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "alert コンポーネントは、自動的には消えないページ内の非オーバーレイ要素です。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("alert は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で定義された 4 種類のテーマを提供しており、デフォルト値は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" です。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"success alert\" type=\"success\"> </el-alert>\n  <el-alert title=\"info alert\" type=\"info\"> </el-alert>\n  <el-alert title=\"warning alert\" type=\"warning\"> </el-alert>\n  <el-alert title=\"error alert\" type=\"error\"> </el-alert>\n</template>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーマ ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("alert は、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ライト"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("と"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "ダーク"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("の 2 つの異なるテーマを提供しています。")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テーマを変更するために "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を設定します。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"success alert\" type=\"success\" effect=\"dark\"> </el-alert>\n  <el-alert title=\"info alert\" type=\"info\" effect=\"dark\"> </el-alert>\n  <el-alert title=\"warning alert\" type=\"warning\" effect=\"dark\"> </el-alert>\n  <el-alert title=\"error alert\" type=\"error\" effect=\"dark\"> </el-alert>\n</template>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("カスタマイズ可能なクローズボタン ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "閉じるボタンをテキストや他の記号にカスタマイズします。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("alert では、クローズ可能かどうかを設定することができます。閉じるボタンのテキストや閉じるコールバックもカスタマイズ可能です。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性はコンポーネントを閉じられるかどうかを決める。戻り値は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" で、デフォルトは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" です。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定することで、デフォルトの十字マークを閉じるボタンに置き換えることができます。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は文字列でなければならないので注意が必要である。コンポーネントが閉じられたときに "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" イベントが発生する。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"unclosable alert\" type=\"success\" :closable=\"false\">\n  </el-alert>\n  <el-alert title=\"customized close-text\" type=\"info\" close-text=\"Gotcha\">\n  </el-alert>\n  <el-alert title=\"alert with callback\" type=\"warning\" @close=\"hello\">\n  </el-alert>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const hello = () => {\n        alert('Hello World!')\n      }\n      return {\n        hello,\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("アイコン付き ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "アイコンを表示することで可読性が向上します。", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定すると、現在の alert タイプに対応するアイコンを表示します。")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"success alert\" type=\"success\" show-icon> </el-alert>\n  <el-alert title=\"info alert\" type=\"info\" show-icon> </el-alert>\n  <el-alert title=\"warning alert\" type=\"warning\" show-icon> </el-alert>\n  <el-alert title=\"error alert\" type=\"error\" show-icon> </el-alert>\n</template>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("中央揃えのテキスト ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("テキストを中央に配置するには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を使用します。")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"success alert\" type=\"success\" center show-icon> </el-alert>\n  <el-alert title=\"info alert\" type=\"info\" center show-icon> </el-alert>\n  <el-alert title=\"warning alert\" type=\"warning\" center show-icon> </el-alert>\n  <el-alert title=\"error alert\" type=\"error\" center show-icon> </el-alert>\n</template>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("説明文付き ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "説明には、より詳細な情報が記載されたメッセージが含まれています。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("必須の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性の他に、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を追加することで、alert をより詳細に説明することができます。説明はテキスト文字列のみを格納することができ、自動的にワードラップされます。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"with description\"\n    type=\"success\"\n    description=\"This is a description.\"\n  >\n  </el-alert>\n</template>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("アイコンと説明文付き ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "最後に、アイコンと説明文の例です。")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"success alert\"\n    type=\"success\"\n    description=\"more text description\"\n    show-icon\n  >\n  </el-alert>\n  <el-alert\n    title=\"info alert\"\n    type=\"info\"\n    description=\"more text description\"\n    show-icon\n  >\n  </el-alert>\n  <el-alert\n    title=\"warning alert\"\n    type=\"warning\"\n    description=\"more text description\"\n    show-icon\n  >\n  </el-alert>\n  <el-alert\n    title=\"error alert\"\n    type=\"error\"\n    description=\"more text description\"\n    show-icon\n  >\n  </el-alert>\n</template>\n")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性 ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>タイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>コンポーネントタイプ</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>description</td><td>説明的なテキスト。デフォルトのスロット</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closable</td><td>クローズ可能な場合かどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>center</td><td>テキストを中央に配置するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>close-text</td><td>カスタマイズしたクローズボタンのテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-icon</td><td>タイプアイコンが表示されているま</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>effect</td><td>テーマを選ぶ</td><td>string</td><td>light/dark</td><td>light</td></tr></tbody></table>", 1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("スロット ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "description")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "alert タイトルの内容")])])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("イベント ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "alert が閉じたときにトリガーされます"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")])])], -1);

function alertvue_type_template_id_124d624c_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "alert",
    content: "Alert",
    href: "#alert",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#alert"
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
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "tema",
    content: "テーマ",
    href: "#tema",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#tema"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "kasutamaizuke-neng-nakurozubotan",
    content: "カスタマイズ可能なクローズボタン",
    href: "#kasutamaizuke-neng-nakurozubotan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kasutamaizuke-neng-nakurozubotan"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "aikonfu-ki",
    content: "アイコン付き",
    href: "#aikonfu-ki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#aikonfu-ki"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhong-yang-jian-enotekisuto",
    content: "中央揃えのテキスト",
    href: "#zhong-yang-jian-enotekisuto",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhong-yang-jian-enotekisuto"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shuo-ming-wen-fu-ki",
    content: "説明文付き",
    href: "#shuo-ming-wen-fu-ki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shuo-ming-wen-fu-ki"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "aikontoshuo-ming-wen-fu-ki",
    content: "アイコンと説明文付き",
    href: "#aikontoshuo-ming-wen-fu-ki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#aikontoshuo-ming-wen-fu-ki"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "surotuto",
    content: "スロット",
    href: "#surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#surotuto"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ibento"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/alert.md?vue&type=template&id=124d624c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/alert.md?vue&type=script&lang=ts

/* harmony default export */ var alertvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
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
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
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
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
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

      const {
        defineComponent
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          const hello = () => {
            alert('Hello World!');
          };

          return {
            hello
          };
        }

      });
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
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
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

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
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

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "with description",
          type: "success",
          description: "This is a description."
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
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

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/alert.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/alert.md



alertvue_type_script_lang_ts.render = alertvue_type_template_id_124d624c_render

/* harmony default export */ var jp_alert = __webpack_exports__["default"] = (alertvue_type_script_lang_ts);

/***/ })

}]);