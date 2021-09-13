(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/select.md?vue&type=template&id=d6a57ac2

const selectvue_type_template_id_d6a57ac2_hoisted_1 = {
  class: "content element-doc"
};

const selectvue_type_template_id_d6a57ac2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "When there are plenty of options, use a drop-down menu to display and select desired ones.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is the value of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" that is currently selected.")])], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Disabled option ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set the value of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to disable this option.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n            disabled: true,\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Disabled select ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Disable the whole component.", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to make it disabled.")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" disabled placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Clearable single select ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can clear Select using a clear icon.", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and a clear icon will appear. Note that "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is only for single select.")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" clearable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic multiple select ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Multiple select uses tags to display selected options.", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to enable multiple mode. In this case, the value of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" will be an array of selected options. By default the selected options will be displayed as Tags. You can collapse them to a text by using "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value1\" multiple placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model=\"value2\"\n    multiple\n    collapse-tags\n    style=\"margin-left: 20px;\"\n    placeholder=\"Select\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value1: [],\n        value2: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom template ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can customize HTML templates for options.", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Insert customized HTML templates into the slot of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span\n        style=\"float: right; color: var(--el-text-color-secondary); font-size: 13px\"\n        >{{ item.value }}</span\n      >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [\n          {\n            value: 'Beijing',\n            label: 'Beijing',\n          },\n          {\n            value: 'Shanghai',\n            label: 'Shanghai',\n          },\n          {\n            value: 'Nanjing',\n            label: 'Nanjing',\n          },\n          {\n            value: 'Chengdu',\n            label: 'Chengdu',\n          },\n          {\n            value: 'Shenzhen',\n            label: 'Shenzhen',\n          },\n          {\n            value: 'Guangzhou',\n            label: 'Guangzhou',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Grouping ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Display options in groups.", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option-group"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to group the options, and its "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute stands for the name of the group.")])], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\"\n    >\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\"\n      >\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            label: 'Popular cities',\n            options: [\n              {\n                value: 'Shanghai',\n                label: 'Shanghai',\n              },\n              {\n                value: 'Beijing',\n                label: 'Beijing',\n              },\n            ],\n          },\n          {\n            label: 'City name',\n            options: [\n              {\n                value: 'Chengdu',\n                label: 'Chengdu',\n              },\n              {\n                value: 'Shenzhen',\n                label: 'Shenzhen',\n              },\n              {\n                value: 'Guangzhou',\n                label: 'Guangzhou',\n              },\n              {\n                value: 'Dalian',\n                label: 'Dalian',\n              },\n            ],\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Option filtering ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "You can filter options for your desired ones.", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Adding "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" enables filtering. By default, Select will find all the options whose "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute contains the input value. If you prefer other filtering strategies, you can pass the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" that gets called when the input value changes, and its parameter is the current input value.")])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select v-model=\"value\" filterable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'Option1',\n            label: 'Option1',\n          },\n          {\n            value: 'Option2',\n            label: 'Option2',\n          },\n          {\n            value: 'Option3',\n            label: 'Option3',\n          },\n          {\n            value: 'Option4',\n            label: 'Option4',\n          },\n          {\n            value: 'Option5',\n            label: 'Option5',\n          },\n        ],\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Remote Search ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Enter keywords and search data from server.", -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set the value of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to enable remote search, and you should pass the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "remote-method"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" that gets called when the input value changes, and its parameter is the current input value. Note that if "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is rendered with the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-for"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" directive, you should add the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". Its value needs to be unique, such as "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "item.value"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in the following example.")])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder=\"Please enter a keyword\"\n    :remote-method=\"remoteMethod\"\n    :loading=\"loading\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: [\n          'Alabama',\n          'Alaska',\n          'Arizona',\n          'Arkansas',\n          'California',\n          'Colorado',\n          'Connecticut',\n          'Delaware',\n          'Florida',\n          'Georgia',\n          'Hawaii',\n          'Idaho',\n          'Illinois',\n          'Indiana',\n          'Iowa',\n          'Kansas',\n          'Kentucky',\n          'Louisiana',\n          'Maine',\n          'Maryland',\n          'Massachusetts',\n          'Michigan',\n          'Minnesota',\n          'Mississippi',\n          'Missouri',\n          'Montana',\n          'Nebraska',\n          'Nevada',\n          'New Hampshire',\n          'New Jersey',\n          'New Mexico',\n          'New York',\n          'North Carolina',\n          'North Dakota',\n          'Ohio',\n          'Oklahoma',\n          'Oregon',\n          'Pennsylvania',\n          'Rhode Island',\n          'South Carolina',\n          'South Dakota',\n          'Tennessee',\n          'Texas',\n          'Utah',\n          'Vermont',\n          'Virginia',\n          'Washington',\n          'West Virginia',\n          'Wisconsin',\n          'Wyoming',\n        ],\n      }\n    },\n    mounted() {\n      this.list = this.states.map((item) => {\n        return { value: `value:${item}`, label: `label:${item}` }\n      })\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== '') {\n          this.loading = true\n          setTimeout(() => {\n            this.loading = false\n            this.options = this.list.filter((item) => {\n              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1\n            })\n          }, 200)\n        } else {\n          this.options = []\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Create new items ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Create and select new items that are not included in select options", -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("By using the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute, users can create new items by typing in the input box. Note that for "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "allow-create"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to work, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" must be "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". This example also demonstrates "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "default-first-option"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". When this attribute is set to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", you can select the first option in the current option list by hitting enter without having to navigate with mouse or arrow keys.")])], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    default-first-option\n    placeholder=\"Choose tags for your article\"\n  >\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n    >\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [\n          {\n            value: 'HTML',\n            label: 'HTML',\n          },\n          {\n            value: 'CSS',\n            label: 'CSS',\n          },\n          {\n            value: 'JavaScript',\n            label: 'JavaScript',\n          },\n        ],\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("If the binding value of Select is an object, make sure to assign "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "value-key"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" as its unique identity key name.")])], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select Attributes ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>whether multiple-select is activated</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>whether Select is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>unique identity key name for value, required when value is an object</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>size of Input</td><td>string</td><td>large/medium/small/mini</td><td>large</td></tr><tr><td>clearable</td><td>whether select can be cleared</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>whether to collapse tags to a text when multiple selecting</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>maximum number of options user can select when <code>multiple</code> is <code>true</code>. No limit when set to 0</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>the name attribute of select input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>the autocomplete attribute of select input</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>placeholder</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>filterable</td><td>whether Select is filterable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>whether creating new items is allowed. To use this, <code>filterable</code> must be true</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>custom filter method</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>whether options are loaded from server</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>custom remote search method</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>whether Select is loading data from server</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>displayed text while loading data from server</td><td>string</td><td>—</td><td>Loading</td></tr><tr><td>no-match-text</td><td>displayed text when no data matches the filtering query, you can also use slot <code>empty</code></td><td>string</td><td>—</td><td>No matching data</td></tr><tr><td>no-data-text</td><td>displayed text when there is no options, you can also use slot <code>empty</code></td><td>string</td><td>—</td><td>No data</td></tr><tr><td>popper-class</td><td>custom class name for Select&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>select first matching option on enter key. Use with <code>filterable</code> or <code>remote</code></td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>Custom clear icon class</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table>", 1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select Events ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>—</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Select Slots ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Option component list</td></tr><tr><td>prefix</td><td>content as Select prefix</td></tr><tr><td>empty</td><td>content when there is no options</td></tr></tbody></table>", 1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Option Group Attributes ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>name of the group</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether to disable all options in this group</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Option Attributes ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>value of option</td><td>string / number / boolean / object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>label of option, same as <code>value</code> if omitted</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether option is disabled</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>focus the Input component</td><td>-</td></tr><tr><td>blur</td><td>blur the Input component, and hide the dropdown</td><td>-</td></tr></tbody></table>", 1);

function selectvue_type_template_id_d6a57ac2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_element_demo8 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo8");

  const _component_element_demo9 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo9");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", selectvue_type_template_id_d6a57ac2_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select",
    content: "Select",
    href: "#select",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [selectvue_type_template_id_d6a57ac2_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "disabled-option",
    content: "Disabled option",
    href: "#disabled-option",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#disabled-option"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "disabled-select",
    content: "Disabled select",
    href: "#disabled-select",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#disabled-select"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "clearable-single-select",
    content: "Clearable single select",
    href: "#clearable-single-select",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#clearable-single-select"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-multiple-select",
    content: "Basic multiple select",
    href: "#basic-multiple-select",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-multiple-select"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "custom-template",
    content: "Custom template",
    href: "#custom-template",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#custom-template"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "grouping",
    content: "Grouping",
    href: "#grouping",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#grouping"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "option-filtering",
    content: "Option filtering",
    href: "#option-filtering",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#option-filtering"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "remote-search",
    content: "Remote Search",
    href: "#remote-search",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#remote-search"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo8)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "create-new-items",
    content: "Create new items",
    href: "#create-new-items",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#create-new-items"
    })]),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo9)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-attributes",
    content: "Select Attributes",
    href: "#select-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-attributes"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-events",
    content: "Select Events",
    href: "#select-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-events"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "select-slots",
    content: "Select Slots",
    href: "#select-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#select-slots"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "option-group-attributes",
    content: "Option Group Attributes",
    href: "#option-group-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#option-group-attributes"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "option-attributes",
    content: "Option Attributes",
    href: "#option-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#option-attributes"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/select.md?vue&type=template&id=d6a57ac2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/select.md?vue&type=script&lang=ts

/* harmony default export */ var selectvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value,
              disabled: item.disabled
            }, null, 8, ["label", "value", "disabled"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          disabled: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          clearable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          multiple: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_select, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          multiple: "",
          "collapse-tags": "",
          style: {
            "margin-left": "20px"
          },
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        style: {
          "float": "left"
        }
      };
      const _hoisted_2 = {
        style: {
          "float": "right",
          "color": "var(--el-text-color-secondary)",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.cities, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, {
              default: _withCtx(() => [_createElementVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createElementVNode("span", _hoisted_2, _toDisplayString(item.value), 1)]),
              _: 2
            }, 1032, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_option_group = _resolveComponent("el-option-group");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, group => {
            return _openBlock(), _createBlock(_component_el_option_group, {
              key: group.label,
              label: group.label
            }, {
              default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(group.options, item => {
                return _openBlock(), _createBlock(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 128))]),
              _: 2
            }, 1032, ["label"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          filterable: "",
          placeholder: "Select"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo8": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          multiple: "",
          filterable: "",
          remote: "",
          "reserve-keyword": "",
          placeholder: "Please enter a keyword",
          "remote-method": _ctx.remoteMethod,
          loading: _ctx.loading
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue", "remote-method", "loading"])]);
      }

      const democomponentExport = {
        data() {
          return {
            options: [],
            value: [],
            list: [],
            loading: false,
            states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
          };
        },

        mounted() {
          this.list = this.states.map(item => {
            return {
              value: `value:${item}`,
              label: `label:${item}`
            };
          });
        },

        methods: {
          remoteMethod(query) {
            if (query !== '') {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.options = this.list.filter(item => {
                  return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
              }, 200);
            } else {
              this.options = [];
            }
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo9": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_select, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event),
          multiple: "",
          filterable: "",
          "allow-create": "",
          "default-first-option": "",
          placeholder: "Choose tags for your article"
        }, {
          default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
            return _openBlock(), _createBlock(_component_el_option, {
              key: item.value,
              label: item.label,
              value: item.value
            }, null, 8, ["label", "value"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
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
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/select.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/select.md



selectvue_type_script_lang_ts.render = selectvue_type_template_id_d6a57ac2_render

/* harmony default export */ var en_US_select = __webpack_exports__["default"] = (selectvue_type_script_lang_ts);

/***/ })

}]);