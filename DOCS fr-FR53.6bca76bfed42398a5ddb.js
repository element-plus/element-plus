(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[174],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/time-picker.md?vue&type=template&id=2ce2f40d&bindings={}

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "taimupituka"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#taimupituka"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" タイムピッカー")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "時間インプットにはタイムピッカーを使用します。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "gu-dingtaimupituka"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#gu-dingtaimupituka"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 固定タイムピッカー")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ユーザーが選択できる固定時間のリストを提供する。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-time-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ラベルを使用し、開始時刻、終了時刻、タイムステップを "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" で指定します。`")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-time-select\n  v-model=\"value\"\n  :picker-options=\"{\n    start: '08:30',\n    step: '00:15',\n    end: '18:30'\n  }\"\n  placeholder=\"Select time\">\n</el-time-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ''\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ren-yinotaimupituka"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ren-yinotaimupituka"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 任意のタイムピッカー")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "任意の時間を選ぶことができます。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ラベルに "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-time-picker"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用い、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "selectableRange"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を指定することで時間範囲を制限することができます。デフォルトでは、マウスホイールをスクロールして時間を選ぶことができますが、代わりに "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性が設定されている場合は矢印を使って時間を選ぶこともできます。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    v-model=\"value1\"\n    :picker-options=\"{\n      selectableRange: '18:30:00 - 20:30:00'\n    }\"\n    placeholder=\"Arbitrary time\">\n  </el-time-picker>\n  <el-time-picker\n    arrow-control\n    v-model=\"value2\"\n    :picker-options=\"{\n      selectableRange: '18:30:00 - 20:30:00'\n    }\"\n    placeholder=\"Arbitrary time\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: new Date(2016, 9, 10, 18, 40),\n        value2: new Date(2016, 9, 10, 18, 40)\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "gu-ding-shi-jian-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#gu-ding-shi-jian-fan-wei"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 固定時間範囲")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "開始時間が最初に選ばれた場合は、それに応じて終了時間が変更されます。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-select\n    placeholder=\"Start time\"\n    v-model=\"startTime\"\n    :picker-options=\"{\n      start: '08:30',\n      step: '00:15',\n      end: '18:30'\n    }\">\n  </el-time-select>\n  <el-time-select\n    placeholder=\"End time\"\n    v-model=\"endTime\"\n    :picker-options=\"{\n      start: '08:30',\n      step: '00:15',\n      end: '18:30',\n      minTime: startTime\n    }\">\n  </el-time-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        startTime: '',\n        endTime: ''\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ren-yino-shi-jian-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ren-yino-shi-jian-fan-wei"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 任意の時間範囲")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "任意の時間範囲を選択することができます。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("範囲を指定するには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を追加する。また、範囲モードでは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" がサポートされている。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    is-range\n    v-model=\"value1\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\">\n  </el-time-picker>\n  <el-time-picker\n    is-range\n    arrow-control\n    v-model=\"value2\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>バインディング値</td><td>date(TimePicker) / string(TimeSelect)</td><td>-</td><td>-</td></tr><tr><td>readonly</td><td>タイムピッカーが読み取り専用かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>タイムピッカーが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>入力が編集可能かどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>クリアボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>入力のサイズ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>非範囲モード時のプレースホルダ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>範囲モードの開始時刻のプレースホルダ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>範囲モード終了時のプレースホルダ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>時間範囲を選択するかどうか、<code>&lt;el-time-picker&gt;</code> でのみ動作します。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>矢印ボタンを使って時間を選択するかどうか、<code>&lt;el-time-picker&gt;</code> でのみ動作します。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>整列</td><td>left / center / right</td><td>left</td><td></td></tr><tr><td>popper-class</td><td>タイムピッカーのドロップダウンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>picker-options</td><td>追加のオプション、下のテーブルを参照してください。</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>range-separator</td><td>範囲セパレータ</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>オプション、カレンダーのデフォルトの日付</td><td>Date for TimePicker, string for TimeSelect</td><td>anything accepted by <code>new Date()</code> for TimePicker, selectable value for TimeSelect</td><td>—</td></tr><tr><td>value-format</td><td>オプションで、タイムピッカーの場合のみ、バインディング値のフォーマットを指定します。指定しない場合、バインディング値は Date オブジェクトになります。</td><td>string</td><td>see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a></td><td>—</td></tr><tr><td>name</td><td>ネイティブ入力の <code>name</code> と同じ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>カスタムプレフィックスアイコンクラス</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>カスタムクリアアイコンクラス</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id=\"shi-jian-xuan-zeopusiyon\"><a class=\"header-anchor\" href=\"#shi-jian-xuan-zeopusiyon\">¶</a> 時間選択オプション</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>start</td><td>開始時刻</td><td>string</td><td>—</td><td>09:00</td></tr><tr><td>end</td><td>終了時刻</td><td>string</td><td>—</td><td>18:00</td></tr><tr><td>step</td><td>タイムステップ</td><td>string</td><td>—</td><td>00:30</td></tr><tr><td>minTime</td><td>最低時間、それ以前の時間は無効化されます。</td><td>string</td><td>—</td><td>00:00</td></tr><tr><td>maxTime</td><td>最大時間、この時間以降は無効化されます。</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"taimupitukanoopusiyon\"><a class=\"header-anchor\" href=\"#taimupitukanoopusiyon\">¶</a> タイムピッカーのオプション</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>selectableRange</td><td>利用可能な時間範囲、例えば <code>&#39;18:30:00 - 20:30:00&#39;</code>または<code>[&#39;09:30:00 - 12:00:00&#39;, &#39;14:30:00 - 18:30:00&#39;]</code>など。</td><td>string / array</td><td>—</td><td>—</td></tr><tr><td>format</td><td>ピッカー形式</td><td>string</td><td>hour <code>HH</code>, minute <code>mm</code>, second <code>ss</code>, AM/PM <code>A</code></td><td>HH:mm:ss</td></tr></tbody></table><h3 id=\"ibento\"><a class=\"header-anchor\" href=\"#ibento\">¶</a> イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>ユーザーが値を確認したときにトリガされます。</td><td>component&#39;s binding value</td></tr><tr><td>blur</td><td>インプットがぼやけたときされます</td><td>component instance</td></tr><tr><td>focus</td><td>入力がフォーカスされているときにトリガされます。</td><td>component instance</td></tr></tbody></table><h3 id=\"fang-fa\"><a class=\"header-anchor\" href=\"#fang-fa\">¶</a> 方法</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>インプットコンポーネントにフォーカス</td><td>-</td></tr></tbody></table>", 10);

function time_pickervue_type_template_id_2ce2f40d_bindings_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19]);
}
// CONCATENATED MODULE: ./website/docs/jp/time-picker.md?vue&type=template&id=2ce2f40d&bindings={}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/time-picker.md?vue&type=script&lang=ts


/* harmony default export */ var time_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_time_select = _resolveComponent("el-time-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "picker-options": {
            start: '08:30',
            step: '00:15',
            end: '18:30'
          },
          placeholder: "Select time"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: ''
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
        var _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "picker-options": {
            selectableRange: '18:30:00 - 20:30:00'
          },
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "picker-options": {
            selectableRange: '18:30:00 - 20:30:00'
          },
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: new Date(2016, 9, 10, 18, 40),
            value2: new Date(2016, 9, 10, 18, 40)
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
        var _component_el_time_select = _resolveComponent("el-time-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_select, {
          placeholder: "Start time",
          modelValue: _ctx.startTime,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.startTime = $event;
          }),
          "picker-options": {
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_select, {
          placeholder: "End time",
          modelValue: _ctx.endTime,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.endTime = $event;
          }),
          "picker-options": {
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: _ctx.startTime
          }
        }, null, 8, ["modelValue", "picker-options"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            startTime: '',
            endTime: ''
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
        var _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_picker, {
          "is-range": "",
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "is-range": "",
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/time-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/time-picker.md



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_2ce2f40d_bindings_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/time-picker.md?vue&type=template&id=42cfaacc&bindings={}

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "timepicker"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#timepicker"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" TimePicker")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Utiliser TimePicker pour sélectionner un horaire.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "selection-d-horaire-libre"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#selection-d-horaire-libre"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Sélection d'horaire libre")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez aussi laisser l'utilisateur choisir librement un horaire.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-time-picker"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" puis l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "picker-options"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" et sa propriété "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "selectableRange"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour déterminer la tranche horaire disponible. Par défaut, vous pouvez utiliser la molette de votre souris, ou les flèches directionnelles si l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" est présent.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    v-model=\"value1\"\n    :picker-options=\"{\n      selectableRange: '18:30:00 - 20:30:00'\n    }\"\n    placeholder=\"Horaire libre\">\n  </el-time-picker>\n  <el-time-picker\n    arrow-control\n    v-model=\"value2\"\n    :picker-options=\"{\n      selectableRange: '18:30:00 - 20:30:00'\n    }\"\n    placeholder=\"Horaire libre\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: new Date(2016, 9, 10, 18, 40),\n        value2: new Date(2016, 9, 10, 18, 40)\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "intervalle-de-temps-libre"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#intervalle-de-temps-libre"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Intervalle de temps libre")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Vous pouvez également définir un intervalle libre.", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Ajoutez l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". L'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" est aussi supporté dans ce mode.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    is-range\n    v-model=\"value1\"\n    range-separator=\"To\"\n    start-placeholder=\"Horaire de début\"\n    end-placeholder=\"Horaire de fin\">\n  </el-time-picker>\n  <el-time-picker\n    is-range\n    arrow-control\n    v-model=\"value2\"\n    range-separator=\"To\"\n    start-placeholder=\"Horaire de début\"\n    end-placeholder=\"Horaire de fin\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>La valeur liée.</td><td>date(TimePicker) / string(TimeSelect)</td><td>-</td><td>-</td></tr><tr><td>readonly</td><td>Si TimePicker est en lecture seule.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Si TimePicker est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>Si le champ d&#39;input est éditable.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>Si un bouton d&#39;effacement doit être affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Taille du champ.</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>Placeholder en mode non-intervalle.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>Placeholder de l&#39;horaire de début en mode intervalle.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>Placeholder de l&#39;horaire de fin en mode intervalle.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>Si le mode intervalle est activé, marche avec <code>&lt;el-time-picker&gt;</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>Si les flèches directionnelles peuvent être utilisées, marche avec <code>&lt;el-time-picker&gt;</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>Alignement.</td><td>left / center / right</td><td>left</td><td></td></tr><tr><td>popper-class</td><td>Classe du menu du TimePicker.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>picker-options</td><td>Options additionnelles, voir la table ci-dessous.</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>range-separator</td><td>Séparateur d&#39;intervalle.</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>Optionnel, date d&#39;aujourd&#39;hui par défaut.</td><td><code>Date</code> pour le TimePicker, <code>string</code> pour le TimeSelect</td><td>Toute valeur acceptée par <code>new Date()</code> pour le TimePicker, une valeur sélectionnable pour TimeSelect.</td><td>—</td></tr><tr><td>value-format</td><td>Optionnel, uniquement pour TimePicker, format de la valeur. Si non spécifié, la valeur sera un objet <code>Date</code>.</td><td>string</td><td>Voir <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a></td><td>—</td></tr><tr><td>name</td><td>Attribut <code>name</code> natif de l&#39;input.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>Classe de l&#39;icône de préfixe.</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>Classe de l&#39;icône d&#39;effacement.</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id=\"options-de-timepicker\"><a class=\"header-anchor\" href=\"#options-de-timepicker\">¶</a> Options de TimePicker</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>selectableRange</td><td>Intervalle de temps disponible, e.g.<code>&#39;18:30:00 - 20:30:00&#39;</code> ou <code> [&#39;09:30:00 - 12:00:00&#39;, &#39;14:30:00 - 18:30:00&#39;]</code></td><td>string / array</td><td>—</td><td>—</td></tr><tr><td>format</td><td>Format du sélecteur.</td><td>string</td><td>hour <code>HH</code>, minute <code>mm</code>, second <code>ss</code>, AM/PM <code>A</code></td><td>HH:mm:ss</td></tr></tbody></table><h3 id=\"evenements\"><a class=\"header-anchor\" href=\"#evenements\">¶</a> Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand l&#39;utilisateur confirme la valeur.</td><td>La valeur confirmée.</td></tr><tr><td>blur</td><td>Se déclenche quand le composant perd le focus.</td><td>L&#39;instance du composant.</td></tr><tr><td>focus</td><td>Se déclenche quand le composant a le focus.</td><td>L&#39;instance du composant.</td></tr></tbody></table><h3 id=\"methodes\"><a class=\"header-anchor\" href=\"#methodes\">¶</a> Méthodes</h3><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>focus</td><td>Met le focus sur le composant.</td><td>-</td></tr></tbody></table>", 8);

function time_pickervue_type_template_id_42cfaacc_bindings_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/time-picker.md?vue&type=template&id=42cfaacc&bindings={}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/time-picker.md?vue&type=script&lang=ts


/* harmony default export */ var time_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "picker-options": {
            selectableRange: '18:30:00 - 20:30:00'
          },
          placeholder: "Horaire libre"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "picker-options": {
            selectableRange: '18:30:00 - 20:30:00'
          },
          placeholder: "Horaire libre"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: new Date(2016, 9, 10, 18, 40),
            value2: new Date(2016, 9, 10, 18, 40)
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
        var _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_picker, {
          "is-range": "",
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "range-separator": "To",
          "start-placeholder": "Horaire de début",
          "end-placeholder": "Horaire de fin"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "is-range": "",
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "range-separator": "To",
          "start-placeholder": "Horaire de début",
          "end-placeholder": "Horaire de fin"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/time-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/time-picker.md



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_42cfaacc_bindings_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ })

}]);