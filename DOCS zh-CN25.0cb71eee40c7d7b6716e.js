(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[307],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/dropdown.md?vue&type=template&id=c4b52322

const dropdownvue_type_template_id_c4b52322_hoisted_1 = {
  class: "content element-doc"
};

const dropdownvue_type_template_id_c4b52322_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown 下拉菜单 ");

const dropdownvue_type_template_id_c4b52322_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "将动作或菜单折叠到下拉菜单中。", -1);

const dropdownvue_type_template_id_c4b52322_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基础用法 ");

const dropdownvue_type_template_id_c4b52322_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "移动到下拉菜单上，展开更多操作。", -1);

const dropdownvue_type_template_id_c4b52322_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过组件"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("来设置下拉触发的元素以及需要通过具名"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 来设置下拉菜单。默认情况下，下拉按钮只要"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可，无需点击也会显示下拉菜单。")])], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown>\n  <span class=\"el-dropdown-link\">\n    下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item disabled>双皮奶</el-dropdown-item>\n      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("触发对象 ");

const dropdownvue_type_template_id_c4b52322_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可使用按钮触发下拉菜单。", -1);

const dropdownvue_type_template_id_c4b52322_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可。")])], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown>\n  <el-button type=\"primary\">\n    更多菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </el-button>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n<el-dropdown split-button type=\"primary\" @click=\"handleClick\">\n  更多菜单\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown {\n    vertical-align: top;\n  }\n  .el-dropdown + .el-dropdown {\n    margin-left: 15px;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleClick() {\n        alert('button click')\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const handleClick = () => {\n        alert('button click');\n      };\n      return {\n        handleClick,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("触发方式 ");

const dropdownvue_type_template_id_c4b52322_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "可以配置 click 激活或者 hover 激活。", -1);

const dropdownvue_type_template_id_c4b52322_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性设置为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "click"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("即可。")])], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-row class=\"block-col-2\">\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">hover 激活</span>\n    <el-dropdown>\n      <span class=\"el-dropdown-link\">\n        下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">黄金糕</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">狮子头</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\"\n            >螺蛳粉</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-check\">双皮奶</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\"\n            >蚵仔煎</el-dropdown-item\n          >\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">click 激活</span>\n    <el-dropdown trigger=\"click\">\n      <span class=\"el-dropdown-link\">\n        下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">黄金糕</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">狮子头</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\"\n            >螺蛳粉</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-check\">双皮奶</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\"\n            >蚵仔煎</el-dropdown-item\n          >\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n  <el-col :span=\"8\">\n    <span class=\"demonstration\">右键(contextmenu) 激活</span>\n    <el-dropdown trigger=\"contextmenu\">\n      <span class=\"el-dropdown-link\">\n        下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n      </span>\n      <template #dropdown>\n        <el-dropdown-menu>\n          <el-dropdown-item icon=\"el-icon-plus\">黄金糕</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus\">狮子头</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-plus-outline\"\n            >螺蛳粉</el-dropdown-item\n          >\n          <el-dropdown-item icon=\"el-icon-check\">双皮奶</el-dropdown-item>\n          <el-dropdown-item icon=\"el-icon-circle-check\"\n            >蚵仔煎</el-dropdown-item\n          >\n        </el-dropdown-menu>\n      </template>\n    </el-dropdown>\n  </el-col>\n</el-row>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n  .demonstration {\n    display: block;\n    color: var(--el-text-color-secondary);\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n</style>\n")], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("菜单隐藏方式 ");

const dropdownvue_type_template_id_c4b52322_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来配置。")], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("下拉菜单默认在点击菜单项后会被隐藏，将"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("可以关闭此功能。")])], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown :hide-on-click=\"false\">\n  <span class=\"el-dropdown-link\">\n    下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item disabled>双皮奶</el-dropdown-item>\n      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n")], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("指令事件 ");

const dropdownvue_type_template_id_c4b52322_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作", -1);

const dropdownvue_type_template_id_c4b52322_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown @command=\"handleCommand\">\n  <span class=\"el-dropdown-link\">\n    下拉菜单<i class=\"el-icon-arrow-down el-icon--right\"></i>\n  </span>\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item command=\"a\">黄金糕</el-dropdown-item>\n      <el-dropdown-item command=\"b\">狮子头</el-dropdown-item>\n      <el-dropdown-item command=\"c\">螺蛳粉</el-dropdown-item>\n      <el-dropdown-item command=\"d\" disabled>双皮奶</el-dropdown-item>\n      <el-dropdown-item command=\"e\" divided>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<style>\n  .el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n  }\n  .el-icon-arrow-down {\n    font-size: 12px;\n  }\n</style>\n\n<script>\n  export default {\n    methods: {\n      handleCommand(command) {\n        this.$message('click on item ' + command)\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const handleCommand = (command) => {\n        ElMessage(`click on item ${command}`);\n      };\n      return {\n        handleCommand,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const dropdownvue_type_template_id_c4b52322_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("不同尺寸 ");

const dropdownvue_type_template_id_c4b52322_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("额外的尺寸："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "medium"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来配置它们。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-dropdown split-button type=\"primary\">\n  默认尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"medium\" split-button type=\"primary\">\n  中等尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"small\" split-button type=\"primary\">\n  小型尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n\n<el-dropdown size=\"mini\" split-button type=\"primary\">\n  超小尺寸\n  <template #dropdown>\n    <el-dropdown-menu>\n      <el-dropdown-item>黄金糕</el-dropdown-item>\n      <el-dropdown-item>狮子头</el-dropdown-item>\n      <el-dropdown-item>螺蛳粉</el-dropdown-item>\n      <el-dropdown-item>双皮奶</el-dropdown-item>\n      <el-dropdown-item>蚵仔煎</el-dropdown-item>\n    </el-dropdown-menu>\n  </template>\n</el-dropdown>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown Attributes ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "可选值"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "默认值")])], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("菜单按钮类型，同 Button 组件(只在"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为 true 的情况下有效)")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("菜单尺寸，在"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("为 true 的情况下也对触发按钮生效")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "max-height"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "菜单最大高度"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "split-button"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "下拉触发元素呈现为按钮组"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否禁用"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "菜单弹出位置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "bottom")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "trigger"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "触发下拉的行为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hover, click, contextmenu"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hover")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-on-click"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "是否在点击菜单项后隐藏菜单"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-timeout"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "展开下拉菜单的延时（仅在 trigger 为 hover 时有效）"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "250")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "hide-timeout"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "收起下拉菜单的延时（仅在 trigger 为 hover 时有效）"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "150")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "tabindex", -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown 组件的 ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("tabindex");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "number", -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "0", -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown Slots ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件</td></tr><tr><td>dropdown</td><td>下拉列表，通常是 <code>&lt;el-dropdown-menu&gt;</code> 组件</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown Events ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td><code>split-button</code> 为 true 时，点击左侧按钮的回调</td><td>—</td></tr><tr><td>command</td><td>点击菜单项触发的事件回调</td><td>dropdown-item 的指令</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr></tbody></table>", 1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Dropdown Menu Item Attributes ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>command</td><td>指令</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>显示分割线</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

function dropdownvue_type_template_id_c4b52322_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", dropdownvue_type_template_id_c4b52322_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dropdown-xia-la-cai-dan",
    content: "Dropdown 下拉菜单",
    href: "#dropdown-xia-la-cai-dan",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown-xia-la-cai-dan"
    })]),
    _: 1
  }), dropdownvue_type_template_id_c4b52322_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), dropdownvue_type_template_id_c4b52322_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chu-fa-dui-xiang",
    content: "触发对象",
    href: "#chu-fa-dui-xiang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chu-fa-dui-xiang"
    })]),
    _: 1
  }), dropdownvue_type_template_id_c4b52322_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chu-fa-fang-shi",
    content: "触发方式",
    href: "#chu-fa-fang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chu-fa-fang-shi"
    })]),
    _: 1
  }), dropdownvue_type_template_id_c4b52322_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "cai-dan-yin-cang-fang-shi",
    content: "菜单隐藏方式",
    href: "#cai-dan-yin-cang-fang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cai-dan-yin-cang-fang-shi"
    })]),
    _: 1
  }), dropdownvue_type_template_id_c4b52322_hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhi-ling-shi-jian",
    content: "指令事件",
    href: "#zhi-ling-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhi-ling-shi-jian"
    })]),
    _: 1
  }), dropdownvue_type_template_id_c4b52322_hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bu-tong-chi-cun",
    content: "不同尺寸",
    href: "#bu-tong-chi-cun",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [dropdownvue_type_template_id_c4b52322_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bu-tong-chi-cun"
    })]),
    _: 1
  }), dropdownvue_type_template_id_c4b52322_hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
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
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_28, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_39, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_41]),
    _: 1
  })]), _hoisted_42, _hoisted_43, _hoisted_44])])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
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
    id: "dropdown-menu-item-attributes",
    content: "Dropdown Menu Item Attributes",
    href: "#dropdown-menu-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dropdown-menu-item-attributes"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md?vue&type=template&id=c4b52322

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/dropdown.md?vue&type=script&lang=ts

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
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" 更多菜单");

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      }, null, -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode(" 更多菜单 ");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("蚵仔煎");

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
      }, "hover 激活", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "click 激活", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      const _hoisted_15 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "右键(contextmenu) 激活", -1);

      const _hoisted_16 = /*#__PURE__*/_createElementVNode("span", {
        class: "el-dropdown-link"
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("蚵仔煎");

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
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

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
      }, [/*#__PURE__*/_createTextVNode(" 下拉菜单"), /*#__PURE__*/_createElementVNode("i", {
        class: "el-icon-arrow-down el-icon--right"
      })], -1);

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode(" 默认尺寸 ");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode(" 中等尺寸 ");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      const _hoisted_13 = /*#__PURE__*/_createTextVNode(" 小型尺寸 ");

      const _hoisted_14 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_15 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_16 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_17 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_18 = /*#__PURE__*/_createTextVNode("蚵仔煎");

      const _hoisted_19 = /*#__PURE__*/_createTextVNode(" 超小尺寸 ");

      const _hoisted_20 = /*#__PURE__*/_createTextVNode("黄金糕");

      const _hoisted_21 = /*#__PURE__*/_createTextVNode("狮子头");

      const _hoisted_22 = /*#__PURE__*/_createTextVNode("螺蛳粉");

      const _hoisted_23 = /*#__PURE__*/_createTextVNode("双皮奶");

      const _hoisted_24 = /*#__PURE__*/_createTextVNode("蚵仔煎");

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
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_6]),
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
              default: _withCtx(() => [_hoisted_8]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
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
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_7]),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "small",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_14]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_15]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_16]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_17]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_18]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_13]),
          _: 1
        }), _createVNode(_component_el_dropdown, {
          size: "mini",
          "split-button": "",
          type: "primary"
        }, {
          dropdown: _withCtx(() => [_createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [_createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_20]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_21]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_22]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_23]),
              _: 1
            }), _createVNode(_component_el_dropdown_item, null, {
              default: _withCtx(() => [_hoisted_24]),
              _: 1
            })]),
            _: 1
          })]),
          default: _withCtx(() => [_hoisted_19]),
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
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/dropdown.md



dropdownvue_type_script_lang_ts.render = dropdownvue_type_template_id_c4b52322_render

/* harmony default export */ var dropdown = __webpack_exports__["default"] = (dropdownvue_type_script_lang_ts);

/***/ })

}]);