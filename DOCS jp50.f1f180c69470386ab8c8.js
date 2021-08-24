(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[264],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/rate.md?vue&type=template&id=329756de

var ratevue_type_template_id_329756de_hoisted_1 = {
  class: "content element-doc"
};

var ratevue_type_template_id_329756de_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("レート ");

var ratevue_type_template_id_329756de_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "レーティングに使用", -1);

var ratevue_type_template_id_329756de_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基本的な使い方 ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("レートはレーティングスコアをいくつかのレベルに分割し、異なる背景色を使うことでこれらのレベルを区別することができます。デフォルトでは背景色は同じですが、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "colors"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性を用いて3つのレベルを反映させるために3つの要素を持つ配列を割り当てることができ、2つのしきい値は"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "low-threshold"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("と"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "high-threshold"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("で定義することができます。または、2つのレベル間のしきい値をキー、値を対応する色とするオブジェクトで割り当てることができます。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Default</span>\n  <el-rate v-model=\"value1\"></el-rate>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Color for different levels</span>\n  <el-rate\n    v-model=\"value2\"\n    :colors=\"colors\">\n  </el-rate>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: null,\n        value2: null,\n        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value1: ref(null),\n        value2: ref(null),\n        colors: ref(['#99A9BF', '#F7BA2A', '#FF9900']), // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("半選を許す ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "allow-half"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 半星の出現を許す")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<div class=\"block\">\n  <el-rate  v-model=\"value\"  allow-half />\n</div>\n\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(null),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テキスト付き ");

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "評価点を示すためのテキストの使用", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-text"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を追加して、Rateの右にテキストを表示するようにします。テキストは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を使って異なるスコアに割り当てることができます。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は配列で、長さが最大スコアの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と等しくなければなりません。")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :texts=\"['oops', 'disappointed', 'normal', 'good', 'great']\"\n  show-text>\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(null),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("その他のアイコン ");

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "異なるレートコンポーネントを区別するために、異なるアイコンを使用することができます。", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "icon-classes"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" には3つの要素を持つ配列か、2つのレベルの間のしきい値をキー、値を対応するアイコンクラスとするオブジェクトを渡すことで、アイコンをカスタマイズすることができます。この例では、非選択時にアイコンを設定するために "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "void-icon-class"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を利用しています。")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :icon-classes=\"iconClasses\"\n  void-icon-class=\"icon-rate-face-off\"\n  :colors=\"['#99A9BF', '#F7BA2A', '#FF9900']\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null,\n        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(null),\n        iconClasses: ref(['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']) // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("読み取り専用 ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "読み取り専用 Rateはレーティングスコアを表示するためのものです。半分星に対応しています。", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を用いてコンポーネントを読み取り専用にする。右側にレーティングスコアを表示するために "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-score"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を追加します。さらに、属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "score-template"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を用いてスコアのテンプレートを提供することもできます。これは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を含んでいなければならず、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" はレーティングスコアに置き換えられます。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  disabled\n  show-score\n  text-color=\"#ff9900\"\n  score-template=\"{value} points\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 3.7\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        value: ref(3.7),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性 ");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>最大レーティングスコア</td><td>number</td><td>—</td><td>5</td></tr><tr><td>disabled</td><td>レートが読み取り専用かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-half</td><td>ピッキングハーフスタートが許可されているか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>low-threshold</td><td>低レベルと中レベルの間のしきい値。値自体は、低レベルに含まれる</td><td>number</td><td>—</td><td>2</td></tr><tr><td>high-threshold</td><td>中レベルと高レベルの間のしきい値。値自体は、中レベルに含まれる</td><td>number</td><td>—</td><td>4</td></tr><tr><td>colors</td><td>アイコンの色を指定します。配列の場合は 3 つの要素を持ち、それぞれがスコアレベルに対応していなければなりません。 オブジェクトの場合は、キーは 2 つのレベル間のしきい値で、値は対応する色でなければなりません。</td><td>array/object</td><td>—</td><td>[&#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;]</td></tr><tr><td>void-color</td><td>非選択アイコンの色</td><td>string</td><td>—</td><td>#C6D1DE</td></tr><tr><td>disabled-void-color</td><td>非選択時の読み取り専用アイコンの色</td><td>string</td><td>—</td><td>#EFF2F7</td></tr><tr><td>icon-classes</td><td>アイコンのクラス名を指定します。arrayの場合は3つの要素を持ち、それぞれがスコアレベルに対応していなければなりませんが、objectの場合は2つのレベル間の閾値がキーとなり、その値が対応するアイコンクラスとなります。</td><td>array/object</td><td>—</td><td>[&#39;el-icon-star-on&#39;, &#39;el-icon-star-on&#39;,&#39;el-icon-star-on&#39;]</td></tr><tr><td>void-icon-class</td><td>非選択アイコンのクラス名</td><td>string</td><td>—</td><td>el-icon-starオブジェクト</td></tr><tr><td>disabled-void-icon-class</td><td>非選択時読み取り専用アイコンのクラス名</td><td>string</td><td>—</td><td>el-icon-star-on</td></tr><tr><td>show-text</td><td>テキスト表示の有無</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-score</td><td>現在のスコアを表示するかどうか。show-score と show-text は同時にtrueにすることはできません。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text-color</td><td>テキストの色</td><td>string</td><td>—</td><td>#1F2D3D</td></tr><tr><td>texts</td><td>テキストの配列</td><td>array</td><td>—</td><td>[&#39;极差&#39;, &#39;失望&#39;, &#39;一般&#39;, &#39;满意&#39;, &#39;惊喜&#39;]</td></tr><tr><td>score-template</td><td>スコアテンプレート</td><td>string</td><td>—</td><td>{value}</td></tr></tbody></table>", 1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("イベント ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "change"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "レート値が変更されたときにトリガ"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "value after changing")])])], -1);

function ratevue_type_template_id_329756de_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", ratevue_type_template_id_329756de_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "reto",
    content: "レート",
    href: "#reto",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [ratevue_type_template_id_329756de_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#reto"
      })];
    }),
    _: 1
  }), ratevue_type_template_id_329756de_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-ben-dena-shii-fang",
    content: "基本的な使い方",
    href: "#ji-ben-dena-shii-fang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [ratevue_type_template_id_329756de_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-ben-dena-shii-fang"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ban-xuanwo-xusu",
    content: "半選を許す",
    href: "#ban-xuanwo-xusu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ban-xuanwo-xusu"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "tekisuto-fuki",
    content: "テキスト付き",
    href: "#tekisuto-fuki",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#tekisuto-fuki"
      })];
    }),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "sono-tanoaikon",
    content: "その他のアイコン",
    href: "#sono-tanoaikon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#sono-tanoaikon"
      })];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dumi-quri-zhuan-yong",
    content: "読み取り専用",
    href: "#dumi-quri-zhuan-yong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dumi-quri-zhuan-yong"
      })];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "shu-xing",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#shu-xing"
      })];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ibento",
    content: "イベント",
    href: "#ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ibento"
      })];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/rate.md?vue&type=template&id=329756de

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/rate.md?vue&type=script&lang=ts


/* harmony default export */ var ratevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Default", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Color for different levels", -1);

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_rate, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_rate, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          colors: _ctx.colors
        }, null, 8, ["modelValue", "colors"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: null,
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }

          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "allow-half": ""
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: null
          };
        }
      };
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
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
          "show-text": ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: null
          };
        }
      };
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
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "icon-classes": _ctx.iconClasses,
          "void-icon-class": "icon-rate-face-off",
          colors: ['#99A9BF', '#F7BA2A', '#FF9900']
        }, null, 8, ["modelValue", "icon-classes"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: null,
            iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }

          };
        }
      };
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
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          disabled: "",
          "show-score": "",
          "text-color": "#ff9900",
          "score-template": "{value} points"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: 3.7
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/rate.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/rate.md



ratevue_type_script_lang_ts.render = ratevue_type_template_id_329756de_render

/* harmony default export */ var rate = __webpack_exports__["default"] = (ratevue_type_script_lang_ts);

/***/ })

}]);