(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/dropdown.md?vue&type=template&id=7591beb2

const dropdownvue_type_template_id_7591beb2_hoisted_1 = {
  class: "content element-doc"
};

const dropdownvue_type_template_id_7591beb2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown ");

const dropdownvue_type_template_id_7591beb2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Toggleable menu for displaying lists of links and actions.", -1);

const dropdownvue_type_template_id_7591beb2_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const dropdownvue_type_template_id_7591beb2_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Hover on the dropdown menu to unfold it for more actions.", -1);

const dropdownvue_type_template_id_7591beb2_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The triggering element is rendered by the default "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", and the dropdown part is rendered by the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" named "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". By default, dropdown list shows when you hover on the triggering element without having to click it.")])], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown>\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Triggering element ");

const dropdownvue_type_template_id_7591beb2_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Use the button to trigger the dropdown list.", -1);

const dropdownvue_type_template_id_7591beb2_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to split the triggering element into a button group with the left button being a normal button and right one the actual triggering target. If you wanna insert a separator line between item three and item four, just add a class "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "divider"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to item four.")])], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown>\n  <el-button type=\"primary\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </el-button>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n<el-dropdown split-button type=\"primary\" @click=\"handleClick\">\n  Dropdown List\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n      <el-dropdown-item>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown {\n    vertical-align: top;\n  }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert('button click')\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleClick = () => {\n        alert('button click');\n      };\n      return {\n        handleClick,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("How to trigger ");

const dropdownvue_type_template_id_7591beb2_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Click the triggering element or hover on it.", -1);

const dropdownvue_type_template_id_7591beb2_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use the attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". By default, it is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row class=\"block-col-2\">\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">hover to trigger</span>\n    <el-dropdown>\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\"\n            >Action 2</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\"\n            >Action 3</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\"\n            >Action 5</el-dropdown-item\n          >\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">click to trigger</span>\n    <el-dropdown trigger=\"click\">\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\"\n            >Action 2</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\"\n            >Action 3</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\"\n            >Action 5</el-dropdown-item\n          >\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">right click to trigger</span>\n    <el-dropdown trigger=\"contextmenu\">\n      <span class=\"el-dropdown-link\">\n        Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">Action 1</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\"\n            >Action 2</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\"\n            >Action 3</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-check\">Action 4</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\"\n            >Action 5</el-dropdown-item\n          >\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n</el-row>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: var(--el-text-color-secondary);\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n")], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Menu hiding behavior ");

const dropdownvue_type_template_id_7591beb2_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to define if menu closes on clicking.")], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "By default menu will close when you click on menu items, and it can be turned off by setting hide-on-click to false.")], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown :hide-on-click=\"false\">\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

const dropdownvue_type_template_id_7591beb2_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Command event ");

const dropdownvue_type_template_id_7591beb2_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Clicking each dropdown item fires an event whose parameter is assigned by each item.", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown @command=\"handleCommand\">\n  <span class=\"el-dropdown-link\">\n    Dropdown List<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item command=\"a\">Action 1</el-dropdown-item>\n      <el-dropdown-item command=\"b\">Action 2</el-dropdown-item>\n      <el-dropdown-item command=\"c\">Action 3</el-dropdown-item>\n      <el-dropdown-item command=\"d\" disabled>Action 4</el-dropdown-item>\n      <el-dropdown-item command=\"e\" divided>Action 5</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('click on item ' + command)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const handleCommand = (command) => {\n        ElMessage(`click on item ${command}`);\n      };\n      return {\n        handleCommand,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Sizes ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Besides default size, Dropdown component provides three additional sizes for you to choose among different scenarios.", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Use attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to set additional sizes with "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" or "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown split-button type=\"primary\">\n  Default\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"medium\" split-button type=\"primary\">\n  Medium\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"small\" split-button type=\"primary\">\n  Small\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"mini\" split-button type=\"primary\">\n  Mini\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>Action 1</el-dropdown-item>\n      <el-dropdown-item>Action 2</el-dropdown-item>\n      <el-dropdown-item>Action 3</el-dropdown-item>\n      <el-dropdown-item>Action 4</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown Attributes ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("menu button type, refer to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" Component, only works when "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is true")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "menu size, also works on the split button"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "the max height of menu"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether a button group is displayed"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "Whether to disable"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placement of pop menu"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "bottom")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "how to trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hover/click/contextmenu"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hover")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to hide menu after clicking menu-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-timeout"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Delay time before show a dropdown (only works when trigger is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(")")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "250")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-timeout"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Delay time before hide a dropdown (only works when trigger is "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(")")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "150")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tabindex", -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tabindex");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" of Dropdown");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number", -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown Slots ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>content of Dropdown. Notice: Must be a valid html dom element (ex. <code>&lt;span&gt;, &lt;button&gt; etc.</code>) or <code>el-component</code>, to attach the trigger listener</td></tr><tr><td>dropdown</td><td>content of the Dropdown Menu, usually a <code>&lt;el-dropdown-menu&gt;</code> element</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown Events ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>if <code>split-button</code> is <code>true</code>, triggers when left button is clicked</td><td>—</td></tr><tr><td>command</td><td>triggers when a dropdown item is clicked</td><td>the command dispatched from the dropdown item</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr></tbody></table>", 1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown-Menu Slots ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "content of Dropdown Menu")])])], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown-Item Attributes ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>command</td><td>a command to be dispatched to Dropdown&#39;s <code>command</code> callback</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether the item is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>whether a divider is displayed</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>icon class name</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function dropdownvue_type_template_id_7591beb2_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", dropdownvue_type_template_id_7591beb2_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dropdown",
    content: "Dropdown",
    href: "#dropdown",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown"
    })]),
    _: 1
  }), dropdownvue_type_template_id_7591beb2_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), dropdownvue_type_template_id_7591beb2_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "triggering-element",
    content: "Triggering element",
    href: "#triggering-element",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#triggering-element"
    })]),
    _: 1
  }), dropdownvue_type_template_id_7591beb2_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "how-to-trigger",
    content: "How to trigger",
    href: "#how-to-trigger",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#how-to-trigger"
    })]),
    _: 1
  }), dropdownvue_type_template_id_7591beb2_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "menu-hiding-behavior",
    content: "Menu hiding behavior",
    href: "#menu-hiding-behavior",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#menu-hiding-behavior"
    })]),
    _: 1
  }), dropdownvue_type_template_id_7591beb2_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "command-event",
    content: "Command event",
    href: "#command-event",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_7591beb2_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#command-event"
    })]),
    _: 1
  }), dropdownvue_type_template_id_7591beb2_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "sizes",
    content: "Sizes",
    href: "#sizes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#sizes"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dropdown-attributes",
    content: "Dropdown Attributes",
    href: "#dropdown-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown-attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_28, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_39, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_40]),
    _: 1
  }), _hoisted_41]), _hoisted_42, _hoisted_43, _hoisted_44])])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dropdown-slots",
    content: "Dropdown Slots",
    href: "#dropdown-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown-slots"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dropdown-events",
    content: "Dropdown Events",
    href: "#dropdown-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown-events"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dropdown-menu-slots",
    content: "Dropdown-Menu Slots",
    href: "#dropdown-menu-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown-menu-slots"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dropdown-item-attributes",
    content: "Dropdown-Item Attributes",
    href: "#dropdown-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown-item-attributes"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/dropdown.md?vue&type=template&id=7591beb2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/dropdown.md?vue&type=script&lang=ts

/* harmony default export */ var dropdownvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              disabled: ""
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              divided: ""
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Dropdown List");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode(" Dropdown List ");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        const _component_el_button = _resolveComponent("el-button");

        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_createVNode(_component_el_button, {
            type: "primary"
          }, {
            default: _withCtx(() => [_hoisted_1, _hoisted_2]),
            _: 1
          })]),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary",
          onClick: _ctx.handleClick
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_9]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_10]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_11]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_12]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_13]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_8]),
          _: 1
        }, 8, ["onClick"])]);
      }

      const democomponentExport = {
        methods: {
          handleClick() {
            alert('button click');
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "hover to trigger", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 5");

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "click to trigger", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 5");

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "right click to trigger", -1);

      const _hoisted_16 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "block-col-2"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 8
          }, {
            default: _withCtx(() => [_hoisted_1, _createVNode(_component_el_dropdown, null, {
              dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
                default: _withCtx(() => [_createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-plus"
                }, {
                  default: _withCtx(() => [_hoisted_3]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-plus"
                }, {
                  default: _withCtx(() => [_hoisted_4]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-plus-outline"
                }, {
                  default: _withCtx(() => [_hoisted_5]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-check"
                }, {
                  default: _withCtx(() => [_hoisted_6]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-check"
                }, {
                  default: _withCtx(() => [_hoisted_7]),
                  _: 1
                })]),
                _: 1
              })]),
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 8
          }, {
            default: _withCtx(() => [_hoisted_8, _createVNode(_component_el_dropdown, {
              trigger: "click"
            }, {
              dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
                default: _withCtx(() => [_createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-plus"
                }, {
                  default: _withCtx(() => [_hoisted_10]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-plus"
                }, {
                  default: _withCtx(() => [_hoisted_11]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-plus-outline"
                }, {
                  default: _withCtx(() => [_hoisted_12]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-check"
                }, {
                  default: _withCtx(() => [_hoisted_13]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-check"
                }, {
                  default: _withCtx(() => [_hoisted_14]),
                  _: 1
                })]),
                _: 1
              })]),
              default: _withCtx(() => [_hoisted_9]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 8
          }, {
            default: _withCtx(() => [_hoisted_15, _createVNode(_component_el_dropdown, {
              trigger: "contextmenu"
            }, {
              dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
                default: _withCtx(() => [_createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-plus"
                }, {
                  default: _withCtx(() => [_hoisted_17]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-plus"
                }, {
                  default: _withCtx(() => [_hoisted_18]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-plus-outline"
                }, {
                  default: _withCtx(() => [_hoisted_19]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-check"
                }, {
                  default: _withCtx(() => [_hoisted_20]),
                  _: 1
                }), _createVNode(_component_el_dropdown_item, {
                  icon: "el-icon-circle-check"
                }, {
                  default: _withCtx(() => [_hoisted_21]),
                  _: 1
                })]),
                _: 1
              })]),
              default: _withCtx(() => [_hoisted_16]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_dropdown, {
          "hide-on-click": false
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              disabled: ""
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              divided: ""
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" Dropdown List"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Action 5");

      function render(_ctx, _cache) {
        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_dropdown, {
          onCommand: _ctx.handleCommand
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, {
              command: "a"
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              command: "b"
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              command: "c"
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              command: "d",
              disabled: ""
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, {
              command: "e",
              divided: ""
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }, 8, ["onCommand"])]);
      }

      const democomponentExport = {
        methods: {
          handleCommand(command) {
            this.$message('click on item ' + command);
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" Default ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode(" Medium ");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode(" Small ");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("Action 4");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode(" Mini ");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("Action 1");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("Action 2");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("Action 3");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("Action 4");

      function render(_ctx, _cache) {
        const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");

        const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");

        const _component_el_dropdown = _resolveComponent("el-dropdown");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_1]),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "medium",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_8]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_9]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_10]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_6]),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "small",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_12]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_13]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_14]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_15]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_11]),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "mini",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_18]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_19]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_20]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_16]),
          _: 1
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_7591beb2_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ })

}]);