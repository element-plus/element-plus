(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/select.md?vue&type=template&id=83469cde

var selectvue_type_template_id_83469cde_hoisted_1 = {
  class: "content element-doc"
};

var selectvue_type_template_id_83469cde_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Select")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When there are plenty of options, use a drop-down menu to display and select desired ones.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is the value of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" that is currently selected.")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled-option"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled-option"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled option")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set the value of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to disable this option.")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2',\n          disabled: true\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "disabled-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#disabled-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Disabled select")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Disable the whole component.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to make it disabled.")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" disabled placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "clearable-single-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#clearable-single-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Clearable single select")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can clear Select using a clear icon.", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and a clear icon will appear. Note that "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is only for single select.")])], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" clearable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "basic-multiple-select"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-multiple-select"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Basic multiple select")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Multiple select uses tags to display selected options.", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to enable multiple mode. In this case, the value of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" will be an array of selected options. By default the selected options will be displayed as Tags. You can collapse them to a text by using "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value1\" multiple placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model=\"value2\"\n    multiple\n    collapse-tags\n    style=\"margin-left: 20px;\"\n    placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value1: [],\n        value2: []\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "custom-template"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#custom-template"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Custom template")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can customize HTML templates for options.", -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Insert customized HTML templates into the slot of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.value }}</span>\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [{\n          value: 'Beijing',\n          label: 'Beijing'\n        }, {\n          value: 'Shanghai',\n          label: 'Shanghai'\n        }, {\n          value: 'Nanjing',\n          label: 'Nanjing'\n        }, {\n          value: 'Chengdu',\n          label: 'Chengdu'\n        }, {\n          value: 'Shenzhen',\n          label: 'Shenzhen'\n        }, {\n          value: 'Guangzhou',\n          label: 'Guangzhou'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "grouping"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#grouping"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Grouping")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Display options in groups.", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Use "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option-group"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to group the options, and its "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute stands for the name of the group.")])], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\">\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\">\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          label: 'Popular cities',\n          options: [{\n            value: 'Shanghai',\n            label: 'Shanghai'\n          }, {\n            value: 'Beijing',\n            label: 'Beijing'\n          }]\n        }, {\n          label: 'City name',\n          options: [{\n            value: 'Chengdu',\n            label: 'Chengdu'\n          }, {\n            value: 'Shenzhen',\n            label: 'Shenzhen'\n          }, {\n            value: 'Guangzhou',\n            label: 'Guangzhou'\n          }, {\n            value: 'Dalian',\n            label: 'Dalian'\n          }]\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "option-filtering"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#option-filtering"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Option filtering")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can filter options for your desired ones.", -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Adding "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" enables filtering. By default, Select will find all the options whose "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute contains the input value. If you prefer other filtering strategies, you can pass the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" that gets called when the input value changes, and its parameter is the current input value.")])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" filterable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "remote-search"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#remote-search"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Remote Search")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Enter keywords and search data from server.", -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Set the value of "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" with "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to enable remote search, and you should pass the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is a "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" that gets called when the input value changes, and its parameter is the current input value. Note that if "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" is rendered with the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "v-for"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" directive, you should add the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Its value needs to be unique, such as "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "item.value"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" in the following example.")])], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder=\"Please enter a keyword\"\n    :remote-method=\"remoteMethod\"\n    :loading=\"loading\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: [\"Alabama\", \"Alaska\", \"Arizona\",\n        \"Arkansas\", \"California\", \"Colorado\",\n        \"Connecticut\", \"Delaware\", \"Florida\",\n        \"Georgia\", \"Hawaii\", \"Idaho\", \"Illinois\",\n        \"Indiana\", \"Iowa\", \"Kansas\", \"Kentucky\",\n        \"Louisiana\", \"Maine\", \"Maryland\",\n        \"Massachusetts\", \"Michigan\", \"Minnesota\",\n        \"Mississippi\", \"Missouri\", \"Montana\",\n        \"Nebraska\", \"Nevada\", \"New Hampshire\",\n        \"New Jersey\", \"New Mexico\", \"New York\",\n        \"North Carolina\", \"North Dakota\", \"Ohio\",\n        \"Oklahoma\", \"Oregon\", \"Pennsylvania\",\n        \"Rhode Island\", \"South Carolina\",\n        \"South Dakota\", \"Tennessee\", \"Texas\",\n        \"Utah\", \"Vermont\", \"Virginia\",\n        \"Washington\", \"West Virginia\", \"Wisconsin\",\n        \"Wyoming\"]\n      }\n    },\n    mounted() {\n      this.list = this.states.map(item => {\n        return { value: `value:${item}`, label: `label:${item}` };\n      });\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true;\n          setTimeout(() => {\n            this.loading = false;\n            this.options = this.list.filter(item => {\n              return item.label.toLowerCase()\n                .indexOf(query.toLowerCase()) > -1;\n            });\n          }, 200);\n        } else {\n          this.options = [];\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "create-new-items"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#create-new-items"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Create new items")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Create and select new items that are not included in select options", -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("By using the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute, users can create new items by typing in the input box. Note that for "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" to work, "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" must be "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". This example also demonstrates "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-first-option"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". When this attribute is set to "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", you can select the first option in the current option list by hitting enter without having to navigate with mouse or arrow keys.")])], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    default-first-option\n    placeholder=\"Choose tags for your article\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'HTML',\n          label: 'HTML'\n        }, {\n          value: 'CSS',\n          label: 'CSS'\n        }, {\n          value: 'JavaScript',\n          label: 'JavaScript'\n        }],\n        value: []\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"tip\"><p>If the binding value of Select is an object, make sure to assign <code>value-key</code> as its unique identity key name.</p></div><h3 id=\"select-attributes\"><a class=\"header-anchor\" href=\"#select-attributes\">¶</a> Select Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>whether multiple-select is activated</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>whether Select is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>unique identity key name for value, required when value is an object</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>size of Input</td><td>string</td><td>large/medium/small/mini</td><td>large</td></tr><tr><td>clearable</td><td>whether select can be cleared</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>whether to collapse tags to a text when multiple selecting</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>maximum number of options user can select when <code>multiple</code> is <code>true</code>. No limit when set to 0</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>the name attribute of select input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>the autocomplete attribute of select input</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>placeholder</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>filterable</td><td>whether Select is filterable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>whether creating new items is allowed. To use this, <code>filterable</code> must be true</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>custom filter method</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>whether options are loaded from server</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>custom remote search method</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>whether Select is loading data from server</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>displayed text while loading data from server</td><td>string</td><td>—</td><td>Loading</td></tr><tr><td>no-match-text</td><td>displayed text when no data matches the filtering query, you can also use slot <code>empty</code></td><td>string</td><td>—</td><td>No matching data</td></tr><tr><td>no-data-text</td><td>displayed text when there is no options, you can also use slot <code>empty</code></td><td>string</td><td>—</td><td>No data</td></tr><tr><td>popper-class</td><td>custom class name for Select&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>select first matching option on enter key. Use with <code>filterable</code> or <code>remote</code></td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>automatic-dropdown</td><td>for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>Custom clear icon class</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id=\"select-events\"><a class=\"header-anchor\" href=\"#select-events\">¶</a> Select Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>—</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table><h3 id=\"select-slots\"><a class=\"header-anchor\" href=\"#select-slots\">¶</a> Select Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Option component list</td></tr><tr><td>prefix</td><td>content as Select prefix</td></tr><tr><td>empty</td><td>content when there is no options</td></tr></tbody></table><h3 id=\"option-group-attributes\"><a class=\"header-anchor\" href=\"#option-group-attributes\">¶</a> Option Group Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>name of the group</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether to disable all options in this group</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"option-attributes\"><a class=\"header-anchor\" href=\"#option-attributes\">¶</a> Option Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>value of option</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>label of option, same as <code>value</code> if omitted</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether option is disabled</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>focus the Input component</td><td>-</td></tr><tr><td>blur</td><td>blur the Input component, and hide the dropdown</td><td>-</td></tr></tbody></table>", 13);

function selectvue_type_template_id_83469cde_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo9");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", selectvue_type_template_id_83469cde_hoisted_1, [selectvue_type_template_id_83469cde_hoisted_2, _hoisted_3, _hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_26, _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_30, _hoisted_31, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_34, _hoisted_35, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    _: 1
  }), _hoisted_38, _hoisted_39, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/select.md?vue&type=template&id=83469cde

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/select.md?vue&type=script&lang=ts


/* harmony default export */ var selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value,
                disabled: item.disabled
              }, null, 8, ["label", "value", "disabled"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2',
              disabled: true
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          disabled: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          clearable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          multiple: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_select, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          multiple: "",
          "collapse-tags": "",
          style: {
            "margin-left": "20px"
          },
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value1: [],
            value2: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */];
      var _hoisted_1 = {
        style: {
          "float": "left"
        }
      };
      var _hoisted_2 = {
        style: {
          "float": "right",
          "color": "#8492a6",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.cities, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, {
                default: _withCtx(function () {
                  return [_createVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.value), 1)];
                }),
                _: 2
              }, 1032, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            cities: [{
              value: 'Beijing',
              label: 'Beijing'
            }, {
              value: 'Shanghai',
              label: 'Shanghai'
            }, {
              value: 'Nanjing',
              label: 'Nanjing'
            }, {
              value: 'Chengdu',
              label: 'Chengdu'
            }, {
              value: 'Shenzhen',
              label: 'Shenzhen'
            }, {
              value: 'Guangzhou',
              label: 'Guangzhou'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_option_group = _resolveComponent("el-option-group");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (group) {
              return _openBlock(), _createBlock(_component_el_option_group, {
                key: group.label,
                label: group.label
              }, {
                default: _withCtx(function () {
                  return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(group.options, function (item) {
                    return _openBlock(), _createBlock(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }), 128))];
                }),
                _: 2
              }, 1032, ["label"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              label: 'Popular cities',
              options: [{
                value: 'Shanghai',
                label: 'Shanghai'
              }, {
                value: 'Beijing',
                label: 'Beijing'
              }]
            }, {
              label: 'City name',
              options: [{
                value: 'Chengdu',
                label: 'Chengdu'
              }, {
                value: 'Shenzhen',
                label: 'Shenzhen'
              }, {
                value: 'Guangzhou',
                label: 'Guangzhou'
              }, {
                value: 'Dalian',
                label: 'Dalian'
              }]
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          multiple: "",
          filterable: "",
          remote: "",
          "reserve-keyword": "",
          placeholder: "Please enter a keyword",
          "remote-method": _ctx.remoteMethod,
          loading: _ctx.loading
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "remote-method", "loading"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [],
            value: [],
            list: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
          };
        },
        mounted: function mounted() {
          this.list = this.states.map(function (item) {
            return {
              value: "value:" + item,
              label: "label:" + item
            };
          });
        },
        methods: {
          remoteMethod: function remoteMethod(query) {
            var _this = this;

            if (query !== '') {
              this.loading = true;
              setTimeout(function () {
                _this.loading = false;
                _this.options = _this.list.filter(function (item) {
                  return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
              }, 200);
            } else {
              this.options = [];
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          multiple: "",
          filterable: "",
          "allow-create": "",
          "default-first-option": "",
          placeholder: "Choose tags for your article"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'HTML',
              label: 'HTML'
            }, {
              value: 'CSS',
              label: 'CSS'
            }, {
              value: 'JavaScript',
              label: 'JavaScript'
            }],
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/select.md



selectvue_type_script_lang_ts.render = selectvue_type_template_id_83469cde_render

/* harmony default export */ var en_US_select = __webpack_exports__["default"] = (selectvue_type_script_lang_ts);

/***/ })

}]);