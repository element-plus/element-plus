(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[271],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/steps.md?vue&type=template&id=067cf796

const stepsvue_type_template_id_067cf796_hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップ ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "プロセスに沿ってタスクを完了するようにユーザーを誘導します。そのステップは、実際のアプリケーションのシナリオに応じて設定することができ、ステップの数は 2 以下にすることはできません。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本的な使い方 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "シンプルなステップバーです。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップのインデックスを示す "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 型の "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "active"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定する。 ステップの幅を固定する必要がある場合に "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定すると、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 型を受け付けることができる。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性の単位は "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "px"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" である。設定されていない場合はレスポンシブです。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "finish-status"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を設定すると、完了したステップの状態を変更することができる。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"active\" finish-status=\"success\">\n  <el-step title=\"Step 1\"></el-step>\n  <el-step title=\"Step 2\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n\n<el-button style=\"margin-top: 12px;\" @click=\"next\">Next step</el-button>\n\n<script>\n  export default {\n    data() {\n      return {\n        active: 0,\n      }\n    },\n\n    methods: {\n      next() {\n        if (this.active++ > 2) this.active = 0\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステータスを含むステップバー ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "各ステップのステータスを表示します。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップの名前を設定するには "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を使うか、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" という名前を使って属性をオーバーライドします。このページの最後に全てのスロット名をリストアップしました。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :space=\"200\" :active=\"1\" finish-status=\"success\">\n  <el-step title=\"Done\"></el-step>\n  <el-step title=\"Processing\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("センター ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "タイトルと説明文は中央揃えにすることができます。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"2\" align-center>\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 4\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップバーには説明文が表示されます。 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "各ステップの説明があります。", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 2\" description=\"Some description\"></el-step>\n  <el-step title=\"Step 3\" description=\"Some description\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップバー（アイコン付き） ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "ステップバーには様々なカスタムアイコンを使用することができます。", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("アイコンは "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" プロパティで設定します。アイコンの種類については、Icon コンポーネントのドキュメントを参照してください。さらに、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" を通じてアイコンをカスタマイズすることもできる。")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :active=\"1\">\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("垂直方向のステップバー ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "垂直方向のステップバー", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-steps"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 要素で "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性を"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" に設定するだけです。")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<div style=\"height: 300px;\">\n  <el-steps direction=\"vertical\" :active=\"1\">\n    <el-step title=\"Step 1\"></el-step>\n    <el-step title=\"Step 2\"></el-step>\n    <el-step title=\"Step 3\"></el-step>\n  </el-steps>\n</div>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("シンプルなステップバー ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("単純なステップバーで、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "align-center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "space"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" は無視されます。")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-steps :space=\"200\" :active=\"1\" simple>\n  <el-step title=\"Step 1\" icon=\"el-icon-edit\"></el-step>\n  <el-step title=\"Step 2\" icon=\"el-icon-upload\"></el-step>\n  <el-step title=\"Step 3\" icon=\"el-icon-picture\"></el-step>\n</el-steps>\n\n<el-steps :active=\"1\" finish-status=\"success\" simple style=\"margin-top: 20px\">\n  <el-step title=\"Step 1\"></el-step>\n  <el-step title=\"Step 2\"></el-step>\n  <el-step title=\"Step 3\"></el-step>\n</el-steps>\n")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップ属性 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>space</td><td>各ステップの間隔を指定し、省略した場合は応答します。パーセンテージをサポートしています。</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>表示方向</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>現在アクティブになっているステップ</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>現在のステップの状態</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>終了ステップの状態</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>センタータイトルと説明</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>simple</td><td>シンプルなテーマを適用するかどうか</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップ属性 ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>ステップタイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>ステップ記述</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>ステップアイコン</td><td>step icon&#39;s class name. Icons can be passed via named slot as well</td><td>string</td><td>—</td></tr><tr><td>status</td><td>現在の状態を表示します。設定されていない場合は、ステップスによって自動的に設定されます。</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table>", 1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("ステップスロット ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>カスタムアイコン</td></tr><tr><td>title</td><td>ステップタイトル</td></tr><tr><td>description</td><td>ステップ記述</td></tr></tbody></table>", 1);

function stepsvue_type_template_id_067cf796_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", stepsvue_type_template_id_067cf796_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutetupu",
    content: "ステップ",
    href: "#sutetupu",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetupu"
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
    id: "sutetasuwohan-musutetupuba",
    content: "ステータスを含むステップバー",
    href: "#sutetasuwohan-musutetupuba",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetasuwohan-musutetupuba"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "senta",
    content: "センター",
    href: "#senta",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#senta"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutetupubanihashuo-ming-wen-gabiao-shi-saremasu.",
    content: "ステップバーには説明文が表示されます。",
    href: "#sutetupubanihashuo-ming-wen-gabiao-shi-saremasu.",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetupubanihashuo-ming-wen-gabiao-shi-saremasu."
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutetupuba-aikonfu-ki",
    content: "ステップバー（アイコン付き）",
    href: "#sutetupuba-aikonfu-ki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetupuba-aikonfu-ki"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chui-zhi-fang-xiang-nosutetupuba",
    content: "垂直方向のステップバー",
    href: "#chui-zhi-fang-xiang-nosutetupuba",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chui-zhi-fang-xiang-nosutetupuba"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sinpurunasutetupuba",
    content: "シンプルなステップバー",
    href: "#sinpurunasutetupuba",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sinpurunasutetupuba"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutetupushu-xing",
    content: "ステップ属性",
    href: "#sutetupushu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetupushu-xing"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutetupushu-xing-2",
    content: "ステップ属性",
    href: "#sutetupushu-xing-2",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetupushu-xing-2"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sutetupusurotuto",
    content: "ステップスロット",
    href: "#sutetupusurotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sutetupusurotuto"
    })]),
    _: 1
  }), _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/steps.md?vue&type=template&id=067cf796

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/steps.md?vue&type=script&lang=ts

/* harmony default export */ var stepsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Next step");

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        const _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: _ctx.active,
          "finish-status": "success"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1"
          }), _createVNode(_component_el_step, {
            title: "Step 2"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
          })]),
          _: 1
        }, 8, ["active"]), _createVNode(_component_el_button, {
          style: {
            "margin-top": "12px"
          },
          onClick: _ctx.next
        }, {
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        data() {
          return {
            active: 0
          };
        },

        methods: {
          next() {
            if (this.active++ > 2) this.active = 0;
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          "finish-status": "success"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Done"
          }), _createVNode(_component_el_step, {
            title: "Processing"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
          })]),
          _: 1
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
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: 2,
          "align-center": ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 4",
            description: "Some description"
          })]),
          _: 1
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
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            description: "Some description"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            description: "Some description"
          })]),
          _: 1
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
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          active: 1
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            icon: "el-icon-edit"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            icon: "el-icon-upload"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            icon: "el-icon-picture"
          })]),
          _: 1
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
        withCtx: _withCtx,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "height": "300px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_steps, {
          direction: "vertical",
          active: 1
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1"
          }), _createVNode(_component_el_step, {
            title: "Step 2"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
          })]),
          _: 1
        })])]);
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
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_step = _resolveComponent("el-step");

        const _component_el_steps = _resolveComponent("el-steps");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_steps, {
          space: 200,
          active: 1,
          simple: ""
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1",
            icon: "el-icon-edit"
          }), _createVNode(_component_el_step, {
            title: "Step 2",
            icon: "el-icon-upload"
          }), _createVNode(_component_el_step, {
            title: "Step 3",
            icon: "el-icon-picture"
          })]),
          _: 1
        }), _createVNode(_component_el_steps, {
          active: 1,
          "finish-status": "success",
          simple: "",
          style: {
            "margin-top": "20px"
          }
        }, {
          default: _withCtx(() => [_createVNode(_component_el_step, {
            title: "Step 1"
          }), _createVNode(_component_el_step, {
            title: "Step 2"
          }), _createVNode(_component_el_step, {
            title: "Step 3"
          })]),
          _: 1
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
// CONCATENATED MODULE: ./website/docs/jp/steps.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/steps.md



stepsvue_type_script_lang_ts.render = stepsvue_type_template_id_067cf796_render

/* harmony default export */ var steps = __webpack_exports__["default"] = (stepsvue_type_script_lang_ts);

/***/ })

}]);