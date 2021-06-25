(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/input-number.md?vue&type=template&id=5c3ed197

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "inputnumber"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#inputnumber"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" InputNumber")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Input numerical values with a customizable range.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Bind a variable to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "<el-input-number>"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" element and you are set.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" @change=\"handleChange\" :min=\"1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        num,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute accepts a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and if the value is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", the component is disabled. If you just need to control the value within a range, you can add "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "min"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to set the minimum value and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to set the maximum value. By default, the minimum value is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :disabled=\"true\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "steps"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#steps"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Steps")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Allows you to define incremental steps.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Add "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to set the step.")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(5);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "step-strictly"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#step-strictly"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Step strictly")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step-strictly"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute accepts a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". if this attribute is "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", input value can only be multiple of step.")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :step=\"2\" step-strictly></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 2\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(2);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "precision"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#precision"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Precision")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Add "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "precision"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to set the precision of input value.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" :precision=\"2\" :step=\"0.1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      return {\n        num,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>The value of <code>precision</code> must be a non negative integer and should not be less than the decimal places of <code>step</code>.</p></div><h3 id=\"size\"><a class=\"header-anchor\" href=\"#size\">¶</a> Size</h3><p>Use attribute <code>size</code> to set additional sizes with <code>medium</code>, <code>small</code> or <code>mini</code>.</p>", 3);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num1\"></el-input-number>\n    <el-input-number size=\"medium\" v-model=\"num2\"></el-input-number>\n    <el-input-number size=\"small\" v-model=\"num3\"></el-input-number>\n    <el-input-number size=\"mini\" v-model=\"num4\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num1: 1,\n        num2: 1,\n        num3: 1,\n        num4: 1\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num1 = ref(1);\n      const num2 = ref(2);\n      const num3 = ref(3);\n      const num4 = ref(4);\n      return {\n        num1,\n        num2,\n        num3,\n        num4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "controls-position"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#controls-position"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Controls Position")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "controls-position"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to decide the position of control buttons.")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-input-number v-model=\"num\" controls-position=\"right\" @change=\"handleChange\" :min=\"1\" :max=\"10\"></el-input-number>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        num: 1\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const num = ref(1);\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        num,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>number / undefined</td><td>—</td><td>0</td></tr><tr><td>min</td><td>the minimum allowed value</td><td>number</td><td>—</td><td><code>-Infinity</code></td></tr><tr><td>max</td><td>the maximum allowed value</td><td>number</td><td>—</td><td><code>Infinity</code></td></tr><tr><td>step</td><td>incremental step</td><td>number</td><td>—</td><td>1</td></tr><tr><td>step-strictly</td><td>whether input value can only be multiple of step</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>precision</td><td>precision of input value</td><td>number</td><td>—</td><td>—</td></tr><tr><td>size</td><td>size of the component</td><td>string</td><td>large/medium/small/mini</td><td>large</td></tr><tr><td>disabled</td><td>whether the component is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>controls</td><td>whether to enable the control buttons</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>controls-position</td><td>position of the control buttons</td><td>string</td><td>right</td><td>-</td></tr><tr><td>name</td><td>same as <code>name</code> in native input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>label text</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>placeholder in input</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the value changes</td><td>currentValue, oldValue</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>focus the Input component</td><td>-</td></tr><tr><td>select</td><td>select the text in input element</td><td>—</td></tr></tbody></table>", 6);

function input_numbervue_type_template_id_5c3ed197_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

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
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
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
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/input-number.md?vue&type=template&id=5c3ed197

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/input-number.md?vue&type=script&lang=ts


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
// CONCATENATED MODULE: ./website/docs/en-US/input-number.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/input-number.md



input_numbervue_type_script_lang_ts.render = input_numbervue_type_template_id_5c3ed197_render

/* harmony default export */ var input_number = __webpack_exports__["default"] = (input_numbervue_type_script_lang_ts);

/***/ })

}]);