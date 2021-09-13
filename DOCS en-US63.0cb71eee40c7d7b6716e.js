(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/time-picker.md?vue&type=template&id=4f83b8f3

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("TimePicker ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Use Time Picker for time input.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Arbitrary time picker ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Can pick an arbitrary time.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-time-picker"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" label, and you can limit the time range by specifying "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabledHours"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabledMinutes"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "disabledSeconds"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". By default, you can scroll the mouse wheel to pick time, alternatively you can use the control arrows when the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute is set.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    v-model=\"value1\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"Arbitrary time\"\n  >\n  </el-time-picker>\n  <el-time-picker\n    arrow-control\n    v-model=\"value2\"\n    :disabled-hours=\"disabledHours\"\n    :disabled-minutes=\"disabledMinutes\"\n    :disabled-seconds=\"disabledSeconds\"\n    placeholder=\"Arbitrary time\"\n  >\n  </el-time-picker>\n</template>\n\n<script>\n  const makeRange = (start, end) => {\n    const result = []\n    for (let i = start; i <= end; i++) {\n      result.push(i)\n    }\n    return result\n  }\n  export default {\n    data() {\n      return {\n        value1: new Date(2016, 9, 10, 18, 40),\n        value2: new Date(2016, 9, 10, 18, 40),\n      }\n    },\n    methods: {\n      // e.g. allow 17:30:00 - 18:30:00\n      disabledHours() {\n        return makeRange(0, 16).concat(makeRange(19, 23))\n      },\n      disabledMinutes(hour) {\n        if (hour === 17) {\n          return makeRange(0, 29)\n        }\n        if (hour === 18) {\n          return makeRange(31, 59)\n        }\n      },\n      disabledSeconds(hour, minute) {\n        if (hour === 18 && minute === 30) {\n          return makeRange(1, 59)\n        }\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Arbitrary time range ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Can pick an arbitrary time range.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("We can pick a time range by adding an "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute. Also, "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is supported in range mode.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-time-picker\n    is-range\n    v-model=\"value1\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\"\n  >\n  </el-time-picker>\n  <el-time-picker\n    is-range\n    arrow-control\n    v-model=\"value2\"\n    range-separator=\"To\"\n    start-placeholder=\"Start time\"\n    end-placeholder=\"End time\"\n  >\n  </el-time-picker>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "binding value"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Date"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "readonly"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether TimePicker is read only"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether TimePicker is disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "editable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether the input is editable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to show clear button"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size of Input"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder in non-range mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "start-placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder for the start time in range mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "end-placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placeholder for the end time in range mode"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "is-range"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to pick a time range"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "arrow-control"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to pick time using arrow buttons"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "align"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "alignment"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "left / center / right"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "custom class name for TimePicker's dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "range-separator"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "range separator"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "'-'")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "format", -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "format of the displayed value in the input box", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("see ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("date formats");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "HH:mm:ss", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "default-value"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "optional, default date of the calendar"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Date for TimePicker, string for TimeSelect"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("anything accepted by "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "new Date()"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" for TimePicker, selectable value for TimeSelect")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("same as "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" in native input")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "prefix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Custom prefix icon class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el-icon-time")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "clear-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Custom clear icon class"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "el-icon-circle-close")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabledHours"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "To specify the array of hours that cannot be selected"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabledMinutes"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "To specify the array of minutes that cannot be selected"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(selectedHour)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabledSeconds"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "To specify the array of seconds that cannot be selected"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "function(selectedHour, selectedMinute)"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when user confirms the value</td><td>component&#39;s binding value</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>component instance</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>component instance</td></tr></tbody></table>", 1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Methods ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>focus the Input component</td><td>—</td></tr><tr><td>blur</td><td>blur the Input component</td><td>—</td></tr></tbody></table>", 1);

function time_pickervue_type_template_id_4f83b8f3_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "timepicker",
    content: "TimePicker",
    href: "#timepicker",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#timepicker"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "arbitrary-time-picker",
    content: "Arbitrary time picker",
    href: "#arbitrary-time-picker",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#arbitrary-time-picker"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "arbitrary-time-range",
    content: "Arbitrary time range",
    href: "#arbitrary-time-range",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#arbitrary-time-range"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_13, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_28, _hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "#/en-US/component/date-picker#date-formats"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32]),
    _: 1
  })]), _hoisted_33]), _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "methods",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/time-picker.md?vue&type=template&id=4f83b8f3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/time-picker.md?vue&type=script&lang=ts

/* harmony default export */ var time_pickervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_time_picker, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          "disabled-hours": _ctx.disabledHours,
          "disabled-minutes": _ctx.disabledMinutes,
          "disabled-seconds": _ctx.disabledSeconds,
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"]), _createVNode(_component_el_time_picker, {
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          "disabled-hours": _ctx.disabledHours,
          "disabled-minutes": _ctx.disabledMinutes,
          "disabled-seconds": _ctx.disabledSeconds,
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue", "disabled-hours", "disabled-minutes", "disabled-seconds"])]);
      }

      const makeRange = (start, end) => {
        const result = [];

        for (let i = start; i <= end; i++) {
          result.push(i);
        }

        return result;
      };

      const democomponentExport = {
        data() {
          return {
            value1: new Date(2016, 9, 10, 18, 40),
            value2: new Date(2016, 9, 10, 18, 40)
          };
        },

        methods: {
          // e.g. allow 17:30:00 - 18:30:00
          disabledHours() {
            return makeRange(0, 16).concat(makeRange(19, 23));
          },

          disabledMinutes(hour) {
            if (hour === 17) {
              return makeRange(0, 29);
            }

            if (hour === 18) {
              return makeRange(31, 59);
            }
          },

          disabledSeconds(hour, minute) {
            if (hour === 18 && minute === 30) {
              return makeRange(1, 59);
            }
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_time_picker = _resolveComponent("el-time-picker");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_time_picker, {
          "is-range": "",
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value1 = $event),
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"]), _createVNode(_component_el_time_picker, {
          "is-range": "",
          "arrow-control": "",
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.value2 = $event),
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"])]);
      }

      const democomponentExport = {
        data() {
          return {
            value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
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
// CONCATENATED MODULE: ./website/docs/en-US/time-picker.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/time-picker.md



time_pickervue_type_script_lang_ts.render = time_pickervue_type_template_id_4f83b8f3_render

/* harmony default export */ var time_picker = __webpack_exports__["default"] = (time_pickervue_type_script_lang_ts);

/***/ })

}]);