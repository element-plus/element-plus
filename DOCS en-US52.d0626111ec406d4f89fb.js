(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/select-v2.md?vue&type=template&id=7930766c

var select_v2vue_type_template_id_7930766c_hoisted_1 = {
  class: "content element-doc"
};

var select_v2vue_type_template_id_7930766c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"select-v2-virtualized-selector\"><a class=\"header-anchor\" href=\"#select-v2-virtualized-selector\">¶</a> Select V2 virtualized selector</h2><div class=\"tip\"><p>This component is still under testing, if you found any bug or issue please report it at <a href=\"https://github.com/element-plus/element-plus/issues\">Github</a> for us to fix.</p></div><h3 id=\"background\"><a class=\"header-anchor\" href=\"#background\">¶</a> Background</h3><p>Now days, with tons of data came from the backend server through the internet, one single selector could have ended up loading tens of thousands of data from the backend, but rendering that much data into the DOM could be a burden to the browser which could crash the browser. For better user experience and developer experience, we decided to add this component.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>The simplest selector</p>", 6);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "multi-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#multi-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Multi select")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "The basic multi-select selector with tags", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "hide-extra-tags-when-the-selected-items-are-too-many."
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#hide-extra-tags-when-the-selected-items-are-too-many."
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Hide extra tags when the selected items are too many.")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n    collapse-tags\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "filterable-multi-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#filterable-multi-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Filterable multi-select")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When the options are overwhelmingly too many, you can use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" option to enable filter feature for finding out the desired option")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled-selector-and-select-options"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled-selector-and-select-options"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled selector and select options")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can choose to disable selector itself or the option.", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n  />\n  <el-select-v2\n    disabled\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; vertical-align: middle;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n          disabled: idx % 10 === 0,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "option-grouping"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#option-grouping"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Option Grouping")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "We can group option as we wanted, as long as the data satisfies the pattern.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 10 }).map((_, idx) => {\n          const label = idx + 1\n          return {\n            value: `Group ${label}`,\n            label: `Group ${label}`,\n            options: Array.from({ length: 10 }).map((_, idx) => ({\n              value: `Option ${idx + 1 + 10 * label}`,\n              label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,\n            })),\n          }\n        }),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "customized-option-renderer"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#customized-option-renderer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Customized option renderer")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "We can define our own template for rendering the option in the popup.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  >\n    <template #default=\"{item}\">\n      <span style=\"margin-right: 8px;\">{{ item.label }}</span>\n      <span style=\"color: #8492a6; font-size: 13px\">\n        {{ item.value }}\n      </span>\n    </template>\n  </el-select-v2>\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "clearable-selector"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#clearable-selector"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Clearable selector")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "We can clear all the selected options at once, also applicable for single select.", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value1\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n    clearable\n  />\n  <el-select-v2\n    v-model=\"value2\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; vertical-align: middle;\"\n    clearable\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value1: [],\n        value2: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"create-option\"><a class=\"header-anchor\" href=\"#create-option\">¶</a> Create Option</h3><p>WIP👷‍♀️</p><h3 id=\"remote-search\"><a class=\"header-anchor\" href=\"#remote-search\">¶</a> Remote search</h3><p>WIP 👷‍♀️</p><h3 id=\"keyboard-navigation\"><a class=\"header-anchor\" href=\"#keyboard-navigation\">¶</a> Keyboard navigation</h3><p>WIP 👷‍♀️</p><div class=\"tip\"><p>Some APIs are still undergoing (comparing to the non-virtualized select), because there were lots of legacy API refactors and new designs, the current version only implements the simplest and most used functionalities.</p></div><h3 id=\"selectv2-attributes\"><a class=\"header-anchor\" href=\"#selectv2-attributes\">¶</a> SelectV2 Attributes</h3><table><thead><tr><th>Param</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>biding value</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>is multiple</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>unique identity key name for value, required when value is an object</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>input box size</td><td>string</td><td>medium/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>whether select can be cleared</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>whether to collapse tags to a text when multiple selecting</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>maximum number of options user can select when multiple is true. No limit when set to 0</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>the name attribute of select input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>select input 的 autocomplete 属性</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>the autocomplete attribute of select input</td><td>string</td><td>—</td><td>Please select</td></tr><tr><td>filterable</td><td>is filterable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>no-data-text</td><td>displayed text when there is no options, you can also use slot empty</td><td>string</td><td>—</td><td>No Data</td></tr><tr><td>popper-class</td><td>custom class name for Select&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-append-to-body</td><td>whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-options</td><td>Customized popper option see more at <a href=\"https://popper.js.org/documentation.html\">popper.js</a></td><td>object</td><td>-</td><td>-</td></tr><tr><td>automatic-dropdown</td><td>for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>Customized clear icon class</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><span style=\"display:none;\"></span><h3 id=\"selectv2-events\"><a class=\"header-anchor\" href=\"#selectv2-events\">¶</a> SelectV2 Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Params</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>—</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table><h3 id=\"selectv2-slots\"><a class=\"header-anchor\" href=\"#selectv2-slots\">¶</a> SelectV2 Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>Option renderer</td></tr><tr><td>empty</td><td>无Option时的列表</td></tr></tbody></table>", 14);

function select_v2vue_type_template_id_7930766c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", select_v2vue_type_template_id_7930766c_hoisted_1, [select_v2vue_type_template_id_7930766c_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/select-v2.md?vue&type=template&id=7930766c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/select-v2.md?vue&type=script&lang=ts


/* harmony default export */ var select_v2vue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          }
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
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
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
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
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: "",
          "collapse-tags": ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
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
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
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
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          disabled: "",
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option" + (idx + 1),
                label: "" + initials[idx % 10] + idx,
                disabled: idx % 10 === 0
              };
            }),
            value: []
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
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 10
            }).map(function (_, idx) {
              var label = idx + 1;
              return {
                value: "Group " + label,
                label: "Group " + label,
                options: Array.from({
                  length: 10
                }).map(function (_, idx) {
                  return {
                    value: "Option " + (idx + 1 + 10 * label),
                    label: "" + initials[idx % 10] + (idx + 1 + 10 * label)
                  };
                })
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-right": "8px"
        }
      };
      var _hoisted_2 = {
        style: {
          "color": "#8492a6",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, {
          default: _withCtx(function (_ref) {
            var item = _ref.item;
            return [_createVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.value), 1)];
          }),
          _: 1
        }, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: "",
          clearable: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "vertical-align": "middle"
          },
          clearable: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value1: [],
            value2: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/select-v2.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/select-v2.md



select_v2vue_type_script_lang_ts.render = select_v2vue_type_template_id_7930766c_render

/* harmony default export */ var select_v2 = __webpack_exports__["default"] = (select_v2vue_type_script_lang_ts);

/***/ })

}]);