(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[325],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message.md?vue&type=template&id=c5c19940

var messagevue_type_template_id_c5c19940_hoisted_1 = {
  class: "content element-doc"
};

var messagevue_type_template_id_c5c19940_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Message 消息提示 ");

var messagevue_type_template_id_c5c19940_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。", -1);

var messagevue_type_template_id_c5c19940_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基础用法 ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "从顶部出现，3 秒后自动消失。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element Plus 注册了一个"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open\">打开消息提示</el-button>\n  <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n</template>\n\n<script>\n  import { defineComponent, h } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent ({\n    setup() {\n      return {\n        open() {\n          ElMessage('只是一条消息提示')\n        },\n        openVn() {\n          ElMessage({\n            message: h('p', null, [\n              h('span', null, '内容可以是 '),\n              h('i', { style: 'color: teal' }, 'VNode')\n            ])\n          });\n        }\n      }\n    }\n  })\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent ({\n    setup() {\n      return {\n        open() {\n          ElMessage('只是一条消息提示')\n        },\n        openVn() {\n          ElMessage({\n            message: h('p', null, [\n              h('span', null, '内容可以是 '),\n              h('i', { style: 'color: teal' }, 'VNode')\n            ])\n          });\n        }\n      }\n    }\n  })\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("不同状态 ");

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "用来显示「成功、警告、消息、错误」类的操作反馈。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("字段可以定义不同的状态，默认为"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。此时正文内容以"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("字段的情况下像"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("那样直接调用。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open1\">成功</el-button>\n  <el-button :plain=\"true\" @click=\"open2\">警告</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">消息</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">错误</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          ElMessage.success({\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          });\n        },\n        open2() {\n          ElMessage.warning({\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          });\n        },\n        open3() {\n          ElMessage('这是一条消息提示');\n        },\n        open4() {\n          ElMessage.error('错了哦，这是一条错误消息');\n        }\n      }\n    }\n  })\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          ElMessage.success({\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          });\n        },\n        open2() {\n          ElMessage.warning({\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          });\n        },\n        open3() {\n          ElMessage('这是一条消息提示');\n        },\n        open4() {\n          ElMessage.error('错了哦，这是一条错误消息');\n        }\n      }\n    }\n  })\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("可关闭 ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "可以添加关闭按钮。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("字段。此外，和 Notification 一样，Message 拥有可控的"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("，设置"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("为不会被自动关闭，默认为 3000 毫秒。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open1\">消息</el-button>\n  <el-button :plain=\"true\" @click=\"open2\">成功</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">警告</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">错误</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          ElMessage({\n            showClose: true,\n            message: '这是一条消息提示'\n          });\n        },\n\n        open2() {\n          ElMessage({\n            showClose: true,\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          });\n        },\n\n        open3() {\n          ElMessage({\n            showClose: true,\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          });\n        },\n\n        open4() {\n          ElMessage({\n            showClose: true,\n            message: '错了哦，这是一条错误消息',\n            type: 'error'\n          });\n        }\n      }\n    }\n  })\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          ElMessage({\n            showClose: true,\n            message: '这是一条消息提示'\n          });\n        },\n\n        open2() {\n          ElMessage({\n            showClose: true,\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          });\n        },\n\n        open3() {\n          ElMessage({\n            showClose: true,\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          });\n        },\n\n        open4() {\n          ElMessage({\n            showClose: true,\n            message: '错了哦，这是一条错误消息',\n            type: 'error'\n          });\n        }\n      }\n    }\n  })\n\n</setup>\n-->\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("文字居中 ");

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性让文字水平居中。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openCenter\">文字居中</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        openCenter() {\n          ElMessage({\n            message: '居中的文字',\n            center: true\n          });\n        }\n      }\n    }\n  })\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        openCenter() {\n          ElMessage({\n            message: '居中的文字',\n            center: true\n          });\n        }\n      }\n    }\n  })\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("使用 HTML 片段 ");

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性支持传入 HTML 片段")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性设置为 true，"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 就会被当作 HTML 片段处理。")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openHTML\">使用 HTML 片段</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        openHTML() {\n          ElMessage({\n            dangerouslyUseHTMLString: true,\n            message: '<strong>这是 <i>HTML</i> 片段</strong>'\n          });\n        }\n      }\n    }\n  })\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        openHTML() {\n          ElMessage({\n            dangerouslyUseHTMLString: true,\n            message: '<strong>这是 <i>HTML</i> 片段</strong>'\n          });\n        }\n      }\n    }\n  })\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = {
  class: "warning"
};

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 ");

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("XSS 攻击");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。因此在 ");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 打开的情况下，请确保 ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 的内容是可信的，");

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "永远不要", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("将用户提交的内容赋值给 ");

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性。");

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("全局方法 ");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Element Plus 为 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "app.config.globalProperties"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 添加了全局方法 $message。因此在 vue instance 中可以采用在 method 中调用 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "this.$message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 方法唤起 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ElMessage"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("单独引用 ");

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessage } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code><span class=\"lang-mark\">js</span></pre><p>此时调用方法为 <code>ElMessage(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>ElMessage.success(options)</code>。并且可以调用 <code>ElMessage.closeAll()</code> 手动关闭所有实例。</p>", 2);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Options ");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>自定义图标的类名，会覆盖 <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>文字是否居中</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>关闭时的回调函数, 参数为被关闭的 message 实例</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>Message 距离窗口顶部的偏移量</td><td>number</td><td>—</td><td>20</td></tr></tbody></table>", 1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("方法 ");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<p>调用 <code>ElMessage</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Message</td></tr></tbody></table>", 2);

function messagevue_type_template_id_c5c19940_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", messagevue_type_template_id_c5c19940_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "message-xiao-xi-ti-shi",
    content: "Message 消息提示",
    href: "#message-xiao-xi-ti-shi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [messagevue_type_template_id_c5c19940_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#message-xiao-xi-ti-shi"
      })];
    }),
    _: 1
  }), messagevue_type_template_id_c5c19940_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [messagevue_type_template_id_c5c19940_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-chu-yong-fa"
      })];
    }),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "bu-tong-zhuang-tai",
    content: "不同状态",
    href: "#bu-tong-zhuang-tai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#bu-tong-zhuang-tai"
      })];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ke-guan-bi",
    content: "可关闭",
    href: "#ke-guan-bi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ke-guan-bi"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "wen-zi-ju-zhong",
    content: "文字居中",
    href: "#wen-zi-ju-zhong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#wen-zi-ju-zhong"
      })];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "shi-yong-html-pian-duan",
    content: "使用 HTML 片段",
    href: "#shi-yong-html-pian-duan",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#shi-yong-html-pian-duan"
      })];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_23, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_24, _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://en.wikipedia.org/wiki/Cross-site_scripting"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "quan-ju-fang-fa",
    content: "全局方法",
    href: "#quan-ju-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#quan-ju-fang-fa"
      })];
    }),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "dan-du-yin-yong",
    content: "单独引用",
    href: "#dan-du-yin-yong",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#dan-du-yin-yong"
      })];
    }),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "options",
    content: "Options",
    href: "#options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#options"
      })];
    }),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "fang-fa",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_43, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#fang-fa"
      })];
    }),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/message.md?vue&type=template&id=c5c19940

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message.md?vue&type=script&lang=ts


/* harmony default export */ var messagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("打开消息提示");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("VNode");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openVn
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          h = vue_esm_browser_prod["t" /* h */];

      var _require = __webpack_require__(114),
          ElMessage = _require.ElMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            open: function open() {
              ElMessage('只是一条消息提示');
            },
            openVn: function openVn() {
              ElMessage({
                message: h('p', null, [h('span', null, '内容可以是 '), h('i', {
                  style: 'color: teal'
                }, 'VNode')])
              });
            }
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("成功");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("警告");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("消息");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("错误");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */];

      var _require2 = __webpack_require__(114),
          ElMessage = _require2.ElMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            open1: function open1() {
              ElMessage.success({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              });
            },
            open2: function open2() {
              ElMessage.warning({
                message: '警告哦，这是一条警告消息',
                type: 'warning'
              });
            },
            open3: function open3() {
              ElMessage('这是一条消息提示');
            },
            open4: function open4() {
              ElMessage.error('错了哦，这是一条错误消息');
            }
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("消息");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("成功");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("警告");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("错误");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */];

      var _require3 = __webpack_require__(114),
          ElMessage = _require3.ElMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            open1: function open1() {
              ElMessage({
                showClose: true,
                message: '这是一条消息提示'
              });
            },
            open2: function open2() {
              ElMessage({
                showClose: true,
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              });
            },
            open3: function open3() {
              ElMessage({
                showClose: true,
                message: '警告哦，这是一条警告消息',
                type: 'warning'
              });
            },
            open4: function open4() {
              ElMessage({
                showClose: true,
                message: '错了哦，这是一条错误消息',
                type: 'error'
              });
            }
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("文字居中");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openCenter
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */];

      var _require4 = __webpack_require__(114),
          ElMessage = _require4.ElMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            openCenter: function openCenter() {
              ElMessage({
                message: '居中的文字',
                center: true
              });
            }
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("使用 HTML 片段");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openHTML
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */];

      var _require5 = __webpack_require__(114),
          ElMessage = _require5.ElMessage;

      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            openHTML: function openHTML() {
              ElMessage({
                dangerouslyUseHTMLString: true,
                message: '<strong>这是 <i>HTML</i> 片段</strong>'
              });
            }
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/message.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/message.md



messagevue_type_script_lang_ts.render = messagevue_type_template_id_c5c19940_render

/* harmony default export */ var message = __webpack_exports__["default"] = (messagevue_type_script_lang_ts);

/***/ })

}]);