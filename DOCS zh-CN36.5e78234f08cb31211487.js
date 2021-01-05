(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[226],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message.md?vue&type=template&id=6d6d2f03

var messagevue_type_template_id_6d6d2f03_hoisted_1 = {
  class: "content element-doc"
};

var messagevue_type_template_id_6d6d2f03_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "message-xiao-xi-ti-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#message-xiao-xi-ti-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Message 消息提示")], -1);

var messagevue_type_template_id_6d6d2f03_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。", -1);

var messagevue_type_template_id_6d6d2f03_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "从顶部出现，3 秒后自动消失。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element Plus 注册了一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "$message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open\">打开消息提示</el-button>\n  <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n</template>\n\n<script>\n  import { defineComponent, h } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent ({\n    setup() {\n      return {\n        open() {\n          ElMessage('只是一条消息提示')\n        },\n        openVn() {\n          ElMessage({\n            message: h('p', null, [\n              h('span', null, '内容可以是 '),\n              h('i', { style: 'color: teal' }, 'VNode')\n            ])\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bu-tong-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 不同状态")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用来显示「成功、警告、消息、错误」类的操作反馈。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段可以定义不同的状态，默认为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。此时正文内容以"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段的情况下像"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("那样直接调用。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open1\">成功</el-button>\n  <el-button :plain=\"true\" @click=\"open2\">警告</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">消息</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">错误</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          ElMessage.success({\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          });\n        },\n        open2() {\n          ElMessage.warning({\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          });\n        },\n        open3() {\n          ElMessage('这是一条消息提示');\n        },\n        open4() {\n          ElMessage.error('错了哦，这是一条错误消息');\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ke-guan-bi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ke-guan-bi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可关闭")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可以添加关闭按钮。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("字段。此外，和 Notification 一样，Message 拥有可控的"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("为不会被自动关闭，默认为 3000 毫秒。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open1\">消息</el-button>\n  <el-button :plain=\"true\" @click=\"open2\">成功</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">警告</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">错误</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n\n  export default defineComponent({\n    setup() {\n      return {\n        open1() {\n          ElMessage({\n            showClose: true,\n            message: '这是一条消息提示'\n          });\n        },\n\n        open2() {\n          ElMessage({\n            showClose: true,\n            message: '恭喜你，这是一条成功消息',\n            type: 'success'\n          });\n        },\n\n        open3() {\n          ElMessage({\n            showClose: true,\n            message: '警告哦，这是一条警告消息',\n            type: 'warning'\n          });\n        },\n\n        open4() {\n          ElMessage({\n            showClose: true,\n            message: '错了哦，这是一条错误消息',\n            type: 'error'\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "wen-zi-ju-zhong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wen-zi-ju-zhong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 文字居中")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性让文字水平居中。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openCenter\">文字居中</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        openCenter() {\n          ElMessage({\n            message: '居中的文字',\n            center: true\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "shi-yong-html-pian-duan"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#shi-yong-html-pian-duan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 使用 HTML 片段")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性支持传入 HTML 片段")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("将"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性设置为 true，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 就会被当作 HTML 片段处理。")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openHTML\">使用 HTML 片段</el-button>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElMessage } from 'element-plus'\n  export default defineComponent({\n    setup() {\n      return {\n        openHTML() {\n          ElMessage({\n            dangerouslyUseHTMLString: true,\n            message: '<strong>这是 <i>HTML</i> 片段</strong>'\n          });\n        }\n      }\n    }\n  })\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<div class=\"warning\"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div><h3 id=\"quan-ju-fang-fa\"><a class=\"header-anchor\" href=\"#quan-ju-fang-fa\">¶</a> 全局方法</h3><p>Element Plus 为 <code>app.config.globalProperties</code> 添加了全局方法 $message。因此在 vue instance 中可以采用在 method 中调用 <code>this.$message</code> 方法唤起 <code>ElMessage</code>。</p><h3 id=\"dan-du-yin-yong\"><a class=\"header-anchor\" href=\"#dan-du-yin-yong\">¶</a> 单独引用</h3><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessage } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>此时调用方法为 <code>ElMessage(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>ElMessage.success(options)</code>。并且可以调用 <code>ElMessage.closeAll()</code> 手动关闭所有实例。</p><h3 id=\"options\"><a class=\"header-anchor\" href=\"#options\">¶</a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>自定义图标的类名，会覆盖 <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>文字是否居中</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>关闭时的回调函数, 参数为被关闭的 message 实例</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>Message 距离窗口顶部的偏移量</td><td>number</td><td>—</td><td>20</td></tr></tbody></table><h3 id=\"fang-fa\"><a class=\"header-anchor\" href=\"#fang-fa\">¶</a> 方法</h3><p>调用 <code>ElMessage</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Message</td></tr></tbody></table>", 11);

function messagevue_type_template_id_6d6d2f03_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", messagevue_type_template_id_6d6d2f03_hoisted_1, [messagevue_type_template_id_6d6d2f03_hoisted_2, messagevue_type_template_id_6d6d2f03_hoisted_3, messagevue_type_template_id_6d6d2f03_hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/message.md?vue&type=template&id=6d6d2f03

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/message.md?vue&type=script&lang=ts


/* harmony default export */ var messagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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

      var defineComponent = vue_esm_browser["q" /* defineComponent */],
          h = vue_esm_browser["s" /* h */];

      var _require = __webpack_require__(37),
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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

      var defineComponent = vue_esm_browser["q" /* defineComponent */];

      var _require2 = __webpack_require__(37),
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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

      var defineComponent = vue_esm_browser["q" /* defineComponent */];

      var _require3 = __webpack_require__(37),
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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

      var defineComponent = vue_esm_browser["q" /* defineComponent */];

      var _require4 = __webpack_require__(37),
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
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

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

      var defineComponent = vue_esm_browser["q" /* defineComponent */];

      var _require5 = __webpack_require__(37),
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



messagevue_type_script_lang_ts.render = messagevue_type_template_id_6d6d2f03_render

/* harmony default export */ var message = __webpack_exports__["default"] = (messagevue_type_script_lang_ts);

/***/ })

}]);