(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/datetime-picker.md?vue&type=template&id=7fdf6a2a

var datetime_pickervue_type_template_id_7fdf6a2a_hoisted_1 = {
  class: "content element-doc"
};

var datetime_pickervue_type_template_id_7fdf6a2a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("DateTimePicker ");

var datetime_pickervue_type_template_id_7fdf6a2a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Select date and time in one picker.", -1);

var datetime_pickervue_type_template_id_7fdf6a2a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "DateTimePicker is derived from DatePicker and TimePicker. For a more detailed explanation on attributes, you can refer to DatePicker and TimePicker.")], -1);

var datetime_pickervue_type_template_id_7fdf6a2a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Date and time ");

var datetime_pickervue_type_template_id_7fdf6a2a_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You can select date and time in one picker at the same time by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "datetime"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". The way to use shortcuts is the same as Date Picker.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"datetime\"\n      placeholder=\"Select date and time\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">With shortcuts</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"datetime\"\n      placeholder=\"Select date and time\"\n      :shortcuts=\"shortcuts\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">With default time</span>\n    <el-date-picker\n      v-model=\"value3\"\n      type=\"datetime\"\n      placeholder=\"Select date and time\"\n      :default-time=\"defaultTime\">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        shortcuts: [{\n          text: 'Today',\n          value: new Date(),\n        }, {\n          text: 'Yesterday',\n          value: () => {\n            const date = new Date();\n            date.setTime(date.getTime() - 3600 * 1000 * 24);\n            return date\n          },\n        }, {\n          text: 'A week ago',\n          value: () => {\n            const date = new Date();\n            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n            return date\n          },\n        }],\n        value1: '',\n        value2: '',\n        value3: '',\n        defaultTime: new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        shortcuts: [\n          {\n            text: 'Today',\n            value: new Date(),\n          },\n          {\n            text: 'Yesterday',\n            value: () => {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24);\n              return date;\n            },\n          },\n          {\n            text: 'A week ago',\n            value: () => {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n              return date;\n            },\n          },\n        ],\n        value1: '',\n        value2: '',\n        value3: '',\n        defaultTime: new Date(2000, 1, 1, 12, 0, 0), // '12:00:00'\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Date and time range ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You can select date and time range by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "datetimerange"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"datetimerange\"\n      range-separator=\"To\"\n      start-placeholder=\"Start date\"\n      end-placeholder=\"End date\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">With shortcuts</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"datetimerange\"\n      :shortcuts=\"shortcuts\"\n      range-separator=\"To\"\n      start-placeholder=\"Start date\"\n      end-placeholder=\"End date\">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        shortcuts: [{\n          text: 'Last week',\n          value: () => {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n            return [start, end]\n          }\n        }, {\n          text: 'Last month',\n          value: () => {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n            return [start, end]\n          }\n        }, {\n          text: 'Last 3 months',\n          value: () => {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n            return [start, end]\n          }\n        }],\n        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],\n        value2: ''\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        shortcuts: [\n          {\n            text: 'Last week',\n            value: () => {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n              return [start, end];\n            },\n          },\n          {\n            text: 'Last month',\n            value: () => {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n              return [start, end];\n            },\n          },\n          {\n            text: 'Last 3 months',\n            value: () => {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n              return [start, end];\n            },\n          },\n        ],\n        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],\n        value2: '',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Default time value for start date and end date ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("When picking date range on the date panel with type "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "datetimerange"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "00:00:00"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" will be used as the default time value for start and end date. We can control it with the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute. "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" accepts an array of up to two Date objects. The first item controls time value of the start date and the second item controls time value of the end date.")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Start date time 12:00:00</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"datetimerange\"\n      start-placeholder=\"Start Date\"\n      end-placeholder=\"End Date\"\n      :default-time=\"defaultTime1\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Start date time 12:00:00, end date time 08:00:00</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"datetimerange\"\n      start-placeholder=\"Start Date\"\n      end-placeholder=\"End Date\"\n      :default-time=\"defaultTime2\">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: '',\n        value2: '',\n        defaultTime1: [\n          new Date(2000, 1, 1, 12, 0, 0),\n        ], // '12:00:00'\n        defaultTime2: [\n          new Date(2000, 1, 1, 12, 0, 0),\n          new Date(2000, 2, 1, 8, 0, 0)\n        ] // '12:00:00', '08:00:00'\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        value1: '',\n        value2: '',\n        defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'\n        defaultTime2: [\n          new Date(2000, 1, 1, 12, 0, 0),\n          new Date(2000, 2, 1, 8, 0, 0),\n        ], // '12:00:00', '08:00:00'\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Attributes ");

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Default")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "binding value"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "date(DateTimePicker) / array(DateTimeRangePicker)"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "readonly"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether DatePicker is read only"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether DatePicker is disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "editable"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether the input is editable"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether to show clear button"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "size of Input"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "large/medium/small/mini"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "large")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placeholder in non-range mode"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "start-placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placeholder for the start date in range mode"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "end-placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placeholder for the end date in range mode"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "time-arrow-control"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether to pick time using arrow buttons"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "type of the picker"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "year/month/date/datetime/ week/datetimerange/daterange"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "date")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "format", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "format of the displayed value in the input box", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string", -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("see ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("date formats");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "YYYY-MM-DD HH:mm:ss", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "custom class name for DateTimePicker's dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "range-separator"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "range separator"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "'-'")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "default-value"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "optional, default date of the calendar"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Date"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("anything accepted by "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "new Date()")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "the default time value after picking a date"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "non-range: Date / range: Date[]"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("non-range: a Date object, range: array of two Date objects, and the first item is for the start date and second for the end date. Time "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "00:00:00"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" will be used if not specified")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("same as "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" in native input")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "unlink-panels"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "unllink two date-panels in range-picker"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "prefix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Custom prefix icon class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-icon-date")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "clear-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Custom clear icon class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-icon-circle-close")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "shortcuts"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "an object array to set shortcut options"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "object[{ text: string, value: date / function }]"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "disabledDate"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "a function determining if a date is disabled with that date as its parameter. Should return a Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "cellClassName"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "set custom className"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Function(Date)"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Events ");

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when user confirms the value</td><td>component&#39;s binding value</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>component instance</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>component instance</td></tr><tr><td>calendar-change</td><td>triggers when the calendar selected date is changed. Only for <code>datetimerange</code></td><td>[Date, Date]</td></tr></tbody></table>", 1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Methods ");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Method"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "focus"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "focus the Input component"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")])])], -1);

function datetime_pickervue_type_template_id_7fdf6a2a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", datetime_pickervue_type_template_id_7fdf6a2a_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "datetimepicker",
    content: "DateTimePicker",
    href: "#datetimepicker",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [datetime_pickervue_type_template_id_7fdf6a2a_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#datetimepicker"
      })];
    }),
    _: 1
  }), datetime_pickervue_type_template_id_7fdf6a2a_hoisted_3, datetime_pickervue_type_template_id_7fdf6a2a_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "date-and-time",
    content: "Date and time",
    href: "#date-and-time",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [datetime_pickervue_type_template_id_7fdf6a2a_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#date-and-time"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [datetime_pickervue_type_template_id_7fdf6a2a_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "date-and-time-range",
    content: "Date and time range",
    href: "#date-and-time-range",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#date-and-time-range"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "default-time-value-for-start-date-and-end-date",
    content: "Default time value for start date and end date",
    href: "#default-time-value-for-start-date-and-end-date",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#default-time-value-for-start-date-and-end-date"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#attributes"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_27, _hoisted_28, _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "#/en-US/component/date-picker#date-formats"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  })]), _hoisted_32]), _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#events"
      })];
    }),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#methods"
      })];
    }),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/datetime-picker.md?vue&type=template&id=7fdf6a2a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/datetime-picker.md?vue&type=script&lang=ts


/* harmony default export */ var datetime_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
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
      }, "With shortcuts", -1);

      var _hoisted_5 = {
        class: "block"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "With default time", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "datetime",
          placeholder: "Select date and time"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "datetime",
          placeholder: "Select date and time",
          shortcuts: _ctx.shortcuts
        }, null, 8, ["modelValue", "shortcuts"])]), _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value3 = $event;
          }),
          type: "datetime",
          placeholder: "Select date and time",
          "default-time": _ctx.defaultTime
        }, null, 8, ["modelValue", "default-time"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            shortcuts: [{
              text: 'Today',
              value: new Date()
            }, {
              text: 'Yesterday',
              value: function value() {
                var date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              }
            }, {
              text: 'A week ago',
              value: function value() {
                var date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              }
            }],
            value1: '',
            value2: '',
            value3: '',
            defaultTime: new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'

          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
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
      }, "With shortcuts", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "datetimerange",
          "range-separator": "To",
          "start-placeholder": "Start date",
          "end-placeholder": "End date"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "datetimerange",
          shortcuts: _ctx.shortcuts,
          "range-separator": "To",
          "start-placeholder": "Start date",
          "end-placeholder": "End date"
        }, null, 8, ["modelValue", "shortcuts"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            shortcuts: [{
              text: 'Last week',
              value: function value() {
                var end = new Date();
                var start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            }, {
              text: 'Last month',
              value: function value() {
                var end = new Date();
                var start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            }, {
              text: 'Last 3 months',
              value: function value() {
                var end = new Date();
                var start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }],
            value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            value2: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Start date time 12:00:00", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Start date time 12:00:00, end date time 08:00:00", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "datetimerange",
          "start-placeholder": "Start Date",
          "end-placeholder": "End Date",
          "default-time": _ctx.defaultTime1
        }, null, 8, ["modelValue", "default-time"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "datetimerange",
          "start-placeholder": "Start Date",
          "end-placeholder": "End Date",
          "default-time": _ctx.defaultTime2
        }, null, 8, ["modelValue", "default-time"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: '',
            value2: '',
            defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)],
            // '12:00:00'
            defaultTime2: [new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)] // '12:00:00', '08:00:00'

          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/datetime-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/datetime-picker.md



datetime_pickervue_type_script_lang_ts.render = datetime_pickervue_type_template_id_7fdf6a2a_render

/* harmony default export */ var datetime_picker = __webpack_exports__["default"] = (datetime_pickervue_type_script_lang_ts);

/***/ })

}]);