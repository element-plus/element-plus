(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[254],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/radio.md?vue&type=template&id=8beeca18

var radiovue_type_template_id_8beeca18_hoisted_1 = {
  class: "content element-doc"
};

var radiovue_type_template_id_8beeca18_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "razio"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#razio"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ラジオ")], -1);

var radiovue_type_template_id_8beeca18_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "複数の選択肢の中から1つを選択することができます。", -1);

var radiovue_type_template_id_8beeca18_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var radiovue_type_template_id_8beeca18_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ラジオにはあまり多くのオプションを持たせてはいけません。多くのオプションを持つなら代わりにSelectコンポーネントを使用します。", -1);

var radiovue_type_template_id_8beeca18_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("radioコンポーネントの作成は簡単で、Radioの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に変数をバインドするだけです。これは選択したラジオの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" の値に等しくなります。ラベルの型は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" のいずれかです。")])], -1);

var radiovue_type_template_id_8beeca18_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-radio v-model=\"radio\" label=\"1\">Option A</el-radio>\n  <el-radio v-model=\"radio\" label=\"2\">Option B</el-radio>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio: '1'\n      };\n    }\n  }\n</script>\n")], -1);

var radiovue_type_template_id_8beeca18_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "wu-xiao-hua"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wu-xiao-hua"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 無効化")], -1);

var radiovue_type_template_id_8beeca18_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ラジオを無効にするには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を用います。")], -1);

var radiovue_type_template_id_8beeca18_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性を追加する必要があります。")])], -1);

var radiovue_type_template_id_8beeca18_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-radio disabled v-model=\"radio\" label=\"disabled\">Option A</el-radio>\n  <el-radio disabled v-model=\"radio\" label=\"selected and disabled\">Option B</el-radio>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio: 'selected and disabled'\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "raziobotangurupu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#raziobotangurupu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ラジオボタングループ")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "相互に関連し、排他的なオプションから一つのボタンを選択するのに適しています。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-radio-group"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-radio"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を組み合わせてラジオグループを表示する。el-radio-group"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "要素の"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("v-model"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "を変数にバインドし、ラベルの値を"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("el-radio"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "に設定する。また、現在の値をパラメータとした"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("change` イベントも提供する。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"radio\">\n  <el-radio :label=\"3\">Option A</el-radio>\n  <el-radio :label=\"6\">Option B</el-radio>\n  <el-radio :label=\"9\">Option C</el-radio>\n</el-radio-group>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio: 3\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "botansutairu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#botansutairu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ボタンスタイル")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ボタンスタイルのラジオ。", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-radio"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 要素を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-radio-button"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 要素に変更すればよい。また、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性も用意している。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-radio-group v-model=\"radio1\">\n      <el-radio-button label=\"New York\"></el-radio-button>\n      <el-radio-button label=\"Washington\"></el-radio-button>\n      <el-radio-button label=\"Los Angeles\"></el-radio-button>\n      <el-radio-button label=\"Chicago\"></el-radio-button>\n    </el-radio-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-radio-group v-model=\"radio2\" size=\"medium\">\n      <el-radio-button label=\"New York\" ></el-radio-button>\n      <el-radio-button label=\"Washington\"></el-radio-button>\n      <el-radio-button label=\"Los Angeles\"></el-radio-button>\n      <el-radio-button label=\"Chicago\"></el-radio-button>\n    </el-radio-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-radio-group v-model=\"radio3\" size=\"small\">\n      <el-radio-button label=\"New York\"></el-radio-button>\n      <el-radio-button label=\"Washington\" disabled ></el-radio-button>\n      <el-radio-button label=\"Los Angeles\"></el-radio-button>\n      <el-radio-button label=\"Chicago\"></el-radio-button>\n    </el-radio-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-radio-group v-model=\"radio4\" disabled size=\"mini\">\n      <el-radio-button label=\"New York\"></el-radio-button>\n      <el-radio-button label=\"Washington\"></el-radio-button>\n      <el-radio-button label=\"Los Angeles\"></el-radio-button>\n      <el-radio-button label=\"Chicago\"></el-radio-button>\n    </el-radio-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio1: 'New York',\n        radio2: 'New York',\n        radio3: 'New York',\n        radio4: 'New York'\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bodawo-fukeru"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bodawo-fukeru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ボーダーを付ける")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "border"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性はラジオにボーダーをつけます。")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div>\n    <el-radio v-model=\"radio1\" label=\"1\" border>Option A</el-radio>\n    <el-radio v-model=\"radio1\" label=\"2\" border>Option B</el-radio>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-radio v-model=\"radio2\" label=\"1\" border size=\"medium\">Option A</el-radio>\n    <el-radio v-model=\"radio2\" label=\"2\" border size=\"medium\">Option B</el-radio>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-radio-group v-model=\"radio3\" size=\"small\">\n      <el-radio label=\"1\" border>Option A</el-radio>\n      <el-radio label=\"2\" border disabled>Option B</el-radio>\n    </el-radio-group>\n  </div>\n  <div style=\"margin-top: 20px\">\n    <el-radio-group v-model=\"radio4\" size=\"mini\" disabled>\n      <el-radio label=\"1\" border>Option A</el-radio>\n      <el-radio label=\"2\" border>Option B</el-radio>\n    </el-radio-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio1: '1',\n        radio2: '1',\n        radio3: '1',\n        radio4: '1'\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"razio-shu-xing\"><a class=\"header-anchor\" href=\"#razio-shu-xing\">¶</a> ラジオ属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインド値</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>ラジオの値</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>ラジオが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>ラジオの周りにボーダーを追加するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>ラジオのサイズ、<code>border</code> が真の場合のみ動作します。</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>ネイティブ &#39;name&#39; 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"razioibento\"><a class=\"header-anchor\" href=\"#razioibento\">¶</a> ラジオイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>バウンド値が変更された場合にトリガされます。</td><td>選択されたラジオのラベル値</td></tr></tbody></table><h3 id=\"raziogurupu-shu-xing\"><a class=\"header-anchor\" href=\"#raziogurupu-shu-xing\">¶</a> ラジオグループ属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>size</td><td>ラジオボタンのボーダーもしくはラジオボタンの大きさ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>ネストしたラジオが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text-color</td><td>ボタンがアクティブなときのフォント色</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>ボタンがアクティブなときの境界線と背景色</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table><h3 id=\"raziogurupuibento\"><a class=\"header-anchor\" href=\"#raziogurupuibento\">¶</a> ラジオグループイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>バウンド値が変更された場合にトリガされます。</td><td>選択されたラジオのラベル値</td></tr></tbody></table><h3 id=\"raziobotan-shu-xing\"><a class=\"header-anchor\" href=\"#raziobotan-shu-xing\">¶</a> ラジオボタン属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>ラジオの値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>ラジオが無効かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>ネイティブ &#39;name&#39; 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 10);

function radiovue_type_template_id_8beeca18_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", radiovue_type_template_id_8beeca18_hoisted_1, [radiovue_type_template_id_8beeca18_hoisted_2, radiovue_type_template_id_8beeca18_hoisted_3, radiovue_type_template_id_8beeca18_hoisted_4, radiovue_type_template_id_8beeca18_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_8beeca18_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_8beeca18_hoisted_6];
    }),
    _: 1
  }), radiovue_type_template_id_8beeca18_hoisted_8, radiovue_type_template_id_8beeca18_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_8beeca18_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [radiovue_type_template_id_8beeca18_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/radio.md?vue&type=template&id=8beeca18

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/radio.md?vue&type=script&lang=ts


/* harmony default export */ var radiovue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Option A");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Option B");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "1"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_radio, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "2"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: '1'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Option A");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Option B");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio, {
          disabled: "",
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "disabled"
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_radio, {
          disabled: "",
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio = $event;
          }),
          label: "selected and disabled"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: 'selected and disabled'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Option A");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Option B");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Option C");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.radio,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: 3
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: 9
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio: 3
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_2 = {
        style: {
          "margin-top": "20px"
        }
      };
      var _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_radio_button = _resolveComponent("el-radio-button");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.radio1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio1 = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: "New York"
            }), _createVNode(_component_el_radio_button, {
              label: "Washington"
            }), _createVNode(_component_el_radio_button, {
              label: "Los Angeles"
            }), _createVNode(_component_el_radio_button, {
              label: "Chicago"
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.radio2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio2 = $event;
          }),
          size: "medium"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: "New York"
            }), _createVNode(_component_el_radio_button, {
              label: "Washington"
            }), _createVNode(_component_el_radio_button, {
              label: "Los Angeles"
            }), _createVNode(_component_el_radio_button, {
              label: "Chicago"
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_2, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.radio3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.radio3 = $event;
          }),
          size: "small"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: "New York"
            }), _createVNode(_component_el_radio_button, {
              label: "Washington",
              disabled: ""
            }), _createVNode(_component_el_radio_button, {
              label: "Los Angeles"
            }), _createVNode(_component_el_radio_button, {
              label: "Chicago"
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.radio4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.radio4 = $event;
          }),
          disabled: "",
          size: "mini"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio_button, {
              label: "New York"
            }), _createVNode(_component_el_radio_button, {
              label: "Washington"
            }), _createVNode(_component_el_radio_button, {
              label: "Los Angeles"
            }), _createVNode(_component_el_radio_button, {
              label: "Chicago"
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio1: 'New York',
            radio2: 'New York',
            radio3: 'New York',
            radio4: 'New York'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Option A");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Option B");

      var _hoisted_3 = {
        style: {
          "margin-top": "20px"
        }
      };

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Option A");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Option B");

      var _hoisted_6 = {
        style: {
          "margin-top": "20px"
        }
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("Option A");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("Option B");

      var _hoisted_9 = {
        style: {
          "margin-top": "20px"
        }
      };

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("Option A");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("Option B");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_radio, {
          modelValue: _ctx.radio1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.radio1 = $event;
          }),
          label: "1",
          border: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_radio, {
          modelValue: _ctx.radio1,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.radio1 = $event;
          }),
          label: "2",
          border: ""
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_createVNode(_component_el_radio, {
          modelValue: _ctx.radio2,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.radio2 = $event;
          }),
          label: "1",
          border: "",
          size: "medium"
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_radio, {
          modelValue: _ctx.radio2,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.radio2 = $event;
          }),
          label: "2",
          border: "",
          size: "medium"
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_6, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.radio3,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.radio3 = $event;
          }),
          size: "small"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: "1",
              border: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "2",
              border: "",
              disabled: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_9, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.radio4,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
            return _ctx.radio4 = $event;
          }),
          size: "mini",
          disabled: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: "1",
              border: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "2",
              border: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            radio1: '1',
            radio2: '1',
            radio3: '1',
            radio4: '1'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/radio.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/radio.md



radiovue_type_script_lang_ts.render = radiovue_type_template_id_8beeca18_render

/* harmony default export */ var jp_radio = __webpack_exports__["default"] = (radiovue_type_script_lang_ts);

/***/ })

}]);