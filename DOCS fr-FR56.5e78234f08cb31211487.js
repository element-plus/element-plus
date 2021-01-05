(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[183],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/time-picker.md?vue&type=template&id=64519059

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
  id: "ren-yinotaimupituka"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ren-yinotaimupituka"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 任意のタイムピッカー")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "任意の時間を選ぶことができます。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ラベルに "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-time-picker"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用い、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledHours"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledMinutes"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledSeconds"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を指定することで時間範囲を制限することができます。デフォルトでは、マウスホイールをスクロールして時間を選ぶことができますが、代わりに "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性が設定されている場合は矢印を使って時間を選ぶこともできます。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    v-model=\"value1\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"Arbitrary time\">\n  </el-time-picker>\n  <el-time-picker\n    arrow-control\n    v-model=\"value2\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"Arbitrary time\">\n  </el-time-picker>\n</template>\n\n<script>\n  const makeRange = (start, end) => {\n    const result = []\n    for (let i = start; i <= end; i++) {\n      result.push(i)\n    }\n    return result\n  }\n  export default {\n    data() {\n      return {\n        value1: new Date(2016, 9, 10, 18, 40),\n        value2: new Date(2016, 9, 10, 18, 40)\n      };\n    },\n    methods: {\n      // e.g. allow 17:30:00 - 18:30:00\n      disabledHours() {\n        return makeRange(0, 16).concat(makeRange(19, 23))\n      },\n      disabledMinutes (hour) {\n        if (hour === 17) {\n          return makeRange(0, 29)\n        }\n        if (hour === 18) {\n          return makeRange(31, 59)\n        }\n      },\n      disabledSeconds(hour, minute) {\n        if (hour === 18 && minute === 30) {\n          return makeRange(1, 59)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ren-yino-shi-jian-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ren-yino-shi-jian-fan-wei"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 任意の時間範囲")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "任意の時間範囲を選択することができます。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("範囲を指定するには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を追加する。また、範囲モードでは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" がサポートされている。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    is-range\n    v-model=\"value1\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\">\n  </el-time-picker>\n  <el-time-picker\n    is-range\n    arrow-control\n    v-model=\"value2\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>バインディング値</td><td>date</td><td>-</td><td>-</td></tr><tr><td>readonly</td><td>タイムピッカーが読み取り専用かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>タイムピッカーが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>入力が編集可能かどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>クリアボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>入力のサイズ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>非範囲モード時のプレースホルダ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>範囲モードの開始時刻のプレースホルダ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>範囲モード終了時のプレースホルダ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>時間範囲を選択するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>矢印ボタンを使って時間を選択するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>整列</td><td>left / center / right</td><td>left</td><td></td></tr><tr><td>popper-class</td><td>タイムピッカーのドロップダウンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>範囲セパレータ</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>オプション、カレンダーのデフォルトの日付</td><td>Date for TimePicker, string for TimeSelect</td><td>anything accepted by <code>new Date()</code> for TimePicker, selectable value for TimeSelect</td><td>—</td></tr><tr><td>name</td><td>ネイティブ入力の <code>name</code> と同じ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>カスタムプレフィックスアイコンクラス</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>カスタムクリアアイコンクラス</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr><tr><td>disabledHours</td><td>To specify the array of hours that cannot be selected</td><td>function</td><td>—</td><td>-</td></tr><tr><td>disabledMinutes</td><td>To specify the array of minutes that cannot be selected</td><td>function(selectedHour)</td><td>—</td><td>-</td></tr><tr><td>disabledSeconds</td><td>To specify the array of seconds that cannot be selected</td><td>function(selectedHour, selectedMinute)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"ibento\"><a class=\"header-anchor\" href=\"#ibento\">¶</a> イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>ユーザーが値を確認したときにトリガされます。</td><td>component&#39;s binding value</td></tr><tr><td>blur</td><td>インプットがぼやけたときされます</td><td>component instance</td></tr><tr><td>focus</td><td>入力がフォーカスされているときにトリガされます。</td><td>component instance</td></tr></tbody></table><h3 id=\"fang-fa\"><a class=\"header-anchor\" href=\"#fang-fa\">¶</a> 方法</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>インプットコンポーネントにフォーカス</td><td>-</td></tr></tbody></table>", 6);

function time_pickervue_type_template_id_64519059_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12]);
}
// CONCATENATED MODULE: ./website/docs/jp/time-picker.md?vue&type=template&id=64519059

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
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
        var _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_time_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          "disabled-hours": _ctx.disabledHours,
          "disabled-minutes": _ctx.disabledMinutes,
          "disabled-seconds": _ctx.disabledSeconds,
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"]), _createVNode(_component_el_time_picker, {
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "disabled-hours": _ctx.disabledHours,
          "disabled-minutes": _ctx.disabledMinutes,
          "disabled-seconds": _ctx.disabledSeconds,
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"])]);
      }

      var makeRange = function makeRange(start, end) {
        var result = [];

        for (var i = start; i <= end; i++) {
          result.push(i);
        }

        return result;
      };

      var democomponentExport = {
        data: function data() {
          return {
            value1: new Date(2016, 9, 10, 18, 40),
            value2: new Date(2016, 9, 10, 18, 40)
          };
        },
        methods: {
          // e.g. allow 17:30:00 - 18:30:00
          disabledHours: function disabledHours() {
            return makeRange(0, 16).concat(makeRange(19, 23));
          },
          disabledMinutes: function disabledMinutes(hour) {
            if (hour === 17) {
              return makeRange(0, 29);
            }

            if (hour === 18) {
              return makeRange(31, 59);
            }
          },
          disabledSeconds: function disabledSeconds(hour, minute) {
            if (hour === 18 && minute === 30) {
              return makeRange(1, 59);
            }
          }
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



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_64519059_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/time-picker.md?vue&type=template&id=1debcf39

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

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-time-picker"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" puis l'attribut et sa propriété "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledHours"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledMinutes"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledSeconds"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" pour déterminer la tranche horaire disponible. Par défaut, vous pouvez utiliser la molette de votre souris, ou les flèches directionnelles si l'attribut "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" est présent.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    v-model=\"value1\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"Horaire libre\">\n  </el-time-picker>\n  <el-time-picker\n    arrow-control\n    v-model=\"value2\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"Horaire libre\">\n  </el-time-picker>\n</template>\n\n<script>\n  const makeRange = (start, end) => {\n    const result = []\n    for (let i = start; i <= end; i++) {\n      result.push(i)\n    }\n    return result\n  }\n  export default {\n    data() {\n      return {\n        value1: new Date(2016, 9, 10, 18, 40),\n        value2: new Date(2016, 9, 10, 18, 40)\n      };\n    },\n    methods: {\n      // e.g. allow 17:30:00 - 18:30:00\n      disabledHours() {\n        return makeRange(0, 16).concat(makeRange(19, 23))\n      },\n      disabledMinutes (hour) {\n        if (hour === 17) {\n          return makeRange(0, 29)\n        }\n        if (hour === 18) {\n          return makeRange(31, 59)\n        }\n      },\n      disabledSeconds(hour, minute) {\n        if (hour === 18 && minute === 30) {\n          return makeRange(1, 59)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

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

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributs\"><a class=\"header-anchor\" href=\"#attributs\">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>value / v-model</td><td>La valeur liée.</td><td>Date</td><td>-</td><td>-</td></tr><tr><td>readonly</td><td>Si TimePicker est en lecture seule.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Si TimePicker est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>Si le champ d&#39;input est éditable.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>Si un bouton d&#39;effacement doit être affiché.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Taille du champ.</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>Placeholder en mode non-intervalle.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>Placeholder de l&#39;horaire de début en mode intervalle.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>Placeholder de l&#39;horaire de fin en mode intervalle.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>Si le mode intervalle est activé</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>Si les flèches directionnelles peuvent être utilisées</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>Alignement.</td><td>left / center / right</td><td>left</td><td></td></tr><tr><td>popper-class</td><td>Classe du menu du TimePicker.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>Séparateur d&#39;intervalle.</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>Optionnel, date d&#39;aujourd&#39;hui par défaut.</td><td><code>Date</code> pour le TimePicker, <code>string</code> pour le TimeSelect</td><td>Toute valeur acceptée par <code>new Date()</code> pour le TimePicker, une valeur sélectionnable pour TimeSelect.</td><td>—</td></tr><tr><td>name</td><td>Attribut <code>name</code> natif de l&#39;input.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>Classe de l&#39;icône de préfixe.</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>Classe de l&#39;icône d&#39;effacement.</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr><tr><td>disabledHours</td><td>To specify the array of hours that cannot be selected</td><td>function</td><td>—</td><td>-</td></tr><tr><td>disabledMinutes</td><td>To specify the array of minutes that cannot be selected</td><td>function(selectedHour)</td><td>—</td><td>-</td></tr><tr><td>disabledSeconds</td><td>To specify the array of seconds that cannot be selected</td><td>function(selectedHour, selectedMinute)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"evenements\"><a class=\"header-anchor\" href=\"#evenements\">¶</a> Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>change</td><td>Se déclenche quand l&#39;utilisateur confirme la valeur.</td><td>La valeur confirmée.</td></tr><tr><td>blur</td><td>Se déclenche quand le composant perd le focus.</td><td>L&#39;instance du composant.</td></tr><tr><td>focus</td><td>Se déclenche quand le composant a le focus.</td><td>L&#39;instance du composant.</td></tr></tbody></table><h3 id=\"methodes\"><a class=\"header-anchor\" href=\"#methodes\">¶</a> Méthodes</h3><table><thead><tr><th>Méthode</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>focus</td><td>Met le focus sur le composant.</td><td>-</td></tr></tbody></table>", 6);

function time_pickervue_type_template_id_1debcf39_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/time-picker.md?vue&type=template&id=1debcf39

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
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
          "disabled-hours": _ctx.disabledHours,
          "disabled-minutes": _ctx.disabledMinutes,
          "disabled-seconds": _ctx.disabledSeconds,
          placeholder: "Horaire libre"
        }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"]), _createVNode(_component_el_time_picker, {
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "disabled-hours": _ctx.disabledHours,
          "disabled-minutes": _ctx.disabledMinutes,
          "disabled-seconds": _ctx.disabledSeconds,
          placeholder: "Horaire libre"
        }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"])]);
      }

      var makeRange = function makeRange(start, end) {
        var result = [];

        for (var i = start; i <= end; i++) {
          result.push(i);
        }

        return result;
      };

      var democomponentExport = {
        data: function data() {
          return {
            value1: new Date(2016, 9, 10, 18, 40),
            value2: new Date(2016, 9, 10, 18, 40)
          };
        },
        methods: {
          // e.g. allow 17:30:00 - 18:30:00
          disabledHours: function disabledHours() {
            return makeRange(0, 16).concat(makeRange(19, 23));
          },
          disabledMinutes: function disabledMinutes(hour) {
            if (hour === 17) {
              return makeRange(0, 29);
            }

            if (hour === 18) {
              return makeRange(31, 59);
            }
          },
          disabledSeconds: function disabledSeconds(hour, minute) {
            if (hour === 18 && minute === 30) {
              return makeRange(1, 59);
            }
          }
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



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_1debcf39_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ })

}]);