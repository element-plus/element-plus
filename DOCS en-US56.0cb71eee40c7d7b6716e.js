(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/slider.md?vue&type=template&id=05e8960c

const slidervue_type_template_id_05e8960c_hoisted_1 = {
  class: "content element-doc"
};

const slidervue_type_template_id_05e8960c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slider ");

const slidervue_type_template_id_05e8960c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Drag the slider within a fixed range.", -1);

const slidervue_type_template_id_05e8960c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const slidervue_type_template_id_05e8960c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The current value is displayed when the slider is being dragged.", -1);

const slidervue_type_template_id_05e8960c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Customize the initial value of the slider by setting the binding value.")], -1);

const slidervue_type_template_id_05e8960c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default value</span>\n    <el-slider v-model=\"value1\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Customized initial value</span>\n    <el-slider v-model=\"value2\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Hide Tooltip</span>\n    <el-slider v-model=\"value3\" :show-tooltip=\"false\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Format Tooltip</span>\n    <el-slider v-model=\"value4\" :format-tooltip=\"formatTooltip\"></el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Disabled</span>\n    <el-slider v-model=\"value5\" disabled></el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 50,\n        value3: 36,\n        value4: 48,\n        value5: 42,\n      }\n    },\n    methods: {\n      formatTooltip(val) {\n        return val / 100\n      },\n    },\n  }\n</script>\n")], -1);

const slidervue_type_template_id_05e8960c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Discrete values ");

const slidervue_type_template_id_05e8960c_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The options can be discrete.", -1);

const slidervue_type_template_id_05e8960c_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set step size with the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "step"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute. You can display breakpoints by setting the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-stops"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Breakpoints not displayed</span>\n    <el-slider v-model=\"value1\" :step=\"10\"> </el-slider>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Breakpoints displayed</span>\n    <el-slider v-model=\"value2\" :step=\"10\" show-stops> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 0,\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slider with input box ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Set value via a input box.", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to display an input box on the right.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" show-input> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0,\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Range selection ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Selecting a range of values is supported.", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Setting the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "range"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute activates range mode, where the binding value is an array made up of two boundary values.")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" range show-stops :max=\"10\"> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [4, 8],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Vertical mode ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Setting the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "vertical"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" enables vertical mode. In vertical mode, the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute is required.")])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" vertical height=\"200px\"> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0,\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Show marks ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Setting this "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "marks"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute can show mark on slider.")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <el-slider v-model=\"value\" range :marks=\"marks\"> </el-slider>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [30, 60],\n        marks: {\n          0: '0°C',\n          8: '8°C',\n          37: '37°C',\n          50: {\n            style: {\n              color: '#1989FA',\n            },\n            label: '50%',\n          },\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>number</td><td>—</td><td>0</td></tr><tr><td>min</td><td>minimum value</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>maximum value</td><td>number</td><td>—</td><td>100</td></tr><tr><td>disabled</td><td>whether Slider is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>step</td><td>step size</td><td>number</td><td>—</td><td>1</td></tr><tr><td>show-input</td><td>whether to display an input box, works when <code>range</code> is false</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-input-controls</td><td>whether to display control buttons when <code>show-input</code> is true</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>input-size</td><td>size of the input box</td><td>string</td><td>large / medium / small / mini</td><td>small</td></tr><tr><td>show-stops</td><td>whether to display breakpoints</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-tooltip</td><td>whether to display tooltip value</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>format-tooltip</td><td>format to display tooltip value</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>range</td><td>whether to select a range</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>vertical mode</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>height</td><td>Slider height, required in vertical mode</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>label for screen reader</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>debounce delay when typing, in milliseconds, works when <code>show-input</code> is true</td><td>number</td><td>—</td><td>300</td></tr><tr><td>tooltip-class</td><td>custom class name for the tooltip</td><td>string</td><td>—</td><td>—</td></tr><tr><td>marks</td><td>marks， type of key must be <code>number</code> and must in closed interval <code>[min, max]</code>, each mark can custom style</td><td>object</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)</td><td>value after changing</td></tr><tr><td>input</td><td>triggers when the data changes (It&#39;ll be emitted in real time during sliding)</td><td>value after changing</td></tr></tbody></table>", 1);

function slidervue_type_template_id_05e8960c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", slidervue_type_template_id_05e8960c_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slider",
    content: "Slider",
    href: "#slider",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_05e8960c_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slider"
    })]),
    _: 1
  }), slidervue_type_template_id_05e8960c_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_05e8960c_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), slidervue_type_template_id_05e8960c_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_05e8960c_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_05e8960c_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "discrete-values",
    content: "Discrete values",
    href: "#discrete-values",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_05e8960c_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#discrete-values"
    })]),
    _: 1
  }), slidervue_type_template_id_05e8960c_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [slidervue_type_template_id_05e8960c_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slider-with-input-box",
    content: "Slider with input box",
    href: "#slider-with-input-box",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slider-with-input-box"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "range-selection",
    content: "Range selection",
    href: "#range-selection",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#range-selection"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "vertical-mode",
    content: "Vertical mode",
    href: "#vertical-mode",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vertical-mode"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "show-marks",
    content: "Show marks",
    href: "#show-marks",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#show-marks"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/slider.md?vue&type=template&id=05e8960c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/slider.md?vue&type=script&lang=ts

/* harmony default export */ var slidervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Default value", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Customized initial value", -1);

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Hide Tooltip", -1);

      const _hoisted_7 = {
        class: "block"
      };

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Format Tooltip", -1);

      const _hoisted_9 = {
        class: "block"
      };

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Disabled", -1);

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event)
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event)
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.value3 = $event),
          "show-tooltip": false
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_slider, {
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.value4 = $event),
          "format-tooltip": _ctx.formatTooltip
        }, null, 8, ["modelValue", "format-tooltip"])]), _createElementVNode("div", _hoisted_9, [_hoisted_10, _createVNode(_component_el_slider, {
          modelValue: _ctx.value5,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.value5 = $event),
          disabled: ""
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42
          };
        },

        methods: {
          formatTooltip(val) {
            return val / 100;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Breakpoints not displayed", -1);

      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Breakpoints displayed", -1);

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_slider, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          step: 10
        }, null, 8, ["modelValue"])]), _createElementVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_slider, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          step: 10,
          "show-stops": ""
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value1: 0,
            value2: 0
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          "show-input": ""
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: 0
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          range: "",
          "show-stops": "",
          max: 10
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: [4, 8]
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          vertical: "",
          height: "200px"
        }, null, 8, ["modelValue"])])]);
      }

      const democomponentExport = {
        data() {
          return {
            value: 0
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_slider = _resolveComponent("el-slider");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_slider, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          range: "",
          marks: _ctx.marks
        }, null, 8, ["modelValue", "marks"])])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/slider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/slider.md



slidervue_type_script_lang_ts.render = slidervue_type_template_id_05e8960c_render

/* harmony default export */ var slider = __webpack_exports__["default"] = (slidervue_type_script_lang_ts);

/***/ })

}]);