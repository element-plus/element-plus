(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/rate.md?vue&type=template&id=7065da22

var ratevue_type_template_id_7065da22_hoisted_1 = {
  class: "content element-doc"
};

var ratevue_type_template_id_7065da22_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "rate"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rate"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Rate")], -1);

var ratevue_type_template_id_7065da22_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Used for rating", -1);

var ratevue_type_template_id_7065da22_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "colors"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute, and their two thresholds can be defined by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "low-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "high-threshold"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", or you can assign them with a object which key is the threshold between two levels and value is the corresponding color.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Default</span>\n  <el-rate v-model=\"value1\"></el-rate>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Color for different levels</span>\n  <el-rate\n    v-model=\"value2\"\n    :colors=\"colors\">\n  </el-rate>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: null,\n        value2: null,\n        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "with-allow-half"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#with-allow-half"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" With allow-half")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Add attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-half"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Half star allowed")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<div class=\"block\">\n  <el-rate  v-model=\"value\"  allow-half />\n</div>\n\n\n<script>\nimport { defineComponent, ref } from 'vue'\n  export default {\n    setup() {\n      return {\n        value: ref(null)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "with-text"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#with-text"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" With text")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Using text to indicate rating score", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Add attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-text"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to display text at the right of Rate. You can assign texts for different scores using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "texts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is an array whose length should be equal to the max score "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "max"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :texts=\"['oops', 'disappointed', 'normal', 'good', 'great']\"\n  show-text>\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "more-icons"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#more-icons"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" More icons")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can use different icons to distinguish different rate components.", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("You can customize icons by passing "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "icon-classes"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon class. In this example, we also use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "void-icon-class"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to set the icon if it is unselected.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  :icon-classes=\"iconClasses\"\n  void-icon-class=\"icon-rate-face-off\"\n  :colors=\"['#99A9BF', '#F7BA2A', '#FF9900']\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: null,\n        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "read-only"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#read-only"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Read-only")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Read-only Rate is for displaying rating score. Half star is supported.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to make the component read-only. Add "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "show-score"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to display the rating score at the right side. Additionally, you can use attribute "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "score-template"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to provide a score template. It must contain "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "{value}"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will be replaced with the rating score.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-rate\n  v-model=\"value\"\n  disabled\n  show-score\n  text-color=\"#ff9900\"\n  score-template=\"{value} points\">\n</el-rate>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 3.7\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>max rating score</td><td>number</td><td>—</td><td>5</td></tr><tr><td>disabled</td><td>whether Rate is read-only</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-half</td><td>whether picking half start is allowed</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>low-threshold</td><td>threshold value between low and medium level. The value itself will be included in low level</td><td>number</td><td>—</td><td>2</td></tr><tr><td>high-threshold</td><td>threshold value between medium and high level. The value itself will be included in high level</td><td>number</td><td>—</td><td>4</td></tr><tr><td>colors</td><td>colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color</td><td>array/object</td><td>—</td><td>[&#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;, &#39;#F7BA2A&#39;]</td></tr><tr><td>void-color</td><td>color of unselected icons</td><td>string</td><td>—</td><td>#C6D1DE</td></tr><tr><td>disabled-void-color</td><td>color of unselected read-only icons</td><td>string</td><td>—</td><td>#EFF2F7</td></tr><tr><td>icon-classes</td><td>class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class</td><td>array/object</td><td>—</td><td>[&#39;el-icon-star-on&#39;, &#39;el-icon-star-on&#39;,&#39;el-icon-star-on&#39;]</td></tr><tr><td>void-icon-class</td><td>class name of unselected icons</td><td>string</td><td>—</td><td>el-icon-star-off</td></tr><tr><td>disabled-void-icon-class</td><td>class name of unselected read-only icons</td><td>string</td><td>—</td><td>el-icon-star-on</td></tr><tr><td>show-text</td><td>whether to display texts</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-score</td><td>whether to display current score. show-score and show-text cannot be true at the same time</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text-color</td><td>color of texts</td><td>string</td><td>—</td><td>#1F2D3D</td></tr><tr><td>texts</td><td>text array</td><td>array</td><td>—</td><td>[&#39;Extremely bad&#39;,&#39;Disappointed&#39;,&#39;Fair&#39;,&#39;Satisfied&#39;,&#39;Surprise&#39;]</td></tr><tr><td>score-template</td><td>score template</td><td>string</td><td>—</td><td>{value}</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>Triggers when rate value is changed</td><td>value after changing</td></tr></tbody></table>", 4);

function ratevue_type_template_id_7065da22_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", ratevue_type_template_id_7065da22_hoisted_1, [ratevue_type_template_id_7065da22_hoisted_2, ratevue_type_template_id_7065da22_hoisted_3, ratevue_type_template_id_7065da22_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
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
// CONCATENATED MODULE: ./website/docs/en-US/rate.md?vue&type=template&id=7065da22

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/rate.md?vue&type=script&lang=ts


/* harmony default export */ var ratevue_type_script_lang_ts = ({
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
      }, "Default", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Color for different levels", -1);

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_rate, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_rate, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          colors: _ctx.colors
        }, null, 8, ["modelValue", "colors"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: null,
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }

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
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "allow-half": ""
        }, null, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          ref = vue_esm_browser["L" /* ref */];
      var democomponentExport = {
        setup: function setup() {
          return {
            value: ref(null)
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
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
          "show-text": ""
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: null
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
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          "icon-classes": _ctx.iconClasses,
          "void-icon-class": "icon-rate-face-off",
          colors: ['#99A9BF', '#F7BA2A', '#FF9900']
        }, null, 8, ["modelValue", "icon-classes"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: null,
            iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }

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
        var _component_el_rate = _resolveComponent("el-rate");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_rate, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          disabled: "",
          "show-score": "",
          "text-color": "#ff9900",
          "score-template": "{value} points"
        }, null, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: 3.7
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/rate.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/rate.md



ratevue_type_script_lang_ts.render = ratevue_type_template_id_7065da22_render

/* harmony default export */ var rate = __webpack_exports__["default"] = (ratevue_type_script_lang_ts);

/***/ })

}]);