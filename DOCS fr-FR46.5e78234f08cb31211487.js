(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[172],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/rate.md?vue&type=template&id=12950cab

var ratevue_type_template_id_12950cab_hoisted_1 = {
  class: "content element-doc"
};

var ratevue_type_template_id_12950cab_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "reto"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#reto"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" レート")], -1);

var ratevue_type_template_id_12950cab_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "レーティングに使用", -1);

var ratevue_type_template_id_12950cab_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("レートはレーティングスコアをいくつかのレベルに分割し、異なる背景色を使うことでこれらのレベルを区別することができます。デフォルトでは背景色は同じですが、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colors"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性を用いて3つのレベルを反映させるために3つの要素を持つ配列を割り当てることができ、2つのしきい値は"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "low-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("と"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "high-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("で定義することができます。または、2つのレベル間のしきい値をキー、値を対応する色とするオブジェクトで割り当てることができます。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Default</span>\n  <el-rate v-model=\"value1\"></el-rate>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Color for different levels</span>\n  <el-rate\n    v-model=\"value2\"\n    :colors=\"colors\">\n  </el-rate>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: null,\n        value2: null,\n        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ban-xuanwo-xusu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ban-xuanwo-xusu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 半選を許す")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-half"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 半星の出現を許す")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<div class=\"block\">\n  <el-rate  v-model=\"value\"  allow-half />\n</div>\n\n\n<script>\nimport { defineComponent, ref } from 'vue'\n  export default {\n    setup() {\n      return {\n        value: ref(null)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tekisuto-fuki"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tekisuto-fuki"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" テキスト付き")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "評価点を示すためのテキストの使用", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を追加して、Rateの右にテキストを表示するようにします。テキストは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使って異なるスコアに割り当てることができます。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は配列で、長さが最大スコアの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と等しくなければなりません。")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :texts=\"['oops', 'disappointed', 'normal', 'good', 'great']\"\n  show-text>\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "sono-tanoaikon"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sono-tanoaikon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" その他のアイコン")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "異なるレートコンポーネントを区別するために、異なるアイコンを使用することができます。", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "icon-classes"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" には3つの要素を持つ配列か、2つのレベルの間のしきい値をキー、値を対応するアイコンクラスとするオブジェクトを渡すことで、アイコンをカスタマイズすることができます。この例では、非選択時にアイコンを設定するために "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "void-icon-class"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を利用しています。")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :icon-classes=\"iconClasses\"\n  void-icon-class=\"icon-rate-face-off\"\n  :colors=\"['#99A9BF', '#F7BA2A', '#FF9900']\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null,\n        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dumi-quri-zhuan-yong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dumi-quri-zhuan-yong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 読み取り専用")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "読み取り専用 Rateはレーティングスコアを表示するためのものです。半分星に対応しています。", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いてコンポーネントを読み取り専用にする。右側にレーティングスコアを表示するために "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-score"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を追加します。さらに、属性 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "score-template"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いてスコアのテンプレートを提供することもできます。これは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を含んでいなければならず、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" はレーティングスコアに置き換えられます。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  disabled\n  show-score\n  text-color=\"#ff9900\"\n  score-template=\"{value} points\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 3.7\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>バインディング値</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>最大レーティングスコア</td><td>number</td><td>—</td><td>5</td></tr><tr><td>disabled</td><td>レートが読み取り専用かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-half</td><td>ピッキングハーフスタートが許可されているか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>low-threshold</td><td>低レベルと中レベルの間のしきい値。値自体は、低レベルに含まれる</td><td>number</td><td>—</td><td>2</td></tr><tr><td>high-threshold</td><td>中レベルと高レベルの間のしきい値。値自体は、中レベルに含まれる</td><td>number</td><td>—</td><td>4</td></tr><tr><td>colors</td><td>アイコンの色を指定します。配列の場合は 3 つの要素を持ち、それぞれがスコアレベルに対応していなければなりません。 オブジェクトの場合は、キーは 2 つのレベル間のしきい値で、値は対応する色でなければなりません。</td><td>array/object</td><td>—</td><td>[&#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;]</td></tr><tr><td>void-color</td><td>非選択アイコンの色</td><td>string</td><td>—</td><td>#C6D1DE</td></tr><tr><td>disabled-void-color</td><td>非選択時の読み取り専用アイコンの色</td><td>string</td><td>—</td><td>#EFF2F7</td></tr><tr><td>icon-classes</td><td>アイコンのクラス名を指定します。arrayの場合は3つの要素を持ち、それぞれがスコアレベルに対応していなければなりませんが、objectの場合は2つのレベル間の閾値がキーとなり、その値が対応するアイコンクラスとなります。</td><td>array/object</td><td>—</td><td>[&#39;el-icon-star-on&#39;, &#39;el-icon-star-on&#39;,&#39;el-icon-star-on&#39;]</td></tr><tr><td>void-icon-class</td><td>非選択アイコンのクラス名</td><td>string</td><td>—</td><td>el-icon-starオブジェクト</td></tr><tr><td>disabled-void-icon-class</td><td>非選択時読み取り専用アイコンのクラス名</td><td>string</td><td>—</td><td>el-icon-star-on</td></tr><tr><td>show-text</td><td>テキスト表示の有無</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-score</td><td>現在のスコアを表示するかどうか。show-score と show-text は同時にtrueにすることはできません。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text-color</td><td>テキストの色</td><td>string</td><td>—</td><td>#1F2D3D</td></tr><tr><td>texts</td><td>テキストの配列</td><td>array</td><td>—</td><td>[&#39;极差&#39;, &#39;失望&#39;, &#39;一般&#39;, &#39;满意&#39;, &#39;惊喜&#39;]</td></tr><tr><td>score-template</td><td>スコアテンプレート</td><td>string</td><td>—</td><td>{value}</td></tr></tbody></table><h3 id=\"ibento\"><a class=\"header-anchor\" href=\"#ibento\">¶</a> イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>レート値が変更されたときにトリガ</td><td>value after changing</td></tr></tbody></table>", 4);

function ratevue_type_template_id_12950cab_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", ratevue_type_template_id_12950cab_hoisted_1, [ratevue_type_template_id_12950cab_hoisted_2, ratevue_type_template_id_12950cab_hoisted_3, ratevue_type_template_id_12950cab_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22]);
}
// CONCATENATED MODULE: ./website/docs/jp/rate.md?vue&type=template&id=12950cab

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/rate.md?vue&type=script&lang=ts


/* harmony default export */ var ratevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
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

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = {
        setup: function setup() {
          return {
            value: ref(null)
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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



ratevue_type_script_lang_ts.render = ratevue_type_template_id_12950cab_render

/* harmony default export */ var rate = __webpack_exports__["default"] = (ratevue_type_script_lang_ts);

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/rate.md?vue&type=template&id=07761b9c

var ratevue_type_template_id_07761b9c_hoisted_1 = {
  class: "content element-doc"
};

var ratevue_type_template_id_07761b9c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "rate"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rate"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Rate")], -1);

var ratevue_type_template_id_07761b9c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Utilisé pour donner une note sur cinq étoiles.", -1);

var ratevue_type_template_id_07761b9c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Rate divise les scores en trois niveaux et ces niveaux peuvent être distingués en utilisant différentes couleurs de fond. Par défaut ces couleurs sont identiques, mais vous pouvez affecter un tableau des codes couleur à l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colors"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", ainsi que les deux seuils via "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "low-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "high-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Vous pouvez aussi les affecter avec un objet dont la clé est le seuil et la valeur est la couleur correspondante.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Défaut</span>\n  <el-rate v-model=\"value1\"></el-rate>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Couleurs pour chaque niveau</span>\n  <el-rate\n    v-model=\"value2\"\n    :colors=\"colors\">\n  </el-rate>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: null,\n        value2: null,\n        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "demi-selection-autorisee"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#demi-selection-autorisee"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Demi-sélection autorisée")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajoutez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-half"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Demi-étoile autorisée")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<div class=\"block\">\n  <el-rate  v-model=\"value\"  allow-half />\n</div>\n\n\n<script>\nimport { defineComponent, ref } from 'vue'\n  export default {\n    setup() {\n      return {\n        value: ref(null)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "avec-du-texte"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#avec-du-texte"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Avec du texte")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez ajouter du texte à chaque score.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajoutez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour afficher du texte à droite des étoiles. Vous pouvez choisir les textes avec l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". C'est un tableau dont la taille doit être égale au score max "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :texts=\"['oops', 'disappointed', 'normal', 'good', 'great']\"\n  show-text>\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "plus-d-icones"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#plus-d-icones"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Plus d'icônes")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez utiliser différentes icônes pour chaque", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Vous pouvez personnaliser les icônes en passant à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "icon-classes"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" un tableau avec trois éléments ou un objet dont la clé est le seuil entre deux niveaux et la valeur la classe d'icônes correspondante. Dans cet exemple, nous utilisons aussi "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "void-icon-class"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" qui permet de choisir d'autres valeurs non sélectionnées.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :icon-classes=\"iconClasses\"\n  void-icon-class=\"icon-rate-face-off\"\n  :colors=\"['#99A9BF', '#F7BA2A', '#FF9900']\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null,\n        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }\n      }\n  }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "lecture-seule"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#lecture-seule"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Lecture seule")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Le score peut être en lecture seule. Les demi-étoiles sont supportées.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour mettre le composant en lecture seule. Ajoutez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-score"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour afficher le score à droite des étoiles. De plus, vous pouvez utiliser "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "score-template"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour déterminer un template. Il doit contenir "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" qui sera remplacé par la valeur du score.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  disabled\n  show-score\n  text-color=\"#ff9900\"\n  score-template=\"{value} points\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 3.7\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>La valeur liée.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>Score maximum.</td><td>number</td><td>—</td><td>5</td></tr><tr><td>disabled</td><td>Si le score est en lecture seule.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-half</td><td>Si les demi-étoiles sont autorisées.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>low-threshold</td><td>Seuil entre les niveaux bas et moyen. La valeur sera incluse dans le niveau bas.</td><td>number</td><td>—</td><td>2</td></tr><tr><td>high-threshold</td><td>Seuil entre les niveaux moyen et haut. La valeur sera incluse entre dans le niveau haut.</td><td>number</td><td>—</td><td>4</td></tr><tr><td>colors</td><td>colors for icons. Si c&#39;est un array, il doit avoir 3 élements, chacun correspondant à un niveau. Si c&#39;est un objet, la clé est le seuil entre deux niveaux et la valeur est la couleur correspondante.</td><td>array/object</td><td>—</td><td>[&#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;]</td></tr><tr><td>void-color</td><td>Couleur des icônes non sélectionnées.</td><td>string</td><td>—</td><td>#C6D1DE</td></tr><tr><td>disabled-void-color</td><td>Couleur des icônes non sélectionnées en lecture seule.</td><td>string</td><td>—</td><td>#EFF2F7</td></tr><tr><td>icon-classes</td><td>Noms de classe des icônes. Si c&#39;est un array, il doit avoir 3 élements, chacun correspondant à un niveau. Si c&#39;est un objet, la clé est le seuil entre deux niveaux et la valeur est le nom de classe de l&#39;icône.</td><td>array/object</td><td>—</td><td>[&#39;el-icon-star-on&#39;, &#39;el-icon-star-on&#39;,&#39;el-icon-star-on&#39;]</td></tr><tr><td>void-icon-class</td><td>Classe des icônes non sélectionnées.</td><td>string</td><td>—</td><td>el-icon-star-off</td></tr><tr><td>disabled-void-icon-class</td><td>Classe des icônes non sélectionnées en lecture seule.</td><td>string</td><td>—</td><td>el-icon-star-on</td></tr><tr><td>show-text</td><td>Si du texte doit apparaître à droite des étoiles.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-score</td><td>Si le score doit apparaître. Incompatible avec show-text.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text-color</td><td>Couleur du texte.</td><td>string</td><td>—</td><td>#1F2D3D</td></tr><tr><td>texts</td><td>Label des différents scores.</td><td>array</td><td>—</td><td>[&#39;极差&#39;, &#39;失望&#39;, &#39;一般&#39;, &#39;满意&#39;, &#39;惊喜&#39;]</td></tr><tr><td>score-template</td><td>Template du score.</td><td>string</td><td>—</td><td>{value}</td></tr></tbody></table><h3 id=\"evenements\"><a class=\"header-anchor\" href=\"#evenements\">¶</a> Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand la valeur change.</td><td>Valeur après le changement.</td></tr></tbody></table>", 4);

function ratevue_type_template_id_07761b9c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", ratevue_type_template_id_07761b9c_hoisted_1, [ratevue_type_template_id_07761b9c_hoisted_2, ratevue_type_template_id_07761b9c_hoisted_3, ratevue_type_template_id_07761b9c_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/rate.md?vue&type=template&id=07761b9c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/rate.md?vue&type=script&lang=ts


/* harmony default export */ var ratevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Défaut", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Couleurs pour chaque niveau", -1);

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
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

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = {
        setup: function setup() {
          return {
            value: ref(null)
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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
// CONCATENATED MODULE: ./website/docs/fr-FR/rate.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/rate.md



ratevue_type_script_lang_ts.render = ratevue_type_template_id_07761b9c_render

/* harmony default export */ var rate = __webpack_exports__["default"] = (ratevue_type_script_lang_ts);

/***/ })

}]);