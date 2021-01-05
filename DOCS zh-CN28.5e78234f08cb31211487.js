(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[217],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input-number.md?vue&type=template&id=19539391

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "inputnumber-ji-shu-qi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#inputnumber-ji-shu-qi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" InputNumber 计数器")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "仅允许输入标准的数字值，可定义范围", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("要使用它，只需要在"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-input-number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("元素中使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("绑定变量即可，变量的初始值即为默认值。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" @change=\"handleChange\" :min=\"1\" :max=\"10\" label=\"描述文字\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jin-yong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jin-yong-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 禁用状态")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性接受一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，设置为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性，不设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("时，最小值为 0。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :disabled=\"true\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bu-shu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-shu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 步数")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "允许定义递增递减的步数控制", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性可以控制步长，接受一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "yan-ge-bu-shu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yan-ge-bu-shu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 严格步数")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step-strictly"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性接受一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。如果这个属性被设置为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，则只能输入步数的倍数。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\" step-strictly></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 2\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jing-du"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jing-du"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 精度")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "precision"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性可以控制数值精度，接收一个 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Number"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :precision=\"2\" :step=\"0.1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p><code>precision</code> 的值必须是一个非负整数，并且不能小于 <code>step</code> 的小数位数。</p></div><h3 id=\"chi-cun\"><a class=\"header-anchor\" href=\"#chi-cun\">¶</a> 尺寸</h3><p>额外提供了 <code>medium</code>、<code>small</code>、<code>mini</code> 三种尺寸的数字输入框</p>", 3);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num1\"></el-input-number>\n  <el-input-number size=\"medium\" v-model=\"num2\"></el-input-number>\n  <el-input-number size=\"small\" v-model=\"num3\"></el-input-number>\n  <el-input-number size=\"mini\" v-model=\"num4\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num1: 1,\n        num2: 1,\n        num3: 1,\n        num4: 1\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "an-niu-wei-zhi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#an-niu-wei-zhi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 按钮位置")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "controls-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性可以控制按钮位置。")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" controls-position=\"right\" @change=\"handleChange\" :min=\"1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>绑定值</td><td>number</td><td>—</td><td>0</td></tr><tr><td>min</td><td>设置计数器允许的最小值</td><td>number</td><td>—</td><td>-Infinity</td></tr><tr><td>max</td><td>设置计数器允许的最大值</td><td>number</td><td>—</td><td>Infinity</td></tr><tr><td>step</td><td>计数器步长</td><td>number</td><td>—</td><td>1</td></tr><tr><td>step-strictly</td><td>是否只能输入 step 的倍数</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>precision</td><td>数值精度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>size</td><td>计数器尺寸</td><td>string</td><td>large/medium/small/mini</td><td>large</td></tr><tr><td>disabled</td><td>是否禁用计数器</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>controls</td><td>是否使用控制按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>controls-position</td><td>控制按钮位置</td><td>string</td><td>right</td><td>-</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>输入框关联的label文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>输入框默认 placeholder</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值被改变时触发</td><td>currentValue, oldValue</td></tr><tr><td>blur</td><td>在组件 Input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>在组件 Input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr><tr><td>select</td><td>选中 input 中的文字</td><td>—</td></tr></tbody></table>", 6);

function input_numbervue_type_template_id_19539391_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md?vue&type=template&id=19539391

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/input-number.md?vue&type=script&lang=ts


/* harmony default export */ var input_numbervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          onChange: _ctx.handleChange,
          min: 1,
          max: 10,
          label: "描述文字"
        }, null, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
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
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          disabled: true
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
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
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          step: 2
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 5
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
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          step: 2,
          "step-strictly": ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 2
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
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          precision: 2,
          step: 0.1,
          max: 10
        }, null, 8, ["modelValue", "step"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
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
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "medium",
          modelValue: _ctx.num2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.num2 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "small",
          modelValue: _ctx.num3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.num3 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input_number, {
          size: "mini",
          modelValue: _ctx.num4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.num4 = $event;
          })
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input_number = _resolveComponent("el-input-number");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input_number, {
          modelValue: _ctx.num,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.num = $event;
          }),
          "controls-position": "right",
          onChange: _ctx.handleChange,
          min: 1,
          max: 10
        }, null, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            num: 1
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/input-number.md



input_numbervue_type_script_lang_ts.render = input_numbervue_type_template_id_19539391_render

/* harmony default export */ var input_number = __webpack_exports__["default"] = (input_numbervue_type_script_lang_ts);

/***/ })

}]);