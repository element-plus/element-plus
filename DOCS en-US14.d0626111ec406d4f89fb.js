(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/color-picker.md?vue&type=template&id=23aacf90

var color_pickervue_type_template_id_23aacf90_hoisted_1 = {
  class: "content element-doc"
};

var color_pickervue_type_template_id_23aacf90_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "colorpicker"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#colorpicker"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ColorPicker")], -1);

var color_pickervue_type_template_id_23aacf90_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ColorPicker is a color selector supporting multiple color formats.", -1);

var color_pickervue_type_template_id_23aacf90_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ColorPicker requires a string typed variable to be bound to v-model.")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">With default value</span>\n  <el-color-picker v-model=\"color1\"></el-color-picker>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">With no default value</span>\n  <el-color-picker v-model=\"color2\"></el-color-picker>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        color1: '#409EFF',\n        color2: null\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color1 = ref('#409EFF');\n      const color2 = ref(null);\n      return {\n        color1,\n        color2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "alpha"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#alpha"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Alpha")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-alpha"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-color-picker v-model=\"color\" show-alpha></el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(19, 206, 102, 0.8)'\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color = ref('rgba(19, 206, 102, 0.8)');\n      return {\n        color,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "predefined-colors"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#predefined-colors"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Predefined colors")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ColorPicker supports predefined color options")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-color-picker\n  v-model=\"color\"\n  show-alpha\n  :predefine=\"predefineColors\">\n</el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(255, 69, 0, 0.68)',\n        predefineColors: [\n          '#ff4500',\n          '#ff8c00',\n          '#ffd700',\n          '#90ee90',\n          '#00ced1',\n          '#1e90ff',\n          '#c71585',\n          'rgba(255, 69, 0, 0.68)',\n          'rgb(255, 120, 0)',\n          'hsv(51, 100, 98)',\n          'hsva(120, 40, 94, 0.5)',\n          'hsl(181, 100%, 37%)',\n          'hsla(209, 100%, 56%, 0.73)',\n          '#c7158577'\n        ]\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color = ref('rgba(255, 69, 0, 0.68)');\n      const predefineColors = ref([\n        '#ff4500',\n        '#ff8c00',\n        '#ffd700',\n        '#90ee90',\n        '#00ced1',\n        '#1e90ff',\n        '#c71585',\n        'rgba(255, 69, 0, 0.68)',\n        'rgb(255, 120, 0)',\n        'hsv(51, 100, 98)',\n        'hsva(120, 40, 94, 0.5)',\n        'hsl(181, 100%, 37%)',\n        'hsla(209, 100%, 56%, 0.73)',\n        '#c7158577',\n      ]);\n      return {\n        color,\n        predefineColors,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "sizes"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sizes"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Sizes")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-color-picker v-model=\"color\"></el-color-picker>\n<el-color-picker v-model=\"color\" size=\"medium\"></el-color-picker>\n<el-color-picker v-model=\"color\" size=\"small\"></el-color-picker>\n<el-color-picker v-model=\"color\" size=\"mini\"></el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: '#409EFF'\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const color = ref('409EFF');\n\n      return {\n        color,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether to disable the ColorPicker</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of ColorPicker</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>show-alpha</td><td>whether to display the alpha slider</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color-format</td><td>color format of v-model</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex (when show-alpha is false)/ rgb (when show-alpha is true)</td></tr><tr><td>popper-class</td><td>custom class name for ColorPicker&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>predefine</td><td>predefined color options</td><td>array</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when input value changes</td><td>color value</td></tr><tr><td>active-change</td><td>triggers when the current active color changes</td><td>active color value</td></tr></tbody></table>", 4);

function color_pickervue_type_template_id_23aacf90_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", color_pickervue_type_template_id_23aacf90_hoisted_1, [color_pickervue_type_template_id_23aacf90_hoisted_2, color_pickervue_type_template_id_23aacf90_hoisted_3, color_pickervue_type_template_id_23aacf90_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/color-picker.md?vue&type=template&id=23aacf90

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/color-picker.md?vue&type=script&lang=ts


/* harmony default export */ var color_pickervue_type_script_lang_ts = ({
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
      }, "With default value", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "With no default value", -1);

      function render(_ctx, _cache) {
        var _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.color1 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.color2 = $event;
          })
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            color1: '#409EFF',
            color2: null
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
        var _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.color = $event;
          }),
          "show-alpha": ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            color: 'rgba(19, 206, 102, 0.8)'
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
        var _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.color = $event;
          }),
          "show-alpha": "",
          predefine: _ctx.predefineColors
        }, null, 8, ["modelValue", "predefine"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            color: 'rgba(255, 69, 0, 0.68)',
            predefineColors: ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgba(255, 69, 0, 0.68)', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsva(120, 40, 94, 0.5)', 'hsl(181, 100%, 37%)', 'hsla(209, 100%, 56%, 0.73)', '#c7158577']
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
        var _component_el_color_picker = _resolveComponent("el-color-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.color = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.color = $event;
          }),
          size: "medium"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.color = $event;
          }),
          size: "small"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_color_picker, {
          modelValue: _ctx.color,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.color = $event;
          }),
          size: "mini"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            color: '#409EFF'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/color-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/color-picker.md



color_pickervue_type_script_lang_ts.render = color_pickervue_type_template_id_23aacf90_render

/* harmony default export */ var color_picker = __webpack_exports__["default"] = (color_pickervue_type_script_lang_ts);

/***/ })

}]);