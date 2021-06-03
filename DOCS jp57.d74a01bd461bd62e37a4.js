(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[264],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/switch.md?vue&type=template&id=0b9e3933

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "suituti"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#suituti"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" スイッチ")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "スイッチは、2 つの状態を切り替えるために使用されます。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 型変数にバインドする。"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("と"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inactive-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性は、2 つの状態の背景色を決定する。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\"> </el-switch>\n<el-switch v-model=\"value2\" active-color=\"#13ce66\" inactive-color=\"#ff4949\">\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tekisutono-shuo-ming"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tekisutono-shuo-ming"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" テキストの説明")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("テキストを表示するために "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inactive-color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を追加することができます。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch\n  v-model=\"value1\"\n  active-text=\"Pay by month\"\n  inactive-text=\"Pay by year\"\n>\n</el-switch>\n<el-switch\n  style=\"display: block\"\n  v-model=\"value2\"\n  active-color=\"#13ce66\"\n  inactive-color=\"#ff4949\"\n  active-text=\"Pay by month\"\n  inactive-text=\"Pay by year\"\n>\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kuo-zhangsareta-zhi-xing"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kuo-zhangsareta-zhi-xing"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 拡張された値型")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "active-value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("と"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "inactive-value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("を設定することができる。どちらも "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "String"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" または "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 型の値を受け取る。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip :content=\"'Switch value: ' + value\" placement=\"top\">\n  <el-switch\n    v-model=\"value\"\n    active-color=\"#13ce66\"\n    inactive-color=\"#ff4949\"\n    active-value=\"100\"\n    inactive-value=\"0\"\n  >\n  </el-switch>\n</el-tooltip>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: '100',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "wu-xiao-hua"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wu-xiao-hua"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 無効化")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性を追加すると、スイッチを無効にすることができます。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\" disabled> </el-switch>\n<el-switch v-model=\"value2\" disabled> </el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "rodeingu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rodeingu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ローディング")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性を"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("に設定すると、ロード状態を表示することができます。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\" loading> </el-switch>\n<el-switch v-model=\"value2\" loading> </el-switch>\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "qieri-tiewo-fanggu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qieri-tiewo-fanggu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 切り替えを防ぐ")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "beforeChange"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("プロパティを設定します。false を返すか、Promise を返し、拒否された場合は、切り替えを停止します。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-switch v-model=\"value1\" :loading=\"loading1\" :beforeChange=\"beforeChange1\">\n</el-switch>\n<el-switch v-model=\"value2\" :loading=\"loading2\" :beforeChange=\"beforeChange2\">\n</el-switch>\n<script>\n  import { reactive, toRefs } from 'vue'\n  import { ElMessage } from 'element-plus'\n\n  export default {\n    setup() {\n      const status1 = reactive({\n        value1: false,\n        loading1: false,\n      })\n\n      const beforeChange1 = () => {\n        status1.loading1 = true\n        return new Promise(resolve => {\n          setTimeout(() => {\n            status1.loading1 = false\n            ElMessage.success('正常に切り替えます')\n            return resolve(true)\n          }, 1000)\n        })\n      }\n\n      const status2 = reactive({\n        value2: false,\n        loading2: false,\n      })\n\n      const beforeChange2 = () => {\n        status2.loading2 = true\n        return new Promise((resolve, reject) => {\n          setTimeout(() => {\n            status2.loading2 = false\n            ElMessage.error('スイッチに失敗しました')\n            return reject(new Error('error'))\n          }, 1000)\n        })\n      }\n\n      return {\n        ...toRefs(status1),\n        ...toRefs(status2),\n        beforeChange1,\n        beforeChange2,\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインド値は、&quot;active-value &quot;または &quot;inactive-value &quot;と等しくなければなりません。デフォルトの型は &quot;boolean &quot;です。</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>スイッチが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading</td><td>スイッチがロード中になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>width</td><td>スイッチの幅</td><td>number</td><td>—</td><td>40</td></tr><tr><td>active-icon-class</td><td><code>on</code> 状態のときに表示されるアイコンのクラス名で、<code>active-text</code> を上書きします。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-icon-class</td><td><code>off</code> 状態のときに表示されるアイコンのクラス名で、<code>inactive-text</code> を上書きします。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-text</td><td><code>on</code> 状態のときに表示されるテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-text</td><td><code>off</code> 状態のときに表示されるテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-value</td><td><code>on</code> 状態のときのスイッチの値</td><td>boolean / string / number</td><td>—</td><td>true</td></tr><tr><td>inactive-value</td><td><code>off</code> 状態のときのスイッチの値</td><td>boolean / string / number</td><td>—</td><td>false</td></tr><tr><td>active-color</td><td><code>on</code> 状態のときの背景色</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td><code>off</code> 状態のときの背景色</td><td>string</td><td>—</td><td>#C0CCDA</td></tr><tr><td>name</td><td>スイッチのインプット名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>validate-event</td><td>フォームバリデーションをトリガするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-change</td><td>スイッチの状態が変化する前のフックは、false を返すか、Promise を返し、切り替えを停止するために拒否されます</td><td>function</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"ibento\"><a class=\"header-anchor\" href=\"#ibento\">¶</a> イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>値が変わるとトリガー</td><td>value after changing</td></tr></tbody></table><h3 id=\"mesotudo\"><a class=\"header-anchor\" href=\"#mesotudo\">¶</a> メソッド</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>スイッチコンポーネントにフォーカス</td><td>—</td></tr></tbody></table>", 6);

function switchvue_type_template_id_0b9e3933_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/switch.md?vue&type=template&id=0b9e3933

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/switch.md?vue&type=script&lang=ts


/* harmony default export */ var switchvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "active-color": "#13ce66",
          "inactive-color": "#ff4949"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: true
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

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "active-text": "Pay by month",
          "inactive-text": "Pay by year"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          style: {
            "display": "block"
          },
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "active-color": "#13ce66",
          "inactive-color": "#ff4949",
          "active-text": "Pay by month",
          "inactive-text": "Pay by year"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: true
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
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          content: 'Switch value: ' + _ctx.value,
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_switch, {
              modelValue: _ctx.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.value = $event;
              }),
              "active-color": "#13ce66",
              "inactive-color": "#ff4949",
              "active-value": "100",
              "inactive-value": "0"
            }, null, 8, ["modelValue"])];
          }),
          _: 1
        }, 8, ["content"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: '100'
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
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          disabled: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          disabled: ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: false
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
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          loading: ""
        }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          loading: ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: true,
            value2: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          loading: _ctx.loading1,
          beforeChange: _ctx.beforeChange1
        }, null, 8, ["modelValue", "loading", "beforeChange"]), _createVNode(_component_el_switch, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          loading: _ctx.loading2,
          beforeChange: _ctx.beforeChange2
        }, null, 8, ["modelValue", "loading", "beforeChange"])]);
      }

      var reactive = vue_esm_browser["K" /* reactive */],
          toRefs = vue_esm_browser["W" /* toRefs */];

      var _require = __webpack_require__(18),
          ElMessage = _require.ElMessage;

      var democomponentExport = {
        setup: function setup() {
          var status1 = reactive({
            value1: false,
            loading1: false
          });

          var beforeChange1 = function beforeChange1() {
            status1.loading1 = true;
            return new Promise(function (resolve) {
              setTimeout(function () {
                status1.loading1 = false;
                ElMessage.success('正常に切り替えます');
                return resolve(true);
              }, 1000);
            });
          };

          var status2 = reactive({
            value2: false,
            loading2: false
          });

          var beforeChange2 = function beforeChange2() {
            status2.loading2 = true;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                status2.loading2 = false;
                ElMessage.error('スイッチに失敗しました');
                return reject(new Error('error'));
              }, 1000);
            });
          };

          return extends_default()({}, toRefs(status1), toRefs(status2), {
            beforeChange1: beforeChange1,
            beforeChange2: beforeChange2
          });
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/switch.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/switch.md



switchvue_type_script_lang_ts.render = switchvue_type_template_id_0b9e3933_render

/* harmony default export */ var jp_switch = __webpack_exports__["default"] = (switchvue_type_script_lang_ts);

/***/ })

}]);