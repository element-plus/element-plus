(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/date-picker.md?vue&type=template&id=f0236b20

var date_pickervue_type_template_id_f0236b20_hoisted_1 = {
  class: "content element-doc"
};

var date_pickervue_type_template_id_f0236b20_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "datepicker"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#datepicker"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" DatePicker")], -1);

var date_pickervue_type_template_id_f0236b20_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Use Date Picker for date input.", -1);

var date_pickervue_type_template_id_f0236b20_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "enter-date"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#enter-date"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Enter Date")], -1);

var date_pickervue_type_template_id_f0236b20_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Basic date picker measured by 'day'.", -1);

var date_pickervue_type_template_id_f0236b20_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("The measurement is determined by the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute. You can enable quick options via "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "shortcuts"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" property. The disabled date is set by "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "disabledDate"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", which is a function.")])], -1);

var date_pickervue_type_template_id_f0236b20_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"date\"\n      placeholder=\"Pick a day\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Picker with quick options</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"date\"\n      placeholder=\"Pick a day\"\n      :disabled-date=\"disabledDate\"\n      :shortcuts=\"shortcuts\"\n    >\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabledDate(time) {\n          return time.getTime() > Date.now()\n        },\n        shortcuts: [{\n          text: 'Today',\n          value: new Date(),\n        }, {\n          text: 'Yesterday',\n          value: (() => {\n            const date = new Date()\n            date.setTime(date.getTime() - 3600 * 1000 * 24)\n            return date\n          })(),\n        }, {\n          text: 'A week ago',\n          value: (() => {\n            const date = new Date()\n            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)\n            return date\n          })(),\n        }],\n        value1: '',\n        value2: '',\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        disabledDate(time) {\n          return time.getTime() > Date.now();\n        },\n        shortcuts: [\n          {\n            text: 'Today',\n            value: new Date(),\n          },\n          {\n            text: 'Yesterday',\n            value: (() => {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24);\n              return date;\n            })(),\n          },\n          {\n            text: 'A week ago',\n            value: (() => {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n              return date;\n            })(),\n          },\n        ],\n        value1: '',\n        value2: '',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var date_pickervue_type_template_id_f0236b20_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "other-measurements"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#other-measurements"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Other measurements")], -1);

var date_pickervue_type_template_id_f0236b20_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "You can choose week, month, year or multiple dates by extending the standard date picker component.", -1);

var date_pickervue_type_template_id_f0236b20_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"container\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Week</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"week\"\n      format=\"[Week] ww\"\n      placeholder=\"Pick a week\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Month</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"month\"\n      placeholder=\"Pick a month\">\n    </el-date-picker>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Year</span>\n    <el-date-picker\n      v-model=\"value3\"\n      type=\"year\"\n      placeholder=\"Pick a year\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Dates</span>\n    <el-date-picker\n      type=\"dates\"\n      v-model=\"value4\"\n      placeholder=\"Pick one or more dates\">\n    </el-date-picker>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: '',\n        value2: '',\n        value3: '',\n        value4: ''\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        value1: '',\n        value2: '',\n        value3: '',\n        value4: '',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "date-range"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#date-range"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Date Range")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Picking a date range is supported.", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "unlink-panels"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"daterange\"\n      range-separator=\"To\"\n      start-placeholder=\"Start date\"\n      end-placeholder=\"End date\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">With quick options</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"daterange\"\n      unlink-panels\n      range-separator=\"To\"\n      start-placeholder=\"Start date\"\n      end-placeholder=\"End date\"\n      :shortcuts=\"shortcuts\"\n    >\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        shortcuts: [{\n          text: 'Last week',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)\n            return [start, end]\n          })(),\n        }, {\n          text: 'Last month',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)\n            return [start, end]\n          })(),\n        }, {\n          text: 'Last 3 months',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)\n            return [start, end]\n          })(),\n        }],\n        value1: '',\n        value2: ''\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        shortcuts: [\n          {\n            text: 'Last week',\n            value: (() => {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n              return [start, end];\n            })(),\n          },\n          {\n            text: 'Last month',\n            value: (() => {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n              return [start, end];\n            })(),\n          },\n          {\n            text: 'Last 3 months',\n            value: (() => {\n              const end = new Date();\n              const start = new Date();\n              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n              return [start, end];\n            })(),\n          },\n        ],\n        value1: '',\n        value2: '',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "month-range"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#month-range"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Month Range")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Picking a month range is supported.", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "unlink-panels"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"monthrange\"\n      range-separator=\"To\"\n      start-placeholder=\"Start month\"\n      end-placeholder=\"End month\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">With quick options</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"monthrange\"\n      unlink-panels\n      range-separator=\"To\"\n      start-placeholder=\"Start month\"\n      end-placeholder=\"End month\"\n      :shortcuts=\"shortcuts\"\n    >\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        shortcuts: [{\n          text: 'This month',\n          value: [new Date(), new Date()],\n        }, {\n          text: 'This year',\n          value: (() => {\n            const end = new Date()\n            const start = new Date(new Date().getFullYear(), 0)\n            return [start, end]\n          })(),\n        }, {\n          text: 'Last 6 months',\n          value: (() => {\n            const end = new Date()\n            const start = new Date()\n            start.setMonth(start.getMonth() - 6)\n            return [start, end]\n          })(),\n        }],\n        value1: '',\n        value2: ''\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        shortcuts: [\n          {\n            text: 'This month',\n            value: [new Date(), new Date()],\n          },\n          {\n            text: 'This year',\n            value: (() => {\n              const end = new Date();\n              const start = new Date(new Date().getFullYear(), 0);\n              return [start, end];\n            })(),\n          },\n          {\n            text: 'Last 6 months',\n            value: (() => {\n              const end = new Date();\n              const start = new Date();\n              start.setMonth(start.getMonth() - 6);\n              return [start, end];\n            })(),\n          },\n        ],\n        value1: '',\n        value2: '',\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"default-value\"><a class=\"header-anchor\" href=\"#default-value\">¶</a> Default Value</h3><p>If user hasn&#39;t picked a date, shows today&#39;s calendar by default. You can use <code>default-value</code> to set another date. Its value should be parsable by <code>new Date()</code>.</p><p>If type is <code>daterange</code>, <code>default-value</code> sets the left side calendar.</p>", 3);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">date</span>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"date\"\n      placeholder=\"Pick a date\"\n      :default-value=\"new Date(2010, 9, 1)\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">daterange</span>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"daterange\"\n      start-placeholder=\"Start Date\"\n      end-placeholder=\"End Date\"\n      :default-value=\"[new Date(2010, 9, 1), new Date(2010, 10, 1)]\">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: '',\n        value2: ''\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const value1 = ref('');\n      const value2 = ref('');\n\n      return {\n        value1,\n        value2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"date-formats\"><a class=\"header-anchor\" href=\"#date-formats\">¶</a> Date Formats</h3><p>Use <code>format</code> to control displayed text&#39;s format in the input box.</p><p>By default, the component accepts and emits a <code>Date</code> object.</p><p>Check the list <a href=\"https://day.js.org/docs/en/display/format#list-of-all-available-formats\">here</a> of all available formats of Day.js.</p><div class=\"warning\"><p>Pay attention to capitalization</p></div>", 5);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Emits Date object</span>\n    <div class=\"demonstration\">Value: {{ value1 }}</div>\n    <el-date-picker\n      v-model=\"value1\"\n      type=\"date\"\n      placeholder=\"Pick a Date\"\n      format=\"YYYY/MM/DD\">\n    </el-date-picker>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Use value-format</span>\n    <div class=\"demonstration\">Value：{{ value2 }}</div>\n    <el-date-picker\n      v-model=\"value2\"\n      type=\"date\"\n      placeholder=\"Pick a Date\"\n      format=\"YYYY/MM/DD\"\n      value-format=\"YYYY-MM-DD\">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: '',\n        value2: ''\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const value1 = ref('');\n      const value2 = ref('');\n\n      return {\n        value1,\n        value2,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "default-time-for-start-date-and-end-date"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#default-time-for-start-date-and-end-date"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Default time for start date and end date")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "When picking a date range, you can assign the time part for start date and end date.", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("By default, the time part of start date and end date are both "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "00:00:00"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Setting "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-time"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date.")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <p>Component value：{{ value }}</p>\n    <el-date-picker\n      v-model=\"value\"\n      type=\"daterange\"\n      start-placeholder=\"Start date\"\n      end-placeholder=\"End date\"\n      :default-time=\"defaultTime\"\n    ></el-date-picker>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: '',\n        defaultTime: [\n          new Date(2000, 1, 1, 0, 0, 0),\n          new Date(2000, 2, 1, 23, 59, 59)\n        ] // '00:00:00', '23:59:59'\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const value = ref('');\n      const defaultTime = ref([\n        new Date(2000, 1, 1, 0, 0, 0),\n        new Date(2000, 2, 1, 23, 59, 59),\n      ]); // '00:00:00', '23:59:59'\n\n      return {\n        value,\n        defaultTime,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"localization\"><a class=\"header-anchor\" href=\"#localization\">¶</a> Localization</h3><p>The default locale of is English, if you need to use other languages, please check <a href=\"#/en-US/component/i18n\">Internationalization</a></p><p>Note, date time locale (month name, first day of the week ...) are also configed in localization.</p><h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>date(DatePicker) / array(DateRangePicker)</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>whether DatePicker is read only</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>whether DatePicker is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of Input</td><td>string</td><td>large/medium/small/mini</td><td>large</td></tr><tr><td>editable</td><td>whether the input is editable</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>whether to show clear button</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>placeholder</td><td>placeholder in non-range mode</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>placeholder for the start date in range mode</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>placeholder for the end date in range mode</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>type of the picker</td><td>string</td><td>year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange</td><td>date</td></tr><tr><td>format</td><td>format of the displayed value in the input box</td><td>string</td><td>see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a></td><td>YYYY-MM-DD</td></tr><tr><td>popper-class</td><td>custom class name for DatePicker&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>range-separator</td><td>range separator</td><td>string</td><td>—</td><td>&#39;-&#39;</td></tr><tr><td>default-value</td><td>optional, default date of the calendar</td><td>Date</td><td>anything accepted by <code>new Date()</code></td><td>—</td></tr><tr><td>default-time</td><td>optional, the time value to use when selecting date range</td><td>Date[]</td><td>Array with length 2, each item is a Date. The first item for the start date and then second item for the end date</td><td>—</td></tr><tr><td>value-format</td><td>optional, format of binding value. If not specified, the binding value will be a Date object</td><td>string</td><td>see <a href=\"#/en-US/component/date-picker#date-formats\">date formats</a></td><td>—</td></tr><tr><td>name</td><td>same as <code>name</code> in native input</td><td>string</td><td>—</td><td>—</td></tr><tr><td>unlink-panels</td><td>unlink two date-panels in range-picker</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>prefix-icon</td><td>Custom prefix icon class</td><td>string</td><td>—</td><td>el-icon-date</td></tr><tr><td>clear-icon</td><td>Custom clear icon class</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr><tr><td>validate-event</td><td>whether to trigger form validation</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>disabledDate</td><td>a function determining if a date is disabled with that date as its parameter. Should return a Boolean</td><td>function</td><td>—</td><td>—</td></tr><tr><td>shortcuts</td><td>an object array to set shortcut options</td><td>object[{ text: string, value: Date }]</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when user confirms the value</td><td>component&#39;s binding value</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>component instance</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>component instance</td></tr></tbody></table><h3 id=\"methods\"><a class=\"header-anchor\" href=\"#methods\">¶</a> Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>focus the Input component</td><td>—</td></tr></tbody></table><h3 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\">¶</a> Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>range-separator</td><td>custom range separator content</td></tr></tbody></table>", 11);

function date_pickervue_type_template_id_f0236b20_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", date_pickervue_type_template_id_f0236b20_hoisted_1, [date_pickervue_type_template_id_f0236b20_hoisted_2, date_pickervue_type_template_id_f0236b20_hoisted_3, date_pickervue_type_template_id_f0236b20_hoisted_4, date_pickervue_type_template_id_f0236b20_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [date_pickervue_type_template_id_f0236b20_hoisted_7];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [date_pickervue_type_template_id_f0236b20_hoisted_6];
    }),
    _: 1
  }), date_pickervue_type_template_id_f0236b20_hoisted_8, date_pickervue_type_template_id_f0236b20_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [date_pickervue_type_template_id_f0236b20_hoisted_10];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, _hoisted_30, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/date-picker.md?vue&type=template&id=f0236b20

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/date-picker.md?vue&type=script&lang=ts


/* harmony default export */ var date_pickervue_type_script_lang_ts = ({
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
      }, "Picker with quick options", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "date",
          placeholder: "Pick a day"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "date",
          placeholder: "Pick a day",
          "disabled-date": _ctx.disabledDate,
          shortcuts: _ctx.shortcuts
        }, null, 8, ["modelValue", "disabled-date", "shortcuts"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            disabledDate: function disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: 'Today',
              value: new Date()
            }, {
              text: 'Yesterday',
              value: function () {
                var date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              }()
            }, {
              text: 'A week ago',
              value: function () {
                var date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              }()
            }],
            value1: '',
            value2: ''
          };
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
        class: "container"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Week", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Month", -1);

      var _hoisted_6 = {
        class: "container"
      };
      var _hoisted_7 = {
        class: "block"
      };

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Year", -1);

      var _hoisted_9 = {
        class: "block"
      };

      var _hoisted_10 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Dates", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "week",
          format: "[Week] ww",
          placeholder: "Pick a week"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "month",
          placeholder: "Pick a month"
        }, null, 8, ["modelValue"])])]), _createVNode("div", _hoisted_6, [_createVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.value3 = $event;
          }),
          type: "year",
          placeholder: "Pick a year"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_9, [_hoisted_10, _createVNode(_component_el_date_picker, {
          type: "dates",
          modelValue: _ctx.value4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.value4 = $event;
          }),
          placeholder: "Pick one or more dates"
        }, null, 8, ["modelValue"])])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: '',
            value2: '',
            value3: '',
            value4: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
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
      }, "With quick options", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "daterange",
          "range-separator": "To",
          "start-placeholder": "Start date",
          "end-placeholder": "End date"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "daterange",
          "unlink-panels": "",
          "range-separator": "To",
          "start-placeholder": "Start date",
          "end-placeholder": "End date",
          shortcuts: _ctx.shortcuts
        }, null, 8, ["modelValue", "shortcuts"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            shortcuts: [{
              text: 'Last week',
              value: function () {
                var end = new Date();
                var start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }()
            }, {
              text: 'Last month',
              value: function () {
                var end = new Date();
                var start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }()
            }, {
              text: 'Last 3 months',
              value: function () {
                var end = new Date();
                var start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }()
            }],
            value1: '',
            value2: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
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
      }, "With quick options", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "monthrange",
          "range-separator": "To",
          "start-placeholder": "Start month",
          "end-placeholder": "End month"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "monthrange",
          "unlink-panels": "",
          "range-separator": "To",
          "start-placeholder": "Start month",
          "end-placeholder": "End month",
          shortcuts: _ctx.shortcuts
        }, null, 8, ["modelValue", "shortcuts"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            shortcuts: [{
              text: 'This month',
              value: [new Date(), new Date()]
            }, {
              text: 'This year',
              value: function () {
                var end = new Date();
                var start = new Date(new Date().getFullYear(), 0);
                return [start, end];
              }()
            }, {
              text: 'Last 6 months',
              value: function () {
                var end = new Date();
                var start = new Date();
                start.setMonth(start.getMonth() - 6);
                return [start, end];
              }()
            }],
            value1: '',
            value2: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "date", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "daterange", -1);

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "date",
          placeholder: "Pick a date",
          "default-value": new Date(2010, 9, 1)
        }, null, 8, ["modelValue", "default-value"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "daterange",
          "start-placeholder": "Start Date",
          "end-placeholder": "End Date",
          "default-value": [new Date(2010, 9, 1), new Date(2010, 10, 1)]
        }, null, 8, ["modelValue", "default-value"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: '',
            value2: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Emits Date object", -1);

      var _hoisted_3 = {
        class: "demonstration"
      };
      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Use value-format", -1);

      var _hoisted_6 = {
        class: "demonstration"
      };

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode("div", _hoisted_3, "Value: " + _toDisplayString(_ctx.value1), 1), _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          type: "date",
          placeholder: "Pick a Date",
          format: "YYYY/MM/DD"
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode("div", _hoisted_6, "Value：" + _toDisplayString(_ctx.value2), 1), _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          type: "date",
          placeholder: "Pick a Date",
          format: "YYYY/MM/DD",
          "value-format": "YYYY-MM-DD"
        }, null, 8, ["modelValue"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value1: '',
            value2: ''
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
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_date_picker = _resolveComponent("el-date-picker");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("p", null, "Component value：" + _toDisplayString(_ctx.value), 1), _createVNode(_component_el_date_picker, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          type: "daterange",
          "start-placeholder": "Start date",
          "end-placeholder": "End date",
          "default-time": _ctx.defaultTime
        }, null, 8, ["modelValue", "default-time"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: '',
            defaultTime: [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)] // '00:00:00', '23:59:59'

          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/date-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/date-picker.md



date_pickervue_type_script_lang_ts.render = date_pickervue_type_template_id_f0236b20_render

/* harmony default export */ var date_picker = __webpack_exports__["default"] = (date_pickervue_type_script_lang_ts);

/***/ })

}]);