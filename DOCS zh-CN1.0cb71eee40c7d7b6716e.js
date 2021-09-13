(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[290],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/alert.md?vue&type=template&id=9e221ef8

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alert 警告 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "用于页面中展示重要的提示信息。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("基本用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "页面中的非浮层元素，不会自动消失。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alert 组件提供四种主题，由"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性指定，默认值为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"成功提示的文案\" type=\"success\"> </el-alert>\n  <el-alert title=\"消息提示的文案\" type=\"info\"> </el-alert>\n  <el-alert title=\"警告提示的文案\" type=\"warning\"> </el-alert>\n  <el-alert title=\"错误提示的文案\" type=\"error\"> </el-alert>\n</template>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("主题 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alert 组件提供了两个不同的主题："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("和"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来改变主题，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"成功提示的文案\" type=\"success\" effect=\"dark\"> </el-alert>\n  <el-alert title=\"消息提示的文案\" type=\"info\" effect=\"dark\"> </el-alert>\n  <el-alert title=\"警告提示的文案\" type=\"warning\" effect=\"dark\"> </el-alert>\n  <el-alert title=\"错误提示的文案\" type=\"error\" effect=\"dark\"> </el-alert>\n</template>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义关闭按钮 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "自定义关闭按钮为文字或其他符号。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "closable"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性决定是否可关闭，接受"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。你可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来代替右侧的关闭图标，注意："), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close-text"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("必须为文本。设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("事件来设置关闭时的回调。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"不可关闭的 alert\" type=\"success\" :closable=\"false\">\n  </el-alert>\n  <el-alert title=\"自定义 close-text\" type=\"info\" close-text=\"知道了\">\n  </el-alert>\n  <el-alert title=\"设置了回调的 alert\" type=\"warning\" @close=\"hello\">\n  </el-alert>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const hello = () => {\n        alert('Hello World!')\n      }\n      return {\n        hello,\n      }\n    },\n  })\n</script>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带有 icon ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "表示某种状态时提升可读性。", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("通过设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "show-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。")])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"成功提示的文案\" type=\"success\" show-icon> </el-alert>\n  <el-alert title=\"消息提示的文案\" type=\"info\" show-icon> </el-alert>\n  <el-alert title=\"警告提示的文案\" type=\"warning\" show-icon> </el-alert>\n  <el-alert title=\"错误提示的文案\" type=\"error\" show-icon> </el-alert>\n</template>\n")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("文字居中 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 属性让文字水平居中。")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert title=\"成功提示的文案\" type=\"success\" center show-icon> </el-alert>\n  <el-alert title=\"消息提示的文案\" type=\"info\" center show-icon> </el-alert>\n  <el-alert title=\"警告提示的文案\" type=\"warning\" center show-icon> </el-alert>\n  <el-alert title=\"错误提示的文案\" type=\"error\" center show-icon> </el-alert>\n</template>\n")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带有辅助性文字介绍 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "包含标题和内容，解释更详细的警告。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("除了必填的"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性外，你可以设置"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "description"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"带辅助性文字介绍\"\n    type=\"success\"\n    description=\"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……\"\n  >\n  </el-alert>\n</template>\n")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("带有 icon 和辅助性文字介绍 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "最后，这是一个同时具有 icon 和辅助性文字的样例。")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-alert\n    title=\"成功提示的文案\"\n    type=\"success\"\n    description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n    show-icon\n  >\n  </el-alert>\n  <el-alert\n    title=\"消息提示的文案\"\n    type=\"info\"\n    description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n    show-icon\n  >\n  </el-alert>\n  <el-alert\n    title=\"警告提示的文案\"\n    type=\"warning\"\n    description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n    show-icon\n  >\n  </el-alert>\n  <el-alert\n    title=\"错误提示的文案\"\n    type=\"error\"\n    description=\"文字说明文字说明文字说明文字说明文字说明文字说明\"\n    show-icon\n  >\n  </el-alert>\n</template>\n")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>description</td><td>辅助性文字。也可通过默认 slot 传入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>center</td><td>文字是否居中</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-text</td><td>关闭按钮自定义文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-icon</td><td>是否显示图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>effect</td><td>选择提供的主题</td><td>string</td><td>light/dark</td><td>light</td></tr></tbody></table>", 1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "描述")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "标题的内容")])])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "事件名称"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "说明"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "回调参数")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "close"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "关闭 alert 时触发的事件"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")])])], -1);

function alertvue_type_template_id_9e221ef8_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "alert-jing-gao",
    content: "Alert 警告",
    href: "#alert-jing-gao",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#alert-jing-gao"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ji-ben-yong-fa",
    content: "基本用法",
    href: "#ji-ben-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-ben-yong-fa"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zhu-ti",
    content: "主题",
    href: "#zhu-ti",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhu-ti"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-guan-bi-an-niu",
    content: "自定义关闭按钮",
    href: "#zi-ding-yi-guan-bi-an-niu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-guan-bi-an-niu"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-you-icon",
    content: "带有 icon",
    href: "#dai-you-icon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-you-icon"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_19]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "wen-zi-ju-zhong",
    content: "文字居中",
    href: "#wen-zi-ju-zhong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#wen-zi-ju-zhong"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-you-fu-zhu-xing-wen-zi-jie-shao",
    content: "带有辅助性文字介绍",
    href: "#dai-you-fu-zhu-xing-wen-zi-jie-shao",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-you-fu-zhu-xing-wen-zi-jie-shao"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_26]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao",
    content: "带有 icon 和辅助性文字介绍",
    href: "#dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_28]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/alert.md?vue&type=template&id=9e221ef8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/alert.md?vue&type=script&lang=ts

/* harmony default export */ var alertvue_type_script_lang_ts = ({
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
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "成功提示的文案",
          type: "success"
        }), _createVNode(_component_el_alert, {
          title: "消息提示的文案",
          type: "info"
        }), _createVNode(_component_el_alert, {
          title: "警告提示的文案",
          type: "warning"
        }), _createVNode(_component_el_alert, {
          title: "错误提示的文案",
          type: "error"
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "成功提示的文案",
          type: "success",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "消息提示的文案",
          type: "info",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "警告提示的文案",
          type: "warning",
          effect: "dark"
        }), _createVNode(_component_el_alert, {
          title: "错误提示的文案",
          type: "error",
          effect: "dark"
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "不可关闭的 alert",
          type: "success",
          closable: false
        }), _createVNode(_component_el_alert, {
          title: "自定义 close-text",
          type: "info",
          "close-text": "知道了"
        }), _createVNode(_component_el_alert, {
          title: "设置了回调的 alert",
          type: "warning",
          onClose: _ctx.hello
        }, null, 8, ["onClose"])]);
      }

      const {
        defineComponent
      } = vue_esm_browser_prod;
      const democomponentExport = defineComponent({
        setup() {
          const hello = () => {
            alert('Hello World!');
          };

          return {
            hello
          };
        }

      });
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "成功提示的文案",
          type: "success",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "消息提示的文案",
          type: "info",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "警告提示的文案",
          type: "warning",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "错误提示的文案",
          type: "error",
          "show-icon": ""
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
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "成功提示的文案",
          type: "success",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "消息提示的文案",
          type: "info",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "警告提示的文案",
          type: "warning",
          center: "",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "错误提示的文案",
          type: "error",
          center: "",
          "show-icon": ""
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "带辅助性文字介绍",
          type: "success",
          description: "这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_alert = _resolveComponent("el-alert");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_alert, {
          title: "成功提示的文案",
          type: "success",
          description: "文字说明文字说明文字说明文字说明文字说明文字说明",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "消息提示的文案",
          type: "info",
          description: "文字说明文字说明文字说明文字说明文字说明文字说明",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "警告提示的文案",
          type: "warning",
          description: "文字说明文字说明文字说明文字说明文字说明文字说明",
          "show-icon": ""
        }), _createVNode(_component_el_alert, {
          title: "错误提示的文案",
          type: "error",
          description: "文字说明文字说明文字说明文字说明文字说明文字说明",
          "show-icon": ""
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
// CONCATENATED MODULE: ./website/docs/zh-CN/alert.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/alert.md



alertvue_type_script_lang_ts.render = alertvue_type_template_id_9e221ef8_render

/* harmony default export */ var zh_CN_alert = __webpack_exports__["default"] = (alertvue_type_script_lang_ts);

/***/ })

}]);