(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[248],{

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/time-picker.md?vue&type=template&id=ed9c41a4

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "timepicker-shi-jian-xuan-ze-qi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#timepicker-shi-jian-xuan-ze-qi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" TimePicker 时间选择器")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用于选择或输入日期", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ren-yi-shi-jian-dian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ren-yi-shi-jian-dian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 任意时间点")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可以选择任意时间", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("使用 el-time-picker 标签，通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledHours"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledMinutes"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledSeconds"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性则通过界面上的箭头进行选择。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    v-model=\"value1\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"任意时间点\">\n  </el-time-picker>\n  <el-time-picker\n    arrow-control\n    v-model=\"value2\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"任意时间点\">\n  </el-time-picker>\n</template>\n\n<script>\n  const makeRange = (start, end) => {\n    const result = []\n    for (let i = start; i <= end; i++) {\n      result.push(i)\n    }\n    return result\n  }\n  export default {\n    data() {\n      return {\n        value1: new Date(2016, 9, 10, 18, 40),\n        value2: new Date(2016, 9, 10, 18, 40)\n      };\n    },\n    methods: {\n      // 如允许 17:30:00 - 18:30:00\n      disabledHours() {\n        return makeRange(0, 16).concat(makeRange(19, 23))\n      },\n      disabledMinutes (hour) {\n        if (hour === 17) {\n          return makeRange(0, 29)\n        }\n        if (hour === 18) {\n          return makeRange(31, 59)\n        }\n      },\n      disabledSeconds(hour, minute) {\n        if (hour === 18 && minute === 30) {\n          return makeRange(1, 59)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ren-yi-shi-jian-fan-wei"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ren-yi-shi-jian-fan-wei"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 任意时间范围")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可选择任意的时间范围", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("添加"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性即可选择时间范围，同样支持"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    is-range\n    v-model=\"value1\"\n    range-separator=\"至\"\n    start-placeholder=\"开始时间\"\n    end-placeholder=\"结束时间\"\n    placeholder=\"选择时间范围\">\n  </el-time-picker>\n  <el-time-picker\n    is-range\n    arrow-control\n    v-model=\"value2\"\n    range-separator=\"至\"\n    start-placeholder=\"开始时间\"\n    end-placeholder=\"结束时间\"\n    placeholder=\"选择时间范围\">\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>date</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>是否为时间范围选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>是否使用箭头进行时间选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>对齐方式</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>popper-class</td><td>TimePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>-</td><td>&#39;-&#39;</td></tr><tr><td>string</td><td>见<a href=\"#/zh-CN/component/date-picker#ri-qi-ge-shi\">日期格式</a></td><td>—</td><td></td><td></td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date(TimePicker) / string(TimeSelect)</td><td>可被<code>new Date()</code>解析(TimePicker) / 可选值(TimeSelect)</td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>自定义头部图标的类名</td><td>string</td><td>—</td><td>el-icon-time</td></tr><tr><td>clear-icon</td><td>自定义清空图标的类名</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr><tr><td>disabledHours</td><td>禁止选择部分小时选项</td><td>function</td><td>—</td><td>-</td></tr><tr><td>disabledMinutes</td><td>禁止选择部分分钟选项</td><td>function(selectedHour)</td><td>—</td><td>-</td></tr><tr><td>disabledSeconds</td><td>禁止选择部分秒选项</td><td>function(selectedHour, selectedMinute)</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr></tbody></table>", 6);

function time_pickervue_type_template_id_ed9c41a4_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/time-picker.md?vue&type=template&id=ed9c41a4

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/time-picker.md?vue&type=script&lang=ts


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
          placeholder: "任意时间点"
        }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"]), _createVNode(_component_el_time_picker, {
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "disabled-hours": _ctx.disabledHours,
          "disabled-minutes": _ctx.disabledMinutes,
          "disabled-seconds": _ctx.disabledSeconds,
          placeholder: "任意时间点"
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
          // 如允许 17:30:00 - 18:30:00
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
          "range-separator": "至",
          "start-placeholder": "开始时间",
          "end-placeholder": "结束时间",
          placeholder: "选择时间范围"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "is-range": "",
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          "range-separator": "至",
          "start-placeholder": "开始时间",
          "end-placeholder": "结束时间",
          placeholder: "选择时间范围"
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
// CONCATENATED MODULE: ./website/docs/zh-CN/time-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/time-picker.md



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_ed9c41a4_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ })

}]);