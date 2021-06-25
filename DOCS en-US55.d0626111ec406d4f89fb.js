(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/slider.md?vue&type=template&id=64b0ed54

var slidervue_type_template_id_64b0ed54_hoisted_1 = {
  class: "content element-doc"
};

var slidervue_type_template_id_64b0ed54_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "slider"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slider"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Slider")], -1);

var slidervue_type_template_id_64b0ed54_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Drag the slider within a fixed range.", -1);

var slidervue_type_template_id_64b0ed54_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var slidervue_type_template_id_64b0ed54_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "The current value is displayed when the slider is being dragged.", -1);

var slidervue_type_template_id_64b0ed54_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Customize the initial value of the slider by setting the binding value.")], -1);

var slidervue_type_template_id_64b0ed54_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default value</span>\n    <el-slider v-model=\"value1\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Customized initial value</span>\n    <el-slider v-model=\"value2\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Hide Tooltip</span>\n    <el-slider v-model=\"value3\" :show-tooltip=\"false\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Format Tooltip</span>\n    <el-slider v-model=\"value4\" :format-tooltip=\"formatTooltip\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Disabled</span>\n    <el-slider v-model=\"value5\" disabled></el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 50,\n        value3: 36,\n        value4: 48,\n        value5: 42\n      }\n    },\n    methods: {\n      formatTooltip(val) {\n        return val / 100;\n      }\n    }\n  }\n</script>\n")], -1);

var slidervue_type_template_id_64b0ed54_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "discrete-values"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#discrete-values"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Discrete values")], -1);

var slidervue_type_template_id_64b0ed54_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "The options can be discrete.", -1);

var slidervue_type_template_id_64b0ed54_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set step size with the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute. You can display breakpoints by setting the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-stops"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Breakpoints not displayed</span>\n    <el-slider\n      v-model=\"value1\"\n      :step=\"10\">\n    </el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Breakpoints displayed</span>\n    <el-slider\n      v-model=\"value2\"\n      :step=\"10\"\n      show-stops>\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 0\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "slider-with-input-box"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#slider-with-input-box"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Slider with input box")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Set value via a input box.", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-input"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to display an input box on the right.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      show-input>\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "range-selection"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#range-selection"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Range selection")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Selecting a range of values is supported.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Setting the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "range"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute activates range mode, where the binding value is an array made up of two boundary values.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      range\n      show-stops\n      :max=\"10\">\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [4, 8]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "vertical-mode"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vertical-mode"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Vertical mode")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Setting the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" enables vertical mode. In vertical mode, the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute is required.")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      vertical\n      height=\"200px\">\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "show-marks"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#show-marks"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Show marks")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Setting this "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "marks"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute can show mark on slider.")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider\n      v-model=\"value\"\n      range\n      :marks=\"marks\">\n    </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [30, 60],\n        marks: {\n          0: '0°C',\n          8: '8°C',\n          37: '37°C',\n          50: {\n            style: {\n              color: '#1989FA'\n            },\n            label: '50%'\n          }\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>number</td><td>—</td><td>0</td></tr><tr><td>min</td><td>minimum value</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>maximum value</td><td>number</td><td>—</td><td>100</td></tr><tr><td>disabled</td><td>whether Slider is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>step</td><td>step size</td><td>number</td><td>—</td><td>1</td></tr><tr><td>show-input</td><td>whether to display an input box, works when <code>range</code> is false</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-input-controls</td><td>whether to display control buttons when <code>show-input</code> is true</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>input-size</td><td>size of the input box</td><td>string</td><td>large / medium / small / mini</td><td>small</td></tr><tr><td>show-stops</td><td>whether to display breakpoints</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-tooltip</td><td>whether to display tooltip value</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>format-tooltip</td><td>format to display tooltip value</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>range</td><td>whether to select a range</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>vertical mode</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>height</td><td>Slider height, required in vertical mode</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>label for screen reader</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>debounce delay when typing, in milliseconds, works when <code>show-input</code> is true</td><td>number</td><td>—</td><td>300</td></tr><tr><td>tooltip-class</td><td>custom class name for the tooltip</td><td>string</td><td>—</td><td>—</td></tr><tr><td>marks</td><td>marks， type of key must be <code>number</code> and must in closed interval <code>[min, max]</code>, each mark can custom style</td><td>object</td><td>—</td><td>—</td></tr></tbody></table><h2 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)</td><td>value after changing</td></tr><tr><td>input</td><td>triggers when the data changes (It&#39;ll be emitted in real time during sliding)</td><td>value after changing</td></tr></tbody></table>", 4);

function slidervue_type_template_id_64b0ed54_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", slidervue_type_template_id_64b0ed54_hoisted_1, [slidervue_type_template_id_64b0ed54_hoisted_2, slidervue_type_template_id_64b0ed54_hoisted_3, slidervue_type_template_id_64b0ed54_hoisted_4, slidervue_type_template_id_64b0ed54_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [slidervue_type_template_id_64b0ed54_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [slidervue_type_template_id_64b0ed54_hoisted_6];
    }),
    _: 1
  }), slidervue_type_template_id_64b0ed54_hoisted_8, slidervue_type_template_id_64b0ed54_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [slidervue_type_template_id_64b0ed54_hoisted_10];
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
  }), _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/slider.md?vue&type=template&id=64b0ed54

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/slider.md?vue&type=script&lang=ts


/* harmony default export */ var slidervue_type_script_lang_ts = ({
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
      }, "Default value", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Customized initial value", -1);

      var _hoisted_5 = {
        class: "block"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Hide Tooltip", -1);

      var _hoisted_7 = {
        class: "block"
      };

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Format Tooltip", -1);

      var _hoisted_9 = {
        class: "block"
      };

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Disabled", -1);

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value3 = $event;
          }),
          "show-tooltip": false
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_slider, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.value4 = $event;
          }),
          "format-tooltip": _ctx.formatTooltip
        }, null, 8, ["modelValue", "format-tooltip"])]), _createVNode("div", _hoisted_9, [_hoisted_10, _createVNode(_component_el_slider, {
          modelValue: _ctx.value5,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
            return _ctx.value5 = $event;
          }),
          disabled: ""
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42
          };
        },
        methods: {
          formatTooltip: function formatTooltip(val) {
            return val / 100;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Breakpoints not displayed", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Breakpoints displayed", -1);

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          step: 10
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          step: 10,
          "show-stops": ""
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: 0,
            value2: 0
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "show-input": ""
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: 0
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          range: "",
          "show-stops": "",
          max: 10
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: [4, 8]
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          vertical: "",
          height: "200px"
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: 0
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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          range: "",
          marks: _ctx.marks
        }, null, 8, ["modelValue", "marks"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: [30, 60],
            marks: {
              0: '0°C',
              8: '8°C',
              37: '37°C',
              50: {
                style: {
                  color: '#1989FA'
                },
                label: '50%'
              }
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/slider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/slider.md



slidervue_type_script_lang_ts.render = slidervue_type_template_id_64b0ed54_render

/* harmony default export */ var slider = __webpack_exports__["default"] = (slidervue_type_script_lang_ts);

/***/ })

}]);